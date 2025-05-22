// Talent trees for the Titan class
const titanTalentTrees = [
  {
    id: 'earthshaper',
    name: 'Earthshaper',
    description: 'Turn ground into weapon.',
    icon: '🌋',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'stone-hand',
        name: 'Stone Hand',
        description: 'Enhance your Tectonic Step ability to leave damaging terrain.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🪨',
        rankDescription: [
          'Tectonic Step leaves caltrops (1d4) instead of plain difficult terrain.',
          'Tectonic Step leaves caltrops (1d6) instead of plain difficult terrain.',
          'Tectonic Step leaves caltrops (1d8) instead of plain difficult terrain.'
        ]
      },
      {
        id: 'earth-sculptor',
        name: 'Earth Sculptor',
        description: 'Gain more control over the terrain you create.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🏔️',
        rankDescription: [
          'Boulder Toss creates a 10-ft radius of difficult terrain.',
          'Boulder Toss creates a 15-ft radius of difficult terrain.',
          'Boulder Toss creates a 20-ft radius of difficult terrain.'
        ]
      },
      {
        id: 'tremor-sense',
        name: 'Tremor Sense',
        description: 'Sense vibrations through the ground.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '📡',
        rankDescription: [
          'Gain tremor sense within 10 ft while touching the ground.',
          'Gain tremor sense within 20 ft while touching the ground.',
          'Gain tremor sense within 30 ft while touching the ground.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'fault-line',
        name: 'Fault-Line',
        description: 'Enhance your Earthshock ability to create lasting hazardous terrain.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['stone-hand'],
        icon: '⚡',
        rankDescription: [
          'Earthshock radius +5 ft.',
          'Earthshock radius +5 ft and fissures remain as hazardous terrain for 1 round.',
          'Earthshock radius +5 ft and fissures remain as hazardous terrain for 3 rounds.'
        ]
      },
      {
        id: 'seismic-impact',
        name: 'Seismic Impact',
        description: 'Your heavy attacks create shockwaves in the ground.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['earth-sculptor'],
        icon: '💥',
        rankDescription: [
          'Heavy Swing creates a 5-ft shockwave that deals 1d4 damage to adjacent enemies.',
          'Heavy Swing creates a 5-ft shockwave that deals 1d6 damage to adjacent enemies.',
          'Heavy Swing creates a 10-ft shockwave that deals 1d8 damage to adjacent enemies.'
        ]
      },
      {
        id: 'stone-skin',
        name: 'Stone Skin',
        description: 'Your skin hardens like stone, providing damage reduction.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['tremor-sense'],
        icon: '🧱',
        rankDescription: [
          'Gain damage reduction 1 while in Stone Stance or higher.',
          'Gain damage reduction 2 while in Stone Stance or higher.',
          'Gain damage reduction 3 while in Stone Stance or higher.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'bedrock-command',
        name: 'Bedrock Command',
        description: 'Enhance your Gravity Well ability to slow enemies.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['fault-line', 'seismic-impact'],
        icon: '🌑',
        rankDescription: [
          'Gravity Well lasts +1 turn and also slows enemies (-10 ft).'
        ]
      },
      {
        id: 'tectonic-shift',
        name: 'Tectonic Shift',
        description: 'Create walls of earth to block enemies.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['seismic-impact', 'stone-skin'],
        icon: '🧗',
        rankDescription: [
          'Spend 3 GV to create a 10-ft wide, 5-ft high wall of earth within 30 ft. The wall has AC 15 and 30 HP.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'earth-master',
        name: 'Earth Master',
        description: 'Gain complete mastery over earth and stone.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['bedrock-command'],
        icon: '🌎',
        rankDescription: [
          'Your terrain-altering abilities last twice as long and have their radius increased by 5 ft.'
        ]
      },
      {
        id: 'mountain-caller',
        name: 'Mountain Caller',
        description: 'Call forth massive stone spikes from the ground.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['tectonic-shift'],
        icon: '🗻',
        rankDescription: [
          'Spend 5 GV to create a 20-ft radius of stone spikes. Enemies in the area take 3d8 damage and must make a DEX save or be restrained until they use an action to break free.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'continental-rift',
        name: 'Continental Rift',
        description: 'Enhance your Ruination Quake ability to create a canyon that restrains enemies.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['earth-master', 'mountain-caller'],
        icon: '🌋',
        rankDescription: [
          'Ruination Quake auto-creates 10-ft canyon; enemies inside are restrained until climb out (STR 15).'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'tectonic-master',
        name: 'Tectonic Master',
        description: 'Gain complete mastery over tectonic forces.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['continental-rift'],
        icon: '🌍',
        rankDescription: [
          'Your earth-based abilities deal an additional 2d8 damage and have their area of effect increased by 10 feet. Additionally, you can spend 3 GV to create a 15-foot radius earthquake centered on a point within 60 feet. Enemies in the area must make a Dexterity saving throw or be knocked prone and take 3d10 damage.'
        ]
      },
      {
        id: 'stone-lord',
        name: 'Stone Lord',
        description: 'Your connection to the earth grants you incredible power.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['continental-rift'],
        icon: '👑',
        rankDescription: [
          'While touching the ground, you gain resistance to all damage and advantage on Strength and Constitution saving throws. Additionally, you can spend 2 GV to create a 10-foot tall, 5-foot thick wall of stone up to 30 feet long. The wall has AC 18 and 50 hit points per 5-foot section.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-earth',
        name: 'Avatar of Earth',
        description: 'Transform into a living embodiment of the earth itself.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['tectonic-master', 'stone-lord'],
        icon: '🌋',
        rankDescription: [
          'Once per day, transform into an Avatar of Earth for 1d6+2 rounds. During this time, your skin becomes living stone, granting you immunity to non-magical weapons, resistance to all other damage, and +5 to your AC. You can move through earth and stone as if it were difficult terrain, and your earth-based abilities deal triple damage and ignore resistance. Additionally, as an action (3 AP), you can cause the ground in a 30-foot radius around you to erupt, dealing 6d10 damage to all enemies in the area and knocking them prone (Dexterity save for half damage and to avoid being knocked prone).'
        ]
      },
    ],
  },
  {
    id: 'world-breaker',
    name: 'World Breaker',
    description: 'One swing = crater.',
    icon: '🔨',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'heft-mastery',
        name: 'Heft Mastery',
        description: 'Enhance your Heavy Swing ability against structures.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🪓',
        rankDescription: [
          'Heavy Swing deals +1d6 damage vs structures.',
          'Heavy Swing deals +1d8 damage vs structures.',
          'Heavy Swing now 2d10 base vs structures; crit range 19-20.'
        ]
      },
      {
        id: 'demolisher',
        name: 'Demolisher',
        description: 'Gain bonuses when destroying objects and structures.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🏚️',
        rankDescription: [
          'Gain +1 GV when you destroy an object or structure.',
          'Gain +2 GV when you destroy an object or structure.',
          'Gain +3 GV when you destroy an object or structure.'
        ]
      },
      {
        id: 'crushing-blow',
        name: 'Crushing Blow',
        description: 'Your attacks can crush armor and defenses.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🛡️',
        rankDescription: [
          'Heavy Swing reduces target\'s AC by 1 for 1 round.',
          'Heavy Swing reduces target\'s AC by 2 for 1 round.',
          'Heavy Swing reduces target\'s AC by 3 for 1 round.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'shock-focus',
        name: 'Shock-Focus',
        description: 'Enhance your Pulverise ability to deal more damage with Siege Stacks.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['heft-mastery'],
        icon: '⚡',
        rankDescription: [
          'Pulverise adds +1d6 per Siege Stack (instead of GV).',
          'Pulverise adds +1d8 per Siege Stack (instead of GV).',
          'Pulverise adds +1d8 per Siege Stack (instead of GV) and costs 1 less GV.'
        ]
      },
      {
        id: 'structural-weakness',
        name: 'Structural Weakness',
        description: 'You can identify and exploit weaknesses in structures and defenses.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['demolisher'],
        icon: '🔍',
        rankDescription: [
          'Your attacks ignore 2 points of object hardness/damage reduction.',
          'Your attacks ignore 4 points of object hardness/damage reduction.',
          'Your attacks ignore 6 points of object hardness/damage reduction.'
        ]
      },
      {
        id: 'devastating-impact',
        name: 'Devastating Impact',
        description: 'Your attacks have a chance to stun enemies.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['crushing-blow'],
        icon: '💫',
        rankDescription: [
          'Heavy Swing has a 10% chance to stun the target for 1 round.',
          'Heavy Swing has a 15% chance to stun the target for 1 round.',
          'Heavy Swing has a 20% chance to stun the target for 1 round.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'momentum-fling',
        name: 'Momentum Fling',
        description: 'Enhance your Colossal Uppercut ability to regain Gravitas when hitting multiple targets.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['shock-focus', 'structural-weakness'],
        icon: '🚀',
        rankDescription: [
          'Colossal Uppercut refunds 2 GV if it launches target into another.'
        ]
      },
      {
        id: 'shatter-defenses',
        name: 'Shatter Defenses',
        description: 'Your attacks can shatter enemy defenses completely.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['structural-weakness', 'devastating-impact'],
        icon: '💔',
        rankDescription: [
          'When you score a critical hit, the target\'s AC is reduced by 4 for 1d4 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'annihilation-strike',
        name: 'Annihilation Strike',
        description: 'Your attacks become even more devastating against structures.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['momentum-fling'],
        icon: '💥',
        rankDescription: [
          'Your attacks against structures and objects automatically crit and deal triple damage instead of double.'
        ]
      },
      {
        id: 'world-ender-mastery',
        name: 'World-Ender Mastery',
        description: 'Enhance your World-Ender ability to deal more damage.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['shatter-defenses'],
        icon: '☄️',
        rankDescription: [
          'World-Ender damage increases to 10d10 and radius increases to 50 ft.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'planet-crusher',
        name: 'Planet Crusher',
        description: 'Enhance your World-Ender ability to ignore resistance and potentially reset Apex Colossus.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['annihilation-strike', 'world-ender-mastery'],
        icon: '🌍',
        rankDescription: [
          'World-Ender ignores resistance; if it destroys ≥ 3 objects, cooldown resets on Apex Colossus.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'apocalyptic-might',
        name: 'Apocalyptic Might',
        description: 'Your strength reaches apocalyptic levels.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['planet-crusher'],
        icon: '💪',
        rankDescription: [
          'Your Strength score increases by 4 (to a maximum of 24), and your carrying capacity is tripled. Additionally, your unarmed strikes deal 2d10 damage, and you can spend 3 GV to make a devastating attack that deals triple damage and ignores resistance.'
        ]
      },
      {
        id: 'cataclysmic-presence',
        name: 'Cataclysmic Presence',
        description: 'Your very presence causes the earth to tremble.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['planet-crusher'],
        icon: '🌋',
        rankDescription: [
          'While at 10+ GV, the ground in a 15-foot radius around you becomes difficult terrain for enemies, and they take 1d8 damage if they start their turn in this area. Additionally, when you use Apex Colossus, the shockwave extends to a 30-foot radius and deals an additional 3d10 damage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-devastation',
        name: 'Avatar of Devastation',
        description: 'Transform into a living embodiment of world-shattering power.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['apocalyptic-might', 'cataclysmic-presence'],
        icon: '💥',
        rankDescription: [
          'Once per day, transform into an Avatar of Devastation for 1d6+2 rounds. During this time, your size increases by one category, your Strength score becomes 30, you gain immunity to all control effects, and your attacks deal an additional 4d10 damage and ignore all resistance and immunity. Additionally, each time you hit with an attack, you create a shockwave in a 15-foot cone behind the target that deals 3d10 force damage to all creatures in the area (Dexterity save for half damage).'
        ]
      },
    ],
  },
  {
    id: 'immovable-juggernaut',
    name: 'Immovable Juggernaut',
    description: 'Be the unyielding wall.',
    icon: '🧱',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'shielded-bulk',
        name: 'Shielded Bulk',
        description: 'Enhance your Grounded Posture ability to protect allies.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🛡️',
        rankDescription: [
          'While in Grounded Posture allies within 5 ft behind you get +1 AC.',
          'While in Grounded Posture allies within 10 ft behind you get +1 AC.',
          'While in Grounded Posture allies within 10 ft behind you get +2 AC.'
        ]
      },
      {
        id: 'immovable-object',
        name: 'Immovable Object',
        description: 'Become even harder to move or knock down.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🏔️',
        rankDescription: [
          'Gain advantage on saves against being moved, pushed, or knocked prone.',
          'Cannot be moved, pushed, or knocked prone while in Stone Stance or higher.',
          'Cannot be moved, pushed, or knocked prone under any circumstances.'
        ]
      },
      {
        id: 'magnet-shield',
        name: 'Magnet Shield',
        description: 'Attract ranged attacks to yourself, protecting allies.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '🧲',
        rankDescription: [
          'As a reaction, redirect a ranged attack targeting an ally within 10 ft to yourself.',
          'As a reaction, redirect a ranged attack targeting an ally within 15 ft to yourself.',
          'As a reaction, redirect a ranged attack targeting an ally within 20 ft to yourself.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'gravitas-ward',
        name: 'Gravitas Ward',
        description: 'Enhance your Bastion of Stone ability to reflect damage.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['shielded-bulk'],
        icon: '🔄',
        rankDescription: [
          'Bastion of Stone temp HP also grants yourself ¼ that as damage reflection.',
          'Bastion of Stone temp HP also grants yourself ⅓ that as damage reflection.',
          'Bastion of Stone temp HP also grants yourself ½ that as damage reflection.'
        ]
      },
      {
        id: 'unyielding',
        name: 'Unyielding',
        description: 'Gain resistance to damage while at high Gravitas.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['immovable-object'],
        icon: '💪',
        rankDescription: [
          'Gain resistance to one damage type of your choice while in Stone Stance or higher.',
          'Gain resistance to two damage types of your choice while in Stone Stance or higher.',
          'Gain resistance to three damage types of your choice while in Stone Stance or higher.'
        ]
      },
      {
        id: 'kinetic-shelter',
        name: 'Kinetic Shelter',
        description: 'Enhance your Magnet Shield ability to protect allies from a greater distance.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['magnet-shield'],
        icon: '🔰',
        rankDescription: [
          'Magnet Shield radius increases to 25 ft; redirected shots grant +1 GV.',
          'Magnet Shield radius increases to 30 ft; redirected shots grant +1 GV.',
          'Magnet Shield radius increases to 30 ft; redirected shots grant +2 GV (instead of +1).'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'stone-guardian',
        name: 'Stone Guardian',
        description: 'Enhance your protective abilities for allies.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['gravitas-ward', 'unyielding'],
        icon: '🗿',
        rankDescription: [
          'Allies within 15 ft gain half the benefits of your stance thresholds.'
        ]
      },
      {
        id: 'immovable-stance',
        name: 'Immovable Stance',
        description: 'Enhance your Grounded Posture ability.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['unyielding', 'kinetic-shelter'],
        icon: '🧍',
        rankDescription: [
          'While in Grounded Posture, gain immunity to critical hits and +3 AC.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'titanic-defender',
        name: 'Titanic Defender',
        description: 'Become an even better protector for your allies.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['stone-guardian'],
        icon: '🏛️',
        rankDescription: [
          'When an ally within 15 ft would take damage, you can use your reaction to take that damage instead. You have resistance to this damage.'
        ]
      },
      {
        id: 'unbreakable',
        name: 'Unbreakable',
        description: 'Become nearly impossible to take down.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['immovable-stance'],
        icon: '🧿',
        rankDescription: [
          'When you would be reduced to 0 HP, you can spend all your GV to remain at 1 HP instead. You gain temporary HP equal to the GV spent × 3.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'living-bunker',
        name: 'Living Bunker',
        description: 'Enhance your Grounded Posture ability to last indefinitely and generate Gravitas.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['titanic-defender', 'unbreakable'],
        icon: '🏰',
        rankDescription: [
          'You may hold Grounded Posture indefinitely; each round held grants +1 GV (max 15) without Strain.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'immovable-object',
        name: 'Immovable Object',
        description: 'Become truly immovable, immune to all forced movement.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['living-bunker'],
        icon: '🧱',
        rankDescription: [
          'You are immune to all forced movement effects and cannot be knocked prone. Additionally, when an enemy tries to move you and fails, they are pushed 10 feet away from you and take 2d8 force damage.'
        ]
      },
      {
        id: 'gravitational-anchor',
        name: 'Gravitational Anchor',
        description: 'Your gravitational pull affects all nearby creatures.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['living-bunker'],
        icon: '🧲',
        rankDescription: [
          'As an action (3 AP), create a gravitational field in a 20-foot radius around you for 1d4 rounds. Enemies in this field have their movement speed halved and must make a Strength saving throw at the start of their turn or be pulled 10 feet toward you. Additionally, while this field is active, you gain +2 AC and resistance to all damage.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-stability',
        name: 'Avatar of Stability',
        description: 'Transform into a living embodiment of perfect stability.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['immovable-object', 'gravitational-anchor'],
        icon: '⚓',
        rankDescription: [
          'Once per day, transform into an Avatar of Stability for 1d6+2 rounds. During this time, you become immovable (cannot be moved by any means unless you choose to move), gain immunity to all damage for the first 10 points of damage from each source, and your maximum GV increases to 20. Additionally, you create a 30-foot aura of stability around you that grants allies within it immunity to forced movement and resistance to all damage. Finally, as an action (3 AP), you can create a gravitational singularity at a point within 60 feet, pulling all enemies within 30 feet of that point 15 feet toward it and dealing 4d10 force damage to them (Strength save for half damage and to avoid being pulled).'
        ]
      },
    ],
  }
];

export default titanTalentTrees;
