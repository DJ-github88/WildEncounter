// Base spells and abilities for the Gambler class
const gamblerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Gambling Mechanics',
    description: 'The Gambler\'s mechanics revolve around games of chance. Abilities often use coin flips, dice rolls, or card draws to determine effects, with unique resources to fuel or modify those outcomes.',
    mechanics: [
      'Chance Tools: The Gambler regularly flips coins, rolls dice, or draws cards as part of abilities. A coin flip yields a simple 50/50 result (heads vs. tails), a die roll (often d6, d20, or multiple dice) yields graded outcomes, and card draws from a special deck can produce suit-based effects.',
      'Luck Points: A pool of points the Gambler can earn or refresh (e.g. after resting) and spend to influence rolls. For instance, the Gambler might spend a Luck Point to re-roll a bad die or to add a bonus to a flip.',
      'Risk Stacks: Accumulate each time the Gambler plays it risky (e.g. betting extra AP or Mana). These stacks can later be "cashed in" for huge benefits or can unleash special "all-in" moves.',
      'Wagering & Push-Your-Luck: The Gambler often bets AP, Mana, HP, or items before resolving an effect. Betting more can amplify the reward on a win, but a loss costs the wagered resources.'
    ],
    chanceTools: [
      {
        name: 'Coin Flip',
        description: 'A simple 50/50 chance',
        outcomes: [
          { result: 'Heads', effect: 'Typically a positive outcome' },
          { result: 'Tails', effect: 'Typically a negative outcome or lesser benefit' }
        ]
      },
      {
        name: 'Dice Roll',
        description: 'Various dice (d6, d20, etc.) for graded outcomes',
        outcomes: [
          { result: 'Low Roll', effect: 'Minimal or negative effect' },
          { result: 'Medium Roll', effect: 'Standard effect' },
          { result: 'High Roll', effect: 'Enhanced effect' },
          { result: 'Critical Roll (max value)', effect: 'Powerful effect' }
        ]
      },
      {
        name: 'Card Draw',
        description: 'Drawing from a special deck for varied effects',
        outcomes: [
          { result: 'Hearts', effect: 'Healing and protection' },
          { result: 'Spades', effect: 'Damage and debuffs' },
          { result: 'Clubs', effect: 'Buffs and enhancements' },
          { result: 'Diamonds', effect: 'Resource generation and special effects' }
        ]
      }
    ],
    resources: [
      {
        name: 'Luck Points',
        description: 'A pool of points that can be spent to influence chance outcomes',
        usage: 'Spend to re-roll dice, flip coins again, or add bonuses to results'
      },
      {
        name: 'Risk Stacks',
        description: 'Accumulated when taking risks or betting resources',
        usage: 'Cash in for powerful effects or fuel "all-in" abilities'
      }
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Heads or Tails',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Toss a coin. If heads, you gain a bonus; if tails, you incur a penalty.',
      mechanics: 'Flip a coin to determine the outcome:',
      outcomes: [
        { result: 'Heads', effect: 'You gain +2 Armor until your next turn (using gambler\'s flashy reflexes).' },
        { result: 'Tails', effect: 'You take 1d4 non-lethal damage as fate turns against you.' }
      ],
      scaling: 'Armor bonus = 2 + (CHA / 4)'
    },
    {
      name: 'Lucky Strike',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'Make a ranged attack and roll 1d6 to amplify it.',
      mechanics: 'Roll 1d6 to determine the outcome:',
      outcomes: [
        { result: '1-2 (Fizzle)', effect: 'The shot barely scratches the target (deal only 1d6 damage).' },
        { result: '3-5 (Hit)', effect: 'Normal hit. Deal 3d6 damage and gain 1 Risk stack (you rode the luck!).' },
        { result: '6 (Critical)', effect: 'Perfect roll. Deal 5d6 damage and gain 2 Risk stacks.' }
      ],
      scaling: 'Damage = base + (AGI modifier)'
    },
    {
      name: 'Loaded Dice',
      cost: {
        actionPoints: 2,
        mana: 0
      },
      description: 'Roll two six-sided dice to boost an attack. Add the dice total to your next damage roll.',
      mechanics: 'Roll 2d6 to determine the outcome:',
      outcomes: [
        { result: 'Normal (no pair)', effect: 'Total on 2d6 adds to damage as normal.' },
        { result: 'Pair (double)', effect: 'If both dice match (e.g. 3 and 3), deal that total and also hit all enemies adjacent to the main target (area effect) or double the damage dice.' }
      ],
      scaling: 'Damage bonus = 2d6 + (LUK / 2)'
    },
    {
      name: 'Suit of Fate',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Draw a card from your magical deck of cards. The card\'s suit determines the effect (and its value can augment potency).',
      mechanics: 'Draw a card to determine the outcome:',
      outcomes: [
        { result: 'Hearts', effect: 'Heal effect. Restore 1d6 HP to a friendly target (bonus +1 HP if the card\'s rank ≥ 10).' },
        { result: 'Spades', effect: 'Debuff effect. Deal 1d6 poison damage to an enemy and reduce its speed by 5 ft.' },
        { result: 'Clubs', effect: 'Buff effect. You gain +2 to all saves for 1 turn.' },
        { result: 'Diamonds', effect: 'Attack effect. Deal 1d6 piercing damage; if the card\'s rank ≥ J (11), also gain 1 Luck Point.' }
      ],
      scaling: 'Effect power = base + (CHA modifier)'
    },
    {
      name: 'Double Down',
      cost: {
        actionPoints: 2,
        mana: 1
      },
      description: 'Wager an extra AP on your next action and roll 1d6 to determine the payout. The extra AP is bet before rolling.',
      mechanics: 'Roll 1d6 to determine the outcome:',
      outcomes: [
        { result: '5-6 (Win)', effect: 'Your next attack or heal this turn is doubled (e.g. double damage or double healing effect).' },
        { result: '3-4 (Stand)', effect: 'Your next effect is normal (AP is lost to the wager, but you get a standard outcome).' },
        { result: '1-2 (Bust)', effect: 'You lose the wager (extra AP) and your next attack fails (deals no damage).' }
      ],
      scaling: 'Win threshold decreases by 1 for every 3 points in LUK'
    },
    {
      name: 'Gambler\'s Trick',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'A reactive safety net. After rolling a coin/dice/card for any other Gambler ability, you may immediately spend 1 Luck Point to alter one bad outcome.',
      mechanics: 'Spend 1 Luck Point to:',
      outcomes: [
        { result: 'Coin Flip', effect: 'Flip a tail to heads.' },
        { result: 'Dice Roll', effect: 'Increase a die result by 1 (e.g., turn a 1 into a 2).' },
        { result: 'Card Draw', effect: 'Re-draw a card.' }
      ],
      scaling: 'Can modify result by +1 for each 2 points in CHA'
    },
    {
      name: 'Lucky Charm',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Invoke your lucky charm to grant a blessing to yourself or an ally.',
      mechanics: 'Roll 1d4 to determine the charm\'s effect:',
      outcomes: [
        { result: '1', effect: 'Target gains +1 to attack rolls for 1d4 rounds.' },
        { result: '2', effect: 'Target gains +1 to saving throws for 1d4 rounds.' },
        { result: '3', effect: 'Target gains +1 to Armor for 1d4 rounds.' },
        { result: '4', effect: 'Target gains all three bonuses for 1 round.' }
      ],
      scaling: 'Bonus = 1 + (LUK / 4)'
    },
    {
      name: 'Risky Bet',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Place a bet on your next attack. The riskier the bet, the higher the potential reward.',
      mechanics: 'Choose a number between 1 and 6, then roll 1d6:',
      outcomes: [
        { result: 'Match', effect: 'If the roll matches your chosen number, your next attack deals triple damage.' },
        { result: 'Off by 1', effect: 'If the roll is 1 away from your number, your next attack deals double damage.' },
        { result: 'Off by 2', effect: 'If the roll is 2 away from your number, your next attack deals normal damage.' },
        { result: 'Off by 3+', effect: 'If the roll is 3+ away from your number, your next attack deals half damage.' }
      ],
      scaling: 'Damage multiplier increases by 0.5 for every 4 points in LUK'
    },
    {
      name: 'Jackpot Spin',
      cost: {
        actionPoints: 3,
        mana: 4,
        diceRoll: '3d6'
      },
      description: 'Channel the power of a slot machine, rolling three dice for a chance at massive rewards.',
      mechanics: 'Roll 3d6 and check for matching numbers:',
      outcomes: [
        { result: 'No Match', effect: 'Deal 2d6 damage to target.' },
        { result: 'Two Match', effect: 'Deal 4d6 damage to target and gain 1 Risk stack.' },
        { result: 'Three Match (1s)', effect: 'Spell backfires - take 2d6 damage but gain 3 Luck Points.' },
        { result: 'Three Match (2-5)', effect: 'Deal 6d6 damage to target and gain 2 Risk stacks.' },
        { result: 'Three Match (6s)', effect: 'JACKPOT! Deal 8d6 damage to all enemies and gain 3 Risk stacks.' }
      ],
      scaling: 'Damage increases by 1d6 per 3 levels'
    },
    {
      name: 'Coin Toss Barrage',
      cost: {
        actionPoints: 2,
        mana: 3,
        coinFlip: 5
      },
      description: 'Flip five coins in rapid succession, each determining a separate attack.',
      mechanics: 'Flip 5 coins, each coin creates an attack:',
      outcomes: [
        { result: 'Heads', effect: 'Deal 1d8 + CHA damage to target.' },
        { result: 'Tails', effect: 'Miss, but gain 1 Luck Point.' }
      ],
      special: 'If all 5 coins land on heads (1/32 chance), deal an additional 3d10 bonus damage.',
      scaling: 'Damage per coin = 1d8 + CHA modifier'
    },
    {
      name: 'Probability Manipulation',
      cost: {
        actionPoints: 1,
        mana: 2,
        luckPoints: 2
      },
      description: 'Bend the laws of chance to your will.',
      mechanics: 'Choose one of the following effects:',
      outcomes: [
        { result: 'Loaded Dice', effect: 'Your next dice roll automatically results in maximum value.' },
        { result: 'Weighted Coin', effect: 'Your next coin flip automatically lands on heads.' },
        { result: 'Marked Cards', effect: 'Draw a specific card of your choice from your deck.' },
        { result: 'Lucky Break', effect: 'Force an enemy to reroll their next successful attack.' }
      ],
      scaling: 'Can be used once per encounter'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Double or Nothing',
      cost: {
        actionPoints: 2,
        mana: 2
      },
      description: 'Take a risk on any recent success. Choose one effect you just rolled (damage, heal, buff, etc.) and flip a coin.',
      mechanics: 'Flip a coin to determine the outcome:',
      outcomes: [
        { result: 'Heads', effect: 'Double that effect (e.g. double damage dealt or double healing).' },
        { result: 'Tails', effect: 'It vanishes – you lose that effect entirely and suffer a backlash (e.g. take damage equal to the lost effect).' }
      ],
      requirements: 'Must be used immediately after another Gambler ability',
      scaling: 'Backlash damage reduced by (LUK / 2)'
    },
    {
      name: 'Snake Eyes\' Gambit',
      cost: {
        actionPoints: 2,
        mana: 4
      },
      description: 'Roll two six-sided dice. If the outcome meets specific rare criteria, you score big; otherwise there are drawbacks.',
      mechanics: 'Roll 2d6 to determine the outcome:',
      outcomes: [
        { result: 'Double Six (Jackpot)', effect: 'If both dice show 6, you immediately deal 10d6 damage to your target (critically high payoff).' },
        { result: 'Double (Any Pair)', effect: 'If both dice match (double 1, double 2, etc.), deal 5d6 damage and double your current Risk stacks (huge swing).' },
        { result: 'No Pair', effect: 'Sum the dice (for, say, 2–10) and deal that many points of damage as normal. You gain 1 Luck Point on any sum ≥10.' },
        { result: 'Snake Eyes (Double 1)', effect: 'The worst: you suffer a backlash (take 5d6 damage yourself).' }
      ],
      requirements: 'Requires at least 2 Risk stacks',
      scaling: 'Jackpot damage = 10d6 + (CHA × 2)'
    },
    {
      name: 'High Roller\'s Hand',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Draw three cards at once and unleash combined suit effects.',
      mechanics: 'Draw three cards to determine the outcome:',
      outcomes: [
        { result: 'Mixed Suits', effect: 'For each card drawn (Hearts, Spades, Clubs, Diamonds), apply the corresponding effect from Suit of Fate.' },
        { result: 'Royal Flush', effect: 'If all three cards share the same suit, trigger a Royal Flush bonus: healing all allies for 2d6 or dealing 4d6 damage to all enemies.' }
      ],
      requirements: 'Requires at least 3 Luck Points',
      scaling: 'Royal Flush effect = base × (1 + (CHA / 5))'
    },
    {
      name: 'Fortune\'s Favor',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Call upon Lady Luck to bless your next few actions.',
      mechanics: 'Roll 1d20 to determine the outcome:',
      outcomes: [
        { result: '1-5', effect: 'Bad luck. Your next roll has disadvantage.' },
        { result: '6-14', effect: 'Normal luck. No special effect.' },
        { result: '15-19', effect: 'Good luck. Your next roll has advantage.' },
        { result: '20', effect: 'Amazing luck. Your next three rolls have advantage.' }
      ],
      requirements: 'Can only be used once per encounter',
      scaling: 'Threshold for good luck decreases by 1 for every 3 points in LUK'
    },
    {
      name: 'Betting Spree',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Go on a betting spree, making multiple wagers in quick succession.',
      mechanics: 'Roll 3d6 in sequence. For each die:',
      outcomes: [
        { result: '1-2', effect: 'Lose 1 HP and gain no benefit.' },
        { result: '3-4', effect: 'Gain 1 Risk stack.' },
        { result: '5-6', effect: 'Gain 1 Luck Point.' }
      ],
      requirements: 'Requires at least 1 Risk stack',
      scaling: 'Number of dice = 3 + (LUK / 4)'
    },
    {
      name: 'All-In Gambit',
      cost: {
        actionPoints: 3,
        mana: 5
      },
      description: 'The Gambler stakes everything on one final gamble. They bet all current Luck Points (and optionally 10% of their max HP) to roll three d6 dice.',
      mechanics: 'Roll 3d6 to determine the outcome:',
      outcomes: [
        { result: 'Jackpot (Three of a Kind)', effect: 'The gambler wins big. Deal 8d6 damage to the enemy and gain 3 Risk stacks.' },
        { result: 'Straight (e.g. 4-5-6)', effect: 'Very strong outcome. Deal 6d6 damage and gain 2 Risk stacks.' },
        { result: 'Mixed High (total ≥ 15)', effect: 'Moderate win. Deal sum-of-dice damage and gain 1 Risk stack.' },
        { result: 'Mixed Low (total 6–14)', effect: 'Minimal win. Deal sum-of-dice damage.' },
        { result: 'Bust (any die = 1)', effect: 'You lose the gamble. You take 3d6 damage, lose all wagered Luck Points, and gain no reward.' }
      ],
      requirements: 'Requires at least 3 Luck Points',
      scaling: 'Jackpot damage = 8d6 + (CHA × 3)'
    },
    {
      name: 'House Edge',
      cost: {
        actionPoints: 2,
        mana: 6
      },
      description: 'A control-style ultimate. You lay out a spectrum of chance that affects all enemies.',
      mechanics: 'All foes in range must roll a d20 against a DC = 10 + your CHA:',
      outcomes: [
        { result: 'Failed Roll', effect: 'The enemy suffers a randomly determined disadvantage (e.g. blinded, stunned, or damaged by 4d6).' },
        { result: 'Successful Roll', effect: 'The Gambler instead gains a bonus (e.g. heal 2d6 or gain 2 Risk stacks).' }
      ],
      requirements: 'Requires at least 5 Risk stacks',
      scaling: 'DC = 10 + CHA + (LUK / 3)'
    },
    {
      name: 'Fate\'s Wheel',
      cost: {
        actionPoints: 3,
        mana: 4
      },
      description: 'Spin the wheel of fate to determine a powerful but unpredictable effect.',
      mechanics: 'Roll 1d8 to determine the outcome:',
      outcomes: [
        { result: '1', effect: 'Misfortune: You take 3d6 damage and lose 1 Luck Point.' },
        { result: '2', effect: 'Minor Curse: All allies have disadvantage on their next roll.' },
        { result: '3', effect: 'Minor Blessing: All allies have advantage on their next roll.' },
        { result: '4', effect: 'Healing Surge: All allies recover 2d6 HP.' },
        { result: '5', effect: 'Damaging Burst: All enemies take 3d6 damage.' },
        { result: '6', effect: 'Fortune\'s Favor: You gain 2 Luck Points.' },
        { result: '7', effect: 'Fate\'s Bounty: You gain 3 Risk stacks.' },
        { result: '8', effect: 'Jackpot: Choose any two of the above effects (except Misfortune and Minor Curse).' }
      ],
      requirements: 'Can only be used once per encounter',
      scaling: 'Effect power increases with CHA'
    }
  ],

  // Coin-Flipper Specialization Spells
  coinFlipperSpells: [
    {
      name: 'Lucky Penny',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'Flip a magical coin that grants minor benefits.',
      mechanics: 'Flip a coin. Heads: +1 to your next attack roll. Tails: +1 to your next save.',
      specialization: 'coin-flipper',
      scaling: 'Bonus increases by +1 per 3 CHA modifier'
    },
    {
      name: 'Coin Cascade',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Unleash a barrage of magical coins at multiple targets.',
      mechanics: 'Flip 3 coins. Each heads deals 1d6 damage to different targets within 30 ft.',
      specialization: 'coin-flipper',
      scaling: 'Damage increases to 1d8 at higher levels'
    },
    {
      name: 'Fortune\'s Edge',
      cost: {
        actionPoints: 2,
        mana: 2
      },
      description: 'Flip a coin to determine if your next attack is enhanced or your defense is boosted.',
      mechanics: 'Flip a coin. Heads: Next attack deals +2d6 damage. Tails: Gain +3 Armor until next turn.',
      specialization: 'coin-flipper',
      scaling: 'Effects scale with CHA modifier'
    },
    {
      name: 'Probability Flip',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Manipulate probability to force a favorable coin flip.',
      mechanics: 'Before any coin flip (yours or ally\'s), spend this to guarantee heads or tails.',
      specialization: 'coin-flipper',
      scaling: 'Can affect additional flips per day based on CHA'
    }
  ],

  // Dice Mastery Specialization Spells
  diceMasterySpells: [
    {
      name: 'Dice Swarm',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Summon a swarm of magical dice that attack enemies.',
      mechanics: 'Roll 4d6. Each die that shows 4+ deals damage to a different enemy within 30 ft.',
      specialization: 'dice-mastery',
      scaling: 'Number of dice increases with level'
    },
    {
      name: 'Critical Gambit',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Enhance your next attack with dice magic.',
      mechanics: 'Roll 1d20. If 15+, your next attack automatically crits. If 1-5, you have disadvantage.',
      specialization: 'dice-mastery',
      scaling: 'Critical threshold decreases with CHA'
    },
    {
      name: 'Dice Shield',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Create a protective barrier powered by dice rolls.',
      mechanics: 'Roll 2d6. Gain temporary HP equal to the total for 1 minute.',
      specialization: 'dice-mastery',
      scaling: 'Dice size increases with proficiency'
    },
    {
      name: 'Loaded Outcome',
      cost: {
        actionPoints: 2,
        mana: 4
      },
      description: 'Manipulate the outcome of any dice roll.',
      mechanics: 'After any creature rolls dice, you can change one die to any value you choose.',
      specialization: 'dice-mastery',
      scaling: 'Can affect additional dice with higher CHA'
    },
    {
      name: 'Dice Storm',
      cost: {
        actionPoints: 3,
        mana: 5
      },
      description: 'Create a chaotic storm of magical dice in a large area.',
      mechanics: '20 ft radius. All creatures roll 3d6. Odd total = damage, even total = healing.',
      specialization: 'dice-mastery',
      scaling: 'Area and dice count increase with level'
    }
  ],

  // Cardsharp Specialization Spells
  cardsharpSpells: [
    {
      name: 'Card Trick',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'Draw a card to determine a minor magical effect.',
      mechanics: 'Draw a card. Hearts: heal 1d4. Diamonds: +1 Armor. Clubs: +1 damage. Spades: enemy -1 to next roll.',
      specialization: 'cardsharp',
      scaling: 'Effects increase with CHA modifier'
    },
    {
      name: 'Royal Flush',
      cost: {
        actionPoints: 3,
        mana: 6
      },
      description: 'Attempt to draw a royal flush for a devastating attack.',
      mechanics: 'Draw 5 cards. If you get a flush, deal 5d10 damage. If royal flush, deal 10d10.',
      specialization: 'cardsharp',
      scaling: 'Damage increases with level'
    },
    {
      name: 'Ace in the Hole',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Keep a hidden card for a crucial moment.',
      mechanics: 'Draw and hide a card. Later, reveal it to add its value to any roll or save.',
      specialization: 'cardsharp',
      scaling: 'Can hold additional cards with higher CHA'
    },
    {
      name: 'Card Barrier',
      cost: {
        actionPoints: 2,
        mana: 3
      },
      description: 'Create a protective wall of magical cards.',
      mechanics: 'Draw 3 cards. Create a barrier with HP equal to total card values that blocks attacks.',
      specialization: 'cardsharp',
      scaling: 'Barrier strength increases with CHA'
    },
    {
      name: 'Deck of Many Things',
      cost: {
        actionPoints: 3,
        mana: 5
      },
      description: 'Draw from a deck of powerful magical effects.',
      mechanics: 'Draw a card. Each suit triggers a different powerful effect based on card value.',
      specialization: 'cardsharp',
      scaling: 'More powerful effects at higher levels'
    }
  ],

  // Universal Gambler Spells
  universalSpells: [
    {
      name: 'Luck Manipulation',
      cost: {
        actionPoints: 1,
        mana: 3
      },
      description: 'Bend probability to your will.',
      mechanics: 'Force any creature to reroll their last roll. You choose which result they keep.',
      specialization: 'universal',
      scaling: 'Can affect additional rolls per day'
    },
    {
      name: 'Risk Assessment',
      cost: {
        actionPoints: 1,
        mana: 2
      },
      description: 'Analyze the odds of success for any action.',
      mechanics: 'Learn the exact probability of success for any action before it\'s attempted.',
      specialization: 'universal',
      scaling: 'Can assess multiple actions simultaneously'
    },
    {
      name: 'Gambler\'s Intuition',
      cost: {
        actionPoints: 0,
        mana: 1
      },
      description: 'Sense when luck is about to turn.',
      mechanics: 'Passive: Know when any creature is about to roll a natural 1 or 20.',
      specialization: 'universal',
      scaling: 'Range increases with CHA modifier'
    }
  ]
};

export default gamblerAbilities;
