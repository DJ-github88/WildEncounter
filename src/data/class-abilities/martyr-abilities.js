// Base spells and abilities for the Martyr class
const martyrAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Blood Thresholds and Pain Charges',
    description: 'The Martyr\'s unique system turns every wound into a resource. By sacrificing HP (often as a cost for abilities), the Martyr builds up Conviction Points, Blood Vows, or Pain Charges that fuel special effects.',
    mechanics: [
      'Pain Charges: The Martyr gains 1 Pain Charge per 5% of maximum HP lost, stacking to grant bonuses at each threshold (e.g. +1 attack/damage per charge).',
      'Blood Vows: The Martyr swears an oath (at an HP cost) and then accumulates "sacrifice" until the vow completes, triggering a dramatic payoff.',
      'Threshold Bonuses: Dropping below 50% or 25% HP grants temporary buffs (e.g. increased healing power or damage reduction).',
      'Healing Inversion: The Martyr can channel their pain into aid for allies or retribution on enemies.'
    ],
    thresholds: [
      {
        name: 'Full Health (100-76%)',
        description: 'The Martyr is at full strength but has few Pain Charges.',
        effects: 'Normal ability usage, minimal Pain Charge bonuses.'
      },
      {
        name: 'Wounded (75-51%)',
        description: 'The Martyr has sustained moderate wounds.',
        effects: 'Gain +10% to all healing effects, +5% to damage dealt.'
      },
      {
        name: 'Bloodied (50-26%)',
        description: 'The Martyr is severely wounded but empowered by sacrifice.',
        effects: 'Gain +25% to all healing effects, +15% to damage dealt, and reduce incoming damage by 10%.'
      },
      {
        name: 'Near Death (25-1%)',
        description: 'The Martyr is at the brink of death, but their power is at its peak.',
        effects: 'Gain +50% to all healing effects, +30% to damage dealt, reduce incoming damage by 20%, and all abilities cost 50% less Mana.'
      }
    ],
    painCharges: {
      name: 'Pain Charges',
      description: 'The Martyr accumulates Pain Charges as they lose HP, which can be spent to empower abilities.',
      mechanics: [
        'Gain 1 Pain Charge per 5% of maximum HP lost.',
        'Maximum Pain Charges = Constitution modifier + 5.',
        'Pain Charges can be spent to empower abilities or trigger special effects.',
        'Pain Charges are lost when the Martyr is fully healed or after a long rest.'
      ]
    },
    bloodVows: {
      name: 'Blood Vows',
      description: 'The Martyr can swear solemn vows, sacrificing HP to gain powerful effects when the vow is fulfilled.',
      mechanics: [
        'Swear a Blood Vow by sacrificing a percentage of maximum HP.',
        'The HP sacrificed for a Blood Vow cannot be healed until the vow is fulfilled or abandoned.',
        'When the conditions of the vow are met, the Martyr gains a powerful effect based on the vow.',
        'If a vow is abandoned, the Martyr suffers a penalty based on the vow.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Hemorrhagic Strike',
      cost: {
        actionPoints: 1,
        mana: 0,
        hpSacrifice: '5% HP'
      },
      description: 'A melee attack that deals moderate damage. If the Martyr sacrifices HP, this damage increases by twice the HP spent.',
      mechanics: 'Make a melee attack against a target. If you choose to sacrifice 5% of your maximum HP, the attack deals additional damage equal to twice the HP sacrificed.',
      effects: [
        { condition: 'Normal Attack', effect: 'Deal 1d8 + STR modifier damage.' },
        { condition: 'With HP Sacrifice', effect: 'Deal 1d8 + STR modifier + (2 × HP sacrificed) damage.' },
        { condition: 'Below 50% HP', effect: 'Deal an additional 25% damage.' },
        { condition: 'With Pain Charges', effect: 'Spend 1 Pain Charge to make the attack a critical hit.' }
      ],
      scaling: 'Damage = 1d8 + STR + (2 × HP sacrificed) + (CON modifier)'
    },
    {
      name: 'Shield of Suffering',
      cost: {
        actionPoints: 1,
        mana: 1,
        hpSacrifice: '10% HP'
      },
      description: 'Grants a protective barrier to an ally or self. The shield\'s strength equals the HP the Martyr sacrificed.',
      mechanics: 'Sacrifice 10% of your maximum HP to create a protective shield around yourself or an ally that lasts for 2 turns.',
      effects: [
        { condition: 'Normal Cast', effect: 'Create a shield with HP equal to the HP sacrificed.' },
        { condition: 'Below 50% HP', effect: 'Shield strength increased by 50%.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to double the shield\'s duration.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Protection Vow on the target, the shield also grants +2 AC.' }
      ],
      scaling: 'Shield HP = HP sacrificed + (WIS modifier × 2)'
    },
    {
      name: 'Martyr\'s Beacon',
      cost: {
        actionPoints: 2,
        mana: 2,
        hpSacrifice: '0% HP'
      },
      description: 'A bonding ability. The Martyr links with a nearby ally for 2 turns. While linked, whenever the ally would take damage, the Martyr may choose to use Reaction to take that damage instead.',
      mechanics: 'Create a bond with an ally within 30 feet that lasts for 2 turns. While bonded, you can use your Reaction to take damage meant for your ally, and when you take damage, your ally is healed for half the amount.',
      effects: [
        { condition: 'Normal Bond', effect: 'Use Reaction to take damage meant for bonded ally. When you take damage, ally heals for 50% of damage taken.' },
        { condition: 'Below 50% HP', effect: 'Ally healing increased to 75% of damage taken.' },
        { condition: 'With Pain Charges', effect: 'Spend 1 Pain Charge to extend the bond by 1 turn.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Protection Vow, you automatically take the first instance of damage without using a Reaction.' }
      ],
      scaling: 'Ally healing = (50% of damage taken) + (WIS modifier)'
    },
    {
      name: 'Pain Inversion',
      cost: {
        actionPoints: 2,
        mana: 1,
        hpSacrifice: '10% HP'
      },
      description: 'Area effect that punishes enemies. The Martyr sacrifices some HP, which ripples outward as damage to enemies or healing to allies.',
      mechanics: 'Sacrifice 10% of your maximum HP to create a 15-foot radius burst centered on you. Enemies in the area take damage equal to the HP sacrificed, while allies are healed for the same amount.',
      effects: [
        { condition: 'Normal Cast', effect: 'Enemies take damage equal to HP sacrificed, allies heal for the same amount.' },
        { condition: 'Below 50% HP', effect: 'Damage and healing increased by 50%.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to increase the radius to 30 feet.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Vengeance Vow, enemies also suffer a -2 penalty to attack rolls for 1 turn.' }
      ],
      scaling: 'Damage/Healing = HP sacrificed + (WIS modifier × 2)'
    },
    {
      name: 'Oath of the Protector',
      cost: {
        actionPoints: 1,
        mana: 3,
        hpSacrifice: '15% HP'
      },
      description: 'A blessing on an ally. The Martyr swears a solemn vow over a single ally; the Martyr loses 15% of max HP when casting.',
      mechanics: 'Sacrifice 15% of your maximum HP to swear a Blood Vow of protection over an ally. The HP sacrificed is marked and cannot be healed while the vow is active. For 3 turns, you gain bonuses based on the HP sacrificed, and if the ally drops to 0 HP, you can sacrifice all remaining marked HP to fully heal them.',
      effects: [
        { condition: 'Active Vow', effect: 'Gain damage resistance equal to half the HP sacrificed and +1 to all saving throws.' },
        { condition: 'Ally at 0 HP', effect: 'Sacrifice all remaining marked HP to fully heal the ally.' },
        { condition: 'Below 50% HP', effect: 'Ally also gains +2 AC while the vow is active.' },
        { condition: 'With Pain Charges', effect: 'Spend 3 Pain Charges to extend the vow by 2 turns.' }
      ],
      scaling: 'Damage resistance = (HP sacrificed / 2) + CON modifier'
    },
    {
      name: 'Consecrated Flame',
      cost: {
        actionPoints: 1,
        mana: 2,
        hpSacrifice: '0% HP (optional)'
      },
      description: 'A damaging spell or weapon strike coated in holy fire. It deals standard fire (or holy) damage, and if the Martyr is below 50% health when casting, it deals +50% extra damage.',
      mechanics: 'Coat your weapon in holy fire or launch a bolt of sacred flame at a target within 60 feet. The attack deals fire damage, with bonus damage if you are below 50% HP. You may optionally sacrifice additional HP to increase the damage.',
      effects: [
        { condition: 'Normal Cast', effect: 'Deal 2d8 fire damage.' },
        { condition: 'Below 50% HP', effect: 'Damage increased by 50%.' },
        { condition: 'With HP Sacrifice', effect: 'For each 5% HP sacrificed, add 1d8 to the damage.' },
        { condition: 'With Pain Charges', effect: 'Spend 1 Pain Charge to make the damage ignore fire resistance.' }
      ],
      scaling: 'Damage = 2d8 + WIS modifier + (1d8 per 5% HP sacrificed)'
    },
    {
      name: 'Purging Suffering',
      cost: {
        actionPoints: 1,
        mana: 2,
        hpSacrifice: '5% HP'
      },
      description: 'Support spell. The Martyr suffers 5% max HP, and each allied target heals by twice that amount (and/or removes one negative condition).',
      mechanics: 'Sacrifice 5% of your maximum HP to heal up to three allies within 30 feet for twice the amount sacrificed. Additionally, you can remove one negative condition from one of the affected allies.',
      effects: [
        { condition: 'Normal Cast', effect: 'Heal allies for twice the HP sacrificed and remove one negative condition from one ally.' },
        { condition: 'Below 50% HP', effect: 'Healing increased to three times the HP sacrificed.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to remove one negative condition from all affected allies.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Mercy Vow, affected allies also gain temporary HP equal to your WIS modifier.' }
      ],
      scaling: 'Healing = (2 × HP sacrificed) + (WIS modifier × 2)'
    },
    {
      name: 'Vow of Mercy',
      cost: {
        actionPoints: 0,
        mana: 0,
        hpSacrifice: '0% HP'
      },
      description: 'The Martyr declares a vow – an oath to protect. While the vow is active, the Martyr cannot voluntarily heal; instead, whenever the Martyr would be healed, they gain +1 Conviction Point.',
      mechanics: 'Declare a Vow of Mercy, choosing one of several predefined vows (e.g., "No ally will die under my watch"). While the vow is active, you cannot voluntarily heal, but you gain Conviction Points whenever you would be healed. You can spend Conviction Points to fulfill the vow.',
      effects: [
        { condition: 'Active Vow', effect: 'Cannot voluntarily heal. Gain 1 Conviction Point whenever you would be healed.' },
        { condition: 'Vow Fulfillment', effect: 'Spend Conviction Points to trigger powerful effects based on the chosen vow.' },
        { condition: 'Below 50% HP', effect: 'Gain 2 Conviction Points instead of 1 when you would be healed.' },
        { condition: 'With Pain Charges', effect: 'Spend 3 Pain Charges to immediately gain 3 Conviction Points.' }
      ],
      scaling: 'Conviction Point effects scale with WIS modifier and CON modifier'
    },
    {
      name: 'Sacrificial Barrier',
      cost: {
        actionPoints: 1,
        mana: 1,
        hpSacrifice: '10% HP'
      },
      description: 'Create a barrier of holy energy that absorbs damage for all allies within it.',
      mechanics: 'Sacrifice 10% of your maximum HP to create a 10-foot radius barrier centered on you that lasts for 2 turns. Allies within the barrier (including you) reduce all damage taken by an amount equal to the HP sacrificed.',
      effects: [
        { condition: 'Normal Cast', effect: 'Reduce damage taken by allies by the amount of HP sacrificed.' },
        { condition: 'Below 50% HP', effect: 'Barrier radius increased to 20 feet.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to extend the barrier\'s duration by 2 turns.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Protection Vow, the barrier also grants +1 to all saving throws.' }
      ],
      scaling: 'Damage reduction = HP sacrificed + CON modifier'
    },
    {
      name: 'Blood Tithe',
      cost: {
        actionPoints: 1,
        mana: 1,
        hpSacrifice: '5% HP per ally'
      },
      description: 'The Martyr sacrifices their own vitality to empower their allies.',
      mechanics: 'Sacrifice 5% of your maximum HP per ally within 30 feet. Each affected ally gains a bonus to attack rolls, damage rolls, and saving throws equal to half the HP you sacrificed for them.',
      effects: [
        { condition: 'Normal Cast', effect: 'Allies gain bonuses equal to half the HP sacrificed for them.' },
        { condition: 'Below 50% HP', effect: 'Bonuses increased to equal the full HP sacrificed.' },
        { condition: 'With Pain Charges', effect: 'Spend 1 Pain Charge per ally to double the duration of the effect.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Mercy Vow, allies also gain temporary HP equal to your WIS modifier.' }
      ],
      scaling: 'Ally bonuses = (HP sacrificed / 2) + WIS modifier'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Martyr\'s Requiem',
      cost: {
        actionPoints: 3,
        mana: 5,
        hpSacrifice: '50% HP'
      },
      description: 'A grand ritual. The Martyr sacrifices half their maximum HP. All enemies within a large radius take damage equal to twice the HP lost, and all allies in range are healed by that total amount.',
      mechanics: 'Sacrifice 50% of your maximum HP to create a massive burst of holy energy. All enemies within 60 feet take damage equal to twice the HP sacrificed, and all allies within the same radius are healed by the same amount. After casting, you are reduced to 1 HP.',
      effects: [
        { condition: 'Normal Cast', effect: 'Enemies take damage equal to twice the HP sacrificed, allies are healed by the same amount, and you are reduced to 1 HP.' },
        { condition: 'With Pain Charges', effect: 'Spend 5 Pain Charges to increase the damage and healing to three times the HP sacrificed.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Vengeance Vow, enemies also suffer a -5 penalty to attack rolls for 1 turn.' },
        { condition: 'Recovery', effect: 'You must spend a short rest to recover fully after using this ability.' }
      ],
      requirements: 'Must have at least 50% of maximum HP to cast.',
      scaling: 'Damage/Healing = (2 × HP sacrificed) + (WIS modifier × 5)'
    },
    {
      name: 'Vow of Martyrdom',
      cost: {
        actionPoints: 2,
        mana: 2,
        hpSacrifice: 'All Current HP'
      },
      description: 'The Martyr puts forth a last stand. They immediately pay all of their current HP (dropping to 1 HP). If at the moment of paying they would have taken lethal damage, instead they survive with 1 HP and unleash final vengeance.',
      mechanics: 'Sacrifice all of your current HP, dropping to 1 HP. If you would have taken lethal damage at the moment of casting, you instead survive with 1 HP and unleash a powerful counterattack against all enemies in range, while fully healing all nearby allies.',
      effects: [
        { condition: 'Normal Cast', effect: 'Sacrifice all current HP, dropping to 1 HP.' },
        { condition: 'On Lethal Damage', effect: 'Survive with 1 HP, deal heavy holy damage to all enemies within 30 feet, and fully heal all allies within the same radius.' },
        { condition: 'With Pain Charges', effect: 'Spend all Pain Charges to increase the damage dealt by 10% per Pain Charge spent.' },
        { condition: 'With Blood Vow', effect: 'If you have any active Blood Vows, they are all fulfilled at once, triggering their effects.' }
      ],
      requirements: 'Can only be used once per long rest.',
      scaling: 'Damage = (HP sacrificed) + (WIS modifier × 5) + (CON modifier × 5)'
    },
    {
      name: 'Painful Communion',
      cost: {
        actionPoints: 3,
        mana: 4,
        hpSacrifice: 'Ongoing'
      },
      description: 'For 3 turns, the Martyr enters a tortured trance. Each time they take damage, they immediately emit a shockwave: every enemy within 20 feet takes damage equal to 100% of the damage the Martyr just suffered.',
      mechanics: 'Enter a tortured trance for 3 turns. During this time, whenever you take damage, all enemies within 20 feet take damage equal to 100% of the damage you took. At the end of the effect, all damage you took during the trance is healed to all allies within 30 feet, divided equally.',
      effects: [
        { condition: 'During Trance', effect: 'Enemies take damage equal to 100% of the damage you take.' },
        { condition: 'End of Trance', effect: 'All damage you took during the trance is healed to all allies within 30 feet, divided equally.' },
        { condition: 'With Pain Charges', effect: 'Spend 3 Pain Charges to increase the damage reflection to 150% of the damage you take.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Vengeance Vow, the trance duration is extended by 2 turns.' }
      ],
      requirements: 'Can only be used once per short rest.',
      scaling: 'Reflected damage = (damage taken) + (WIS modifier)'
    },
    {
      name: 'Crimson Covenant',
      cost: {
        actionPoints: 2,
        mana: 3,
        hpSacrifice: '25% HP'
      },
      description: 'The Martyr marks a target enemy and makes a blood pact. For the next 2 rounds, any damage the Martyr takes is also inflicted upon the marked enemy.',
      mechanics: 'Sacrifice 25% of your maximum HP to mark a target enemy and create a blood pact. For the next 2 rounds, any damage you take is also inflicted upon the marked enemy. Additionally, at the end of each round, the marked enemy bleeds out HP equal to 5% of your maximum HP.',
      effects: [
        { condition: 'During Pact', effect: 'Marked enemy takes 100% of the damage you take.' },
        { condition: 'End of Round', effect: 'Marked enemy bleeds for 5% of your maximum HP.' },
        { condition: 'Below 50% HP', effect: 'Bleeding damage increased to 10% of your maximum HP.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to extend the pact by 1 round.' }
      ],
      requirements: 'Target must be within 60 feet and visible.',
      scaling: 'Bleeding damage = (5% of max HP) + (WIS modifier)'
    },
    {
      name: 'Consecrated Pyre',
      cost: {
        actionPoints: 3,
        mana: 5,
        hpSacrifice: '30% HP'
      },
      description: 'The Martyr conjures a consecrated flame beneath themselves. For the next 2 turns, the Martyr cannot move or act normally, but each time they would take damage, they instead convert it into a blazing aura.',
      mechanics: 'Sacrifice 30% of your maximum HP to conjure a consecrated flame beneath yourself. For the next 2 turns, you cannot move or take normal actions, but whenever you would take damage, you convert it into a blazing aura that deals damage to all enemies within 10 feet equal to 150% of the damage you would have taken. At the end of the 2 turns, you collapse and lose the remaining sacrificed HP, but all enemies in the area suffer a massive burst of fire and drop to 1 HP if they haven\'t been slain.',
      effects: [
        { condition: 'During Pyre', effect: 'Cannot move or act normally. Convert incoming damage into a blazing aura that deals 150% of that damage to all enemies within 10 feet.' },
        { condition: 'End of Pyre', effect: 'Collapse and lose the remaining sacrificed HP. All enemies in the area suffer a massive burst of fire and drop to 1 HP if they haven\'t been slain.' },
        { condition: 'With Pain Charges', effect: 'Spend 3 Pain Charges to increase the aura radius to 20 feet.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Vengeance Vow, the final burst also stuns affected enemies for 1 turn.' }
      ],
      requirements: 'Can only be used once per long rest.',
      scaling: 'Aura damage = (150% of incoming damage) + (WIS modifier × 2)'
    },
    {
      name: 'Divine Intervention',
      cost: {
        actionPoints: 3,
        mana: 6,
        hpSacrifice: '40% HP'
      },
      description: 'The Martyr channels divine power to perform a miracle, saving allies from certain death.',
      mechanics: 'Sacrifice 40% of your maximum HP to channel divine power. All allies within 30 feet who are at 0 HP are immediately stabilized and restored to 50% of their maximum HP. Additionally, all allies within the same radius gain a blessing that prevents them from dropping below 1 HP for the next 3 turns.',
      effects: [
        { condition: 'Normal Cast', effect: 'Allies at 0 HP are stabilized and restored to 50% of their maximum HP. All allies gain a blessing that prevents them from dropping below 1 HP for 3 turns.' },
        { condition: 'Below 25% HP', effect: 'Allies are restored to 75% of their maximum HP instead of 50%.' },
        { condition: 'With Pain Charges', effect: 'Spend 4 Pain Charges to extend the blessing duration to 5 turns.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Mercy Vow, affected allies also gain immunity to critical hits for the duration of the blessing.' }
      ],
      requirements: 'Can only be used once per long rest.',
      scaling: 'Healing = (50% of ally\'s max HP) + (WIS modifier × 3)'
    },
    {
      name: 'Sacrificial Empowerment',
      cost: {
        actionPoints: 2,
        mana: 4,
        hpSacrifice: '20% HP'
      },
      description: 'The Martyr sacrifices their own vitality to empower an ally\'s abilities.',
      mechanics: 'Sacrifice 20% of your maximum HP to empower a single ally within 30 feet. For the next 3 turns, the ally\'s attacks deal additional holy damage equal to half the HP you sacrificed, and their healing abilities are 50% more effective.',
      effects: [
        { condition: 'Normal Cast', effect: 'Ally\'s attacks deal additional holy damage equal to half the HP sacrificed, and their healing abilities are 50% more effective.' },
        { condition: 'Below 50% HP', effect: 'Ally\'s attacks deal additional holy damage equal to the full HP sacrificed.' },
        { condition: 'With Pain Charges', effect: 'Spend 2 Pain Charges to affect an additional ally.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Protection Vow on the ally, they also gain damage resistance equal to your WIS modifier.' }
      ],
      requirements: 'Target must be a willing ally within 30 feet.',
      scaling: 'Additional damage = (HP sacrificed / 2) + (WIS modifier × 2)'
    },
    {
      name: 'Martyr\'s Resurrection',
      cost: {
        actionPoints: 4,
        mana: 8,
        hpSacrifice: '75% HP'
      },
      description: 'The ultimate sacrifice. The Martyr gives their life force to resurrect a fallen ally.',
      mechanics: 'Sacrifice 75% of your maximum HP to resurrect a fallen ally who has died within the last minute. The ally returns to life with full HP and is immune to damage for 1 turn. You are reduced to 1 HP and cannot be healed by any means for 1 minute.',
      effects: [
        { condition: 'Normal Cast', effect: 'Resurrect a fallen ally with full HP. They are immune to damage for 1 turn. You are reduced to 1 HP and cannot be healed for 1 minute.' },
        { condition: 'With Pain Charges', effect: 'Spend all Pain Charges to reduce the time you cannot be healed by 10 seconds per Pain Charge spent.' },
        { condition: 'With Blood Vow', effect: 'If you have an active Mercy Vow on the ally, they also gain advantage on all rolls for 1 minute.' },
        { condition: 'Recovery', effect: 'You must spend a long rest to recover fully after using this ability.' }
      ],
      requirements: 'Can only be used once per long rest. Target must have died within the last minute.',
      scaling: 'N/A - Effect is fixed'
    }
  ]
};

export default martyrAbilities;
