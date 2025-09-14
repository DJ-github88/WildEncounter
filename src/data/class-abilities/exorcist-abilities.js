// Base spells and abilities for the Exorcist class
const exorcistAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Spirit Charges',
    description: 'The Exorcist\'s signature resource is Spirit Charges (sometimes called Wards or Purity Marks). You gain Spirit Charges by confronting supernatural corruption: for example, each time you banish a spirit, break a minor curse, or deal damage to an undead/fiend with a holy attack, you accumulate 1 Spirit Charge.',
    mechanics: [
      'Gain 1 Spirit Charge when you banish a spirit, break a minor curse, or deal damage to an undead/fiend with a holy attack.',
      'Spirit Charges can be spent to modify abilities, adding effects like more damage, longer duration, or healing bonuses.',
      'Some defensive abilities require charging up (e.g. imprinting a seal that consumes multiple Charges to activate a ward).',
      'Spirit Charges also grant passive benefits: each charge grants a small buff to Radiant damage or Resistances.',
      'Maximum Spirit Charges = Spirit modifier + 5.'
    ],
    passiveBenefits: {
      name: 'Passive Benefits',
      description: 'Spirit Charges provide passive benefits even when not actively spent.',
      effects: [
        '1 Charge: +1 to Radiant damage, +1 to saves vs. possession',
        '2 Charges: +2 to Radiant damage, +2 to saves vs. possession, 5% resistance to Necrotic damage',
        '3 Charges: +3 to Radiant damage, +3 to saves vs. possession, 10% resistance to Necrotic damage',
        '4 Charges: +4 to Radiant damage, +4 to saves vs. possession, 15% resistance to Necrotic damage',
        '5+ Charges: +5 to Radiant damage, +5 to saves vs. possession, 20% resistance to Necrotic damage, immunity to fear from supernatural sources'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Sacred Strike',
      cost: {
        actionPoints: 1,
        mana: 0,
        spiritCharges: '0 (optional)'
      },
      description: 'Infuse your weapon with holy energy that burns especially bright against the forces of darkness.',
      mechanics: 'Make a melee or ranged weapon attack against a target. On hit, deal normal weapon damage plus 1d6 Radiant damage. If the target is undead, fiend, or cursed, deal an additional 1d6 Radiant damage.',
      effects: [
        { condition: 'Normal Hit', effect: 'Weapon damage + 1d6 Radiant damage.' },
        { condition: 'Undead/Fiend/Cursed Target', effect: 'Add an additional 1d6 Radiant damage.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to add another 1d6 Radiant damage.' },
        { condition: 'Critical Hit', effect: 'Double all Radiant damage dice.' }
      ],
      scaling: 'Radiant damage = 1d6 + (Spirit modifier)'
    },
    {
      name: 'Ward of Faith',
      cost: {
        actionPoints: 2,
        mana: 0,
        spiritCharges: '1'
      },
      description: 'Place a protective ward on an ally or yourself. The ward absorbs damage from undead/fiends or grants advantage on one saving throw against fear/possession.',
      mechanics: 'Place a ward on an ally or yourself that lasts for 3 rounds. The ward absorbs up to 10 damage from undead/fiends or grants advantage on one saving throw against fear/possession.',
      effects: [
        { condition: 'Damage Absorption', effect: 'Absorb up to 10 damage from undead/fiends.' },
        { condition: 'Saving Throw', effect: 'Grant advantage on one saving throw against fear/possession.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase absorption to 20 damage or grant advantage on all saving throws for the duration.' },
        { condition: 'With High Spirit', effect: 'Absorption increases by 2 per point of Spirit modifier.' }
      ],
      scaling: 'Absorption = 10 + (Spirit modifier × 2)'
    },
    {
      name: 'Seal of Binding',
      cost: {
        actionPoints: 2,
        mana: 0,
        spiritCharges: '1'
      },
      description: 'Imprint a holy seal on an enemy spirit or demon. The seal shackles the target: on its turn it must succeed on a resistance check or be unable to move, and it takes minor damage each turn.',
      mechanics: 'Imprint a holy seal on an enemy spirit or demon within 30 feet. The target must make a Spirit save at the start of its turn or be unable to move. It also takes 1d6 Radiant damage at the start of each of its turns. The seal lasts for 1 minute or until dispelled.',
      effects: [
        { condition: 'Failed Save', effect: 'Target is unable to move for that turn.' },
        { condition: 'Damage', effect: 'Target takes 1d6 Radiant damage at the start of each of its turns.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to also prevent the target from using reactions or bonus actions.' },
        { condition: 'With High Spirit', effect: 'Save DC increases by 1 per 2 points of Spirit modifier.' }
      ],
      scaling: 'Save DC = 12 + (Spirit modifier / 2), Damage = 1d6 + (Spirit modifier)'
    },
    {
      name: 'Divine Shield',
      cost: {
        actionPoints: 1,
        mana: 0,
        spiritCharges: '0'
      },
      description: 'Pray for protection. You gain temporary Resistance to Necrotic and Psychic damage for a short time.',
      mechanics: 'Gain Resistance to Necrotic and Psychic damage for 3 rounds.',
      effects: [
        { condition: 'Normal Cast', effect: 'Gain Resistance to Necrotic and Psychic damage for 3 rounds.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to extend the duration to 5 rounds or to also gain Resistance to Poison damage.' },
        { condition: 'With High Spirit', effect: 'Duration increases by 1 round per 2 points of Spirit modifier.' },
        { condition: 'Gain Spirit Charges', effect: 'If you take damage from a supernatural source while this effect is active, gain 1 Spirit Charge.' }
      ],
      scaling: 'Duration = 3 + (Spirit modifier / 2) rounds'
    },
    {
      name: 'Detect Evil/Curse',
      cost: {
        actionPoints: 0,
        mana: 0,
        spiritCharges: '0'
      },
      description: 'Sense nearby undead, fiends, or cursed objects within range. Useful for detecting hidden spirits or locating curse sources.',
      mechanics: 'As a free action, sense the presence of undead, fiends, or cursed objects within 30 feet. With a successful Spirit check, you can determine the type and general location.',
      effects: [
        { condition: 'Normal Use', effect: 'Sense the presence of undead, fiends, or cursed objects within 30 feet.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to increase the range to 60 feet and automatically determine the type and exact location.' },
        { condition: 'With High Spirit', effect: 'Range increases by 5 feet per point of Spirit modifier.' },
        { condition: 'Gain Spirit Charges', effect: 'If you detect a powerful supernatural entity (CR equal to or greater than your level), gain 1 Spirit Charge.' }
      ],
      scaling: 'Range = 30 + (WIS modifier × 5) feet'
    },
    {
      name: 'Purifying Light',
      cost: {
        actionPoints: 0,
        mana: 3,
        spiritCharges: '0 (optional)'
      },
      description: 'Emit a burst of sacred energy. All enemies in a small area take Radiant damage (increased if they are undead/fiends), and allies receive a buff to resist negative effects for 1 turn.',
      mechanics: 'Create a 15-foot radius burst of sacred energy centered on you or a point within 60 feet. Enemies in the area take 2d6 Radiant damage (3d6 if undead/fiends), and allies gain +2 to saves against negative effects for 1 turn.',
      effects: [
        { condition: 'Normal Enemies', effect: 'Take 2d6 Radiant damage.' },
        { condition: 'Undead/Fiend Enemies', effect: 'Take 3d6 Radiant damage.' },
        { condition: 'Allies', effect: 'Gain +2 to saves against negative effects for 1 turn.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to increase the radius to 20 feet or to blind undead/fiends for 1 turn on a failed save.' }
      ],
      scaling: 'Damage = 2d6 + (WIS modifier), Undead/Fiend damage = 3d6 + (WIS modifier)'
    },
    {
      name: 'Remove Curse',
      cost: {
        actionPoints: 0,
        mana: 2,
        spiritCharges: '0 (optional)'
      },
      description: 'Dispel a minor curse or hex from a single target (ally or yourself). This spell cleanses debuffs and prevents that target from being afflicted by the same curse for a short time.',
      mechanics: 'Touch a cursed creature or object to attempt to remove a curse. Make a WIS check against the curse\'s DC. On success, the curse is removed, and the target cannot be afflicted by the same curse for 1 hour.',
      effects: [
        { condition: 'Success', effect: 'Remove a curse from the target.' },
        { condition: 'Immunity', effect: 'Target cannot be afflicted by the same curse for 1 hour.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to automatically succeed against curses of level 3 or lower.' },
        { condition: 'Gain Spirit Charges', effect: 'When you successfully remove a curse, gain 1 Spirit Charge.' }
      ],
      scaling: 'Check bonus = WIS modifier + level / 2'
    },
    {
      name: 'Holy Avenger',
      cost: {
        actionPoints: 0,
        mana: 4,
        spiritCharges: '0 (optional)'
      },
      description: 'Empower your weapon with holiness. For several turns, your attacks deal extra Radiant damage equal to your level. If you land a killing blow on a spirit, you regain 1 Spirit Charge.',
      mechanics: 'Empower your weapon with holy energy for 3 turns. During this time, your weapon attacks deal extra Radiant damage equal to your level. If you land a killing blow on a spirit, you regain 1 Spirit Charge.',
      effects: [
        { condition: 'Weapon Attacks', effect: 'Deal extra Radiant damage equal to your level.' },
        { condition: 'Killing Blow', effect: 'Regain 1 Spirit Charge if you kill a spirit.' },
        { condition: 'With Spirit Charges', effect: 'Spend 1 Spirit Charge to extend the duration to 5 turns or to double the extra damage against undead/fiends.' },
        { condition: 'With High Wisdom', effect: 'Duration increases by 1 turn per 3 points of WIS modifier.' }
      ],
      scaling: 'Extra damage = level, Duration = 3 + (WIS modifier / 3) turns'
    },
    {
      name: 'Consecrated Ground',
      cost: {
        actionPoints: 0,
        mana: 3,
        spiritCharges: '1'
      },
      description: 'Bless the ground or room. Creates a small consecrated area. Enemies inside it have disadvantage on attacks or saving throws, and undead within take minor Radiant damage each round.',
      mechanics: 'Consecrate a 20-foot radius area centered on you or a point within 30 feet. The area lasts for 1 minute. Enemies inside have disadvantage on attacks and saving throws, and undead take 1d6 Radiant damage at the start of their turn. Cursed effects end automatically at the edge of this area.',
      effects: [
        { condition: 'Enemy Disadvantage', effect: 'Enemies have disadvantage on attacks and saving throws while in the area.' },
        { condition: 'Undead Damage', effect: 'Undead take 1d6 Radiant damage at the start of their turn while in the area.' },
        { condition: 'Curse Protection', effect: 'Cursed effects end automatically at the edge of this area.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase the radius to 30 feet or to double the damage to undead.' }
      ],
      scaling: 'Damage = 1d6 + (WIS modifier), Radius = 20 + (WIS modifier) feet'
    },
    {
      name: 'Mass Banishment Ritual',
      cost: {
        actionPoints: 1,
        mana: 5,
        spiritCharges: '2'
      },
      description: 'A potent spell combining mana and focus. You trace sigils and invoke a powerful prayer. A large spirit or multiple lesser spirits in an area must make a strong resistance roll or be banished/contained for a time.',
      mechanics: 'Perform a ritual that takes your full turn. All spirits within a 30-foot radius must make a WIS save or be banished/contained (stunned/incapacitated) for 1 minute. This can also forcibly end one major curse on an area or group.',
      effects: [
        { condition: 'Failed Save', effect: 'Spirits are banished/contained for 1 minute.' },
        { condition: 'Curse Breaking', effect: 'Can forcibly end one major curse on an area or group.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase the save DC by 2 or to make the banishment permanent for spirits of CR 5 or lower.' },
        { condition: 'Gain Spirit Charges', effect: 'For each spirit successfully banished, gain 1 Spirit Charge (up to your maximum).' }
      ],
      scaling: 'Save DC = 15 + (WIS modifier)'
    },
    {
      name: 'Divine Ward',
      cost: {
        actionPoints: 1,
        mana: 2,
        spiritCharges: '+1'
      },
      description: 'Create a protective barrier against supernatural forces.',
      mechanics: 'Target gains +3 AC vs undead/fiends and advantage on saves vs supernatural effects for 5 rounds.',
      effects: [
        { condition: 'AC Bonus', effect: '+3 AC against undead and fiends' },
        { condition: 'Save Advantage', effect: 'Advantage on saves vs supernatural effects' },
        { condition: 'Duration', effect: 'Lasts for 5 rounds' }
      ],
      scaling: 'AC bonus = +3'
    },
    {
      name: 'Consecrated Ground',
      cost: {
        actionPoints: 2,
        mana: 3,
        spiritCharges: '+1'
      },
      description: 'Bless an area to make it hostile to evil spirits.',
      mechanics: 'Create 15-ft radius consecrated area for 10 minutes. Undead/fiends take 1d6 radiant damage per turn inside.',
      effects: [
        { condition: 'Area', effect: 'Create 15-ft radius consecrated area' },
        { condition: 'Damage', effect: 'Undead/fiends take 1d6 radiant damage per turn' },
        { condition: 'Duration', effect: 'Lasts for 10 minutes' }
      ],
      scaling: 'Damage = 1d6 radiant per turn'
    },
    {
      name: 'Spirit Sight',
      cost: {
        actionPoints: 1,
        mana: 1,
        spiritCharges: '+1'
      },
      description: 'See through illusions and detect supernatural entities.',
      mechanics: 'For 1 hour, see invisible creatures, detect undead/fiends within 60 ft, and see through illusions.',
      effects: [
        { condition: 'True Sight', effect: 'See invisible creatures and through illusions' },
        { condition: 'Detection', effect: 'Detect undead/fiends within 60 ft' },
        { condition: 'Duration', effect: 'Lasts for 1 hour' }
      ],
      scaling: 'Detection range = 60 ft'
    },
    {
      name: 'Purifying Light',
      cost: {
        actionPoints: 1,
        mana: 2,
        spiritCharges: '+1'
      },
      description: 'Emit radiant light that weakens evil creatures.',
      mechanics: 'Create 20-ft radius bright light for 5 rounds. Undead/fiends have disadvantage on attacks and saves while in light.',
      effects: [
        { condition: 'Light', effect: 'Create 20-ft radius bright light' },
        { condition: 'Debuff', effect: 'Undead/fiends have disadvantage on attacks and saves' },
        { condition: 'Duration', effect: 'Lasts for 5 rounds' }
      ],
      scaling: 'Radius = 20 ft'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Rite of Ultimate Banishment',
      cost: {
        actionPoints: 3,
        mana: 8,
        spiritCharges: '3'
      },
      description: 'A ceremony that sends even greater demons back to their plane. Takes several turns to perform, but if successful permanently banishes a target spirit or undoes a powerful world-affecting curse.',
      mechanics: 'Perform a ritual that takes 3 turns to complete. At the end, a target spirit within 60 feet must make a WIS save with disadvantage or be permanently banished to its home plane. This can also undo a powerful world-affecting curse.',
      effects: [
        { condition: 'Failed Save', effect: 'Target is permanently banished to its home plane.' },
        { condition: 'Curse Breaking', effect: 'Can undo a powerful world-affecting curse.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 2 additional Spirit Charges to reduce the casting time to 1 turn or to affect all spirits within a 30-foot radius.' },
        { condition: 'Interruption', effect: 'If you take damage during the ritual, you must make a CON save (DC = damage taken) or the ritual fails.' }
      ],
      scaling: 'Save DC = 18 + (WIS modifier)'
    },
    {
      name: 'Aura of Sanctity',
      cost: {
        actionPoints: 2,
        mana: 6,
        spiritCharges: '2'
      },
      description: 'Passively emanate holy energy. Allies near you gain regeneration of HP and automatically remove 1 minor curse each round. Enemies (undead/fiends) in the aura take constant Radiant damage.',
      mechanics: 'Create a 15-foot aura around you that lasts for 1 minute. Allies within the aura regain 1d6 HP at the start of their turn and automatically remove 1 minor curse each round. Undead/fiends within the aura take 2d6 Radiant damage at the start of their turn.',
      effects: [
        { condition: 'Ally Regeneration', effect: 'Allies regain 1d6 HP at the start of their turn.' },
        { condition: 'Curse Removal', effect: 'Allies automatically remove 1 minor curse each round.' },
        { condition: 'Enemy Damage', effect: 'Undead/fiends take 2d6 Radiant damage at the start of their turn.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase the radius to 30 feet or to double the healing to allies.' }
      ],
      scaling: 'Healing = 1d6 + (WIS modifier), Damage = 2d6 + (WIS modifier)'
    },
    {
      name: 'Divine Retribution',
      cost: {
        actionPoints: 0,
        mana: 0,
        spiritCharges: 'All'
      },
      description: 'Channel divine wrath at the moment of death. When the Exorcist is defeated, they explode in a wave of Radiant energy, dealing massive damage to nearby evil creatures and dispelling curses on allies.',
      mechanics: 'When you are reduced to 0 HP, you explode in a wave of Radiant energy. All undead/fiends within 30 feet take damage equal to 5d6 plus 1d6 per Spirit Charge you had. All curses on allies within the area are dispelled.',
      effects: [
        { condition: 'Enemy Damage', effect: 'Undead/fiends take 5d6 + 1d6 per Spirit Charge you had.' },
        { condition: 'Curse Dispelling', effect: 'All curses on allies within the area are dispelled.' },
        { condition: 'Activation', effect: 'Triggers automatically when you are reduced to 0 HP.' },
        { condition: 'With High Wisdom', effect: 'Radius increases by 5 feet per 2 points of WIS modifier.' }
      ],
      scaling: 'Damage = 5d6 + (1d6 × Spirit Charges) + (WIS modifier × 2)'
    },
    {
      name: 'Summon Lantern Guardian',
      cost: {
        actionPoints: 2,
        mana: 5,
        spiritCharges: '2'
      },
      description: 'As a ritual, create a bound spirit of light (like a guardian angel or will-o\'-wisp) that fights for you for a limited time, absorbing hits or intercepting negative spells.',
      mechanics: 'Summon a Lantern Guardian that fights for you for 10 minutes. The guardian has HP equal to your level × 5 and can absorb hits or intercept negative spells directed at you or your allies.',
      effects: [
        { condition: 'Guardian Stats', effect: 'HP equal to your level × 5, AC equal to 10 + your WIS modifier.' },
        { condition: 'Damage Absorption', effect: 'Can absorb hits directed at you or your allies within 5 feet.' },
        { condition: 'Spell Interception', effect: 'Can intercept negative spells directed at you or your allies within 5 feet.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase the guardian\'s HP by 50% or to allow it to cast Remove Curse once per minute.' }
      ],
      scaling: 'Guardian HP = (level × 5) + (WIS modifier × 3), Guardian AC = 10 + WIS modifier'
    },
    {
      name: 'Sanctify Halo',
      cost: {
        actionPoints: 2,
        mana: 7,
        spiritCharges: '3'
      },
      description: 'A burst of faith so potent it renders the Exorcist temporarily invulnerable to evil attacks. For 1–2 turns, all damage taken is halved and any curses on you are instantly broken.',
      mechanics: 'Surround yourself with a halo of sanctified light for 2 turns. During this time, all damage you take is halved, and any curses on you are instantly broken. You are also immune to new curses for the duration.',
      effects: [
        { condition: 'Damage Reduction', effect: 'All damage you take is halved.' },
        { condition: 'Curse Breaking', effect: 'Any curses on you are instantly broken.' },
        { condition: 'Curse Immunity', effect: 'You are immune to new curses for the duration.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to extend the duration to 3 turns or to extend the effect to allies within 10 feet.' }
      ],
      scaling: 'Duration = 2 + (WIS modifier / 3) turns'
    },
    {
      name: 'Exorcism Ritual',
      cost: {
        actionPoints: 3,
        mana: 6,
        spiritCharges: '2'
      },
      description: 'Perform a complex exorcism ritual to cleanse a possessed creature or object. The ritual takes time but is highly effective against even powerful possessing entities.',
      mechanics: 'Perform an exorcism ritual on a possessed creature or object. The ritual takes 3 turns to complete. At the end, the possessing entity must make a WIS save with disadvantage or be expelled and banished.',
      effects: [
        { condition: 'Failed Save', effect: 'The possessing entity is expelled and banished.' },
        { condition: 'Cleansing', effect: 'The target is cleansed of all supernatural influences.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 2 additional Spirit Charges to reduce the casting time to 1 turn or to automatically succeed against possessing entities of CR 10 or lower.' },
        { condition: 'Gain Spirit Charges', effect: 'If you successfully exorcise a powerful entity (CR equal to or greater than your level), gain 2 Spirit Charges.' }
      ],
      scaling: 'Save DC = 18 + (WIS modifier)'
    },
    {
      name: 'Holy Immolation',
      cost: {
        actionPoints: 2,
        mana: 5,
        spiritCharges: '2'
      },
      description: 'Surround yourself with holy fire that burns undead and fiends but heals allies. The flames follow you as you move, creating a mobile zone of purification.',
      mechanics: 'Surround yourself with holy fire for 1 minute. Undead and fiends that start their turn within 10 feet of you take 3d6 Radiant damage. Allies that start their turn within 10 feet of you regain 1d6 HP.',
      effects: [
        { condition: 'Enemy Damage', effect: 'Undead and fiends take 3d6 Radiant damage.' },
        { condition: 'Ally Healing', effect: 'Allies regain 1d6 HP.' },
        { condition: 'Mobile Zone', effect: 'The flames follow you as you move.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to increase the radius to 15 feet or to double the damage to undead and fiends.' }
      ],
      scaling: 'Damage = 3d6 + (WIS modifier), Healing = 1d6 + (WIS modifier / 2)'
    },
    {
      name: 'Binding Circle',
      cost: {
        actionPoints: 2,
        mana: 4,
        spiritCharges: '2'
      },
      description: 'Create a binding circle that traps spirits and prevents them from using their supernatural abilities. The circle can be used to contain a spirit for interrogation or to weaken it for banishment.',
      mechanics: 'Create a 10-foot radius binding circle centered on a point within 30 feet. Spirits within the circle must make a WIS save or be trapped. Trapped spirits cannot leave the circle and have disadvantage on all attacks and saving throws. The circle lasts for 10 minutes or until broken.',
      effects: [
        { condition: 'Trapping', effect: 'Spirits cannot leave the circle on a failed save.' },
        { condition: 'Weakening', effect: 'Trapped spirits have disadvantage on all attacks and saving throws.' },
        { condition: 'Duration', effect: 'The circle lasts for 10 minutes or until broken.' },
        { condition: 'With Additional Spirit Charges', effect: 'Spend 1 additional Spirit Charge to make the circle indestructible or to prevent trapped spirits from using any supernatural abilities.' }
      ],
      scaling: 'Save DC = 15 + (WIS modifier), Radius = 10 + (WIS modifier / 2) feet'
    },
    {
      name: 'Divine Intervention',
      cost: {
        actionPoints: 1,
        mana: 4,
        spiritCharges: '3'
      },
      description: 'Call upon divine power to intervene in a moment of crisis.',
      mechanics: 'When an ally within 60 ft would be reduced to 0 HP, instantly heal them for 4d8 + SPIR HP and grant them immunity to the damage type that triggered this for 1 round.',
      effects: [
        { condition: 'Trigger', effect: 'When an ally would be reduced to 0 HP' },
        { condition: 'Healing', effect: 'Heal for 4d8 + SPIR HP' },
        { condition: 'Immunity', effect: 'Grant immunity to the triggering damage type for 1 round' }
      ],
      scaling: 'Healing = 4d8 + SPIR modifier'
    },
    {
      name: 'Sanctuary Dome',
      cost: {
        actionPoints: 3,
        mana: 5,
        spiritCharges: '4'
      },
      description: 'Create a large protective dome that shields allies from all supernatural harm.',
      mechanics: 'Create 30-ft radius dome for 5 rounds. Allies inside are immune to supernatural effects and regenerate 2d6 HP per turn.',
      effects: [
        { condition: 'Dome', effect: 'Create 30-ft radius protective dome' },
        { condition: 'Immunity', effect: 'Allies inside are immune to supernatural effects' },
        { condition: 'Regeneration', effect: 'Allies regenerate 2d6 HP per turn' },
        { condition: 'Duration', effect: 'Lasts for 5 rounds' }
      ],
      scaling: 'Regeneration = 2d6 + SPIR modifier HP per turn'
    },
    {
      name: 'Mass Purification',
      cost: {
        actionPoints: 3,
        mana: 6,
        spiritCharges: '5'
      },
      description: 'Cleanse a large area of all supernatural corruption and evil influences.',
      mechanics: 'Purify 50-ft radius area. All curses, diseases, and supernatural effects are removed. Undead/fiends take 6d8 radiant damage.',
      effects: [
        { condition: 'Area Cleansing', effect: 'Remove all curses, diseases, and supernatural effects in 50-ft radius' },
        { condition: 'Damage', effect: 'Undead/fiends take 6d8 radiant damage' },
        { condition: 'Permanent', effect: 'Area remains consecrated for 24 hours' }
      ],
      scaling: 'Damage = 6d8 + (SPIR modifier × 2) radiant'
    },
    {
      name: 'Avatar of Light',
      cost: {
        actionPoints: 3,
        mana: 8,
        spiritCharges: 'all'
      },
      description: 'Transform into a being of pure divine light, becoming the ultimate force against evil.',
      mechanics: 'Transform for 6 rounds. Gain flight 60 ft, immunity to all damage from undead/fiends, and all abilities cost no Spirit Charges. Aura deals 3d6 radiant to enemies within 15 ft per turn.',
      effects: [
        { condition: 'Flight', effect: 'Gain flight speed 60 ft' },
        { condition: 'Immunity', effect: 'Immune to all damage from undead/fiends' },
        { condition: 'Free Abilities', effect: 'All abilities cost no Spirit Charges' },
        { condition: 'Aura', effect: 'Deal 3d6 radiant damage to enemies within 15 ft per turn' },
        { condition: 'Duration', effect: 'Lasts for 6 rounds' }
      ],
      scaling: 'Aura damage = 3d6 + SPIR modifier radiant per turn',
      ultimate: true
    }
  ]
};

export default exorcistAbilities;
