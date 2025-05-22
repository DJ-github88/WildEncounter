// Talent trees for the Chronarch class
const chronarchTalentTrees = [
  {
    id: 'temporal-manipulation',
    name: 'Temporal Manipulation',
    description: 'Focus on manipulating the flow of time to control the battlefield.',
    icon: '⏳',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'temporal-attunement',
        name: 'Temporal Attunement',
        description: 'Your spells generate 1 additional Continuum point.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⏰',
      },
      {
        id: 'time-warp',
        name: 'Time Warp',
        description: 'Increases the duration of your beneficial temporal effects by 5%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🌀',
      },
      {
        id: 'chrono-vision',
        name: 'Chrono Vision',
        description: 'Increases your spell critical strike chance by 1%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '👁️',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'time-flux',
        name: 'Time Flux',
        description: 'When you reach 10 Continuum points, your next spell costs 20% less mana.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['temporal-attunement'],
        icon: '🌊',
      },
      {
        id: 'temporal-echo',
        name: 'Temporal Echo',
        description: 'Your damaging spells have a 10% chance to echo, dealing 30% of their damage again after 2 seconds.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['time-warp'],
        icon: '🔄',
      },
      {
        id: 'precognition',
        name: 'Precognition',
        description: 'Increases your dodge chance by 1%.',
        maxRank: 5,
        position: { row: 1, col: 4 },
        requires: ['chrono-vision'],
        icon: '🔮',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'time-stop',
        name: 'Time Stop',
        description: 'Freeze an enemy in time, preventing them from acting but also making them immune to damage for 5 seconds. Consumes 15 Continuum.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['time-flux', 'temporal-echo'],
        icon: '⏸️',
      },
      {
        id: 'paradox-shield',
        name: 'Paradox Shield',
        description: 'Create a temporal barrier around yourself that absorbs damage. Shield strength increases with Continuum points.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['temporal-echo', 'precognition'],
        icon: '🛡️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'temporal-acceleration',
        name: 'Temporal Acceleration',
        description: 'Accelerate time around you, increasing your casting and movement speed by 5% for each 10 Continuum points you have.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['time-stop'],
        icon: '⚡',
      },
      {
        id: 'rewind',
        name: 'Rewind',
        description: 'Rewind time for yourself or an ally, returning them to the health and position they were at 4 seconds ago. Consumes 20 Continuum.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['paradox-shield'],
        icon: '⏪',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'time-dilation',
        name: 'Time Dilation',
        description: 'Create a field of dilated time around you, slowing enemies by 50% and increasing ally casting and movement speed by 30% for 10 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['temporal-acceleration', 'rewind'],
        icon: '🕰️',
      },
    ],
  },
  {
    id: 'paradox',
    name: 'Paradox',
    description: 'Harness the power of temporal paradoxes to create devastating effects.',
    icon: '🌌',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'paradoxical-energy',
        name: 'Paradoxical Energy',
        description: 'Your damaging spells have a 5% chance to generate 2 additional Continuum points.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✨',
      },
      {
        id: 'temporal-anomaly',
        name: 'Temporal Anomaly',
        description: 'Increases the damage of your time-based spells by 2%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💥',
      },
      {
        id: 'causality-breach',
        name: 'Causality Breach',
        description: 'Your spells have a 5% chance to create a small temporal rift that deals damage to nearby enemies.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🌪️',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'temporal-surge',
        name: 'Temporal Surge',
        description: 'When you spend Continuum points, you have a 20% chance to gain 2 Continuum points.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['paradoxical-energy'],
        icon: '🔄',
      },
      {
        id: 'entropy',
        name: 'Entropy',
        description: 'Your time-based damage over time effects tick 10% faster.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['temporal-anomaly'],
        icon: '⏱️',
      },
      {
        id: 'reality-fracture',
        name: 'Reality Fracture',
        description: 'Your spells have a 10% chance to create a reality fracture at the target\'s location, dealing damage to all enemies within 8 yards.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['causality-breach'],
        icon: '💔',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'temporal-cascade',
        name: 'Temporal Cascade',
        description: 'Release a cascade of temporal energy that deals damage to all enemies in front of you and slows their movement speed by 50% for 4 seconds.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['temporal-surge', 'entropy'],
        icon: '🌊',
      },
      {
        id: 'paradox-mastery',
        name: 'Paradox Mastery',
        description: 'Increases the damage of your paradox abilities by 5% and reduces their Continuum cost by 10%.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['entropy', 'reality-fracture'],
        icon: '🧠',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'temporal-duplicity',
        name: 'Temporal Duplicity',
        description: 'Create a temporal duplicate of yourself that casts a copy of your damaging spells at 40% effectiveness for 10 seconds.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['temporal-cascade'],
        icon: '👥',
      },
      {
        id: 'chrono-blast',
        name: 'Chrono Blast',
        description: 'Blast the target with concentrated temporal energy, dealing heavy damage and consuming Continuum points for additional damage.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['paradox-mastery'],
        icon: '💥',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'temporal-collapse',
        name: 'Temporal Collapse',
        description: 'Create a collapsing temporal anomaly at the target location, pulling in enemies and dealing massive damage over 6 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['temporal-duplicity', 'chrono-blast'],
        icon: '🌌',
      },
    ],
  },
  {
    id: 'chronology',
    name: 'Chronology',
    description: 'Master the fundamental laws of time to enhance your abilities and support allies.',
    icon: '🕰️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'temporal-insight',
        name: 'Temporal Insight',
        description: 'Increases your Intelligence by 1%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '📚',
      },
      {
        id: 'time-efficiency',
        name: 'Time Efficiency',
        description: 'Reduces the casting time of your spells by 0.1 seconds.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⏱️',
      },
      {
        id: 'continuum-mastery',
        name: 'Continuum Mastery',
        description: 'Increases your maximum Continuum points by 2.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔄',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'foresight',
        name: 'Foresight',
        description: 'Increases your chance to avoid harmful effects by 2%.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['temporal-insight'],
        icon: '👁️',
      },
      {
        id: 'hastened-casting',
        name: 'Hastened Casting',
        description: 'Your spells have a 10% chance to grant you Temporal Haste, increasing your casting speed by 20% for 6 seconds.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['time-efficiency'],
        icon: '⚡',
      },
      {
        id: 'temporal-recovery',
        name: 'Temporal Recovery',
        description: 'When you spend Continuum points, you recover 1% of your maximum mana.',
        maxRank: 5,
        position: { row: 1, col: 4 },
        requires: ['continuum-mastery'],
        icon: '💧',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'temporal-shift',
        name: 'Temporal Shift',
        description: 'Instantly teleport yourself to a location within 20 yards, leaving behind a temporal echo that returns you to your original location after 3 seconds if activated again.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['foresight', 'hastened-casting'],
        icon: '🌀',
      },
      {
        id: 'time-lord',
        name: 'Time Lord',
        description: 'Increases the effectiveness of your Continuum-spending abilities by 4%.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['hastened-casting', 'temporal-recovery'],
        icon: '👑',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'borrowed-time',
        name: 'Borrowed Time',
        description: 'When your health drops below 20%, automatically gain a shield that absorbs damage equal to 30% of your maximum health. This effect can occur once every 3 minutes.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['temporal-shift'],
        icon: '🛡️',
      },
      {
        id: 'time-spiral',
        name: 'Time Spiral',
        description: 'Your spells have a 15% chance to not consume Continuum points when cast.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['time-lord'],
        icon: '🌀',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'temporal-mastery',
        name: 'Temporal Mastery',
        description: 'For 15 seconds, all your spells cost no mana and generate double Continuum points.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['borrowed-time', 'time-spiral'],
        icon: '⌛',
      },
    ],
  }
];

export default chronarchTalentTrees;
