// Base abilities for the Warden class
const wardenAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Bulwark & Ward System',
    description: 'Wardens are living ramparts. They conjure barriers, zones, and wards to lock down territory and keep allies safe. A perfect Warden fight is one where enemies cannot reach the back‑line, cannot flee the kill‑box, and cannot ignore the guardian holding the center.',
    mechanics: [
      'Bulwark Meter (BM): +1 BM each time you create a ward, maintain one at start of your turn, or block ≥ 5 dmg for an ally. Max 12.',
      'Ward Tokens: Gain token at 4, 8, 12 BM. Spend to insta‑cast wards or empower Ultimates. Max 3.',
      'Guard Lines & Zones: Wardens deploy Lines (straight 15‑ft walls) or Zones (10‑ft radius circles). Each ward costs Mana/AP and remains while you concentrate or until HP threshold is broken (HP = 5 + CON mod + BM spent). Crossing an active ward triggers effects (push, damage, slow, etc.).'
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Guardian\'s Mark',
      cost: {
        actionPoints: 1,
        mana: 0,
        bulwarkMeter: '+1'
      },
      description: 'Mark a target as your primary threat, forcing it to focus on you.',
      mechanics: 'Melee hit marks target: disadvantage to attack anyone else 1 rnd; if it does, you may Reaction move 10 ft and attack (free).',
      effects: [
        { condition: 'Hit', effect: 'Target has disadvantage on attacks against anyone but you for 1 round' },
        { condition: 'Target Attacks Ally', effect: 'You can use your reaction to move 10 ft and make a free attack' },
        { condition: 'Bulwark Gain', effect: 'Gain +1 Bulwark Meter' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Aegis Line',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '-2'
      },
      description: 'Create a translucent wall that blocks enemy movement and projectiles.',
      mechanics: 'Create 15-ft translucent wall (HP = 5 + CON + BM spent). Allies shoot through; enemies can\'t. Costs 2 BM.',
      effects: [
        { condition: 'Creation', effect: 'Creates a 15-ft translucent wall with HP = 5 + CON + BM spent' },
        { condition: 'Ally Interaction', effect: 'Allies can shoot through the wall' },
        { condition: 'Enemy Interaction', effect: 'Enemies cannot shoot through the wall' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance wall effects' }
      ],
      scaling: 'HP = 5 + CON modifier + BM spent'
    },
    {
      name: 'Rampart Stance',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '+0'
      },
      description: 'Adopt a defensive stance that protects you and nearby allies.',
      mechanics: 'Until next turn, gain resistance to weapon dmg; allies behind you gain half-cover.',
      effects: [
        { condition: 'Self', effect: 'Gain resistance to weapon damage until your next turn' },
        { condition: 'Allies', effect: 'Allies behind you gain half-cover' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance stance effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Binding Circle',
      cost: {
        actionPoints: 2,
        mana: 2,
        bulwarkMeter: '-2'
      },
      description: 'Create a circular zone that impedes enemy movement.',
      mechanics: '10-ft zone; enemies crossing make STR save or speed 0 until end of turn.',
      effects: [
        { condition: 'Creation', effect: 'Creates a 10-ft radius zone' },
        { condition: 'Enemy Crossing', effect: 'Enemies must make a STR save or have speed reduced to 0 until end of turn' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance zone effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + CON modifier'
    },
    {
      name: 'Shield-Hook',
      cost: {
        actionPoints: 1,
        mana: 0,
        bulwarkMeter: '+1'
      },
      description: 'Use your shield to hook and pull an enemy.',
      mechanics: 'Melee; on hit pull enemy 5 ft; if pulled through a ward, ward triggers again.',
      effects: [
        { condition: 'Hit', effect: 'Pull target 5 ft toward you' },
        { condition: 'Ward Interaction', effect: 'If pulled through a ward, the ward triggers again' },
        { condition: 'Bulwark Gain', effect: 'Gain +1 Bulwark Meter' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Reinforce Ward',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '-1'
      },
      description: 'Strengthen an existing ward.',
      mechanics: 'Add 1d6 HP to one ward you can touch/sense; +1 BM if ward survives full round.',
      effects: [
        { condition: 'Ward HP', effect: 'Add 1d6 HP to one ward you can touch or sense' },
        { condition: 'Ward Survival', effect: 'Gain +1 BM if the ward survives a full round' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance reinforcement effects' }
      ],
      scaling: 'HP added = 1d6'
    },
    {
      name: 'Deflecting Bulwark',
      cost: {
        actionPoints: 0,
        mana: 1,
        bulwarkMeter: '-1',
        reaction: true
      },
      description: 'React to protect an ally from a ranged attack.',
      mechanics: 'When ally within 15 ft is hit by projectile, spend 1 BM: reduce dmg by 2d6 + CON.',
      effects: [
        { condition: 'Trigger', effect: 'Ally within 15 ft is hit by a projectile' },
        { condition: 'Damage Reduction', effect: 'Reduce damage by 2d6 + CON modifier' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance protection effects' }
      ],
      scaling: 'Damage reduction = 2d6 + CON modifier'
    },
    {
      name: 'Crushing Edge',
      cost: {
        actionPoints: 1,
        mana: 0,
        bulwarkMeter: '+1'
      },
      description: 'Bash an enemy into a ward or wall for extra damage.',
      mechanics: 'Bash enemy into ward/wall; extra 1d6 and ward HP -1.',
      effects: [
        { condition: 'Hit', effect: 'Push enemy into ward or wall' },
        { condition: 'Ward/Wall Impact', effect: 'Deal extra 1d6 damage and reduce ward HP by 1' },
        { condition: 'Bulwark Gain', effect: 'Gain +1 Bulwark Meter' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance bash effects' }
      ],
      scaling: 'Extra damage = 1d6'
    },
    {
      name: 'Sentinel Stride',
      cost: {
        actionPoints: 1,
        mana: 0,
        bulwarkMeter: '+1'
      },
      description: 'Move quickly to a defensive position near a ward.',
      mechanics: 'Move 15 ft; if you end adjacent to ward, gain +1 BM and AC +1 till next turn.',
      effects: [
        { condition: 'Movement', effect: 'Move 15 ft' },
        { condition: 'Ward Proximity', effect: 'If you end adjacent to a ward, gain +1 BM and +1 AC until your next turn' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance movement effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Ward Swap',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '-1'
      },
      description: 'Dismiss one ward and create another in a new location.',
      mechanics: 'Dismiss one active ward; immediately create same type at new point (half original HP).',
      effects: [
        { condition: 'Dismissal', effect: 'Dismiss one active ward' },
        { condition: 'Creation', effect: 'Create same type of ward at a new location with half the original HP' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance swap effects' }
      ],
      scaling: 'New ward HP = Half of original ward HP'
    },
    {
      name: 'Compel Foe',
      cost: {
        actionPoints: 1,
        mana: 0,
        bulwarkMeter: '-2'
      },
      description: 'Force an enemy to attack you.',
      mechanics: 'Spend 2 BM: 30-ft challenge. Target WIS save or must move toward/attack you next turn.',
      effects: [
        { condition: 'Target', effect: '30-ft range challenge' },
        { condition: 'Failed Save', effect: 'Target must move toward and attack you on its next turn' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance taunt effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + WIS modifier'
    },
    {
      name: 'Fortify',
      cost: {
        actionPoints: 0,
        mana: 0,
        bulwarkMeter: '+CON'
      },
      description: 'Quickly bolster your defenses.',
      mechanics: 'Bonus action once/Short Rest: temp HP = CON + BM.',
      effects: [
        { condition: 'Activation', effect: 'Gain temporary HP equal to your CON modifier + current Bulwark Meter' },
        { condition: 'Frequency', effect: 'Once per short rest' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance fortification effects' }
      ],
      scaling: 'Temporary HP = CON modifier + current Bulwark Meter'
    },
    {
      name: 'Signal Flare',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '+0'
      },
      description: 'Create a bright flash that helps allies and hinders enemies.',
      mechanics: 'Light blast 20 ft grants allies advantage on next attack; enemies blinded on fail CON.',
      effects: [
        { condition: 'Allies', effect: 'Allies in 20 ft radius gain advantage on their next attack' },
        { condition: 'Enemies', effect: 'Enemies in area must make a CON save or be blinded for 1 round' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance flare effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + CON modifier'
    },
    {
      name: 'Hold Position',
      cost: {
        actionPoints: 0,
        mana: 0,
        bulwarkMeter: '+1'
      },
      description: 'Stand your ground to gain defensive benefits.',
      mechanics: 'If you did not move this turn, gain +1 BM and can\'t be pushed more than 5 ft.',
      effects: [
        { condition: 'No Movement', effect: 'If you did not move this turn, gain +1 BM' },
        { condition: 'Stability', effect: 'Cannot be pushed more than 5 ft' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance stability effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Barrier Sense',
      cost: {
        actionPoints: 0,
        mana: 0,
        bulwarkMeter: '0',
        passive: true
      },
      description: 'Always know the status and location of your wards.',
      mechanics: 'You always know HP of your wards and direction to them within 120 ft.',
      effects: [
        { condition: 'Ward Awareness', effect: 'Always know the HP of your wards' },
        { condition: 'Ward Location', effect: 'Always know the direction to your wards within 120 ft' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance sensing effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Protective Barrier',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '+1'
      },
      description: 'Create a small barrier that provides cover for allies.',
      mechanics: 'Create a 5-ft wide, 5-ft tall barrier (HP = 5 + CON mod) that provides half cover. Lasts until destroyed.',
      effects: [
        { condition: 'Creation', effect: 'Create a 5-ft wide barrier with HP = 5 + CON modifier' },
        { condition: 'Cover', effect: 'Provides half cover to creatures behind it' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance barrier durability' }
      ],
      scaling: 'HP = 5 + CON modifier'
    },
    {
      name: 'Sanctuary Zone',
      cost: {
        actionPoints: 2,
        mana: 3,
        bulwarkMeter: '+2'
      },
      description: 'Create a zone of peace that prevents violence within its bounds.',
      mechanics: 'Create 10-ft radius zone. Creatures inside cannot make attacks or cast harmful spells for 2 rounds.',
      effects: [
        { condition: 'Peace Zone', effect: 'Creatures inside cannot make attacks or cast harmful spells' },
        { condition: 'Duration', effect: 'Lasts for 2 rounds' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance peaceful effects' }
      ],
      scaling: 'Duration = 2 rounds'
    },
    {
      name: 'Ward Network',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '+1'
      },
      description: 'Link your wards together to share information and effects.',
      mechanics: 'Connect up to 3 wards within 60 ft. When one ward is triggered, all connected wards activate their effects.',
      effects: [
        { condition: 'Connection', effect: 'Connect up to 3 wards within 60 ft' },
        { condition: 'Shared Trigger', effect: 'When one ward triggers, all connected wards activate' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance network effects' }
      ],
      scaling: 'Max wards = 3'
    },
    {
      name: 'Bulwark Regeneration',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '-2'
      },
      description: 'Channel your defensive energy to heal damaged wards.',
      mechanics: 'Restore 1d6 + CON mod HP to target ward within 30 ft.',
      effects: [
        { condition: 'Healing', effect: 'Restore 1d6 + CON modifier HP to target ward' },
        { condition: 'Range', effect: 'Can target wards within 30 ft' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance healing amount' }
      ],
      scaling: 'Healing = 1d6 + CON modifier'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Iron Maiden Zone',
      cost: {
        actionPoints: 2,
        mana: 3,
        bulwarkMeter: '-4'
      },
      description: 'Create a zone of thorns that damages enemies inside and slows their exit.',
      mechanics: '10-ft radius thorn ward (HP 10 + CON). Enemies inside take 2d6 piercing / turn; exiting costs extra 10 ft movement.',
      effects: [
        { condition: 'Creation', effect: 'Create a 10-ft radius thorn ward with HP = 10 + CON modifier' },
        { condition: 'Enemy Inside', effect: 'Enemies inside take 2d6 piercing damage per turn' },
        { condition: 'Enemy Exit', effect: 'Exiting costs an extra 10 ft of movement' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance damage effects' }
      ],
      scaling: 'HP = 10 + CON modifier, Damage = 2d6 piercing per turn'
    },
    {
      name: 'Resolute Stand',
      cost: {
        actionPoints: 2,
        mana: 2,
        bulwarkMeter: '-3'
      },
      description: 'Empower nearby allies with your resolve.',
      mechanics: 'Until end of next turn, allies in 15 ft add your CON mod to AC, dmg, and saves. Each hit on an ally gives you +1 BM.',
      effects: [
        { condition: 'Allies', effect: 'Allies within 15 ft add your CON modifier to AC, damage, and saves until the end of your next turn' },
        { condition: 'Ally Hit', effect: 'Each time an ally is hit, you gain +1 BM' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance protection effects' }
      ],
      scaling: 'Bonus = CON modifier'
    },
    {
      name: 'Arc Wall',
      cost: {
        actionPoints: 2,
        mana: 2,
        bulwarkMeter: '-3'
      },
      description: 'Create a curved barrier that shocks enemies who cross it.',
      mechanics: 'Curved barrier 20-ft; crossing releases lightning 3d6 and stuns 1 rnd.',
      effects: [
        { condition: 'Creation', effect: 'Create a curved 20-ft barrier' },
        { condition: 'Enemy Crossing', effect: 'Enemies crossing take 3d6 lightning damage and are stunned for 1 round' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance barrier effects' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance damage effects' }
      ],
      scaling: 'Damage = 3d6 lightning'
    },
    {
      name: 'Guardian\'s Rush',
      cost: {
        actionPoints: 2,
        mana: 1,
        bulwarkMeter: '-2'
      },
      description: 'Dash to protect allies, granting them temporary health as you pass.',
      mechanics: 'Dash up to 30 ft through allies; each ally passed gains +1d6 temp HP.',
      effects: [
        { condition: 'Movement', effect: 'Dash up to 30 ft through allies' },
        { condition: 'Ally Passed', effect: 'Each ally you pass through gains 1d6 temporary HP' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance rush effects' }
      ],
      scaling: 'Temporary HP = 1d6 per ally'
    },
    {
      name: 'Mirror Ward',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '-2'
      },
      description: 'Create a reflective barrier that bounces attacks back at enemies.',
      mechanics: 'Single square mirror; first ranged/magic attack reflected back (same to-hit).',
      effects: [
        { condition: 'Creation', effect: 'Create a single square mirror ward' },
        { condition: 'Reflection', effect: 'First ranged or magic attack is reflected back with the same to-hit roll' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance reflection effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Anchor Link',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '-1'
      },
      description: 'Create a magical link between yourself and a ward.',
      mechanics: 'Bind yourself to ward; you can teleport to it as bonus action (without LC cost).',
      effects: [
        { condition: 'Binding', effect: 'Bind yourself to a ward' },
        { condition: 'Teleport', effect: 'You can teleport to the ward as a bonus action without additional cost' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance link effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Bulwark Rebuke',
      cost: {
        actionPoints: 0,
        mana: 1,
        bulwarkMeter: '-2',
        reaction: true
      },
      description: 'When a ward is destroyed, it explodes with force.',
      mechanics: 'Spend 2 BM when ward destroyed: explodes 10 ft 3d6 force & knocks prone.',
      effects: [
        { condition: 'Trigger', effect: 'When a ward is destroyed' },
        { condition: 'Explosion', effect: '10 ft radius explosion dealing 3d6 force damage and knocking enemies prone' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance explosion effects' }
      ],
      scaling: 'Damage = 3d6 force'
    },
    {
      name: 'Line Breaker',
      cost: {
        actionPoints: 2,
        mana: 1,
        bulwarkMeter: '-3'
      },
      description: 'Charge through enemy lines, pushing them aside.',
      mechanics: 'Charge 20 ft, smashing through enemies; each hit suffers 2d6 and is shoved behind you, grants +1 BM.',
      effects: [
        { condition: 'Charge', effect: 'Charge 20 ft through enemy lines' },
        { condition: 'Enemy Hit', effect: 'Each enemy hit takes 2d6 damage and is shoved behind you' },
        { condition: 'Bulwark Gain', effect: 'Gain +1 BM for each enemy hit' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance charge effects' }
      ],
      scaling: 'Damage = 2d6 per enemy'
    },
    {
      name: 'Absorb Spell',
      cost: {
        actionPoints: 0,
        mana: 2,
        bulwarkMeter: '-2',
        reaction: true
      },
      description: 'Use a ward to absorb incoming spell damage.',
      mechanics: 'Spend 2 BM: when a spell hits within 10 ft, ward soaks spell (HP vs spell dmg). Any leftover damage still hits.',
      effects: [
        { condition: 'Trigger', effect: 'When a spell hits within 10 ft' },
        { condition: 'Absorption', effect: 'Ward absorbs spell damage (ward HP vs spell damage)' },
        { condition: 'Leftover Damage', effect: 'Any damage exceeding ward HP still hits the target' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance absorption effects' }
      ],
      scaling: 'Absorption = Ward HP'
    },
    {
      name: 'Bulwark Mastery',
      cost: {
        actionPoints: 0,
        mana: 0,
        bulwarkMeter: '0',
        passive: true
      },
      description: 'Your mastery of wards makes them stronger and wider.',
      mechanics: 'Ward HP gains +BM when created; Aegis Line width +5 ft.',
      effects: [
        { condition: 'Ward Creation', effect: 'Ward HP gains +BM when created' },
        { condition: 'Aegis Line', effect: 'Aegis Line width increased by 5 ft' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance mastery effects' }
      ],
      scaling: 'HP bonus = current BM'
    },
    {
      name: 'Immovable Guardian',
      cost: {
        actionPoints: 0,
        mana: 0,
        bulwarkMeter: '0',
        passive: true
      },
      description: 'You cannot be moved from your position while within a ward.',
      mechanics: 'While standing within your ward, you cannot be knocked prone or moved.',
      effects: [
        { condition: 'Ward Proximity', effect: 'While standing within your ward, you cannot be knocked prone' },
        { condition: 'Stability', effect: 'While standing within your ward, you cannot be forcibly moved' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance stability effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Guardian Beacon',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '+0'
      },
      description: 'Emit an aura that helps allies resist harmful effects.',
      mechanics: '30-ft aura for 2 rnd: allies add Prof to all saves; you gain +1 BM each ally affected.',
      effects: [
        { condition: 'Aura', effect: '30-ft aura for 2 rounds' },
        { condition: 'Allies', effect: 'Allies add your Proficiency bonus to all saving throws' },
        { condition: 'Bulwark Gain', effect: 'Gain +1 BM for each ally affected' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance aura effects' }
      ],
      scaling: 'Save bonus = Proficiency bonus'
    },
    {
      name: 'Shockwave Bash',
      cost: {
        actionPoints: 1,
        mana: 1,
        bulwarkMeter: '-2'
      },
      description: 'Create a shockwave that pushes enemies away.',
      mechanics: 'Melee: on hit, 15-ft cone concuss 2d6 and push 10 ft if crossing ward.',
      effects: [
        { condition: 'Hit', effect: 'Create a 15-ft cone shockwave' },
        { condition: 'Enemies in Cone', effect: 'Enemies take 2d6 concussive damage' },
        { condition: 'Ward Crossing', effect: 'Enemies pushed 10 ft if crossing a ward' },
        { condition: 'Punishing Rampart Talents', effect: 'May enhance shockwave effects' }
      ],
      scaling: 'Damage = 2d6 concussive'
    },
    {
      name: 'Reforge Bulwark',
      cost: {
        actionPoints: 1,
        mana: 2,
        bulwarkMeter: '-3'
      },
      description: 'Resurrect a destroyed ward.',
      mechanics: 'Resurrect destroyed ward at half HP at start of your turn.',
      effects: [
        { condition: 'Resurrection', effect: 'Resurrect a destroyed ward at half HP at the start of your turn' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance resurrection effects' }
      ],
      scaling: 'Resurrected HP = Half of original ward HP'
    },
    {
      name: 'Ward Fortress',
      cost: {
        actionPoints: 2,
        mana: 3,
        bulwarkMeter: '-5'
      },
      description: 'Transform multiple wards into a connected fortress structure.',
      mechanics: 'Connect 3+ wards within 30 ft to form walls between them. Connected structure gains +10 HP per ward and provides full cover.',
      effects: [
        { condition: 'Connection', effect: 'Connect 3 or more wards within 30 ft to form walls between them' },
        { condition: 'Structure HP', effect: 'Connected structure gains +10 HP per ward involved' },
        { condition: 'Cover', effect: 'Provides full cover to creatures behind the structure' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance fortress effects' }
      ],
      scaling: 'Bonus HP = +10 per connected ward'
    },
    {
      name: 'Aegis Field',
      cost: {
        actionPoints: 2,
        mana: 4,
        bulwarkMeter: '-4'
      },
      description: 'Create a field that reduces all damage taken by allies within.',
      mechanics: 'Create 20-ft radius field for 4 rounds. Allies inside take -2 damage from all sources (minimum 1).',
      effects: [
        { condition: 'Field', effect: 'Create a 20-ft radius field for 4 rounds' },
        { condition: 'Damage Reduction', effect: 'Allies inside take -2 damage from all sources (minimum 1)' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance protective effects' }
      ],
      scaling: 'Damage reduction = -2 (minimum 1 damage)'
    },
    {
      name: 'Warding Circle',
      cost: {
        actionPoints: 3,
        mana: 4,
        bulwarkMeter: '-6'
      },
      description: 'Create a large protective circle that empowers all defensive abilities.',
      mechanics: 'Create 25-ft radius circle for 5 rounds. All wards inside gain double HP, and allies gain +1 AC and advantage on saves.',
      effects: [
        { condition: 'Circle', effect: 'Create a 25-ft radius circle for 5 rounds' },
        { condition: 'Ward Enhancement', effect: 'All wards inside gain double HP' },
        { condition: 'Ally Benefits', effect: 'Allies gain +1 AC and advantage on saving throws' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance circle effects' }
      ],
      scaling: 'Ward HP multiplier = x2'
    },
    {
      name: 'Master Guardian',
      cost: {
        actionPoints: 2,
        mana: 3,
        bulwarkMeter: '-3',
        wardTokens: 1
      },
      description: 'Become the ultimate protector, redirecting all harm from allies to yourself.',
      mechanics: 'For 3 rounds, all damage dealt to allies within 30 ft is redirected to you instead. You gain resistance to all damage during this time.',
      effects: [
        { condition: 'Damage Redirection', effect: 'All damage to allies within 30 ft is redirected to you' },
        { condition: 'Resistance', effect: 'You gain resistance to all damage types' },
        { condition: 'Duration', effect: 'Lasts for 3 rounds' },
        { condition: 'Guardian\'s Vow Talents', effect: 'May enhance protective effects' }
      ],
      scaling: 'Duration = 3 rounds'
    },
    {
      name: 'Eternal Redoubt',
      cost: {
        actionPoints: 3,
        mana: 4,
        bulwarkMeter: '0',
        wardTokens: 'all'
      },
      description: 'Create an invulnerable dome that protects allies and blocks enemies.',
      mechanics: 'Spend 3 Ward Tokens: Summon 30-ft radius invulnerable dome for 3 turns. Allies inside regen 1d6 HP/turn; enemies cannot enter; projectiles blocked. After dome fades, BM = 0 and you take 1 Exhaustion.',
      effects: [
        { condition: 'Creation', effect: 'Summon a 30-ft radius invulnerable dome for 3 turns' },
        { condition: 'Allies Inside', effect: 'Allies inside regenerate 1d6 HP per turn' },
        { condition: 'Enemies', effect: 'Enemies cannot enter the dome' },
        { condition: 'Projectiles', effect: 'Projectiles cannot pass through the dome' },
        { condition: 'Aftermath', effect: 'After the dome fades, your BM = 0 and you take 1 level of Exhaustion' },
        { condition: 'Wall-Smith Talents', effect: 'May enhance dome effects' }
      ],
      scaling: 'Ally regeneration = 1d6 HP per turn',
      ultimate: true
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    wallSmith: [
      {
        name: 'Mason\'s Touch',
        description: 'Your Aegis Line is more efficient.',
        mechanics: 'Aegis Line costs 1 BM and generates +1 BM on creation.',
        requirements: 'Requires points in the Wall-Smith talent tree.'
      },
      {
        name: 'Reinforced Core',
        description: 'Your wards are more durable.',
        mechanics: 'All wards gain +2 HP / Prof bonus.',
        requirements: 'Requires points in the Wall-Smith talent tree.'
      },
      {
        name: 'Tactical Span',
        description: 'Your Ward Swap is more efficient.',
        mechanics: 'Ward Swap refunds 1 AP.',
        requirements: 'Requires points in the Wall-Smith talent tree.'
      },
      {
        name: 'Living Fortress',
        description: 'Your Eternal Redoubt is more powerful.',
        mechanics: 'Eternal Redoubt duration +1 turn and no Exhaustion.',
        requirements: 'Requires points in the Wall-Smith talent tree. (Capstone)'
      }
    ],
    guardiansVow: [
      {
        name: 'Fast Interpose',
        description: 'Your Deflecting Bulwark is more effective.',
        mechanics: 'Deflecting Bulwark range 30 ft and reduces damage by extra Prof.',
        requirements: 'Requires points in the Guardian\'s Vow talent tree.'
      },
      {
        name: 'Last Bastion',
        description: 'You can rush to protect low-health allies.',
        mechanics: 'When ally is badly wounded (below quarter health) in 15 ft, free Guardian\'s Rush toward them.',
        requirements: 'Requires points in the Guardian\'s Vow talent tree.'
      },
      {
        name: 'Ward Bond',
        description: 'You share damage with your anchored ward.',
        mechanics: 'While anchored, half of all damage you take is transferred to ward HP instead.',
        requirements: 'Requires points in the Guardian\'s Vow talent tree.'
      },
      {
        name: 'Titan\'s Guard',
        description: 'Your Guardian\'s Rush creates a protective barrier.',
        mechanics: 'Guardian\'s Rush triggers a free Aegis Line at ally\'s location (no cost).',
        requirements: 'Requires points in the Guardian\'s Vow talent tree. (Capstone)'
      }
    ],
    punishingRampart: [
      {
        name: 'Shock Wards',
        description: 'Your wards deal damage when crossed.',
        mechanics: 'Crossing any ward deals 1d4 lightning (stacking).',
        requirements: 'Requires points in the Punishing Rampart talent tree.'
      },
      {
        name: 'Knockback Expert',
        description: 'Your Crushing Edge is more powerful.',
        mechanics: 'Crushing Edge push distance +5 ft and adds prone on fail save.',
        requirements: 'Requires points in the Punishing Rampart talent tree.'
      },
      {
        name: 'Bulwark Detonator',
        description: 'You can detonate your wards at will.',
        mechanics: 'You can choose to explode any ward (Bulwark Rebuke) as action, costing 0 BM.',
        requirements: 'Requires points in the Punishing Rampart talent tree.'
      },
      {
        name: 'Wall of Pain',
        description: 'Your offensive wards deal maximum damage.',
        mechanics: 'Arc Wall and Iron Maiden automatically deal maximum damage on cross and track offenders (advantage follow-up attack).',
        requirements: 'Requires points in the Punishing Rampart talent tree. (Capstone)'
      }
    ]
  }
};

export default wardenAbilities;
