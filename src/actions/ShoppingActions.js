var alt = require('../alt.js');

class ShoppingActions {
  updateShopping(shopping) {
    return shopping;
  }
}

module.exports = alt.createActions(ShoppingActions);
