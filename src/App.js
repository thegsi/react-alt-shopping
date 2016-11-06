import React, { Component } from 'react';
var ShoppingStore = require('./stores/ShoppingStore.js');
var ShoppingActions = require('./actions/ShoppingActions.js');

var App = React.createClass({
  getInitialState() {
    return ShoppingStore.getState();
  },

  componentDidMount() {
    ShoppingStore.listen(this.onChange);
  },

  componentWillUnmount() {
    ShoppingStore.unlisten(this.onChange)
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <ul>
        {this.state.shopping.map((item, i) => {
          return (
            <li id={item.id}>
              <h3>{item.name}</h3>
              <p>{item.required ? 'yes' : 'no'}</p>
            </li>
          );
        })}
      </ul>
    );
  }
})

module.exports = App;
