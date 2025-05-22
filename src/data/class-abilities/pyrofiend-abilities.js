// Base spells and abilities for the Pyrofiend class
const pyrofiendAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Inferno Veil',
    description: 'The Inferno Veil is a heat meter called Inferno Levels that measures the buildup of demonic fire energy. Every time the Pyrofiend casts a fire spell or uses a class ability, their Inferno Level rises. As Inferno builds up, it empowers the Pyrofiend\'s magic and also imposes growing drawbacks on the caster.',
    levels: [
      {
        level: 0,
        bonus: 'No bonus',
        drawback: '(No drawbacks; you are cool and stable.)'
      },
      {
        level: 1,
        bonus: '+1 damage to all fire attacks',
        drawback: 'Flickering flames distort your vision, -2 to hit chance on your own attacks (minor visual distortion).'
      },
      {
        level: 2,
        bonus: '+2 damage',
        drawback: 'Heat intensifies around you, causing 1d4 psychic damage to yourself per turn (the distracting lustful heat sears your mind).'
      },
      {
        level: 3,
        bonus: '+3 damage',
        drawback: 'Oppressive heat radiates from you. You suffer -10 ft penalty to movement speed and constant fatigue (as if carrying a heavy weight).'
      },
      {
        level: 4,
        bonus: '+4 damage',
        drawback: 'Your veins glow with molten fire. You become extra vulnerable to attacks, taking an additional +2d6 damage from all sources that hit you.'
      },
      {
        level: 5,
        bonus: '+5 damage',
        drawback: 'Cracks form in your skin from the extreme heat. You bleed fire, taking 1d6 self-damage (bleeding) per turn, and your physical defenses wane (-4 AC).'
      },
      {
        level: 6,
        bonus: '+6 damage',
        drawback: 'Uncontrollable blaze in your eyes blurs your sight. You have disadvantage on all sight-based checks and ranged attack rolls (your vision swims with flame).'
      },
      {
        level: 7,
        bonus: '+7 damage',
        drawback: 'Scorching aura surrounds you. Breathing becomes difficult – you begin suffocating, taking 1d6 damage per turn and your speed is further reduced by 15 ft.'
      },
      {
        level: 8,
        bonus: '+8 damage',
        drawback: 'Raging inferno engulfs your body. You take 2d4 fire damage to yourself per turn and struggle to control your actions (disadvantage on all Dexterity checks).'
      },
      {
        level: 9,
        bonus: '+10 damage',
        drawback: 'Maximum Heat – "Infernal Overload." You are engulfed in flames. You suffer 4d8 self-damage per turn and have disadvantage on ALL saving throws due to the extreme stress. If you remain at Level 9 for 3 turns in a row without venting, you risk immediate burnout!'
      }
    ],
    mechanics: [
      'Each Pyrofiend spell description notes how it affects your Inferno Level. Simple spells might add +1 Inferno, while larger spells add more.',
      'The Inferno Level ranges from 0 (no heat) upward – and higher levels unlock more potent abilities.',
      'Certain powerful spells require you to have a minimum Inferno before casting.',
      'Some specialized Pyrofiend abilities "vent" the heat as part of their effect, reducing Inferno Levels.',
      'Outside of combat or if you pause from casting, the Inferno level can gradually cool down.',
      'Every Inferno Level grants a stacking buff to the Pyrofiend\'s fire damage, but also a stacking penalty that represents the demonic fire raging out of control.'
    ]
  },

  // Base Spells
  baseSpells: [
    {
      name: 'Ember Spark',
      cost: {
        actionPoints: 1,
        mana: 5,
        inferno: 'Ascend +1 level'
      },
      description: 'A minor spark of demonic fire that the Pyrofiend hurls at a target.',
      mechanics: 'Deals 1d6 fire damage to a single enemy. This is a simple ranged attack with no frills.',
      scaling: 'Damage = 1d6 + INT + Fire'
    },
    {
      name: 'Flickering Flame',
      cost: {
        actionPoints: 1,
        mana: 8,
        inferno: 'Ascend +1 level'
      },
      description: 'A wavering flame that disorients your foe.',
      mechanics: 'Deals 1d8 fire damage to one target and inflicts a minor debuff – the target\'s aim is thrown off, giving them -1 to their hit chance on their next attack.',
      scaling: 'Damage = 1d8 + INT + Fire'
    },
    {
      name: 'Scorching Grasp',
      cost: {
        actionPoints: 1,
        mana: 10,
        inferno: 'Ascend +1 level'
      },
      description: 'You engulf your hand in flames and touch a creature at melee range.',
      mechanics: 'Deals 1d10 fire damage and ignites the target – the target takes an additional 1d4 fire damage at the start of their next turn (a brief burn effect). Requires Inferno 1+.',
      scaling: 'Damage = 1d10 + INT + Fire, Burn = 1d4 + INT + Fire'
    },
    {
      name: 'Searing Bolt',
      cost: {
        actionPoints: 1,
        mana: 12,
        inferno: 'Ascend +2 levels'
      },
      description: 'A concentrated bolt of white-hot fire launched at a target.',
      mechanics: 'Deals 2d6 fire damage to a single target and causes the target to burn, taking 1d4 fire damage at the start of their next turn. Requires Inferno 1+.',
      scaling: 'Damage = 2d6 + INT + Fire, Burn = 1d4 + INT + Fire'
    },
    {
      name: 'Blaze Strike',
      cost: {
        actionPoints: 2,
        mana: 15,
        inferno: 'Ascend +2 levels'
      },
      description: 'The Pyrofiend imbues a physical strike (or touch) with blazing energy.',
      mechanics: 'Deals 2d8 fire damage to one target. Notably, the Pyrofiend absorbs vitality from the flames – you heal HP equal to half the damage dealt by this attack. Requires Inferno 2+.',
      scaling: 'Damage = 2d8 + INT + Fire, Healing = (Damage dealt) / 2'
    },
    {
      name: 'Inferno Blast',
      cost: {
        actionPoints: 2,
        mana: 18,
        inferno: 'Ascend +2 levels'
      },
      description: 'A concentrated blast of intense fire directed at one enemy.',
      mechanics: 'Deals 3d8 fire damage to the target, and like Blaze Strike, heals the Pyrofiend for half of the damage dealt (drinking in the life-force from the flames). Requires Inferno 3+.',
      scaling: 'Damage = 3d8 + INT + Fire, Healing = (Damage dealt) / 2'
    },
    {
      name: 'Fire Shield',
      cost: {
        actionPoints: 1,
        mana: 10,
        inferno: 'Ascend +2 levels'
      },
      description: 'The Pyrofiend conjures a protective aura of flames around themselves.',
      mechanics: 'The shield absorbs up to 2d6 points of damage from incoming attacks and burns melee attackers – any creature that hits the shielded Pyrofiend with a close combat attack takes 1d4 fire damage in retaliation. Requires Inferno 2+.',
      scaling: 'Absorption = 2d6 + INT, Retaliation = 1d4 + INT + Fire'
    },
    {
      name: 'Flame Whip',
      cost: {
        actionPoints: 1,
        mana: 8,
        inferno: 'Ascend +1 level'
      },
      description: 'The Pyrofiend shapes fire into a whip-like tendril and lashes out at a target.',
      mechanics: 'Deals 2d6 fire damage and has an extended reach (15 feet reach), allowing you to strike targets slightly further than normal melee range. Requires Inferno 1+.',
      scaling: 'Damage = 2d6 + INT + Fire'
    },
    {
      name: 'Fireball',
      cost: {
        actionPoints: 2,
        mana: 20,
        inferno: 'Ascend +3 levels'
      },
      description: 'A classic explosive ball of fire hurled to detonate at a point, engulfing multiple enemies.',
      mechanics: 'Deals 3d6 fire damage to all enemies within a 10-foot radius of the impact. Additionally, the Pyrofiend absorbs part of the blast\'s energy – you heal for half of the total damage dealt by the Fireball. Requires Inferno 3+.',
      scaling: 'Damage = 3d6 + INT + Fire, Healing = (Total damage dealt) / 2'
    }
  ],

  // Advanced Spells (Intermediate Tier)
  intermediateTierSpells: [
    {
      name: 'Hellfire Wave',
      cost: {
        actionPoints: 2,
        mana: 25,
        inferno: 'Ascend +2 levels'
      },
      description: 'The Pyrofiend releases a wave of hellish fire that sweeps over enemies in a frontal arc.',
      mechanics: 'Deals 4d8 fire damage to the primary target and scorches others nearby; the main target also catches fire, taking an extra 1d8 fire damage at the start of its next turn. Requires Inferno 4+.',
      scaling: 'Damage = 4d8 + INT + Fire, Burn = 1d8 + INT + Fire'
    },
    {
      name: 'Abyssal Flame',
      cost: {
        actionPoints: 2,
        mana: 30,
        inferno: 'Ascend +3 levels'
      },
      description: 'The Pyrofiend conjures a demonic flame that causes violent explosions upon impact.',
      mechanics: 'Deals 5d8 fire damage to one target and inflicts a heavy burn (1d10 fire damage at the start of the target\'s next turn). Additionally, small explosions spread to adjacent enemies, each taking 1d6 fire damage from the blast. Requires Inferno 4+.',
      scaling: 'Damage = 5d8 + INT + Fire, Burn = 1d10 + INT + Fire, Splash = 1d6 + INT + Fire'
    },
    {
      name: 'Demonfire Surge',
      cost: {
        actionPoints: 2,
        mana: 35,
        inferno: 'Ascend +3 levels'
      },
      description: 'An overwhelming surge of demonic fire concentrated on a single enemy.',
      mechanics: 'Deals 6d8 fire damage to the target, and causes them to burn for additional 2d6 fire damage at the start of their next turn. Like some earlier spells, the Pyrofiend leeches power from this surge – you heal HP equal to half the total damage dealt by the spell. Requires Inferno 5+.',
      scaling: 'Damage = 6d8 + INT + Fire, Burn = 2d6 + INT + Fire, Healing = (Total damage dealt) / 2'
    },
    {
      name: 'Pyroclasm',
      cost: {
        actionPoints: 3,
        mana: 28,
        inferno: 'Ascend +2 levels'
      },
      description: 'A devastating area-of-effect eruption of fire.',
      mechanics: 'Deals 5d6 fire damage to all enemies within a 20-foot radius. Those enemies are also set ablaze, each taking 1d8 fire damage at the start of their next turn as a burn effect. Requires Inferno 5+.',
      scaling: 'Damage = 5d6 + INT + Fire, Burn = 1d8 + INT + Fire'
    },
    {
      name: 'Lava Burst',
      cost: {
        actionPoints: 3,
        mana: 32,
        inferno: 'Ascend +3 levels'
      },
      description: 'The Pyrofiend causes molten lava to erupt from the ground under their foes.',
      mechanics: 'Deals 6d6 fire damage to a single target, and also splashes nearby enemies for 3d6 fire damage. Requires Inferno 6+.',
      scaling: 'Damage = 6d6 + INT + Fire, Splash = 3d6 + INT + Fire'
    },
    {
      name: 'Molten Armor',
      cost: {
        actionPoints: 2,
        mana: 20,
        inferno: 'Ascend +1 level'
      },
      description: 'Rather than attacking, the Pyrofiend can reinforce their defense with molten rock and flame.',
      mechanics: 'You encase yourself in Molten Armor, granting +3 bonus to AC (armor class) and causing any melee attacker who hits you to suffer 1d6 fire damage from the searing heat. This protective buff lasts for a short duration. Requires Inferno 4+.',
      scaling: 'Retaliation = 1d6 + INT + Fire'
    },
    {
      name: 'Infernal Chains',
      cost: {
        actionPoints: 2,
        mana: 22,
        inferno: 'Ascend +2 levels'
      },
      description: 'The Pyrofiend summons fiery chains from the ground to bind an enemy.',
      mechanics: 'Deals 4d6 fire damage to a target and restrains them for 1 turn (they cannot move, and possibly have disadvantage on attacks). Requires Inferno 4+.',
      scaling: 'Damage = 4d6 + INT + Fire'
    }
  ],

  // Advanced Spells (High Tier)
  highTierSpells: [
    {
      name: 'Cursed Flame',
      cost: {
        actionPoints: 3,
        mana: 40,
        inferno: 'Ascend +2 levels'
      },
      description: 'A cursed inferno that utterly devastates a single enemy.',
      mechanics: 'Deals 7d8 fire damage outright, and brands the target with a lingering curse that burns them for 2d8 fire damage at the start of their next turn. The Pyrofiend also absorbs demonic energy from this cursed fire, healing for half of the total damage dealt. Requires Inferno 7+.',
      scaling: 'Damage = 7d8 + INT + Fire, Burn = 2d8 + INT + Fire, Healing = (Total damage dealt) / 2'
    },
    {
      name: 'Hellstorm',
      cost: {
        actionPoints: 3,
        mana: 45,
        inferno: 'Ascend +3 levels'
      },
      description: 'The Pyrofiend calls down a storm of uncontrollable flames on an area or a single foe.',
      mechanics: 'Deals 8d8 fire damage to the primary target and 2d10 fire damage at the start of their next turn (a severe ongoing burn). The Hellstorm lives up to its name by also causing massive secondary explosions around the target – adjacent enemies take 4d6 fire damage from the explosive fallout. Requires Inferno 8+.',
      scaling: 'Damage = 8d8 + INT + Fire, Burn = 2d10 + INT + Fire, Splash = 4d6 + INT + Fire'
    },
    {
      name: 'Apocalyptic Flame',
      cost: {
        actionPoints: 4,
        mana: 50,
        inferno: 'Ascend +3 levels'
      },
      description: 'The ultimate expression of the Pyrofiend\'s power: an apocalyptic blaze that consumes all in its path.',
      mechanics: 'Deals 10d8 fire damage to a single target, and inflicts 3d10 fire damage at the start of their next turn as lingering hellfire. The Pyrofiend siphons a large portion of this cataclysmic energy to heal themselves for half the total damage dealt, often bringing them back from the brink of death even as they annihilate their foe. Requires Inferno 9 (max).',
      scaling: 'Damage = 10d8 + INT + Fire, Burn = 3d10 + INT + Fire, Healing = (Total damage dealt) / 2'
    },
    {
      name: 'Meteor Shower',
      cost: {
        actionPoints: 4,
        mana: 45,
        inferno: 'Ascend +2 levels'
      },
      description: 'Rather than a single big hit, this spell calls down a barrage of flaming meteors over a wide area.',
      mechanics: 'Each enemy in a 30-foot radius area takes 8d6 fire damage as meteors pummel the battlefield. Additionally, all affected enemies are ignited to take 2d8 fire damage at the start of their next turn (burning debris continues to scorch them). Requires Inferno 8+.',
      scaling: 'Damage = 8d6 + INT + Fire, Burn = 2d8 + INT + Fire'
    },
    {
      name: 'Infernal Avatar',
      cost: {
        actionPoints: 3,
        mana: 50,
        inferno: 'Ascend +1 level'
      },
      description: 'Instead of casting a fire attack, the Pyrofiend can undergo a temporary transformation into a being of pure flame.',
      mechanics: 'You transform into an infernal avatar for a short duration (perhaps 1 minute). In this form, you gain +5 to all fire damage dealt, +3 AC, and immunity to fire damage (normal flames can\'t hurt you at all). Requires Inferno 9 (max).',
      scaling: 'N/A'
    }
  ]
};

export default pyrofiendAbilities;
