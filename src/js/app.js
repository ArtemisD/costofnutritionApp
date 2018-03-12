import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from Diana
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
