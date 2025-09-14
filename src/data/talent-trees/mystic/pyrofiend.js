// Talent trees for the Pyrofiend class
const pyrofiendTalentTrees = [
  {
    id: 'inferno-attunement',
    name: 'Inferno',
    description: 'Controlled fire magic with precision and balance.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'ember-touch',
        name: 'Ember Touch',
        description: 'Your fire spells generate additional Inferno.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✨',
        rankDescription: [
          'Your fire spells generate 1 additional Inferno.',
          'Your fire spells generate 2 additional Inferno.',
          'Your fire spells generate 3 additional Inferno.',
          'Your fire spells generate 4 additional Inferno.',
          'Your fire spells generate 5 additional Inferno.'
        ]
      },
      {
        id: 'fire-starter',
        name: 'Fire Starter',
        description: 'Improves your chance to land critical strikes with fire spells.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🔥',
        rankDescription: [
          'Roll 1d20 when casting a fire spell. On a 20, the spell automatically critically hits.',
          'Roll 1d20 when casting a fire spell. On a 19-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a fire spell. On an 18-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a fire spell. On a 17-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a fire spell. On a 16-20, the spell automatically critically hits.'
        ]
      },
      {
        id: 'demonic-pact',
        name: 'Demonic Pact',
        description: 'Form a pact with fire demons, enhancing your fire damage.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '😈',
        rankDescription: [
          'Form a pact with fire demons, adding 1d4 fire damage to your fire spells.',
          'Form a pact with fire demons, adding 1d6 fire damage to your fire spells.',
          'Form a pact with fire demons, adding 1d8 fire damage to your fire spells.',
          'Form a pact with fire demons, adding 1d10 fire damage to your fire spells.',
          'Form a pact with fire demons, adding 1d12 fire damage to your fire spells.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'infernal-rush',
        name: 'Infernal Rush',
        description: 'When you reach specific Inferno thresholds, your next fire spell costs no mana.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['ember-touch'],
        icon: '💨',
        rankDescription: [
          'When you reach 25 Inferno, your next fire spell costs no mana.',
          'When you reach 20 Inferno, your next fire spell costs no mana.',
          'When you reach 15 Inferno, your next fire spell costs no mana and generates 1d4 additional Inferno.'
        ]
      },
      {
        id: 'burning-focus',
        name: 'Burning Focus',
        description: 'Reduces the casting time of your fire spells.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['fire-starter'],
        icon: '👁️',
        rankDescription: [
          'Reduce the casting time of your fire spells by 1d4 × 0.05 seconds.',
          'Reduce the casting time of your fire spells by 1d6 × 0.05 seconds.',
          'Reduce the casting time of your fire spells by 1d8 × 0.05 seconds.'
        ]
      },
      {
        id: 'hellfire-embrace',
        name: 'Hellfire Embrace',
        description: 'Your fire spells may trigger a surge of infernal power, increasing your Inferno generation.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['demonic-pact'],
        icon: '🔄',
        rankDescription: [
          'Roll 1d10 when casting a fire spell. On a 10, increase your Inferno generation by 100% for 1d4 rounds.',
          'Roll 1d10 when casting a fire spell. On a 9-10, increase your Inferno generation by 100% for 1d4 rounds.',
          'Roll 1d10 when casting a fire spell. On an 8-10, increase your Inferno generation by 100% for 1d6 rounds.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'inferno-blast',
        name: 'Inferno Blast',
        description: 'Unleash a blast of infernal energy, consuming Inferno to deal massive fire damage.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['infernal-rush'],
        icon: '💥',
        rankDescription: [
          'Unleash a blast of infernal energy, consuming 20 Inferno to deal 3d10 fire damage to the target and 1d10 fire damage to nearby enemies within 10 feet.'
        ]
      },
      {
        id: 'flame-barrier',
        name: 'Flame Barrier',
        description: 'Create a barrier of flames that protects you from harm.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['burning-focus'],
        icon: '🔆',
        rankDescription: [
          'Create a barrier of flames that absorbs 2d6 damage. Attackers who strike you in melee take 1d4 fire damage.',
          'Create a barrier of flames that absorbs 3d6 damage. Attackers who strike you in melee take 1d6 fire damage.',
          'Create a barrier of flames that absorbs 4d6 damage. Attackers who strike you in melee take 1d8 fire damage.'
        ]
      },
      {
        id: 'demonic-resilience',
        name: 'Demonic Resilience',
        description: 'Your Inferno provides protection against damage.',
        maxRank: 5,
        position: { row: 2, col: 3 },
        requires: ['hellfire-embrace'],
        icon: '🛡️',
        rankDescription: [
          'Roll 1d4 for every 10 Inferno you have. Reduce incoming damage by that amount.',
          'Roll 1d6 for every 10 Inferno you have. Reduce incoming damage by that amount.',
          'Roll 1d8 for every 10 Inferno you have. Reduce incoming damage by that amount.',
          'Roll 1d10 for every 10 Inferno you have. Reduce incoming damage by that amount.',
          'Roll 1d12 for every 10 Inferno you have. Reduce incoming damage by that amount.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'infernal-cascade',
        name: 'Infernal Cascade',
        description: 'After using Inferno Blast, your fire spells generate additional Inferno.',
        maxRank: 3,
        position: { row: 3, col: 0 },
        requires: ['inferno-blast'],
        icon: '🌊',
        rankDescription: [
          'After using Inferno Blast, your next 3 fire spells generate 1d4 × 25% additional Inferno.',
          'After using Inferno Blast, your next 3 fire spells generate 1d6 × 25% additional Inferno.',
          'After using Inferno Blast, your next 1d4+2 fire spells generate 1d8 × 25% additional Inferno.'
        ]
      },
      {
        id: 'controlled-burn',
        name: 'Controlled Burn',
        description: 'You can control your Inferno levels more precisely, allowing you to maintain optimal levels.',
        maxRank: 2,
        position: { row: 3, col: 2 },
        requires: ['flame-barrier'],
        icon: '🎮',
        rankDescription: [
          'Once per encounter, you can set your Inferno level to exactly 5.',
          'Once per encounter, you can set your Inferno level to any value between 1 and 10.'
        ]
      },
      {
        id: 'demonic-vitality',
        name: 'Demonic Vitality',
        description: 'When you spend Inferno, you recover some health.',
        maxRank: 3,
        position: { row: 3, col: 4 },
        requires: ['demonic-resilience'],
        icon: '❤️',
        rankDescription: [
          'When you spend Inferno, roll 1d4 for every 5 Inferno spent. Heal for that many hit points.',
          'When you spend Inferno, roll 1d6 for every 5 Inferno spent. Heal for that many hit points.',
          'When you spend Inferno, roll 1d8 for every 5 Inferno spent. Heal for that many hit points.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'inferno-mastery',
        name: 'Inferno Mastery',
        description: 'Your mastery of Inferno allows you to cast spells more efficiently.',
        maxRank: 3,
        position: { row: 4, col: 1 },
        requires: ['infernal-cascade', 'controlled-burn'],
        icon: '🧠',
        rankDescription: [
          'Roll 1d10 when casting a fire spell. On a 10, the spell costs no Inferno to cast.',
          'Roll 1d10 when casting a fire spell. On a 9-10, the spell costs no Inferno to cast.',
          'Roll 1d10 when casting a fire spell. On an 8-10, the spell costs no Inferno to cast and generates 1d4 Inferno instead.'
        ]
      },
      {
        id: 'hellfire-storm',
        name: 'Hellfire Storm',
        description: 'Channel the power of the inferno, consuming Inferno to rain fire down on all enemies.',
        maxRank: 1,
        position: { row: 4, col: 3 },
        requires: ['controlled-burn', 'demonic-vitality'],
        icon: '☄️',
        rankDescription: [
          'Channel the power of the inferno for up to 1d4+2 rounds, consuming 5 Inferno per round to rain fire down on all enemies within 15 feet, dealing 3d10 fire damage per round to each enemy.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'infernal-conduit',
        name: 'Infernal Conduit',
        description: 'You become a conduit for infernal energy, allowing you to channel more power.',
        maxRank: 3,
        position: { row: 5, col: 0 },
        requires: ['inferno-mastery'],
        icon: '⚡',
        rankDescription: [
          'Increase your maximum Inferno capacity by 5. At maximum Inferno, your fire spells deal an additional 1d6 damage.',
          'Increase your maximum Inferno capacity by 10. At maximum Inferno, your fire spells deal an additional 1d8 damage.',
          'Increase your maximum Inferno capacity by 15. At maximum Inferno, your fire spells deal an additional 1d10 damage.'
        ]
      },
      {
        id: 'phoenix-flames',
        name: 'Phoenix Flames',
        description: 'Your fire spells have a chance to apply Phoenix Flames, causing additional damage over time.',
        maxRank: 3,
        position: { row: 5, col: 2 },
        requires: ['hellfire-storm'],
        icon: '🦅',
        rankDescription: [
          'Roll 1d10 when casting a fire spell. On a 10, apply Phoenix Flames to the target, dealing 1d6 fire damage per round for 1d4 rounds.',
          'Roll 1d10 when casting a fire spell. On a 9-10, apply Phoenix Flames to the target, dealing 1d8 fire damage per round for 1d4 rounds.',
          'Roll 1d10 when casting a fire spell. On an 8-10, apply Phoenix Flames to the target, dealing 1d10 fire damage per round for 1d6 rounds.'
        ]
      },
      {
        id: 'demonic-regeneration',
        name: 'Demonic Regeneration',
        description: 'Your connection to infernal energy allows you to regenerate health over time.',
        maxRank: 3,
        position: { row: 5, col: 4 },
        requires: ['hellfire-storm'],
        icon: '♻️',
        rankDescription: [
          'At the start of your turn, roll 1d4 for every 10 Inferno you have. Heal for that many hit points.',
          'At the start of your turn, roll 1d6 for every 10 Inferno you have. Heal for that many hit points.',
          'At the start of your turn, roll 1d8 for every 10 Inferno you have. Heal for that many hit points.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'infernal-avatar',
        name: 'Infernal Avatar',
        description: 'Transform into an avatar of infernal fire, gaining tremendous power at the cost of control.',
        maxRank: 1,
        position: { row: 6, col: 1 },
        requires: ['infernal-conduit', 'phoenix-flames'],
        icon: '👹',
        rankDescription: [
          'Transform into an avatar of infernal fire for 1d4+2 rounds. While transformed, your Inferno is set to maximum, your fire spells deal an additional 3d10 damage, and you are immune to fire damage. However, you take 1d10 damage at the end of each round as the infernal energy consumes you.'
        ]
      },
      {
        id: 'master-of-flames',
        name: 'Master of Flames',
        description: 'Your mastery of fire magic reaches its peak, allowing you to cast devastating spells.',
        maxRank: 1,
        position: { row: 6, col: 3 },
        requires: ['phoenix-flames', 'demonic-regeneration'],
        icon: '👑',
        rankDescription: [
          'Once per day, you can cast Cataclysm, consuming all your Inferno to deal 1d12 fire damage per point of Inferno consumed to all enemies within 30 feet. Enemies who survive are burned, taking 3d10 fire damage per round for 1d4+1 rounds.'
        ]
      },
    ],
  },
  {
    id: 'wildfire-attunement',
    name: 'Wildfire',
    description: 'Chaotic fire that spreads unpredictably across the battlefield.',
    icon: '🌋',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'immolation',
        name: 'Immolation',
        description: 'Your fire spells apply a burning effect that deals damage over time.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔥',
        rankDescription: [
          'Your fire spells have a chance to apply a burning effect that deals 1d4 fire damage per round for 1d4 rounds. Roll 1d20; on a 20, the effect is applied.',
          'Your fire spells have a chance to apply a burning effect that deals 1d6 fire damage per round for 1d4 rounds. Roll 1d20; on a 19-20, the effect is applied.',
          'Your fire spells have a chance to apply a burning effect that deals 1d8 fire damage per round for 1d4 rounds. Roll 1d20; on an 18-20, the effect is applied.',
          'Your fire spells have a chance to apply a burning effect that deals 1d10 fire damage per round for 1d6 rounds. Roll 1d20; on a 17-20, the effect is applied.',
          'Your fire spells have a chance to apply a burning effect that deals 1d12 fire damage per round for 1d6 rounds. Roll 1d20; on a 16-20, the effect is applied.'
        ]
      },
      {
        id: 'imp-summoning',
        name: 'Imp Summoning',
        description: 'Learn to summon a fire imp that assists you in battle, attacking enemies with firebolts.',
        maxRank: 1,
        position: { row: 0, col: 2 },
        icon: '👺',
        rankDescription: [
          'Learn to summon a fire imp that assists you in battle, attacking enemies with firebolts that deal 1d6 fire damage.'
        ]
      },
      {
        id: 'fel-energy',
        name: 'Fel Energy',
        description: 'Your spells may generate additional Inferno from fel energy.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💚',
        rankDescription: [
          'Roll 1d20 when casting a spell. On a 20, generate 1d4 additional Inferno.',
          'Roll 1d20 when casting a spell. On a 19-20, generate 1d4 additional Inferno.',
          'Roll 1d20 when casting a spell. On an 18-20, generate 1d4 additional Inferno.',
          'Roll 1d20 when casting a spell. On a 17-20, generate 1d6 additional Inferno.',
          'Roll 1d20 when casting a spell. On a 16-20, generate 1d6 additional Inferno.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'wildfire',
        name: 'Wildfire',
        description: 'Your fire spells have a chance to spread to nearby enemies.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['immolation'],
        icon: '🌪️',
        rankDescription: [
          'When you deal fire damage to an enemy, roll 1d10. On a 10, the fire spreads to a nearby enemy within 10 feet, dealing 1d6 fire damage.',
          'When you deal fire damage to an enemy, roll 1d10. On a 9-10, the fire spreads to a nearby enemy within 10 feet, dealing 1d8 fire damage.',
          'When you deal fire damage to an enemy, roll 1d10. On an 8-10, the fire spreads to a nearby enemy within 15 feet, dealing 1d10 fire damage.'
        ]
      },
      {
        id: 'improved-imp',
        name: 'Improved Imp',
        description: 'Your imp becomes more powerful, dealing more damage and having more health.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['imp-summoning'],
        icon: '🔆',
        rankDescription: [
          'Your imp deals an additional 1d4 fire damage with its attacks and gains 1d6 additional hit points.',
          'Your imp deals an additional 1d6 fire damage with its attacks and gains 1d8 additional hit points.',
          'Your imp deals an additional 1d8 fire damage with its attacks and gains 1d10 additional hit points.'
        ]
      },
      {
        id: 'demonic-aegis',
        name: 'Demonic Aegis',
        description: 'Your demons grant you a protective barrier that absorbs damage.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['fel-energy'],
        icon: '🛡️',
        rankDescription: [
          'Your demons grant you a protective barrier that absorbs 2d6 damage.',
          'Your demons grant you a protective barrier that absorbs 3d6 damage.',
          'Your demons grant you a protective barrier that absorbs 4d6 damage.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'conflagrate',
        name: 'Conflagrate',
        description: 'Ignite a target that is affected by your Immolation, dealing instant fire damage.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['wildfire'],
        icon: '💥',
        rankDescription: [
          'Ignite a target that is affected by your Immolation, dealing 3d8 instant fire damage and consuming the Immolation effect. If the target dies from this damage, the fire explodes, dealing 2d6 fire damage to all enemies within 10 feet.'
        ]
      },
      {
        id: 'felguard-summoning',
        name: 'Felguard Summoning',
        description: 'Learn to summon a felguard that fights for you with a massive two-handed weapon.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['improved-imp'],
        icon: '💂',
        rankDescription: [
          'Learn to summon a felguard that fights for you with a massive two-handed weapon, dealing 2d8 physical damage with each attack and having 50% more health than your imp.'
        ]
      },
      {
        id: 'demonic-sacrifice',
        name: 'Demonic Sacrifice',
        description: 'Sacrifice your active demon to gain a benefit based on the type of demon sacrificed.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['improved-imp'],
        icon: '🔪',
        rankDescription: [
          'Sacrifice your active demon to gain a benefit for 1d4+1 minutes. Imp: +1d8 fire damage to all spells. Felguard: +1d6 physical damage and reduce incoming damage by 1d4.'
        ]
      },
      {
        id: 'soul-link',
        name: 'Soul Link',
        description: 'Link your soul with your demon, causing damage you take to be redirected to your demon instead.',
        maxRank: 1,
        position: { row: 2, col: 4 },
        requires: ['demonic-aegis'],
        icon: '🔗',
        rankDescription: [
          'Link your soul with your demon, causing 20% of all damage you take to be redirected to your demon instead. Additionally, you gain +1d6 fire damage to your spells while the link is active.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'pyroclasm',
        name: 'Pyroclasm',
        description: 'Your fire spells have a chance to stun the target.',
        maxRank: 3,
        position: { row: 3, col: 0 },
        requires: ['conflagrate'],
        icon: '⚡',
        rankDescription: [
          'Roll 1d20 when casting a fire spell. On a 20, the target is stunned for 1d4 rounds.',
          'Roll 1d20 when casting a fire spell. On a 19-20, the target is stunned for 1d4 rounds.',
          'Roll 1d20 when casting a fire spell. On an 18-20, the target is stunned for 1d6 rounds.'
        ]
      },
      {
        id: 'demonic-empowerment',
        name: 'Demonic Empowerment',
        description: 'Empower your demon, granting it increased damage and movement speed.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['felguard-summoning', 'demonic-sacrifice'],
        icon: '💪',
        rankDescription: [
          'Empower your demon for 1d4+2 rounds, granting it +1d8 damage to all attacks, +10 feet movement speed, and immunity to crowd control effects.'
        ]
      },
      {
        id: 'master-demonologist',
        name: 'Master Demonologist',
        description: 'Gain a benefit based on the type of demon you have summoned.',
        maxRank: 5,
        position: { row: 3, col: 4 },
        requires: ['soul-link'],
        icon: '👑',
        rankDescription: [
          'Gain a benefit based on your demon. Imp: +1d4 fire damage. Felguard: +1d4 physical damage and reduce incoming damage by 1.',
          'Gain a benefit based on your demon. Imp: +1d6 fire damage. Felguard: +1d6 physical damage and reduce incoming damage by 2.',
          'Gain a benefit based on your demon. Imp: +1d8 fire damage. Felguard: +1d8 physical damage and reduce incoming damage by 3.',
          'Gain a benefit based on your demon. Imp: +1d10 fire damage. Felguard: +1d10 physical damage and reduce incoming damage by 4.',
          'Gain a benefit based on your demon. Imp: +1d12 fire damage. Felguard: +1d12 physical damage and reduce incoming damage by 5.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'inferno',
        name: 'Inferno',
        description: 'Create a pillar of fire at the target location, dealing damage to all enemies in the area over time.',
        maxRank: 1,
        position: { row: 4, col: 1 },
        requires: ['pyroclasm'],
        icon: '🌋',
        rankDescription: [
          'Create a pillar of fire at the target location for 1d4+1 rounds. Enemies who start their turn in the pillar take 3d10 fire damage and are burned, taking 1d8 fire damage per round for 1d4 rounds.'
        ]
      },
      {
        id: 'summon-infernal',
        name: 'Summon Infernal',
        description: 'Summon a powerful infernal that crashes down from the sky, stunning nearby enemies and fighting for you.',
        maxRank: 1,
        position: { row: 4, col: 3 },
        requires: ['demonic-empowerment', 'master-demonologist'],
        icon: '☄️',
        rankDescription: [
          'Summon a powerful infernal that crashes down from the sky, dealing 5d10 fire damage and stunning enemies within 15 feet for 1d4 rounds. The infernal fights for you for 1d4+2 minutes, dealing 3d8 fire damage with each attack and having an aura that deals 1d6 fire damage to nearby enemies.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'living-bomb',
        name: 'Living Bomb',
        description: 'Place a bomb on the target that explodes after a short time, dealing damage to all nearby enemies.',
        maxRank: 3,
        position: { row: 5, col: 0 },
        requires: ['inferno'],
        icon: '💣',
        rankDescription: [
          'Place a bomb on the target that explodes after 1d4 rounds, dealing 4d8 fire damage to the target and 2d6 fire damage to all enemies within 10 feet.',
          'Place a bomb on the target that explodes after 1d4 rounds, dealing 5d8 fire damage to the target and 3d6 fire damage to all enemies within 15 feet.',
          'Place a bomb on the target that explodes after 1d4 rounds, dealing 6d8 fire damage to the target and 4d6 fire damage to all enemies within 20 feet. The explosion has a 50% chance to apply a new Living Bomb to one random enemy caught in the blast.'
        ]
      },
      {
        id: 'demonic-gateway',
        name: 'Demonic Gateway',
        description: 'Create a pair of demonic portals that allow you and your allies to quickly travel between two locations.',
        maxRank: 1,
        position: { row: 5, col: 2 },
        requires: ['summon-infernal'],
        icon: '🌀',
        rankDescription: [
          'Create a pair of demonic portals up to 60 feet apart. You and your allies can use these portals to instantly teleport between the two locations. The portals last for 1d4+2 minutes.'
        ]
      },
      {
        id: 'demonic-pact',
        name: 'Demonic Pact',
        description: 'Your demons share their power with you and your allies.',
        maxRank: 3,
        position: { row: 5, col: 4 },
        requires: ['summon-infernal'],
        icon: '📜',
        rankDescription: [
          'Your demons share their power with you and your allies within 30 feet, granting +1d4 damage to all attacks and spells.',
          'Your demons share their power with you and your allies within 30 feet, granting +1d6 damage to all attacks and spells.',
          'Your demons share their power with you and your allies within 30 feet, granting +1d8 damage to all attacks and spells and +1d4 temporary hit points at the start of each round.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'rain-of-fire',
        name: 'Rain of Fire',
        description: 'Call down a rain of fire on the target area, dealing damage to all enemies caught in the blast.',
        maxRank: 1,
        position: { row: 6, col: 1 },
        requires: ['living-bomb', 'demonic-gateway'],
        icon: '☔',
        rankDescription: [
          'Call down a rain of fire on a 30-foot radius area for 1d4+2 rounds. Enemies in the area take 4d10 fire damage per round and must make a Dexterity save each round or be stunned for 1 round.'
        ]
      },
      {
        id: 'lord-of-flames',
        name: 'Lord of Flames',
        description: 'You become a master of demonic fire, gaining the ability to summon multiple demons and enhance their power.',
        maxRank: 1,
        position: { row: 6, col: 3 },
        requires: ['demonic-gateway', 'demonic-pact'],
        icon: '👑',
        rankDescription: [
          'You can have up to 3 demons summoned at once. Additionally, all your demons gain +2d8 damage to their attacks, +50% health, and their auras affect enemies within 20 feet instead of 10 feet.'
        ]
      },
    ],
  },
  {
    id: 'hellfire-attunement',
    name: 'Hellfire',
    description: 'Demonic fire magic with curses and life manipulation.',
    icon: '😈',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'improved-fireball',
        name: 'Improved Fireball',
        description: 'Reduces the casting time of your Fireball spell.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🔥',
        rankDescription: [
          'Reduce the casting time of your Fireball spell by 1d4 × 0.05 seconds.',
          'Reduce the casting time of your Fireball spell by 1d6 × 0.05 seconds.',
          'Reduce the casting time of your Fireball spell by 1d8 × 0.05 seconds.',
          'Reduce the casting time of your Fireball spell by 1d10 × 0.05 seconds.',
          'Reduce the casting time of your Fireball spell by 1d12 × 0.05 seconds.'
        ]
      },
      {
        id: 'devastation',
        name: 'Devastation',
        description: 'Improves your chance to land critical strikes with destructive spells.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💥',
        rankDescription: [
          'Roll 1d20 when casting a destructive spell. On a 20, the spell automatically critically hits.',
          'Roll 1d20 when casting a destructive spell. On a 19-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a destructive spell. On an 18-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a destructive spell. On a 17-20, the spell automatically critically hits.',
          'Roll 1d20 when casting a destructive spell. On a 16-20, the spell automatically critically hits.'
        ]
      },
      {
        id: 'demonic-power',
        name: 'Demonic Power',
        description: 'Harness demonic power to enhance your destructive spells.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '😈',
        rankDescription: [
          'Your destructive spells deal an additional 1d4 damage.',
          'Your destructive spells deal an additional 1d6 damage.',
          'Your destructive spells deal an additional 1d8 damage.',
          'Your destructive spells deal an additional 1d10 damage.',
          'Your destructive spells deal an additional 1d12 damage.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'aftermath',
        name: 'Aftermath',
        description: 'Your destructive spells may stun the target.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['improved-fireball'],
        icon: '⚡',
        rankDescription: [
          'Roll 1d10 when casting a destructive spell. On a 10, stun the target for 1d4 rounds.',
          'Roll 1d10 when casting a destructive spell. On a 9-10, stun the target for 1d4 rounds.',
          'Roll 1d10 when casting a destructive spell. On an 8-10, stun the target for 1d6 rounds.'
        ]
      },
      {
        id: 'immolate',
        name: 'Immolate',
        description: 'Burn the target with hellfire, dealing initial damage and damage over time.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['devastation'],
        icon: '🔥',
        rankDescription: [
          'Burn the target with hellfire, dealing 2d6 initial fire damage and 1d6 fire damage per round for 1d4 rounds.',
          'Burn the target with hellfire, dealing 2d8 initial fire damage and 1d8 fire damage per round for 1d4 rounds.',
          'Burn the target with hellfire, dealing 2d10 initial fire damage and 1d10 fire damage per round for 1d6 rounds.'
        ]
      },
      {
        id: 'ruin',
        name: 'Ruin',
        description: 'Increases the critical strike damage of your destructive spells.',
        maxRank: 5,
        position: { row: 1, col: 4 },
        requires: ['demonic-power'],
        icon: '💀',
        rankDescription: [
          'When you critically hit with a destructive spell, roll an additional 1d4 and add it to the damage.',
          'When you critically hit with a destructive spell, roll an additional 1d6 and add it to the damage.',
          'When you critically hit with a destructive spell, roll an additional 1d8 and add it to the damage.',
          'When you critically hit with a destructive spell, roll an additional 1d10 and add it to the damage.',
          'When you critically hit with a destructive spell, roll an additional 1d12 and add it to the damage.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'conflagrate',
        name: 'Conflagrate',
        description: 'Ignite a target that is affected by your Immolate, dealing instant fire damage.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['aftermath', 'immolate'],
        icon: '💥',
        rankDescription: [
          'Ignite a target that is affected by your Immolate, dealing 3d8 instant fire damage and consuming the Immolate effect. If this kills the target, you gain 1d6 Inferno.'
        ]
      },
      {
        id: 'shadowburn',
        name: 'Shadowburn',
        description: 'Instantly burns the target for shadow damage. If the target dies within 5 seconds of Shadowburn, you generate Inferno.',
        maxRank: 1,
        position: { row: 2, col: 2 },
        requires: ['immolate'],
        icon: '🌑',
        rankDescription: [
          'Instantly burns the target for 3d8 shadow damage. If the target dies within 1d4 rounds of Shadowburn, you generate 2d10 Inferno.'
        ]
      },
      {
        id: 'emberstorm',
        name: 'Emberstorm',
        description: 'Your fire spells deal additional damage.',
        maxRank: 5,
        position: { row: 2, col: 4 },
        requires: ['ruin'],
        icon: '🌪️',
        rankDescription: [
          'Your fire spells deal an additional 1d6 fire damage.',
          'Your fire spells deal an additional 1d8 fire damage.',
          'Your fire spells deal an additional 1d10 fire damage.',
          'Your fire spells deal an additional 1d12 fire damage.',
          'Your fire spells deal an additional 2d8 fire damage.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'backlash',
        name: 'Backlash',
        description: 'When you are hit by a physical attack, you may gain the Backlash effect, making your next Fireball or Shadowbolt instant cast.',
        maxRank: 3,
        position: { row: 3, col: 0 },
        requires: ['conflagrate'],
        icon: '↩️',
        rankDescription: [
          'Roll 1d10 when hit by a physical attack. On a 10, gain the Backlash effect, making your next Fireball or Shadowbolt instant cast.',
          'Roll 1d10 when hit by a physical attack. On a 9-10, gain the Backlash effect, making your next Fireball or Shadowbolt instant cast.',
          'Roll 1d10 when hit by a physical attack. On an 8-10, gain the Backlash effect, making your next Fireball or Shadowbolt instant cast and deal an additional 2d6 damage.'
        ]
      },
      {
        id: 'shadowfury',
        name: 'Shadowfury',
        description: 'Unleash a blast of shadow energy at the target location, damaging and stunning all enemies caught in the blast.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['shadowburn'],
        icon: '🌓',
        rankDescription: [
          'Unleash a blast of shadow energy at the target location, dealing 3d10 shadow damage to all enemies within 15 feet and stunning them for 1d4 rounds.'
        ]
      },
      {
        id: 'soul-leech',
        name: 'Soul Leech',
        description: 'Your destructive spells may heal you for a portion of the damage they deal.',
        maxRank: 3,
        position: { row: 3, col: 4 },
        requires: ['emberstorm'],
        icon: '💉',
        rankDescription: [
          'Roll 1d10 when casting a destructive spell. On a 10, heal for 1d6 hit points per 10 damage dealt.',
          'Roll 1d10 when casting a destructive spell. On a 9-10, heal for 1d6 hit points per 10 damage dealt.',
          'Roll 1d10 when casting a destructive spell. On an 8-10, heal for 1d8 hit points per 10 damage dealt.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'nether-protection',
        name: 'Nether Protection',
        description: 'When you take spell damage, you have a chance to gain resistance to that school of magic.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['backlash'],
        icon: '🛡️',
        rankDescription: [
          'Roll 1d10 when you take spell damage. On a 10, gain resistance to that school of magic for 1d4 rounds, reducing damage taken by 1d6.',
          'Roll 1d10 when you take spell damage. On a 9-10, gain resistance to that school of magic for 1d4 rounds, reducing damage taken by 1d8.',
          'Roll 1d10 when you take spell damage. On an 8-10, gain resistance to that school of magic for 1d6 rounds, reducing damage taken by 1d10.'
        ]
      },
      {
        id: 'chaos-bolt',
        name: 'Chaos Bolt',
        description: 'Sends a bolt of chaotic fire at the target, dealing massive fire damage. Chaos Bolt cannot be resisted and ignores all immunities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['shadowfury', 'soul-leech'],
        icon: '🌋',
        rankDescription: [
          'Sends a bolt of chaotic fire at the target, dealing 5d10 fire damage. Chaos Bolt cannot be resisted and ignores all immunities. On a critical hit, the damage is tripled instead of doubled.'
        ]
      },
      {
        id: 'demonic-resilience',
        name: 'Demonic Resilience',
        description: 'Your connection to demonic power makes you more resilient to damage.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['soul-leech'],
        icon: '🧿',
        rankDescription: [
          'Reduce all damage taken by 1d4.',
          'Reduce all damage taken by 1d6.',
          'Reduce all damage taken by 1d8.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'shadow-and-flame',
        name: 'Shadow and Flame',
        description: 'Your Shadowbolt and Incinerate spells have a chance to make your next Chaos Bolt cost no mana and cast instantly.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['nether-protection', 'chaos-bolt'],
        icon: '🔮',
        rankDescription: [
          'Roll 1d20 when casting Shadowbolt or Incinerate. On a 20, your next Chaos Bolt costs no mana and casts instantly.',
          'Roll 1d20 when casting Shadowbolt or Incinerate. On a 19-20, your next Chaos Bolt costs no mana and casts instantly.',
          'Roll 1d20 when casting Shadowbolt or Incinerate. On an 18-20, your next Chaos Bolt costs no mana, casts instantly, and deals an additional 2d10 damage.'
        ]
      },
      {
        id: 'demonic-pact',
        name: 'Demonic Pact',
        description: 'Your connection to demonic power enhances your spells and those of your allies.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['chaos-bolt', 'demonic-resilience'],
        icon: '📜',
        rankDescription: [
          'You and allies within 30 feet gain +1d4 damage to all spells.',
          'You and allies within 30 feet gain +1d6 damage to all spells.',
          'You and allies within 30 feet gain +1d8 damage to all spells and have a 10% chance to resist harmful magic effects.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'dark-apotheosis',
        name: 'Dark Apotheosis',
        description: 'Transform into a demon, gaining tremendous power and resilience.',
        maxRank: 1,
        position: { row: 6, col: 0 },
        requires: ['shadow-and-flame'],
        icon: '👿',
        rankDescription: [
          'Transform into a demon for 1d4+2 minutes. While transformed, you gain +3d10 fire and shadow damage to all spells, reduce all damage taken by 1d10, and your spells have a 20% chance to stun targets for 1d4 rounds. However, you cannot be healed by normal means while transformed.'
        ]
      },
      {
        id: 'soul-fire',
        name: 'Soul Fire',
        description: 'Consume a portion of your soul to unleash a devastating blast of hellfire.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['shadow-and-flame', 'demonic-pact'],
        icon: '💫',
        rankDescription: [
          'Sacrifice 1d10 hit points to unleash a devastating blast of hellfire, dealing 8d10 fire damage to the target and 4d10 fire damage to all enemies within 15 feet. You are healed for half the total damage dealt by this spell.'
        ]
      },
      {
        id: 'demonic-ascension',
        name: 'Demonic Ascension',
        description: 'Your mastery of demonic power reaches its peak, allowing you to ascend to a higher form.',
        maxRank: 1,
        position: { row: 6, col: 4 },
        requires: ['demonic-pact'],
        icon: '🔱',
        rankDescription: [
          'Once per day, you can ascend to a higher form for 1d4 minutes. While ascended, your Inferno does not generate drawbacks, all your spells cost 50% less mana, and you gain immunity to stun, fear, and charm effects. Additionally, your fire and shadow spells deal an extra 3d12 damage.'
        ]
      },
    ],
  }
];

export default pyrofiendTalentTrees;
