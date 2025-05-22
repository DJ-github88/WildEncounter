// Talent trees for the Lichborne class
const lichborneTalentTrees = [
  {
    id: 'phylactery-sovereign',
    name: 'Phylactery Sovereign',
    description: 'Focus on strengthening your phylactery and maximizing your undead transformation.',
    icon: '💀',
    talents: [
      // Tier 1 - Phylactery Spiral Pattern (first row with multiple entry points)
      {
        id: 'deathless-vigor',
        name: 'Deathless Vigor',
        description: 'Your undead nature grants you supernatural endurance.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '❤️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Increase your maximum hit points by 1d6 and gain 1d4 resistance to necrotic damage.',
          'Increase your maximum hit points by 1d8 and gain 1d6 resistance to necrotic damage.',
          'Increase your maximum hit points by 1d10 and gain 1d8 resistance to necrotic damage.',
          'Increase your maximum hit points by 1d12 and gain 1d10 resistance to necrotic damage.',
          'Increase your maximum hit points by 2d8 and gain 1d12 resistance to necrotic damage.'
        ]
      },
      {
        id: 'touch-of-undeath',
        name: 'Touch of Undeath',
        description: 'Your touch carries the chill of the grave.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👆',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your touch deals 1d6 necrotic damage and heals you for half the amount.',
          'Your touch deals 1d8 necrotic damage and heals you for half the amount.',
          'Your touch deals 1d10 necrotic damage and heals you for half the amount.',
          'Your touch deals 1d12 necrotic damage and heals you for half the amount.',
          'Your touch deals 2d8 necrotic damage and heals you for half the amount.'
        ]
      },
      {
        id: 'phylactery-bond',
        name: 'Phylactery Bond',
        description: 'Begin forming a bond with a phylactery, granting you limited immortality.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📦',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When reduced to 0 hit points, roll 1d20. On a 20, you stabilize automatically and gain 1 Essence Echo.',
          'When reduced to 0 hit points, roll 1d20. On a 19-20, you stabilize automatically and gain 1 Essence Echo.',
          'When reduced to 0 hit points, roll 1d20. On an 18-20, you stabilize automatically and gain 1 Essence Echo.',
          'When reduced to 0 hit points, roll 1d20. On a 17-20, you stabilize automatically and gain 1 Essence Echo.',
          'When reduced to 0 hit points, roll 1d20. On a 16-20, you stabilize automatically and gain 1 Essence Echo.'
        ]
      },

      // Tier 2 - Phylactery Spiral Pattern (branching paths)
      {
        id: 'undead-resilience',
        name: 'Undead Resilience',
        description: 'Your undead nature makes you resistant to many mortal afflictions.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['deathless-vigor'],
        icon: '🛡️',
        rankDescription: [
          'Gain advantage on saving throws against poison and disease. You no longer need to eat or breathe.',
          'Gain advantage on saving throws against poison, disease, and being charmed or frightened. You no longer need to eat, breathe, or sleep.',
          'Gain immunity to poison and disease, and advantage on saving throws against being charmed or frightened. You no longer need to eat, breathe, or sleep.'
        ]
      },
      {
        id: 'necrotic-blast',
        name: 'Necrotic Blast',
        description: 'Channel necrotic energy into a powerful blast.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['touch-of-undeath'],
        icon: '💥',
        rankDescription: [
          'Fire a blast of necrotic energy that deals 2d6 necrotic damage to the target. If you have at least 1 Essence Echo, the damage increases to 2d8.',
          'Fire a blast of necrotic energy that deals 2d8 necrotic damage to the target and 1d6 to nearby enemies. If you have at least 2 Essence Echoes, the damage increases to 3d8 and 1d8.',
          'Fire a blast of necrotic energy that deals 3d8 necrotic damage to the target and 1d8 to nearby enemies. If you have at least 3 Essence Echoes, the damage increases to 4d8 and 2d6.'
        ]
      },
      {
        id: 'soul-drain',
        name: 'Soul Drain',
        description: 'Drain the life force from living creatures to fuel your undead powers.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['phylactery-bond'],
        icon: '💫',
        rankDescription: [
          'When you kill a creature, gain 1d6 temporary hit points and 1d4 Essence Echoes.',
          'When you kill a creature, gain 1d8 temporary hit points and 1d6 Essence Echoes.',
          'When you kill a creature, gain 1d10 temporary hit points and 1d8 Essence Echoes.'
        ]
      },
      {
        id: 'reinforced-phylactery',
        name: 'Reinforced Phylactery',
        description: 'Strengthen your phylactery, making it more durable and capable of storing more Essence Echoes.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['deathless-vigor'],
        icon: '🔒',
        rankDescription: [
          'Your phylactery can store 1 additional Essence Echo and has resistance to one damage type of your choice.',
          'Your phylactery can store 2 additional Essence Echoes and has resistance to two damage types of your choice.',
          'Your phylactery can store 3 additional Essence Echoes and has resistance to three damage types of your choice.'
        ]
      },
      {
        id: 'essence-conversion',
        name: 'Essence Conversion',
        description: 'Convert Essence Echoes into various beneficial effects.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['touch-of-undeath'],
        icon: '🔄',
        rankDescription: [
          'Spend 1 Essence Echo to gain 1d6 temporary hit points or add 1d4 to a damage roll.',
          'Spend 1 Essence Echo to gain 1d8 temporary hit points, add 1d6 to a damage roll, or gain advantage on a saving throw.',
          'Spend 1 Essence Echo to gain 1d10 temporary hit points, add 1d8 to a damage roll, gain advantage on a saving throw, or increase your movement speed by 10 feet for 1 round.'
        ]
      },

      // Tier 3 - Phylactery Spiral Pattern (connecting nodes)
      {
        id: 'undead-command',
        name: 'Undead Command',
        description: 'Command lesser undead to do your bidding.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['undead-resilience', 'reinforced-phylactery'],
        icon: '👑',
        rankDescription: [
          'You can command up to 1d4+1 undead creatures of CR equal to or less than half your level. They obey your mental commands for 1d6 hours. Spend 1 Essence Echo to enhance their abilities, granting them +1d6 to attack and damage rolls for 1d4 rounds.'
        ]
      },
      {
        id: 'phylactery-enhancement',
        name: 'Phylactery Enhancement',
        description: 'Enhance your phylactery, strengthening your bond with it.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['necrotic-blast', 'essence-conversion'],
        icon: '🔮',
        rankDescription: [
          'Your phylactery now stores 1d6 × 10% of your soul. When you would die, roll 1d20. On a 15 or higher, you reform near your phylactery after 1d4 days with 1d6 × 10% of your maximum hit points. Additionally, your phylactery can now store 1 additional Essence Echo.'
        ]
      },
      {
        id: 'death-ward',
        name: 'Death Ward',
        description: 'Your phylactery protects you from death.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['undead-resilience'],
        icon: '🛡️',
        rankDescription: [
          'Spend 2 Essence Echoes to gain immunity to necrotic damage for 1d4 rounds.',
          'Spend 2 Essence Echoes to gain immunity to necrotic damage and resistance to one other damage type for 1d4 rounds.',
          'Spend 2 Essence Echoes to gain immunity to necrotic damage and resistance to all damage for 1d4 rounds.'
        ]
      },
      {
        id: 'soul-siphon',
        name: 'Soul Siphon',
        description: 'Siphon souls from nearby creatures to fuel your phylactery.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['soul-drain'],
        icon: '🌀',
        rankDescription: [
          'Gain 1 Essence Echo whenever a creature dies within 30 feet of you.',
          'Gain 1 Essence Echo whenever a creature dies within 30 feet of you. Additionally, you can spend 1 Essence Echo to deal 1d8 necrotic damage to all enemies within 10 feet.',
          'Gain 1 Essence Echo whenever a creature dies within 30 feet of you. Additionally, you can spend 1 Essence Echo to deal 1d10 necrotic damage to all enemies within 15 feet and heal yourself for half the total damage dealt.'
        ]
      },
      {
        id: 'essence-link',
        name: 'Essence Link',
        description: 'Link your phylactery to another creature, sharing your Essence Echoes with them.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['necrotic-blast', 'essence-conversion'],
        icon: '🔗',
        rankDescription: [
          'Link your phylactery to an ally for 1d6 rounds. While linked, they gain the benefits of your Essence Echoes, and when either of you gains an Essence Echo, both of you gain it. Additionally, you can transfer temporary hit points between you as a bonus action.'
        ]
      },

      // Tier 4 - Phylactery Spiral Pattern (advanced nodes)
      {
        id: 'lich-form',
        name: 'Lich Form',
        description: 'Temporarily transform into a more lich-like form.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['undead-command', 'death-ward'],
        icon: '👻',
        rankDescription: [
          'Spend 3 Essence Echoes to transform into a lich-like form for 1d4 rounds. While transformed, you gain resistance to non-magical damage and your necrotic spells deal 1d6 additional damage.',
          'Spend 3 Essence Echoes to transform into a lich-like form for 1d6 rounds. While transformed, you gain resistance to non-magical damage and your necrotic spells deal 1d8 additional damage.',
          'Spend 3 Essence Echoes to transform into a lich-like form for 1d8 rounds. While transformed, you gain resistance to non-magical damage and your necrotic spells deal 1d10 additional damage.'
        ]
      },
      {
        id: 'soul-vessel',
        name: 'Soul Vessel',
        description: 'Your phylactery becomes a vessel for the souls you collect.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['phylactery-enhancement', 'soul-siphon'],
        icon: '👥',
        rankDescription: [
          'Your phylactery can store up to 3 additional souls. You can consume a stored soul to regain 2d8 hit points or add 1d6 to a damage roll.',
          'Your phylactery can store up to 5 additional souls. You can consume a stored soul to regain 3d8 hit points or add 1d8 to a damage roll.',
          'Your phylactery can store up to 7 additional souls. You can consume a stored soul to regain 4d8 hit points or add 1d10 to a damage roll.'
        ]
      },
      {
        id: 'phylactery-projection',
        name: 'Phylactery Projection',
        description: 'Project your consciousness from your phylactery, allowing you to act even when your body is destroyed.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['essence-link'],
        icon: '👁️',
        rankDescription: [
          'When reduced to 0 hit points, you can spend 3 Essence Echoes to project your consciousness from your phylactery for 1d4 rounds. While projecting, you can cast spells and use abilities as normal, but you are incorporeal and cannot be targeted by attacks. At the end of the duration, you return to your body with 1d8 hit points.'
        ]
      },
      {
        id: 'undying-resilience',
        name: 'Undying Resilience',
        description: 'Your phylactery grants you incredible resilience against death.',
        maxRank: 1,
        position: { row: 3, col: 0 },
        requires: ['death-ward'],
        icon: '🧿',
        rankDescription: [
          'Spend 2 Essence Echoes to gain immunity to a specific damage type for 1d6 rounds. Additionally, when you would take damage that would reduce you to 0 hit points, you can spend 3 Essence Echoes to remain at 1 hit point instead.'
        ]
      },
      {
        id: 'soul-battery',
        name: 'Soul Battery',
        description: 'Your phylactery becomes a battery for soul energy, storing and releasing it as needed.',
        maxRank: 1,
        position: { row: 3, col: 4 },
        requires: ['soul-siphon'],
        icon: '🔋',
        rankDescription: [
          'Your phylactery can store twice as many Essence Echoes. Additionally, you can spend 2 Essence Echoes to empower your next spell, doubling its damage or healing.'
        ]
      },

      // Tier 5 - Phylactery Spiral Pattern (mastery nodes)
      {
        id: 'phylactery-mastery',
        name: 'Phylactery Mastery',
        description: 'Achieve mastery over your phylactery, gaining complete control over its powers.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['undying-resilience', 'lich-form'],
        icon: '🧙',
        rankDescription: [
          'Your phylactery can store an additional 1d4 Essence Echoes. Additionally, you can spend 1 Essence Echo to gain advantage on any roll once per round.'
        ]
      },
      {
        id: 'true-lich',
        name: 'True Lich',
        description: 'Complete your transformation into a lich, gaining immense power.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['lich-form', 'phylactery-projection', 'soul-vessel'],
        icon: '🌑',
        rankDescription: [
          'Spend 5 Essence Echoes to become a true lich for 1d4+1 rounds. While transformed, you gain immunity to non-magical damage, resistance to magical damage, and your spells deal double damage. Additionally, you can cast spells without using components, and you can use any Soul Vessel ability without consuming souls.'
        ]
      },
      {
        id: 'soul-dominion',
        name: 'Soul Dominion',
        description: 'Gain dominion over souls, allowing you to manipulate them with ease.',
        maxRank: 1,
        position: { row: 4, col: 4 },
        requires: ['soul-vessel', 'soul-battery'],
        icon: '👑',
        rankDescription: [
          'You can now store up to 10 souls in your phylactery. Additionally, you can spend 3 Essence Echoes to steal a portion of a creature\'s soul, reducing their maximum hit points by 2d10 for 1d6 rounds and gaining temporary hit points equal to the amount reduced.'
        ]
      },

      // Tier 6 - Phylactery Spiral Pattern (transcendence nodes)
      {
        id: 'phylactery-ascendance',
        name: 'Phylactery Ascendance',
        description: 'Your phylactery ascends to a higher state of being, granting you incredible power.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['phylactery-mastery', 'true-lich'],
        icon: '🌟',
        rankDescription: [
          'Your phylactery becomes semi-sentient and can act independently. It can store an additional 1d6 Essence Echoes and automatically uses Soul Vessel abilities when you are in danger. Additionally, you can spend 4 Essence Echoes to create a phylactery ward that absorbs all damage you would take for 1d4 rounds.'
        ]
      },
      {
        id: 'soul-sovereign',
        name: 'Soul Sovereign',
        description: 'Become a sovereign over souls, commanding them with absolute authority.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['true-lich', 'soul-dominion'],
        icon: '👑',
        rankDescription: [
          'For 1d6 rounds, you become a sovereign over souls. You can spend 1 Essence Echo to command any undead creature as if you had created it, and you gain 1d4 Essence Echoes whenever a creature dies within 60 feet of you. Additionally, your soul-based abilities cost 1 fewer Essence Echo to use (minimum 0).'
        ]
      },

      // Tier 7 - Phylactery Spiral Pattern (capstone)
      {
        id: 'eternal-lich',
        name: 'Eternal Lich',
        description: 'Achieve the pinnacle of lichdom, becoming an eternal master of death and souls.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['phylactery-ascendance', 'soul-sovereign'],
        icon: '🌌',
        rankDescription: [
          'Once per day, you can become an Eternal Lich for 1d6+2 rounds. While in this form, you are immune to all damage, your spells cost no mana, and you gain 1 Essence Echo at the start of each of your turns. Additionally, you can raise any creature that dies within 100 feet as a powerful undead servant with full hit points and all of its abilities. These servants remain under your control for 24 hours.'
        ]
      },
    ],
  },
  {
    id: 'arcane-wretch',
    name: 'Arcane Wretch',
    description: 'Emphasize necromantic spellcasting and soul manipulation.',
    icon: '⚰️',
    talents: [
      // Tier 1 (Level 10) - Necromantic Pentagram Pattern (first row with multiple entry points)
      {
        id: 'raise-dead',
        name: 'Raise Dead',
        description: 'Raise a fallen enemy as an undead servant.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🧟',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Raise a fallen enemy as a zombie with 1d6 hit points. It serves you for 1d4 rounds.',
          'Raise a fallen enemy as a zombie with 1d8 hit points. It serves you for 1d6 rounds.',
          'Raise a fallen enemy as a zombie with 1d10 hit points. It serves you for 1d8 rounds.',
          'Raise a fallen enemy as a zombie with 1d12 hit points. It serves you for 1d10 rounds.',
          'Raise a fallen enemy as a zombie with 2d8 hit points. It serves you for 1d12 rounds.'
        ]
      },
      {
        id: 'bone-armor',
        name: 'Bone Armor',
        description: 'Create armor from bones to protect yourself.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🦴',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Create bone armor that grants +1 AC and absorbs 1d6 damage before breaking.',
          'Create bone armor that grants +2 AC and absorbs 1d8 damage before breaking.',
          'Create bone armor that grants +2 AC and absorbs 1d10 damage before breaking.',
          'Create bone armor that grants +3 AC and absorbs 1d12 damage before breaking.',
          'Create bone armor that grants +3 AC and absorbs 2d8 damage before breaking.'
        ]
      },
      {
        id: 'death-magic',
        name: 'Death Magic',
        description: 'Your necromantic spells are more powerful.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📚',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your necromancy spells deal an additional 1d4 damage.',
          'Your necromancy spells deal an additional 1d6 damage.',
          'Your necromancy spells deal an additional 1d8 damage.',
          'Your necromancy spells deal an additional 1d10 damage.',
          'Your necromancy spells deal an additional 1d12 damage.'
        ]
      },

      // Tier 2 (Level 20) - Necromantic Pentagram Pattern (branching paths)
      {
        id: 'undead-thralls',
        name: 'Undead Thralls',
        description: 'Your undead servants are stronger and more durable.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['raise-dead'],
        icon: '🧠',
        rankDescription: [
          'Your undead servants gain +2 to attack rolls and +1d6 hit points.',
          'Your undead servants gain +3 to attack rolls and +1d8 hit points.',
          'Your undead servants gain +4 to attack rolls and +1d10 hit points.'
        ]
      },
      {
        id: 'grave-bolt',
        name: 'Grave Bolt',
        description: 'Fire a bolt of necrotic energy that damages and weakens the target.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['bone-armor'],
        icon: '⚡',
        rankDescription: [
          'Fire a bolt that deals 2d6 necrotic damage and reduces the target\'s healing received by 1d4 × 10% for 1d4 rounds.',
          'Fire a bolt that deals 2d8 necrotic damage and reduces the target\'s healing received by 1d6 × 10% for 1d4 rounds.',
          'Fire a bolt that deals 3d8 necrotic damage and reduces the target\'s healing received by 1d8 × 10% for 1d6 rounds.'
        ]
      },
      {
        id: 'death-pact',
        name: 'Death Pact',
        description: 'Form a pact with death itself, gaining power at a cost.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['death-magic'],
        icon: '📜',
        rankDescription: [
          'Sacrifice 1d6 hit points to gain +1d6 to damage rolls with necromancy spells for 1d4 rounds.',
          'Sacrifice 1d8 hit points to gain +1d8 to damage rolls with necromancy spells for 1d6 rounds.',
          'Sacrifice 1d10 hit points to gain +1d10 to damage rolls with necromancy spells for 1d8 rounds.'
        ]
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Extract additional Essence Echoes from dying creatures.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['raise-dead'],
        icon: '👻',
        rankDescription: [
          'When a creature dies within 30 feet of you, gain 1 additional Essence Echo.',
          'When a creature dies within 30 feet of you, gain 1d4 additional Essence Echoes.',
          'When a creature dies within 30 feet of you, gain 1d6 additional Essence Echoes.'
        ]
      },
      {
        id: 'necrotic-mastery',
        name: 'Necrotic Mastery',
        description: 'Your necromantic spells are more potent and can critical hit.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['death-magic'],
        icon: '🔮',
        rankDescription: [
          'Your necromancy spells can critical hit on a natural 20, dealing double damage. Additionally, they ignore 1d4 points of necrotic resistance.',
          'Your necromancy spells can critical hit on a natural 19-20, dealing double damage. Additionally, they ignore 1d6 points of necrotic resistance.',
          'Your necromancy spells can critical hit on a natural 18-20, dealing double damage. Additionally, they ignore 1d8 points of necrotic resistance.'
        ]
      },

      // Tier 3 (Level 30) - Necromantic Pentagram Pattern (connecting nodes)
      {
        id: 'corpse-explosion',
        name: 'Corpse Explosion',
        description: 'Cause a corpse or undead servant to explode, dealing damage to nearby enemies.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['undead-thralls', 'soul-harvest'],
        icon: '💥',
        rankDescription: [
          'Cause a corpse or undead servant to explode, dealing 3d8 necrotic damage to all creatures within 15 feet. If an undead servant is used, it is destroyed. For each Essence Echo you spend (up to 3), increase the damage by 1d8.'
        ]
      },
      {
        id: 'death-channel',
        name: 'Death Channel',
        description: 'Channel the power of death to enhance your necromantic abilities.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['grave-bolt', 'necrotic-mastery'],
        icon: '🌀',
        rankDescription: [
          'For 1d6 rounds, your necromancy spells deal an additional 2d6 damage and have a 1d4 × 10% chance to raise slain enemies as zombies under your control for 1d4 rounds. Additionally, your necromancy spells cost 1 less mana to cast during this time.'
        ]
      },
      {
        id: 'bone-prison',
        name: 'Bone Prison',
        description: 'Create a prison of bones to trap your enemies.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['undead-thralls'],
        icon: '🔒',
        rankDescription: [
          'Create a prison of bones around a target within 30 feet. The target must make a Strength save or be restrained for 1d4 rounds. The prison has 2d6 hit points.',
          'Create a prison of bones around a target within 30 feet. The target must make a Strength save with disadvantage or be restrained for 1d6 rounds. The prison has 3d6 hit points.',
          'Create a prison of bones around a target within 30 feet. The target must make a Strength save with disadvantage or be restrained for 1d8 rounds. The prison has 4d6 hit points and deals 1d6 necrotic damage to the target at the start of their turn.'
        ]
      },
      {
        id: 'soul-link',
        name: 'Soul Link',
        description: 'Link your soul to another creature, transferring damage between you.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['death-pact'],
        icon: '🔗',
        rankDescription: [
          'Link your soul to a target for 1d4 rounds. While linked, 25% of the damage you take is transferred to the target.',
          'Link your soul to a target for 1d6 rounds. While linked, 50% of the damage you take is transferred to the target.',
          'Link your soul to a target for 1d8 rounds. While linked, 75% of the damage you take is transferred to the target.'
        ]
      },
      {
        id: 'essence-drain',
        name: 'Essence Drain',
        description: 'Drain the essence from a target, weakening them and strengthening yourself.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['grave-bolt', 'soul-harvest'],
        icon: '💉',
        rankDescription: [
          'Target a creature within 30 feet. The target must make a Constitution save or have their maximum hit points reduced by 2d8 for 1d6 rounds. You gain temporary hit points equal to the amount reduced and 1 Essence Echo.'
        ]
      },

      // Tier 4 (Level 40) - Necromantic Pentagram Pattern (advanced nodes)
      {
        id: 'undead-legion',
        name: 'Undead Legion',
        description: 'Raise multiple undead servants simultaneously.',
        maxRank: 3,
        position: { row: 3, col: 0 },
        requires: ['bone-prison', 'corpse-explosion'],
        icon: '👥',
        rankDescription: [
          'You can control up to 3 undead servants simultaneously. Each servant gains +1d6 hit points and +1 to attack and damage rolls.',
          'You can control up to 5 undead servants simultaneously. Each servant gains +1d8 hit points and +2 to attack and damage rolls.',
          'You can control up to 7 undead servants simultaneously. Each servant gains +1d10 hit points and +3 to attack and damage rolls.'
        ]
      },
      {
        id: 'soul-conduit',
        name: 'Soul Conduit',
        description: 'Become a conduit for soul energy, channeling it into powerful effects.',
        maxRank: 3,
        position: { row: 3, col: 4 },
        requires: ['soul-link', 'death-channel'],
        icon: '🌀',
        rankDescription: [
          'For each Essence Echo you spend, add 1d6 to the damage of your next spell and heal yourself for 1d4 hit points.',
          'For each Essence Echo you spend, add 1d8 to the damage of your next spell and heal yourself for 1d6 hit points.',
          'For each Essence Echo you spend, add 1d10 to the damage of your next spell and heal yourself for 1d8 hit points.'
        ]
      },
      {
        id: 'necrotic-nova',
        name: 'Necrotic Nova',
        description: 'Release a nova of necrotic energy, damaging all enemies around you.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['essence-drain', 'death-channel'],
        icon: '💥',
        rankDescription: [
          'Release a nova of necrotic energy in a 20-foot radius, dealing 4d8 necrotic damage to all enemies caught in the blast. For each Essence Echo you spend (up to 3), increase the damage by 1d8 and the radius by 5 feet.'
        ]
      },
      {
        id: 'death-domain',
        name: 'Death Domain',
        description: 'Create a domain of death around you, enhancing your necromantic abilities.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['corpse-explosion', 'essence-drain'],
        icon: '⚰️',
        rankDescription: [
          'Create a 30-foot radius domain of death centered on you that lasts for 1d6 rounds. While within the domain, your necromancy spells deal an additional 2d6 damage, you gain 1 Essence Echo whenever a creature dies, and undead allies gain advantage on attack rolls.'
        ]
      },
      {
        id: 'soul-cage',
        name: 'Soul Cage',
        description: 'Trap a creature\'s soul in a cage, preventing them from being resurrected.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['essence-drain', 'death-channel'],
        icon: '🔒',
        rankDescription: [
          'When a creature dies within 30 feet of you, you can trap their soul in a cage. The creature cannot be resurrected while their soul is caged. You can release the soul at any time to gain 2d6 Essence Echoes or to power a necromancy spell, adding 3d8 to its damage.'
        ]
      },

      // Tier 5 (Level 50) - Necromantic Pentagram Pattern (mastery nodes)
      {
        id: 'undead-mastery',
        name: 'Undead Mastery',
        description: 'Achieve mastery over undead, raising more powerful servants.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['undead-legion', 'death-domain'],
        icon: '👑',
        rankDescription: [
          'Your undead servants gain +2d6 hit points, +3 to attack and damage rolls, and one special ability based on the creature they were in life. Additionally, you can raise undead servants with 1d4 × 10% of their original hit points and abilities.'
        ]
      },
      {
        id: 'soul-rend',
        name: 'Soul Rend',
        description: 'Tear the soul from a living target, instantly killing them if they fail a save.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['necrotic-nova', 'death-domain', 'soul-cage'],
        icon: '✂️',
        rankDescription: [
          'Target a creature within 30 feet. The target must make a Constitution save or die instantly. If they succeed, they take 8d10 necrotic damage instead. If the target dies, you gain 2d6 Essence Echoes and can raise them as an undead servant with 50% of their original hit points and abilities.'
        ]
      },
      {
        id: 'soul-mastery',
        name: 'Soul Mastery',
        description: 'Achieve mastery over souls, manipulating them with ease.',
        maxRank: 1,
        position: { row: 4, col: 4 },
        requires: ['soul-conduit', 'soul-cage'],
        icon: '🧙',
        rankDescription: [
          'You can store up to 10 additional Essence Echoes. Additionally, you can spend 3 Essence Echoes to gain one of the following benefits: 1) Heal yourself for 4d8 hit points, 2) Add 3d10 to the damage of your next spell, 3) Gain resistance to all damage for 1d4 rounds, or 4) Raise a powerful undead servant with 75% of its original hit points and abilities.'
        ]
      },

      // Tier 6 (Level 60) - Necromantic Pentagram Pattern (transcendence nodes)
      {
        id: 'necromantic-ascendance',
        name: 'Necromantic Ascendance',
        description: 'Ascend to a higher state of necromantic power, gaining incredible abilities.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['undead-mastery', 'soul-rend'],
        icon: '🌟',
        rankDescription: [
          'For 1d6 rounds, your necromancy spells deal triple damage, cost 50% less mana, and automatically critical hit. Additionally, you can raise any creature that dies within 60 feet as an undead servant with 75% of its original hit points and abilities without spending any resources.'
        ]
      },
      {
        id: 'soul-transcendence',
        name: 'Soul Transcendence',
        description: 'Transcend the limitations of your soul, gaining incredible power over life and death.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['soul-rend', 'soul-mastery'],
        icon: '🌌',
        rankDescription: [
          'For 1d6 rounds, you gain 1d4 Essence Echoes at the start of each of your turns, your soul-based abilities cost 1 fewer Essence Echo to use (minimum 0), and you can use Soul Rend once per round as a bonus action without spending any resources.'
        ]
      },

      // Tier 7 (Level 70) - Necromantic Pentagram Pattern (capstone)
      {
        id: 'arcane-lich',
        name: 'Arcane Lich',
        description: 'Become an Arcane Lich, a master of necromancy and soul manipulation.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['necromantic-ascendance', 'soul-transcendence'],
        icon: '🌑',
        rankDescription: [
          'Once per day, you can become an Arcane Lich for 1d6+2 rounds. While in this form, your necromancy spells deal quadruple damage, cost no mana, and ignore all resistances and immunities. Additionally, you gain 2d4 Essence Echoes at the start of each of your turns, and any creature that dies within 100 feet of you is automatically raised as a powerful undead servant under your control with all of its original hit points and abilities.'
        ]
      },
    ],
  },
  {
    id: 'dread-reclaimer',
    name: 'Dread Reclaimer',
    description: 'Focus on harvesting souls and using them for powerful effects.',
    icon: '👻',
    talents: [
      // Tier 1 (Level 10) - Soul Harvesting Web Pattern (first row with multiple entry points)
      {
        id: 'soul-tap',
        name: 'Soul Tap',
        description: 'Tap into your own soul to power your spells.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔋',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Sacrifice 1d4 hit points to gain 1d6 Essence Echoes.',
          'Sacrifice 1d4 hit points to gain 1d8 Essence Echoes.',
          'Sacrifice 1d4 hit points to gain 1d10 Essence Echoes.',
          'Sacrifice 1d4 hit points to gain 1d12 Essence Echoes.',
          'Sacrifice 1d4 hit points to gain 2d8 Essence Echoes.'
        ]
      },
      {
        id: 'soul-sight',
        name: 'Soul Sight',
        description: 'See the souls of living and dead creatures.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👁️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'You can see souls within 30 feet, even through walls. Roll 1d20; on a 18-20, you can determine a creature\'s remaining hit points.',
          'You can see souls within 30 feet, even through walls. Roll 1d20; on a 17-20, you can determine a creature\'s remaining hit points.',
          'You can see souls within 60 feet, even through walls. Roll 1d20; on a 16-20, you can determine a creature\'s remaining hit points.',
          'You can see souls within 60 feet, even through walls. Roll 1d20; on a 15-20, you can determine a creature\'s remaining hit points and vulnerabilities.',
          'You can see souls within 90 feet, even through walls. Roll 1d20; on a 14-20, you can determine a creature\'s remaining hit points and vulnerabilities.'
        ]
      },
      {
        id: 'soul-leech',
        name: 'Soul Leech',
        description: 'Drain a portion of a creature\'s soul to heal yourself.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💉',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Deal 1d4 necrotic damage to a target and heal yourself for the same amount.',
          'Deal 1d6 necrotic damage to a target and heal yourself for the same amount.',
          'Deal 1d8 necrotic damage to a target and heal yourself for the same amount.',
          'Deal 1d10 necrotic damage to a target and heal yourself for the same amount.',
          'Deal 1d12 necrotic damage to a target and heal yourself for the same amount.'
        ]
      },

      // Tier 2 (Level 20) - Soul Harvesting Web Pattern (branching paths)
      {
        id: 'soul-burn',
        name: 'Soul Burn',
        description: 'Burn your Essence Echoes to empower your spells.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['soul-tap'],
        icon: '🔥',
        rankDescription: [
          'Spend 2 Essence Echoes to add 1d6 necrotic damage to your next spell.',
          'Spend 2 Essence Echoes to add 1d8 necrotic damage to your next spell.',
          'Spend 2 Essence Echoes to add 1d10 necrotic damage to your next spell.'
        ]
      },
      {
        id: 'soul-bind',
        name: 'Soul Bind',
        description: 'Bind a portion of a creature\'s soul to yourself, creating a link between you.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['soul-sight'],
        icon: '🔗',
        rankDescription: [
          'Bind to a creature for 1d4 rounds. While bound, you can sense its location and it takes 1d6 necrotic damage at the start of its turn.',
          'Bind to a creature for 1d6 rounds. While bound, you can sense its location and it takes 1d8 necrotic damage at the start of its turn.',
          'Bind to a creature for 1d8 rounds. While bound, you can sense its location and it takes 1d10 necrotic damage at the start of its turn.'
        ]
      },
      {
        id: 'soul-shield',
        name: 'Soul Shield',
        description: 'Create a shield from soul energy to protect yourself.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['soul-leech'],
        icon: '🛡️',
        rankDescription: [
          'Spend 3 Essence Echoes to create a shield that absorbs 2d6 damage.',
          'Spend 3 Essence Echoes to create a shield that absorbs 2d8 damage.',
          'Spend 3 Essence Echoes to create a shield that absorbs 3d8 damage.'
        ]
      },
      {
        id: 'soul-collector',
        name: 'Soul Collector',
        description: 'Collect souls from fallen enemies to fuel your powers.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['soul-tap'],
        icon: '👻',
        rankDescription: [
          'When an enemy dies within 30 feet of you, gain 1d4 Essence Echoes.',
          'When an enemy dies within 30 feet of you, gain 1d6 Essence Echoes.',
          'When an enemy dies within 30 feet of you, gain 1d8 Essence Echoes.'
        ]
      },
      {
        id: 'soul-empowerment',
        name: 'Soul Empowerment',
        description: 'Empower yourself with the souls you\'ve collected.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['soul-leech'],
        icon: '💪',
        rankDescription: [
          'For each Essence Echo you currently have, gain +1 to attack and damage rolls (maximum +5).',
          'For each Essence Echo you currently have, gain +1 to attack and damage rolls (maximum +7).',
          'For each Essence Echo you currently have, gain +1 to attack and damage rolls (maximum +10).'
        ]
      },

      // Tier 3 (Level 30) - Soul Harvesting Web Pattern (connecting nodes)
      {
        id: 'soul-blast',
        name: 'Soul Blast',
        description: 'Release a blast of soul energy that damages enemies.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['soul-burn', 'soul-collector'],
        icon: '💥',
        rankDescription: [
          'Spend 3 Essence Echoes to release a blast that deals 3d8 necrotic damage to all enemies within 15 feet. For each additional Essence Echo you spend (up to 3), increase the damage by 1d8.'
        ]
      },
      {
        id: 'soul-tether',
        name: 'Soul Tether',
        description: 'Create a tether between your soul and another creature\'s, allowing you to share damage and healing.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['soul-bind', 'soul-empowerment'],
        icon: '🧵',
        rankDescription: [
          'Tether to an ally for 1d6 rounds. While tethered, when either of you takes damage, the damage is split evenly between you. When either of you is healed, both of you receive 50% of the healing. Additionally, you can transfer Essence Echoes between you as a bonus action.'
        ]
      },
      {
        id: 'soul-harvest',
        name: 'Soul Harvest',
        description: 'Harvest souls from a wide area, gaining power from the dead.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['soul-burn'],
        icon: '🌾',
        rankDescription: [
          'When a creature dies within 60 feet of you, gain 1d4 Essence Echoes and 1d6 temporary hit points.',
          'When a creature dies within 60 feet of you, gain 1d6 Essence Echoes and 1d8 temporary hit points.',
          'When a creature dies within 60 feet of you, gain 1d8 Essence Echoes and 1d10 temporary hit points.'
        ]
      },
      {
        id: 'soul-infusion',
        name: 'Soul Infusion',
        description: 'Infuse your weapons and armor with soul energy, enhancing their power.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['soul-shield'],
        icon: '⚔️',
        rankDescription: [
          'Spend 2 Essence Echoes to infuse your weapon with soul energy for 1d4 rounds. While infused, your weapon deals an additional 1d6 necrotic damage on hit.',
          'Spend 2 Essence Echoes to infuse your weapon or armor with soul energy for 1d6 rounds. While infused, your weapon deals an additional 1d8 necrotic damage on hit, or your armor reduces damage taken by 1d6.',
          'Spend 2 Essence Echoes to infuse your weapon and armor with soul energy for 1d8 rounds. While infused, your weapon deals an additional 1d10 necrotic damage on hit, and your armor reduces damage taken by 1d8.'
        ]
      },
      {
        id: 'soul-consumption',
        name: 'Soul Consumption',
        description: 'Consume souls to restore your health and mana.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['soul-bind', 'soul-collector'],
        icon: '🍽️',
        rankDescription: [
          'Spend 3 Essence Echoes to heal yourself for 3d8 hit points and restore 2d6 mana. If you have at least 5 Essence Echoes, the healing and mana restoration are doubled.'
        ]
      },

      // Tier 4 (Level 40) - Soul Harvesting Web Pattern (advanced nodes)
      {
        id: 'soul-rip',
        name: 'Soul Rip',
        description: 'Rip a portion of a creature\'s soul from its body, dealing massive damage.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['soul-blast', 'soul-consumption'],
        icon: '✂️',
        rankDescription: [
          'Spend 4 Essence Echoes to deal 4d8 necrotic damage to a target. If this reduces them to 0 hit points, gain 2d6 Essence Echoes.',
          'Spend 4 Essence Echoes to deal 5d8 necrotic damage to a target. If this reduces them to 0 hit points, gain 2d8 Essence Echoes.',
          'Spend 4 Essence Echoes to deal 6d8 necrotic damage to a target. If this reduces them to 0 hit points, gain 2d10 Essence Echoes.'
        ]
      },
      {
        id: 'soul-well',
        name: 'Soul Well',
        description: 'Create a well of soul energy that you can draw upon.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['soul-tether', 'soul-consumption'],
        icon: '⚱️',
        rankDescription: [
          'Create a soul well that stores up to 10 Essence Echoes. You can draw from it at any time, and it regenerates 1d4 Essence Echoes per round.',
          'Create a soul well that stores up to 15 Essence Echoes. You can draw from it at any time, and it regenerates 1d6 Essence Echoes per round.',
          'Create a soul well that stores up to 20 Essence Echoes. You can draw from it at any time, and it regenerates 1d8 Essence Echoes per round.'
        ]
      },
      {
        id: 'soul-drain',
        name: 'Soul Drain',
        description: 'Drain the souls of all enemies around you, weakening them and strengthening yourself.',
        maxRank: 1,
        position: { row: 3, col: 0 },
        requires: ['soul-harvest'],
        icon: '🌪️',
        rankDescription: [
          'Spend 5 Essence Echoes to drain the souls of all enemies within 30 feet. Each affected enemy takes 2d8 necrotic damage and has disadvantage on attack rolls for 1d4 rounds. For each enemy affected, gain 1d4 temporary hit points and 1 Essence Echo.'
        ]
      },
      {
        id: 'soul-armor',
        name: 'Soul Armor',
        description: 'Create armor from pure soul energy, protecting you from harm.',
        maxRank: 1,
        position: { row: 3, col: 4 },
        requires: ['soul-infusion'],
        icon: '🛡️',
        rankDescription: [
          'Spend 5 Essence Echoes to create soul armor that lasts for 1d6 rounds. While active, gain +3 AC, resistance to necrotic damage, and immunity to the frightened condition. Additionally, when you take damage, roll 1d20. On a 18-20, the damage is reduced to 0 and you gain 1 Essence Echo.'
        ]
      },
      {
        id: 'soul-link',
        name: 'Soul Link',
        description: 'Link your soul to multiple allies, sharing your power with them.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['soul-consumption'],
        icon: '🔗',
        rankDescription: [
          'Link your soul to up to 3 allies within 30 feet for 1d6 rounds. While linked, you can transfer Essence Echoes between you as a bonus action, and all linked allies gain +1d6 to damage rolls for each Essence Echo they have (maximum +3d6).'
        ]
      },

      // Tier 5 (Level 50) - Soul Harvesting Web Pattern (mastery nodes)
      {
        id: 'soul-reaper',
        name: 'Soul Reaper',
        description: 'Become a reaper of souls, harvesting them with ease.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['soul-drain', 'soul-rip'],
        icon: '🪓',
        rankDescription: [
          'Your soul harvesting abilities have double the range. Additionally, when you kill an enemy, you automatically harvest their soul, gaining 2d6 Essence Echoes and 2d8 temporary hit points.'
        ]
      },
      {
        id: 'soul-master',
        name: 'Soul Master',
        description: 'Achieve mastery over souls, gaining immense power.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['soul-rip', 'soul-link', 'soul-well'],
        icon: '👑',
        rankDescription: [
          'For 1d4+1 rounds, you become a master of souls. Your Essence Echo capacity is doubled, your soul magic costs half as many Essence Echoes, and your soul-based abilities deal triple damage. Additionally, when a creature dies within 60 feet of you, you automatically absorb its soul, gaining 2d10 Essence Echoes and 2d8 temporary hit points.'
        ]
      },
      {
        id: 'soul-forge',
        name: 'Soul Forge',
        description: 'Forge powerful artifacts from the souls you\'ve collected.',
        maxRank: 1,
        position: { row: 4, col: 4 },
        requires: ['soul-armor', 'soul-well'],
        icon: '🔨',
        rankDescription: [
          'Spend 7 Essence Echoes to forge a soul artifact that lasts for 1d6 rounds. Choose one: 1) Soul Blade - A weapon that deals 3d10 necrotic damage and ignores resistance, 2) Soul Shield - A shield that grants immunity to one damage type of your choice, 3) Soul Crown - A crown that allows you to control one enemy for 1d4 rounds, or 4) Soul Cloak - A cloak that grants invisibility and the ability to pass through walls.'
        ]
      },

      // Tier 6 (Level 60) - Soul Harvesting Web Pattern (transcendence nodes)
      {
        id: 'soul-ascendance',
        name: 'Soul Ascendance',
        description: 'Ascend to a higher state of soul manipulation, gaining incredible power.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['soul-reaper', 'soul-master'],
        icon: '🌟',
        rankDescription: [
          'For 1d6 rounds, your soul-based abilities cost 2 fewer Essence Echoes (minimum 0), deal quadruple damage, and have their range doubled. Additionally, you gain 1d4 Essence Echoes at the start of each of your turns, and your maximum Essence Echo capacity is increased by 10.'
        ]
      },
      {
        id: 'soul-dominion',
        name: 'Soul Dominion',
        description: 'Gain dominion over souls, commanding them with absolute authority.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['soul-master', 'soul-forge'],
        icon: '👑',
        rankDescription: [
          'For 1d6 rounds, you can command the souls of the dead and living alike. You can spend 3 Essence Echoes to take control of a creature for 1 round (Wisdom save negates). Additionally, when a creature dies within 100 feet of you, you can spend 2 Essence Echoes to raise it as an undead servant with 75% of its original hit points and abilities for 1d8 rounds.'
        ]
      },

      // Tier 7 (Level 70) - Soul Harvesting Web Pattern (capstone)
      {
        id: 'soul-sovereign',
        name: 'Soul Sovereign',
        description: 'Become a sovereign of souls, wielding ultimate power over life and death.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['soul-ascendance', 'soul-dominion'],
        icon: '🌌',
        rankDescription: [
          'Once per day, you can become a Soul Sovereign for 1d6+2 rounds. While in this form, you gain the following benefits: 1) Your Essence Echo capacity is unlimited, 2) Your soul-based abilities cost no Essence Echoes to use, 3) You gain 2d6 Essence Echoes at the start of each of your turns, 4) You can use Soul Rip as a bonus action, 5) When you kill an enemy, you automatically raise them as an undead servant with all of their original hit points and abilities, and 6) You are immune to all damage except radiant.'
        ]
      },
    ],
  }
];

export default lichborneTalentTrees;
