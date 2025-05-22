// Talent trees for the Gambler class
const gamblerTalentTrees = [
  {
    id: 'card-sharp',
    name: 'Card Sharp',
    description: 'Master the art of card manipulation to deal damage and control the battlefield.',
    icon: '🃏',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'card-mastery',
        name: 'Card Mastery',
        description: 'Increases the damage of your card abilities by 2%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🃏',
      },
      {
        id: 'quick-draw',
        name: 'Quick Draw',
        description: 'Reduces the casting time of your card abilities by 0.1 seconds.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⚡',
      },
      {
        id: 'stacked-deck',
        name: 'Stacked Deck',
        description: 'Your card abilities have a 5% chance to draw an additional card.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📚',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'card-trick',
        name: 'Card Trick',
        description: 'Your card abilities have a 10% chance to cost no Luck resource.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['card-mastery'],
        icon: '✨',
      },
      {
        id: 'ace-up-sleeve',
        name: 'Ace Up Sleeve',
        description: 'When you fall below 30% health, automatically draw an Ace card that heals you for 15% of your maximum health. This effect can occur once every 3 minutes.',
        maxRank: 1,
        position: { row: 1, col: 2 },
        requires: ['quick-draw'],
        icon: '♠️',
      },
      {
        id: 'royal-flush',
        name: 'Royal Flush',
        description: 'After drawing 5 different cards, your next card ability deals 30% increased damage.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['stacked-deck'],
        icon: '👑',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'card-barrage',
        name: 'Card Barrage',
        description: 'Throw a barrage of cards at your target, dealing damage based on the cards in your hand.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['card-trick', 'ace-up-sleeve'],
        icon: '💫',
      },
      {
        id: 'card-shark',
        name: 'Card Shark',
        description: 'Your card abilities have a 15% chance to critically strike against targets below 35% health.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['ace-up-sleeve', 'royal-flush'],
        icon: '🦈',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'house-of-cards',
        name: 'House of Cards',
        description: 'Create a defensive barrier of cards that absorbs damage equal to 20% of your maximum health. Each time you use a card ability, the barrier\'s strength increases by 5%.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['card-barrage'],
        icon: '🏠',
      },
      {
        id: 'wild-card',
        name: 'Wild Card',
        description: 'Your card abilities have a 10% chance to draw a Wild Card, which can be used as any card and deals 50% increased damage.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['card-shark'],
        icon: '🃏',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'deck-of-destruction',
        name: 'Deck of Destruction',
        description: 'For 15 seconds, all your card abilities cost no Luck resource, have their cooldowns reduced by 50%, and deal 30% increased damage.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['house-of-cards', 'wild-card'],
        icon: '💥',
      },
    ],
  },
  {
    id: 'dice-master',
    name: 'Dice Master',
    description: 'Harness the power of chance through dice to create powerful but unpredictable effects.',
    icon: '🎲',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'loaded-dice',
        name: 'Loaded Dice',
        description: 'Increases the minimum damage of your dice abilities by 3%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎲',
      },
      {
        id: 'lucky-roll',
        name: 'Lucky Roll',
        description: 'Your dice abilities have a 5% chance to roll the maximum value.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🍀',
      },
      {
        id: 'extra-dice',
        name: 'Extra Dice',
        description: 'Your dice abilities have a 5% chance to roll an additional die.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '➕',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'dice-trick',
        name: 'Dice Trick',
        description: 'Your dice abilities have a 10% chance to cost no Luck resource.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['loaded-dice'],
        icon: '✨',
      },
      {
        id: 'snake-eyes',
        name: 'Snake Eyes',
        description: 'When you roll the minimum value on your dice, you have a 50% chance to immediately roll again.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['lucky-roll'],
        icon: '👀',
      },
      {
        id: 'critical-roll',
        name: 'Critical Roll',
        description: 'Your dice abilities have a 10% chance to deal double damage.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['extra-dice'],
        icon: '💯',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'dice-storm',
        name: 'Dice Storm',
        description: 'Create a storm of magical dice that deal damage to all enemies within 15 yards. Damage is based on random dice rolls.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['dice-trick', 'snake-eyes'],
        icon: '🌪️',
      },
      {
        id: 'double-or-nothing',
        name: 'Double or Nothing',
        description: 'Your dice abilities have a 15% chance to either deal double damage or no damage at all.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['snake-eyes', 'critical-roll'],
        icon: '⚖️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'dice-shield',
        name: 'Dice Shield',
        description: 'Create a shield that absorbs damage based on a dice roll. Higher rolls create stronger shields.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['dice-storm'],
        icon: '🛡️',
      },
      {
        id: 'exploding-dice',
        name: 'Exploding Dice',
        description: 'When you roll the maximum value on your dice, you roll an additional die and add its value to the total.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['double-or-nothing'],
        icon: '💥',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'masters-gambit',
        name: 'Master\'s Gambit',
        description: 'For 15 seconds, all your dice abilities roll at least 75% of their maximum value and have a 25% chance to roll an additional die.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['dice-shield', 'exploding-dice'],
        icon: '🎯',
      },
    ],
  },
  {
    id: 'fortune',
    name: 'Fortune',
    description: 'Manipulate luck and probability to create favorable outcomes for yourself and allies.',
    icon: '🍀',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'lucky-charm',
        name: 'Lucky Charm',
        description: 'Increases your critical strike chance by 1%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🍀',
      },
      {
        id: 'fortune-favors',
        name: 'Fortune Favors',
        description: 'Your healing spells have a 5% chance to heal for an additional 20%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '✨',
      },
      {
        id: 'risk-taker',
        name: 'Risk Taker',
        description: 'Increases the effectiveness of your gambling abilities by 2%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🎯',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'lucky-streak',
        name: 'Lucky Streak',
        description: 'After a critical strike, your next ability has a 20% increased chance to critically strike.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['lucky-charm'],
        icon: '🔥',
      },
      {
        id: 'blessed-fortune',
        name: 'Blessed Fortune',
        description: 'Your healing spells have a 10% chance to apply a shield to the target that absorbs damage equal to 50% of the amount healed.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['fortune-favors'],
        icon: '🛡️',
      },
      {
        id: 'high-roller',
        name: 'High Roller',
        description: 'Your gambling abilities have a 10% chance to refund their Luck cost.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['risk-taker'],
        icon: '💰',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'fortune-wheel',
        name: 'Fortune Wheel',
        description: 'Spin the wheel of fortune, granting you or an ally a random beneficial effect for 10 seconds.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['lucky-streak', 'blessed-fortune'],
        icon: '🎡',
      },
      {
        id: 'fate-manipulation',
        name: 'Fate Manipulation',
        description: 'Your abilities have a 10% chance to trigger a second time at 50% effectiveness.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['blessed-fortune', 'high-roller'],
        icon: '🧵',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'lucky-break',
        name: 'Lucky Break',
        description: 'When you take damage that would reduce you below 20% health, you have a 25% chance to avoid the damage entirely. This effect can occur once every 3 minutes.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['fortune-wheel'],
        icon: '🍀',
      },
      {
        id: 'gamblers-intuition',
        name: 'Gambler\'s Intuition',
        description: 'Your abilities have a 15% chance to grant you Gambler\'s Intuition, increasing your critical strike chance by 10% for 10 seconds.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['fate-manipulation'],
        icon: '🧠',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'lady-luck',
        name: 'Lady Luck',
        description: 'For 15 seconds, all your abilities have a 25% chance to trigger twice, and your critical strike chance is increased by 15%.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['lucky-break', 'gamblers-intuition'],
        icon: '👸',
      },
    ],
  }
];

export default gamblerTalentTrees;
