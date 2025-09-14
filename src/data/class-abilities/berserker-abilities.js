// Base spells and abilities for the Berserker class
const berserkerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Fury & Momentum Gauge',
    description: 'The Berserker channels raw fury to become an unstoppable engine of destruction. Where calmer warriors rely on technique, the Berserker rides a tide of adrenaline, trading safety for overwhelming force.',
    mechanics: [
      'Fury Points (FP): Earn +1 FP each time you deal or take weapon damage.',
      'Momentum Thresholds:',
      '• 5 FP — Ember: Minor buffs (-1 AP on melee attacks).',
      '• 10 FP — Blaze: Bonus damage +STR, resistance to mundane damage.',
      '• 15 FP — Inferno (Cap): Unlocks ultimate finishers; at end of turn you vent to 0 FP and gain a level of Exhaustion.',
      'Spending Fury: Most abilities cost 3-6 FP; unspent points keep momentum high.'
    ],
    passiveBenefits: {
      name: 'Momentum Thresholds',
      description: 'As your Fury builds, you gain increasing benefits at each threshold.',
      effects: [
        'Ember (5 FP): -1 AP cost on melee attacks.',
        'Blaze (10 FP): Add +STR to damage, gain resistance to mundane damage.',
        'Inferno (15 FP): Unlock ultimate abilities, but vent to 0 FP at end of turn and gain Exhaustion.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Raging Strike',
      cost: {
        actionPoints: 1,
        mana: 0,
        fury: 0
      },
      description: 'A basic melee attack that generates Fury.',
      mechanics: 'Melee attack. Generates +1 FP. At Blaze or higher add +STR damage.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Add +STR to damage.' },
        { condition: 'At Inferno', effect: 'Add +STR to damage and gain advantage on the attack roll.' }
      ],
      scaling: 'Damage = weapon + STR (doubled at Blaze or higher)'
    },
    {
      name: 'Reckless Charge',
      cost: {
        actionPoints: 2,
        mana: 0,
        fury: 0
      },
      description: 'Charge recklessly into battle, ignoring opportunity attacks.',
      mechanics: 'Move up to 30 ft ignoring opportunity attacks; first hit deals +2d6 damage. You suffer -2 AC until next turn.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 1 AP instead of 2 AP.' },
        { condition: 'At Blaze', effect: 'Damage bonus increases to +3d6.' },
        { condition: 'At Inferno', effect: 'Damage bonus increases to +4d6 and you can charge through enemies.' }
      ],
      scaling: 'Bonus damage = 2d6 (3d6 at Blaze, 4d6 at Inferno)'
    },
    {
      name: 'Blood for Blood',
      cost: {
        actionPoints: 1,
        mana: 0,
        fury: 3
      },
      description: 'Sacrifice your own blood to deal true damage to an enemy.',
      mechanics: 'Spend 3 FP; take 1d6 self-damage to deal 2d6+STR true damage.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Damage increases to 3d6+STR.' },
        { condition: 'At Inferno', effect: 'Damage increases to 4d6+STR and ignores all resistances.' }
      ],
      scaling: 'Damage = 2d6 + STR (3d6 + STR at Blaze, 4d6 + STR at Inferno)'
    },
    {
      name: 'War Cry',
      cost: {
        actionPoints: 1,
        mana: 2,
        fury: 0
      },
      description: 'Let out a terrifying battle cry that inspires allies and frightens enemies.',
      mechanics: 'Allies in 15 ft gain +1 AP next turn; enemies save vs. fear (DC 8+Prof+CON).',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Fear save DC increases by 2.' },
        { condition: 'At Inferno', effect: 'Allies also gain +2 to attack rolls for 1 round.' }
      ],
      scaling: 'Fear DC = 8 + Proficiency + CON'
    },
    {
      name: 'Fury Guard',
      cost: {
        actionPoints: 1,
        mana: 1,
        fury: 2
      },
      description: 'Channel your fury into a defensive stance.',
      mechanics: 'Consume 2 FP to halve incoming weapon damage for 1 round.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Duration increases to 2 rounds.' },
        { condition: 'At Inferno', effect: 'Also gain resistance to magical damage for the duration.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Roaring Backhand',
      cost: {
        actionPoints: 1,
        mana: 0,
        fury: 0
      },
      description: 'A wild swing that might miss but gives you a second chance.',
      mechanics: 'On a miss, immediately make a second attack at -2 but still gain Fury.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Second attack penalty reduced to -1.' },
        { condition: 'At Inferno', effect: 'No penalty on second attack.' }
      ],
      scaling: 'Damage = weapon + STR'
    },
    {
      name: 'Primal Howl',
      cost: {
        actionPoints: 1,
        mana: 1,
        fury: 0
      },
      description: 'Release a bestial howl that builds fury and unnerves enemies.',
      mechanics: 'Gain +2 FP immediately. Enemies within 15 ft must make Spirit save or be frightened until end of their next turn.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Gain +3 FP instead of +2.' },
        { condition: 'At Inferno', effect: 'Gain +4 FP and frightened enemies also take 1d4 psychic damage.' }
      ],
      scaling: 'FP gained = 2 (3 at Blaze, 4 at Inferno)'
    },
    {
      name: 'Reckless Abandon',
      cost: {
        actionPoints: 1,
        mana: 0,
        fury: 1
      },
      description: 'Throw caution to the wind for increased damage potential.',
      mechanics: 'Until end of turn, you have -2 AC but gain +1d6 damage on all attacks.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Damage bonus increases to +1d8.' },
        { condition: 'At Inferno', effect: 'Damage bonus increases to +1d10 and you gain advantage on attack rolls.' }
      ],
      scaling: 'Damage bonus = +1d6 (+1d8 at Blaze, +1d10 at Inferno)'
    },
    {
      name: 'Fury Surge',
      cost: {
        actionPoints: 1,
        mana: 2,
        fury: 0
      },
      description: 'Channel raw emotion into a burst of combat prowess.',
      mechanics: 'Gain +3 FP and your next attack deals +1d4 damage per current FP (max +5d4).',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Damage dice increase to d6s.' },
        { condition: 'At Inferno', effect: 'Damage dice increase to d8s and attack automatically hits.' }
      ],
      scaling: 'Damage = +1d4 per FP (d6s at Blaze, d8s at Inferno)'
    },
    {
      name: 'Battle Trance',
      cost: {
        actionPoints: 2,
        mana: 1,
        fury: 2
      },
      description: 'Enter a focused state where pain only feeds your rage.',
      mechanics: 'For 3 rounds, whenever you take damage, gain +1 FP (max +2 per turn).',
      effects: [
        { condition: 'At Ember', effect: 'Costs 1 AP instead of 2 AP.' },
        { condition: 'At Blaze', effect: 'Duration increases to 4 rounds.' },
        { condition: 'At Inferno', effect: 'Duration increases to 5 rounds and you gain resistance to the damage type that triggered the FP gain.' }
      ],
      scaling: 'Duration = 3 rounds (4 at Blaze, 5 at Inferno)'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Whirlwind Cleave',
      cost: {
        actionPoints: 2,
        mana: 2,
        fury: 5
      },
      description: 'Spin in a circle, hitting all nearby enemies.',
      mechanics: 'Spin; hit all enemies in 10 ft for weapon damage. If Inferno was active, add +2d6 fire.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 1 AP instead of 2 AP.' },
        { condition: 'At Blaze', effect: 'Radius increases to 15 ft.' },
        { condition: 'At Inferno', effect: 'Add +2d6 fire damage to all hits.' }
      ],
      scaling: 'Damage = weapon + STR (+2d6 fire at Inferno)'
    },
    {
      name: 'Unstoppable Rush',
      cost: {
        actionPoints: 2,
        mana: 3,
        fury: 'All'
      },
      description: 'Reset your Fury to gain a burst of action points.',
      mechanics: 'Drop to 0 FP, gain 2 extra AP and immunity to slows for 1 turn.',
      effects: [
        { condition: 'From Ember', effect: 'Gain 1 extra AP.' },
        { condition: 'From Blaze', effect: 'Gain 2 extra AP.' },
        { condition: 'From Inferno', effect: 'Gain 3 extra AP and immunity to all movement impairments.' }
      ],
      scaling: 'Extra AP = 1/2/3 based on threshold'
    },
    {
      name: 'Blood Furnace',
      cost: {
        actionPoints: 2,
        mana: 2,
        fury: 0
      },
      description: 'Your blood burns with fury, damaging those who harm you.',
      mechanics: 'Each time you bleed (take HP damage) while at Blaze+, deal 1d6 fire to the attacker.',
      effects: [
        { condition: 'At Ember', effect: 'No effect (requires Blaze).' },
        { condition: 'At Blaze', effect: 'Deal 1d6 fire damage to attackers.' },
        { condition: 'At Inferno', effect: 'Deal 2d6 fire damage to attackers.' }
      ],
      scaling: 'Damage = 1d6 (2d6 at Inferno)'
    },
    {
      name: 'Crushing Blow',
      cost: {
        actionPoints: 1,
        mana: 1,
        fury: 4
      },
      description: 'A powerful blow that can stun enemies.',
      mechanics: 'Single target; on hit, stun 1 turn. If target already wounded (<50% HP) roll with advantage.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Stun duration increases to 2 turns.' },
        { condition: 'At Inferno', effect: 'Always roll with advantage regardless of target\'s health.' }
      ],
      scaling: 'Damage = weapon + STR'
    },
    {
      name: 'Final Inferno',
      cost: {
        actionPoints: 3,
        mana: 4,
        fury: 'All'
      },
      description: 'Channel all your fury into a devastating explosion.',
      mechanics: 'Must be at Inferno. Deal 5d6 + STR to every creature in 15 ft, then drop to 1 HP and Exhaustion 1.',
      effects: [
        { condition: 'Requirement', effect: 'Must be at Inferno threshold (15+ FP).' }
      ],
      scaling: 'Damage = 5d6 + STR',
      ultimate: true
    },
    {
      name: 'Berserker\'s Resilience',
      cost: {
        actionPoints: 1,
        mana: 1,
        fury: 2
      },
      description: 'Your fury makes you resistant to debilitating effects.',
      mechanics: 'Spend 2 FP to end one condition affecting you (stunned, charmed, frightened, etc.).',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Also gain advantage on saves vs. conditions for 2 rounds.' },
        { condition: 'At Inferno', effect: 'Become immune to fear and charm effects for 3 rounds.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Savage Momentum',
      cost: {
        actionPoints: 1,
        mana: 0,
        fury: 1
      },
      description: 'Each successful hit builds your momentum for the next attack.',
      mechanics: 'After hitting with a melee attack, your next attack this turn gains +1 to hit and +2 damage.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Bonus increases to +2 to hit and +4 damage.' },
        { condition: 'At Inferno', effect: 'Bonus increases to +3 to hit and +6 damage, and crits on 19-20.' }
      ],
      scaling: 'Bonus = +1 hit/+2 dmg (+2/+4 at Blaze, +3/+6 at Inferno)'
    },
    {
      name: 'Intimidating Presence',
      cost: {
        actionPoints: 1,
        mana: 1,
        fury: 0
      },
      description: 'Your fury radiates outward, causing enemies to hesitate.',
      mechanics: 'All enemies within 10 ft must make Spirit save (DC 8+Prof+CON) or have disadvantage on their next attack.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Range increases to 15 ft and also reduces enemy damage by 2.' },
        { condition: 'At Inferno', effect: 'Range increases to 20 ft and frightens enemies for 1 round on failed save.' }
      ],
      scaling: 'Save DC = 8 + Proficiency + CON'
    },
    {
      name: 'Fury Leech',
      cost: {
        actionPoints: 2,
        mana: 2,
        fury: 3
      },
      description: 'Drain the fighting spirit from your enemies to fuel your own rage.',
      mechanics: 'Target enemy loses 1d4 from their next damage roll and you gain +2 FP.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 1 AP instead of 2 AP.' },
        { condition: 'At Blaze', effect: 'Target loses 1d6 from damage and you gain +3 FP.' },
        { condition: 'At Inferno', effect: 'Target loses 1d8 from damage, you gain +4 FP, and target is slowed for 1 round.' }
      ],
      scaling: 'Enemy penalty = 1d4 (1d6 at Blaze, 1d8 at Inferno)'
    },
    {
      name: 'Rampage',
      cost: {
        actionPoints: 2,
        mana: 3,
        fury: 6
      },
      description: 'Go on a killing spree, gaining momentum with each fallen foe.',
      mechanics: 'For 4 rounds, each enemy you kill grants +1 AP and +2 FP (max +3 AP per turn).',
      effects: [
        { condition: 'At Ember', effect: 'Costs 1 AP instead of 2 AP.' },
        { condition: 'At Blaze', effect: 'Duration increases to 5 rounds.' },
        { condition: 'At Inferno', effect: 'Duration increases to 6 rounds and kills also heal you for 1d8 HP.' }
      ],
      scaling: 'Duration = 4 rounds (5 at Blaze, 6 at Inferno)'
    },
    {
      name: 'Berserker\'s Last Stand',
      cost: {
        actionPoints: 1,
        mana: 2,
        fury: 4
      },
      description: 'When near death, your fury reaches its peak.',
      mechanics: 'Can only be used when below 25% HP. Gain +5 FP and resistance to all damage for 2 rounds.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 0 AP instead of 1 AP.' },
        { condition: 'At Blaze', effect: 'Duration increases to 3 rounds.' },
        { condition: 'At Inferno', effect: 'Duration increases to 4 rounds and you become immune to death effects.' }
      ],
      scaling: 'Duration = 2 rounds (3 at Blaze, 4 at Inferno)'
    },
    {
      name: 'Explosive Fury',
      cost: {
        actionPoints: 3,
        mana: 4,
        fury: 8
      },
      description: 'Release your pent-up rage in a devastating area attack.',
      mechanics: 'All enemies within 15 ft take 4d6 + STR damage. You lose 3 FP but gain 1 Siege Stack equivalent effect for 2 rounds.',
      effects: [
        { condition: 'At Ember', effect: 'Costs 2 AP instead of 3 AP.' },
        { condition: 'At Blaze', effect: 'Damage increases to 5d6 + STR.' },
        { condition: 'At Inferno', effect: 'Damage increases to 6d6 + STR and radius increases to 20 ft.' }
      ],
      scaling: 'Damage = 4d6 + STR (5d6 at Blaze, 6d6 at Inferno)'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    carnage: [
      {
        name: 'Savage Chain',
        description: 'Each kill refunds action points.',
        mechanics: 'Each kill refunds 1 AP.',
        requirements: 'Requires points in the Path of Carnage talent tree.'
      },
      {
        name: 'Glory Seeker',
        description: 'Critical hits generate additional Fury.',
        mechanics: 'Crits add +3 FP (can leap straight to Blaze).',
        requirements: 'Requires points in the Path of Carnage talent tree.'
      },
      {
        name: 'Cleaving Momentum',
        description: 'Your attacks can hit additional targets.',
        mechanics: 'At Blaze+, your melee attacks hit an additional target within 5 ft for half damage.',
        requirements: 'Requires points in the Path of Carnage talent tree.'
      },
      {
        name: 'Meat Grinder',
        description: 'Your basic attacks become even more deadly at high Fury.',
        mechanics: 'While at Inferno, Raging Strike hits twice.',
        requirements: 'Requires points in the Path of Carnage talent tree. (Capstone)'
      }
    ],
    resilience: [
      {
        name: 'Iron Hide',
        description: 'Gain temporary hit points when reaching Fury thresholds.',
        mechanics: 'Gain temp HP = CON on crossing Ember.',
        requirements: 'Requires points in the Path of Resilience talent tree.'
      },
      {
        name: 'Relentless Vigor',
        description: 'Spend Fury to heal instead of venting.',
        mechanics: 'Spend 4 FP to heal 2d6 instead of venting.',
        requirements: 'Requires points in the Path of Resilience talent tree.'
      },
      {
        name: 'Defiant Stance',
        description: 'Gain damage reduction while at high Fury.',
        mechanics: 'At Blaze+, reduce all incoming damage by 2.',
        requirements: 'Requires points in the Path of Resilience talent tree.'
      },
      {
        name: 'Immortal Frenzy',
        description: 'Your Fury can save you from death.',
        mechanics: 'Dropping to 0 HP vents Fury to heal same amount.',
        requirements: 'Requires points in the Path of Resilience talent tree. (Capstone)'
      }
    ],
    momentum: [
      {
        name: 'Bull Rush',
        description: 'Your charge pushes enemies back.',
        mechanics: 'Reckless Charge pushes targets 10 ft.',
        requirements: 'Requires points in the Path of Momentum talent tree.'
      },
      {
        name: 'Adrenal Flow',
        description: 'Your attacks still hit even on a miss.',
        mechanics: 'At Blaze, first miss each turn still hits for half.',
        requirements: 'Requires points in the Path of Momentum talent tree.'
      },
      {
        name: 'Swift Fury',
        description: 'Gain movement speed at higher Fury thresholds.',
        mechanics: 'Movement speed +5 ft at Ember, +10 ft at Blaze, +15 ft at Inferno.',
        requirements: 'Requires points in the Path of Momentum talent tree.'
      },
      {
        name: 'Momentum Lord',
        description: 'Your Fury no longer exhausts you.',
        mechanics: 'Inferno no longer exhausts you; instead converts to Blaze rather than zero.',
        requirements: 'Requires points in the Path of Momentum talent tree. (Capstone)'
      }
    ]
  },

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Strength',
      effect: 'Added to almost every damage roll.'
    },
    {
      attribute: 'Constitution',
      effect: 'Raises HP, increases save DCs on shouts, and sets Fear DC. More CON = bigger safety net to fuel Fury-spending plays.'
    },
    {
      attribute: 'Dexterity',
      effect: 'Boosts AC when not reckless; important for Path of Momentum positioning.'
    },
    {
      attribute: 'Wisdom',
      effect: 'Minor: improves resist vs. charm/fear; helps battlefield awareness.'
    }
  ],

  // Play Style
  playStyle: {
    steps: [
      {
        step: 'Open',
        description: 'With Reckless Charge → Raging Strike to gain early Fury.'
      },
      {
        step: 'Build',
        description: 'Momentum through constant offense; cross Ember → Blaze fast.'
      },
      {
        step: 'Spend',
        description: 'Fury tactically (Blood for Blood, Fury Guard) or save to hit Inferno for a devastating finisher.'
      },
      {
        step: 'Vent',
        description: '(Auto or via Unstoppable Rush) to reset, then repeat.'
      }
    ],
    summary: 'This loop rewards reckless aggression: hit hard → build Fury → cross thresholds → hit harder.'
  }
};

export default berserkerAbilities;
