import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h1>What are you doing here? </h1>
        <div> {moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
