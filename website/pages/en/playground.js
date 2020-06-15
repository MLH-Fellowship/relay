/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const CompLibrary = require('../../core/CompLibrary.js');
const React = require('react');
const Container = CompLibrary.Container;

class Playground extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            This is where the plaground goes.
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Playground;
