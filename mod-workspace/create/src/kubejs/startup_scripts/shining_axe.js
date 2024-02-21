StartupEvents.registry('item', e => {
  
  
  e.create('shining_axe', 'axe').displayName('Сияющий топор').speed(23).unstackable().speedBaseline(1).rarity('RARE').modifyTier(tier => 
  {
    tier.uses = 512
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  })
})