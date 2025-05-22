// Talent trees for the Berserker class
const berserkerTalentTrees = [
  {
    id: 'carnage',
    name: 'Path of Carnage',
    description: 'Specialize in pure offense and devastating damage.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'savage-chain',
        name: 'Savage Chain',
        description: 'Each kill refunds action points.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '⚔️',
        rankDescription: [
          'Each kill refunds 1 AP.',
          'Each kill refunds 1 AP and generates +1 FP.',
          'Each kill refunds 1 AP and generates +2 FP.'
        ]
      },
      {
        id: 'glory-seeker',
        name: 'Glory Seeker',
        description: 'Critical hits generate additional Fury.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🎯',
        rankDescription: [
          'Crits add +1 FP.',
          'Crits add +2 FP.',
          'Crits add +3 FP (can leap straight to Blaze).'
        ]
      },
      {
        id: 'fury-surge',
        name: 'Fury Surge',
        description: 'Your attacks have a chance to generate extra Fury.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '💢',
        rankDescription: [
          'Your attacks have a 10% chance to generate +1 FP.',
          'Your attacks have a 15% chance to generate +1 FP.',
          'Your attacks have a 20% chance to generate +1 FP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'cleaving-momentum',
        name: 'Cleaving Momentum',
        description: 'Your attacks can hit additional targets.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['savage-chain'],
        icon: '🔪',
        rankDescription: [
          'At Ember+, your melee attacks have a 10% chance to hit an additional target within 5 ft for half damage.',
          'At Ember+, your melee attacks have a 15% chance to hit an additional target within 5 ft for half damage.',
          'At Blaze+, your melee attacks hit an additional target within 5 ft for half damage.'
        ]
      },
      {
        id: 'fury-focus',
        name: 'Fury Focus',
        description: 'Your attacks become more accurate at higher Fury levels.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['glory-seeker'],
        icon: '🎯',
        rankDescription: [
          'At Ember+, gain +1 to attack rolls.',
          'At Blaze+, gain +2 to attack rolls.',
          'At Inferno, gain +3 to attack rolls.'
        ]
      },
      {
        id: 'bloodlust',
        name: 'Bloodlust',
        description: 'Gain increased critical hit chance at higher Fury levels.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['fury-surge'],
        icon: '🩸',
        rankDescription: [
          'At Ember+, your critical hit range expands by 1.',
          'At Blaze+, your critical hit range expands by 2.',
          'At Inferno, your critical hit range expands by 3.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'brutal-strikes',
        name: 'Brutal Strikes',
        description: 'Your attacks deal additional damage at higher Fury levels.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['cleaving-momentum', 'fury-focus'],
        icon: '💥',
        rankDescription: [
          'At Ember+, your attacks deal +1d4 damage. At Blaze+, your attacks deal +1d6 damage. At Inferno, your attacks deal +1d8 damage.'
        ]
      },
      {
        id: 'furious-assault',
        name: 'Furious Assault',
        description: 'Your attacks become faster at higher Fury levels.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['fury-focus', 'bloodlust'],
        icon: '⚡',
        rankDescription: [
          'At Blaze+, your first attack each turn costs 0 AP. At Inferno, your first two attacks each turn cost 0 AP.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'devastating-strikes',
        name: 'Devastating Strikes',
        description: 'Your critical hits become even more powerful.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['brutal-strikes'],
        icon: '💥',
        rankDescription: [
          'Your critical hits deal an additional 2d8 damage and generate +2 FP.'
        ]
      },
      {
        id: 'relentless-fury',
        name: 'Relentless Fury',
        description: 'Your Fury builds more quickly as you deal and take damage.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['furious-assault'],
        icon: '🔄',
        rankDescription: [
          'Gain +2 FP (instead of +1) each time you deal or take weapon damage.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'meat-grinder',
        name: 'Meat Grinder',
        description: 'Your basic attacks become even more deadly at high Fury.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['devastating-strikes', 'relentless-fury'],
        icon: '🔪',
        rankDescription: [
          'While at Inferno, Raging Strike hits twice.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'bloodbath',
        name: 'Bloodbath',
        description: 'Your critical hits cause enemies to bleed profusely.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['meat-grinder'],
        icon: '🩸',
        rankDescription: [
          'Your critical hits cause enemies to bleed for 2d6 damage per round for 1d4 rounds. While at Inferno, this bleeding damage is doubled.'
        ]
      },
      {
        id: 'unstoppable-rage',
        name: 'Unstoppable Rage',
        description: 'Your Fury makes you immune to control effects.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['meat-grinder'],
        icon: '💢',
        rankDescription: [
          'While at Blaze or higher, you are immune to fear, charm, and stun effects. While at Inferno, you also gain advantage on all saving throws.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-carnage',
        name: 'Avatar of Carnage',
        description: 'Transform into a living embodiment of pure destruction.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['bloodbath', 'unstoppable-rage'],
        icon: '👹',
        rankDescription: [
          'Once per day, transform into an Avatar of Carnage for 1d6+2 rounds. During this time, you remain at Inferno without venting, all your attacks are critical hits, you gain an additional action each turn (3 AP), and enemies that die within 30 feet of you grant you 10 temporary hit points and restore 1d6 hit points to you.'
        ]
      },
    ],
  },
  {
    id: 'resilience',
    name: 'Path of Resilience',
    description: 'Specialize in self-healing and damage reduction to become a formidable tank.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'iron-hide',
        name: 'Iron Hide',
        description: 'Gain temporary hit points when reaching Fury thresholds.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          'Gain temp HP = CON on crossing Ember.',
          'Gain temp HP = CON+2 on crossing Ember.',
          'Gain temp HP = CON+4 on crossing Ember.'
        ]
      },
      {
        id: 'fury-endurance',
        name: 'Fury Endurance',
        description: 'Gain damage reduction at higher Fury levels.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '💪',
        rankDescription: [
          'At Ember+, reduce all incoming damage by 1.',
          'At Blaze+, reduce all incoming damage by 2.',
          'At Inferno, reduce all incoming damage by 3.'
        ]
      },
      {
        id: 'battle-recovery',
        name: 'Battle Recovery',
        description: 'Recover health as you fight.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '❤️',
        rankDescription: [
          'Heal 1 HP whenever you gain FP.',
          'Heal 1d4 HP whenever you gain FP.',
          'Heal 1d4+CON HP whenever you gain FP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'relentless-vigor',
        name: 'Relentless Vigor',
        description: 'Spend Fury to heal instead of venting.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['iron-hide'],
        icon: '🔄',
        rankDescription: [
          'Spend 4 FP to heal 1d6 instead of venting.',
          'Spend 4 FP to heal 2d6 instead of venting.',
          'Spend 4 FP to heal 2d6+CON instead of venting.'
        ]
      },
      {
        id: 'defiant-stance',
        name: 'Defiant Stance',
        description: 'Gain damage reduction while at high Fury.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['fury-endurance'],
        icon: '🧍',
        rankDescription: [
          'At Blaze+, reduce all incoming damage by 1.',
          'At Blaze+, reduce all incoming damage by 2.',
          'At Blaze+, reduce all incoming damage by 3.'
        ]
      },
      {
        id: 'furious-healing',
        name: 'Furious Healing',
        description: 'Your Fury Guard ability also heals you.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['battle-recovery'],
        icon: '💖',
        rankDescription: [
          'Fury Guard also heals you for 1d4 HP.',
          'Fury Guard also heals you for 1d6 HP.',
          'Fury Guard also heals you for 1d8 HP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'unbreakable',
        name: 'Unbreakable',
        description: 'Gain resistance to damage at higher Fury levels.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['relentless-vigor', 'defiant-stance'],
        icon: '🧱',
        rankDescription: [
          'At Blaze+, gain resistance to physical damage. At Inferno, gain resistance to all damage.'
        ]
      },
      {
        id: 'second-wind',
        name: 'Second Wind',
        description: 'Recover health when you reach low HP.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['defiant-stance', 'furious-healing'],
        icon: '🌬️',
        rankDescription: [
          'When you drop below 25% HP, heal for 3d6+CON HP. Can occur once per encounter.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'fury-conversion',
        name: 'Fury Conversion',
        description: 'Convert Fury into temporary hit points.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['unbreakable'],
        icon: '🔄',
        rankDescription: [
          'Spend 5 FP to gain temporary HP equal to 2d6 + CON.'
        ]
      },
      {
        id: 'enduring-rage',
        name: 'Enduring Rage',
        description: 'Your Fury lasts longer before venting.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['second-wind'],
        icon: '⏱️',
        rankDescription: [
          'At Inferno, you can maintain your Fury for 1 additional round before venting.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'immortal-frenzy',
        name: 'Immortal Frenzy',
        description: 'Your Fury can save you from death.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['fury-conversion', 'enduring-rage'],
        icon: '🧬',
        rankDescription: [
          'Dropping to 0 HP vents Fury to heal same amount.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'undying-rage',
        name: 'Undying Rage',
        description: 'Your rage grows stronger as you take damage.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['immortal-frenzy'],
        icon: '🔥',
        rankDescription: [
          'When you take damage equal to or greater than 10% of your maximum hit points, gain +2 FP. While at Inferno, you regenerate 1d6 hit points at the start of each of your turns.'
        ]
      },
      {
        id: 'battle-trance',
        name: 'Battle Trance',
        description: 'Enter a trance-like state that enhances your defensive capabilities.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['immortal-frenzy'],
        icon: '🧘',
        rankDescription: [
          'As a bonus action (1 AP), enter a Battle Trance for 1d4 rounds. While in this trance, you gain resistance to all damage and your Fury Guard ability costs 0 AP to use. You can use this ability once per short rest.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-resilience',
        name: 'Avatar of Resilience',
        description: 'Transform into a living embodiment of unstoppable endurance.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['undying-rage', 'battle-trance'],
        icon: '🛡️',
        rankDescription: [
          'Once per day, transform into an Avatar of Resilience for 1d6+2 rounds. During this time, you gain immunity to all damage for the first 3 points of damage from each source, regenerate 2d6 hit points at the start of each of your turns, and your maximum hit points increase by 50. Additionally, when you use Fury Guard, you also grant half the damage reduction to all allies within 15 feet of you.'
        ]
      },
    ],
  },
  {
    id: 'momentum',
    name: 'Path of Momentum',
    description: 'Specialize in speed and control to maintain your offensive momentum.',
    icon: '⚡',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'bull-rush',
        name: 'Bull Rush',
        description: 'Your charge pushes enemies back.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🐂',
        rankDescription: [
          'Reckless Charge pushes targets 5 ft.',
          'Reckless Charge pushes targets 10 ft.',
          'Reckless Charge pushes targets 15 ft.'
        ]
      },
      {
        id: 'swift-fury',
        name: 'Swift Fury',
        description: 'Gain movement speed at higher Fury thresholds.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🏃',
        rankDescription: [
          'Movement speed +5 ft at Ember, +10 ft at Blaze, +15 ft at Inferno.',
          'Movement speed +10 ft at Ember, +15 ft at Blaze, +20 ft at Inferno.',
          'Movement speed +15 ft at Ember, +20 ft at Blaze, +25 ft at Inferno.'
        ]
      },
      {
        id: 'fury-dash',
        name: 'Fury Dash',
        description: 'Gain additional movement when you gain Fury.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '💨',
        rankDescription: [
          'Gain 5 ft of movement whenever you gain FP.',
          'Gain 10 ft of movement whenever you gain FP.',
          'Gain 15 ft of movement whenever you gain FP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'adrenal-flow',
        name: 'Adrenal Flow',
        description: 'Your attacks still hit even on a miss.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['bull-rush'],
        icon: '🎯',
        rankDescription: [
          'At Ember+, first miss each turn has a 25% chance to hit for half damage.',
          'At Blaze+, first miss each turn has a 50% chance to hit for half damage.',
          'At Blaze+, first miss each turn still hits for half damage.'
        ]
      },
      {
        id: 'momentum-strike',
        name: 'Momentum Strike',
        description: 'Your attacks become more powerful when you move.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['swift-fury'],
        icon: '💥',
        rankDescription: [
          'After moving at least 10 ft, your next attack deals +1d4 damage.',
          'After moving at least 10 ft, your next attack deals +1d6 damage.',
          'After moving at least 10 ft, your next attack deals +1d8 damage.'
        ]
      },
      {
        id: 'fury-refund',
        name: 'Fury Refund',
        description: 'Regain action points when you spend Fury.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['fury-dash'],
        icon: '♻️',
        rankDescription: [
          'When you spend ≥3 FP, gain 1 AP with a 25% chance.',
          'When you spend ≥3 FP, gain 1 AP with a 50% chance.',
          'When you spend ≥3 FP, gain 1 AP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'fury-surge',
        name: 'Fury Surge',
        description: 'Gain a burst of Fury when you need it most.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['adrenal-flow', 'momentum-strike'],
        icon: '⚡',
        rankDescription: [
          'When below 50% HP, gain +2 FP whenever you gain FP.'
        ]
      },
      {
        id: 'unstoppable-momentum',
        name: 'Unstoppable Momentum',
        description: 'Ignore movement impairments at high Fury.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['momentum-strike', 'fury-refund'],
        icon: '🚶',
        rankDescription: [
          'At Blaze+, you are immune to effects that reduce your movement speed or prevent you from moving.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'fury-acceleration',
        name: 'Fury Acceleration',
        description: 'Your Fury builds more quickly as you move.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['fury-surge'],
        icon: '🔄',
        rankDescription: [
          'Gain +1 FP for every 15 ft you move on your turn.'
        ]
      },
      {
        id: 'perpetual-motion',
        name: 'Perpetual Motion',
        description: 'Gain additional movement when you hit enemies.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['unstoppable-momentum'],
        icon: '🔁',
        rankDescription: [
          'Gain 5 ft of movement whenever you hit an enemy with an attack.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'momentum-lord',
        name: 'Momentum Lord',
        description: 'Your Fury no longer exhausts you.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['fury-acceleration', 'perpetual-motion'],
        icon: '👑',
        rankDescription: [
          'Inferno no longer exhausts you; instead converts to Blaze rather than zero.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'blinding-speed',
        name: 'Blinding Speed',
        description: 'Your movements become so fast that enemies struggle to hit you.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['momentum-lord'],
        icon: '⚡',
        rankDescription: [
          'While at Blaze or higher, gain +2 AC and advantage on Dexterity saving throws. Additionally, after using Reckless Charge, you can make a free attack against the target (costs 0 AP).'
        ]
      },
      {
        id: 'relentless-assault',
        name: 'Relentless Assault',
        description: 'Your attacks become increasingly deadly as you maintain your momentum.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['momentum-lord'],
        icon: '🔄',
        rankDescription: [
          'Each consecutive attack against the same target deals an additional 1d6 damage (stacks up to 3 times). Additionally, when you score a critical hit, your next attack costs 1 less AP (minimum 0).'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-momentum',
        name: 'Avatar of Momentum',
        description: 'Transform into a living embodiment of unstoppable momentum.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['blinding-speed', 'relentless-assault'],
        icon: '🌪️',
        rankDescription: [
          'Once per day, transform into an Avatar of Momentum for 1d6+2 rounds. During this time, your movement speed doubles, you can take an additional action on your turn (3 AP), you can move through enemy spaces, and your attacks ignore resistance. Additionally, when you use Reckless Charge, you can attack every enemy in your path, and you gain advantage on all attack rolls against enemies that haven\'t acted yet in the current round.'
        ]
      },
    ],
  }
];

export default berserkerTalentTrees;
