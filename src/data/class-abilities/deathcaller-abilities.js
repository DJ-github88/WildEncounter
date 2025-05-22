// Base spells and abilities for the Deathcaller class
const deathcallerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Soul Charges',
    description: 'The Deathcaller\'s signature mechanic is Soul Charges – ethereal charges born from death itself. Whenever the Deathcaller slays or incapacitates an enemy, they absorb a fragment of its soul. These Soul Charges accumulate as a resource and can be spent to empower their magic.',
    mechanics: [
      'Gaining Souls: Slaying a marked foe or killing an enemy with a necromantic spell grants 1 Soul Charge. Special moves like Soul Harvest might grant extra charges.',
      'Spending Souls: Soul Charges can be consumed to boost spell effects. A Deathcaller might spend charges to summon stronger undead, extend the duration of curses, or trigger powerful "Consume Soul" ultimates.',
      'Soul economy: Managing Soul Charges is key – leaving too many unused is wasteful, but overspending leaves the Deathcaller vulnerable. Many abilities have alternate enhanced effects if spent with Soul Charges.',
      'Maximum Soul Charges = Intelligence modifier + 5.'
    ],
    passiveBenefits: {
      name: 'Passive Benefits',
      description: 'Soul Charges provide passive benefits even when not actively spent.',
      effects: [
        '1 Charge: +1 to Necrotic damage, +1 to saves vs. death effects',
        '2 Charges: +2 to Necrotic damage, +2 to saves vs. death effects, 5% resistance to Radiant damage',
        '3 Charges: +3 to Necrotic damage, +3 to saves vs. death effects, 10% resistance to Radiant damage',
        '4 Charges: +4 to Necrotic damage, +4 to saves vs. death effects, 15% resistance to Radiant damage',
        '5+ Charges: +5 to Necrotic damage, +5 to saves vs. death effects, 20% resistance to Radiant damage, immunity to fear from holy sources'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Bone Spear',
      cost: {
        actionPoints: 1,
        mana: 3,
        soulCharges: '0 (optional)'
      },
      description: 'A ranged spike of necrotic bone impales a single target. Deals moderate necrotic damage and pierces armor, splitting to hit a second nearby enemy at half damage.',
      mechanics: 'Launch a bone spear at a target within 5m range. Deals 1d8+INT necrotic damage and pierces armor. The spear splits to hit a second nearby enemy for half damage.',
      effects: [
        { condition: 'Normal Hit', effect: 'Deals 1d8+INT necrotic damage to primary target and half damage to a secondary target.' },
        { condition: 'Armor Piercing', effect: 'Ignores 50% of target\'s physical armor.' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to increase damage to 2d8+INT and add a 2-turn bleed effect (1d4 per turn).' },
        { condition: 'Kill Effect', effect: 'If this kills the primary target, gain 1 Soul Charge.' }
      ],
      scaling: 'Damage = 1d8 + INT modifier, Secondary damage = (1d8 + INT modifier) / 2'
    },
    {
      name: 'Raise Skeleton',
      cost: {
        actionPoints: 1,
        mana: 5,
        soulCharges: '0 (optional)'
      },
      description: 'Animate a corpse into an Undead Skeleton Minion under your control. The skeleton lasts for several rounds and attacks on its own AP.',
      mechanics: 'Animate a corpse within 10m into a Skeleton Minion with 10+INT HP. The skeleton lasts for 5 rounds, has 2 AP per turn, and deals 1d6+2 physical damage with its attacks.',
      effects: [
        { condition: 'Minion Stats', effect: 'HP: 10+INT, Damage: 1d6+2, AP: 2 per turn, Duration: 5 rounds.' },
        { condition: 'Taunt', effect: 'Skeleton can taunt enemies, forcing them to attack it for 1 turn (1 AP cost).' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to summon a stronger skeleton (15+INT HP, 1d8+3 damage) or extend duration by 3 rounds.' },
        { condition: 'Maximum Minions', effect: 'You can have up to 2 + (INT modifier / 2) skeletons active at once.' }
      ],
      scaling: 'Skeleton HP = 10 + INT modifier, Skeleton Damage = 1d6 + 2, Maximum Minions = 2 + (INT modifier / 2)'
    },
    {
      name: 'Soul Harvest',
      cost: {
        actionPoints: 1,
        mana: 4,
        soulCharges: '0'
      },
      description: 'Target an enemy within range. The Deathcaller gouges ethereal energy from the foe, dealing necrotic damage and healing the caster for a portion of that damage.',
      mechanics: 'Target an enemy within 8m to deal 2d6+INT necrotic damage and heal yourself for 50% of the damage dealt. If this kills the target, immediately gain 1 Soul Charge.',
      effects: [
        { condition: 'Damage', effect: 'Deal 2d6+INT necrotic damage to the target.' },
        { condition: 'Healing', effect: 'Heal yourself for 50% of the damage dealt.' },
        { condition: 'Kill Effect', effect: 'If this kills the target, gain 1 Soul Charge.' },
        { condition: 'Critical Hit', effect: 'On a critical hit, heal for 100% of damage instead of 50%.' }
      ],
      scaling: 'Damage = 2d6 + INT modifier, Healing = 50% of damage dealt'
    },
    {
      name: 'Death Mark',
      cost: {
        actionPoints: 0,
        mana: 2,
        soulCharges: '0'
      },
      description: 'Mark a target\'s forehead with a glyph of death. For the next 3 turns, the target is "Marked for Death." Marked enemies take extra damage from all Deathcaller attacks.',
      mechanics: 'Mark a target within 15m. For 3 turns, the target takes 10% extra damage from all your attacks. If a Marked enemy dies, you gain 1 Soul Charge and the mark explodes, dealing 1d6 necrotic damage to enemies within 3m.',
      effects: [
        { condition: 'Damage Bonus', effect: 'Marked target takes 10% extra damage from all your attacks.' },
        { condition: 'Duration', effect: 'Mark lasts for 3 turns.' },
        { condition: 'Death Explosion', effect: 'When a marked target dies, it explodes for 1d6 necrotic damage in a 3m radius.' },
        { condition: 'Soul Gain', effect: 'When a marked target dies, you automatically gain 1 Soul Charge.' }
      ],
      scaling: 'Damage bonus = 10% + (1% per level), Explosion damage = 1d6 + (INT modifier / 2)'
    },
    {
      name: 'Grave Curse',
      cost: {
        actionPoints: 2,
        mana: 6,
        soulCharges: '0 (optional)'
      },
      description: 'Afflict an area around the Deathcaller or a target point with an eldritch curse. Enemies in the zone suffer slowed movement and periodic necrotic damage.',
      mechanics: 'Create a 10m radius cursed zone centered on you or a point within 20m. Enemies in the zone have movement speed reduced by 30% and take 1d6 necrotic damage at the start of their turn. Undead allies in the zone deal 20% more damage. Lasts 3 turns.',
      effects: [
        { condition: 'Movement Penalty', effect: 'Enemies have movement speed reduced by 30%.' },
        { condition: 'Periodic Damage', effect: 'Enemies take 1d6 necrotic damage at the start of their turn.' },
        { condition: 'Undead Buff', effect: 'Undead allies deal 20% more damage while in the zone.' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to increase the radius to 15m or the duration to 5 turns.' }
      ],
      scaling: 'Damage = 1d6 + (INT modifier / 2), Undead damage bonus = 20% + (INT modifier)'
    },
    {
      name: 'Spirit Chains',
      cost: {
        actionPoints: 2,
        mana: 5,
        soulCharges: '0 (optional)'
      },
      description: 'Send out spectral chains to bind up to two enemies. Bound targets are rooted in place and take necrotic damage each round until they break free or the effect ends.',
      mechanics: 'Send spectral chains to bind up to two enemies within 12m. Bound enemies cannot move and take 1d8 necrotic damage at the start of their turn. They can attempt to break free with a Strength check (DC = 10 + INT modifier). Chains last for 2 turns or until broken.',
      effects: [
        { condition: 'Root', effect: 'Bound enemies cannot move.' },
        { condition: 'Damage', effect: 'Bound enemies take 1d8 necrotic damage at the start of their turn.' },
        { condition: 'Break Check', effect: 'Enemies can attempt to break free with a Strength check (DC = 10 + INT modifier).' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to bind a third enemy or increase the DC by 5.' }
      ],
      scaling: 'Damage = 1d8 + (INT modifier / 2), Break DC = 10 + INT modifier'
    },
    {
      name: 'Drain Life',
      cost: {
        actionPoints: 3,
        mana: 7,
        soulCharges: '0 (optional)'
      },
      description: 'A powerful single-target drain. Deals heavy necrotic damage and steals 50–100% of the damage as healing.',
      mechanics: 'Target an enemy within 10m to deal 3d8+INT necrotic damage and heal yourself for 50% of the damage dealt. If you spend 1 Soul Charge, heal for 100% of the damage instead.',
      effects: [
        { condition: 'Damage', effect: 'Deal 3d8+INT necrotic damage to the target.' },
        { condition: 'Healing', effect: 'Heal yourself for 50% of the damage dealt.' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to heal for 100% of the damage instead of 50%.' },
        { condition: 'Boss Effectiveness', effect: 'Deals full damage to boss/elite enemies, making it effective for sustain in tough fights.' }
      ],
      scaling: 'Damage = 3d8 + INT modifier, Healing = 50% of damage (100% with Soul Charge)'
    },
    {
      name: 'Wraithform',
      cost: {
        actionPoints: 1,
        mana: 3,
        soulCharges: '0',
        healthCost: '10% Max HP'
      },
      description: 'The Deathcaller shrouds himself in a spectral cloak. For 1 round, he gains ethereal form: immune to physical damage but vulnerable to magic.',
      mechanics: 'Sacrifice 10% of your maximum HP to become ethereal for 1 round. While ethereal, you are immune to physical damage but take 50% more damage from magical attacks. You can move through solid objects but must end your turn in an open space.',
      effects: [
        { condition: 'Physical Immunity', effect: 'Immune to physical damage for 1 round.' },
        { condition: 'Magic Vulnerability', effect: 'Take 50% more damage from magical attacks.' },
        { condition: 'Phasing', effect: 'Can move through solid objects but must end turn in an open space.' },
        { condition: 'With Soul Charges', effect: 'Spend 1 Soul Charge to extend duration to 2 rounds or remove the magic vulnerability.' }
      ],
      scaling: 'HP Cost = 10% of maximum HP, Duration = 1 + (Soul Charges spent) rounds'
    }
  ],

  // Advanced Abilities (Ultimates)
  advancedAbilities: [
    {
      name: 'Army of the Damned',
      cost: {
        actionPoints: 4,
        mana: 12,
        soulCharges: '2 (optional)'
      },
      description: 'The Deathcaller raises all corpses in a large area as skeletal warriors for several rounds. Summons multiple Skeletons or Zombies at once, dramatically shifting the tide of battle.',
      mechanics: 'Raise all corpses within a 20m radius as undead minions. Each corpse becomes a skeleton with 15+INT HP, 2 AP per turn, and 1d8+3 damage. Minions last for 4 rounds. If there are no corpses, create 1d4+1 skeletons from the ground.',
      effects: [
        { condition: 'Minion Stats', effect: 'Each skeleton has 15+INT HP, deals 1d8+3 damage, and has 2 AP per turn.' },
        { condition: 'Duration', effect: 'Minions last for 4 rounds.' },
        { condition: 'No Corpses', effect: 'If no corpses are available, create 1d4+1 skeletons from the ground.' },
        { condition: 'With Soul Charges', effect: 'Spend 2 additional Soul Charges to create stronger minions (20+INT HP, 1d10+4 damage) or extend duration to 6 rounds.' }
      ],
      scaling: 'Number of minions = Number of corpses (minimum 1d4+1), Minion HP = 15 + INT modifier, Minion damage = 1d8 + 3'
    },
    {
      name: 'Soul Requiem',
      cost: {
        actionPoints: 3,
        mana: 10,
        soulCharges: '3-5'
      },
      description: 'The Deathcaller channels gathered souls into a devastating effect. He unleashes a wave of necrotic energy in a wide cone. Enemies hit take massive damage; killed enemies are instantly devoured by the spell.',
      mechanics: 'Unleash a wave of necrotic energy in a 15m cone. Enemies hit take 4d10+INT necrotic damage. For each Soul Charge spent (3-5), increase damage by 1d10. For each enemy killed by this spell, gain 1 Soul Charge.',
      effects: [
        { condition: 'Base Damage', effect: '4d10+INT necrotic damage in a 15m cone.' },
        { condition: 'Soul Charge Scaling', effect: 'Each Soul Charge spent (3-5) adds 1d10 damage.' },
        { condition: 'Soul Recovery', effect: 'Gain 1 Soul Charge for each enemy killed by this spell.' },
        { condition: 'Maximum Potential', effect: 'At 5 Soul Charges, deals 9d10+INT damage and can fully refill your Soul Charges if it kills multiple enemies.' }
      ],
      scaling: 'Base damage = 4d10 + INT modifier, Additional damage = 1d10 per Soul Charge spent'
    },
    {
      name: 'Grave Eruption',
      cost: {
        actionPoints: 4,
        mana: 11,
        soulCharges: '0 (optional)'
      },
      description: 'All corpses within a huge radius violently erupt. Each corpse explodes in a geyser of bone and spirit, dealing area necrotic damage around the corpse.',
      mechanics: 'All corpses within 30m violently erupt. Each corpse deals 3d8 necrotic damage to enemies within 5m of it. If no corpses are available, create 1d3 eruptions at random locations within range.',
      effects: [
        { condition: 'Eruption Damage', effect: 'Each corpse deals 3d8 necrotic damage in a 5m radius.' },
        { condition: 'No Corpses', effect: 'If no corpses are available, create 1d3 eruptions at random locations.' },
        { condition: 'Soul Gain', effect: 'Gain 1 Soul Charge for each enemy killed by the eruptions.' },
        { condition: 'With Soul Charges', effect: 'Spend 2 Soul Charges to increase the damage to 4d8 and the radius to 8m.' }
      ],
      scaling: 'Damage per eruption = 3d8 + (INT modifier), Radius = 5m + (INT modifier / 2)'
    },
    {
      name: 'Deathly Sanctuary',
      cost: {
        actionPoints: 2,
        mana: 8,
        soulCharges: '1'
      },
      description: 'A defensive ultimate. The Deathcaller creates a zone of necromantic resilience. In this aura, allied undead and allies gain damage reduction and regeneration, while enemies inside feel despair.',
      mechanics: 'Create a 12m radius sanctuary centered on you. Allies inside gain 30% damage reduction and regenerate 1d6 HP per turn. Undead allies gain an additional 20% damage bonus. Enemies inside deal 20% less damage and lose 1d4 HP per turn. Lasts 3 rounds.',
      effects: [
        { condition: 'Ally Protection', effect: 'Allies gain 30% damage reduction and regenerate 1d6 HP per turn.' },
        { condition: 'Undead Empowerment', effect: 'Undead allies gain an additional 20% damage bonus.' },
        { condition: 'Enemy Debuff', effect: 'Enemies deal 20% less damage and lose 1d4 HP per turn.' },
        { condition: 'With Additional Soul Charges', effect: 'Spend 1 additional Soul Charge to increase the radius to 18m or the duration to 5 rounds.' }
      ],
      scaling: 'Ally regeneration = 1d6 + (INT modifier / 2), Enemy damage reduction = 20% + (INT modifier)'
    },
    {
      name: 'Lich Ascendant',
      cost: {
        actionPoints: 5,
        mana: 15,
        soulCharges: '5',
        healthCost: '50% Max HP'
      },
      description: 'Transform into a lich-like form temporarily. The Deathcaller sacrifices a large portion of HP to become a spectral lich for a few turns: gaining tremendous spell power, flight, and life-steal on spells.',
      mechanics: 'Sacrifice 50% of your maximum HP to transform into a lich for 3 rounds. While transformed, your spells deal 100% more damage, you can fly, and all your damaging spells heal you for 30% of the damage dealt. When the effect ends, your HP is reduced to 10% of maximum.',
      effects: [
        { condition: 'Damage Boost', effect: 'Spells deal 100% more damage.' },
        { condition: 'Flight', effect: 'Gain the ability to fly and hover.' },
        { condition: 'Life Steal', effect: 'All damaging spells heal you for 30% of the damage dealt.' },
        { condition: 'Aftermath', effect: 'When the effect ends, your HP is reduced to 10% of maximum.' }
      ],
      scaling: 'Damage boost = 100% + (INT modifier * 5%), Life steal = 30% + (INT modifier * 2%)'
    },
    {
      name: 'Death\'s Dominion',
      cost: {
        actionPoints: 3,
        mana: 9,
        soulCharges: '2'
      },
      description: 'Create a large zone where you have absolute control over life and death. Within this area, you can instantly raise any fallen enemy as a powerful undead servant.',
      mechanics: 'Create a 15m radius zone centered on you that lasts for 4 rounds. Within this zone, whenever an enemy dies, you can instantly raise it as an undead minion with 20+INT HP, 2 AP per turn, and 1d10+4 damage without spending AP or Mana.',
      effects: [
        { condition: 'Instant Raising', effect: 'Automatically raise fallen enemies as undead minions without spending AP or Mana.' },
        { condition: 'Minion Stats', effect: 'Raised minions have 20+INT HP, deal 1d10+4 damage, and have 2 AP per turn.' },
        { condition: 'Duration', effect: 'Zone lasts for 4 rounds.' },
        { condition: 'With Additional Soul Charges', effect: 'Spend 1 additional Soul Charge to increase the radius to 20m or the duration to 6 rounds.' }
      ],
      scaling: 'Minion HP = 20 + INT modifier, Minion damage = 1d10 + 4, Duration = 4 + (Soul Charges spent - 2) rounds'
    },
    {
      name: 'Soul Vortex',
      cost: {
        actionPoints: 3,
        mana: 10,
        soulCharges: '3'
      },
      description: 'Create a swirling vortex of souls that pulls enemies toward its center while dealing continuous necrotic damage.',
      mechanics: 'Create a soul vortex at a point within 20m. The vortex has a 10m radius and lasts for 3 rounds. Enemies within the vortex are pulled 3m toward the center each turn and take 2d8 necrotic damage. Enemies at the center take 4d8 damage instead.',
      effects: [
        { condition: 'Pull Effect', effect: 'Enemies are pulled 3m toward the center each turn.' },
        { condition: 'Damage', effect: 'Enemies take 2d8 necrotic damage each turn, or 4d8 if at the center.' },
        { condition: 'Duration', effect: 'Vortex lasts for 3 rounds.' },
        { condition: 'Soul Gain', effect: 'Gain 1 Soul Charge for each enemy killed by the vortex.' }
      ],
      scaling: 'Outer damage = 2d8 + (INT modifier), Center damage = 4d8 + (INT modifier * 2)'
    },
    {
      name: 'Bone Colossus',
      cost: {
        actionPoints: 4,
        mana: 14,
        soulCharges: '4'
      },
      description: 'Summon a massive colossus made of bones that fights for you. The colossus has powerful attacks and can sacrifice itself to deal massive damage.',
      mechanics: 'Summon a Bone Colossus with 50+INT*5 HP that lasts for 5 rounds. The colossus has 3 AP per turn and can make the following attacks: Bone Slam (2 AP, 3d10 damage in a 5m radius), Bone Spikes (1 AP, 2d8 damage to a single target), and Self-Destruct (3 AP, 8d10 damage in a 10m radius, destroys the colossus).',
      effects: [
        { condition: 'Colossus Stats', effect: 'HP: 50+INT*5, AP: 3 per turn, Duration: 5 rounds.' },
        { condition: 'Bone Slam', effect: '2 AP, 3d10 damage in a 5m radius.' },
        { condition: 'Bone Spikes', effect: '1 AP, 2d8 damage to a single target.' },
        { condition: 'Self-Destruct', effect: '3 AP, 8d10 damage in a 10m radius, destroys the colossus.' }
      ],
      scaling: 'Colossus HP = 50 + (INT modifier * 5), Slam damage = 3d10 + INT modifier, Spike damage = 2d8 + (INT modifier / 2)'
    }
  ]
};

export default deathcallerAbilities;
