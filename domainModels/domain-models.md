# Part 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

nouns: item, basket
verbs: add, remove

DOMAIN MODEL
Item Example:
{
sku: 'BGLO',
price: '0.49',
name: 'Bagel',
variant: 'Onion'
}

addItem({item}) -> [{item}, {item}, ...] (array of items... with item aded to basket)
INPUT: Item
OUTPUT: Array of object Item, with item added.

removeItem(sku) -> [{item}, {item}, ...] (array of items... with item removed from basket)
INPUT: sku (unique identifier)
OUTPUT: Array of object item, but with item of input sku removed.

# Part 2

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket.

nouns: item, basket
verbs: adding to full basket, create larger baskets, remove an item that doesnt exist.

DOMAIN MODEL
addItem({item}) -> [{item}, {item}, ...] // or "Basket is full!" if full.
INPUT: Item
OUTPUT: Array of object Item, with item added - unless basket is full, then return an error.

setBasketCapacity(num) -> sets basket capacity to specific number.
INPUT: Number
OUTPUT: Updates variable holding basket capacity.

removeItem(sku) -> [{item}, {item}, ...] // or "Item Doesn't Exist" is that item is not in the basket.
INPUT: sku (unique identifier)
OUTPUT: Array of object item, but with item of input sku removed - unless that item didn't exist in the first place, then show an error.

# Part 3

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public
So that I can buy many of my favorite bagel
I'd like to be able to add the same type of bagel to my basket more than once

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket

nouns: item, basket, price
verbs: see price, add multiples, total sum.

DOMAIN MODEL
bagelPrice(sku) -> price of Bagel as a number.
INPUT: sku - unqiue bagel identifier
OUTPUT: Price as a number of specific bagel.

addItem({item}, quantity = 1) -> [{item}, {item}, ...] // or "Basket is full!" if full // can add multiple items with quantity.
INPUT: Item
OUTPUT: Array of object Item, with item added - unless basket is full, then return an error, more than one object of same bagel added at once.

totalSum(void) -> number - total price of all bagels in basket.
INPUT: none.
OUTPUT: total price of all bagels in basket, as a number.

# Extension 1:

As a Bob's Bagels Manager,
So that members of public pay the correct price,
When they go to checkout, special offers should be applied to the total price.

As a member of public,
So that I can know the price of bagels,
I'd like to be able to see special offers.

nouns: checkout, special offers, total price
verbs: applied, see

DOMAIN MODEL
totalSum(void) -> number - total price of all bagels in basket // with special offers applied.
INPUT: none.
OUTPUT: total price of all bagels in basket // with special offers applied, as a number.

specialOffer(sku) -> special offer
INPUT: sku (bagel unique identifier)
OUTPUT: Special offer, as a string.

# Extension 2:

As a member of public,
So that I can have a record of my order,
I'd like to have a detailed receipt with todays date and time of order

As a member of public,
So that I can have a record of my order,
I'd like to have a detailed receipt with an itemised list, with quantities and prices.

As a member of public,
So that I can have a record of my order,
I'd like to have a detailed receipt with the total price.

As the owner of Bob's Bagels,
So that the public will know where they bought from,
I'd like to have the company name, and a thank you message on the receipt.

DOMAIN MODEL
printReceipt(basket: [items...]) -> returns multiline string
INPUT: An array of object items.
OUTPUT: an array of strings showimg: name, date&time, itemised items, quantities, prices, and total, with thank you message.
