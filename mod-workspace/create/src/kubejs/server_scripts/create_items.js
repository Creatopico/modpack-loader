ServerEvents.recipes(e => {

  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "create:andesite_alloy"
      },
      "C": {
        "item": "create_so:crushed_diamonds"
      },
      "I": {
        "item": "minecraft:iron_block"
      },
      "K": {
        "item": "create:andesite_casing"
      },
      "V": {
        "item": "create:shaft"
      }
    },
    "pattern": [
        '  C  ', 
		' CAC ',
		'CAIAC',
        '  K  ',
        '  V  '  
    ],
    "result": {
      "count": 1,
      "item": "create:mechanical_drill"
    }
  })
  
    e.remove({output: 'createdieselgenerators:engine_piston'})
    e.remove({output: 'vinery:creepers_crush'})
    
    e.remove({output: 'create:chromatic_compound'})
    
    e.shaped('createdieselgenerators:engine_piston', [
        'B  ',
        ' A ',
        '   '
      ], {
        A: 'create:andesite_alloy',
		B: 'create:shaft'
    })
    e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "create:andesite_alloy"
      },
      "I": {
        "item": "minecraft:iron_block"
      },
      "C": {
        "item": "minecraft:copper_block"
      },
      "P": {
        "item": "create:mechanical_pump"
      },
      "T": {
        "item": "create:fluid_pipe"
      },
      "M": {
        "item": "create:precision_mechanism"
      }
    },
    "pattern": [
        ' A    ', 
		'IMPTTT',
		'CC    '
    ],
    "result": {
      "count": 1,
      "item": "create:potato_cannon"
    }
  })
	  
	e.remove({output: 'createdieselgenerators:diesel_engine'})
	e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "createdieselgenerators:engine_piston"
      },
      "B": {
        "item": "minecraft:flint_and_steel"
      },
      "C": {
        "item": "create:brass_block"
      },
      "D": {
        "item": "create:fluid_tank"
      },
      "E": {
        "item": "create:sturdy_sheet"
      },
      "F": {
        "item": "create:fluid_pipe"
      }
    },
    "pattern": [
        'ABA', 
		'ACA',
		' D ',
        'EFE' 
    ],
    "result": {
      "count": 1,
      "item": "createdieselgenerators:diesel_engine"
    }
  })
	
	e.remove({output: 'createdieselgenerators:large_diesel_engine'})
	e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": "create:andesite_alloy"
      },
      "B": {
        "item": "minecraft:flint_and_steel"
      },
      "C": {
        "item": "createdieselgenerators:diesel_engine"
      },
      "D": {
        "item": "create:precision_mechanism"
      },
      "E": {
        "item": "create:sturdy_sheet"
      }
    },
    "pattern": [
        'ABA', 
		' C ',
		'EDE'
    ],
    "result": {
      "count": 1,
      "item": "createdieselgenerators:large_diesel_engine"
    }
    })
  
  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "S": {
        "item": "create:iron_sheet"
      },
      "I": {
        "item": "minecraft:iron_block"
      },
      "K": {
        "item": "create:andesite_casing"
      },
      "V": {
        "item": "create:shaft"
      }
    },
    "pattern": [
        '  S  ', 
		' SIS ',
		'  K  ',
        '  V  '
    ],
    "result": {
      "count": 1,
      "item": "create:mechanical_saw"
    }
  })
})