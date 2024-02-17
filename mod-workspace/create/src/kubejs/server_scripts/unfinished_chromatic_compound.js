ServerEvents.recipes(e => {
    e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "L": {
        "item": "minecraft:lodestone"
      },
      "O": {
        "item": "minecraft:obsidian"
      },
      "B": {
        "item": "kubejs:brassobsidian_ingot"
      },
      "D": {
        "item": "minecraft:dragon_breath"
      }
    },
    "pattern": [
        '  L  ', 
		' BOB ',
		'BODOB',
        ' BOB ',
        '  L  '  
    ],
    "result": {
      "count": 1,
      "item": "kubejs:unfinished_chromatic_compound"
    }
  })
}) 