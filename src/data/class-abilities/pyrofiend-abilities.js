// Base spells and abilities for the Pyrofiend class
const pyrofiendAbilities = {
  // Class Resource System - Demonic Ascension
  resourceSystem: {
    name: 'Demonic Ascension',
    description: 'The Demonic Ascension system represents the Pyrofiend\'s progressive transformation into a being of pure infernal power. Each ascension stage grants unique passive abilities and unlocks restricted spells, but comes with escalating risks as the Pyrofiend loses their humanity to demonic fire.',
    ascensionStages: [
      {
        stage: 0,
        name: 'Mortal Form',
        passive: 'Humanity Intact',
        bonus: 'No fire damage bonus',
        drawback: 'No drawbacks - you retain your mortal form and stability.',
        description: 'The Pyrofiend remains in their natural mortal state, unaffected by demonic influence.',
        auraEffect: 'None',
        resistances: 'None',
        vulnerabilities: 'None'
      },
      {
        stage: 1,
        name: 'Ember Awakening',
        passive: 'Flickering Flames',
        bonus: '+1 fire damage, fire spells have 10% chance to not consume mana',
        drawback: 'Flickering flames distort your vision - disadvantage on Perception checks involving sight.',
        description: 'Tiny flames dance around your fingertips and eyes, marking the beginning of your transformation.',
        auraEffect: 'None',
        resistances: 'None',
        vulnerabilities: 'Susceptible to cold damage (25% more)'
      },
      {
        stage: 2,
        name: 'Smoldering Soul',
        passive: 'Inner Heat',
        bonus: '+2 fire damage, immunity to being frightened by fire-based effects',
        drawback: 'Internal heat causes 1d4 psychic damage per turn as demonic whispers begin. Susceptible to cold damage (25% more).',
        description: 'Your soul begins to smolder with infernal energy, and you hear faint demonic whispers.',
        auraEffect: 'None',
        resistances: 'Immunity to fear from fire effects',
        vulnerabilities: 'Susceptible to cold damage (25% more), Susceptible to psychic damage (25% more)'
      },
      {
        stage: 3,
        name: 'Burning Veins',
        passive: 'Molten Blood',
        bonus: '+3 fire damage, fire spells heal you for 25% of damage dealt',
        drawback: 'Molten blood slows you (-10 ft movement) and burns you (1d4 fire damage per turn). Exposed to psychic damage (50% more).',
        description: 'Your blood runs molten hot, glowing faintly beneath your skin as veins become visible.',
        auraEffect: 'None',
        resistances: 'Resistant to fire damage (50% less)',
        vulnerabilities: 'Exposed to cold damage (50% more), Exposed to psychic damage (50% more)'
      },
      {
        stage: 4,
        name: 'Infernal Awakening',
        passive: 'Demonic Resilience',
        bonus: '+4 fire damage, fire spells heal you for 50% of damage dealt, +2 to Constitution saves',
        drawback: 'Demonic features emerge. Vulnerable to cold damage (100% more), 1d4 fire damage per turn, -10 ft movement.',
        description: 'Small horns, fangs, or other demonic features begin to manifest as your transformation accelerates.',
        auraEffect: 'None',
        resistances: 'Resistant to fire damage (50% less), Resistant to necrotic damage (50% less)',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more)'
      },
      {
        stage: 5,
        name: 'Hellfire Embodiment',
        passive: 'Infernal Constitution',
        bonus: '+5 fire damage, fire spells heal you for 75% of damage dealt, immunity to poison and disease',
        drawback: 'Skin cracks with hellfire (1d6 fire damage per turn), armor effectiveness reduced by 1 die size, -20 ft total movement.',
        description: 'Your skin develops a charred, cracked appearance with hellfire glowing from within the fissures.',
        auraEffect: 'None',
        resistances: 'Immune to poison and disease, Resistant to fire damage (50% less), Resistant to necrotic damage (50% less)',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more)'
      },
      {
        stage: 6,
        name: 'Fiend Ascendant',
        passive: 'Burning Gaze',
        bonus: '+6 fire damage, fire spells heal you for 100% of damage dealt, can see through magical darkness',
        drawback: 'Eyes burn with hellfire causing disadvantage on sight-based checks and ranged attacks. 1d6 fire damage per turn.',
        description: 'Your eyes become pools of liquid fire, and your presence begins to affect the environment around you.',
        auraEffect: 'None',
        resistances: 'Immune to poison and disease, Immune to being blinded by fire effects, Resistant to fire damage (50% less)',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more)'
      },
      {
        stage: 7,
        name: 'Infernal Lord',
        passive: 'Scorching Presence',
        bonus: '+7 fire damage, fire spells heal you for 100% of damage dealt, immunity to charm and fear effects',
        drawback: 'Immolation aura (5 ft): all creatures take 1d4 fire damage per turn. You take 1d8 fire damage per turn, -20 ft movement.',
        description: 'You radiate intense heat that affects all nearby creatures, and your demonic presence is unmistakable.',
        auraEffect: 'Immolation Aura (5 ft radius): All creatures within 5 feet take 1d4 fire damage at start of their turn',
        resistances: 'Immune to charm and fear, Immune to poison and disease, Resistant to fire damage (50% less)',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more)'
      },
      {
        stage: 8,
        name: 'Demon Prince',
        passive: 'Infernal Dominion',
        bonus: '+8 fire damage, fire spells heal you for 100% of damage dealt, can command lesser fire elementals',
        drawback: 'Expanded immolation aura (10 ft): all creatures take 1d6 fire damage per turn. You take 2d6 fire damage per turn, disadvantage on Agility checks.',
        description: 'Your transformation nears completion as you gain dominion over fire itself and lesser infernal beings.',
        auraEffect: 'Greater Immolation Aura (10 ft radius): All creatures within 10 feet take 1d6 fire damage at start of their turn',
        resistances: 'Immune to charm, fear, poison, and disease, Immune to fire damage, Can command fire elementals (CR 2 or lower)',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more)'
      },
      {
        stage: 9,
        name: 'Archfiend Avatar',
        passive: 'Apocalyptic Presence',
        bonus: '+10 fire damage, fire spells heal you for 100% of damage dealt, immunity to all conditions except exhaustion',
        drawback: 'Devastating aura (15 ft): all creatures take 1d8 fire damage per turn. You take 3d6 TRUE DAMAGE per turn, disadvantage on ALL saves. Risk burnout after 3 consecutive turns!',
        description: 'You have become a living avatar of infernal power, barely contained within mortal form. This power comes at the ultimate cost.',
        auraEffect: 'Apocalyptic Aura (15 ft radius): All creatures within 15 feet take 1d8 fire damage at start of their turn',
        resistances: 'Immune to all conditions except exhaustion, Immune to fire damage, Complete dominion over fire magic',
        vulnerabilities: 'Vulnerable to cold damage (100% more), Vulnerable to radiant damage (100% more), TRUE DAMAGE cannot be resisted'
      }
    ],
    ascensionMechanics: [
      'Each Pyrofiend spell description notes how it affects your Ascension Stage. Simple spells might advance +1 stage, while powerful rituals advance multiple stages.',
      'Ascension Stages range from 0 (Mortal Form) to 9 (Archfiend Avatar) – higher stages unlock restricted spells and more potent abilities.',
      'Certain legendary spells require you to have achieved a minimum Ascension Stage before casting.',
      'Specialized "Venting" abilities can reduce your Ascension Stage as part of their effect, allowing controlled descent.',
      'Outside of combat, Ascension Stages gradually decrease over time (1 stage per hour of rest), representing your return to mortal form.',
      'Each Ascension Stage grants unique passive abilities and escalating power, but also increasingly dangerous drawbacks.',
      'TRUE DAMAGE at Stage 9 cannot be resisted, reduced, or healed - it represents the cost of wielding ultimate infernal power.',
      'Burnout Risk: Remaining at Stage 9 for 3 consecutive turns triggers a Constitution save (DC 20) or suffer immediate unconsciousness and drop to Stage 0.'
    ],

    spellRestrictions: {
      stage0: ['All basic fire spells available'],
      stage1: ['Ember Spark', 'Flickering Flame', 'Minor Fire Shield'],
      stage2: ['All Stage 1 spells', 'Scorching Ray', 'Burning Hands', 'Heat Metal'],
      stage3: ['All Stage 2 spells', 'Fireball', 'Flame Arrow', 'Immolate'],
      stage4: ['All Stage 3 spells', 'Wall of Fire', 'Fire Shield', 'Conflagrate'],
      stage5: ['All Stage 4 spells', 'Flame Strike', 'Infernal Blast', 'Demonic Armor'],
      stage6: ['All Stage 5 spells', 'Disintegrate (Fire)', 'Greater Immolate', 'Hellfire Bolt'],
      stage7: ['All Stage 6 spells', 'Meteor', 'Infernal Gateway', 'Cursed Flame'],
      stage8: ['All Stage 7 spells', 'Apocalyptic Flame', 'Infernal Avatar', 'Demon Summoning'],
      stage9: ['All Stage 8 spells', 'Reality Burn', 'Archfiend Transformation', 'Planar Incineration']
    },

    uniqueSpellsByStage: {
      stage1: [
        {
          name: 'Ember Whispers',
          cost: { actionPoints: 1, mana: 3, ascension: '+1 stage' },
          description: 'Channel demonic whispers through flickering flames.',
          mechanics: 'Target must make Spirit save or be charmed for 1 round. Deals 1d4 psychic damage.',
          restriction: 'Requires Stage 1+ (Ember Awakening)'
        }
      ],
      stage2: [
        {
          name: 'Soul Smolder',
          cost: { actionPoints: 2, mana: 8, ascension: '+1 stage' },
          description: 'Ignite the target\'s soul with internal fire.',
          mechanics: 'Deals 2d6 fire damage that bypasses fire resistance. Target takes 1d4 fire damage per turn for 3 turns.',
          restriction: 'Requires Stage 2+ (Smoldering Soul)'
        }
      ],
      stage3: [
        {
          name: 'Molten Veins',
          cost: { actionPoints: 2, mana: 12, ascension: '+1 stage' },
          description: 'Transform your blood into molten metal, enhancing your fire magic.',
          mechanics: 'For 5 rounds, all fire spells deal +1d6 damage and heal you for 25% of damage dealt.',
          restriction: 'Requires Stage 3+ (Burning Veins)'
        }
      ],
      stage4: [
        {
          name: 'Infernal Pact',
          cost: { actionPoints: 3, mana: 20, ascension: '+2 stages' },
          description: 'Make a temporary pact with a lesser demon for power.',
          mechanics: 'Summon a fire imp (CR 1) that fights for you for 1 minute. You gain +2 fire damage for the duration.',
          restriction: 'Requires Stage 4+ (Infernal Awakening)'
        }
      ],
      stage5: [
        {
          name: 'Hellfire Eruption',
          cost: { actionPoints: 3, mana: 25, ascension: '+2 stages' },
          description: 'Cause the ground to erupt with hellfire in a large area.',
          mechanics: 'Create a 20ft radius area of hellfire. All creatures in area take 4d8 fire damage (Dex save for half). Area remains hazardous for 3 rounds.',
          restriction: 'Requires Stage 5+ (Hellfire Embodiment)'
        }
      ],
      stage6: [
        {
          name: 'Fiendish Sight',
          cost: { actionPoints: 1, mana: 15, ascension: '+1 stage' },
          description: 'See through the eyes of a fiend, piercing all illusions.',
          mechanics: 'For 10 minutes, see invisible creatures, see through illusions, and detect fiends within 60ft.',
          restriction: 'Requires Stage 6+ (Fiend Ascendant)'
        }
      ],
      stage7: [
        {
          name: 'Infernal Command',
          cost: { actionPoints: 2, mana: 30, ascension: '+2 stages' },
          description: 'Command lesser fire creatures with your infernal authority.',
          mechanics: 'All fire elementals and demons (CR 3 or lower) within 60ft must obey your commands for 1 hour.',
          restriction: 'Requires Stage 7+ (Infernal Lord)'
        }
      ],
      stage8: [
        {
          name: 'Demon Prince\'s Wrath',
          cost: { actionPoints: 4, mana: 40, ascension: '+2 stages' },
          description: 'Unleash the full fury of a demon prince upon your enemies.',
          mechanics: 'All enemies within 30ft take 6d10 fire damage and must make Spirit saves or be frightened for 1 minute. You heal for 50% of total damage dealt.',
          restriction: 'Requires Stage 8+ (Demon Prince)'
        }
      ],
      stage9: [
        {
          name: 'Archfiend\'s Apocalypse',
          cost: { actionPoints: 5, mana: 60, ascension: 'Maintain Stage 9' },
          description: 'Channel the apocalyptic power of an archfiend to devastate the battlefield.',
          mechanics: 'All creatures within 60ft take 10d12 fire damage (no save). Terrain becomes permanently scarred. You take 2d12 TRUE DAMAGE.',
          restriction: 'Requires Stage 9 (Archfiend Avatar) - Can only be cast once per day'
        }
      ]
    }
  },

  // Stage 0 Spells (Mortal Form - Starting abilities)
  baseSpells: [
    {
      name: 'Ember Spark',
      cost: {
        actionPoints: 1,
        mana: 5,
        ascension: 'Ascend +1 stage'
      },
      description: 'A minor spark of demonic fire that the Pyrofiend hurls at a target.',
      mechanics: 'Deals 1d6 fire damage to a single enemy. This is a simple ranged attack with no frills.',
      scaling: 'Damage = 1d6 + INT + Fire',
      stageRequirement: 'Stage 0 (Mortal Form)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Living Flame',
      cost: {
        actionPoints: 1,
        mana: 6,
        ascension: 'Ascend +1 stage'
      },
      description: 'Create a sentient flame that seeks out enemies on its own.',
      mechanics: 'Summon a living flame that moves 20ft per turn and attacks the nearest enemy for 1d6 fire damage. Lasts 3 rounds or until destroyed.',
      scaling: 'Damage = 1d6 + INT + Fire',
      stageRequirement: 'Stage 0 (Mortal Form)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Demon\'s Mark',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'Brand an enemy with a demonic sigil that burns from within.',
      mechanics: 'Mark target for 5 rounds. Marked enemies take 1d4 fire damage at start of turn and you gain +2 to hit them with spells.',
      scaling: 'Mark damage = 1d4 + INT + Fire per turn',
      stageRequirement: 'Stage 0 (Mortal Form)',
      specialization: 'hellfire-attunement'
    },

    // INFERNO SPECIALIZATION - Controlled, precise fire magic
    {
      name: 'Precise Flame',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'A carefully controlled flame that strikes with surgical precision.',
      mechanics: 'Deals 1d8+2 fire damage. Cannot miss. Crits on 19-20.',
      scaling: 'Damage = 1d8+2 + INT + Fire',
      stageRequirement: 'Stage 1 (Ember Awakening)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Heat Control',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Manipulate ambient temperature with perfect control.',
      mechanics: 'Choose: Deal 2d6 fire damage OR heal ally for 2d6 HP. 30ft range.',
      scaling: 'Effect = 2d6 + INT',
      stageRequirement: 'Stage 2 (Smoldering Soul)',
      specialization: 'inferno-attunement'
    },

    // WILDFIRE SPECIALIZATION - Chaotic, spreading fire magic
    {
      name: 'Wildfire Contagion',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Ignite a target with flames that spread like a disease.',
      mechanics: 'Deals 1d8 fire damage. At start of target\'s turn, flame spreads to one adjacent enemy. Each spread reduces damage by 1 die size.',
      scaling: 'Initial = 1d8 + INT + Fire, spreads as 1d6, then 1d4',
      stageRequirement: 'Stage 1 (Ember Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Chaotic Burst',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'Unleash unpredictable elemental chaos.',
      mechanics: 'Roll 1d6: 1-2 fire damage (2d4), 3-4 lightning damage (2d4), 5-6 both types (1d4 each) plus random effect (blind, stun, or knockdown).',
      scaling: 'Variable damage + INT + elemental type',
      stageRequirement: 'Stage 1 (Ember Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Spreading Flames',
      cost: {
        actionPoints: 2,
        mana: 15,
        ascension: 'Ascend +2 stages'
      },
      description: 'Create a fire that jumps between enemies unpredictably.',
      mechanics: 'Target takes 2d6 fire damage. Fire jumps to random enemy within 20ft for 1d6 damage. Continues jumping 1d4 times.',
      scaling: 'Initial = 2d6 + INT + Fire, jumps = 1d6 + INT + Fire',
      stageRequirement: 'Stage 2 (Smoldering Soul)',
      specialization: 'wildfire-attunement'
    },

    // HELLFIRE SPECIALIZATION - Demonic fire with curses and life manipulation
    {
      name: 'Terrifying Visage',
      cost: {
        actionPoints: 1,
        mana: 6,
        ascension: 'Ascend +1 stage'
      },
      description: 'Your face briefly transforms into that of a demon, striking fear into enemies.',
      mechanics: 'All enemies within 15ft must make Spirit save or be frightened for 2 rounds. Frightened enemies take 1d4 psychic damage per turn.',
      scaling: 'Damage = 1d4 + INT per turn',
      stageRequirement: 'Stage 1 (Ember Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Soul Burn',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Ignite the target\'s soul with demonic fire.',
      mechanics: 'Deals 1d8 fire damage that bypasses fire resistance. Target cannot heal for 2 rounds.',
      scaling: 'Damage = 1d8 + INT + Fire',
      stageRequirement: 'Stage 1 (Ember Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Life Drain',
      cost: {
        actionPoints: 2,
        mana: 12,
        ascension: 'Ascend +2 stages'
      },
      description: 'Drain the life force from an enemy to fuel your own power.',
      mechanics: 'Target takes 2d6 necrotic damage. You heal for 100% of damage dealt and gain 1d4 temporary mana.',
      scaling: 'Damage = 2d6 + INT, Healing = 100% damage, Mana = 1d4',
      stageRequirement: 'Stage 2 (Smoldering Soul)',
      specialization: 'hellfire-attunement'
    },

    // Stage 2 Spells (Smoldering Soul - Growing power)
    {
      name: 'Scorching Grasp',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'You engulf your hand in flames and touch a creature at melee range.',
      mechanics: 'Deals 1d10 fire damage and ignites the target – the target takes an additional 1d4 fire damage at the start of their next turn (a brief burn effect).',
      scaling: 'Damage = 1d10 + INT + Fire, Burn = 1d4 + INT + Fire',
      stageRequirement: 'Stage 2 (Smoldering Soul)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Pyroclastic Flow',
      cost: {
        actionPoints: 2,
        mana: 15,
        ascension: 'Ascend +2 stages'
      },
      description: 'Create a flowing river of lava and ash.',
      mechanics: 'Create a 30ft line of molten rock. Enemies in line take 2d6 fire damage and are slowed. Area becomes difficult terrain for 3 rounds.',
      scaling: 'Damage = 2d6 + INT + Fire',
      stageRequirement: 'Stage 2 (Smoldering Soul)',
      specialization: 'wildfire-attunement'
    },
    // Stage 3 Spells (Burning Veins - Dangerous power)
    {
      name: 'Searing Bolt',
      cost: {
        actionPoints: 1,
        mana: 12,
        ascension: 'Ascend +2 stages'
      },
      description: 'A concentrated bolt of white-hot fire launched at a target.',
      mechanics: 'Deals 2d6 fire damage to a single target and causes the target to burn, taking 1d4 fire damage at the start of their next turn.',
      scaling: 'Damage = 2d6 + INT + Fire, Burn = 1d4 + INT + Fire',
      stageRequirement: 'Stage 3 (Burning Veins)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Wildfire Storm',
      cost: {
        actionPoints: 2,
        mana: 18,
        ascension: 'Ascend +2 stages'
      },
      description: 'Create a chaotic storm of fire that spreads randomly.',
      mechanics: 'All enemies within 20ft take 2d6 fire damage. Each enemy hit has 25% chance to explode for 1d6 damage to other enemies.',
      scaling: 'Damage = 2d6 + INT + Fire, Explosion = 1d6 + INT + Fire',
      stageRequirement: 'Stage 3 (Burning Veins)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Hellish Rebuke',
      cost: {
        actionPoints: 0,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Instantly retaliate against an attacker with demonic fire.',
      mechanics: 'Reaction spell. When you take damage, attacker takes 2d8 fire damage. Can be used once per round.',
      scaling: 'Damage = 2d8 + INT + Fire',
      stageRequirement: 'Stage 3 (Burning Veins)',
      specialization: 'hellfire-attunement'
    },

    // Stage 4+ Spells (Infernal Awakening and beyond - High power, high risk)
    {
      name: 'Blaze Strike',
      cost: {
        actionPoints: 2,
        mana: 15,
        ascension: 'Ascend +2 stages'
      },
      description: 'The Pyrofiend imbues a physical strike (or touch) with blazing energy.',
      mechanics: 'Deals 2d8 fire damage to one target. The Pyrofiend absorbs vitality from the flames – you heal HP equal to half the damage dealt by this attack.',
      scaling: 'Damage = 2d8 + INT + Fire, Healing = (Damage dealt) / 2',
      stageRequirement: 'Stage 4 (Infernal Awakening)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Inferno Blast',
      cost: {
        actionPoints: 2,
        mana: 18,
        ascension: 'Ascend +2 stages'
      },
      cooldown: '2 rounds',
      description: 'A concentrated blast of intense fire directed at one enemy.',
      mechanics: 'Deals 3d8 fire damage to the target, and like Blaze Strike, heals the Pyrofiend for half of the damage dealt (drinking in the life-force from the flames).',
      scaling: 'Damage = 3d8 + INT + Fire, Healing = (Damage dealt) / 2',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Fire Shield',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +2 stages'
      },
      cooldown: '1 SR',
      description: 'The Pyrofiend conjures a protective aura of flames around themselves.',
      mechanics: 'The shield absorbs up to 2d6 points of damage from incoming attacks and burns melee attackers – any creature that hits the shielded Pyrofiend with a close combat attack takes 1d4 fire damage in retaliation.',
      scaling: 'Absorption = 2d6 + INT, Retaliation = 1d4 + INT + Fire',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Flame Whip',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'The Pyrofiend shapes fire into a whip-like tendril and lashes out at a target.',
      mechanics: 'Deals 2d6 fire damage and has an extended reach (15 feet reach), allowing you to strike targets slightly further than normal melee range.',
      scaling: 'Damage = 2d6 + INT + Fire',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Fireball',
      cost: {
        actionPoints: 2,
        mana: 20,
        ascension: 'Ascend +3 stages'
      },
      description: 'A classic explosive ball of fire hurled to detonate at a point, engulfing multiple enemies.',
      mechanics: 'Deals 3d6 fire damage to all enemies within a 10-foot radius of the impact. Additionally, the Pyrofiend absorbs part of the blast\'s energy – you heal for half of the total damage dealt by the Fireball.',
      scaling: 'Damage = 3d6 + INT + Fire, Healing = (Total damage dealt) / 2',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'inferno-attunement'
    },

    // Wildfire Attunement Spells - Spreading, chaotic fire magic
    {
      name: 'Living Flame',
      cost: {
        actionPoints: 1,
        mana: 6,
        ascension: 'Ascend +1 stage'
      },
      description: 'Create a sentient flame that seeks out enemies on its own.',
      mechanics: 'Summon a living flame that moves 20ft per turn and attacks the nearest enemy for 1d6 fire damage. Lasts 3 rounds or until destroyed.',
      scaling: 'Damage = 1d6 + INT + Fire',
      stageRequirement: 'Stage 0+ (Available to all)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Wildfire Contagion',
      cost: {
        actionPoints: 1,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Ignite a target with flames that spread like a disease.',
      mechanics: 'Deals 1d8 fire damage. At start of target\'s turn, flame spreads to one adjacent enemy. Each spread reduces damage by 1 die size.',
      scaling: 'Initial = 1d8 + INT + Fire, spreads as 1d6, then 1d4',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Chaos Eruption',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +2 stages'
      },
      description: 'Unleash unpredictable elemental chaos.',
      mechanics: 'Roll 1d6: 1-2 fire damage (2d4), 3-4 lightning damage (2d4), 5-6 both types (1d4 each) plus random effect (blind, stun, or knockdown).',
      scaling: 'Variable damage + INT + elemental type',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Pyroclastic Flow',
      cost: {
        actionPoints: 2,
        mana: 15,
        ascension: 'Ascend +2 stages'
      },
      description: 'Create a flowing river of lava and ash.',
      mechanics: 'Create a 30ft line of molten rock. Enemies in line take 2d6 fire damage and are slowed. Area becomes difficult terrain for 3 rounds.',
      scaling: 'Damage = 2d6 + INT + Fire',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'wildfire-attunement'
    },

    // Hellfire Attunement Spells - Demonic, cursed fire magic
    {
      name: 'Demon\'s Mark',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'Brand an enemy with a demonic sigil that burns from within.',
      mechanics: 'Mark target for 5 rounds. Marked enemies take 1d4 fire damage at start of turn and you gain +2 to hit them with spells.',
      scaling: 'Mark damage = 1d4 + INT + Fire per turn',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Terrifying Visage',
      cost: {
        actionPoints: 1,
        mana: 6,
        ascension: 'Ascend +1 stage'
      },
      description: 'Your face briefly transforms into that of a demon, striking fear into enemies.',
      mechanics: 'All enemies within 15ft must make Spirit save or be frightened for 2 rounds. Frightened enemies take 1d4 psychic damage per turn.',
      scaling: 'Damage = 1d4 + INT per turn',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Life Drain',
      cost: {
        actionPoints: 2,
        mana: 12,
        ascension: 'Ascend +2 stages'
      },
      description: 'Drain the life force from an enemy to fuel your own power.',
      mechanics: 'Target takes 2d6 necrotic damage. You heal for 100% of damage dealt and gain 1d4 temporary mana.',
      scaling: 'Damage = 2d6 + INT, Healing = 100% damage, Mana = 1d4',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Hellish Rebuke',
      cost: {
        actionPoints: 0,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Instantly retaliate against an attacker with demonic fire.',
      mechanics: 'Reaction spell. When you take damage, attacker takes 2d8 fire damage. Can be used once per round.',
      scaling: 'Damage = 2d8 + INT + Fire',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'hellfire-attunement'
    }
  ],

  // Advanced Spells (Intermediate Tier) - Require Higher Ascension Stages
  intermediateTierSpells: [
    // Inferno Attunement - Controlled, precise fire magic
    {
      name: 'Precision Burn',
      cost: {
        actionPoints: 2,
        mana: 20,
        ascension: 'Ascend +2 stages'
      },
      description: 'A carefully controlled flame that burns through armor and defenses.',
      mechanics: 'Deals 3d8 fire damage that ignores half of the target\'s fire resistance. Cannot be dodged or parried.',
      scaling: 'Damage = 3d8 + INT + Fire',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Controlled Immolation',
      cost: {
        actionPoints: 2,
        mana: 25,
        ascension: 'Ascend +1 stage'
      },
      description: 'Surround yourself with a controlled aura of flames.',
      mechanics: 'For 3 rounds, enemies within 5 feet take 1d6 fire damage at start of their turn. You can dismiss this early to prevent ascension.',
      scaling: 'Aura damage = 1d6 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Focused Flame Lance',
      cost: {
        actionPoints: 2,
        mana: 28,
        ascension: 'Ascend +2 stages'
      },
      description: 'A concentrated beam of fire that pierces through multiple enemies.',
      mechanics: 'Deals 4d6 fire damage to target and 2d6 to each enemy in a 30-foot line behind them.',
      scaling: 'Primary = 4d6 + INT + Fire, Secondary = 2d6 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'inferno-attunement'
    },

    // Wildfire Attunement - Chaotic, spreading fire magic
    {
      name: 'Flame Tornado',
      cost: {
        actionPoints: 2,
        mana: 22,
        ascension: 'Ascend +3 stages'
      },
      description: 'Create a spinning vortex of fire that moves across the battlefield.',
      mechanics: 'Summon a tornado that moves 15ft per turn for 4 turns. Enemies it passes through take 3d6 fire damage and are knocked prone.',
      scaling: 'Damage = 3d6 + INT + Fire per pass',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Elemental Chaos',
      cost: {
        actionPoints: 3,
        mana: 30,
        ascension: 'Ascend +2 stages'
      },
      description: 'Unleash raw elemental energy that randomly shifts between fire, lightning, and ice.',
      mechanics: 'Each enemy in 20ft radius takes damage from random element: Fire (3d6), Lightning (2d8, chains to 1 enemy), or Ice (2d6, slows target).',
      scaling: 'Variable damage + INT + elemental type',
      stageRequirement: 'Stage 5+ (Hellfire Embodiment)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Phoenix Burst',
      cost: {
        actionPoints: 3,
        mana: 28,
        ascension: 'Ascend +2 stages'
      },
      description: 'Transform briefly into phoenix fire, dealing massive damage and healing yourself.',
      mechanics: 'Deals 4d8 fire damage to all enemies within 25ft. You heal for 25% of total damage dealt and gain flight for 2 rounds.',
      scaling: 'Damage = 4d8 + INT + Fire, Healing = 25% total damage',
      stageRequirement: 'Stage 5+ (Hellfire Embodiment)',
      specialization: 'wildfire-attunement'
    },

    // Hellfire Attunement - Demonic, cursed fire magic
    {
      name: 'Hellfire Wave',
      cost: {
        actionPoints: 2,
        mana: 25,
        ascension: 'Ascend +2 stages'
      },
      description: 'The Pyrofiend releases a wave of hellish fire that sweeps over enemies in a frontal arc.',
      mechanics: 'Deals 4d8 fire damage to the primary target and scorches others nearby; the main target also catches fire, taking an extra 1d8 fire damage at the start of its next turn.',
      scaling: 'Damage = 4d8 + INT + Fire, Burn = 1d8 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Abyssal Flame',
      cost: {
        actionPoints: 2,
        mana: 30,
        ascension: 'Ascend +3 stages'
      },
      description: 'The Pyrofiend conjures a demonic flame that causes violent explosions upon impact.',
      mechanics: 'Deals 5d8 fire damage to one target and inflicts a heavy burn (1d10 fire damage at the start of the target\'s next turn). Additionally, small explosions spread to adjacent enemies, each taking 1d6 fire damage from the blast.',
      scaling: 'Damage = 5d8 + INT + Fire, Burn = 1d10 + INT + Fire, Splash = 1d6 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Demonfire Surge',
      cost: {
        actionPoints: 2,
        mana: 35,
        ascension: 'Ascend +3 stages'
      },
      description: 'An overwhelming surge of demonic fire concentrated on a single enemy.',
      mechanics: 'Deals 6d8 fire damage to the target, and causes them to burn for additional 2d6 fire damage at the start of their next turn. The Pyrofiend leeches power from this surge – you heal HP equal to half the total damage dealt by the spell.',
      scaling: 'Damage = 6d8 + INT + Fire, Burn = 2d6 + INT + Fire, Healing = (Total damage dealt) / 2',
      stageRequirement: 'Stage 5+ (Hellfire Embodiment)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Demonic Possession',
      cost: {
        actionPoints: 2,
        mana: 24,
        ascension: 'Ascend +2 stages'
      },
      description: 'Temporarily possess an enemy with a lesser demon.',
      mechanics: 'Target must make Spirit save or be controlled for 1 round. You can make them attack their allies or move them up to their speed.',
      scaling: 'Save DC = 10 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Hellgate Portal',
      cost: {
        actionPoints: 2,
        mana: 22,
        ascension: 'Ascend +2 stages'
      },
      description: 'Open a small portal to the Nine Hells, unleashing demonic energy.',
      mechanics: 'Create a 10ft radius portal for 3 rounds. Enemies starting turn in area take 2d6 fire damage. You can teleport to the portal as a bonus action.',
      scaling: 'Damage = 2d6 + INT + Fire per turn',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'hellfire-attunement'
    },

    // Universal Intermediate Spells
    {
      name: 'Lava Burst',
      cost: {
        actionPoints: 3,
        mana: 32,
        ascension: 'Ascend +3 stages'
      },
      description: 'The Pyrofiend causes molten lava to erupt from the ground under their foes.',
      mechanics: 'Deals 6d6 fire damage to a single target, and also splashes nearby enemies for 3d6 fire damage.',
      scaling: 'Damage = 6d6 + INT + Fire, Splash = 3d6 + INT + Fire',
      stageRequirement: 'Stage 6+ (Fiend Ascendant)',
      specialization: 'universal'
    },
    {
      name: 'Molten Armor',
      cost: {
        actionPoints: 2,
        mana: 20,
        ascension: 'Ascend +1 stage'
      },
      description: 'Rather than attacking, the Pyrofiend can reinforce their defense with molten rock and flame.',
      mechanics: 'You encase yourself in Molten Armor, increasing your armor damage reduction by one die size (d4→d6→d8→d10, max d10) and causing any melee attacker who hits you to suffer 1d6 fire damage from the searing heat. This protective buff lasts for a short duration.',
      scaling: 'Retaliation = 1d6 + INT + Fire',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'universal'
    }
  ],

  // Legendary Spells (High Tier) - Require Highest Ascension Stages
  highTierSpells: [
    // Inferno Attunement Legendary Spells
    {
      name: 'Perfect Immolation',
      cost: {
        actionPoints: 3,
        mana: 42,
        ascension: 'Ascend +1 stage'
      },
      description: 'The pinnacle of controlled fire magic - a perfectly balanced flame that burns without waste.',
      mechanics: 'Deals 8d8 fire damage to target. You heal for 100% of damage dealt and gain perfect fire control for 3 rounds (no ascension from fire spells).',
      scaling: 'Damage = 8d8 + INT + Fire, Healing = 100% damage dealt',
      stageRequirement: 'Stage 7+ (Infernal Lord)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Eternal Flame',
      cost: {
        actionPoints: 4,
        mana: 45,
        ascension: 'Ascend +2 stages'
      },
      description: 'Create a flame that burns forever, sustained by the target\'s own life force.',
      mechanics: 'Deals 6d8 fire damage initially. Target burns for 2d8 fire damage each turn until they die or the curse is removed. Flame spreads to killer if target dies.',
      scaling: 'Initial = 6d8 + INT + Fire, Burn = 2d8 + INT + Fire per turn',
      stageRequirement: 'Stage 8+ (Demon Prince)',
      specialization: 'inferno-attunement'
    },

    // Wildfire Attunement Legendary Spells
    {
      name: 'Wildfire Storm',
      cost: {
        actionPoints: 4,
        mana: 48,
        ascension: 'Ascend +3 stages'
      },
      description: 'Unleash a chaotic storm of fire that spreads across the entire battlefield.',
      mechanics: 'All enemies take 6d6 fire damage. Each enemy hit has 50% chance to explode for 3d6 damage to all other enemies. Continues for 3 rounds.',
      scaling: 'Damage = 6d6 + INT + Fire, Explosion = 3d6 + INT + Fire',
      stageRequirement: 'Stage 8+ (Demon Prince)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Phoenix Rebirth',
      cost: {
        actionPoints: 3,
        mana: 40,
        ascension: 'Descend -3 stages'
      },
      description: 'Sacrifice your demonic power to rise like a phoenix from near death.',
      mechanics: 'Can only cast when below 25% HP. Heal to full HP, deal 5d8 fire damage to all enemies within 20 feet, and reset ascension to Stage 3.',
      scaling: 'Damage = 5d8 + INT + Fire',
      stageRequirement: 'Stage 7+ (Infernal Lord)',
      specialization: 'wildfire-attunement'
    },

    // Hellfire Attunement Legendary Spells
    {
      name: 'Cursed Flame',
      cost: {
        actionPoints: 3,
        mana: 40,
        ascension: 'Ascend +2 stages'
      },
      description: 'A cursed inferno that utterly devastates a single enemy.',
      mechanics: 'Deals 7d8 fire damage outright, and brands the target with a lingering curse that burns them for 2d8 fire damage at the start of their next turn. The Pyrofiend also absorbs demonic energy from this cursed fire, healing for half of the total damage dealt.',
      scaling: 'Damage = 7d8 + INT + Fire, Burn = 2d8 + INT + Fire, Healing = (Total damage dealt) / 2',
      stageRequirement: 'Stage 7+ (Infernal Lord)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Demon Lord\'s Wrath',
      cost: {
        actionPoints: 4,
        mana: 50,
        ascension: 'Ascend +3 stages'
      },
      description: 'Channel the fury of a demon lord through your flames.',
      mechanics: 'Deals 9d8 fire damage to target and 4d8 to all enemies within 15 feet. All affected enemies are cursed: -4 to all rolls for 5 rounds.',
      scaling: 'Primary = 9d8 + INT + Fire, AoE = 4d8 + INT + Fire',
      stageRequirement: 'Stage 8+ (Demon Prince)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Soul Harvest',
      cost: {
        actionPoints: 3,
        mana: 35,
        ascension: 'Ascend +1 stage'
      },
      description: 'Burn away the souls of your enemies to fuel your own power.',
      mechanics: 'Deals 5d8 fire damage to all enemies within 25 feet. For each enemy killed, permanently gain +1 to fire damage (max +10).',
      scaling: 'Damage = 5d8 + INT + Fire',
      stageRequirement: 'Stage 7+ (Infernal Lord)',
      specialization: 'hellfire-attunement'
    },

    // Universal Legendary Spells
    {
      name: 'Hellstorm',
      cost: {
        actionPoints: 3,
        mana: 45,
        ascension: 'Ascend +3 stages'
      },
      description: 'The Pyrofiend calls down a storm of uncontrollable flames on an area or a single foe.',
      mechanics: 'Deals 8d8 fire damage to the primary target and 2d10 fire damage at the start of their next turn (a severe ongoing burn). The Hellstorm also causes massive secondary explosions around the target – adjacent enemies take 4d6 fire damage from the explosive fallout.',
      scaling: 'Damage = 8d8 + INT + Fire, Burn = 2d10 + INT + Fire, Splash = 4d6 + INT + Fire',
      stageRequirement: 'Stage 8+ (Demon Prince)',
      specialization: 'universal'
    },
    {
      name: 'Apocalyptic Flame',
      cost: {
        actionPoints: 4,
        mana: 50,
        ascension: 'Ascend +3 stages'
      },
      description: 'The ultimate expression of the Pyrofiend\'s power: an apocalyptic blaze that consumes all in its path.',
      mechanics: 'Deals 10d8 fire damage to a single target, and inflicts 3d10 fire damage at the start of their next turn as lingering hellfire. The Pyrofiend siphons a large portion of this cataclysmic energy to heal themselves for half the total damage dealt, often bringing them back from the brink of death even as they annihilate their foe.',
      scaling: 'Damage = 10d8 + INT + Fire, Burn = 3d10 + INT + Fire, Healing = (Total damage dealt) / 2',
      stageRequirement: 'Stage 9 (Archfiend Avatar)',
      specialization: 'universal'
    },
    {
      name: 'Meteor Shower',
      cost: {
        actionPoints: 4,
        mana: 45,
        ascension: 'Ascend +2 stages'
      },
      description: 'Rather than a single big hit, this spell calls down a barrage of flaming meteors over a wide area.',
      mechanics: 'Each enemy in a 30-foot radius area takes 8d6 fire damage as meteors pummel the battlefield. Additionally, all affected enemies are ignited to take 2d8 fire damage at the start of their next turn (burning debris continues to scorch them).',
      scaling: 'Damage = 8d6 + INT + Fire, Burn = 2d8 + INT + Fire',
      stageRequirement: 'Stage 8+ (Demon Prince)',
      specialization: 'universal'
    },
    {
      name: 'Infernal Avatar',
      cost: {
        actionPoints: 3,
        mana: 50,
        ascension: 'Ascend +1 stage'
      },
      description: 'Instead of casting a fire attack, the Pyrofiend can undergo a temporary transformation into a being of pure flame.',
      mechanics: 'You transform into an infernal avatar for a short duration (perhaps 1 minute). In this form, you gain +5 to all fire damage dealt, increase your armor damage reduction by two die sizes, and immunity to fire damage (normal flames can\'t hurt you at all).',
      scaling: 'N/A',
      stageRequirement: 'Stage 9 (Archfiend Avatar)',
      specialization: 'universal'
    }
  ],

  // Venting Abilities - Spells that reduce Ascension Stages
  ventingAbilities: [
    {
      name: 'Controlled Descent',
      cost: {
        actionPoints: 1,
        mana: 0,
        ascension: 'Descend -2 stages'
      },
      description: 'The Pyrofiend forcibly cools their infernal energy, reducing their ascension stage.',
      mechanics: 'Reduce your current Ascension Stage by 2 levels. This ability can be used as a reaction.',
      scaling: 'N/A',
      stageRequirement: 'Stage 2+ (Any stage above Mortal Form)'
    },
    {
      name: 'Infernal Vent',
      cost: {
        actionPoints: 2,
        mana: 10,
        ascension: 'Descend -3 stages'
      },
      description: 'Channel your accumulated infernal energy into a controlled explosion that damages enemies while cooling your form.',
      mechanics: 'All enemies within 10 feet take 2d6 fire damage per stage you currently possess. Reduce your Ascension Stage by 3 levels.',
      scaling: 'Damage = 2d6 × Current Stage + INT + Fire',
      stageRequirement: 'Stage 3+ (Burning Veins)'
    },
    {
      name: 'Emergency Purge',
      cost: {
        actionPoints: 0,
        mana: 0,
        ascension: 'Reset to Stage 0'
      },
      description: 'In dire circumstances, the Pyrofiend can purge all infernal energy at once.',
      mechanics: 'Immediately reset to Stage 0 (Mortal Form). Can be used as a free action when you would take TRUE DAMAGE. You become stunned for 1 round after using this ability.',
      scaling: 'N/A',
      stageRequirement: 'Stage 7+ (Emergency use only)'
    }
  ],

  // Utility and Defensive Spells
  utilitySpells: [
    // Inferno Attunement Utility
    {
      name: 'Flame Sight',
      cost: {
        actionPoints: 1,
        mana: 5,
        ascension: 'No change'
      },
      description: 'See through flames and heat distortions with perfect clarity.',
      mechanics: 'Gain darkvision 60ft and see through fire/smoke effects for 10 minutes. Can detect heat signatures through walls.',
      scaling: 'N/A',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Controlled Heat',
      cost: {
        actionPoints: 1,
        mana: 3,
        ascension: 'No change'
      },
      description: 'Precisely control temperature in a small area.',
      mechanics: 'Heat or cool a 10ft area by up to 50 degrees. Can melt ice, dry clothes, cook food, or preserve items.',
      scaling: 'N/A',
      stageRequirement: 'Stage 0+ (Available to all)',
      specialization: 'inferno-attunement'
    },
    {
      name: 'Fire Immunity',
      cost: {
        actionPoints: 2,
        mana: 15,
        ascension: 'Ascend +1 stage'
      },
      description: 'Become temporarily immune to fire damage.',
      mechanics: 'Gain immunity to fire damage for 5 minutes. Also gain resistance to cold damage during this time.',
      scaling: 'N/A',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'inferno-attunement'
    },

    // Wildfire Attunement Utility
    {
      name: 'Spark Jump',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'Transform into a spark of flame to quickly move across the battlefield.',
      mechanics: 'Teleport up to 30 feet, leaving a trail of sparks. Enemies in the path take 1d4 fire damage.',
      scaling: 'Damage = 1d4 + INT + Fire',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Wildfire Mark',
      cost: {
        actionPoints: 1,
        mana: 6,
        ascension: 'No change'
      },
      description: 'Mark a target so your flames will always find them.',
      mechanics: 'Mark lasts 1 hour. All fire spells against marked target have advantage and +2 damage.',
      scaling: 'N/A',
      stageRequirement: 'Stage 1+ (Ember Awakening)',
      specialization: 'wildfire-attunement'
    },
    {
      name: 'Flame Trail',
      cost: {
        actionPoints: 1,
        mana: 4,
        ascension: 'No change'
      },
      description: 'Leave a trail of fire as you move.',
      mechanics: 'For 1 minute, leave burning ground in squares you move through. Enemies entering take 1d4 fire damage.',
      scaling: 'Damage = 1d4 + INT + Fire',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'wildfire-attunement'
    },

    // Hellfire Attunement Utility
    {
      name: 'Demonic Pact',
      cost: {
        actionPoints: 2,
        mana: 12,
        ascension: 'Ascend +2 stages'
      },
      description: 'Temporarily bargain with demonic forces for power.',
      mechanics: 'For next 3 spells, double all damage but take 1d6 damage per spell cast.',
      scaling: 'Self-damage = 1d6 per spell',
      stageRequirement: 'Stage 4+ (Infernal Awakening)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Soul Shield',
      cost: {
        actionPoints: 2,
        mana: 10,
        ascension: 'Ascend +1 stage'
      },
      description: 'Protect yourself with the souls of your enemies.',
      mechanics: 'Gain temporary HP equal to 2d8 + INT. When shield is destroyed, deal 2d6 fire damage to attacker.',
      scaling: 'Shield = 2d8 + INT, Retaliation = 2d6 + INT + Fire',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Infernal Tongue',
      cost: {
        actionPoints: 1,
        mana: 5,
        ascension: 'No change'
      },
      description: 'Speak and understand the language of demons and fire elementals.',
      mechanics: 'Understand and speak Infernal and Ignan for 1 hour. Can communicate with fire elementals and demons.',
      scaling: 'N/A',
      stageRequirement: 'Stage 2+ (Smoldering Soul)',
      specialization: 'hellfire-attunement'
    },
    {
      name: 'Demon Sight',
      cost: {
        actionPoints: 1,
        mana: 8,
        ascension: 'Ascend +1 stage'
      },
      description: 'See the world through demonic eyes.',
      mechanics: 'Gain truesight 30ft for 10 minutes. Can see invisible creatures, illusions, and magical auras.',
      scaling: 'N/A',
      stageRequirement: 'Stage 3+ (Burning Veins)',
      specialization: 'hellfire-attunement'
    }
  ],

  // Stage-Specific Unique Spells
  uniqueSpellsByStage: {
    stage1: [
      {
        name: 'Ember Spark',
        cost: {
          actionPoints: 1,
          mana: 2
        },
        description: 'A small flame that grows stronger as you embrace your demonic nature.',
        mechanics: 'Deal 1d6 + INT fire damage. If you are at Stage 1 or higher, the flame has a 25% chance to spread to adjacent enemies.',
        scaling: 'Damage increases by 1d6 per 3 stages',
        stageRequirement: 'Stage 1 (Ember Awakening)'
      }
    ],
    stage2: [
      {
        name: 'Soul Sear',
        cost: {
          actionPoints: 2,
          mana: 3
        },
        description: 'Your smoldering soul reaches out to burn another\'s essence.',
        mechanics: 'Deal 2d6 + INT psychic damage that bypasses fire resistance. Target must make a Will save or be frightened for 1 round.',
        scaling: 'Damage increases by 1d6 per 2 stages',
        stageRequirement: 'Stage 2 (Smoldering Soul)'
      }
    ],
    stage3: [
      {
        name: 'Molten Blood Strike',
        cost: {
          actionPoints: 2,
          mana: 4,
          ascension: 'Take 1d4 fire damage'
        },
        description: 'Your molten blood becomes a weapon, burning you as it burns your enemies.',
        mechanics: 'Deal 3d8 + INT fire damage to target. You take 1d4 fire damage from your own molten blood. Heals you for 25% of damage dealt.',
        scaling: 'Damage increases by 1d8 per 2 stages',
        stageRequirement: 'Stage 3 (Burning Veins)'
      }
    ],
    stage4: [
      {
        name: 'Demonic Manifestation',
        cost: {
          actionPoints: 3,
          mana: 6
        },
        description: 'Your demonic features become more pronounced, terrifying enemies.',
        mechanics: 'All enemies within 15 feet must make a Will save or be frightened for 2 rounds. Frightened enemies take 1d6 fire damage per round.',
        scaling: 'Fear duration increases by 1 round per 2 stages above 4',
        stageRequirement: 'Stage 4 (Infernal Awakening)'
      }
    ],
    stage5: [
      {
        name: 'Hellfire Eruption',
        cost: {
          actionPoints: 3,
          mana: 8,
          ascension: 'Take 1d6 fire damage'
        },
        description: 'Your cracked skin erupts with hellfire, creating a devastating area attack.',
        mechanics: 'Create a 20-foot radius explosion centered on you. All enemies take 4d10 + INT fire damage. You take 1d6 fire damage from the eruption.',
        scaling: 'Damage increases by 1d10 per stage above 5',
        stageRequirement: 'Stage 5 (Hellfire Embodiment)'
      }
    ],
    stage6: [
      {
        name: 'Burning Gaze',
        cost: {
          actionPoints: 1,
          mana: 4
        },
        description: 'Your fiery eyes can ignite enemies with a mere glance.',
        mechanics: 'Target one enemy you can see within 60 feet. They take 2d8 + INT fire damage and are ignited for 3 rounds (1d6 fire damage per round).',
        scaling: 'Initial damage increases by 1d8 per stage above 6',
        stageRequirement: 'Stage 6 (Fiend Ascendant)'
      }
    ],
    stage7: [
      {
        name: 'Immolation Aura',
        cost: {
          actionPoints: 2,
          mana: 6,
          ascension: 'Take 1d8 fire damage per round'
        },
        description: 'Your scorching presence becomes a weapon that burns all nearby.',
        mechanics: 'For 3 rounds, all creatures within 10 feet take 2d6 fire damage at the start of their turn. You take 1d8 fire damage per round.',
        scaling: 'Aura damage increases by 1d6 per stage above 7',
        stageRequirement: 'Stage 7 (Infernal Lord)'
      }
    ],
    stage8: [
      {
        name: 'Demon Prince\'s Command',
        cost: {
          actionPoints: 3,
          mana: 10
        },
        description: 'Command lesser fire elementals and demons to serve you.',
        mechanics: 'Summon 1d4 fire elementals (1d6 HP each, 1d8 fire damage attacks) that fight for you for 5 rounds. They appear within 30 feet.',
        scaling: 'Number of elementals increases by 1 per stage above 8',
        stageRequirement: 'Stage 8 (Demon Prince)'
      }
    ],
    stage9: [
      {
        name: 'Infernal Apocalypse',
        cost: {
          actionPoints: 4,
          mana: 15,
          ascension: 'Take 2d10 fire damage'
        },
        description: 'Unleash the full power of your demonic transformation in a world-ending blast.',
        mechanics: 'All enemies within 50 feet take 8d12 + INT fire damage. The area becomes difficult terrain filled with hellfire for 5 rounds. You take 2d10 fire damage.',
        scaling: 'Damage increases by 2d12 per stage above 9',
        stageRequirement: 'Stage 9 (Infernal Sovereign)'
      }
    ]
  }
};

export default pyrofiendAbilities;
