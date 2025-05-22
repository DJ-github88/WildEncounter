// Talent trees for the Primalist class
const primalistTalentTrees = [
  {
    id: 'totemic-sage',
    name: 'Totemic Sage',
    description: 'Master the art of creating and empowering totems for zone control and battlefield manipulation.',
    icon: '🗿',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'totem-mastery',
        name: 'Totem Mastery',
        description: 'Improve your ability to create and maintain totems.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🗿',
        rankDescription: [
          'Your totems last 1 additional round.',
          'Your totems last 2 additional rounds.',
          'Your totems last 3 additional rounds.'
        ]
      },
      {
        id: 'expanded-aura',
        name: 'Expanded Aura',
        description: 'Increase the range of your totem auras.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '⭕',
        rankDescription: [
          'Your totem auras extend to 15 feet.',
          'Your totem auras extend to 20 feet.',
          'Your totem auras extend to 25 feet.'
        ]
      },
      {
        id: 'efficient-ritual',
        name: 'Efficient Ritual',
        description: 'Reduce the cost of placing totems.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'Totem Ritual costs 1 AP instead of 2 AP.',
          'Totem Ritual costs 1 AP and 0 Mana.',
          'Totem Ritual costs 1 AP, 0 Mana, and grants +1 PR when placed.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'second-pillar',
        name: 'Second Pillar',
        description: 'Maintain multiple totems simultaneously.',
        maxRank: 1,
        position: { row: 1, col: 0 },
        requires: ['totem-mastery'],
        icon: '🏛️',
        rankDescription: [
          'You can maintain 2 totems at once.'
        ]
      },
      {
        id: 'empowered-auras',
        name: 'Empowered Auras',
        description: 'Your totem auras provide stronger benefits.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['expanded-aura'],
        icon: '💫',
        rankDescription: [
          'Stone-Root: +2 AC instead of +1. Storm-Eye: +2 lightning damage instead of +1. Life-Bloom: 3 HP/round instead of 2.',
          'Stone-Root: +3 AC instead of +1. Storm-Eye: +3 lightning damage instead of +1. Life-Bloom: 4 HP/round instead of 2.',
          'Stone-Root: +4 AC instead of +1. Storm-Eye: +4 lightning damage instead of +1. Life-Bloom: 5 HP/round instead of 2.'
        ]
      },
      {
        id: 'totem-resonance',
        name: 'Totem Resonance',
        description: 'Your totems generate more Primal Resonance.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['efficient-ritual'],
        icon: '🔄',
        rankDescription: [
          'Gain +2 PR per round when standing in your totem aura (instead of +1).',
          'Gain +3 PR per round when standing in your totem aura (instead of +1).',
          'Gain +4 PR per round when standing in your totem aura (instead of +1).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'dancing-runes',
        name: 'Dancing Runes',
        description: 'Your totems persist when you place new ones.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['second-pillar', 'empowered-auras'],
        icon: '📝',
        rankDescription: [
          'Dropping a new totem no longer ends the previous one (up to your maximum number of totems).'
        ]
      },
      {
        id: 'bolstered-auras',
        name: 'Bolstered Auras',
        description: 'Your totem auras become more powerful and larger.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['empowered-auras', 'totem-resonance'],
        icon: '🌐',
        rankDescription: [
          'Aura radius +5 ft and all aura bonuses +1 (stacks with Empowered Auras).'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'totem-preservation',
        name: 'Totem Preservation',
        description: 'Your totems require less PR to maintain.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['dancing-runes'],
        icon: '🔋',
        rankDescription: [
          'Maintaining totems costs 0 PR for the first round after placement.'
        ]
      },
      {
        id: 'totem-synergy',
        name: 'Totem Synergy',
        description: 'Your totems become more powerful when placed near each other.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['bolstered-auras'],
        icon: '🔗',
        rankDescription: [
          'When two of your totems\' auras overlap, both gain +50% effectiveness in the overlapping area.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'living-effigy',
        name: 'Living Effigy',
        description: 'Animate your totems to move and act independently.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['totem-preservation', 'totem-synergy'],
        icon: '🏃',
        rankDescription: [
          'Spend 3 PR to animate a totem (it moves 20 ft/round and repeats its Channel Action without requiring your action).'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'third-pillar',
        name: 'Third Pillar',
        description: 'Maintain even more totems simultaneously.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['living-effigy'],
        icon: '🏯',
        rankDescription: [
          'You can maintain 3 totems at once. Additionally, when you place a third totem, gain 1d4 PR immediately.'
        ]
      },
      {
        id: 'totem-guardian',
        name: 'Totem Guardian',
        description: 'Your totems protect themselves and nearby allies.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['living-effigy'],
        icon: '🛡️',
        rankDescription: [
          'Your totems gain 20 hit points and resistance to all damage. Additionally, allies within your totem auras gain +2 AC and advantage on saving throws against area-of-effect spells.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'totemic-ascendance',
        name: 'Totemic Ascendance',
        description: 'Become one with your totems, achieving the pinnacle of totemic magic.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['third-pillar', 'totem-guardian'],
        icon: '✨',
        rankDescription: [
          'Once per day, you can enter a state of Totemic Ascendance for 1d6+2 minutes. During this time, you can maintain up to 5 totems simultaneously, your totem auras extend to 40 feet, and all totem effects are doubled in power. Additionally, you can place totems as a bonus action (0 AP), and when you place a totem, you can immediately trigger its Channel Action without spending an action. Finally, you gain all the benefits of your totem auras regardless of your position on the battlefield, and enemies that destroy your totems take 4d10 force damage and are stunned for 1 round.'
        ]
      },
    ],
  },
  {
    id: 'elemental-fury',
    name: 'Elemental Fury',
    description: 'Harness the raw power of the elements to devastate your enemies with burst damage.',
    icon: '🌪️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'charge-storm',
        name: 'Charge Storm',
        description: 'Your elemental bursts deal additional damage.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '⚡',
        rankDescription: [
          'Elemental Bursts add +INT to damage again.',
          'Elemental Bursts add +INT+1 to damage again.',
          'Elemental Bursts add +INT+2 to damage again.'
        ]
      },
      {
        id: 'resonance-capacity',
        name: 'Resonance Capacity',
        description: 'Increase your maximum Primal Resonance capacity.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🔋',
        rankDescription: [
          'Your maximum PR increases to 7.',
          'Your maximum PR increases to 8.',
          'Your maximum PR increases to 9.'
        ]
      },
      {
        id: 'elemental-focus',
        name: 'Elemental Focus',
        description: 'Your elemental spells become more focused and powerful.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🔍',
        rankDescription: [
          'Your elemental spells gain +1 to hit.',
          'Your elemental spells gain +2 to hit.',
          'Your elemental spells gain +3 to hit.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'overload',
        name: 'Overload',
        description: 'Your powerful spells sometimes cast twice.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['charge-storm'],
        icon: '🔄',
        rankDescription: [
          'When you spend ≥4 PR in one cast, roll 1d6; on 6, cast the spell a second time at half damage.',
          'When you spend ≥4 PR in one cast, roll 1d6; on 5-6, cast the spell a second time at half damage.',
          'When you spend ≥4 PR in one cast, roll 1d6; on 4-6, cast the spell a second time at half damage.'
        ]
      },
      {
        id: 'elemental-attunement',
        name: 'Elemental Attunement',
        description: 'Your spells become more powerful with specific elements.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['resonance-capacity'],
        icon: '🌀',
        rankDescription: [
          'Choose one element (earth, lightning, or nature). Spells of that element deal +1d4 damage.',
          'Choose one element (earth, lightning, or nature). Spells of that element deal +1d6 damage.',
          'Choose one element (earth, lightning, or nature). Spells of that element deal +1d8 damage.'
        ]
      },
      {
        id: 'volatile-core',
        name: 'Volatile Core',
        description: 'Your attacks are more likely to critically hit when you have high PR.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['elemental-focus'],
        icon: '💥',
        rankDescription: [
          'Crit range expands by 1 per 3 PR held (max +1).',
          'Crit range expands by 1 per 3 PR held (max +2).',
          'Crit range expands by 1 per 2 PR held (max +2).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'elemental-cascade',
        name: 'Elemental Cascade',
        description: 'Your elemental spells can chain to additional targets.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['overload', 'elemental-attunement'],
        icon: '⛓️',
        rankDescription: [
          'When you cast an elemental burst spell, it can chain to one additional target within 15 feet of the primary target, dealing half damage.'
        ]
      },
      {
        id: 'resonance-explosion',
        name: 'Resonance Explosion',
        description: 'Your critical hits with elemental spells create explosive effects.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['elemental-attunement', 'volatile-core'],
        icon: '💥',
        rankDescription: [
          'When you score a critical hit with an elemental spell, it explodes for an additional 2d6 damage of the same type in a 10-foot radius around the target.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'elemental-mastery',
        name: 'Elemental Mastery',
        description: 'Your elemental spells become more powerful and efficient.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['elemental-cascade'],
        icon: '🎯',
        rankDescription: [
          'Your elemental spells cost 1 less PR (minimum 1) and deal an additional 1d6 damage.'
        ]
      },
      {
        id: 'resonance-amplification',
        name: 'Resonance Amplification',
        description: 'Your Primal Resonance becomes more powerful.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['resonance-explosion'],
        icon: '📈',
        rankDescription: [
          'Each point of PR above 5 adds +1d4 damage to your elemental spells.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'avatar-of-raw-power',
        name: 'Avatar of Raw Power',
        description: 'Your elemental damage becomes explosively powerful.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['elemental-mastery', 'resonance-amplification'],
        icon: '👑',
        rankDescription: [
          'Once per encounter, while at full PR, all elemental damage dice explode (max value lets you roll an extra die).'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'elemental-convergence',
        name: 'Elemental Convergence',
        description: 'Combine multiple elements in a single devastating attack.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['avatar-of-raw-power'],
        icon: '🌪️',
        rankDescription: [
          'As an action (3 AP), spend 5 PR to unleash a convergence of elements. Choose two elements (earth, lightning, or nature) and make a ranged spell attack against a target within 60 feet. On a hit, the target takes 4d10 damage of each chosen element type. Additionally, each element applies a secondary effect: earth knocks the target prone, lightning stuns the target for 1 round, and nature reduces the target\'s movement speed by half for 2 rounds.'
        ]
      },
      {
        id: 'resonance-mastery',
        name: 'Resonance Mastery',
        description: 'Achieve complete mastery over your Primal Resonance.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['avatar-of-raw-power'],
        icon: '🔮',
        rankDescription: [
          'Your maximum PR increases to 12. Additionally, you can spend 1 AP to convert up to 3 points of damage you would take into PR (1 PR per 5 damage prevented). Finally, when you reach maximum PR, your next elemental spell costs 0 AP and deals maximum damage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'elemental-transcendence',
        name: 'Elemental Transcendence',
        description: 'Transcend your physical form to become a being of pure elemental energy.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['elemental-convergence', 'resonance-mastery'],
        icon: '🌟',
        rankDescription: [
          'Once per day, you can transform into a being of pure elemental energy for 1d6+2 minutes. Choose one element (earth, lightning, or nature). You gain immunity to damage of that type and resistance to all other damage types. Your elemental spells of the chosen type deal triple damage and ignore resistance. Additionally, you emit an aura of elemental energy in a 20-foot radius that deals 3d6 damage of your chosen type to enemies at the start of their turn. Finally, you can cast any elemental spell of your chosen type without spending PR, and your movement speed increases by 30 feet.'
        ]
      },
    ],
  },
  {
    id: 'verdant-ward',
    name: 'Verdant Ward',
    description: 'Master the healing and protective powers of nature.',
    icon: '🌿',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'nurturing-spirit',
        name: 'Nurturing Spirit',
        description: 'Your Life-Bloom totem heals for more.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '💚',
        rankDescription: [
          'Life-Bloom totem heals +1 HP/round.',
          'Life-Bloom totem heals +2 HP/round.',
          'Life-Bloom totem heals +WIS HP/round.'
        ]
      },
      {
        id: 'earthen-protection',
        name: 'Earthen Protection',
        description: 'Your Earthen Buckler ability becomes more powerful.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🛡️',
        rankDescription: [
          'Earthen Buckler reduces damage by an additional 1d4.',
          'Earthen Buckler reduces damage by an additional 1d6.',
          'Earthen Buckler reduces damage by an additional 1d8.'
        ]
      },
      {
        id: 'healing-resonance',
        name: 'Healing Resonance',
        description: 'Your healing spells become more powerful with Primal Resonance.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'Healing spells restore +1 HP per PR you currently have.',
          'Healing spells restore +2 HP per PR you currently have.',
          'Healing spells restore +3 HP per PR you currently have.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'shared-resonance',
        name: 'Shared Resonance',
        description: 'Your defensive abilities also protect nearby allies.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['nurturing-spirit'],
        icon: '🔄',
        rankDescription: [
          'When you use Earthen Buckler, the nearest ally gains 25% of the damage reduction as temporary HP.',
          'When you use Earthen Buckler, the nearest ally gains 50% of the damage reduction as temporary HP.',
          'When you use Earthen Buckler, the nearest ally gains 75% of the damage reduction as temporary HP.'
        ]
      },
      {
        id: 'natural-recovery',
        name: 'Natural Recovery',
        description: 'Recover Primal Resonance when you heal allies.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['earthen-protection'],
        icon: '♻️',
        rankDescription: [
          'Gain +1 PR when you cast a healing spell.',
          'Gain +1 PR when you cast a healing spell or when an ally is healed by your Life-Bloom totem.',
          'Gain +2 PR when you cast a healing spell or when an ally is healed by your Life-Bloom totem.'
        ]
      },
      {
        id: 'regenerative-roots',
        name: 'Regenerative Roots',
        description: 'Heal when you remain stationary.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['healing-resonance'],
        icon: '🌱',
        rankDescription: [
          'At turn-start, if you did not move last round, heal 1 HP.',
          'At turn-start, if you did not move last round, heal 1d4 HP.',
          'At turn-start, if you did not move last round, heal 1 PR HP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'natures-embrace',
        name: 'Nature\'s Embrace',
        description: 'Your healing spells also provide damage reduction.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['shared-resonance', 'natural-recovery'],
        icon: '🌳',
        rankDescription: [
          'Allies healed by your spells gain damage reduction equal to your WIS modifier for 1 round.'
        ]
      },
      {
        id: 'verdant-barrier',
        name: 'Verdant Barrier',
        description: 'Create a protective barrier of natural energy.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['natural-recovery', 'regenerative-roots'],
        icon: '🌿',
        rankDescription: [
          'Spend 3 PR to create a 15-foot wall that blocks enemy movement and projectiles for 2 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'enhanced-healing',
        name: 'Enhanced Healing',
        description: 'Your healing spells become more powerful.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['natures-embrace'],
        icon: '💖',
        rankDescription: [
          'Your healing spells heal for an additional 2d6 HP and remove one harmful condition.'
        ]
      },
      {
        id: 'protective-growth',
        name: 'Protective Growth',
        description: 'Your Verdant Barrier becomes more powerful.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['verdant-barrier'],
        icon: '🌵',
        rankDescription: [
          'Your Verdant Barrier now deals 2d6 damage to enemies that touch it and lasts for 3 rounds.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'gaias-grace',
        name: 'Gaia\'s Grace',
        description: 'Unleash a powerful healing burst when near death.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['enhanced-healing', 'protective-growth'],
        icon: '🌍',
        rankDescription: [
          'When you drop to 0 HP you can spend all PR to pop to 1 HP and cast Bloom of Renewal for free.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'natures-blessing',
        name: 'Nature\'s Blessing',
        description: 'Your healing abilities become even more powerful.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['gaias-grace'],
        icon: '🌱',
        rankDescription: [
          'Your healing spells restore an additional 2d8 hit points and grant the target temporary hit points equal to your Wisdom modifier. Additionally, when you cast a healing spell, you can spend 2 additional PR to remove all negative conditions affecting the target.'
        ]
      },
      {
        id: 'verdant-sanctuary',
        name: 'Verdant Sanctuary',
        description: 'Create a sanctuary of natural energy that protects and heals allies.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['gaias-grace'],
        icon: '🌳',
        rankDescription: [
          'As an action (3 AP), spend 4 PR to create a 20-foot radius sanctuary of natural energy centered on you. The sanctuary lasts for 1d4+1 rounds. Allies within the sanctuary gain 1d8 hit points at the start of their turn, have resistance to all damage, and are immune to negative conditions. Enemies cannot enter the sanctuary unless they succeed on a Wisdom saving throw.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'nature-incarnate',
        name: 'Nature Incarnate',
        description: 'Become one with nature, embodying its healing and protective powers.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['natures-blessing', 'verdant-sanctuary'],
        icon: '🌿',
        rankDescription: [
          'Once per day, you can transform into Nature Incarnate for 1d6+2 minutes. In this form, you become a being of pure natural energy. You gain the following benefits: immunity to poison, disease, and exhaustion; resistance to all damage types; your healing spells restore triple the normal amount of hit points; you can cast any healing or protective spell without spending PR; and you can use Verdant Sanctuary as a bonus action (1 AP) without expending its normal use. Additionally, as an action (3 AP), you can unleash a wave of natural energy that heals all allies within 60 feet for 6d10 hit points and removes all negative conditions affecting them.'
        ]
      },
    ],
  }
];

export default primalistTalentTrees;
