ServerEvents.recipes(event => {
    event.custom({
      type: 'create:pressing',
      ingredients: [
          Ingredient.of('kubejs:brassobsidian_compound').toJson()
      ],
      results: [
          Item.of('kubejs:brassobsidian_ingot').toJson()
      ]
    })
  }) 