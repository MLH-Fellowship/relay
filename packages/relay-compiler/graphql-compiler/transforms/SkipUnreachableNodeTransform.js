/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule SkipUnreachableNodeTransform
 * @flow
 * @format
 */

'use strict';

const GraphQLCompilerContext = require('../core/GraphQLCompilerContext');

import type {Condition, Fragment, Node, Selection} from '../core/GraphQLIR';

type ConditionResult = 'fail' | 'pass' | 'variable';

const FAIL = 'fail';
const PASS = 'pass';
const VARIABLE = 'variable';

/**
 * A tranform that removes unreachable IR nodes from all documents in a corpus.
 * The following nodes are removed:
 * - Any node with `@include(if: false)`
 * - Any node with `@skip(if: true)`
 * - Any node with empty `selections`
 */
function skipUnreachableNodeTransform(
  context: GraphQLCompilerContext,
): GraphQLCompilerContext {
  const documents = context.documents();
  const fragments: Map<string, ?Fragment> = new Map();
  const nextContext = documents.reduce((ctx: GraphQLCompilerContext, node) => {
    if (node.kind === 'Root') {
      const transformedNode = transformNode(context, fragments, node);
      if (transformedNode) {
        return ctx.add(transformedNode);
      }
    }
    return ctx;
  }, new GraphQLCompilerContext(context.schema));
  return (Array.from(fragments.values()): Array<?Fragment>).reduce(
    (ctx: GraphQLCompilerContext, fragment) =>
      fragment ? ctx.add(fragment) : ctx,
    nextContext,
  );
}

function transformNode<T: Node>(
  context: GraphQLCompilerContext,
  fragments: Map<string, ?Fragment>,
  node: T,
): ?T {
  const queue: Array<Selection> = [...node.selections];
  let selections;
  while (queue.length) {
    const selection: Selection = queue.shift();
    let nextSelection;
    if (selection.kind === 'Condition') {
      const match = testCondition(selection);
      if (match === PASS) {
        queue.unshift(...selection.selections);
      } else if (match === VARIABLE) {
        nextSelection = transformNode(context, fragments, selection);
      }
    } else if (selection.kind === 'FragmentSpread') {
      // Skip fragment spreads if the referenced fragment is empty
      if (!fragments.has(selection.name)) {
        const fragment = context.getFragment(selection.name);
        const nextFragment = transformNode(context, fragments, fragment);
        fragments.set(selection.name, nextFragment);
      }
      if (fragments.get(selection.name)) {
        nextSelection = selection;
      }
    } else if (
      selection.kind === 'LinkedField' ||
      selection.kind === 'InlineFragment'
    ) {
      nextSelection = transformNode(context, fragments, selection);
    } else {
      // scalar field
      nextSelection = selection;
    }
    if (nextSelection) {
      selections = selections || [];
      selections.push(nextSelection);
    }
  }
  if (selections) {
    return ({
      ...node,
      selections,
    }: $FlowIssue);
  }
  return null;
}

/**
 * Determines whether a condition statically passes/fails or is unknown
 * (variable).
 */
function testCondition(condition: Condition): ConditionResult {
  if (condition.condition.kind === 'Variable') {
    return VARIABLE;
  }
  return condition.condition.value === condition.passingValue ? PASS : FAIL;
}

module.exports = {
  transform: skipUnreachableNodeTransform,
};
