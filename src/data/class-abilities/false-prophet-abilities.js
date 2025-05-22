// Base spells and abilities for the False Prophet class
const falseProphetAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Lies (Heresy Points)',
    description: 'The False Prophet uses three core resources in combat: Action Points (AP), Mana, and Hit Points (HP). Uniquely, the False Prophet can also sacrifice its own HP to empower abilities or restore Mana. The signature mechanic is Lies (often called Heresy Points) – a special pool accumulated by deceitful actions.',
    mechanics: [
      'Whenever the False Prophet performs a false miracle, successfully lies, or twists a normal effect (such as casting a healing spell that actually harms), they earn Lies.',
      'Lies can be spent to augment or alter abilities, adding extra effects, boosting damage, extending duration, raising save DCs, or adding extra targets.',
      'Lies can even break normal limits, letting the Prophet cast an extra spell that round or ignore a Mana cost.',
      'The False Prophet can sacrifice HP to empower abilities or restore Mana, reflecting their willingness to trade life for power.'
    ],
    liesSystem: {
      name: 'Lies (Heresy Points)',
      description: 'Lies represent the web of falsehoods the Prophet spins. These points are accumulated through deceitful actions and can be spent to enhance abilities.',
      mechanics: [
        'Maximum Lies = Charisma modifier + 5',
        'Gain Lies by performing false miracles, successfully lying, or twisting normal effects',
        'Spend Lies to enhance abilities with additional effects',
        'Lies are reset after a long rest'
      ]
    },
    bloodSacrifice: {
      name: 'Blood Sacrifice',
      description: 'The False Prophet can sacrifice their own HP to empower abilities or restore Mana.',
      mechanics: [
        'Sacrifice HP to restore Mana at a 1:1.25 ratio (e.g., 8 HP sacrificed restores 10 Mana)',
        'Sacrifice HP to empower abilities, increasing their effects',
        'HP sacrificed cannot be healed for 1 minute',
        'Cannot sacrifice HP if it would reduce you below 1 HP'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'False Benediction',
      cost: {
        actionPoints: 1,
        mana: 3,
        hpSacrifice: '0'
      },
      description: 'The Prophet lays hands on an ally "to heal" them, but instead inflicts necrotic damage. The target appears healed (flavor only) but actually suffers a hidden wound.',
      mechanics: 'Touch a target and make them appear healed while actually inflicting 1d8 necrotic damage. The victim must make a Will save or take an additional 1d4 bleed damage for 3 turns.',
      effects: [
        { condition: 'Normal Cast', effect: 'Target takes 1d8 necrotic damage and appears healed (visual effect only).' },
        { condition: 'Failed Save', effect: 'Target also takes 1d4 bleed damage for 3 turns.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the initial damage to 2d8 or the bleed damage to 2d4.' },
        { condition: 'Gain Lies', effect: 'Gain 1 Lie for each target that fails their save, as their faith is shaken.' }
      ],
      scaling: 'Damage = 1d8 + (CHA modifier) necrotic damage, Bleed = 1d4 per turn'
    },
    {
      name: 'Blasphemous Gift',
      cost: {
        actionPoints: 2,
        mana: 4,
        hpSacrifice: '0'
      },
      description: 'Channels energy as if granting holy strength. One ally gains bonuses to Attack rolls and Saves for 3 turns, but secretly becomes tethered to the Prophet.',
      mechanics: 'Bless an ally with +2 to Attack rolls and Saves for 3 turns. If the ally deals or takes damage while blessed, the Prophet recovers 1 Mana (stealing a bit of vigor).',
      effects: [
        { condition: 'Normal Cast', effect: 'Ally gains +2 to Attack rolls and Saves for 3 turns.' },
        { condition: 'Tether Effect', effect: 'When the ally deals or takes damage, you recover 1 Mana.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to extend the duration by 2 turns or increase the bonus to +3.' },
        { condition: 'Gain Lies', effect: 'Gain 1 Lie when casting this ability, since it\'s a deceitful boon.' }
      ],
      scaling: 'Bonus = +2 + (CHA modifier / 3), rounded down'
    },
    {
      name: 'Corrupting Touch',
      cost: {
        actionPoints: 1,
        mana: 2,
        hpSacrifice: '0'
      },
      description: 'A melee smite that looks divine. On hit it deals radiant and necrotic damage, then the Prophet heals for half the necrotic damage.',
      mechanics: 'Make a melee attack against a target. On hit, deal 1d6 radiant + 1d6 necrotic damage, then heal for half the necrotic damage dealt. The target also takes 1d4 damage each turn for 2 turns.',
      effects: [
        { condition: 'Normal Hit', effect: 'Deal 1d6 radiant + 1d6 necrotic damage and heal for half the necrotic damage.' },
        { condition: 'Damage Over Time', effect: 'Target takes 1d4 damage each turn for 2 turns.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the initial damage to 2d6 radiant + 2d6 necrotic.' },
        { condition: 'Gain Lies', effect: 'Gain 1 Lie on a hit as the enemy\'s faith falters.' }
      ],
      scaling: 'Damage = 1d6 radiant + 1d6 necrotic + (CHA modifier)'
    },
    {
      name: 'Mirage of Divinity',
      cost: {
        actionPoints: 1,
        mana: 3,
        hpSacrifice: '0'
      },
      description: 'Conjures a brief holy illusion. Enemies must save or waste their next turn "praying" at the apparition (flinching).',
      mechanics: 'Create a holy illusion within 30 feet. Enemies within 15 feet must make a Will save or waste their next turn praying at the apparition. One ally of choice gets +2 AC against the next attack.',
      effects: [
        { condition: 'Failed Save', effect: 'Enemies waste their next turn praying at the apparition.' },
        { condition: 'Ally Protection', effect: 'One ally gains +2 AC against the next attack.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the save DC by 2 or affect an additional ally with the AC bonus.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 5 HP to increase the radius to 30 feet.' }
      ],
      scaling: 'Save DC = 10 + (CHA modifier) + (INT modifier / 2)'
    },
    {
      name: 'Covenant of Lies',
      cost: {
        actionPoints: 1,
        mana: 5,
        hpSacrifice: '0'
      },
      description: 'Fires a bolt of divine light. It deals damage and pushes enemies back. If the target has any active buffs, one buff is dispelled.',
      mechanics: 'Fire a bolt of divine light at a target within 30 feet. It deals 3d6 damage (type chosen by you: radiant or psychic) and pushes the target 5 feet. If the target has any active buffs, one buff is dispelled.',
      effects: [
        { condition: 'Normal Cast', effect: 'Deal 3d6 damage (radiant or psychic) and push the target 5 feet.' },
        { condition: 'Dispel Effect', effect: 'If the target has any active buffs, one buff is dispelled.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the damage to 4d6 or dispel an additional buff.' },
        { condition: 'Gain Lies', effect: 'Gain 1 Lie if you dispel a buff, as the target\'s faith is "burned away."' }
      ],
      scaling: 'Damage = 3d6 + (CHA modifier)'
    },
    {
      name: 'Sacrificial Invocation',
      cost: {
        actionPoints: 2,
        mana: 0,
        hpSacrifice: '8'
      },
      description: 'The Prophet takes HP from themselves to restore Mana or regain AP – a deliberate blood sacrifice.',
      mechanics: 'Sacrifice 8 HP to restore 10 Mana or regain 1 AP next turn.',
      effects: [
        { condition: 'Normal Cast', effect: 'Sacrifice 8 HP to restore 10 Mana.' },
        { condition: 'Alternative', effect: 'Sacrifice 8 HP to regain 1 AP next turn.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the Mana restored to 15 or regain the AP immediately.' },
        { condition: 'With High Charisma', effect: 'With CHA 16+, restore an additional 1 Mana per 2 CHA points above 15.' }
      ],
      scaling: 'Mana restored = 10 + (CHA modifier)'
    },
    {
      name: 'Veil of Revelation',
      cost: {
        actionPoints: 1,
        mana: 2,
        hpSacrifice: '0'
      },
      description: 'Wraps the Prophet in a shining aura for 2 turns. It absorbs the next incoming spell or condition and forces attackers to save or take psychic damage.',
      mechanics: 'Create a protective aura around yourself for 2 turns. It absorbs the next incoming spell or condition and forces attackers to make a Will save or take 1d6 psychic damage.',
      effects: [
        { condition: 'Spell Absorption', effect: 'Absorb the next incoming spell or condition.' },
        { condition: 'Attacker Damage', effect: 'Attackers must save or take 1d6 psychic damage.' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the duration to 3 turns or the damage to 2d6.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 5 HP to also reflect the absorbed spell back at the caster.' }
      ],
      scaling: 'Damage = 1d6 + (CHA modifier), Save DC = 10 + (CHA modifier)'
    },
    {
      name: 'Whispered Heresy',
      cost: {
        actionPoints: 1,
        mana: 3,
        hpSacrifice: '0'
      },
      description: 'A single-target curse dressed as a blessing. The target must succeed on a Will save or have their Faith/resistance drastically reduced.',
      mechanics: 'Target an enemy within 30 feet. They must make a Will save or have their Faith/resistance reduced by -4 for 3 turns. If they are a devoted foe, they might even switch sides for 1 turn.',
      effects: [
        { condition: 'Failed Save', effect: 'Target\'s Faith/resistance is reduced by -4 for 3 turns.' },
        { condition: 'Devoted Foe', effect: 'If the target is a devoted foe (e.g., cleric, paladin), they might switch sides for 1 turn (treated as charmed).' },
        { condition: 'With Lies', effect: 'Spend 1 Lie to increase the penalty to -6 or extend the duration to 5 turns.' },
        { condition: 'Gain Lies', effect: 'Gain 1 Lie for each failed save, as the target\'s faith is corrupted.' }
      ],
      scaling: 'Save DC = 10 + (CHA modifier) + (INT modifier / 2)'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Pandemonium Prayer',
      cost: {
        actionPoints: 3,
        mana: 8,
        hpSacrifice: '0'
      },
      description: 'The Prophet invokes chaotic divine energy in a 10-ft radius. All allies are healed while all enemies take damage, but everyone must save or suffer additional effects.',
      mechanics: 'Create a 10-foot radius burst of chaotic divine energy. All allies within are healed for 10 HP, while all enemies take 10 necrotic damage. However, allies who pass a Will save are stunned for 1 turn, and enemies who fail are blinded for 1 turn.',
      effects: [
        { condition: 'Allies', effect: 'Healed for 10 HP, but must make a Will save or be stunned for 1 turn.' },
        { condition: 'Enemies', effect: 'Take 10 necrotic damage and must make a Will save or be blinded for 1 turn.' },
        { condition: 'With Lies', effect: 'Spend 2 Lies to increase the healing and damage to 15, or to increase the radius to 15 feet.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 10 HP to remove the save requirement for allies, ensuring they are not stunned.' }
      ],
      scaling: 'Healing/Damage = 10 + (CHA modifier), Save DC = 12 + (CHA modifier)'
    },
    {
      name: 'Icon of Deceit',
      cost: {
        actionPoints: 2,
        mana: 6,
        hpSacrifice: '0'
      },
      description: 'The Prophet summons a sinister idol that radiates a false holy presence for 10 turns. Every enemy within 15 ft must save or become charmed and pacified.',
      mechanics: 'Summon an idol at a point within 30 feet that lasts for 10 turns. Every enemy within 15 feet must make a Will save or become charmed and pacified. If any enemy attacks the idol, it detonates, dealing 4d6 radiant damage to them.',
      effects: [
        { condition: 'Failed Save', effect: 'Enemies become charmed and pacified (treat the idol as a trusted religious figure).' },
        { condition: 'Idol Attacked', effect: 'If attacked, the idol detonates, dealing 4d6 radiant damage to the attacker.' },
        { condition: 'Ally Benefit', effect: 'Allies within range gain +2 to Will saves as if protected by the idol.' },
        { condition: 'With Lies', effect: 'Spend 2 Lies to increase the radius to 25 feet or the detonation damage to 6d6.' }
      ],
      scaling: 'Detonation damage = 4d6 + (CHA modifier), Save DC = 12 + (CHA modifier)'
    },
    {
      name: 'Idol\'s Resurrection',
      cost: {
        actionPoints: 4,
        mana: 10,
        hpSacrifice: '0'
      },
      description: 'The Prophet raises a fallen ally for 2 turns, but as a Shadow Apostle. The ally revives at 50% HP, controlled by the Prophet.',
      mechanics: 'Raise a fallen ally as a Shadow Apostle for 2 turns. The ally revives at 50% HP and is controlled by you. After 2 turns (or on command), it crumbles to dust and cannot be raised again that encounter.',
      effects: [
        { condition: 'Resurrection', effect: 'Ally revives at 50% HP as a Shadow Apostle under your control.' },
        { condition: 'Duration', effect: 'Lasts for 2 turns, then crumbles to dust.' },
        { condition: 'Limitation', effect: 'Cannot be raised again during this encounter.' },
        { condition: 'With Lies', effect: 'Spend 3 Lies to increase the duration to 4 turns or the HP to 75%.' }
      ],
      scaling: 'HP restored = 50% of max HP + (CHA modifier × 5)'
    },
    {
      name: 'Heresy Unbound',
      cost: {
        actionPoints: 3,
        mana: 12,
        hpSacrifice: '0'
      },
      description: 'The Prophet consumes up to 5 Lies points at once. For every 2 Lies spent, all enemies in a 20-ft cone take psychic damage, and all allies in that cone heal by the same amount.',
      mechanics: 'Consume up to 5 Lies points. For every 2 Lies spent, all enemies in a 20-foot cone take 4d6 psychic damage (doubled if they worship a deity), and all allies in that cone heal by the same amount.',
      effects: [
        { condition: 'Base Effect', effect: 'For every 2 Lies spent, enemies take 4d6 psychic damage and allies heal for the same amount.' },
        { condition: 'Religious Enemies', effect: 'Enemies who worship a deity take double damage.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 10 HP to increase the cone to 30 feet.' },
        { condition: 'Maximum Lies', effect: 'If you spend all 5 Lies, also stun all affected enemies for 1 turn.' }
      ],
      scaling: 'Damage per 2 Lies = 4d6 + (CHA modifier)'
    },
    {
      name: 'False Salvation',
      cost: {
        actionPoints: 5,
        mana: 15,
        hpSacrifice: '0'
      },
      description: 'An apocalyptic miracle. All allies within 30 ft are fully healed and all status effects removed. Simultaneously, all enemies in range are healed to full HP.',
      mechanics: 'Create a 30-foot radius burst of divine energy. All allies within the radius are fully healed and have all status effects removed. All enemies within the radius are also healed to full HP and have all conditions removed.',
      effects: [
        { condition: 'Allies', effect: 'Fully healed and all status effects removed.' },
        { condition: 'Enemies', effect: 'Also fully healed and all conditions removed.' },
        { condition: 'With Lies', effect: 'Spend 5 Lies to prevent enemies from being healed, turning this into a true salvation for allies only.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 20 HP to also grant allies temporary HP equal to your CHA modifier × 5.' }
      ],
      scaling: 'Temporary HP (with sacrifice) = (CHA modifier × 5)'
    },
    {
      name: 'Wrath of the Unforgiven',
      cost: {
        actionPoints: 2,
        mana: 7,
        hpSacrifice: '5'
      },
      description: 'The Prophet marks one foe with a cursed glyph. That target takes radiant damage, then explodes outward: every other enemy in 15 ft takes psychic damage.',
      mechanics: 'Mark a target within 60 feet with a cursed glyph. The target takes 5d6 radiant damage, then explodes outward, dealing 3d6 psychic damage to every other enemy within 15 feet. You suffer 5 HP from divine backlash.',
      effects: [
        { condition: 'Primary Target', effect: 'Takes 5d6 radiant damage.' },
        { condition: 'Secondary Targets', effect: 'All other enemies within 15 feet take 3d6 psychic damage.' },
        { condition: 'Divine Backlash', effect: 'You suffer 5 HP from divine backlash.' },
        { condition: 'Gain Lies', effect: 'Gain 3 Lies when casting this ability, fueling your fury further.' }
      ],
      scaling: 'Primary damage = 5d6 + (CHA modifier), Secondary damage = 3d6 + (CHA modifier / 2)'
    },
    {
      name: 'Divine Coronation',
      cost: {
        actionPoints: 5,
        mana: 12,
        hpSacrifice: '0'
      },
      description: 'The Prophet proclaims themselves a living deity for 3 turns. During this time, all allies treat the Prophet as their sacred lord, gaining bonuses, while enemies become frightened.',
      mechanics: 'Proclaim yourself a living deity for 3 turns. All allies within 30 feet treat you as their sacred lord, gaining +2 to damage and defense. All enemies within the same range become frightened (-4 to attacks/saves).',
      effects: [
        { condition: 'Allies', effect: 'Gain +2 to damage and defense for 3 turns.' },
        { condition: 'Enemies', effect: 'Become frightened (-4 to attacks/saves) for 3 turns.' },
        { condition: 'With Lies', effect: 'Spend 3 Lies to increase the ally bonus to +3 or the enemy penalty to -6.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 15 HP to extend the duration to 5 turns.' }
      ],
      scaling: 'Ally bonus = +2 + (CHA modifier / 4), Enemy penalty = -4 - (CHA modifier / 4)'
    },
    {
      name: 'Hypnotic Sermon',
      cost: {
        actionPoints: 3,
        mana: 6,
        hpSacrifice: '0'
      },
      description: 'Delivers a mesmerizing sermon in a 15-ft cone. Enemies must save or be charmed for 2 turns. Allies in cone get +2 to attacks for 2 turns.',
      mechanics: 'Deliver a mesmerizing sermon in a 15-foot cone. Enemies within the cone must make a Will save or be charmed for 2 turns (treat you as a trusted preacher). Allies within the cone gain +2 to attacks for 2 turns.',
      effects: [
        { condition: 'Failed Save', effect: 'Enemies are charmed for 2 turns.' },
        { condition: 'Allies', effect: 'Gain +2 to attacks for 2 turns.' },
        { condition: 'With Lies', effect: 'Spend 2 Lies to increase the cone to 25 feet or extend the duration to 4 turns.' },
        { condition: 'With HP Sacrifice', effect: 'Sacrifice 10 HP to also make charmed enemies attack their allies.' }
      ],
      scaling: 'Save DC = 12 + (CHA modifier), Ally bonus = +2 + (CHA modifier / 4)'
    }
  ]
};

export default falseProphetAbilities;
