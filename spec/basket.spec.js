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
    expectedResult = [
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
})
