// Base spells and abilities for the Inscriptor class
const inscriptorAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Runecraft',
    description: 'The Inscriptor\'s signature mechanic is the Runecraft system of rune charges, glyph slots, and circuits. Inscriptors can place magical runes on the ground, objects, or even on allies and enemies. Each rune occupies a slot and remains dormant until triggered by specific conditions or activated by the Inscriptor.',
    mechanics: [
      'Glyph Slots: The Inscriptor can maintain a limited number of active glyphs at once (base: 3 + Intelligence modifier). These slots represent the mental focus required to maintain magical inscriptions.',
      'Rune Placement: Placing a rune typically costs 1 AP and variable Mana. Once placed, runes remain dormant until triggered.',
      'Activation: Runes can be triggered by specific conditions (stepping on them, casting a spell nearby) or manually activated by the Inscriptor for 1 AP.',
      'Arcane Circuits: At higher levels, runes can be linked so that activating one rune automatically triggers connected runes, creating chain reactions.',
      'Rune Stability: Each rune has a duration before it naturally fades. Higher Intelligence or Runecraft skill extends this duration.'
    ],
    passiveBenefits: {
      name: 'Runic Insight',
      description: 'The Inscriptor\'s deep understanding of magical symbols grants them special awareness and abilities.',
      effects: [
        'Detect Magic: You can sense magical inscriptions and runes within 30 feet.',
        'Runic Comprehension: You can identify the purpose and trigger conditions of any rune or glyph you examine for 1 minute.',
        'Arcane Scribe: You can copy and reproduce magical symbols you\'ve seen, though understanding their full function requires study.',
        'Glyph Resistance: You have advantage on saving throws against harmful runes and glyphs created by others.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Lesser Detonation Rune',
      cost: {
        actionPoints: 1,
        mana: 5,
        runeSlots: 1
      },
      description: 'Inscribe an explosive rune on the ground or a surface that detonates for fire damage.',
      mechanics: 'The rune takes 2 rounds to fuse (delayed trigger) and then detonates for 2d6 fire damage in a 5×5 area. Enemies within must make a DC 13 + INT modifier Dexterity save or be set ablaze (1d4 ongoing damage next turn).',
      effects: [
        { condition: 'Manual Detonation', effect: 'Spend 1 AP on your turn to instantly detonate any placed rune early.' },
        { condition: 'Intelligence Scaling', effect: 'Damage increases by 1d6 for every 4 points of Intelligence above 12.' },
        { condition: 'Duration', effect: 'The rune remains active for 10 minutes before fading if not triggered.' }
      ],
      scaling: 'Damage = 2d6 + (INT modifier)'
    },
    {
      name: 'Runic Snare Glyph',
      cost: {
        actionPoints: 1,
        mana: 3,
        runeSlots: 1
      },
      description: 'Place a circular glyph on the ground that restrains enemies who enter its area.',
      mechanics: 'Creates a 5×5 zone marked with a faint glyph. It remains inert until an enemy enters the zone. When triggered, it creates a Web of Confinement: foes must make a DC 13 + INT modifier Strength save or be restrained and silenced (unable to cast spells) for 2 rounds.',
      effects: [
        { condition: 'Concealment', effect: 'The glyph can be made nearly invisible with a successful Sleight of Hand check.' },
        { condition: 'Detection', effect: 'Creatures actively searching may detect the glyph with a successful Perception check (DC = your Intelligence + Proficiency).' },
        { condition: 'Duration', effect: 'The glyph remains active for 1 hour before fading if not triggered.' }
      ],
      scaling: 'Save DC = 13 + (INT modifier)'
    },
    {
      name: 'Warding Sigil',
      cost: {
        actionPoints: 1,
        mana: 4,
        runeSlots: 1
      },
      description: 'Inscribe a protective rune onto an ally or object that grants defensive bonuses.',
      mechanics: 'Until the next turn, the ward grants a +2 bonus to saving throws against spells and a flat damage reduction equal to half your Intelligence modifier (minimum 1). The ward lasts for 3 rounds or until manually triggered.',
      effects: [
        { condition: 'Manual Trigger', effect: 'As a reaction, you can trigger the ward to grant the target 1d8 + Intelligence modifier temporary hit points.' },
        { condition: 'Multiple Wards', effect: 'You cannot place more than one ward on the same target; new wards replace existing ones.' },
        { condition: 'Duration', effect: 'The ward remains active for 3 rounds before fading.' }
      ],
      scaling: 'Damage reduction = (INT modifier ÷ 2), Temporary HP = 1d8 + (INT modifier)'
    },
    {
      name: 'Glyph of Sapping',
      cost: {
        actionPoints: 1,
        mana: 5,
        runeSlots: 1
      },
      description: 'Imprint a hidden glyph on an enemy that activates when they cast a spell or attack.',
      mechanics: 'Requires touching the target with an arcane tool (melee spell attack). The glyph remains hidden; when the target casts a spell or attacks, the glyph activates and negates their action, draining 1d6 Mana (or equivalent resource) from them.',
      effects: [
        { condition: 'Detection', effect: 'The glyph can be detected with a successful Arcana check (DC = your Intelligence + Proficiency).' },
        { condition: 'Removal', effect: 'The glyph can be removed with a successful Dispel Magic check or similar effect.' },
        { condition: 'Duration', effect: 'The glyph remains active for 1 minute before fading if not triggered.' }
      ],
      scaling: 'Mana drain = 1d6 + (INT modifier ÷ 2)'
    },
    {
      name: 'Illusory Rune of Vision',
      cost: {
        actionPoints: 0,
        mana: 2,
        runeSlots: 1
      },
      description: 'A utility rune that allows you to see through solid surfaces.',
      mechanics: 'Quickly scribble an enchantment rune on any door or wall. For the next hour, you can "see through" that surface as if it were transparent (detect creatures or magic on the other side) when within 30 feet of it.',
      effects: [
        { condition: 'Activation', effect: 'You must concentrate for 1 round to activate the vision effect.' },
        { condition: 'Detection', effect: 'The rune is visible to anyone who examines the surface closely.' },
        { condition: 'Duration', effect: 'The rune remains active for 1 hour before fading.' }
      ],
      scaling: 'Duration = 1 hour + (10 minutes × INT modifier)'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Runic Cataclysm',
      cost: {
        actionPoints: 2,
        mana: 12,
        runeSlots: 0
      },
      description: 'Trigger multiple placed runes simultaneously for a devastating synchronized effect.',
      mechanics: 'Instantly trigger up to three placed runes (of your choice) in one action. Each rune causes its full effect simultaneously, creating a devastating synchronized explosion.',
      effects: [
        { condition: 'Empowered Blast', effect: 'Alternatively, draw on the energy to cast an empowered blast from a single rune\'s center, doubling its damage and area.' },
        { condition: 'Rune Selection', effect: 'You must be able to see or sense the runes you wish to trigger.' },
        { condition: 'Cooldown', effect: 'After using this ability, you cannot use it again for 1d4 rounds.' }
      ],
      scaling: 'Maximum runes triggered = 3 + (INT modifier ÷ 3)'
    },
    {
      name: 'Eternal Glyph Storm',
      cost: {
        actionPoints: 2,
        mana: 15,
        runeSlots: 3
      },
      description: 'Release a persistent zone of runic symbols that damages enemies and buffs allies.',
      mechanics: 'Creates a 20×20 area filled with swirling runic symbols that lasts 3 rounds. Each round the storm pulses: enemies inside take 2d8 magical damage and suffer a random debuff (blind, slow, or silence). Allies gain regenerative or protective effects while inside.',
      effects: [
        { condition: 'Enemy Effects', effect: 'Enemies must make a DC 15 + (INT modifier ÷ 2) saving throw or suffer a random debuff for 1 round.' },
        { condition: 'Ally Effects', effect: 'Allies recover 1d6 + INT modifier hit points each round they remain in the storm.' },
        { condition: 'Duration', effect: 'The storm lasts for 3 rounds before dissipating.' }
      ],
      scaling: 'Damage = 2d8 + (INT modifier), Healing = 1d6 + (INT modifier)'
    },
    {
      name: 'Arcane Circuit: Cascade',
      cost: {
        actionPoints: 1,
        mana: 8,
        runeSlots: 0
      },
      description: 'Link all your active runes into one circuit for a chain reaction.',
      mechanics: 'Link all your active runes into one circuit. When this ultimate is activated, detonation of any one rune immediately triggers every other rune you\'ve placed (with no extra AP cost).',
      effects: [
        { condition: 'Trigger Order', effect: 'You can choose the order in which the runes activate.' },
        { condition: 'Range Limitation', effect: 'Only runes within 60 feet of each other can be linked.' },
        { condition: 'Cooldown', effect: 'After using this ability, you cannot use it again for 1d6 rounds.' }
      ],
      scaling: 'Maximum link distance = 60 + (5 × INT modifier) feet'
    },
    {
      name: 'Runic Mastery',
      cost: {
        actionPoints: 0,
        mana: 10,
        runeSlots: 0
      },
      description: 'Enter a trance of mastery that enhances all your runic abilities.',
      mechanics: 'Once per fight, enter a trance of mastery. For the next 3 rounds, any rune you place does not consume a slot, and Mana costs for rune spells are halved. Additionally, any rune you inscribe during this time ignores the normal delay and can detonate immediately if you spend an AP.',
      effects: [
        { condition: 'Activation', effect: 'Activating this ability is a free action but can only be used once per long rest.' },
        { condition: 'Duration', effect: 'The trance lasts for 3 rounds.' },
        { condition: 'Enhanced Runes', effect: 'All runes placed during the trance deal 50% more damage or have 50% increased effect.' }
      ],
      scaling: 'Duration = 3 + (INT modifier ÷ 4) rounds'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    glyphwright: [
      {
        name: 'Mystic Fortification',
        description: 'Your Warding Sigil gains improved strength, adding regeneration or extra shields to allies.',
        mechanics: 'Warding Sigil now also grants 1d4 hit points per round for its duration, and the damage reduction is increased by 50%.',
        requirements: 'Requires 3 points in the Glyphwright talent tree.'
      },
      {
        name: 'Extended Glyph Time',
        description: 'Runes last longer before expiring, or have adjustable delays.',
        mechanics: 'All your runes and glyphs last twice as long before fading. Additionally, you can set specific trigger conditions for when a rune activates.',
        requirements: 'Requires 5 points in the Glyphwright talent tree.'
      },
      {
        name: 'Rune Infusion',
        description: 'Imbue placed runes to also heal allies in the area each round.',
        mechanics: 'Any ally who starts their turn within 5 feet of one of your runes recovers 1d4 + Intelligence modifier hit points.',
        requirements: 'Requires 8 points in the Glyphwright talent tree.'
      },
      {
        name: 'Mana Conservation',
        description: 'Reduce Mana cost of support glyphs or let allies trigger a healing rune without AP cost.',
        mechanics: 'The Mana cost of all support and healing runes is reduced by 25%. Additionally, allies can trigger your healing runes as a free action once per round.',
        requirements: 'Requires 10 points in the Glyphwright talent tree.'
      }
    ],
    detonist: [
      {
        name: 'Amplified Blast',
        description: 'Increases the radius or damage dice of explosive runes.',
        mechanics: 'The radius of all explosive runes is increased by 50%, and damage dice are increased by one step (d6 becomes d8, d8 becomes d10, etc.).',
        requirements: 'Requires 3 points in the Detonist talent tree.'
      },
      {
        name: 'Fragmentation Rune',
        description: 'When a rune detonates, it shatters into mini-runes that hit nearby foes.',
        mechanics: 'When one of your explosive runes detonates, it creates 1d4 mini-runes that deal 50% of the original damage to random targets within 15 feet.',
        requirements: 'Requires 5 points in the Detonist talent tree.'
      },
      {
        name: 'Elemental Conversion',
        description: 'Choose elemental damage type for fire runes or switch between fire/ice/lightning effects.',
        mechanics: 'When placing an explosive rune, you can choose its damage type (fire, cold, lightning, acid, or thunder).',
        requirements: 'Requires 8 points in the Detonist talent tree.'
      },
      {
        name: 'Momentum',
        description: 'If a rune damages an enemy, you gain a free minor movement or an extra AP as a reflexive action.',
        mechanics: 'When one of your runes damages an enemy, you gain 1 AP that must be used before the end of your next turn.',
        requirements: 'Requires 10 points in the Detonist talent tree.'
      }
    ],
    circuitBinder: [
      {
        name: 'Chain Reaction',
        description: 'Activating one rune triggers a secondary effect on any other rune within N squares.',
        mechanics: 'When one of your runes activates, any other rune within 15 feet has a 50% chance to also activate.',
        requirements: 'Requires 3 points in the Circuit Binder talent tree.'
      },
      {
        name: 'Trapper\'s Edge',
        description: 'Runes placed in concealment are harder to detect or disarm.',
        mechanics: 'The DC to detect or disarm your runes is increased by 5, and you can place runes as a bonus action.',
        requirements: 'Requires 5 points in the Circuit Binder talent tree.'
      },
      {
        name: 'Parallel Circuits',
        description: 'Maintain more linked runes at once.',
        mechanics: 'You can maintain 2 additional rune slots, and linked runes consume only half a slot each.',
        requirements: 'Requires 8 points in the Circuit Binder talent tree.'
      },
      {
        name: 'Adaptive Glyph',
        description: 'Modify an existing placed rune\'s trigger or effect on the fly.',
        mechanics: 'As a bonus action, you can change the trigger condition or effect of any of your placed runes without replacing it.',
        requirements: 'Requires 10 points in the Circuit Binder talent tree.'
      }
    ]
  }
};

export default inscriptorAbilities;
