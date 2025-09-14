// Talent trees for the Witch Doctor class
const witchDoctorTalentTrees = [
  {
    id: 'curse-binder',
    name: 'Curse-Binder',
    description: 'Master the art of hexes and curses to weaken and control individual targets.',
    icon: 'crystal',
    talents: [
      // Tier 1 (Level 10) - Voodoo Doll Pattern (head)
      {
        id: 'evil-eye',
        name: 'Evil Eye',
        description: 'Your gaze carries malevolent power, allowing you to hex enemies with a mere glance.',
        maxRank: 3,
        position: { row: 0, col: 0 }, // Left side of head
        icon: 'eye',
        rankDescription: [
          'Reduce the AP cost of your Hex ability by 1 (minimum 1).',
          'Reduce the AP cost of your Hex ability by 1 (minimum 1) and its mana cost by 1.',
          'Reduce the AP cost of your Hex ability by 1 (minimum 1) and its mana cost by 1. You can cast Hex as a reaction once per encounter.'
        ]
      },
      {
        id: 'persistent-hex',
        name: 'Persistent Hex',
        description: 'Your basic Hex lasts longer, allowing you to maintain control over your victims.',
        maxRank: 3,
        position: { row: 0, col: 1 }, // Left eye of voodoo doll
        icon: '⏱️',
        rankDescription: [
          'Your basic Hex lasts 3 rounds instead of 2.',
          'Your basic Hex lasts 4 rounds instead of 2.',
          'Your basic Hex lasts 5 rounds instead of 2.'
        ]
      },
      {
        id: 'hex-potency',
        name: 'Hex Potency',
        description: 'Your Hex ability becomes more powerful, crippling your target\'s ability to fight back.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Right eye of voodoo doll
        icon: '💪',
        rankDescription: [
          'Targets affected by your Hex suffer -3 to attack rolls instead of -2.',
          'Targets affected by your Hex suffer -4 to attack rolls instead of -2.',
          'Targets affected by your Hex suffer -5 to attack rolls instead of -2.'
        ]
      },
      {
        id: 'malicious-intent',
        name: 'Malicious Intent',
        description: 'Your curses are infused with malicious intent, making them more effective against powerful foes.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Right side of head
        icon: '😈',
        rankDescription: [
          'Your curses deal 10% more damage to elite and boss enemies.',
          'Your curses deal 20% more damage to elite and boss enemies.',
          'Your curses deal 30% more damage to elite and boss enemies and have a 10% chance to apply a second random curse effect.'
        ]
      },
      {
        id: 'hex-range',
        name: 'Hex Range',
        description: 'Increase the range of your Hex ability, extending your malevolent reach.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Mouth of voodoo doll
        icon: '📏',
        rankDescription: [
          'The range of your Hex increases to 80 feet.',
          'The range of your Hex increases to 100 feet.',
          'The range of your Hex increases to 120 feet.'
        ]
      },
      {
        id: 'whispers-of-madness',
        name: 'Whispers of Madness',
        description: 'Your curses whisper maddening thoughts into your victims\' minds, causing confusion and fear.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Left side of neck
        requires: ['evil-eye'],
        icon: '🗣️',
        rankDescription: [
          'Hexed targets have a 10% chance to attack a random nearby ally instead of their intended target.',
          'Hexed targets have a 20% chance to attack a random nearby ally instead of their intended target.',
          'Hexed targets have a 30% chance to attack a random nearby ally instead of their intended target or waste their action entirely.'
        ]
      },
      {
        id: 'curse-of-misfortune',
        name: 'Curse of Misfortune',
        description: 'Your curses bring terrible luck to your victims, causing them to fumble and fail.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Right side of neck
        requires: ['malicious-intent'],
        icon: '🎲',
        rankDescription: [
          'Hexed targets have a 10% chance to critically fail on attack rolls and ability checks.',
          'Hexed targets have a 15% chance to critically fail on attack rolls and ability checks.',
          'Hexed targets have a 20% chance to critically fail on attack rolls and ability checks, and their critical hit range is reduced by 2.'
        ]
      },

      // Tier 2 (Level 20) - Voodoo Doll Pattern (arms and shoulders)
      {
        id: 'voodoo-doll',
        name: 'Voodoo Doll',
        description: 'Create a voodoo doll linked to a target to inflict pain directly through sympathetic magic.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left arm of voodoo doll
        requires: ['persistent-hex', 'whispers-of-madness'],
        icon: '🧸',
        rankDescription: [
          'Create a voodoo doll linked to a hexed target. When you stick a pin in the doll, the target takes 1d6 psychic damage and the hex duration is refreshed.',
          'Create a voodoo doll linked to a hexed target. When you stick a pin in the doll, the target takes 1d8 psychic damage and the hex duration is refreshed.',
          'Create a voodoo doll linked to a hexed target. When you stick a pin in the doll, the target takes 1d10 psychic damage and the hex duration is refreshed.'
        ]
      },
      {
        id: 'shoulder-curse',
        name: 'Curse of Burden',
        description: 'Place a curse on your target\'s shoulders, weighing them down with supernatural burden.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Left shoulder
        requires: ['persistent-hex'],
        icon: '⚓',
        rankDescription: [
          'Cursed targets have their movement speed reduced by 10 feet.',
          'Cursed targets have their movement speed reduced by 15 feet and suffer disadvantage on Strength checks.',
          'Cursed targets have their movement speed reduced by 20 feet, suffer disadvantage on Strength checks, and take 1d6 damage when they attempt to jump or climb.'
        ]
      },
      {
        id: 'curse-transfer',
        name: 'Curse Transfer',
        description: 'Improve your ability to move curses between targets, spreading your malevolent influence.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Chest of voodoo doll
        requires: ['hex-potency', 'hex-range'],
        icon: '🔄',
        rankDescription: [
          'Your Curse Transfer ability costs 0 AP instead of 1 AP.',
          'Your Curse Transfer ability can now move curses to targets up to 45 feet away.',
          'Your Curse Transfer ability can now move curses to targets up to 60 feet away and refreshes the curse duration.'
        ]
      },
      {
        id: 'shoulder-hex',
        name: 'Hex of Weakness',
        description: 'Place a hex on your target\'s shoulders, sapping their strength and vitality.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Right shoulder
        requires: ['hex-potency'],
        icon: '💪',
        rankDescription: [
          'Cursed targets deal 10% less damage with all attacks.',
          'Cursed targets deal 15% less damage with all attacks and have their healing received reduced by 15%.',
          'Cursed targets deal 20% less damage with all attacks and have their healing received reduced by 25%.'
        ]
      },
      {
        id: 'plague-mark',
        name: 'Plague Mark',
        description: 'Learn to cast the Plague Mark curse that can spread to nearby enemies like a contagion.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right arm of voodoo doll
        requires: ['hex-range', 'curse-of-misfortune'],
        icon: '☣️',
        rankDescription: [
          'Learn the Plague Mark ability. If the target fails a Con save, the curse can jump to 1 nearby enemy.',
          'Your Plague Mark can now jump to up to 2 nearby enemies.',
          'Your Plague Mark can now jump to up to 3 nearby enemies and the jump range increases to 20 ft.'
        ]
      },

      // Tier 3 (Level 30) - Voodoo Doll Pattern (torso)
      {
        id: 'pin-vital-point',
        name: 'Pin Vital Point',
        description: 'Your knowledge of anatomy allows you to target vital points on your voodoo doll for maximum effect.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Left side of upper torso
        requires: ['voodoo-doll'],
        icon: '📌',
        rankDescription: [
          'When using your Voodoo Doll ability, you have a 15% chance to critically strike, dealing double damage.',
          'When using your Voodoo Doll ability, you have a 20% chance to critically strike, dealing double damage and applying a random debuff.',
          'When using your Voodoo Doll ability, you have a 25% chance to critically strike, dealing triple damage and applying a random debuff.'
        ]
      },
      {
        id: 'shared-agony',
        name: 'Shared Agony',
        description: 'Damage you take is partially reflected to cursed enemies through your mystical connection.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Left side of torso
        requires: ['shoulder-curse', 'curse-transfer'],
        icon: '🔄',
        rankDescription: [
          '25% of damage you take is mirrored onto one Cursed foe.',
          '35% of damage you take is mirrored onto one Cursed foe.',
          '50% of damage you take is mirrored onto one Cursed foe.'
        ]
      },
      {
        id: 'heart-hex',
        name: 'Heart Hex',
        description: 'Place a powerful hex directly on your target\'s heart, causing them to suffer internal damage over time.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Center of torso (heart)
        requires: ['curse-transfer'],
        icon: '❤️',
        rankDescription: [
          'Cursed targets take 1d4 necrotic damage at the start of their turn.',
          'Cursed targets take 1d6 necrotic damage at the start of their turn and have disadvantage on Constitution saves.',
          'Cursed targets take 1d8 necrotic damage at the start of their turn, have disadvantage on Constitution saves, and take double damage from your Soul Siphon ability.'
        ]
      },
      {
        id: 'ritual-knife-mastery',
        name: 'Ritual Knife Mastery',
        description: 'Your Ritual Knife ability becomes more effective against cursed targets, carving into their very soul.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Right side of torso
        requires: ['shoulder-hex', 'curse-transfer'],
        icon: '🔪',
        rankDescription: [
          'Your Ritual Knife deals 2d6 necrotic damage to cursed targets instead of 1d6.',
          'Your Ritual Knife deals 2d8 necrotic damage to cursed targets instead of 1d6.',
          'Your Ritual Knife deals 2d10 necrotic damage to cursed targets instead of 1d6 and reduces the target\'s healing received by 50% for 1 round.'
        ]
      },
      {
        id: 'multi-curse',
        name: 'Multi-Curse',
        description: 'Your mastery of curses allows you to maintain multiple different curse effects on a single target.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Right side of upper torso
        requires: ['plague-mark'],
        icon: '🔗',
        rankDescription: [
          'You can maintain up to 2 different curse effects on a single target.',
          'You can maintain up to 3 different curse effects on a single target.',
          'You can maintain up to 4 different curse effects on a single target, and each additional curse after the first increases the save DC by 1.'
        ]
      },

      // Tier 4 (Level 40) - Voodoo Doll Pattern (legs)
      {
        id: 'curse-of-frailty',
        name: 'Curse of Frailty',
        description: 'Your curses weaken your target\'s legs, making them vulnerable to knockdown and movement impairment.',
        maxRank: 3,
        position: { row: 4, col: 0 }, // Outer left leg
        requires: ['pin-vital-point'],
        icon: '🦵',
        rankDescription: [
          'Cursed targets have a 15% chance to be knocked prone when they move more than half their speed in a turn.',
          'Cursed targets have a 25% chance to be knocked prone when they move more than half their speed in a turn and take 1d6 damage when they stand up.',
          'Cursed targets have a 35% chance to be knocked prone when they move more than half their speed in a turn, take 1d8 damage when they stand up, and their standing up costs an additional 5 feet of movement.'
        ]
      },
      {
        id: 'soul-siphon',
        name: 'Soul Siphon',
        description: 'Learn to drain life force from cursed targets to sustain yourself.',
        maxRank: 3,
        position: { row: 4, col: 1 }, // Left leg
        requires: ['shared-agony', 'heart-hex'],
        icon: '💀',
        rankDescription: [
          'Learn the Soul Siphon ability. Drain 2d6 HP from a Cursed target and heal yourself for the same amount.',
          'Your Soul Siphon now drains 2d8 HP and costs only 2 VE instead of 3.',
          'Your Soul Siphon now drains 2d10 HP and has a 50% chance not to consume your Invocation Slot if it kills the target.'
        ]
      },
      {
        id: 'hex-explosion',
        name: 'Hex Explosion',
        description: 'When a cursed enemy dies, their hex explodes to nearby enemies, spreading your influence.',
        maxRank: 3,
        position: { row: 4, col: 2 }, // Center between legs
        requires: ['heart-hex'],
        icon: '💥',
        rankDescription: [
          'When a cursed enemy dies, their hex transfers to the nearest enemy within 15 feet.',
          'When a cursed enemy dies, their hex transfers to the nearest 2 enemies within 15 feet.',
          'When a cursed enemy dies, their hex transfers to the nearest 3 enemies within 15 feet and deals 2d6 necrotic damage to them.'
        ]
      },
      {
        id: 'curse-mastery',
        name: 'Curse Mastery',
        description: 'Your curses become more difficult to resist as you perfect your dark arts.',
        maxRank: 3,
        position: { row: 4, col: 3 }, // Right leg
        requires: ['ritual-knife-mastery', 'heart-hex'],
        icon: '🧿',
        rankDescription: [
          'The save DC of your curses and hexes increases by 1.',
          'The save DC of your curses and hexes increases by 2.',
          'The save DC of your curses and hexes increases by 3.'
        ]
      },
      {
        id: 'curse-of-exhaustion',
        name: 'Curse of Exhaustion',
        description: 'Your curses drain your target\'s stamina, making them increasingly exhausted and vulnerable.',
        maxRank: 3,
        position: { row: 4, col: 4 }, // Outer right leg
        requires: ['multi-curse'],
        icon: '😴',
        rankDescription: [
          'Cursed targets suffer one level of exhaustion after 3 rounds under your curse.',
          'Cursed targets suffer one level of exhaustion after 2 rounds under your curse.',
          'Cursed targets suffer one level of exhaustion after 1 round under your curse and an additional level every 3 rounds thereafter.'
        ]
      },

      // Tier 5 (Level 50) - Voodoo Doll Pattern (base/feet)
      {
        id: 'curse-of-doom',
        name: 'Curse of Doom',
        description: 'Place a powerful curse of impending doom on your target, causing them to suffer increasingly severe effects.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Left foot
        requires: ['curse-of-frailty', 'soul-siphon'],
        icon: '⏳',
        rankDescription: [
          'Learn the Curse of Doom ability. Place a powerful curse on a target that deals increasing damage each round (1d6, then 2d6, then 3d6, etc.) until the target dies or the curse is removed. Costs 3 VE and 1 Invocation Slot.'
        ]
      },
      {
        id: 'dread-omen',
        name: 'Dread Omen',
        description: 'The death of a cursed enemy weakens nearby foes as your reputation for dark magic spreads fear.',
        maxRank: 1,
        position: { row: 5, col: 2 }, // Base of voodoo doll
        requires: ['soul-siphon', 'hex-explosion', 'curse-mastery'],
        icon: '👁️',
        rankDescription: [
          'When a Cursed enemy dies, the nearest enemy automatically fails its first save against your spells in the next round. Additionally, your Vodou Apocalypse ability deals an extra 2d6 damage per VE spent.'
        ]
      },
      {
        id: 'eternal-suffering',
        name: 'Eternal Suffering',
        description: 'Your curses linger even after death, causing spirits to suffer in the afterlife and potentially return.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Right foot
        requires: ['curse-mastery', 'curse-of-exhaustion'],
        icon: '👻',
        rankDescription: [
          'When a cursed enemy dies, there is a 25% chance they will rise as a spectre under your control for 1d4 rounds. The spectre has 50% of the original creature\'s HP and abilities and is hostile to your enemies.'
        ]
      },

      // Tier 6 (Level 60) - Voodoo Doll Pattern (final tier)
      {
        id: 'master-of-curses',
        name: 'Master of Curses',
        description: 'You have achieved complete mastery over the art of curses, becoming a legendary hex caster feared throughout the land.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Bottom center
        requires: ['curse-of-doom', 'dread-omen', 'eternal-suffering'],
        icon: '👑',
        rankDescription: [
          'Your curses ignore resistance to necrotic damage and cannot be dispelled by magic below 7th level. You can maintain curses on any number of targets simultaneously, and your Vodou Apocalypse ability costs 2 less VE. Once per day, you can cast a Greater Hex that applies all your curse effects simultaneously to a single target.'
        ]
      },
      {
        id: 'voodoo-ascendance',
        name: 'Voodoo Ascendance',
        description: 'You transcend mortal limitations, becoming a living embodiment of voodoo magic and curse power.',
        maxRank: 1,
        position: { row: 7, col: 2 }, // Final bottom center
        requires: ['master-of-curses'],
        icon: '🌌',
        rankDescription: [
          'Once per day, you can enter a state of Voodoo Ascendance for 1 minute. During this time, you float 3 feet above the ground, surrounded by spectral voodoo dolls. Your curses are automatically applied at maximum effect, require no saving throws, and spread to nearby enemies when targets die. You can cast Hex and Curse abilities as bonus actions with no cost, and enemies that attack you are automatically afflicted with a random curse effect.'
        ]
      },
    ],
  },
  {
    id: 'totemic-architect',
    name: 'Totemic Architect',
    description: 'Master the art of creating and empowering totems for zone control and battlefield manipulation.',
    icon: '🗿',
    talents: [
      // Tier 1 (Level 10) - Totem Pole Pattern (base foundation)
      {
        id: 'totem-mending-fog',
        name: 'Mending Fog Totem',
        description: 'Improve your Mending Fog totem\'s healing capabilities, creating a sanctuary of restoration.',
        maxRank: 3,
        position: { row: 0, col: 0 }, // Left base of totem pole
        icon: '💨',
        rankDescription: [
          'Your Mending Fog totem heals for an additional 1d4 HP each round.',
          'Your Mending Fog totem heals for an additional 1d6 HP each round.',
          'Your Mending Fog totem heals for an additional 1d8 HP each round and its radius increases by 5 feet.'
        ]
      },
      {
        id: 'totem-crafting',
        name: 'Totem Crafting',
        description: 'Your skill in crafting totems allows you to create them more efficiently, using less spiritual energy.',
        maxRank: 3,
        position: { row: 0, col: 1 }, // Left-center base
        icon: '🔨',
        rankDescription: [
          'Reduce the mana cost of placing totems by 1.',
          'Reduce the mana cost of placing totems by 2.',
          'Reduce the mana cost of placing totems by 2 and the AP cost by 1.'
        ]
      },
      {
        id: 'totem-duration',
        name: 'Totem Duration',
        description: 'Increase the duration of your totems, allowing them to influence the battlefield longer.',
        maxRank: 3,
        position: { row: 0, col: 2 }, // Center base of totem pole
        icon: '⏱️',
        rankDescription: [
          'Your totems last for 1 additional round.',
          'Your totems last for 2 additional rounds.',
          'Your totems last for 3 additional rounds.'
        ]
      },
      {
        id: 'totem-vitality',
        name: 'Totem Vitality',
        description: 'Your totems are more durable, making them harder to destroy by enemies.',
        maxRank: 3,
        position: { row: 0, col: 3 }, // Right-center base
        icon: '❤️',
        rankDescription: [
          'Your totems have 25% more health.',
          'Your totems have 50% more health.',
          'Your totems have 100% more health and gain resistance to physical damage.'
        ]
      },
      {
        id: 'totem-withering-idol',
        name: 'Withering Idol Totem',
        description: 'Improve your Withering Idol totem\'s damaging capabilities, creating a zone of decay.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Right base of totem pole
        icon: '🗿',
        rankDescription: [
          'Your Withering Idol totem deals an additional 1d4 necrotic damage each round.',
          'Your Withering Idol totem deals an additional 1d6 necrotic damage each round.',
          'Your Withering Idol totem deals an additional 1d8 necrotic damage each round and its radius increases by 5 feet.'
        ]
      },

      // Tier 2 (Level 20) - Totem Pole Pattern (second section)
      {
        id: 'spirit-link-totem',
        name: 'Spirit Link Totem',
        description: 'Learn to create a totem that links the spirits of allies, distributing damage among them to prevent any one person from falling.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Far left of second section
        requires: ['totem-mending-fog'],
        icon: '🔗',
        rankDescription: [
          'Learn to create the Spirit Link Totem. Damage taken by allies within its radius is split evenly among all affected allies.',
          'Your Spirit Link Totem now reduces the total damage shared by 10% and its radius increases by 5 feet.',
          'Your Spirit Link Totem now reduces the total damage shared by 20% and its radius increases by 10 feet.'
        ]
      },
      {
        id: 'totem-range',
        name: 'Totem Range',
        description: 'Increase the range at which you can place totems, extending your influence across the battlefield.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left-center of second section
        requires: ['totem-crafting'],
        icon: '📏',
        rankDescription: [
          'You can place totems at a range of up to 45 feet instead of 30 feet.',
          'You can place totems at a range of up to 60 feet instead of 30 feet.',
          'You can place totems at a range of up to 75 feet instead of 30 feet.'
        ]
      },
      {
        id: 'bone-cage-totem',
        name: 'Bone Cage Totem',
        description: 'Learn to create a totem that restrains enemies trying to escape, trapping them in a cage of spectral bones.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Center of second section
        requires: ['totem-duration'],
        icon: '🦴',
        rankDescription: [
          'Learn to create the Bone Cage Totem. Enemies that try to leave its 10-ft radius must make a Dex save or be restrained for 1 round.',
          'Your Bone Cage Totem now has a 15-ft radius and the save DC increases by 1.',
          'Your Bone Cage Totem now has a 20-ft radius and the save DC increases by 2.'
        ]
      },
      {
        id: 'extended-effigy',
        name: 'Extended Effigy',
        description: 'Your totems project their influence over a wider area, affecting more targets.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right-center of second section
        requires: ['totem-vitality'],
        icon: '🔍',
        rankDescription: [
          'Your totems\' area of effect radius increases by 5 feet.',
          'Your totems\' area of effect radius increases by 10 feet.',
          'Your totems\' area of effect radius increases by 15 feet.'
        ]
      },
      {
        id: 'tremor-totem',
        name: 'Tremor Totem',
        description: 'Learn to create a totem that sends shockwaves through the ground, knocking enemies off balance.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Far right of second section
        requires: ['totem-withering-idol'],
        icon: '🌋',
        rankDescription: [
          'Learn to create the Tremor Totem. Enemies within its radius must make a Strength save each round or be knocked prone.',
          'Your Tremor Totem now has a 15-ft radius and the save DC increases by 1.',
          'Your Tremor Totem now has a 20-ft radius and the save DC increases by 2. Enemies that fail their save are also stunned for 1 round.'
        ]
      },

      // Tier 3 (Level 30) - Totem Pole Pattern (third section)
      {
        id: 'healing-stream-totem',
        name: 'Healing Stream Totem',
        description: 'Learn to create a totem that emits a continuous stream of healing energy, restoring allies over time.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Far left of third section
        requires: ['spirit-link-totem'],
        icon: '💧',
        rankDescription: [
          'Learn to create the Healing Stream Totem. Allies within its radius heal for 1d6 HP each round.',
          'Your Healing Stream Totem now heals for 1d8 HP each round and its radius increases by 5 feet.',
          'Your Healing Stream Totem now heals for 1d10 HP each round, its radius increases by 10 feet, and it removes one negative condition from each ally every 3 rounds.'
        ]
      },
      {
        id: 'dual-totem',
        name: 'Dual Totem',
        description: 'Maintain multiple totems simultaneously, creating a network of spiritual influence.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Left side of third section
        requires: ['totem-range', 'bone-cage-totem'],
        icon: '🧿',
        rankDescription: [
          'You can maintain 2 totems simultaneously.',
          'You can maintain 2 totems simultaneously, and placing a second totem costs 1 less AP.',
          'You can maintain 2 totems simultaneously, and placing a second totem costs 1 less AP and 1 less Mana.'
        ]
      },
      {
        id: 'ancestral-guardian',
        name: 'Ancestral Guardian',
        description: 'Your totems are protected by ancestral spirits that attack enemies who try to destroy them.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Center of third section
        requires: ['bone-cage-totem'],
        icon: '👻',
        rankDescription: [
          'Enemies that attack your totems take 1d6 spirit damage and must make a Wisdom save or be frightened for 1 round.',
          'Enemies that attack your totems take 1d8 spirit damage and must make a Wisdom save or be frightened for 1 round. The save DC increases by 1.',
          'Enemies that attack your totems take 1d10 spirit damage and must make a Wisdom save or be frightened for 1 round. The save DC increases by 2. Additionally, when a totem is destroyed, it releases a spirit that attacks the destroyer for 1d4 rounds.'
        ]
      },
      {
        id: 'totem-synergy',
        name: 'Totem Synergy',
        description: 'Your totems resonate with each other, amplifying their effects when multiple are active.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Right side of third section
        requires: ['extended-effigy', 'bone-cage-totem'],
        icon: '🔄',
        rankDescription: [
          'When you have two totems active, their effects are 25% more powerful.',
          'When you have two totems active, their effects are 50% more powerful.',
          'When you have two totems active, their effects are 75% more powerful.'
        ]
      },
      {
        id: 'capacitor-totem',
        name: 'Capacitor Totem',
        description: 'Learn to create a totem that stores spiritual energy and releases it in a powerful burst.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Far right of third section
        requires: ['tremor-totem'],
        icon: '⚡',
        rankDescription: [
          'Learn to create the Capacitor Totem. It stores energy for 3 rounds, then releases a burst dealing 3d6 lightning damage to all enemies within 15 feet.',
          'Your Capacitor Totem now deals 4d6 lightning damage and its radius increases to 20 feet.',
          'Your Capacitor Totem now deals 5d6 lightning damage, its radius increases to 25 feet, and enemies hit must make a Constitution save or be stunned for 1 round.'
        ]
      },

      // Tier 4 (Level 40) - Totem Pole Pattern (fourth section)
      {
        id: 'totem-recall',
        name: 'Totem Recall',
        description: 'You can recall your totems to you, regaining some of the energy used to create them.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // Far left of fourth section
        requires: ['healing-stream-totem'],
        icon: '🔙',
        rankDescription: [
          'You can recall a totem as a bonus action, regaining 25% of the mana used to create it.',
          'You can recall a totem as a bonus action, regaining 50% of the mana used to create it.',
          'You can recall a totem as a bonus action, regaining 75% of the mana used to create it and gaining 1 VE.'
        ]
      },
      {
        id: 'totem-mastery',
        name: 'Totem Mastery',
        description: 'Your totems become more powerful and versatile as you perfect the art of totem crafting.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Left side of fourth section
        requires: ['dual-totem', 'ancestral-guardian'],
        icon: '🌟',
        rankDescription: [
          'Your totems gain +2 to their save DCs and their effects are 25% more powerful.',
          'Your totems gain +3 to their save DCs and their effects are 50% more powerful.',
          'Your totems gain +4 to their save DCs and their effects are 75% more powerful.'
        ]
      },
      {
        id: 'totem-transposition',
        name: 'Totem Transposition',
        description: 'You can instantly swap positions with one of your totems, allowing for tactical repositioning.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Center of fourth section
        requires: ['ancestral-guardian'],
        icon: '🔀',
        rankDescription: [
          'Once per encounter, you can swap positions with one of your totems as a bonus action.',
          'Twice per encounter, you can swap positions with one of your totems as a bonus action.',
          'Three times per encounter, you can swap positions with one of your totems as a bonus action. When you do, you gain 10 temporary hit points.'
        ]
      },
      {
        id: 'spirit-grove',
        name: 'Spirit Grove',
        description: 'When multiple totems are active, they create a sacred grove of spiritual energy that protects allies.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Right side of fourth section
        requires: ['totem-synergy', 'ancestral-guardian'],
        icon: '🌳',
        rankDescription: [
          'When both totems pulse in the same round, allies inside gain +INT temporary HP for 1 round.',
          'When both totems pulse in the same round, allies inside gain +INT temporary HP & advantage on one saving throw type for 1 round.',
          'When both totems pulse in the same round, allies inside gain +INT temporary HP & advantage on all saves for 1 round.'
        ]
      },
      {
        id: 'totem-empowerment',
        name: 'Totem Empowerment',
        description: 'You can channel additional spiritual energy into your totems, temporarily enhancing their effects.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Far right of fourth section
        requires: ['capacitor-totem'],
        icon: '💫',
        rankDescription: [
          'Once per encounter, you can empower a totem as a bonus action, doubling its effect for 1 round.',
          'Twice per encounter, you can empower a totem as a bonus action, doubling its effect for 1 round.',
          'Three times per encounter, you can empower a totem as a bonus action, doubling its effect for 1 round and increasing its radius by 10 feet.'
        ]
      },

      // Tier 5 (Level 50) - Totem Pole Pattern (fifth section)
      {
        id: 'totem-of-tranquility',
        name: 'Totem of Tranquility',
        description: 'Learn to create a powerful totem that calms the battlefield, protecting allies from harmful effects.',
        maxRank: 1,
        position: { row: 4, col: 0 }, // Far left of fifth section
        requires: ['totem-recall', 'totem-mastery'],
        icon: '☮️',
        rankDescription: [
          'Learn to create the Totem of Tranquility. Allies within its 30-foot radius gain immunity to fear, charm, and confusion effects. Additionally, they recover from stun, sleep, and paralysis effects 2 rounds earlier than normal.'
        ]
      },
      {
        id: 'spirit-walker',
        name: 'Spirit Walker',
        description: 'Your connection to the spirit world allows you to partially exist in both realms while near your totems.',
        maxRank: 1,
        position: { row: 4, col: 1 }, // Left side of fifth section
        requires: ['totem-mastery', 'totem-transposition'],
        icon: '👤',
        rankDescription: [
          'While within 30 feet of one of your totems, you gain 20% resistance to all damage and can see invisible creatures. Additionally, you can move through solid objects (but not end your turn inside them) at half speed.'
        ]
      },
      {
        id: 'totemic-architect-master',
        name: 'Totemic Architect Master',
        description: 'Achieve mastery over totem creation and manipulation, becoming a true conduit for spiritual power.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center of fifth section
        requires: ['totem-mastery', 'totem-transposition', 'spirit-grove'],
        icon: '🏛️',
        rankDescription: [
          'You can now maintain 3 totems simultaneously. Additionally, once per day, you can create a Grand Totem that combines the effects of all your known totems in a 30-foot radius for 5 rounds. While the Grand Totem is active, your Vodou Apocalypse ability costs 2 less VE.'
        ]
      },
      {
        id: 'spiritual-attunement',
        name: 'Spiritual Attunement',
        description: 'Your deep connection to the spirit world allows your totems to adapt to the needs of the moment.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Right side of fifth section
        requires: ['spirit-grove', 'totem-transposition'],
        icon: '🧘',
        rankDescription: [
          'Once per encounter, you can change the type of an active totem as a bonus action without having to place a new one. Additionally, your totems now pulse their effects at the beginning of each round instead of at the end.'
        ]
      },
      {
        id: 'totem-of-wrath',
        name: 'Totem of Wrath',
        description: 'Learn to create a powerful totem that channels the fury of ancestral spirits to enhance your allies\' offensive capabilities.',
        maxRank: 1,
        position: { row: 4, col: 4 }, // Far right of fifth section
        requires: ['totem-empowerment', 'spirit-grove'],
        icon: '😡',
        rankDescription: [
          'Learn to create the Totem of Wrath. Allies within its 30-foot radius deal 25% more damage and have a +2 bonus to critical hit range. Additionally, their attacks ignore 10 points of damage resistance.'
        ]
      },

      // Tier 6 (Level 60) - Totem Pole Pattern (crown)
      {
        id: 'grand-totem-master',
        name: 'Grand Totem Master',
        description: 'You have achieved complete mastery over the art of totem crafting, becoming a legendary spiritual conduit feared and respected throughout the land.',
        maxRank: 1,
        position: { row: 5, col: 2 }, // Crown of totem pole
        requires: ['totem-of-tranquility', 'spirit-walker', 'totemic-architect-master', 'spiritual-attunement', 'totem-of-wrath'],
        icon: '👑',
        rankDescription: [
          'You can now maintain 4 totems simultaneously. Your totems are immune to dispel effects below 7th level and have twice their normal health. Once per day, you can enter a state of Spiritual Transcendence for 1 minute. During this time, you can place totems as a bonus action with no mana cost, your totems\' effects are doubled, and you gain the benefits of all your totems regardless of your distance from them.'
        ]
      },
    ],
  },
  {
    id: 'loa-chosen',
    name: 'Loa Chosen',
    description: 'Forge powerful connections with loa spirits to channel their divine power through invocations.',
    icon: '👺',
    talents: [
      // Tier 1 (Level 10) - Ritual Circle Pattern (outer circle)
      {
        id: 'efficient-rite',
        name: 'Efficient Rite',
        description: 'Your invocations cost less Voodoo Essence as you master the art of spiritual communion.',
        maxRank: 3,
        position: { row: 0, col: 0 }, // Northwest point of ritual circle
        icon: '💰',
        rankDescription: [
          'Invocation VE cost reduced by 1.',
          'Invocation VE cost reduced by 2.',
          'Invocation VE cost reduced by 3.'
        ]
      },
      {
        id: 'loa-connection',
        name: 'Loa Connection',
        description: 'Strengthen your connection to the loa spirits, allowing them to manifest longer in our world.',
        maxRank: 3,
        position: { row: 0, col: 4 }, // Northeast point of ritual circle
        icon: '👺',
        rankDescription: [
          'Your invocations last 1 additional round.',
          'Your invocations last 2 additional rounds.',
          'Your invocations last 3 additional rounds.'
        ]
      },
      {
        id: 'voodoo-essence-capacity',
        name: 'Voodoo Essence Capacity',
        description: 'Increase your maximum Voodoo Essence capacity, allowing you to store more spiritual energy.',
        maxRank: 3,
        position: { row: 4, col: 0 }, // Southwest point of ritual circle
        icon: '⚡',
        rankDescription: [
          'Your maximum VE increases by 2.',
          'Your maximum VE increases by 4.',
          'Your maximum VE increases by 6.'
        ]
      },
      {
        id: 'ritual-preparation',
        name: 'Ritual Preparation',
        description: 'Your careful preparation of ritual components enhances the power of your invocations.',
        maxRank: 3,
        position: { row: 4, col: 4 }, // Southeast point of ritual circle
        icon: '📜',
        rankDescription: [
          'Your invocations gain +1 to their save DCs.',
          'Your invocations gain +2 to their save DCs.',
          'Your invocations gain +3 to their save DCs and their area of effect increases by 5 feet.'
        ]
      },

      // Tier 2 (Level 20) - Ritual Circle Pattern (inner circle)
      {
        id: 'baron-samedi',
        name: 'Baron Samedi Connection',
        description: 'Strengthen your connection to Baron Samedi, the loa of death and resurrection, master of the graveyard.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Inner northwest point
        requires: ['efficient-rite'],
        icon: '💀',
        rankDescription: [
          'Your Baron Samedi invocation deals an additional 1d6 necrotic damage to enemies.',
          'Your Baron Samedi invocation deals an additional 2d6 necrotic damage to enemies.',
          'Your Baron Samedi invocation deals an additional 3d6 necrotic damage to enemies and can resurrect an ally with 25% more HP.'
        ]
      },
      {
        id: 'erzulie',
        name: 'Erzulie Connection',
        description: 'Strengthen your connection to Erzulie, the loa of love and protection, guardian of the heart.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Inner northeast point
        requires: ['loa-connection'],
        icon: '❤️',
        rankDescription: [
          'Your Erzulie invocation grants allies an additional +1 AC.',
          'Your Erzulie invocation grants allies an additional +2 AC.',
          'Your Erzulie invocation grants allies an additional +3 AC and heals for an additional 1d8 HP.'
        ]
      },
      {
        id: 'papa-legba',
        name: 'Papa Legba Connection',
        description: 'Strengthen your connection to Papa Legba, the loa of crossroads and communication, opener of gates.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Inner southwest point
        requires: ['voodoo-essence-capacity'],
        icon: '🚪',
        rankDescription: [
          'Your Papa Legba invocation allows you to teleport allies an additional 10 feet.',
          'Your Papa Legba invocation allows you to teleport allies an additional 20 feet.',
          'Your Papa Legba invocation allows you to teleport allies an additional 30 feet and you can teleport one additional ally.'
        ]
      },
      {
        id: 'ogoun',
        name: 'Ogoun Connection',
        description: 'Strengthen your connection to Ogoun, the loa of war and fire, the divine blacksmith.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Inner southeast point
        requires: ['ritual-preparation'],
        icon: '🔥',
        rankDescription: [
          'Your Ogoun invocation grants allies an additional +1 to attack rolls.',
          'Your Ogoun invocation grants allies an additional +2 to attack rolls.',
          'Your Ogoun invocation grants allies an additional +3 to attack rolls and their melee attacks deal an additional 1d6 fire damage.'
        ]
      },

      // Tier 3 (Level 30) - Ritual Circle Pattern (middle ring)
      {
        id: 'spirit-channeler',
        name: 'Spirit Channeler',
        description: 'While channeling a loa, your body becomes a conduit for spiritual energy, regenerating your magical power.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // West point of middle ring
        requires: ['baron-samedi', 'papa-legba'],
        icon: '✨',
        rankDescription: [
          'While an Invocation is active, you regenerate 1 Mana per turn.',
          'While an Invocation is active, you regenerate 2 Mana per turn.',
          'While an Invocation is active, you regenerate 3 Mana per turn.'
        ]
      },
      {
        id: 'agwe-connection',
        name: 'Agwe Connection',
        description: 'Strengthen your connection to Agwe, the loa of the sea and storms, master of water and weather.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // North-northwest point of middle ring
        requires: ['baron-samedi'],
        icon: '🌊',
        rankDescription: [
          'Learn to invoke Agwe. Enemies within 30 feet must make a Dexterity save or be slowed by 10 feet for 2 rounds.',
          'Your Agwe invocation now reduces enemy movement by 15 feet and deals 1d8 cold damage per round to affected targets.',
          'Your Agwe invocation now reduces enemy movement by 20 feet, deals 2d8 cold damage per round, and creates difficult terrain in a 30-foot radius.'
        ]
      },
      {
        id: 'damballa-connection',
        name: 'Damballa Connection',
        description: 'Strengthen your connection to Damballa, the loa of serpents and wisdom, creator of life.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // North-northeast point of middle ring
        requires: ['erzulie'],
        icon: '🐍',
        rankDescription: [
          'Learn to invoke Damballa. Allies within 30 feet gain +2 to Wisdom checks and saving throws for the duration.',
          'Your Damballa invocation now grants +3 to Wisdom checks and saving throws, and allies gain 1d6 temporary hit points per round.',
          'Your Damballa invocation now grants +4 to Wisdom checks and saving throws, allies gain 1d8 temporary hit points per round, and they can reroll one failed save per encounter.'
        ]
      },
      {
        id: 'ritual-offering',
        name: 'Ritual Offering',
        description: 'Your offerings to the loa strengthen their manifestation, enhancing their power when invoked.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // East point of middle ring
        requires: ['erzulie', 'ogoun'],
        icon: '🍶',
        rankDescription: [
          'Your invocations deal 25% more damage or provide 25% more healing.',
          'Your invocations deal 50% more damage or provide 50% more healing.',
          'Your invocations deal 75% more damage or provide 75% more healing and their duration increases by 1 round.'
        ]
      },
      {
        id: 'maman-brigitte',
        name: 'Maman Brigitte Connection',
        description: 'Strengthen your connection to Maman Brigitte, the loa of death, justice, and vengeance.',
        maxRank: 3,
        position: { row: 3, col: 0 }, // South-southwest point of middle ring
        requires: ['papa-legba'],
        icon: '⚖️',
        rankDescription: [
          'Learn to invoke Maman Brigitte. Enemies that damage your allies take 1d6 retribution damage.',
          'Your Maman Brigitte invocation now deals 1d8 retribution damage and marks enemies that attack your allies, causing them to take 25% more damage from all sources for 1 round.',
          'Your Maman Brigitte invocation now deals 1d10 retribution damage, marks enemies for 2 rounds, and can resurrect a fallen ally once per day with 25% health.'
        ]
      },
      {
        id: 'azacca-connection',
        name: 'Azacca Connection',
        description: 'Strengthen your connection to Azacca, the loa of agriculture and harvest, provider of abundance.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // South-southeast point of middle ring
        requires: ['ogoun'],
        icon: '🌱',
        rankDescription: [
          'Learn to invoke Azacca. The ground in a 30-foot radius becomes fertile, healing allies who stand on it for 1d4 HP per round.',
          'Your Azacca invocation now heals for 1d6 HP per round and grants allies +2 to Constitution saves while they stand on fertile ground.',
          'Your Azacca invocation now heals for 1d8 HP per round, grants +3 to Constitution saves, and provides allies with 10% damage reduction while they stand on fertile ground.'
        ]
      },

      // Tier 4 (Level 40) - Ritual Circle Pattern (inner altar)
      {
        id: 'invocation-mastery',
        name: 'Invocation Mastery',
        description: 'Your invocations become more powerful as you perfect the rituals to call upon the loa.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Left side of altar
        requires: ['spirit-channeler'],
        icon: '🌟',
        rankDescription: [
          'All your invocations gain a 25% boost to their effects.',
          'All your invocations gain a 50% boost to their effects.',
          'All your invocations gain a 75% boost to their effects.'
        ]
      },
      {
        id: 'avatar-of-the-loa',
        name: 'Avatar of the Loa',
        description: 'The first round of an invocation grants you powerful bonuses as the loa briefly possesses your form.',
        maxRank: 3,
        position: { row: 2, col: 3 }, // Right side of altar
        requires: ['ritual-offering'],
        icon: '👹',
        rankDescription: [
          'First round of each Invocation grants you resistance to one damage type of your choice.',
          'First round of each Invocation grants you resistance to all damage and +INT to spell DCs.',
          'First round of each Invocation grants you resistance to all damage, +INT to spell DCs, and your spells ignore resistance.'
        ]
      },

      // Tier 5 (Level 50) - Ritual Circle Pattern (center altar)
      {
        id: 'loa-chosen-master',
        name: 'Loa Chosen Master',
        description: 'Achieve mastery over loa invocations, becoming a true vessel for their divine power.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center of ritual circle/altar
        requires: ['invocation-mastery', 'avatar-of-the-loa'],
        icon: '👑',
        rankDescription: [
          'You can now maintain 2 Invocation Slots at once. Additionally, once per day, you can invoke a Grand Loa that combines the effects of all your known loa invocations for 5 rounds. While the Grand Loa is active, your Vodou Apocalypse ability deals double damage.'
        ]
      },

      // Tier 6 (Level 60) - Ritual Circle Pattern (divine manifestation)
      {
        id: 'divine-possession',
        name: 'Divine Possession',
        description: 'Allow a loa to fully possess your body, granting you immense power at the cost of temporary control.',
        maxRank: 1,
        position: { row: 1, col: 2 }, // North point of outer circle
        requires: ['loa-chosen-master', 'agwe-connection', 'damballa-connection'],
        icon: '🌀',
        rankDescription: [
          'Once per day, you can allow a loa to possess you for 1d4+1 rounds. During this time, you gain +4 to all ability scores, resistance to all damage, and your spells cost 50% less mana. The specific loa possessing you grants additional benefits: Baron Samedi grants the ability to ignore death once, Erzulie allows you to heal all allies for 4d8 HP, Papa Legba lets you teleport anywhere on the battlefield as a bonus action, and Ogoun grants you an extra action each turn.'
        ]
      },
      {
        id: 'spirit-realm-gateway',
        name: 'Spirit Realm Gateway',
        description: 'Open a gateway to the spirit realm, allowing you to draw upon its power and summon spiritual allies.',
        maxRank: 1,
        position: { row: 3, col: 2 }, // South point of outer circle
        requires: ['loa-chosen-master', 'maman-brigitte', 'azacca-connection'],
        icon: '🌌',
        rankDescription: [
          'Once per day, you can open a gateway to the spirit realm for 1 minute. During this time, you can summon 1d4 spirit allies (one per round) that fight for you. Each spirit has abilities based on the loa you have connections with. Additionally, while the gateway is open, your VE regenerates at a rate of 1 per round, and all your curse and hex abilities have their save DCs increased by 2.'
        ]
      },

      // Tier 7 (Level 70) - Ritual Circle Pattern (transcendence)
      {
        id: 'loa-ascendant',
        name: 'Loa Ascendant',
        description: 'You transcend mortal limitations, becoming a living conduit for the divine power of the loa pantheon.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center of all circles
        requires: ['divine-possession', 'spirit-realm-gateway'],
        icon: '✨',
        rankDescription: [
          'Once per day, you can enter a state of Loa Ascendance for 1 minute. During this time, you embody the entire loa pantheon simultaneously. You gain immunity to all damage, your spells cost no mana or VE, and you can cast any invocation as a bonus action without consuming an Invocation Slot. Additionally, you can channel the power of any loa you have a connection with, even if you don\'t have their invocation prepared, and all your invocation effects are doubled in power and area of effect.'
        ]
      },
    ],
  }
];

export default witchDoctorTalentTrees;
