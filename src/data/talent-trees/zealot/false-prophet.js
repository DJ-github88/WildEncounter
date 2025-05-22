// Talent trees for the False Prophet class
const falseProphetTalentTrees = [
  {
    id: 'deceiver',
    name: 'Deceiver',
    description: 'Focus on mind control, illusions, and manipulation through deceptive divine magic.',
    icon: '👁️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'silver-tongue',
        name: 'Silver Tongue',
        description: 'Your words are supernaturally persuasive.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '👅',
        rankDescription: [
          'Roll 1d4 and add it to Charisma checks when attempting to deceive or persuade.',
          'Roll 1d6 and add it to Charisma checks when attempting to deceive or persuade.',
          'Roll 1d8 and add it to Charisma checks when attempting to deceive or persuade.',
          'Roll 1d10 and add it to Charisma checks when attempting to deceive or persuade.',
          'Roll 1d12 and add it to Charisma checks when attempting to deceive or persuade.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'compelling-voice',
        name: 'Compelling Voice',
        description: 'Your commands are difficult to resist.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left branch
        requires: ['silver-tongue'],
        icon: '🗣️',
        rankDescription: [
          'Roll 1d20 when charming; on a 19-20, the target automatically fails their save.',
          'Roll 1d20 when charming; on an 18-20, the target automatically fails their save.',
          'Roll 1d20 when charming; on a 17-20, the target automatically fails their save.'
        ]
      },
      {
        id: 'false-promises',
        name: 'False Promises',
        description: 'Your deceptive words grant temporary benefits that eventually turn harmful.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center branch
        requires: ['silver-tongue'],
        icon: '🤝',
        rankDescription: [
          'Grant a target 1d6 temporary hit points. After 1d4 rounds, they take 1d8 psychic damage.',
          'Grant a target 1d8 temporary hit points. After 1d4 rounds, they take 1d10 psychic damage.',
          'Grant a target 1d10 temporary hit points. After 1d4 rounds, they take 1d12 psychic damage.'
        ]
      },
      {
        id: 'illusory-presence',
        name: 'Illusory Presence',
        description: 'Create an illusion of yourself that can interact with others.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right branch
        requires: ['silver-tongue'],
        icon: '👻',
        rankDescription: [
          'Create an illusion of yourself that lasts for 1d4 rounds. It can speak but not affect the physical world.',
          'Create an illusion of yourself that lasts for 1d6 rounds. It can speak and appear to interact with objects.',
          'Create an illusion of yourself that lasts for 1d8 rounds. It can speak and appear to cast spells (visual effects only).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'mass-suggestion',
        name: 'Mass Suggestion',
        description: 'Plant a suggestion in the minds of multiple creatures simultaneously.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left branch
        requires: ['compelling-voice'],
        icon: '👥',
        rankDescription: [
          'Affect 1d4 creatures with a suggestion. Each must make a Wisdom save or follow your suggestion for 1d4 hours.',
          'Affect 1d6 creatures with a suggestion. Each must make a Wisdom save or follow your suggestion for 1d6 hours.',
          'Affect 1d8 creatures with a suggestion. Each must make a Wisdom save or follow your suggestion for 1d8 hours.'
        ]
      },
      {
        id: 'mind-control',
        name: 'Mind Control',
        description: 'Take temporary control of a creature\'s actions.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Center branch
        requires: ['false-promises'],
        icon: '🧠',
        rankDescription: [
          'Control a creature for 1d4 rounds. They get a saving throw each round to break free.',
          'Control a creature for 1d6 rounds. They get a saving throw each round to break free.',
          'Control a creature for 1d8 rounds. They get a saving throw each round to break free.'
        ]
      },
      {
        id: 'twisted-healing',
        name: 'Twisted Healing',
        description: 'Your healing spells have a corrupting influence.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right branch
        requires: ['illusory-presence'],
        icon: '💉',
        rankDescription: [
          'Heal a target for 2d6 hit points, but they must roll 1d20. On a 1-5, they become vulnerable to the next attack against them.',
          'Heal a target for 2d8 hit points, but they must roll 1d20. On a 1-6, they become vulnerable to the next attack against them.',
          'Heal a target for 2d10 hit points, but they must roll 1d20. On a 1-7, they become vulnerable to the next attack against them.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'dominate-minds',
        name: 'Dominate Minds',
        description: 'Take complete control over a creature\'s mind.',
        maxRank: 1,
        position: { row: 3, col: 0 }, // Left branch
        requires: ['mass-suggestion'],
        icon: '👁️',
        rankDescription: [
          'Take complete control of a creature for 1d6 rounds. They do not get saving throws to break free during this time.'
        ]
      },
      {
        id: 'puppet-master',
        name: 'Puppet Master',
        description: 'Control multiple creatures as your puppets.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Center branch
        requires: ['mind-control'],
        icon: '🎭',
        rankDescription: [
          'Control up to 1d4 creatures simultaneously. Each round, roll 1d20 for each; on a 1-3, they break free.',
          'Control up to 1d4+1 creatures simultaneously. Each round, roll 1d20 for each; on a 1-2, they break free.',
          'Control up to 1d6 creatures simultaneously. Each round, roll 1d20 for each; on a 1, they break free.'
        ]
      },
      {
        id: 'false-divinity',
        name: 'False Divinity',
        description: 'Channel corrupted divine energy to empower yourself.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right branch
        requires: ['twisted-healing'],
        icon: '👼',
        rankDescription: [
          'Spend 10 Devotion to gain a divine aura for 1d4 rounds. While active, your spells deal an additional 1d6 radiant damage.',
          'Spend 10 Devotion to gain a divine aura for 1d4 rounds. While active, your spells deal an additional 1d8 radiant damage.',
          'Spend 10 Devotion to gain a divine aura for 1d6 rounds. While active, your spells deal an additional 1d10 radiant damage.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'mass-domination',
        name: 'Mass Domination',
        description: 'Dominate the minds of multiple creatures simultaneously.',
        maxRank: 1,
        position: { row: 4, col: 1 }, // Left-center branch
        requires: ['dominate-minds', 'puppet-master'],
        icon: '👁️‍🗨️',
        rankDescription: [
          'Dominate the minds of up to 1d4+1 creatures simultaneously for 1d4 rounds. They do not get saving throws during this time.'
        ]
      },
      {
        id: 'false-miracle',
        name: 'False Miracle',
        description: 'Perform a convincing but false miracle that generates Lies.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Right-center branch
        requires: ['puppet-master', 'false-divinity'],
        icon: '✨',
        rankDescription: [
          'Perform a false miracle that convinces witnesses of your divine power. Generate 1d6 Lies and gain advantage on Charisma checks for 1d4 hours.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'mind-network',
        name: 'Mind Network',
        description: 'Create a network of dominated minds that you can control simultaneously.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Left branch
        requires: ['mass-domination'],
        icon: '🕸️',
        rankDescription: [
          'Create a network of up to 1d6+2 dominated minds. You can see through their eyes, hear through their ears, and control their actions as if they were extensions of yourself.'
        ]
      },
      {
        id: 'reality-manipulation',
        name: 'Reality Manipulation',
        description: 'Temporarily alter reality through the power of your deception.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Right branch
        requires: ['false-miracle'],
        icon: '🌀',
        rankDescription: [
          'Spend 20 Devotion to alter reality in a small area for 1d4 rounds. Within this area, you can change the environment, create or destroy non-magical objects, and alter the laws of physics in minor ways.'
        ]
      },

      // Tier 7 (Level 70) - Final capstone
      {
        id: 'avatar-of-deception',
        name: 'Avatar of Deception',
        description: 'Become an avatar of deception, embodying the very essence of falsehood.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center
        requires: ['mind-network', 'reality-manipulation'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Deception. During this time, your illusions become partially real, your mind control abilities cannot be resisted by creatures with CR equal to or less than your level, and you generate 1d4 Lies at the start of each of your turns. Additionally, you can cast spells without expending mana, and your Charisma score is treated as 10 points higher for all purposes.'
        ]
      },
    ],
  },
  {
    id: 'blasphemer',
    name: 'Blasphemer',
    description: 'Focus on raw damage, dark miracles, and curses through corrupted divine magic.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10) - Inverted Triangle layout (wide at top)
      {
        id: 'foretell-doom',
        name: 'Foretell Doom',
        description: 'Predict a creature\'s doom, making it more likely to occur.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Far left
        icon: '☠️',
        rankDescription: [
          'Target a creature and roll 1d20. On a 19-20, they have disadvantage on their next saving throw.',
          'Target a creature and roll 1d20. On an 18-20, they have disadvantage on their next saving throw.',
          'Target a creature and roll 1d20. On a 17-20, they have disadvantage on their next saving throw.',
          'Target a creature and roll 1d20. On a 16-20, they have disadvantage on their next saving throw.',
          'Target a creature and roll 1d20. On a 15-20, they have disadvantage on their next saving throw.'
        ]
      },
      {
        id: 'false-blessing',
        name: 'False Blessing',
        description: 'Bestow a blessing that seems beneficial but has hidden costs.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Left-center
        icon: '🙏',
        rankDescription: [
          'Bless a target to add 1d4 to their attack rolls, but they take 1d4 damage each time they attack.',
          'Bless a target to add 1d6 to their attack rolls, but they take 1d4 damage each time they attack.',
          'Bless a target to add 1d6 to their attack rolls, but they take 1d6 damage each time they attack.',
          'Bless a target to add 1d8 to their attack rolls, but they take 1d6 damage each time they attack.',
          'Bless a target to add 1d8 to their attack rolls, but they take 1d8 damage each time they attack.'
        ]
      },
      {
        id: 'heretical-word',
        name: 'Heretical Word',
        description: 'Speak a word of blasphemy that damages those who hear it.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Center
        icon: '📢',
        rankDescription: [
          'Speak a word of blasphemy that deals 1d6 psychic damage to all creatures within 15 feet.',
          'Speak a word of blasphemy that deals 1d8 psychic damage to all creatures within 15 feet.',
          'Speak a word of blasphemy that deals 1d10 psychic damage to all creatures within 15 feet.',
          'Speak a word of blasphemy that deals 1d12 psychic damage to all creatures within 20 feet.',
          'Speak a word of blasphemy that deals 2d8 psychic damage to all creatures within 20 feet.'
        ]
      },
      {
        id: 'twisted-fate',
        name: 'Twisted Fate',
        description: 'Manipulate the threads of fate to your advantage.',
        maxRank: 5,
        position: { row: 0, col: 6 }, // Right-center
        icon: '🧵',
        rankDescription: [
          'Once per encounter, reroll one of your dice and take the higher result.',
          'Twice per encounter, reroll one of your dice and take the higher result.',
          'Twice per encounter, reroll one of your dice and take the higher result. The second reroll adds 1d4 to the result.',
          'Three times per encounter, reroll one of your dice and take the higher result. The third reroll adds 1d4 to the result.',
          'Three times per encounter, reroll one of your dice and take the higher result. All rerolls add 1d4 to the result.'
        ]
      },
      {
        id: 'dark-pact',
        name: 'Dark Pact',
        description: 'Form a pact with dark forces to gain power at a cost.',
        maxRank: 5,
        position: { row: 0, col: 8 }, // Far right
        icon: '📜',
        rankDescription: [
          'Sacrifice 1d4 hit points to gain 1d6 temporary hit points and +1 to your next attack roll.',
          'Sacrifice 1d4 hit points to gain 1d8 temporary hit points and +1 to your next attack roll.',
          'Sacrifice 1d6 hit points to gain 1d10 temporary hit points and +2 to your next attack roll.',
          'Sacrifice 1d6 hit points to gain 1d12 temporary hit points and +2 to your next attack roll.',
          'Sacrifice 1d8 hit points to gain 2d8 temporary hit points and +3 to your next attack roll.'
        ]
      },

      // Tier 2 (Level 20) - Inverted Triangle narrows
      {
        id: 'prophetic-vision',
        name: 'Prophetic Vision',
        description: 'Share a false vision that influences a creature\'s actions.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left
        requires: ['foretell-doom', 'false-blessing'],
        icon: '👁️',
        rankDescription: [
          'Show a target a vision of their future. Roll 1d20; on a 15-20, they believe it and act accordingly for 1d4 rounds.',
          'Show a target a vision of their future. Roll 1d20; on a 13-20, they believe it and act accordingly for 1d6 rounds.',
          'Show a target a vision of their future. Roll 1d20; on a 11-20, they believe it and act accordingly for 1d8 rounds.'
        ]
      },
      {
        id: 'words-of-unmaking',
        name: 'Words of Unmaking',
        description: 'Speak words that weaken the fabric of reality around a target.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Left-center
        requires: ['false-blessing', 'heretical-word'],
        icon: '💬',
        rankDescription: [
          'Target takes 2d6 psychic damage and has vulnerability to one damage type of your choice for 1d4 rounds.',
          'Target takes 2d8 psychic damage and has vulnerability to one damage type of your choice for 1d4 rounds.',
          'Target takes 2d10 psychic damage and has vulnerability to one damage type of your choice for 1d6 rounds.'
        ]
      },
      {
        id: 'reality-distortion',
        name: 'Reality Distortion',
        description: 'Warp reality around you through false prophecies.',
        maxRank: 3,
        position: { row: 1, col: 5 }, // Right-center
        requires: ['heretical-word', 'twisted-fate'],
        icon: '🌀',
        rankDescription: [
          'Create a zone of distorted reality for 1d4 rounds. Within the zone, all creatures (including you) roll 1d4 and add it to attack rolls.',
          'Create a zone of distorted reality for 1d6 rounds. Within the zone, all creatures (including you) roll 1d6 and add it to attack rolls.',
          'Create a zone of distorted reality for 1d6 rounds. Within the zone, all creatures (including you) roll 1d8 and add it to attack rolls.'
        ]
      },
      {
        id: 'corrupt-divinity',
        name: 'Corrupt Divinity',
        description: 'Channel corrupted divine energy to empower your attacks.',
        maxRank: 3,
        position: { row: 1, col: 7 }, // Right
        requires: ['twisted-fate', 'dark-pact'],
        icon: '⚡',
        rankDescription: [
          'Your attacks deal an additional 1d6 necrotic damage for 1d4 rounds.',
          'Your attacks deal an additional 1d8 necrotic damage for 1d4 rounds.',
          'Your attacks deal an additional 1d10 necrotic damage for 1d6 rounds.'
        ]
      },

      // Tier 3 (Level 30) - Inverted Triangle narrows further
      {
        id: 'apocalyptic-vision',
        name: 'Apocalyptic Vision',
        description: 'Share a vision of the apocalypse that terrifies your enemies.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Left
        requires: ['prophetic-vision', 'words-of-unmaking'],
        icon: '🔥',
        rankDescription: [
          'All enemies within 20 feet must make a Wisdom save or be frightened for 1d4 rounds. While frightened, they take 1d6 psychic damage at the start of their turn.',
          'All enemies within 25 feet must make a Wisdom save or be frightened for 1d4 rounds. While frightened, they take 1d8 psychic damage at the start of their turn.',
          'All enemies within 30 feet must make a Wisdom save or be frightened for 1d6 rounds. While frightened, they take 1d10 psychic damage at the start of their turn.'
        ]
      },
      {
        id: 'blasphemous-sermon',
        name: 'Blasphemous Sermon',
        description: 'Deliver a sermon that corrupts the faith of those who hear it.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Center
        requires: ['words-of-unmaking', 'reality-distortion'],
        icon: '📖',
        rankDescription: [
          'Deliver a sermon that affects all creatures within 20 feet. Enemies must make a Wisdom save or take 2d6 psychic damage and be stunned for 1 round. Allies gain 1d6 temporary hit points.',
          'Deliver a sermon that affects all creatures within 25 feet. Enemies must make a Wisdom save or take 2d8 psychic damage and be stunned for 1 round. Allies gain 1d8 temporary hit points.',
          'Deliver a sermon that affects all creatures within 30 feet. Enemies must make a Wisdom save or take 3d6 psychic damage and be stunned for 1 round. Allies gain 1d10 temporary hit points.'
        ]
      },
      {
        id: 'rewrite-destiny',
        name: 'Rewrite Destiny',
        description: 'Temporarily change a creature\'s fate.',
        maxRank: 3,
        position: { row: 2, col: 6 }, // Right
        requires: ['reality-distortion', 'corrupt-divinity'],
        icon: '✍️',
        rankDescription: [
          'Choose a target. For 1d4 rounds, you decide whether they succeed or fail on their next d20 roll each round. Using this ability costs 5 Devotion per round.',
          'Choose a target. For 1d4 rounds, you decide whether they succeed or fail on their next d20 roll each round. Using this ability costs 4 Devotion per round.',
          'Choose a target. For 1d6 rounds, you decide whether they succeed or fail on their next d20 roll each round. Using this ability costs 3 Devotion per round.'
        ]
      },

      // Tier 4 (Level 40) - Inverted Triangle narrows further
      {
        id: 'false-resurrection',
        name: 'False Resurrection',
        description: 'Bring a creature back from the dead, but with a twisted existence.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Left
        requires: ['apocalyptic-vision', 'blasphemous-sermon'],
        icon: '⚰️',
        rankDescription: [
          'Resurrect a dead creature with 1d6 × 10% of their maximum hit points. They serve you for 1d4 days before returning to death.',
          'Resurrect a dead creature with 1d8 × 10% of their maximum hit points. They serve you for 1d6 days before returning to death.',
          'Resurrect a dead creature with 1d10 × 10% of their maximum hit points. They serve you for 1d8 days before returning to death.'
        ]
      },
      {
        id: 'paradoxical-prophecy',
        name: 'Paradoxical Prophecy',
        description: 'Deliver a prophecy that creates a paradox in reality.',
        maxRank: 3,
        position: { row: 3, col: 5 }, // Right
        requires: ['blasphemous-sermon', 'rewrite-destiny'],
        icon: '🔄',
        rankDescription: [
          'Create a paradox that deals 3d8 psychic damage to all enemies within 20 feet and heals allies for 1d8 hit points.',
          'Create a paradox that deals 4d8 psychic damage to all enemies within 20 feet and heals allies for 2d8 hit points.',
          'Create a paradox that deals 5d8 psychic damage to all enemies within 20 feet and heals allies for 3d8 hit points.'
        ]
      },

      // Tier 5 (Level 50) - Inverted Triangle narrows further
      {
        id: 'world-ender',
        name: 'World Ender',
        description: 'Prophesy the end of the world with such conviction that reality begins to unravel.',
        maxRank: 1,
        position: { row: 4, col: 4 }, // Center
        requires: ['false-resurrection', 'paradoxical-prophecy'],
        icon: '🌍',
        rankDescription: [
          'Spend 25 Devotion to create a 40-foot zone of apocalyptic energy for 1d4 rounds. Enemies within take 4d10 psychic damage per round and must make a Wisdom save or be stunned for 1 round. Allies within gain 2d10 temporary hit points per round and advantage on all rolls.'
        ]
      },

      // Tier 6 (Level 60) - Inverted Triangle narrows to a point
      {
        id: 'heretical-revelation',
        name: 'Heretical Revelation',
        description: 'Reveal the "true nature" of divinity to all nearby creatures.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Center
        requires: ['world-ender'],
        icon: '👁️',
        rankDescription: [
          'Reveal the "true nature" of divinity to all creatures within 60 feet. Religious characters must make a Wisdom save or be stunned for 1d4 rounds. Non-religious characters must make a Wisdom save or be frightened for 1d4 rounds.'
        ]
      },

      // Tier 7 (Level 70) - Final capstone
      {
        id: 'avatar-of-blasphemy',
        name: 'Avatar of Blasphemy',
        description: 'Become an avatar of blasphemy, embodying the very essence of heresy.',
        maxRank: 1,
        position: { row: 6, col: 4 }, // Center
        requires: ['heretical-revelation'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Blasphemy. During this time, your spells deal double damage to religious characters, you gain immunity to radiant damage, and you generate 1d6 Lies at the start of each of your turns. Additionally, all enemies within 30 feet must make a Wisdom save at the start of their turn or be stunned for 1 round as they contemplate the horrifying truths you have revealed.'
        ]
      },
    ],
  },
  {
    id: 'usurper',
    name: 'Usurper',
    description: 'Focus on controlling beliefs, raising minions, and buffing allies via devotion.',
    icon: '👑',
    talents: [
      // Tier 1 (Level 10) - Staggered/Zigzag layout
      {
        id: 'dark-prayer',
        name: 'Dark Prayer',
        description: 'Channel corrupted divine energy through prayer.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center
        icon: '🙏',
        rankDescription: [
          'Spend an action in prayer to gain 1d4 Devotion points.',
          'Spend an action in prayer to gain 1d6 Devotion points.',
          'Spend an action in prayer to gain 1d8 Devotion points.',
          'Spend an action in prayer to gain 1d10 Devotion points.',
          'Spend an action in prayer to gain 1d12 Devotion points.'
        ]
      },

      // Tier 2 (Level 20) - Staggered/Zigzag layout
      {
        id: 'blood-sacrifice',
        name: 'Blood Sacrifice',
        description: 'Sacrifice your own blood or that of others to gain power.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left
        requires: ['dark-prayer'],
        icon: '🩸',
        rankDescription: [
          'Sacrifice 1d6 hit points to gain 1d6 Devotion points.',
          'Sacrifice 1d8 hit points to gain 1d8 Devotion points.',
          'Sacrifice 1d10 hit points to gain 1d10 Devotion points.'
        ]
      },
      {
        id: 'dark-blessing',
        name: 'Dark Blessing',
        description: 'Channel Devotion into harmful blessings.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right
        requires: ['dark-prayer'],
        icon: '✨',
        rankDescription: [
          'Spend 2 Devotion to deal 1d8 necrotic damage to a target.',
          'Spend 3 Devotion to deal 1d10 necrotic damage to a target.',
          'Spend 4 Devotion to deal 1d12 necrotic damage to a target.'
        ]
      },

      // Tier 3 (Level 30) - Staggered/Zigzag layout
      {
        id: 'corrupt-healing',
        name: 'Corrupt Healing',
        description: 'Channel Devotion into twisted healing that corrupts as it mends.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Center
        requires: ['dark-prayer'],
        icon: '💉',
        rankDescription: [
          'Spend 3 Devotion to heal a target for 2d6 hit points, but they must roll 1d20. On a 1-5, they are poisoned for 1 round.',
          'Spend 3 Devotion to heal a target for 2d8 hit points, but they must roll 1d20. On a 1-5, they are poisoned for 1 round.',
          'Spend 4 Devotion to heal a target for 3d8 hit points, but they must roll 1d20. On a 1-5, they are poisoned for 1 round.'
        ]
      },

      // Tier 4 (Level 40) - Staggered/Zigzag layout
      {
        id: 'life-drain',
        name: 'Life Drain',
        description: 'Drain life force from others to fuel your powers.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left
        requires: ['blood-sacrifice'],
        icon: '💀',
        rankDescription: [
          'Deal 2d6 necrotic damage to a target and heal yourself for half the amount. Gain 1d4 Devotion.',
          'Deal 2d8 necrotic damage to a target and heal yourself for half the amount. Gain 1d6 Devotion.',
          'Deal 3d8 necrotic damage to a target and heal yourself for half the amount. Gain 1d8 Devotion.'
        ]
      },
      {
        id: 'dark-shield',
        name: 'Dark Shield',
        description: 'Create a shield of corrupted divine energy.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right
        requires: ['dark-blessing'],
        icon: '🛡️',
        rankDescription: [
          'Spend 4 Devotion to create a shield that absorbs 2d8 damage. When the shield breaks, it deals 1d6 necrotic damage to nearby enemies.',
          'Spend 4 Devotion to create a shield that absorbs 3d8 damage. When the shield breaks, it deals 1d8 necrotic damage to nearby enemies.',
          'Spend 5 Devotion to create a shield that absorbs 4d8 damage. When the shield breaks, it deals 2d6 necrotic damage to nearby enemies.'
        ]
      },

      // Tier 5 (Level 50) - Staggered/Zigzag layout
      {
        id: 'dark-conversion',
        name: 'Dark Conversion',
        description: 'Convert divine energy into corrupted power.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center
        requires: ['corrupt-healing'],
        icon: '🔄',
        rankDescription: [
          'Convert healing effects targeting you into Devotion points. Gain Devotion equal to 1d6 × 10% of the healing that would have been received.'
        ]
      },

      // Tier 6 (Level 60) - Staggered/Zigzag layout
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Harvest souls to fuel your dark powers.',
        maxRank: 3,
        position: { row: 5, col: 0 }, // Left
        requires: ['life-drain', 'dark-conversion'],
        icon: '👻',
        rankDescription: [
          'When a creature dies within 30 feet of you, gain 1d6 Devotion points.',
          'When a creature dies within 30 feet of you, gain 1d8 Devotion points.',
          'When a creature dies within 30 feet of you, gain 1d10 Devotion points.'
        ]
      },
      {
        id: 'unholy-smite',
        name: 'Unholy Smite',
        description: 'Channel Devotion into a powerful unholy attack.',
        maxRank: 3,
        position: { row: 5, col: 4 }, // Right
        requires: ['dark-shield', 'dark-conversion'],
        icon: '⚡',
        rankDescription: [
          'Spend 8 Devotion to deal 4d8 necrotic damage to a target and 2d8 necrotic damage to all enemies within 10 feet of the target.',
          'Spend 8 Devotion to deal 5d8 necrotic damage to a target and 2d10 necrotic damage to all enemies within 15 feet of the target.',
          'Spend 10 Devotion to deal 6d8 necrotic damage to a target and 3d8 necrotic damage to all enemies within 20 feet of the target.'
        ]
      },

      // Tier 7 (Level 70) - Staggered/Zigzag layout
      {
        id: 'dark-resurrection',
        name: 'Dark Resurrection',
        description: 'Use Devotion to bring yourself back from the brink of death.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center
        requires: ['soul-harvest', 'unholy-smite'],
        icon: '🧟',
        rankDescription: [
          'When reduced to 0 hit points, spend 10 Devotion to revive with 4d8 hit points and gain temporary immunity to damage for 1 round.'
        ]
      },

      // New talents for expanded tree
      {
        id: 'false-congregation',
        name: 'False Congregation',
        description: 'Create loyal followers who worship you as a divine entity.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left
        requires: ['blood-sacrifice'],
        icon: '👥',
        rankDescription: [
          'Spend 5 Devotion to convert a humanoid NPC into a follower for 1d4 hours. You can have up to 2 followers at once.',
          'Spend 5 Devotion to convert a humanoid NPC into a follower for 1d6 hours. You can have up to 3 followers at once.',
          'Spend 5 Devotion to convert a humanoid NPC into a follower for 1d8 hours. You can have up to 4 followers at once.'
        ]
      },
      {
        id: 'divine-theft',
        name: 'Divine Theft',
        description: 'Steal divine power from religious artifacts or holy sites.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right
        requires: ['dark-blessing'],
        icon: '💎',
        rankDescription: [
          'When touching a religious artifact or standing in a holy site, gain 2d6 Devotion points but take 1d6 radiant damage.',
          'When touching a religious artifact or standing in a holy site, gain 2d8 Devotion points but take 1d4 radiant damage.',
          'When touching a religious artifact or standing in a holy site, gain 3d6 Devotion points but take 1d4 radiant damage.'
        ]
      },
      {
        id: 'zealot-sacrifice',
        name: 'Zealot Sacrifice',
        description: 'Sacrifice a follower to gain immense power.',
        maxRank: 1,
        position: { row: 4, col: 0 }, // Left
        requires: ['false-congregation', 'life-drain'],
        icon: '🔪',
        rankDescription: [
          'Sacrifice one of your followers to gain Devotion equal to 50% of their maximum hit points and heal yourself for 4d8 hit points.'
        ]
      },
      {
        id: 'corrupted-sanctuary',
        name: 'Corrupted Sanctuary',
        description: 'Create an area of corrupted divine energy that empowers you and your allies.',
        maxRank: 1,
        position: { row: 4, col: 4 }, // Right
        requires: ['divine-theft', 'dark-shield'],
        icon: '⛪',
        rankDescription: [
          'Spend 15 Devotion to create a 30-foot radius sanctuary for 1d6 rounds. Within the sanctuary, you and your allies gain +1d6 to damage rolls and generate 1d4 Devotion at the start of your turns.'
        ]
      },
      {
        id: 'avatar-of-heresy',
        name: 'Avatar of Heresy',
        description: 'Transform into an avatar of corrupted divinity.',
        maxRank: 1,
        position: { row: 7, col: 2 }, // Bottom center
        requires: ['dark-resurrection'],
        icon: '😈',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Heresy. While transformed, your necrotic damage is doubled, you gain immunity to radiant damage, and you generate 1d8 Devotion at the start of each turn. Additionally, all your followers gain +2d6 to damage rolls and have advantage on all saving throws.'
        ]
      },
    ],
  }
];

export default falseProphetTalentTrees;
