// Talent trees for the Martyr class
const martyrTalentTrees = [
  {
    id: 'redemption',
    name: 'Redemption',
    description: 'Focus on protecting and healing allies at any cost, channeling pain into care.',
    icon: 'R',
    talents: [
      // Tier 1 (Level 10) - Cross/Plus-shaped layout
      {
        id: 'blood-offering',
        name: 'Blood Offering',
        description: 'Sacrifice 1d6 hit points to heal an ally for 2d6 hit points.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: 'B',
        rankDescription: [
          'Sacrifice 1d6 hit points to heal an ally for 2d6 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+1 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+2 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+3 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d8 hit points.'
        ]
      },

      // Tier 2 (Level 20) - Cross/Plus-shaped layout
      {
        id: 'martyrs-endurance',
        name: 'Martyr\'s Endurance',
        description: 'Increase your maximum hit points by 1d4 per level.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Below center
        requires: ['blood-offering'],
        icon: '❤️',
        rankDescription: [
          'Increase your maximum hit points by 1d4 per level.',
          'Increase your maximum hit points by 1d6 per level.',
          'Increase your maximum hit points by 1d8 per level.'
        ]
      },
      {
        id: 'life-transfer',
        name: 'Life Transfer',
        description: 'As an action, sacrifice 2d6 hit points to heal an ally for 3d6 hit points.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left of center
        requires: ['blood-offering'],
        icon: '🔄',
        rankDescription: [
          'As an action, sacrifice 2d6 hit points to heal an ally for 3d6 hit points.',
          'As an action, sacrifice 2d6 hit points to heal an ally for 3d6+2 hit points.',
          'As an action, sacrifice 2d6 hit points to heal an ally for 4d6 hit points.'
        ]
      },
      {
        id: 'faithful-resolve',
        name: 'Faithful Resolve',
        description: 'When you use a sacrifice ability, roll 1d20. On a 19-20, the hit point cost is refunded.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right of center
        requires: ['blood-offering'],
        icon: '✝️',
        rankDescription: [
          'When you use a sacrifice ability, roll 1d20. On a 19-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On an 18-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On a 17-20, the hit point cost is refunded.'
        ]
      },
      {
        id: 'pain-suppression',
        name: 'Pain Suppression',
        description: 'When you sacrifice hit points, roll 1d6. Reduce the damage taken by this amount.',
        maxRank: 3,
        position: { row: 0, col: 1 }, // Upper left diagonal
        requires: ['blood-offering'],
        icon: '😌',
        rankDescription: [
          'When you sacrifice hit points, roll 1d6. Reduce the damage taken by this amount.',
          'When you sacrifice hit points, roll 1d8. Reduce the damage taken by this amount.',
          'When you sacrifice hit points, roll 1d10. Reduce the damage taken by this amount.'
        ]
      },
      {
        id: 'redemptive-suffering',
        name: 'Redemptive Suffering',
        description: 'When you take damage, gain a stack of Redemption. Each stack increases your healing power by 1d4.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Upper right diagonal
        requires: ['blood-offering'],
        icon: '📈',
        rankDescription: [
          'When you take damage, gain a stack of Redemption. Each stack increases your healing power by 1d4.',
          'When you take damage, gain a stack of Redemption. Each stack increases your healing power by 1d6.',
          'When you take damage, gain a stack of Redemption. Each stack increases your healing power by 1d8.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'sacrificial-barrier',
        name: 'Sacrificial Barrier',
        description: 'Sacrifice 3d6 hit points to create a barrier around an ally that absorbs 4d8 damage.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Lower left diagonal
        requires: ['life-transfer', 'pain-suppression'],
        icon: '🛡️',
        rankDescription: [
          'Sacrifice 3d6 hit points to create a barrier around an ally that absorbs 4d8 damage.',
          'Sacrifice 3d6 hit points to create a barrier around an ally that absorbs 5d8 damage.',
          'Sacrifice 3d6 hit points to create a barrier around an ally that absorbs 6d8 damage.'
        ]
      },
      {
        id: 'martyrs-blessing',
        name: 'Martyr\'s Blessing',
        description: 'Sacrifice 2d8 hit points to increase an ally\'s damage by 1d6 for 1d4+1 rounds.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Lower right diagonal
        requires: ['faithful-resolve', 'redemptive-suffering'],
        icon: '✨',
        rankDescription: [
          'Sacrifice 2d8 hit points to increase an ally\'s damage by 1d6 for 1d4+1 rounds.',
          'Sacrifice 2d8 hit points to increase an ally\'s damage by 1d8 for 1d4+1 rounds.',
          'Sacrifice 2d8 hit points to increase an ally\'s damage by 1d10 for 1d4+2 rounds.'
        ]
      },
      {
        id: 'shared-pain',
        name: 'Shared Pain',
        description: 'When an ally within 30 feet takes damage, you can use your reaction to take half the damage instead.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center of cross
        requires: ['martyrs-endurance'],
        icon: '💔',
      },

      // Tier 4 (Level 40)
      {
        id: 'life-bond',
        name: 'Life Bond',
        description: 'Create a bond with an ally, transferring 1d6 × 10% of the damage they take to you.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Lower left
        requires: ['sacrificial-barrier'],
        icon: '🔗',
        rankDescription: [
          'Create a bond with an ally, transferring 1d6 × 10% of the damage they take to you.',
          'Create a bond with an ally, transferring 1d8 × 10% of the damage they take to you.',
          'Create a bond with an ally, transferring 1d10 × 10% of the damage they take to you.'
        ]
      },
      {
        id: 'vicarious-atonement',
        name: 'Vicarious Atonement',
        description: 'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 2d12.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Lower right
        requires: ['martyrs-blessing'],
        icon: '🙏',
        rankDescription: [
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 2d12.',
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 3d12.',
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 4d12.'
        ]
      },
      {
        id: 'healing-stigmata',
        name: 'Healing Stigmata',
        description: 'Create persistent wounds on yourself that continuously heal nearby allies.',
        maxRank: 1,
        position: { row: 3, col: 2 }, // Center bottom
        requires: ['shared-pain'],
        icon: '✝️',
      },

      // Tier 5 (Level 50)
      {
        id: 'ultimate-sacrifice',
        name: 'Ultimate Sacrifice',
        description: 'Sacrifice half your current hit points to fully heal all allies within 30 feet and grant them immunity to damage for 1d4 rounds.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Bottom center
        requires: ['life-bond', 'healing-stigmata', 'vicarious-atonement'],
        icon: '💫',
      },

      // Tier 6 (Level 60)
      {
        id: 'divine-intervention',
        name: 'Divine Intervention',
        description: 'When an ally would be reduced to 0 hit points, you can use your reaction to prevent the damage and take it yourself. You gain resistance to this damage.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Bottom left
        requires: ['ultimate-sacrifice'],
        icon: '👼',
      },
      {
        id: 'martyrs-resurrection',
        name: 'Martyr\'s Resurrection',
        description: 'Sacrifice 75% of your maximum hit points to resurrect a fallen ally with full health.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Bottom right
        requires: ['ultimate-sacrifice'],
        icon: '🌅',
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-sacrifice',
        name: 'Avatar of Sacrifice',
        description: 'Become an avatar of self-sacrifice, embodying the very essence of redemption.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Bottom center
        requires: ['divine-intervention', 'martyrs-resurrection'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Sacrifice. During this time, all healing you perform is doubled, you take no damage from your sacrifice abilities, and when an ally within 60 feet would take damage, you can use your reaction to take the damage instead without using your normal reaction. Additionally, you gain 1d6 temporary hit points at the start of each of your turns.'
        ]
      },
    ],
  },
  {
    id: 'flagellation',
    name: 'Flagellation',
    description: 'Maximize personal pain for destructive power, converting agony into raw damage output.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10) - V-shaped layout (wide at top)
      {
        id: 'pain-to-power',
        name: 'Pain to Power',
        description: 'Convert damage taken into bonus damage on your next attack.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Far left
        icon: '⚡',
        rankDescription: [
          'When you take damage, gain bonus damage equal to 1d4 on your next attack.',
          'When you take damage, gain bonus damage equal to 1d6 on your next attack.',
          'When you take damage, gain bonus damage equal to 1d8 on your next attack.',
          'When you take damage, gain bonus damage equal to 1d10 on your next attack.',
          'When you take damage, gain bonus damage equal to 1d12 on your next attack.'
        ]
      },
      {
        id: 'blood-magic',
        name: 'Blood Magic',
        description: 'Cast spells using HP instead of mana, with increased effectiveness.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Left-center
        icon: '🩸',
        rankDescription: [
          'Sacrifice 1d6 hit points to increase the damage of your next spell by 1d4.',
          'Sacrifice 1d6 hit points to increase the damage of your next spell by 1d6.',
          'Sacrifice 1d8 hit points to increase the damage of your next spell by 1d8.',
          'Sacrifice 1d8 hit points to increase the damage of your next spell by 1d10.',
          'Sacrifice 1d10 hit points to increase the damage of your next spell by 1d12.'
        ]
      },
      {
        id: 'zealous-presence',
        name: 'Zealous Presence',
        description: 'Your pain inspires allies to fight harder.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Center
        icon: '👁️',
        rankDescription: [
          'When you lose 10% or more of your maximum hit points in a single turn, allies within 15 feet gain +1 to attack rolls for 1d4 rounds.',
          'When you lose 10% or more of your maximum hit points in a single turn, allies within 15 feet gain +1 to attack rolls and damage for 1d4 rounds.',
          'When you lose 10% or more of your maximum hit points in a single turn, allies within 20 feet gain +1 to attack rolls and damage for 1d4 rounds.',
          'When you lose 10% or more of your maximum hit points in a single turn, allies within 20 feet gain +2 to attack rolls and damage for 1d4 rounds.',
          'When you lose 10% or more of your maximum hit points in a single turn, allies within 30 feet gain +2 to attack rolls and damage for 1d6 rounds.'
        ]
      },
      {
        id: 'crimson-lash',
        name: 'Crimson Lash',
        description: 'Create weapons from your own blood that deal additional damage based on your Pain Charges.',
        maxRank: 5,
        position: { row: 0, col: 6 }, // Right-center
        icon: '🔪',
        rankDescription: [
          'Sacrifice 1d6 hit points to create a blood weapon that deals an additional 1d4 damage per Pain Charge for 1d4 rounds.',
          'Sacrifice 1d6 hit points to create a blood weapon that deals an additional 1d6 damage per Pain Charge for 1d4 rounds.',
          'Sacrifice 1d8 hit points to create a blood weapon that deals an additional 1d6 damage per Pain Charge for 1d6 rounds.',
          'Sacrifice 1d8 hit points to create a blood weapon that deals an additional 1d8 damage per Pain Charge for 1d6 rounds.',
          'Sacrifice 1d10 hit points to create a blood weapon that deals an additional 1d10 damage per Pain Charge for 1d8 rounds.'
        ]
      },
      {
        id: 'divine-resilience',
        name: 'Divine Resilience',
        description: 'Your faith grants you supernatural endurance.',
        maxRank: 5,
        position: { row: 0, col: 8 }, // Far right
        icon: '🧿',
        rankDescription: [
          'Reduce all damage you take by 1d4.',
          'Reduce all damage you take by 1d6.',
          'Reduce all damage you take by 1d8.',
          'Reduce all damage you take by 1d10.',
          'Reduce all damage you take by 1d12.'
        ]
      },

      // Tier 2 (Level 20) - V-shape narrows
      {
        id: 'smite',
        name: 'Smite',
        description: 'Channel divine energy to deal radiant damage to a target.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['pain-to-power'],
        icon: '⚔️',
        rankDescription: [
          'Sacrifice 1d6 hit points to deal 2d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.',
          'Sacrifice 1d8 hit points to deal 3d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.',
          'Sacrifice 1d10 hit points to deal 4d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.'
        ]
      },
      {
        id: 'blood-frenzy',
        name: 'Blood Frenzy',
        description: 'Enter a state of frenzy, dealing more damage as your health decreases.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['blood-magic', 'zealous-presence'],
        icon: '🔥',
        rankDescription: [
          'For 1d4 rounds, gain +1 to attack and damage rolls for each 10% of your maximum hit points you are missing.',
          'For 1d4+1 rounds, gain +1 to attack and damage rolls for each 10% of your maximum hit points you are missing.',
          'For 1d6 rounds, gain +1 to attack and damage rolls for each 10% of your maximum hit points you are missing.'
        ]
      },
      {
        id: 'blood-shield',
        name: 'Blood Shield',
        description: 'Create a shield of hardened blood that absorbs damage.',
        maxRank: 3,
        position: { row: 1, col: 5 },
        requires: ['zealous-presence', 'crimson-lash'],
        icon: '🛡️',
        rankDescription: [
          'Sacrifice 2d6 hit points to create a shield that absorbs 3d8 damage.',
          'Sacrifice 2d6 hit points to create a shield that absorbs 4d8 damage.',
          'Sacrifice 2d6 hit points to create a shield that absorbs 5d8 damage.'
        ]
      },
      {
        id: 'pain-reflection',
        name: 'Pain Reflection',
        description: 'Reflect a portion of damage taken back to attackers.',
        maxRank: 3,
        position: { row: 1, col: 7 },
        requires: ['divine-resilience'],
        icon: '↩️',
        rankDescription: [
          'When you take damage, the attacker takes damage equal to 1d6 + your Pain Charges.',
          'When you take damage, the attacker takes damage equal to 1d8 + your Pain Charges.',
          'When you take damage, the attacker takes damage equal to 1d10 + your Pain Charges.'
        ]
      },

      // Tier 3 (Level 30) - V-shape continues to narrow
      {
        id: 'holy-strike',
        name: 'Holy Strike',
        description: 'Your attacks ignore resistance to non-magical damage and deal additional radiant damage.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['smite', 'blood-frenzy'],
        icon: '✨',
        rankDescription: [
          'Your attacks ignore resistance to non-magical damage and deal an additional 1d6 radiant damage to undead and fiends.',
          'Your attacks ignore resistance to non-magical damage and deal an additional 1d8 radiant damage to undead and fiends.',
          'Your attacks ignore resistance to non-magical damage and deal an additional 1d10 radiant damage to undead and fiends.'
        ]
      },
      {
        id: 'stigmata',
        name: 'Stigmata',
        description: 'Create wounds on yourself that continuously empower your attacks.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['blood-frenzy', 'blood-shield'],
        icon: '✝️',
        rankDescription: [
          'Create wounds that deal 1d4 damage to you at the start of each turn but increase your damage by 1d6 for that turn.',
          'Create wounds that deal 1d4 damage to you at the start of each turn but increase your damage by 1d8 for that turn.',
          'Create wounds that deal 1d4 damage to you at the start of each turn but increase your damage by 1d10 for that turn.'
        ]
      },
      {
        id: 'divine-aegis',
        name: 'Divine Aegis',
        description: 'Create a shield of divine energy that absorbs damage and empowers attacks.',
        maxRank: 3,
        position: { row: 2, col: 6 },
        requires: ['blood-shield', 'pain-reflection'],
        icon: '🛡️',
        rankDescription: [
          'Sacrifice 2d8 hit points to create a shield that absorbs 3d10 damage. While the shield is active, your attacks deal an additional 1d6 radiant damage.',
          'Sacrifice 2d8 hit points to create a shield that absorbs 4d10 damage. While the shield is active, your attacks deal an additional 1d8 radiant damage.',
          'Sacrifice 2d8 hit points to create a shield that absorbs 5d10 damage. While the shield is active, your attacks deal an additional 1d10 radiant damage.'
        ]
      },

      // Tier 4 (Level 40) - V-shape narrows further
      {
        id: 'divine-retribution',
        name: 'Divine Retribution',
        description: 'When you take damage, the attacker suffers divine punishment.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['holy-strike', 'stigmata'],
        icon: '⚖️',
        rankDescription: [
          'When you take damage, the attacker takes 2d6 radiant damage. Roll 1d20; on a 18-20, the attacker is also blinded for 1 round.',
          'When you take damage, the attacker takes 2d8 radiant damage. Roll 1d20; on a 17-20, the attacker is also blinded for 1 round.',
          'When you take damage, the attacker takes 2d10 radiant damage. Roll 1d20; on a 16-20, the attacker is also blinded for 1 round.'
        ]
      },
      {
        id: 'blood-sacrifice',
        name: 'Blood Sacrifice',
        description: 'Sacrifice your blood to empower allies.',
        maxRank: 3,
        position: { row: 3, col: 5 },
        requires: ['stigmata', 'divine-aegis'],
        icon: '💉',
        rankDescription: [
          'Sacrifice 3d6 hit points to grant all allies within 30 feet a bonus to damage equal to 1d6 + your Pain Charges for 1d4 rounds.',
          'Sacrifice 3d6 hit points to grant all allies within 30 feet a bonus to damage equal to 1d8 + your Pain Charges for 1d4 rounds.',
          'Sacrifice 3d6 hit points to grant all allies within 30 feet a bonus to damage equal to 1d10 + your Pain Charges for 1d6 rounds.'
        ]
      },

      // Tier 5 (Level 50) - V-shape continues to narrow
      {
        id: 'martyrs-fury',
        name: 'Martyr\'s Fury',
        description: 'Channel your pain into a devastating attack.',
        maxRank: 1,
        position: { row: 4, col: 4 },
        requires: ['divine-retribution', 'blood-sacrifice'],
        icon: '💥',
      },

      // Tier 6 (Level 60) - V-shape point
      {
        id: 'bloodstorm',
        name: 'Bloodstorm',
        description: 'Sacrifice a large portion of your hit points to deal massive damage to all enemies in a large area.',
        maxRank: 1,
        position: { row: 5, col: 4 },
        requires: ['martyrs-fury'],
        icon: '🌪️',
      },

      // Tier 7 (Level 70) - Final capstone
      {
        id: 'avatar-of-pain',
        name: 'Avatar of Pain',
        description: 'Become an avatar of suffering, embodying the very essence of martyrdom.',
        maxRank: 1,
        position: { row: 6, col: 4 },
        requires: ['bloodstorm'],
        icon: 'A',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Pain. During this time, you gain 1 Pain Charge at the start of each of your turns, all damage you deal is increased by 1d10 per Pain Charge you possess, and whenever you take damage, all enemies within 30 feet take damage equal to half the damage you took. Additionally, you gain resistance to all damage, but cannot be healed by any means.'
        ]
      },
    ],
  },
  {
    id: 'judgment',
    name: 'Judgment',
    description: 'Focus on punishing enemies and retaliatory justice, making foes suffer whenever the Martyr suffers.',
    icon: '⚖️',
    talents: [
      // Tier 1 (Level 10) - Diamond/Rhombus shape starts narrow
      {
        id: 'retribution',
        name: 'Retribution',
        description: 'When damaged, automatically deal a portion of that damage back to the attacker.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Center position
        icon: '⚖️',
        rankDescription: [
          'When you take damage, the attacker takes damage equal to 1d4.',
          'When you take damage, the attacker takes damage equal to 1d6.',
          'When you take damage, the attacker takes damage equal to 1d8.',
          'When you take damage, the attacker takes damage equal to 1d10.',
          'When you take damage, the attacker takes damage equal to 1d12.'
        ]
      },

      // Tier 2 (Level 20) - Diamond/Rhombus shape expands
      {
        id: 'righteous-fury',
        name: 'Righteous Fury',
        description: 'Your attacks deal additional damage based on how much health you\'ve lost.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Left of center
        requires: ['retribution'],
        icon: '⚔️',
        rankDescription: [
          'Your attacks deal additional damage equal to 1d4 × (percentage of missing health / 25).',
          'Your attacks deal additional damage equal to 1d6 × (percentage of missing health / 25).',
          'Your attacks deal additional damage equal to 1d8 × (percentage of missing health / 25).'
        ]
      },
      {
        id: 'divine-vengeance',
        name: 'Divine Vengeance',
        description: 'When you take damage, you can use your reaction to strike back at your attacker.',
        maxRank: 3,
        position: { row: 1, col: 5 }, // Right of center
        requires: ['retribution'],
        icon: '⚡',
        rankDescription: [
          'When you take damage, you can use your reaction to make a weapon attack against the attacker with advantage.',
          'When you take damage, you can use your reaction to make a weapon attack against the attacker with advantage. This attack deals an additional 1d6 radiant damage.',
          'When you take damage, you can use your reaction to make a weapon attack against the attacker with advantage. This attack deals an additional 1d8 radiant damage and the target must make a Constitution saving throw or be stunned until the end of your next turn.'
        ]
      },

      // Tier 3 (Level 30) - Diamond/Rhombus shape expands further
      {
        id: 'blood-oath',
        name: 'Blood Oath',
        description: 'Mark an enemy with a vow of vengeance. Any damage you take from them is reflected back doubled.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Far left
        requires: ['righteous-fury'],
        icon: '🩸',
        rankDescription: [
          'Mark an enemy for 1d4 rounds. Any damage you take from them is reflected back at 50% value.',
          'Mark an enemy for 1d4 rounds. Any damage you take from them is reflected back at 100% value.',
          'Mark an enemy for 1d6 rounds. Any damage you take from them is reflected back at 150% value.'
        ]
      },
      {
        id: 'martyrs-wrath',
        name: 'Martyr\'s Wrath',
        description: 'Channel your pain into a devastating attack that scales with your missing health.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Center
        requires: ['righteous-fury', 'divine-vengeance'],
        icon: '🔥',
        rankDescription: [
          'As an action, make an attack that deals additional damage equal to 2d6 × (percentage of missing health / 25).',
          'As an action, make an attack that deals additional damage equal to 2d8 × (percentage of missing health / 25).',
          'As an action, make an attack that deals additional damage equal to 2d10 × (percentage of missing health / 25).'
        ]
      },
      {
        id: 'sacrificial-bond',
        name: 'Sacrificial Bond',
        description: 'Link yourself to an enemy so that they take a portion of all damage dealt to you by any source.',
        maxRank: 3,
        position: { row: 2, col: 6 }, // Far right
        requires: ['divine-vengeance'],
        icon: '🔗',
        rankDescription: [
          'Link yourself to an enemy within 30 feet for 1d4 rounds. They take 50% of all damage dealt to you by any source.',
          'Link yourself to an enemy within 30 feet for 1d4 rounds. They take 75% of all damage dealt to you by any source.',
          'Link yourself to an enemy within 30 feet for 1d6 rounds. They take 100% of all damage dealt to you by any source.'
        ]
      },

      // Tier 4 (Level 40) - Diamond/Rhombus shape at maximum width
      {
        id: 'pain-link',
        name: 'Pain Link',
        description: 'Create a bond between yourself and multiple enemies, sharing your pain with them.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Furthest left
        requires: ['blood-oath'],
        icon: '⛓️',
        rankDescription: [
          'Link yourself to up to 2 enemies within 30 feet for 1d4 rounds. They take 25% of all damage dealt to you by any source.',
          'Link yourself to up to 3 enemies within 30 feet for 1d4 rounds. They take 25% of all damage dealt to you by any source.',
          'Link yourself to up to 3 enemies within 30 feet for 1d6 rounds. They take 50% of all damage dealt to you by any source.'
        ]
      },
      {
        id: 'judgment-strike',
        name: 'Judgment Strike',
        description: 'Your attacks mark enemies for divine judgment, causing them to take additional damage when they harm you.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Left-center
        requires: ['blood-oath', 'martyrs-wrath'],
        icon: '⚖️',
        rankDescription: [
          'Your attacks mark enemies for 1d4 rounds. Marked enemies take an additional 1d6 radiant damage when they damage you.',
          'Your attacks mark enemies for 1d4 rounds. Marked enemies take an additional 1d8 radiant damage when they damage you.',
          'Your attacks mark enemies for 1d6 rounds. Marked enemies take an additional 1d10 radiant damage when they damage you.'
        ]
      },
      {
        id: 'divine-retribution',
        name: 'Divine Retribution',
        description: 'When you take damage, nearby enemies suffer divine punishment.',
        maxRank: 3,
        position: { row: 3, col: 5 }, // Right-center
        requires: ['martyrs-wrath', 'sacrificial-bond'],
        icon: '✝️',
        rankDescription: [
          'When you take damage, all enemies within 10 feet take radiant damage equal to 1d6 + your Pain Charges.',
          'When you take damage, all enemies within 15 feet take radiant damage equal to 1d8 + your Pain Charges.',
          'When you take damage, all enemies within 20 feet take radiant damage equal to 1d10 + your Pain Charges.'
        ]
      },
      {
        id: 'vengeance-aura',
        name: 'Vengeance Aura',
        description: 'Create an aura of vengeance that damages enemies who attack you or your allies.',
        maxRank: 3,
        position: { row: 3, col: 7 }, // Furthest right
        requires: ['sacrificial-bond'],
        icon: '🌟',
        rankDescription: [
          'Create an aura with a 10-foot radius for 1d4 rounds. Enemies who attack you or your allies within the aura take 1d6 radiant damage.',
          'Create an aura with a 15-foot radius for 1d4 rounds. Enemies who attack you or your allies within the aura take 1d8 radiant damage.',
          'Create an aura with a 20-foot radius for 1d6 rounds. Enemies who attack you or your allies within the aura take 1d10 radiant damage.'
        ]
      },

      // Tier 5 (Level 50) - Diamond/Rhombus shape begins to narrow
      {
        id: 'martyrs-chain',
        name: 'Martyr\'s Chain',
        description: 'Create a chain of suffering that links multiple enemies to your pain.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Left
        requires: ['pain-link', 'judgment-strike'],
        icon: '⛓️',
      },
      {
        id: 'divine-punishment',
        name: 'Divine Punishment',
        description: 'Channel divine energy to punish all enemies who have harmed you.',
        maxRank: 1,
        position: { row: 4, col: 4 }, // Center
        requires: ['judgment-strike', 'divine-retribution'],
        icon: '⚡',
      },
      {
        id: 'aura-of-retribution',
        name: 'Aura of Retribution',
        description: 'Create an aura that automatically reflects damage back to attackers.',
        maxRank: 1,
        position: { row: 4, col: 6 }, // Right
        requires: ['divine-retribution', 'vengeance-aura'],
        icon: '🔄',
      },

      // Tier 6 (Level 60) - Diamond/Rhombus shape narrows further
      {
        id: 'chains-of-judgment',
        name: 'Chains of Judgment',
        description: 'Create magical chains that bind enemies to your will, forcing them to share in your suffering.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Left
        requires: ['martyrs-chain', 'divine-punishment'],
        icon: '⛓️',
      },
      {
        id: 'divine-vengeance',
        name: 'Divine Vengeance',
        description: 'For 1d4 rounds, all damage dealt to you is fully reflected back to attackers while healing nearby allies.',
        maxRank: 1,
        position: { row: 5, col: 5 }, // Right
        requires: ['divine-punishment', 'aura-of-retribution'],
        icon: '👼',
      },

      // Tier 7 (Level 70) - Diamond/Rhombus shape ends in a point
      {
        id: 'avatar-of-judgment',
        name: 'Avatar of Judgment',
        description: 'Become an avatar of divine judgment, embodying the very essence of retribution.',
        maxRank: 1,
        position: { row: 6, col: 4 }, // Center
        requires: ['chains-of-judgment', 'divine-vengeance'],
        icon: '🎭',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Judgment. During this time, all damage you take is automatically reflected back to the attacker at 200% value, you gain 1 Pain Charge whenever you take damage, and enemies who damage you are marked with divine judgment. Marked enemies take 1d12 radiant damage at the start of each of their turns and have disadvantage on attack rolls against you and your allies. Additionally, your attacks deal an extra 2d10 radiant damage and ignore resistance to radiant damage.'
        ]
      },
    ],
  }
];

export default martyrTalentTrees;
