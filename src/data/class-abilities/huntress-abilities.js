// Base spells and abilities for the Huntress class
const huntressAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Quarry Tracking System',
    description: 'The Huntress is the battlefield predator—equal parts scout, sniper, and trap‑layer. She singles out a quarry, stalks it through any terrain, and brings it down with lethal precision. Her unique resource system revolves around tracking a marked target and building precision through careful observation and well-placed shots.',
    mechanics: [
      'Quarry Seal: 1 AP action to designate a creature within 90 ft as your Quarry (lasts until dead or swapped). Free once per encounter.',
      'Precision Stacks (PS): Gain +1 PS each time you hit the Quarry (ranged/melee) or succeed a Tracking check. Maximum 6 stacks.',
      'Focus Gauge: Gain +1 Focus each round you don\'t move OR when you score a critical hit. Maximum 4 Focus.',
      'Damage Bonus: Add +1 damage per Precision Stack on hits against your marked Quarry.'
    ],
    stances: {
      name: 'Huntress Stances',
      description: 'The Huntress can enter specialized stances by spending Focus, each providing unique benefits for different situations.',
      mechanics: [
        'Sniper Stance (2 Focus): +30 ft range, crit on 19–20, +DEX to damage. Ends if you move >5 ft.',
        'Sprinter Stance (1 Focus): +15 ft speed, ignore difficult terrain, first opportunity attack each turn has disadvantage. Ends if you stand still.',
        'Fieldcraft (Passive): Switching stance is free if you have ≥ 3 Precision Stacks.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'True Shot',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '+1'
      },
      description: 'A precise shot that benefits from your tracking of the target.',
      mechanics: 'Ranged attack dealing 1d8 + DEX damage; vs Quarry add +PS damage. Crit adds +1 Focus.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d8 + DEX damage' },
        { condition: 'Hit Quarry', effect: 'Add +PS damage' },
        { condition: 'Critical Hit', effect: 'Gain +1 Focus' },
        { condition: 'Sniper Stance', effect: 'Range increased by 30 ft' }
      ],
      scaling: 'Damage = 1d8 + DEX (+ PS vs Quarry)'
    },
    {
      name: 'Twin Fletch',
      cost: {
        actionPoints: 2,
        mana: 1,
        precisionStacks: '+1'
      },
      description: 'Fire two arrows in quick succession.',
      mechanics: 'Fire two arrows: each deals 1d6 damage. If both hit the same quarry, gain +2 PS.',
      effects: [
        { condition: 'Hit', effect: 'Each arrow deals 1d6 damage' },
        { condition: 'Both Hit Quarry', effect: 'Gain +2 PS instead of +1' },
        { condition: 'Sniper Stance', effect: 'Range increased by 30 ft' }
      ],
      scaling: 'Damage = 1d6 per arrow'
    },
    {
      name: 'Tracker\'s Eye',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '+0'
      },
      description: 'Use your keen senses to track your quarry.',
      mechanics: 'Perception vs quarry stealth (auto succeed with WIS + Prof); on success gain +1 PS & reveal quarry to party for 1 round.',
      effects: [
        { condition: 'Success', effect: 'Gain +1 PS and reveal quarry to party for 1 round' },
        { condition: 'High WIS', effect: 'Auto-succeed with WIS + Proficiency' },
        { condition: 'Quarry Hidden', effect: 'Reveals location even through cover' }
      ],
      scaling: 'Success chance scales with WIS and Perception proficiency'
    },
    {
      name: 'Snare Trap',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '-1'
      },
      description: 'Set a trap to ensnare your prey.',
      mechanics: 'Spend 1 PS: place 5 ft trap; first enemy entering makes DEX save (DC 8+Prof+INT) or is restrained & takes 1d8 damage.',
      effects: [
        { condition: 'Failed Save', effect: 'Target is restrained and takes 1d8 damage' },
        { condition: 'Quarry Trigger', effect: 'Save DC increased by 2' },
        { condition: 'Viper Den Talents', effect: 'May enhance trap effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + INT modifier'
    },
    {
      name: 'Roll and Shoot',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '+0'
      },
      description: 'Move and attack in one fluid motion.',
      mechanics: 'Move 10 ft and make ranged attack at –2 to-hit (counts as move for stance).',
      effects: [
        { condition: 'Hit', effect: 'Deal normal weapon damage with -2 penalty to hit' },
        { condition: 'Sprinter Stance', effect: 'No penalty to hit' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance mobility effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Predator\'s Leap',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '+1'
      },
      description: 'Leap toward your prey with predatory grace.',
      mechanics: 'Jump 15 ft to adjacent tile; first melee vs Quarry this turn adds +PS damage.',
      effects: [
        { condition: 'Melee vs Quarry', effect: 'Add +PS damage to first melee attack' },
        { condition: 'Sprinter Stance', effect: 'Jump distance increased by 5 ft' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance leap effects' }
      ],
      scaling: 'Damage bonus = PS'
    },
    {
      name: 'Flare Arrow',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '+0'
      },
      description: 'Fire an arrow that bursts into bright light.',
      mechanics: 'Burst 10 ft light; reveal invisible creatures; blind foes (CON save). If Quarry blinded, you gain +2 PS.',
      effects: [
        { condition: 'Area Effect', effect: 'Creates 10 ft radius of bright light' },
        { condition: 'Invisible Creatures', effect: 'Reveals invisible creatures in the area' },
        { condition: 'Failed CON Save', effect: 'Creatures are blinded for 1 round' },
        { condition: 'Quarry Blinded', effect: 'Gain +2 PS' }
      ],
      scaling: 'Save DC = 8 + Proficiency + WIS modifier'
    },
    {
      name: 'Quick Draw',
      cost: {
        actionPoints: 0,
        mana: 0,
        precisionStacks: '+0',
        reaction: true
      },
      description: 'React instantly when an enemy gets too close.',
      mechanics: 'If enemy enters melee range, free pistol/short-blade attack dealing 1d6 damage.',
      effects: [
        { condition: 'Trigger', effect: 'Enemy enters your melee range' },
        { condition: 'Hit', effect: 'Deal 1d6 damage' },
        { condition: 'Hit Quarry', effect: 'Add +PS damage' }
      ],
      scaling: 'Damage = 1d6 (+ PS vs Quarry)'
    },
    {
      name: 'Caltrop Scatter',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '-1'
      },
      description: 'Scatter caltrops to slow and damage enemies.',
      mechanics: 'Spend 1 PS; create 10 ft line of difficult terrain. Quarry crossing it takes 1d4 damage & loses reactions.',
      effects: [
        { condition: 'Area Effect', effect: 'Creates 10 ft line of difficult terrain' },
        { condition: 'Quarry Crosses', effect: 'Takes 1d4 damage and loses reactions for 1 round' },
        { condition: 'Viper Den Talents', effect: 'May enhance caltrop effects' }
      ],
      scaling: 'Damage = 1d4'
    },
    {
      name: 'Vital Strike',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '-2'
      },
      description: 'Target a vital spot for massive damage.',
      mechanics: 'Spend 2 PS: attack vs Quarry; on hit triple PS damage instead of +PS.',
      effects: [
        { condition: 'Hit Quarry', effect: 'Deal weapon damage + (PS × 3) instead of +PS' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance critical effects' },
        { condition: 'Sniper Stance', effect: 'Range increased by 30 ft' }
      ],
      scaling: 'Damage bonus = PS × 3'
    },
    {
      name: 'Silence Step',
      cost: {
        actionPoints: 0,
        mana: 1,
        precisionStacks: '+0'
      },
      description: 'Move with supernatural stealth.',
      mechanics: 'Bonus action: advantage on Stealth this turn; if successful gain +1 Focus.',
      effects: [
        { condition: 'Stealth Check', effect: 'Gain advantage on Stealth checks this turn' },
        { condition: 'Successful Stealth', effect: 'Gain +1 Focus' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance stealth effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Eagle Glide',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '+1'
      },
      description: 'Slide gracefully while attacking.',
      mechanics: 'Slide 5 ft as part of ranged attack, ignoring opportunity attacks.',
      effects: [
        { condition: 'Movement', effect: 'Slide 5 ft without provoking opportunity attacks' },
        { condition: 'Sprinter Stance', effect: 'Slide distance increased to 10 ft' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance mobility effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Reload Tactics',
      cost: {
        actionPoints: 0,
        mana: 0,
        precisionStacks: '+0'
      },
      description: 'Quickly adjust your tactical resources.',
      mechanics: 'Once per short rest, convert 2 Focus → 2 PS or vice-versa (swift prep).',
      effects: [
        { condition: 'Resource Conversion', effect: 'Convert 2 Focus to 2 PS or vice versa' },
        { condition: 'Frequency', effect: 'Once per short rest' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Mark Swap',
      cost: {
        actionPoints: 1,
        mana: 0,
        precisionStacks: '0'
      },
      description: 'Quickly change your quarry to a new target.',
      mechanics: 'Move Quarry Seal to new target; does not reset existing PS.',
      effects: [
        { condition: 'New Target', effect: 'Transfer Quarry Seal to a new target' },
        { condition: 'Precision Stacks', effect: 'Maintain current PS count' },
        { condition: 'Range', effect: 'New target must be within 90 ft' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Survival Instinct',
      cost: {
        actionPoints: 0,
        mana: 1,
        precisionStacks: '-1'
      },
      description: 'React with survival instincts when threatened.',
      mechanics: 'Spend 1 PS: add +2 AC until next turn; disengage free.',
      effects: [
        { condition: 'Defense', effect: 'Gain +2 AC until your next turn' },
        { condition: 'Movement', effect: 'Disengage as a free action' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance defensive effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Hunter\'s Mark',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '+1'
      },
      description: 'Mark a target for enhanced tracking and damage.',
      mechanics: 'Mark target for 10 minutes. Gain +1d6 damage vs marked target and always know its location within 1 mile.',
      effects: [
        { condition: 'Damage Bonus', effect: 'Deal +1d6 damage to marked target' },
        { condition: 'Tracking', effect: 'Always know marked target\'s location within 1 mile' },
        { condition: 'Duration', effect: 'Mark lasts for 10 minutes' },
        { condition: 'Beast Mastery Talents', effect: 'May enhance tracking effects' }
      ],
      scaling: 'Damage bonus = +1d6'
    },
    {
      name: 'Camouflage',
      cost: {
        actionPoints: 1,
        mana: 2,
        precisionStacks: '+1'
      },
      description: 'Blend with your surroundings to become nearly invisible.',
      mechanics: 'Become invisible for 3 rounds or until you attack. Moving more than 10 ft per turn breaks invisibility.',
      effects: [
        { condition: 'Invisibility', effect: 'Become invisible for 3 rounds or until you attack' },
        { condition: 'Movement Limit', effect: 'Moving more than 10 ft per turn breaks invisibility' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance stealth effects' }
      ],
      scaling: 'Duration = 3 rounds'
    },
    {
      name: 'Nature\'s Ally',
      cost: {
        actionPoints: 2,
        mana: 3,
        precisionStacks: '+1'
      },
      description: 'Call upon a wild animal to aid you in combat.',
      mechanics: 'Summon a wolf, hawk, or bear (your choice) that fights alongside you for 5 rounds.',
      effects: [
        { condition: 'Wolf', effect: 'Wolf: 25 HP, bite attack 1d8+3, pack tactics' },
        { condition: 'Hawk', effect: 'Hawk: 15 HP, talon attack 1d6+2, flyby attack' },
        { condition: 'Bear', effect: 'Bear: 35 HP, claw attack 1d10+4, intimidating presence' },
        { condition: 'Beast Mastery Talents', effect: 'May enhance animal companion abilities' }
      ],
      scaling: 'Duration = 5 rounds'
    },
    {
      name: 'Wilderness Stride',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '+1'
      },
      description: 'Move through natural terrain with supernatural ease.',
      mechanics: 'Ignore difficult terrain and gain +15 ft movement speed for 4 rounds.',
      effects: [
        { condition: 'Terrain', effect: 'Ignore difficult terrain' },
        { condition: 'Speed', effect: 'Gain +15 ft movement speed' },
        { condition: 'Duration', effect: 'Lasts for 4 rounds' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance movement effects' }
      ],
      scaling: 'Speed bonus = +15 ft'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Arrow Storm',
      cost: {
        actionPoints: 3,
        mana: 3,
        precisionStacks: '-3'
      },
      description: 'Fire a barrage of arrows in a wide arc.',
      mechanics: '20-ft cone, roll attack vs each target: 2d6 +DEX. For every crit regain 1 PS.',
      effects: [
        { condition: 'Area Effect', effect: 'Attack all targets in a 20-ft cone' },
        { condition: 'Hit', effect: 'Deal 2d6 + DEX damage to each target hit' },
        { condition: 'Critical Hit', effect: 'Regain 1 PS for each critical hit' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance critical effects' }
      ],
      scaling: 'Damage = 2d6 + DEX per target'
    },
    {
      name: 'Spring-Snare Mine',
      cost: {
        actionPoints: 2,
        mana: 2,
        precisionStacks: '-2'
      },
      description: 'Place a hidden trap that launches enemies into the air.',
      mechanics: 'Place hidden mine (INT mod charges). On trigger: lift target 15 ft & prone, 2d8 damage. Quarry triggers auto-fail save.',
      effects: [
        { condition: 'Trigger', effect: 'Target is lifted 15 ft in the air, falls prone, and takes 2d8 damage' },
        { condition: 'Quarry Trigger', effect: 'Automatically fails save' },
        { condition: 'Charges', effect: 'INT modifier determines number of charges' },
        { condition: 'Viper Den Talents', effect: 'May enhance trap effects' }
      ],
      scaling: 'Damage = 2d8, Charges = INT modifier'
    },
    {
      name: 'Shadow Trail',
      cost: {
        actionPoints: 2,
        mana: 2,
        precisionStacks: '-2'
      },
      description: 'Become one with the shadows, moving unseen.',
      mechanics: 'Become invisible & silent until you attack or move >30 ft. Gain +2 Focus on attack from shadow.',
      effects: [
        { condition: 'Stealth', effect: 'Become invisible and silent' },
        { condition: 'Duration', effect: 'Until you attack or move more than 30 ft' },
        { condition: 'Attack from Shadow', effect: 'Gain +2 Focus' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance stealth effects' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Relentless Pursuit',
      cost: {
        actionPoints: 2,
        mana: 1,
        precisionStacks: '0'
      },
      description: 'Chase down your prey with single-minded determination.',
      mechanics: 'Dash up to double speed toward Quarry; if you begin next turn within 5 ft, free Vital Strike.',
      effects: [
        { condition: 'Movement', effect: 'Dash up to double your speed toward your Quarry' },
        { condition: 'Next Turn', effect: 'If within 5 ft of Quarry, gain a free Vital Strike' },
        { condition: 'Sprinter Stance', effect: 'Speed bonus increased' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Wolf-Pack Howl',
      cost: {
        actionPoints: 1,
        mana: 2,
        precisionStacks: '+0'
      },
      description: 'Signal your allies to focus on your quarry.',
      mechanics: 'Allies within 30 ft gain +1 AP and +PS bonus vs Quarry until your next turn.',
      effects: [
        { condition: 'Allies', effect: 'Allies within 30 ft gain +1 AP' },
        { condition: 'Damage Bonus', effect: 'Allies gain +PS damage against your Quarry' },
        { condition: 'Duration', effect: 'Until your next turn' }
      ],
      scaling: 'Damage bonus = PS'
    },
    {
      name: 'Ricochet Shot',
      cost: {
        actionPoints: 1,
        mana: 2,
        precisionStacks: '-1'
      },
      description: 'Fire an arrow that bounces to a second target.',
      mechanics: 'Spend 1 PS: shot bounces to second target (line of 2). Second hit takes 1d8 base + half PS.',
      effects: [
        { condition: 'Primary Target', effect: 'Normal weapon damage + PS (if Quarry)' },
        { condition: 'Secondary Target', effect: '1d8 + half PS damage' },
        { condition: 'Viper Den Talents', effect: 'May enhance ricochet effects' }
      ],
      scaling: 'Secondary damage = 1d8 + (PS ÷ 2)'
    },
    {
      name: 'Lethal Line',
      cost: {
        actionPoints: 2,
        mana: 2,
        precisionStacks: '-2'
      },
      description: 'Fire a devastating shot that pierces through obstacles.',
      mechanics: 'Must be in Sniper Stance: 100-ft line ignore cover; 4d8+DEX radiant arrow; on kill refund spent PS.',
      effects: [
        { condition: 'Requirement', effect: 'Must be in Sniper Stance' },
        { condition: 'Line Attack', effect: '100-ft line that ignores cover' },
        { condition: 'Damage', effect: '4d8 + DEX radiant damage' },
        { condition: 'Kill', effect: 'Refund spent PS' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance piercing effects' }
      ],
      scaling: 'Damage = 4d8 + DEX'
    },
    {
      name: 'Flash Bind',
      cost: {
        actionPoints: 1,
        mana: 2,
        precisionStacks: '0',
        focus: '-1'
      },
      description: 'Fire a blinding arrow that stuns your quarry.',
      mechanics: 'Spend 1 Focus: flash arrow; quarry DEX save or stunned 1 round.',
      effects: [
        { condition: 'Failed Save', effect: 'Quarry is stunned for 1 round' },
        { condition: 'Save DC', effect: '8 + Proficiency + DEX modifier' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance stunning effects' }
      ],
      scaling: 'Save DC = 8 + Proficiency + DEX modifier'
    },
    {
      name: 'Tracked Wound',
      cost: {
        actionPoints: 0,
        mana: 0,
        precisionStacks: '0',
        passive: true
      },
      description: 'Your knowledge of your quarry\'s wounds prevents healing.',
      mechanics: 'Each time Quarry heals, they take PS damage (cannot drop below 1 HP).',
      effects: [
        { condition: 'Quarry Healing', effect: 'Quarry takes PS damage whenever it heals' },
        { condition: 'Limitation', effect: 'Cannot reduce Quarry below 1 HP' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance wound effects' }
      ],
      scaling: 'Damage = PS'
    },
    {
      name: 'Toxic Fletching',
      cost: {
        actionPoints: 1,
        mana: 2,
        precisionStacks: '-2'
      },
      description: 'Coat your arrows with deadly poison.',
      mechanics: 'Spend 2 PS: next 3 arrows inflict 1d6 poison over 2 rounds (CON save half).',
      effects: [
        { condition: 'Duration', effect: 'Next 3 arrows fired' },
        { condition: 'Poison Damage', effect: '1d6 poison damage over 2 rounds' },
        { condition: 'CON Save', effect: 'Half damage on successful save' },
        { condition: 'Viper Den Talents', effect: 'May enhance poison effects' }
      ],
      scaling: 'Poison damage = 1d6'
    },
    {
      name: 'Ballistic Roll',
      cost: {
        actionPoints: 0,
        mana: 1,
        precisionStacks: '-1',
        reaction: true
      },
      description: 'Dodge an incoming attack and counter with a shot of your own.',
      mechanics: 'Reaction: Negate ranged hit; you may immediately fire Quick Draw at shooter (+PS).',
      effects: [
        { condition: 'Trigger', effect: 'When hit by a ranged attack' },
        { condition: 'Defense', effect: 'Negate the hit' },
        { condition: 'Counter', effect: 'Fire Quick Draw at the attacker with +PS damage' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance defensive effects' }
      ],
      scaling: 'Counter damage = 1d6 + PS'
    },
    {
      name: 'Bear Trap',
      cost: {
        actionPoints: 2,
        mana: 2,
        precisionStacks: '-3'
      },
      description: 'Set a large metal trap that immobilizes your prey.',
      mechanics: 'Large metal jaw trap: hold target immobile (escape DC STR 16). Quarry auto-disadvantage to escape.',
      effects: [
        { condition: 'Trigger', effect: 'Target is held immobile' },
        { condition: 'Escape', effect: 'Requires STR check (DC 16)' },
        { condition: 'Quarry', effect: 'Has disadvantage on escape attempts' },
        { condition: 'Viper Den Talents', effect: 'May enhance trap effects' }
      ],
      scaling: 'Escape DC = 16'
    },
    {
      name: 'Bleeding Edge',
      cost: {
        actionPoints: 1,
        mana: 1,
        precisionStacks: '-X'
      },
      description: 'Cause your quarry to bleed from its wounds.',
      mechanics: 'Spend any PS; Quarry bleeds X d6 over 3 rounds (no save).',
      effects: [
        { condition: 'Bleed Damage', effect: 'X d6 damage over 3 rounds (where X is PS spent)' },
        { condition: 'No Save', effect: 'No saving throw allowed' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance bleeding effects' }
      ],
      scaling: 'Damage = X d6 (where X is PS spent)'
    },
    {
      name: 'Volley Teleport',
      cost: {
        actionPoints: 2,
        mana: 3,
        precisionStacks: '-4'
      },
      description: 'Fire an arrow and teleport to its impact point.',
      mechanics: 'Fire arrow; teleport to impact point (60 ft). Gains advantage on first melee vs Quarry.',
      effects: [
        { condition: 'Teleport', effect: 'Teleport to arrow impact point (up to 60 ft)' },
        { condition: 'Melee Advantage', effect: 'Gain advantage on first melee attack vs Quarry' },
        { condition: 'Lynx Prowl Talents', effect: 'May enhance teleport effects' }
      ],
      scaling: 'Teleport distance = 60 ft'
    },
    {
      name: 'Pack Leader',
      cost: {
        actionPoints: 2,
        mana: 3,
        precisionStacks: '-2'
      },
      description: 'Summon a pack of wolves to overwhelm your enemies.',
      mechanics: 'Summon 3 wolves for 4 rounds. Each wolf has 20 HP and attacks for 1d6+2 damage.',
      effects: [
        { condition: 'Summon', effect: 'Summon 3 wolves for 4 rounds' },
        { condition: 'Wolf Stats', effect: 'Each wolf has 20 HP and attacks for 1d6+2 damage' },
        { condition: 'Pack Tactics', effect: 'Wolves gain advantage when attacking the same target' },
        { condition: 'Beast Mastery Talents', effect: 'May enhance pack abilities' }
      ],
      scaling: 'Wolf damage = 1d6+2'
    },
    {
      name: 'Phantom Shot',
      cost: {
        actionPoints: 2,
        mana: 3,
        precisionStacks: '-3'
      },
      description: 'Fire an arrow that passes through multiple enemies.',
      mechanics: 'Fire arrow in 60-ft line. Hits all enemies in line for 2d8 + AGI damage. Each enemy hit after the first takes +1d6 damage.',
      effects: [
        { condition: 'Line Attack', effect: 'Hits all enemies in 60-ft line' },
        { condition: 'Base Damage', effect: '2d8 + AGI damage to all targets' },
        { condition: 'Escalating Damage', effect: 'Each enemy after the first takes +1d6 damage' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance piercing effects' }
      ],
      scaling: 'Damage = 2d8 + AGI (+1d6 per enemy after first)'
    },
    {
      name: 'Apex Predator',
      cost: {
        actionPoints: 2,
        mana: 4,
        precisionStacks: '-4'
      },
      description: 'Enter a heightened state where you become the ultimate hunter.',
      mechanics: 'For 5 rounds: +2 to all attack rolls, +1d8 damage to all attacks, and gain tremorsense 30 ft.',
      effects: [
        { condition: 'Attack Bonus', effect: '+2 to all attack rolls' },
        { condition: 'Damage Bonus', effect: '+1d8 damage to all attacks' },
        { condition: 'Tremorsense', effect: 'Gain tremorsense 30 ft' },
        { condition: 'Duration', effect: 'Lasts for 5 rounds' },
        { condition: 'Beast Mastery Talents', effect: 'May enhance predator abilities' }
      ],
      scaling: 'Damage bonus = +1d8'
    },
    {
      name: 'Rain of Arrows',
      cost: {
        actionPoints: 3,
        mana: 4,
        precisionStacks: '-5'
      },
      description: 'Fire arrows high into the air to rain down on a large area.',
      mechanics: 'Target 30-ft radius area within 120 ft. After 1 round, arrows rain down dealing 4d6 damage to all creatures in area.',
      effects: [
        { condition: 'Area', effect: 'Target 30-ft radius area within 120 ft' },
        { condition: 'Delay', effect: 'Arrows fall after 1 round' },
        { condition: 'Damage', effect: '4d6 damage to all creatures in area' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance area effects' }
      ],
      scaling: 'Damage = 4d6'
    },
    {
      name: 'Executioner\'s Mark',
      cost: {
        actionPoints: 3,
        mana: 4,
        precisionStacks: 'all'
      },
      description: 'Channel all your precision into a single, devastating shot.',
      mechanics: 'Must have 6 PS. Single shot: damage = 6d8 +DEX + (PS×2). If this reduces Quarry ≤ 0 HP, regain 3 Focus + free Mark Swap.',
      effects: [
        { condition: 'Requirement', effect: 'Must have 6 Precision Stacks' },
        { condition: 'Damage', effect: '6d8 + DEX + (PS × 2)' },
        { condition: 'Kill', effect: 'Regain 3 Focus and free Mark Swap' },
        { condition: 'Falcon\'s Eye Talents', effect: 'May enhance execution effects' }
      ],
      scaling: 'Damage = 6d8 + DEX + (PS × 2)',
      ultimate: true
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    falconsEye: [
      {
        name: 'Steady Aim',
        description: 'Your Sniper Stance is more mobile.',
        mechanics: 'Sniper Stance only ends if you move >15 ft (was 5).',
        requirements: 'Requires points in the Falcon\'s Eye talent tree.'
      },
      {
        name: 'Piercing Fletch',
        description: 'Your Lethal Line is more devastating.',
        mechanics: 'Lethal Line ignores resistance; crits explode for +1d8.',
        requirements: 'Requires points in the Falcon\'s Eye talent tree.'
      },
      {
        name: 'Eye of the Storm',
        description: 'Even your misses help you focus.',
        mechanics: 'Every miss vs Quarry grants +1 Focus.',
        requirements: 'Requires points in the Falcon\'s Eye talent tree.'
      },
      {
        name: 'Moonlit Bullseye',
        description: 'Your ultimate attack is more efficient and accurate.',
        mechanics: 'Executioner\'s Mark consumes only 4 PS and crits on 18-20.',
        requirements: 'Requires points in the Falcon\'s Eye talent tree. (Capstone)'
      }
    ],
    lynxProwl: [
      {
        name: 'Shadow Merge',
        description: 'Your Shadow Trail lasts longer and protects you.',
        mechanics: 'Shadow Trail lasts +1 turn and grants +2 AC vs AoO.',
        requirements: 'Requires points in the Lynx Prowl talent tree.'
      },
      {
        name: 'Silent Culling',
        description: 'Killing from stealth refunds your Focus.',
        mechanics: 'Killing Quarry while invisible refunds all Focus.',
        requirements: 'Requires points in the Lynx Prowl talent tree.'
      },
      {
        name: 'Nimble Escape',
        description: 'Your Survival Instinct is more efficient.',
        mechanics: 'Survival Instinct costs 0 Mana & gives +10 ft speed.',
        requirements: 'Requires points in the Lynx Prowl talent tree.'
      },
      {
        name: 'Phantom Predator',
        description: 'Your Flash Bind sets up a devastating attack.',
        mechanics: 'After Flash Bind stun, you teleport behind Quarry (5 ft) and Vital Strike auto-crits.',
        requirements: 'Requires points in the Lynx Prowl talent tree. (Capstone)'
      }
    ],
    viperDen: [
      {
        name: 'Quick-Lay',
        description: 'Set traps more efficiently when stationary.',
        mechanics: 'Snare Trap & Bear Trap cost 0 AP if you did not move last turn.',
        requirements: 'Requires points in the Viper Den talent tree.'
      },
      {
        name: 'Paralytic Venom',
        description: 'Your poisons are more debilitating.',
        mechanics: 'Toxic Fletching also applies restrain on failed save.',
        requirements: 'Requires points in the Viper Den talent tree.'
      },
      {
        name: 'Tethered Doom',
        description: 'Your Ricochet Shot chains through trapped enemies.',
        mechanics: 'Ricochet Shot bounces unlimited within 30 ft chain if each prior target is trapped.',
        requirements: 'Requires points in the Viper Den talent tree.'
      },
      {
        name: 'Serpent\'s Coil',
        description: 'Your Bear Trap triggers a devastating explosion.',
        mechanics: 'Bear Trap detonates Bleeding Edge on trigger; damage = spent PS × d8 to all in 10 ft.',
        requirements: 'Requires points in the Viper Den talent tree. (Capstone)'
      }
    ]
  }
};

export default huntressAbilities;
