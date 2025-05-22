// Talent trees for the Chaos Weaver class
const chaosWeaverTalentTrees = [
  {
    id: 'wild-magic',
    name: 'Wild Magic',
    description: 'Embrace the unpredictable nature of chaos to create powerful but random magical effects.',
    icon: '🌀',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'chaotic-attunement',
        name: 'Chaotic Attunement',
        description: 'Increases the effectiveness of your random magical effects by 3%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✨',
      },
      {
        id: 'entropy-touch',
        name: 'Entropy Touch',
        description: 'Your spells have a 5% chance to apply a random harmful effect to the target.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👆',
      },
      {
        id: 'chaos-theory',
        name: 'Chaos Theory',
        description: 'Increases your critical strike chance by 1%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🎲',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'wild-surge',
        name: 'Wild Surge',
        description: 'Your spells have a 10% chance to surge with chaotic energy, increasing their effect by 20-50% (random).',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['chaotic-attunement'],
        icon: '⚡',
      },
      {
        id: 'chaotic-feedback',
        name: 'Chaotic Feedback',
        description: 'When your spells have a random effect, you have a 20% chance to gain 5% increased spell power for 10 seconds.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['entropy-touch'],
        icon: '🔄',
      },
      {
        id: 'lucky-streak',
        name: 'Lucky Streak',
        description: 'After a critical strike, your next spell has a 20% chance to automatically trigger a beneficial random effect.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['chaos-theory'],
        icon: '🍀',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'chaos-bolt',
        name: 'Chaos Bolt',
        description: 'Fire a bolt of chaotic energy that deals damage of a random type and has a 50% chance to apply a random debuff.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['wild-surge', 'chaotic-feedback'],
        icon: '🌩️',
      },
      {
        id: 'entropic-shield',
        name: 'Entropic Shield',
        description: 'Surround yourself with chaotic energy that has a 20% chance to randomly reflect, absorb, or amplify incoming spells.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['chaotic-feedback', 'lucky-streak'],
        icon: '🛡️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'cascade-of-chaos',
        name: 'Cascade of Chaos',
        description: 'Your spells have a 10% chance to trigger a cascade effect, casting 1-3 additional random spells at nearby targets.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['chaos-bolt'],
        icon: '🌊',
      },
      {
        id: 'chaotic-resilience',
        name: 'Chaotic Resilience',
        description: 'When you take damage, you have a 15% chance to gain a random defensive buff for 8 seconds.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['entropic-shield'],
        icon: '🧿',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'reality-fracture',
        name: 'Reality Fracture',
        description: 'Tear a hole in reality at the target location, causing highly unpredictable magical effects to all creatures within 15 yards for 10 seconds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['cascade-of-chaos', 'chaotic-resilience'],
        icon: '💫',
      },
    ],
  },
  {
    id: 'probability-manipulation',
    name: 'Probability Manipulation',
    description: 'Control the odds to ensure favorable outcomes for yourself and unfavorable ones for your enemies.',
    icon: '🎯',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'favorable-odds',
        name: 'Favorable Odds',
        description: 'Increases your chance to critically strike by 1%.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎯',
      },
      {
        id: 'misfortune',
        name: 'Misfortune',
        description: 'Your attacks have a 5% chance to cause the target to suffer bad luck, increasing their chance to be critically hit by 3% for 10 seconds.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👎',
      },
      {
        id: 'calculated-risk',
        name: 'Calculated Risk',
        description: 'Increases the damage of your spells by 1%, but also increases the mana cost by 1%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📊',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'lucky-break',
        name: 'Lucky Break',
        description: 'When you take damage that would reduce you below 20% health, you have a 10% chance to avoid the damage entirely. This effect can occur once every 3 minutes.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['favorable-odds'],
        icon: '🍀',
      },
      {
        id: 'jinx',
        name: 'Jinx',
        description: 'Curse a target with bad luck, causing their spells and attacks to have a 10% chance to fail. Lasts 15 seconds.',
        maxRank: 1,
        position: { row: 1, col: 2 },
        requires: ['misfortune'],
        icon: '🧿',
      },
      {
        id: 'gambler\'s-instinct',
        name: 'Gambler\'s Instinct',
        description: 'Your damaging spells have a 10% chance to deal 50% additional damage, but also have a 5% chance to deal 50% less damage.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['calculated-risk'],
        icon: '🎰',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'twist-fate',
        name: 'Twist Fate',
        description: 'Manipulate probability to force a reroll on the last attack or spell that affected you or your target. Can be beneficial or harmful.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['lucky-break', 'jinx'],
        icon: '🔄',
      },
      {
        id: 'probability-shield',
        name: 'Probability Shield',
        description: 'Create a shield that has a 30% chance to completely negate incoming attacks. Lasts until 3 attacks are negated or 15 seconds pass.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['jinx', 'gambler\'s-instinct'],
        icon: '🛡️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'chaos-theory-mastery',
        name: 'Chaos Theory Mastery',
        description: 'Your critical strikes have a 20% chance to trigger a second roll for an additional critical strike at 50% effectiveness.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['twist-fate'],
        icon: '🎲',
      },
      {
        id: 'improbability-wave',
        name: 'Improbability Wave',
        description: 'Release a wave of chaotic probability that has a 50% chance to benefit allies and a 50% chance to harm enemies within 15 yards.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['probability-shield'],
        icon: '🌊',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'rewrite-reality',
        name: 'Rewrite Reality',
        description: 'For 10 seconds, you gain perfect control over probability. Your harmful spells always have their maximum effect on enemies, and your beneficial spells always have their maximum effect on allies.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['chaos-theory-mastery', 'improbability-wave'],
        icon: '✍️',
      },
    ],
  },
  {
    id: 'entropy',
    name: 'Entropy',
    description: 'Harness the power of disorder and decay to break down enemies and structures.',
    icon: '🌪️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'entropic-touch',
        name: 'Entropic Touch',
        description: 'Your attacks have a 5% chance to apply Entropy, dealing damage over time.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👆',
      },
      {
        id: 'accelerated-decay',
        name: 'Accelerated Decay',
        description: 'Increases the damage of your damage-over-time effects by 2%.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⏱️',
      },
      {
        id: 'chaotic-energy',
        name: 'Chaotic Energy',
        description: 'Increases your spell power by 1%.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✨',
      },
      
      // Tier 2 (Level 20)
      {
        id: 'disintegration',
        name: 'Disintegration',
        description: 'Your Entropy effects have a 10% chance to spread to a nearby enemy when they deal damage.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['entropic-touch'],
        icon: '💥',
      },
      {
        id: 'withering-touch',
        name: 'Withering Touch',
        description: 'Your damage-over-time effects also reduce the target\'s healing received by 2% per stack, up to 10%.',
        maxRank: 5,
        position: { row: 1, col: 2 },
        requires: ['accelerated-decay'],
        icon: '🖐️',
      },
      {
        id: 'mana-decay',
        name: 'Mana Decay',
        description: 'Your damaging spells have a 5% chance to drain 2% of the target\'s maximum mana and restore it to you.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['chaotic-energy'],
        icon: '💧',
      },
      
      // Tier 3 (Level 30)
      {
        id: 'entropy-bolt',
        name: 'Entropy Bolt',
        description: 'Fire a bolt of pure entropy at the target, dealing immediate damage and applying a stack of Entropy.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['disintegration', 'withering-touch'],
        icon: '🌩️',
      },
      {
        id: 'chaotic-consumption',
        name: 'Chaotic Consumption',
        description: 'When your damage-over-time effects expire or are dispelled, they have a 30% chance to deal 50% of their remaining damage instantly.',
        maxRank: 3,
        position: { row: 2, col: 3 },
        requires: ['withering-touch', 'mana-decay'],
        icon: '🔥',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'entropic-contagion',
        name: 'Entropic Contagion',
        description: 'Your Entropy effects have a 15% chance to apply an additional random harmful effect to the target.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['entropy-bolt'],
        icon: '☣️',
      },
      {
        id: 'void-corruption',
        name: 'Void Corruption',
        description: 'Channel chaotic energy into a target, increasing the damage they take from your spells by 15% for 12 seconds.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['chaotic-consumption'],
        icon: '🌑',
      },
      
      // Tier 5 (Level 50)
      {
        id: 'total-entropy',
        name: 'Total Entropy',
        description: 'Create a zone of pure entropy at the target location for 10 seconds. Enemies within the zone take heavy damage over time, and their spells and abilities have a 15% chance to fail.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['entropic-contagion', 'void-corruption'],
        icon: '⚫',
      },
    ],
  }
];

export default chaosWeaverTalentTrees;
