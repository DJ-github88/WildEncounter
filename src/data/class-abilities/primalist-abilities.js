// Base spells and abilities for the Primalist class
const primalistAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Primal Resonance',
    description: 'A Primalist is a ritualist who taps the living pulse of the world. Where the Formbender reshapes bodies, the Primalist bends raw elemental forces—earth-blood, storm-breath, verdant growth. In lore they are druids turned war-shamans: they mark skin with chalk sigils, burn herbs for omens, and summon floods, thorns, or quakes in battle.',
    mechanics: [
      'Generate Primal Resonance (PR): Each elemental cantrip / basic attack +1 PR, completing a 1-AP "Quick Rite" +2 PR, ending your turn inside one of your own totem auras +1 PR.',
      'Maximum PR: 6 PR (may be raised by talents).',
      'Spend PR: Elemental Bursts cost 2-6 PR. Totems soak PR each round to stay active.',
      'Quick Rite (1 AP, 0 Mana): A swift hand-sigil that gains +2 PR and, until your next turn, resists the next 2 elemental damage you take.'
    ],
    totemRitual: {
      name: 'Totem Ritual',
      cost: {
        actionPoints: 2,
        mana: 1
      },
      description: 'Plant a totem in a 10-ft space you can see. Only one totem active at a time. It persists 3 rounds (or longer if fed PR). Standing in its aura usually grants +1 PR per round.'
    }
  },

  // Starter Totems
  starterTotems: [
    {
      name: 'Stone-Root',
      passiveAura: 'Allies in 10 ft gain +1 AC.',
      channelAction: {
        name: 'Earthen Grasp',
        cost: {
          actionPoints: 1,
          mana: 0
        },
        effect: 'Restrain one enemy (STR save).'
      },
      feedPR: 'Keeps restraint without you concentrating. Costs 1 PR/round.'
    },
    {
      name: 'Storm-Eye',
      passiveAura: 'Attacks in aura deal +1 lightning.',
      channelAction: {
        name: 'Chain Spark',
        cost: {
          actionPoints: 1,
          mana: 0
        },
        effect: '1d6 lightning jumps to 2 enemies.'
      },
      feedPR: 'Each extra PR adds +1d6. Costs 1 PR/round.'
    },
    {
      name: 'Life-Bloom',
      passiveAura: 'Allies in aura heal 2 HP/round.',
      channelAction: {
        name: 'Verdant Surge',
        cost: {
          actionPoints: 1,
          mana: 0
        },
        effect: 'Target ally heals 1d8.'
      },
      feedPR: 'Heal ticks persist after you move. Costs 1 PR/round.'
    }
  ],

  // Base Abilities
  baseAbilities: [
    {
      name: 'Crackling Pebble',
      cost: {
        actionPoints: 1,
        mana: 0,
        primalResonance: 0
      },
      description: 'A simple attack that hurls a stone charged with elemental energy.',
      mechanics: '1d6 earth OR lightning damage; +1 PR on hit.',
      scaling: 'Damage = 1d6 + INT'
    },
    {
      name: 'Thorn Whip',
      cost: {
        actionPoints: 1,
        mana: 0,
        primalResonance: 0
      },
      description: 'A whip made of thorny vines that pulls enemies closer.',
      mechanics: '1d4 piercing damage and pull target 5 ft; +1 PR.',
      scaling: 'Damage = 1d4 + INT'
    },
    {
      name: 'Earthen Buckler',
      cost: {
        actionPoints: 0,
        mana: 0,
        primalResonance: 1
      },
      trigger: 'Reaction',
      description: 'Quickly form a shield of earth to reduce incoming damage.',
      mechanics: 'Reduce incoming damage by 1d6 + CON.',
      scaling: 'Damage reduction = 1d6 + CON'
    },
    {
      name: 'Rootbind',
      cost: {
        actionPoints: 1,
        mana: 1,
        primalResonance: 1
      },
      description: 'Create a zone of grasping roots that impede movement.',
      mechanics: '10-ft zone becomes difficult terrain; enemies entering must save or be immobilized for 1 round.',
      scaling: 'Save DC = 8 + Proficiency + WIS'
    },
    {
      name: 'Stone Lance',
      cost: {
        actionPoints: 2,
        mana: 1,
        primalResonance: 2
      },
      description: 'Fire a spear of stone that can stun enemies.',
      mechanics: '30-ft line, 2d6 piercing damage; on critical hit, stun target for 1 round.',
      scaling: 'Damage = 2d6 + INT'
    },
    {
      name: 'Rejuvenating Rain',
      cost: {
        actionPoints: 2,
        mana: 2,
        primalResonance: 2
      },
      description: 'Summon healing rain that restores health to allies.',
      mechanics: 'All allies in 15 ft heal 2d6 HP.',
      scaling: 'Healing = 2d6 + WIS'
    }
  ],

  // Advanced Bursts & Ultimates
  advancedBursts: [
    {
      name: 'Seismic Wave',
      cost: {
        actionPoints: 2,
        mana: 2,
        primalResonance: 4
      },
      description: 'Create a powerful wave of seismic energy that knocks enemies prone.',
      mechanics: '20-ft cone, 3d8 bludgeoning damage + knock prone; creates difficult terrain.',
      scaling: 'Damage = 3d8 + INT'
    },
    {
      name: 'Tempest Ascension',
      cost: {
        actionPoints: 3,
        mana: 3,
        primalResonance: 5
      },
      description: 'Surround yourself with a storm and gain the ability to fly.',
      mechanics: 'Gain flight 30 ft & aura: 1d6 lightning damage to foes each round (3 rounds).',
      scaling: 'Damage = 1d6 + INT per round'
    },
    {
      name: 'Bloom of Renewal',
      cost: {
        actionPoints: 3,
        mana: 4,
        primalResonance: 6
      },
      description: 'Create a massive burst of healing energy that removes harmful conditions.',
      mechanics: 'Allies in 30 ft heal 4d6 + WIS HP and remove 1 harmful condition.',
      scaling: 'Healing = 4d6 + WIS'
    },
    {
      name: 'Primal Cataclysm',
      cost: {
        actionPoints: 4,
        mana: 5,
        primalResonance: 6
      },
      description: 'Unleash a devastating elemental cataclysm based on your chosen element.',
      mechanics: 'Choose element: Quake / Storm / Thorn-Maelstrom. 40-ft radius, 6d8 damage (type) + unique rider (stun, blind, restrain). PR drops to 0.',
      scaling: 'Damage = 6d8 + INT',
      ultimate: true
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    totemicSage: [
      {
        name: 'Second Pillar',
        description: 'Maintain multiple totems simultaneously.',
        mechanics: 'Maintain 2 totems at once.',
        requirements: 'Requires points in the Totemic Sage talent tree.'
      },
      {
        name: 'Dancing Runes',
        description: 'Your totems persist when you place new ones.',
        mechanics: 'Dropping a new totem no longer ends the previous.',
        requirements: 'Requires points in the Totemic Sage talent tree.'
      },
      {
        name: 'Bolstered Auras',
        description: 'Your totem auras become more powerful.',
        mechanics: 'Aura radius +5 ft and bonuses +1.',
        requirements: 'Requires points in the Totemic Sage talent tree.'
      },
      {
        name: 'Living Effigy',
        description: 'Animate your totems to move and act independently.',
        mechanics: 'Spend 3 PR to animate a totem (it moves 20 ft/round and repeats its Channel Action).',
        requirements: 'Requires points in the Totemic Sage talent tree. (Capstone)'
      }
    ],
    elementalFury: [
      {
        name: 'Charge Storm',
        description: 'Your elemental bursts deal additional damage.',
        mechanics: 'Elemental Bursts add +INT to damage again.',
        requirements: 'Requires points in the Elemental Fury talent tree.'
      },
      {
        name: 'Overload',
        description: 'Your powerful spells sometimes cast twice.',
        mechanics: 'When you spend ≥4 PR in one cast, roll 1d4; on 4, cast the spell a second time at half damage.',
        requirements: 'Requires points in the Elemental Fury talent tree.'
      },
      {
        name: 'Volatile Core',
        description: 'Your attacks are more likely to critically hit when you have high PR.',
        mechanics: 'Crit range expands by 1 per 2 PR held (max +2).',
        requirements: 'Requires points in the Elemental Fury talent tree.'
      },
      {
        name: 'Avatar of Raw Power',
        description: 'Your elemental damage becomes explosively powerful.',
        mechanics: 'Once per encounter, while at full 6 PR, all elemental damage dice explode (max value lets you roll an extra die).',
        requirements: 'Requires points in the Elemental Fury talent tree. (Capstone)'
      }
    ],
    verdantWard: [
      {
        name: 'Nurturing Spirit',
        description: 'Your Life-Bloom totem heals for more.',
        mechanics: 'Life-Bloom totem heals +WIS.',
        requirements: 'Requires points in the Verdant Ward talent tree.'
      },
      {
        name: 'Shared Resonance',
        description: 'Your defensive abilities also protect nearby allies.',
        mechanics: 'Whenever you Earthen Buckler yourself, nearest ally gains half the prevention as temporary HP.',
        requirements: 'Requires points in the Verdant Ward talent tree.'
      },
      {
        name: 'Regenerative Roots',
        description: 'Heal when you remain stationary.',
        mechanics: 'At turn-start, if you did not move last round, heal 1 PR HP.',
        requirements: 'Requires points in the Verdant Ward talent tree.'
      },
      {
        name: 'Gaia\'s Grace',
        description: 'Unleash a powerful healing burst when near death.',
        mechanics: 'When you drop to 0 HP you can spend all PR to pop to 1 HP and cast Bloom of Renewal for free.',
        requirements: 'Requires points in the Verdant Ward talent tree. (Capstone)'
      }
    ]
  },

  // Attribute Scaling
  attributeScaling: [
    {
      attribute: 'Intelligence',
      effect: 'Elemental spell damage, Mana pool.'
    },
    {
      attribute: 'Wisdom',
      effect: 'Healing amount, totem save DCs, number of memorised totems (+ WIS).'
    },
    {
      attribute: 'Constitution',
      effect: 'HP and Earthen Buckler reduction.'
    },
    {
      attribute: 'Dexterity',
      effect: 'Attack rolls for whip/pebble if reflavoured as finesse.'
    }
  ],

  // Turn Flow
  turnFlow: {
    steps: [
      {
        step: 'Plant a Totem',
        description: 'Stone-Root to open (2 AP).'
      },
      {
        step: 'Cantrip Attack',
        description: 'To build PR.'
      },
      {
        step: 'Channel',
        description: 'The totem while stacking to 3-4 PR.'
      },
      {
        step: 'Spend PR',
        description: 'On Seismic Wave or Tempest.'
      },
      {
        step: 'Re-position Totem / Shift Tactics',
        description: 'As battlefield evolves.'
      }
    ],
    summary: 'A Primalist thrives on area control and tempo: set zones, harvest PR, and unleash tailored bursts—healing if allies falter, elemental ruin when foes cluster.'
  }
};

export default primalistAbilities;
