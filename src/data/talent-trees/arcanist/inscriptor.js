// Talent trees for the Inscriptor class
const inscriptorTalentTrees = [
  {
    id: 'battle-engraver',
    name: 'Battle-Engraver',
    description: 'Master the art of front-loaded traps and combat runes.',
    icon: '🔯',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'quick-etch',
        name: 'Quick Etch',
        description: 'Reduce the AP cost of your first rune each round.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '✍️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'The first rune you inscribe each round costs 1 less AP (minimum 0).',
          'The first rune you inscribe each round costs 1 less AP (minimum 0) and requires 1 less Mana (minimum 1).',
          'The first rune you inscribe each round costs 1 less AP (minimum 0) and requires 1 less Mana (minimum 1). Additionally, it takes effect 1 round faster.',
          'The first rune you inscribe each round costs 2 less AP (minimum 0) and requires 1 less Mana (minimum 1). Additionally, it takes effect 1 round faster.',
          'The first rune you inscribe each round costs 2 less AP (minimum 0) and requires 2 less Mana (minimum 1). Additionally, it takes effect 1 round faster.'
        ]
      },
      {
        id: 'explosive-runes',
        name: 'Explosive Runes',
        description: 'Enhance your explosive runes with additional effects.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '💥',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Explosive Script rune deals an additional 1d6 damage.',
          'Your Explosive Script rune deals an additional 1d6 damage and has its radius increased by 5 feet.',
          'Your Explosive Script rune deals an additional 2d6 damage and has its radius increased by 5 feet.',
          'Your Explosive Script rune deals an additional 2d6 damage and has its radius increased by 10 feet.',
          'Your Explosive Script rune deals an additional 3d6 damage and has its radius increased by 10 feet. Additionally, creatures that fail their save are knocked prone.'
        ]
      },
      {
        id: 'shock-mastery',
        name: 'Shock Mastery',
        description: 'Enhance your Glyph of Shock with additional effects.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '⚡',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Glyph of Shock deals an additional 1d6 lightning damage.',
          'Your Glyph of Shock deals an additional 1d6 lightning damage and reduces the target\'s movement speed by 5 feet for 1 round.',
          'Your Glyph of Shock deals an additional 2d6 lightning damage and reduces the target\'s movement speed by 10 feet for 1 round.',
          'Your Glyph of Shock deals an additional 2d6 lightning damage and reduces the target\'s movement speed by 10 feet for 2 rounds.',
          'Your Glyph of Shock deals an additional 3d6 lightning damage and reduces the target\'s movement speed by 15 feet for 2 rounds. Additionally, the target has disadvantage on their next attack roll.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'chain-reaction',
        name: 'Chain Reaction',
        description: 'When a rune detonates, adjacent runes auto-trigger.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left-center position (triangular pattern)
        requires: ['quick-etch'],
        icon: '🔄',
        rankDescription: [
          'When one of your runes detonates, one adjacent rune within 5 feet automatically triggers (once per turn).',
          'When one of your runes detonates, one adjacent rune within 10 feet automatically triggers (once per turn).',
          'When one of your runes detonates, one adjacent rune within 15 feet automatically triggers (once per turn). Additionally, the triggered rune deals 1d6 extra damage.'
        ]
      },
      {
        id: 'trap-expert',
        name: 'Trap Expert',
        description: 'Improve your ability to set and conceal runes.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center position
        requires: ['explosive-runes'],
        icon: '🔍',
        rankDescription: [
          'Your runes are harder to detect. The DC to spot your runes increases by 2, and you can place runes as a free action once per round.',
          'Your runes are harder to detect. The DC to spot your runes increases by 4, and you can place runes as a free action once per round.',
          'Your runes are harder to detect. The DC to spot your runes increases by 6, and you can place runes as a free action twice per round.'
        ]
      },
      {
        id: 'stone-script',
        name: 'Stone Script',
        description: 'Runes etched on walls/floor gain protection against dispelling.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right-center position (triangular pattern)
        requires: ['shock-mastery'],
        icon: '🪨',
        rankDescription: [
          'Runes etched on walls or floors gain +2 AC vs. dispel/sundering attempts.',
          'Runes etched on walls or floors gain +4 AC vs. dispel/sundering attempts and last 50% longer.',
          'Runes etched on walls or floors gain +6 AC vs. dispel/sundering attempts, last twice as long, and deal 1d6 extra damage when triggered.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'multi-trigger',
        name: 'Multi-Trigger',
        description: 'Your runes can trigger multiple times before fading.',
        maxRank: 1,
        position: { row: 2, col: 1 }, // Left position (triangular pattern)
        requires: ['chain-reaction'],
        icon: '🔁',
        rankDescription: [
          'Your runes can trigger twice before fading. After the first trigger, the rune\'s power is reduced by 50% for the second trigger.'
        ]
      },
      {
        id: 'runic-minefield',
        name: 'Runic Minefield',
        description: 'Scatter multiple runes at once for battlefield control.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Right position (triangular pattern)
        requires: ['stone-script'],
        icon: '💣',
        rankDescription: [
          'You can scatter up to three basic runes (Shock or Explosive) in any adjacent squares instantly (no extra AP). This ability can be used once per short rest.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'improved-chain-reaction',
        name: 'Improved Chain Reaction',
        description: 'Enhance your Chain Reaction ability to trigger more runes.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Far left position (triangular pattern)
        requires: ['multi-trigger'],
        icon: '⛓️',
        rankDescription: [
          'Your Chain Reaction ability can trigger up to two adjacent runes per turn.',
          'Your Chain Reaction ability can trigger up to three adjacent runes per turn.',
          'Your Chain Reaction ability can trigger up to four adjacent runes per turn, and each triggered rune deals 2d6 extra damage.'
        ]
      },
      {
        id: 'arc-array',
        name: 'Arc Array',
        description: 'Create a triangle of runes that combine for a powerful effect.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Far right position (triangular pattern)
        requires: ['runic-minefield'],
        icon: '🔺',
        rankDescription: [
          'You can carve a triangle of three Shock or Explosive runes at once (AP 3, Mana 4, 2 GC). If all three detonate in one turn, add an extra 2d6 damage burst at the centroid.',
          'You can carve a triangle of three Shock or Explosive runes at once (AP 3, Mana 4, 2 GC). If all three detonate in one turn, add an extra 3d6 damage burst at the centroid.',
          'You can carve a triangle of three Shock or Explosive runes at once (AP 3, Mana 4, 2 GC). If all three detonate in one turn, add an extra 4d6 damage burst at the centroid and stun all creatures in the area for 1 round (DC = 8 + INT + Proficiency).'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'detonation-master',
        name: 'Detonation Master',
        description: 'The ultimate mastery of explosive runes and battlefield control.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center position (triangular pattern)
        requires: ['improved-chain-reaction', 'arc-array'],
        icon: '👑',
        rankDescription: [
          'Your detonation radius increases by 5 feet for all runes, and you add your Intelligence modifier to all rune damage. Additionally, once per long rest, you can use Glyph Nova (AP 3, Mana 6, spend all GC): All your placed runes within 60 ft detonate simultaneously—regardless of trigger—then you regain half the GC spent. Each rune\'s damage/heal is maximized (treat dice as max value).'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'rune-mastery',
        name: 'Rune Mastery',
        description: 'Achieve mastery over rune creation and placement.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Left position (triangular pattern)
        requires: ['detonation-master'],
        icon: '📜',
        rankDescription: [
          'Your runes cost 1 less GC to create (minimum 0) and you can place two runes as a single action. Additionally, your runes last twice as long before fading and their save DC increases by 2.'
        ]
      },
      {
        id: 'explosive-mastery',
        name: 'Explosive Mastery',
        description: 'Master the art of explosive runes, creating devastating chain reactions.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Right position (triangular pattern)
        requires: ['detonation-master'],
        icon: '💥',
        rankDescription: [
          'Your explosive runes deal an additional 2d8 damage and have their radius increased by 10 feet. When a rune triggers a Chain Reaction, the triggered runes deal full damage instead of reduced damage. Additionally, once per short rest, you can cause one of your runes to explode with double damage and radius.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'grand-detonation',
        name: 'Grand Detonation',
        description: 'The pinnacle of explosive rune mastery, capable of reshaping the battlefield.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center position (triangular pattern)
        requires: ['rune-mastery', 'explosive-mastery'],
        icon: '🌋',
        rankDescription: [
          'Once per day, you can perform a Grand Detonation (AP 5, Mana 10, 5 GC). Create a massive runic array covering a 60-foot radius area. At the start of your next turn, the array detonates, dealing 10d10 force damage to all enemies in the area (DC = 10 + INT + Proficiency for half damage). Enemies that fail their save are also stunned for 1d4 rounds. For the next minute, the area becomes charged with runic energy—any runes you place in this area have double radius, damage, and duration.'
        ]
      },
    ],
  },
  {
    id: 'sigil-sentinel',
    name: 'Sigil Sentinel',
    description: 'Master the art of protective wards and defensive runes.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'efficient-lines',
        name: 'Efficient Lines',
        description: 'Reduce the Mana cost of your Ward-sigil.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left vertex of hexagon
        icon: '✒️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Ward-sigil costs 0 Mana to cast once per encounter.',
          'Your Ward-sigil costs 0 Mana to cast twice per encounter.',
          'Your Ward-sigil costs 0 Mana to cast, and its damage reduction increases by 1.',
          'Your Ward-sigil costs 0 Mana to cast, and its damage reduction increases by 1d4.',
          'Your Ward-sigil costs 0 Mana to cast, and its damage reduction increases by 1d6.'
        ]
      },
      {
        id: 'enhanced-protection',
        name: 'Enhanced Protection',
        description: 'Improve the protective capabilities of your Ward-sigil.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Top vertex of hexagon
        icon: '🔰',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Ward-sigil lasts for an additional round.',
          'Your Ward-sigil lasts for an additional round and grants +1 AC.',
          'Your Ward-sigil lasts for an additional 2 rounds and grants +1 AC.',
          'Your Ward-sigil lasts for an additional 2 rounds and grants +2 AC.',
          'Your Ward-sigil lasts for an additional 3 rounds and grants +3 AC.'
        ]
      },
      {
        id: 'reactive-ink',
        name: 'Reactive Ink',
        description: 'Your Ward-sigil enhances spell resistance.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right vertex of hexagon
        icon: '✨',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Allies with your Ward-sigil gain +1 to spell saves.',
          'Allies with your Ward-sigil gain +2 to spell saves.',
          'Allies with your Ward-sigil gain +3 to spell saves.',
          'Allies with your Ward-sigil gain +4 to spell saves.',
          'Allies with your Ward-sigil gain +INT to spell saves.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'protective-field',
        name: 'Protective Field',
        description: 'Create a field of protection around yourself.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left-bottom of hexagon
        requires: ['efficient-lines'],
        icon: '🌐',
        rankDescription: [
          'When you cast Ward-sigil, you can spend an additional GC to extend its effects to all allies within 5 feet of the target.',
          'When you cast Ward-sigil, you can spend an additional GC to extend its effects to all allies within 10 feet of the target.',
          'When you cast Ward-sigil, you can spend an additional GC to extend its effects to all allies within 15 feet of the target.'
        ]
      },
      {
        id: 'mirror-seal',
        name: 'Mirror Seal',
        description: 'When Ward-sigil cancels damage, reflect half to attacker.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Bottom vertex of hexagon
        requires: ['enhanced-protection'],
        icon: '🪞',
        rankDescription: [
          'When your Ward-sigil cancels damage, reflect 25% of the canceled damage back to the attacker as force damage.',
          'When your Ward-sigil cancels damage, reflect 50% of the canceled damage back to the attacker as force damage.',
          'When your Ward-sigil cancels damage, reflect 75% of the canceled damage back to the attacker as force damage.'
        ]
      },
      {
        id: 'sigil-of-healing',
        name: 'Sigil of Healing',
        description: 'Your Ward-sigil now provides healing.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right-bottom of hexagon
        requires: ['reactive-ink'],
        icon: '💚',
        rankDescription: [
          'Your Ward-sigil also heals the target for 1d4 hit points when first applied.',
          'Your Ward-sigil also heals the target for 1d6 hit points when first applied.',
          'Your Ward-sigil also heals the target for 1d8 hit points when first applied and 1d4 hit points at the start of each of their turns while the sigil is active.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'sigil-of-stasis',
        name: 'Sigil of Stasis',
        description: 'Create a rune that stuns enemies who approach.',
        maxRank: 1,
        position: { row: 2, col: 1 }, // Left side of hexagon
        requires: ['protective-field'],
        icon: '⏱️',
        rankDescription: [
          'You can place a Sigil of Stasis on the floor (AP 2, Mana 4, 1 GC). The first enemy to move within 10 feet must make a saving throw (DC = 8 + INT + Proficiency) or be stunned for 1 round. If you spend an additional GC to "Prime" the rune, the stun duration doubles.'
        ]
      },
      {
        id: 'warding-matrix',
        name: 'Warding Matrix',
        description: 'Create a network of interconnected protective sigils.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Right side of hexagon
        requires: ['sigil-of-healing'],
        icon: '🔲',
        rankDescription: [
          'You can link up to three Ward-sigils together. When one sigil is triggered, all linked sigils activate their effects simultaneously. This costs 1 additional GC per link created.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'greater-stasis',
        name: 'Greater Stasis',
        description: 'Enhance your Sigil of Stasis with additional effects.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Left-bottom of inner hexagon
        requires: ['sigil-of-stasis'],
        icon: '⏳',
        rankDescription: [
          'Your Sigil of Stasis affects all enemies within 5 feet of the triggering creature.',
          'Your Sigil of Stasis affects all enemies within 10 feet of the triggering creature and deals 2d6 force damage.',
          'Your Sigil of Stasis affects all enemies within 15 feet of the triggering creature, deals 3d6 force damage, and can be triggered twice before fading.'
        ]
      },
      {
        id: 'advanced-warding',
        name: 'Advanced Warding',
        description: 'Enhance your warding capabilities.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Right-bottom of inner hexagon
        requires: ['warding-matrix'],
        icon: '🔷',
        rankDescription: [
          'Your Ward-sigil now absorbs an additional 1d8 damage and grants resistance to one damage type of your choice for its duration.',
          'Your Ward-sigil now absorbs an additional 2d8 damage and grants resistance to two damage types of your choice for its duration.',
          'Your Ward-sigil now absorbs an additional 3d8 damage and grants resistance to three damage types of your choice for its duration.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'bastion-array',
        name: 'Bastion Array',
        description: 'Create a powerful protective dome that shields allies from harm.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center of hexagon
        requires: ['greater-stasis', 'advanced-warding'],
        icon: '👑',
        rankDescription: [
          'Once per rest, you can inscribe a 15-foot hex-pattern dome (AP 4, Mana 4, 2 GC) that blocks all ranged attacks and spells from outside for 1 round. Allies inside heal for your Intelligence modifier at the start of their turns. The dome lasts for 3 rounds or until you dismiss it.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'sigil-mastery',
        name: 'Sigil Mastery',
        description: 'Achieve mastery over sigil creation and application.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Left side of outer hexagon
        requires: ['bastion-array'],
        icon: '📝',
        rankDescription: [
          'Your Ward-sigils cost 1 less AP to cast (minimum 1) and their duration is doubled. Additionally, you can maintain one additional Ward-sigil beyond your normal limit, and all your sigils gain +2 to their save DCs.'
        ]
      },
      {
        id: 'ward-mastery',
        name: 'Ward Mastery',
        description: 'Master the art of protective wards, creating impenetrable barriers.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Right side of outer hexagon
        requires: ['bastion-array'],
        icon: '🛡️',
        rankDescription: [
          'Your Ward-sigil now absorbs an additional 4d8 damage and grants immunity to one damage type of your choice for its duration. Additionally, when your Ward-sigil prevents damage, you gain 1d6 temporary hit points and the attacker takes force damage equal to your Intelligence modifier.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'ultimate-ward',
        name: 'Ultimate Ward',
        description: 'The pinnacle of warding magic, capable of protecting an entire party from harm.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Bottom of hexagon
        requires: ['sigil-mastery', 'ward-mastery'],
        icon: '🌟',
        rankDescription: [
          'Once per day, you can create an Ultimate Ward (AP 5, Mana 8, 3 GC). This creates a 30-foot radius dome of protective energy that lasts for 1d6+1 rounds. All allies within the dome gain immunity to critical hits, advantage on all saving throws, and damage reduction equal to your Intelligence modifier + 1d12. Additionally, at the start of each of your turns, all allies within the dome regain hit points equal to your Intelligence modifier, and any harmful conditions affecting them have their duration reduced by 1 round.'
        ]
      },
    ],
  },
  {
    id: 'runeblade',
    name: 'Runeblade',
    description: 'Master the art of weapon glyphs and mobile offense.',
    icon: '⚔️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'swift-imbue',
        name: 'Swift Imbue',
        description: 'Reduce the AP cost of your Seal of Binding.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position (sword hilt)
        icon: '⚡',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Seal of Binding costs 1 AP to cast once per encounter.',
          'Your Seal of Binding costs 1 AP to cast twice per encounter.',
          'Your Seal of Binding costs 1 AP to cast three times per encounter.',
          'Your Seal of Binding costs 1 AP to cast and requires 1 less Mana (minimum 1).',
          'Your Seal of Binding costs 1 AP to cast, requires 1 less Mana (minimum 1), and its save DC increases by 2.'
        ]
      },
      {
        id: 'enhanced-binding',
        name: 'Enhanced Binding',
        description: 'Improve the restraining capabilities of your Seal of Binding.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position (sword guard)
        icon: '🔒',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Seal of Binding restrains the target for an additional round.',
          'Your Seal of Binding restrains the target for an additional round and deals 1d4 force damage when triggered.',
          'Your Seal of Binding restrains the target for an additional round and deals 1d6 force damage when triggered.',
          'Your Seal of Binding restrains the target for an additional 2 rounds and deals 1d8 force damage when triggered.',
          'Your Seal of Binding restrains the target for an additional 2 rounds, deals 2d6 force damage when triggered, and reduces the target\'s AC by 2 while restrained.'
        ]
      },
      {
        id: 'arcane-edge',
        name: 'Arcane Edge',
        description: 'Weapons with any rune gain bonus damage.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position (sword blade)
        icon: '🗡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Weapons with any rune gain +1 to damage rolls.',
          'Weapons with any rune gain +2 to damage rolls.',
          'Weapons with any rune gain +3 to damage rolls.',
          'Weapons with any rune gain +4 to damage rolls.',
          'Weapons with any rune gain +INT to damage rolls.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'runic-mobility',
        name: 'Runic Mobility',
        description: 'Enhance your Runic Step ability.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left position (sword blade)
        requires: ['swift-imbue'],
        icon: '👣',
        rankDescription: [
          'Your Runic Step teleport distance increases to 15 feet.',
          'Your Runic Step teleport distance increases to 20 feet and costs 0 Mana once per encounter.',
          'Your Runic Step teleport distance increases to 25 feet, costs 0 Mana once per encounter, and can be used as a reaction to an attack once per encounter.'
        ]
      },
      {
        id: 'weapon-runes',
        name: 'Weapon Runes',
        description: 'Create more powerful weapon runes.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center position (sword blade)
        requires: ['enhanced-binding'],
        icon: '✨',
        rankDescription: [
          'You can imbue a weapon with an elemental rune that adds 1d6 damage of a chosen type (fire, cold, lightning, acid, or thunder) for 3 rounds.',
          'You can imbue a weapon with an elemental rune that adds 1d8 damage of a chosen type for 3 rounds.',
          'You can imbue a weapon with an elemental rune that adds 1d10 damage of a chosen type for 5 rounds.'
        ]
      },
      {
        id: 'glyph-dash',
        name: 'Glyph Dash',
        description: 'Gain combat advantages when using Runic Step.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right position (sword blade)
        requires: ['arcane-edge'],
        icon: '💨',
        rankDescription: [
          'When Runic Step ends adjacent to a foe, your next attack against them has advantage.',
          'When Runic Step ends adjacent to a foe, your next attack against them has advantage and deals an additional 1d6 force damage.',
          'When Runic Step ends adjacent to a foe, your next attack against them has advantage, deals an additional 1d8 force damage, and you gain +2 AC against that foe until the start of your next turn.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'rune-strike',
        name: 'Rune Strike',
        description: 'Enhance your weapon attacks with runic power.',
        maxRank: 1,
        position: { row: 2, col: 1 }, // Left position (sword blade)
        requires: ['runic-mobility'],
        icon: '💥',
        rankDescription: [
          'You can spend 1 GC as part of a weapon attack to add 1d8 force damage. If the attack hits, the target must make a saving throw (DC = 8 + INT + Proficiency) or be pushed 10 feet away from you.'
        ]
      },
      {
        id: 'tattoo-of-power',
        name: 'Tattoo of Power',
        description: 'Inscribe temporary runes on allies to enhance their abilities.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Right position (sword blade)
        requires: ['glyph-dash'],
        icon: '🎨',
        rankDescription: [
          'During downtime or a prep round, you can inscribe runes on up to your Charisma modifier allies (AP 2, Mana 3, 1 GC per ally). The first time each ally casts a spell or hits with an attack, they add your Intelligence modifier to damage/healing and the tattoo fades.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'improved-rune-strike',
        name: 'Improved Rune Strike',
        description: 'Enhance your Rune Strike ability with additional effects.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Left position (sword blade)
        requires: ['rune-strike'],
        icon: '⚔️',
        rankDescription: [
          'Your Rune Strike deals an additional 1d8 force damage and can affect all enemies within 5 feet of the target.',
          'Your Rune Strike deals an additional 2d8 force damage and can affect all enemies within 10 feet of the target.',
          'Your Rune Strike deals an additional 3d8 force damage, can affect all enemies within 15 feet of the target, and knocks them prone on a failed save.'
        ]
      },
      {
        id: 'advanced-tattoos',
        name: 'Advanced Tattoos',
        description: 'Create more powerful and versatile tattoos.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Right position (sword blade)
        requires: ['tattoo-of-power'],
        icon: '🖌️',
        rankDescription: [
          'Your Tattoo of Power can be used twice before fading and adds 1d6 + INT modifier to damage/healing.',
          'Your Tattoo of Power can be used three times before fading and adds 1d8 + INT modifier to damage/healing.',
          'Your Tattoo of Power can be used three times before fading, adds 1d10 + INT modifier to damage/healing, and grants advantage on one saving throw of the ally\'s choice.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'brand-of-ruin',
        name: 'Brand of Ruin',
        description: 'Mark targets with a devastating runic brand that deals ongoing damage.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center position (sword blade)
        requires: ['improved-rune-strike', 'advanced-tattoos'],
        icon: '👑',
        rankDescription: [
          'As a free action, you can spend 1 GC to mark a hit target with Brand of Ruin. At the start of their turn, the target takes force damage equal to your Intelligence modifier (save ends). This effect stacks up to your Intelligence modifier times. Additionally, attacks against branded targets have advantage and deal +1d6 force damage.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'runic-weapon-mastery',
        name: 'Runic Weapon Mastery',
        description: 'Achieve mastery over weapon runes and runic attacks.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Left position (sword tip)
        requires: ['brand-of-ruin'],
        icon: '🔱',
        rankDescription: [
          'Your weapon runes last twice as long and deal an additional 1d8 damage of the chosen type. Additionally, when you hit with a weapon attack, you can spend 1 GC to apply one of the following effects: 1) Target is stunned until the end of your next turn (DC = 8 + INT + Proficiency), 2) Target takes an additional 3d8 force damage, or 3) Target is marked with Brand of Ruin at no additional GC cost.'
        ]
      },
      {
        id: 'combat-rune-mastery',
        name: 'Combat Rune Mastery',
        description: 'Master the art of combat runes, enhancing your mobility and battlefield control.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Right position (sword tip)
        requires: ['brand-of-ruin'],
        icon: '⚔️',
        rankDescription: [
          'Your Runic Step can be used twice per round and its range increases to 40 feet. Additionally, you can spend 2 GC to create a 15-foot radius Rune of Dominance centered on yourself. Enemies within the area must make a Wisdom save (DC = 8 + INT + Proficiency) or be compelled to attack you on their next turn. Allies within the area gain +2 AC and +2 to attack rolls.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'runic-ascendance',
        name: 'Runic Ascendance',
        description: 'The pinnacle of runic combat mastery, transforming you into a living weapon of arcane might.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center position (sword tip)
        requires: ['runic-weapon-mastery', 'combat-rune-mastery'],
        icon: '🌟',
        rankDescription: [
          'Once per day, you can enter a state of Runic Ascendance for 1d6+1 rounds (AP 4, Mana 8, 3 GC). While in this state, your weapon attacks deal an additional 3d10 force damage, you can teleport up to 20 feet as a free action once per turn, and you gain resistance to all damage types. Additionally, whenever you hit an enemy with a weapon attack, you can apply Brand of Ruin at no GC cost, and all your runes and glyphs have their save DCs increased by 4.'
        ]
      },
    ],
  }
];

export default inscriptorTalentTrees;
