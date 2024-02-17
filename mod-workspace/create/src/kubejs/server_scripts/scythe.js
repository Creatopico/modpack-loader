ServerEvents.recipes(event => {
	event.remove({output: 'minecraft:allay_spawn_egg'})
    event.shaped('minecraft:allay_spawn_egg', [
        'AAA',
        'B  ',
        'B  '
      ], {
        A: 'create:chromatic_compound',
        B: 'kubejs:soul_stick'
      })
})