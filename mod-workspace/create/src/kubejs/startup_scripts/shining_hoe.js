StartupEvents.registry('item', e => {
  
  e.create('shining_hoe', 'hoe').displayName('Сияющая мотыга').speed(18).unstackable().rarity('RARE').modifyTier(tier => 
  {
    tier.uses = 512
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  })
})