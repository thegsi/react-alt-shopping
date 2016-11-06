var alt = require('../alt.js');
var ShoppingActions = require('../actions/ShoppingActions.js');

class ShoppingStore {
  constructor() {
    this.shopping = [
      {id: 1, name:'eggs', required: false},
      {id: 2, name:'flour', required: true},
      {id: 3, name:'milk', required: false},
    ];

    this.bindListeners({
      handleUpdateShopping: ShoppingActions.UPDATE_SHOPPING
    });
  }

  handleUpdateShopping(shopping) {
    this.shopping = shopping;
  }

}

module.exports = alt.createStore(ShoppingStore, 'ShoppingStore');
