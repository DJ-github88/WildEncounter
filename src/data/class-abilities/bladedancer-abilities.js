// Base abilities for the Bladedancer class
const bladedancerAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Edge, Flourish Tokens & Stance System',
    description: 'The Bladedancer is a hyper‑agile melee specialist who turns combat into choreography. Every strike links into the next, every sidestep opens a new line of attack. Your job: stay in motion, keep Edge high, and finish fights with flawless combos.',
    mechanics: [
      'Edge (0-10): Measures momentum & focus. Gain +1 per hit or dodge, +2 on crit, +3 when you drop a foe. Spend to boost abilities or trigger finishers.',
      'Flourish Tokens (max = AGI mod): Extra acrobatic tricks. Start combat with 1; +1 each round you move ≥ 20 ft. Cash in for free movement, parries, or small buffs.',
      'Stance Slot (1 active): One style at a time. Switch stance (bonus action). Grants passive bonuses (see below).'
    ],
    stances: {
      name: 'Combat Stances',
      description: 'Bladedancers can adopt different combat stances, each providing unique benefits. Switching stance costs 1 AP (bonus action) and resets no other resources.',
      mechanics: [
        'Viper: +1 damage die on dagger/sabre hits. First hit after swap inflicts Bleed 2 (2 dmg/round).',
        'Wind: +10 ft speed & ignore difficult terrain. Auto‑disengage (no OA) on first move.',
        'Mirror: +2 AC vs first melee attack each round. Gain 1 Flourish Token on a successful parry.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Dancing Cut',
      cost: {
        actionPoints: 1,
        mana: 0
      },
      description: 'Melee. 1d8 + DEX dmg; if you moved ≥ 10 ft this turn gain +1 Edge.',
      mechanics: 'Make a melee attack against a target, dealing 1d8 + DEX damage. If you moved at least 10 ft this turn, gain +1 Edge.',
      effects: [
        { condition: 'Hit', effect: 'Deal 1d8 + DEX damage' },
        { condition: 'Movement', effect: 'If you moved ≥ 10 ft this turn, gain +1 Edge' },
        { condition: 'Viper Stance', effect: '+1 damage die if using dagger/sabre' }
      ],
      scaling: 'Damage = 1d8 + DEX modifier'
    },
    {
      name: 'Whirling Step',
      cost: {
        actionPoints: 1,
        mana: 0,
        flourishTokens: 1
      },
      description: 'Move 15 ft without provoking OA. If you pass an enemy square, they take 1d4 slashing.',
      mechanics: 'Move 15 ft without provoking opportunity attacks. If you pass through an enemy\'s space during this movement, they take 1d4 slashing damage.',
      effects: [
        { condition: 'Movement', effect: 'Move 15 ft without provoking opportunity attacks' },
        { condition: 'Pass Enemy', effect: 'Deal 1d4 slashing damage to enemies you pass through' },
        { condition: 'Wind Stance', effect: '+10 ft to movement distance' }
      ],
      scaling: 'Damage = 1d4 slashing'
    },
    {
      name: 'Parry & Riposte',
      cost: {
        actionPoints: 0,
        mana: 0,
        flourishTokens: 1,
        reaction: true
      },
      description: 'On hit, reduce dmg by 1d6 + DEX. If reduced to 0, make free Dancing Cut.',
      mechanics: 'As a reaction when hit by an attack, reduce the damage by 1d6 + DEX. If the damage is reduced to 0, you can make a free Dancing Cut attack against the attacker.',
      effects: [
        { condition: 'Damage Reduction', effect: 'Reduce incoming damage by 1d6 + DEX' },
        { condition: 'Complete Parry', effect: 'If damage is reduced to 0, make a free Dancing Cut against the attacker' },
        { condition: 'Mirror Stance', effect: 'Gain 1 Flourish Token on successful parry' }
      ],
      scaling: 'Damage reduction = 1d6 + DEX modifier'
    },
    {
      name: 'Edge Burst',
      cost: {
        actionPoints: 1,
        mana: 1,
        edge: 5
      },
      description: 'Add 2d6 dmg to next hit; consumes 5 Edge.',
      mechanics: 'Spend 5 Edge to add 2d6 damage to your next successful attack. This effect lasts until the end of your next turn.',
      effects: [
        { condition: 'Next Hit', effect: 'Add 2d6 damage to your next successful attack' },
        { condition: 'Edge Cost', effect: 'Consumes 5 Edge' }
      ],
      scaling: 'Bonus damage = 2d6'
    },
    {
      name: 'Feint',
      cost: {
        actionPoints: 1,
        mana: 1
      },
      description: 'Force target to roll attack vs you with disadvantage; next Bladedancer hit gains advantage.',
      mechanics: 'Perform a feint against a target. The target has disadvantage on their next attack roll against you, and you have advantage on your next attack roll against the target.',
      effects: [
        { condition: 'Target', effect: 'Target has disadvantage on their next attack roll against you' },
        { condition: 'Self', effect: 'You have advantage on your next attack roll against the target' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Step Through',
      cost: {
        actionPoints: 1,
        mana: 1,
        edge: 2
      },
      description: 'Teleport behind a creature within 20 ft. Next attack vs it is a crit on 19‑20 and grants +1 Edge.',
      mechanics: 'Spend 2 Edge to teleport behind a creature within 20 ft. Your next attack against that creature has an expanded critical hit range (19-20) and grants +1 Edge on hit.',
      effects: [
        { condition: 'Teleport', effect: 'Teleport behind a creature within 20 ft' },
        { condition: 'Next Attack', effect: 'Critical hit on 19-20 and grants +1 Edge on hit' },
        { condition: 'Wind Stance', effect: 'Gain advantage on the attack' }
      ],
      scaling: 'Critical range = 19-20'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Blade Flurry',
      cost: {
        actionPoints: 2,
        mana: 2,
        edge: 3
      },
      description: 'Make two Dancing Cuts on different targets; each hit grants +1 Edge.',
      mechanics: 'Spend 3 Edge to make two Dancing Cut attacks against different targets. Each successful hit grants +1 Edge.',
      effects: [
        { condition: 'Attacks', effect: 'Make two Dancing Cut attacks against different targets' },
        { condition: 'Edge Generation', effect: 'Each hit grants +1 Edge' },
        { condition: 'Viper Stance', effect: 'Both attacks can inflict Bleed if stance was just entered' }
      ],
      scaling: 'Damage = 1d8 + DEX per hit'
    },
    {
      name: 'Petal Storm',
      cost: {
        actionPoints: 2,
        mana: 3,
        edge: 5,
        flourishTokens: 1
      },
      description: 'Spin 360° in place: all foes in 10 ft take 3d6 + DEX. If ≥ 2 foes hit, gain +2 Edge.',
      mechanics: 'Spend 5 Edge and 1 Flourish Token to spin in a 360° circle, dealing 3d6 + DEX damage to all enemies within 10 ft. If you hit 2 or more enemies, gain +2 Edge.',
      effects: [
        { condition: 'Area Damage', effect: 'Deal 3d6 + DEX damage to all enemies within 10 ft' },
        { condition: 'Multiple Hits', effect: 'If ≥ 2 foes hit, gain +2 Edge' },
        { condition: 'Mirror Stance', effect: 'Gain +2 AC against reactions triggered by this ability' }
      ],
      scaling: 'Damage = 3d6 + DEX modifier'
    },
    {
      name: 'Echo Step',
      cost: {
        actionPoints: 1,
        mana: 2,
        edge: 2
      },
      description: 'Until end of turn your speed doubles and each 10 ft move grants +1 Edge (max +3).',
      mechanics: 'Spend 2 Edge to double your movement speed until the end of your turn. For each 10 ft you move during this turn, gain +1 Edge (maximum +3 Edge from this ability).',
      effects: [
        { condition: 'Speed', effect: 'Double your movement speed until the end of your turn' },
        { condition: 'Edge Generation', effect: 'Gain +1 Edge for each 10 ft moved (max +3)' },
        { condition: 'Wind Stance', effect: 'Ignore difficult terrain and gain immunity to opportunity attacks' }
      ],
      scaling: 'Maximum Edge gain = +3'
    },
    {
      name: 'Reversal',
      cost: {
        actionPoints: 0,
        mana: 1,
        edge: 0,
        flourishTokens: 1,
        reaction: true
      },
      description: 'When missed by a melee attack, immediately switch to Mirror stance and counter for 1d6 + DEX.',
      mechanics: 'As a reaction when missed by a melee attack, spend 1 Flourish Token to immediately switch to Mirror stance and make a counter-attack dealing 1d6 + DEX damage.',
      effects: [
        { condition: 'Stance Change', effect: 'Immediately switch to Mirror stance' },
        { condition: 'Counter-attack', effect: 'Deal 1d6 + DEX damage to the attacker' },
        { condition: 'Mirror Stance', effect: 'If already in Mirror stance, counter-attack deals +1d6 damage' }
      ],
      scaling: 'Damage = 1d6 + DEX modifier'
    },
    {
      name: 'Edge Overload',
      cost: {
        actionPoints: 1,
        mana: 0,
        edge: 10
      },
      description: 'Spend all Edge to regain 2 AP and refresh 1 Flourish Token. Cool‑down: once / fight.',
      mechanics: 'Spend all your Edge (minimum 10) to regain 2 AP and refresh 1 Flourish Token. This ability can only be used once per combat encounter.',
      effects: [
        { condition: 'AP Recovery', effect: 'Regain 2 AP' },
        { condition: 'Token Refresh', effect: 'Refresh 1 Flourish Token' },
        { condition: 'Cooldown', effect: 'Can only be used once per combat encounter' }
      ],
      scaling: 'Minimum Edge cost = 10'
    }
  ],

  // Ultimate Abilities
  ultimateAbilities: [
    {
      name: 'Crescendo',
      cost: {
        actionPoints: 2,
        mana: 3,
        edge: 8
      },
      description: 'Chain attacks equal to half your Edge (max 4). Each hit auto‑crits if target\'s HP < 50%. On kill, Edge resets to 4 instead of 0.',
      mechanics: 'Spend 8 Edge to chain a number of attacks equal to half your current Edge (maximum 4 attacks). Each attack automatically crits if the target is below 50% HP. If you kill a target with this ability, your Edge resets to 4 instead of 0.',
      effects: [
        { condition: 'Chain Attacks', effect: 'Make attacks equal to half your current Edge (max 4)' },
        { condition: 'Low HP Targets', effect: 'Attacks automatically crit if target is below 50% HP' },
        { condition: 'Kill', effect: 'If you kill a target, Edge resets to 4 instead of 0' },
        { condition: 'Viper Stance', effect: 'All attacks inflict Bleed 2' }
      ],
      scaling: 'Maximum attacks = 4'
    },
    {
      name: 'Phantom Waltz',
      cost: {
        actionPoints: 3,
        mana: 4,
        flourishTokens: 2
      },
      description: 'Blink up to 60 ft, hitting every creature you pass (2d6 each). End in a square within range. Gain Edge equal to targets hit.',
      mechanics: 'Spend 2 Flourish Tokens to blink up to 60 ft, dealing 2d6 damage to every creature you pass through. You must end this movement in an unoccupied square within the range. Gain Edge equal to the number of targets hit.',
      effects: [
        { condition: 'Blink', effect: 'Move up to 60 ft, passing through creatures and obstacles' },
        { condition: 'Damage', effect: 'Deal 2d6 damage to every creature you pass through' },
        { condition: 'Edge Generation', effect: 'Gain Edge equal to the number of targets hit' },
        { condition: 'Wind Stance', effect: 'Damage increased to 3d6' }
      ],
      scaling: 'Damage = 2d6 per target'
    },
    {
      name: 'Still Heart',
      cost: {
        actionPoints: 3,
        mana: 3,
        edge: 10
      },
      description: 'Single melee strike. If it lands, target makes CON save (DC = 8 + Prof + DEX). Fail → drop to 1 HP. Succeed → take 6d6 true dmg. Edge resets to 0.',
      mechanics: 'Spend 10 Edge to make a single melee strike. If the attack hits, the target must make a Constitution saving throw (DC = 8 + your proficiency bonus + your DEX modifier). On a failed save, the target drops to 1 HP. On a successful save, the target takes 6d6 true damage (ignores resistances and immunities). Your Edge resets to 0 after using this ability.',
      effects: [
        { condition: 'Melee Strike', effect: 'Make a single melee attack' },
        { condition: 'Failed Save', effect: 'Target drops to 1 HP' },
        { condition: 'Successful Save', effect: 'Target takes 6d6 true damage (ignores resistances and immunities)' },
        { condition: 'Edge Reset', effect: 'Your Edge resets to 0 after using this ability' },
        { condition: 'Mirror Stance', effect: 'Target has disadvantage on the saving throw' }
      ],
      scaling: 'Save DC = 8 + proficiency bonus + DEX modifier, Damage on save = 6d6 true damage'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    momentum: [
      {
        name: 'Swift Foot',
        description: '+5 ft speed; Edge on any dash.',
        mechanics: 'Increase your movement speed by 5 ft. Additionally, you gain 1 Edge whenever you take the Dash action.',
        requirements: 'Requires points in the Momentum talent tree.'
      },
      {
        name: 'Kinetic Flow',
        description: 'Whirling Step distance → 25 ft.',
        mechanics: 'Your Whirling Step ability now allows you to move 25 ft instead of 15 ft.',
        requirements: 'Requires points in the Momentum talent tree.'
      },
      {
        name: 'Endless Dance',
        description: 'Edge no longer resets at turn end if you moved ≥ 15 ft that turn.',
        mechanics: 'Your Edge no longer resets to 0 at the end of your turn if you moved at least 15 ft during that turn.',
        requirements: 'Requires points in the Momentum talent tree. (Capstone)'
      }
    ],
    precision: [
      {
        name: 'Keen Edge',
        description: 'Crit range –1 (19-20).',
        mechanics: 'Your critical hit range with all attacks is expanded by 1 (19-20 instead of just 20).',
        requirements: 'Requires points in the Precision talent tree.'
      },
      {
        name: 'Anatomy Study',
        description: 'Crits deal +DEX mod dice.',
        mechanics: 'When you score a critical hit, add a number of damage dice equal to your DEX modifier.',
        requirements: 'Requires points in the Precision talent tree.'
      },
      {
        name: 'Death Lotus',
        description: 'Still Heart no longer spends Edge on miss.',
        mechanics: 'Your Still Heart ability no longer spends Edge if the attack misses.',
        requirements: 'Requires points in the Precision talent tree. (Capstone)'
      }
    ],
    deflect: [
      {
        name: 'Fluid Guard',
        description: 'Parry & Riposte also grants +1 Edge on success.',
        mechanics: 'When you successfully use Parry & Riposte to reduce damage to 0, you gain +1 Edge in addition to the free Dancing Cut attack.',
        requirements: 'Requires points in the Deflect talent tree.'
      },
      {
        name: 'Aerial Tumble',
        description: 'Gain advantage on DEX saves while in Wind stance.',
        mechanics: 'While in Wind stance, you have advantage on Dexterity saving throws.',
        requirements: 'Requires points in the Deflect talent tree.'
      },
      {
        name: 'Untouchable Flourish',
        description: 'First attack that would hit you each round is automatically parried (no Token cost).',
        mechanics: 'The first attack that would hit you each round is automatically parried without spending a Flourish Token.',
        requirements: 'Requires points in the Deflect talent tree. (Capstone)'
      }
    ]
  }
};

export default bladedancerAbilities;
