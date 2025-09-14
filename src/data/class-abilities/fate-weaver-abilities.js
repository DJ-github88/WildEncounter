// Base spells and abilities for the Fate Weaver class
const fateWeaverAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Card-Draw System',
    description: 'Unlike typical classes that roll dice, the Fate Weaver draws from a deck of mystical cards to resolve magic. Each time they cast a spell or use a special ability, they draw one or more cards instead of rolling. These cards (analogous to a standard 52-card deck) hide their identity until revealed, creating dramatic tension that dice cannot mimic.',
    mechanics: [
      'Each spell requires drawing one or more cards from a mystical deck.',
      'The suits and values have specific meanings: Hearts represent life/emotion (Water), Clubs represent will or growth (Fire), Diamonds wealth/stability (Earth), and Spades darkness or intellect (Air).',
      'High cards (10–King, Ace) trigger especially strong effects, while low cards (2–5) might weaken a spell or introduce side effects.',
      'Fate Weavers generate "Fate Points" based on draws. For example, drawing a face card or a specific suit might grant a Fate Point.',
      'Fate Points can be spent to reroll a draw, hold a card, or augment a spell.',
      'At the start of combat, the Fate Weaver draws an initial hand of 3–5 cards. Each spell consumes (discards) one or more cards from this hand.',
      'Between draws, the Fate Weaver might pick which card to play, hold cards for future turns, or reshuffle discards to recharge their deck.'
    ],
    suits: [
      {
        name: 'Hearts',
        description: 'Represents life, emotion, and healing (Water)',
        effects: 'Healing, empathy, restoration, life-draining'
      },
      {
        name: 'Clubs',
        description: 'Represents will, growth, and strength (Fire)',
        effects: 'Raw force, fiery strength, buffs, direct damage'
      },
      {
        name: 'Diamonds',
        description: 'Represents wealth, stability, and protection (Earth)',
        effects: 'Shields, wards, material wealth, stability'
      },
      {
        name: 'Spades',
        description: 'Represents darkness, intellect, and curses (Air)',
        effects: 'Curses, psychic strikes, shadow magic, debuffs'
      }
    ],
    values: [
      {
        name: 'High Cards (10, Jack, Queen, King, Ace)',
        effects: 'Double the spell\'s effect, extend duration, or add bonus effects'
      },
      {
        name: 'Medium Cards (6-9)',
        effects: 'Normal spell effects'
      },
      {
        name: 'Low Cards (2-5)',
        effects: 'Half the spell\'s effect or add a drawback'
      }
    ],
    combos: [
      {
        name: 'Pair',
        description: 'Two cards of the same value',
        effects: 'Double one base spell\'s effect or cast it twice'
      },
      {
        name: 'Flush',
        description: 'Three or more cards of the same suit',
        effects: 'Unleash an elemental banquet of that suit'
      },
      {
        name: 'Straight',
        description: 'Three or more cards in numerical sequence',
        effects: 'Warp destiny, teleport allies, reorder turn order, or "undo" a recent event'
      },
      {
        name: 'Royal Edict',
        description: 'Ace or face card of spades',
        effects: 'Issue a royal decree with game-changing effects'
      },
      {
        name: 'Full House',
        description: 'Three of one value plus two of another',
        effects: 'Trigger a chaotic cosmos effect'
      }
    ]
  },

  // Base Spells
  baseSpells: [
    {
      name: 'Fate\'s Grasp',
      cost: {
        actionPoints: 1,
        mana: 3,
        cardDraw: 1
      },
      description: 'A shadowy arcane bolt that targets a foe.',
      mechanics: 'On casting, draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Drains life instead (heal the caster for half the damage).' },
        { suit: 'Diamond', effect: 'Pierces armor (ignore some defense).' },
        { suit: 'Club', effect: 'Hits multiple foes with lesser damage.' },
        { suit: 'Spade', effect: 'Converts the damage into a curse that reduces the target\'s next attack.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Double the damage or curse duration.' },
        { value: '2-5', effect: 'Reduce effect by half.' }
      ],
      scaling: 'Damage = 2d6 + INT'
    },
    {
      name: 'Heart\'s Embrace',
      cost: {
        actionPoints: 1,
        mana: 2,
        cardDraw: 1
      },
      description: 'A soothing blessing that targets an ally.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Greatly enhances healing (extra +2 HP).' },
        { suit: 'Diamond', effect: 'Grants a temporary protective ward (shield).' },
        { suit: 'Club', effect: 'Also grants a small Strength boost to the ally.' },
        { suit: 'Spade', effect: 'The effect backfires as a harm spell (ally is briefly fatigued or takes minor damage).' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Heal doubles and remove a negative status.' },
        { value: '2-5', effect: 'Just normal heal.' }
      ],
      scaling: 'Healing = 1d8 + INT'
    },
    {
      name: 'Arcane Volley',
      cost: {
        actionPoints: 2,
        mana: 4,
        cardDraw: 1
      },
      description: 'Arcane missiles that target any number of targets in a line or circle.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Becomes life-draining missiles (heal yourself for half damage dealt).' },
        { suit: 'Diamond', effect: 'Each missile splinters (hit an extra nearby target).' },
        { suit: 'Club', effect: 'Converts magic into a fire burst (targets take ongoing burn).' },
        { suit: 'Spade', effect: 'Missiles become chilling curses (each target loses resistance or speed).' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Missiles multiply.' },
        { value: '2-5', effect: 'Single weak blast.' }
      ],
      scaling: 'Damage = 3d6 + INT'
    },
    {
      name: 'Wild Draw',
      cost: {
        actionPoints: 1,
        mana: 1,
        cardDraw: 1
      },
      description: 'A gamble that targets self or area.',
      mechanics: 'Draw a card with no base effect. Instead, the effect is entirely determined by the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Heals all allies for 3 HP.' },
        { suit: 'Diamond', effect: 'Restores 2 Mana.' },
        { suit: 'Club', effect: 'Grants +2 to the next attack roll this turn.' },
        { suit: 'Spade', effect: 'Inflicts 5 damage to all adjacent enemies.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Double the effect.' },
        { value: '2-5', effect: 'Half the effect.' }
      ],
      scaling: 'Effect power = base + (INT / 2)'
    },
    {
      name: 'Miracle Recall',
      cost: {
        actionPoints: 1,
        mana: 2,
        cardDraw: 1
      },
      description: 'Recall fate\'s thread, targeting self or ally.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Resurrects a fallen ally to 10% HP (once per combat).' },
        { suit: 'Diamond', effect: 'Instantly refreshes 1 Fate Point and 1 Mana.' },
        { suit: 'Club', effect: 'Immediately remove all harmful effects from target.' },
        { suit: 'Spade', effect: 'No effect (the draw fails this time).' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Roll again after a Spade.' },
        { value: '2-5', effect: 'Second draw repeats effect once.' }
      ],
      scaling: 'Effect power = base + INT'
    },
    {
      name: 'Royal Flush',
      cost: {
        actionPoints: 3,
        mana: 6,
        cardDraw: 5
      },
      description: 'Draw five cards and attempt to form poker combinations for devastating effects.',
      mechanics: 'Draw 5 cards and check for combinations:',
      combos: [
        { combo: 'Royal Flush (A,K,Q,J,10 same suit)', effect: 'Deal 10d10 damage to all enemies and restore all mana.' },
        { combo: 'Straight Flush (5 consecutive same suit)', effect: 'Deal 8d8 damage to all enemies.' },
        { combo: 'Four of a Kind', effect: 'Deal 6d8 damage to target, repeated 4 times.' },
        { combo: 'Full House (3 + pair)', effect: 'Deal 5d8 damage and heal all allies for 3d8.' },
        { combo: 'Flush (5 same suit)', effect: 'Elemental burst based on suit for 4d8 damage.' },
        { combo: 'Straight (5 consecutive)', effect: 'Deal 3d8 damage to all enemies in a line.' },
        { combo: 'Three of a Kind', effect: 'Deal 4d6 damage to target.' },
        { combo: 'Two Pair', effect: 'Deal 3d6 damage to two targets.' },
        { combo: 'One Pair', effect: 'Deal 2d6 damage to target.' },
        { combo: 'High Card', effect: 'Deal 1d6 damage based on highest card value.' }
      ],
      scaling: 'Damage increases by 1 die per 2 levels'
    },
    {
      name: 'Card Shark\'s Gambit',
      cost: {
        actionPoints: 2,
        mana: 4,
        cardDraw: 3
      },
      description: 'Draw three cards and choose which one to play, holding the others.',
      mechanics: 'Draw 3 cards, choose one to activate immediately, hold the other two for later use:',
      suitEffects: [
        { suit: 'Hearts', effect: 'Heal target for 3d6 + INT HP.' },
        { suit: 'Diamonds', effect: 'Create a protective shield absorbing 2d8 damage.' },
        { suit: 'Clubs', effect: 'Buff target with +3 to all rolls for 3 rounds.' },
        { suit: 'Spades', effect: 'Curse target with -2 to all rolls for 3 rounds.' }
      ],
      special: 'Held cards can be played later as bonus actions without mana cost.',
      scaling: 'Effects scale with Intelligence modifier'
    },
    {
      name: 'Deck Shuffle',
      cost: {
        actionPoints: 1,
        mana: 2,
        special: 'Reshuffles deck'
      },
      description: 'Reshuffle your fate deck and draw a new hand.',
      mechanics: 'Reshuffle all discarded cards back into your deck and draw 3 new cards.',
      effects: [
        { condition: 'If deck was empty', effect: 'Gain 2 Fate Points.' },
        { condition: 'If you have 3+ face cards', effect: 'Gain 1 Fate Point.' },
        { condition: 'If all cards are same suit', effect: 'Next spell costs no mana.' }
      ],
      scaling: 'Can be used once per encounter'
    },
    {
      name: 'Fortune\'s Favor',
      cost: {
        actionPoints: 1,
        mana: 2,
        cardDraw: 1
      },
      description: 'Bend luck in your favor or curse an enemy with misfortune.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Grant an ally advantage on their next roll.' },
        { suit: 'Diamond', effect: 'Create a barrier that absorbs the next attack against an ally.' },
        { suit: 'Club', effect: 'Empower an ally\'s next attack to deal additional damage.' },
        { suit: 'Spade', effect: 'Curse an enemy with disadvantage on their next roll.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Effect lasts for two rolls instead of one.' },
        { value: '2-5', effect: '50% chance the effect fails.' }
      ],
      scaling: 'Duration = 1 round + (INT / 3) rounds'
    },
    {
      name: 'Twist of Fate',
      cost: {
        actionPoints: 2,
        mana: 3,
        cardDraw: 1
      },
      description: 'Alter the course of events by manipulating fate itself.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Swap positions with an ally or move them to a more advantageous position.' },
        { suit: 'Diamond', effect: 'Create a zone of protection that reduces damage to allies within it.' },
        { suit: 'Club', effect: 'Create a zone of empowerment that increases damage from allies within it.' },
        { suit: 'Spade', effect: 'Create a zone of misfortune that causes enemies within it to occasionally miss attacks.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Zone lasts twice as long.' },
        { value: '2-5', effect: 'Zone is half the size.' }
      ],
      scaling: 'Zone size = 10ft + (INT × 2)ft radius'
    },
    {
      name: 'Destiny Bond',
      cost: {
        actionPoints: 2,
        mana: 3,
        cardDraw: 1
      },
      description: 'Link the fates of two creatures, causing them to share effects.',
      mechanics: 'Draw a card. The effect varies based on the suit drawn:',
      suitEffects: [
        { suit: 'Heart', effect: 'Link two allies so that healing one also heals the other (at 50% effectiveness).' },
        { suit: 'Diamond', effect: 'Link an ally to yourself so that damage to them is redirected to you (and you have resistance to it).' },
        { suit: 'Club', effect: 'Link two enemies so that damage to one also damages the other (at 50% effectiveness).' },
        { suit: 'Spade', effect: 'Link an enemy to an ally so that negative effects on the enemy also affect the ally (but at reduced effectiveness).' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Link lasts twice as long.' },
        { value: '2-5', effect: 'Link only works once before breaking.' }
      ],
      scaling: 'Duration = 1d4 + INT rounds'
    }
  ],

  // Advanced Spells
  advancedSpells: [
    {
      name: 'Arcane Resonance (Pair)',
      cost: {
        actionPoints: 2,
        mana: 3,
        cardDraw: 2
      },
      description: 'If you draw two cards of the same value, a hidden resonance unleashes.',
      mechanics: 'Draw two cards. If they form a pair (same value), the effect is determined by the dominant suit:',
      comboEffects: [
        { combo: 'Heart Pair', effect: 'Double a healing spell\'s effect.' },
        { combo: 'Diamond Pair', effect: 'Double a shield or ward\'s duration.' },
        { combo: 'Club Pair', effect: 'Double a buff\'s duration.' },
        { combo: 'Spade Pair', effect: 'Double a curse\'s potency.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace Pair', effect: 'Triple the effect instead of double.' },
        { value: 'Low Card Pair', effect: 'Only 1.5x the effect.' }
      ],
      scaling: 'Effect multiplier = base × (1 + (INT / 10))'
    },
    {
      name: 'Suit Mastery (Flush)',
      cost: {
        actionPoints: 4,
        mana: 5,
        cardDraw: 3
      },
      description: 'If you draw three or more cards all of the same suit, unleash an elemental banquet of that suit.',
      mechanics: 'Draw three cards. If they form a flush (same suit), the effect is determined by the suit:',
      comboEffects: [
        { combo: 'Heart Flush', effect: 'Floods the area with healing energy (heal all allies, remove 1 status).' },
        { combo: 'Diamond Flush', effect: 'Erects a glowing barrier around the party (shield for 2 turns).' },
        { combo: 'Club Flush', effect: 'Rains down fiery bolts on enemies (each foe takes moderate damage).' },
        { combo: 'Spade Flush', effect: 'Curses the battlefield (all enemies lose -2 to rolls for 3 turns).' }
      ],
      valueEffects: [
        { value: 'High Card Flush', effect: 'Effect lasts an additional turn.' },
        { value: 'Low Card Flush', effect: 'Effect is weaker but affects a larger area.' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 5))'
    },
    {
      name: 'Time\'s Arrow (Straight)',
      cost: {
        actionPoints: 4,
        mana: 6,
        cardDraw: 3
      },
      description: 'If you draw three or more cards in a numerical sequence, momentarily warp destiny.',
      mechanics: 'Draw three cards. If they form a straight (numerical sequence), the effect is determined by the highest card:',
      comboEffects: [
        { combo: 'Low Straight (2-3-4, 3-4-5, etc.)', effect: 'Teleport allies to more advantageous positions.' },
        { combo: 'Mid Straight (5-6-7, 6-7-8, etc.)', effect: 'Reorder turn order to your advantage.' },
        { combo: 'High Straight (9-10-J, 10-J-Q, etc.)', effect: '"Undo" a recent event, allowing a reroll or different action.' },
        { combo: 'Royal Straight (J-Q-K, Q-K-A)', effect: 'Stop time for 1 round, allowing you and allies to act freely.' }
      ],
      valueEffects: [
        { value: 'Ace-High Straight', effect: 'Effect is doubled in power or duration.' },
        { value: '5-High or Lower Straight', effect: 'Effect is halved in power or duration.' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 5))'
    },
    {
      name: 'Royal Edict',
      cost: {
        actionPoints: 5,
        mana: 7,
        cardDraw: 1
      },
      description: 'If your drawn card is an Ace or face card of spades, issue a royal decree.',
      mechanics: 'Draw one card. If it\'s an Ace or face card of spades, the effect is determined by the specific card:',
      comboEffects: [
        { combo: 'Jack of Spades', effect: 'Summon a shadow servant that fights for you for 1d4 rounds.' },
        { combo: 'Queen of Spades', effect: 'Curse all enemies, reducing their defenses and attack power by 25%.' },
        { combo: 'King of Spades', effect: 'Instantly swap positions with any enemy and deal massive damage to them.' },
        { combo: 'Ace of Spades', effect: 'Summon a devastating storm that deals damage to all enemies each round for 1d4 rounds.' }
      ],
      valueEffects: [
        { value: 'Any other Spade', effect: 'Gain 1 Fate Point but no other effect.' },
        { value: 'Any other suit', effect: 'Spell fails and Mana is wasted.' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 4))'
    },
    {
      name: 'Full House of Fate',
      cost: {
        actionPoints: 6,
        mana: 8,
        cardDraw: 5
      },
      description: 'Drawing a "full house" triggers a chaotic cosmos effect.',
      mechanics: 'Draw five cards. If they form a full house (three of one value plus two of another), the effect is determined by the dominant suit of the three cards:',
      comboEffects: [
        { combo: 'Heart-Dominant Full House', effect: 'Fully heal all allies and grant them temporary HP equal to your level.' },
        { combo: 'Diamond-Dominant Full House', effect: 'Create an impenetrable barrier around the party that blocks all damage for 1 round.' },
        { combo: 'Club-Dominant Full House', effect: 'Deal massive damage to all enemies and knock them prone.' },
        { combo: 'Spade-Dominant Full House', effect: 'Curse all enemies with a random debilitating effect (paralysis, blindness, etc.) for 1d4 rounds.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace Full House', effect: 'Effect is doubled in power or duration.' },
        { value: 'Low Card Full House', effect: 'Effect is normal but costs less Mana (refund 3 Mana).' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 3))'
    },
    {
      name: 'Destiny Shuffle',
      cost: {
        actionPoints: 3,
        mana: 4,
        cardDraw: 0
      },
      description: 'Reshuffle fate itself, changing the course of battle.',
      mechanics: 'Reshuffle your deck and draw a new hand of cards. The next spell you cast has enhanced effects based on how many cards you draw that match a specific condition:',
      comboEffects: [
        { combo: 'Matching Suits', effect: 'For each pair of matching suits, your next spell deals 50% more damage or healing.' },
        { combo: 'Matching Values', effect: 'For each pair of matching values, your next spell costs 1 less Mana.' },
        { combo: 'Sequential Values', effect: 'For each sequential pair (e.g., 5-6, 8-9), your next spell has 25% greater range.' },
        { combo: 'Face Cards', effect: 'For each face card drawn, gain 1 Fate Point.' }
      ],
      valueEffects: [
        { value: 'All High Cards', effect: 'Your next three spells have enhanced effects.' },
        { value: 'All Low Cards', effect: 'Gain 1d4 Mana but no other effects.' }
      ],
      scaling: 'Hand size = 3 + (INT / 3) cards'
    },
    {
      name: 'Fate\'s Reversal',
      cost: {
        actionPoints: 4,
        mana: 5,
        cardDraw: 2
      },
      description: 'Reverse the flow of fate, turning failure into success or success into greater triumph.',
      mechanics: 'Draw two cards. The effect is determined by whether the cards are of the same color (both red or both black):',
      comboEffects: [
        { combo: 'Same Color (Red)', effect: 'Turn a recent failure into a success. An ally can reroll a failed attack, save, or check with advantage.' },
        { combo: 'Same Color (Black)', effect: 'Turn an enemy\'s success into a failure. Force an enemy to reroll a successful attack, save, or check with disadvantage.' },
        { combo: 'Different Colors', effect: 'Gain insight into the future. See the top 3 cards of your deck and rearrange them as you wish.' },
        { combo: 'Same Suit', effect: 'In addition to the color effect, gain 1 Fate Point.' }
      ],
      valueEffects: [
        { value: 'Both Face Cards', effect: 'Effect can be used twice before expiring.' },
        { value: 'Both Low Cards', effect: 'Effect is weaker but costs less (refund 2 Mana).' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 6))'
    },
    {
      name: 'Cosmic Deal',
      cost: {
        actionPoints: 3,
        mana: 4,
        cardDraw: 3
      },
      description: 'Deal a cosmic hand that determines the fate of all present.',
      mechanics: 'Draw three cards and "deal" them to yourself, an ally, and an enemy. Each recipient\'s fate is determined by their card:',
      comboEffects: [
        { combo: 'Heart Card', effect: 'Recipient gains 2d6 healing and a positive status effect.' },
        { combo: 'Diamond Card', effect: 'Recipient gains a protective shield that absorbs the next 2d6 damage.' },
        { combo: 'Club Card', effect: 'Recipient deals 50% more damage with their next attack.' },
        { combo: 'Spade Card', effect: 'Recipient suffers 2d6 psychic damage and a negative status effect.' }
      ],
      valueEffects: [
        { value: 'Face Card/Ace', effect: 'Effect is doubled for that recipient.' },
        { value: 'Low Card (2-5)', effect: 'Effect is halved for that recipient.' }
      ],
      scaling: 'Effect power = base × (1 + (INT / 5))'
    }
  ]
};

export default fateWeaverAbilities;
