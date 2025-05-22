// Talent trees for the Bladedancer class
const bladedancerTalentTrees = [
  {
    id: 'momentum',
    name: 'Momentum',
    description: 'Movement & Edge generation',
    icon: '🔄',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'graceful-movements',
        name: 'Graceful Movements',
        description: 'Enhance your natural agility and grace.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🦶',
        rankDescription: [
          'Add 5 feet to your movement speed and roll 1d20 when attacked; on a 19-20, you dodge the attack completely.',
          'Add 10 feet to your movement speed and roll 1d20 when attacked; on a 18-20, you dodge the attack completely.',
          'Add 15 feet to your movement speed and roll 1d20 when attacked; on a 17-20, you dodge the attack completely.',
          'Add 20 feet to your movement speed and roll 1d20 when attacked; on a 16-20, you dodge the attack completely.',
          'Add 25 feet to your movement speed and roll 1d20 when attacked; on a 15-20, you dodge the attack completely. Additionally, after successfully dodging, you are immune to movement-impairing effects for 1d4 rounds.'
        ]
      },
      {
        id: 'blade-flurry',
        name: 'Blade Flurry',
        description: 'Strike multiple enemies with a flurry of blade attacks.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '⚔️',
        rankDescription: [
          'When you attack, roll 1d10; on a 10, you strike an additional nearby enemy for 1d4 damage.',
          'When you attack, roll 1d8; on a 7-8, you strike an additional nearby enemy for 1d6 damage.',
          'When you attack, roll 1d6; on a 5-6, you strike an additional nearby enemy for 1d8 damage.',
          'When you attack, roll 1d4; on a 4, you strike an additional nearby enemy for 1d10 damage.',
          'When you attack, roll 1d4; on a 3-4, you strike an additional nearby enemy for 1d12 damage and apply any on-hit effects.'
        ]
      },
      {
        id: 'acrobatics',
        name: 'Acrobatics',
        description: 'Perform acrobatic maneuvers to avoid damage and navigate the battlefield.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🤸',
        rankDescription: [
          'Reduce fall damage by 1d6 and gain the ability to perform a short forward flip that covers 10 feet as a bonus action once per encounter.',
          'Reduce fall damage by 2d6 and gain the ability to perform a short forward flip that covers 15 feet as a bonus action twice per encounter.',
          'Reduce fall damage by 3d6 and gain the ability to perform a short forward flip that covers 20 feet as a bonus action three times per encounter.',
          'Reduce fall damage by 4d6 and gain the ability to perform a double jump that covers 25 feet as a bonus action three times per encounter.',
          'Negate all fall damage and gain the ability to perform a double jump that covers 30 feet as a bonus action. After each use, roll 1d6; on a 5-6, the ability recharges immediately.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'kinetic-flow',
        name: 'Kinetic Flow',
        description: 'Whirling Step distance → 25 ft.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['swift-foot', 'edge-retention'],
        icon: '💨',
        rankDescription: [
          'Your Whirling Step ability allows you to move 18 ft instead of 15 ft.',
          'Your Whirling Step ability allows you to move 22 ft instead of 15 ft.',
          'Your Whirling Step ability allows you to move 25 ft instead of 15 ft.'
        ]
      },
      {
        id: 'flowing-strikes',
        name: 'Flowing Strikes',
        description: 'Gain Edge when switching targets.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['edge-retention', 'momentum-builder'],
        icon: '🌊',
        rankDescription: [
          'Gain 1 Edge when you attack a different target than the last one you attacked.',
          'Gain 1 Edge when you attack a different target than the last one you attacked, and deal +1d4 damage.',
          'Gain 2 Edge when you attack a different target than the last one you attacked, and deal +1d4 damage.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'edge-efficiency',
        name: 'Edge Efficiency',
        description: 'Abilities cost less Edge.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['kinetic-flow'],
        icon: '⚡',
        rankDescription: [
          'All your abilities that cost Edge require 1 less Edge to use (minimum 1).'
        ]
      },
      {
        id: 'dance-master',
        name: 'Dance Master',
        description: 'Gain Edge when switching stances.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['flowing-strikes'],
        icon: '💃',
        rankDescription: [
          'Gain 2 Edge whenever you switch combat stances.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'edge-master',
        name: 'Edge Master',
        description: 'Increase your maximum Edge.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['edge-efficiency', 'dance-master'],
        icon: '⚔️',
        rankDescription: [
          'Your maximum Edge is increased by 4.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'endless-dance',
        name: 'Endless Dance',
        description: 'Edge no longer resets at turn end if you moved ≥ 15 ft that turn.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['edge-master'],
        icon: '🔄',
        rankDescription: [
          'Your Edge no longer resets to 0 at the end of your turn if you moved at least 15 ft during that turn.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'perpetual-motion',
        name: 'Perpetual Motion',
        description: 'Your movement becomes even more fluid and efficient.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['endless-dance'],
        icon: '🌀',
        rankDescription: [
          'Your movement speed increases by an additional 15 feet, and you can move through enemy spaces without penalty. Additionally, when you move at least 20 feet on your turn, you gain 2 Edge instead of 1.'
        ]
      },
      {
        id: 'edge-perfection',
        name: 'Edge Perfection',
        description: 'Your mastery of Edge reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['endless-dance'],
        icon: '✨',
        rankDescription: [
          'Your maximum Edge increases to 15, and you can spend up to 10 Edge on a single ability. Additionally, when you reach maximum Edge, your next ability costs 0 AP to use.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-momentum',
        name: 'Avatar of Momentum',
        description: 'Transform into a living embodiment of perfect momentum.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['perpetual-motion', 'edge-perfection'],
        icon: '💫',
        rankDescription: [
          'Once per day, transform into an Avatar of Momentum for 1d6+2 rounds. During this time, your movement speed doubles, you gain 1 Edge at the start of each of your turns, your Edge never resets to 0, and your abilities that cost Edge deal double damage. Additionally, you can teleport up to 30 feet as a bonus action (1 AP) once per round, and when you move at least 30 feet in a turn, you can make an additional attack as a bonus action (0 AP).'
        ]
      },
    ],
  },
  {
    id: 'precision',
    name: 'Precision',
    description: 'Crits & single-target burst',
    icon: '🎯',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'keen-edge',
        name: 'Keen Edge',
        description: 'Crit range –1 (19-20).',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔪',
        rankDescription: [
          'Your critical hit range is expanded by 1 on a roll of 20 only.',
          'Your critical hit range is expanded by 1 on a roll of 20 only, and critical hits deal +1 damage.',
          'Your critical hit range is expanded by 1 (19-20).',
          'Your critical hit range is expanded by 1 (19-20), and critical hits deal +1d4 damage.',
          'Your critical hit range is expanded by 1 (19-20), and critical hits deal +1d6 damage.'
        ]
      },
      {
        id: 'precision-strike',
        name: 'Precision Strike',
        description: 'Target vital areas for increased damage.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎯',
        rankDescription: [
          'Once per combat, you can declare a precision strike before attacking. If the attack hits, it deals +1d6 damage.',
          'Twice per combat, you can declare a precision strike before attacking. If the attack hits, it deals +1d6 damage.',
          'Twice per combat, you can declare a precision strike before attacking. If the attack hits, it deals +1d8 damage.',
          'Three times per combat, you can declare a precision strike before attacking. If the attack hits, it deals +1d8 damage.',
          'Three times per combat, you can declare a precision strike before attacking. If the attack hits, it deals +1d10 damage.'
        ]
      },
      {
        id: 'critical-focus',
        name: 'Critical Focus',
        description: 'Improve your critical hit chance.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💢',
        rankDescription: [
          'When you roll a 19 on an attack roll, roll 1d6. On a 6, the attack becomes a critical hit.',
          'When you roll a 19 on an attack roll, roll 1d6. On a 5-6, the attack becomes a critical hit.',
          'When you roll a 19 on an attack roll, roll 1d6. On a 4-6, the attack becomes a critical hit.',
          'When you roll a 19 on an attack roll, roll 1d6. On a 3-6, the attack becomes a critical hit.',
          'When you roll a 19 on an attack roll, roll 1d6. On a 2-6, the attack becomes a critical hit.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'anatomy-study',
        name: 'Anatomy Study',
        description: 'Crits deal +DEX mod dice.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['keen-edge', 'precision-strike'],
        icon: '🔍',
        rankDescription: [
          'When you score a critical hit, add 1 damage die.',
          'When you score a critical hit, add 2 damage dice.',
          'When you score a critical hit, add a number of damage dice equal to your DEX modifier.'
        ]
      },
      {
        id: 'vital-strike',
        name: 'Vital Strike',
        description: 'Target vital areas for increased damage.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['precision-strike', 'critical-focus'],
        icon: '🩸',
        rankDescription: [
          'Your critical hits deal +1d6 damage.',
          'Your critical hits deal +1d8 damage.',
          'Your critical hits deal +1d10 damage and have a 50% chance to apply Bleed 2 (2 dmg/round).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'blade-barrier',
        name: 'Blade Barrier',
        description: 'Create a barrier of whirling blades that damages enemies.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['flurry-of-blades'],
        icon: '🌀',
        rankDescription: [
          'Create a barrier of whirling blades around you for 1d4 rounds, dealing 1d6 damage to any enemy that comes within 5 feet of you.',
          'Create a barrier of whirling blades around you for 1d6 rounds, dealing 1d8 damage to any enemy that comes within 5 feet of you.',
          'Create a barrier of whirling blades around you for 1d8 rounds, dealing 1d10 damage to any enemy that comes within 5 feet of you and reducing their movement speed by 50% for 1 round.'
        ]
      },
      {
        id: 'twin-precision',
        name: 'Twin Precision',
        description: 'Strike with deadly precision using both weapons.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['flurry-of-blades', 'defensive-spin'],
        icon: '🎯',
        rankDescription: [
          'When making dual-wielding attacks, roll a d20; on a 19-20, you score a critical hit. Critical hits with dual-wielding attacks deal an additional 1d6 damage.',
          'When making dual-wielding attacks, roll a d20; on a 18-20, you score a critical hit. Critical hits with dual-wielding attacks deal an additional 2d6 damage.',
          'When making dual-wielding attacks, roll a d20; on a 17-20, you score a critical hit. Critical hits with dual-wielding attacks deal an additional 3d6 damage. Additionally, when you score a critical hit with a dual-wielding attack, gain 1d4 Focus.'
        ]
      },
      {
        id: 'riposte',
        name: 'Riposte',
        description: 'Counter-attack after successfully defending against an attack.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['defensive-spin'],
        icon: '↩️',
        rankDescription: [
          'After successfully dodging or parrying an attack, roll 1d10; on a 8-10, immediately counter-attack with your off-hand weapon, dealing 1d8 damage.',
          'After successfully dodging or parrying an attack, roll 1d6; on a 4-6, immediately counter-attack with your off-hand weapon, dealing 1d10 damage.',
          'After successfully dodging or parrying an attack, roll 1d4; on a 3-4, immediately counter-attack with your off-hand weapon, dealing 1d12 damage and applying a bleeding effect that deals 1d6 damage per round for 2 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'blade-storm',
        name: 'Blade Storm',
        description: 'Become a whirlwind of blades, striking all nearby enemies.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['blade-barrier', 'twin-precision'],
        icon: '🌪️',
        rankDescription: [
          'Unleash a storm of blade attacks, striking all enemies within 10 feet for 2d8 damage.',
          'Unleash a storm of blade attacks, striking all enemies within 15 feet for 3d8 damage.',
          'Unleash a storm of blade attacks, striking all enemies within 20 feet for 4d8 damage and applying a bleeding effect that deals 1d8 damage per round for 3 rounds.'
        ]
      },
      {
        id: 'perfect-balance',
        name: 'Perfect Balance',
        description: 'Achieve perfect balance with your dual weapons, enhancing all your abilities.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['twin-precision', 'riposte'],
        icon: '☯️',
        rankDescription: [
          'Add 1d4 to all damage dice for dual-wielding abilities and reduce their Focus cost by 1.',
          'Add 1d6 to all damage dice for dual-wielding abilities and reduce their Focus cost by 2.',
          'Add 1d8 to all damage dice for dual-wielding abilities and reduce their Focus cost by 3. Additionally, when making a normal attack, roll 1d8; on a 7-8, you strike with both weapons without spending additional Focus.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'blade-master',
        name: 'Blade Master',
        description: 'Become a true master of dual-wielding, achieving perfection in combat with two weapons.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['blade-storm', 'perfect-balance'],
        icon: '👑',
        rankDescription: [
          'Once per day, enter a state of perfect mastery with your dual weapons for 2 minutes. During this time, all your attacks strike with both weapons without additional Focus cost, your critical hit chance is increased by 25%, all your dual-wielding abilities have their cooldowns reduced by 50%, and you automatically riposte after any successful dodge or parry. Additionally, when you kill an enemy while in this state, you recover 2d6 Focus and extend the duration by 10 seconds.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'critical-mastery',
        name: 'Critical Mastery',
        description: 'Your critical hits become even more devastating.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['blade-master'],
        icon: '🎯',
        rankDescription: [
          'Your critical hit range expands by an additional 2 (17-20), and your critical hits deal triple damage instead of double damage. Additionally, when you score a critical hit, you gain 3 Edge and 1 Flourish Token.'
        ]
      },
      {
        id: 'dual-weapon-perfection',
        name: 'Dual Weapon Perfection',
        description: 'Your mastery of dual-wielding reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['blade-master'],
        icon: '⚔️',
        rankDescription: [
          'When making a normal attack with a dual-wielding weapon, you automatically attack with your off-hand weapon without spending additional Focus. Additionally, your dual-wielding attacks ignore half of the target\'s armor, and you can make an additional attack as a bonus action (1 AP) once per round.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-precision',
        name: 'Avatar of Precision',
        description: 'Transform into a living embodiment of perfect precision.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['critical-mastery', 'dual-weapon-perfection'],
        icon: '🎯',
        rankDescription: [
          'Once per day, transform into an Avatar of Precision for 1d6+2 rounds. During this time, your critical hit range expands to 11-20, all your attacks ignore resistance and immunity, and you automatically score a critical hit on your first attack each round. Additionally, when you score a critical hit, you can immediately make another attack against the same target or a different target within range as a free action (0 AP). Finally, your Blade Storm ability affects all enemies within 30 feet and automatically scores critical hits against all targets.'
        ]
      },
    ],
  },
  {
    id: 'deflect',
    name: 'Deflect',
    description: 'Evasion & parries',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'fluid-guard',
        name: 'Fluid Guard',
        description: 'Parry & Riposte also grants +1 Edge on success.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          'Reduce the Flourish Token cost of Parry & Riposte by 1 once per combat.',
          'Reduce the Flourish Token cost of Parry & Riposte by 1 twice per combat.',
          'When you successfully use Parry & Riposte to reduce damage to 0, you gain +1 Edge.',
          'When you successfully use Parry & Riposte to reduce damage to 0, you gain +1 Edge and the free Dancing Cut deals +1d4 damage.',
          'When you successfully use Parry & Riposte to reduce damage to 0, you gain +1 Edge and the free Dancing Cut deals +1d6 damage.'
        ]
      },
      {
        id: 'evasive-footwork',
        name: 'Evasive Footwork',
        description: 'Improve your ability to dodge attacks.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👣',
        rankDescription: [
          'Gain +1 AC when you move at least 10 ft in a turn.',
          'Gain +1 AC when you move at least 10 ft in a turn, and +1 to Dexterity saving throws.',
          'Gain +2 AC when you move at least 10 ft in a turn, and +1 to Dexterity saving throws.',
          'Gain +2 AC when you move at least 10 ft in a turn, and +2 to Dexterity saving throws.',
          'Gain +3 AC when you move at least 10 ft in a turn, and +2 to Dexterity saving throws.'
        ]
      },
      {
        id: 'deflection-training',
        name: 'Deflection Training',
        description: 'Improve your ability to deflect attacks.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '↩️',
        rankDescription: [
          'Parry & Riposte reduces damage by an additional 1.',
          'Parry & Riposte reduces damage by an additional 1d4.',
          'Parry & Riposte reduces damage by an additional 1d6.',
          'Parry & Riposte reduces damage by an additional 1d8.',
          'Parry & Riposte reduces damage by an additional 1d10.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'aerial-tumble',
        name: 'Aerial Tumble',
        description: 'Gain advantage on DEX saves while in Wind stance.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['fluid-guard', 'evasive-footwork'],
        icon: '🤸',
        rankDescription: [
          'You have a +1 bonus to Dexterity saving throws while in Wind stance.',
          'You have a +2 bonus to Dexterity saving throws while in Wind stance.',
          'You have advantage on Dexterity saving throws while in Wind stance.'
        ]
      },
      {
        id: 'defensive-flourish',
        name: 'Defensive Flourish',
        description: 'Improve your defensive capabilities.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['evasive-footwork', 'deflection-training'],
        icon: '💫',
        rankDescription: [
          'When you spend a Flourish Token, gain +1 AC until the start of your next turn.',
          'When you spend a Flourish Token, gain +2 AC until the start of your next turn.',
          'When you spend a Flourish Token, gain +3 AC until the start of your next turn.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'perfect-parry',
        name: 'Perfect Parry',
        description: 'Improve your parrying ability.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['aerial-tumble', 'defensive-flourish'],
        icon: '⚔️',
        rankDescription: [
          'When you use Parry & Riposte, roll 1d6. On a 6, you don\'t spend a Flourish Token.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'untouchable',
        name: 'Untouchable',
        description: 'Become nearly impossible to hit.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['perfect-parry'],
        icon: '🌪️',
        rankDescription: [
          'The first attack that would hit you each round has a 50% chance to miss instead.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'untouchable-flourish',
        name: 'Untouchable Flourish',
        description: 'First attack that would hit you each round is automatically parried (no Token cost).',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['untouchable'],
        icon: '✨',
        rankDescription: [
          'The first attack that would hit you each round is automatically parried without spending a Flourish Token.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'perfect-defense',
        name: 'Perfect Defense',
        description: 'Your defensive capabilities reach new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['untouchable-flourish'],
        icon: '🛡️',
        rankDescription: [
          'You gain +2 AC and advantage on all saving throws against effects that would cause you to be stunned, paralyzed, or knocked prone. Additionally, when you successfully parry an attack, you can immediately make a counterattack against the attacker as a free action (0 AP).'
        ]
      },
      {
        id: 'dance-of-blades',
        name: 'Dance of Blades',
        description: 'Your movements become a deadly dance that damages nearby enemies.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['untouchable-flourish'],
        icon: '💃',
        rankDescription: [
          'When you move at least 15 feet on your turn, you deal 2d8 slashing damage to all enemies within 5 feet of your path. Additionally, when you successfully dodge an attack, the attacker takes 2d10 slashing damage and is pushed 10 feet away from you.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-evasion',
        name: 'Avatar of Evasion',
        description: 'Transform into a living embodiment of perfect evasion.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['perfect-defense', 'dance-of-blades'],
        icon: '🌪️',
        rankDescription: [
          'Once per day, transform into an Avatar of Evasion for 1d6+2 rounds. During this time, you automatically dodge or parry all attacks made against you, you are immune to all area-of-effect damage, and you gain 1 Flourish Token at the start of each of your turns. Additionally, when you dodge or parry an attack, you can immediately teleport up to 15 feet and make an attack against any enemy within range as a free action (0 AP). Finally, you emit an aura of whirling blades in a 10-foot radius that deals 3d10 slashing damage to all enemies who start their turn in the aura or enter it for the first time on their turn.'
        ]
      },
    ],
  }
];

export default bladedancerTalentTrees;
