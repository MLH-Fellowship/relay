/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const React = require('react');

class Playground extends React.Component {
  render() {
    return (
      // calc(100vh - 50px) is to offset the navbar height.
      <div style={{width:"100%", height:'calc(100vh - 50px)'}}>
        <iframe
          src="https://codesandbox.io/s/github/MLH-Fellowship/relay-website-example"
          style={{width:"100%", height:'100%', border: 0, borderRadius: 0, overflow:"hidden"}}
          title="MLH-Fellowship/relay-website-example"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
      </div>
    );
  }
}

module.exports = Playground;
