// Talent trees for the Dreadnaught class
const dreadnaughtTalentTrees = [
  {
    id: 'bulwark-discipline',
    name: 'Bulwark Discipline',
    description: 'Specialize in pure mitigation & ally cover.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'hardened-edges',
        name: 'Hardened Edges',
        description: 'Increase your maximum Guard Points and shield AC.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          '+1 max GP; shields grant +1 AC when at ≥3 GP.',
          '+2 max GP; shields grant +1 AC when at ≥3 GP.',
          '+2 max GP; shields grant +1 AC when at ≥Ember GP.'
        ]
      },
      {
        id: 'guardians-reach',
        name: 'Guardian\'s Reach',
        description: 'Increase the range and duration of Shield Wall Shout.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '📢',
        rankDescription: [
          'Shield Wall Shout radius +5 ft.',
          'Shield Wall Shout radius +5 ft and lasts +1 round.',
          'Shield Wall Shout radius +10 ft and lasts +1 round.'
        ]
      },
      {
        id: 'resilient-battery',
        name: 'Resilient Battery',
        description: 'Make your temporary hit points from Brace for Impact last longer.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🔋',
        rankDescription: [
          'Temp HP from Brace for Impact lasts +1 round.',
          'Temp HP from Brace for Impact lasts +2 rounds.',
          'Temp HP from Brace for Impact no longer expires until lost.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'shield-specialist',
        name: 'Shield Specialist',
        description: 'Enhance your shield\'s defensive capabilities.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['hardened-edges'],
        icon: '🛡️',
        rankDescription: [
          'Gain +1 AC when using a shield.',
          'Gain +1 AC when using a shield and reduce damage from ranged attacks by 1.',
          'Gain +2 AC when using a shield and reduce damage from ranged attacks by 2.'
        ]
      },
      {
        id: 'protective-stance',
        name: 'Protective Stance',
        description: 'Adopt a stance that protects nearby allies.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['guardians-reach'],
        icon: '🧍',
        rankDescription: [
          'Allies within 5 ft gain +1 AC.',
          'Allies within 10 ft gain +1 AC.',
          'Allies within 10 ft gain +2 AC.'
        ]
      },
      {
        id: 'reinforced-guard',
        name: 'Reinforced Guard',
        description: 'Your Guard Points provide additional protection.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['resilient-battery'],
        icon: '🔒',
        rankDescription: [
          'Gain +1 AC when at max GP.',
          'Gain +1 AC when at 3+ GP.',
          'Gain +2 AC when at 3+ GP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'shield-wall-master',
        name: 'Shield Wall Master',
        description: 'Enhance your Shield Wall Shout ability.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['shield-specialist', 'protective-stance'],
        icon: '🧱',
        rankDescription: [
          'Shield Wall Shout also grants allies +1 to all saving throws and you absorb 75% of splash damage they take instead of 50%.'
        ]
      },
      {
        id: 'bulwark-expert',
        name: 'Bulwark Expert',
        description: 'Enhance your Bulwark Stance ability.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['protective-stance', 'reinforced-guard'],
        icon: '🛡️',
        rankDescription: [
          'While in Bulwark Stance, you also reduce elemental damage taken by 25% and gain +1 GP whenever you are hit.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'defensive-mastery',
        name: 'Defensive Mastery',
        description: 'Become a master of defensive techniques.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['shield-wall-master'],
        icon: '🛡️',
        rankDescription: [
          'Gain +1 AC, +1 to all saving throws, and +2 max GP. Additionally, when you use Brace for Impact, you also grant half the temporary HP to allies within 10 ft.'
        ]
      },
      {
        id: 'guardian-aura',
        name: 'Guardian Aura',
        description: 'Emit an aura that protects nearby allies.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['bulwark-expert'],
        icon: '✨',
        rankDescription: [
          'Allies within 15 ft gain resistance to one damage type of your choice. You can change the damage type as a bonus action.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'citadel-stance',
        name: 'Citadel Stance',
        description: 'Enhance your Bulwark Stance to protect against elemental damage.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['defensive-mastery', 'guardian-aura'],
        icon: '🏰',
        rankDescription: [
          'Bulwark Stance halves elemental damage and you no longer lose reactions while in stance. Additionally, allies within 10 ft gain the benefits of your Bulwark Stance at half effectiveness.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'impenetrable-defense',
        name: 'Impenetrable Defense',
        description: 'Your defensive capabilities reach new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['citadel-stance'],
        icon: '🛡️',
        rankDescription: [
          'While at maximum GP, you gain immunity to critical hits and resistance to all damage. Additionally, when you use Shield Wall Shout, you and affected allies gain temporary hit points equal to your Constitution modifier × 2.'
        ]
      },
      {
        id: 'bastion-of-protection',
        name: 'Bastion of Protection',
        description: 'Your presence creates a zone of protection for your allies.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['citadel-stance'],
        icon: '🏛️',
        rankDescription: [
          'As a bonus action (2 AP), create a 15-foot aura of protection around you for 1d4 rounds. Allies within the aura gain +2 AC, advantage on saving throws against area effects, and damage reduction equal to half your GP. You can use this ability once per short rest.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-protection',
        name: 'Avatar of Protection',
        description: 'Transform into a living embodiment of perfect defense.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['impenetrable-defense', 'bastion-of-protection'],
        icon: '🛡️',
        rankDescription: [
          'Once per day, transform into an Avatar of Protection for 1d6+2 rounds. During this time, your maximum GP doubles, you automatically generate 1 GP at the start of each of your turns, you gain immunity to all damage for the first 5 points of damage from each source, and your Shield Wall Shout affects all allies within 30 feet and grants them immunity to critical hits. Additionally, when an ally within 30 feet would take damage, you can use your reaction (1 AP) to redirect that damage to yourself and reduce it by your current GP.'
        ]
      },
    ],
  },
  {
    id: 'siege-engine',
    name: 'Siege Engine',
    description: 'Specialize in turning defense into huge bursts of damage.',
    icon: '💥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'kinetic-converter',
        name: 'Kinetic Converter',
        description: 'Convert spent Guard Points into additional damage.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '⚡',
        rankDescription: [
          'Each time you spend GP, add half that amount to your next damage roll.',
          'Each time you spend GP, add that amount to your next damage roll.',
          'Each time you spend GP, add that amount +1 to your next damage roll.'
        ]
      },
      {
        id: 'improved-siege',
        name: 'Improved Siege',
        description: 'Increase your maximum Siege Stacks and Iron Retribution damage.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🔥',
        rankDescription: [
          'Siege Stacks max = 4; each adds +1d4 to Iron Retribution.',
          'Siege Stacks max = 4; each adds +1d6 to Iron Retribution.',
          'Siege Stacks max = 5; each adds +1d6 to Iron Retribution.'
        ]
      },
      {
        id: 'shield-breaker',
        name: 'Shield Breaker',
        description: 'Your attacks can break through enemy defenses.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🔨',
        rankDescription: [
          'Shield Bash ignores 2 points of target\'s AC.',
          'Shield Bash ignores 4 points of target\'s AC.',
          'Shield Bash ignores 6 points of target\'s AC.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'offensive-guard',
        name: 'Offensive Guard',
        description: 'Your Guard Points enhance your offensive capabilities.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['kinetic-converter'],
        icon: '⚔️',
        rankDescription: [
          'Gain +1 to attack rolls when at 3+ GP.',
          'Gain +2 to attack rolls when at 3+ GP.',
          'Gain +3 to attack rolls when at 3+ GP.'
        ]
      },
      {
        id: 'siege-momentum',
        name: 'Siege Momentum',
        description: 'Your Siege Stacks build more quickly.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['improved-siege'],
        icon: '🔄',
        rankDescription: [
          'Gain 1 Siege Stack per 2 GP spent (instead of 3).',
          'Gain 1 Siege Stack per 2 GP spent and start combat with 1 Siege Stack.',
          'Gain 1 Siege Stack per 2 GP spent and start combat with 2 Siege Stacks.'
        ]
      },
      {
        id: 'shield-slam',
        name: 'Shield Slam',
        description: 'Enhance your Shield Bash ability.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['shield-breaker'],
        icon: '👊',
        rankDescription: [
          'Shield Bash deals +1d6 damage.',
          'Shield Bash deals +1d8 damage.',
          'Shield Bash deals +1d10 damage and stuns on a critical hit.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'rolling-thunder',
        name: 'Rolling Thunder',
        description: 'Enhance your Ruinous Crash ability.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['offensive-guard', 'siege-momentum'],
        icon: '🌩️',
        rankDescription: [
          'Ruinous Crash pushes survivors 10 ft and grants you advantage on your next attack.'
        ]
      },
      {
        id: 'siege-specialist',
        name: 'Siege Specialist',
        description: 'Your Siege Stacks enhance all your abilities.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['siege-momentum', 'shield-slam'],
        icon: '🔥',
        rankDescription: [
          'At 3+ Siege Stacks, all your attacks deal +1d8 damage and have +2 to hit.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'siege-master',
        name: 'Siege Master',
        description: 'Your Siege Stacks become even more powerful.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['rolling-thunder'],
        icon: '💥',
        rankDescription: [
          'Your maximum Siege Stacks increases to 6, and each stack adds +2d6 to Iron Retribution.'
        ]
      },
      {
        id: 'devastating-counter',
        name: 'Devastating Counter',
        description: 'Your Counter Riposte becomes more powerful.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['siege-specialist'],
        icon: '⚔️',
        rankDescription: [
          'Counter Riposte deals double damage when you have 3+ Siege Stacks.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'world-breaker',
        name: 'World Breaker',
        description: 'Make your Citadel Collapse even more devastating.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['siege-master', 'devastating-counter'],
        icon: '🌋',
        rankDescription: [
          'Citadel Collapse damage dice become d10s; objects auto-fail save. Additionally, the shockwave radius increases to 30 ft.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'siege-weaponry',
        name: 'Siege Weaponry',
        description: 'Your weapons become instruments of destruction.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['world-breaker'],
        icon: '⚒️',
        rankDescription: [
          'Your attacks ignore half of the target\'s damage resistance and deal double damage to objects and structures. Additionally, when you have 4+ Siege Stacks, your attacks have a 25% chance to stun the target for 1 round.'
        ]
      },
      {
        id: 'demolition-expert',
        name: 'Demolition Expert',
        description: 'Your area attacks become even more devastating.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['world-breaker'],
        icon: '💥',
        rankDescription: [
          'Your area-of-effect abilities deal an additional 2d8 damage and have their radius increased by 5 feet. Additionally, when you use Ruinous Crash or Citadel Collapse, you can spend 3 Siege Stacks to knock all affected enemies prone.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-destruction',
        name: 'Avatar of Destruction',
        description: 'Transform into a living embodiment of pure destruction.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['siege-weaponry', 'demolition-expert'],
        icon: '🔥',
        rankDescription: [
          'Once per day, transform into an Avatar of Destruction for 1d6+2 rounds. During this time, your maximum Siege Stacks increases to 10, you generate 1 Siege Stack at the start of each of your turns, your attacks ignore all damage resistance and immunity, and your Iron Retribution ability deals triple damage. Additionally, when you use Citadel Collapse, it creates a 15-foot radius crater that remains as difficult terrain for 1 minute, and enemies that start their turn in the crater take 2d10 damage.'
        ]
      },
    ],
  },
  {
    id: 'momentum-bastion',
    name: 'Momentum Bastion',
    description: 'Specialize in movement, momentum, and zone control.',
    icon: '🏃',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'trample-advance',
        name: 'Trample Advance',
        description: 'Move through enemy spaces during Guarded Advance.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '👣',
        rankDescription: [
          'Guarded Advance can pass through enemy squares.',
          'Guarded Advance can pass through enemy squares, knocking them 5 ft aside.',
          'Guarded Advance can pass through enemy squares, knocking them 10 ft aside.'
        ]
      },
      {
        id: 'steamroller',
        name: 'Steamroller',
        description: 'Gain action points when you displace enemies.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🚂',
        rankDescription: [
          'After you push or knock prone an enemy, gain +1 AP (once per turn).',
          'After you push or knock prone an enemy, gain +1 AP and +1 GP (once per turn).',
          'After you push or knock prone an enemy, gain +1 AP and +2 GP (once per turn).'
        ]
      },
      {
        id: 'unstoppable-march',
        name: 'Unstoppable March',
        description: 'Enhance your Fortress March ability.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🏃',
        rankDescription: [
          'Fortress March ignores difficult terrain.',
          'Fortress March ignores difficult terrain and grants dragged ally +1 GP.',
          'Fortress March ignores difficult terrain and grants dragged ally +2 GP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'momentum-guard',
        name: 'Momentum Guard',
        description: 'Gain Guard Points as you move.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['trample-advance'],
        icon: '🛡️',
        rankDescription: [
          'Gain +1 GP for every 20 ft you move on your turn.',
          'Gain +1 GP for every 15 ft you move on your turn.',
          'Gain +1 GP for every 10 ft you move on your turn.'
        ]
      },
      {
        id: 'mobile-defender',
        name: 'Mobile Defender',
        description: 'Your movement enhances your defensive capabilities.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['steamroller'],
        icon: '🏃',
        rankDescription: [
          'Gain +1 AC after moving at least 10 ft on your turn.',
          'Gain +2 AC after moving at least 10 ft on your turn.',
          'Gain +3 AC after moving at least 10 ft on your turn.'
        ]
      },
      {
        id: 'shield-charge',
        name: 'Shield Charge',
        description: 'Charge forward with your shield, knocking enemies aside.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['unstoppable-march'],
        icon: '🛡️',
        rankDescription: [
          'Move up to 20 ft in a straight line. Enemies in your path must make a STR save or be pushed 5 ft to the side.',
          'Move up to 30 ft in a straight line. Enemies in your path must make a STR save or be pushed 10 ft to the side.',
          'Move up to 40 ft in a straight line. Enemies in your path must make a STR save or be pushed 15 ft to the side and knocked prone.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'momentum-master',
        name: 'Momentum Master',
        description: 'Your movement enhances all your abilities.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['momentum-guard', 'mobile-defender'],
        icon: '🌀',
        rankDescription: [
          'After moving at least 15 ft, your next attack deals +1d8 damage and generates +1 GP on hit.'
        ]
      },
      {
        id: 'zone-controller',
        name: 'Zone Controller',
        description: 'Control the battlefield by manipulating enemy positions.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['mobile-defender', 'shield-charge'],
        icon: '🧲',
        rankDescription: [
          'When you push an enemy, you can choose which direction they move. Additionally, enemies pushed by you provoke opportunity attacks.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'battlefield-control',
        name: 'Battlefield Control',
        description: 'Control the battlefield with your movement and positioning.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['momentum-master'],
        icon: '🧠',
        rankDescription: [
          'Enemies that start their turn within 10 ft of you have their movement speed reduced by 10 ft. Additionally, you can move through enemy spaces without penalty.'
        ]
      },
      {
        id: 'mobile-fortress',
        name: 'Mobile Fortress',
        description: 'Your movement enhances your defensive capabilities.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['zone-controller'],
        icon: '🏰',
        rankDescription: [
          'After moving at least 15 ft, gain resistance to the next attack you take. Additionally, allies within 10 ft of you gain +1 AC.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'endless-motion',
        name: 'Endless Motion',
        description: 'Reset Guarded Advance when spending Guard Points.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['battlefield-control', 'mobile-fortress'],
        icon: '♾️',
        rankDescription: [
          'Spending 4+ GP immediately resets Guarded Advance cooldown and refunds 1 Mana. Additionally, after using Guarded Advance, your next attack deals +2d6 damage.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'unstoppable-advance',
        name: 'Unstoppable Advance',
        description: 'Your movement becomes truly unstoppable.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['endless-motion'],
        icon: '🏃',
        rankDescription: [
          'While using Guarded Advance or Fortress March, you are immune to all movement-impairing effects and can move through enemy spaces. Additionally, enemies that you move through take 1d8 damage and are pushed 5 feet away from you.'
        ]
      },
      {
        id: 'momentum-surge',
        name: 'Momentum Surge',
        description: 'Your momentum enhances all your abilities.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['endless-motion'],
        icon: '🌊',
        rankDescription: [
          'After moving at least 20 feet on your turn, your next attack deals an additional 2d8 damage and generates 2 GP on hit. Additionally, allies within 10 feet of you gain +10 feet of movement speed and +1 to attack rolls.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-momentum',
        name: 'Avatar of Momentum',
        description: 'Transform into a living embodiment of unstoppable momentum.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['unstoppable-advance', 'momentum-surge'],
        icon: '🌪️',
        rankDescription: [
          'Once per day, transform into an Avatar of Momentum for 1d6+2 rounds. During this time, your movement speed doubles, you gain an additional action on your turn (3 AP), you generate 1 GP for every 10 feet you move, and your Shield Charge ability can be used without spending GP and affects all enemies in a 10-foot-wide line. Additionally, when you use Guarded Advance, you create a slipstream that allows allies who follow your path to gain +20 feet of movement speed and advantage on their next attack roll.'
        ]
      },
    ],
  }
];

export default dreadnaughtTalentTrees;
