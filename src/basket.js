const inventory = require('./inventory.js')

class Basket {
  constructor(initialItems = []) {
    this.items = initialItems
  }

  addItem(sku) {
    const newItem = inventory.find((bagel) => bagel.sku === sku)
    this.items.push(newItem)
  }

  removeItem(sku) {
    let indexToRemove = null
    this.items.find((bagel, index) =>
      bagel.sku === sku ? (indexToRemove = index) : null
    )
    this.items.splice(indexToRemove, 1)
  }
}

module.exports = {
  Basket
}
