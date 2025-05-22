// Talent trees for the Deathcaller class
const deathcallerTalentTrees = [
  {
    id: 'gravecaller',
    name: 'Gravecaller',
    description: 'Focus on summoning and minion mastery to grow your undead army and command the forces of death.',
    icon: '⚰️',
    talents: [
      // Tier 1 (Level 10) - Pentagram/Necromantic Circle layout (first row)
      {
        id: 'necromantic-focus',
        name: 'Necromantic Focus',
        description: 'Channel the power of death to fuel your necromantic abilities.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '💀',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your necromancy spells deal an additional 1d4 damage and you gain 1 Soul Charge when a creature dies within 30 feet.',
          'Your necromancy spells deal an additional 1d6 damage and you gain 1 Soul Charge when a creature dies within 30 feet.',
          'Your necromancy spells deal an additional 1d8 damage and you gain 1 Soul Charge when a creature dies within 40 feet.',
          'Your necromancy spells deal an additional 1d10 damage and you gain 1 Soul Charge when a creature dies within 40 feet.',
          'Your necromancy spells deal an additional 1d12 damage and you gain 1 Soul Charge when a creature dies within 50 feet.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'soul-collector',
        name: 'Soul Collector',
        description: 'Collect souls from the fallen to fuel your necromantic powers.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '👻',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Gain 1 additional Soul Charge when you collect a soul from a fallen enemy.',
          'Gain 1 additional Soul Charge when you collect a soul from a fallen enemy. 10% chance to gain a second Soul Charge.',
          'Gain 1 additional Soul Charge when you collect a soul from a fallen enemy. 20% chance to gain a second Soul Charge.',
          'Gain 1 additional Soul Charge when you collect a soul from a fallen enemy. 30% chance to gain a second Soul Charge.',
          'Gain 2 additional Soul Charges when you collect a soul from a fallen enemy.'
        ]
      },
      {
        id: 'necrotic-power',
        name: 'Necrotic Power',
        description: 'Channel the power of death to enhance your necromantic abilities.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '🔮',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your necromancy spells have a 10% increased effect.',
          'Your necromancy spells have a 20% increased effect.',
          'Your necromancy spells have a 30% increased effect.',
          'Your necromancy spells have a 40% increased effect.',
          'Your necromancy spells have a 50% increased effect.'
        ]
      },

      // Tier 2 (Level 20) - Pentagram/Necromantic Circle layout (inner circle)
      {
        id: 'raise-dead',
        name: 'Raise Dead',
        description: 'Raise a fallen enemy as a zombie servant.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Upper left of center
        requires: ['necromantic-focus', 'soul-collector'],
        icon: '🧟',
        rankDescription: [
          'Spend 1 Soul Charge to raise a fallen enemy as a zombie with 2d6 hit points. It serves you for 1d4 rounds.',
          'Spend 1 Soul Charge to raise a fallen enemy as a zombie with 3d6 hit points. It serves you for 1d6 rounds.',
          'Spend 1 Soul Charge to raise a fallen enemy as a zombie with 4d6 hit points. It serves you for 1d8 rounds.'
        ]
      },
      {
        id: 'death-touch',
        name: 'Death Touch',
        description: 'Channel necrotic energy through your touch.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Upper right of center
        requires: ['necromantic-focus'],
        icon: '👆',
        rankDescription: [
          'Your touch deals 2d6 necrotic damage and heals you for half the amount. If this kills the target, gain 1 Soul Charge.',
          'Your touch deals 2d8 necrotic damage and heals you for half the amount. If this kills the target, gain 1 Soul Charge.',
          'Your touch deals 3d6 necrotic damage and heals you for half the amount. If this kills the target, gain 1 Soul Charge.'
        ]
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Harvest souls from the dead to fuel your necromantic powers.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Lower left of center
        requires: ['necromantic-focus'],
        icon: '👻',
        rankDescription: [
          'When a creature dies within 30 feet, roll 1d6. On a 4-6, gain an additional Soul Charge.',
          'When a creature dies within 30 feet, roll 1d6. On a 3-6, gain an additional Soul Charge.',
          'When a creature dies within 30 feet, roll 1d6. On a 2-6, gain an additional Soul Charge.'
        ]
      },
      {
        id: 'bone-armor',
        name: 'Bone Armor',
        description: 'Create armor from bones to protect yourself.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Lower right of center
        requires: ['necromantic-focus'],
        icon: '🦴',
        rankDescription: [
          'Spend 1 Soul Charge to gain +2 AC for 1d4 rounds. While active, you have resistance to piercing damage.',
          'Spend 1 Soul Charge to gain +3 AC for 1d6 rounds. While active, you have resistance to piercing damage.',
          'Spend 1 Soul Charge to gain +4 AC for 1d8 rounds. While active, you have resistance to piercing and slashing damage.'
        ]
      },

      // Tier 3 (Level 30) - Pentagram/Necromantic Circle layout (outer circle)
      {
        id: 'command-undead',
        name: 'Command Undead',
        description: 'Exert control over existing undead creatures.',
        maxRank: 3,
        position: { row: 0, col: 0 }, // Far upper left
        requires: ['raise-dead'],
        icon: '🧠',
        rankDescription: [
          'Spend 1 Soul Charge to target an undead creature. Roll 1d20 + your Intelligence; on a 15 or higher, you take control of it for 1d4 rounds.',
          'Spend 1 Soul Charge to target an undead creature. Roll 1d20 + your Intelligence; on a 13 or higher, you take control of it for 1d6 rounds.',
          'Spend 1 Soul Charge to target an undead creature. Roll 1d20 + your Intelligence; on a 11 or higher, you take control of it for 1d8 rounds.'
        ]
      },
      {
        id: 'necrotic-blast',
        name: 'Necrotic Blast',
        description: 'Channel death energy into a powerful blast.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Far upper right
        requires: ['death-touch'],
        icon: '💥',
        rankDescription: [
          'Spend 1 Soul Charge to fire a blast of necrotic energy that deals 3d6 damage to the target and 1d6 to enemies within 10 feet.',
          'Spend 1 Soul Charge to fire a blast of necrotic energy that deals 3d8 damage to the target and 1d8 to enemies within 10 feet.',
          'Spend 1 Soul Charge to fire a blast of necrotic energy that deals 4d6 damage to the target and 2d6 to enemies within 15 feet.'
        ]
      },
      {
        id: 'soul-consumption',
        name: 'Soul Consumption',
        description: 'Consume harvested souls to empower yourself.',
        maxRank: 3,
        position: { row: 4, col: 0 }, // Far lower left
        requires: ['soul-harvest'],
        icon: '🔥',
        rankDescription: [
          'Spend 2 Soul Charges to gain 2d6 temporary hit points and +1d6 to your next damage roll.',
          'Spend 2 Soul Charges to gain 2d8 temporary hit points and +1d8 to your next damage roll.',
          'Spend 2 Soul Charges to gain 3d6 temporary hit points and +1d10 to your next damage roll.'
        ]
      },
      {
        id: 'death-pact',
        name: 'Death Pact',
        description: 'Form a pact with death itself, gaining power at a cost.',
        maxRank: 3,
        position: { row: 4, col: 4 }, // Far lower right
        requires: ['bone-armor'],
        icon: '📜',
        rankDescription: [
          'Sacrifice 1d8 hit points to gain 2 Soul Charges and advantage on all necromancy spells for 1d4 rounds.',
          'Sacrifice 1d8 hit points to gain 3 Soul Charges and advantage on all necromancy spells for 1d6 rounds.',
          'Sacrifice 1d8 hit points to gain 4 Soul Charges and advantage on all necromancy spells for 1d8 rounds.'
        ]
      },

      // Tier 4 (Level 40) - Pentagram/Necromantic Circle layout (pentagram points)
      {
        id: 'undead-army',
        name: 'Undead Army',
        description: 'Raise multiple undead servants simultaneously.',
        maxRank: 3,
        position: { row: -1, col: 2 }, // Top point (moved up)
        requires: ['command-undead', 'necrotic-blast'],
        icon: '⚰️',
        rankDescription: [
          'Spend 3 Soul Charges to raise 1d4+1 undead servants from nearby corpses. Each has 3d6 hit points and serves for 1d6 rounds.',
          'Spend 3 Soul Charges to raise 1d6+1 undead servants from nearby corpses. Each has 3d8 hit points and serves for 1d8 rounds.',
          'Spend 3 Soul Charges to raise 1d8+1 undead servants from nearby corpses. Each has 4d6 hit points and serves for 1d10 rounds.'
        ]
      },
      {
        id: 'grave-lord',
        name: 'Grave Lord',
        description: 'Your mastery over the dead increases, allowing you to raise more powerful undead.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left point
        requires: ['command-undead', 'soul-consumption'],
        icon: '👑',
        rankDescription: [
          'Your undead servants gain +2d6 hit points and deal an additional 1d6 damage. When they kill an enemy, you gain 1 Soul Charge.',
          'Your undead servants gain +2d8 hit points and deal an additional 1d8 damage. When they kill an enemy, you gain 1 Soul Charge.',
          'Your undead servants gain +3d6 hit points and deal an additional 1d10 damage. When they kill an enemy, you gain 1 Soul Charge.'
        ]
      },
      {
        id: 'soul-explosion',
        name: 'Soul Explosion',
        description: 'Release harvested souls in a devastating explosion.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right point
        requires: ['necrotic-blast', 'death-pact'],
        icon: '💣',
        rankDescription: [
          'Spend 3 Soul Charges to create an explosion that deals 4d8 necrotic damage to all enemies within 20 feet. For each enemy killed, gain 1 Soul Charge.',
          'Spend 3 Soul Charges to create an explosion that deals 5d8 necrotic damage to all enemies within 20 feet. For each enemy killed, gain 1 Soul Charge.',
          'Spend 3 Soul Charges to create an explosion that deals 6d8 necrotic damage to all enemies within 30 feet. For each enemy killed, gain 1 Soul Charge.'
        ]
      },
      {
        id: 'death-domain',
        name: 'Death Domain',
        description: 'Create a zone of death energy that empowers your undead and weakens the living.',
        maxRank: 3,
        position: { row: 4, col: 2 }, // Bottom point
        requires: ['soul-consumption', 'death-pact'],
        icon: '⚫',
        rankDescription: [
          'Spend 3 Soul Charges to create a 20-foot radius zone for 1d4 rounds. Your undead in the zone gain +1d6 damage, and living creatures take 1d8 necrotic damage at the start of their turn.',
          'Spend 3 Soul Charges to create a 30-foot radius zone for 1d6 rounds. Your undead in the zone gain +1d8 damage, and living creatures take 1d10 necrotic damage at the start of their turn.',
          'Spend 3 Soul Charges to create a 40-foot radius zone for 1d8 rounds. Your undead in the zone gain +1d10 damage, and living creatures take 2d6 necrotic damage at the start of their turn.'
        ]
      },

      // Tier 5 (Level 50) - Pentagram/Necromantic Circle layout (inner star)
      {
        id: 'skeletal-champion',
        name: 'Skeletal Champion',
        description: 'Raise a powerful skeletal champion to fight for you.',
        maxRank: 1,
        position: { row: 1, col: 0 }, // Upper left inner star
        requires: ['grave-lord'],
        icon: '💪',
        rankDescription: [
          'Spend 4 Soul Charges to raise a skeletal champion with 8d6 hit points, 3 attacks per round dealing 2d6+2 damage each, and immunity to necrotic damage. It serves you for 1d6+2 rounds.'
        ]
      },
      {
        id: 'soul-siphon',
        name: 'Soul Siphon',
        description: 'Create a channel between you and a target, draining their life force.',
        maxRank: 1,
        position: { row: 1, col: 4 }, // Upper right inner star
        requires: ['soul-explosion'],
        icon: '⛓️',
        rankDescription: [
          'Spend 4 Soul Charges to create a channel between you and a target for 1d4 rounds. At the start of your turn, the target takes 3d6 necrotic damage, and you heal for the same amount. If the target dies while affected, gain 2 Soul Charges.'
        ]
      },
      {
        id: 'grave-mist',
        name: 'Grave Mist',
        description: 'Summon a mist of death that obscures vision and damages the living.',
        maxRank: 1,
        position: { row: 3, col: 0 }, // Lower left inner star
        requires: ['grave-lord', 'death-domain'],
        icon: '🌫️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 30-foot radius mist for 1d6 rounds. The area is heavily obscured, living creatures take 2d6 necrotic damage at the start of their turn, and your undead gain advantage on attack rolls.'
        ]
      },
      {
        id: 'death-knight',
        name: 'Death Knight',
        description: 'Transform into a powerful death knight, gaining immense strength and necromantic power.',
        maxRank: 1,
        position: { row: 3, col: 4 }, // Lower right inner star
        requires: ['soul-explosion', 'death-domain'],
        icon: '🗡️',
        rankDescription: [
          'Spend 5 Soul Charges to transform into a death knight for 1d4+1 rounds. While transformed, you gain +4 AC, resistance to all damage except radiant, and your weapon attacks deal an additional 3d6 necrotic damage. You generate 1 Soul Charge at the start of each of your turns.'
        ]
      },

      // Tier 6 (Level 60) - Pentagram/Necromantic Circle layout (outer star)
      {
        id: 'legion-of-the-dead',
        name: 'Legion of the Dead',
        description: 'Raise a massive army of the dead to fight for you.',
        maxRank: 1,
        position: { row: 0, col: 1 }, // Far upper left star
        requires: ['skeletal-champion', 'undead-army'],
        icon: '👥',
        rankDescription: [
          'Spend 6 Soul Charges to raise a legion of 2d6+4 undead servants. Each has 4d6 hit points and deals 2d6 damage. They serve you for 1d6+2 rounds. When any of them kills an enemy, you gain 1 Soul Charge.'
        ]
      },
      {
        id: 'soul-storm',
        name: 'Soul Storm',
        description: 'Create a storm of soul energy that devastates your enemies.',
        maxRank: 1,
        position: { row: 0, col: 3 }, // Far upper right star
        requires: ['undead-army', 'soul-siphon'],
        icon: '🌪️',
        rankDescription: [
          'Spend 6 Soul Charges to create a 40-foot radius storm for 1d4 rounds. Enemies in the storm take 3d8 necrotic damage at the start of their turn and must make a Strength save or be pulled 10 feet toward the center. For each enemy killed by the storm, gain 1 Soul Charge.'
        ]
      },
      {
        id: 'lichform',
        name: 'Lichform',
        description: 'Transform into a lich temporarily, gaining immense necromantic power.',
        maxRank: 1,
        position: { row: 4, col: 1 }, // Far lower left star
        requires: ['grave-mist', 'death-domain'],
        icon: '👁️',
        rankDescription: [
          'Spend 6 Soul Charges to transform into a lich for 1d4+1 rounds. While transformed, you gain immunity to necrotic damage, your necromancy spells deal double damage, and you can raise undead without spending Soul Charges. At the end of the transformation, you lose half your current hit points.'
        ]
      },
      {
        id: 'death-incarnate',
        name: 'Death Incarnate',
        description: 'Become the embodiment of death itself, gaining tremendous power over life and death.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Far lower right star
        requires: ['death-knight', 'death-domain'],
        icon: '⚰️',
        rankDescription: [
          'Spend 6 Soul Charges to become Death Incarnate for 1d4 rounds. While in this form, your touch instantly kills any creature with 30 hit points or fewer (no save), you are immune to all damage except radiant, and you gain 1 Soul Charge whenever any creature dies within 60 feet.'
        ]
      },

      // Tier 7 (Level 70) - Pentagram/Necromantic Circle layout (capstone)
      {
        id: 'master-of-death',
        name: 'Master of Death',
        description: 'Achieve ultimate mastery over death and undeath, commanding vast armies of the dead.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center (same as Necromantic Focus)
        requires: ['legion-of-the-dead', 'soul-storm', 'lichform', 'death-incarnate'],
        icon: '🌑',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become a true Master of Death. During this time, you can raise any fallen enemy as an undead servant as a bonus action, your undead servants gain +4d6 hit points and deal double damage, your necromancy spells cost 2 fewer Soul Charges (minimum 0), and you gain 2 Soul Charges at the start of each of your turns. Additionally, when any creature dies within 100 feet, you gain 1 Soul Charge and can choose to raise it as an undead under your control.'
        ]
      },
    ],
  },
  {
    id: 'reaper',
    name: 'Reaper',
    description: 'Focus on single-target strikes and soul reaping to execute key targets and harvest souls with deadly precision.',
    icon: '🔪',
    talents: [
      // Tier 1 (Level 10) - Scythe/Crescent layout (first row)
      {
        id: 'soul-reaper',
        name: 'Soul Reaper',
        description: 'Harvest the souls of the fallen to fuel your deadly abilities.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '🪓',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When a creature dies within 30 feet, gain 1 Soul Charge and deal 1d4 additional damage on your next attack.',
          'When a creature dies within 30 feet, gain 1 Soul Charge and deal 1d6 additional damage on your next attack.',
          'When a creature dies within 40 feet, gain 1 Soul Charge and deal 1d8 additional damage on your next attack.',
          'When a creature dies within 40 feet, gain 1 Soul Charge and deal 1d10 additional damage on your next attack.',
          'When a creature dies within 50 feet, gain 1 Soul Charge and deal 1d12 additional damage on your next attack.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'death-sense',
        name: 'Death Sense',
        description: 'Sense when creatures are near death, making them easier to finish off.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '👁️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'You can sense when creatures are below 20% health. Gain +1 to attack rolls against such creatures.',
          'You can sense when creatures are below 25% health. Gain +1 to attack rolls against such creatures.',
          'You can sense when creatures are below 30% health. Gain +2 to attack rolls against such creatures.',
          'You can sense when creatures are below 35% health. Gain +2 to attack rolls against such creatures.',
          'You can sense when creatures are below 40% health. Gain +3 to attack rolls against such creatures.'
        ]
      },
      {
        id: 'soul-thirst',
        name: 'Soul Thirst',
        description: 'Your hunger for souls grows, allowing you to harvest them more efficiently.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '💧',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Soul Charges last 1 additional round before dissipating.',
          'Soul Charges last 2 additional rounds before dissipating.',
          'Soul Charges last 3 additional rounds before dissipating and you can hold 1 additional Soul Charge.',
          'Soul Charges last 4 additional rounds before dissipating and you can hold 2 additional Soul Charges.',
          'Soul Charges last 5 additional rounds before dissipating and you can hold 3 additional Soul Charges.'
        ]
      },

      // Tier 2 (Level 20) - Scythe/Crescent layout (handle)
      {
        id: 'soul-trap',
        name: 'Soul Trap',
        description: 'Trap the soul of a dying creature.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Middle of handle
        requires: ['soul-reaper', 'death-sense'],
        icon: '⚱️',
        rankDescription: [
          'When a creature dies within 30 feet, roll 1d6. On a 5-6, trap its soul in a soul gem, gaining 1 additional Soul Charge.',
          'When a creature dies within 30 feet, roll 1d6. On a 4-6, trap its soul in a soul gem, gaining 1 additional Soul Charge.',
          'When a creature dies within 30 feet, roll 1d6. On a 3-6, trap its soul in a soul gem, gaining 1 additional Soul Charge.'
        ]
      },
      {
        id: 'death-strike',
        name: 'Death Strike',
        description: 'Channel soul energy into a devastating strike.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Upper handle
        requires: ['soul-trap'],
        icon: '⚔️',
        rankDescription: [
          'Spend 1 Soul Charge to make an attack that deals an additional 2d6 necrotic damage. If this kills the target, gain 2 Soul Charges.',
          'Spend 1 Soul Charge to make an attack that deals an additional 2d8 necrotic damage. If this kills the target, gain 2 Soul Charges.',
          'Spend 1 Soul Charge to make an attack that deals an additional 3d6 necrotic damage. If this kills the target, gain 2 Soul Charges.'
        ]
      },
      {
        id: 'soul-sight',
        name: 'Soul Sight',
        description: 'See the souls of living and dead creatures.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Top of handle
        requires: ['death-strike'],
        icon: '👁️',
        rankDescription: [
          'You can see souls within 30 feet, even through walls. Gain advantage on attacks against creatures with less than 30% of their maximum hit points.',
          'You can see souls within 60 feet, even through walls. Gain advantage on attacks against creatures with less than 40% of their maximum hit points.',
          'You can see souls within 90 feet, even through walls. Gain advantage on attacks against creatures with less than 50% of their maximum hit points.'
        ]
      },

      // Tier 3 (Level 30) - Scythe/Crescent layout (blade start)
      {
        id: 'soul-leech',
        name: 'Soul Leech',
        description: 'Drain a portion of a creature\'s soul to heal yourself.',
        maxRank: 3,
        position: { row: 0, col: 1 }, // Start of blade curve
        requires: ['soul-sight'],
        icon: '💉',
        rankDescription: [
          'Spend 1 Soul Charge to deal 2d6 necrotic damage to a target and heal yourself for the same amount.',
          'Spend 1 Soul Charge to deal 2d8 necrotic damage to a target and heal yourself for the same amount.',
          'Spend 1 Soul Charge to deal 3d6 necrotic damage to a target and heal yourself for the same amount.'
        ]
      },
      {
        id: 'soul-bind-weapon',
        name: 'Soul Bind Weapon',
        description: 'Bind a trapped soul to your weapon.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Blade curve (moved right)
        requires: ['soul-leech'],
        icon: '🗡️',
        rankDescription: [
          'Spend 2 Soul Charges to bind a soul to your weapon for 1d4 rounds. Your weapon deals an additional 2d6 necrotic damage.',
          'Spend 2 Soul Charges to bind a soul to your weapon for 1d6 rounds. Your weapon deals an additional 2d8 necrotic damage.',
          'Spend 2 Soul Charges to bind a soul to your weapon for 1d8 rounds. Your weapon deals an additional 3d6 necrotic damage.'
        ]
      },
      {
        id: 'soul-mark',
        name: 'Soul Mark',
        description: 'Mark a creature\'s soul, making it easier to track and harm.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Blade curve
        requires: ['soul-bind-weapon'],
        icon: '🎯',
        rankDescription: [
          'Spend 1 Soul Charge to mark a creature\'s soul for 1d4 rounds. You always know its location, and your attacks against it deal an additional 1d8 damage.',
          'Spend 1 Soul Charge to mark a creature\'s soul for 1d6 rounds. You always know its location, and your attacks against it deal an additional 1d10 damage.',
          'Spend 1 Soul Charge to mark a creature\'s soul for 1d8 rounds. You always know its location, and your attacks against it deal an additional 1d12 damage.'
        ]
      },
      {
        id: 'executioner',
        name: 'Executioner',
        description: 'Deliver a powerful execution strike against weakened foes.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Blade curve
        requires: ['soul-mark'],
        icon: '🪓',
        rankDescription: [
          'Spend 2 Soul Charges to attack a target. If the target is below 30% of its maximum hit points, deal an additional 3d8 damage.',
          'Spend 2 Soul Charges to attack a target. If the target is below 40% of its maximum hit points, deal an additional 4d8 damage.',
          'Spend 2 Soul Charges to attack a target. If the target is below 50% of its maximum hit points, deal an additional 5d8 damage.'
        ]
      },

      // Tier 4 (Level 40) - Scythe/Crescent layout (blade middle)
      {
        id: 'soul-rend',
        name: 'Soul Rend',
        description: 'Tear at a creature\'s soul, causing it to bleed soul energy.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Blade curve
        requires: ['executioner'],
        icon: '✂️',
        rankDescription: [
          'Spend 2 Soul Charges to make an attack that deals 2d8 necrotic damage and causes the target to take 1d6 necrotic damage at the start of its turn for 1d4 rounds.',
          'Spend 2 Soul Charges to make an attack that deals 2d10 necrotic damage and causes the target to take 1d8 necrotic damage at the start of its turn for 1d6 rounds.',
          'Spend 2 Soul Charges to make an attack that deals 3d8 necrotic damage and causes the target to take 1d10 necrotic damage at the start of its turn for 1d8 rounds.'
        ]
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Harvest multiple souls at once from nearby dying creatures.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Blade curve
        requires: ['soul-rend'],
        icon: '👻',
        rankDescription: [
          'When a creature dies within 30 feet, all other enemies within 10 feet of it take 1d8 necrotic damage. For each additional creature killed by this effect, gain 1 Soul Charge.',
          'When a creature dies within 30 feet, all other enemies within 15 feet of it take 1d10 necrotic damage. For each additional creature killed by this effect, gain 1 Soul Charge.',
          'When a creature dies within 30 feet, all other enemies within 20 feet of it take 1d12 necrotic damage. For each additional creature killed by this effect, gain 1 Soul Charge.'
        ]
      },
      {
        id: 'reaping-strike',
        name: 'Reaping Strike',
        description: 'Deliver a wide, sweeping strike that can hit multiple enemies.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Blade curve
        requires: ['soul-harvest'],
        icon: '🌙',
        rankDescription: [
          'Spend 3 Soul Charges to make an attack against all enemies in a 15-foot cone. Each hit deals 2d8 necrotic damage. For each enemy killed, gain 1 Soul Charge.',
          'Spend 3 Soul Charges to make an attack against all enemies in a 20-foot cone. Each hit deals 2d10 necrotic damage. For each enemy killed, gain 1 Soul Charge.',
          'Spend 3 Soul Charges to make an attack against all enemies in a 25-foot cone. Each hit deals 3d8 necrotic damage. For each enemy killed, gain 1 Soul Charge.'
        ]
      },

      // Tier 5 (Level 50) - Scythe/Crescent layout (blade tip)
      {
        id: 'soul-devour',
        name: 'Soul Devour',
        description: 'Completely consume a soul to gain tremendous power.',
        maxRank: 1,
        position: { row: 1, col: 5 }, // Blade tip
        requires: ['soul-rend'],
        icon: '🔥',
        rankDescription: [
          'Spend 4 Soul Charges to consume a trapped soul. Gain 4d8 temporary hit points, +2d8 to all damage rolls, and advantage on all attacks for 1d6 rounds.'
        ]
      },
      {
        id: 'death-sentence',
        name: 'Death Sentence',
        description: 'Mark a creature for death, making it extremely vulnerable to your attacks.',
        maxRank: 1,
        position: { row: 2, col: 5 }, // Blade tip
        requires: ['soul-harvest'],
        icon: '⚖️',
        rankDescription: [
          'Spend 4 Soul Charges to mark a creature for death for 1d4 rounds. While marked, your attacks against the creature have advantage, deal an additional 2d8 necrotic damage, and critically hit on a roll of 18-20. If the creature dies while marked, gain 3 Soul Charges.'
        ]
      },
      {
        id: 'soul-storm',
        name: 'Soul Storm',
        description: 'Release a storm of soul energy that devastates your enemies.',
        maxRank: 1,
        position: { row: 3, col: 5 }, // Blade tip
        requires: ['reaping-strike'],
        icon: '🌪️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 30-foot radius storm centered on you for 1d4 rounds. Enemies in the storm take 2d8 necrotic damage at the start of their turn. For each enemy killed by the storm, gain 1 Soul Charge and heal for 1d8 hit points.'
        ]
      },

      // Tier 6 (Level 60) - Scythe/Crescent layout (connecting nodes)
      {
        id: 'soul-link',
        name: 'Soul Link',
        description: 'Create a link between multiple creatures, sharing damage among them.',
        maxRank: 1,
        position: { row: 1, col: 2 }, // Connecting node
        requires: ['soul-leech', 'soul-devour'],
        icon: '⛓️',
        rankDescription: [
          'Spend 5 Soul Charges to link up to 1d4+1 creatures within 60 feet for 1d6 rounds. When one linked creature takes damage, all other linked creatures take half that amount as necrotic damage. When a linked creature dies, gain 2 Soul Charges.'
        ]
      },
      {
        id: 'deaths-embrace',
        name: 'Death\'s Embrace',
        description: 'Surround yourself with death energy that harms enemies and heals you.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Connecting node
        requires: ['death-strike', 'death-sentence'],
        icon: '🔄',
        rankDescription: [
          'Spend 5 Soul Charges to create a 15-foot aura around you for 1d6 rounds. Enemies within the aura take 2d6 necrotic damage at the start of their turn, and you heal for half the total damage dealt each round. When an enemy dies within the aura, gain 2 Soul Charges.'
        ]
      },
      {
        id: 'soul-explosion',
        name: 'Soul Explosion',
        description: 'Detonate a trapped soul, causing massive damage to nearby enemies.',
        maxRank: 1,
        position: { row: 3, col: 2 }, // Connecting node
        requires: ['soul-trap', 'soul-storm'],
        icon: '💥',
        rankDescription: [
          'Spend 5 Soul Charges to create an explosion that deals 6d8 necrotic damage to all enemies within 30 feet. Enemies reduced to 0 hit points by this explosion have their souls automatically trapped, and you gain 1 Soul Charge for each soul trapped.'
        ]
      },

      // Tier 7 (Level 70) - Scythe/Crescent layout (capstone)
      {
        id: 'soul-master',
        name: 'Soul Master',
        description: 'Achieve ultimate mastery over souls, becoming a true harvester of death.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Center of blade curve
        requires: ['soul-link', 'deaths-embrace', 'soul-explosion'],
        icon: '👑',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become a true Soul Master. During this time, you automatically trap the souls of creatures that die within 60 feet, your soul-based abilities cost 2 fewer Soul Charges (minimum 0), your weapon attacks deal an additional 3d8 necrotic damage, and you gain 2 Soul Charges at the start of each of your turns. Additionally, once during this time, you can consume all your Soul Charges to deal 2d8 necrotic damage per Soul Charge to a single target, with no save.'
        ]
      },
    ],
  },
  {
    id: 'tombwarden',
    name: 'Tombwarden',
    description: 'Focus on defensive and battlefield control through necromantic wards, barriers, and domain control.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10) - Fortress/Shield layout (first row)
      {
        id: 'death-warden',
        name: 'Death Warden',
        description: 'Master the art of necromantic protection and battlefield control.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '🏰',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Gain 1d4 temporary hit points whenever you cast a necromancy spell. Your necromantic barriers last 1 additional round.',
          'Gain 1d6 temporary hit points whenever you cast a necromancy spell. Your necromantic barriers last 1 additional round.',
          'Gain 1d8 temporary hit points whenever you cast a necromancy spell. Your necromantic barriers last 2 additional rounds.',
          'Gain 1d10 temporary hit points whenever you cast a necromancy spell. Your necromantic barriers last 2 additional rounds.',
          'Gain 1d12 temporary hit points whenever you cast a necromancy spell. Your necromantic barriers last 3 additional rounds.'
        ]
      },

      // Tier 1 (Level 10) - Additional starter nodes
      {
        id: 'necrotic-shield',
        name: 'Necrotic Shield',
        description: 'Create a shield of necrotic energy that absorbs damage.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Create a shield that absorbs 1d6 damage before breaking.',
          'Create a shield that absorbs 1d8 damage before breaking.',
          'Create a shield that absorbs 1d10 damage before breaking.',
          'Create a shield that absorbs 1d12 damage before breaking.',
          'Create a shield that absorbs 2d8 damage before breaking.'
        ]
      },
      {
        id: 'death-sense',
        name: 'Death Sense',
        description: 'Sense the presence of death and undeath around you.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '👁️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Detect undead creatures within 30 feet.',
          'Detect undead creatures within 60 feet.',
          'Detect undead creatures within 90 feet and determine their general type.',
          'Detect undead creatures within 120 feet and determine their exact type and power level.',
          'Detect undead creatures within 150 feet, determine their exact type and power level, and gain advantage on saving throws against their abilities.'
        ]
      },

      // Tier 2 (Level 20) - Fortress/Shield layout (foundation)
      {
        id: 'death-bolt',
        name: 'Death Bolt',
        description: 'Fire a bolt of death energy.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left foundation
        requires: ['death-warden', 'necrotic-shield'],
        icon: '⚡',
        rankDescription: [
          'Spend 1 Soul Charge to fire a bolt that deals 2d8 necrotic damage. If this kills the target, gain 1 Soul Charge.',
          'Spend 1 Soul Charge to fire a bolt that deals 2d10 necrotic damage. If this kills the target, gain 1 Soul Charge.',
          'Spend 1 Soul Charge to fire a bolt that deals 3d8 necrotic damage. If this kills the target, gain 1 Soul Charge.'
        ]
      },
      {
        id: 'death-ward',
        name: 'Death Ward',
        description: 'Protect yourself from death magic and life-draining effects.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Center foundation
        requires: ['death-warden'],
        icon: '🛡️',
        rankDescription: [
          'Spend 1 Soul Charge to gain resistance to necrotic damage and advantage on saves against death effects for 1d4 rounds.',
          'Spend 1 Soul Charge to gain resistance to necrotic damage and advantage on saves against death effects for 1d6 rounds.',
          'Spend 1 Soul Charge to gain immunity to necrotic damage and advantage on saves against death effects for 1d6 rounds.'
        ]
      },
      {
        id: 'life-sense',
        name: 'Life Sense',
        description: 'Sense the presence of life and undeath around you.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right foundation
        requires: ['death-warden'],
        icon: '👁️',
        rankDescription: [
          'Detect living and undead creatures within 60 feet. Gain advantage on saving throws against surprise attacks from creatures you detect.',
          'Detect living and undead creatures within 90 feet and determine their general health status. Gain advantage on saving throws against surprise attacks from creatures you detect.',
          'Detect living and undead creatures within 120 feet, determine their exact hit points, and identify any death magic affecting them. Gain advantage on saving throws against surprise attacks from creatures you detect.'
        ]
      },

      // Tier 3 (Level 30) - Fortress/Shield layout (walls)
      {
        id: 'death-wave',
        name: 'Death Wave',
        description: 'Release a wave of death energy that damages all enemies around you.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left wall
        requires: ['death-bolt'],
        icon: '🌊',
        rankDescription: [
          'Spend 2 Soul Charges to release a 20-foot wave that deals 3d6 necrotic damage to all enemies caught in it and pushes them back 10 feet.',
          'Spend 2 Soul Charges to release a 30-foot wave that deals 3d8 necrotic damage to all enemies caught in it and pushes them back 15 feet.',
          'Spend 2 Soul Charges to release a 40-foot wave that deals 4d8 necrotic damage to all enemies caught in it and pushes them back 20 feet.'
        ]
      },
      {
        id: 'bone-wall',
        name: 'Bone Wall',
        description: 'Create a wall of bones that blocks movement and attacks.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Left-center wall
        requires: ['death-bolt', 'death-ward'],
        icon: '🦴',
        rankDescription: [
          'Spend 2 Soul Charges to create a 15-foot long, 10-foot high wall of bones with 3d6 hit points per 5-foot section. The wall lasts for 1d4 rounds or until destroyed.',
          'Spend 2 Soul Charges to create a 20-foot long, 15-foot high wall of bones with 3d8 hit points per 5-foot section. The wall lasts for 1d6 rounds or until destroyed.',
          'Spend 2 Soul Charges to create a 30-foot long, 20-foot high wall of bones with 4d8 hit points per 5-foot section. The wall lasts for 1d8 rounds or until destroyed.'
        ]
      },
      {
        id: 'life-drain',
        name: 'Life Drain',
        description: 'Drain life force from a target to heal yourself.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Right-center wall
        requires: ['death-ward', 'life-sense'],
        icon: '💉',
        rankDescription: [
          'Spend 1 Soul Charge to deal 3d6 necrotic damage to a target and heal yourself for the same amount.',
          'Spend 1 Soul Charge to deal 3d8 necrotic damage to a target and heal yourself for the same amount.',
          'Spend 1 Soul Charge to deal 4d6 necrotic damage to a target and heal yourself for the same amount.'
        ]
      },
      {
        id: 'spectral-sentinel',
        name: 'Spectral Sentinel',
        description: 'Summon a spectral guardian to protect an area.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right wall
        requires: ['life-sense'],
        icon: '👻',
        rankDescription: [
          'Spend 2 Soul Charges to summon a spectral sentinel with 3d6 hit points. It guards a 15-foot radius area for 1d4 rounds, attacking any enemies that enter with +5 to hit, dealing 1d10 necrotic damage.',
          'Spend 2 Soul Charges to summon a spectral sentinel with 3d8 hit points. It guards a 20-foot radius area for 1d6 rounds, attacking any enemies that enter with +6 to hit, dealing 1d12 necrotic damage.',
          'Spend 2 Soul Charges to summon a spectral sentinel with 4d8 hit points. It guards a 30-foot radius area for 1d8 rounds, attacking any enemies that enter with +7 to hit, dealing 2d8 necrotic damage.'
        ]
      },

      // Tier 4 (Level 40) - Fortress/Shield layout (upper structure)
      {
        id: 'circle-of-death',
        name: 'Circle of Death',
        description: 'Create a circle of death energy that damages enemies who enter or remain within it.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left upper structure
        requires: ['death-wave'],
        icon: '⭕',
        rankDescription: [
          'Spend 3 Soul Charges to create a 20-foot radius circle for 1d4 rounds. Enemies who enter or start their turn in the circle take 3d6 necrotic damage.',
          'Spend 3 Soul Charges to create a 30-foot radius circle for 1d6 rounds. Enemies who enter or start their turn in the circle take 3d8 necrotic damage.',
          'Spend 3 Soul Charges to create a 40-foot radius circle for 1d8 rounds. Enemies who enter or start their turn in the circle take 4d8 necrotic damage.'
        ]
      },
      {
        id: 'deaths-grasp',
        name: 'Death\'s Grasp',
        description: 'Channel death energy to grip and crush a target.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left-center upper structure
        requires: ['bone-wall'],
        icon: '✊',
        rankDescription: [
          'Spend 2 Soul Charges to target a creature and deal 3d8 necrotic damage. The target must make a Strength save or be restrained for 1d4 rounds.',
          'Spend 2 Soul Charges to target a creature and deal 4d8 necrotic damage. The target must make a Strength save or be restrained for 1d6 rounds.',
          'Spend 2 Soul Charges to target a creature and deal 5d8 necrotic damage. The target must make a Strength save with disadvantage or be restrained for 1d6 rounds.'
        ]
      },
      {
        id: 'deaths-embrace',
        name: 'Death\'s Embrace',
        description: 'Surround yourself with death energy that harms enemies and heals you.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right-center upper structure
        requires: ['life-drain'],
        icon: '🔄',
        rankDescription: [
          'Spend 3 Soul Charges to create a 15-foot aura around you for 1d4 rounds. Enemies within the aura take 2d6 necrotic damage at the start of their turn, and you heal for half the total damage dealt each round.',
          'Spend 3 Soul Charges to create a 20-foot aura around you for 1d6 rounds. Enemies within the aura take 2d8 necrotic damage at the start of their turn, and you heal for half the total damage dealt each round.',
          'Spend 3 Soul Charges to create a 30-foot aura around you for 1d8 rounds. Enemies within the aura take 3d6 necrotic damage at the start of their turn, and you heal for half the total damage dealt each round.'
        ]
      },
      {
        id: 'death-cloud',
        name: 'Death Cloud',
        description: 'Create a cloud of death energy that damages and weakens enemies.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right upper structure
        requires: ['spectral-sentinel'],
        icon: '☁️',
        rankDescription: [
          'Spend 3 Soul Charges to create a 20-foot radius cloud for 1d4 rounds. Enemies inside take 2d8 necrotic damage and have disadvantage on attack rolls.',
          'Spend 3 Soul Charges to create a 30-foot radius cloud for 1d6 rounds. Enemies inside take 3d8 necrotic damage and have disadvantage on attack rolls.',
          'Spend 3 Soul Charges to create a 40-foot radius cloud for 1d8 rounds. Enemies inside take 4d8 necrotic damage and have disadvantage on attack rolls and saving throws.'
        ]
      },

      // Tier 5 (Level 50) - Fortress/Shield layout (battlements)
      {
        id: 'necrotic-domain',
        name: 'Necrotic Domain',
        description: 'Establish a domain of death energy that you control completely.',
        maxRank: 1,
        position: { row: 0, col: 0 }, // Left battlement
        requires: ['circle-of-death'],
        icon: '🏛️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 40-foot radius domain for 1d6 rounds. Within this domain, your necromancy spells cost 1 fewer Soul Charge (minimum 0), deal an additional 1d8 damage, and have their duration extended by 2 rounds.'
        ]
      },
      {
        id: 'soul-prison',
        name: 'Soul Prison',
        description: 'Create a prison that traps souls and prevents escape.',
        maxRank: 1,
        position: { row: 0, col: 1 }, // Left-center battlement
        requires: ['deaths-grasp'],
        icon: '⛓️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 30-foot radius prison for 1d6 rounds. Creatures inside cannot teleport or use planar travel, and take 2d8 necrotic damage at the start of their turn. If a creature dies within the prison, you gain 2 Soul Charges.'
        ]
      },
      {
        id: 'life-and-death',
        name: 'Life and Death',
        description: 'Master the balance between life and death, gaining the power to heal allies and harm enemies simultaneously.',
        maxRank: 1,
        position: { row: 0, col: 3 }, // Right-center battlement
        requires: ['deaths-embrace'],
        icon: '☯️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 30-foot aura for 1d6 rounds. Allies within the aura (including you) heal 2d6 hit points at the start of their turn, while enemies take 2d8 necrotic damage. If an enemy dies within the aura, extend the duration by 1 round.'
        ]
      },
      {
        id: 'veil-of-death',
        name: 'Veil of Death',
        description: 'Create a veil of death energy that obscures vision and protects you from harm.',
        maxRank: 1,
        position: { row: 0, col: 4 }, // Right battlement
        requires: ['death-cloud'],
        icon: '🌫️',
        rankDescription: [
          'Spend 4 Soul Charges to create a 20-foot radius veil centered on you for 1d6 rounds. The area is heavily obscured to enemies, you have three-quarters cover against attacks from outside the veil, and you gain resistance to all damage while inside the veil.'
        ]
      },

      // Tier 6 (Level 60) - Fortress/Shield layout (central tower)
      {
        id: 'deaths-denial',
        name: 'Death\'s Denial',
        description: 'Deny death itself, allowing you or an ally to continue fighting after a fatal blow.',
        maxRank: 1,
        position: { row: -1, col: 2 }, // Center battlement (moved up)
        requires: ['soul-prison', 'life-and-death'],
        icon: '🧿',
        rankDescription: [
          'Spend 5 Soul Charges to cast on yourself or an ally. If the target would be reduced to 0 hit points within the next 1d6 rounds, they instead remain at 1 hit point and gain temporary hit points equal to 3d8 + your Intelligence modifier. This effect can trigger only once per casting.'
        ]
      },
      {
        id: 'necromantic-fortress',
        name: 'Necromantic Fortress',
        description: 'Create a spectral fortress that provides protection and offensive capabilities.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center
        requires: ['bone-wall', 'life-drain'],
        icon: '🏰',
        rankDescription: [
          'Spend 5 Soul Charges to create a 40-foot radius spectral fortress for 1d6+1 rounds. The fortress provides half cover to allies inside, deals 2d6 necrotic damage to enemies that enter or start their turn inside, and has 4 spectral turrets that each make one attack per round (+7 to hit, 2d8 necrotic damage, 60-foot range).'
        ]
      },
      {
        id: 'deaths-dominion',
        name: 'Death\'s Dominion',
        description: 'Establish complete dominion over an area, controlling life and death within it.',
        maxRank: 1,
        position: { row: 1, col: 2 }, // Upper center
        requires: ['deaths-grasp', 'deaths-embrace', 'necromantic-fortress'],
        icon: '👑',
        rankDescription: [
          'Spend 5 Soul Charges to create a 50-foot radius dominion for 1d6 rounds. Within this dominion, you decide which creatures live or die. As an action, you can deal 4d8 necrotic damage to any enemy in the dominion (no save) or heal an ally for 3d8 hit points. If a creature dies within the dominion, you gain 2 Soul Charges.'
        ]
      },

      // Tier 7 (Level 70) - Fortress/Shield layout (capstone)
      {
        id: 'power-over-death',
        name: 'Power Over Death',
        description: 'Gain ultimate power over death itself, becoming its master rather than its servant.',
        maxRank: 1,
        position: { row: -2, col: 2 }, // Top center (moved up)
        requires: ['deaths-denial', 'deaths-dominion', 'necrotic-domain', 'veil-of-death'],
        icon: '💀',
        rankDescription: [
          'Once per day, for 1d6+2 rounds, you become a true master of death. During this time, you are immune to necrotic damage and death effects, your necromancy spells cost 2 fewer Soul Charges (minimum 0) and deal double damage, and you gain 2 Soul Charges at the start of each of your turns. Additionally, once during this time, if you or an ally would die, you can prevent it, returning them to life with hit points equal to half their maximum. Finally, any creature that dies within 60 feet of you has its soul automatically harvested, granting you 1 Soul Charge and preventing it from being raised as undead by anyone but you.'
        ]
      },
    ],
  }
];

export default deathcallerTalentTrees;
