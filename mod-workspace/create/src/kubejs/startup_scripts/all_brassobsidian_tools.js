StartupEvents.registry('item', e => {
  e.create('brassobsidian_pickaxe', 'pickaxe').displayName('Латунно-обсидиановая кирка').unstackable().modifyTier(tier => 
  {
    tier.uses = 1561
    tier.speed = 12.0
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  }
  )
  e.create('brassobsidian_shovel', 'shovel').displayName('Латунно-обсидиановая лопата').unstackable().modifyTier(tier => 
  {
    tier.uses = 1561
    tier.speed = 12.0
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  }
  )
  e.create('brassobsidian_sword', 'sword').displayName('Латунно-обсидиановый меч').unstackable().modifyTier(tier => 
  {
    tier.uses = 1561
    tier.speed = 12.0
    tier.attackDamageBonus = 3.0
    tier.level = 2
    tier.enchantmentValue = 14
  }
  )
  e.create('brassobsidian_hoe', 'hoe').displayName('Латунно-обсидиановая мотыга').unstackable().modifyTier(tier => 
  {
    tier.uses = 1561
    tier.speed = 12.0
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  }
  )
  e.create('brassobsidian_axe', 'axe').displayName('Латунно-обсидиановый топор').unstackable().modifyTier(tier => 
  {
    tier.uses = 1561
    tier.speed = 12.0
    tier.attackDamageBonus = 5.0
    tier.level = 2
    tier.enchantmentValue = 14
  }
  )
})