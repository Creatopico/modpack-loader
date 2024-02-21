StartupEvents.registry('item', e => {
  
  e.create('shadow_sword', 'sword').displayName('Теневой меч').attackDamageBaseline(7).unstackable().rarity('EPIC').burnTime(16000).modifyTier(tier => 
  {
    tier.uses = 2562
    tier.attackDamageBonus = 2.0
    tier.level = 5
    tier.enchantmentValue = 14
  })
  
})