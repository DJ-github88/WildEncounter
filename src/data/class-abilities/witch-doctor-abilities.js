// Base spells and abilities for the Witch Doctor class
const witchDoctorAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Voodoo Essence',
    description: 'The Witch Doctor\'s signature mechanic is Voodoo Essence (VE) & Invocation Slots. VE is gathered through casting curses, applying poisons, placing totems, or defeating cursed enemies. When enough VE is accumulated, the Witch Doctor can unlock Invocation Slots to call upon powerful loa spirits for spectacular effects.',
    mechanics: [
      'Voodoo Essence (VE): Gained by casting curses (+1), applying poisons/grenades (+1), placing totems (+1), or defeating cursed enemies (+3).',
      'Maximum VE: 5 + Spirit modifier.',
      'At 5 VE, you unlock 1 Invocation Slot (up to 2 slots at once).',
      'Spend a slot + specific VE cost to call a loa for 3 rounds. After the effect ends, the slot empties and VE resets to 0.',
      'Only one Invocation can be active at a time. Re-invoking ends the prior effect.'
    ],
    veGains: [
      {
        action: 'Cast a Curse spell',
        veGained: '+1'
      },
      {
        action: 'Apply a Poison/Grenade',
        veGained: '+1'
      },
      {
        action: 'Place a Totem',
        veGained: '+1'
      },
      {
        action: 'Defeat an enemy that is Cursed',
        veGained: '+3'
      }
    ],
    passiveBenefits: {
      name: 'Loa Connection',
      description: 'The Witch Doctor maintains a connection to the spirit world, granting passive benefits.',
      effects: [
        'Ability to see invisible spirits and undead entities.',
        'Natural resistance to poison and disease (advantage on saving throws).',
        'Can understand but not speak the language of spirits and the dead.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Hex',
      cost: {
        actionPoints: 2,
        mana: 2,
        voodooEssence: '+1'
      },
      description: 'Place a minor curse on a target, weakening their attacks.',
      mechanics: 'Target saves WIS DC = 8+Prof+WIS or suffers –2 to attack rolls for 2 rounds.',
      effects: [
        {
          condition: 'Target fails save',
          effect: '-2 to attack rolls for 2 rounds'
        },
        {
          condition: 'Target succeeds save',
          effect: 'No effect'
        }
      ],
      scaling: 'Save DC scales with WIS modifier and proficiency bonus.'
    },
    {
      name: 'Venom Dart',
      cost: {
        actionPoints: 2,
        mana: 1,
        voodooEssence: '+1'
      },
      description: 'Fire a poisoned dart at a target, dealing initial damage and lingering poison if they are cursed.',
      mechanics: '60 ft range; 1d8 + INT poison damage, then 1d4 poison damage next turn if still Cursed.',
      effects: [
        {
          condition: 'Hit',
          effect: '1d8 + INT poison damage'
        },
        {
          condition: 'Target is Cursed',
          effect: 'Additional 1d4 poison damage on their next turn'
        }
      ],
      scaling: 'Damage scales with INT modifier.'
    },
    {
      name: 'Totem: Mending Fog',
      cost: {
        actionPoints: 2,
        mana: 2,
        voodooEssence: '+1'
      },
      description: 'Place a healing totem that emits a restorative mist to nearby allies.',
      mechanics: 'Place totem within 30 ft; heals allies in 10 ft radius for 1d6 + WIS each round for 2 rounds.',
      effects: [
        {
          condition: 'Allies in range',
          effect: '1d6 + WIS healing per round for 2 rounds'
        }
      ],
      scaling: 'Healing scales with WIS modifier.'
    },
    {
      name: 'Totem: Withering Idol',
      cost: {
        actionPoints: 2,
        mana: 2,
        voodooEssence: '+1'
      },
      description: 'Place a cursed totem that damages and slows nearby enemies.',
      mechanics: 'Enemies in 10 ft radius take 1d6 necrotic damage & have their speed reduced by 5 ft for 2 rounds.',
      effects: [
        {
          condition: 'Enemies in range',
          effect: '1d6 necrotic damage and -5 ft speed for 2 rounds'
        }
      ],
      scaling: 'Damage scales with INT or WIS modifier (whichever is higher).'
    },
    {
      name: 'Curse Transfer',
      cost: {
        actionPoints: 1,
        mana: 1,
        voodooEssence: '0'
      },
      description: 'Move an active curse from one target to another.',
      mechanics: 'Move one active Curse from target A to B (30 ft range).',
      effects: [
        {
          condition: 'Successful transfer',
          effect: 'Curse moves with full remaining duration to new target'
        }
      ],
      scaling: 'Range increases with WIS modifier (+5 ft per point).'
    },
    {
      name: 'Ritual Knife',
      cost: {
        actionPoints: 3,
        mana: 0,
        voodooEssence: '+1'
      },
      description: 'A melee attack with your ritual dagger, dealing extra damage to cursed targets.',
      mechanics: 'Melee attack; 1d6 + DEX slashing damage; if target is Cursed, add 1d6 necrotic and refresh curse duration.',
      effects: [
        {
          condition: 'Hit',
          effect: '1d6 + DEX slashing damage'
        },
        {
          condition: 'Target is Cursed',
          effect: 'Additional 1d6 necrotic damage and curse duration is refreshed'
        }
      ],
      scaling: 'Base damage scales with DEX modifier; bonus damage increases to 1d8/1d10/1d12 at higher levels.'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Plague Mark',
      cost: {
        actionPoints: 2,
        mana: 3,
        voodooEssence: '+1'
      },
      description: 'Place a contagious curse that can spread to nearby enemies.',
      mechanics: 'If target fails Con save, at end of its turn the curse jumps to nearest enemy within 15 ft (max 3 jumps).',
      effects: [
        {
          condition: 'Target fails save',
          effect: 'Curse applies and can spread to up to 3 additional enemies'
        },
        {
          condition: 'Target succeeds save',
          effect: 'No effect'
        }
      ],
      requirements: 'Requires level 15',
      scaling: 'Save DC scales with WIS modifier and proficiency bonus.'
    },
    {
      name: 'Bone Cage Totem',
      cost: {
        actionPoints: 2,
        mana: 4,
        voodooEssence: '+1'
      },
      description: 'Place a totem that creates a cage of bones to trap enemies trying to escape.',
      mechanics: '15-ft radius; first time each enemy tries to leave, Dex save or restrained for 1 round.',
      effects: [
        {
          condition: 'Enemy tries to leave area',
          effect: 'Dex save or be restrained for 1 round'
        }
      ],
      requirements: 'Requires level 20',
      scaling: 'Save DC scales with WIS modifier and proficiency bonus.'
    },
    {
      name: 'Toxic Torrent',
      cost: {
        actionPoints: 3,
        mana: 4,
        voodooEssence: '+1'
      },
      description: 'Release a stream of toxic energy in a line, dealing extra damage to poisoned targets.',
      mechanics: '30-ft line, 4d6 + INT poison damage; enemies suffering Poisoned condition take double damage.',
      effects: [
        {
          condition: 'Hit',
          effect: '4d6 + INT poison damage'
        },
        {
          condition: 'Target is Poisoned',
          effect: 'Damage is doubled'
        }
      ],
      requirements: 'Requires level 25',
      scaling: 'Damage scales with INT modifier.'
    },
    {
      name: 'Soul Siphon',
      cost: {
        actionPoints: 1,
        mana: 3,
        voodooEssence: 'spend 3'
      },
      description: 'Drain life force from a cursed target to heal yourself.',
      mechanics: 'Drain 2d6 HP from Cursed target, heal self same amount; if this kills target, gain 1 Invocation Slot immediately.',
      effects: [
        {
          condition: 'Target is Cursed',
          effect: 'Drain 2d6 HP and heal self for the same amount'
        },
        {
          condition: 'Target dies from this ability',
          effect: 'Gain 1 Invocation Slot immediately'
        }
      ],
      requirements: 'Requires level 30',
      scaling: 'Damage/healing increases to 2d8/2d10/2d12 at higher levels.'
    },
    {
      name: 'Vodou Apocalypse',
      cost: {
        actionPoints: 4,
        mana: 6,
        voodooEssence: 'spend all VE & 1 Slot'
      },
      description: 'Ultimate ability that unleashes storms of ancestral spirits to damage enemies and heal allies.',
      mechanics: '30 ft radius, enemies Con save; fail → take (VE_spent)d6 necrotic & frightened 2 rounds; allies heal same total split.',
      effects: [
        {
          condition: 'Enemies fail save',
          effect: '(VE spent)d6 necrotic damage and frightened for 2 rounds'
        },
        {
          condition: 'Allies in range',
          effect: 'Total healing equal to damage dealt, split among all allies'
        }
      ],
      requirements: 'Requires level 40',
      scaling: 'Damage scales with amount of VE spent.'
    }
  ],

  // Invocations (Loa)
  invocations: [
    {
      name: 'Baron Samedi',
      cost: {
        voodooEssence: 10,
        slot: 1
      },
      duration: '3 rounds',
      description: 'Call upon Baron Samedi, the loa of death and resurrection.',
      effects: 'Raise 1 fallen ally to full HP; all enemies within 30 ft take 4d6 necrotic damage over 3 rounds.'
    },
    {
      name: 'Erzulie',
      cost: {
        voodooEssence: 8,
        slot: 1
      },
      duration: '3 rounds',
      description: 'Call upon Erzulie, the loa of love and protection.',
      effects: 'Allies within 30 ft gain +2 AC, immunity to fear, and heal 3d8 total over duration.'
    },
    {
      name: 'Papa Legba',
      cost: {
        voodooEssence: 7,
        slot: 1
      },
      duration: '3 rounds',
      description: 'Call upon Papa Legba, the loa of crossroads and communication.',
      effects: 'Party gains telepathy; once per turn Witch Doctor may teleport up to 5 allies up to 60 ft.'
    },
    {
      name: 'Ogoun',
      cost: {
        voodooEssence: 9,
        slot: 1
      },
      duration: '3 rounds',
      description: 'Call upon Ogoun, the loa of war and fire.',
      effects: 'Allies within 30 ft gain +2 to attack rolls & resistance to physical damage; melee attacks add 2d6 fire damage.'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    curseBinder: [
      {
        name: 'Persistent Hex',
        description: 'Your basic Hex lasts longer.',
        mechanics: 'Basic Hex lasts 3 rounds instead of 2.',
        requirements: 'Requires points in the Curse-Binder talent tree.'
      },
      {
        name: 'Shared Agony',
        description: 'Damage you take is partially reflected to cursed enemies.',
        mechanics: '50% of damage you take is mirrored onto one Cursed foe.',
        requirements: 'Requires points in the Curse-Binder talent tree.'
      },
      {
        name: 'Dread Omen',
        description: 'The death of a cursed enemy weakens nearby foes.',
        mechanics: 'When a Cursed enemy dies, nearest enemy automatically fails first save vs. your spells next round.',
        requirements: 'Requires points in the Curse-Binder talent tree. (Capstone)'
      }
    ],
    totemicArchitect: [
      {
        name: 'Extended Effigy',
        description: 'Your totems last longer and have increased range.',
        mechanics: 'Totems last +1 round; range +10 ft.',
        requirements: 'Requires points in the Totemic Architect talent tree.'
      },
      {
        name: 'Dual Totem',
        description: 'You can maintain multiple totems at once.',
        mechanics: 'Maintain 2 totems simultaneously.',
        requirements: 'Requires points in the Totemic Architect talent tree.'
      },
      {
        name: 'Spirit Grove',
        description: 'When multiple totems are active, they create a powerful synergy effect.',
        mechanics: 'When both totems pulse in the same round, allies inside gain +INT temporary HP & advantage on saves for 1 round.',
        requirements: 'Requires points in the Totemic Architect talent tree. (Capstone)'
      }
    ],
    loaChosen: [
      {
        name: 'Efficient Rite',
        description: 'Your invocations cost less Voodoo Essence.',
        mechanics: 'Invocation VE cost reduced by 2.',
        requirements: 'Requires points in the Loa Chosen talent tree.'
      },
      {
        name: 'Spirit Channeler',
        description: 'While channeling a loa, you regenerate mana.',
        mechanics: 'While an Invocation is active, you regenerate 1 Mana per turn.',
        requirements: 'Requires points in the Loa Chosen talent tree.'
      },
      {
        name: 'Avatar of the Loa',
        description: 'The first round of an invocation grants you powerful bonuses.',
        mechanics: 'First round of each Invocation grants you resistance to all damage and +INT to spell DCs.',
        requirements: 'Requires points in the Loa Chosen talent tree. (Capstone)'
      }
    ]
  }
};

export default witchDoctorAbilities;
