ServerEvents.recipes(event => {
    event.custom({
      type: 'create:compacting',
      heatRequirement: 'superheated',
      ingredients: [
          Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
		  Ingredient.of('minecraft:blaze_rod').toJson(),
          Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('create:sturdy_sheet').toJson(),
		  Ingredient.of('kubejs:unfinished_chromatic_compound').toJson()
      ],
      results: [
          Item.of('create:chromatic_compound').toJson()
      ],
      processingTime: 100
    })
})