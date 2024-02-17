ServerEvents.recipes(event => {
  event.shaped(
  Item.of('kubejs:soul_stick', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:soul_sand',
    B: 'minecraft:stick'
  }
)
})