import React, { Component } from 'react';

export default class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'tomato';
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the home page</p>
      </div>
    );
  }
}
