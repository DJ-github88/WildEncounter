// Base spells and abilities for the Lunarch class
const lunarchAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Lunar Charge & Phase System',
    description: 'The Lunarch channels the shifting power of the moon through a unique Lunar Charge (LC) and Phase system. Unlike traditional spellcasters who rely on fixed spells, Lunarchs attune to lunar phases—Full, Crescent, and New—each altering their magic in different ways. This creates a dynamic play style where the Lunarch cycles through phases to adapt to changing battlefield conditions.',
    phases: [
      {
        name: 'Full Moon',
        description: 'The phase of radiance and revelation. Enhances healing and radiant damage.',
        passiveEffect: 'You and allies within 10 ft shed bright light; +2 radiant damage on lunar spells; healing spells are maximized (use highest possible die result).'
      },
      {
        name: 'Crescent Moon',
        description: 'The phase of illusion and mobility. Enhances movement and deception.',
        passiveEffect: '+10 ft movement; attacks against you have disadvantage if you moved at least 10 ft this turn; illusion spells gain +2 to their DC.'
      },
      {
        name: 'New Moon',
        description: 'The phase of shadow and control. Enhances teleportation and psychic resistance.',
        passiveEffect: '15-ft dim aura counts as darkness for you; teleport spells gain +5 ft range; you resist psychic damage.'
      }
    ],
    mechanics: [
      'Lunar Charge (LC): Gain +1 LC each time you cast a Lunar spell, create bright light, or teleport. Maximum 15 LC.',
      'Phase State: Start combat in your Current Phase (chosen at last rest). You can swap phases by spending LC.',
      'Phase Swap: Spend 1 LC to Wax/Wane (shift one step: Full → Crescent → New → Full) or 3 LC for Eclipse Shift (jump to any phase as a bonus action).',
      'Overcharge: Reaching 15 LC automatically swaps you to the opposite phase, grants a Moon Token, then reduces LC to 3.',
      'Moon Tokens: Gain a token whenever LC hits 5, 10, or 15. Spend tokens to empower ultimate abilities (max 3 tokens).'
    ]
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Moon Bolt',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '+1'
      },
      description: 'A basic ranged attack that channels lunar energy.',
      mechanics: 'Ranged 60 ft attack dealing 1d8 radiant damage.',
      effects: [
        { condition: 'Full Moon', effect: 'Add your STR or INT modifier to damage.' },
        { condition: 'Crescent Moon', effect: 'Target must make a WIS save or be dazzled (-2 to attack rolls) for 1 round.' },
        { condition: 'New Moon', effect: 'Damage type changes to necrotic.' }
      ],
      scaling: 'Damage = 1d8 (+ STR or INT in Full Moon)'
    },
    {
      name: 'Glimmer Step',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+1'
      },
      description: 'A short-range teleport enhanced by lunar phase.',
      mechanics: 'Teleport 10 ft to a visible location.',
      effects: [
        { condition: 'Full Moon', effect: 'Leave behind a flash of light that blinds enemies within 5 ft for 1 round (DEX save negates).' },
        { condition: 'Crescent Moon', effect: 'Gain invisibility for 1 round after teleporting.' },
        { condition: 'New Moon', effect: 'Can teleport through walls up to 1 ft thick.' }
      ],
      scaling: 'Teleport distance = 10 ft (+ 5 ft in New Moon)'
    },
    {
      name: 'Lunar Ray',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '+1'
      },
      description: 'A beam of concentrated lunar energy.',
      mechanics: 'Fire a 15-ft line dealing 2d6 radiant damage to all creatures in the line.',
      effects: [
        { condition: 'Full Moon', effect: 'Line length doubles to 30 ft.' },
        { condition: 'Crescent Moon', effect: 'Creatures hit must make a DEX save or be pushed 5 ft away from you.' },
        { condition: 'New Moon', effect: 'Line becomes a 10-ft wide shadow wave dealing necrotic damage instead.' }
      ],
      scaling: 'Damage = 2d6 radiant/necrotic'
    },
    {
      name: 'Silver Ward',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '-1'
      },
      description: 'A protective shield of moonlight.',
      mechanics: 'Spend 1 LC to shield an ally for 1d6 + INT damage absorption until hit.',
      effects: [
        { condition: 'Full Moon', effect: 'When the shield breaks, it grants a small heal (1d4 HP) to the target.' },
        { condition: 'Crescent Moon', effect: 'The shield moves with the target, granting +2 AC while active.' },
        { condition: 'New Moon', effect: 'When the shield absorbs damage, the attacker takes 1d4 psychic damage.' }
      ],
      scaling: 'Shield = 1d6 + INT'
    },
    {
      name: 'Moonshroud Veil',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '+1'
      },
      description: 'Create a fog of moonlight that obscures vision.',
      mechanics: 'Create a 20-ft radius fog cloud that lasts for 3 rounds.',
      effects: [
        { condition: 'Full Moon', effect: 'The fog glows brightly—allies can see normally through it, but enemies cannot.' },
        { condition: 'Crescent Moon', effect: 'The fog counts as heavily obscured for enemies but lightly obscured for allies.' },
        { condition: 'New Moon', effect: 'The fog becomes shadow-like and difficult terrain for enemies.' }
      ],
      scaling: 'Area = 20 ft radius'
    },
    {
      name: 'Shadow Slip',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+1'
      },
      description: 'A reactive dodge enhanced by lunar shadow.',
      mechanics: 'Reaction: When attacked, shift 5 ft in any direction.',
      effects: [
        { condition: 'Full Moon', effect: 'Leave behind a flash of light that imposes disadvantage on the attacker\'s next attack.' },
        { condition: 'Crescent Moon', effect: 'Gain +2 AC against the triggering attack.' },
        { condition: 'New Moon', effect: 'The attacker rolls with disadvantage on the triggering attack.' }
      ],
      scaling: 'Shift distance = 5 ft'
    },
    {
      name: 'Lunar Pulse',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '+2'
      },
      description: 'Emit a pulse of lunar energy that affects all nearby creatures.',
      mechanics: 'Emit a 15-ft burst centered on you. Enemies must make a DEX save or take 2d6 radiant damage.',
      effects: [
        { condition: 'Full Moon', effect: 'Enemies that fail their save are also blinded for 1 round.' },
        { condition: 'Crescent Moon', effect: 'Enemies that fail their save are pushed 5 ft away from you.' },
        { condition: 'New Moon', effect: 'Enemies that fail their save are pulled 5 ft toward you.' }
      ],
      scaling: 'Damage = 2d6 radiant'
    },
    {
      name: 'Moon Touch',
      cost: {
        actionPoints: 1,
        mana: 0,
        lunarCharge: '+0'
      },
      description: 'Imbue a weapon with lunar energy.',
      mechanics: 'Touch converts a mundane weapon to silver/moonlit for 1 hour.',
      effects: [
        { condition: 'Full Moon', effect: 'Weapon also deals +1d4 radiant damage.' },
        { condition: 'Crescent Moon', effect: 'Weapon attacks ignore half cover.' },
        { condition: 'New Moon', effect: 'Weapon deals +1d4 necrotic damage to undead.' }
      ],
      scaling: 'Duration = 1 hour'
    },
    {
      name: 'Arc of Night',
      cost: {
        actionPoints: 1,
        mana: 0,
        lunarCharge: '-1'
      },
      description: 'A curved slash of shadow energy.',
      mechanics: 'Spend 1 LC to create a curved slash in a 10-ft arc, dealing 1d8 shadow damage.',
      effects: [
        { condition: 'Full Moon', effect: 'Damage type changes to radiant.' },
        { condition: 'Crescent Moon', effect: 'The arc extends to 15 ft.' },
        { condition: 'New Moon', effect: 'Crits on 19-20.' }
      ],
      scaling: 'Damage = 1d8 shadow/radiant'
    },
    {
      name: 'Radiant Bind',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '+1'
      },
      description: 'Create a lasso of lunar energy to grapple a target.',
      mechanics: '30 ft lasso; target must make a STR save or be grappled (spell DC).',
      effects: [
        { condition: 'Full Moon', effect: 'The lasso burns with radiant energy, dealing 1d6 damage per turn.' },
        { condition: 'Crescent Moon', effect: 'The tether extends to 40 ft.' },
        { condition: 'New Moon', effect: 'You can pull the target 5 ft toward you each turn.' }
      ],
      scaling: 'Range = 30 ft (40 ft in Crescent)'
    },
    {
      name: 'Phase Flash',
      cost: {
        actionPoints: 1,
        mana: 0,
        lunarCharge: '0'
      },
      description: 'Quickly shift lunar phases as part of casting another spell.',
      mechanics: 'Swap phase (Wax/Wane) as part of casting any Lunar spell once per turn.',
      effects: [
        { condition: 'With Wisdom 14+', effect: 'Reduce the LC cost of Wax/Wane by 1 (minimum 0).' },
        { condition: 'With Wisdom 18+', effect: 'Gain +1 LC when using Phase Flash.' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Moonlit Words',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+1'
      },
      description: 'Enhance your persuasive abilities with lunar charm.',
      mechanics: 'Gain advantage on your next Persuasion or Deception check.',
      effects: [
        { condition: 'Full Moon', effect: 'Add your INT modifier to the roll.' },
        { condition: 'Crescent Moon', effect: 'Gain advantage on the check.' },
        { condition: 'New Moon', effect: 'Target has disadvantage on Insight checks against you.' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Luminous Thread',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+1'
      },
      description: 'Connect two allies with a thread of moonlight.',
      mechanics: 'Bind two willing allies: first gains +10 ft speed; second resists first hit.',
      effects: [
        { condition: 'Full Moon', effect: 'Costs 0 LC to cast.' },
        { condition: 'Crescent Moon', effect: 'First ally also gains +2 AC.' },
        { condition: 'New Moon', effect: 'Second ally also gains resistance to the next spell cast at them.' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Eclipse Edge',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+1'
      },
      description: 'Imbue a weapon with lunar energy for several attacks.',
      mechanics: 'Imbue a weapon for 3 attacks, adding 1d4 damage of a type based on your phase.',
      effects: [
        { condition: 'Full Moon', effect: 'Damage type is radiant.' },
        { condition: 'Crescent Moon', effect: 'Damage type is force.' },
        { condition: 'New Moon', effect: 'Damage type is necrotic.' }
      ],
      scaling: 'Bonus damage = 1d4'
    },
    {
      name: 'Astral Compass',
      cost: {
        actionPoints: 0,
        mana: 0,
        lunarCharge: '0'
      },
      description: 'Always know the lunar phase and cardinal direction.',
      mechanics: 'Passive utility ability that helps with navigation and timing.',
      effects: [
        { condition: 'Full Moon', effect: 'Also reveals hidden doors within 30 ft.' },
        { condition: 'Crescent Moon', effect: 'Also reveals invisible creatures within 15 ft.' },
        { condition: 'New Moon', effect: 'Also reveals undead within 60 ft.' }
      ],
      scaling: 'No direct scaling'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Moonbeam Surge',
      cost: {
        actionPoints: 2,
        mana: 3,
        lunarCharge: '-3'
      },
      description: 'Create a vertical cylinder of moonlight that damages creatures inside.',
      mechanics: 'Create a 40-ft vertical cylinder with 5-ft radius. Deals 3d8 radiant damage each round to creatures inside (concentration, up to 1 minute).',
      effects: [
        { condition: 'Full Moon', effect: 'Damage increases by your INT modifier.' },
        { condition: 'Crescent Moon', effect: 'Cylinder can be moved 10 ft as a bonus action.' },
        { condition: 'New Moon', effect: 'Also deals necrotic damage to creatures with shadow/darkness abilities.' }
      ],
      scaling: 'Damage = 3d8 radiant (+ INT in Full Moon)'
    },
    {
      name: 'Gleaming Gate',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '-2'
      },
      description: 'Create a portal of moonlight that allies can step through.',
      mechanics: 'Create a portal up to 30 ft away. Allies may step through as a free move action.',
      effects: [
        { condition: 'Full Moon', effect: 'Allies who pass through gain 1d6 temporary HP.' },
        { condition: 'Crescent Moon', effect: 'Portal lasts 2 turns instead of 1.' },
        { condition: 'New Moon', effect: 'Portal can be placed in darkness even if you cannot see the destination.' }
      ],
      scaling: 'Range = 30 ft'
    },
    {
      name: 'Lunatic Nova',
      cost: {
        actionPoints: 3,
        mana: 3,
        lunarCharge: '-5'
      },
      description: 'Release a powerful burst of lunar energy.',
      mechanics: 'Create a 30-ft sphere centered on you. Deals 4d8 damage (radiant or necrotic based on current phase).',
      effects: [
        { condition: 'Full Moon', effect: 'Damage type is radiant and heals allies for half damage dealt.' },
        { condition: 'Crescent Moon', effect: 'Creates a zone of illusion that grants allies stealth advantage for 1 round.' },
        { condition: 'New Moon', effect: 'Damage type is necrotic and silences enemies for 1 round.' },
        { condition: 'Eclipse Shift', effect: 'If you swap phases immediately after casting (using Eclipse), damage is doubled.' }
      ],
      scaling: 'Damage = 4d8 radiant/necrotic (doubled with Eclipse)'
    },
    {
      name: 'Phase Echo',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '-2'
      },
      description: 'Record a spell to cast it again next round.',
      mechanics: 'Record one Lunar spell; cast again next round as a free action.',
      effects: [
        { condition: 'Full Moon', effect: 'The echoed spell deals +2 damage per die.' },
        { condition: 'Crescent Moon', effect: 'The echoed spell costs 0 mana.' },
        { condition: 'New Moon', effect: 'The echoed spell has +2 to its save DC.' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Moonfall Anchor',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '-3'
      },
      description: 'Mark an enemy to pull them toward you.',
      mechanics: 'Mark an enemy; at the end of its turn, it is pulled 15 ft toward you (STR save negates).',
      effects: [
        { condition: 'Full Moon', effect: 'The pull is visible as a beam of light.' },
        { condition: 'Crescent Moon', effect: 'The mark is invisible until triggered.' },
        { condition: 'New Moon', effect: 'The pull also deals 2d4 necrotic damage.' }
      ],
      scaling: 'Pull distance = 15 ft'
    },
    {
      name: 'Crescent Blitz',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '+2'
      },
      description: 'Dash through enemies, striking as you pass.',
      mechanics: 'Dash + attack any number of foes passed; each hit grants +1 LC.',
      effects: [
        { condition: 'Full Moon', effect: 'Attacks deal radiant damage.' },
        { condition: 'Crescent Moon', effect: 'Movement doesn\'t provoke opportunity attacks.' },
        { condition: 'New Moon', effect: 'Leave behind a trail of darkness that obscures vision.' }
      ],
      scaling: 'LC gain = +1 per hit'
    },
    {
      name: 'Shadowed Realm',
      cost: {
        actionPoints: 2,
        mana: 3,
        lunarCharge: '-4'
      },
      description: 'Create a zone of lunar shadow that hinders enemies.',
      mechanics: 'Create a 20-ft zone that dims light; enemies have disadvantage on attacks against allies in the zone.',
      effects: [
        { condition: 'Full Moon', effect: 'Zone is filled with moonlight that reveals invisible creatures.' },
        { condition: 'Crescent Moon', effect: 'Allies in the zone gain +5 ft movement speed.' },
        { condition: 'New Moon', effect: 'You are invisible while in the zone.' }
      ],
      scaling: 'Area = 20 ft radius'
    },
    {
      name: 'Radiant Subversion',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '-2'
      },
      description: 'Reverse healing into damage for undead.',
      mechanics: 'For 2 rounds, healing effects deal damage to undead instead.',
      effects: [
        { condition: 'Full Moon', effect: 'Also heals allies for the same amount.' },
        { condition: 'Crescent Moon', effect: 'Duration increases to 3 rounds.' },
        { condition: 'New Moon', effect: 'Also affects fiends and aberrations.' }
      ],
      scaling: 'Duration = 2 rounds (3 in Crescent)'
    },
    {
      name: 'Orbit Shield',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '-2'
      },
      description: 'Create orbiting lunar disks that intercept attacks.',
      mechanics: 'Three lunar disks rotate around you for 3 rounds; each intercepts one projectile (negating damage).',
      effects: [
        { condition: 'Full Moon', effect: 'Disks glow brightly, providing light in a 20-ft radius.' },
        { condition: 'Crescent Moon', effect: 'Disks can be sent to orbit allies instead of yourself.' },
        { condition: 'New Moon', effect: 'When a disk intercepts an attack, it deals 1d6 necrotic damage to the attacker.' },
        { condition: 'Moon Token', effect: 'Spend a Moon Token to double the number of disks.' }
      ],
      scaling: 'Disks = 3 (6 with Moon Token)'
    },
    {
      name: 'Wax & Wane Mastery',
      cost: {
        actionPoints: 0,
        mana: 0,
        lunarCharge: '0'
      },
      description: 'Passive ability that reduces the cost of phase swaps.',
      mechanics: 'Phase swaps cost -1 LC (minimum 0).',
      effects: [
        { condition: 'With Wisdom 16+', effect: 'Also gain +1 LC when completing a full cycle (Full → New → Full).' }
      ],
      scaling: 'No direct scaling'
    },
    {
      name: 'Eclipse Strike',
      cost: {
        actionPoints: 1,
        mana: 1,
        lunarCharge: '-1 token'
      },
      description: 'Teleport to an enemy and strike with lunar power.',
      mechanics: 'Spend a Moon Token: teleport to enemy; melee attack for 3d8 radiant/necrotic damage.',
      effects: [
        { condition: 'Full Moon', effect: 'Damage type is radiant and stuns if target is evil-aligned.' },
        { condition: 'Crescent Moon', effect: 'After the strike, teleport up to 15 ft away.' },
        { condition: 'New Moon', effect: 'Damage type is necrotic and stuns if target is good-aligned.' }
      ],
      scaling: 'Damage = 3d8 radiant/necrotic'
    },
    {
      name: 'Selene\'s Blessing',
      cost: {
        actionPoints: 1,
        mana: 2,
        lunarCharge: '-3'
      },
      description: 'Channel the moon\'s blessing to heal and protect.',
      mechanics: 'Heal an ally for 2d8 + INT hit points.',
      effects: [
        { condition: 'Full Moon', effect: 'Also cures one condition (poison, disease, etc.).' },
        { condition: 'Crescent Moon', effect: 'Also grants invisibility for 1 turn.' },
        { condition: 'New Moon', effect: 'Also grants stealth advantage in dim light or darkness.' }
      ],
      scaling: 'Healing = 2d8 + INT'
    },
    {
      name: 'Night Parade',
      cost: {
        actionPoints: 3,
        mana: 4,
        lunarCharge: '-6'
      },
      description: 'Summon lunar spirits to aid you in battle.',
      mechanics: 'Summon 3 moon-spirits (shadow, crescent, full) that act as lesser elementals; lasts 3 rounds.',
      effects: [
        { condition: 'Full Moon', effect: 'Full moon spirit is stronger (+2 to attacks and damage).' },
        { condition: 'Crescent Moon', effect: 'Crescent moon spirit is stronger (+2 to attacks and damage).' },
        { condition: 'New Moon', effect: 'Shadow moon spirit is stronger (+2 to attacks and damage).' }
      ],
      scaling: 'Duration = 3 rounds'
    },
    {
      name: 'Gravity Lash',
      cost: {
        actionPoints: 2,
        mana: 2,
        lunarCharge: '-4'
      },
      description: 'Use lunar gravity to pull creatures together.',
      mechanics: 'Pull all creatures within 20 ft to the center point you designate.',
      effects: [
        { condition: 'Full Moon', effect: 'Creatures take 2d6 radiant damage when pulled.' },
        { condition: 'Crescent Moon', effect: 'You can choose to exclude allies from the effect.' },
        { condition: 'New Moon', effect: 'Creatures are restrained for 1 round after being pulled.' }
      ],
      scaling: 'Range = 20 ft'
    }
  ],

  // Ultimate Abilities
  ultimateAbilities: [
    {
      name: 'Apogee Cataclysm',
      cost: {
        actionPoints: 3,
        mana: 5,
        lunarCharge: 'all tokens'
      },
      description: 'Channel the full power of the moon into a devastating attack.',
      mechanics: 'Spend 3 Moon Tokens: choose Radiant Storm (Full) or Umbral Collapse (New). Deals 8d10 damage in a 40-ft radius and applies a powerful effect. You fall to 0 LC and gain Exhaustion 1.',
      effects: [
        { condition: 'Radiant Storm (Full Moon)', effect: '8d10 radiant damage and blinds all enemies for 1d4 rounds.' },
        { condition: 'Umbral Collapse (New Moon)', effect: '8d10 necrotic damage and silences all enemies for 1d4 rounds.' },
        { condition: 'Crescent Moon', effect: 'Cannot access full power; instead gain 50% damage reduction and no exhaustion.' }
      ],
      scaling: 'Damage = 8d10 radiant/necrotic'
    }
  ]
};

export default lunarchAbilities;
