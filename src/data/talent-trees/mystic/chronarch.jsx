// Talent trees for the Chronarch class
const chronarchTalentTrees = [
  {
    id: 'temporal-dominance',
    name: 'Temporal Dominance',
    description: 'Focus on crowd control and area effects. Amplify slowing, freezing, and buffing spells.',
    icon: '⏳',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'time-lock',
        name: 'Time Lock',
        description: 'Increase the duration of your time-stopping abilities.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔒',
        rankDescription: [
          'Your Absolute Stasis (or similar ultimate) duration increases by 1 round.',
          'Your Absolute Stasis duration increases by 1d4 rounds on a roll of 4.',
          'Your Absolute Stasis duration increases by 1d4 rounds on a roll of 3-4.',
          'Your Absolute Stasis duration increases by 1d4 rounds on a roll of 2-4.',
          'Your Absolute Stasis duration increases by 1d6 rounds on a roll of 4-6.'
        ]
      },
      {
        id: 'wave-of-deceleration',
        name: 'Wave of Deceleration',
        description: 'Increase the area of effect of your slowing abilities.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🌊',
        rankDescription: [
          'Your Entropy Wave (Slow) now affects a 20-ft cone (vs 15 ft).',
          'Your Entropy Wave affects a 20-ft cone and slows targets by an additional 1d4 × 5%.',
          'Your Entropy Wave affects a 25-ft cone and slows targets by an additional 1d4 × 5%.',
          'Your Entropy Wave affects a 25-ft cone and slows targets by an additional 1d6 × 5%.',
          'Your Entropy Wave affects a 30-ft cone and slows targets by an additional 1d6 × 5%.'
        ]
      },
      {
        id: 'echo-mastery',
        name: 'Echo Mastery',
        description: 'Generate additional Continuum when reaching the Echo threshold.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔄',
        rankDescription: [
          'Casting a time spell grants +1 extra Continuum when you reach the Echo threshold.',
          'Casting a time spell grants +1d4 extra Continuum on a roll of 4 when you reach the Echo threshold.',
          'Casting a time spell grants +1d4 extra Continuum on a roll of 3-4 when you reach the Echo threshold.',
          'Casting a time spell grants +1d4 extra Continuum on a roll of 2-4 when you reach the Echo threshold.',
          'Casting a time spell grants +1d6 extra Continuum on a roll of 3-6 when you reach the Echo threshold.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'paradox-trap',
        name: 'Paradox Trap',
        description: 'Place temporal traps that root enemies in place.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['time-lock'],
        icon: '⏱️',
        rankDescription: [
          'Place a temporal trap on a square; when an enemy steps on it, they are rooted for 1 round.',
          'Place a temporal trap on a square; when an enemy steps on it, they are rooted for 1d4 rounds.',
          'Place a temporal trap on a square; when an enemy steps on it, they are rooted for 1d6 rounds.'
        ]
      },
      {
        id: 'temporal-echo',
        name: 'Temporal Echo',
        description: 'Your damaging spells may echo through time, striking again.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['wave-of-deceleration'],
        icon: '🔄',
        rankDescription: [
          'Roll 1d10 when casting a damaging spell. On a 10, the spell echoes, dealing 1d6 × 10% of its damage again after 1 round.',
          'Roll 1d10 when casting a damaging spell. On a 9-10, the spell echoes, dealing 1d8 × 10% of its damage again after 1 round.',
          'Roll 1d10 when casting a damaging spell. On an 8-10, the spell echoes, dealing 1d10 × 10% of its damage again after 1 round.'
        ]
      },
      {
        id: 'time-distortion',
        name: 'Time Distortion',
        description: 'Create areas of distorted time that affect enemy movement.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['echo-mastery'],
        icon: '🌀',
        rankDescription: [
          'Create a 10-ft radius area of distorted time for 1d4 rounds. Enemies within move at half speed.',
          'Create a 15-ft radius area of distorted time for 1d4 rounds. Enemies within move at half speed.',
          'Create a 20-ft radius area of distorted time for 1d6 rounds. Enemies within move at half speed.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'momentum-amplification',
        name: 'Momentum Amplification',
        description: 'Enhance the effects of reaching the Momentum threshold.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['paradox-trap'],
        icon: '⚡',
        rankDescription: [
          'When you reach the Momentum threshold, your next spell costs 1d4 less Continuum to cast.',
          'When you reach the Momentum threshold, your next spell costs 1d6 less Continuum to cast.',
          'When you reach the Momentum threshold, your next spell costs 1d8 less Continuum to cast and has its effect increased by 25%.'
        ]
      },
      {
        id: 'absolute-stasis',
        name: 'Absolute Stasis',
        description: 'Freeze enemies in time, preventing them from acting.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['temporal-echo'],
        icon: '⏸️',
        rankDescription: [
          'When the Stasis threshold is reached, you can cast this ultimate effect. All enemies within 20 ft must make a Constitution save (DC = 8 + Prof + INT). On a failure, they are paralyzed in time for 1d4 rounds. On success, they are slowed for 2 rounds.'
        ]
      },
      {
        id: 'temporal-control',
        name: 'Temporal Control',
        description: 'Gain greater control over your time manipulation abilities.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['time-distortion'],
        icon: '⌚',
        rankDescription: [
          'Your time-based control effects last 1d4 additional rounds on a roll of 4.',
          'Your time-based control effects last 1d4 additional rounds on a roll of 3-4.',
          'Your time-based control effects last 1d4 additional rounds on a roll of 2-4.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'temporal-cascade',
        name: 'Temporal Cascade',
        description: 'Release a cascade of temporal energy that damages and slows enemies.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['momentum-amplification', 'absolute-stasis'],
        icon: '🌊',
        rankDescription: [
          'Release a cascade of temporal energy that deals 3d8 damage to all enemies in front of you and slows their movement by 1d4 × 15% for 1d4 rounds.'
        ]
      },
      {
        id: 'chronal-entanglement',
        name: 'Chronal Entanglement',
        description: 'Delay an enemy\'s turn by entangling them in time.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['absolute-stasis', 'temporal-control'],
        icon: '⏳',
        rankDescription: [
          'Once per battle, when you reach Stasis, you may automatically delay one enemy\'s turn by 1 round.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'intelligence-amplification',
        name: 'Intelligence Amplification',
        description: 'Your Intelligence enhances your temporal control abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['temporal-cascade'],
        icon: '🧠',
        rankDescription: [
          'Add your Intelligence modifier to the duration of all your temporal control effects.',
          'Add your Intelligence modifier to the duration and effectiveness of all your temporal control effects.',
          'Add twice your Intelligence modifier to the duration and effectiveness of all your temporal control effects.'
        ]
      },
      {
        id: 'time-lord',
        name: 'Time Lord',
        description: 'Achieve mastery over time, gaining powerful control abilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['temporal-cascade', 'chronal-entanglement'],
        icon: '👑',
        rankDescription: [
          'Your time control abilities have their duration increased by 1d6 rounds and their area of effect increased by 1d6 × 5 feet.'
        ]
      },
      {
        id: 'stasis-mastery',
        name: 'Stasis Mastery',
        description: 'Enhance the effects of reaching the Stasis threshold.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['chronal-entanglement'],
        icon: '⏱️',
        rankDescription: [
          'When you reach the Stasis threshold, your next spell has its save DC increased by 2.',
          'When you reach the Stasis threshold, your next spell has its save DC increased by 4.',
          'When you reach the Stasis threshold, your next spell has its save DC increased by 6 and automatically critically hits if applicable.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'temporal-mastery',
        name: 'Temporal Mastery',
        description: 'Achieve complete mastery over temporal magic.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['intelligence-amplification', 'time-lord'],
        icon: '🌌',
        rankDescription: [
          'Your time-based spells have a 1d10 × 10% chance to not consume Continuum. On a roll of 10, the spell is cast at maximum effect.',
          'Your time-based spells have a 1d8 × 10% chance to not consume Continuum. On a roll of 7-8, the spell is cast at maximum effect.',
          'Your time-based spells have a 1d6 × 10% chance to not consume Continuum. On a roll of 5-6, the spell is cast at maximum effect.'
        ]
      },
      {
        id: 'time-stop',
        name: 'Time Stop',
        description: 'Stop time completely for a brief period, allowing you to act freely.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['time-lord', 'stasis-mastery'],
        icon: '⏹️',
        rankDescription: [
          'Once per day, stop time for 1d4 rounds. During this time, only you can act. You cannot directly affect other creatures during this time.',
          'Once per day, stop time for 1d6 rounds. During this time, only you can act. You cannot directly affect other creatures during this time.',
          'Once per day, stop time for 1d8 rounds. During this time, only you can act. You can affect other creatures during this time, but they get a Constitution save (DC = 10 + Prof + INT) to resist.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'chronokinetic-ascendance',
        name: 'Chronokinetic Ascendance',
        description: 'Ascend to a higher state of temporal mastery, gaining godlike control over time.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['temporal-mastery', 'time-stop'],
        icon: '🌟',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you ascend to a higher state of temporal mastery. During this time, you exist partially outside of normal time. You gain the following benefits: immunity to time-based effects; all your time-based spells cost 50% less Continuum; you can take two turns for each of your normal turns; and you can rewind time by 1d4 rounds once during this effect (returning all creatures to their positions and health values from that time, but you retain knowledge of what originally happened).'
        ]
      },
    ],
  },
  {
    id: 'chronal-stride',
    name: 'Chronal Stride',
    description: 'Focus on mobility and teleportation. Amplify blink, haste, and time-jump abilities.',
    icon: '⚡',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'time-step',
        name: 'Time Step',
        description: 'Enhance your ability to step through time for short distances.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👣',
        rankDescription: [
          'Your Blink ability distance increases by 5 feet.',
          'Your Blink ability distance increases by 5 feet and has a 1d20 chance to not consume Continuum on a roll of 20.',
          'Your Blink ability distance increases by 10 feet and has a 1d20 chance to not consume Continuum on a roll of 19-20.',
          'Your Blink ability distance increases by 10 feet and has a 1d20 chance to not consume Continuum on a roll of 18-20.',
          'Your Blink ability distance increases by 15 feet and has a 1d20 chance to not consume Continuum on a roll of 17-20.'
        ]
      },
      {
        id: 'accelerated-movement',
        name: 'Accelerated Movement',
        description: 'Accelerate your movement speed by manipulating your personal timeline.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🏃',
        rankDescription: [
          'Your movement speed increases by 5 feet.',
          'Your movement speed increases by 10 feet.',
          'Your movement speed increases by 15 feet.',
          'Your movement speed increases by 20 feet.',
          'Your movement speed increases by 25 feet and you gain advantage on Dexterity (Acrobatics) checks.'
        ]
      },
      {
        id: 'momentum-generation',
        name: 'Momentum Generation',
        description: 'Generate Continuum through movement.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '⚡',
        rankDescription: [
          'Gain 1 Continuum when you move at least 20 feet in a turn.',
          'Gain 1d4 Continuum on a roll of 4 when you move at least 20 feet in a turn.',
          'Gain 1d4 Continuum on a roll of 3-4 when you move at least 20 feet in a turn.',
          'Gain 1d4 Continuum on a roll of 2-4 when you move at least 20 feet in a turn.',
          'Gain 1d6 Continuum on a roll of 3-6 when you move at least 20 feet in a turn.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'temporal-dash',
        name: 'Temporal Dash',
        description: 'Dash through time to cover great distances instantly.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['time-step'],
        icon: '💨',
        rankDescription: [
          'As a bonus action, teleport up to 30 feet to a visible location. Roll 1d20; on a 20, this doesn\'t consume your bonus action.',
          'As a bonus action, teleport up to 40 feet to a visible location. Roll 1d20; on a 19-20, this doesn\'t consume your bonus action.',
          'As a bonus action, teleport up to 50 feet to a visible location. Roll 1d20; on an 18-20, this doesn\'t consume your bonus action.'
        ]
      },
      {
        id: 'time-flux',
        name: 'Time Flux',
        description: 'Create a field of accelerated time around yourself, enhancing your speed.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['accelerated-movement'],
        icon: '⏩',
        rankDescription: [
          'Create a 5-foot radius field of accelerated time around yourself for 1d4 rounds. You and allies within the field gain +10 feet of movement speed.',
          'Create a 10-foot radius field of accelerated time around yourself for 1d4 rounds. You and allies within the field gain +15 feet of movement speed.',
          'Create a 15-foot radius field of accelerated time around yourself for 1d6 rounds. You and allies within the field gain +20 feet of movement speed.'
        ]
      },
      {
        id: 'continuum-surge',
        name: 'Continuum Surge',
        description: 'Generate a surge of Continuum when you reach the Momentum threshold.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['momentum-generation'],
        icon: '🔋',
        rankDescription: [
          'When you reach the Momentum threshold, gain 1d4 additional Continuum.',
          'When you reach the Momentum threshold, gain 1d6 additional Continuum.',
          'When you reach the Momentum threshold, gain 1d8 additional Continuum.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'time-skip',
        name: 'Time Skip',
        description: 'Skip forward in time to avoid attacks and reposition.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['temporal-dash'],
        icon: '⏭️',
        rankDescription: [
          'When hit by an attack, roll 1d20. On a 20, you can use your reaction to teleport up to 15 feet and avoid the attack.',
          'When hit by an attack, roll 1d20. On a 19-20, you can use your reaction to teleport up to 20 feet and avoid the attack.',
          'When hit by an attack, roll 1d20. On an 18-20, you can use your reaction to teleport up to 25 feet and avoid the attack.'
        ]
      },
      {
        id: 'chronal-acceleration',
        name: 'Chronal Acceleration',
        description: 'Accelerate yourself through time, gaining an additional action.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['time-flux'],
        icon: '⚡',
        rankDescription: [
          'When the Momentum threshold is reached, you can cast this ultimate effect. For 1d4 rounds, you gain an additional action on each of your turns. At the end of this effect, roll 1d6; on a 1, you are slowed for 1 round.'
        ]
      },
      {
        id: 'temporal-attunement',
        name: 'Temporal Attunement',
        description: 'Attune yourself to the flow of time, enhancing your mobility abilities.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['continuum-surge'],
        icon: '🔄',
        rankDescription: [
          'Your time-based mobility abilities have their range increased by 1d4 × 5 feet on a roll of 4.',
          'Your time-based mobility abilities have their range increased by 1d4 × 5 feet on a roll of 3-4.',
          'Your time-based mobility abilities have their range increased by 1d4 × 5 feet on a roll of 2-4.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'time-phase',
        name: 'Time Phase',
        description: 'Phase in and out of time to avoid damage.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['time-skip', 'chronal-acceleration'],
        icon: '👻',
        rankDescription: [
          'When you take damage, roll 1d20. On an 18-20, you phase out of time briefly and the damage is reduced by 1d8 × 10%.'
        ]
      },
      {
        id: 'temporal-echo',
        name: 'Temporal Echo',
        description: 'Create an echo of yourself from another timeline that mimics your actions.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['chronal-acceleration', 'temporal-attunement'],
        icon: '🔄',
        rankDescription: [
          'Create a temporal echo of yourself for 1d4 rounds. The echo mimics your actions but deals only 1d6 × 10% of your normal damage. Roll 1d20; on a 20, the echo lasts for 1d4 additional rounds.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'dexterity-amplification',
        name: 'Dexterity Amplification',
        description: 'Your Dexterity enhances your mobility abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['time-phase'],
        icon: '🏃',
        rankDescription: [
          'Add your Dexterity modifier to the range of all your teleportation abilities.',
          'Add your Dexterity modifier to the range and effectiveness of all your mobility abilities.',
          'Add twice your Dexterity modifier to the range and effectiveness of all your mobility abilities.'
        ]
      },
      {
        id: 'chronal-master',
        name: 'Chronal Master',
        description: 'Achieve mastery over time-based movement, gaining powerful mobility abilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['time-phase', 'temporal-echo'],
        icon: '👑',
        rankDescription: [
          'Your teleportation abilities have their range increased by 1d6 × 10 feet and no longer require line of sight to the destination (though the destination must still be a location you\'ve seen before).'
        ]
      },
      {
        id: 'momentum-mastery',
        name: 'Momentum Mastery',
        description: 'Enhance the effects of reaching the Momentum threshold.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['temporal-echo'],
        icon: '⚡',
        rankDescription: [
          'When you reach the Momentum threshold, your movement speed increases by 1d4 × 10 feet for 1d4 rounds.',
          'When you reach the Momentum threshold, your movement speed increases by 1d6 × 10 feet for 1d4 rounds.',
          'When you reach the Momentum threshold, your movement speed increases by 1d8 × 10 feet for 1d6 rounds and you can teleport as a bonus action during this time.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'chronal-mastery',
        name: 'Chronal Mastery',
        description: 'Achieve complete mastery over time-based movement.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['dexterity-amplification', 'chronal-master'],
        icon: '🌌',
        rankDescription: [
          'Your teleportation abilities have a 1d10 × 10% chance to not consume Continuum. On a roll of 10, you can immediately teleport again as a free action.',
          'Your teleportation abilities have a 1d8 × 10% chance to not consume Continuum. On a roll of 7-8, you can immediately teleport again as a free action.',
          'Your teleportation abilities have a 1d6 × 10% chance to not consume Continuum. On a roll of 5-6, you can immediately teleport again as a free action.'
        ]
      },
      {
        id: 'time-walk',
        name: 'Time Walk',
        description: 'Walk through time itself, taking an extra turn.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['chronal-master', 'momentum-mastery'],
        icon: '👣',
        rankDescription: [
          'Once per day, take an extra turn immediately after your current turn. Roll 1d20; on a 1, you are slowed for 1 round after your extra turn.',
          'Once per day, take an extra turn immediately after your current turn. Roll 1d20; on a 1, you are slowed for 1 round after your extra turn. On a 20, you can take yet another extra turn.',
          'Twice per day, take an extra turn immediately after your current turn. Roll 1d20; on a 1, you are slowed for 1 round after your extra turn. On a 20, you can take yet another extra turn.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'chronal-ascendance',
        name: 'Chronal Ascendance',
        description: 'Ascend to a higher state of temporal mobility, gaining godlike speed and teleportation abilities.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['chronal-mastery', 'time-walk'],
        icon: '🌟',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you ascend to a higher state of temporal mobility. During this time, you exist partially outside of normal time. You gain the following benefits: your movement speed is tripled; you can teleport as a bonus action with no Continuum cost; you can take two turns for each of your normal turns; and you are immune to opportunity attacks and effects that would reduce your speed or prevent you from moving.'
        ]
      },
    ],
  },
  {
    id: 'time-ward',
    name: 'Time Ward',
    description: 'Focus on defense and healing. Amplify rewind, temporal shield, and time-reversal abilities.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'temporal-shield',
        name: 'Temporal Shield',
        description: 'Create a shield of temporal energy that absorbs damage.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          'Your Temporal Shield ability absorbs an additional 5 damage.',
          'Your Temporal Shield ability absorbs an additional 1d6 + 5 damage.',
          'Your Temporal Shield ability absorbs an additional 2d6 + 5 damage.',
          'Your Temporal Shield ability absorbs an additional 3d6 + 5 damage.',
          'Your Temporal Shield ability absorbs an additional 4d6 + 5 damage and lasts 1 additional round.'
        ]
      },
      {
        id: 'wound-reversal',
        name: 'Wound Reversal',
        description: 'Reverse time around wounds to heal damage.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💉',
        rankDescription: [
          'Your healing abilities restore an additional 1d4 hit points.',
          'Your healing abilities restore an additional 1d6 hit points.',
          'Your healing abilities restore an additional 1d8 hit points.',
          'Your healing abilities restore an additional 1d10 hit points.',
          'Your healing abilities restore an additional 1d12 hit points and have their range increased by 10 feet.'
        ]
      },
      {
        id: 'echo-regeneration',
        name: 'Echo Regeneration',
        description: 'Generate additional healing when reaching the Echo threshold.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔄',
        rankDescription: [
          'When you reach the Echo threshold, you heal 1d4 hit points.',
          'When you reach the Echo threshold, you heal 1d6 hit points.',
          'When you reach the Echo threshold, you heal 1d8 hit points.',
          'When you reach the Echo threshold, you heal 1d10 hit points.',
          'When you reach the Echo threshold, you heal 1d12 hit points and gain 1d4 temporary hit points.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'temporal-barrier',
        name: 'Temporal Barrier',
        description: 'Create a barrier of slowed time that reduces incoming damage.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['temporal-shield'],
        icon: '🧱',
        rankDescription: [
          'Create a temporal barrier around yourself for 1d4 rounds. While the barrier is active, you take 1d6 × 5% less damage from all sources.',
          'Create a temporal barrier around yourself for 1d4 rounds. While the barrier is active, you take 1d8 × 5% less damage from all sources.',
          'Create a temporal barrier around yourself for 1d6 rounds. While the barrier is active, you take 1d10 × 5% less damage from all sources.'
        ]
      },
      {
        id: 'rewind',
        name: 'Rewind',
        description: 'Rewind time around a target to restore them to a previous state.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['wound-reversal'],
        icon: '⏪',
        rankDescription: [
          'Target a creature and rewind their personal timeline. They heal for 2d6 hit points and have one negative condition removed.',
          'Target a creature and rewind their personal timeline. They heal for 3d6 hit points and have one negative condition removed.',
          'Target a creature and rewind their personal timeline. They heal for 4d6 hit points and have two negative conditions removed.'
        ]
      },
      {
        id: 'temporal-anchor',
        name: 'Temporal Anchor',
        description: 'Create an anchor in time that you can return to if needed.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['echo-regeneration'],
        icon: '⚓',
        rankDescription: [
          'Create a temporal anchor at your current location. For the next 1d4 rounds, you can use your reaction to return to that location with 1d4 × 10% of your missing hit points restored.',
          'Create a temporal anchor at your current location. For the next 1d6 rounds, you can use your reaction to return to that location with 1d6 × 10% of your missing hit points restored.',
          'Create a temporal anchor at your current location. For the next 1d8 rounds, you can use your reaction to return to that location with 1d8 × 10% of your missing hit points restored.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'stasis-field',
        name: 'Stasis Field',
        description: 'Create a field of stasis that prevents damage and healing.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['temporal-barrier'],
        icon: '⏸️',
        rankDescription: [
          'Target a creature and place them in stasis for 1d4 rounds. While in stasis, they cannot take actions but are immune to all damage and cannot be healed.',
          'Target a creature and place them in stasis for 1d6 rounds. While in stasis, they cannot take actions but are immune to all damage and cannot be healed.',
          'Target a creature and place them in stasis for 1d8 rounds. While in stasis, they cannot take actions but are immune to all damage and cannot be healed. When the stasis ends, they heal for 2d6 hit points.'
        ]
      },
      {
        id: 'time-reversal',
        name: 'Time Reversal',
        description: 'Reverse time to undo recent damage and effects.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['rewind'],
        icon: '⏮️',
        rankDescription: [
          'When the Echo threshold is reached, you can cast this ultimate effect. Target a creature and reverse time around them, restoring them to their state from 1d4 rounds ago (including position, hit points, and conditions).'
        ]
      },
      {
        id: 'temporal-resilience',
        name: 'Temporal Resilience',
        description: 'Gain resilience against time-based effects and damage.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['temporal-anchor'],
        icon: '🛡️',
        rankDescription: [
          'Gain resistance to time-based damage and effects. Time-based control effects have their duration reduced by 1d4 rounds on a roll of 4.',
          'Gain resistance to time-based damage and effects. Time-based control effects have their duration reduced by 1d4 rounds on a roll of 3-4.',
          'Gain resistance to time-based damage and effects. Time-based control effects have their duration reduced by 1d4 rounds on a roll of 2-4.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'temporal-restoration',
        name: 'Temporal Restoration',
        description: 'Restore a creature to a previous state in time, healing them significantly.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['stasis-field', 'time-reversal'],
        icon: '🔄',
        rankDescription: [
          'Target a creature and restore them to a previous state in time. They heal for 4d8 hit points and have all negative conditions removed.'
        ]
      },
      {
        id: 'time-bubble',
        name: 'Time Bubble',
        description: 'Create a bubble of altered time that protects allies and hinders enemies.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['time-reversal', 'temporal-resilience'],
        icon: '🫧',
        rankDescription: [
          'Create a 15-foot radius bubble of altered time for 1d6 rounds. Allies within the bubble gain 1d6 temporary hit points each round and have their movement speed increased by 10 feet. Enemies within the bubble have their movement speed reduced by 10 feet and take 1d6 force damage each round.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'constitution-amplification',
        name: 'Constitution Amplification',
        description: 'Your Constitution enhances your defensive abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['temporal-restoration'],
        icon: '💪',
        rankDescription: [
          'Add your Constitution modifier to the amount of damage absorbed by your temporal shields.',
          'Add your Constitution modifier to the amount of damage absorbed by your temporal shields and to the amount of healing from your time-reversal abilities.',
          'Add twice your Constitution modifier to the amount of damage absorbed by your temporal shields and to the amount of healing from your time-reversal abilities.'
        ]
      },
      {
        id: 'time-warden',
        name: 'Time Warden',
        description: 'Achieve mastery over time-based defense, gaining powerful protective abilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['temporal-restoration', 'time-bubble'],
        icon: '👑',
        rankDescription: [
          'Your temporal shields and barriers have their duration increased by 1d6 rounds and their effectiveness increased by 1d6 × 10%.'
        ]
      },
      {
        id: 'echo-mastery',
        name: 'Echo Mastery',
        description: 'Enhance the effects of reaching the Echo threshold.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['time-bubble'],
        icon: '🔄',
        rankDescription: [
          'When you reach the Echo threshold, you and allies within 10 feet gain 1d6 temporary hit points.',
          'When you reach the Echo threshold, you and allies within 15 feet gain 1d8 temporary hit points.',
          'When you reach the Echo threshold, you and allies within 20 feet gain 1d10 temporary hit points and have one negative condition removed.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'temporal-mastery',
        name: 'Temporal Mastery',
        description: 'Achieve complete mastery over time-based defense.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['constitution-amplification', 'time-warden'],
        icon: '🌌',
        rankDescription: [
          'Your defensive time abilities have a 1d10 × 10% chance to not consume Continuum. On a roll of 10, the ability is cast at maximum effect.',
          'Your defensive time abilities have a 1d8 × 10% chance to not consume Continuum. On a roll of 7-8, the ability is cast at maximum effect.',
          'Your defensive time abilities have a 1d6 × 10% chance to not consume Continuum. On a roll of 5-6, the ability is cast at maximum effect.'
        ]
      },
      {
        id: 'time-loop',
        name: 'Time Loop',
        description: 'Create a loop in time that allows you to avoid death.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['time-warden', 'echo-mastery'],
        icon: '♾️',
        rankDescription: [
          'Once per day, when you would be reduced to 0 hit points, you can instead create a time loop that returns you to the start of your previous turn with 1d4 × 10% of your maximum hit points.',
          'Once per day, when you would be reduced to 0 hit points, you can instead create a time loop that returns you to the start of your previous turn with 1d6 × 10% of your maximum hit points.',
          'Twice per day, when you would be reduced to 0 hit points, you can instead create a time loop that returns you to the start of your previous turn with 1d8 × 10% of your maximum hit points.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'temporal-transcendence',
        name: 'Temporal Transcendence',
        description: 'Transcend the normal limitations of time, gaining godlike defensive abilities.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['temporal-mastery', 'time-loop'],
        icon: '🌟',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you transcend the normal limitations of time. During this time, you exist partially outside of normal time. You gain the following benefits: immunity to all damage for 1d4 rounds; the ability to cast defensive time abilities with no Continuum cost; the ability to heal yourself or an ally for 4d10 hit points as a bonus action once during this effect; and the ability to create a 30-foot radius time bubble that slows enemies to half speed and grants allies advantage on all saving throws.'
        ]
      },
    ],
  }
];

export default chronarchTalentTrees;
