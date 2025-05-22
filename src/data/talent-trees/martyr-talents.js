// Talent trees for the Martyr class
const martyrTalentTrees = [
  {
    id: 'sacrifice',
    name: 'Sacrifice',
    description: 'Channel your own life force to heal and protect allies.',
    icon: '💉',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'blood-offering',
        name: 'Blood Offering',
        description: 'Sacrifice 1d6 hit points to heal an ally for 2d6 hit points.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🩸',
        rankDescription: [
          'Sacrifice 1d6 hit points to heal an ally for 2d6 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+1 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+2 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d6+3 hit points.',
          'Sacrifice 1d6 hit points to heal an ally for 2d8 hit points.'
        ]
      },
      {
        id: 'martyrs-endurance',
        name: 'Martyr\'s Endurance',
        description: 'Increase your maximum hit points by 1d4 per level.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '❤️',
        rankDescription: [
          'Increase your maximum hit points by 1d4 per level.',
          'Increase your maximum hit points by 1d4+1 per level.',
          'Increase your maximum hit points by 1d6 per level.',
          'Increase your maximum hit points by 1d6+1 per level.',
          'Increase your maximum hit points by 1d8 per level.'
        ]
      },
      {
        id: 'faithful-resolve',
        name: 'Faithful Resolve',
        description: 'When you use a sacrifice ability, roll 1d20. On a 19-20, the hit point cost is refunded.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✝️',
        rankDescription: [
          'When you use a sacrifice ability, roll 1d20. On a 19-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On an 18-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On a 17-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On a 16-20, the hit point cost is refunded.',
          'When you use a sacrifice ability, roll 1d20. On a 15-20, the hit point cost is refunded.'
        ]
      },
      
      // Tier 2 (Level 20)
      {
        id: 'life-transfer',
        name: 'Life Transfer',
        description: 'As an action, sacrifice 2d6 hit points to heal an ally for 3d6 hit points.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['blood-offering'],
        icon: '🔄',
        rankDescription: [
          'As an action, sacrifice 2d6 hit points to heal an ally for 3d6 hit points.',
          'As an action, sacrifice 2d6 hit points to heal an ally for 3d6+2 hit points.',
          'As an action, sacrifice 2d6 hit points to heal an ally for 4d6 hit points.'
        ]
      },
      {
        id: 'pain-suppression',
        name: 'Pain Suppression',
        description: 'When you sacrifice hit points, roll 1d6. Reduce the damage taken by this amount.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['martyrs-endurance'],
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
        position: { row: 1, col: 4 },
        requires: ['faithful-resolve'],
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
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['life-transfer', 'pain-suppression'],
        icon: '🛡️',
      },
      {
        id: 'martyrs-blessing',
        name: 'Martyr\'s Blessing',
        description: 'Sacrifice 2d8 hit points to increase an ally\'s damage by 1d6 for 1d4+1 rounds.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['pain-suppression', 'redemptive-suffering'],
        icon: '✨',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'life-bond',
        name: 'Life Bond',
        description: 'Create a bond with an ally, transferring 1d6 × 10% of the damage they take to you.',
        maxRank: 3,
        position: { row: 3, col: 1 },
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
        position: { row: 3, col: 3 },
        requires: ['martyrs-blessing'],
        icon: '🙏',
        rankDescription: [
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 2d12.',
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 3d12.',
          'When an ally within 30 feet would take damage, you can use your reaction to take 1d12 damage and reduce their damage by 4d12.'
        ]
      },
      
      // Tier 5 (Level 50)
      {
        id: 'ultimate-sacrifice',
        name: 'Ultimate Sacrifice',
        description: 'Sacrifice half your current hit points to fully heal all allies within 30 feet and grant them immunity to damage for 1d4 rounds.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['life-bond', 'vicarious-atonement'],
        icon: '💫',
      },
    ],
  },
  {
    id: 'divine-fervor',
    name: 'Divine Fervor',
    description: 'Channel divine energy through zealous faith to smite enemies and protect allies.',
    icon: '✝️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'divine-wrath',
        name: 'Divine Wrath',
        description: 'Your attacks deal an additional 1d4 radiant damage.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⚡',
        rankDescription: [
          'Your attacks deal an additional 1d4 radiant damage.',
          'Your attacks deal an additional 1d6 radiant damage.',
          'Your attacks deal an additional 1d8 radiant damage.',
          'Your attacks deal an additional 1d10 radiant damage.',
          'Your attacks deal an additional 1d12 radiant damage.'
        ]
      },
      {
        id: 'zealous-presence',
        name: 'Zealous Presence',
        description: 'Allies within 15 feet gain +1 to attack rolls.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👁️',
        rankDescription: [
          'Allies within 15 feet gain +1 to attack rolls.',
          'Allies within 15 feet gain +1 to attack rolls and saving throws.',
          'Allies within 20 feet gain +1 to attack rolls and saving throws.',
          'Allies within 20 feet gain +2 to attack rolls and saving throws.',
          'Allies within 30 feet gain +2 to attack rolls and saving throws.'
        ]
      },
      {
        id: 'divine-protection',
        name: 'Divine Protection',
        description: 'When you take damage, roll 1d20. On a 20, you take no damage.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🛡️',
        rankDescription: [
          'When you take damage, roll 1d20. On a 20, you take no damage.',
          'When you take damage, roll 1d20. On a 19-20, you take no damage.',
          'When you take damage, roll 1d20. On an 18-20, you take no damage.',
          'When you take damage, roll 1d20. On a 17-20, you take no damage.',
          'When you take damage, roll 1d20. On a 16-20, you take no damage.'
        ]
      },
      
      // Tier 2 (Level 20)
      {
        id: 'smite',
        name: 'Smite',
        description: 'Channel divine energy to deal 2d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['divine-wrath'],
        icon: '⚔️',
        rankDescription: [
          'Channel divine energy to deal 2d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.',
          'Channel divine energy to deal 3d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.',
          'Channel divine energy to deal 4d8 radiant damage to a target. On a critical hit, the target is also stunned for 1 round.'
        ]
      },
      {
        id: 'divine-fervor',
        name: 'Divine Fervor',
        description: 'As a bonus action, you can enter a state of divine fervor for 1d4 rounds. While in this state, your attacks deal an extra 1d6 radiant damage.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['zealous-presence'],
        icon: '🔥',
        rankDescription: [
          'As a bonus action, you can enter a state of divine fervor for 1d4 rounds. While in this state, your attacks deal an extra 1d6 radiant damage.',
          'As a bonus action, you can enter a state of divine fervor for 1d4+1 rounds. While in this state, your attacks deal an extra 1d8 radiant damage.',
          'As a bonus action, you can enter a state of divine fervor for 1d6 rounds. While in this state, your attacks deal an extra 1d10 radiant damage.'
        ]
      },
      {
        id: 'divine-resilience',
        name: 'Divine Resilience',
        description: 'Reduce all damage you take by 1d4.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['divine-protection'],
        icon: '🧿',
        rankDescription: [
          'Reduce all damage you take by 1d4.',
          'Reduce all damage you take by 1d6.',
          'Reduce all damage you take by 1d8.'
        ]
      },
      
      // Tier 3 (Level 30)
      {
        id: 'holy-strike',
        name: 'Holy Strike',
        description: 'Your attacks ignore resistance to non-magical damage and deal an additional 2d6 radiant damage to undead and fiends.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['smite', 'divine-fervor'],
        icon: '✨',
      },
      {
        id: 'divine-aegis',
        name: 'Divine Aegis',
        description: 'As an action, create a shield of divine energy that absorbs 3d10 damage. While the shield is active, your attacks deal an additional 1d6 radiant damage.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['divine-fervor', 'divine-resilience'],
        icon: '🛡️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'divine-retribution',
        name: 'Divine Retribution',
        description: 'When you take damage, the attacker takes 2d6 radiant damage. Roll 1d20; on a 18-20, the attacker is also blinded for 1 round.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['holy-strike'],
        icon: '⚖️',
        rankDescription: [
          'When you take damage, the attacker takes 2d6 radiant damage. Roll 1d20; on a 18-20, the attacker is also blinded for 1 round.',
          'When you take damage, the attacker takes 2d8 radiant damage. Roll 1d20; on a 17-20, the attacker is also blinded for 1 round.',
          'When you take damage, the attacker takes 2d10 radiant damage. Roll 1d20; on a 16-20, the attacker is also blinded for 1 round.'
        ]
      },
      {
        id: 'divine-intervention',
        name: 'Divine Intervention',
        description: 'When an ally within 30 feet would be reduced to 0 hit points, you can use your reaction to heal them for 3d10 hit points.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['divine-aegis'],
        icon: '🙌',
        rankDescription: [
          'When an ally within 30 feet would be reduced to 0 hit points, you can use your reaction to heal them for 3d10 hit points.',
          'When an ally within 30 feet would be reduced to 0 hit points, you can use your reaction to heal them for 4d10 hit points.',
          'When an ally within 30 feet would be reduced to 0 hit points, you can use your reaction to heal them for 5d10 hit points.'
        ]
      },
      
      // Tier 5 (Level 50)
      {
        id: 'divine-avatar',
        name: 'Divine Avatar',
        description: 'Transform into an avatar of divine power for 1d4+1 rounds. While transformed, your attacks deal an additional 3d8 radiant damage, you gain resistance to all damage, and allies within 30 feet gain advantage on attack rolls and saving throws.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['divine-retribution', 'divine-intervention'],
        icon: '👼',
      },
    ],
  },
  {
    id: 'redemption',
    name: 'Redemption',
    description: 'Purify corruption and redeem the fallen through self-sacrifice and divine grace.',
    icon: '🕊️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'purifying-touch',
        name: 'Purifying Touch',
        description: 'Your touch can remove one level of exhaustion, disease, or poison from a creature. You take 1d6 damage when you use this ability.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✋',
        rankDescription: [
          'Your touch can remove one level of exhaustion, disease, or poison from a creature. You take 1d6 damage when you use this ability.',
          'Your touch can remove one level of exhaustion, disease, or poison from a creature. You take 1d4 damage when you use this ability.',
          'Your touch can remove one level of exhaustion, disease, or poison from a creature. You take 1d4 damage when you use this ability and can use it twice before resting.',
          'Your touch can remove two levels of exhaustion, disease, or poison from a creature. You take 1d4 damage when you use this ability and can use it twice before resting.',
          'Your touch can remove two levels of exhaustion, disease, or poison from a creature. You take 1d4 damage when you use this ability and can use it three times before resting.'
        ]
      },
      {
        id: 'redemptive-light',
        name: 'Redemptive Light',
        description: 'Your healing spells restore an additional 1d4 hit points.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💫',
        rankDescription: [
          'Your healing spells restore an additional 1d4 hit points.',
          'Your healing spells restore an additional 1d6 hit points.',
          'Your healing spells restore an additional 1d8 hit points.',
          'Your healing spells restore an additional 1d10 hit points.',
          'Your healing spells restore an additional 1d12 hit points.'
        ]
      },
      {
        id: 'aura-of-mercy',
        name: 'Aura of Mercy',
        description: 'Allies within 10 feet of you regain 1d4 hit points at the start of your turn.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '😇',
        rankDescription: [
          'Allies within 10 feet of you regain 1d4 hit points at the start of your turn.',
          'Allies within 15 feet of you regain 1d4 hit points at the start of your turn.',
          'Allies within 15 feet of you regain 1d6 hit points at the start of your turn.',
          'Allies within 20 feet of you regain 1d6 hit points at the start of your turn.',
          'Allies within 20 feet of you regain 1d8 hit points at the start of your turn.'
        ]
      },
      
      // Tier 2 (Level 20)
      {
        id: 'cleansing-flame',
        name: 'Cleansing Flame',
        description: 'As an action, create a burst of purifying flame in a 15-foot radius. Undead and fiends take 3d6 radiant damage, while allies in the area regain 1d8 hit points.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['purifying-touch'],
        icon: '🔥',
        rankDescription: [
          'As an action, create a burst of purifying flame in a 15-foot radius. Undead and fiends take 3d6 radiant damage, while allies in the area regain 1d8 hit points.',
          'As an action, create a burst of purifying flame in a 20-foot radius. Undead and fiends take 3d8 radiant damage, while allies in the area regain 1d10 hit points.',
          'As an action, create a burst of purifying flame in a 20-foot radius. Undead and fiends take 4d8 radiant damage, while allies in the area regain 2d8 hit points.'
        ]
      },
      {
        id: 'redemptive-sacrifice',
        name: 'Redemptive Sacrifice',
        description: 'When you heal an ally, you can choose to take damage equal to half the amount healed. If you do, the healing is doubled.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['redemptive-light'],
        icon: '💔',
        rankDescription: [
          'When you heal an ally, you can choose to take damage equal to half the amount healed. If you do, the healing is doubled.',
          'When you heal an ally, you can choose to take damage equal to half the amount healed. If you do, the healing is doubled and the ally gains 1d6 temporary hit points.',
          'When you heal an ally, you can choose to take damage equal to half the amount healed. If you do, the healing is doubled and the ally gains 2d6 temporary hit points.'
        ]
      },
      {
        id: 'martyrs-resolve',
        name: 'Martyr\'s Resolve',
        description: 'When you drop to 0 hit points, you can choose to remain conscious with 1 hit point. If you do, you gain advantage on all attack rolls and saving throws for 1d4 rounds.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['aura-of-mercy'],
        icon: '💪',
        rankDescription: [
          'When you drop to 0 hit points, you can choose to remain conscious with 1 hit point. If you do, you gain advantage on all attack rolls and saving throws for 1d4 rounds.',
          'When you drop to 0 hit points, you can choose to remain conscious with 1d4 hit points. If you do, you gain advantage on all attack rolls and saving throws for 1d4 rounds.',
          'When you drop to 0 hit points, you can choose to remain conscious with 1d6 hit points. If you do, you gain advantage on all attack rolls and saving throws for 1d6 rounds.'
        ]
      },
      
      // Tier 3 (Level 30)
      {
        id: 'redemptive-path',
        name: 'Redemptive Path',
        description: 'As an action, you can attempt to redeem an evil creature. The target must make a Wisdom saving throw. On a failure, it is charmed by you for 1d4 rounds and cannot attack you or your allies.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['cleansing-flame', 'redemptive-sacrifice'],
        icon: '🛤️',
      },
      {
        id: 'sacrificial-healing',
        name: 'Sacrificial Healing',
        description: 'As an action, you can sacrifice hit points equal to your level to heal all allies within 30 feet for 2d8 hit points.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['redemptive-sacrifice', 'martyrs-resolve'],
        icon: '❤️',
      },
      
      // Tier 4 (Level 40)
      {
        id: 'divine-sacrifice',
        name: 'Divine Sacrifice',
        description: 'When an ally within 30 feet takes damage, you can use your reaction to take the damage instead. If you do, you gain resistance to that damage.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['redemptive-path'],
        icon: '🔄',
        rankDescription: [
          'When an ally within 30 feet takes damage, you can use your reaction to take the damage instead. If you do, you gain resistance to that damage.',
          'When an ally within 30 feet takes damage, you can use your reaction to take the damage instead. If you do, you gain resistance to that damage and heal for 1d8 hit points.',
          'When an ally within 30 feet takes damage, you can use your reaction to take the damage instead. If you do, you gain resistance to that damage and heal for 2d8 hit points.'
        ]
      },
      {
        id: 'redemptive-aura',
        name: 'Redemptive Aura',
        description: 'Allies within 20 feet of you gain resistance to necrotic damage and advantage on saving throws against being charmed or frightened.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['sacrificial-healing'],
        icon: '🌟',
        rankDescription: [
          'Allies within 20 feet of you gain resistance to necrotic damage and advantage on saving throws against being charmed or frightened.',
          'Allies within 30 feet of you gain resistance to necrotic damage and advantage on saving throws against being charmed or frightened.',
          'Allies within 30 feet of you gain resistance to necrotic and poison damage and advantage on saving throws against being charmed or frightened.'
        ]
      },
      
      // Tier 5 (Level 50)
      {
        id: 'ultimate-redemption',
        name: 'Ultimate Redemption',
        description: 'As an action, you can sacrifice half your hit points to create a 30-foot aura of redemptive energy for 1d4 rounds. Allies within the aura regain 2d10 hit points at the start of each of your turns, and enemies must make a Wisdom saving throw or be unable to attack you or your allies.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['divine-sacrifice', 'redemptive-aura'],
        icon: '🌈',
      },
    ],
  }
];

export default martyrTalentTrees;
