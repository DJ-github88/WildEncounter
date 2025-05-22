// Talent trees for the Minstrel class
const minstrelTalentTrees = [
  {
    id: 'harmony',
    name: 'Harmony',
    description: 'Focus on healing and supportive music that empowers allies.',
    icon: '🎵',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'soothing-melody',
        name: 'Soothing Melody',
        description: 'Your healing spells generate 1 additional Cadence point.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎵',
      },
      {
        id: 'resonant-notes',
        name: 'Resonant Notes',
        description: 'Increases the effectiveness of your healing spells by 2%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '✨',
      },
      {
        id: 'lingering-melody',
        name: 'Lingering Melody',
        description: 'Your healing over time effects last 5% longer.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '⏱️',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'harmonic-chorus',
        name: 'Harmonic Chorus',
        description: 'When you reach 5 Cadence points, your next healing spell costs 20% less mana.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['soothing-melody'],
        icon: '🎶',
      },
      {
        id: 'healing-refrain',
        name: 'Healing Refrain',
        description: 'Your healing spells have a 10% chance to apply a small heal over time effect to the target.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['resonant-notes'],
        icon: '💚',
      },
      {
        id: 'crescendo',
        name: 'Crescendo',
        description: 'Your healing spells have a 10% chance to generate an additional Cadence point.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['lingering-melody'],
        icon: '📈',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'rejuvenating-performance',
        name: 'Rejuvenating Performance',
        description: 'Channel a performance that heals all allies within 15 yards for a small amount every 2 seconds for 10 seconds.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['harmonic-chorus', 'healing-refrain'],
        icon: '🎭',
      },
      {
        id: 'harmonious-aura',
        name: 'Harmonious Aura',
        description: 'Your presence increases the healing received by all allies within 20 yards by 3%.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['healing-refrain', 'crescendo'],
        icon: '🌟',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'cadence-mastery',
        name: 'Cadence Mastery',
        description: 'Increases your maximum Cadence points by 1.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['rejuvenating-performance'],
        icon: '🎼',
      },
      {
        id: 'restorative-finale',
        name: 'Restorative Finale',
        description: 'Consume all Cadence points to instantly heal all allies within 20 yards. Healing increases based on Cadence points consumed.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['harmonious-aura'],
        icon: '💫',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'symphony-of-restoration',
        name: 'Symphony of Restoration',
        description: 'Channel a powerful symphony that significantly increases healing done and reduces damage taken by all allies within 30 yards by 20% for 8 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['cadence-mastery', 'restorative-finale'],
        icon: '🎻',
      },
    ],
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Focus on disruptive and damaging music that harms and controls enemies.',
    icon: '🎸',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'dissonant-notes',
        name: 'Dissonant Notes',
        description: 'Your damaging spells generate 1 additional Cadence point.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎵',
      },
      {
        id: 'piercing-tones',
        name: 'Piercing Tones',
        description: 'Increases the damage of your sound-based attacks by 2%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🔊',
      },
      {
        id: 'lingering-discord',
        name: 'Lingering Discord',
        description: 'Your damage over time effects last 5% longer.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '⏱️',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'cacophony',
        name: 'Cacophony',
        description: 'When you reach 5 Cadence points, your next damaging spell deals 20% additional damage.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['dissonant-notes'],
        icon: '📢',
      },
      {
        id: 'discordant-strike',
        name: 'Discordant Strike',
        description: 'Your damaging spells have a 10% chance to reduce the target\'s movement speed by 30% for 3 seconds.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['piercing-tones'],
        icon: '🌀',
      },
      {
        id: 'amplification',
        name: 'Amplification',
        description: 'Your damaging spells have a 10% chance to generate an additional Cadence point.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['lingering-discord'],
        icon: '📈',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'sonic-blast',
        name: 'Sonic Blast',
        description: 'Release a powerful blast of sound that deals damage to all enemies in front of you and has a chance to interrupt spellcasting.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['cacophony', 'discordant-strike'],
        icon: '💥',
      },
      {
        id: 'disruptive-aura',
        name: 'Disruptive Aura',
        description: 'Your presence increases the damage taken by all enemies within 20 yards by 3%.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['discordant-strike', 'amplification'],
        icon: '🌑',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'sonic-barrage',
        name: 'Sonic Barrage',
        description: 'Your sound-based attacks have a 15% chance to deal 30% additional damage.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['sonic-blast'],
        icon: '🔊',
      },
      {
        id: 'destructive-finale',
        name: 'Destructive Finale',
        description: 'Consume all Cadence points to instantly damage all enemies within 20 yards. Damage increases based on Cadence points consumed.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['disruptive-aura'],
        icon: '💥',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'symphony-of-destruction',
        name: 'Symphony of Destruction',
        description: 'Channel a devastating symphony that deals significant damage to all enemies within 30 yards and reduces their casting speed by 50% for 8 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['sonic-barrage', 'destructive-finale'],
        icon: '🎻',
      },
    ],
  },
  {
    id: 'composition',
    name: 'Composition',
    description: 'Focus on complex musical theory and versatile performances that adapt to different situations.',
    icon: '🎼',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'musical-theory',
        name: 'Musical Theory',
        description: 'Increases your maximum Cadence points by 1.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '📚',
      },
      {
        id: 'perfect-pitch',
        name: 'Perfect Pitch',
        description: 'Increases the critical strike chance of all your spells by 1%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎯',
      },
      {
        id: 'versatile-performer',
        name: 'Versatile Performer',
        description: 'Reduces the mana cost of all your spells by 1%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🎭',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'rhythmic-casting',
        name: 'Rhythmic Casting',
        description: 'Reduces the casting time of your spells by 0.1 seconds.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['musical-theory'],
        icon: '⏱️',
      },
      {
        id: 'encore',
        name: 'Encore',
        description: 'After spending Cadence points, you have a 20% chance to regain 1 Cadence point.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['perfect-pitch'],
        icon: '🔄',
      },
      {
        id: 'melodic-inspiration',
        name: 'Melodic Inspiration',
        description: 'Your spells have a 10% chance to inspire you, increasing your casting speed by 10% for 5 seconds.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['versatile-performer'],
        icon: '💫',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'inspiring-anthem',
        name: 'Inspiring Anthem',
        description: 'Perform an anthem that increases the primary attribute of all allies within 20 yards by 5% for 10 minutes.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['rhythmic-casting', 'encore'],
        icon: '🏆',
      },
      {
        id: 'virtuoso',
        name: 'Virtuoso',
        description: 'Increases the effectiveness of your Cadence point spending abilities by 5%.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['encore', 'melodic-inspiration'],
        icon: '🌟',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'improvisation',
        name: 'Improvisation',
        description: 'When you cast a spell, you have a 10% chance to gain Improvisation, making your next spell cost no mana.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['inspiring-anthem'],
        icon: '🎲',
      },
      {
        id: 'grand-finale',
        name: 'Grand Finale',
        description: 'Consume all Cadence points to create an effect based on your current performance stance (healing, damage, or utility).',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['virtuoso'],
        icon: '🎭',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'masterpiece',
        name: 'Masterpiece',
        description: 'Channel your ultimate composition, providing powerful effects to allies and harmful effects to enemies within 30 yards for 15 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['improvisation', 'grand-finale'],
        icon: '👑',
      },
    ],
  }
];

export default minstrelTalentTrees;
