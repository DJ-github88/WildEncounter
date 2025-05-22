// Base spells and abilities for the Titan class
const titanAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Gravitas Gauge',
    description: 'The Titan is a gargantuan bruiser who weaponises mass. Every step shakes earth; every swing crushes armor. Where the Berserker erupts in fury and the Dreadnaught redirects blows, the Titan rewrites the terrain itself—altering elevation, hurling boulders, and slamming enemies through walls.',
    mechanics: [
      'Gravitas (GV): +1 GV whenever you: ① move 10 ft or push/pull an enemy, ② hit with a Heavy attack, ③ take ≥10 dmg from a single hit. Max GV = 15.',
      'Strain Points: Gain 1 each time you spend ≥ 5 GV at once —or miss with a Heavy attack. At 3 Strain you Overload: suffer 1 Exhaustion & reset GV to 0.',
      'AP / Mana: Standard Reaver pools. Titans have high AP costs (they move slowly) but cheap Mana (mostly physical).'
    ],
    thresholds: [
      {
        name: 'Stone Stance',
        description: 'Size = Large; reach +5 ft; Heavy attacks gain +1d6.',
        value: 5
      },
      {
        name: 'Mountain Stance',
        description: 'Huge; reach +10 ft; Advantage vs push/pull/prone.',
        value: 10
      },
      {
        name: 'Titanic Stance (Cap)',
        description: 'Gargantuan aura; Heavy attacks crit on 19-20; entering stance triggers Earthshock.',
        value: 15
      }
    ],
    passiveBenefits: {
      name: 'Gravitas Thresholds',
      description: 'As your Gravitas increases, you grow heavier with momentum—slower but earth-shattering.',
      effects: [
        'Stone Stance (5 GV): Size = Large; reach +5 ft; Heavy attacks gain +1d6.',
        'Mountain Stance (10 GV): Huge; reach +10 ft; Advantage vs push/pull/prone.',
        'Titanic Stance (15 GV): Gargantuan aura; Heavy attacks crit on 19-20; entering stance triggers Earthshock.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Heavy Swing',
      cost: {
        actionPoints: 2,
        mana: 0,
        gravitas: 1
      },
      description: 'A powerful two-handed attack that gains momentum as you grow in size.',
      mechanics: 'Melee 2-handed. DMG = 2d8 + STR. If Mountain Stance, push target 5 ft.',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases to 2d8 + 1d6 + STR.' },
        { condition: 'Mountain Stance', effect: 'Damage increases to 2d8 + 1d6 + STR and push target 5 ft.' },
        { condition: 'Titanic Stance', effect: 'Damage increases to 2d8 + 1d6 + STR, push target 10 ft, and crit on 19-20.' }
      ],
      scaling: 'Damage = 2d8 + STR (+ 1d6 in Stone+ stance)'
    },
    {
      name: 'Tectonic Step',
      cost: {
        actionPoints: 1,
        mana: 0,
        gravitas: 1
      },
      description: 'Move forward, shaking the ground beneath your feet and creating difficult terrain.',
      mechanics: 'Move up to 15 ft; ground in 5 ft trail becomes difficult terrain for 1 round.',
      effects: [
        { condition: 'Stone Stance', effect: 'Difficult terrain lasts 2 rounds.' },
        { condition: 'Mountain Stance', effect: 'Trail width increases to 10 ft.' },
        { condition: 'Titanic Stance', effect: 'Enemies in the trail must make a DEX save or fall prone.' }
      ],
      scaling: 'Gain +1 GV per 5 ft moved'
    },
    {
      name: 'Stone Backhand',
      cost: {
        actionPoints: 1,
        mana: 0,
        gravitas: 1
      },
      description: 'A sweeping attack that hits multiple enemies and can knock them prone.',
      mechanics: '180° sweep; hit up to 2 foes for 1d8 each. If Stone Stance active, knock prone on failed STR save.',
      effects: [
        { condition: 'Stone Stance', effect: 'Targets must make a STR save or be knocked prone.' },
        { condition: 'Mountain Stance', effect: 'Hit up to 3 foes instead of 2.' },
        { condition: 'Titanic Stance', effect: 'Hit up to 4 foes and damage increases to 1d10 each.' }
      ],
      scaling: 'Damage = 1d8 per target (1d10 in Titanic stance)'
    },
    {
      name: 'Boulder Toss',
      cost: {
        actionPoints: 2,
        mana: 1,
        gravitas: -2
      },
      description: 'Hurl a massive boulder at an enemy, creating difficult terrain where it lands.',
      mechanics: 'Ranged 60 ft; 2d10 bludgeon. On hit, create 5 ft rubble (difficult).',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases to 3d10.' },
        { condition: 'Mountain Stance', effect: 'Rubble area increases to 10 ft radius.' },
        { condition: 'Titanic Stance', effect: 'Targets in the rubble area must make a DEX save or fall prone.' }
      ],
      scaling: 'Damage = 2d10 (3d10 in Stone+ stance)'
    },
    {
      name: 'Earthshock',
      cost: {
        actionPoints: 0,
        mana: 0,
        gravitas: 'auto'
      },
      trigger: 'Surge',
      description: 'A shockwave that triggers automatically when you reach Titanic Stance.',
      mechanics: 'Triggers once when you hit 15 GV: 15-ft aura; 2d6 + STR dmg & prone (DEX save halves).',
      effects: [
        { condition: 'With Earthshaper Talents', effect: 'Radius increases to 20 ft.' },
        { condition: 'With World Breaker Talents', effect: 'Damage increases to 3d6 + STR.' },
        { condition: 'With Immovable Juggernaut Talents', effect: 'Also pushes enemies 10 ft away.' }
      ],
      scaling: 'Damage = 2d6 + STR (3d6 + STR with World Breaker talents)'
    },
    {
      name: 'Reverberating Roar',
      cost: {
        actionPoints: 1,
        mana: 1,
        gravitas: -1
      },
      description: 'A powerful roar that pushes enemies away and motivates allies.',
      mechanics: '20-ft cone; enemies STR save or pushed 10 ft & deafened 1 round. Allies gain +1 GV refund (motivation).',
      effects: [
        { condition: 'Stone Stance', effect: 'Push distance increases to 15 ft.' },
        { condition: 'Mountain Stance', effect: 'Cone width increases to 30 ft.' },
        { condition: 'Titanic Stance', effect: 'Enemies also take 1d8 thunder damage.' }
      ],
      scaling: 'Push distance = 10 ft (15 ft in Stone+ stance)'
    },
    {
      name: 'Pulverise',
      cost: {
        actionPoints: 1,
        mana: 0,
        gravitas: -2
      },
      trigger: 'Bonus Action',
      description: 'Channel your Gravitas into your next attack for devastating damage.',
      mechanics: 'Bonus action; next Heavy Swing this turn deals +GV damage (spent).',
      effects: [
        { condition: 'Stone Stance', effect: 'Also adds +1d4 damage.' },
        { condition: 'Mountain Stance', effect: 'Also adds +1d6 damage.' },
        { condition: 'Titanic Stance', effect: 'Also adds +1d8 damage and attack has advantage.' }
      ],
      scaling: 'Bonus damage = +GV spent (+ extra dice based on stance)'
    },
    {
      name: 'Grounded Posture',
      cost: {
        actionPoints: 1,
        mana: 0,
        gravitas: 0
      },
      description: 'Root yourself to the ground, becoming immovable and resistant to damage.',
      mechanics: 'Until next turn, you cannot be moved; you also gain Resistance to all non-magical damage.',
      effects: [
        { condition: 'Stone Stance', effect: 'Duration increases to 2 turns.' },
        { condition: 'Mountain Stance', effect: 'Also gain +2 AC while active.' },
        { condition: 'Titanic Stance', effect: 'Also gain resistance to magical damage.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Momentum Brake',
      cost: {
        actionPoints: 0,
        mana: 0,
        gravitas: -3
      },
      trigger: 'Reaction',
      description: 'Use your momentum to deflect an incoming attack.',
      mechanics: 'Reaction; spend 3 GV to gain +5 AC vs one attack after seeing the roll.',
      effects: [
        { condition: 'Stone Stance', effect: 'AC bonus increases to +6.' },
        { condition: 'Mountain Stance', effect: 'AC bonus increases to +7.' },
        { condition: 'Titanic Stance', effect: 'AC bonus increases to +8.' }
      ],
      scaling: 'AC bonus = +5 (+6/+7/+8 based on stance)'
    },
    {
      name: 'Seismic Leap',
      cost: {
        actionPoints: 2,
        mana: 1,
        gravitas: -3
      },
      description: 'Leap high into the air and crash down, creating a shockwave.',
      mechanics: 'Jump 30 ft vertical/horizontal; land deals 1d8 shockwave to adjacent foes & pushes 5 ft.',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases to 2d8.' },
        { condition: 'Mountain Stance', effect: 'Shockwave radius increases to 10 ft.' },
        { condition: 'Titanic Stance', effect: 'Damage increases to 3d8 and push distance to 10 ft.' }
      ],
      scaling: 'Damage = 1d8 (2d8 in Stone stance, 3d8 in Titanic stance)'
    },
    {
      name: 'Rolling Crush',
      cost: {
        actionPoints: 1,
        mana: 0,
        gravitas: 1
      },
      description: 'After defeating an enemy, immediately move and attack another.',
      mechanics: 'Follow-through: after dropping a target to 0 HP, move 10 ft and make free Heavy Swing.',
      effects: [
        { condition: 'Stone Stance', effect: 'Movement increases to 15 ft.' },
        { condition: 'Mountain Stance', effect: 'Free Heavy Swing deals +1d6 damage.' },
        { condition: 'Titanic Stance', effect: 'Also gain +1 GV after the free attack.' }
      ],
      scaling: 'Movement = 10 ft (15 ft in Stone+ stance)'
    },
    {
      name: 'Slack Release',
      cost: {
        actionPoints: 0,
        mana: 0,
        gravitas: 'excess'
      },
      trigger: 'Bonus Action',
      description: 'Release excess Gravitas to prevent Overload.',
      mechanics: 'If at Strain 2, you may voluntarily drop GV to 0 to clear Strain (bonus action).',
      effects: [
        { condition: 'With Strain Buffer', effect: 'Can be used at Strain 3 instead of 2.' },
        { condition: 'With World Breaker Talents', effect: 'Retain 3 GV instead of dropping to 0.' },
        { condition: 'With Immovable Juggernaut Talents', effect: 'Also gain temporary HP equal to GV released.' }
      ],
      scaling: 'N/A'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Cataclysm Drive',
      cost: {
        actionPoints: 3,
        mana: 3,
        gravitas: -5
      },
      description: 'Charge forward in a straight line, damaging and flinging enemies in your path.',
      mechanics: 'Rush 30 ft in straight line; all enemies along path take 3d8 & STR save or flung to line edges. 1 Strain if > 1 target hit.',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases to 4d8.' },
        { condition: 'Mountain Stance', effect: 'Width increases to 10 ft.' },
        { condition: 'Titanic Stance', effect: 'Also creates difficult terrain along the path.' }
      ],
      scaling: 'Damage = 3d8 (4d8 in Stone+ stance)'
    },
    {
      name: 'Graviton Anchor',
      cost: {
        actionPoints: 2,
        mana: 2,
        gravitas: -3
      },
      description: 'Create a zone of increased gravity that slows enemies but not allies.',
      mechanics: '20-ft radius zone: enemies treat ground as quicksand (halved speed, no Dash). Allies unaffected. Lasts 2 rounds.',
      effects: [
        { condition: 'Stone Stance', effect: 'Duration increases to 3 rounds.' },
        { condition: 'Mountain Stance', effect: 'Radius increases to 30 ft.' },
        { condition: 'Titanic Stance', effect: 'Enemies also take 1d6 force damage per round while in the zone.' }
      ],
      scaling: 'Duration = 2 rounds (3 rounds in Stone+ stance)'
    },
    {
      name: 'Colossal Uppercut',
      cost: {
        actionPoints: 2,
        mana: 1,
        gravitas: -4
      },
      description: 'A powerful uppercut that launches smaller enemies into the air.',
      mechanics: 'Single target. DMG = 4d6 + STR. If target < your size, launch 15 ft upward (fall for extra 2d6).',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases to 5d6 + STR.' },
        { condition: 'Mountain Stance', effect: 'Launch height increases to 20 ft (3d6 fall damage).' },
        { condition: 'Titanic Stance', effect: 'Can target up to 2 adjacent enemies.' }
      ],
      scaling: 'Damage = 4d6 + STR (5d6 + STR in Stone+ stance)'
    },
    {
      name: 'Spine-Breaker',
      cost: {
        actionPoints: 1,
        mana: 1,
        gravitas: -2
      },
      trigger: 'Reaction',
      description: 'When you push an enemy into an obstacle, they take additional damage.',
      mechanics: 'Reaction on successful push: target suffers weapon dmg again as they slam obstacle.',
      effects: [
        { condition: 'Stone Stance', effect: 'Damage increases by +1d6.' },
        { condition: 'Mountain Stance', effect: 'Target is also stunned for 1 round on failed CON save.' },
        { condition: 'Titanic Stance', effect: 'Damage increases by +2d6 and stun duration increases to 2 rounds.' }
      ],
      scaling: 'Damage = weapon damage (+ 1d6/2d6 based on stance)'
    },
    {
      name: 'Gravity Well',
      cost: {
        actionPoints: 2,
        mana: 3,
        gravitas: -6
      },
      description: 'Create a powerful gravitational pull that draws enemies together.',
      mechanics: 'Center 20 ft: pull all creatures 10 ft. If any collide, both take 3d6.',
      effects: [
        { condition: 'Stone Stance', effect: 'Pull distance increases to 15 ft.' },
        { condition: 'Mountain Stance', effect: 'Collision damage increases to 4d6.' },
        { condition: 'Titanic Stance', effect: 'Radius increases to 30 ft and collision damage to 5d6.' }
      ],
      scaling: 'Collision damage = 3d6 (4d6 in Mountain stance, 5d6 in Titanic stance)'
    },
    {
      name: 'Bastion of Stone',
      cost: {
        actionPoints: 1,
        mana: 2,
        gravitas: 0
      },
      description: 'Convert your Gravitas into temporary hit points.',
      mechanics: 'Convert up to CON mod GV to temp HP ×2. Cannot exceed max HP.',
      effects: [
        { condition: 'Stone Stance', effect: 'Conversion rate increases to temp HP ×3.' },
        { condition: 'Mountain Stance', effect: 'Also gain +1 AC per 2 GV converted.' },
        { condition: 'Titanic Stance', effect: 'Also gain resistance to one damage type of your choice for 1 round.' }
      ],
      scaling: 'Temp HP = GV × 2 (× 3 in Stone+ stance)'
    },
    {
      name: 'Ruination Quake',
      cost: {
        actionPoints: 3,
        mana: 4,
        gravitas: -8
      },
      description: 'Smash the ground, causing it to collapse and bury enemies.',
      mechanics: 'Must be Mountain+. Smash ground; 30-ft radius collapses (DC DEX). Fail: 6d6 + prone + buried (restrain). On pass: half & no bury.',
      effects: [
        { condition: 'Mountain Stance', effect: 'Damage increases to 7d6.' },
        { condition: 'Titanic Stance', effect: 'Damage increases to 8d6 and radius to 40 ft.' },
        { condition: 'With Earthshaper Talents', effect: 'Creates permanent difficult terrain in the area.' }
      ],
      scaling: 'Damage = 6d6 (7d6 in Mountain stance, 8d6 in Titanic stance)'
    },
    {
      name: 'Titanic Momentum',
      cost: {
        actionPoints: 0,
        mana: 0,
        gravitas: 0
      },
      trigger: 'Passive',
      description: 'Your size and momentum increase your reach and push distance.',
      mechanics: 'While Mountain+, melee reach +10 ft and all pushes +5 ft.',
      effects: [
        { condition: 'Mountain Stance', effect: 'Melee reach +10 ft and all pushes +5 ft.' },
        { condition: 'Titanic Stance', effect: 'Melee reach +15 ft and all pushes +10 ft.' },
        { condition: 'With World Breaker Talents', effect: 'Also gain advantage on attack rolls against objects and structures.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Strain Buffer',
      cost: {
        actionPoints: 0,
        mana: 0,
        gravitas: 0
      },
      trigger: 'Passive',
      description: 'Increase your Strain threshold and make Slack Release more efficient.',
      mechanics: 'Strain threshold increases to 4; Slack Release no longer costs action.',
      effects: [
        { condition: 'Always Active', effect: 'Strain threshold increases to 4.' },
        { condition: 'Always Active', effect: 'Slack Release no longer costs an action.' },
        { condition: 'With Immovable Juggernaut Talents', effect: 'Strain threshold increases to 5.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Unbreakable Stride',
      cost: {
        actionPoints: 1,
        mana: 1,
        gravitas: -2
      },
      description: 'Move through difficult terrain and ignore opportunity attacks.',
      mechanics: 'Move full speed; ignore diff. terrain & opportunity attacks. Grants +1 GV if crossing rubble.',
      effects: [
        { condition: 'Stone Stance', effect: 'Also gain +10 ft movement speed.' },
        { condition: 'Mountain Stance', effect: 'Also gain +1 GV for every 10 ft moved through difficult terrain.' },
        { condition: 'Titanic Stance', effect: 'Also push aside any objects or creatures smaller than you.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'World-Ender',
      cost: {
        actionPoints: 3,
        mana: 5,
        gravitas: 'all'
      },
      description: 'A devastating attack that causes a massive explosion at the cost of exhaustion.',
      mechanics: 'Must be at Strain 3, 15 GV. Slam fists: 40-ft explosion 8d10 force, shatter objects, fling Large- foes 30 ft. Then collapse prone, GV 0, Strain 0, Exhaustion 1.',
      effects: [
        { condition: 'With World Breaker Talents', effect: 'Damage increases to 10d10.' },
        { condition: 'With Strain Buffer', effect: 'Recover to 1 GV instead of 0 after use.' }
      ],
      scaling: 'Damage = 8d10 (10d10 with World Breaker talents)',
      ultimate: true
    },
    {
      name: 'Apex Colossus',
      cost: {
        actionPoints: 3,
        mana: 4,
        gravitas: 'set to 15'
      },
      description: 'Instantly grow to Titanic size, gaining temporary hit points and increased reach.',
      mechanics: 'Grow to Titanic immediately; gain 30 temp HP, +10 ft reach. Lasts 3 turns, then Overload.',
      effects: [
        { condition: 'Once per Day', effect: 'Instantly set GV to 15 and enter Titanic Stance.' },
        { condition: 'With Immovable Juggernaut Talents', effect: 'Duration increases to 4 turns.' }
      ],
      scaling: 'Temporary HP = 30',
      daily: true
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    earthshaper: [
      {
        name: 'Stone Hand',
        description: 'Enhance your Tectonic Step ability to leave damaging terrain.',
        mechanics: 'Tectonic Step leaves caltrops (1d4) instead of plain difficult terrain.',
        requirements: 'Requires points in the Earthshaper talent tree.'
      },
      {
        name: 'Fault-Line',
        description: 'Enhance your Earthshock ability to create lasting hazardous terrain.',
        mechanics: 'Earthshock radius +5 ft and fissures remain as hazardous terrain.',
        requirements: 'Requires points in the Earthshaper talent tree.'
      },
      {
        name: 'Bedrock Command',
        description: 'Enhance your Gravity Well ability to slow enemies.',
        mechanics: 'Gravity Well lasts +1 turn and also slows enemies (-10 ft).',
        requirements: 'Requires points in the Earthshaper talent tree.'
      },
      {
        name: 'Continental Rift',
        description: 'Enhance your Ruination Quake ability to create a canyon that restrains enemies.',
        mechanics: 'Ruination Quake auto-creates 10-ft canyon; enemies inside are restrained until climb out (STR 15).',
        requirements: 'Requires points in the Earthshaper talent tree. (Capstone)'
      }
    ],
    worldBreaker: [
      {
        name: 'Heft Mastery',
        description: 'Enhance your Heavy Swing ability against structures.',
        mechanics: 'Heavy Swing now 2d10 base vs structures; crit range 19-20.',
        requirements: 'Requires points in the World Breaker talent tree.'
      },
      {
        name: 'Shock-Focus',
        description: 'Enhance your Pulverise ability to deal more damage with Siege Stacks.',
        mechanics: 'Pulverise adds +1d8 per Siege Stack (instead of GV).',
        requirements: 'Requires points in the World Breaker talent tree.'
      },
      {
        name: 'Momentum Fling',
        description: 'Enhance your Colossal Uppercut ability to regain Gravitas when hitting multiple targets.',
        mechanics: 'Colossal Uppercut refunds 2 GV if it launches target into another.',
        requirements: 'Requires points in the World Breaker talent tree.'
      },
      {
        name: 'Planet Crusher',
        description: 'Enhance your World-Ender ability to ignore resistance and potentially reset Apex Colossus.',
        mechanics: 'World-Ender ignores resistance; if it destroys ≥ 3 objects, cooldown resets on Apex Colossus.',
        requirements: 'Requires points in the World Breaker talent tree. (Capstone)'
      }
    ],
    immovableJuggernaut: [
      {
        name: 'Shielded Bulk',
        description: 'Enhance your Grounded Posture ability to protect allies.',
        mechanics: 'While in Grounded Posture allies behind you get +2 AC.',
        requirements: 'Requires points in the Immovable Juggernaut talent tree.'
      },
      {
        name: 'Gravitas Ward',
        description: 'Enhance your Bastion of Stone ability to reflect damage.',
        mechanics: 'Bastion of Stone temp HP also grants yourself ½ that as damage reflection.',
        requirements: 'Requires points in the Immovable Juggernaut talent tree.'
      },
      {
        name: 'Kinetic Shelter',
        description: 'Enhance your Magnet Shield ability to protect allies from a greater distance.',
        mechanics: 'Magnet Shield radius increases to 30 ft; redirected shots grant +2 GV (instead of +1).',
        requirements: 'Requires points in the Immovable Juggernaut talent tree.'
      },
      {
        name: 'Living Bunker',
        description: 'Enhance your Grounded Posture ability to last indefinitely and generate Gravitas.',
        mechanics: 'You may hold Grounded Posture indefinitely; each round held grants +1 GV (max 15) without Strain.',
        requirements: 'Requires points in the Immovable Juggernaut talent tree. (Capstone)'
      }
    ]
  },

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Strength',
      effect: 'Added to all Titan melee & slam damage; raises push distance (STR÷4 ft).'
    },
    {
      attribute: 'Constitution',
      effect: 'Max HP, max GV bonus, temp HP from Bastion, DC for Earthshock / Ruination Quake.'
    },
    {
      attribute: 'Dexterity',
      effect: 'Rarely used; helps initiative & Seismic Leap landing saves.'
    },
    {
      attribute: 'Wisdom',
      effect: 'Affects intimidation shouts and perception (spot weak walls).'
    }
  ],

  // Play Style
  playStyle: {
    steps: [
      {
        step: 'Tectonic Step',
        description: '(1 AP) 10 ft forward → GV +2.'
      },
      {
        step: 'Heavy Swing',
        description: '(2 AP) hits, now at 5 GV (Stone).'
      },
      {
        step: 'Pulverise',
        description: '(1 AP bonus) spend 2 GV, next swing +3 dmg.'
      },
      {
        step: 'Boulder Toss',
        description: 'Next turn pushes over threshold to Mountain; radius control begins.'
      },
      {
        step: 'Ruinous Crash',
        description: 'Spends 5 GV → Siege 1. Build again toward World-Ender.'
      }
    ],
    summary: 'The Titan therefore cycles: Move ⇒ Build Weight ⇒ Spend ⇒ Shake Field ⇒ Reset.'
  }
};

export default titanAbilities;
