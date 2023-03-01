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
