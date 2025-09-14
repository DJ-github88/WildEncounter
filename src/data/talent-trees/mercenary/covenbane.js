// Talent trees for the Covenbane class
const covenbaneTalentTrees = [
  {
    id: 'hexslayer',
    name: 'Hexslayer',
    description: 'Focus on aggressive anti-caster tactics.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'relentless-pursuit',
        name: 'Relentless Pursuit',
        description: '+10 ft speed toward marked casters.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🏃',
        rankDescription: [
          '+2 ft movement speed when moving toward a caster marked by your Mark Hex ability.',
          '+4 ft movement speed when moving toward a caster marked by your Mark Hex ability.',
          '+6 ft movement speed when moving toward a caster marked by your Mark Hex ability.',
          '+8 ft movement speed when moving toward a caster marked by your Mark Hex ability.',
          '+10 ft movement speed when moving toward a caster marked by your Mark Hex ability.'
        ]
      },
      {
        id: 'piercing-sigil',
        name: 'Piercing Sigil',
        description: 'Seal Bash now deals +1d8 radiant if target is concentrating.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '✨',
        rankDescription: [
          'Seal Bash deals +1d4 radiant damage if the target is concentrating on a spell.',
          'Seal Bash deals +1d6 radiant damage if the target is concentrating on a spell.',
          'Seal Bash deals +1d8 radiant damage if the target is concentrating on a spell.',
          'Seal Bash deals +1d10 radiant damage if the target is concentrating on a spell.',
          'Seal Bash deals +1d8 radiant damage if the target is concentrating on a spell and on a roll of 5-6 on 1d6, breaks concentration automatically.'
        ]
      },
      {
        id: 'hex-tracker',
        name: 'Hex Tracker',
        description: 'Your Mark Hex ability is more effective.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔍',
        rankDescription: [
          'Your Mark Hex ability lasts 1 additional turn.',
          'Your Mark Hex ability imposes -3 on spell attack rolls instead of -2.',
          'Your Mark Hex ability lasts 2 additional turns.',
          'Your Mark Hex ability imposes -4 on spell attack rolls instead of -2.',
          'Your Mark Hex ability lasts 3 additional turns and imposes -4 on spell attack rolls.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'spell-breaker',
        name: 'Spell Breaker',
        description: 'Your attacks against spellcasters are more effective.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['relentless-pursuit', 'piercing-sigil'],
        icon: '⚔️',
        rankDescription: [
          'Your weapon attacks against spellcasters deal +1d4 damage.',
          'Your weapon attacks against spellcasters deal +1d6 damage and on a roll of 10 on 1d10, disrupt concentration.',
          'Your weapon attacks against spellcasters deal +1d8 damage and on a roll of 9-10 on 1d10, disrupt concentration.'
        ]
      },
      {
        id: 'unerring-mark',
        name: 'Unerring Mark',
        description: 'Mark Hex becomes a bonus action; your first attack each turn versus a marked target gains advantage.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['piercing-sigil', 'hex-tracker'],
        icon: '🎯',
        rankDescription: [
          'Your first attack each turn against a target marked by your Mark Hex ability has advantage.',
          'You can use Mark Hex as a bonus action once per combat.',
          'You can use Mark Hex as a bonus action, and your first attack each turn against a marked target has advantage.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'anti-magic-strike',
        name: 'Anti-Magic Strike',
        description: 'Your attacks disrupt magical effects.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['spell-breaker'],
        icon: 'sword',
        rankDescription: [
          'When you hit a spellcaster with a weapon attack, you can spend 1 Seal Token to dispel one magical effect of your choice on the target.'
        ]
      },
      {
        id: 'hexslayer-focus',
        name: 'Hexslayer Focus',
        description: 'Your abilities against marked targets are more effective.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['spell-breaker', 'unerring-mark'],
        icon: 'focus',
        rankDescription: [
          'Your abilities deal +1d4 damage per die against targets marked by your Mark Hex ability.'
        ]
      },
      {
        id: 'spell-hunter',
        name: 'Spell Hunter',
        description: 'You can track spellcasters more effectively.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['unerring-mark'],
        icon: '👁️',
        rankDescription: [
          'You can sense the presence of spellcasters within 60 ft, even if they are hidden or invisible.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'arcane-disruption',
        name: 'Arcane Disruption',
        description: 'Your presence disrupts spellcasting.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['anti-magic-strike', 'hexslayer-focus'],
        icon: '💥',
        rankDescription: [
          'Spellcasters within 10 ft of you have disadvantage on concentration checks.'
        ]
      },
      {
        id: 'arcane-decapitation',
        name: 'Arcane Decapitation',
        description: 'When a marked caster fails a save vs you, deal bonus 3d6 force.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['hexslayer-focus', 'spell-hunter'],
        icon: '⚡',
        rankDescription: [
          'When a spellcaster marked by your Mark Hex ability fails a saving throw against one of your abilities, they take an additional 3d6 force damage.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'ultimate-hexslayer',
        name: 'Ultimate Hexslayer',
        description: 'You become the ultimate hunter of spellcasters.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['arcane-disruption', 'arcane-decapitation'],
        icon: '👑',
        rankDescription: [
          'Once per long rest, you can enter a state of heightened anti-magic for 1 minute. During this time, your attacks against spellcasters deal double damage, you automatically succeed on saving throws against spells, and when you counter a spell, the caster takes 4d8 force damage.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'spell-annihilation',
        name: 'Spell Annihilation',
        description: 'Your attacks against spellcasters become even more devastating.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['ultimate-hexslayer'],
        icon: '💥',
        rankDescription: [
          'Your weapon attacks against spellcasters ignore all resistances and immunities, and deal an additional 2d10 force damage. Additionally, when you score a critical hit against a spellcaster, they lose access to their highest-level spell slot for 1d4 rounds.'
        ]
      },
      {
        id: 'arcane-nemesis',
        name: 'Arcane Nemesis',
        description: 'Your presence strikes fear into the hearts of spellcasters.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['ultimate-hexslayer'],
        icon: '😱',
        rankDescription: [
          'Spellcasters within 30 feet of you have disadvantage on concentration checks and spell attack rolls. Additionally, when a spellcaster within 30 feet of you casts a spell, you can use your reaction (1 AP) to make an attack against them with advantage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-nullification',
        name: 'Avatar of Nullification',
        description: 'Transform into a living embodiment of anti-magic.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['spell-annihilation', 'arcane-nemesis'],
        icon: '🔮',
        rankDescription: [
          'Once per day, transform into an Avatar of Nullification for 1d6+2 rounds. During this time, you emit an anti-magic field in a 20-foot radius that prevents all spellcasting within it (except your own abilities). Your attacks against spellcasters deal triple damage and automatically break concentration, and you gain immunity to all spells. Additionally, when you counter a spell, you can redirect it to another target of your choice within 60 feet.'
        ]
      },
    ],
  },
  {
    id: 'runic-warden',
    name: 'Runic Warden',
    description: 'Focus on zones and party defense.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'extra-ward-slot',
        name: 'Extra Ward Slot',
        description: 'You can maintain 3 wards.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔷',
        rankDescription: [
          'Roll 1d10 when placing a ward. On a 10, you do not consume a Ward Slot.',
          'Roll 1d10 when placing a ward. On a 9-10, you do not consume a Ward Slot.',
          'Roll 1d10 when placing a ward. On a 7-10, you do not consume a Ward Slot.',
          'Roll 1d10 when placing a ward. On a 5-10, you do not consume a Ward Slot.',
          'You gain an additional Ward Slot, allowing you to maintain 3 wards simultaneously.'
        ]
      },
      {
        id: 'lingering-aegis',
        name: 'Lingering Aegis',
        description: 'Aegis Ward lasts 2 extra turns.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⏱️',
        rankDescription: [
          'Your Aegis Ward ability lasts for 1 additional turn (4 turns total).',
          'Your Aegis Ward ability provides +3 to saving throws against magic instead of +2.',
          'Your Aegis Ward ability lasts for 2 additional turns (5 turns total).',
          'Your Aegis Ward ability provides +4 to saving throws against magic instead of +2.',
          'Your Aegis Ward ability lasts for 2 additional turns (5 turns total) and provides +4 to saving throws against magic.'
        ]
      },
      {
        id: 'ward-master',
        name: 'Ward Master',
        description: 'Your wards are more effective.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔯',
        rankDescription: [
          'Your wards have a 5 ft larger radius.',
          'Your wards are more difficult to dispel (advantage on saves against dispel magic).',
          'Your wards have a 10 ft larger radius.',
          'Your wards cannot be dispelled by spells of 3rd level or lower.',
          'Your wards have a 10 ft larger radius and cannot be dispelled by spells of 3rd level or lower.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'protective-wards',
        name: 'Protective Wards',
        description: 'Your wards provide additional protection.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['extra-ward-slot', 'lingering-aegis'],
        icon: '🛡️',
        rankDescription: [
          'Allies inside your wards gain 1d4 temporary hit points at the start of their turn.',
          'Allies inside your wards gain 1d6 temporary hit points at the start of their turn.',
          'Allies inside your wards gain 1d8 temporary hit points at the start of their turn and have resistance to damage from spells.'
        ]
      },
      {
        id: 'warding-conduit',
        name: 'Warding Conduit',
        description: 'Allies inside your ward gain +1 Seal Token when they resist a spell.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['lingering-aegis', 'ward-master'],
        icon: '⚡',
        rankDescription: [
          'When an ally inside one of your wards successfully saves against a spell, you gain +1 Seal Token.',
          'When an ally inside one of your wards successfully saves against a spell, you gain +1 Seal Token and the ally gains 1d6 temporary hit points.',
          'When an ally inside one of your wards successfully saves against a spell, you gain +1 Seal Token and the ally takes no damage from the spell (even on a partial save).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'reflective-wards',
        name: 'Reflective Wards',
        description: 'Your wards can reflect spells.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['protective-wards'],
        icon: '↩️',
        rankDescription: [
          'When a spell targets an ally inside one of your wards and the ally succeeds on their saving throw, the spell is reflected back at the caster with half effect.'
        ]
      },
      {
        id: 'ward-synergy',
        name: 'Ward Synergy',
        description: 'Your wards become more powerful when placed near each other.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['protective-wards', 'warding-conduit'],
        icon: '🔄',
        rankDescription: [
          'When you place a ward within 30 ft of another of your wards, both wards gain a +2 bonus to their effects (save bonuses, damage, etc.).'
        ]
      },
      {
        id: 'mobile-wards',
        name: 'Mobile Wards',
        description: 'Your wards can be moved.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['warding-conduit'],
        icon: '🔄',
        rankDescription: [
          'As a bonus action, you can move one of your wards up to 30 ft.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'ward-mastery',
        name: 'Ward Mastery',
        description: 'Your mastery of wards enhances all your ward abilities.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['reflective-wards', 'ward-synergy'],
        icon: '🔱',
        rankDescription: [
          'Your wards last until dispelled or until you choose to dismiss them, rather than having a limited duration.'
        ]
      },
      {
        id: 'sanctum-impervious',
        name: 'Sanctum Impervious',
        description: 'Allies in any of your wards are immune to magic missile, charm, and fear.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['ward-synergy', 'mobile-wards'],
        icon: '🏰',
        rankDescription: [
          'Allies inside any of your wards are immune to magic missile spells, charm effects, and fear effects.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'ultimate-warden',
        name: 'Ultimate Warden',
        description: 'You become the ultimate master of protective wards.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['ward-mastery', 'sanctum-impervious'],
        icon: '👑',
        rankDescription: [
          'Once per long rest, you can create an ultimate ward that lasts for 1 minute. This ward has a 30 ft radius, provides immunity to all spells of 5th level or lower to allies inside, and reflects all spells that target allies inside back at the caster with full effect.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'runic-mastery',
        name: 'Runic Mastery',
        description: 'Your mastery of runes enhances all your ward abilities.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['ultimate-warden'],
        icon: '📜',
        rankDescription: [
          'You can maintain up to 5 wards simultaneously. Additionally, your wards deal 2d10 force damage to any enemy spellcaster who enters their area or starts their turn inside them.'
        ]
      },
      {
        id: 'warding-perfection',
        name: 'Warding Perfection',
        description: 'Your wards reach the pinnacle of protective power.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['ultimate-warden'],
        icon: '✨',
        rankDescription: [
          'Allies inside your wards gain advantage on all saving throws, immunity to critical hits, and regenerate 1d8 hit points at the start of their turn. Additionally, when an ally inside one of your wards is targeted by a spell, you can use your reaction (1 AP) to grant them immunity to that spell.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-protection',
        name: 'Avatar of Protection',
        description: 'Transform into a living embodiment of perfect protection.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['runic-mastery', 'warding-perfection'],
        icon: '🛡️',
        rankDescription: [
          'Once per day, transform into an Avatar of Protection for 1d6+2 rounds. During this time, you emit an aura of protection in a 30-foot radius that functions as all your ward types simultaneously. You and all allies within this aura gain immunity to all spells, and any enemy spellcaster who enters the aura or starts their turn inside it takes 4d10 force damage and must make a Wisdom saving throw or be stunned for 1 round. Additionally, you can teleport instantly to any ally within 60 feet as a bonus action (1 AP), bringing your protective aura with you.'
        ]
      },
    ],
  },
  {
    id: 'inquisitor',
    name: 'Inquisitor',
    description: 'Focus on suppression and manipulation.',
    icon: '🔍',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'interrogators-eye',
        name: 'Interrogator\'s Eye',
        description: 'See active spell effects on a creature (bonus action).',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👁️',
        rankDescription: [
          'As an action, you can see all active spell effects on a creature you can see.',
          'As an action, you can see all active spell effects on a creature you can see and identify their school of magic.',
          'As a bonus action, you can see all active spell effects on a creature you can see.',
          'As a bonus action, you can see all active spell effects on a creature you can see and identify their school of magic.',
          'As a bonus action, you can see all active spell effects on a creature you can see, identify their school of magic, and determine their spell level.'
        ]
      },
      {
        id: 'painful-dispel',
        name: 'Painful Dispel',
        description: 'Counter Sigil also deals 1d6 + WIS psychic to the caster.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💥',
        rankDescription: [
          'When you successfully counter a spell with Counter Sigil, the caster takes 1d4 psychic damage.',
          'When you successfully counter a spell with Counter Sigil, the caster takes 1d4 + WIS psychic damage.',
          'When you successfully counter a spell with Counter Sigil, the caster takes 1d6 psychic damage.',
          'When you successfully counter a spell with Counter Sigil, the caster takes 1d6 + WIS psychic damage.',
          'When you successfully counter a spell with Counter Sigil, the caster takes 1d6 + WIS psychic damage and has disadvantage on their next spell attack roll.'
        ]
      },
      {
        id: 'dispel-expert',
        name: 'Dispel Expert',
        description: 'Your ability to dispel magic is enhanced.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'You gain a +1 bonus to Counter Sigil checks.',
          'You gain a +2 bonus to Counter Sigil checks.',
          'You gain a +3 bonus to Counter Sigil checks.',
          'You gain a +4 bonus to Counter Sigil checks.',
          'You gain a +5 bonus to Counter Sigil checks and can counter spells of 6th level or lower automatically.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'spell-leech',
        name: 'Spell Leech',
        description: 'You gain power from countered spells.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['interrogators-eye', 'painful-dispel'],
        icon: '🧪',
        rankDescription: [
          'When you successfully counter a spell with Counter Sigil, you gain 1d4 temporary hit points.',
          'When you successfully counter a spell with Counter Sigil, you gain 1d6 temporary hit points and +2 to your Dispel Gauge instead of +1.',
          'When you successfully counter a spell with Counter Sigil, you gain 1d8 temporary hit points, +2 to your Dispel Gauge, and regain 1 Seal Token.'
        ]
      },
      {
        id: 'brand-of-confession',
        name: 'Brand of Confession',
        description: 'When you Hexbreak Shot a target, they have disadvantage on next save vs your abilities.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['painful-dispel', 'dispel-expert'],
        icon: '🔥',
        rankDescription: [
          'When you hit a target with Hexbreak Shot, they have disadvantage on their next saving throw against your abilities.',
          'When you hit a target with Hexbreak Shot, they have disadvantage on their next two saving throws against your abilities.',
          'When you hit a target with Hexbreak Shot, they have disadvantage on all saving throws against your abilities for 1 round.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'spell-theft',
        name: 'Spell Theft',
        description: 'You can steal the effects of spells you counter.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['spell-leech'],
        icon: '🔮',
        rankDescription: [
          'When you successfully counter a beneficial spell with Counter Sigil, you can choose to gain its effects for yourself for half the normal duration.'
        ]
      },
      {
        id: 'inquisitorial-presence',
        name: 'Inquisitorial Presence',
        description: 'Your presence makes it harder for enemies to cast spells.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['spell-leech', 'brand-of-confession'],
        icon: '👁️',
        rankDescription: [
          'Spellcasters within 30 ft of you must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your WIS modifier) when they attempt to cast a spell. On a failure, they must use an additional spell slot or the spell fails.'
        ]
      },
      {
        id: 'enhanced-backlash',
        name: 'Enhanced Backlash',
        description: 'Your Arcane Backlash ability is more powerful.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['brand-of-confession'],
        icon: '💥',
        rankDescription: [
          'Your Arcane Backlash ability deals 1d8 × Dispel Gauge force damage instead of 1d6 × Dispel Gauge, and the range increases to 15 ft.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'spell-absorption',
        name: 'Spell Absorption',
        description: 'You can absorb the energy of spells cast near you.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['spell-theft', 'inquisitorial-presence'],
        icon: '🔄',
        rankDescription: [
          'When a spell is cast within 30 ft of you, you can use your reaction to absorb some of its energy. You gain 1 to your Dispel Gauge and 1d6 temporary hit points per level of the spell.'
        ]
      },
      {
        id: 'writ-of-abjuration',
        name: 'Writ of Abjuration',
        description: 'Once per long rest invoke a scroll: for 1 minute you auto‑Counter any spell ≤ 5th within 30 ft (costs no tokens).',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['inquisitorial-presence', 'enhanced-backlash'],
        icon: '📜',
        rankDescription: [
          'Once per long rest, you can invoke a scroll of abjuration. For 1 minute, you automatically counter any spell of 5th level or lower cast within 30 ft of you without spending any Seal Tokens.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'ultimate-inquisitor',
        name: 'Ultimate Inquisitor',
        description: 'You become the ultimate inquisitor against magic.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['spell-absorption', 'writ-of-abjuration'],
        icon: '👑',
        rankDescription: [
          'Once per long rest, you can enter a state of supreme inquisition for 1 minute. During this time, you automatically counter any spell cast within 60 ft of you, gain 5 to your Dispel Gauge whenever you counter a spell, and can use Arcane Backlash as a bonus action without resetting your Dispel Gauge.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'arcane-dominance',
        name: 'Arcane Dominance',
        description: 'Your control over magic reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['ultimate-inquisitor'],
        icon: '🔮',
        rankDescription: [
          'When you counter a spell, you can choose to take control of it instead, redirecting it to a target of your choice. Additionally, your Dispel Gauge maximum increases to 15, and you gain 1 to your Dispel Gauge at the start of each of your turns.'
        ]
      },
      {
        id: 'magical-suppression',
        name: 'Magical Suppression',
        description: 'Your presence suppresses all magic around you.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['ultimate-inquisitor'],
        icon: '🔇',
        rankDescription: [
          'Enemy spellcasters within 30 feet of you have the level of their spells reduced by 2 (minimum 1). Additionally, as an action (3 AP), you can create a 15-foot radius zone of suppression for 1d4 rounds. Within this zone, all spells cost twice as much mana to cast, and spellcasters must make a Wisdom saving throw or have their spell fail when they attempt to cast.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-inquisition',
        name: 'Avatar of Inquisition',
        description: 'Transform into a living embodiment of magical inquisition.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['arcane-dominance', 'magical-suppression'],
        icon: '🔍',
        rankDescription: [
          'Once per day, transform into an Avatar of Inquisition for 1d6+2 rounds. During this time, you can see all magical auras and effects within 60 feet, you automatically counter any spell cast within 60 feet without spending from your Dispel Gauge, and your Arcane Backlash ability affects all enemy spellcasters within 30 feet simultaneously. Additionally, when you counter a spell, the caster takes 4d10 force damage and must make a Wisdom saving throw or be unable to cast spells for 1d4 rounds.'
        ]
      },
    ],
  }
];

export default covenbaneTalentTrees;
