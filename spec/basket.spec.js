const { Basket } = require('./../src/basket.js')

describe('Item Basket', () => {
  it('Should be able to add an item to the basket', () => {
    // step1: setup
    // write any code / instructions to prepare
    // the inputs to the function we want to test
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute the code
    // ie. run the code for which we want to test the output
    basket.addItem('BGLE')
    const expectedResult = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      }
    ]
    // step 3: verify that the result is what you expect it to be
    expect(basket.items).toEqual(expectedResult)
  })
  it('Should be able to remove an item from the basket', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    basket.removeItem('BGLP')
    const expectedResult = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      }
    ]

    // step 3: verify
    expect(basket.items).toEqual(expectedResult)
  })
  it('Should not be able to add more items than the basket capacity', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLS',
        price: '0.49',
        name: 'Bagel',
        variant: 'Sesame'
      },
      {
        sku: 'COF',
        price: '0.99',
        name: 'Bagel',
        variant: ''
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.addItem('BGLP')
    const expectedResult = 'Sorry, your basket cannot hold that many bagels'

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to increase basket capacity', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    basket.setBasketCapacity(10)
    const res = basket.capacity
    const expectedResult = 10

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it("Should not be able to remove an item that doesn't exist", () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.removeItem('BGLP')
    const expectedResult = "Item Doesn't Exist"

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show a specific bagel price', () => {
    // step1: setup
    const bagelItems = []
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.bagelPrice('BGLP')
    const expectedResult = 0.39

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to add multiple bagels of the same type', () => {
    // step1: setup
    const bagelItems = []
    const basket = new Basket(bagelItems)

    // step 2: execute
    basket.addItem('BGLP', 3)
    const res = basket.items
    const expectedResult = [
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the total price of the basket', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSum()
    const expectedResult = 1.27

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the total price of Coffee & Plain Bagel, with special offers applied', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'COF',
        price: '0.99',
        name: 'Bagel',
        variant: ''
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSum()
    const expectedResult = 1.25

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the total price of 6 Onion Bagels, with special offers applied', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSum()
    const expectedResult = 2.49

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the total price of 12 Plain Bagels, with special offers applied', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSum()
    const expectedResult = 3.99

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the total price of 6 Everything Bagels, with special offers applied', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSum()
    const expectedResult = 2.49

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to show the special offers for a specific bagel', () => {
    // step1: setup
    const bagelItems = []
    const basket = new Basket(bagelItems)

    // step 2: execute
    const resBGLE = basket.specialOffer('BGLE')
    const resBGLP = basket.specialOffer('BGLP')
    const resBGLO = basket.specialOffer('BGLO')
    const resCOF = basket.specialOffer('COF')
    const expectedResultBGLE = '6 Everything Bagels for 2.49'
    const expectedResultBGLO = '6 Onion Bagels for 2.49'
    const expectedResultBGLP =
      '12 Plain Bagels for 3.99, or 1 Coffee and 1 Plain Bagel for 1.25'
    const expectedResultCOF = '1 Coffee and 1 Plain Bagel for 1.25'

    // step 3: verify
    expect(resBGLE).toEqual(expectedResultBGLE)
    expect(resBGLP).toEqual(expectedResultBGLP)
    expect(resBGLO).toEqual(expectedResultBGLO)
    expect(resCOF).toEqual(expectedResultCOF)
  })
  it('Should be able to show total savings', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.totalSavings()
    const expectedResult = 0.45

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to print a full itemised receipt.', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.printReceipt()
    const expectedResult = [
      `    ~~~ Bob's Bagels ~~~    `,
      `          2023-3-3          `,
      `----------------------------`,
      `Everything Bagel   1   £0.49`,
      `----------------------------`,
      `Total                  £0.49`,
      `         Thank you          `,
      `      for your order!       `
    ]

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to print a full itemised receipt, with special offers.', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.printReceipt()
    const expectedResult = [
      `    ~~~ Bob's Bagels ~~~    `,
      `          2023-3-3          `,
      `----------------------------`,
      `Everything Bagel   6   £2.94`,
      `----------------------------`,
      `Total Savings         -£0.45`,
      `Total                  £2.49`,
      `         Thank you          `,
      `      for your order!       `
    ]

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
  it('Should be able to print a full itemised receipt, with multiple items.', () => {
    // step1: setup
    const bagelItems = [
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLE',
        price: '0.49',
        name: 'Bagel',
        variant: 'Everything'
      },
      {
        sku: 'BGLO',
        price: '0.49',
        name: 'Bagel',
        variant: 'Onion'
      },
      {
        sku: 'BGLP',
        price: '0.39',
        name: 'Bagel',
        variant: 'Plain'
      },
      {
        sku: 'COF',
        price: '0.99',
        name: 'Bagel',
        variant: ''
      }
    ]
    const basket = new Basket(bagelItems)

    // step 2: execute
    const res = basket.printReceipt()
    const expectedResult = [
      `    ~~~ Bob's Bagels ~~~    `,
      `          2023-3-3          `,
      `----------------------------`,
      `Onion Bagel        1   £0.49`,
      `Plain Bagel        1   £0.39`,
      `Everything Bagel   3   £1.47`,
      `Coffee             1   £0.99`,
      `----------------------------`,
      `Total Savings         -£0.13`,
      `Total                  £3.21`,
      `         Thank you          `,
      `      for your order!       `
    ]

    // step 3: verify
    expect(res).toEqual(expectedResult)
  })
})
