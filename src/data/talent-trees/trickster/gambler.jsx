// Talent trees for the Gambler class
const gamblerTalentTrees = [
  {
    id: 'coin-flipper',
    name: 'Coin-Flipper',
    description: 'Focus on the simple coin-flip mechanic, becoming either a Precision Flipper or a Chaos Flipper.',
    icon: '🪙',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'lucky-strike',
        name: 'Lucky Strike',
        description: 'Your attacks have a chance to be exceptionally lucky.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎯',
        rankDescription: [
          'Flip a coin before making an attack. On heads, roll 1d4 additional damage. On tails, no effect.',
          'Flip a coin before making an attack. On heads, roll 1d6 additional damage. On tails, no effect.',
          'Flip a coin before making an attack. On heads, roll 1d8 additional damage. On tails, no effect.',
          'Flip a coin before making an attack. On heads, roll 1d10 additional damage. On tails, no effect.',
          'Flip a coin before making an attack. On heads, roll 1d12 additional damage. On tails, no effect.'
        ]
      },
      {
        id: 'fortunate-dodge',
        name: 'Fortunate Dodge',
        description: 'You have a chance to dodge attacks through sheer luck.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💨',
        rankDescription: [
          'When you are hit by an attack, flip a coin. On heads, reduce the damage by 1d4. On tails, no effect.',
          'When you are hit by an attack, flip a coin. On heads, reduce the damage by 1d6. On tails, no effect.',
          'When you are hit by an attack, flip a coin. On heads, reduce the damage by 1d8. On tails, no effect.',
          'When you are hit by an attack, flip a coin. On heads, reduce the damage by 1d10. On tails, no effect.',
          'When you are hit by an attack, flip a coin. On heads, reduce the damage by 1d12. On tails, no effect.'
        ]
      },
      {
        id: 'lucky-find',
        name: 'Lucky Find',
        description: 'You have a knack for finding valuable items and hidden objects.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💰',
        rankDescription: [
          'When searching an area, flip a coin. On heads, roll 1d4; on a 4, you find something of value even if there was nothing to find originally.',
          'When searching an area, flip a coin. On heads, roll 1d6; on a 5-6, you find something of value even if there was nothing to find originally.',
          'When searching an area, flip a coin. On heads, roll 1d8; on a 6-8, you find something of value even if there was nothing to find originally.',
          'When searching an area, flip a coin. On heads, roll 1d10; on a 7-10, you find something of value even if there was nothing to find originally.',
          'When searching an area, flip a coin. On heads, roll 1d12; on a 8-12, you find something of value even if there was nothing to find originally.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'loaded-dice',
        name: 'Loaded Dice',
        description: 'You can manipulate probability to improve your chances of success.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['lucky-strike'],
        icon: '🎲',
        rankDescription: [
          'Once per encounter, you can flip two coins for any Coin-Flipper ability and choose which result to use.',
          'Twice per encounter, you can flip two coins for any Coin-Flipper ability and choose which result to use.',
          'Three times per encounter, you can flip two coins for any Coin-Flipper ability and choose which result to use.'
        ]
      },
      {
        id: 'stroke-of-luck',
        name: 'Stroke of Luck',
        description: 'Sometimes, you get an unexpected stroke of luck that saves you from danger.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['fortunate-dodge'],
        icon: '✨',
        rankDescription: [
          'Once per day, when you would take damage that would reduce you to 0 hit points, flip a coin. On heads, you instead drop to 1 hit point and gain 1d4 temporary hit points.',
          'Once per day, when you would take damage that would reduce you to 0 hit points, flip a coin. On heads, you instead drop to 1 hit point and gain 1d6 temporary hit points.',
          'Once per day, when you would take damage that would reduce you to 0 hit points, flip a coin. On heads, you instead drop to 1 hit point and gain 1d8 temporary hit points.'
        ]
      },
      {
        id: 'gamblers-intuition',
        name: 'Gambler\'s Intuition',
        description: 'Your intuition helps you make the right choices.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['lucky-find'],
        icon: '🧠',
        rankDescription: [
          'When faced with a choice (such as which door to open), flip a coin. On heads, roll 1d4; on a 4, you intuitively know the best option.',
          'When faced with a choice (such as which door to open), flip a coin. On heads, roll 1d6; on a 5-6, you intuitively know the best option.',
          'When faced with a choice (such as which door to open), flip a coin. On heads, roll 1d8; on a 6-8, you intuitively know the best option.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'double-or-nothing',
        name: 'Double or Nothing',
        description: 'Take a big risk for a potentially big reward.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['loaded-dice', 'stroke-of-luck'],
        icon: '🎰',
        rankDescription: [
          'Before making an attack roll, ability check, or saving throw, you can declare "Double or Nothing." Flip a coin. On heads, you gain a +1d6 bonus to the roll. On tails, you take a -1d6 penalty to the roll.'
        ]
      },
      {
        id: 'lucky-streak',
        name: 'Lucky Streak',
        description: 'Sometimes you get on a roll where everything goes your way.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['stroke-of-luck', 'gamblers-intuition'],
        icon: '🔥',
        rankDescription: [
          'When you get heads on three consecutive coin flips, you enter a Lucky Streak for 1d4 rounds. While on a Lucky Streak, you can flip two coins for all Coin-Flipper abilities and choose which one to use.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'cheat-fate',
        name: 'Cheat Fate',
        description: 'You can cheat fate itself to avoid disaster.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['double-or-nothing'],
        icon: '🃏',
        rankDescription: [
          'Once per day, after seeing the result of a coin flip that affects you, you can flip the coin again and use the new result.',
          'Twice per day, after seeing the result of a coin flip that affects you, you can flip the coin again and use the new result.',
          'Three times per day, after seeing the result of a coin flip that affects you, you can flip the coin again and use the new result. If you get heads on this second flip, gain 1d4 Luck Points.'
        ]
      },
      {
        id: 'fortune-favors',
        name: 'Fortune Favors',
        description: 'Fortune truly favors you, granting you exceptional luck.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['lucky-streak'],
        icon: '🌟',
        rankDescription: [
          'Once per day, for 1d4 rounds, all your coin flips count as heads.',
          'Once per day, for 1d6 rounds, all your coin flips count as heads.',
          'Once per day, for 1d8 rounds, all your coin flips count as heads and you gain an additional 1d4 damage on all attacks.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'master-of-luck',
        name: 'Master of Luck',
        description: 'You have mastered luck itself, bending probability to your will.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['cheat-fate', 'fortune-favors'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you become a Master of Luck. During this time, you can choose the result of any coin flip you make without actually flipping the coin. Additionally, your critical hit range expands to 18-20, and you gain advantage on all saving throws.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'fate-manipulation',
        name: 'Fate Manipulation',
        description: 'Manipulate the threads of fate to change outcomes in your favor.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['master-of-luck'],
        icon: '🧵',
        rankDescription: [
          'Once per encounter, after seeing the result of any roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 15-20, the target must use the new result.',
          'Twice per encounter, after seeing the result of any roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 13-20, the target must use the new result.',
          'Three times per encounter, after seeing the result of any roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 11-20, the target must use the new result.'
        ]
      },
      {
        id: 'gamblers-ruin',
        name: 'Gambler\'s Ruin',
        description: 'Force an enemy to gamble with their fate, potentially leading to their ruin.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['master-of-luck'],
        icon: '💀',
        rankDescription: [
          'Once per day, target an enemy within 60 feet. They must flip a coin (you flip for them). On heads, they take 4d6 psychic damage. On tails, they take 1d6 psychic damage.',
          'Once per day, target an enemy within 60 feet. They must flip a coin (you flip for them). On heads, they take 6d6 psychic damage. On tails, they take 1d6 psychic damage.',
          'Once per day, target an enemy within 60 feet. They must flip a coin (you flip for them). On heads, they take 8d6 psychic damage and are stunned for 1 round. On tails, they take 1d6 psychic damage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-fortune',
        name: 'Avatar of Fortune',
        description: 'Become an avatar of fortune itself, embodying the very essence of luck.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['fate-manipulation', 'gamblers-ruin'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Fortune. During this time, you automatically succeed on all coin flips without flipping, and you can force one enemy within 60 feet to automatically fail on all coin flips. Additionally, your critical hit range expands to 16-20, and you gain immunity to critical hits against you.'
        ]
      },
    ],
  },
  {
    id: 'dice-mastery',
    name: 'Dice Mastery',
    description: 'Enhance dice rolling, luck accumulation, and reroll mechanics.',
    icon: '🎲',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'lucky-roll',
        name: 'Lucky Roll',
        description: 'Your dice rolls have a chance to be exceptionally lucky.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎲',
        rankDescription: [
          'When you roll a d20 for an attack, saving throw, or ability check, roll an additional d4. On a 4, add the d4 to your result.',
          'When you roll a d20 for an attack, saving throw, or ability check, roll an additional d4. On a 3-4, add the d4 to your result.',
          'When you roll a d20 for an attack, saving throw, or ability check, roll an additional d6. On a 5-6, add the d6 to your result.',
          'When you roll a d20 for an attack, saving throw, or ability check, roll an additional d6. On a 4-6, add the d6 to your result.',
          'When you roll a d20 for an attack, saving throw, or ability check, roll an additional d8. On a 6-8, add the d8 to your result.'
        ]
      },
      {
        id: 'risk-stacks',
        name: 'Risk Stacks',
        description: 'Accumulate Risk Stacks to power your abilities.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '📚',
        rankDescription: [
          'When you roll a natural 20 on an attack roll, saving throw, or ability check, gain 1 Risk Stack. You can have a maximum of 3 Risk Stacks at a time.',
          'When you roll a natural 19-20 on an attack roll, saving throw, or ability check, gain 1 Risk Stack. You can have a maximum of 3 Risk Stacks at a time.',
          'When you roll a natural 18-20 on an attack roll, saving throw, or ability check, gain 1 Risk Stack. You can have a maximum of 4 Risk Stacks at a time.',
          'When you roll a natural 17-20 on an attack roll, saving throw, or ability check, gain 1 Risk Stack. You can have a maximum of 4 Risk Stacks at a time.',
          'When you roll a natural 16-20 on an attack roll, saving throw, or ability check, gain 1 Risk Stack. You can have a maximum of 5 Risk Stacks at a time.'
        ]
      },
      {
        id: 'reroll',
        name: 'Reroll',
        description: 'Reroll dice to improve your chances of success.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔄',
        rankDescription: [
          'Once per day, you can reroll a d20 for an attack roll, saving throw, or ability check. You must use the new result.',
          'Twice per day, you can reroll a d20 for an attack roll, saving throw, or ability check. You must use the new result.',
          'Three times per day, you can reroll a d20 for an attack roll, saving throw, or ability check. You must use the new result.',
          'Four times per day, you can reroll a d20 for an attack roll, saving throw, or ability check. You must use the new result.',
          'Five times per day, you can reroll a d20 for an attack roll, saving throw, or ability check. You must use the new result.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'critical-success',
        name: 'Critical Success',
        description: 'Your critical hits are more powerful.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['lucky-roll'],
        icon: '💥',
        rankDescription: [
          'When you roll a natural 20 on an attack roll, roll an additional 1d6 damage.',
          'When you roll a natural 20 on an attack roll, roll an additional 1d8 damage.',
          'When you roll a natural 20 on an attack roll, roll an additional 1d10 damage.'
        ]
      },
      {
        id: 'risk-reward',
        name: 'Risk Reward',
        description: 'Spend Risk Stacks to power your abilities.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['risk-stacks'],
        icon: '💰',
        rankDescription: [
          'You can spend 1 Risk Stack to add 1d4 to an attack roll, saving throw, or ability check after seeing the result.',
          'You can spend 1 Risk Stack to add 1d6 to an attack roll, saving throw, or ability check after seeing the result.',
          'You can spend 1 Risk Stack to add 1d8 to an attack roll, saving throw, or ability check after seeing the result.'
        ]
      },
      {
        id: 'second-chance',
        name: 'Second Chance',
        description: 'Get a second chance at success.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['reroll'],
        icon: '🎯',
        rankDescription: [
          'When you use Reroll, roll 2d20 and take the higher result.',
          'When you use Reroll, roll 2d20 and take the higher result. If both dice show 10 or lower, you can roll a third d20 and take the highest of all three.',
          'When you use Reroll, roll 2d20 and take the higher result. If both dice show 15 or lower, you can roll a third d20 and take the highest of all three.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'dice-control',
        name: 'Dice Control',
        description: 'Control the outcome of your dice rolls.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['critical-success', 'risk-reward'],
        icon: '🎮',
        rankDescription: [
          'Once per day, instead of rolling a d20 for an attack roll, saving throw, or ability check, you can choose to treat the roll as a 15.'
        ]
      },
      {
        id: 'risk-aura',
        name: 'Risk Aura',
        description: 'Your aura of risk affects those around you.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['risk-reward', 'second-chance'],
        icon: '🌀',
        rankDescription: [
          'You can spend 2 Risk Stacks to grant an ally within 30 feet advantage on their next attack roll, saving throw, or ability check.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'critical-mastery',
        name: 'Critical Mastery',
        description: 'Master critical hits, making them more frequent and powerful.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['dice-control'],
        icon: '🎯',
        rankDescription: [
          'Your critical hit range expands to 19-20. When you roll a natural 20, roll an additional 1d8 damage and gain 1 Risk Stack.',
          'Your critical hit range expands to 19-20. When you roll a natural 20, roll an additional 1d10 damage and gain 1 Risk Stack.',
          'Your critical hit range expands to 18-20. When you roll a natural 20, roll an additional 1d12 damage and gain 1 Risk Stack.'
        ]
      },
      {
        id: 'risk-explosion',
        name: 'Risk Explosion',
        description: 'Spend all your Risk Stacks for a powerful effect.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['risk-aura'],
        icon: '💥',
        rankDescription: [
          'You can spend all your Risk Stacks to deal 1d6 damage per stack to a target within 60 feet.',
          'You can spend all your Risk Stacks to deal 1d8 damage per stack to a target within 60 feet.',
          'You can spend all your Risk Stacks to deal 1d10 damage per stack to a target within 60 feet.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'master-of-dice',
        name: 'Master of Dice',
        description: 'You have mastered dice, gaining incredible power.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['critical-mastery', 'risk-explosion'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you become a Master of Dice. During this time, your critical hit range expands to 17-20, you gain 1 Risk Stack whenever you roll a natural 17 or higher, and you can use Reroll without expending its normal uses.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'probability-manipulation',
        name: 'Probability Manipulation',
        description: 'Manipulate probability to change outcomes in your favor.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['master-of-dice'],
        icon: '🎲',
        rankDescription: [
          'Once per encounter, after seeing the result of any d20 roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 15-20, the target must use the new result.',
          'Twice per encounter, after seeing the result of any d20 roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 13-20, the target must use the new result.',
          'Three times per encounter, after seeing the result of any d20 roll that affects you or an ally within 30 feet, you can force a reroll. Roll 1d20; on a 11-20, the target must use the new result.'
        ]
      },
      {
        id: 'risk-mastery',
        name: 'Risk Mastery',
        description: 'Master the use of Risk Stacks, gaining powerful new ways to use them.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['master-of-dice'],
        icon: '📚',
        rankDescription: [
          'You can now have up to 7 Risk Stacks at a time. You can spend 3 Risk Stacks to automatically succeed on a saving throw.',
          'You can now have up to 8 Risk Stacks at a time. You can spend 3 Risk Stacks to automatically succeed on a saving throw or to cause an enemy to automatically fail a saving throw against one of your abilities.',
          'You can now have up to 10 Risk Stacks at a time. You can spend 3 Risk Stacks to automatically succeed on a saving throw or to cause an enemy to automatically fail a saving throw against one of your abilities. Additionally, you can spend 5 Risk Stacks to take an extra action on your turn.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-chance',
        name: 'Avatar of Chance',
        description: 'Become an avatar of chance itself, embodying the very essence of probability.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['probability-manipulation', 'risk-mastery'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Chance. During this time, you roll an additional d20 for all attack rolls, saving throws, and ability checks and take the higher result. Additionally, your critical hit range expands to 16-20, you gain 1 Risk Stack at the start of each of your turns, and you can use Risk Explosion without spending Risk Stacks (though the damage is calculated as if you spent all your current stacks).'
        ]
      },
    ],
  },
  {
    id: 'cardsharp',
    name: 'Cardsharp',
    description: 'Focus on cards, deception, and misdirection, blending chance with trickery.',
    icon: '🃏',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'card-throw',
        name: 'Card Throw',
        description: 'Throw magically enhanced cards as weapons.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎴',
        rankDescription: [
          'Throw a card as a ranged attack with a range of 30 feet. Draw a card from your deck; the damage depends on the suit: Hearts (1d4 fire), Diamonds (1d4 force), Clubs (1d4 bludgeoning), Spades (1d4 slashing).',
          'Throw a card as a ranged attack with a range of 40 feet. Draw a card from your deck; the damage depends on the suit: Hearts (1d6 fire), Diamonds (1d6 force), Clubs (1d6 bludgeoning), Spades (1d6 slashing).',
          'Throw a card as a ranged attack with a range of 50 feet. Draw a card from your deck; the damage depends on the suit: Hearts (1d8 fire), Diamonds (1d8 force), Clubs (1d8 bludgeoning), Spades (1d8 slashing).',
          'Throw a card as a ranged attack with a range of 60 feet. Draw a card from your deck; the damage depends on the suit: Hearts (1d10 fire), Diamonds (1d10 force), Clubs (1d10 bludgeoning), Spades (1d10 slashing).',
          'Throw a card as a ranged attack with a range of 60 feet. Draw a card from your deck; the damage depends on the suit: Hearts (1d12 fire), Diamonds (1d12 force), Clubs (1d12 bludgeoning), Spades (1d12 slashing).'
        ]
      },
      {
        id: 'card-shield',
        name: 'Card Shield',
        description: 'Create a shield of spinning cards to protect yourself.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🛡️',
        rankDescription: [
          'Draw a card from your deck. Create a shield of spinning cards that grants +1 AC for 1d4 rounds. The shield gains additional properties based on the suit: Hearts (resistance to fire), Diamonds (resistance to force), Clubs (resistance to bludgeoning), Spades (resistance to slashing).',
          'Draw a card from your deck. Create a shield of spinning cards that grants +2 AC for 1d4 rounds. The shield gains additional properties based on the suit: Hearts (resistance to fire), Diamonds (resistance to force), Clubs (resistance to bludgeoning), Spades (resistance to slashing).',
          'Draw a card from your deck. Create a shield of spinning cards that grants +2 AC for 1d6 rounds. The shield gains additional properties based on the suit: Hearts (resistance to fire), Diamonds (resistance to force), Clubs (resistance to bludgeoning), Spades (resistance to slashing).',
          'Draw a card from your deck. Create a shield of spinning cards that grants +3 AC for 1d6 rounds. The shield gains additional properties based on the suit: Hearts (resistance to fire), Diamonds (resistance to force), Clubs (resistance to bludgeoning), Spades (resistance to slashing).',
          'Draw a card from your deck. Create a shield of spinning cards that grants +3 AC for 1d8 rounds. The shield gains additional properties based on the suit: Hearts (resistance to fire), Diamonds (resistance to force), Clubs (resistance to bludgeoning), Spades (resistance to slashing).'
        ]
      },
      {
        id: 'card-reading',
        name: 'Card Reading',
        description: 'Read the cards to gain insight into a situation.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📖',
        rankDescription: [
          'Draw 1 card from your deck and interpret it to gain insight into a situation. Roll 1d20; on a 20, the GM provides a hint based on the card drawn.',
          'Draw 2 cards from your deck and interpret them to gain insight into a situation. Roll 1d20; on a 19-20, the GM provides a hint based on the cards drawn.',
          'Draw 3 cards from your deck and interpret them to gain insight into a situation. Roll 1d20; on an 18-20, the GM provides a hint based on the cards drawn.',
          'Draw 3 cards from your deck and interpret them to gain insight into a situation. Roll 1d20; on a 17-20, the GM provides a hint based on the cards drawn.',
          'Draw 3 cards from your deck and interpret them to gain insight into a situation. Roll 1d20; on a 16-20, the GM provides a hint based on the cards drawn.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'royal-flush',
        name: 'Royal Flush',
        description: 'Throw multiple cards in a devastating pattern.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['card-throw'],
        icon: '👑',
        rankDescription: [
          'Draw 3 cards from your deck and throw them at once in a 15-foot cone. Each creature in the area must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier) or take damage as if hit by your Card Throw for each card.',
          'Draw 4 cards from your deck and throw them at once in a 20-foot cone. Each creature in the area must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier) or take damage as if hit by your Card Throw for each card.',
          'Draw 5 cards from your deck and throw them at once in a 25-foot cone. Each creature in the area must make a Dexterity saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier) or take damage as if hit by your Card Throw for each card.'
        ]
      },
      {
        id: 'card-trick',
        name: 'Card Trick',
        description: 'Use your cards to create magical effects.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['card-shield'],
        icon: '✨',
        rankDescription: [
          'Draw a card from your deck and create a magical effect based on its suit: Hearts (heal 1d6 HP), Diamonds (create light for 1d4 hours), Clubs (knock on a door or container), Spades (create darkness for 1d4 rounds).',
          'Draw a card from your deck and create a magical effect based on its suit: Hearts (heal 1d8 HP), Diamonds (create light for 1d6 hours), Clubs (knock on a door or container, even if magically locked), Spades (create darkness for 1d6 rounds).',
          'Draw a card from your deck and create a magical effect based on its suit: Hearts (heal 1d10 HP), Diamonds (create light for 1d8 hours), Clubs (knock on a door or container, even if magically locked with advantage), Spades (create darkness for 1d8 rounds).'
        ]
      },
      {
        id: 'card-divination',
        name: 'Card Divination',
        description: 'Use your cards to divine the future.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['card-reading'],
        icon: '🔮',
        rankDescription: [
          'Once per day, draw 3 cards from your deck and perform a detailed card reading. Roll 1d20; on a 15-20, gain advantage on all ability checks related to a specific task for 1d4 hours.',
          'Once per day, draw 3 cards from your deck and perform a detailed card reading. Roll 1d20; on a 13-20, gain advantage on all ability checks related to a specific task for 1d6 hours.',
          'Once per day, draw 3 cards from your deck and perform a detailed card reading. Roll 1d20; on a 11-20, gain advantage on all ability checks related to a specific task for 1d8 hours.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'card-entrapment',
        name: 'Card Entrapment',
        description: 'Trap a creature or object within a card.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['royal-flush', 'card-trick'],
        icon: '📥',
        rankDescription: [
          'Target a creature or object of size Large or smaller within 30 feet. Draw a card from your deck. Roll 1d20; on a 15-20, the target must make a Wisdom saving throw (DC = 8 + your proficiency bonus + your Charisma modifier) or be trapped in the card for 1d4 rounds. While trapped, the creature is incapacitated and the card cannot be damaged. When the effect ends or the card is torn, the target reappears in the nearest unoccupied space.'
        ]
      },
      {
        id: 'house-of-cards',
        name: 'House of Cards',
        description: 'Create a structure made of magical cards.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['card-trick', 'card-divination'],
        icon: '🏠',
        rankDescription: [
          'Draw 5 cards from your deck. Roll 1d20; on a 15-20, create a structure made of cards up to 10 feet on each side. The structure has AC 15, 50 hit points, and is immune to psychic and poison damage. The structure lasts for 1d8 hours or until destroyed.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'deck-of-destruction',
        name: 'Deck of Destruction',
        description: 'Your card attacks become more powerful and versatile.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['card-entrapment'],
        icon: '💥',
        rankDescription: [
          'Your Card Throw and Royal Flush deal an additional 1d6 damage. Additionally, face cards have special effects: Jack (push target 10 feet), Queen (target is slowed for 1 round), King (target takes 1d4 ongoing damage for 1d4 rounds), Ace (target is stunned for 1 round on a failed Constitution save).',
          'Your Card Throw and Royal Flush deal an additional 1d8 damage. Additionally, face cards have special effects: Jack (push target 15 feet), Queen (target is slowed for 2 rounds), King (target takes 1d6 ongoing damage for 1d4 rounds), Ace (target is stunned for 1 round on a failed Constitution save).',
          'Your Card Throw and Royal Flush deal an additional 1d10 damage. Additionally, face cards have special effects: Jack (push target 20 feet), Queen (target is slowed for 3 rounds), King (target takes 1d8 ongoing damage for 1d6 rounds), Ace (target is stunned for 1d4 rounds on a failed Constitution save).'
        ]
      },
      {
        id: 'deck-of-wonders',
        name: 'Deck of Wonders',
        description: 'Your cards can produce wondrous magical effects.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['house-of-cards'],
        icon: '🎆',
        rankDescription: [
          'Once per day, draw a card from your deck and roll 1d20. On a 15-20, create a powerful magical effect based on the card\'s value and suit. Effects range from summoning a 1d4 HD creature (Clubs) to creating a wall of fire (Hearts) to teleporting up to 60 feet (Diamonds) to turning invisible for 1d4 rounds (Spades).',
          'Twice per day, draw a card from your deck and roll 1d20. On a 13-20, create a powerful magical effect based on the card\'s value and suit. Effects range from summoning a 1d6 HD creature (Clubs) to creating a wall of fire (Hearts) to teleporting up to 120 feet (Diamonds) to turning invisible for 1d6 rounds (Spades).',
          'Three times per day, draw a card from your deck and roll 1d20. On a 11-20, create a powerful magical effect based on the card\'s value and suit. Effects range from summoning a 1d8 HD creature (Clubs) to creating a wall of fire (Hearts) to teleporting up to 300 feet (Diamonds) to turning invisible for 1d8 rounds (Spades).'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'master-of-cards',
        name: 'Master of Cards',
        description: 'You have mastered card magic, gaining incredible power.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['deck-of-destruction', 'deck-of-wonders'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d4+1 minutes, you become a Master of Cards. During this time, your Card Throw deals double damage, you can use Royal Flush without drawing cards (you choose the suits), and you can use Card Entrapment on up to three targets simultaneously. Additionally, you can use Deck of Wonders without expending its normal uses.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'card-mastery',
        name: 'Card Mastery',
        description: 'Achieve complete mastery over card magic.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['master-of-cards'],
        icon: '🃏',
        rankDescription: [
          'When you draw a card for any Card ability, draw 2 cards and choose which one to use. The unused card is returned to the deck.',
          'When you draw a card for any Card ability, draw 3 cards and choose which one to use. The unused cards are returned to the deck.',
          'When you draw a card for any Card ability, draw 4 cards and choose which one to use. The unused cards are returned to the deck.'
        ]
      },
      {
        id: 'deck-of-fate',
        name: 'Deck of Fate',
        description: 'Your deck becomes a powerful artifact that can alter fate itself.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['master-of-cards'],
        icon: '✨',
        rankDescription: [
          'Once per day, draw a card from your deck. Based on the card drawn, you can alter one aspect of reality within 30 feet for 1d4 rounds (such as creating/removing a wall, changing terrain, or altering an object\'s properties).',
          'Once per day, draw a card from your deck. Based on the card drawn, you can alter two aspects of reality within 60 feet for 1d6 rounds.',
          'Once per day, draw a card from your deck. Based on the card drawn, you can alter three aspects of reality within 90 feet for 1d8 rounds.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-cards',
        name: 'Avatar of Cards',
        description: 'Become an avatar of cards itself, embodying the very essence of card magic.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['card-mastery', 'deck-of-fate'],
        icon: 'A',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Cards. During this time, you can draw 5 cards for any Card ability and choose which one to use. Additionally, your Card Throw deals triple damage, you can use Royal Flush as a bonus action, and you can use Deck of Wonders without expending its normal uses. Finally, you are surrounded by a swirling barrier of cards that grants you +5 AC and resistance to all damage.'
        ]
      },
    ],
  }
];

export default gamblerTalentTrees;