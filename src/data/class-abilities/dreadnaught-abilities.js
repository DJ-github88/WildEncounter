// Base spells and abilities for the Dreadnaught class
const dreadnaughtAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Guard Points & Siege Stacks',
    description: 'A Dreadnaught is a walking fortress: shield-locked, armor-plated, and relentless. Where Berserkers trade safety for fury, Dreadnaughts weaponize defense itself—turning every blocked blow into crushing counter-force.',
    mechanics: [
      'Guard Points (GP): +1 GP each time you block, parry, or take ≥5 damage. Shields grant +1 GP when they fully block a hit. Max GP = 5 + CON mod.',
      'Siege Stacks: Gain 1 per 3 GP you spend at once. Multiply damage on specific "Siege" abilities (up to 3 Stacks).',
      'AP & Mana: Standard. Dreadnaughts have low Mana but many low-cost AP actions.'
    ],
    passiveBenefits: {
      name: 'Guard Points & Siege Stacks',
      description: 'Your Guard Points act as a buffer that can be spent to absorb damage or power abilities, while Siege Stacks multiply damage on specific abilities.',
      effects: [
        'Guard Points (GP): Acts as a buffer: spend GP to absorb damage or power abilities. Max GP = 5 + CON mod.',
        'Siege Stacks: Multiply damage on specific "Siege" abilities (up to 3 Stacks).',
        'The loop: Block → build GP → convert to Siege Stacks → slam enemies → rebuild.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Shield Bash',
      cost: {
        actionPoints: 1,
        mana: 0,
        guardPoints: 1
      },
      description: 'Slam your shield into an enemy, potentially shoving them back.',
      mechanics: 'Hit for STR + 1d6; if target is Large or smaller it must pass STR save (DC 8 + Prof + STR) or be shoved 5 ft.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to STR + 1d8.' },
        { condition: 'With 1+ Siege Stack', effect: 'Target is automatically shoved 5 ft on hit.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Target is shoved 10 ft on hit.' }
      ],
      scaling: 'Damage = STR + 1d6 (1d8 with shield)'
    },
    {
      name: 'Bulwark Stance',
      cost: {
        actionPoints: 1,
        mana: 1,
        guardPoints: 0
      },
      description: 'Adopt a defensive stance that halves incoming weapon damage.',
      mechanics: 'Until next turn, halve weapon damage taken; every hit still grants GP. Entering stance ends aggressive stance abilities.',
      effects: [
        { condition: 'With 1+ GP', effect: 'Duration increases to 2 turns.' },
        { condition: 'With 3+ GP', effect: 'Also gain +1 AC while in stance.' },
        { condition: 'With 5+ GP', effect: 'Also gain resistance to critical hits.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Guarded Advance',
      cost: {
        actionPoints: 1,
        mana: 0,
        guardPoints: 0
      },
      description: 'Move forward with your shield raised, gaining a Guard Point and protection.',
      mechanics: 'Move 15 ft with shield raised; first attack against you before next turn has disadvantage. Gain +1 GP.',
      effects: [
        { condition: 'With 1+ GP', effect: 'Movement increases to 20 ft.' },
        { condition: 'With 3+ GP', effect: 'First two attacks against you have disadvantage.' },
        { condition: 'With 1+ Siege Stack', effect: 'Also gain +2 AC until your next turn.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Counter Riposte',
      cost: {
        actionPoints: 1,
        mana: 0,
        guardPoints: 1
      },
      trigger: 'Reaction',
      description: 'When you block or reduce damage to zero, make an immediate counterattack.',
      mechanics: 'When you block or reduce damage to 0, make immediate melee attack for 1d8 + STR.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 1d10 + STR.' },
        { condition: 'With 1+ Siege Stack', effect: 'Also push target 5 ft.' },
        { condition: 'With 3+ GP', effect: 'Costs 0 AP instead of 1 AP.' }
      ],
      scaling: 'Damage = 1d8 + STR (1d10 + STR with shield)'
    },
    {
      name: 'Brace for Impact',
      cost: {
        actionPoints: 1,
        mana: 1,
        guardPoints: 0
      },
      description: 'Prepare for incoming attacks by gaining temporary hit points.',
      mechanics: 'Gain temporary HP equal to CON + GP. Temporary HP lasts 2 turns.',
      effects: [
        { condition: 'With 3+ GP', effect: 'Temporary HP increases to CON + GP + Prof.' },
        { condition: 'With 1+ Siege Stack', effect: 'Duration increases to 3 turns.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Also gain resistance to the next attack you take.' }
      ],
      scaling: 'Temporary HP = CON + GP (+ Prof with 3+ GP)'
    },
    {
      name: 'Shield Wall Shout',
      cost: {
        actionPoints: 1,
        mana: 1,
        guardPoints: 2
      },
      description: 'Call out to nearby allies, granting them protection from your shield.',
      mechanics: 'Allies within 10 ft gain +2 AC for 1 turn; you absorb half splash damage they take.',
      effects: [
        { condition: 'With 3+ GP', effect: 'Range increases to 15 ft.' },
        { condition: 'With 1+ Siege Stack', effect: 'Duration increases to 2 turns.' },
        { condition: 'With 2+ Siege Stacks', effect: 'AC bonus increases to +3.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Crack the Line',
      cost: {
        actionPoints: 2,
        mana: 0,
        guardPoints: 3
      },
      description: 'Slam your shield into the ground, creating a shockwave that damages and knocks down enemies.',
      mechanics: 'Spend 3 GP: 15-ft line slam, 2d8 + STR damage; targets must STR save or fall prone.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 3d8 + STR.' },
        { condition: 'With 1+ Siege Stack', effect: 'Width increases to 5 ft.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Length increases to 20 ft.' }
      ],
      scaling: 'Damage = 2d8 + STR (3d8 + STR with shield)'
    },
    {
      name: 'Iron Retribution',
      cost: {
        actionPoints: 1,
        mana: 0,
        guardPoints: 0,
        siegeStacks: 1
      },
      trigger: 'Reaction',
      description: 'When hit, reflect some of the damage back at your attacker.',
      mechanics: 'When hit, spend 1 Siege Stack to reflect 2d6 of that damage back.',
      effects: [
        { condition: 'With 3+ GP', effect: 'Damage increases to 3d6.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Damage increases to 4d6.' },
        { condition: 'With 3 Siege Stacks', effect: 'Damage increases to 5d6.' }
      ],
      scaling: 'Damage = 2d6 (3d6 with 3+ GP, 4d6 with 2+ Siege Stacks, 5d6 with 3 Siege Stacks)'
    },
    {
      name: 'Magnet Shield',
      cost: {
        actionPoints: 1,
        mana: 2,
        guardPoints: 0
      },
      description: 'Enchant your shield to attract ranged attacks, protecting your allies.',
      mechanics: 'All ranged attacks vs. allies in 15 ft are redirected to you (before roll) until next turn; each hit grants +1 GP.',
      effects: [
        { condition: 'With Shield', effect: 'Range increases to 20 ft.' },
        { condition: 'With 3+ GP', effect: 'Duration increases to 2 turns.' },
        { condition: 'With 1+ Siege Stack', effect: 'Gain resistance to ranged attacks while active.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Refresh Guard',
      cost: {
        actionPoints: 0,
        mana: 0,
        guardPoints: 0
      },
      description: 'Quickly regain some Guard Points through sheer determination.',
      mechanics: 'Once per short rest bonus action: steel resolve restores GP up to CON mod (min 1).',
      effects: [
        { condition: 'Below 50% HP', effect: 'Gain +1 additional GP.' },
        { condition: 'With 1+ Siege Stack', effect: 'Also gain temporary HP equal to GP restored.' },
        { condition: 'With Shield', effect: 'Also gain +1 AC until your next turn.' }
      ],
      scaling: 'GP restored = CON mod (min 1)'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Ruinous Crash',
      cost: {
        actionPoints: 2,
        mana: 2,
        guardPoints: 'All'
      },
      description: 'Jump and slam your shield into the ground, creating a devastating shockwave.',
      mechanics: 'Jump 20 ft, land in 10-ft radius. Damage = (GP × d6) + STR; consume all GP and grant Siege Stacks floor(GP / 3).',
      effects: [
        { condition: 'With Shield', effect: 'Radius increases to 15 ft.' },
        { condition: 'With 5+ GP', effect: 'Also knocks enemies prone on failed STR save.' },
        { condition: 'With 1+ Siege Stack', effect: 'Damage dice increase to d8.' }
      ],
      scaling: 'Damage = (GP × d6) + STR (GP × d8 with 1+ Siege Stack)'
    },
    {
      name: 'Shield Cyclone',
      cost: {
        actionPoints: 2,
        mana: 2,
        guardPoints: 3
      },
      description: 'Spin with your shield extended, hitting all nearby enemies.',
      mechanics: 'Spin, hitting all foes in 10 ft for 2d6 + STR and pushing them 5 ft. If you have ≥2 Siege, damage +50%.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 3d6 + STR.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Damage increases by 50%.' },
        { condition: 'With 3 Siege Stacks', effect: 'Also stuns enemies for 1 round on failed CON save.' }
      ],
      scaling: 'Damage = 2d6 + STR (3d6 + STR with shield, +50% with 2+ Siege Stacks)'
    },
    {
      name: 'Fortress March',
      cost: {
        actionPoints: 2,
        mana: 1,
        guardPoints: 0
      },
      description: 'Move forward while protecting an ally behind your shield.',
      mechanics: 'Move up to 30 ft; you can drag one willing ally your size behind shield. Each 10 ft grants +1 GP.',
      effects: [
        { condition: 'With Shield', effect: 'Ally gains +2 AC while being dragged.' },
        { condition: 'With 3+ GP', effect: 'You can drag two allies instead of one.' },
        { condition: 'With 1+ Siege Stack', effect: 'You and dragged allies gain resistance to opportunity attacks.' }
      ],
      scaling: 'GP gained = floor(distance / 10)'
    },
    {
      name: 'Iron Tempest',
      cost: {
        actionPoints: 3,
        mana: 3,
        guardPoints: 4
      },
      description: 'Unleash a series of rapid shield punches at an enemy.',
      mechanics: 'Unleash 3 rapid shield-punches; each deals 1d8 + STR. If at least one crits, refund 2 GP.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 1d10 + STR per punch.' },
        { condition: 'With 1+ Siege Stack', effect: 'Make 4 punches instead of 3.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Critical hit range expands by 1.' }
      ],
      scaling: 'Damage per punch = 1d8 + STR (1d10 + STR with shield)'
    },
    {
      name: 'Aegis Overload',
      cost: {
        actionPoints: 1,
        mana: 2,
        guardPoints: 2
      },
      description: 'Charge your shield with energy that explodes when you block attacks.',
      mechanics: 'Until end of next turn, every blocked hit explodes for 1d6 thunder damage in 5 ft around you.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 1d8 thunder damage.' },
        { condition: 'With 1+ Siege Stack', effect: 'Radius increases to 10 ft.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Also pushes enemies 5 ft on explosion.' }
      ],
      scaling: 'Damage = 1d6 (1d8 with shield)'
    },
    {
      name: 'Siege Breaker',
      cost: {
        actionPoints: 2,
        mana: 3,
        guardPoints: 0,
        siegeStacks: 1
      },
      description: 'Charge forward, smashing through barriers and stunning enemies.',
      mechanics: 'Line 20 ft: smash barriers, ignore hardness/DR; objects take double. Creatures hit take 3d8 and are stunned 1 rd on failed CON save.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 4d8.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Width increases to 5 ft.' },
        { condition: 'With 3 Siege Stacks', effect: 'Stun duration increases to 2 rounds.' }
      ],
      scaling: 'Damage = 3d8 (4d8 with shield)'
    },
    {
      name: 'Hold the Gate',
      cost: {
        actionPoints: 1,
        mana: 3,
        guardPoints: 0
      },
      description: 'Plant your shield to create a protective wall for your allies.',
      mechanics: 'Plant shield: create 10-ft wide wall. Allies behind wall gain ¾ cover. Each blocked ranged attack adds 1 GP. Lasts 2 turns.',
      effects: [
        { condition: 'With Shield', effect: 'Width increases to 15 ft.' },
        { condition: 'With 3+ GP', effect: 'Duration increases to 3 turns.' },
        { condition: 'With 1+ Siege Stack', effect: 'Allies behind wall also gain +2 to saving throws.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Unyielding Bulwark',
      cost: {
        actionPoints: 1,
        mana: 2,
        guardPoints: 0
      },
      trigger: 'Reaction',
      description: 'Reduce incoming damage and gain Guard Points based on the amount prevented.',
      mechanics: 'Reaction each turn: reduce any incoming damage by CON + Proficiency. Gain 1 GP for each 10 damage prevented.',
      effects: [
        { condition: 'With Shield', effect: 'Damage reduction increases by +2.' },
        { condition: 'With 3+ GP', effect: 'Gain 1 GP for each 5 damage prevented instead of 10.' },
        { condition: 'With 1+ Siege Stack', effect: 'Also gain resistance to the attack type until your next turn.' }
      ],
      scaling: 'Damage reduction = CON + Proficiency (+ 2 with shield)'
    },
    {
      name: 'Overwatch Riposte',
      cost: {
        actionPoints: 2,
        mana: 1,
        guardPoints: 2
      },
      description: 'Prepare to counter multiple attacks until your next turn.',
      mechanics: 'Ready posture. Until your next turn you can make up to 3 Counter Ripostes (GP must be available).',
      effects: [
        { condition: 'With Shield', effect: 'Counter Ripostes deal +1d6 damage.' },
        { condition: 'With 1+ Siege Stack', effect: 'Can make up to 4 Counter Ripostes instead of 3.' },
        { condition: 'With 2+ Siege Stacks', effect: 'Counter Ripostes also push targets 5 ft.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Citadel Collapse',
      cost: {
        actionPoints: 3,
        mana: 4,
        guardPoints: 'All',
        siegeStacks: 3
      },
      description: 'Slam your shield into the ground with all your might, creating a devastating shockwave.',
      mechanics: 'Must be at 3 Siege Stacks. Slam shield into ground; 20-ft shockwave: 6d8 force, knock prone, shatter non-magical armor & shields (AC -2). Then reset Siege Stacks and vent GP to zero. Leaves you with Exhaustion 1.',
      effects: [
        { condition: 'With Shield', effect: 'Damage increases to 8d8 force.' },
        { condition: 'With 5+ GP', effect: 'Radius increases to 30 ft.' }
      ],
      scaling: 'Damage = 6d8 (8d8 with shield)',
      ultimate: true
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    bulwarkDiscipline: [
      {
        name: 'Hardened Edges',
        description: 'Increase your maximum Guard Points and shield AC.',
        mechanics: '+2 max GP; shields grant +1 AC when at ≥3 GP.',
        requirements: 'Requires points in the Bulwark Discipline talent tree.'
      },
      {
        name: 'Guardian\'s Reach',
        description: 'Increase the range and duration of Shield Wall Shout.',
        mechanics: 'Shield Wall Shout radius +5 ft and lasts +1 round.',
        requirements: 'Requires points in the Bulwark Discipline talent tree.'
      },
      {
        name: 'Resilient Battery',
        description: 'Make your temporary hit points from Brace for Impact last longer.',
        mechanics: 'Temp HP from Brace for Impact no longer expires until lost.',
        requirements: 'Requires points in the Bulwark Discipline talent tree.'
      },
      {
        name: 'Citadel Stance',
        description: 'Enhance your Bulwark Stance to protect against elemental damage.',
        mechanics: 'Bulwark Stance halves elemental damage and you no longer lose reactions while in stance.',
        requirements: 'Requires points in the Bulwark Discipline talent tree. (Capstone)'
      }
    ],
    siegeEngine: [
      {
        name: 'Kinetic Converter',
        description: 'Convert spent Guard Points into additional damage.',
        mechanics: 'Each time you spend GP you also add that amount to next damage roll.',
        requirements: 'Requires points in the Siege Engine talent tree.'
      },
      {
        name: 'Improved Siege',
        description: 'Increase your maximum Siege Stacks and Iron Retribution damage.',
        mechanics: 'Siege Stacks max = 5; each adds +1d6 to Iron Retribution.',
        requirements: 'Requires points in the Siege Engine talent tree.'
      },
      {
        name: 'Rolling Thunder',
        description: 'Enhance your Ruinous Crash ability.',
        mechanics: 'Ruinous Crash pushes survivors 10 ft and grants you advantage to next attack.',
        requirements: 'Requires points in the Siege Engine talent tree.'
      },
      {
        name: 'World Breaker',
        description: 'Make your Citadel Collapse even more devastating.',
        mechanics: 'Citadel Collapse damage dice become d10s; objects auto-fail save.',
        requirements: 'Requires points in the Siege Engine talent tree. (Capstone)'
      }
    ],
    momentumBastion: [
      {
        name: 'Trample Advance',
        description: 'Move through enemy spaces during Guarded Advance.',
        mechanics: 'Guarded Advance can pass through enemy squares, knocking them 5 ft aside.',
        requirements: 'Requires points in the Momentum Bastion talent tree.'
      },
      {
        name: 'Steamroller',
        description: 'Gain action points when you displace enemies.',
        mechanics: 'After you push or knock prone an enemy, gain +1 AP (once per turn).',
        requirements: 'Requires points in the Momentum Bastion talent tree.'
      },
      {
        name: 'Unstoppable March',
        description: 'Enhance your Fortress March ability.',
        mechanics: 'Fortress March ignores difficult terrain and grants dragged ally +GP.',
        requirements: 'Requires points in the Momentum Bastion talent tree.'
      },
      {
        name: 'Endless Motion',
        description: 'Reset Guarded Advance when spending Guard Points.',
        mechanics: 'Spending 4+ GP immediately resets Guarded Advance cooldown and refunds 1 Mana.',
        requirements: 'Requires points in the Momentum Bastion talent tree. (Capstone)'
      }
    ]
  },

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Strength',
      effect: 'Add to nearly all melee & slam damage.'
    },
    {
      attribute: 'Constitution',
      effect: 'Sets HP, raises save DCs for shouts, increases damage reduction amounts and max GP.'
    },
    {
      attribute: 'Dexterity',
      effect: 'Secondary AC if you go lighter shield; influences initiative.'
    },
    {
      attribute: 'Wisdom',
      effect: 'Buffs perception & battlefield calls; some talents use WIS to set fear/stun DCs.'
    }
  ],

  // Play Style
  playStyle: {
    steps: [
      {
        step: 'Engage',
        description: 'With Guarded Advance → Bulwark Stance to start absorbing blows.'
      },
      {
        step: 'Build GP',
        description: 'As foes strike or you counterattack.'
      },
      {
        step: 'Spend',
        description: 'GP on Crack the Line / Aegis Overload or hold to reach Siege thresholds.'
      },
      {
        step: 'Convert',
        description: 'GP → Siege via Ruinous Crash or other spenders.'
      },
      {
        step: 'Detonate',
        description: 'With Siege Breaker or Citadel Collapse, then reset & repeat.'
      }
    ],
    summary: 'This creates a satisfying rhythm of block, build, smash—mirroring popular juggernaut play in RPGs and video games where defense feeds offense.'
  }
};

export default dreadnaughtAbilities;
