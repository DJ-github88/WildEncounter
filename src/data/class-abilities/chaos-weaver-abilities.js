// Base spells and abilities for the Chaos Weaver class
const chaosWeaverAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Chaos Dice & Entropy Points',
    description: 'The Chaos Weaver harnesses unpredictability through the Chaos Dice System and Entropy Points. Instead of deterministic effects, spells trigger random-effect tables using various dice (d4, d6, d8, d10, d12, d20, d100). Entropy Points are generated through chaotic spellcasting and can be spent to manipulate dice rolls.',
    mechanics: [
      'Entropy Points (EP): Start each encounter with 1 EP. Gain 1 EP whenever you roll on a Chaos Table. Maximum EP equals your Intelligence modifier + your level/5 (rounded up).',
      'Entropy Points can be spent to manipulate dice rolls: 1 EP to reroll a single die, 2 EP to add/subtract 1 from a roll, 3 EP to roll with advantage (roll twice, take higher).',
      'Chaos Threshold: When you reach maximum EP, you enter Chaos Threshold state. While in this state, your chaos effects are amplified (roll with advantage) but you cannot spend EP until you drop below maximum.',
      'Chaos Backlash: When you roll the lowest possible result on a Chaos Table (natural 1 on any die), you suffer Chaos Backlash. Roll on the Backlash Table to determine the effect.',
      'Chaos Surge: When you roll the highest possible result on a Chaos Table (natural maximum on any die), you trigger a Chaos Surge. Roll on the Surge Table to determine the bonus effect.',
      'Chaos Tokens: Some abilities generate Chaos Tokens (different from EP). These tokens are spent on specific powerful abilities rather than dice manipulation.'
    ],
    tables: [
      {
        name: 'Elemental Chaos Table (d12)',
        description: 'Used for spells that channel raw elemental chaos.',
        results: [
          { range: '1', effect: 'Fire damage (1d8) + target is ignited for 1d4 rounds (1d4 damage per round)' },
          { range: '2', effect: 'Ice damage (1d6) + target is slowed for 1d4 rounds (movement reduced by half)' },
          { range: '3', effect: 'Lightning damage (2d4) + jumps to nearest enemy within 10 feet for half damage' },
          { range: '4', effect: 'Acid damage (1d4) + 1d4 damage for 1d4 rounds, destroying armor (reducing AC by 1)' },
          { range: '5', effect: 'Force damage (1d10) + target is pushed 1d6 × 5 feet away' },
          { range: '6', effect: 'Poison damage (1d6) + target has disadvantage on next action' },
          { range: '7', effect: 'Necrotic damage (2d4) + heal yourself for half the damage dealt' },
          { range: '8', effect: 'Radiant damage (1d8) + target is blinded for 1 round' },
          { range: '9', effect: 'Thunder damage (1d8) + target is deafened for 1d4 rounds' },
          { range: '10', effect: 'Psychic damage (1d10) + target is confused for 1 round (rolls d8 for random action)' },
          { range: '11', effect: 'Wild Magic - roll twice on this table and apply both effects at half power' },
          { range: '12', effect: 'Void damage (3d6) that ignores resistances and generates 1 additional EP' }
        ]
      },
      {
        name: 'Flux Effect Table (d20)',
        description: 'Used for spells that create unpredictable area effects.',
        results: [
          { range: '1', effect: 'Backfire - you take 1d8 force damage and are knocked prone' },
          { range: '2-3', effect: 'Harmless glitter effect that reveals invisible creatures for 1d4 rounds' },
          { range: '4-5', effect: 'Gravity reversal - all creatures in area float 10 feet upward for 1 round' },
          { range: '6-7', effect: 'Thick fog fills the area, creating heavily obscured terrain for 1d4 rounds' },
          { range: '8-9', effect: 'Everyone in range is pushed 1d6 × 5 feet in random directions' },
          { range: '10-11', effect: 'A wave of energy deals 2d8 random-element damage (roll a d8 on Elemental Table)' },
          { range: '12-13', effect: 'Time distortion - enemies in area have their speed reduced by half for 1d4 rounds' },
          { range: '14-15', effect: 'Reality ripple - terrain becomes difficult for enemies but normal for allies for 1d4 rounds' },
          { range: '16-17', effect: 'Enemies are scattered and lose their next bonus action' },
          { range: '18-19', effect: 'All spells cast in the area for 1d4 rounds have their range doubled' },
          { range: '20', effect: 'Reality tear - deals 4d6 force damage to all enemies and creates a portal that allies can use to teleport within the area for 1d4 rounds' }
        ]
      },
      {
        name: 'Shield Fluctuation Table (d10)',
        description: 'Used for spells that create protective barriers.',
        results: [
          { range: '1', effect: 'Shield overloads, leaving you vulnerable (disadvantage on next saving throw)' },
          { range: '2', effect: 'Shield provides +1 AC for 1d4 rounds' },
          { range: '3', effect: 'Shield provides +2 AC for 1d4 rounds' },
          { range: '4', effect: 'Shield provides +3 AC for 1d4 rounds' },
          { range: '5', effect: 'Shield provides resistance to one random damage type for 1d6 rounds (roll 1d8 on Elemental Table)' },
          { range: '6', effect: 'Shield absorbs the next 2d6 damage completely' },
          { range: '7', effect: 'Shield reflects the next spell cast at you back at the caster at half power' },
          { range: '8', effect: 'Shield pulses with energy, dealing 1d6 force damage to attackers who hit you with melee attacks' },
          { range: '9', effect: 'Shield grants you 1d6 temporary hit points per round for 1d4 rounds' },
          { range: '10', effect: 'Target phases out of reality (intangible for 1 round, immune to all damage but cannot attack)' }
        ]
      },
      {
        name: 'Chaos Backlash Table (d8)',
        description: 'Triggered when rolling a natural 1 on any Chaos Table.',
        results: [
          { range: '1', effect: 'Chaotic Drain - Lose 1d4 EP (if you have any)' },
          { range: '2', effect: 'Spell Fizzle - The spell fails and the mana is wasted' },
          { range: '3', effect: 'Entropic Feedback - Take 1d6 force damage per EP you currently have' },
          { range: '4', effect: 'Reality Stutter - You cannot cast spells until the end of your next turn' },
          { range: '5', effect: 'Dimensional Shift - You are teleported 3d6 feet in a random direction' },
          { range: '6', effect: 'Chaotic Confusion - You have disadvantage on all rolls until the end of your next turn' },
          { range: '7', effect: 'Entropic Leak - Your next 3 spells cost 1 additional mana' },
          { range: '8', effect: 'Wild Misfire - The spell targets a random creature within range instead' }
        ]
      },
      {
        name: 'Chaos Surge Table (d8)',
        description: 'Triggered when rolling the maximum value on any Chaos Table.',
        results: [
          { range: '1', effect: 'Entropic Infusion - Gain 1d4 EP (up to your maximum)' },
          { range: '2', effect: 'Doubled Effect - The spell\'s effect is doubled in power or duration' },
          { range: '3', effect: 'Mana Refund - Regain the mana cost of the spell' },
          { range: '4', effect: 'Chaotic Quickening - You can cast another spell as a bonus action' },
          { range: '5', effect: 'Reality Anchor - Your next spell cannot trigger Chaos Backlash' },
          { range: '6', effect: 'Entropic Shield - Gain resistance to all damage until the start of your next turn' },
          { range: '7', effect: 'Chaos Multiplication - The spell affects an additional target within range' },
          { range: '8', effect: 'Entropy Mastery - You can choose the result of your next chaos roll instead of rolling' }
        ]
      }
    ]
  },

  // Base Spells
  baseSpells: [
    {
      name: 'Chaotic Bolt',
      cost: {
        actionPoints: 2,
        mana: 2,
        chaosRoll: 'Elemental Chaos Table (d12)'
      },
      description: 'Hurl a bolt of raw chaos at one target, dealing damage based on the elemental type determined by your roll.',
      mechanics: 'On hit, roll d12 on the Elemental Chaos Table. The bolt deals damage based on the element rolled. Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Elemental Chaos roll once',
        'Spend 2 EP: Add or subtract 1 from your Elemental Chaos roll',
        'Spend 3 EP: Roll with advantage on the Elemental Chaos Table'
      ],
      scaling: 'Base damage scales with INT modifier'
    },
    {
      name: 'Flux Nova',
      cost: {
        actionPoints: 3,
        mana: 3,
        chaosRoll: 'Flux Effect Table (d20)'
      },
      description: 'Unleash an unpredictable explosion of chaotic energy in a 15-foot radius.',
      mechanics: 'Roll d20 on the Flux Effect Table to determine the area effect. Generates 1 EP. If you\'re at maximum EP when casting, the area increases to 20 feet.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Flux Effect roll once',
        'Spend 2 EP: Add or subtract 1 from your Flux Effect roll',
        'Spend 3 EP: Roll with advantage on the Flux Effect Table'
      ],
      scaling: 'Area and effect power scale with INT modifier'
    },
    {
      name: 'Entropic Shield',
      cost: {
        actionPoints: 1,
        mana: 1,
        chaosRoll: 'Shield Fluctuation Table (d10)'
      },
      description: 'Erect a barrier of chaos around yourself or an ally that provides unpredictable protection.',
      mechanics: 'Roll d10 on the Shield Fluctuation Table to determine the shield effect. Generates 1 EP. The shield lasts for 1d4+1 rounds unless otherwise specified.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Shield Fluctuation roll once',
        'Spend 2 EP: Add or subtract 1 from your Shield Fluctuation roll',
        'Spend 3 EP: Roll with advantage on the Shield Fluctuation Table'
      ],
      scaling: 'Shield strength and duration scale with INT modifier'
    },
    {
      name: 'Entropy Tap',
      cost: {
        actionPoints: 0,
        mana: 1,
        chaosRoll: 'd6'
      },
      description: 'A quick cantrip that taps into chaotic energy for minor effects while generating Entropy Points.',
      mechanics: 'Roll d6: on 1, deal 1d4 force damage to yourself; on 2-3, deal 1d6 force damage to target; on 4-5, gain 1d4 temporary hit points; on 6, gain 1 additional EP. Always generates 1 EP regardless of result.',
      entropyInteractions: [
        'Cannot spend EP on this spell\'s roll',
        'If cast while at maximum EP, roll twice and choose which result to use'
      ],
      scaling: 'Effects scale with INT modifier'
    },
    {
      name: 'Probability Manipulation',
      cost: {
        actionPoints: 1,
        mana: 2,
        chaosRoll: 'd8'
      },
      description: 'Manipulate the probability of events around you, affecting dice rolls of yourself or others.',
      mechanics: 'Roll d8: on 1, an enemy rerolls their next successful attack; on 2-3, an enemy has disadvantage on their next roll; on 4-5, an ally has advantage on their next roll; on 6-7, you have advantage on your next saving throw; on 8, the next chaos roll you make cannot trigger Chaos Backlash. Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Probability Manipulation roll once',
        'Spend 2 EP: Add or subtract 1 from your Probability Manipulation roll',
        'Spend 3 EP: Roll with advantage on this spell'
      ],
      scaling: 'Duration = 1 round + (INT / 3) rounds'
    },
    {
      name: 'Chaos Orb',
      cost: {
        actionPoints: 2,
        mana: 2,
        chaosRoll: 'd8'
      },
      description: 'Throw an orb of pure chaos that splits into multiple projectiles, each striking a random target.',
      mechanics: 'Roll d8 to determine the number of projectiles. Each projectile deals 1d6 force damage to a random target within range. Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your d8 once to determine number of projectiles',
        'Spend 2 EP: Each projectile deals an additional 1d4 damage',
        'Spend 3 EP: You can choose the targets instead of them being random'
      ],
      scaling: 'Damage per projectile = 1d6 + (INT / 3)'
    },
    {
      name: 'Dice of Destiny',
      cost: {
        actionPoints: 3,
        mana: 4,
        chaosRoll: '3d6'
      },
      description: 'Roll three dice of fate, each determining a different chaotic effect.',
      mechanics: 'Roll 3d6. Each die triggers a different effect: First die (Elemental Chaos Table), Second die (Shield effect on ally), Third die (Flux effect in small area). Generates 2 EP.',
      entropyInteractions: [
        'Spend 2 EP: Reroll any one of the three dice',
        'Spend 4 EP: Reroll all three dice',
        'Spend 6 EP: Choose the result of one die instead of rolling'
      ],
      scaling: 'All effects scale with INT modifier'
    },
    {
      name: 'Entropy Storm',
      cost: {
        actionPoints: 4,
        mana: 6,
        chaosRoll: '1d100'
      },
      description: 'Unleash a massive storm of chaotic energy with wildly unpredictable effects.',
      mechanics: 'Roll d100 for catastrophic chaos effects: 1-10 (Backfire massively), 11-30 (Minor chaos), 31-70 (Major area chaos), 71-90 (Devastating enemy effects), 91-99 (Reality-warping effects), 100 (Ascend to chaos god temporarily). Generates 3 EP.',
      entropyInteractions: [
        'Spend 5 EP: Reroll the d100 once',
        'Spend 8 EP: Add or subtract 10 from the d100 roll',
        'Spend 10 EP: Roll twice and choose which result to use'
      ],
      scaling: 'Effects scale dramatically with level and INT'
    },
    {
      name: 'Chaos Cascade',
      cost: {
        actionPoints: 2,
        mana: 3,
        chaosRoll: 'Variable'
      },
      description: 'Each chaos effect triggers another smaller chaos effect in a cascading chain.',
      mechanics: 'Roll on any chaos table. If the result is 7 or higher, roll again on a different table with -2 to the roll. Continue until you roll 6 or lower. Generates 1 EP per roll.',
      entropyInteractions: [
        'Spend 1 EP: Continue the cascade even if you roll 6 or lower',
        'Spend 3 EP: Each cascade roll gains +1 instead of -2',
        'Spend 5 EP: Choose which table to roll on for each cascade'
      ],
      scaling: 'Maximum cascades = 1 + (INT / 4)'
    },
    {
      name: 'Quantum Leap',
      cost: {
        actionPoints: 1,
        mana: 2,
        chaosRoll: 'd20'
      },
      description: 'Teleport through chaotic space-time, with unpredictable side effects.',
      mechanics: 'Roll d20: 1-5 (Teleport fails, take 1d6 force damage), 6-10 (Teleport 15 feet), 11-15 (Teleport 30 feet), 16-19 (Teleport 45 feet + gain 1 EP), 20 (Teleport anywhere within 100 feet + become invisible for 1 round). Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll the d20 once',
        'Spend 2 EP: Add +3 to the d20 roll',
        'Spend 3 EP: Teleport an ally with you'
      ],
      scaling: 'Teleport distance increases by 5 feet per 2 levels'
    },
    {
      name: 'Reality Distortion',
      cost: {
        actionPoints: 2,
        mana: 3,
        chaosRoll: 'd12'
      },
      description: 'Create a ripple in reality that distorts space and time in a 20-foot radius.',
      mechanics: 'Roll d12: on 1-2, slow all enemies (half speed) for 1d4 rounds; on 3-4, create difficult terrain for 1d6 rounds; on 5-6, teleport all creatures to random locations within the area; on 7-8, reverse gravity for 1 round; on 9-10, create a zone where healing is reversed (healing spells deal damage, damaging spells heal) for 1 round; on 11-12, create a zone where all spells cast trigger a roll on the Flux Effect Table for 1d4 rounds. Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Reality Distortion roll once',
        'Spend 2 EP: Add or subtract 1 from your Reality Distortion roll',
        'Spend 3 EP: Roll with advantage on this spell'
      ],
      scaling: 'Area = 20ft + (INT × 5)ft radius, duration increases with INT'
    },
    {
      name: 'Entropic Touch',
      cost: {
        actionPoints: 1,
        mana: 1,
        chaosRoll: 'd8'
      },
      description: 'Touch a creature or object and infuse it with chaotic energy, causing unpredictable transformations.',
      mechanics: 'Roll d8: on 1, target becomes fragile (takes double damage from next hit); on 2, target becomes temporarily indestructible for 1 round; on 3, target changes size (grows or shrinks by 50%); on 4, target levitates 10 feet for 1d4 rounds; on 5, target phases in and out of reality (50% chance to be hit by attacks); on 6, target\'s appearance changes randomly; on 7, target gains a random minor magical property for 1d6 rounds; on 8, target is teleported up to 30 feet to a visible location. Generates 1 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Entropic Touch roll once',
        'Spend 2 EP: Add or subtract 1 from your Entropic Touch roll',
        'Spend 3 EP: Roll with advantage on this spell'
      ],
      scaling: 'Duration = 1 round + INT rounds'
    },
    {
      name: 'Chaos Nova',
      cost: {
        actionPoints: 3,
        mana: 4,
        chaosRoll: 'd10'
      },
      description: 'Channel pure chaos into a devastating explosion that affects all creatures in a 30-foot radius.',
      mechanics: 'Roll d10: on 1, deal 1d10 damage to yourself and all allies in range; on 2-3, deal 2d6 force damage to all creatures in range; on 4-5, deal 3d6 damage of a random type (roll on Elemental Table) to all enemies; on 6-7, all enemies are pushed 15 feet away and knocked prone; on 8-9, all enemies are stunned for 1 round; on 10, tear reality apart, dealing 4d10 force damage to all enemies and healing allies for half that amount. Generates 2 EP.',
      entropyInteractions: [
        'Spend 1 EP: Reroll your Chaos Nova roll once',
        'Spend 2 EP: Add or subtract 1 from your Chaos Nova roll',
        'Spend 3 EP: Roll with advantage on this spell'
      ],
      scaling: 'Damage and area scale with INT modifier'
    },
    {
      name: 'Entropic Surge',
      cost: {
        actionPoints: 2,
        mana: 2,
        entropyPoints: 2
      },
      description: 'Channel your accumulated Entropy Points into a focused surge of chaotic energy.',
      mechanics: 'Spend 2 EP to cast. Choose one: deal 2d8 force damage to a target, heal an ally for 2d8 hit points, or grant an ally advantage on all rolls for 1 round. Does not generate EP (it spends them instead).',
      entropyInteractions: [
        'If cast while in Chaos Threshold state, all effects are doubled in power',
        'Can spend an additional 1 EP to affect an additional target'
      ],
      scaling: 'Effects scale with INT modifier'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Entropy Master',
      type: 'Passive',
      description: 'Your mastery of Entropy Points allows you to manipulate chaos more efficiently.',
      mechanics: 'You generate 1 additional EP when rolling on any Chaos Table. Your maximum EP is increased by 2.',
      entropyInteractions: 'When you spend EP to manipulate a roll, the cost is reduced by 1 (minimum 1).',
      requirements: 'Level 20, 3 points in Order in Chaos'
    },
    {
      name: 'Chaos Overload',
      type: 'Active',
      cost: {
        actionPoints: 1,
        mana: 1,
        entropyPoints: 2
      },
      description: 'Overload your next chaos roll with additional entropy, causing multiple effects.',
      mechanics: 'Spend 2 EP. The next time you roll on a Chaos Table, roll twice and apply both results. This dramatically increases volatility but also power.',
      entropyInteractions: 'If used while in Chaos Threshold state, roll three times instead of twice.',
      requirements: 'Level 25, 4 points in Cataclysmic Surges'
    },
    {
      name: 'Probability Anchor',
      type: 'Passive',
      description: 'Your control over probability allows you to anchor reality against the worst outcomes.',
      mechanics: 'Whenever you roll a natural 1 on any Chaos Table, you automatically reroll once without spending EP. If the second roll is also a 1, gain 2 EP.',
      entropyInteractions: 'When you spend EP to reroll a die, you can reroll it twice instead of once for the same EP cost.',
      requirements: 'Level 25, 4 points in Order in Chaos'
    },
    {
      name: 'Entropic Feedback Loop',
      type: 'Passive',
      description: 'You\'ve learned to create feedback loops in the fabric of chaos, generating additional entropy from your spells.',
      mechanics: 'Whenever you roll the maximum value on a Chaos Table, gain 1 additional EP and recover 1d4 mana.',
      entropyInteractions: 'When you enter Chaos Threshold state, your next spell costs 0 mana.',
      requirements: 'Level 30, 5 points in Cataclysmic Surges'
    },
    {
      name: 'Chaos Weaving',
      type: 'Active',
      cost: {
        actionPoints: 2,
        mana: 2,
        entropyPoints: 1
      },
      description: 'Weave chaotic energy into a specific pattern, creating a predetermined effect rather than a random one.',
      mechanics: 'Spend 1 EP. Instead of rolling on a Chaos Table for your next spell, you may choose any result from that table. The spell generates no EP.',
      entropyInteractions: 'If used while in Chaos Threshold state, the chosen effect is 50% more powerful.',
      requirements: 'Level 35, 6 points in Order in Chaos'
    },
    {
      name: 'Pandemonium Wave',
      type: 'Active',
      cost: {
        actionPoints: 4,
        mana: 4,
        entropyPoints: 3
      },
      description: 'Release a wave of pure chaos that affects all creatures in a 40-foot radius with random effects.',
      mechanics: 'Spend 3 EP. Each creature in the area rolls d20 on the Pandemonium Table: 1-5: swap positions with another random creature; 6-10: lose next action; 11-15: change size (grow or shrink by 50%); 16-20: gain a random buff or debuff for 1d4 rounds.',
      entropyInteractions: 'For each additional EP spent (up to 3), increase the area by 10 feet.',
      requirements: 'Level 40, 7 points in Tactical Disruption'
    },
    {
      name: 'Reality Fracture',
      type: 'Active',
      cost: {
        actionPoints: 3,
        mana: 3,
        entropyPoints: 2
      },
      description: 'Tear a hole in reality at a target location, creating a zone of pure chaos.',
      mechanics: 'Spend 2 EP. Create a 15-foot radius zone that lasts for 1d4+1 rounds. Roll d8 to determine the zone\'s effect: 1: gravity reversal; 2: time flows at half speed; 3: elements transmute into each other; 4: healing and damage are reversed; 5: creatures phase in and out of reality; 6: teleportation field (creatures entering are teleported to a random location in the zone); 7: wild magic zone (all spells trigger a roll on the Flux Effect Table); 8: entropy void (no magic functions within the zone).',
      entropyInteractions: 'If you spend 4 or more EP total, you can choose the zone\'s effect instead of rolling.',
      requirements: 'Level 45, 7 points in Tactical Disruption'
    },
    {
      name: 'Entropy Cascade',
      type: 'Passive',
      description: 'Your chaos spells can trigger cascading effects, creating chains of chaotic energy.',
      mechanics: 'Whenever you roll the maximum value on a Chaos Table, your next spell automatically triggers a Chaos Surge without needing to roll the maximum again.',
      entropyInteractions: 'While in Chaos Threshold state, your spells have a 20% chance to cost no EP to manipulate.',
      requirements: 'Level 40, 6 points in Cataclysmic Surges'
    },
    {
      name: 'Avatar of Chaos',
      type: 'Active Ultimate',
      cost: {
        actionPoints: 5,
        mana: 5,
        entropyPoints: 'All'
      },
      description: 'Transform into a being of pure chaos, gaining immense power at the cost of control.',
      mechanics: 'Spend all EP (minimum 5). For 1d4+1 rounds, you enter Avatar of Chaos state. While in this state: all your chaos rolls are made with advantage; you generate 2 EP per turn automatically; your spells cost 1 less mana; and you can cast one additional spell per turn. However, all your spells have a 25% chance to trigger a roll on the Chaos Backlash Table.',
      entropyInteractions: 'The more EP spent to activate this ability, the longer the duration (add 1 round for every 2 EP spent above 5).',
      requirements: 'Level 50, 8 points in Cataclysmic Surges'
    },
    {
      name: 'Master of Probability',
      type: 'Active Ultimate',
      cost: {
        actionPoints: 5,
        mana: 5,
        entropyPoints: 'All'
      },
      description: 'Achieve perfect control over probability for a brief period, bending reality to your will.',
      mechanics: 'Spend all EP (minimum 5). For 1d4 rounds, you can choose the result of any chaos roll you make instead of rolling. Additionally, you can force one enemy per round to reroll any die roll with disadvantage.',
      entropyInteractions: 'The more EP spent to activate this ability, the longer the duration (add 1 round for every 2 EP spent above 5).',
      requirements: 'Level 50, 8 points in Order in Chaos'
    },
    {
      name: 'Reality Unraveler',
      type: 'Active Ultimate',
      cost: {
        actionPoints: 5,
        mana: 5,
        entropyPoints: 'All'
      },
      description: 'Unravel the fabric of reality in a massive area, creating a zone of pure entropy.',
      mechanics: 'Spend all EP (minimum 5). Create a 50-foot radius zone of entropy that lasts for 1d4 rounds. Within this zone: all creatures take 2d10 force damage per round; all spells cast have a 50% chance to trigger a roll on the Flux Effect Table; teleportation and planar travel are impossible; and reality itself becomes malleable (the DM determines random reality shifts each round).',
      entropyInteractions: 'The more EP spent to activate this ability, the larger the area (add 10 feet to the radius for every 2 EP spent above 5).',
      requirements: 'Level 50, 8 points in Tactical Disruption'
    }
  ],

  // Order in Chaos Specialization Spells
  orderInChaosSpells: [
    {
      name: 'Probability Anchor',
      cost: {
        actionPoints: 1,
        mana: 2,
        entropyPoints: 1
      },
      description: 'Stabilize probability around a target to control outcomes.',
      mechanics: 'Target gains advantage on their next roll. Spend 1 EP to guarantee they roll 15 or higher.',
      specialization: 'order-in-chaos',
      scaling: 'Can affect additional targets with higher INT'
    },
    {
      name: 'Chaos Lens',
      cost: {
        actionPoints: 2,
        mana: 3,
        entropyPoints: 2
      },
      description: 'Focus chaotic energy into a precise beam of controlled destruction.',
      mechanics: 'Roll d12 on Elemental Chaos Table. Deal damage of that type. Spend 2 EP to choose the element instead.',
      specialization: 'order-in-chaos',
      scaling: 'Damage increases with INT modifier'
    },
    {
      name: 'Entropy Weave',
      cost: {
        actionPoints: 2,
        mana: 4,
        entropyPoints: 1
      },
      description: 'Weave chaotic energy into a protective pattern.',
      mechanics: 'Create a shield that absorbs the next 3 attacks. Each absorbed attack generates 1 EP.',
      specialization: 'order-in-chaos',
      scaling: 'Shield absorbs additional attacks with higher level'
    },
    {
      name: 'Controlled Chaos',
      cost: {
        actionPoints: 3,
        mana: 5,
        entropyPoints: 3
      },
      description: 'Create a zone where you control all random effects.',
      mechanics: '20 ft radius. For 1 minute, you choose all dice roll results within the zone.',
      specialization: 'order-in-chaos',
      scaling: 'Area increases with INT modifier'
    }
  ],

  // Cataclysmic Surges Specialization Spells
  cataclysmicSurgesSpells: [
    {
      name: 'Chaos Eruption',
      cost: {
        actionPoints: 2,
        mana: 3,
        chaosRoll: 'Elemental Chaos Table (d12)'
      },
      description: 'Unleash a violent eruption of chaotic energy.',
      mechanics: 'Roll d12 on Elemental Chaos Table. All enemies in 15 ft take 3d6 damage of that type.',
      specialization: 'cataclysmic-surges',
      scaling: 'Damage and area increase with level'
    },
    {
      name: 'Entropy Storm',
      cost: {
        actionPoints: 3,
        mana: 4,
        entropyPoints: 2
      },
      description: 'Create a storm of pure entropy that devastates the battlefield.',
      mechanics: '30 ft radius. Each creature rolls d6: 1-2 takes 2d8 force, 3-4 takes 2d8 random element, 5-6 heals 2d8.',
      specialization: 'cataclysmic-surges',
      scaling: 'Damage increases with INT modifier'
    },
    {
      name: 'Reality Bomb',
      cost: {
        actionPoints: 4,
        mana: 6,
        entropyPoints: 4
      },
      description: 'Detonate a sphere of compressed chaos energy.',
      mechanics: 'Target point explodes in 25 ft radius. Roll d20 for each creature: 1-5 no effect, 6-15 take 4d10 damage, 16-20 take 8d10 damage.',
      specialization: 'cataclysmic-surges',
      scaling: 'Explosion radius increases with level'
    },
    {
      name: 'Cascade Reaction',
      cost: {
        actionPoints: 2,
        mana: 3,
        entropyPoints: 1
      },
      description: 'Start a chain reaction of chaotic energy.',
      mechanics: 'Target takes 2d6 damage. If killed, explosion deals same damage to all adjacent enemies.',
      specialization: 'cataclysmic-surges',
      scaling: 'Chain reaction can spread further with higher INT'
    }
  ],

  // Tactical Disruption Specialization Spells
  tacticalDisruptionSpells: [
    {
      name: 'Chaos Bind',
      cost: {
        actionPoints: 2,
        mana: 3,
        entropyPoints: 1
      },
      description: 'Bind an enemy with chaotic energy that disrupts their actions.',
      mechanics: 'Target is restrained. Each turn they can attempt to break free, but failure generates 1 EP for you.',
      specialization: 'tactical-disruption',
      scaling: 'Can bind additional targets with higher INT'
    },
    {
      name: 'Entropy Field',
      cost: {
        actionPoints: 2,
        mana: 4,
        entropyPoints: 2
      },
      description: 'Create a field that disrupts enemy abilities.',
      mechanics: '20 ft radius. Enemies have disadvantage on spell attacks and saves. Lasts 1 minute.',
      specialization: 'tactical-disruption',
      scaling: 'Field size increases with level'
    },
    {
      name: 'Chaos Swap',
      cost: {
        actionPoints: 1,
        mana: 2,
        entropyPoints: 1
      },
      description: 'Swap positions of two creatures through chaotic teleportation.',
      mechanics: 'Two creatures within 60 ft instantly swap positions. Both take 1d6 force damage.',
      specialization: 'tactical-disruption',
      scaling: 'Range increases with INT modifier'
    },
    {
      name: 'Probability Maze',
      cost: {
        actionPoints: 3,
        mana: 5,
        entropyPoints: 3
      },
      description: 'Trap enemies in a maze of shifting probabilities.',
      mechanics: 'Enemies in 30 ft radius must roll d20 each turn: 1-10 they are lost and skip their turn.',
      specialization: 'tactical-disruption',
      scaling: 'Maze becomes more confusing with higher level'
    }
  ],

  // Universal Chaos Weaver Spells
  universalSpells: [
    {
      name: 'Entropy Sight',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'See the chaotic patterns underlying reality.',
      mechanics: 'For 10 minutes, you can see all random effects before they happen.',
      specialization: 'universal',
      scaling: 'Duration increases with INT modifier'
    },
    {
      name: 'Chaos Infusion',
      cost: {
        actionPoints: 1,
        mana: 2,
        entropyPoints: 1
      },
      description: 'Infuse your weapon with chaotic energy.',
      mechanics: 'Next weapon attack rolls on Elemental Chaos Table for damage type and +1d6 damage.',
      specialization: 'universal',
      scaling: 'Bonus damage increases with level'
    },
    {
      name: 'Reality Ripple',
      cost: {
        actionPoints: 2,
        mana: 3,
        entropyPoints: 2
      },
      description: 'Send ripples through reality to disrupt enemy actions.',
      mechanics: 'All enemies within 30 ft must reroll their next attack or save.',
      specialization: 'universal',
      scaling: 'Can force multiple rerolls with higher INT'
    }
  ]
};

export default chaosWeaverAbilities;
