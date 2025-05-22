// Base spells and abilities for the Chronarch class
const chronarchAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Continuum',
    description: 'The Continuum is a meter (time-energy gauge) unique to the Chronarch. It starts at zero and fills as the Chronarch casts spells, uses time effects, or moves dynamically. When certain thresholds are reached, powerful "tempo effects" automatically trigger or become available.',
    thresholds: [
      {
        name: 'Momentum',
        description: 'The first threshold. When reached, grants a burst of speed or extra AP next turn.',
        value: 10
      },
      {
        name: 'Echo',
        description: 'The second threshold. When reached, allows spells to echo or strike twice.',
        value: 20
      },
      {
        name: 'Stasis',
        description: 'The third threshold. When reached, allows freezing time around foes or creating massive area effects.',
        value: 30
      }
    ],
    mechanics: [
      'Continuum starts at 0 and can be built up to a maximum of 30 points.',
      'Spells and movement generate Continuum points.',
      'Reaching thresholds unlocks powerful abilities.',
      'Some abilities consume Continuum points.',
      'If Continuum exceeds its maximum, it can cause a dangerous chronal backlash.'
    ]
  },

  // Base Spells
  baseSpells: [
    {
      name: 'Chrono Bolt',
      cost: {
        actionPoints: 1,
        mana: 2,
        continuum: '+2'
      },
      description: 'A shard of crystallized time that disrupts the target\'s temporal flow.',
      mechanics: 'Fires a ranged temporal projectile at one enemy within 30 ft. Roll 1d6: a 1 is a miss, a 6 is a critical hit, any other result hits. On hit, deal the rolled value plus Intelligence modifier as temporal damage and reduce the target\'s AP by 1 on their next turn. On a critical hit, the target also loses their reaction until the end of their next turn.',
      scaling: 'Damage = 1d6 + (INT modifier)'
    },
    {
      name: 'Temporal Shield',
      cost: {
        actionPoints: 1,
        mana: 3,
        continuum: '+1'
      },
      description: 'A shimmering barrier of slowed time that cushions incoming attacks.',
      mechanics: 'Creates a temporal field around an ally (or self) for 2 rounds. While active, the shield reduces all incoming damage by 2 + Intelligence modifier.',
      scaling: 'Damage reduction = 2 + (INT modifier)'
    },
    {
      name: 'Blink Step',
      cost: {
        actionPoints: 1,
        mana: 2,
        continuum: '+1'
      },
      description: 'Teleportation shift for quick movement.',
      mechanics: 'Instantly teleport up to 20 ft to an unoccupied space you can see. If you teleport twice in one turn, gain an extra +1 Continuum.',
      scaling: 'Range is fixed; no damage. Useful for positioning and building momentum.'
    },
    {
      name: 'Time Dilation (Haste)',
      cost: {
        actionPoints: 2,
        mana: 4,
        continuum: '+2'
      },
      description: 'Accelerate an ally, granting them increased speed and actions.',
      mechanics: 'Choose one ally; they gain double movement speed and one extra AP until end of your next turn.',
      scaling: 'Buff duration is fixed, but saving throw DC = 8 + Prof + INT to resist if enemies intervene.'
    },
    {
      name: 'Entropy Wave (Slow)',
      cost: {
        actionPoints: 2,
        mana: 4,
        continuum: '+2'
      },
      description: 'Decelerate foes, reducing their speed and actions.',
      mechanics: 'In a 15-ft cone, enemies must succeed on a Perception save (DC 8+Prof+INT) or be slowed: their speed is halved, attacks -1 (or -2 in some systems), and they lose reactions for 1 round.',
      scaling: 'Save DC based on INT; slow penalty might improve with higher stats.'
    },
    {
      name: 'Rewind Heal',
      cost: {
        actionPoints: 2,
        mana: 5,
        continuum: '+3'
      },
      description: 'Temporal restoration that heals by rewinding time on wounds.',
      mechanics: 'Targets one ally (or self); rewinds time on their condition by up to 3 hit points plus 1 additional per Perception modifier.',
      scaling: 'Healing = 3 + (PER)'
    },
    {
      name: 'Echo Strike',
      cost: {
        actionPoints: 3,
        mana: 5,
        continuum: '+3'
      },
      description: 'Attack that repeats itself through a temporal echo.',
      mechanics: 'Attack an enemy with a quick melee or ranged strike. Roll 1d8: a 1 is a miss, an 8 is a critical hit, any other result hits. On hit, deal the rolled value plus STR/DEX modifier as damage. Immediately after, a spectral echo repeats the same attack for half the damage (rounded up). If the first attack is a critical hit, the echo attack also becomes a critical hit.',
      scaling: 'Both attacks gain + (STR or DEX mod), but echo deals half base damage.'
    }
  ],

  // Threshold Abilities
  thresholdAbilities: [
    {
      name: 'Chronal Burst',
      threshold: 'Momentum',
      cost: {
        actionPoints: 0,
        mana: 0,
        continuum: 'Requires Momentum threshold'
      },
      description: 'Instant Speed Burst that propels the Chronarch and allies forward.',
      mechanics: 'When the Momentum threshold is reached, the Chronarch can instantly activate. For 1 round, all movement by allies is doubled and the Chronarch gains +2 additional AP on the next turn.'
    },
    {
      name: 'Time Echo',
      threshold: 'Echo',
      cost: {
        actionPoints: 2,
        mana: 6,
        continuum: 'Spends half of current Continuum'
      },
      description: 'Repeat a previously cast spell as an echo.',
      mechanics: 'Requires at least the Echo threshold of Continuum. Choose one of your spells (just cast or known); it triggers again automatically on its target(s) as an echo.'
    },
    {
      name: 'Absolute Stasis',
      threshold: 'Stasis',
      cost: {
        actionPoints: 3,
        mana: 8,
        continuum: 'Requires Stasis threshold'
      },
      description: 'Field Freeze that paralyzes enemies in time.',
      mechanics: 'When the Stasis threshold is reached, all enemies within 20 ft must make a Constitution save (DC = 8 + Prof + INT). On a failure, they are paralyzed in time for 1d4 rounds. On success, they are slowed for 2 rounds.'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Temporal Rewind',
      cost: {
        actionPoints: 2,
        mana: 6,
        continuum: '-5'
      },
      description: 'Rewind to Safety by returning a creature to its previous state.',
      mechanics: 'Instantly rewind one creature (ally or enemy) to its position and HP from the start of last turn. HP lost since then is restored.'
    },
    {
      name: 'Time Anchor',
      cost: {
        actionPoints: 1,
        mana: 3,
        continuum: '+1'
      },
      description: 'Passive Buff that anchors allies in time.',
      mechanics: 'If the Chronarch ends their turn within 5 ft of an ally, that ally gains a temporal anchor reducing the next incoming damage by 2. If the Chronarch has any Continuum, the reduction is instead 4.'
    },
    {
      name: 'Entropic Wave',
      cost: {
        actionPoints: 3,
        mana: 0,
        continuum: 'Spends all Continuum'
      },
      description: 'Venting Explosion that releases all stored temporal energy.',
      mechanics: 'The Chronarch vents their entire Continuum bar in one action. Roll 3d6 for the attack: if any die shows a 1, that target can make a Constitution save (DC = 8 + Prof + INT) to take half damage. If any die shows the maximum value (6), that target is also stunned for 1 round. Every enemy in 15 ft suffers the total of the dice rolled plus Continuum spent as force/temporal damage and is knocked prone as time destabilizes under their feet.'
    }
  ]
};

export default chronarchAbilities;
