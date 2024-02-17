ServerEvents.recipes(event => {
    event.custom({
      type: 'create:mixing',
      heatRequirement: 'superheated',
      ingredients: [
          Ingredient.of('create:brass_block').toJson(),
		  Ingredient.of('create:brass_block').toJson(),
		  Ingredient.of('create:brass_block').toJson(),
		  Ingredient.of('create:brass_block').toJson(),
          Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('minecraft:obsidian').toJson(),
		  Ingredient.of('minecraft:obsidian').toJson(),
		  Ingredient.of('minecraft:obsidian').toJson(),
		  Ingredient.of('minecraft:obsidian').toJson()
      ],
      results: [
          Item.of('kubejs:brassobsidian_compound').toJson()
      ],
      processingTime: 100
    })
})