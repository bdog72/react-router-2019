import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'blue';
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is about us</p>
      </div>
    );
  }
}
