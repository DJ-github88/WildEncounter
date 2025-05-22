// Talent trees for the Exorcist class
const exorcistTalentTrees = [
  {
    id: 'purifier',
    name: 'Purifier',
    description: 'Focus on healing, cleansing, and support through holy light that purges corruption.',
    icon: '✨',
    talents: [
      // Tier 1 (Level 10) - Radial/Sunburst layout (first row)
      {
        id: 'divine-light',
        name: 'Divine Light',
        description: 'Channel pure divine light that cleanses corruption and heals the pure.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '☀️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Channel divine light that deals 1d6 radiant damage to supernatural entities and heals allies for 1d4 hit points.',
          'Channel divine light that deals 1d8 radiant damage to supernatural entities and heals allies for 1d6 hit points.',
          'Channel divine light that deals 1d10 radiant damage to supernatural entities and heals allies for 1d8 hit points.',
          'Channel divine light that deals 1d12 radiant damage to supernatural entities and heals allies for 1d10 hit points.',
          'Channel divine light that deals 2d8 radiant damage to supernatural entities and heals allies for 2d6 hit points.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'healing-touch',
        name: 'Healing Touch',
        description: 'Your touch channels divine energy that heals wounds.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '✋',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Touch a creature to heal 1d6 hit points.',
          'Touch a creature to heal 1d8 hit points.',
          'Touch a creature to heal 1d10 hit points.',
          'Touch a creature to heal 1d12 hit points.',
          'Touch a creature to heal 2d8 hit points.'
        ]
      },
      {
        id: 'protective-aura',
        name: 'Protective Aura',
        description: 'Emit an aura that protects allies from harm.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Allies within 10 feet gain +1 to AC for 1d4 rounds.',
          'Allies within 10 feet gain +1 to AC for 1d6 rounds.',
          'Allies within 15 feet gain +2 to AC for 1d4 rounds.',
          'Allies within 15 feet gain +2 to AC for 1d6 rounds.',
          'Allies within 20 feet gain +3 to AC for 1d6 rounds.'
        ]
      },

      // Tier 2 (Level 20) - Radial/Sunburst layout (first ring)
      {
        id: 'holy-word',
        name: 'Holy Word',
        description: 'Speak words of power that harm supernatural entities.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Upper left ray
        requires: ['divine-light', 'healing-touch'],
        icon: '📢',
        rankDescription: [
          'Speak a holy word that deals 2d6 radiant damage to undead, fiends, or possessed creatures within 30 feet.',
          'Speak a holy word that deals 2d8 radiant damage to undead, fiends, or possessed creatures within 30 feet.',
          'Speak a holy word that deals 3d6 radiant damage to undead, fiends, or possessed creatures within 30 feet.'
        ]
      },
      {
        id: 'spirit-sight',
        name: 'Spirit Sight',
        description: 'See invisible spirits and detect supernatural influences.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Upper right ray
        requires: ['divine-light'],
        icon: '👁️',
        rankDescription: [
          'Roll 1d20 to detect supernatural entities. On a 17-20, you can see invisible spirits within 30 feet.',
          'Roll 1d20 to detect supernatural entities. On a 15-20, you can see invisible spirits within 60 feet.',
          'Roll 1d20 to detect supernatural entities. On a 13-20, you can see invisible spirits within 90 feet.'
        ]
      },
      {
        id: 'cleansing-touch',
        name: 'Cleansing Touch',
        description: 'Your touch purifies corruption and heals wounds.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Lower left ray
        requires: ['divine-light'],
        icon: '✋',
        rankDescription: [
          'Touch a creature to heal 2d6 hit points and roll 1d20. On a 17-20, remove one disease, poison, or minor curse affecting them.',
          'Touch a creature to heal 2d8 hit points and roll 1d20. On a 15-20, remove one disease, poison, or minor curse affecting them.',
          'Touch a creature to heal 3d6 hit points and roll 1d20. On a 13-20, remove one disease, poison, or minor curse affecting them.'
        ]
      },
      {
        id: 'faith-shield',
        name: 'Faith Shield',
        description: 'Your faith creates a protective barrier against supernatural harm.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Lower right ray
        requires: ['divine-light'],
        icon: '🛡️',
        rankDescription: [
          'Gain resistance to necrotic damage and roll 1d6 to reduce damage from supernatural sources.',
          'Gain resistance to necrotic and psychic damage and roll 1d8 to reduce damage from supernatural sources.',
          'Gain resistance to necrotic and psychic damage and roll 1d10 to reduce damage from supernatural sources.'
        ]
      },

      // Tier 3 (Level 30) - Radial/Sunburst layout (second ring)
      {
        id: 'turn-undead',
        name: 'Turn Undead',
        description: 'Channel divine power to repel or destroy undead creatures.',
        maxRank: 3,
        position: { row: 0, col: 0 }, // Far upper left ray
        requires: ['holy-word'],
        icon: '✝️',
        rankDescription: [
          'Undead within 30 feet must make a Wisdom save or be turned for 1d4 rounds. Roll 1d20; on a 18-20, undead with CR less than your level are destroyed instead.',
          'Undead within 30 feet must make a Wisdom save or be turned for 1d6 rounds. Roll 1d20; on a 17-20, undead with CR less than your level are destroyed instead.',
          'Undead within 30 feet must make a Wisdom save with disadvantage or be turned for 1d6 rounds. Roll 1d20; on a 16-20, undead with CR less than your level are destroyed instead.'
        ]
      },
      {
        id: 'break-possession',
        name: 'Break Possession',
        description: 'Free a creature from supernatural possession or influence.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Far upper right ray
        requires: ['spirit-sight'],
        icon: '🔓',
        rankDescription: [
          'Target a possessed creature. Roll 1d20 + your Faith; on a result of 15 or higher, the possessing entity must make a Wisdom save or be expelled.',
          'Target a possessed creature. Roll 1d20 + your Faith; on a result of 13 or higher, the possessing entity must make a Wisdom save or be expelled.',
          'Target a possessed creature. Roll 1d20 + your Faith; on a result of 11 or higher, the possessing entity must make a Wisdom save with disadvantage or be expelled.'
        ]
      },
      {
        id: 'healing-light',
        name: 'Healing Light',
        description: 'Channel divine light to heal multiple allies.',
        maxRank: 3,
        position: { row: 4, col: 0 }, // Far lower left ray
        requires: ['cleansing-touch'],
        icon: '💫',
        rankDescription: [
          'Create a burst of healing light in a 15-foot radius. Allies in the area heal 2d6 hit points.',
          'Create a burst of healing light in a 20-foot radius. Allies in the area heal 2d8 hit points.',
          'Create a burst of healing light in a 30-foot radius. Allies in the area heal 3d6 hit points.'
        ]
      },
      {
        id: 'holy-ground',
        name: 'Holy Ground',
        description: 'Consecrate an area to repel supernatural threats.',
        maxRank: 3,
        position: { row: 4, col: 4 }, // Far lower right ray
        requires: ['faith-shield'],
        icon: '⭕',
        rankDescription: [
          'Create a 15-foot radius of holy ground for 1d4 rounds. Supernatural creatures take 1d8 radiant damage when entering or starting their turn in the area.',
          'Create a 20-foot radius of holy ground for 1d6 rounds. Supernatural creatures take 1d10 radiant damage when entering or starting their turn in the area.',
          'Create a 30-foot radius of holy ground for 1d8 rounds. Supernatural creatures take 2d6 radiant damage when entering or starting their turn in the area.'
        ]
      },

      // Tier 4 (Level 40) - Radial/Sunburst layout (third ring)
      {
        id: 'banishing-light',
        name: 'Banishing Light',
        description: 'Channel divine light that banishes supernatural entities.',
        maxRank: 1,
        position: { row: 0, col: 2 }, // Top ray
        requires: ['turn-undead', 'break-possession'],
        icon: '🔆',
        rankDescription: [
          'Create a beam of intense divine light. Target supernatural creature takes 3d8 radiant damage and must make a Wisdom save or be banished to its native plane for 1d4 rounds.'
        ]
      },
      {
        id: 'circle-of-protection',
        name: 'Circle of Protection',
        description: 'Create a protective circle that shields against supernatural harm.',
        maxRank: 1,
        position: { row: 2, col: 0 }, // Left ray
        requires: ['turn-undead', 'healing-light'],
        icon: '⚪',
        rankDescription: [
          'Create a 15-foot circle that lasts for 1d6 rounds. Allies inside gain resistance to necrotic and psychic damage, and supernatural creatures cannot enter unless they succeed on a Wisdom save.'
        ]
      },
      {
        id: 'purifying-flame',
        name: 'Purifying Flame',
        description: 'Channel divine fire that burns corruption but heals the pure.',
        maxRank: 1,
        position: { row: 2, col: 4 }, // Right ray
        requires: ['break-possession', 'holy-ground'],
        icon: '🔥',
        rankDescription: [
          'Create flames in a 20-foot cone. Corrupted creatures take 3d8 radiant damage, while allies heal 2d6 hit points.'
        ]
      },
      {
        id: 'divine-radiance',
        name: 'Divine Radiance',
        description: 'Emit an aura of divine light that heals allies and harms supernatural entities.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Bottom ray
        requires: ['healing-light', 'holy-ground'],
        icon: '🌟',
        rankDescription: [
          'Emit an aura of divine light with a 20-foot radius for 1d6 rounds. Allies within the aura heal 1d8 hit points at the start of their turn, and supernatural creatures take 1d10 radiant damage.'
        ]
      },

      // Tier 5 (Level 50) - Radial/Sunburst layout (fourth ring)
      {
        id: 'divine-exorcism',
        name: 'Divine Exorcism',
        description: 'Perform a powerful exorcism that can banish even the strongest entities.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Upper left diagonal
        requires: ['banishing-light', 'circle-of-protection'],
        icon: '✨',
        rankDescription: [
          'Perform an exorcism on a target for 1d4 rounds. At the end, roll 1d20 + your Faith; on a 15 or higher, supernatural influences are removed and extraplanar creatures must make a Wisdom save or be banished.',
          'Perform an exorcism on a target for 1d3 rounds. At the end, roll 1d20 + your Faith; on a 13 or higher, supernatural influences are removed and extraplanar creatures must make a Wisdom save with disadvantage or be banished.',
          'Perform an exorcism on a target for 1d2 rounds. At the end, roll 1d20 + your Faith; on a 11 or higher, supernatural influences are removed and extraplanar creatures must make a Wisdom save with disadvantage or be banished.'
        ]
      },
      {
        id: 'hallowed-presence',
        name: 'Hallowed Presence',
        description: 'Your presence naturally repels supernatural evil.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Upper right diagonal
        requires: ['banishing-light', 'purifying-flame'],
        icon: '👼',
        rankDescription: [
          'Supernatural creatures within 15 feet of you have disadvantage on attack rolls and take 1d8 radiant damage at the start of their turn.',
          'Supernatural creatures within 20 feet of you have disadvantage on attack rolls and take 1d10 radiant damage at the start of their turn.',
          'Supernatural creatures within 30 feet of you have disadvantage on attack rolls and take 2d6 radiant damage at the start of their turn.'
        ]
      },
      {
        id: 'mass-healing-light',
        name: 'Mass Healing Light',
        description: 'Channel powerful divine light to heal all allies in a large area.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Lower left diagonal
        requires: ['circle-of-protection', 'divine-radiance'],
        icon: '💫',
        rankDescription: [
          'Create a burst of healing light in a 30-foot radius. Allies in the area heal 3d8 hit points and are cured of one disease or poison.',
          'Create a burst of healing light in a 40-foot radius. Allies in the area heal 4d8 hit points and are cured of one disease, poison, or minor curse.',
          'Create a burst of healing light in a 50-foot radius. Allies in the area heal 5d8 hit points and are cured of all diseases, poisons, and minor curses.'
        ]
      },
      {
        id: 'purifying-aura',
        name: 'Purifying Aura',
        description: 'Emit an aura of purification that cleanses allies and harms corrupted entities.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Lower right diagonal
        requires: ['purifying-flame', 'divine-radiance'],
        icon: '🌈',
        rankDescription: [
          'Create a 15-foot aura around you for 1d4 rounds. Allies in the aura heal 1d8 hit points at the start of their turn and gain advantage on saves against supernatural effects. Corrupted creatures take 1d8 radiant damage.',
          'Create a 20-foot aura around you for 1d6 rounds. Allies in the aura heal 1d10 hit points at the start of their turn and gain advantage on saves against supernatural effects. Corrupted creatures take 1d10 radiant damage.',
          'Create a 30-foot aura around you for 1d8 rounds. Allies in the aura heal 2d6 hit points at the start of their turn and gain advantage on saves against supernatural effects. Corrupted creatures take 2d6 radiant damage.'
        ]
      },

      // Tier 6 (Level 60) - Radial/Sunburst layout (fifth ring)
      {
        id: 'divine-banishment',
        name: 'Divine Banishment',
        description: 'Channel overwhelming divine power to banish all supernatural entities in an area.',
        maxRank: 1,
        position: { row: 0, col: 1 }, // Far upper left
        requires: ['divine-exorcism'],
        icon: '🌠',
        rankDescription: [
          'All supernatural creatures within 30 feet must make a Wisdom save or take 6d8 radiant damage and be banished to their native plane. On a successful save, they take half damage and are not banished.'
        ]
      },
      {
        id: 'holy-nova',
        name: 'Holy Nova',
        description: 'Release a massive burst of divine energy that heals allies and harms enemies.',
        maxRank: 1,
        position: { row: 0, col: 3 }, // Far upper right
        requires: ['hallowed-presence'],
        icon: '💥',
        rankDescription: [
          'Release a 40-foot radius burst of divine energy. Allies heal 5d8 hit points and are cured of all negative effects. Enemies take 5d8 radiant damage (8d8 for supernatural creatures) and are blinded for 1d4 rounds on a failed Constitution save.'
        ]
      },
      {
        id: 'divine-restoration',
        name: 'Divine Restoration',
        description: 'Channel powerful divine energy to restore a creature to full health and purity.',
        maxRank: 1,
        position: { row: 4, col: 1 }, // Far lower left
        requires: ['mass-healing-light'],
        icon: '🌅',
        rankDescription: [
          'Target a creature and roll 8d8. They heal that many hit points and are cured of all poisons, diseases, curses, and other negative effects. This ability can also restore a creature that has died within the last minute.'
        ]
      },
      {
        id: 'sanctified-ground',
        name: 'Sanctified Ground',
        description: 'Permanently consecrate an area, making it inhospitable to supernatural evil.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Far lower right
        requires: ['purifying-aura'],
        icon: '🏞️',
        rankDescription: [
          'Permanently consecrate a 60-foot radius area. Within this area, supernatural creatures have disadvantage on all rolls, take 2d6 radiant damage at the start of their turn, and cannot use teleportation abilities. Allies gain advantage on saving throws against supernatural effects and heal 1d6 hit points at the start of their turn.'
        ]
      },

      // Tier 7 (Level 70) - Radial/Sunburst layout (capstone)
      {
        id: 'avatar-of-light',
        name: 'Avatar of Light',
        description: 'Transform into an avatar of divine light, embodying the very essence of purification.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center (same as Divine Light)
        requires: ['divine-banishment', 'holy-nova', 'divine-restoration', 'sanctified-ground'],
        icon: '🌞',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become an Avatar of Light. During this time, you emit an aura of divine radiance with a 50-foot radius. Within this aura, allies heal 3d8 hit points at the start of their turn and are immune to all negative effects. Supernatural creatures take 4d10 radiant damage at the start of their turn and must make a Wisdom save or be banished to their native plane. Additionally, you can cast any Purifier ability without spending Spirit Charges, and your healing abilities heal for maximum possible values.'
        ]
      },
    ],
  },
  {
    id: 'binder',
    name: 'Binder',
    description: 'Focus on controlling the battlefield with holy seals, wards, and binding rituals.',
    icon: '🔒',
    talents: [
      // Tier 1 (Level 10) - Pentagram/Star layout (first row)
      {
        id: 'seal-mastery',
        name: 'Seal Mastery',
        description: 'Master the art of creating protective and binding seals.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '🔯',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your seals and wards last 1d4 rounds longer and require 1d4 more Spirit to break.',
          'Your seals and wards last 1d6 rounds longer and require 1d6 more Spirit to break.',
          'Your seals and wards last 1d8 rounds longer and require 1d8 more Spirit to break.',
          'Your seals and wards last 1d10 rounds longer and require 1d10 more Spirit to break.',
          'Your seals and wards last 1d12 rounds longer and require 1d12 more Spirit to break.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'basic-warding',
        name: 'Basic Warding',
        description: 'Create simple wards to protect against supernatural harm.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '🔰',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Create a ward that grants +1 to saving throws against supernatural effects for 1d4 rounds.',
          'Create a ward that grants +1 to saving throws against supernatural effects for 1d6 rounds.',
          'Create a ward that grants +2 to saving throws against supernatural effects for 1d4 rounds.',
          'Create a ward that grants +2 to saving throws against supernatural effects for 1d6 rounds.',
          'Create a ward that grants +3 to saving throws against supernatural effects for 1d6 rounds.'
        ]
      },
      {
        id: 'binding-basics',
        name: 'Binding Basics',
        description: 'Learn the fundamentals of binding supernatural entities.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '⛓️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your binding abilities last 1d4 rounds longer.',
          'Your binding abilities last 1d6 rounds longer.',
          'Your binding abilities last 1d8 rounds longer and affect targets with +1 CR.',
          'Your binding abilities last 1d10 rounds longer and affect targets with +2 CR.',
          'Your binding abilities last 1d12 rounds longer and affect targets with +3 CR.'
        ]
      },

      // Tier 2 (Level 20) - Pentagram/Star layout (first points)
      {
        id: 'spirit-ward',
        name: 'Spirit Ward',
        description: 'Create a ward that repels supernatural entities.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Top point
        requires: ['seal-mastery'],
        icon: '⭕',
        rankDescription: [
          'Create a ward with a 10-foot radius that lasts for 1d4 rounds. Supernatural creatures cannot enter the ward unless they succeed on a Wisdom save.',
          'Create a ward with a 15-foot radius that lasts for 1d6 rounds. Supernatural creatures cannot enter the ward unless they succeed on a Wisdom save with disadvantage.',
          'Create a ward with a 20-foot radius that lasts for 1d8 rounds. Supernatural creatures cannot enter the ward unless they succeed on a Wisdom save with disadvantage.'
        ]
      },
      {
        id: 'binding-seal',
        name: 'Binding Seal',
        description: 'Create a seal that binds a creature in place.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Upper left point
        requires: ['seal-mastery'],
        icon: '⛓️',
        rankDescription: [
          'Create a seal beneath a creature within 30 feet. The target must make a Strength save or be restrained for 1d4 rounds.',
          'Create a seal beneath a creature within 30 feet. The target must make a Strength save or be restrained for 1d6 rounds.',
          'Create a seal beneath a creature within 60 feet. The target must make a Strength save with disadvantage or be restrained for 1d6 rounds.'
        ]
      },
      {
        id: 'warding-seal',
        name: 'Warding Seal',
        description: 'Create a seal that protects against supernatural harm.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Lower left point
        requires: ['seal-mastery'],
        icon: '🛡️',
        rankDescription: [
          'Create a seal that grants you or an ally resistance to necrotic and psychic damage for 1d4 rounds.',
          'Create a seal that grants you or an ally resistance to necrotic and psychic damage for 1d6 rounds.',
          'Create a seal that grants you or an ally resistance to necrotic, psychic, and poison damage for 1d6 rounds.'
        ]
      },
      {
        id: 'banishing-seal',
        name: 'Banishing Seal',
        description: 'Create a seal that can banish supernatural entities.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Lower right point
        requires: ['seal-mastery'],
        icon: '🔮',
        rankDescription: [
          'Create a seal beneath a supernatural creature. The target must make a Wisdom save or be banished to its native plane for 1d4 rounds.',
          'Create a seal beneath a supernatural creature. The target must make a Wisdom save or be banished to its native plane for 1d6 rounds.',
          'Create a seal beneath a supernatural creature. The target must make a Wisdom save with disadvantage or be banished to its native plane for 1d6 rounds.'
        ]
      },
      {
        id: 'purifying-seal',
        name: 'Purifying Seal',
        description: 'Create a seal that cleanses corruption and disease.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Upper right point
        requires: ['seal-mastery'],
        icon: '✨',
        rankDescription: [
          'Create a seal that cleanses one poison, disease, or minor curse from a creature that touches it.',
          'Create a seal that cleanses one poison, disease, or curse of level 5 or lower from a creature that touches it.',
          'Create a seal that cleanses all poisons, diseases, and curses of level 7 or lower from a creature that touches it.'
        ]
      },

      // Tier 3 (Level 30) - Pentagram/Star layout (inner pentagon)
      {
        id: 'circle-of-protection',
        name: 'Circle of Protection',
        description: 'Create a protective circle that shields against supernatural harm.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Top inner pentagon
        requires: ['spirit-ward'],
        icon: '⚪',
        rankDescription: [
          'Create a 15-foot circle that lasts for 1d4 rounds. Allies inside gain resistance to necrotic and psychic damage, and supernatural creatures take 1d6 radiant damage when entering or starting their turn in the area.',
          'Create a 20-foot circle that lasts for 1d6 rounds. Allies inside gain resistance to necrotic and psychic damage, and supernatural creatures take 1d8 radiant damage when entering or starting their turn in the area.',
          'Create a 30-foot circle that lasts for 1d8 rounds. Allies inside gain resistance to necrotic and psychic damage, and supernatural creatures take 1d10 radiant damage when entering or starting their turn in the area.'
        ]
      },
      {
        id: 'chains-of-binding',
        name: 'Chains of Binding',
        description: 'Create spiritual chains that bind supernatural entities.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Left inner pentagon
        requires: ['binding-seal'],
        icon: '⛓️',
        rankDescription: [
          'Create chains that bind a supernatural creature for 1d4 rounds. While bound, the creature cannot use teleportation abilities and has disadvantage on attack rolls.',
          'Create chains that bind a supernatural creature for 1d6 rounds. While bound, the creature cannot use teleportation abilities and has disadvantage on attack rolls.',
          'Create chains that bind a supernatural creature for 1d8 rounds. While bound, the creature cannot use teleportation abilities, has disadvantage on attack rolls, and takes 1d8 radiant damage at the start of its turn.'
        ]
      },
      {
        id: 'protective-ward',
        name: 'Protective Ward',
        description: 'Create a ward that absorbs damage for allies.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Bottom inner pentagon
        requires: ['warding-seal'],
        icon: '🔰',
        rankDescription: [
          'Create a ward on an ally that absorbs up to 3d6 damage before breaking.',
          'Create a ward on an ally that absorbs up to 3d8 damage before breaking.',
          'Create a ward on an ally that absorbs up to 4d8 damage before breaking.'
        ]
      },
      {
        id: 'exorcism-seal',
        name: 'Exorcism Seal',
        description: 'Create a seal that can exorcise possessing entities.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Right inner pentagon
        requires: ['banishing-seal', 'purifying-seal'],
        icon: '✝️',
        rankDescription: [
          'Place a seal on a possessed creature. The possessing entity must make a Wisdom save or be expelled.',
          'Place a seal on a possessed creature. The possessing entity must make a Wisdom save with disadvantage or be expelled.',
          'Place a seal on a possessed creature. The possessing entity must make a Wisdom save with disadvantage or be expelled and banished to its native plane.'
        ]
      },

      // Tier 4 (Level 40) - Pentagram/Star layout (second points)
      {
        id: 'greater-spirit-ward',
        name: 'Greater Spirit Ward',
        description: 'Create a powerful ward that repels and damages supernatural entities.',
        maxRank: 1,
        position: { row: -1, col: 2 }, // Far top point
        requires: ['circle-of-protection'],
        icon: '🔆',
        rankDescription: [
          'Create a ward with a 30-foot radius that lasts for 1d8 rounds. Supernatural creatures cannot enter the ward unless they succeed on a Wisdom save with disadvantage, and take 2d8 radiant damage when they attempt to do so.'
        ]
      },
      {
        id: 'binding-circle',
        name: 'Binding Circle',
        description: 'Create a circle that binds multiple creatures.',
        maxRank: 1,
        position: { row: 0, col: -1 }, // Far upper left point
        requires: ['chains-of-binding'],
        icon: '⭕',
        rankDescription: [
          'Create a 15-foot radius circle. All creatures within the circle must make a Strength save or be restrained for 1d6 rounds. Supernatural creatures have disadvantage on this save.'
        ]
      },
      {
        id: 'ward-of-reflection',
        name: 'Ward of Reflection',
        description: 'Create a ward that reflects harmful magic back at its caster.',
        maxRank: 1,
        position: { row: 4, col: 0 }, // Far lower left point
        requires: ['protective-ward'],
        icon: '↩️',
        rankDescription: [
          'Create a ward on an ally that lasts for 1d4 rounds. When the warded creature is targeted by a spell, roll 1d20. On a 15-20, the spell is reflected back at the caster.'
        ]
      },
      {
        id: 'greater-exorcism',
        name: 'Greater Exorcism',
        description: 'Perform a powerful exorcism ritual.',
        maxRank: 1,
        position: { row: 4, col: 4 }, // Far lower right point
        requires: ['exorcism-seal'],
        icon: '🔆',
        rankDescription: [
          'Perform an exorcism ritual that takes 1d3 rounds to complete. At the end, all supernatural influences within 30 feet are suppressed for 1d6 rounds, and possessing entities must make a Wisdom save with disadvantage or be expelled and banished.'
        ]
      },
      {
        id: 'seal-of-purification',
        name: 'Seal of Purification',
        description: 'Create a powerful seal that continuously cleanses an area.',
        maxRank: 1,
        position: { row: 0, col: 5 }, // Far upper right point
        requires: ['exorcism-seal'],
        icon: '🌟',
        rankDescription: [
          'Create a seal that lasts for 1d8 rounds. The seal creates a 20-foot aura that cleanses one negative effect from allies within at the start of their turn and deals 2d6 radiant damage to corrupted creatures.'
        ]
      },

      // Tier 5 (Level 50) - Pentagram/Star layout (inner star)
      {
        id: 'pentagram-of-binding',
        name: 'Pentagram of Binding',
        description: 'Create a powerful pentagram that can bind even the strongest entities.',
        maxRank: 3,
        position: { row: 0, col: 1 }, // Upper left inner star
        requires: ['greater-spirit-ward', 'binding-circle'],
        icon: '✡️',
        rankDescription: [
          'Create a pentagram with a 20-foot radius. Supernatural creatures within the pentagram must make a Wisdom save or be paralyzed for 1d4 rounds.',
          'Create a pentagram with a 30-foot radius. Supernatural creatures within the pentagram must make a Wisdom save or be paralyzed for 1d6 rounds.',
          'Create a pentagram with a 40-foot radius. Supernatural creatures within the pentagram must make a Wisdom save with disadvantage or be paralyzed for 1d6 rounds.'
        ]
      },
      {
        id: 'seal-of-banishment',
        name: 'Seal of Banishment',
        description: 'Create a powerful seal that can banish multiple entities simultaneously.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Upper right inner star
        requires: ['greater-spirit-ward', 'seal-of-purification'],
        icon: '🌌',
        rankDescription: [
          'Create a seal that affects all supernatural creatures within 20 feet. Targets must make a Wisdom save or be banished to their native plane for 1d6 rounds.',
          'Create a seal that affects all supernatural creatures within 30 feet. Targets must make a Wisdom save or be banished to their native plane for 1d8 rounds.',
          'Create a seal that affects all supernatural creatures within 40 feet. Targets must make a Wisdom save with disadvantage or be banished to their native plane for 1d8 rounds.'
        ]
      },
      {
        id: 'ward-of-absorption',
        name: 'Ward of Absorption',
        description: 'Create a ward that absorbs harmful energy and converts it to healing.',
        maxRank: 3,
        position: { row: 4, col: 1 }, // Lower left inner star
        requires: ['ward-of-reflection', 'binding-circle'],
        icon: '🔄',
        rankDescription: [
          'Create a ward on an ally that lasts for 1d4 rounds. When the warded creature takes necrotic or psychic damage, 50% of that damage is converted to healing.',
          'Create a ward on an ally that lasts for 1d6 rounds. When the warded creature takes necrotic or psychic damage, 75% of that damage is converted to healing.',
          'Create a ward on an ally that lasts for 1d8 rounds. When the warded creature takes necrotic or psychic damage, 100% of that damage is converted to healing.'
        ]
      },
      {
        id: 'seal-of-cleansing',
        name: 'Seal of Cleansing',
        description: 'Create a powerful seal that cleanses all corruption in an area.',
        maxRank: 3,
        position: { row: 4, col: 3 }, // Lower right inner star
        requires: ['greater-exorcism', 'seal-of-purification'],
        icon: '✨',
        rankDescription: [
          'Create a seal that cleanses a 20-foot radius area. All allies within the area are cured of one negative effect of their choice, and corrupted creatures take 3d8 radiant damage.',
          'Create a seal that cleanses a 30-foot radius area. All allies within the area are cured of two negative effects of their choice, and corrupted creatures take 4d8 radiant damage.',
          'Create a seal that cleanses a 40-foot radius area. All allies within the area are cured of all negative effects, and corrupted creatures take 5d8 radiant damage.'
        ]
      },

      // Tier 6 (Level 60) - Pentagram/Star layout (outer pentagon)
      {
        id: 'grand-circle-of-protection',
        name: 'Grand Circle of Protection',
        description: 'Create an immensely powerful protective circle.',
        maxRank: 1,
        position: { row: 1, col: 1 }, // Upper left outer pentagon
        requires: ['pentagram-of-binding', 'ward-of-absorption'],
        icon: '⭕',
        rankDescription: [
          'Create a 50-foot circle that lasts for 1d8 rounds. Allies inside gain immunity to necrotic and psychic damage and advantage on all saving throws. Supernatural creatures cannot enter the circle unless they succeed on a Wisdom save with disadvantage, and take 3d8 radiant damage when they attempt to do so.'
        ]
      },
      {
        id: 'seal-of-imprisonment',
        name: 'Seal of Imprisonment',
        description: 'Create a seal that can permanently imprison a supernatural entity.',
        maxRank: 1,
        position: { row: 1, col: 3 }, // Upper right outer pentagon
        requires: ['pentagram-of-binding', 'seal-of-banishment'],
        icon: '🔒',
        rankDescription: [
          'Create a seal beneath a supernatural creature. The target must make a Wisdom save with disadvantage or be imprisoned in an extradimensional space for 1d4 days. While imprisoned, the creature is incapacitated and cannot be targeted by any effects.'
        ]
      },
      {
        id: 'ward-of-immunity',
        name: 'Ward of Immunity',
        description: 'Create a ward that grants temporary immunity to supernatural effects.',
        maxRank: 1,
        position: { row: 3, col: 1 }, // Lower left outer pentagon
        requires: ['ward-of-absorption', 'seal-of-cleansing'],
        icon: '🛡️',
        rankDescription: [
          'Create a ward on an ally that lasts for 1d4 rounds. While the ward is active, the ally is immune to all supernatural effects, including possession, curses, and necrotic/psychic damage.'
        ]
      },
      {
        id: 'seal-of-exorcism',
        name: 'Seal of Exorcism',
        description: 'Create a seal that can exorcise even the most powerful entities.',
        maxRank: 1,
        position: { row: 3, col: 3 }, // Lower right outer pentagon
        requires: ['seal-of-banishment', 'seal-of-cleansing'],
        icon: '✝️',
        rankDescription: [
          'Create a seal that affects all possessed creatures within 40 feet. All possessing entities must make a Wisdom save with disadvantage or be expelled and banished to their native plane for 1d6 days.'
        ]
      },

      // Tier 7 (Level 70) - Pentagram/Star layout (capstone)
      {
        id: 'master-of-seals',
        name: 'Master of Seals',
        description: 'Become a true master of seals and wards, capable of binding even the most powerful entities.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center (same as Seal Mastery)
        requires: ['grand-circle-of-protection', 'seal-of-imprisonment', 'ward-of-immunity', 'seal-of-exorcism'],
        icon: '🔱',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become a Master of Seals. During this time, you can create any seal or ward as a bonus action, all your seals and wards have double duration, and supernatural creatures have disadvantage on saves against your seals and wards. Additionally, you can maintain concentration on up to three seals or wards simultaneously, and you gain 1d4 Spirit Charges whenever a creature fails a save against one of your seals or wards.'
        ]
      },
    ],
  },
  {
    id: 'inquisitor',
    name: 'Inquisitor',
    description: 'Focus on aggressive ghost-hunting with enhanced smites, divine weapons, and offensive combat against supernatural foes.',
    icon: '⚔️',
    talents: [
      // Tier 1 (Level 10) - Cruciform/Cross layout (first row)
      {
        id: 'righteous-fury',
        name: 'Righteous Fury',
        description: 'Channel divine wrath against supernatural entities.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '⚡',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Gain 1d4 Spirit Charges when you damage a supernatural creature. Your attacks against supernatural creatures deal +1 damage per Spirit Charge you possess.',
          'Gain 1d4+1 Spirit Charges when you damage a supernatural creature. Your attacks against supernatural creatures deal +1 damage per Spirit Charge you possess.',
          'Gain 1d6 Spirit Charges when you damage a supernatural creature. Your attacks against supernatural creatures deal +1 damage per Spirit Charge you possess.',
          'Gain 1d6 Spirit Charges when you damage a supernatural creature. Your attacks against supernatural creatures deal +2 damage per Spirit Charge you possess.',
          'Gain 1d8 Spirit Charges when you damage a supernatural creature. Your attacks against supernatural creatures deal +2 damage per Spirit Charge you possess.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'holy-warrior',
        name: 'Holy Warrior',
        description: 'Train in combat techniques effective against supernatural foes.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '⚔️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Gain +1 to attack rolls against supernatural creatures.',
          'Gain +1 to attack rolls and +1 to damage rolls against supernatural creatures.',
          'Gain +2 to attack rolls against supernatural creatures.',
          'Gain +2 to attack rolls and +2 to damage rolls against supernatural creatures.',
          'Gain +3 to attack rolls and +3 to damage rolls against supernatural creatures.'
        ]
      },
      {
        id: 'divine-protection',
        name: 'Divine Protection',
        description: 'Divine power shields you from supernatural harm.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Gain +1 to saving throws against supernatural effects.',
          'Gain +1 to saving throws and +1 AC against supernatural creatures.',
          'Gain +2 to saving throws against supernatural effects.',
          'Gain +2 to saving throws and +2 AC against supernatural creatures.',
          'Gain +3 to saving throws and +3 AC against supernatural creatures.'
        ]
      },

      // Tier 2 (Level 20) - Cruciform/Cross layout (vertical shaft)
      {
        id: 'divine-weapon',
        name: 'Divine Weapon',
        description: 'Imbue your weapon with divine power.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Above center
        requires: ['righteous-fury'],
        icon: '🗡️',
        rankDescription: [
          'Your weapon deals an additional 1d6 radiant damage against supernatural creatures.',
          'Your weapon deals an additional 1d8 radiant damage against supernatural creatures.',
          'Your weapon deals an additional 1d10 radiant damage against supernatural creatures.'
        ]
      },
      {
        id: 'spiritual-sight',
        name: 'Spiritual Sight',
        description: 'See into the spiritual realm to detect hidden threats.',
        maxRank: 3,
        position: { row: 4, col: 2 }, // Below center
        requires: ['righteous-fury'],
        icon: '👁️',
        rankDescription: [
          'Roll 1d20 to detect invisible supernatural entities within 30 feet. On a 17-20, you can see them clearly.',
          'Roll 1d20 to detect invisible supernatural entities within 60 feet. On a 15-20, you can see them clearly.',
          'Roll 1d20 to detect invisible supernatural entities within 90 feet. On a 13-20, you can see them clearly.'
        ]
      },

      // Tier 3 (Level 30) - Cruciform/Cross layout (horizontal beam)
      {
        id: 'smite-evil',
        name: 'Smite Evil',
        description: 'Channel divine power into a devastating attack against evil.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left of center
        requires: ['righteous-fury'],
        icon: '💥',
        rankDescription: [
          'Spend 2 Spirit Charges to empower your next attack. It deals an additional 2d8 radiant damage to supernatural creatures.',
          'Spend 2 Spirit Charges to empower your next attack. It deals an additional 3d8 radiant damage to supernatural creatures.',
          'Spend 2 Spirit Charges to empower your next attack. It deals an additional 4d8 radiant damage to supernatural creatures.'
        ]
      },
      {
        id: 'divine-armor',
        name: 'Divine Armor',
        description: 'Reinforce your armor with divine protection.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right of center
        requires: ['righteous-fury'],
        icon: '🛡️',
        rankDescription: [
          'Spend 1 Spirit Charge to gain +2 AC against supernatural creatures for 1d4 rounds.',
          'Spend 1 Spirit Charge to gain +2 AC against supernatural creatures and resistance to necrotic damage for 1d4 rounds.',
          'Spend 1 Spirit Charge to gain +3 AC against supernatural creatures and resistance to necrotic and psychic damage for 1d6 rounds.'
        ]
      },

      // Tier 4 (Level 40) - Cruciform/Cross layout (vertical extensions)
      {
        id: 'holy-strike',
        name: 'Holy Strike',
        description: 'Deliver a powerful strike imbued with divine energy.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Far above center
        requires: ['divine-weapon'],
        icon: '✝️',
        rankDescription: [
          'Spend 3 Spirit Charges to make a weapon attack with advantage. On a hit, the target takes an additional 3d8 radiant damage and must make a Constitution save or be stunned for 1 round.',
          'Spend 3 Spirit Charges to make a weapon attack with advantage. On a hit, the target takes an additional 4d8 radiant damage and must make a Constitution save with disadvantage or be stunned for 1 round.',
          'Spend 3 Spirit Charges to make a weapon attack with advantage. On a hit, the target takes an additional 5d8 radiant damage and must make a Constitution save with disadvantage or be stunned for 1d4 rounds.'
        ]
      },
      {
        id: 'divine-perception',
        name: 'Divine Perception',
        description: 'Enhance your senses with divine power to detect supernatural threats.',
        maxRank: 3,
        position: { row: 5, col: 2 }, // Far below center
        requires: ['spiritual-sight'],
        icon: '🔍',
        rankDescription: [
          'Spend 1 Spirit Charge to gain truesight to 30 feet for 1d4 rounds, allowing you to see invisible creatures, through illusions, and into the Ethereal Plane.',
          'Spend 1 Spirit Charge to gain truesight to 60 feet for 1d4 rounds, allowing you to see invisible creatures, through illusions, and into the Ethereal Plane.',
          'Spend 1 Spirit Charge to gain truesight to 90 feet for 1d6 rounds, allowing you to see invisible creatures, through illusions, and into the Ethereal Plane.'
        ]
      },

      // Tier 5 (Level 50) - Cruciform/Cross layout (horizontal extensions)
      {
        id: 'divine-judgment',
        name: 'Divine Judgment',
        description: 'Call down divine judgment on supernatural enemies.',
        maxRank: 3,
        position: { row: 3, col: -1 }, // Far left of center
        requires: ['smite-evil'],
        icon: '⚖️',
        rankDescription: [
          'Spend 4 Spirit Charges to target a supernatural creature within 60 feet. It takes 4d8 radiant damage and must make a Wisdom save or be frightened of you for 1d4 rounds.',
          'Spend 4 Spirit Charges to target a supernatural creature within 60 feet. It takes 5d8 radiant damage and must make a Wisdom save or be frightened of you for 1d6 rounds.',
          'Spend 4 Spirit Charges to target a supernatural creature within 60 feet. It takes 6d8 radiant damage and must make a Wisdom save with disadvantage or be frightened of you for 1d6 rounds.'
        ]
      },
      {
        id: 'spiritual-armor',
        name: 'Spiritual Armor',
        description: 'Surround yourself with divine armor that protects against all supernatural harm.',
        maxRank: 3,
        position: { row: 3, col: 5 }, // Far right of center
        requires: ['divine-armor'],
        icon: '🛡️',
        rankDescription: [
          'Spend 3 Spirit Charges to gain immunity to necrotic damage and resistance to all damage from supernatural sources for 1d4 rounds.',
          'Spend 3 Spirit Charges to gain immunity to necrotic damage and resistance to all damage from supernatural sources for 1d6 rounds.',
          'Spend 3 Spirit Charges to gain immunity to necrotic and psychic damage and resistance to all damage from supernatural sources for 1d6 rounds.'
        ]
      },

      // Tier 6 (Level 60) - Cruciform/Cross layout (diagonal extensions)
      {
        id: 'banishing-strike',
        name: 'Banishing Strike',
        description: 'Strike with such divine force that supernatural entities are banished from this plane.',
        maxRank: 1,
        position: { row: 1, col: 0 }, // Upper left diagonal
        requires: ['holy-strike', 'divine-judgment'],
        icon: '⚔️',
        rankDescription: [
          'Spend 5 Spirit Charges to make a weapon attack. On a hit, the target takes an additional 5d8 radiant damage and must make a Charisma save or be banished to its native plane for 1d6 rounds.'
        ]
      },
      {
        id: 'divine-shield',
        name: 'Divine Shield',
        description: 'Create a shield of divine energy that protects against supernatural attacks and reflects damage.',
        maxRank: 1,
        position: { row: 1, col: 4 }, // Upper right diagonal
        requires: ['holy-strike', 'spiritual-armor'],
        icon: '🛡️',
        rankDescription: [
          'Spend 4 Spirit Charges to create a divine shield that lasts for 1d6 rounds. The shield absorbs up to 5d10 damage from supernatural sources and reflects 50% of the absorbed damage back to the attacker.'
        ]
      },
      {
        id: 'binding-judgment',
        name: 'Binding Judgment',
        description: 'Pronounce a judgment that binds supernatural entities in place.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Lower left diagonal
        requires: ['divine-perception', 'divine-judgment'],
        icon: '⛓️',
        rankDescription: [
          'Spend 4 Spirit Charges to target up to 1d4 supernatural creatures within 60 feet. They must make a Wisdom save or be paralyzed for 1d4 rounds. While paralyzed, they take an additional 1d8 radiant damage at the start of their turn.'
        ]
      },
      {
        id: 'divine-ward',
        name: 'Divine Ward',
        description: 'Create a protective ward that shields allies from supernatural harm.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Lower right diagonal
        requires: ['divine-perception', 'spiritual-armor'],
        icon: '🔰',
        rankDescription: [
          'Spend 3 Spirit Charges to create a 20-foot radius ward centered on you that lasts for 1d6 rounds. Allies within the ward gain resistance to necrotic and psychic damage and advantage on saving throws against supernatural effects.'
        ]
      },

      // Tier 7 (Level 70) - Cruciform/Cross layout (capstone)
      {
        id: 'divine-champion',
        name: 'Divine Champion',
        description: 'Transform into a champion of divine power, gaining immense strength against supernatural foes.',
        maxRank: 1,
        position: { row: 3, col: 2 }, // Center (same as Righteous Fury)
        requires: ['banishing-strike', 'divine-shield', 'binding-judgment', 'divine-ward'],
        icon: '👼',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become a Divine Champion. While transformed, your weapon attacks deal an additional 4d8 radiant damage to supernatural creatures, you have advantage on all attacks and saving throws against supernatural creatures, and you are immune to being frightened, charmed, or possessed. Additionally, you generate 1d6 Spirit Charges at the start of each of your turns, and your Spirit Charge abilities cost 2 fewer charges to use (minimum 1).'
        ]
      },

      // Additional talents to fill out the cross shape
      {
        id: 'ghost-hunter',
        name: 'Ghost Hunter',
        description: 'Specialize in hunting and destroying incorporeal undead.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Upper left of center
        requires: ['divine-weapon', 'smite-evil'],
        icon: '👻',
        rankDescription: [
          'Your attacks can hit incorporeal creatures as if they were solid, and you deal an additional 1d6 damage to undead.',
          'Your attacks can hit incorporeal creatures as if they were solid, and you deal an additional 1d8 damage to undead.',
          'Your attacks can hit incorporeal creatures as if they were solid, and you deal an additional 1d10 damage to undead.'
        ]
      },
      {
        id: 'demon-slayer',
        name: 'Demon Slayer',
        description: 'Specialize in hunting and destroying fiends.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Upper right of center
        requires: ['divine-weapon', 'divine-armor'],
        icon: '😈',
        rankDescription: [
          'You have advantage on saving throws against fiend abilities, and you deal an additional 1d6 damage to fiends.',
          'You have advantage on saving throws against fiend abilities, and you deal an additional 1d8 damage to fiends.',
          'You have advantage on saving throws against fiend abilities, and you deal an additional 1d10 damage to fiends.'
        ]
      },
      {
        id: 'curse-breaker',
        name: 'Curse Breaker',
        description: 'Specialize in breaking curses and removing supernatural afflictions.',
        maxRank: 3,
        position: { row: 4, col: 1 }, // Lower left of center
        requires: ['spiritual-sight', 'smite-evil'],
        icon: '🔓',
        rankDescription: [
          'Spend 2 Spirit Charges to attempt to break a curse affecting a creature or object. Roll 1d20 + your Faith; on a 15 or higher, a curse of level 3 or lower is removed.',
          'Spend 2 Spirit Charges to attempt to break a curse affecting a creature or object. Roll 1d20 + your Faith; on a 15 or higher, a curse of level 5 or lower is removed.',
          'Spend 2 Spirit Charges to attempt to break a curse affecting a creature or object. Roll 1d20 + your Faith; on a 15 or higher, a curse of level 7 or lower is removed.'
        ]
      },
      {
        id: 'possession-breaker',
        name: 'Possession Breaker',
        description: 'Specialize in freeing creatures from supernatural possession.',
        maxRank: 3,
        position: { row: 4, col: 3 }, // Lower right of center
        requires: ['spiritual-sight', 'divine-armor'],
        icon: '🔆',
        rankDescription: [
          'Spend 2 Spirit Charges to attempt to free a possessed creature. The possessing entity must make a Wisdom save or be expelled.',
          'Spend 2 Spirit Charges to attempt to free a possessed creature. The possessing entity must make a Wisdom save with disadvantage or be expelled.',
          'Spend 2 Spirit Charges to attempt to free a possessed creature. The possessing entity must make a Wisdom save with disadvantage or be expelled and banished to its native plane.'
        ]
      },
    ],
  }
];

export default exorcistTalentTrees;
