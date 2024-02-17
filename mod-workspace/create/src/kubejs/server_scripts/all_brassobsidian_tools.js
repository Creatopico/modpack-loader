ServerEvents.recipes(event => {

  event.shaped(
    Item.of('kubejs:brassobsidian_axe', 1), // arg 1: output
    [
      'BB ',
      'BS ', // arg 2: the shape (array of strings)
      ' S '
    ], 
    {
      B: 'kubejs:brassobsidian_ingot',
      S: 'minecraft:stick'

      
    }
  )
  event.shaped(
    Item.of('kubejs:brassobsidian_pickaxe', 1), // arg 1: output
    [
      'BBB',
      ' S ', // arg 2: the shape (array of strings)
      ' S '
    ], 
    {
      B: 'kubejs:brassobsidian_ingot',
      S: 'minecraft:stick'

      
    }
  )
  event.shaped(
    Item.of('kubejs:brassobsidian_shovel', 1), // arg 1: output
    [
      ' B ',
      ' S ', // arg 2: the shape (array of strings)
      ' S '
    ], 
    {
      B: 'kubejs:brassobsidian_ingot',
      S: 'minecraft:stick'

      
    }
  )
  event.shaped(
    Item.of('kubejs:brassobsidian_sword', 1), // arg 1: output
    [
      ' B ',
      ' B ', // arg 2: the shape (array of strings)
      ' S '
    ], 
    {
      B: 'kubejs:brassobsidian_ingot',
      S: 'minecraft:stick'

      
    }
  )
  event.shaped(
    Item.of('kubejs:brassobsidian_hoe', 1), // arg 1: output
    [
      'BB ',
      ' S ', // arg 2: the shape (array of strings)
      ' S '
    ], 
    {
      B: 'kubejs:brassobsidian_ingot',
      S: 'minecraft:stick'
      
    }
  )}
)