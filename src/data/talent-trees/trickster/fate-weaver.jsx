// Talent trees for the Fate Weaver class
const fateWeaverTalentTrees = [
  {
    id: 'predictive-control',
    name: 'Predictive Control',
    description: 'Focus on planning and manipulating draws to maximize use of high cards and avoid bad draws.',
    icon: 'crystal',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'glimpse-future',
        name: 'Glimpse Future',
        description: 'Briefly glimpse the future to gain an advantage on your next action.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: 'eye',
        rankDescription: [
          'Once per encounter, draw a card from the Fate deck. Roll 1d20; on a 20, gain advantage on your next attack or saving throw.',
          'Once per encounter, draw a card from the Fate deck. Roll 1d20; on a 19-20, gain advantage on your next attack or saving throw.',
          'Once per encounter, draw a card from the Fate deck. Roll 1d20; on an 18-20, gain advantage on your next attack or saving throw.',
          'Twice per encounter, draw a card from the Fate deck. Roll 1d20; on a 17-20, gain advantage on your next attack or saving throw.',
          'Twice per encounter, draw a card from the Fate deck. Roll 1d20; on a 16-20, gain advantage on your next attack or saving throw and add 1d4 to the result.'
        ]
      },
      {
        id: 'read-omens',
        name: 'Read Omens',
        description: 'Read the omens to predict danger and prepare for combat.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '📖',
        rankDescription: [
          'At the start of combat, draw a card. Roll 1d20; on a 20, you cannot be surprised and gain 1d4 to initiative.',
          'At the start of combat, draw a card. Roll 1d20; on a 19-20, you cannot be surprised and gain 1d4 to initiative.',
          'At the start of combat, draw a card. Roll 1d20; on an 18-20, you cannot be surprised and gain 1d6 to initiative.',
          'At the start of combat, draw a card. Roll 1d20; on a 17-20, you cannot be surprised and gain 1d6 to initiative.',
          'At the start of combat, draw a card. Roll 1d20; on a 16-20, you cannot be surprised and gain 1d8 to initiative.'
        ]
      },
      {
        id: 'fate-sense',
        name: 'Fate Sense',
        description: 'Sense the threads of fate around you to detect hidden dangers.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🧵',
        rankDescription: [
          'Draw a card when searching for traps or secret doors. Roll 1d20; on a 20, automatically succeed and gain insight into any dangers ahead for 1d4 rounds.',
          'Draw a card when searching for traps or secret doors. Roll 1d20; on a 19-20, automatically succeed and gain insight into any dangers ahead for 1d4 rounds.',
          'Draw a card when searching for traps or secret doors. Roll 1d20; on an 18-20, automatically succeed and gain insight into any dangers ahead for 1d6 rounds.',
          'Draw a card when searching for traps or secret doors. Roll 1d20; on a 17-20, automatically succeed and gain insight into any dangers ahead for 1d6 rounds.',
          'Draw a card when searching for traps or secret doors. Roll 1d20; on a 16-20, automatically succeed and gain insight into any dangers ahead for 1d8 rounds.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'portent',
        name: 'Portent',
        description: 'Receive a vision of the future at the start of each day to manipulate fate.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['glimpse-future'],
        icon: '🌅',
        rankDescription: [
          'At the start of each day, draw 1 card from the Fate deck and roll 1d20. You can replace any attack roll, saving throw, or ability check made by you or a creature you can see with this card\'s value or the d20 result.',
          'At the start of each day, draw 2 cards from the Fate deck and roll 1d20. You can replace any attack roll, saving throw, or ability check made by you or a creature you can see with one of these cards\' values or the d20 result.',
          'At the start of each day, draw 3 cards from the Fate deck and roll 1d20. You can replace any attack roll, saving throw, or ability check made by you or a creature you can see with one of these cards\' values or the d20 result.'
        ]
      },
      {
        id: 'foresight',
        name: 'Foresight',
        description: 'Your divinations grant you supernatural reflexes to avoid danger.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['read-omens'],
        icon: '⚡',
        rankDescription: [
          'When an enemy attacks you, draw a card. Roll 1d20; on a 20, you can use your reaction to impose disadvantage on the attack roll and gain 1d4 temporary hit points.',
          'When an enemy attacks you, draw a card. Roll 1d20; on a 19-20, you can use your reaction to impose disadvantage on the attack roll and gain 1d6 temporary hit points.',
          'When an enemy attacks you, draw a card. Roll 1d20; on an 18-20, you can use your reaction to impose disadvantage on the attack roll and gain 1d8 temporary hit points.'
        ]
      },
      {
        id: 'scry',
        name: 'Scry',
        description: 'Use divination to see distant places through the threads of fate.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['fate-sense'],
        icon: '🔍',
        rankDescription: [
          'Draw a card from the Fate deck. Roll 1d20; on a 20, you can see and hear a familiar location within 1d4 miles for 1d4 minutes.',
          'Draw a card from the Fate deck. Roll 1d20; on a 19-20, you can see and hear a familiar location within 1d6 × 10 miles for 1d6 minutes.',
          'Draw a card from the Fate deck. Roll 1d20; on an 18-20, you can see and hear any location you\'ve visited before for 1d8 × 10 minutes.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'precognitive-strike',
        name: 'Precognitive Strike',
        description: 'See an attack before it happens and counter it perfectly with your knowledge of fate.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['portent', 'foresight'],
        icon: '⚔️',
        rankDescription: [
          'When an enemy attacks you, draw a card and roll 1d20. If either result is higher than the attack roll, you dodge the attack and can make an immediate counterattack with advantage that deals an additional 1d8 damage.'
        ]
      },
      {
        id: 'divination-mastery',
        name: 'Divination Mastery',
        description: 'Your mastery of divination allows you to see multiple possible futures and choose the best one.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['foresight', 'scry'],
        icon: '🌌',
        rankDescription: [
          'When you draw a card for a divination ability, draw 2 cards instead and choose which one to use. Additionally, roll 1d4; on a 4, you may draw a third card. The unused cards are returned to the deck.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'fate-manipulation',
        name: 'Fate Manipulation',
        description: 'Manipulate the threads of fate to change outcomes in your favor.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['precognitive-strike'],
        icon: '🧶',
        rankDescription: [
          'Once per encounter, after seeing the result of an attack roll, saving throw, or ability check, you can force a redraw from the Fate deck and a reroll of 1d20. Use the higher of the two results.',
          'Twice per encounter, after seeing the result of an attack roll, saving throw, or ability check, you can force a redraw from the Fate deck and a reroll of 1d20. Use the higher of the two results.',
          'Three times per encounter, after seeing the result of an attack roll, saving throw, or ability check, you can force a redraw from the Fate deck and a reroll of 1d20. Use the higher of the two results. On a natural 20 on the reroll, regain one use of this ability.'
        ]
      },
      {
        id: 'prophetic-vision',
        name: 'Prophetic Vision',
        description: 'Receive powerful visions of the future that can change the course of events.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['divination-mastery'],
        icon: '🌠',
        rankDescription: [
          'Once per day, draw 3 cards from the Fate deck and roll 1d20 three times. For the next 1d4 hours, you can replace any roll with one of these cards or dice results.',
          'Once per day, draw 4 cards from the Fate deck and roll 1d20 four times. For the next 1d6 hours, you can replace any roll with one of these cards or dice results.',
          'Once per day, draw 5 cards from the Fate deck and roll 1d20 five times. For the next 1d8 hours, you can replace any roll with one of these cards or dice results.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'perfect-prescience',
        name: 'Perfect Prescience',
        description: 'Achieve perfect foresight, allowing you to see all possible futures and choose the best path.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['fate-manipulation', 'prophetic-vision'],
        icon: '🌟',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you can see all possible outcomes before taking any action. During this time, you can draw 3 cards and roll 1d20 three times for any check and choose the best result. Additionally, you have advantage on all attack rolls, saving throws, and ability checks, and attacks against you have disadvantage. When this effect ends, roll 1d6; on a 6, you gain insight into a major future event.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'fate-weaving',
        name: 'Fate Weaving',
        description: 'Weave the threads of fate to create powerful effects based on card combinations.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['perfect-prescience'],
        icon: '🧵',
        rankDescription: [
          'Draw 2 cards from the Fate deck. If they match in suit, gain 1d6 Fate Points. If they match in value, you can immediately cast a spell without expending a spell slot. If they form a sequence, gain advantage on all rolls for 1d4 rounds.',
          'Draw 3 cards from the Fate deck. If at least 2 match in suit, gain 1d8 Fate Points. If at least 2 match in value, you can immediately cast a spell without expending a spell slot. If they form a sequence, gain advantage on all rolls for 1d6 rounds.',
          'Draw 3 cards from the Fate deck. If all 3 match in suit, gain 2d8 Fate Points. If all 3 match in value, you can immediately cast two spells without expending spell slots. If they form a sequence, gain advantage on all rolls for 1d8 rounds and impose disadvantage on enemy rolls.'
        ]
      },
      {
        id: 'reality-manipulation',
        name: 'Reality Manipulation',
        description: 'Your mastery of fate allows you to briefly alter reality itself.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['perfect-prescience'],
        icon: '🌌',
        rankDescription: [
          'Once per day, draw a card and roll 1d20. On a face card or 18-20, you can alter one aspect of reality within 30 feet for 1d4 rounds (such as creating/removing a wall, changing terrain, or altering an object\'s properties).',
          'Once per day, draw a card and roll 1d20. On a face card or 16-20, you can alter two aspects of reality within 60 feet for 1d6 rounds.',
          'Once per day, draw a card and roll 1d20. On a face card or 14-20, you can alter three aspects of reality within 90 feet for 1d8 rounds. Additionally, you can make minor alterations to the flow of time in the affected area.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'master-of-destiny',
        name: 'Master of Destiny',
        description: 'Become a true master of destiny, able to see and manipulate all possible futures.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['fate-weaving', 'reality-manipulation'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d6+2 minutes, you become a Master of Destiny. Draw 7 cards from the Fate deck and roll 1d20 seven times. During this time, you can use these cards and dice results to replace any roll made by any creature you can see. Additionally, you can alter reality as with Reality Manipulation without expending its use, and you gain immunity to all divination effects and attempts to alter your fate. When this effect ends, roll 1d10; on a 10, you receive a vision of a major event that will occur within the next 1d4 days and gain insight on how to influence it.'
        ]
      },
    ],
  },
  {
    id: 'chaos-manipulation',
    name: 'Chaos Manipulation',
    description: 'Embrace randomness and pandemonium, making casting unpredictable but potentially massively rewarding.',
    icon: '🌀',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'bind-fate',
        name: 'Bind Fate',
        description: 'Temporarily bind the fate of two creatures together, creating a mystical connection.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔗',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, bind two creatures for 1d4 rounds. When one takes damage, the other takes 1d4 damage of the same type.',
          'Draw a card and roll 1d20. On a 19-20, bind two creatures for 1d4 rounds. When one takes damage, the other takes 1d6 damage of the same type.',
          'Draw a card and roll 1d20. On an 18-20, bind two creatures for 1d6 rounds. When one takes damage, the other takes 1d8 damage of the same type.',
          'Draw a card and roll 1d20. On a 17-20, bind two creatures for 1d6 rounds. When one takes damage, the other takes 1d10 damage of the same type.',
          'Draw a card and roll 1d20. On a 16-20, bind two creatures for 1d8 rounds. When one takes damage, the other takes 1d12 damage of the same type.'
        ]
      },
      {
        id: 'twist-fate',
        name: 'Twist Fate',
        description: 'Twist the fate of a creature to bring misfortune and chaos.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🌀',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, the target has disadvantage on their next 1d4 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On a 19-20, the target has disadvantage on their next 1d4 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On an 18-20, the target has disadvantage on their next 1d6 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On a 17-20, the target has disadvantage on their next 1d6 attack rolls or saving throws and takes 1d4 psychic damage when they fail.',
          'Draw a card and roll 1d20. On a 16-20, the target has disadvantage on their next 1d8 attack rolls or saving throws and takes 1d6 psychic damage when they fail.'
        ]
      },
      {
        id: 'favorable-fate',
        name: 'Favorable Fate',
        description: 'Twist the fate of a creature to bring good fortune and lucky outcomes.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🍀',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, the target has advantage on their next 1d4 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On a 19-20, the target has advantage on their next 1d4 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On an 18-20, the target has advantage on their next 1d6 attack rolls or saving throws.',
          'Draw a card and roll 1d20. On a 17-20, the target has advantage on their next 1d6 attack rolls or saving throws and gains 1d4 temporary hit points when they succeed.',
          'Draw a card and roll 1d20. On a 16-20, the target has advantage on their next 1d8 attack rolls or saving throws and gains 1d6 temporary hit points when they succeed.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'shared-destiny',
        name: 'Shared Destiny',
        description: 'Create a stronger bond between creatures, causing them to share more than just damage.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['bind-fate'],
        icon: '🤝',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, bind two creatures for 1d4+1 rounds. They share damage (roll 1d6 damage for every 10 damage taken) and conditions (roll 1d6; on a 6, the condition transfers).',
          'Draw a card and roll 1d20. On a 19-20, bind two creatures for 1d6+1 rounds. They share damage (roll 1d8 damage for every 10 damage taken) and conditions (roll 1d6; on a 5-6, the condition transfers).',
          'Draw a card and roll 1d20. On an 18-20, bind two creatures for 1d8+1 rounds. They share damage (roll 1d10 damage for every 10 damage taken) and conditions (roll 1d6; on a 4-6, the condition transfers).'
        ]
      },
      {
        id: 'curse-of-misfortune',
        name: 'Curse of Misfortune',
        description: 'Place a curse of misfortune on a creature, causing chaos to follow their actions.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['twist-fate'],
        icon: '⚰️',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, curse a target for 1d4 rounds. They must roll 2d20 for attack rolls and ability checks and use the lower value. Additionally, they take 1d4 psychic damage at the start of their turn.',
          'Draw a card and roll 1d20. On a 19-20, curse a target for 1d6 rounds. They must roll 2d20 for attack rolls and ability checks and use the lower value. Additionally, they take 1d6 psychic damage at the start of their turn.',
          'Draw a card and roll 1d20. On an 18-20, curse a target for 1d8 rounds. They must roll 2d20 for attack rolls and ability checks and use the lower value. Additionally, they take 1d8 psychic damage at the start of their turn.'
        ]
      },
      {
        id: 'blessing-of-fortune',
        name: 'Blessing of Fortune',
        description: 'Place a blessing of good fortune on a creature, allowing them to manipulate chance.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['favorable-fate'],
        icon: '✨',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, bless a target for 1d4 rounds. They roll 2d20 for attack rolls and ability checks and use the higher value. Additionally, they gain 1d4 temporary hit points at the start of their turn.',
          'Draw a card and roll 1d20. On a 19-20, bless a target for 1d6 rounds. They roll 2d20 for attack rolls and ability checks and use the higher value. Additionally, they gain 1d6 temporary hit points at the start of their turn.',
          'Draw a card and roll 1d20. On an 18-20, bless a target for 1d8 rounds. They roll 2d20 for attack rolls and ability checks and use the higher value. Additionally, they gain 1d8 temporary hit points at the start of their turn.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'fate-transfer',
        name: 'Fate Transfer',
        description: 'Transfer a condition or effect from one creature to another through the threads of fate.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['shared-destiny', 'curse-of-misfortune'],
        icon: '🔄',
        rankDescription: [
          'Draw a card and roll 1d20. On an 18-20, transfer one condition or effect from one creature to another. The receiving creature must roll 1d20; on a 10 or lower, they cannot resist the transfer. If the condition is beneficial, the DC to resist is 15 instead.'
        ]
      },
      {
        id: 'destiny-weaver',
        name: 'Destiny Weaver',
        description: 'Weave the destinies of multiple creatures together into a complex tapestry of fate.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['curse-of-misfortune', 'blessing-of-fortune'],
        icon: '🕸️',
        rankDescription: [
          'Draw a card and roll 1d20. On a 19-20, weave the destinies of up to 1d4+1 creatures together for 1d6 rounds. You can choose to share damage (1d8 for every 10 damage taken), healing (1d6 for every 5 healing received), or conditions (roll 1d6; on a 5-6, the condition is shared) between them.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'rewrite-fate',
        name: 'Rewrite Fate',
        description: 'Completely rewrite a creature\'s fate for a short time, taking control of their destiny.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['fate-transfer'],
        icon: '📝',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, rewrite a creature\'s fate for 1d4 rounds. You decide the outcome of their next action (success or failure). If you choose failure, they take 1d8 psychic damage.',
          'Draw a card and roll 1d20. On a 19-20, rewrite a creature\'s fate for 1d4 rounds. You decide the outcome of their next 1d4 actions (success or failure). If you choose failure, they take 1d10 psychic damage.',
          'Draw a card and roll 1d20. On an 18-20, rewrite a creature\'s fate for 1d6 rounds. You decide the outcome of their next 1d4+1 actions (success or failure). If you choose failure, they take 1d12 psychic damage.'
        ]
      },
      {
        id: 'grand-design',
        name: 'Grand Design',
        description: 'See and manipulate the grand design of fate itself, altering the course of events.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['destiny-weaver'],
        icon: '🌌',
        rankDescription: [
          'Once per day, draw 3 cards from the Fate deck and roll 1d20 three times. For 1d4 rounds, you can use these cards or dice results to replace any roll made by any creature within 30 feet.',
          'Once per day, draw 4 cards from the Fate deck and roll 1d20 four times. For 1d6 rounds, you can use these cards or dice results to replace any roll made by any creature within 60 feet.',
          'Once per day, draw 5 cards from the Fate deck and roll 1d20 five times. For 1d8 rounds, you can use these cards or dice results to replace any roll made by any creature within 90 feet.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'master-of-fate',
        name: 'Master of Fate',
        description: 'Become a true master of fate, able to control the destinies of many creatures at once.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['rewrite-fate', 'grand-design'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you become a Master of Fate. Draw 7 cards from the Fate deck and roll 1d20 seven times. During this time, you can use these cards or dice results to replace any roll made by any creature you can see, force creatures to reroll 1d4 times and take the worst result, or transfer conditions between creatures. Additionally, you can bind the fates of up to 1d6+2 creatures together, sharing damage (1d12 for every 10 damage taken), healing (1d10 for every 5 healing received), and conditions between them as you choose.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'chaotic-surge',
        name: 'Chaotic Surge',
        description: 'Channel pure chaos to create unpredictable but powerful magical effects.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['master-of-fate'],
        icon: '⚡',
        rankDescription: [
          'Draw 3 cards from the Fate deck and roll 1d20. Based on the suits drawn and the die result, unleash a chaotic effect: Hearts (healing 2d8 to allies), Diamonds (shield 2d6 damage), Clubs (deal 3d8 damage to enemies), Spades (curse enemies with disadvantage for 1d4 rounds). On a natural 20, double the effect.',
          'Draw 4 cards from the Fate deck and roll 1d20. Based on the suits drawn and the die result, unleash a chaotic effect: Hearts (healing 3d8 to allies), Diamonds (shield 3d6 damage), Clubs (deal 4d8 damage to enemies), Spades (curse enemies with disadvantage for 1d6 rounds). On a 19-20, double the effect.',
          'Draw 5 cards from the Fate deck and roll 1d20. Based on the suits drawn and the die result, unleash a chaotic effect: Hearts (healing 4d8 to allies), Diamonds (shield 4d6 damage), Clubs (deal 5d8 damage to enemies), Spades (curse enemies with disadvantage for 1d8 rounds). On an 18-20, double the effect.'
        ]
      },
      {
        id: 'pandemonium',
        name: 'Pandemonium',
        description: 'Create a zone of pure chaos where fate and reality are in constant flux.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['master-of-fate'],
        icon: '🌪️',
        rankDescription: [
          'Create a 20-foot radius zone of pandemonium for 1d4 rounds. Within this zone, all creatures must draw a card or roll 1d20 at the start of their turn. On Hearts or 16-20, they gain advantage on all rolls. On Spades or 1-5, they have disadvantage. On Diamonds or 6-10, they gain 1d6 temporary hit points. On Clubs or 11-15, they take 1d6 force damage.',
          'Create a 30-foot radius zone of pandemonium for 1d6 rounds. Within this zone, all creatures must draw a card or roll 1d20 at the start of their turn. On Hearts or 16-20, they gain advantage on all rolls. On Spades or 1-5, they have disadvantage. On Diamonds or 6-10, they gain 1d8 temporary hit points. On Clubs or 11-15, they take 1d8 force damage.',
          'Create a 40-foot radius zone of pandemonium for 1d8 rounds. Within this zone, all creatures must draw a card or roll 1d20 at the start of their turn. On Hearts or 16-20, they gain advantage on all rolls. On Spades or 1-5, they have disadvantage. On Diamonds or 6-10, they gain 1d10 temporary hit points. On Clubs or 11-15, they take 1d10 force damage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-chaos',
        name: 'Avatar of Chaos',
        description: 'Transform into an avatar of pure chaos, embodying the unpredictable nature of fate itself.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['chaotic-surge', 'pandemonium'],
        icon: '🎭',
        rankDescription: [
          'Once per day, transform into an Avatar of Chaos for 1d6+2 rounds. While transformed, at the start of your turn, draw 3 cards and roll 1d20. Based on the results, you gain powerful abilities: matching suits grant you the ability to cast 1d4 spells without expending spell slots; matching values allow you to rewrite the fate of 1d4 creatures; sequences allow you to create a 60-foot zone of pandemonium. Additionally, you gain immunity to divination and enchantment effects, and your spells cannot be countered. However, each time you cast a spell, roll 1d20; on a 1, the spell targets a random creature instead.'
        ]
      },
    ],
  },
  {
    id: 'temporal-manipulation',
    name: 'Temporal Manipulation',
    description: 'Manipulate the flow of time itself, creating paradoxes and altering the timeline to your advantage.',
    icon: '⏳',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'time-slip',
        name: 'Time Slip',
        description: 'Briefly slip through time to avoid danger by stepping between moments.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⏱️',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, you can use your reaction to avoid one attack by briefly stepping out of time. You can move up to 5 feet as part of this reaction.',
          'Draw a card and roll 1d20. On a 19-20, you can use your reaction to avoid one attack by briefly stepping out of time. You can move up to 10 feet as part of this reaction.',
          'Draw a card and roll 1d20. On an 18-20, you can use your reaction to avoid one attack by briefly stepping out of time. You can move up to 15 feet as part of this reaction.',
          'Draw a card and roll 1d20. On a 17-20, you can use your reaction to avoid one attack by briefly stepping out of time. You can move up to 20 feet as part of this reaction.',
          'Draw a card and roll 1d20. On a 16-20, you can use your reaction to avoid one attack by briefly stepping out of time. You can move up to 30 feet as part of this reaction and gain 1d4 temporary hit points.'
        ]
      },
      {
        id: 'temporal-acceleration',
        name: 'Temporal Acceleration',
        description: 'Accelerate your personal time flow to move faster than those around you.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⚡',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, your movement speed increases by 1d4 × 5 feet for 1d4 rounds.',
          'Draw a card and roll 1d20. On a 19-20, your movement speed increases by 1d6 × 5 feet for 1d4 rounds.',
          'Draw a card and roll 1d20. On an 18-20, your movement speed increases by 1d8 × 5 feet for 1d6 rounds.',
          'Draw a card and roll 1d20. On a 17-20, your movement speed increases by 1d10 × 5 feet for 1d6 rounds.',
          'Draw a card and roll 1d20. On a 16-20, your movement speed increases by 1d12 × 5 feet for 1d8 rounds and you gain advantage on Dexterity saving throws during this time.'
        ]
      },
      {
        id: 'temporal-insight',
        name: 'Temporal Insight',
        description: 'Gain insight from possible futures to improve your skills by seeing outcomes before they happen.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔍',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, gain 1d4 to one ability check as you glimpse its outcome in advance.',
          'Draw a card and roll 1d20. On a 19-20, gain 1d6 to one ability check as you glimpse its outcome in advance.',
          'Draw a card and roll 1d20. On an 18-20, gain 1d8 to one ability check as you glimpse its outcome in advance.',
          'Draw a card and roll 1d20. On a 17-20, gain 1d10 to one ability check as you glimpse its outcome in advance.',
          'Draw a card and roll 1d20. On a 16-20, gain 1d12 to one ability check as you glimpse its outcome in advance and gain advantage on your next saving throw.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'time-loop',
        name: 'Time Loop',
        description: 'Create a small loop in time to retry an action that failed the first time.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['time-slip'],
        icon: '🔄',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, after failing an attack roll or ability check, you can rewind time and try again with a +1d4 bonus to the roll.',
          'Draw a card and roll 1d20. On a 19-20, after failing an attack roll or ability check, you can rewind time and try again with a +1d6 bonus to the roll.',
          'Draw a card and roll 1d20. On an 18-20, after failing an attack roll or ability check, you can rewind time and try again with advantage and a +1d4 bonus to the roll.'
        ]
      },
      {
        id: 'haste',
        name: 'Haste',
        description: 'Dramatically increase your speed for a short time by accelerating your personal timeline.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['temporal-acceleration'],
        icon: '💨',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, gain an additional action on your turn for 1d4 rounds. At the end of this effect, roll 1d6; on a 1, you are slowed for 1 round.',
          'Draw a card and roll 1d20. On a 19-20, gain an additional action on your turn for 1d4 rounds. At the end of this effect, roll 1d6; on a 1, you are slowed for 1 round.',
          'Draw a card and roll 1d20. On an 18-20, gain an additional action on your turn for 1d6 rounds. At the end of this effect, roll 1d6; on a 1, you are slowed for 1 round.'
        ]
      },
      {
        id: 'slow',
        name: 'Slow',
        description: 'Slow down time around a target, making them move and act as if trapped in molasses.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['temporal-insight'],
        icon: '🐢',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, slow a target for 1d4 rounds. Their movement speed is halved, and they suffer a -1d4 penalty to AC and Dexterity saving throws.',
          'Draw a card and roll 1d20. On a 19-20, slow a target for 1d6 rounds. Their movement speed is halved, and they suffer a -1d6 penalty to AC and Dexterity saving throws.',
          'Draw a card and roll 1d20. On an 18-20, slow a target for 1d8 rounds. Their movement speed is halved, and they suffer a -1d8 penalty to AC and Dexterity saving throws. Additionally, they can only take an action or a bonus action on their turn, not both.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'temporal-stasis',
        name: 'Temporal Stasis',
        description: 'Freeze a target in time, removing them from the timeline temporarily.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['time-loop', 'haste'],
        icon: '❄️',
        rankDescription: [
          'Draw a card and roll 1d20. On a 19-20, freeze a target in time for 1d4 rounds. While frozen, they cannot move, take actions, or be affected by any effects, but they also cannot be harmed. When the effect ends, the target has no memory of time passing.'
        ]
      },
      {
        id: 'time-dilation',
        name: 'Time Dilation',
        description: 'Create a field of dilated time that affects all creatures within it differently.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['haste', 'slow'],
        icon: '⏲️',
        rankDescription: [
          'Draw a card and roll 1d20. On an 18-20, create a 20-foot radius field of dilated time for 1d6 rounds. Allies within the field gain the benefits of Haste (additional action, +1d6 to AC), while enemies are affected by Slow (halved movement, -1d6 to AC and Dexterity saves).'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'rewind',
        name: 'Rewind',
        description: 'Rewind time to undo recent events, giving you a second chance to alter the outcome.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['temporal-stasis'],
        icon: '⏪',
        rankDescription: [
          'Once per day, draw a card and roll 1d20. On a 20, rewind time by 1d4 rounds, returning all creatures to their positions and health values from that time. You retain knowledge of what originally happened.',
          'Once per day, draw a card and roll 1d20. On a 19-20, rewind time by 1d6 rounds, returning all creatures to their positions and health values from that time. You retain knowledge of what originally happened.',
          'Once per day, draw a card and roll 1d20. On an 18-20, rewind time by 1d8 rounds, returning all creatures to their positions and health values from that time. You retain knowledge of what originally happened, and you gain advantage on all rolls during the first round after rewinding.'
        ]
      },
      {
        id: 'temporal-duplicate',
        name: 'Temporal Duplicate',
        description: 'Pull a duplicate of yourself from another timeline to assist you in battle.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['time-dilation'],
        icon: '👥',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, summon a duplicate of yourself from another timeline for 1d4 rounds. It has 50% of your hit points and can take one action on your turn.',
          'Draw a card and roll 1d20. On a 19-20, summon a duplicate of yourself from another timeline for 1d6 rounds. It has 75% of your hit points and can take one action on your turn.',
          'Draw a card and roll 1d20. On an 18-20, summon 1d2 duplicates of yourself from another timeline for 1d8 rounds. Each has 75% of your hit points and can take one action on your turn. When a duplicate is reduced to 0 hit points, roll 1d20; on a 20, it splits into two duplicates with 25% of your hit points each.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'time-lord',
        name: 'Time Lord',
        description: 'Gain complete mastery over time itself, bending it to your will.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['rewind', 'temporal-duplicate'],
        icon: '⌛',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you become a Time Lord. During this time, you can take two turns for each of your normal turns, you are immune to the effects of Slow and similar spells, and you can use Rewind once without expending its normal use. Additionally, you can use Temporal Stasis on up to 1d4 targets simultaneously, and your movement doesn\'t provoke opportunity attacks as you briefly step between moments.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'paradox-manipulation',
        name: 'Paradox Manipulation',
        description: 'Create and manipulate temporal paradoxes to achieve seemingly impossible effects.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['time-lord'],
        icon: '🌀',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, create a temporal paradox that allows you to be in two places at once for 1d4 rounds. You can take two separate actions on your turn, potentially targeting the same creature twice with different effects.',
          'Draw a card and roll 1d20. On a 19-20, create a temporal paradox that allows you to be in two places at once for 1d6 rounds. You can take two separate actions on your turn, potentially targeting the same creature twice with different effects.',
          'Draw a card and roll 1d20. On an 18-20, create a temporal paradox that allows you to be in three places at once for 1d8 rounds. You can take three separate actions on your turn, potentially targeting the same creature multiple times with different effects. Each time you create this paradox, roll 1d20; on a 1, you suffer 2d10 force damage as the timeline attempts to correct itself.'
        ]
      },
      {
        id: 'chronomancy',
        name: 'Chronomancy',
        description: 'Master the arcane art of chronomancy, allowing you to cast spells through time itself.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['time-lord'],
        icon: '🕰️',
        rankDescription: [
          'Draw a card and roll 1d20. On a 20, your spells can affect targets across time. For 1d4 rounds, your spells can target creatures up to 1d4 rounds in the past or future, bypassing temporary immunities or absences.',
          'Draw a card and roll 1d20. On a 19-20, your spells can affect targets across time. For 1d6 rounds, your spells can target creatures up to 1d6 rounds in the past or future, bypassing temporary immunities or absences.',
          'Draw a card and roll 1d20. On an 18-20, your spells can affect targets across time. For 1d8 rounds, your spells can target creatures up to 1d8 rounds in the past or future, bypassing temporary immunities or absences. Additionally, you can cast the same spell twice in a single action, targeting the same creature at different points in its timeline.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'temporal-archon',
        name: 'Temporal Archon',
        description: 'Transcend mortal limitations to become a Temporal Archon, a being who exists across multiple timelines simultaneously.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['paradox-manipulation', 'chronomancy'],
        icon: '👁️',
        rankDescription: [
          'Once per day, transform into a Temporal Archon for 1d6+2 rounds. While transformed, you exist in multiple timelines simultaneously. You gain the following benefits: immunity to time-affecting spells; the ability to take three turns for each of your normal turns; the ability to cast spells that affect targets up to 1d10 rounds in the past or future; and the power to temporarily remove a creature from the timeline entirely for 1d4 rounds (no saving throw). Additionally, you can see all possible futures, granting you advantage on all rolls and the ability to reroll any failed save or attack once per round. When the transformation ends, roll 1d20; on a 1, you are shunted to a random point in time for 1d4 days.'
        ]
      },
    ],
  }
];

export default fateWeaverTalentTrees;
