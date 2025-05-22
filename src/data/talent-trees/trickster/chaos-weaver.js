// Talent trees for the Chaos Weaver class
const chaosWeaverTalentTrees = [
  {
    id: 'order-in-chaos',
    name: 'Order in Chaos',
    description: 'Focus on controlling chaos through Entropy Points, reducing negative outcomes, and manipulating dice rolls to your advantage.',
    icon: '🎲',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'entropy-attunement',
        name: 'Entropy Attunement',
        description: 'Your maximum Entropy Points (EP) increases by 1, and you generate EP more efficiently.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✨',
        rankDescription: [
          'Your maximum EP increases by 1, and you have a 20% chance to generate 1 additional EP when rolling on a Chaos Table.',
          'Your maximum EP increases by 1, and you have a 40% chance to generate 1 additional EP when rolling on a Chaos Table.',
          'Your maximum EP increases by 2, and you have a 40% chance to generate 1 additional EP when rolling on a Chaos Table.',
          'Your maximum EP increases by 2, and you have a 60% chance to generate 1 additional EP when rolling on a Chaos Table.',
          'Your maximum EP increases by 3, and you have a 60% chance to generate 1 additional EP when rolling on a Chaos Table.'
        ]
      },
      {
        id: 'probability-manipulation',
        name: 'Probability Manipulation',
        description: 'Reduce the EP cost of manipulating dice rolls.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👆',
        rankDescription: [
          'Reduce the EP cost of rerolling a die by 1 (minimum 1) once per encounter.',
          'Reduce the EP cost of rerolling a die by 1 (minimum 1) twice per encounter.',
          'Reduce the EP cost of rerolling a die by 1 (minimum 1) three times per encounter.',
          'Reduce the EP cost of rerolling a die by 1 (minimum 1) four times per encounter.',
          'Reduce the EP cost of rerolling a die by 1 (minimum 1) five times per encounter.'
        ]
      },
      {
        id: 'chaos-theory',
        name: 'Chaos Theory',
        description: 'Your understanding of chaos allows you to add dice to your attack rolls.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🎲',
        rankDescription: [
          'When you roll for attack, roll 1d4 and add it to your roll.',
          'When you roll for attack, roll 1d4+1 and add it to your roll.',
          'When you roll for attack, roll 1d6 and add it to your roll.',
          'When you roll for attack, roll 1d6+1 and add it to your roll.',
          'When you roll for attack, roll 1d8 and add it to your roll.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'entropy-efficiency',
        name: 'Entropy Efficiency',
        description: 'Your EP manipulation becomes more powerful.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['entropy-attunement'],
        icon: '⚡',
        rankDescription: [
          'When you spend 1 EP to reroll a die, you can roll twice and choose the better result.',
          'When you spend 2 EP to add/subtract from a roll, you can add/subtract up to 2 instead of 1.',
          'When you spend 3 EP to roll with advantage, you roll three times instead of twice and take the highest result.'
        ]
      },
      {
        id: 'entropic-feedback',
        name: 'Entropic Feedback',
        description: 'Generate EP when you experience chaotic effects.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['probability-manipulation'],
        icon: '🔄',
        rankDescription: [
          'When you roll on a Chaos Table and get a result in the top 25% of possible results, gain 1 additional EP.',
          'When you roll on a Chaos Table and get a result in the top 25% of possible results, gain 1 additional EP. When you roll in the bottom 25%, gain 1 EP.',
          'When you roll on a Chaos Table and get a result in the top 25% of possible results, gain 2 additional EP. When you roll in the bottom 25%, gain 1 EP.'
        ]
      },
      {
        id: 'chaos-anchor',
        name: 'Chaos Anchor',
        description: 'Your control over chaos allows you to avoid the worst outcomes.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['chaos-theory'],
        icon: '⚓',
        rankDescription: [
          'When you roll a natural 1 on a Chaos Table, you can reroll once without spending EP.',
          'When you roll a natural 1 on a Chaos Table, you can reroll once without spending EP. If the second roll is also a 1, gain 1 EP.',
          'When you roll a natural 1 on a Chaos Table, you can reroll once without spending EP. If the second roll is also a 1, gain 2 EP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'controlled-chaos',
        name: 'Controlled Chaos',
        description: 'Gain the ability to control chaos more precisely.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['entropy-efficiency'],
        icon: '🎯',
        description: 'Once per encounter, you can choose the result on a Chaos Table instead of rolling. This costs 3 EP.'
      },
      {
        id: 'entropy-shield',
        name: 'Entropy Shield',
        description: 'Create a shield of controlled chaos that protects you from harm.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['entropic-feedback'],
        icon: '🛡️',
        rankDescription: [
          'Spend 2 EP to create a shield that lasts for 1d4 rounds. When hit, roll 1d6: 1-2: reflect the attack, 3-4: absorb the damage, 5-6: gain 1 EP.',
          'Spend 2 EP to create a shield that lasts for 1d4+1 rounds. When hit, roll 1d6: 1-2: reflect the attack at 125% power, 3-4: absorb the damage and gain 1d4 temporary hit points, 5-6: gain 1 EP and advantage on your next roll.',
          'Spend 2 EP to create a shield that lasts for 1d6 rounds. When hit, roll 1d6: 1-2: reflect the attack at 150% power, 3-4: absorb the damage and gain 1d6 temporary hit points, 5-6: gain 2 EP and advantage on your next roll.'
        ]
      },
      {
        id: 'probability-weaving',
        name: 'Probability Weaving',
        description: 'Weave probabilities to your advantage.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['chaos-anchor'],
        icon: '🧵',
        description: 'Spend 2 EP to grant yourself or an ally advantage on their next roll, or impose disadvantage on an enemy\'s next roll.'
      },

      // Tier 4 (Level 40)
      {
        id: 'entropy-mastery',
        name: 'Entropy Mastery',
        description: 'Your mastery of Entropy Points reaches new heights.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['controlled-chaos', 'entropy-shield'],
        icon: '🌟',
        description: 'Your maximum EP increases by 2. When you reach your maximum EP, you can exceed it by up to 3 points. These excess points can only be spent, not saved between encounters.'
      },
      {
        id: 'chaos-manipulation',
        name: 'Chaos Manipulation',
        description: 'Manipulate the chaos around you to create powerful effects.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['entropy-shield', 'probability-weaving'],
        icon: '🔮',
        description: 'Spend 3 EP to manipulate chaos in a 20-foot radius. Roll 1d8 to determine the effect: 1: slow all enemies, 2: create difficult terrain, 3: teleport creatures to advantageous positions, 4: create a zone of silence, 5: reverse gravity, 6: create a zone of healing, 7: create a zone of damage, 8: create a zone where magic is enhanced.'
      },

      // Tier 5 (Level 50)
      {
        id: 'entropy-lord',
        name: 'Entropy Lord',
        description: 'Become a master of entropy and chaos.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['entropy-mastery'],
        icon: '👑',
        description: 'Your maximum EP increases by 3. You generate 1 EP at the start of each of your turns. When you spend EP to manipulate a roll, you have a 25% chance to not consume the EP.'
      },

      // Tier 6 (Level 60)
      {
        id: 'reality-architect',
        name: 'Reality Architect',
        description: 'Gain the ability to reshape reality itself.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['entropy-lord', 'chaos-manipulation'],
        icon: '🏛️',
        description: 'Spend 5 EP to reshape reality in a 30-foot radius for 1d4+1 rounds. Choose one fundamental law to alter: gravity, time, elements, magic, or probability. All creatures in the area are affected by this change.'
      },

      // Tier 7 (Level 70)
      {
        id: 'master-of-probability',
        name: 'Master of Probability',
        description: 'Achieve perfect control over probability for a brief period.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['reality-architect'],
        icon: '✨',
        description: 'Spend all EP (minimum 5) to gain perfect control over probability for 1d4 rounds. During this time, you can choose the result of any chaos roll you make instead of rolling, and you can force one enemy per round to reroll any die roll with disadvantage.'
      },
    ],
  },
  {
    id: 'cataclysmic-surges',
    name: 'Cataclysmic Surges',
    description: 'Embrace maximum chaos for maximum power, using Entropy Points to fuel devastating but unpredictable effects.',
    icon: '💥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'chaos-amplification',
        name: 'Chaos Amplification',
        description: 'Your chaos dice rolls are more powerful but more volatile.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '📈',
        rankDescription: [
          'Your damage from chaos effects is increased by 1d4, but you have a 10% chance to trigger a roll on the Chaos Backlash Table.',
          'Your damage from chaos effects is increased by 1d6, but you have a 10% chance to trigger a roll on the Chaos Backlash Table.',
          'Your damage from chaos effects is increased by 1d8, but you have a 15% chance to trigger a roll on the Chaos Backlash Table.',
          'Your damage from chaos effects is increased by 1d10, but you have a 15% chance to trigger a roll on the Chaos Backlash Table.',
          'Your damage from chaos effects is increased by 1d12, but you have a 20% chance to trigger a roll on the Chaos Backlash Table.'
        ]
      },
      {
        id: 'entropy-surge',
        name: 'Entropy Surge',
        description: 'Generate more EP when reaching Chaos Threshold state.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⚡',
        rankDescription: [
          'When you enter Chaos Threshold state, gain 1 additional EP (exceeding your maximum).',
          'When you enter Chaos Threshold state, gain 1d4 additional EP (exceeding your maximum).',
          'When you enter Chaos Threshold state, gain 1d4+1 additional EP (exceeding your maximum).',
          'When you enter Chaos Threshold state, gain 1d6+1 additional EP (exceeding your maximum).',
          'When you enter Chaos Threshold state, gain 1d8+1 additional EP (exceeding your maximum).'
        ]
      },
      {
        id: 'calculated-risk',
        name: 'Calculated Risk',
        description: 'Sacrifice health for more powerful chaos effects.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📊',
        rankDescription: [
          'You can sacrifice 1d4 hit points to add 1 to any chaos roll.',
          'You can sacrifice 1d4 hit points to add 1d4 to any chaos roll.',
          'You can sacrifice 1d6 hit points to add 1d6 to any chaos roll.',
          'You can sacrifice 1d8 hit points to add 1d8 to any chaos roll.',
          'You can sacrifice 1d10 hit points to add 1d10 to any chaos roll.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'chaotic-explosion',
        name: 'Chaotic Explosion',
        description: 'Your spells can trigger explosive chaos effects.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['chaos-amplification'],
        icon: '💥',
        rankDescription: [
          'When you roll the maximum value on a Chaos Table, your spell affects all targets within 10 feet of the original target.',
          'When you roll the maximum value on a Chaos Table, your spell affects all targets within 15 feet of the original target.',
          'When you roll the maximum value on a Chaos Table, your spell affects all targets within 20 feet of the original target.'
        ]
      },
      {
        id: 'threshold-mastery',
        name: 'Threshold Mastery',
        description: 'Gain additional benefits while in Chaos Threshold state.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['entropy-surge'],
        icon: '🔥',
        rankDescription: [
          'While in Chaos Threshold state, your spells deal an additional 1d6 damage.',
          'While in Chaos Threshold state, your spells deal an additional 1d8 damage and have their range increased by 50%.',
          'While in Chaos Threshold state, your spells deal an additional 1d10 damage, have their range increased by 50%, and cost 1 less mana.'
        ]
      },
      {
        id: 'wild-magic',
        name: 'Wild Magic',
        description: 'Your spells have a chance to trigger wild, unpredictable effects.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['calculated-risk'],
        icon: '🎲',
        rankDescription: [
          'When you cast a spell, roll 1d20. On a 20, roll on the Flux Effect Table and apply that effect in addition to your spell\'s normal effect.',
          'When you cast a spell, roll 1d20. On a 19-20, roll on the Flux Effect Table and apply that effect in addition to your spell\'s normal effect.',
          'When you cast a spell, roll 1d20. On an 18-20, roll on the Flux Effect Table and apply that effect in addition to your spell\'s normal effect.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'chaos-battery',
        name: 'Chaos Battery',
        description: 'Store excess Entropy Points for later use.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['chaotic-explosion'],
        icon: '🔋',
        description: 'You can store up to 5 EP beyond your maximum. These excess points can only be spent, not saved between encounters. While at maximum EP, you gain resistance to one random damage type (roll 1d8 on the Elemental Table).'
      },
      {
        id: 'entropic-overload',
        name: 'Entropic Overload',
        description: 'Channel excess entropy into devastating effects.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['threshold-mastery'],
        icon: '⚠️',
        description: 'While in Chaos Threshold state, you can spend 3 EP to cast Chaos Nova without using an action. This can only be done once per encounter.'
      },
      {
        id: 'chaotic-resilience',
        name: 'Chaotic Resilience',
        description: 'Your body adapts to the chaos flowing through it.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['wild-magic'],
        icon: '🛡️',
        description: 'When you trigger a roll on the Chaos Backlash Table, roll twice and choose which effect occurs. Additionally, gain 1d6 temporary hit points whenever you enter Chaos Threshold state.'
      },

      // Tier 4 (Level 40)
      {
        id: 'chaos-cascade',
        name: 'Chaos Cascade',
        description: 'Your chaos effects can trigger chain reactions.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['chaos-battery', 'entropic-overload'],
        icon: '🌊',
        rankDescription: [
          'When you roll the maximum value on a Chaos Table, you have a 25% chance to immediately roll again on the same table and apply both effects.',
          'When you roll the maximum value on a Chaos Table, you have a 50% chance to immediately roll again on the same table and apply both effects.',
          'When you roll the maximum value on a Chaos Table, you have a 75% chance to immediately roll again on the same table and apply both effects.'
        ]
      },
      {
        id: 'entropy-storm',
        name: 'Entropy Storm',
        description: 'Create a storm of chaotic energy around you.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['entropic-overload', 'chaotic-resilience'],
        icon: '🌪️',
        description: 'Spend 4 EP to create a 20-foot radius storm of entropy centered on you for 1d4 rounds. At the start of each of your turns, roll 1d8 on the Elemental Table. All enemies within the storm take 2d8 damage of that type, and you gain 1 EP.'
      },

      // Tier 5 (Level 50)
      {
        id: 'chaos-incarnate',
        name: 'Chaos Incarnate',
        description: 'Temporarily become a being of pure chaos.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['chaos-cascade'],
        icon: '👤',
        description: 'Spend 5 EP to transform into a being of pure chaos for 1d4 rounds. While transformed, you gain immunity to one random damage type (roll on the Elemental Table), your chaos spells cost 1 less mana, and you generate 1 EP at the start of each of your turns.'
      },

      // Tier 6 (Level 60)
      {
        id: 'reality-breach',
        name: 'Reality Breach',
        description: 'Tear a hole in reality, unleashing pure chaos.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['chaos-incarnate', 'entropy-storm'],
        icon: '🌌',
        description: 'Spend 6 EP to create a reality breach at a target location. The breach lasts for 1d4 rounds and has a 15-foot radius. Each round, roll 1d10 on the Reality Breach Table to determine what emerges from the breach, affecting all creatures in the area.'
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-chaos',
        name: 'Avatar of Chaos',
        description: 'Become the ultimate embodiment of chaos.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['reality-breach'],
        icon: '👑',
        description: 'Spend all EP (minimum 7) to become the Avatar of Chaos for 1d6 rounds. While in this form, all your chaos rolls are made with advantage, you generate 2 EP per turn automatically, your spells cost 2 less mana, and you can cast one additional spell per turn. However, all your spells have a 25% chance to trigger a roll on the Chaos Backlash Table.'
      },
    ],
  },
  {
    id: 'tactical-disruption',
    name: 'Tactical Disruption',
    description: 'Use Entropy Points to control the battlefield through debuffs, area effects, and strategic manipulation of chaos.',
    icon: '🎭',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'entropic-touch',
        name: 'Entropic Touch',
        description: 'Your attacks apply Entropy stacks, dealing damage over time and generating EP.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👆',
        rankDescription: [
          'Your attacks apply 1 Entropy stack, dealing 1d4 damage per round for 1d4 rounds. Each stack generates 1 EP when applied.',
          'Your attacks apply 1 Entropy stack, dealing 1d6 damage per round for 1d4 rounds. Each stack generates 1 EP when applied.',
          'Your attacks apply 2 Entropy stacks, dealing 1d6 damage per round for 1d4 rounds. Each stack generates 1 EP when applied.',
          'Your attacks apply 2 Entropy stacks, dealing 1d8 damage per round for 1d6 rounds. Each stack generates 1 EP when applied.',
          'Your attacks apply 3 Entropy stacks, dealing 1d8 damage per round for 1d6 rounds. Each stack generates 1 EP when applied.'
        ]
      },
      {
        id: 'reality-distortion',
        name: 'Reality Distortion',
        description: 'Use EP to manipulate the battlefield.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🌀',
        rankDescription: [
          'Spend 1 EP to create a 10-foot radius zone of distorted reality for 1 round. Roll 1d6 to determine the effect: 1-2: difficult terrain, 3-4: obscured vision, 5-6: silence.',
          'Spend 1 EP to create a 15-foot radius zone of distorted reality for 1 round. Roll 1d6 to determine the effect: 1-2: difficult terrain, 3-4: obscured vision, 5-6: silence.',
          'Spend 1 EP to create a 15-foot radius zone of distorted reality for 1d4 rounds. Roll 1d6 to determine the effect: 1-2: difficult terrain, 3-4: obscured vision, 5-6: silence.',
          'Spend 2 EP to create a 20-foot radius zone of distorted reality for 1d4 rounds. Roll 1d8 to determine the effect: 1-2: difficult terrain, 3-4: obscured vision, 5-6: silence, 7-8: reversed gravity.',
          'Spend 2 EP to create a 25-foot radius zone of distorted reality for 1d4 rounds. Roll 1d8 to determine the effect: 1-2: difficult terrain, 3-4: obscured vision, 5-6: silence, 7-8: reversed gravity.'
        ]
      },
      {
        id: 'chaotic-disruption',
        name: 'Chaotic Disruption',
        description: 'Your spells disrupt enemy actions.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'Your damaging spells have a chance to disrupt enemies. Roll 1d20; on a 19-20, the target loses their next bonus action.',
          'Your damaging spells have a chance to disrupt enemies. Roll 1d20; on an 18-20, the target loses their next bonus action.',
          'Your damaging spells have a chance to disrupt enemies. Roll 1d20; on a 17-20, the target loses their next bonus action.',
          'Your damaging spells have a chance to disrupt enemies. Roll 1d20; on a 16-20, the target loses their next bonus action or reaction (your choice).',
          'Your damaging spells have a chance to disrupt enemies. Roll 1d20; on a 15-20, the target loses their next bonus action or reaction (your choice).'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'entropy-propagation',
        name: 'Entropy Propagation',
        description: 'Your Entropy effects can spread to nearby enemies.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['entropic-touch'],
        icon: '🔄',
        rankDescription: [
          'Spend 1 EP to spread Entropy stacks from one target to another target within 10 feet.',
          'Spend 2 EP to spread Entropy stacks from one target to all enemies within 10 feet.',
          'Spend 3 EP to spread Entropy stacks from one target to all enemies within 15 feet, and increase the duration by 1d4 rounds.'
        ]
      },
      {
        id: 'chaotic-terrain',
        name: 'Chaotic Terrain',
        description: 'Enhance your reality distortion effects.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['reality-distortion'],
        icon: '🏞️',
        rankDescription: [
          'Your reality distortion zones last 1d4 additional rounds and their effects are more potent.',
          'Your reality distortion zones last 1d6 additional rounds and their effects are more potent. You can have two zones active at once.',
          'Your reality distortion zones last 1d8 additional rounds and their effects are more potent. You can have two zones active at once, and they generate 1 EP per round.'
        ]
      },
      {
        id: 'entropic-drain',
        name: 'Entropic Drain',
        description: 'Drain resources from your enemies to fuel your chaos.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['chaotic-disruption'],
        icon: '💧',
        rankDescription: [
          'When your spells disrupt an enemy, you have a 25% chance to gain 1 EP.',
          'When your spells disrupt an enemy, you have a 50% chance to gain 1 EP.',
          'When your spells disrupt an enemy, you have a 75% chance to gain 1 EP.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'entropy-bolt',
        name: 'Entropy Bolt',
        description: 'Fire a bolt of pure entropy at a target.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['entropy-propagation'],
        icon: '🌩️',
        description: 'Spend 2 EP to fire a bolt of pure entropy at a target, dealing 2d10 damage and applying 3 Entropy stacks. Roll 1d6: on a 5-6, the target is also stunned for 1 round.'
      },
      {
        id: 'reality-anchor',
        name: 'Reality Anchor',
        description: 'Create an anchor point in reality that affects nearby creatures.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['chaotic-terrain'],
        icon: '⚓',
        description: 'Spend 3 EP to create a reality anchor at a target location for 1d6 rounds. The anchor has a 20-foot radius. Roll 1d8 to determine its effect: 1-2: enemies are slowed, 3-4: enemies take 1d8 damage per round, 5-6: allies gain 1d6 temporary hit points per round, 7-8: spells cast within the area have their range doubled.'
      },
      {
        id: 'chaotic-consumption',
        name: 'Chaotic Consumption',
        description: 'Consume Entropy stacks for powerful effects.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['entropic-drain'],
        icon: '🔥',
        description: 'Spend 1 EP to consume all Entropy stacks on a target. Each stack consumed deals 1d10 immediate damage and generates 1 additional EP.'
      },

      // Tier 4 (Level 40)
      {
        id: 'entropic-contagion',
        name: 'Entropic Contagion',
        description: 'Your Entropy effects apply additional debuffs.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['entropy-bolt', 'reality-anchor'],
        icon: '☣️',
        rankDescription: [
          'Targets affected by your Entropy stacks suffer an additional effect. Roll 1d6: 1-2: slowed, 3-4: weakened (deal 25% less damage), 5-6: vulnerable (take 25% more damage).',
          'Targets affected by your Entropy stacks suffer an additional effect. Roll 1d8: 1-2: slowed, 3-4: weakened (deal 25% less damage), 5-6: vulnerable (take 25% more damage), 7-8: silenced.',
          'Targets affected by your Entropy stacks suffer an additional effect. Roll 1d10: 1-2: slowed, 3-4: weakened (deal 25% less damage), 5-6: vulnerable (take 25% more damage), 7-8: silenced, 9-10: stunned for 1 round.'
        ]
      },
      {
        id: 'void-manipulation',
        name: 'Void Manipulation',
        description: 'Manipulate the void between realities.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['reality-anchor', 'chaotic-consumption'],
        icon: '🌌',
        description: 'Spend 4 EP to create a void rift at a target location for 1d4 rounds. Enemies within 15 feet of the rift take 2d8 force damage per round and have a 25% chance to be pulled 10 feet toward the rift at the start of their turn.'
      },

      // Tier 5 (Level 50)
      {
        id: 'entropy-master',
        name: 'Entropy Master',
        description: 'Master the application and consumption of Entropy.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['entropic-contagion'],
        icon: '👑',
        description: 'Your Entropy stacks deal an additional 1d8 damage per round. When you consume Entropy stacks, each stack generates 2 EP instead of 1.'
      },

      // Tier 6 (Level 60)
      {
        id: 'reality-collapse',
        name: 'Reality Collapse',
        description: 'Cause reality to collapse at a target location.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['entropy-master', 'void-manipulation'],
        icon: '💥',
        description: 'Spend 5 EP to cause reality to collapse at a target location. The collapse has a 30-foot radius and lasts for 1d4 rounds. Enemies within the area take 3d10 force damage per round, are slowed, and their spells have a 50% chance to fail.'
      },

      // Tier 7 (Level 70)
      {
        id: 'reality-unraveler',
        name: 'Reality Unraveler',
        description: 'Unravel the fabric of reality itself.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['reality-collapse'],
        icon: '✨',
        description: 'Spend all EP (minimum 6) to unravel reality in a 50-foot radius for 1d6 rounds. Within this area, you control the fundamental laws of physics. Each round, choose one effect: all enemies take 4d10 damage, all allies are healed for 4d10 hit points, all enemies are stunned, or all allies gain immunity to damage.'
      },
    ],
  }
];

export default chaosWeaverTalentTrees;
