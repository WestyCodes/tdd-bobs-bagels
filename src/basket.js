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

  totalSavings() {
    let total = 0
    this.items.forEach((bagel) => {
      total += Number(bagel.price)
    })
    const totalSum = total - this.totalSum()
    return Number(totalSum.toFixed(2))
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

  printReceipt() {
    const BGLO = { quantity: 0, bagel: {} }
    const BGLP = { quantity: 0, bagel: {} }
    const BGLE = { quantity: 0, bagel: {} }
    const COF = { quantity: 0, bagel: {} }
    const BGSE = { quantity: 0, bagel: {} }
    const BGSS = { quantity: 0, bagel: {} }

    this.items.forEach((bagel) => {
      if (bagel.sku === 'BGLO') {
        BGLO.quantity++
        BGLO.bagel = bagel
      } else if (bagel.sku === 'BGLP') {
        BGLP.quantity++
        BGLP.bagel = bagel
      } else if (bagel.sku === 'BGLE') {
        BGLE.quantity++
        BGLE.bagel = bagel
      } else if (bagel.sku === 'COF') {
        COF.quantity++
        COF.bagel = bagel
      } else if (bagel.sku === 'BGSE') {
        BGSE.quantity++
        BGSE.bagel = bagel
      } else if (bagel.sku === 'BGSS') {
        BGSS.quantity++
        BGSS.bagel = bagel
      }
    })

    const title = `    ~~~ Bob's Bagels ~~~    `
    const date = new Date()
    const currentDate =
      date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    //   ' ' +
    //   date.getHours() +
    //   ':' +
    //   date.getMinutes() +
    //   ':' +
    //   date.getSeconds()
    const receiptDate = `          ${currentDate}          `
    const lineBreak = `----------------------------`
    const savings = `Total Savings         -£${this.totalSavings()}`
    const total = `Total                  £${this.totalSum()}`
    const thankYou = `         Thank you          `
    const yourOrder = `      for your order!       `

    const result = []
    result.push(title, receiptDate, lineBreak)

    if (BGLO.quantity > 0) {
      let item = ``
      item = `${BGLO.bagel.variant} ${BGLO.bagel.name}        ${
        BGLO.quantity
      }   £${BGLO.bagel.price * BGLO.quantity}`
      result.push(item)
    }

    if (BGLP.quantity > 0) {
      let item = ``
      item = `${BGLP.bagel.variant} ${BGLP.bagel.name}        ${
        BGLP.quantity
      }   £${BGLP.bagel.price * BGLP.quantity}`
      result.push(item)
    }

    if (BGLE.quantity > 0) {
      let item = ``
      item = `${BGLE.bagel.variant} ${BGLE.bagel.name}   ${BGLE.quantity}   £${
        BGLE.bagel.price * BGLE.quantity
      }`
      result.push(item)
    }

    if (COF.quantity > 0) {
      let item = ``
      item = `Coffee             ${COF.quantity}   £${
        COF.bagel.price * COF.quantity
      }`
      result.push(item)
    }

    if (BGSE.quantity > 0) {
      let item = ``
      item = `${BGSE.bagel.variant} ${BGSE.bagel.name}   ${BGSE.quantity}   £${
        BGSE.bagel.price * BGSE.quantity
      }`
      result.push(item)
    }

    if (BGSS.quantity > 0) {
      let item = ``
      item = `${BGSS.bagel.variant} ${BGSS.bagel.name}   ${BGSS.quantity}   £${
        BGSS.bagel.price * BGSS.quantity
      }`
      result.push(item)
    }

    result.push(lineBreak)

    if (this.totalSavings() > 0) {
      result.push(savings)
    }

    result.push(total, thankYou, yourOrder)
    return result
  }
}

module.exports = {
  Basket
}
