// Talent trees for the Huntress class
const huntressTalentTrees = [
  {
    id: 'falcons-eye',
    name: 'Falcon\'s Eye',
    description: 'Focus on precision shooting and critical strikes from a distance.',
    icon: '🦅',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'steady-aim',
        name: 'Steady Aim',
        description: 'Your Sniper Stance is more mobile.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎯',
        rankDescription: [
          'Sniper Stance only ends if you move >7 ft (was 5 ft).',
          'Sniper Stance only ends if you move >9 ft (was 5 ft).',
          'Sniper Stance only ends if you move >11 ft (was 5 ft).',
          'Sniper Stance only ends if you move >13 ft (was 5 ft).',
          'Sniper Stance only ends if you move >15 ft (was 5 ft).'
        ]
      },
      {
        id: 'piercing-fletch',
        name: 'Piercing Fletch',
        description: 'Your Lethal Line is more devastating.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '↗️',
        rankDescription: [
          'Lethal Line ignores 20% of target\'s resistance.',
          'Lethal Line ignores 40% of target\'s resistance.',
          'Lethal Line ignores 60% of target\'s resistance.',
          'Lethal Line ignores 80% of target\'s resistance.',
          'Lethal Line ignores all resistance; crits explode for +1d8 damage.'
        ]
      },
      {
        id: 'eye-of-the-storm',
        name: 'Eye of the Storm',
        description: 'Even your misses help you focus.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🌀',
        rankDescription: [
          'Every miss vs Quarry has a 20% chance to grant +1 Focus.',
          'Every miss vs Quarry has a 40% chance to grant +1 Focus.',
          'Every miss vs Quarry has a 60% chance to grant +1 Focus.',
          'Every miss vs Quarry has a 80% chance to grant +1 Focus.',
          'Every miss vs Quarry grants +1 Focus.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'critical-focus',
        name: 'Critical Focus',
        description: 'Improve your critical hit chance and effects.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['steady-aim', 'piercing-fletch'],
        icon: '💥',
        rankDescription: [
          'Your critical hit range increases by 1 (typically 19-20) and critical hits grant +1 Precision Stack.',
          'Your critical hit range increases by 2 (typically 18-20) and critical hits grant +1 Precision Stack.',
          'Your critical hit range increases by 3 (typically 17-20) and critical hits grant +2 Precision Stacks.'
        ]
      },
      {
        id: 'distant-shot',
        name: 'Distant Shot',
        description: 'Increase your effective range with ranged weapons.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['piercing-fletch', 'eye-of-the-storm'],
        icon: '🔭',
        rankDescription: [
          'Your ranged attacks have their range increased by 30 feet and ignore half cover.',
          'Your ranged attacks have their range increased by 60 feet and ignore half and three-quarters cover.',
          'Your ranged attacks have their range increased by 90 feet and ignore all cover except total cover.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'vital-targeting',
        name: 'Vital Targeting',
        description: 'Target vital spots for increased damage.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['critical-focus'],
        icon: '🎯',
        rankDescription: [
          'Your Vital Strike ability costs 1 PS instead of 2 PS.',
          'Your Vital Strike ability deals quadruple PS damage instead of triple.',
          'Your Vital Strike ability has a 25% chance to critically hit, dealing double damage.'
        ]
      },
      {
        id: 'precision-mastery',
        name: 'Precision Mastery',
        description: 'Increase your maximum Precision Stacks and their effectiveness.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['critical-focus', 'distant-shot'],
        icon: '📊',
        rankDescription: [
          'Increase your maximum Precision Stacks to 7 and gain +1 PS whenever you enter Sniper Stance.',
          'Increase your maximum Precision Stacks to 8 and gain +1 PS whenever you enter Sniper Stance.',
          'Increase your maximum Precision Stacks to 9 and gain +2 PS whenever you enter Sniper Stance.'
        ]
      },
      {
        id: 'bleeding-wounds',
        name: 'Bleeding Wounds',
        description: 'Your attacks cause bleeding damage over time.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['distant-shot'],
        icon: '🩸',
        rankDescription: [
          'Your Bleeding Edge ability deals an additional 1d4 damage per round.',
          'Your Bleeding Edge ability deals an additional 1d6 damage per round and lasts 1 round longer.',
          'Your Bleeding Edge ability deals an additional 1d8 damage per round, lasts 2 rounds longer, and prevents healing during its duration.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'executioner-training',
        name: 'Executioner Training',
        description: 'Enhance your Executioner\'s Mark ability.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['vital-targeting', 'precision-mastery'],
        icon: '⚔️',
        rankDescription: [
          'Executioner\'s Mark requires 5 PS instead of 6 PS.',
          'Executioner\'s Mark deals +1d8 damage and requires 5 PS instead of 6 PS.',
          'Executioner\'s Mark deals +2d8 damage, requires 5 PS instead of 6 PS, and has a 10% chance to instantly kill non-boss enemies below 25% health.'
        ]
      },
      {
        id: 'focus-mastery',
        name: 'Focus Mastery',
        description: 'Enhance your Focus generation and maximum Focus.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['precision-mastery', 'bleeding-wounds'],
        icon: '🧠',
        rankDescription: [
          'Increase your maximum Focus to 5 and gain Focus 25% faster.',
          'Increase your maximum Focus to 6 and gain Focus 50% faster.',
          'Increase your maximum Focus to 7 and gain Focus 100% faster.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'moonlit-bullseye',
        name: 'Moonlit Bullseye',
        description: 'Your ultimate attack is more efficient and accurate.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['executioner-training', 'focus-mastery'],
        icon: '🌙',
        rankDescription: [
          'Executioner\'s Mark consumes only 4 PS and crits on 18-20. When it crits, it deals triple damage instead of double.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'perfect-shot',
        name: 'Perfect Shot',
        description: 'Your precision reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['moonlit-bullseye'],
        icon: '🎯',
        rankDescription: [
          'As an action (3 AP), take careful aim at a target within range. Your next attack against that target automatically hits, ignores cover, and is a critical hit. Additionally, this attack deals bonus damage equal to your Precision Stacks × 2d8. You can use this ability once per short rest.'
        ]
      },
      {
        id: 'eagle-eye',
        name: 'Eagle Eye',
        description: 'Your vision becomes supernaturally acute.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['moonlit-bullseye'],
        icon: '👁️',
        rankDescription: [
          'You can see clearly for up to 1 mile, ignore disadvantage from long range, and can see invisible creatures within 60 feet. Additionally, you can spend 2 AP to study a target, revealing its weaknesses. Your next attack against that target deals an additional 3d10 damage and ignores resistance.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-precision',
        name: 'Avatar of Precision',
        description: 'Transform into a living embodiment of perfect accuracy.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['perfect-shot', 'eagle-eye'],
        icon: '🦅',
        rankDescription: [
          'Once per day, transform into an Avatar of Precision for 1d6+2 rounds. During this time, your attacks never miss, always count as critical hits, ignore all cover and concealment, and deal an additional 3d10 damage. Additionally, you can make an additional attack each round as a bonus action (0 AP), and your Precision Stacks do not reset after using abilities that consume them. Finally, you can teleport up to 60 feet as a bonus action (1 AP) once per round to gain a better vantage point.'
        ]
      },
    ],
  },
  {
    id: 'lynx-prowl',
    name: 'Lynx Prowl',
    description: 'Focus on stealth, mobility, and ambush tactics.',
    icon: '🐱',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'shadow-merge',
        name: 'Shadow Merge',
        description: 'Your Shadow Trail lasts longer and protects you.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👤',
        rankDescription: [
          'Shadow Trail lasts +1 turn and grants +1 AC vs opportunity attacks.',
          'Shadow Trail lasts +1 turn and grants +2 AC vs opportunity attacks.',
          'Shadow Trail lasts +1 turn and grants +3 AC vs opportunity attacks.',
          'Shadow Trail lasts +1 turn and grants +4 AC vs opportunity attacks.',
          'Shadow Trail lasts +1 turn and grants +5 AC vs opportunity attacks.'
        ]
      },
      {
        id: 'silent-culling',
        name: 'Silent Culling',
        description: 'Killing from stealth refunds your Focus.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🔪',
        rankDescription: [
          'Killing Quarry while invisible has a 20% chance to refund 1 Focus.',
          'Killing Quarry while invisible has a 40% chance to refund 1 Focus.',
          'Killing Quarry while invisible has a 60% chance to refund 1 Focus.',
          'Killing Quarry while invisible has a 80% chance to refund 1 Focus.',
          'Killing Quarry while invisible refunds all Focus.'
        ]
      },
      {
        id: 'nimble-escape',
        name: 'Nimble Escape',
        description: 'Your Survival Instinct is more efficient.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🏃',
        rankDescription: [
          'Survival Instinct costs 0 Mana & gives +2 ft speed.',
          'Survival Instinct costs 0 Mana & gives +4 ft speed.',
          'Survival Instinct costs 0 Mana & gives +6 ft speed.',
          'Survival Instinct costs 0 Mana & gives +8 ft speed.',
          'Survival Instinct costs 0 Mana & gives +10 ft speed.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'enhanced-mobility',
        name: 'Enhanced Mobility',
        description: 'Improve your movement abilities.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['shadow-merge', 'silent-culling'],
        icon: '🦿',
        rankDescription: [
          'Increase your base movement speed by 5 feet and gain advantage on Acrobatics checks.',
          'Increase your base movement speed by 10 feet and gain advantage on Acrobatics checks. You can move through enemy spaces.',
          'Increase your base movement speed by 15 feet and gain advantage on Acrobatics checks. You can move through enemy spaces and difficult terrain without penalty.'
        ]
      },
      {
        id: 'stealth-mastery',
        name: 'Stealth Mastery',
        description: 'Become a master of stealth.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['silent-culling', 'nimble-escape'],
        icon: '🥷',
        rankDescription: [
          'Gain advantage on Stealth checks and reduce the noise you make by 50%.',
          'Gain advantage on Stealth checks and reduce the noise you make by 75%. You can Hide as a bonus action.',
          'Gain advantage on Stealth checks and make no noise when moving. You can Hide as a bonus action, even when being observed.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'shadow-step',
        name: 'Shadow Step',
        description: 'Move through shadows with supernatural speed.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['enhanced-mobility'],
        icon: '👣',
        rankDescription: [
          'As a bonus action, teleport up to 15 feet between areas of dim light or darkness.',
          'As a bonus action, teleport up to 30 feet between areas of dim light or darkness. Gain advantage on the first attack after teleporting.',
          'As a bonus action, teleport up to 45 feet between areas of dim light or darkness. Gain advantage on the first attack after teleporting and add 1d6 damage.'
        ]
      },
      {
        id: 'ambush-tactics',
        name: 'Ambush Tactics',
        description: 'Enhance your ability to ambush enemies.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['enhanced-mobility', 'stealth-mastery'],
        icon: '🗡️',
        rankDescription: [
          'Your first attack against a creature that hasn\'t taken a turn in combat yet deals an extra 1d6 damage.',
          'Your first attack against a creature that hasn\'t taken a turn in combat yet deals an extra 2d6 damage and has advantage.',
          'Your first attack against a creature that hasn\'t taken a turn in combat yet deals an extra 3d6 damage, has advantage, and is automatically a critical hit if it hits.'
        ]
      },
      {
        id: 'evasive-maneuvers',
        name: 'Evasive Maneuvers',
        description: 'Enhance your ability to avoid damage.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['stealth-mastery'],
        icon: '🛡️',
        rankDescription: [
          'When you take the Disengage action, gain +2 AC until the start of your next turn.',
          'When you take the Disengage action, gain +4 AC until the start of your next turn and resistance to opportunity attacks.',
          'When you take the Disengage action, gain +6 AC until the start of your next turn, immunity to opportunity attacks, and the ability to move through enemy spaces.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'shadow-dancer',
        name: 'Shadow Dancer',
        description: 'Move with supernatural grace through the shadows.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['shadow-step', 'ambush-tactics'],
        icon: '💃',
        rankDescription: [
          'When you move through shadows, gain +1 AC and +5 feet of movement speed.',
          'When you move through shadows, gain +2 AC, +10 feet of movement speed, and advantage on Dexterity saving throws.',
          'When you move through shadows, gain +3 AC, +15 feet of movement speed, advantage on Dexterity saving throws, and the ability to move through enemy spaces without provoking opportunity attacks.'
        ]
      },
      {
        id: 'vanishing-act',
        name: 'Vanishing Act',
        description: 'Disappear from sight at will.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['ambush-tactics', 'evasive-maneuvers'],
        icon: '🌫️',
        rankDescription: [
          'As a bonus action, become invisible until the end of your next turn or until you attack.',
          'As a bonus action, become invisible until the end of your next turn or until you attack. After attacking, you can use your reaction to Hide.',
          'As a bonus action, become invisible until the end of your next turn. This invisibility is not broken by attacking, and you can use your reaction to Hide after attacking.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'phantom-predator',
        name: 'Phantom Predator',
        description: 'Your Flash Bind sets up a devastating attack.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['shadow-dancer', 'vanishing-act'],
        icon: '👻',
        rankDescription: [
          'After Flash Bind stun, you teleport behind Quarry (5 ft) and Vital Strike auto-crits. Additionally, you become invisible for 1 round after the attack.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'shadow-master',
        name: 'Shadow Master',
        description: 'Your mastery of shadows reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['phantom-predator'],
        icon: '🌑',
        rankDescription: [
          'You can teleport between shadows up to 60 feet as a bonus action (1 AP). Additionally, while in dim light or darkness, you gain +3 AC, advantage on all Dexterity saving throws, and your attacks deal an additional 2d6 damage.'
        ]
      },
      {
        id: 'ghost-walker',
        name: 'Ghost Walker',
        description: 'Move like a ghost, leaving no trace of your passage.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['phantom-predator'],
        icon: '👻',
        rankDescription: [
          'You can become invisible as a bonus action (1 AP) for 1d4 rounds. This invisibility is not broken by attacking. Additionally, you leave no tracks, make no sound when moving, and cannot be detected by blindsight or tremorsense.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-shadows',
        name: 'Avatar of Shadows',
        description: 'Transform into a living embodiment of shadow.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['shadow-master', 'ghost-walker'],
        icon: '🌑',
        rankDescription: [
          'Once per day, transform into an Avatar of Shadows for 1d6+2 rounds. During this time, you become a being of pure shadow, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to move through solid objects (but not end your turn inside them). You can teleport up to 60 feet as a bonus action (0 AP) to any area of dim light or darkness, and your attacks deal an additional 3d10 necrotic damage and automatically critically hit if you attack from stealth. Additionally, you emit an aura of darkness in a 15-foot radius that moves with you, providing concealment for you and your allies.'
        ]
      },
    ],
  },
  {
    id: 'viper-den',
    name: 'Viper Den',
    description: 'Focus on traps, poisons, and area control.',
    icon: '🐍',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'quick-lay',
        name: 'Quick-Lay',
        description: 'Set traps more efficiently when stationary.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⚡',
        rankDescription: [
          'Snare Trap costs 0 AP if you did not move last turn.',
          'Snare Trap & Caltrop Scatter cost 0 AP if you did not move last turn.',
          'Snare Trap, Caltrop Scatter & Toxic Fletching cost 0 AP if you did not move last turn.',
          'All trap abilities cost 0 AP if you did not move last turn.',
          'All trap abilities cost 0 AP if you did not move last turn and can be placed at twice the normal range.'
        ]
      },
      {
        id: 'paralytic-venom',
        name: 'Paralytic Venom',
        description: 'Your poisons are more debilitating.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '☣️',
        rankDescription: [
          'Toxic Fletching has a 20% chance to apply restrain on failed save.',
          'Toxic Fletching has a 40% chance to apply restrain on failed save.',
          'Toxic Fletching has a 60% chance to apply restrain on failed save.',
          'Toxic Fletching has a 80% chance to apply restrain on failed save.',
          'Toxic Fletching always applies restrain on failed save.'
        ]
      },
      {
        id: 'tethered-doom',
        name: 'Tethered Doom',
        description: 'Your Ricochet Shot chains through trapped enemies.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔗',
        rankDescription: [
          'Ricochet Shot can bounce to a third target if the second target is trapped.',
          'Ricochet Shot can bounce to a fourth target if all previous targets are trapped.',
          'Ricochet Shot can bounce to a fifth target if all previous targets are trapped.',
          'Ricochet Shot can bounce to any number of targets within 20 ft if all previous targets are trapped.',
          'Ricochet Shot can bounce to any number of targets within 30 ft if all previous targets are trapped.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'trap-efficiency',
        name: 'Trap Efficiency',
        description: 'Make your traps more efficient.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['quick-lay', 'paralytic-venom'],
        icon: '⚙️',
        rankDescription: [
          'Your traps cost 1 less Precision Stack to place and have a 10% chance to not be consumed when triggered.',
          'Your traps cost 1 less Precision Stack to place and have a 20% chance to not be consumed when triggered.',
          'Your traps cost 1 less Precision Stack to place and have a 30% chance to not be consumed when triggered.'
        ]
      },
      {
        id: 'poison-mastery',
        name: 'Poison Mastery',
        description: 'Enhance your poison abilities.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['paralytic-venom', 'tethered-doom'],
        icon: '🧪',
        rankDescription: [
          'Your poison damage increases by 1d4 and lasts 1 round longer.',
          'Your poison damage increases by 1d6 and lasts 2 rounds longer.',
          'Your poison damage increases by 1d8 and lasts 3 rounds longer. Poisoned targets have disadvantage on saving throws against your abilities.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'advanced-traps',
        name: 'Advanced Traps',
        description: 'Create more sophisticated traps.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['trap-efficiency'],
        icon: '🔧',
        rankDescription: [
          'Your Bear Trap deals an additional 1d6 damage and has a +2 to its escape DC.',
          'Your Bear Trap deals an additional 2d6 damage and has a +4 to its escape DC.',
          'Your Bear Trap deals an additional 3d6 damage and has a +6 to its escape DC. Targets caught in your Bear Trap are also poisoned.'
        ]
      },
      {
        id: 'trap-network',
        name: 'Trap Network',
        description: 'Create a network of interconnected traps.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['trap-efficiency', 'poison-mastery'],
        icon: '🕸️',
        rankDescription: [
          'You can have up to 3 traps active at once. When one trap is triggered, all traps within 15 feet also trigger.',
          'You can have up to 4 traps active at once. When one trap is triggered, all traps within 30 feet also trigger.',
          'You can have up to 5 traps active at once. When one trap is triggered, all traps within 45 feet also trigger and deal 50% more damage.'
        ]
      },
      {
        id: 'venomous-arsenal',
        name: 'Venomous Arsenal',
        description: 'Expand your arsenal of poisons.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['poison-mastery'],
        icon: '🧫',
        rankDescription: [
          'You can apply different types of poison to your weapons: Damage (1d6/round), Slowing (half speed), or Weakening (-2 to attacks).',
          'You can apply different types of poison to your weapons: Damage (2d6/round), Slowing (half speed), Weakening (-4 to attacks), or Disorienting (disadvantage on saves).',
          'You can apply different types of poison to your weapons: Damage (3d6/round), Slowing (quarter speed), Weakening (-6 to attacks), Disorienting (disadvantage on saves), or Paralyzing (stunned for 1 round).'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'master-trapper',
        name: 'Master Trapper',
        description: 'Become a master of trap-laying.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['advanced-traps', 'trap-network'],
        icon: '🏆',
        rankDescription: [
          'Your traps deal an additional 1d6 damage and their save DCs increase by 2.',
          'Your traps deal an additional 2d6 damage and their save DCs increase by 4.',
          'Your traps deal an additional 3d6 damage and their save DCs increase by 6. Enemies that fail their save against your traps are also marked, causing them to take 1d8 extra damage from your attacks for 1 minute.'
        ]
      },
      {
        id: 'venom-expert',
        name: 'Venom Expert',
        description: 'Become an expert in the use of venoms.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['trap-network', 'venomous-arsenal'],
        icon: '🐍',
        rankDescription: [
          'Your poisons last 1 round longer and their save DCs increase by 2.',
          'Your poisons last 2 rounds longer and their save DCs increase by 4.',
          'Your poisons last 3 rounds longer and their save DCs increase by 6. Enemies that fail their save against your poisons are also vulnerable to your next attack, causing it to deal double damage.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'serpents-coil',
        name: 'Serpent\'s Coil',
        description: 'Your Bear Trap triggers a devastating explosion.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['master-trapper', 'venom-expert'],
        icon: '🌀',
        rankDescription: [
          'Bear Trap detonates Bleeding Edge on trigger; damage = spent PS × d8 to all in 10 ft. Additionally, all affected targets are poisoned for a number of rounds equal to your Intelligence modifier.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'toxic-mastery',
        name: 'Toxic Mastery',
        description: 'Your mastery of poisons reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['serpents-coil'],
        icon: '☣️',
        rankDescription: [
          'Your poisons deal an additional 2d8 damage per round and ignore poison resistance. Additionally, creatures that fail their save against your poisons suffer one additional effect of your choice: paralyzed, blinded, or stunned for 1 round.'
        ]
      },
      {
        id: 'trap-master',
        name: 'Trap Master',
        description: 'Your mastery of traps reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['serpents-coil'],
        icon: '🕸️',
        rankDescription: [
          'You can have up to 7 traps active at once, and they deal an additional 3d8 damage when triggered. Additionally, your traps are invisible to all creatures except you, requiring a DC 20 Perception check to detect.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-venom',
        name: 'Avatar of Venom',
        description: 'Transform into a living embodiment of deadly poison.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['toxic-mastery', 'trap-master'],
        icon: '🐍',
        rankDescription: [
          'Once per day, transform into an Avatar of Venom for 1d6+2 rounds. During this time, your body exudes deadly toxins, granting immunity to poison and disease, resistance to all other damage types, and the ability to move through small spaces as if you were liquid. Your attacks automatically apply deadly poison (4d10 damage per round for 3 rounds), and creatures that hit you with melee attacks are automatically poisoned. Additionally, you can create a cloud of toxic gas in a 20-foot radius as an action (2 AP), dealing 6d10 poison damage to all creatures in the area (Constitution save for half) and poisoning them for 3 rounds. Finally, all your traps trigger automatically when an enemy comes within 10 feet of them, even if the enemy would normally detect or avoid them.'
        ]
      },
    ],
  }
];

export default huntressTalentTrees;
