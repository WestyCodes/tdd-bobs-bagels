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
    let quantityBGLO = 0
    let quantityBGLP = 0
    let quantityBGLE = 0
    let quantityCOF = 0

    this.items.forEach((bagel) => {
      if (bagel.sku === 'BGLO') {
        quantityBGLO++
      } else if (bagel.sku === 'BGLP') {
        quantityBGLP++
      } else if (bagel.sku === 'BGLE') {
        quantityBGLE++
      } else if (bagel.sku === 'COF') {
        quantityCOF++
      }
    })

    while (quantityCOF > 0) {
      if (quantityBGLP > 0) {
        total += 1.25
        quantityCOF -= 1
        quantityBGLP -= 1
      } else {
        total += 0.99
        quantityCOF -= 1
      }
    }

    while (quantityBGLO > 0) {
      if (quantityBGLO >= 6) {
        total += 2.49
        quantityBGLO -= 6
      } else {
        total += quantityBGLO * 0.49
        quantityBGLO -= quantityBGLO
      }
    }

    while (quantityBGLP > 0) {
      if (quantityBGLP >= 12) {
        total += 3.99
        quantityBGLP -= 12
      } else {
        total += quantityBGLP * 0.39
        quantityBGLP -= quantityBGLP
      }
    }

    while (quantityBGLE > 0) {
      if (quantityBGLE >= 6) {
        total += 2.49
        quantityBGLE -= 6
      } else {
        total += quantityBGLE * 0.49
        quantityBGLE -= quantityBGLE
      }
    }

    return Number(total.toFixed(2))
  }

  specialOffer(sku) {
    if (sku === 'BGLP') {
      return '12 Plain Bagels for 3.99, or 1 Coffee and 1 Plain Bagel for 1.25'
    } else if (sku === 'BGLE') {
      return '6 Everything Bagels for 2.49'
    } else if (sku === 'BGLO') {
      return '6 Onion Bagels for 2.49'
    } else if (sku === 'COF') {
      return '1 Coffee and 1 Plain Bagel for 1.25'
    }
  }
}

module.exports = {
  Basket
}
