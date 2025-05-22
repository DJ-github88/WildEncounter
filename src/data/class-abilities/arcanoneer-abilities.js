// Base spells and abilities for the Arcanoneer class
const arcanoneerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Element Slots & Volatility',
    description: 'An Arcanoneer engraves elemental runes onto crystal shells, slots them into a rune‑cannon, and fires bespoke spells. They improvise artillery: a steam cone this turn, an earthen mine the next. Their art is half engineer, half battlemage—perfect for groups that enjoy tactical spell‑craft and flashy combos at the table.',
    mechanics: [
      'Element Slots (ES): You may queue up to 5 runes (elements) at a time.',
      'Loading a rune: 1 AP, 0 Mana.',
      'Removing a rune: 1 AP (erase).',
      'A queue is called a Recipe. Order does not matter—effects read counts.',
      'Volatility (V): Each Fire (🔥) or Lightning (⚡) rune adds +1 V when the spell is cast.',
      'V limit = Proficiency + INT mod.',
      'Exceeding the limit → Misfire: caster takes 1d6 force per point over the limit, spell fizzles.',
      'You may Vent (1 AP): reduce V by INT mod (min 1).',
      'V resets to 0 at end of your turn.'
    ],
    passiveBenefits: {
      name: 'Rune Mixing',
      description: 'Arcanoneers can mix different elemental runes to create unique spell effects.',
      effects: [
        'Base Damage Formula: d6 × (# offensive runes) + INT',
        'Healing: same dice but Life (💚) runes only.',
        'Steam (☁️) = F + W exactly once (Swirling scalding cloud).'
      ]
    },
    elementRunes: [
      {
        name: 'Fire 🔥',
        tag: 'F',
        description: 'Adds Burn (1d6/rd). 2+ F = explosion (radius +5 ft per extra F).',
        volatility: true
      },
      {
        name: 'Water 💧',
        tag: 'W',
        description: 'Applies Wet; doubles Lightning dmg; cancels Burn.',
        volatility: false
      },
      {
        name: 'Ice ❄️',
        tag: 'I',
        description: 'Slow 10 ft; W + I = Freeze (Con save or Stunned 1 rd).',
        volatility: false
      },
      {
        name: 'Lightning ⚡',
        tag: 'L',
        description: 'Chains 2 targets per extra L; +1 V each.',
        volatility: true
      },
      {
        name: 'Earth 🪨',
        tag: 'E',
        description: '+1 die; if 2+ E in Mine, knock prone.',
        volatility: false
      },
      {
        name: 'Arcane ✨',
        tag: 'A',
        description: 'Pierces cover; if mixed with ≥3 different runes becomes Prismatic Burst (random extra d6 type).',
        volatility: false
      },
      {
        name: 'Shield 🛡️',
        tag: 'S',
        description: 'Walls gain HP = 5 × runes; Mines become defensive (grant temp HP).',
        volatility: false
      },
      {
        name: 'Life 💚',
        tag: 'H',
        description: 'Healing only; cannot be mixed with 🔥 or E (volatile clash → Misfire).',
        volatility: false
      }
    ],
    spellForms: [
      {
        name: 'Bolt',
        description: 'Single projectile 120 ft (Dex save half).',
        cost: {
          actionPoints: 2,
          mana: 'Equal to # of runes'
        }
      },
      {
        name: 'Beam',
        description: 'Line 60 ft, continuous (1 AP each extra round).',
        cost: {
          actionPoints: 2,
          mana: 'Equal to # of runes'
        }
      },
      {
        name: 'Spray',
        description: '15‑ft cone (Dex save half).',
        cost: {
          actionPoints: 2,
          mana: 'Equal to # of runes'
        }
      },
      {
        name: 'Wall',
        description: '20‑ft barrier (lasts 2 rounds).',
        cost: {
          actionPoints: 2,
          mana: 'Equal to # of runes'
        }
      },
      {
        name: 'Mine',
        description: '5‑ft glyph, detonates on first creature.',
        cost: {
          actionPoints: 2,
          mana: 'Equal to # of runes'
        }
      }
    ],
    commonCombos: [
      {
        recipe: 'F F',
        form: 'Bolt',
        effect: '4d6 + INT fire; 10‑ft blast; Burn.'
      },
      {
        recipe: 'F W (Steam)',
        form: 'Spray',
        effect: '3d6 fire; obscures 2 rd; no V.'
      },
      {
        recipe: 'W L',
        form: 'Beam',
        effect: '3d6 lightning, stun Wet targets; V +1.'
      },
      {
        recipe: 'I I A',
        form: 'Mine',
        effect: '4d6 cold; Freeze 1 rd if fail Con save.'
      },
      {
        recipe: 'E S',
        form: 'Wall',
        effect: 'Stone wall HP 15, difficult terrain.'
      },
      {
        recipe: 'A L H H',
        form: 'Beam',
        effect: 'Heal allies line: 4d6 healing + INT; chain allies.'
      },
      {
        recipe: 'A F L ("Prismatic")',
        form: 'Bolt',
        effect: '5d6 split fire/force/lightning; V +2.'
      }
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Load Rune',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Load an elemental rune into your queue.',
      mechanics: 'Add one rune to your queue. You may have up to 5 runes queued at once. Each Fire or Lightning rune adds +1 Volatility when cast.',
      scaling: 'N/A'
    },
    {
      name: 'Remove Rune',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Remove a rune from your queue.',
      mechanics: 'Remove one rune from your queue.',
      scaling: 'N/A'
    },
    {
      name: 'Cast Bolt',
      cost: {
        actionPoints: 2,
        mana: 'Equal to # of runes'
      },
      description: 'Fire a single projectile using your queued runes.',
      mechanics: 'Launch a bolt at a target within 120 feet. Deals d6 × (# offensive runes) + INT damage of the appropriate type(s). Target can make a Dex save for half damage.',
      effects: [
        { condition: 'Fire Runes', effect: 'Adds Burn (1d6/rd). 2+ Fire = explosion (radius +5 ft per extra Fire).' },
        { condition: 'Water Runes', effect: 'Applies Wet; doubles Lightning dmg; cancels Burn.' },
        { condition: 'Ice Runes', effect: 'Slow 10 ft; Water + Ice = Freeze (Con save or Stunned 1 rd).' },
        { condition: 'Lightning Runes', effect: 'Chains to 2 targets per extra Lightning; +1 V each.' },
        { condition: 'Earth Runes', effect: '+1 die per Earth rune.' },
        { condition: 'Arcane Runes', effect: 'Pierces cover; if mixed with ≥3 different runes becomes Prismatic Burst (random extra d6 type).' },
        { condition: 'Shield Runes', effect: 'Grants temporary HP to caster equal to damage dealt.' },
        { condition: 'Life Runes', effect: 'Healing only; cannot be mixed with Fire or Earth (volatile clash → Misfire).' }
      ],
      scaling: 'Damage = d6 × (# offensive runes) + INT'
    },
    {
      name: 'Cast Beam',
      cost: {
        actionPoints: 2,
        mana: 'Equal to # of runes'
      },
      description: 'Fire a continuous beam using your queued runes.',
      mechanics: 'Create a 60-foot line of energy. Deals d6 × (# offensive runes) + INT damage of the appropriate type(s). Can be sustained for 1 AP each additional round.',
      effects: [
        { condition: 'Fire Runes', effect: 'Adds Burn (1d6/rd). 2+ Fire = wider beam (+5 ft per extra Fire).' },
        { condition: 'Water Runes', effect: 'Applies Wet; doubles Lightning dmg; cancels Burn.' },
        { condition: 'Ice Runes', effect: 'Slow 10 ft; Water + Ice = Freeze (Con save or Stunned 1 rd).' },
        { condition: 'Lightning Runes', effect: 'Chains to 2 targets per extra Lightning; +1 V each.' },
        { condition: 'Earth Runes', effect: '+1 die per Earth rune.' },
        { condition: 'Arcane Runes', effect: 'Pierces cover; if mixed with ≥3 different runes becomes Prismatic Burst (random extra d6 type).' },
        { condition: 'Shield Runes', effect: 'Grants damage reduction to allies in the beam.' },
        { condition: 'Life Runes', effect: 'Healing only; cannot be mixed with Fire or Earth (volatile clash → Misfire).' }
      ],
      scaling: 'Damage = d6 × (# offensive runes) + INT'
    },
    {
      name: 'Cast Spray',
      cost: {
        actionPoints: 2,
        mana: 'Equal to # of runes'
      },
      description: 'Create a cone of energy using your queued runes.',
      mechanics: 'Create a 15-foot cone of energy. Deals d6 × (# offensive runes) + INT damage of the appropriate type(s). Targets can make a Dex save for half damage.',
      effects: [
        { condition: 'Fire Runes', effect: 'Adds Burn (1d6/rd). 2+ Fire = wider cone (+5 ft per extra Fire).' },
        { condition: 'Water Runes', effect: 'Applies Wet; doubles Lightning dmg; cancels Burn.' },
        { condition: 'Ice Runes', effect: 'Slow 10 ft; Water + Ice = Freeze (Con save or Stunned 1 rd).' },
        { condition: 'Lightning Runes', effect: 'Chains to 2 targets per extra Lightning; +1 V each.' },
        { condition: 'Earth Runes', effect: '+1 die per Earth rune.' },
        { condition: 'Arcane Runes', effect: 'Pierces cover; if mixed with ≥3 different runes becomes Prismatic Burst (random extra d6 type).' },
        { condition: 'Shield Runes', effect: 'Pushes targets away 5 ft per Shield rune.' },
        { condition: 'Life Runes', effect: 'Healing only; cannot be mixed with Fire or Earth (volatile clash → Misfire).' }
      ],
      scaling: 'Damage = d6 × (# offensive runes) + INT'
    },
    {
      name: 'Cast Wall',
      cost: {
        actionPoints: 2,
        mana: 'Equal to # of runes'
      },
      description: 'Create a barrier using your queued runes.',
      mechanics: 'Create a 20-foot barrier that lasts for 2 rounds. The wall\'s effects depend on the runes used.',
      effects: [
        { condition: 'Fire Runes', effect: 'Wall of fire deals 1d6 damage per Fire rune to creatures that pass through it.' },
        { condition: 'Water Runes', effect: 'Wall of water extinguishes fires and applies Wet to creatures that pass through it.' },
        { condition: 'Ice Runes', effect: 'Wall of ice has 5 HP per Ice rune and creates difficult terrain.' },
        { condition: 'Lightning Runes', effect: 'Wall of lightning deals 1d6 lightning damage per Lightning rune to creatures that pass through it; +1 V each.' },
        { condition: 'Earth Runes', effect: 'Wall of earth has 10 HP per Earth rune and creates difficult terrain.' },
        { condition: 'Arcane Runes', effect: 'Wall of force has 5 HP per Arcane rune and blocks spells of level less than the number of Arcane runes.' },
        { condition: 'Shield Runes', effect: 'Walls gain HP = 5 × Shield runes; allies passing through gain temporary HP.' },
        { condition: 'Life Runes', effect: 'Wall of life heals allies that pass through it for 1d6 per Life rune; cannot be mixed with Fire or Earth (volatile clash → Misfire).' }
      ],
      scaling: 'Wall HP = 5-10 per rune depending on element'
    },
    {
      name: 'Cast Mine',
      cost: {
        actionPoints: 2,
        mana: 'Equal to # of runes'
      },
      description: 'Place a glyph trap using your queued runes.',
      mechanics: 'Place a 5-foot glyph that detonates when a creature steps on it. Deals d6 × (# offensive runes) + INT damage of the appropriate type(s).',
      effects: [
        { condition: 'Fire Runes', effect: 'Adds Burn (1d6/rd). 2+ Fire = larger explosion (+5 ft radius per extra Fire).' },
        { condition: 'Water Runes', effect: 'Applies Wet; doubles Lightning dmg; cancels Burn.' },
        { condition: 'Ice Runes', effect: 'Slow 10 ft; Water + Ice = Freeze (Con save or Stunned 1 rd).' },
        { condition: 'Lightning Runes', effect: 'Chains to 2 targets per extra Lightning; +1 V each.' },
        { condition: 'Earth Runes', effect: '+1 die; if 2+ Earth in Mine, knock prone.' },
        { condition: 'Arcane Runes', effect: 'Pierces cover; if mixed with ≥3 different runes becomes Prismatic Burst (random extra d6 type).' },
        { condition: 'Shield Runes', effect: 'Mines become defensive (grant temp HP to allies).' },
        { condition: 'Life Runes', effect: 'Healing only; cannot be mixed with Fire or Earth (volatile clash → Misfire).' }
      ],
      scaling: 'Damage = d6 × (# offensive runes) + INT'
    },
    {
      name: 'Quick Vent',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Quickly vent excess Volatility from your rune-cannon.',
      mechanics: 'Reduce Volatility (V) by your Intelligence modifier (minimum 1).',
      scaling: 'Volatility reduction = INT mod (min 1)'
    },
    {
      name: 'Rune Swap',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Swap one rune in your queue for another from your component pouch.',
      mechanics: 'Exchange one rune in queue for another from component pouch.',
      scaling: 'N/A'
    },
    {
      name: 'Stabilize Barrel',
      cost: {
        actionPoints: 0,
        mana: 1
      },
      description: 'Reaction to stabilize your rune-cannon when a Misfire would occur.',
      mechanics: 'When Misfire would occur, cancel damage but spell downgrades to d6 per 2 runes (round up).',
      scaling: 'N/A'
    },
    {
      name: 'Elemental Cartridge',
      cost: {
        actionPoints: 0,
        mana: 0
      },
      description: 'During downtime, craft pre-inscribed shells for quick use in combat.',
      mechanics: 'Craft 3 pre-inscribed shells. Use as 1-AP load in combat once each, no Mana cost.',
      scaling: 'N/A'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    elementalOrdnance: [
      {
        name: 'Bigger Boom',
        description: 'Increase damage when using multiple Fire or Earth runes.',
        mechanics: '+1 die when recipe contains 2+ Fire or 2+ Earth.',
        requirements: 'Requires points in the Elemental Ordnance talent tree.'
      },
      {
        name: 'Thunder Mastery',
        description: 'Improve the effectiveness of Lightning runes.',
        mechanics: 'Lightning runes add +2 to save DC; ignore Wet chain penalty.',
        requirements: 'Requires points in the Elemental Ordnance talent tree.'
      },
      {
        name: 'Pyroclast',
        description: 'Enhance the burning effect of Fire runes.',
        mechanics: 'When Fire causes Burn, add INT to each tick.',
        requirements: 'Requires points in the Elemental Ordnance talent tree. (Capstone)'
      }
    ],
    runicArchitect: [
      {
        name: 'Persistent Glyphs',
        description: 'Make your Mine spells last longer.',
        mechanics: 'Mines last until triggered (no 1-hour decay).',
        requirements: 'Requires points in the Runic Architect talent tree.'
      },
      {
        name: 'Bulwark Wall',
        description: 'Enhance the defensive capabilities of your Wall spells.',
        mechanics: 'Shield walls HP × 2; allies inside gain +2 AC.',
        requirements: 'Requires points in the Runic Architect talent tree.'
      },
      {
        name: 'Cascading Runes',
        description: 'Create chain reactions with your Mine spells.',
        mechanics: 'When a Mine detonates, adjacent Mine also triggers (once).',
        requirements: 'Requires points in the Runic Architect talent tree. (Capstone)'
      }
    ],
    fluxTactician: [
      {
        name: 'Over-Channel',
        description: 'Push your rune-cannon beyond its normal limits.',
        mechanics: 'You may exceed V limit by 2 before Misfire; extra points add +1 die each.',
        requirements: 'Requires points in the Flux Tactician talent tree.'
      },
      {
        name: 'Fast Vent',
        description: 'Vent Volatility more efficiently.',
        mechanics: 'Vent is free once/round.',
        requirements: 'Requires points in the Flux Tactician talent tree.'
      },
      {
        name: 'Flux Nova',
        description: 'Convert excess Volatility into a powerful attack.',
        mechanics: 'Vent while at max V → all enemies 15 ft take V d6 force; you gain temp HP = damage dealt ÷ 2.',
        requirements: 'Requires points in the Flux Tactician talent tree. (Capstone)'
      }
    ]
  },

  // Example Round-by-Round
  roundByRound: [
    {
      round: 1,
      actions: 'Load Fire (1 AP), Fire (1 AP), Arcane (1 AP) → Cast Fire Bolt (2 AP).',
      results: '18 dmg, V=2, queue clear.'
    },
    {
      round: 2,
      actions: 'Vent (1 AP, V→0). Move 10 ft (2 AP). Load Water + Lightning (2 AP).',
      results: 'End of turn queue = Water Lightning (no overheat yet).'
    },
    {
      round: 3,
      actions: 'Cast Spray Water Lightning (2 AP, Mana 2).',
      results: '3d6 lightning to cone; stunned Wet; V = +1. Load Ice Ice (2 AP). Remaining 1 AP move.'
    },
    {
      round: 4,
      actions: 'Cast Mine Ice Ice (2 AP, Mana 2) at choke, V unchanged. Vent free (Fast Vent talent).',
      results: 'Battle flows onward.'
    }
  ],

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Intelligence',
      effect: '+damage/heal per spell, save DC = 8 + Prof + INT.'
    },
    {
      attribute: 'Dexterity',
      effect: 'Attack rolls for Bolt; initiative (sets combos earlier).'
    },
    {
      attribute: 'Constitution',
      effect: 'Survive Misfires and close-range casting.'
    }
  ]
};

export default arcanoneerAbilities;
