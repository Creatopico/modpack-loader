ServerEvents.recipes(event => { 
	event.remove({ output: 'minecraft:netherite_ingot' })
	
	event.shapeless('9x minecraft:netherite_ingot', [ // arg 1: output
        'minecraft:netherite_block'
    ])
	
	event.remove({ output: 'createdeco:zinc_sheet' })
	event.shapeless('createdeco:zinc_sheet', [ // arg 1: output
        'createaddition:zinc_sheet'
    ])
	
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('minecraft:netherite_scrap').toJson(),
        Item.of('minecraft:netherite_scrap').toJson(),
		Item.of('create:golden_sheet').toJson(),
		Item.of('create:golden_sheet').toJson(),
		Item.of('create:golden_sheet').toJson(),
		Item.of('create:golden_sheet').toJson(),
		{"amount":81000,"fluid":"minecraft:lava","nbt":{}}
	  ],
	  results: [Item.of('minecraft:netherite_ingot').toJson()]
    })
    
    event.remove({input: 'minecraft:glow_ink_sac', type:'create:mixing'})
    event.custom({
	  type: 'create:mixing',
	  heatRequirement:'superheated',
	  ingredients: [
		Item.of('minecraft:glow_ink_sac').toJson(),
		Item.of('create_so:crushed_diamonds').toJson(),
		Fluid.of('create_enchantment_industry:experience', 8100).toJson()
	  ],
	  results: [Fluid.of('create_enchantment_industry:hyper_experience', 810).toJson()]
    })
    
    event.remove({ output: 'minecraft:netherite_scrap' })
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('minecraft:ancient_debris').toJson(),
		{"amount":81000,"fluid":"minecraft:water","nbt":{}}
	  ],
	  results: [Item.of('minecraft:netherite_scrap').toJson()]
    })
    
    event.remove({type: 'create:compacting', mod:'createaddition',input:'minecraft:wheat_seeds'})
	event.custom({
	  type: 'create:mixing',
	  heatRequirement:'heated',
	  ingredients: [
		Item.of('minecraft:wheat_seeds').toJson()
	  ],
	  results: [Fluid.of('createaddition:seed_oil', 8100).toJson()]
    })
    
    event.remove({output: 'createdeco:andesite_window'})
    event.remove({output: 'createdeco:copper_window'})
    event.remove({output: 'createdeco:iron_window'})
    event.remove({output: 'createdeco:industrial_iron_window'})
    event.remove({output: 'createdeco:brass_window'})
    event.remove({output: 'createdeco:zinc_window'})
    event.shaped('createdeco:andesite_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'create:andesite_alloy'
      })
    event.shaped('createdeco:copper_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'minecraft:copper_ingot'
      })
    event.shaped('createdeco:iron_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'minecraft:iron_ingot'
      })
    event.shaped('createdeco:industrial_iron_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'createdeco:industrial_iron_ingot'
      })
    event.shaped('createdeco:brass_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'create:brass_ingot'
      })
    event.shaped('createdeco:zinc_window', [
        ' A ',
        'A A',
        '   '
      ], {
        A: 'create:zinc_ingot'
      })
})