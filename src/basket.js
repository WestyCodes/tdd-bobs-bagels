const inventory = require('./inventory.js')

class Basket {
  constructor(initialItems = []) {
    this.items = initialItems
    this.capacity = 5
  }

  addItem(sku, quantity = 1) {
    if (this.items.length + quantity < this.capacity) {
      const newItem = inventory.find((bagel) => bagel.sku === sku)
      for (let i = 0; i < quantity; i++) {
        this.items.push(newItem)
      }
      return this.items
    } else {
      return 'Sorry, your basket cannot hold that many bagels'
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

  bagelPrice(sku) {
    const newItem = inventory.find((bagel) => bagel.sku === sku)
    return Number(newItem.price)
  }

  totalSum() {
    let total = 0
    this.items.forEach((bagel) => {
      total += Number(bagel.price)
    })
    return total
  }
}

module.exports = {
  Basket
}
