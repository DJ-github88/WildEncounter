// Talent trees for the Toxicologist class
const toxicologistTalentTrees = [
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Focus on better brews and bigger numbers.',
    icon: '⚗️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'refined-toxin',
        name: 'Refined Toxin',
        description: 'Each basic vial adds +1 Poison stack.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '💉',
        rankDescription: [
          'When using a basic vial with Venom Dart, add +1 Poison stack to the effect.',
          'When using a basic vial with Coated Blade, add +1 Poison stack to the effect.',
          'When using a basic vial with any ability, add +1 Poison stack to the effect.',
          'When using a basic vial with any ability, add +1 Poison stack and 1d4 poison damage to the effect.',
          'Each basic vial adds +1 Poison stack to the effect of any ability that uses it.'
        ]
      },
      {
        id: 'stabilizer',
        name: 'Stabilizer',
        description: 'Brewing no longer costs AP outside combat.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🧪',
        rankDescription: [
          'Roll 1d6 when using Quick Mix outside combat. On a 1, it costs 1 AP. Otherwise, it costs 0 AP.',
          'Roll 1d6 when using Quick Mix outside combat. On a 1-2, it costs 1 AP. Otherwise, it costs 0 AP.',
          'Roll 1d6 when using Quick Mix outside combat. On a 1-3, it costs 1 AP. Otherwise, it costs 0 AP.',
          'Roll 1d6 when using Quick Mix outside combat. On a 1-4, it costs 1 AP. Otherwise, it costs 0 AP.',
          'Quick Mix does not cost AP when used outside of combat.'
        ]
      },
      {
        id: 'corrosive-blend',
        name: 'Corrosive Blend',
        description: 'Poison stacks also reduce target AC 1 per 2 stacks.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🧫',
        rankDescription: [
          'For every 5 Poison stacks on a target, their AC is reduced by 1.',
          'For every 4 Poison stacks on a target, their AC is reduced by 1.',
          'For every 3 Poison stacks on a target, their AC is reduced by 1.',
          'For every 3 Poison stacks on a target, their AC is reduced by 1. If they have 6+ stacks, reduce by 2.',
          'For every 2 Poison stacks on a target, their AC is reduced by 1.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'efficient-brewing',
        name: 'Efficient Brewing',
        description: 'Your brewing process is more efficient.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['refined-toxin', 'stabilizer'],
        icon: '⏱️',
        rankDescription: [
          'You can create one additional vial when using Quick Mix.',
          'You can create one additional vial when using Quick Mix, and vials last 1 additional round.',
          'You can create one additional vial when using Quick Mix, and vials last 2 additional rounds.'
        ]
      },
      {
        id: 'potent-reagents',
        name: 'Potent Reagents',
        description: 'Your reagents are more powerful.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['stabilizer', 'corrosive-blend'],
        icon: '🧪',
        rankDescription: [
          'Each Reagent spent with Catalyze deals 1d6 true damage per Poison stack instead of 1d4.',
          'Each Reagent spent with Catalyze deals 1d8 true damage per Poison stack instead of 1d4.',
          'Each Reagent spent with Catalyze deals 1d10 true damage per Poison stack instead of 1d4.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'advanced-chemistry',
        name: 'Advanced Chemistry',
        description: 'Your chemical knowledge allows for more potent concoctions.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['efficient-brewing', 'potent-reagents'],
        icon: '🧪',
        rankDescription: [
          'Your vials can hold two different types of poison at once, applying both effects when used.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'master-chemist',
        name: 'Master Chemist',
        description: 'Your mastery of chemistry allows for exceptional concoctions.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['advanced-chemistry'],
        icon: '👨‍🔬',
        rankDescription: [
          'Your Minor Antidote can now remove 3 conditions instead of 2 and heals for 2d8 + INT hit points.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'panacea-mastery',
        name: 'Panacea Mastery',
        description: 'Antidotes cost 0 Mana and remove all conditions.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['master-chemist'],
        icon: '💊',
        rankDescription: [
          'Minor Antidote costs 0 Mana and removes all negative conditions instead of just 2.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'alchemical-genius',
        name: 'Alchemical Genius',
        description: 'Your chemical expertise reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['panacea-mastery'],
        icon: '🧠',
        rankDescription: [
          'Your vials can now hold three different types of poison at once, applying all effects when used. Additionally, when you use Quick Mix, you can create one additional vial of each type you choose.'
        ]
      },
      {
        id: 'chemical-perfection',
        name: 'Chemical Perfection',
        description: 'Your chemical formulas are perfected to their maximum potential.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['panacea-mastery'],
        icon: '✨',
        rankDescription: [
          'Your poisons deal an additional 1d8 damage per Poison stack, and your healing potions restore an additional 2d8 hit points. Additionally, when you use Catalyze, you can choose to spend all your Reagents to deal maximum possible damage instead of rolling.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-alchemy',
        name: 'Avatar of Alchemy',
        description: 'Transform into a living embodiment of alchemical mastery.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['alchemical-genius', 'chemical-perfection'],
        icon: '⚗️',
        rankDescription: [
          'Once per day, transform into an Avatar of Alchemy for 1d6+2 rounds. During this time, your vials have triple the normal effect, you can use Quick Mix as a bonus action (0 AP), and you gain 1 Reagent at the start of each of your turns. Additionally, when you apply poison to a target, you can choose to have it immediately trigger all its damage at once or spread the damage over twice the normal duration. Finally, your Minor Antidote becomes a 15-foot radius burst that affects all allies within range.'
        ]
      },
    ],
  },
  {
    id: 'contraptioneer',
    name: 'Contraptioneer',
    description: 'Focus on traps and gadgets for battlefield control.',
    icon: '🔧',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'extra-slot',
        name: 'Extra Slot',
        description: 'Carry a third gadget.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🧰',
        rankDescription: [
          'You have a 20% chance to recover a Contraption Slot when a contraption is triggered.',
          'You have a 40% chance to recover a Contraption Slot when a contraption is triggered.',
          'You have a 60% chance to recover a Contraption Slot when a contraption is triggered.',
          'You have a 80% chance to recover a Contraption Slot when a contraption is triggered.',
          'You gain an additional Contraption Slot (3 total).'
        ]
      },
      {
        id: 'remote-detonator',
        name: 'Remote Detonator',
        description: 'Spend 1 AP to trigger any placed device.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '📡',
        rankDescription: [
          'Spend 2 AP to trigger any placed contraption remotely.',
          'Roll 1d4 when triggering a contraption remotely. On a 4, spend 1 AP instead of 2 AP.',
          'Roll 1d4 when triggering a contraption remotely. On a 3-4, spend 1 AP instead of 2 AP.',
          'Roll 1d4 when triggering a contraption remotely. On a 2-4, spend 1 AP instead of 2 AP.',
          'Spend 1 AP to trigger any placed contraption remotely.'
        ]
      },
      {
        id: 'reinforced-casing',
        name: 'Reinforced Casing',
        description: 'Mines and traps gain +10 HP.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🛡️',
        rankDescription: [
          'Your contraptions gain +2 HP.',
          'Your contraptions gain +4 HP.',
          'Your contraptions gain +6 HP.',
          'Your contraptions gain +8 HP.',
          'Your contraptions gain +10 HP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'improved-traps',
        name: 'Improved Traps',
        description: 'Your traps are more effective.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['extra-slot', 'remote-detonator'],
        icon: '🕸️',
        rankDescription: [
          'Your Tangle Trap roots targets for 2 rounds instead of 1.',
          'Your Tangle Trap roots targets for 2 rounds and applies 2 Poison stacks.',
          'Your Tangle Trap roots targets for 3 rounds and applies 3 Poison stacks.'
        ]
      },
      {
        id: 'gadget-specialist',
        name: 'Gadget Specialist',
        description: 'Your gadgets are more effective.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['remote-detonator', 'reinforced-casing'],
        icon: '🔧',
        rankDescription: [
          'Your Gas Mine affects a 25-ft radius instead of 20-ft.',
          'Your Gas Mine affects a 30-ft radius and lasts 3 turns instead of 2.',
          'Your Gas Mine affects a 30-ft radius, lasts 3 turns, and applies 3 Poison stacks instead of 2.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'trap-master',
        name: 'Trap Master',
        description: 'Your traps are more effective and harder to detect.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['improved-traps'],
        icon: '🕸️',
        rankDescription: [
          'Your contraptions are harder to detect (disadvantage on perception checks) and deal +1d6 damage when triggered.'
        ]
      },
      {
        id: 'gadget-innovator',
        name: 'Gadget Innovator',
        description: 'Your gadgets are more innovative and effective.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['gadget-specialist'],
        icon: '🔧',
        rankDescription: [
          'Your Gas Mine can be configured to apply different effects (paralysis, blindness, or silence) instead of disadvantage on attacks.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'contraption-mastery',
        name: 'Contraption Mastery',
        description: 'Your contraptions are more effective and versatile.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['trap-master', 'gadget-innovator'],
        icon: '🔧',
        rankDescription: [
          'Your contraptions last 1 additional round and can be moved as a bonus action once deployed.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'arsenal-overload',
        name: 'Arsenal Overload',
        description: 'Placing a gadget refunds 1 AP and 1 Mana.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['contraption-mastery'],
        icon: '🔋',
        rankDescription: [
          'When you place a contraption, you regain 1 AP and 1 Mana.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'advanced-engineering',
        name: 'Advanced Engineering',
        description: 'Your contraptions become more sophisticated and powerful.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['arsenal-overload'],
        icon: '🔧',
        rankDescription: [
          'Your contraptions deal an additional 2d8 damage when triggered and have their area of effect increased by 5 feet. Additionally, you can have up to 4 contraptions deployed at once instead of 3.'
        ]
      },
      {
        id: 'rapid-deployment',
        name: 'Rapid Deployment',
        description: 'Deploy contraptions with incredible speed and efficiency.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['arsenal-overload'],
        icon: '⚡',
        rankDescription: [
          'You can deploy a contraption as a bonus action (1 AP) instead of a standard action. Additionally, when a contraption is triggered, you have a 50% chance to recover the Contraption Slot immediately.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-invention',
        name: 'Avatar of Invention',
        description: 'Transform into a living embodiment of mechanical genius.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['advanced-engineering', 'rapid-deployment'],
        icon: '🔧',
        rankDescription: [
          'Once per day, transform into an Avatar of Invention for 1d6+2 rounds. During this time, your contraptions deal triple damage when triggered, you can deploy contraptions without spending Contraption Slots, and you can move all your deployed contraptions up to 30 feet as a bonus action (0 AP). Additionally, when a contraption is triggered, it creates a secondary explosion that deals 3d10 damage in a 15-foot radius and applies 3 Poison stacks to all affected enemies.'
        ]
      },
    ],
  },
  {
    id: 'venom-arts',
    name: 'Venom Arts',
    description: 'Focus on weapon poisoning and burst finishers.',
    icon: '☠️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'toxic-coating',
        name: 'Toxic Coating',
        description: 'Coated Blade lasts 3 turns.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🗡️',
        rankDescription: [
          'Coated Blade lasts until the end of your next turn plus 1 additional round.',
          'Coated Blade lasts until the end of your next turn plus 1 additional round and applies 2 Poison stacks on first hit.',
          'Coated Blade lasts 2 additional rounds after your next turn.',
          'Coated Blade lasts 2 additional rounds after your next turn and applies 2 Poison stacks on all hits.',
          'Coated Blade lasts 3 turns instead of until the end of your next turn.'
        ]
      },
      {
        id: 'bloodrot',
        name: 'Bloodrot',
        description: 'Poison ticks deal +DEX damage.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💉',
        rankDescription: [
          'Poison ticks deal +1 damage.',
          'Poison ticks deal +2 damage.',
          'Poison ticks deal +3 damage.',
          'Poison ticks deal +4 damage.',
          'Poison ticks deal +DEX modifier damage.'
        ]
      },
      {
        id: 'poison-mastery',
        name: 'Poison Mastery',
        description: 'Your poisons are more effective.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '☠️',
        rankDescription: [
          'Your Poison stacks last for one additional tick before fading.',
          'Your Poison stacks deal +1 damage per stack.',
          'Your Poison stacks last for two additional ticks before fading.',
          'Your Poison stacks deal +2 damage per stack.',
          'Your Poison stacks last until they take damage three times instead of twice.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'venom-specialist',
        name: 'Venom Specialist',
        description: 'Your Venom Dart is more effective.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['toxic-coating', 'bloodrot'],
        icon: '🎯',
        rankDescription: [
          'Your Venom Dart deals +1d4 damage and applies 3 Poison stacks instead of 2.',
          'Your Venom Dart deals +1d6 damage and applies 3 Poison stacks instead of 2.',
          'Your Venom Dart deals +1d8 damage and applies 4 Poison stacks instead of 2.'
        ]
      },
      {
        id: 'catalytic-reaction',
        name: 'Catalytic Reaction',
        description: 'Your Catalyze ability is more effective.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['bloodrot', 'poison-mastery'],
        icon: '⚗️',
        rankDescription: [
          'Catalyze deals +1 damage per Poison stack per Reagent spent.',
          'Catalyze deals +2 damage per Poison stack per Reagent spent.',
          'Catalyze deals +3 damage per Poison stack per Reagent spent and has a 15-ft radius.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'hemotoxin',
        name: 'Hemotoxin',
        description: 'Catalyze also stuns if it deals 10+ damage.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['venom-specialist', 'catalytic-reaction'],
        icon: '💉',
        rankDescription: [
          'If Catalyze deals 10 or more damage, the target is also stunned for 1 round.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'poison-expert',
        name: 'Poison Expert',
        description: 'Your poisons are more potent and effective.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['hemotoxin'],
        icon: '☠️',
        rankDescription: [
          'Your Poison stacks deal +1d4 damage per stack and apply disadvantage on Constitution saves while active.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'assassins-zenith',
        name: 'Assassin\'s Zenith',
        description: 'First attack each combat automatically inflicts 5 Poison stacks.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['poison-expert'],
        icon: '🗡️',
        rankDescription: [
          'Your first attack in each combat automatically applies 5 Poison stacks, regardless of the ability used.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'lethal-toxins',
        name: 'Lethal Toxins',
        description: 'Your poisons become incredibly lethal.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['assassins-zenith'],
        icon: '☠️',
        rankDescription: [
          'Your Poison stacks deal an additional 1d10 damage per stack and have a 10% chance per stack to apply one of the following conditions: paralyzed, blinded, or stunned for 1 round.'
        ]
      },
      {
        id: 'venomous-expertise',
        name: 'Venomous Expertise',
        description: 'Your expertise with poisons reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['assassins-zenith'],
        icon: '🧪',
        rankDescription: [
          'Your Coated Blade ability now applies to all allies within 10 feet of you when used, and your Venom Dart can hit up to 3 targets in a 15-foot cone. Additionally, when you use Catalyze, you can choose to apply the damage to all enemies within 10 feet of the primary target.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-venom',
        name: 'Avatar of Venom',
        description: 'Transform into a living embodiment of deadly poison.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['lethal-toxins', 'venomous-expertise'],
        icon: '🐍',
        rankDescription: [
          'Once per day, transform into an Avatar of Venom for 1d6+2 rounds. During this time, your attacks automatically apply 3 Poison stacks, your Poison stacks deal triple damage and ignore all resistances and immunities, and you gain immunity to all poisons and diseases. Additionally, you emit a toxic aura in a 15-foot radius that applies 1 Poison stack to all enemies who start their turn in the aura. Finally, when you use Catalyze, it affects all enemies within 30 feet of you and consumes only half the normal amount of Reagents.'
        ]
      },
    ],
  }
];

export default toxicologistTalentTrees;
