// Base spells and abilities for the Formbender class
const formbenderAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Wild Instinct',
    description: 'A Formbender is a mystic shapeshifter who bends flesh and spirit into new shapes. Drawing on primal magic, they assume bestial or elemental forms at will, swapping bodies to suit any task—tracker, skirmisher, or siege beast. Their play-style is fluid: pick a form, spend resources for its special moves, then pivot when the fight changes.',
    mechanics: [
      'Generate Wild Instinct (WI): Every basic attack, successful skill check in animal form, or use of the Shift action grants +1 WI.',
      'Cap: 5 WI (can be raised by talents).',
      'Spend WI: Special abilities—called Instinct Moves—cost 1-5 WI.',
      'Shift (Action, 1 AP, 0 Mana): Change into any Known Form. Shifting does not reset WI.',
      'Break Form: If reduced below 25% HP the current form shatters; you revert to humanoid and lose all WI (unless a talent says otherwise).'
    ],
    formSlots: {
      description: 'You begin knowing two forms (see starter list). Learning a new form costs downtime + gold or a quest. You may memorise form slots = 2 + WIS mod; swap memorised forms on a long rest.'
    }
  },

  // Starter Forms
  starterForms: [
    {
      name: 'Frostfang Wolf',
      role: 'Skirmisher',
      passive: '+10 ft speed, advantage on smell checks.',
      basicActions: [
        {
          name: 'Bite',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: '1d6 cold damage & gain 1 WI.'
        },
        {
          name: 'Track',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: 'Trail sense for 1 hour.'
        }
      ],
      instinctMoves: [
        {
          name: 'Frostbite',
          cost: {
            actionPoints: 1,
            mana: 0,
            wildInstinct: 1
          },
          effect: '1d6 cold damage + Slow target for 1 round.'
        },
        {
          name: 'Winter\'s Breath',
          cost: {
            actionPoints: 2,
            mana: 1,
            wildInstinct: 2
          },
          effect: '15-ft cone dealing 1d8 cold damage.'
        }
      ]
    },
    {
      name: 'Stonehide Bear',
      role: 'Bruiser',
      passive: '+2 AC while above 1/2 HP.',
      basicActions: [
        {
          name: 'Maul',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: '1d8 bludgeoning damage & gain 1 WI.'
        },
        {
          name: 'Roar',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: 'Intimidate vs WIS save.'
        }
      ],
      instinctMoves: [
        {
          name: 'Iron Hide',
          cost: {
            actionPoints: 0,
            mana: 0,
            wildInstinct: 1
          },
          trigger: 'Reaction',
          effect: 'Reduce damage taken by 1d6.'
        },
        {
          name: 'Ground Slam',
          cost: {
            actionPoints: 2,
            mana: 1,
            wildInstinct: 2
          },
          effect: '10-ft quake: 1d6 bludgeoning damage & knock prone.'
        }
      ]
    },
    {
      name: 'Storm-Raven',
      role: 'Scout',
      passive: 'Fly 40 ft, darkvision.',
      basicActions: [
        {
          name: 'Talon Peck',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: '1d4 lightning damage & gain 1 WI.'
        },
        {
          name: 'Gale Dash',
          cost: {
            actionPoints: 1,
            mana: 0
          },
          effect: '20 ft free movement.'
        }
      ],
      instinctMoves: [
        {
          name: 'Static Burst',
          cost: {
            actionPoints: 1,
            mana: 0,
            wildInstinct: 1
          },
          effect: '1d6 lightning damage & Disarm target.'
        },
        {
          name: 'Thundercry',
          cost: {
            actionPoints: 2,
            mana: 1,
            wildInstinct: 2
          },
          effect: '30-ft line dealing 2d6 lightning damage.'
        }
      ]
    }
  ],

  // Advanced Instinct Moves
  advancedInstinctMoves: [
    {
      name: 'Alpha Strike',
      cost: {
        actionPoints: 2,
        mana: 0,
        wildInstinct: 3
      },
      requirement: 'Any Beast form',
      effect: '3d4 piercing damage + knock prone; if target already slowed, deal +2d4 damage.'
    },
    {
      name: 'Elemental Merge',
      cost: {
        actionPoints: 2,
        mana: 1,
        wildInstinct: 3
      },
      requirement: 'Elemental form',
      effect: 'Your next attack deals +INT fire/ice/lightning damage and splashes half damage in 5 ft radius.'
    },
    {
      name: 'Bestial Resurgence',
      cost: {
        actionPoints: 0,
        mana: 0,
        wildInstinct: 4
      },
      trigger: 'Reaction',
      requirement: 'Any form',
      effect: 'When you would break form, instead heal 2d6+CON and stay shifted—WI drops to 0.'
    },
    {
      name: 'Predator\'s Pounce',
      cost: {
        actionPoints: 1,
        mana: 0,
        wildInstinct: 2
      },
      requirement: 'Wolf or Cat form',
      effect: 'Teleport to a creature you can see within 30 ft and make a free basic attack.'
    },
    {
      name: 'Iron Root Bulwark',
      cost: {
        actionPoints: 3,
        mana: 0,
        wildInstinct: 5
      },
      requirement: 'Stone/Bear form',
      effect: 'Gain 10 Temporary HP & allies within 10 ft gain +2 AC for 2 rounds.'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    primalFury: [
      {
        name: 'Savage Rhythm',
        description: 'Gain additional Wild Instinct on critical hits.',
        mechanics: '+1 WI on critical hits.',
        requirements: 'Requires points in the Primal Fury talent tree.'
      },
      {
        name: 'Overwhelm',
        description: 'Your basic attacks deal additional damage when you have high Wild Instinct.',
        mechanics: 'While at ≥3 WI your basic attacks add +1d4 damage.',
        requirements: 'Requires points in the Primal Fury talent tree.'
      },
      {
        name: 'Blood Scent',
        description: 'Deal additional damage to wounded enemies.',
        mechanics: 'Deal +INT damage vs enemies ≤50% HP.',
        requirements: 'Requires points in the Primal Fury talent tree.'
      },
      {
        name: 'Feral Rush',
        description: 'Shift for free when your Wild Instinct is low.',
        mechanics: 'Shift costs 0 AP if you ended last turn at ≤2 WI.',
        requirements: 'Requires points in the Primal Fury talent tree. (Capstone)'
      }
    ],
    adaptivePredator: [
      {
        name: 'Quick Shift',
        description: 'Move when you shift forms.',
        mechanics: 'The Shift action also moves you 10 ft.',
        requirements: 'Requires points in the Adaptive Predator talent tree.'
      },
      {
        name: 'Spare the Form',
        description: 'Retain some Wild Instinct when your form breaks.',
        mechanics: 'Breaking form no longer resets WI to 0; you keep half.',
        requirements: 'Requires points in the Adaptive Predator talent tree.'
      },
      {
        name: 'Versatile Memory',
        description: 'Memorize additional forms.',
        mechanics: '+1 form slot.',
        requirements: 'Requires points in the Adaptive Predator talent tree.'
      },
      {
        name: 'Chimera Technique',
        description: 'Combine aspects of different forms.',
        mechanics: 'Once per encounter mix two forms: choose passives of one and attacks of another for 2 turns.',
        requirements: 'Requires points in the Adaptive Predator talent tree. (Capstone)'
      }
    ],
    elementalAspect: [
      {
        name: 'Elemental Affinity',
        description: 'Enhance your elemental attacks.',
        mechanics: 'Choose Fire/Ice/Lightning; Instinct Moves of that element add +WIS damage.',
        requirements: 'Requires points in the Elemental Aspect talent tree.'
      },
      {
        name: 'Stormblood',
        description: 'Gain resistance to your chosen element.',
        mechanics: 'Gain resistance to your Affinity element while shifted.',
        requirements: 'Requires points in the Elemental Aspect talent tree.'
      },
      {
        name: 'Wild Conduit',
        description: 'Trigger elemental surges when spending Wild Instinct.',
        mechanics: 'Spending 3+ WI triggers a 1d4 elemental surge (ally heal, enemy shock, etc.).',
        requirements: 'Requires points in the Elemental Aspect talent tree.'
      },
      {
        name: 'Avatar of Nature',
        description: 'Transform into a powerful elemental form.',
        mechanics: 'Spend 5 WI & 3 Mana to grow Huge for 1 min; +2 Armor, +10 ft reach, attacks deal extra 1d8 elemental.',
        requirements: 'Requires points in the Elemental Aspect talent tree. (Capstone)'
      }
    ]
  },

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Strength / Agility',
      effect: 'Melee/ranged hit & damage in beast forms.'
    },
    {
      attribute: 'Intelligence',
      effect: 'Damage of elemental Instinct Moves; increases Mana pool.'
    },
    {
      attribute: 'Spirit',
      effect: 'Form save DCs, number of memorised forms, Elemental Aspect bonuses.'
    },
    {
      attribute: 'Constitution',
      effect: 'Max HP; each 5 HP lost = 1 Pain threshold for certain defensive talents.'
    }
  ],

  // Play Style
  playStyle: {
    steps: [
      {
        step: 'Open',
        description: 'Shift to the form best suited (wolf to close gaps, bear to tank, raven to scout).'
      },
      {
        step: 'Build WI',
        description: 'Spam basic attacks or utility (each grants +1 WI).'
      },
      {
        step: 'Spike',
        description: 'Spend WI on Instinct Moves when you reach 2-3 stacks (e.g. Frostbite → Winter\'s Breath).'
      },
      {
        step: 'Pivot',
        description: 'Shift again when battlefield needs change or WI is low—Adaptive Predator talents make this seamless.'
      },
      {
        step: 'Ultimate',
        description: 'Hoard 5 WI for Avatar of Nature or Bestial Resurgence to swing clutch moments.'
      }
    ],
    summary: 'The Formbender rewards anticipation and flexibility: read the fight, choose the right skin, generate Wild Instinct, then cash it in for burst damage, crowd control, or party buffs—before leaping into a new body to start the cycle again.'
  }
};

export default formbenderAbilities;
