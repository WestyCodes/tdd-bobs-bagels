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
