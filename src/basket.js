const inventory = require('./inventory.js')

class Basket {
  constructor(initialItems = []) {
    this.items = initialItems
    this.capacity = 5
  }

  addItem(sku) {
    if (this.items.length < this.capacity) {
      const newItem = inventory.find((bagel) => bagel.sku === sku)
      return this.items.push(newItem)
    } else {
      return 'Sorry, your basket is full.'
    }
  }

  removeItem(sku) {
    let indexToRemove = null
    this.items.find((bagel, index) =>
      bagel.sku === sku ? (indexToRemove = index) : null
    )
    if (indexToRemove === null) {
      return "Item Doesn't Exist"
    } else {
      return this.items.splice(indexToRemove, 1)
    }
  }

  setBasketCapacity(num) {
    this.capacity = num
  }
}

module.exports = {
  Basket
}
