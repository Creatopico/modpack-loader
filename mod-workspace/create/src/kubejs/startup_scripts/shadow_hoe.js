StartupEvents.registry('item', e => {
  
 
  
  e.create('shadow_hoe', 'hoe').displayName('Теневая мотыга').unstackable().rarity('EPIC').burnTime(16000).modifyTier(tier => 
  {
    tier.uses = 2562
	tier.speed = 11.0
    tier.attackDamageBonus = 2.0
    tier.level = 5
    tier.enchantmentValue = 14
  })
})