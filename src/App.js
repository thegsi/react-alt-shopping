import React, { Component } from 'react';
var ShoppingStore = require('./stores/ShoppingStore.js');
var ShoppingActions = require('./actions/ShoppingActions.js'),
    mui = require('material-ui'),
    Paper = mui.Paper,
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField,
    FlatButton = mui.FlatButton,
    Snackbar = mui.Snackbar;

var App = React.createClass({
  getInitialState() {
    console.log(ShoppingStore.getState());
    var state = ShoppingStore.getState();
    state.textFieldValue = '';
    return state;
  },

  componentDidMount() {
    ShoppingStore.listen(this._handleTextFieldChange);
  },

  componentWillUnmount() {
    ShoppingStore.unlisten(this._handleTextFieldChange)
  },

  _handleTextFieldChange: function(e) {
    if(!e.target) return;
    console.log(ShoppingStore.getState());
    this.state.textFieldValue = {id: 1, name: e.target.value, required: true};
  },

  _handleClick: function(e) {
    //e.prevent.Default();
    var clonedShopping = JSON.parse(JSON.stringify(this.state.shopping));
    var clonedTextValue = JSON.parse(JSON.stringify(this.state.textFieldValue));
    debugger;
    clonedShopping.push(clonedTextValue);
    ShoppingActions.updateShopping(clonedShopping);
  },

  render() {
    return (
      <div>
        <TextField id="text" value={this.state.textFieldValue.name} onChange={this._handleTextFieldChange}/>
        <FlatButton onClick={this._handleClick}>Push</FlatButton>
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
      </div>
    );
  }
})



module.exports = App;
