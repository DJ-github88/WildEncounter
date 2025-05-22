// Talent trees for the Fate Weaver class
const fateWeaverTalentTrees = [
  {
    id: 'destiny',
    name: 'Destiny',
    description: 'Manipulate the threads of fate to guide allies toward favorable outcomes.',
    icon: '🧵',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'fated-protection',
        name: 'Fated Protection',
        description: 'Your protective spells may make the target immune to the next harmful effect they would suffer.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          'Roll 1d20 when casting a protective spell. On a 20, the target becomes immune to the next harmful effect they would suffer.',
          'Roll 1d20 when casting a protective spell. On a 19-20, the target becomes immune to the next harmful effect they would suffer.',
          'Roll 1d20 when casting a protective spell. On an 18-20, the target becomes immune to the next harmful effect they would suffer.',
          'Roll 1d20 when casting a protective spell. On a 17-20, the target becomes immune to the next harmful effect they would suffer.',
          'Roll 1d20 when casting a protective spell. On a 16-20, the target becomes immune to the next harmful effect they would suffer.'
        ]
      },
      {
        id: 'thread-of-fortune',
        name: 'Thread of Fortune',
        description: 'Improves your chance to land critical healing with your spells.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🍀',
        rankDescription: [
          'Roll 1d20 when casting a healing spell. On a 20, the spell automatically critically heals.',
          'Roll 1d20 when casting a healing spell. On a 19-20, the spell automatically critically heals.',
          'Roll 1d20 when casting a healing spell. On an 18-20, the spell automatically critically heals.',
          'Roll 1d20 when casting a healing spell. On a 17-20, the spell automatically critically heals.',
          'Roll 1d20 when casting a healing spell. On a 16-20, the spell automatically critically heals.'
        ]
      },
      {
        id: 'destiny-weaving',
        name: 'Destiny Weaving',
        description: 'Your spells generate additional Fate resource.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🧵',
        rankDescription: [
          'Your spells generate 1d4 additional Fate resource on a roll of 4.',
          'Your spells generate 1d4 additional Fate resource on a roll of 3-4.',
          'Your spells generate 1d4 additional Fate resource on a roll of 2-4.',
          'Your spells generate 1d4 additional Fate resource.',
          'Your spells generate 1d6 additional Fate resource.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'fated-ally',
        name: 'Fated Ally',
        description: 'Mark an ally as Fated, granting them combat advantages.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['fated-protection'],
        icon: '🤝',
        rankDescription: [
          'Mark an ally as Fated for 1d4 rounds. They roll with advantage on attack rolls and saving throws on a roll of 19-20.',
          'Mark an ally as Fated for 1d6 rounds. They roll with advantage on attack rolls and saving throws on a roll of 18-20.',
          'Mark an ally as Fated for 1d8 rounds. They roll with advantage on attack rolls and saving throws on a roll of 17-20.'
        ]
      },
      {
        id: 'twist-of-fate',
        name: 'Twist of Fate',
        description: 'When an ally falls below 30% health, they receive enhanced healing.',
        maxRank: 1,
        position: { row: 1, col: 2 },
        requires: ['thread-of-fortune'],
        icon: '🔄',
        rankDescription: [
          'When an ally falls below 30% health, they receive 1d6 × 5% increased healing for 1d4 rounds. This effect can occur once per encounter per ally.'
        ]
      },
      {
        id: 'fateful-convergence',
        name: 'Fateful Convergence',
        description: 'Your healing spells may apply a heal over time effect to the target.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['destiny-weaving'],
        icon: '✨',
        rankDescription: [
          'Roll 1d10 when casting a healing spell. On a 10, apply a heal over time effect that restores 1d6 hit points per round for 1d4 rounds.',
          'Roll 1d10 when casting a healing spell. On a 9-10, apply a heal over time effect that restores 1d8 hit points per round for 1d4 rounds.',
          'Roll 1d10 when casting a healing spell. On an 8-10, apply a heal over time effect that restores 1d10 hit points per round for 1d6 rounds.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'destined-moment',
        name: 'Destined Moment',
        description: 'Create a moment of destiny for an ally, restoring health and increasing their damage.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['fated-ally', 'twist-of-fate'],
        icon: '⏱️',
        rankDescription: [
          'Instantly restore 2d8 hit points to an ally and increase their damage by 1d6 × 5% for 1d4 rounds.'
        ]
      },
      {
        id: 'threads-of-life',
        name: 'Threads of Life',
        description: 'Your healing spells may apply a protective shield to the target.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['twist-of-fate', 'fateful-convergence'],
        icon: '🧬',
        rankDescription: [
          'Roll 1d10 when casting a healing spell. On a 10, apply a shield that absorbs 1d6 × 10% of the amount healed in damage.',
          'Roll 1d10 when casting a healing spell. On a 9-10, apply a shield that absorbs 1d8 × 10% of the amount healed in damage.',
          'Roll 1d10 when casting a healing spell. On an 8-10, apply a shield that absorbs 1d10 × 10% of the amount healed in damage.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'rewrite-fate',
        name: 'Rewrite Fate',
        description: 'When an ally would die, you may prevent their death and restore some health.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['destined-moment'],
        icon: '📝',
        rankDescription: [
          'Roll 1d6 when an ally would die. On a 5-6, prevent their death and restore 2d10 hit points. This effect can occur once per encounter per ally.'
        ]
      },
      {
        id: 'tapestry-of-healing',
        name: 'Tapestry of Healing',
        description: 'Your healing spells may heal additional allies.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['threads-of-life'],
        icon: '🧶',
        rankDescription: [
          'Roll 1d8 when casting a healing spell. On a 7-8, heal 1d2 additional allies for 1d6 × 10% of the amount.',
          'Roll 1d8 when casting a healing spell. On a 6-8, heal 1d3 additional allies for 1d8 × 10% of the amount.',
          'Roll 1d8 when casting a healing spell. On a 5-8, heal 1d4 additional allies for 1d10 × 10% of the amount.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'grand-design',
        name: 'Grand Design',
        description: 'Weave a grand design of fate around your allies, granting them powerful benefits.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['rewrite-fate', 'tapestry-of-healing'],
        icon: '🌟',
        rankDescription: [
          'Weave a grand design of fate around your allies within 30 feet for 1d4+2 rounds. They gain advantage on attack rolls on a roll of 16-20, reduce damage taken by 1d6 × 5%, and their attacks heal them for 1d4 hit points per 10 damage dealt.'
        ]
      },
    ],
  },
  {
    id: 'doom',
    name: 'Doom',
    description: 'Manipulate the threads of fate to lead enemies toward their inevitable demise.',
    icon: '⚰️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'doomed-fate',
        name: 'Doomed Fate',
        description: 'Your damaging spells may apply Doom, dealing additional damage over time.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⚰️',
        rankDescription: [
          'Roll 1d20 when casting a damaging spell. On a 20, apply Doom, dealing 1d4 damage per round for 1d4 rounds.',
          'Roll 1d20 when casting a damaging spell. On a 19-20, apply Doom, dealing 1d6 damage per round for 1d4 rounds.',
          'Roll 1d20 when casting a damaging spell. On an 18-20, apply Doom, dealing 1d8 damage per round for 1d4 rounds.',
          'Roll 1d20 when casting a damaging spell. On a 17-20, apply Doom, dealing 1d10 damage per round for 1d6 rounds.',
          'Roll 1d20 when casting a damaging spell. On a 16-20, apply Doom, dealing 1d12 damage per round for 1d6 rounds.'
        ]
      },
      {
        id: 'thread-of-misfortune',
        name: 'Thread of Misfortune',
        description: 'Increases the critical strike damage of your spells.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🧵',
        rankDescription: [
          'When you critically hit with a spell, roll an additional 1d4 and add it to the damage.',
          'When you critically hit with a spell, roll an additional 1d6 and add it to the damage.',
          'When you critically hit with a spell, roll an additional 1d8 and add it to the damage.',
          'When you critically hit with a spell, roll an additional 1d10 and add it to the damage.',
          'When you critically hit with a spell, roll an additional 1d12 and add it to the damage.'
        ]
      },
      {
        id: 'inevitable-end',
        name: 'Inevitable End',
        description: 'Your damage over time effects deal additional damage.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💀',
        rankDescription: [
          'Your damage over time effects deal an additional 1d4 damage when they expire.',
          'Your damage over time effects deal an additional 1d6 damage when they expire.',
          'Your damage over time effects deal an additional 1d8 damage when they expire.',
          'Your damage over time effects deal an additional 1d10 damage when they expire.',
          'Your damage over time effects deal an additional 1d12 damage when they expire.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'fated-enemy',
        name: 'Fated Enemy',
        description: 'Mark an enemy as Fated, increasing the damage they take from your spells by 5% and reducing their critical strike chance by 3%.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['doomed-fate'],
        icon: '🎯',
      },
      {
        id: 'cruel-fate',
        name: 'Cruel Fate',
        description: 'Your critical strikes have a 15% chance to apply a stack of Cruel Fate to the target, increasing the damage they take from your spells by 2% per stack for 15 seconds. Stacks up to 5 times.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['thread-of-misfortune'],
        icon: '😈',
      },
      {
        id: 'unraveling-doom',
        name: 'Unraveling Doom',
        description: 'Your damage over time effects have a 10% chance to tick an additional time when they expire.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['inevitable-end'],
        icon: '🧶',
      },

      // Tier 3 (Level 30)
      {
        id: 'fatal-attraction',
        name: 'Fatal Attraction',
        description: 'Pull the threads of fate to draw an enemy toward their doom, dealing damage and pulling them to you.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['fated-enemy', 'cruel-fate'],
        icon: '🧲',
      },
      {
        id: 'threads-of-decay',
        name: 'Threads of Decay',
        description: 'Your damage over time effects have a 15% chance to spread to a nearby enemy when they deal damage.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['cruel-fate', 'unraveling-doom'],
        icon: '☣️',
      },

      // Tier 4 (Level 40)
      {
        id: 'inevitable-doom',
        name: 'Inevitable Doom',
        description: 'Your damage over time effects cannot be dispelled and deal 20% increased damage to targets below 35% health.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['fatal-attraction'],
        icon: '⏳',
      },
      {
        id: 'tapestry-of-pain',
        name: 'Tapestry of Pain',
        description: 'Weave a tapestry of pain around your target, causing your damage over time effects to also deal 10% of their damage to nearby enemies.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['threads-of-decay'],
        icon: '🕸️',
      },

      // Tier 5 (Level 50)
      {
        id: 'final-destiny',
        name: 'Final Destiny',
        description: 'Seal an enemy\'s fate, causing them to take 30% increased damage from all sources for 10 seconds. If the target dies while affected, the cooldown of this ability is reset.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['inevitable-doom', 'tapestry-of-pain'],
        icon: '⚱️',
      },
    ],
  },
  {
    id: 'divination',
    name: 'Divination',
    description: 'Peer into the threads of fate to gain insight and manipulate future events.',
    icon: '🔮',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'foresight',
        name: 'Foresight',
        description: 'Increases your chance to dodge attacks by 1%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👁️',
      },
      {
        id: 'fate-reading',
        name: 'Fate Reading',
        description: 'Increases your Intelligence by 1%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '📖',
      },
      {
        id: 'thread-sight',
        name: 'Thread Sight',
        description: 'Increases the range of your spells by 3%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🧵',
      },

      // Tier 2 (Level 20)
      {
        id: 'prescience',
        name: 'Prescience',
        description: 'You have a 10% chance to predict incoming attacks, increasing your dodge chance by 20% for 5 seconds. This effect can occur once every 30 seconds.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['foresight'],
        icon: '🔮',
      },
      {
        id: 'divination-mastery',
        name: 'Divination Mastery',
        description: 'Reduces the mana cost of your divination spells by 5%.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['fate-reading'],
        icon: '📚',
      },
      {
        id: 'far-sight',
        name: 'Far Sight',
        description: 'Your divination spells have a 15% chance to reveal invisible enemies within 30 yards.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['thread-sight'],
        icon: '👁️',
      },

      // Tier 3 (Level 30)
      {
        id: 'glimpse-of-fate',
        name: 'Glimpse of Fate',
        description: 'Peer into the immediate future, increasing your dodge and critical strike chance by 15% for 10 seconds.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['prescience', 'divination-mastery'],
        icon: '🔍',
      },
      {
        id: 'fate-manipulation',
        name: 'Fate Manipulation',
        description: 'Your spells have a 10% chance to manipulate fate, causing your next spell to cost no mana.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['divination-mastery', 'far-sight'],
        icon: '🧠',
      },

      // Tier 4 (Level 40)
      {
        id: 'prophetic-vision',
        name: 'Prophetic Vision',
        description: 'Gain a prophetic vision of incoming attacks, allowing you to avoid all damage for 3 seconds. This ability can be used once every 3 minutes.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['glimpse-of-fate'],
        icon: '👁️',
      },
      {
        id: 'weave-of-destiny',
        name: 'Weave of Destiny',
        description: 'Your spells have a 15% chance to create a weave of destiny, causing your next 3 spells to have their effectiveness increased by 20%.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['fate-manipulation'],
        icon: '🕸️',
      },

      // Tier 5 (Level 50)
      {
        id: 'fate-mastery',
        name: 'Fate Mastery',
        description: 'For 15 seconds, you gain perfect insight into the threads of fate, allowing you to dodge 50% of incoming attacks and causing all your spells to critically hit.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['prophetic-vision', 'weave-of-destiny'],
        icon: '👑',
      },
    ],
  }
];

export default fateWeaverTalentTrees;
