// Talent trees for the Arcanoneer class
const arcanoneerTalentTrees = [
  {
    id: 'elemental-ordnance',
    name: 'Elemental Ordnance',
    description: 'Focus on direct damage and maximizing the destructive potential of your elemental runes, turning your rune-cannon into a devastating weapon of arcane destruction.',
    icon: '💥',
    talents: [
      // Tier 1 (Level 10) - Branching Elemental Pattern (trunk with three branches)
      {
        id: 'fire-affinity',
        name: 'Fire Affinity',
        description: 'Your natural affinity for Fire runes allows you to create more powerful explosions and devastating burn effects.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left branch
        icon: '🔥',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Fire runes deal +1 damage per die. When using 2+ Fire runes in a Bolt or Spray spell, the explosion radius increases by 5 feet.',
          'Fire runes deal +1 damage per die and cause Burn for 1d8/round instead of 1d6/round. When using 2+ Fire runes in a Bolt or Spray spell, the explosion radius increases by 5 feet.',
          'Fire runes deal +2 damage per die and cause Burn for 1d8/round instead of 1d6/round. When using 2+ Fire runes in a Bolt or Spray spell, the explosion radius increases by 10 feet.',
          'Fire runes deal +2 damage per die and cause Burn for 1d10/round instead of 1d6/round. When using 2+ Fire runes in a Bolt or Spray spell, the explosion radius increases by 10 feet.',
          'Fire runes deal +3 damage per die and cause Burn for 1d12/round instead of 1d6/round. When using 2+ Fire runes in a Bolt or Spray spell, the explosion radius increases by 15 feet and Burn lasts 1 round longer.'
        ]
      },
      {
        id: 'lightning-affinity',
        name: 'Lightning Affinity',
        description: 'Your natural affinity for Lightning runes allows you to create more powerful electrical effects that chain between targets with deadly efficiency.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center branch
        icon: '⚡',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Lightning runes add +1 to save DC. When using 2+ Lightning runes in a Beam spell, it chains to 3 targets per extra Lightning rune instead of 2.',
          'Lightning runes add +1 to save DC. When using 2+ Lightning runes in a Beam spell, it chains to 3 targets per extra Lightning rune instead of 2 and deals 60% damage to secondary targets instead of 50%.',
          'Lightning runes add +2 to save DC. When using 2+ Lightning runes in a Beam spell, it chains to 4 targets per extra Lightning rune instead of 2 and deals 70% damage to secondary targets instead of 50%.',
          'Lightning runes add +2 to save DC. When using 2+ Lightning runes in a Beam spell, it chains to 4 targets per extra Lightning rune instead of 2 and deals 80% damage to secondary targets instead of 50%.',
          'Lightning runes add +3 to save DC and ignore Wet chain penalty. When using 2+ Lightning runes in a Beam spell, it chains to 5 targets per extra Lightning rune instead of 2 and deals 90% damage to secondary targets instead of 50%.'
        ]
      },
      {
        id: 'arcane-affinity',
        name: 'Arcane Affinity',
        description: 'Your natural affinity for Arcane runes allows you to channel pure magical energy with greater precision, piercing through magical defenses and creating unpredictable prismatic effects.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right branch
        icon: '✨',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Arcane runes deal +1 damage per die. When using Arcane runes with at least 2 other different rune types, Prismatic Burst adds 1d8 of a random damage type instead of 1d6.',
          'Arcane runes deal +1 damage per die and reduce target\'s spell resistance by 1. When using Arcane runes with at least 2 other different rune types, Prismatic Burst adds 1d8 of a random damage type instead of 1d6.',
          'Arcane runes deal +2 damage per die and reduce target\'s spell resistance by 1. When using Arcane runes with at least 2 other different rune types, Prismatic Burst adds 1d10 of a random damage type instead of 1d6.',
          'Arcane runes deal +2 damage per die and reduce target\'s spell resistance by 2. When using Arcane runes with at least 2 other different rune types, Prismatic Burst adds 1d10 of a random damage type instead of 1d6 and has a 10% chance to apply a random status effect.',
          'Arcane runes deal +3 damage per die and reduce target\'s spell resistance by 2. When using Arcane runes with at least 2 other different rune types, Prismatic Burst adds 1d12 of a random damage type instead of 1d6 and has a 20% chance to apply a random status effect.'
        ]
      },

      // Tier 2 (Level 20) - Branching Elemental Pattern (growing branches)
      {
        id: 'explosive-bolt',
        name: 'Explosive Bolt',
        description: 'Your mastery of Fire runes in Bolt spells allows you to create devastating explosions that engulf multiple targets.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left branch
        requires: ['fire-affinity'],
        icon: '🎯',
        rankDescription: [
          'When casting a Bolt spell with 2+ Fire runes, the explosion radius increases by an additional 5 feet and deals +1d6 fire damage. The area remains burning for 1 round, dealing 1d6 fire damage to creatures that enter or start their turn there.',
          'When casting a Bolt spell with 2+ Fire runes, the explosion radius increases by an additional 10 feet and deals +2d6 fire damage. The area remains burning for 2 rounds, dealing 1d8 fire damage to creatures that enter or start their turn there.',
          'When casting a Bolt spell with 2+ Fire runes, the explosion radius increases by an additional 15 feet and deals +3d6 fire damage. The area remains burning for 3 rounds, dealing 1d10 fire damage to creatures that enter or start their turn there and creating difficult terrain.'
        ]
      },
      {
        id: 'conductive-beam',
        name: 'Conductive Beam',
        description: 'Your mastery of Lightning runes in Beam spells allows you to create devastating arcs of electricity that chain between multiple targets.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center branch
        requires: ['lightning-affinity'],
        icon: '⚡',
        rankDescription: [
          'When casting a Beam spell with 2+ Lightning runes, the beam width increases by 5 feet and deals +1d6 lightning damage. Targets hit by the beam have disadvantage on their first saving throw against your next lightning spell within 2 rounds.',
          'When casting a Beam spell with 2+ Lightning runes, the beam width increases by 10 feet and deals +2d6 lightning damage. Targets hit by the beam have disadvantage on their first saving throw against your next lightning spell within 3 rounds.',
          'When casting a Beam spell with 2+ Lightning runes, the beam width increases by 15 feet and deals +3d6 lightning damage. Targets hit by the beam have disadvantage on their first saving throw against your next lightning spell within 4 rounds and are stunned for 1 round on a failed save.'
        ]
      },
      {
        id: 'prismatic-spray',
        name: 'Prismatic Spray',
        description: 'Your mastery of Arcane runes in Spray spells allows you to create unpredictable and powerful prismatic effects that overwhelm enemies with multiple damage types.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right branch
        requires: ['arcane-affinity'],
        icon: '🌈',
        rankDescription: [
          'When casting a Spray spell with at least 1 Arcane rune and 2 different other runes, the cone width increases by 5 feet and Prismatic Burst adds 1d8 of a random damage type instead of 1d6. Prismatic effects ignore 2 points of resistance to the random damage type.',
          'When casting a Spray spell with at least 1 Arcane rune and 2 different other runes, the cone width increases by 10 feet and Prismatic Burst adds 1d10 of a random damage type instead of 1d6. Prismatic effects ignore 4 points of resistance to the random damage type.',
          'When casting a Spray spell with at least 1 Arcane rune and 2 different other runes, the cone width increases by 15 feet and Prismatic Burst adds 1d12 of a random damage type instead of 1d6 and has a 25% chance to add a second random damage type. Prismatic effects ignore 6 points of resistance to all random damage types.'
        ]
      },

      // Tier 3 (Level 30) - Branching Elemental Pattern (connecting branches)
      {
        id: 'fire-earth-synergy',
        name: 'Fire-Earth Synergy',
        description: 'Your deep understanding of Fire and Earth rune interactions allows you to create devastating lava effects that combine the raw power of both elements.',
        maxRank: 1,
        position: { row: 2, col: 1 }, // Left-center connection
        requires: ['explosive-bolt'],
        icon: '🌋',
        rankDescription: [
          'When combining Fire and Earth runes in any spell form, you create a lava effect that deals an additional 2d8 fire damage and creates difficult terrain for 2 rounds. Creatures that start their turn in the affected area take 1d10 fire damage. When using Mine spells with Fire and Earth runes, the mine creates a lava geyser when triggered, dealing 3d8 fire damage in a 15-foot cone and leaving behind difficult terrain for 3 rounds.'
        ]
      },
      {
        id: 'lightning-water-synergy',
        name: 'Lightning-Water Synergy',
        description: 'Your deep understanding of Lightning and Water rune interactions allows you to create devastating conductive effects that amplify electrical damage.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Right-center connection
        requires: ['conductive-beam'],
        icon: '⚡',
        rankDescription: [
          'When combining Lightning and Water runes in any spell form, you create a conductive effect that deals an additional 2d8 lightning damage to Wet targets and has a 25% chance to stun them for 1 round (Constitution save negates). When using Wall spells with Lightning and Water runes, the wall creates a field of electrified mist that extends 10 feet on each side, dealing 1d10 lightning damage to creatures that start their turn within the mist and applying the Wet condition.'
        ]
      },

      // Tier 4 (Level 40) - Branching Elemental Pattern (specialized branches)
      {
        id: 'volcanic-mine',
        name: 'Volcanic Mine',
        description: 'Your mastery of Fire and Earth runes in Mine spells allows you to create devastating traps that erupt with volcanic fury when triggered.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left branch
        requires: ['fire-earth-synergy'],
        icon: '💣',
        rankDescription: [
          'When casting a Mine spell with at least 1 Fire rune and 1 Earth rune, the mine creates a volcanic eruption when triggered, dealing an additional 2d6 fire damage in a 10-foot radius and leaving behind difficult terrain for 1 round. Earth runes in Mine spells create shrapnel that deals 1d6 piercing damage in addition to the normal damage.',
          'When casting a Mine spell with at least 1 Fire rune and 1 Earth rune, the mine creates a volcanic eruption when triggered, dealing an additional 3d6 fire damage in a 15-foot radius and leaving behind difficult terrain for 2 rounds. Earth runes in Mine spells create shrapnel that deals 1d8 piercing damage in addition to the normal damage. Creatures caught in the eruption must make a Strength save or be knocked prone.',
          'When casting a Mine spell with at least 1 Fire rune and 1 Earth rune, the mine creates a volcanic eruption when triggered, dealing an additional 4d6 fire damage in a 20-foot radius and leaving behind difficult terrain for 3 rounds. Earth runes in Mine spells create shrapnel that deals 1d10 piercing damage in addition to the normal damage. Creatures caught in the eruption must make a Strength save or be knocked prone and stunned for 1 round.'
        ]
      },
      {
        id: 'storm-wall',
        name: 'Storm Wall',
        description: 'Your mastery of Lightning and Water runes in Wall spells allows you to create barriers of electrified mist that shock and disorient enemies.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right branch
        requires: ['lightning-water-synergy'],
        icon: '⚡',
        rankDescription: [
          'When casting a Wall spell with at least 1 Lightning rune and 1 Water rune, the wall creates a storm barrier that extends 10 feet on each side. Creatures that start their turn within the barrier take 1d8 lightning damage and must make a Constitution save or be stunned for 1 round. The wall has +10 HP and lasts 1 round longer than normal.',
          'When casting a Wall spell with at least 1 Lightning rune and 1 Water rune, the wall creates a storm barrier that extends 15 feet on each side. Creatures that start their turn within the barrier take 2d8 lightning damage and must make a Constitution save or be stunned for 1 round. The wall has +20 HP and lasts 2 rounds longer than normal.',
          'When casting a Wall spell with at least 1 Lightning rune and 1 Water rune, the wall creates a storm barrier that extends 20 feet on each side. Creatures that start their turn within the barrier take 3d8 lightning damage and must make a Constitution save or be stunned for 1 round. The wall has +30 HP and lasts 3 rounds longer than normal. Additionally, the wall can be curved or form a complete circle.'
        ]
      },

      // Tier 5 (Level 50) - Branching Elemental Pattern (trunk convergence)
      {
        id: 'elemental-confluence',
        name: 'Elemental Confluence',
        description: 'Your mastery of elemental combinations allows you to create powerful synergies between multiple rune types, producing devastating effects that transcend individual elements.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center trunk
        requires: ['volcanic-mine', 'storm-wall'],
        icon: '🌀',
        rankDescription: [
          'You achieve mastery over elemental combinations: When using at least 3 different elemental rune types in a single spell, you create a confluence of elemental energies that adds 2d8 damage of each element type used and increases the spell\'s save DC by 2. Additionally, you can choose to apply one of the following effects based on the spell form used: 1) Bolt - The bolt splits into multiple projectiles, one for each element type used, each dealing full damage, 2) Beam - The beam width increases by 5 feet per element type used and ignores resistance to all element types used, 3) Spray - The cone width increases by 10 feet per element type used and applies a status effect for each element type used (Burn for Fire, Wet for Water, etc.), 4) Wall - The wall gains +10 HP per element type used and deals 1d8 damage of each element type used to creatures that pass through it, 5) Mine - The mine\'s trigger radius increases by 5 feet per element type used and it creates an explosion that deals damage of all element types used.'
        ]
      },

      // Tier 6 (Level 60) - Branching Elemental Pattern (advanced specialization)
      {
        id: 'spell-form-mastery',
        name: 'Spell Form Mastery',
        description: 'Your unparalleled understanding of spell forms allows you to maximize the effectiveness of each form with any elemental rune combination.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Left branch
        requires: ['elemental-confluence'],
        icon: '📚',
        rankDescription: [
          'You achieve mastery over spell forms: You can now cast each spell form with enhanced effects based on the runes used: 1) Bolt - Range increases to 180 feet, damage increases by 1d8 per rune, and on a critical hit, the bolt explodes for half damage in a 10-foot radius, 2) Beam - Width increases by 5 feet, length increases to 90 feet, and you can sustain it for 0 AP for one additional round, 3) Spray - Width increases to 30 feet, damage increases by 1d6 per rune, and enemies that fail their save are pushed 10 feet away, 4) Wall - Length increases by 10 feet, HP increases by 50%, and it lasts 2 rounds longer, 5) Mine - Trigger radius increases by 5 feet, damage increases by 1d8 per rune, and you can have 2 additional Mines active at once. Additionally, once per short rest, you can cast any spell form as a bonus action.'
        ]
      },
      {
        id: 'elemental-mastery',
        name: 'Elemental Mastery',
        description: 'Your unparalleled understanding of elemental runes allows you to manipulate the fundamental forces of nature with unprecedented precision and power.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Right branch
        requires: ['elemental-confluence'],
        icon: '🌐',
        rankDescription: [
          'You achieve mastery over elemental runes: You can now include up to 8 runes in your recipes instead of 5. Each elemental rune type gains enhanced effects: 1) Fire - Burn damage increases to 2d6/round and ignites flammable objects, 2) Water - Wet duration doubles and extinguishes fires in a 10-foot radius, 3) Ice - Slow effect reduces movement by 20 feet and Freeze duration increases by 1 round, 4) Lightning - Chain damage no longer decreases with each jump and has a 20% chance to stun, 5) Earth - Adds 2 dice instead of 1 and creates difficult terrain in a 10-foot radius, 6) Arcane - Pierces all magical resistance and immunity and Prismatic Burst adds two random damage types, 7) Shield - Walls gain +10 HP per Shield rune and grant +2 AC to allies behind them, 8) Life - Healing increases by 2d6 per Life rune and removes one negative condition. Additionally, once per short rest, you can cast a spell with no Volatility cost, regardless of how many Fire or Lightning runes are used.'
        ]
      },

      // Tier 7 (Level 70) - Branching Elemental Pattern (ultimate capstone)
      {
        id: 'elemental-transcendence',
        name: 'Elemental Transcendence',
        description: 'You transcend the normal limitations of elemental magic, becoming a living conduit for the raw forces of creation and destruction.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center trunk capstone
        requires: ['spell-form-mastery', 'elemental-mastery'],
        icon: '☀️',
        rankDescription: [
          'You achieve transcendence beyond mortal understanding: Once per day, you can enter a state of Elemental Transcendence for 1d4+1 rounds. While in this state, you float 3 feet above the ground and your body crackles with elemental energy. You gain the following benefits: 1) Your Element Slots increase to 10 and your Volatility limit is doubled, 2) You can cast one spell per round as a free action, 3) All your spells deal maximum damage and ignore resistance and immunity to their damage types, 4) You can combine any elemental runes without restrictions (including Life with Fire/Earth), 5) You can cast any spell form without clearing your queue, allowing you to use the same runes multiple times, 6) Each spell you cast creates an Elemental Aftermath effect in the area that persists for 1d4 rounds (fire creates burning ground, ice creates difficult terrain and slows, lightning creates a storm that strikes random targets, earth creates tremors that knock creatures prone, arcane creates reality distortions that confuse enemies, etc.). When this effect ends, you suffer 1 level of exhaustion.'
        ]
      },
    ],
  },
  {
    id: 'runic-architect',
    name: 'Runic Architect',
    description: 'Focus on battlefield control and defensive structures, using Wall and Mine spells to reshape the terrain and create zones of protection and denial.',
    icon: '🏗️',
    talents: [
      // Tier 1 (Level 10) - Blueprint Pattern (foundation layer)
      {
        id: 'mine-specialist',
        name: 'Mine Specialist',
        description: 'Your expertise in trap creation allows you to create Mine spells that remain active for extended periods and trigger with devastating effects.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left foundation
        icon: '💣',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Mine spells last for 10 minutes instead of 1 hour before decaying. Mine spells deal +1d4 damage and have a +1 to their save DC.',
          'Your Mine spells last for 30 minutes instead of 1 hour before decaying. Mine spells deal +1d6 damage and have a +1 to their save DC. You can have up to 3 Mines active simultaneously.',
          'Your Mine spells last for 1 hour instead of 1 hour before decaying. Mine spells deal +1d8 damage and have a +2 to their save DC. You can have up to 4 Mines active simultaneously.',
          'Your Mine spells last for 4 hours instead of 1 hour before decaying. Mine spells deal +1d10 damage and have a +2 to their save DC. You can have up to 5 Mines active simultaneously and remotely detonate them as an action.',
          'Your Mine spells last until triggered (no decay). Mine spells deal +1d12 damage and have a +3 to their save DC. You can have up to 6 Mines active simultaneously and remotely detonate them as a bonus action.'
        ]
      },
      {
        id: 'wall-specialist',
        name: 'Wall Specialist',
        description: 'Your expertise in defensive architecture allows you to create Wall spells of exceptional durability and versatility.',
        maxRank: 5,
        position: { row: 0, col: 3 }, // Right foundation
        icon: '🧱',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Wall spells have their HP multiplied by 1.2 and last 1 round longer. Allies behind your walls gain +1 AC.',
          'Wall spells have their HP multiplied by 1.4 and last 1 round longer. Allies behind your walls gain +1 AC and half cover.',
          'Wall spells have their HP multiplied by 1.6 and last 2 rounds longer. Allies behind your walls gain +2 AC and half cover.',
          'Wall spells have their HP multiplied by 1.8 and last 2 rounds longer. Allies behind your walls gain +2 AC and three-quarters cover. You can have up to 2 Walls active simultaneously.',
          'Wall spells have their HP multiplied by 2 and last 3 rounds longer. Allies behind your walls gain +3 AC and three-quarters cover. You can have up to 3 Walls active simultaneously. Additionally, allies within 5 feet of your walls gain 1d6 temporary hit points at the start of their turn.'
        ]
      },
      {
        id: 'shield-affinity',
        name: 'Shield Affinity',
        description: 'Your natural affinity for Shield runes allows you to create more powerful protective effects and defensive structures.',
        maxRank: 5,
        position: { row: 0, col: 1 }, // Center foundation
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Shield runes add +5 HP to walls instead of the standard amount. When using Shield runes in Mine spells, they grant 1d4 temporary HP to allies within 10 feet when triggered.',
          'Shield runes add +10 HP to walls instead of the standard amount. When using Shield runes in Mine spells, they grant 1d6 temporary HP to allies within 10 feet when triggered.',
          'Shield runes add +15 HP to walls instead of the standard amount. When using Shield runes in Mine spells, they grant 1d8 temporary HP to allies within 15 feet when triggered.',
          'Shield runes add +20 HP to walls instead of the standard amount. When using Shield runes in Mine spells, they grant 1d10 temporary HP to allies within 15 feet when triggered.',
          'Shield runes add +25 HP to walls instead of the standard amount. When using Shield runes in Mine spells, they grant 1d12 temporary HP to allies within 20 feet when triggered. Additionally, allies affected by your Shield rune effects gain +1 to all saving throws for 1 round.'
        ]
      },

      // Tier 2 (Level 20) - Blueprint Pattern (structural supports)
      {
        id: 'concealed-mines',
        name: 'Concealed Mines',
        description: 'Your expertise in trap creation allows you to design Mine spells that are exceptionally difficult to detect and avoid.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left support
        requires: ['mine-specialist'],
        icon: '🕸️',
        rankDescription: [
          'Your Mines are harder to detect, requiring a Perception check (DC = 10 + your Intelligence modifier + your proficiency bonus) to notice. The trigger radius of your Mines increases by 5 feet. When a Mine is triggered, you can use your reaction to load one rune into your queue at no AP cost.',
          'Your Mines are harder to detect, requiring a Perception check (DC = 12 + your Intelligence modifier + your proficiency bonus) to notice. The trigger radius of your Mines increases by 10 feet. When a Mine is triggered, you can use your reaction to load one rune into your queue at no AP cost and gain advantage on your next spell attack roll.',
          'Your Mines are harder to detect, requiring a Perception check (DC = 15 + your Intelligence modifier + your proficiency bonus) to notice. The trigger radius of your Mines increases by 15 feet. Mines can now be set to trigger only for specific types of creatures. When a Mine is triggered, you can use your reaction to load one rune into your queue at no AP cost and cast a Bolt spell as part of the same reaction.'
        ]
      },
      {
        id: 'reinforced-walls',
        name: 'Reinforced Walls',
        description: 'Your mastery of defensive architecture allows you to create Wall spells that are exceptionally durable and can be shaped to your specifications.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right support
        requires: ['wall-specialist'],
        icon: '🏰',
        rankDescription: [
          'Your Walls can now be created up to 30 feet away from you (instead of 20 feet) and gain immunity to one damage type of your choice. When you cast a Wall spell, you gain temporary hit points equal to your Intelligence modifier for 1 round.',
          'Your Walls can now be created up to 40 feet away from you and gain immunity to two damage types of your choice. You can now create Walls with small openings that only you and your allies can pass through without triggering the Wall\'s effects. When you cast a Wall spell, you gain temporary hit points equal to twice your Intelligence modifier for 2 rounds.',
          'Your Walls can now be created up to 50 feet away from you and gain immunity to three damage types of your choice. Walls can now be curved or form a complete circle. When an enemy attacks your Wall, they take 1d8 damage of the Wall\'s type. When you cast a Wall spell, you gain temporary hit points equal to three times your Intelligence modifier for 3 rounds.'
        ]
      },
      {
        id: 'defensive-matrix',
        name: 'Defensive Matrix',
        description: 'Your strategic genius allows you to create an interconnected network of Shield runes that work in harmony to protect you and your allies.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center support
        requires: ['shield-affinity'],
        icon: '🔲',
        rankDescription: [
          'When you have at least one Wall or Mine with Shield runes active, allies within 15 feet of either gain +1 AC and +1 to saving throws. Shield runes in your spells now grant 1d4 temporary hit points to you when cast.',
          'When you have at least one Wall or Mine with Shield runes active, allies within 20 feet of either gain +2 AC and +2 to saving throws. Shield runes in your spells now grant 1d6 temporary hit points to you when cast. Additionally, when a creature triggers a Mine with Shield runes, allies within 10 feet gain 1d6 temporary hit points.',
          'When you have at least one Wall or Mine with Shield runes active, allies within 30 feet of either gain +3 AC and +3 to saving throws. Shield runes in your spells now grant 1d8 temporary hit points to you when cast. Additionally, when a creature triggers a Mine with Shield runes, allies within 15 feet gain 1d8 temporary hit points and gain resistance to one damage type of your choice for 1 round.'
        ]
      },

      // Tier 3 (Level 30) - Blueprint Pattern (central chamber)
      {
        id: 'runic-synergy',
        name: 'Runic Synergy',
        description: 'Your deep understanding of runic interactions allows you to create powerful synergies between your defensive structures.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Central chamber
        requires: ['concealed-mines', 'defensive-matrix', 'reinforced-walls'],
        icon: '🔄',
        rankDescription: [
          'Your Walls and Mines become linked in a defensive network. When a creature triggers a Mine, all your Walls within 60 feet gain +10 temporary HP and deal +1d6 damage of their type to creatures that pass through them for 1 round. When a Wall is attacked, all your Mines within 60 feet have their save DC increased by 2 and their damage increased by 1d6 for 1 round. You can now have one additional Mine and one additional Wall active at the same time beyond your normal limits. Additionally, when you cast a Wall or Mine spell, you can choose to infuse it with protective energy, granting all allies within 15 feet temporary hit points equal to your Intelligence modifier + your proficiency bonus.'
        ]
      },

      // Tier 4 (Level 40) - Blueprint Pattern (outer wings)
      {
        id: 'minefield-tactician',
        name: 'Minefield Tactician',
        description: 'Your tactical genius allows you to create elaborate networks of mines that control and deny large areas of the battlefield.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left wing
        requires: ['runic-synergy'],
        icon: '💥',
        rankDescription: [
          'You can now have up to 7 Mines active at once. When you place a Mine, you can choose to link it to another Mine within 30 feet. When one linked Mine is triggered, the other also detonates. Your Mines now deal +1d6 damage of their type and their trigger radius increases by 5 feet.',
          'You can now have up to 8 Mines active at once. When you place a Mine, you can choose to link it to up to two other Mines within 40 feet. When one linked Mine is triggered, the others also detonate. Your Mines now deal +2d6 damage of their type and their trigger radius increases by 10 feet. Additionally, you can now set Mines to trigger on a timer instead of by proximity.',
          'You can now have up to 10 Mines active at once. When you place a Mine, you can choose to link it to up to three other Mines within 50 feet. When one linked Mine is triggered, the others also detonate. Your Mines now deal +3d6 damage of their type and their trigger radius increases by 15 feet. Additionally, you can now set Mines to trigger on a timer or by a mental command (within 100 feet) instead of by proximity.'
        ]
      },
      {
        id: 'fortress-architect',
        name: 'Fortress Architect',
        description: 'Your architectural genius allows you to create elaborate networks of walls that reshape the battlefield into an impenetrable fortress.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right wing
        requires: ['runic-synergy'],
        icon: '🏯',
        rankDescription: [
          'You can now have up to 4 Walls active at once. Your Walls can now be stacked vertically, creating multi-level barriers up to 15 feet high. When you create a Wall, you can choose to fortify it, increasing its HP by 50% but making it immobile. Fortified Walls grant allies behind them +1 to AC and saving throws.',
          'You can now have up to 5 Walls active at once. Your Walls can now be stacked vertically, creating multi-level barriers up to 20 feet high. When you create a Wall, you can choose to fortify it, increasing its HP by 75% but making it immobile. Fortified Walls grant allies behind them +2 to AC and saving throws. Additionally, your Walls now deal 2d6 damage of their type to creatures that attempt to pass through them.',
          'You can now have up to 6 Walls active at once. Your Walls can now be stacked vertically, creating multi-level barriers up to 30 feet high. When you create a Wall, you can choose to fortify it, doubling its HP but making it immobile. Fortified Walls grant allies behind them +3 to AC and saving throws. Additionally, your Walls now deal 3d6 damage of their type to creatures that attempt to pass through them and have a 25% chance to stun them for 1 round (Constitution save negates).'
        ]
      },

      // Tier 5 (Level 50) - Blueprint Pattern (central dome)
      {
        id: 'bastion-array',
        name: 'Bastion Array',
        description: 'Your architectural mastery allows you to create a powerful defensive array that combines the protective power of walls and the tactical control of mines.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Central dome
        requires: ['minefield-tactician', 'fortress-architect'],
        icon: '🏛️',
        rankDescription: [
          'You achieve the pinnacle of battlefield control: Once per short rest, you can create a Bastion Array (AP 4, Mana 6, 2 GC) that combines the power of Walls and Mines. The array creates a 30-foot radius dome of overlapping walls that provides three-quarters cover from outside attacks. The dome has 100 HP and lasts for 1d4+2 rounds. Allies inside gain +3 AC, +3 to saving throws, and regenerate 1d8 hit points per round. The perimeter of the dome is lined with concealed Mines that trigger when enemies approach within 10 feet, dealing 4d8 damage of a type of your choice and pushing them 15 feet away. These Mines do not count against your normal Mine limit and reset each round. Additionally, when a Mine detonates within 30 feet of a Wall, the Wall becomes charged with that element for 1d4 rounds, dealing 2d6 damage of the Mine\'s type to enemies that start their turn within 5 feet of the Wall. When a Wall is created within 30 feet of a Mine, the Mine\'s save DC increases by 2 and its damage increases by 2d6.'
        ]
      },

      // Tier 6 (Level 60) - Blueprint Pattern (twin towers)
      {
        id: 'grand-architect',
        name: 'Grand Architect',
        description: 'Your architectural genius reaches new heights, allowing you to create defensive structures of unprecedented scale and complexity.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Left tower
        requires: ['bastion-array'],
        icon: '🏛️',
        rankDescription: [
          'You achieve mastery of defensive architecture: You can now create advanced defensive structures that reshape the battlefield. As an action (AP 4, Mana 6, 2 GC), you can create one of the following structures: 1) Runic Citadel - Create a 30-foot radius, 40-foot high dome of overlapping walls that provides total cover from outside attacks. The dome has 150 HP and lasts for 1d6+2 rounds. Allies inside gain +4 AC, +4 to saving throws, and regenerate 2d6 hit points per round. 2) Arcane Bulwark - Create a 60-foot long, 20-foot high wall of pure magical energy that blocks line of sight and spell effects. The wall has 200 HP, is immune to all damage types except force, and lasts for 1d4+3 rounds. Allies within 10 feet of the wall gain resistance to spell damage. 3) Runic Labyrinth - Create a complex network of 10-foot high walls in a 40-foot radius area that you mentally design. The labyrinth creates difficult terrain for enemies, provides three-quarters cover for allies, and lasts for 1d6+2 rounds. Enemies that enter the labyrinth must make an Intelligence save or become disoriented, moving in a random direction on their turn. You can have only one advanced structure active at a time.'
        ]
      },
      {
        id: 'master-trapper',
        name: 'Master Trapper',
        description: 'Your expertise in trap creation reaches new heights, allowing you to create mines and traps of unprecedented power and complexity.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Right tower
        requires: ['bastion-array'],
        icon: '⚠️',
        rankDescription: [
          'You achieve mastery of trap creation: You can now create advanced trap systems that control the battlefield. As an action (AP 4, Mana 6, 2 GC), you can create one of the following trap systems: 1) Runic Minefield - Create a 40-foot radius field containing 2d4 concealed mines that you can mentally position. These mines deal 4d8 damage of a type of your choice when triggered and apply a status effect appropriate to their type. The field lasts for 1d6+2 rounds, and mines reset 1d4 rounds after being triggered. 2) Elemental Snare - Create a 30-foot radius zone where the first 1d4+1 enemies to enter must make a Dexterity save or be restrained by runic chains. Restrained creatures take 2d8 force damage at the start of their turn and must use their action to attempt to break free (Strength save). The snare lasts for 1d4+2 rounds. 3) Arcane Sentinel - Create a magical construct that patrols a 50-foot radius area for 1d6+1 rounds. The sentinel has 80 HP and can detect invisible creatures. When it detects an enemy, it fires a beam that deals 3d10 force damage and marks the target, causing them to take +2d6 damage from your spells for 1d4 rounds. You can have only one advanced trap system active at a time.'
        ]
      },

      // Tier 7 (Level 70) - Blueprint Pattern (central spire)
      {
        id: 'arcane-architect',
        name: 'Arcane Architect',
        description: 'You transcend the normal limitations of runic magic, becoming a living conduit for architectural arcane power that can reshape reality itself.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Central spire
        requires: ['grand-architect', 'master-trapper'],
        icon: '🏛️',
        rankDescription: [
          'You achieve transcendence as an Arcane Architect: Once per day, you can enter a state of Architectural Mastery for 1d4+2 rounds. While in this state, you float 3 feet above the ground and are surrounded by orbiting runic symbols. You gain the following benefits: 1) You can create Walls and Mines as a bonus action with no AP or Mana cost, 2) Your Walls and Mines have double HP and their save DCs increase by 4, 3) You can have up to 10 Walls and 10 Mines active simultaneously, 4) You can reshape, move, or reconfigure any of your active Walls or Mines as a bonus action, 5) When you cast a spell, you can choose to infuse it with architectural energy, causing it to create a persistent field of that element that lasts for 3 rounds, 6) You can create a Runic Citadel, Arcane Bulwark, Runic Labyrinth, Runic Minefield, Elemental Snare, or Arcane Sentinel as a bonus action once per round, 7) You can create a Grand Sanctuary as an action - a 50-foot radius dome that makes allies inside immune to critical hits, grants them immunity to one damage type of your choice, allows them to reroll one saving throw per round, and heals them for 2d8 hit points at the start of their turn. When this effect ends, you suffer 1 level of exhaustion and cannot create Walls or Mines for 1d4 rounds as your runic energy recharges.'
        ]
      },
    ],
  },
  {
    id: 'flux-tactician',
    name: 'Flux Tactician',
    description: 'Focus on risk-reward gameplay, pushing the limits of Volatility for greater power while managing the chaotic energies that would destroy lesser spellcasters.',
    icon: '⚠️',
    talents: [
      // Tier 1 (Level 10) - Volatility Gauge Pattern (low pressure zone)
      {
        id: 'volatility-reduction',
        name: 'Volatility Reduction',
        description: 'Your expertise in magical flux allows you to reduce the Volatility generated by your spells, making them safer to cast.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position (low pressure)
        icon: '📉',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Reduce Volatility by 1 when casting a spell with 3+ runes. Fire and Lightning runes generate 0.5 less Volatility (minimum 0.5).',
          'Reduce Volatility by 1 when casting a spell with 3+ runes. Fire and Lightning runes generate 0.5 less Volatility (minimum 0.5). When you Vent Volatility, reduce 1 additional point.',
          'Reduce Volatility by 2 when casting a spell with 3+ runes. Fire and Lightning runes generate 0.5 less Volatility (minimum 0.5). When you Vent Volatility, reduce 1 additional point.',
          'Reduce Volatility by 2 when casting a spell with 3+ runes. Fire and Lightning runes generate 1 less Volatility (minimum 0.5). When you Vent Volatility, reduce 2 additional points.',
          'Reduce Volatility by 3 when casting a spell with 3+ runes. Fire and Lightning runes generate 1 less Volatility (minimum 0.5). When you Vent Volatility, reduce 2 additional points.'
        ]
      },
      {
        id: 'volatility-threshold',
        name: 'Volatility Threshold',
        description: 'Your training allows you to safely handle higher levels of Volatility, increasing your threshold before a Misfire occurs.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position (medium pressure)
        icon: '📊',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your Volatility limit increases by 1. When at 50% or more of your Volatility limit, your spells gain +1 to their save DC.',
          'Your Volatility limit increases by 1. When at 50% or more of your Volatility limit, your spells gain +1 to their save DC and deal +1 damage per die.',
          'Your Volatility limit increases by 2. When at 50% or more of your Volatility limit, your spells gain +1 to their save DC and deal +1 damage per die.',
          'Your Volatility limit increases by 2. When at 50% or more of your Volatility limit, your spells gain +2 to their save DC and deal +1 damage per die.',
          'Your Volatility limit increases by 3. When at 50% or more of your Volatility limit, your spells gain +2 to their save DC and deal +2 damage per die.'
        ]
      },
      {
        id: 'volatility-conversion',
        name: 'Volatility Conversion',
        description: 'Your expertise in magical flux allows you to convert excess Volatility into other forms of power, turning potential danger into an advantage.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position (high pressure)
        icon: '♻️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'You may exceed your Volatility limit by 1 before Misfire occurs; this extra point adds +1d6 damage to your spells. When you Vent Volatility, gain temporary hit points equal to the amount vented.',
          'You may exceed your Volatility limit by 1 before Misfire occurs; this extra point adds +1d8 damage to your spells. When you Vent Volatility, gain temporary hit points equal to twice the amount vented.',
          'You may exceed your Volatility limit by 2 before Misfire occurs; each extra point adds +1d6 damage to your spells. When you Vent Volatility, gain temporary hit points equal to twice the amount vented.',
          'You may exceed your Volatility limit by 2 before Misfire occurs; each extra point adds +1d8 damage to your spells. When you Vent Volatility, gain temporary hit points equal to three times the amount vented.',
          'You may exceed your Volatility limit by 3 before Misfire occurs; each extra point adds +1d10 damage to your spells. When you Vent Volatility, gain temporary hit points equal to three times the amount vented.'
        ]
      },

      // Tier 2 (Level 20) - Volatility Gauge Pattern (pressure valves)
      {
        id: 'efficient-venting',
        name: 'Efficient Venting',
        description: 'Your expertise in pressure management allows you to vent excess Volatility with unprecedented efficiency.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left position (low pressure)
        requires: ['volatility-reduction'],
        icon: '🌬️',
        rankDescription: [
          'Vent is a bonus action once per encounter. When you Vent, reduce Volatility by your Intelligence modifier (minimum 2) instead of the standard amount.',
          'Vent is a bonus action twice per encounter. When you Vent, reduce Volatility by your Intelligence modifier + 1 (minimum 3) instead of the standard amount.',
          'Vent is a bonus action three times per encounter. When you Vent, reduce Volatility by your Intelligence modifier + 2 (minimum 4) instead of the standard amount. Additionally, allies within 15 feet gain temporary hit points equal to half the amount of Volatility reduced.'
        ]
      },
      {
        id: 'controlled-chaos',
        name: 'Controlled Chaos',
        description: 'Your training allows you to maintain control even when working with highly volatile magical energies.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center position (medium pressure)
        requires: ['volatility-threshold'],
        icon: '🔄',
        rankDescription: [
          'When you would Misfire, you can make a DC 15 Intelligence check to prevent the Misfire and instead take half the damage yourself. Your Volatility limit increases by an additional 1.',
          'When you would Misfire, you can make a DC 13 Intelligence check to prevent the Misfire and instead take half the damage yourself. Your Volatility limit increases by an additional 1. Additionally, you can transfer 1 point of Volatility to or from an allied spellcaster within 30 feet as a bonus action once per encounter.',
          'When you would Misfire, you can make a DC 10 Intelligence check to prevent the Misfire and instead take half the damage yourself. Your Volatility limit increases by an additional 2. Additionally, you can transfer up to 2 points of Volatility to or from an allied spellcaster within 30 feet as a bonus action once per encounter.'
        ]
      },
      {
        id: 'volatile-power',
        name: 'Volatile Power',
        description: 'Your expertise in harnessing unstable energies allows you to convert Volatility directly into raw magical power.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right position (high pressure)
        requires: ['volatility-conversion'],
        icon: '💪',
        rankDescription: [
          'For each point of current Volatility, gain +1 to damage rolls. When you cast a spell at maximum Volatility (without Misfiring), the spell deals +1d6 damage per die.',
          'For each point of current Volatility, gain +2 to damage rolls. When you cast a spell at maximum Volatility (without Misfiring), the spell deals +1d8 damage per die.',
          'For each point of current Volatility, gain +3 to damage rolls and +5 feet to spell range or area. When you cast a spell at maximum Volatility (without Misfiring), the spell deals +1d10 damage per die and ignores resistance to its damage type.'
        ]
      },

      // Tier 3 (Level 30) - Volatility Gauge Pattern (pressure chamber)
      {
        id: 'flux-manipulation',
        name: 'Flux Manipulation',
        description: 'Your precise control over magical flux allows you to manipulate Volatility with surgical precision.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center position (pressure chamber)
        requires: ['efficient-venting', 'controlled-chaos', 'volatile-power'],
        icon: '🌊',
        rankDescription: [
          'You achieve mastery over flux manipulation: You can transfer Volatility between spells, choosing to retain up to half your current Volatility (rounded down) for your next spell instead of resetting to 0. You can choose which runes add Volatility and which don\'t when casting a spell. Additionally, you can choose to deliberately increase your Volatility by 1-3 points when casting a spell to add +1d8 damage per point added. Once per short rest, you can convert up to 5 points of Volatility into one of the following benefits: 1) Restore 1d8 hit points per point to yourself or an ally within 30 feet, 2) Create a shield of volatile energy that absorbs the next X×10 damage you would take, where X is the number of points converted, or 3) Enhance your next spell, adding your Intelligence modifier to its damage per die and increasing its save DC by 1 per point converted.'
        ]
      },

      // Tier 4 (Level 40) - Volatility Gauge Pattern (pressure intensifiers)
      {
        id: 'flux-reactor',
        name: 'Flux Reactor',
        description: 'Your body becomes a living reactor for Volatility, allowing you to convert excess magical energy into additional actions.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Left position (medium-high pressure)
        requires: ['flux-manipulation'],
        icon: '⚛️',
        rankDescription: [
          'At the start of your turn, you can choose to add 1 Volatility to gain +1 AP. When you do this, your next spell gains +1d6 damage.',
          'At the start of your turn, you can choose to add 1-2 Volatility to gain +1 AP per point. When you do this, your next spell gains +1d6 damage per point added.',
          'At the start of your turn, you can choose to add 1-3 Volatility to gain +1 AP per point. When you do this, your next spell gains +1d8 damage per point added. Additionally, once per short rest, you can add 3 Volatility to immediately take an extra action.'
        ]
      },
      {
        id: 'volatile-genius',
        name: 'Volatile Genius',
        description: 'Your genius-level understanding of Volatility allows you to push your spells to their absolute limits when operating at maximum pressure.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Right position (high pressure)
        requires: ['flux-manipulation'],
        icon: '🧠',
        rankDescription: [
          'When at maximum Volatility (without Misfiring), your spells deal +1d8 damage per die and their save DC increases by 2. You can maintain a minimum Volatility level of 3 without risk of accidental discharge.',
          'When at maximum Volatility (without Misfiring), your spells deal +1d10 damage per die and their save DC increases by 3. You can maintain a minimum Volatility level of 5 without risk of accidental discharge.',
          'When at maximum Volatility (without Misfiring), your spells deal +1d12 damage per die, their save DC increases by 4, and they ignore resistance to their damage type. You can maintain a minimum Volatility level of 7 without risk of accidental discharge.'
        ]
      },

      // Tier 5 (Level 50) - Volatility Gauge Pattern (critical pressure point)
      {
        id: 'flux-nova',
        name: 'Flux Nova',
        description: 'Your mastery of volatile energies allows you to release a devastating nova of pure magical flux, converting excess Volatility into a powerful attack that overwhelms your enemies.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center position (critical pressure)
        requires: ['flux-reactor', 'volatile-genius'],
        icon: '💫',
        rankDescription: [
          'You achieve the pinnacle of flux manipulation: When you Vent while at maximum Volatility, you release a devastating nova of pure magical energy. All enemies within 15 feet take force damage equal to your Volatility × d6; you gain temporary hit points equal to half the damage dealt. This nova of energy is so powerful that it temporarily warps reality around you - for 1 round after using Flux Nova, your spells ignore all resistances and immunities, and you gain advantage on all spell attack rolls and enemies have disadvantage on saving throws against your spells. Additionally, when you use Flux Nova, you can choose to apply one of the following effects: 1) Pull all affected enemies 10 feet toward you and stun them for 1 round (Constitution save negates), 2) Push all affected enemies 15 feet away from you and knock them prone, or 3) Create a field of unstable energy that lasts for 1d4 rounds, dealing 2d6 force damage to enemies that start their turn there. This ability can be used once per combat.'
        ]
      },

      // Tier 6 (Level 60) - Volatility Gauge Pattern (pressure extremes)
      {
        id: 'volatility-incarnate',
        name: 'Volatility Incarnate',
        description: 'You become a living embodiment of magical volatility, your body and mind perfectly attuned to the chaotic energies that would destroy lesser spellcasters.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Left position (maximum pressure)
        requires: ['flux-nova'],
        icon: '🌋',
        rankDescription: [
          'You become one with volatile energy: Your Volatility limit increases by your Intelligence modifier. You no longer take damage from Misfires; instead, when a Misfire would occur, you can choose to either: 1) Channel the energy into a devastating attack that deals damage equal to your Volatility × d10 to a single target within 60 feet, 2) Disperse the energy in a 30-foot radius, dealing damage equal to your Volatility × d6 to all creatures in the area (Dexterity save for half damage), or 3) Absorb the energy, gaining temporary hit points equal to your Volatility × d8 and increasing all your spell damage by 1d6 per die for 1d4 rounds. Additionally, while at maximum Volatility, you emanate an aura of unstable energy that deals 1d10 force damage to enemies that start their turn within 10 feet of you and grants you resistance to all damage types.'
        ]
      },
      {
        id: 'flux-conduit',
        name: 'Flux Conduit',
        description: 'Your body becomes a perfect conduit for magical flux, allowing you to channel and redirect volatile energies with unprecedented precision and power.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Right position (controlled pressure)
        requires: ['flux-nova'],
        icon: '⚡',
        rankDescription: [
          'You become a perfect conduit for magical flux: You can now transfer Volatility between yourself and willing allies within 30 feet as a bonus action. When you transfer Volatility to an ally, they gain the benefits of your Volatile Genius talent for 1 round. When you receive Volatility from an ally, you gain temporary hit points equal to the amount transferred × your Intelligence modifier. Additionally, you can now maintain a "Flux Circuit" with up to three willing allies within 60 feet. While the circuit is active, whenever any member of the circuit casts a spell, they can choose to generate Volatility for any other member instead of themselves. Once per short rest, you can activate "Flux Synchronization" - for 1 minute, all members of your Flux Circuit share a single Volatility pool with a limit equal to the highest member\'s limit, and whenever one member would Misfire, another member can choose to absorb the excess energy as temporary hit points.'
        ]
      },

      // Tier 7 (Level 70) - Volatility Gauge Pattern (pressure mastery)
      {
        id: 'chaos-ascendant',
        name: 'Chaos Ascendant',
        description: 'You transcend the normal limitations of mortal spellcasting, becoming a living avatar of magical chaos capable of reshaping reality through the perfect manipulation of volatile energies.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center position (pressure mastery)
        requires: ['volatility-incarnate', 'flux-conduit'],
        icon: '🌌',
        rankDescription: [
          'You achieve transcendence as a Chaos Ascendant: Once per day, you can enter a state of Chaotic Ascendance for 1d4+2 rounds. While in this state, you float 3 feet above the ground and your body crackles with volatile energy. You gain the following benefits: 1) Your Volatility limit becomes unlimited - you can accumulate as much Volatility as you wish without risk of Misfire, 2) For each point of Volatility you have, your spells deal an additional 1d10 damage and their save DC increases by 1, 3) You can cast one spell per round as a free action, 4) You can freely manipulate your Volatility level, increasing or decreasing it by any amount as a bonus action, 5) When you cast a spell, you can choose to infuse it with chaotic energy, causing it to ignore all resistances and immunities and automatically succeed on attack rolls or force targets to fail their saving throws, 6) You can create a Chaos Nexus as an action - a 30-foot radius sphere of pure volatile energy that you can control with your mind, dealing 4d10 force damage per round to enemies within it and granting allies advantage on all attack rolls and saving throws. When this effect ends, you suffer 1 level of exhaustion and your Volatility resets to 0 for 1d4 rounds as your body recovers from channeling such immense power.'
        ]
      },
    ],
  }
];

export default arcanoneerTalentTrees;