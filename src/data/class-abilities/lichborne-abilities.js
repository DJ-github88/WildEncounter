// Base spells and abilities for the Lichborne class
const lichborneAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Phylactery Core',
    description: 'The Lichborne\'s power stems from a Phylactery Core, a magical vessel tied to its soul. This class uses a special mechanic of Essence Echoes (soul fragments) stored in the Phylactery. The core stores life energy (as echoes) and must be protected to maintain the undead state.',
    mechanics: [
      'Essence Echoes: Each time the Lichborne deals necrotic damage or slays an enemy, it harvests some of that soul energy into the Phylactery. Each Echo represents a charge of undead power. The Lichborne can hold a limited number of Echoes (3-5) at once.',
      'Undying Charges: The stored Essence can be spent to fuel abilities or cheat death. If the Lichborne is reduced to 0 HP while having at least 1 Echo, it automatically consumes one Echo to remain at 1 HP (simulating a quick rebirth).',
      'Phylactery Empowerment: When the Phylactery is filled with Echoes, many spells become empowered. Some abilities consume all Echoes for extra effect (for instance, unleashing an overwhelming Soul Bombardment).',
      'Managing this resource – gaining Echoes by spreading decay and spending them on survivability or power – is core to playing the Lichborne.'
    ],
    passiveBenefits: {
      name: 'Undead Nature',
      description: 'As an undead being, the Lichborne possesses inherent traits that set it apart from the living.',
      effects: [
        'Resistance to necrotic damage (25% reduction)',
        'Immunity to poison and disease effects',
        'No need to breathe, eat, or sleep',
        'Vulnerable to radiant/holy damage (25% increased damage)'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Bone Lance',
      cost: {
        actionPoints: 1,
        mana: 15,
        essenceEchoes: 0
      },
      description: 'Fires a sharpened shaft of bone at a single target for moderate necrotic damage.',
      mechanics: 'Launch a bone projectile at a target within 60 feet. On hit, deals 1d8 + Intelligence modifier necrotic damage. If this attack slays the target, the Lichborne gains +1 Essence Echo.',
      effects: [
        { condition: 'On Kill', effect: 'Gain 1 Essence Echo' },
        { condition: 'With 3+ Echoes', effect: 'Damage increases to 1d10 + Intelligence modifier' }
      ],
      scaling: 'Damage = 1d8 + INT (1d10 + INT with 3+ Echoes)'
    },
    {
      name: 'Life Siphon',
      cost: {
        actionPoints: 1,
        mana: 20,
        essenceEchoes: 0
      },
      description: 'Drains life from a single enemy, healing the Lichborne for a portion of the damage dealt.',
      mechanics: 'Target a creature within 30 feet. Deal 1d6 + Intelligence modifier necrotic damage and heal yourself for 50% of the damage dealt. Each hit has a 25% chance to convert part of the absorbed life into an Essence Echo.',
      effects: [
        { condition: 'Healing', effect: '50% of damage dealt' },
        { condition: 'Echo Generation', effect: '25% chance to gain 1 Essence Echo' },
        { condition: 'With 3+ Echoes', effect: 'Healing increases to 75% of damage dealt' }
      ],
      scaling: 'Damage = 1d6 + INT, Healing = 50% (75% with 3+ Echoes)'
    },
    {
      name: 'Raise Skeleton',
      cost: {
        actionPoints: 1,
        mana: 25,
        essenceEchoes: 0
      },
      description: 'Animates the bones of a nearby corpse or fresh grave to summon a Skeleton Servant.',
      mechanics: 'Animate a corpse within 30 feet to create a Skeleton Servant with 1d8 + Intelligence modifier hit points. The skeleton fights alongside the Lichborne for 1d4 rounds. Summoning requires a corpse; if none is available, this spell fails.',
      effects: [
        { condition: 'Duration', effect: '1d4 rounds' },
        { condition: 'Skeleton HP', effect: '1d8 + INT modifier' },
        { condition: 'With 2+ Echoes', effect: 'Duration increases to 1d6 rounds' },
        { condition: 'With 4+ Echoes', effect: 'Skeleton gains +2 to attack rolls' }
      ],
      scaling: 'Skeleton HP = 1d8 + INT, Duration = 1d4 rounds (1d6 with 2+ Echoes)'
    },
    {
      name: 'Shadow Grasp',
      cost: {
        actionPoints: 1,
        mana: 15,
        essenceEchoes: 0
      },
      description: 'Creates a dark tether linking the Lichborne to an enemy, slowing them and dealing damage over time.',
      mechanics: 'Create a shadowy tether to a target within 40 feet. The target is slowed (movement reduced by 10 feet) and takes 1d4 necrotic damage at the start of its turn for 2 rounds. The Lichborne gains a small barrier equal to 5 + Intelligence modifier, absorbing damage.',
      effects: [
        { condition: 'Slow Effect', effect: 'Target\'s movement reduced by 10 feet' },
        { condition: 'Damage', effect: '1d4 necrotic damage per round for 2 rounds' },
        { condition: 'Barrier', effect: '5 + INT modifier damage absorption' },
        { condition: 'With 3+ Echoes', effect: 'Duration increases to 3 rounds' }
      ],
      scaling: 'Barrier = 5 + INT, Duration = 2 rounds (3 with 3+ Echoes)'
    },
    {
      name: 'Bone Armor',
      cost: {
        actionPoints: 1,
        mana: 30,
        essenceEchoes: 0
      },
      description: 'Shrouds the Lichborne in spectral bone armor, reducing incoming damage and reflecting some back to attackers.',
      mechanics: 'Surround yourself with a barrier of spectral bones for 3 rounds. Gain damage reduction equal to 2 + Intelligence modifier. While active, attackers who hit the Lichborne take 1d4 necrotic damage as backlash.',
      effects: [
        { condition: 'Damage Reduction', effect: '2 + INT modifier per hit' },
        { condition: 'Backlash Damage', effect: '1d4 necrotic damage to attackers' },
        { condition: 'Duration', effect: '3 rounds' },
        { condition: 'With 2+ Echoes', effect: 'Backlash damage increases to 1d6' }
      ],
      scaling: 'Damage Reduction = 2 + INT, Backlash = 1d4 (1d6 with 2+ Echoes)'
    },
    {
      name: 'Deathly Chill',
      cost: {
        actionPoints: 1,
        mana: 20,
        essenceEchoes: 0
      },
      description: 'Unleashes a wave of icy undead energy in a cone, damaging and slowing enemies.',
      mechanics: 'Release a 15-foot cone of deathly cold. All enemies in the area take 2d4 necrotic damage and are slowed (movement reduced by 10 feet) for 1 round. If an enemy is killed by this blast, the Lichborne gains an Essence Echo.',
      effects: [
        { condition: 'Area', effect: '15-foot cone' },
        { condition: 'Damage', effect: '2d4 necrotic damage' },
        { condition: 'Slow', effect: 'Movement reduced by 10 feet for 1 round' },
        { condition: 'On Kill', effect: 'Gain 1 Essence Echo' },
        { condition: 'With 3+ Echoes', effect: 'Damage increases to 2d6' }
      ],
      scaling: 'Damage = 2d4 (2d6 with 3+ Echoes)'
    },
    {
      name: 'Arcane Corruption',
      cost: {
        actionPoints: 1,
        mana: 25,
        essenceEchoes: 0
      },
      description: 'Curses a single foe with arcane rot, dealing damage over time and reducing healing.',
      mechanics: 'Curse a target within 30 feet with arcane rot. The target takes 1d6 necrotic damage at the start of its turn for 3 rounds and suffers 50% reduced healing. Each tick of damage has a 20% chance to yield 1 Essence Echo.',
      effects: [
        { condition: 'DoT Damage', effect: '1d6 necrotic damage per round for 3 rounds' },
        { condition: 'Healing Reduction', effect: 'Target receives 50% less healing' },
        { condition: 'Echo Generation', effect: '20% chance per tick to gain 1 Essence Echo' },
        { condition: 'With 2+ Echoes', effect: 'DoT damage increases to 1d8' }
      ],
      scaling: 'DoT Damage = 1d6 per round (1d8 with 2+ Echoes)'
    },
    {
      name: 'Soul Shackle',
      cost: {
        actionPoints: 1,
        mana: 20,
        essenceEchoes: 1
      },
      description: 'Binds a target\'s soul, stunning them and dealing damage.',
      mechanics: 'Bind a target\'s soul within 30 feet. The target is stunned for 1 round and takes 1d8 necrotic damage. Consumes 1 Essence Echo.',
      effects: [
        { condition: 'Stun', effect: 'Target is stunned for 1 round' },
        { condition: 'Damage', effect: '1d8 necrotic damage' },
        { condition: 'With 3+ Echoes', effect: 'Can affect up to 2 targets within 15 feet of each other' }
      ],
      scaling: 'Damage = 1d8, Targets = 1 (2 with 3+ Echoes)'
    },
    {
      name: 'Wail of the Damned',
      cost: {
        actionPoints: 1,
        mana: 30,
        essenceEchoes: 0
      },
      description: 'Emits a haunting scream that damages enemies and may cause them to flee.',
      mechanics: 'Release a terrifying wail in a 20-foot cone. Enemies in the area take 2d6 necrotic damage and must make a Will save or be frightened for 1d4 rounds (fleeing or unable to move closer to you).',
      effects: [
        { condition: 'Area', effect: '20-foot cone' },
        { condition: 'Damage', effect: '2d6 necrotic damage' },
        { condition: 'Fear Effect', effect: 'Targets must save or be frightened for 1d4 rounds' },
        { condition: 'With 2+ Echoes', effect: 'Save DC increases by 2' }
      ],
      scaling: 'Damage = 2d6, Fear Duration = 1d4 rounds'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Essence Drain',
      cost: {
        actionPoints: 1,
        mana: 40,
        essenceEchoes: 1
      },
      description: 'A devastating siphon that strikes all enemies in a radius, healing the Lichborne and generating Essence Echoes.',
      mechanics: 'Release a wave of necrotic energy in a 15-foot radius centered on you. All enemies take 3d6 necrotic damage, and you heal for 25% of the total damage dealt. Each enemy hit provides a 50% chance to gain an Essence Echo. Consumes 1 Essence Echo to cast.',
      effects: [
        { condition: 'Area', effect: '15-foot radius' },
        { condition: 'Damage', effect: '3d6 necrotic damage to all enemies in range' },
        { condition: 'Healing', effect: '25% of total damage dealt' },
        { condition: 'Echo Generation', effect: '50% chance per enemy hit to gain 1 Essence Echo' },
        { condition: 'With 3+ Echoes', effect: 'Healing increases to 40% of damage dealt' }
      ],
      scaling: 'Damage = 3d6, Healing = 25% (40% with 3+ Echoes)'
    },
    {
      name: 'Null Curse',
      cost: {
        actionPoints: 1,
        mana: 35,
        essenceEchoes: 1
      },
      description: 'Places an anti-magic hex on an enemy or area, preventing spellcasting.',
      mechanics: 'Place an anti-magic hex on a target or 10-foot radius area for 3 rounds. Affected foes cannot cast spells or activate magic items (their spell attempts automatically fail). Consumes 1 Essence Echo to cast.',
      effects: [
        { condition: 'Duration', effect: '3 rounds' },
        { condition: 'Anti-Magic', effect: 'Targets cannot cast spells or use magic items' },
        { condition: 'Area Option', effect: 'Can target a single creature or a 10-foot radius' },
        { condition: 'With 3+ Echoes', effect: 'Duration increases to 4 rounds' }
      ],
      scaling: 'Duration = 3 rounds (4 with 3+ Echoes)'
    },
    {
      name: 'Bone Spear',
      cost: {
        actionPoints: 1,
        mana: 35,
        essenceEchoes: 0
      },
      description: 'Launches multiple razor-sharp bone spears in a line, potentially creating skeletal remnants.',
      mechanics: 'Fire a line of bone spears in a 30-foot line, 5 feet wide. Each enemy in the line takes 3d8 necrotic damage. If a spear kills a target, it creates a skeletal remnant with 1d6 hit points that fights for you for 1d4 rounds.',
      effects: [
        { condition: 'Area', effect: '30-foot line, 5 feet wide' },
        { condition: 'Damage', effect: '3d8 necrotic damage' },
        { condition: 'On Kill', effect: 'Creates a skeletal remnant with 1d6 HP for 1d4 rounds' },
        { condition: 'With 2+ Echoes', effect: 'Skeletal remnants have 1d8 HP instead' }
      ],
      scaling: 'Damage = 3d8, Skeleton HP = 1d6 (1d8 with 2+ Echoes)'
    },
    {
      name: 'Spirit Haunting',
      cost: {
        actionPoints: 1,
        mana: 30,
        essenceEchoes: 1
      },
      description: 'Envelops the Lichborne in a ghostly shield that damages attackers and regenerates mana.',
      mechanics: 'Surround yourself with vengeful spirits for 3 rounds. Whenever you are hit, the attacker takes 1d8 necrotic damage and is slowed by 10 feet for 1 round. You also regenerate 5 mana per round while the shield is active. Consumes 1 Essence Echo to cast.',
      effects: [
        { condition: 'Duration', effect: '3 rounds' },
        { condition: 'Retribution Damage', effect: 'Attackers take 1d8 necrotic damage' },
        { condition: 'Slow Effect', effect: 'Attackers are slowed by 10 feet for 1 round' },
        { condition: 'Mana Regeneration', effect: 'Gain 5 mana per round' },
        { condition: 'With 3+ Echoes', effect: 'Retribution damage increases to 1d10' }
      ],
      scaling: 'Retribution Damage = 1d8 (1d10 with 3+ Echoes), Mana Regen = 5 per round'
    },
    {
      name: 'Feast of Souls',
      cost: {
        actionPoints: 1,
        mana: 45,
        essenceEchoes: 2
      },
      description: 'Channels gathered souls into a healing ritual, converting excess healing into Essence Echoes.',
      mechanics: 'For the next 3 rounds, all your damaging spells heal you for 40% of the damage dealt. Each point of healing beyond your maximum HP converts into Essence Echoes (1 Echo per 10 excess healing). Consumes 2 Essence Echoes to cast.',
      effects: [
        { condition: 'Duration', effect: '3 rounds' },
        { condition: 'Life Steal', effect: '40% of all spell damage heals you' },
        { condition: 'Echo Generation', effect: '1 Echo per 10 points of excess healing' },
        { condition: 'With 4+ Echoes', effect: 'Life steal increases to 50%' }
      ],
      scaling: 'Life Steal = 40% (50% with 4+ Echoes)'
    },
    {
      name: 'Wretched Rebirth',
      cost: {
        actionPoints: 2,
        mana: 60,
        essenceEchoes: 0
      },
      description: 'Sacrifices all current undead minions to fully heal the Lichborne and restore mana.',
      mechanics: 'Sacrifice all your active undead minions to heal yourself for 50% of your maximum HP and restore 30 mana. For each minion sacrificed, gain an additional 10% HP and 5 mana.',
      effects: [
        { condition: 'Base Healing', effect: '50% of maximum HP' },
        { condition: 'Base Mana Restoration', effect: '30 mana' },
        { condition: 'Per Minion', effect: '+10% HP and +5 mana' },
        { condition: 'With 2+ Echoes', effect: 'Base healing increases to 60% of maximum HP' }
      ],
      scaling: 'Base Healing = 50% max HP (60% with 2+ Echoes), +10% per minion'
    },
    {
      name: 'Arcane Overflow',
      cost: {
        actionPoints: 1,
        mana: 50,
        essenceEchoes: 2
      },
      description: 'Temporarily floods the Lichborne\'s spells with raw necrotic energy, increasing damage but costing more mana.',
      mechanics: 'For the next 3 spellcasts, your spells deal 20% more damage and ignore 30% of targets\' resistances. Each spell in this state costs an extra 10 mana. Consumes 2 Essence Echoes to cast.',
      effects: [
        { condition: 'Duration', effect: 'Next 3 spellcasts' },
        { condition: 'Damage Boost', effect: '+20% spell damage' },
        { condition: 'Penetration', effect: 'Ignore 30% of target resistances' },
        { condition: 'Extra Cost', effect: '+10 mana per spell' },
        { condition: 'With 4+ Echoes', effect: 'Damage boost increases to +30%' }
      ],
      scaling: 'Damage Boost = +20% (+30% with 4+ Echoes)'
    },
    {
      name: 'Phylactery Reinforcement',
      cost: {
        actionPoints: 1,
        mana: 30,
        essenceEchoes: 0
      },
      description: 'Converts personal energy into soul energy, granting an Essence Echo and some healing.',
      mechanics: 'Immediately gain 1 Essence Echo and heal for 1d8 + Intelligence modifier hit points. If you have fewer than 2 Essence Echoes when cast, gain an additional Echo.',
      effects: [
        { condition: 'Echo Generation', effect: 'Gain 1 Essence Echo (2 if you have fewer than 2 Echoes)' },
        { condition: 'Healing', effect: '1d8 + INT modifier hit points' },
        { condition: 'With 3+ Echoes', effect: 'Healing increases to 2d8 + INT modifier' }
      ],
      scaling: 'Healing = 1d8 + INT (2d8 + INT with 3+ Echoes)'
    }
  ],

  // Ultimate Abilities
  ultimateAbilities: [
    {
      name: 'Phylactery Resurrection',
      cost: {
        actionPoints: 2,
        mana: 100,
        essenceEchoes: 3
      },
      description: 'Taps the core of the Phylactery for ultimate survival, allowing the Lichborne to revive upon death.',
      mechanics: 'For the next 5 rounds, if you are reduced to 0 HP, you instantly consume all remaining Essence Echoes and revive with 50% of your maximum HP. This can only trigger once per combat. Consumes 3 Essence Echoes to cast.',
      effects: [
        { condition: 'Duration', effect: '5 rounds' },
        { condition: 'Revival', effect: 'Return at 50% HP if killed' },
        { condition: 'Limitation', effect: 'Can only trigger once per combat' },
        { condition: 'With 5 Echoes', effect: 'Revival grants 75% HP instead of 50%' }
      ],
      scaling: 'Revival HP = 50% (75% if cast with 5 Echoes)'
    },
    {
      name: 'Soulstorm',
      cost: {
        actionPoints: 2,
        mana: 90,
        essenceEchoes: 3
      },
      description: 'Unleashes a tempest of anguished souls in a large area, dealing massive damage and terrifying enemies.',
      mechanics: 'Create a 30-foot radius storm of souls centered on a point within 60 feet. All enemies in the radius take 6d8 necrotic damage and must save or be frightened for 1d4 rounds. Each enemy struck leaves behind a Soul Echo that you can collect (move within 5 feet) for 1 Essence Echo. Consumes 3 Essence Echoes to cast.',
      effects: [
        { condition: 'Area', effect: '30-foot radius' },
        { condition: 'Damage', effect: '6d8 necrotic damage' },
        { condition: 'Fear Effect', effect: 'Targets must save or be frightened for 1d4 rounds' },
        { condition: 'Soul Collection', effect: 'Each hit enemy leaves a collectible Soul Echo' },
        { condition: 'With 5 Echoes', effect: 'Damage increases to 8d8' }
      ],
      scaling: 'Damage = 6d8 (8d8 if cast with 5 Echoes)'
    },
    {
      name: 'Nullification Field',
      cost: {
        actionPoints: 2,
        mana: 80,
        essenceEchoes: 3
      },
      description: 'Creates a zone of anti-magic around the Lichborne, preventing enemy spellcasting while empowering allies.',
      mechanics: 'Create a 20-foot radius anti-magic field centered on you for 3 rounds. Enemies inside cannot cast spells or use magic items. Allies within the field can cast spells without spending mana, but their spells deal 50% damage. Consumes 3 Essence Echoes to cast.',
      effects: [
        { condition: 'Area', effect: '20-foot radius centered on you' },
        { condition: 'Duration', effect: '3 rounds' },
        { condition: 'Enemy Effect', effect: 'Cannot cast spells or use magic items' },
        { condition: 'Ally Effect', effect: 'Spells cost no mana but deal 50% damage' },
        { condition: 'With 5 Echoes', effect: 'Ally spells deal 75% damage instead of 50%' }
      ],
      scaling: 'Ally Spell Damage = 50% (75% if cast with 5 Echoes)'
    },
    {
      name: 'Carrion Bombardment',
      cost: {
        actionPoints: 2,
        mana: 100,
        essenceEchoes: 3
      },
      description: 'Calls down a shower of spectral bones onto a target area, dealing heavy damage and creating hazardous terrain.',
      mechanics: 'Call down spectral bones in a 25-foot radius area within 100 feet. Each enemy in the area takes 5d10 necrotic damage. The area becomes difficult terrain for 2 rounds, and enemies moving through it take 1d8 necrotic damage. If cast with 5 Essence Echoes, an additional explosive strike occurs for 3d10 damage. Consumes 3 Essence Echoes to cast.',
      effects: [
        { condition: 'Area', effect: '25-foot radius' },
        { condition: 'Damage', effect: '5d10 necrotic damage' },
        { condition: 'Terrain Effect', effect: 'Difficult terrain that deals 1d8 damage when crossed' },
        { condition: 'Terrain Duration', effect: '2 rounds' },
        { condition: 'With 5 Echoes', effect: 'Additional explosion for 3d10 damage' }
      ],
      scaling: 'Damage = 5d10 (+3d10 if cast with 5 Echoes)'
    },
    {
      name: 'Banshee Wail',
      cost: {
        actionPoints: 2,
        mana: 85,
        essenceEchoes: 3
      },
      description: 'The Lichborne emits an otherworldly wail that rends life itself, damaging living creatures while healing undead.',
      mechanics: 'Release a devastating wail in a 40-foot cone. All living creatures in the area take 6d10 necrotic damage and are stunned for 1 round. Undead in the area (including yourself) are healed for 3d8 + Intelligence modifier hit points. All unused Essence Echoes are absorbed back, increasing your maximum Essence Echo capacity by 1 for the remainder of the combat. Consumes 3 Essence Echoes to cast.',
      effects: [
        { condition: 'Area', effect: '40-foot cone' },
        { condition: 'Damage to Living', effect: '6d10 necrotic damage' },
        { condition: 'Stun', effect: 'Living creatures stunned for 1 round' },
        { condition: 'Healing to Undead', effect: '3d8 + INT modifier hit points' },
        { condition: 'Echo Capacity', effect: 'Maximum Echo capacity increases by 1' },
        { condition: 'With 5 Echoes', effect: 'Damage increases to 8d10' }
      ],
      scaling: 'Damage = 6d10 (8d10 if cast with 5 Echoes), Healing = 3d8 + INT'
    }
  ]
};

export default lichborneAbilities;
