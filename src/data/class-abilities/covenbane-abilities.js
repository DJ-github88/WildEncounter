// Base abilities for the Covenbane class
const covenbaneAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Seal Tokens, Dispel Gauge & Ward Slots',
    description: 'The Covenbane is a hardened witch‑hunter who lives to counter spell‑casters, shatter curses, and nullify arcane tricks. Where a Toxicologist uses chemicals, a Covenbane relies on runic seals, hexbreaking strikes, and warding powders. In any fight featuring enemy magic, the Covenbane becomes the party\'s point‑man: tagging casters with sigils, draining their power, or reflecting spells back at them.',
    mechanics: [
      'Seal Tokens (max = WIS + 2): Store anti‑magic power. Gain by marking a caster (1 token), succeeding on Counter check (1), or finishing a short rest (reset to 2). Spend to fuel most class abilities.',
      'Dispel Gauge (0‑10): Tracks drained magic. Gain +1 when you absorb a spell of level ≥ 1. At 5/10 you can unleash Arcane Backlash (big burst).',
      'Ward Slots (2): Maintain persistent runes (zones, glyphs). Slots refresh on long rest. Each Ward active uses 1 slot.'
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Mark Hex',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Tag a visible caster within 60 ft. Deals no damage but grants +1 Seal Token. Marked target has –2 on spell attack rolls versus you for 2 turns.',
      mechanics: 'Target a visible spellcaster within 60 ft. You mark them with a hex sigil, gaining 1 Seal Token. The marked target has -2 on spell attack rolls against you for 2 turns.',
      effects: [
        { condition: 'Target', effect: 'Visible spellcaster within 60 ft' },
        { condition: 'Seal Token', effect: 'Gain +1 Seal Token' },
        { condition: 'Mark Effect', effect: 'Target has -2 on spell attack rolls against you for 2 turns' },
        { condition: 'Hexslayer Talents', effect: 'May enhance mark effects' }
      ],
      scaling: 'Duration = 2 turns'
    },
    {
      name: 'Seal Bash',
      cost: {
        actionPoints: 1,
        mana: 1,
        sealTokens: 1
      },
      description: 'Melee. Deal 1d8 + STR damage; target must CON‑save or gains Silence (can\'t cast verbal spells) for 1 turn.',
      mechanics: 'Make a melee attack against a target. On hit, deal 1d8 + STR damage and the target must make a Constitution save. On failure, they are silenced (cannot cast spells with verbal components) for 1 turn.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d8 + STR damage' },
        { condition: 'Failed Save', effect: 'Target is silenced (cannot cast spells with verbal components) for 1 turn' },
        { condition: 'Hexslayer Talents', effect: 'May enhance bash effects' }
      ],
      scaling: 'Damage = 1d8 + STR modifier, Save DC = 8 + Proficiency + WIS modifier'
    },
    {
      name: 'Aegis Ward',
      cost: {
        actionPoints: 1,
        mana: 1,
        wardSlots: 1
      },
      description: 'Place a 10‑ft rune. Allies inside get +2 saves vs magic. Lasts 3 turns or until slot reclaimed.',
      mechanics: 'Place a 10-ft radius runic ward. Allies inside the ward gain +2 to saving throws against magic. The ward lasts for 3 turns or until you reclaim the ward slot.',
      effects: [
        { condition: 'Area', effect: '10-ft radius' },
        { condition: 'Allies Inside', effect: '+2 to saving throws against magic' },
        { condition: 'Duration', effect: '3 turns or until ward slot is reclaimed' },
        { condition: 'Runic Warden Talents', effect: 'May enhance ward effects' }
      ],
      scaling: 'Save bonus = +2, Duration = 3 turns'
    },
    {
      name: 'Counter Sigil',
      cost: {
        actionPoints: 0,
        mana: 1,
        sealTokens: 1,
        reaction: true
      },
      description: 'Attempt to counter a spell you can see (roll WIS + d20 vs 10 + spell level). Success: spell fizzles, you gain +1 Dispel Gauge.',
      mechanics: 'As a reaction, attempt to counter a spell you can see being cast. Roll WIS + d20 vs 10 + spell level. On success, the spell fizzles and you gain +1 Dispel Gauge.',
      effects: [
        { condition: 'Counter Check', effect: 'Roll WIS + d20 vs 10 + spell level' },
        { condition: 'Success', effect: 'Spell fizzles and you gain +1 Dispel Gauge' },
        { condition: 'Inquisitor Talents', effect: 'May enhance counter effects' }
      ],
      scaling: 'Counter check = WIS modifier + d20 vs 10 + spell level'
    },
    {
      name: 'Hexbreak Shot',
      cost: {
        actionPoints: 1,
        mana: 2,
        sealTokens: 1
      },
      description: '30‑ft dart. 1d6 + DEX damage and strips one active magical buff from the target.',
      mechanics: 'Fire a dart at a target within 30 ft. On hit, deal 1d6 + DEX damage and remove one active magical buff from the target.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d6 + DEX damage' },
        { condition: 'Dispel', effect: 'Remove one active magical buff from the target' },
        { condition: 'Inquisitor Talents', effect: 'May enhance hexbreak effects' }
      ],
      scaling: 'Damage = 1d6 + DEX modifier'
    },
    {
      name: 'Purifying Salts',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Remove one curse or magical debuff from ally; you gain +1 Seal Token.',
      mechanics: 'Apply purifying salts to an ally, removing one curse or magical debuff. You gain +1 Seal Token.',
      effects: [
        { condition: 'Purify', effect: 'Remove one curse or magical debuff from an ally' },
        { condition: 'Seal Token', effect: 'Gain +1 Seal Token' },
        { condition: 'Runic Warden Talents', effect: 'May enhance purification effects' }
      ],
      scaling: 'No direct scaling'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Sigil Breaker',
      cost: {
        actionPoints: 2,
        mana: 2,
        sealTokens: 1
      },
      description: '15‑ft cone. All enemies: 2d8 + WIS radiant and lose any active concentration. Gain +1 Dispel Gauge per target affected.',
      mechanics: 'Create a 15-ft cone of sigil-breaking energy. All enemies in the area take 2d8 + WIS radiant damage and lose any active concentration. You gain +1 Dispel Gauge for each target affected.',
      effects: [
        { condition: 'Area', effect: '15-ft cone' },
        { condition: 'Damage', effect: '2d8 + WIS radiant damage to all enemies in the area' },
        { condition: 'Concentration', effect: 'All affected enemies lose active concentration' },
        { condition: 'Dispel Gauge', effect: 'Gain +1 Dispel Gauge per target affected' },
        { condition: 'Hexslayer Talents', effect: 'May enhance sigil breaker effects' }
      ],
      scaling: 'Damage = 2d8 + WIS modifier'
    },
    {
      name: 'Reflective Guard',
      cost: {
        actionPoints: 0,
        mana: 2,
        sealTokens: 2,
        reaction: true
      },
      description: 'When a spell hits you, halve its damage and bounce the remaining half back to the original caster. Add 2 to Dispel Gauge.',
      mechanics: 'As a reaction when a spell hits you, halve the damage you take and reflect the remaining half back to the original caster. Add 2 to your Dispel Gauge.',
      effects: [
        { condition: 'Damage Reduction', effect: 'Halve the damage you take from the spell' },
        { condition: 'Reflection', effect: 'Bounce the remaining half of the damage back to the original caster' },
        { condition: 'Dispel Gauge', effect: 'Add 2 to your Dispel Gauge' },
        { condition: 'Runic Warden Talents', effect: 'May enhance reflection effects' }
      ],
      scaling: 'Reflected damage = Half of original damage'
    },
    {
      name: 'Null Zone Ward',
      cost: {
        actionPoints: 2,
        mana: 3,
        wardSlots: 2
      },
      description: '15‑ft radius antimagic field that suppresses spells ≤ 3rd level while inside (caster may still leave and cast). Lasts 2 turns.',
      mechanics: 'Create a 15-ft radius antimagic field that suppresses spells of 3rd level or lower while inside. Spellcasters can still leave the field and cast spells. The field lasts for 2 turns.',
      effects: [
        { condition: 'Area', effect: '15-ft radius' },
        { condition: 'Suppression', effect: 'Suppresses spells of 3rd level or lower while inside' },
        { condition: 'Duration', effect: '2 turns' },
        { condition: 'Runic Warden Talents', effect: 'May enhance null zone effects' }
      ],
      scaling: 'Suppression = Spells of 3rd level or lower, Duration = 2 turns'
    },
    {
      name: 'Witch Hammer',
      cost: {
        actionPoints: 2,
        mana: 2,
        sealTokens: 2
      },
      description: 'Melee strike. Deal 3d8 + STR force; if target is concentrating, they auto‑fail the check and take extra 2d6.',
      mechanics: 'Make a melee attack against a target. On hit, deal 3d8 + STR force damage. If the target is concentrating on a spell, they automatically fail the concentration check and take an extra 2d6 damage.',
      effects: [
        { condition: 'Hit', effect: 'Deal 3d8 + STR force damage' },
        { condition: 'Concentration', effect: 'If target is concentrating, they automatically fail the check and take an extra 2d6 damage' },
        { condition: 'Hexslayer Talents', effect: 'May enhance witch hammer effects' }
      ],
      scaling: 'Base damage = 3d8 + STR modifier, Extra damage = 2d6'
    },
    {
      name: 'Arcane Backlash',
      cost: {
        actionPoints: 2,
        mana: 0,
        dispelGauge: 5
      },
      description: 'Release stored energy: 10‑ft burst, 1d6 × Dispel Gauge force damage (up to 10d6) and push creatures 10 ft. Gauge resets to 0.',
      mechanics: 'Release stored energy in your Dispel Gauge in a 10-ft burst. Deal 1d6 × Dispel Gauge force damage (up to 10d6) and push creatures 10 ft away. Your Dispel Gauge resets to 0.',
      effects: [
        { condition: 'Area', effect: '10-ft burst' },
        { condition: 'Damage', effect: '1d6 × Dispel Gauge force damage (up to 10d6)' },
        { condition: 'Push', effect: 'Push creatures 10 ft away' },
        { condition: 'Reset', effect: 'Dispel Gauge resets to 0' },
        { condition: 'Inquisitor Talents', effect: 'May enhance backlash effects' }
      ],
      scaling: 'Damage = 1d6 × Dispel Gauge (up to 10d6)'
    },
    {
      name: 'Sanctified Execution',
      cost: {
        actionPoints: 3,
        mana: 4,
        sealTokens: 3
      },
      description: 'Mark one caster within 30 ft. For 2 turns every time they attempt a spell they take 2d6 radiant and you auto‑succeed Counter Sigil (no reaction cost).',
      mechanics: 'Mark one spellcaster within 30 ft. For 2 turns, every time they attempt to cast a spell, they take 2d6 radiant damage and you automatically succeed on Counter Sigil without spending a reaction.',
      effects: [
        { condition: 'Target', effect: 'One spellcaster within 30 ft' },
        { condition: 'Duration', effect: '2 turns' },
        { condition: 'Spell Attempt', effect: 'Target takes 2d6 radiant damage when attempting to cast a spell' },
        { condition: 'Auto-Counter', effect: 'You automatically succeed on Counter Sigil without spending a reaction' },
        { condition: 'Hexslayer Talents', effect: 'May enhance execution effects' }
      ],
      scaling: 'Damage = 2d6 radiant, Duration = 2 turns'
    },
    {
      name: 'Absolute Null Ward',
      cost: {
        actionPoints: 3,
        mana: 6,
        wardSlots: 'all'
      },
      description: 'Erect a 20‑ft antimagic dome (all spells suppressed, magic items inert) lasting 2 turns. You alone can ignore suppression inside.',
      mechanics: 'Create a 20-ft antimagic dome where all spells are suppressed and magic items are inert. The dome lasts for 2 turns. You alone can ignore the suppression effects inside the dome.',
      effects: [
        { condition: 'Area', effect: '20-ft dome' },
        { condition: 'Suppression', effect: 'All spells are suppressed and magic items are inert' },
        { condition: 'Duration', effect: '2 turns' },
        { condition: 'Immunity', effect: 'You alone can ignore the suppression effects inside' },
        { condition: 'Runic Warden Talents', effect: 'May enhance null ward effects' }
      ],
      scaling: 'Duration = 2 turns'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    hexslayer: [
      {
        name: 'Relentless Pursuit',
        description: '+10 ft speed toward marked casters.',
        mechanics: 'You gain +10 ft movement speed when moving toward a caster marked by your Mark Hex ability.',
        requirements: 'Requires points in the Hexslayer talent tree.'
      },
      {
        name: 'Piercing Sigil',
        description: 'Seal Bash now deals +1d8 radiant if target is concentrating.',
        mechanics: 'Your Seal Bash ability deals an additional 1d8 radiant damage if the target is concentrating on a spell.',
        requirements: 'Requires points in the Hexslayer talent tree.'
      },
      {
        name: 'Unerring Mark',
        description: 'Mark Hex becomes a bonus action; your first attack each turn versus a marked target gains advantage.',
        mechanics: 'Your Mark Hex ability can be used as a bonus action instead of an action. Additionally, your first attack each turn against a marked target has advantage.',
        requirements: 'Requires points in the Hexslayer talent tree.'
      },
      {
        name: 'Arcane Decapitation',
        description: 'When a marked caster fails a save vs you, deal bonus 3d6 force.',
        mechanics: 'When a spellcaster marked by your Mark Hex ability fails a saving throw against one of your abilities, they take an additional 3d6 force damage.',
        requirements: 'Requires points in the Hexslayer talent tree. (Capstone)'
      }
    ],
    runicWarden: [
      {
        name: 'Extra Ward Slot',
        description: 'You can maintain 3 wards.',
        mechanics: 'You gain an additional Ward Slot, allowing you to maintain 3 wards simultaneously.',
        requirements: 'Requires points in the Runic Warden talent tree.'
      },
      {
        name: 'Lingering Aegis',
        description: 'Aegis Ward lasts 2 extra turns.',
        mechanics: 'Your Aegis Ward ability lasts for 2 additional turns (5 turns total).',
        requirements: 'Requires points in the Runic Warden talent tree.'
      },
      {
        name: 'Warding Conduit',
        description: 'Allies inside your ward gain +1 Seal Token when they resist a spell.',
        mechanics: 'When an ally inside one of your wards successfully resists a spell (by saving throw or other means), you gain +1 Seal Token.',
        requirements: 'Requires points in the Runic Warden talent tree.'
      },
      {
        name: 'Sanctum Impervious',
        description: 'Allies in any of your wards are immune to magic missile, charm, and fear.',
        mechanics: 'Allies inside any of your wards are immune to magic missile spells, charm effects, and fear effects.',
        requirements: 'Requires points in the Runic Warden talent tree. (Capstone)'
      }
    ],
    inquisitor: [
      {
        name: 'Interrogator\'s Eye',
        description: 'See active spell effects on a creature (bonus action).',
        mechanics: 'As a bonus action, you can see all active spell effects on a creature you can see.',
        requirements: 'Requires points in the Inquisitor talent tree.'
      },
      {
        name: 'Painful Dispel',
        description: 'Counter Sigil also deals 1d6 + WIS psychic to the caster.',
        mechanics: 'When you successfully counter a spell with Counter Sigil, the caster takes 1d6 + WIS psychic damage.',
        requirements: 'Requires points in the Inquisitor talent tree.'
      },
      {
        name: 'Brand of Confession',
        description: 'When you Hexbreak Shot a target, they have disadvantage on next save vs your abilities.',
        mechanics: 'When you hit a target with Hexbreak Shot, they have disadvantage on their next saving throw against your abilities.',
        requirements: 'Requires points in the Inquisitor talent tree.'
      },
      {
        name: 'Writ of Abjuration',
        description: 'Once per long rest invoke a scroll: for 1 minute you auto‑Counter any spell ≤ 5th within 30 ft (costs no tokens).',
        mechanics: 'Once per long rest, you can invoke a scroll of abjuration. For 1 minute, you automatically counter any spell of 5th level or lower cast within 30 ft of you without spending any Seal Tokens.',
        requirements: 'Requires points in the Inquisitor talent tree. (Capstone)'
      }
    ]
  }
};

export default covenbaneAbilities;
