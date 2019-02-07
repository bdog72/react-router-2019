import React, { Component } from 'react';

export default class Contact extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = 'yellow';
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>Contact us for more info</p>
      </div>
    );
  }
}
