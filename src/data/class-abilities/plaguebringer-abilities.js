// Base spells and abilities for the Plaguebringer class
const plaguebringerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Plague Stacks',
    description: 'The Plaguebringer\'s defining mechanic is the Plague Stack, a debuff resource applied to enemies. Each Plague Stack represents a festering infection on a target; it deals small amounts of necrotic/poison damage each turn and can trigger powerful effects.',
    mechanics: [
      'Most core abilities apply Plague Stacks when they hit, and stacks accumulate on targets up to a cap (3 stacks by default).',
      'Stacks intensify the target\'s affliction: the more stacks an enemy has, the greater the ongoing damage and the more vulnerable to contagion it becomes.',
      'If a target dies while afflicted with one or more Plague Stacks, a portion of those stacks "burst" and spread to nearby enemies, simulating an outbreak.',
      'Some abilities consume stacks to unleash potent effects – for instance, a heavy spell might eat all Plague Stacks on a target to trigger a large poison explosion.',
      'The maximum number of Plague Stacks a target can have is 3 + (Intelligence modifier / 2).'
    ],
    passiveBenefits: {
      name: 'Plague Intensity',
      description: 'The more Plague Stacks on a target, the more severe the effects become.',
      effects: [
        '1 Stack: Target takes 1d4 poison damage at the start of their turn.',
        '2 Stacks: Target takes 1d6 poison damage at the start of their turn and has -1 to saving throws.',
        '3 Stacks: Target takes 1d8 poison damage at the start of their turn, has -2 to saving throws, and healing received is reduced by 25%.',
        '4 Stacks: Target takes 1d10 poison damage at the start of their turn, has -3 to saving throws, and healing received is reduced by 50%.',
        '5+ Stacks: Target takes 1d12 poison damage at the start of their turn, has -4 to saving throws, healing received is reduced by 75%, and they have disadvantage on attack rolls.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Infectious Strike',
      cost: {
        actionPoints: 1,
        mana: 8,
        plagueStacks: '0'
      },
      description: 'A quick melee attack coated in virulent disease. Deals moderate poison damage to one enemy and applies 1 Plague Stack for 2 turns.',
      mechanics: 'Make a melee attack against a target within 5 feet. On hit, deal 1d6 poison damage and apply 1 Plague Stack for 2 turns. If this hit reduces the target to 0 HP and it had any Plague Stacks, the target erupts in a deathly spray, automatically spreading 1 Plague Stack to each of up to two nearby enemies.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d6 poison damage and apply 1 Plague Stack for 2 turns.' },
        { condition: 'Kill with Plague Stacks', effect: 'Target erupts, spreading 1 Plague Stack to up to two nearby enemies within 10 feet.' },
        { condition: 'Critical Hit', effect: 'Apply 2 Plague Stacks instead of 1.' },
        { condition: 'Multiple Stacks', effect: 'If the target already has Plague Stacks, damage increases by 1d4 per existing stack.' }
      ],
      scaling: 'Damage = 1d6 + (INT modifier), Spread range = 10 + (INT modifier) feet'
    },
    {
      name: 'Virulent Bolt',
      cost: {
        actionPoints: 2,
        mana: 12,
        plagueStacks: '0'
      },
      description: 'Hurl a glowing green bolt of contagion at a single enemy. On hit it deals necrotic damage and afflicts the target with 1 Plague Stack.',
      mechanics: 'Launch a bolt of contagion at a target within 30 feet. On hit, deal 2d6 necrotic damage and apply 1 Plague Stack for 3 turns.',
      effects: [
        { condition: 'Hit', effect: 'Deal 2d6 necrotic damage and apply 1 Plague Stack for 3 turns.' },
        { condition: 'Critical Hit', effect: 'Apply 2 Plague Stacks instead of 1.' },
        { condition: 'Target with Stacks', effect: 'If the target already has Plague Stacks, the bolt deals an additional 1d6 damage per stack.' },
        { condition: 'Multiple Targets', effect: 'If there are other enemies within 5 feet of the target, the bolt has a 25% chance to arc to one additional enemy, dealing half damage and applying 1 Plague Stack.' }
      ],
      scaling: 'Damage = 2d6 + (INT modifier), Range = 30 + (INT modifier * 2) feet'
    },
    {
      name: 'Toxic Miasma',
      cost: {
        actionPoints: 2,
        mana: 15,
        plagueStacks: '0'
      },
      description: 'Exhale a cloud of noxious spores in a cone or around yourself. Enemies caught in the Toxic Miasma take poison damage each turn for 3 turns and gain 1 Plague Stack.',
      mechanics: 'Create a 15-foot cone of toxic miasma that lasts for 3 turns. Enemies in the area when cast or who enter it take 1d4 poison damage and gain 1 Plague Stack. Enemies who start their turn in the miasma take 1d4 poison damage.',
      effects: [
        { condition: 'Initial Effect', effect: 'Enemies in the area take 1d4 poison damage and gain 1 Plague Stack.' },
        { condition: 'Lingering Effect', effect: 'Enemies who start their turn in the miasma take 1d4 poison damage.' },
        { condition: 'Entering Area', effect: 'Enemies who enter the miasma take 1d4 poison damage and gain 1 Plague Stack.' },
        { condition: 'Area Denial', effect: 'The miasma creates difficult terrain for enemies.' }
      ],
      scaling: 'Damage = 1d4 + (INT modifier / 2), Area = 15-foot cone or 10-foot radius'
    },
    {
      name: 'Carrion Blast',
      cost: {
        actionPoints: 2,
        mana: 14,
        plagueStacks: '0'
      },
      description: 'The Plaguebringer channels rot into the ground or surrounding air, then unleashes a blast of fetid energy around themselves. All enemies within range take moderate necrotic damage and receive 1 Plague Stack.',
      mechanics: 'Release a blast of fetid energy in a 5-foot radius around you. All enemies within range take 1d6 necrotic damage and receive 1 Plague Stack for 3 turns.',
      effects: [
        { condition: 'Hit', effect: 'Enemies take 1d6 necrotic damage and receive 1 Plague Stack for 3 turns.' },
        { condition: 'Enemies with Stacks', effect: 'If an enemy already has Plague Stacks, they take an additional 1d4 damage per existing stack.' },
        { condition: 'Self-Healing', effect: 'For each enemy hit, you recover 1d4 hit points.' },
        { condition: 'Area Effect', effect: 'The ground in the affected area becomes corrupted for 1 turn, dealing 1d4 poison damage to enemies who move through it.' }
      ],
      scaling: 'Damage = 1d6 + (INT modifier), Radius = 5 + (INT modifier / 2) feet'
    },
    {
      name: 'Blight Curse',
      cost: {
        actionPoints: 2,
        mana: 10,
        plagueStacks: '0'
      },
      description: 'Target a single enemy with a debilitating curse. The cursed target suffers reduced healing and takes necrotic damage per turn for 3 turns.',
      mechanics: 'Curse a target within 30 feet. The target suffers 50% reduced healing and takes 1d4 necrotic damage per turn for 3 turns. Blight Curse also applies 1 Plague Stack on the first turn.',
      effects: [
        { condition: 'Initial Effect', effect: 'Target receives 1 Plague Stack and suffers 50% reduced healing for 3 turns.' },
        { condition: 'Damage Over Time', effect: 'Target takes 1d4 necrotic damage at the start of their turn for 3 turns.' },
        { condition: 'Target with Stacks', effect: 'If the target already has Plague Stacks, the duration increases by 1 turn per existing stack.' },
        { condition: 'Dispel Resistance', effect: 'The curse is harder to remove, requiring a DC 15 + INT modifier check to dispel.' }
      ],
      scaling: 'Damage = 1d4 + (INT modifier), Duration = 3 + (INT modifier / 3) turns'
    },
    {
      name: 'Necrotic Drain',
      cost: {
        actionPoints: 3,
        mana: 15,
        plagueStacks: '1'
      },
      description: 'Tap into the life force of a diseased foe. If the target has at least 1 Plague Stack, this spell siphons health from it: it deals heavy necrotic damage and heals the Plaguebringer for half of the damage dealt.',
      mechanics: 'Target an enemy within 20 feet that has at least 1 Plague Stack. Deal 3d6 necrotic damage and heal yourself for half the damage dealt. This consumes 1 Plague Stack on the target.',
      effects: [
        { condition: 'Drain Effect', effect: 'Deal 3d6 necrotic damage and heal yourself for half the damage dealt.' },
        { condition: 'Consume Stack', effect: 'Consume 1 Plague Stack on the target.' },
        { condition: 'Multiple Stacks', effect: 'If the target has more than 1 Plague Stack, damage increases by 1d6 per additional stack (not consumed).' },
        { condition: 'Kill Target', effect: 'If this kills the target, you regain 1d6 Mana.' }
      ],
      scaling: 'Damage = 3d6 + (INT modifier), Healing = (Damage / 2) + (CON modifier)'
    },
    {
      name: 'Decay Trap',
      cost: {
        actionPoints: 2,
        mana: 12,
        plagueStacks: '0'
      },
      description: 'Lay a trap of rot on the ground at a target location. The trap remains hidden until an enemy steps on it; when triggered, it explodes in poison.',
      mechanics: 'Place a trap at a location within 30 feet. When an enemy moves within 5 feet of the trap, it explodes, dealing 2d6 poison damage to all creatures within 5 feet and applying 1 Plague Stack for 3 turns.',
      effects: [
        { condition: 'Trigger', effect: 'When an enemy moves within 5 feet, the trap explodes.' },
        { condition: 'Explosion', effect: 'Deal 2d6 poison damage to all creatures within 5 feet and apply 1 Plague Stack for 3 turns.' },
        { condition: 'Detection', effect: 'The trap is hidden and requires a DC 15 + INT modifier Perception check to detect.' },
        { condition: 'Duration', effect: 'The trap remains active for 10 minutes or until triggered.' }
      ],
      scaling: 'Damage = 2d6 + (INT modifier), Radius = 5 + (INT modifier / 3) feet'
    },
    {
      name: 'Pestilence Spore',
      cost: {
        actionPoints: 3,
        mana: 18,
        plagueStacks: '0'
      },
      description: 'Hurl a magical spore bomb at a location. On impact, it creates a contaminated area that lingers for 3 turns. Enemies inside the spore field each turn take moderate toxin damage and receive 1 Plague Stack each time they enter or end their turn in the zone.',
      mechanics: 'Throw a spore bomb at a location within 60 feet. On impact, it creates a 10-foot radius contaminated area that lasts for 3 turns. Enemies who enter or end their turn in the area take 2d4 poison damage and receive 1 Plague Stack.',
      effects: [
        { condition: 'Area Effect', effect: 'Create a 10-foot radius contaminated area that lasts for 3 turns.' },
        { condition: 'Damage', effect: 'Enemies who enter or end their turn in the area take 2d4 poison damage and receive 1 Plague Stack.' },
        { condition: 'Lingering Effect', effect: 'The area remains contaminated for 3 turns, dealing damage and applying stacks each turn.' },
        { condition: 'Visibility', effect: 'The contaminated area is visible as a sickly green mist, allowing allies to avoid it.' }
      ],
      scaling: 'Damage = 2d4 + (INT modifier), Radius = 10 + (INT modifier / 2) feet'
    }
  ],

  // Advanced Abilities (Ultimates)
  advancedAbilities: [
    {
      name: 'Epidemic Surge',
      cost: {
        actionPoints: 4,
        mana: 50,
        plagueStacks: '0'
      },
      description: 'The Plaguebringer calls down a towering surge of putrid energy across the battlefield. Every enemy within a large radius suffers heavy poison and necrotic damage and automatically gains 2 Plague Stacks.',
      mechanics: 'Release a surge of putrid energy in a 30-foot radius around you. Every enemy within the radius takes 5d6 poison and necrotic damage and automatically gains 2 Plague Stacks. Additionally, if any enemies already had Plague Stacks, they immediately trigger (burst), spreading those stacks to adjacent foes.',
      effects: [
        { condition: 'Initial Damage', effect: 'Enemies take 5d6 poison and necrotic damage and gain 2 Plague Stacks.' },
        { condition: 'Burst Effect', effect: 'Enemies with existing Plague Stacks trigger a burst, spreading those stacks to adjacent foes.' },
        { condition: 'Chain Reaction', effect: 'If multiple enemies have Plague Stacks, this can create a chain reaction of bursts.' },
        { condition: 'Self-Buff', effect: 'For each enemy affected, you gain 5% damage reduction for 3 turns, up to a maximum of 50%.' }
      ],
      scaling: 'Damage = 5d6 + (INT modifier * 2), Radius = 30 + (INT modifier) feet'
    },
    {
      name: 'Toxic Overgrowth',
      cost: {
        actionPoints: 4,
        mana: 45,
        plagueStacks: '0'
      },
      description: 'The ground becomes alive with fungal rot and toxic vines. For the next 5 turns, a large area is corrupted. Enemies inside this zone at the end of each turn take moderate poison damage and all gain 1 Plague Stack each turn.',
      mechanics: 'Corrupt a 15-foot radius area centered on a point within 60 feet for 5 turns. Enemies inside this zone at the end of each turn take 2d6 poison damage and gain 1 Plague Stack. Meanwhile, you regenerate 1d6 Mana or hit points from the decay each turn.',
      effects: [
        { condition: 'Area Effect', effect: 'Corrupt a 15-foot radius area for 5 turns.' },
        { condition: 'Enemy Effect', effect: 'Enemies inside the zone take 2d6 poison damage and gain 1 Plague Stack at the end of each turn.' },
        { condition: 'Self-Regeneration', effect: 'You regenerate 1d6 Mana or hit points from the decay each turn.' },
        { condition: 'Terrain Effect', effect: 'The area becomes difficult terrain for enemies but not for you.' }
      ],
      scaling: 'Damage = 2d6 + (INT modifier), Regeneration = 1d6 + (CON modifier / 2)'
    },
    {
      name: 'Carrion Cataclysm',
      cost: {
        actionPoints: 4,
        mana: 40,
        plagueStacks: '0',
        healthCost: '20% Max HP'
      },
      description: 'The Plaguebringer channels the spirits of decay in a blight ritual. They consume their own health to unleash a massive necrotic explosion. All enemies in a medium radius take tremendous necrotic damage and 2 Plague Stacks.',
      mechanics: 'Sacrifice 20% of your maximum hit points to unleash a massive necrotic explosion in a 20-foot radius around you. All enemies in the radius take 6d6 necrotic damage and gain 2 Plague Stacks. Furthermore, any enemy killed by this explosion instantly re-animates briefly as a flying plague-ridden carrion, dealing AOE damage on death.',
      effects: [
        { condition: 'Sacrifice', effect: 'Sacrifice 20% of your maximum hit points.' },
        { condition: 'Explosion', effect: 'Deal 6d6 necrotic damage to all enemies in a 20-foot radius and apply 2 Plague Stacks.' },
        { condition: 'Reanimation', effect: 'Enemies killed by this explosion reanimate as plague-ridden carrion for 1 turn, then explode for 2d6 poison damage in a 10-foot radius.' },
        { condition: 'Self-Effect', effect: 'You gain 1 temporary hit point for each point of damage dealt, up to a maximum of your sacrifice amount.' }
      ],
      scaling: 'Damage = 6d6 + (INT modifier * 2), Reanimation Explosion = 2d6 + (INT modifier)'
    },
    {
      name: 'Pandemic Heart',
      cost: {
        actionPoints: 3,
        mana: 30,
        plagueStacks: '0'
      },
      description: 'The Plaguebringer\'s body becomes a conduit of vile contagion. For 3 turns, every basic attack or harmful spell automatically applies an extra Plague Stack to the target, and the Plaguebringer gains a shield equal to half the Plague Stacks they have active on enemies.',
      mechanics: 'For 3 turns, every basic attack or harmful spell you cast automatically applies an extra Plague Stack to the target. Additionally, you gain a shield equal to half the total number of Plague Stacks active on enemies, up to a maximum of your Intelligence score.',
      effects: [
        { condition: 'Duration', effect: 'Lasts for 3 turns.' },
        { condition: 'Attack Enhancement', effect: 'Every basic attack or harmful spell automatically applies an extra Plague Stack to the target.' },
        { condition: 'Shield', effect: 'Gain a shield equal to half the total number of Plague Stacks active on enemies, up to a maximum of your Intelligence score.' },
        { condition: 'Aura', effect: 'Enemies within 5 feet of you take 1d4 poison damage at the start of their turn.' }
      ],
      scaling: 'Shield = (Total Plague Stacks / 2), up to INT score, Aura Damage = 1d4 + (INT modifier / 2)'
    },
    {
      name: 'Harbinger\'s Bloom',
      cost: {
        actionPoints: 4,
        mana: 50,
        plagueStacks: '0'
      },
      description: 'In a grand finale of pestilence, the Plaguebringer causes all Plague Stacks on the battlefield to erupt simultaneously. Enemies carrying Plague Stacks explode in a torrent of toxin, dealing area damage and applying stacks to others.',
      mechanics: 'Cause all Plague Stacks on the battlefield to erupt simultaneously. Each enemy with Plague Stacks takes 3d6 poison damage per stack and explodes, dealing 2d6 poison damage to all creatures within 10 feet and applying 1 Plague Stack to them. Additionally, each explosion leaves behind a lingering poison puddle that deals 1d6 poison damage per turn for 2 turns.',
      effects: [
        { condition: 'Stack Eruption', effect: 'Each enemy with Plague Stacks takes 3d6 poison damage per stack.' },
        { condition: 'Explosion', effect: 'Enemies with Plague Stacks explode, dealing 2d6 poison damage to all creatures within 10 feet and applying 1 Plague Stack.' },
        { condition: 'Lingering Effect', effect: 'Each explosion leaves behind a poison puddle that deals 1d6 poison damage per turn for 2 turns.' },
        { condition: 'Self-Healing', effect: 'You heal for 10% of the total damage dealt.' }
      ],
      scaling: 'Stack Damage = 3d6 + (INT modifier) per stack, Explosion Damage = 2d6 + (INT modifier)'
    },
    {
      name: 'Virulent Metamorphosis',
      cost: {
        actionPoints: 5,
        mana: 60,
        plagueStacks: '0'
      },
      description: 'The Plaguebringer undergoes a horrific transformation, becoming a living embodiment of disease. While transformed, all abilities are enhanced, and you emanate an aura of contagion.',
      mechanics: 'Transform into a living embodiment of disease for 5 turns. While transformed, all your abilities deal 50% more damage, apply 1 additional Plague Stack, and cost 25% less Mana. Additionally, you emanate an aura of contagion in a 15-foot radius, applying 1 Plague Stack to enemies who enter or start their turn in the aura.',
      effects: [
        { condition: 'Transformation', effect: 'Transform for 5 turns.' },
        { condition: 'Ability Enhancement', effect: 'All abilities deal 50% more damage, apply 1 additional Plague Stack, and cost 25% less Mana.' },
        { condition: 'Contagion Aura', effect: 'Emanate an aura in a 15-foot radius, applying 1 Plague Stack to enemies who enter or start their turn in the aura.' },
        { condition: 'Immunity', effect: 'While transformed, you are immune to poison and disease effects.' }
      ],
      scaling: 'Duration = 5 + (CON modifier / 2) turns, Aura Radius = 15 + (INT modifier) feet'
    },
    {
      name: 'Plague Reactor',
      cost: {
        actionPoints: 3,
        mana: 35,
        plagueStacks: '0'
      },
      description: 'Create a pulsating reactor of disease that periodically releases waves of contagion, applying Plague Stacks to enemies and enhancing the effects of existing stacks.',
      mechanics: 'Create a plague reactor at a point within 60 feet that lasts for 4 turns. At the start of each of your turns, the reactor pulses, applying 1 Plague Stack to all enemies within 20 feet and increasing the damage of existing Plague Stacks by 50% for 1 turn.',
      effects: [
        { condition: 'Reactor Creation', effect: 'Create a plague reactor that lasts for 4 turns.' },
        { condition: 'Pulse Effect', effect: 'At the start of each of your turns, the reactor pulses, applying 1 Plague Stack to all enemies within 20 feet.' },
        { condition: 'Stack Enhancement', effect: 'Existing Plague Stacks deal 50% more damage for 1 turn after each pulse.' },
        { condition: 'Destruction', effect: 'When the reactor expires or is destroyed, it explodes, dealing 4d6 poison damage to all creatures within 15 feet and applying 2 Plague Stacks.' }
      ],
      scaling: 'Pulse Radius = 20 + (INT modifier) feet, Explosion Damage = 4d6 + (INT modifier * 2)'
    },
    {
      name: 'Miasmic Possession',
      cost: {
        actionPoints: 4,
        mana: 45,
        plagueStacks: '3'
      },
      description: 'Take control of an enemy afflicted with your diseases, turning them into a walking plague bomb that spreads contagion to their allies before violently exploding.',
      mechanics: 'Target an enemy with at least 3 Plague Stacks within 30 feet. You take control of the target for 3 turns. While controlled, the target attacks its allies, spreading 1 Plague Stack with each attack. At the end of the duration or when the target dies, it explodes, dealing 5d6 poison damage to all creatures within 15 feet and applying 2 Plague Stacks.',
      effects: [
        { condition: 'Control', effect: 'Take control of the target for 3 turns.' },
        { condition: 'Contagion Spread', effect: 'The controlled target spreads 1 Plague Stack with each attack.' },
        { condition: 'Explosion', effect: 'At the end of the duration or when the target dies, it explodes, dealing 5d6 poison damage to all creatures within 15 feet and applying 2 Plague Stacks.' },
        { condition: 'Resistance', effect: 'The target can make a WIS save at the end of each of its turns to break free from your control.' }
      ],
      scaling: 'Control DC = 15 + (INT modifier), Explosion Damage = 5d6 + (INT modifier * 2)'
    }
  ]
};

export default plaguebringerAbilities;
