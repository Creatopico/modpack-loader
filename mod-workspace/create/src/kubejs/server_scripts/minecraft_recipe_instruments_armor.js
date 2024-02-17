ServerEvents.recipes(event => {
	event.remove({ output: 'minecraft:light'})

	event.remove({ output: 'minecraft:diamond_sword' })
	event.remove({ output: 'minecraft:diamond_pickaxe' })
	event.remove({ output: 'minecraft:diamond_shovel' })
	event.remove({ output: 'minecraft:diamond_axe' })
	event.remove({ output: 'minecraft:diamond_hoe' })
	
	event.remove({ output: 'minecraft:diamond_helmet' })
	event.remove({ output: 'minecraft:diamond_chestplate' })
	event.remove({ output: 'minecraft:diamond_leggings' })
	event.remove({ output: 'minecraft:diamond_boots' })
	

	event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_sword').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_sword').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_pickaxe').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_pickaxe').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_shovel').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_shovel').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_axe').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_axe').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_hoe').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_hoe').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_helmet').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_helmet').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_chestplate').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_chestplate').toJson()]
	  })
	  
	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_leggings').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson()
		],
		results: [Item.of('minecraft:diamond_leggings').toJson()]
	  })

	  event.custom({
		type: 'create:mixing',
		heatRequirement:'heated',
		ingredients: [
		  Item.of('minecraft:iron_boots').toJson(),
		  Item.of('create_so:crushed_diamonds').toJson(),
		],
		results: [Item.of('minecraft:diamond_boots').toJson()]
	  })

    event.shaped(
        Item.of('minecraft:light', 1), // arg 1: output
      [
        ' G ',
        ' T ', // arg 2: the shape (array of strings)
        ' I '
      ], 
      {
            G: 'minecraft:glass_bottle',
		    T: 'minecraft:torch',
		    I: 'minecraft:iron_nugget'
      }
    )
  }
)
