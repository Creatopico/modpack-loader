StartupEvents.registry('item', e => {
  
  e.create('shining_pickaxe', 'pickaxe').displayName('Сияющая кирка').speed(20).unstackable().rarity('RARE').modifyTier(tier => 
  {
    tier.uses = 512
    tier.attackDamageBonus = 2.0
    tier.level = 2
    tier.enchantmentValue = 14
  })
})