// Talent trees for the Plaguebringer class
const plaguebringerTalentTrees = [
  {
    id: 'virulent-host',
    name: 'Virulent Host',
    description: 'Focus on spreading the plague quickly and lethally, making every kill or status effect propagate further.',
    icon: '🦠',
    talents: [
      // Tier 1 (Level 10) - Viral Spread Pattern (first row with multiple entry points)
      {
        id: 'virulent-strain',
        name: 'Virulent Strain',
        description: 'Your diseases are more potent, dealing increased damage.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🦠',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your disease effects deal an additional 1d4 damage per tick.',
          'Your disease effects deal an additional 1d6 damage per tick.',
          'Your disease effects deal an additional 1d8 damage per tick.',
          'Your disease effects deal an additional 1d10 damage per tick.',
          'Your disease effects deal an additional 1d12 damage per tick.'
        ]
      },
      {
        id: 'epidemic',
        name: 'Epidemic',
        description: 'Your diseases have a chance to spread to nearby enemies.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🔄',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When your disease deals damage, roll 1d20. On a 19-20, the disease spreads to a nearby enemy within 10 feet.',
          'When your disease deals damage, roll 1d20. On an 18-20, the disease spreads to a nearby enemy within 10 feet.',
          'When your disease deals damage, roll 1d20. On a 17-20, the disease spreads to a nearby enemy within 15 feet.',
          'When your disease deals damage, roll 1d20. On a 16-20, the disease spreads to a nearby enemy within 15 feet.',
          'When your disease deals damage, roll 1d20. On a 15-20, the disease spreads to a nearby enemy within 20 feet.'
        ]
      },
      {
        id: 'festering-wounds',
        name: 'Festering Wounds',
        description: 'Your diseases cause wounds that make enemies more vulnerable.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🩸',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Enemies affected by your diseases take 1d4 additional damage from all sources.',
          'Enemies affected by your diseases take 1d6 additional damage from all sources.',
          'Enemies affected by your diseases take 1d8 additional damage from all sources.',
          'Enemies affected by your diseases take 1d10 additional damage from all sources.',
          'Enemies affected by your diseases take 1d12 additional damage from all sources.'
        ]
      },

      // Tier 2 (Level 20) - Viral Spread Pattern (branching paths)
      {
        id: 'plague-strike',
        name: 'Plague Strike',
        description: 'Strike an enemy with a plague-infested weapon, applying a disease that deals damage over time.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['virulent-strain'],
        icon: '🗡️',
        rankDescription: [
          'Strike an enemy, dealing 1d8 physical damage and applying a disease that deals 1d6 poison damage per round for 1d4 rounds.',
          'Strike an enemy, dealing 1d10 physical damage and applying a disease that deals 1d8 poison damage per round for 1d4+1 rounds.',
          'Strike an enemy, dealing 1d12 physical damage and applying a disease that deals 1d10 poison damage per round for 1d6 rounds.'
        ]
      },
      {
        id: 'contagious-affliction',
        name: 'Contagious Affliction',
        description: 'Your diseases last longer and have a greater chance to spread.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['epidemic'],
        icon: '⏱️',
        rankDescription: [
          'Your diseases last 1d4 additional rounds and have a +1 bonus to spread checks.',
          'Your diseases last 1d6 additional rounds and have a +2 bonus to spread checks.',
          'Your diseases last 1d8 additional rounds and have a +3 bonus to spread checks.'
        ]
      },
      {
        id: 'necrotic-embrace',
        name: 'Necrotic Embrace',
        description: 'Your diseases cause necrotic damage that heals you.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['festering-wounds'],
        icon: '💀',
        rankDescription: [
          'When your diseases deal damage, roll 1d4; you heal for that many hit points.',
          'When your diseases deal damage, roll 1d6; you heal for that many hit points.',
          'When your diseases deal damage, roll 1d8; you heal for that many hit points.'
        ]
      },
      {
        id: 'disease-carrier',
        name: 'Disease Carrier',
        description: 'Your body becomes a carrier for multiple diseases.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['virulent-strain'],
        icon: '🧫',
        rankDescription: [
          'You can maintain an additional disease effect and apply 1 Plague Stack when you hit with a melee attack.',
          'You can maintain two additional disease effects and apply 1 Plague Stack when you hit with a melee attack.',
          'You can maintain three additional disease effects and apply 1 Plague Stack when you hit with a melee or ranged attack.'
        ]
      },
      {
        id: 'infectious-aura',
        name: 'Infectious Aura',
        description: 'You emanate an aura of disease that affects nearby enemies.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['epidemic'],
        icon: '☣️',
        rankDescription: [
          'Enemies within 5 feet of you must roll 1d20 at the start of their turn. On a 18-20, they gain 1 Plague Stack.',
          'Enemies within 10 feet of you must roll 1d20 at the start of their turn. On a 17-20, they gain 1 Plague Stack.',
          'Enemies within 15 feet of you must roll 1d20 at the start of their turn. On a 16-20, they gain 1 Plague Stack.'
        ]
      },

      // Tier 3 (Level 30) - Viral Spread Pattern (connecting nodes)
      {
        id: 'virulent-outbreak',
        name: 'Virulent Outbreak',
        description: 'Release a burst of disease that infects all enemies around you.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['plague-strike', 'disease-carrier'],
        icon: '💥',
        rankDescription: [
          'Release a burst of disease in a 15-foot radius, dealing 2d8 poison damage and applying your active disease to all enemies caught in the burst. Enemies already affected by your diseases take an additional 1d8 damage per Plague Stack.'
        ]
      },
      {
        id: 'plague-vector',
        name: 'Plague Vector',
        description: 'Designate an enemy as a plague vector, causing your diseases to spread from them more easily.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['contagious-affliction', 'infectious-aura'],
        icon: '🎯',
        rankDescription: [
          'Designate an enemy as a plague vector for 1d4+1 rounds. Your diseases on this target automatically spread to 1d4 nearby enemies within 20 feet each round. When the vector dies, it explodes in a shower of diseased matter, applying 2 Plague Stacks to all enemies within 15 feet.'
        ]
      },
      {
        id: 'disease-evolution',
        name: 'Disease Evolution',
        description: 'Your diseases evolve as they spread, becoming more potent with each new host.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['plague-strike'],
        icon: '🧬',
        rankDescription: [
          'When your disease spreads to a new target, it deals 1d6 additional damage on that target.',
          'When your disease spreads to a new target, it deals 1d8 additional damage on that target and lasts 1 additional round.',
          'When your disease spreads to a new target, it deals 1d10 additional damage on that target, lasts 2 additional rounds, and applies 1 additional Plague Stack.'
        ]
      },
      {
        id: 'virulent-symbiosis',
        name: 'Virulent Symbiosis',
        description: 'Form a symbiotic relationship with your diseases, gaining benefits when they spread.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['necrotic-embrace'],
        icon: '🔄',
        rankDescription: [
          'When your disease spreads to a new target, gain 1d4 temporary hit points.',
          'When your disease spreads to a new target, gain 1d6 temporary hit points and +1 to attack rolls for 1 round.',
          'When your disease spreads to a new target, gain 1d8 temporary hit points, +1 to attack rolls for 1 round, and reduce all damage taken by 1d4 for 1 round.'
        ]
      },

      // Tier 4 (Level 40) - Viral Spread Pattern (expanding infection)
      {
        id: 'pandemic',
        name: 'Pandemic',
        description: 'Your diseases reach pandemic levels, affecting more enemies and dealing more damage.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['virulent-outbreak', 'disease-evolution'],
        icon: '🌍',
        rankDescription: [
          'Your diseases can now affect up to 5 additional targets and deal 1d6 additional damage per tick.',
          'Your diseases can now affect up to 7 additional targets and deal 1d8 additional damage per tick.',
          'Your diseases can now affect up to 10 additional targets and deal 1d10 additional damage per tick.'
        ]
      },
      {
        id: 'terminal-illness',
        name: 'Terminal Illness',
        description: 'Your diseases become more deadly as the target\'s health decreases.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['plague-vector', 'virulent-symbiosis'],
        icon: '📉',
        rankDescription: [
          'Your diseases deal an additional 1d6 damage to targets below half health.',
          'Your diseases deal an additional 1d10 damage to targets below half health.',
          'Your diseases deal an additional 2d8 damage to targets below half health and apply 1 additional Plague Stack each round.'
        ]
      },
      {
        id: 'plague-mastery',
        name: 'Plague Mastery',
        description: 'Your mastery of diseases allows you to control their effects with precision.',
        maxRank: 1,
        position: { row: 3, col: 2 },
        requires: ['virulent-outbreak', 'plague-vector'],
        icon: '🧙',
        rankDescription: [
          'You can choose which effects your diseases apply. For 1 AP, select one: 1) Deal 2d8 additional damage, 2) Apply 2 additional Plague Stacks, 3) Paralyze the target for 1 round (Constitution save negates), or 4) Cause the disease to spread to 1d4 additional targets within 20 feet.'
        ]
      },

      // Tier 5 (Level 50) - Viral Spread Pattern (advanced infection)
      {
        id: 'plague-consumption',
        name: 'Plague Consumption',
        description: 'Consume the diseases afflicting your enemies to empower yourself.',
        maxRank: 1,
        position: { row: 4, col: 0 },
        requires: ['pandemic'],
        icon: '🍽️',
        rankDescription: [
          'As an action, consume all Plague Stacks from enemies within 30 feet. For each stack consumed, deal 1d10 necrotic damage to the affected enemy and heal yourself for half that amount. For the next 1d4 rounds, your disease abilities cost 1 less AP to use.'
        ]
      },
      {
        id: 'plague-lord',
        name: 'Plague Lord',
        description: 'Transform into a Plague Lord, greatly enhancing your disease abilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['pandemic', 'plague-mastery', 'terminal-illness'],
        icon: '👑',
        rankDescription: [
          'Transform into a Plague Lord for 1d4+1 rounds. While transformed, your diseases deal triple damage, spread automatically to all enemies within 30 feet, and heal you for 3d8 hit points whenever they deal damage. Additionally, enemies affected by your diseases have their movement speed reduced by half and their attack rolls have disadvantage.'
        ]
      },
      {
        id: 'living-plague',
        name: 'Living Plague',
        description: 'Become a living embodiment of disease, gaining powerful disease-based abilities.',
        maxRank: 1,
        position: { row: 4, col: 4 },
        requires: ['terminal-illness'],
        icon: '☣️',
        rankDescription: [
          'For 1d6 rounds, you become a living plague. You are immune to poison and disease, and enemies within 20 feet automatically gain 1 Plague Stack at the start of their turn. Your melee attacks apply 2 Plague Stacks, and when an enemy with Plague Stacks dies, it explodes, dealing 3d8 poison damage to all creatures within 10 feet.'
        ]
      },

      // Tier 6 (Level 60) - Viral Spread Pattern (mastery tier)
      {
        id: 'plague-genesis',
        name: 'Plague Genesis',
        description: 'Create a new, more virulent strain of disease that rapidly infects and spreads.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['plague-consumption', 'plague-lord'],
        icon: '🧪',
        rankDescription: [
          'Create a new disease strain that infects a target and up to 1d6+2 enemies within 30 feet. Infected targets gain 3 Plague Stacks immediately and an additional stack each round for 1d4 rounds. This disease ignores immunity to poison and disease.'
        ]
      },
      {
        id: 'pandemic-lord',
        name: 'Pandemic Lord',
        description: 'Your mastery of plagues reaches apocalyptic levels.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['plague-lord', 'living-plague'],
        icon: '🌋',
        rankDescription: [
          'For 1d4+2 rounds, your diseases affect all enemies within line of sight, ignore immunity to poison and disease, and apply double Plague Stacks. Additionally, when an enemy with Plague Stacks dies, all other enemies within 30 feet gain 1d4 Plague Stacks.'
        ]
      },

      // Tier 7 (Level 70) - Viral Spread Pattern (capstone)
      {
        id: 'apocalyptic-plague',
        name: 'Apocalyptic Plague',
        description: 'Unleash a world-ending plague that devastates your enemies.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['plague-genesis', 'pandemic-lord'],
        icon: '☠️',
        rankDescription: [
          'Once per day, unleash an apocalyptic plague. All enemies within 100 feet immediately gain 5 Plague Stacks and must make a Constitution save. On a failure, they take 10d10 poison damage and are stunned for 1d4 rounds. On a success, they take half damage and are not stunned. For the next 1d6+2 rounds, your diseases deal triple damage, apply 3 Plague Stacks per application, and instantly kill any enemy reduced below 25% health (Constitution save negates).'
        ]
      },
    ],
  },
  {
    id: 'rotmancer',
    name: 'Rotmancer',
    description: 'Focus on maximizing damage-over-time and decay effects, enhancing DoT potency and decay auras.',
    icon: '☠️',
    talents: [
      // Tier 1 (Level 10) - Decay Spiral Pattern (first row with multiple entry points)
      {
        id: 'toxic-brew',
        name: 'Toxic Brew',
        description: 'Your poisons are more potent, dealing increased damage.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center position
        icon: '🧪',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your poison effects deal an additional 1d4 damage per tick.',
          'Your poison effects deal an additional 1d6 damage per tick.',
          'Your poison effects deal an additional 1d8 damage per tick.',
          'Your poison effects deal an additional 1d10 damage per tick.',
          'Your poison effects deal an additional 1d12 damage per tick.'
        ]
      },
      {
        id: 'venom-coating',
        name: 'Venom Coating',
        description: 'Coat your weapons with venom, causing them to apply poison with each strike.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left position
        icon: '🗡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your weapon attacks apply a poison that deals 1d4 poison damage per round for 2 rounds.',
          'Your weapon attacks apply a poison that deals 1d6 poison damage per round for 2 rounds.',
          'Your weapon attacks apply a poison that deals 1d8 poison damage per round for 3 rounds.',
          'Your weapon attacks apply a poison that deals 1d10 poison damage per round for 3 rounds.',
          'Your weapon attacks apply a poison that deals 1d12 poison damage per round for 4 rounds.'
        ]
      },
      {
        id: 'toxin-resistance',
        name: 'Toxin Resistance',
        description: 'Your constant exposure to toxins has made you resistant to their effects.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right position
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Reduce poison damage taken by 1d4.',
          'Reduce poison damage taken by 1d6.',
          'Reduce poison damage taken by 1d8.',
          'Reduce poison damage taken by 1d10.',
          'Reduce poison damage taken by 1d12.'
        ]
      },

      // Tier 2 (Level 20) - Decay Spiral Pattern (branching paths)
      {
        id: 'neurotoxin',
        name: 'Neurotoxin',
        description: 'Your poisons attack the nervous system, slowing and weakening enemies.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Upper left from center
        requires: ['toxic-brew'],
        icon: '🧠',
        rankDescription: [
          'Enemies affected by your poisons have their movement speed reduced by 10 feet and subtract 1d4 from their attack rolls.',
          'Enemies affected by your poisons have their movement speed reduced by 15 feet and subtract 1d6 from their attack rolls.',
          'Enemies affected by your poisons have their movement speed reduced by 20 feet and subtract 1d8 from their attack rolls.'
        ]
      },
      {
        id: 'deadly-injection',
        name: 'Deadly Injection',
        description: 'Inject a deadly toxin directly into an enemy, causing severe damage over time.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Upper right from center
        requires: ['toxic-brew'],
        icon: '💉',
        rankDescription: [
          'Inject a toxin that deals 2d6 poison damage immediately and 1d8 poison damage per round for 1d4 rounds.',
          'Inject a toxin that deals 2d8 poison damage immediately and 1d10 poison damage per round for 1d4+1 rounds.',
          'Inject a toxin that deals 2d10 poison damage immediately and 1d12 poison damage per round for 1d6 rounds.'
        ]
      },
      {
        id: 'toxic-absorption',
        name: 'Toxic Absorption',
        description: 'Absorb toxins to empower yourself.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Right from center
        requires: ['toxin-resistance'],
        icon: '🔄',
        rankDescription: [
          'When you would take poison damage, roll 1d20. On a 18-20, you absorb the poison, taking no damage and gaining 1d6 temporary hit points.',
          'When you would take poison damage, roll 1d20. On a 17-20, you absorb the poison, taking no damage and gaining 1d8 temporary hit points.',
          'When you would take poison damage, roll 1d20. On a 16-20, you absorb the poison, taking no damage and gaining 1d10 temporary hit points.'
        ]
      },
      {
        id: 'corrosive-touch',
        name: 'Corrosive Touch',
        description: 'Your touch corrodes armor and weapons, making enemies more vulnerable.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Left from center
        requires: ['venom-coating'],
        icon: '🧤',
        rankDescription: [
          'Your melee attacks reduce the target\'s AC by 1 for 1d4 rounds.',
          'Your melee attacks reduce the target\'s AC by 2 for 1d4 rounds.',
          'Your melee attacks reduce the target\'s AC by 3 for 1d6 rounds.'
        ]
      },
      {
        id: 'lingering-toxin',
        name: 'Lingering Toxin',
        description: 'Your poisons linger in the target\'s system, lasting longer and spreading to nearby enemies when the target dies.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Below center
        requires: ['toxic-brew'],
        icon: '⏳',
        rankDescription: [
          'Your poisons last 1d4 additional rounds. When a poisoned target dies, roll 1d20. On an 18-20, the poison spreads to a nearby enemy.',
          'Your poisons last 1d6 additional rounds. When a poisoned target dies, roll 1d20. On a 16-20, the poison spreads to a nearby enemy.',
          'Your poisons last 1d8 additional rounds. When a poisoned target dies, roll 1d20. On a 14-20, the poison spreads to a nearby enemy.'
        ]
      },

      // Tier 3 (Level 30) - Decay Spiral Pattern (connecting nodes)
      {
        id: 'toxic-cloud',
        name: 'Toxic Cloud',
        description: 'Create a cloud of toxic gas that poisons enemies who enter or remain within it.',
        maxRank: 1,
        position: { row: 2, col: 1 }, // Left spiral
        requires: ['neurotoxin'],
        icon: '☁️',
        rankDescription: [
          'Create a 15-foot radius cloud of toxic gas that lasts for 1d4+1 rounds. Enemies who enter or start their turn in the cloud take 2d8 poison damage and are poisoned for 2 rounds. The poison applied reduces the target\'s AC by 1 and attack rolls by 1d4.'
        ]
      },
      {
        id: 'venomous-weapons',
        name: 'Venomous Weapons',
        description: 'Your weapons drip with multiple venoms, applying different toxic effects.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Right spiral
        requires: ['deadly-injection'],
        icon: '⚔️',
        rankDescription: [
          'Your weapon attacks apply two different poisons. Roll 1d6 to determine the second poison effect: 1-2: target is slowed, 3-4: target takes 1d8 additional poison damage, 5-6: target has disadvantage on saving throws. Both poisons last for the full duration independently.'
        ]
      },
      {
        id: 'necrotic-conversion',
        name: 'Necrotic Conversion',
        description: 'Your poisons partially convert to necrotic damage, bypassing poison resistance.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Far left spiral
        requires: ['venom-coating'],
        icon: '💀',
        rankDescription: [
          '25% of your poison damage is converted to necrotic damage, which ignores poison resistance.',
          '50% of your poison damage is converted to necrotic damage, which ignores poison resistance.',
          '75% of your poison damage is converted to necrotic damage, which ignores poison resistance.'
        ]
      },
      {
        id: 'toxin-mastery',
        name: 'Toxin Mastery',
        description: 'Your mastery of toxins allows you to create more potent and specialized poisons.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Far right spiral
        requires: ['toxin-resistance'],
        icon: '🧪',
        rankDescription: [
          'You can create specialized poisons that target specific enemy types, dealing an additional 1d8 damage to that type.',
          'You can create specialized poisons that target specific enemy types, dealing an additional 1d10 damage to that type and reducing their saving throws by 2.',
          'You can create specialized poisons that target specific enemy types, dealing an additional 1d12 damage to that type, reducing their saving throws by 3, and slowing them by 10 feet.'
        ]
      },

      // Tier 4 (Level 40) - Decay Spiral Pattern (expanding decay)
      {
        id: 'virulent-toxins',
        name: 'Virulent Toxins',
        description: 'Your toxins become more virulent, dealing more damage and being harder to resist.',
        maxRank: 3,
        position: { row: 4, col: 1 }, // Continuing spiral
        requires: ['toxic-cloud'],
        icon: '💀',
        rankDescription: [
          'Add 1d6 to poison damage rolls against resistant targets and targets have disadvantage on saving throws against your poisons.',
          'Add 1d8 to poison damage rolls against resistant targets and targets have disadvantage on saving throws against your poisons.',
          'Add 1d10 to poison damage rolls against resistant targets and targets have disadvantage on saving throws against your poisons.'
        ]
      },
      {
        id: 'toxic-buildup',
        name: 'Toxic Buildup',
        description: 'Your poisons build up in the target\'s system, becoming more deadly over time.',
        maxRank: 3,
        position: { row: 4, col: 3 }, // Continuing spiral
        requires: ['venomous-weapons'],
        icon: '📈',
        rankDescription: [
          'Each time your poison deals damage to a target, it deals an additional 1d4 damage, stacking up to 3 times.',
          'Each time your poison deals damage to a target, it deals an additional 1d6 damage, stacking up to 4 times.',
          'Each time your poison deals damage to a target, it deals an additional 1d8 damage, stacking up to 5 times.'
        ]
      },
      {
        id: 'poison-nova',
        name: 'Poison Nova',
        description: 'Release a nova of poison that affects all enemies around you.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Center of spiral
        requires: ['lingering-toxin'],
        icon: '💥',
        rankDescription: [
          'Release a nova of poison in a 20-foot radius, dealing 4d8 poison damage to all enemies caught in the blast and applying 2 Plague Stacks. Enemies already affected by your poisons take an additional 2d8 damage and gain 1 additional Plague Stack.'
        ]
      },

      // Tier 5 (Level 50) - Decay Spiral Pattern (advanced decay)
      {
        id: 'flesh-rot',
        name: 'Flesh Rot',
        description: 'Your poisons cause the target\'s flesh to rot, reducing their maximum hit points.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Continuing spiral
        requires: ['virulent-toxins'],
        icon: '🥩',
        rankDescription: [
          'Your poisons reduce the target\'s maximum hit points by 1d10 per Plague Stack for the duration of the poison. When the poison ends, the target must make a Constitution save. On a failure, half of the hit point reduction becomes permanent until they receive magical healing.'
        ]
      },
      {
        id: 'master-toxicologist',
        name: 'Master Toxicologist',
        description: 'Become a master of toxins, creating and applying the deadliest poisons known.',
        maxRank: 1,
        position: { row: 5, col: 2 }, // Center of spiral
        requires: ['poison-nova'],
        icon: '👑',
        rankDescription: [
          'For 1d4+1 rounds, your poisons deal triple damage, ignore poison immunity, and apply 3 different toxic effects simultaneously. Additionally, when you apply poison to a target, all enemies within 10 feet of the target are also poisoned with the same effects.'
        ]
      },
      {
        id: 'toxic-explosion',
        name: 'Toxic Explosion',
        description: 'Cause a poisoned enemy to violently explode, spreading toxins to nearby enemies.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Continuing spiral
        requires: ['toxic-buildup'],
        icon: '💣',
        rankDescription: [
          'Target a poisoned enemy within 30 feet. The target explodes, taking 6d10 poison damage (Constitution save for half) and spreading your most potent poison to all enemies within 15 feet. If the target dies from this damage, the spread poison deals double damage for its duration.'
        ]
      },

      // Tier 6 (Level 60) - Decay Spiral Pattern (mastery tier)
      {
        id: 'plague-reactor',
        name: 'Plague Reactor',
        description: 'Create a plague reactor that periodically releases waves of toxins.',
        maxRank: 1,
        position: { row: 6, col: 1 }, // Continuing spiral
        requires: ['flesh-rot'],
        icon: '☢️',
        rankDescription: [
          'Create a plague reactor at a point within 60 feet that lasts for 1d4+2 rounds. At the start of each of your turns, the reactor pulses, dealing 3d8 poison damage to all enemies within 20 feet, applying 2 Plague Stacks, and reducing their maximum hit points by 1d8 per Plague Stack for 1 hour.'
        ]
      },
      {
        id: 'toxin-lord',
        name: 'Toxin Lord',
        description: 'Ascend to the pinnacle of toxin mastery, becoming a lord of poisons.',
        maxRank: 1,
        position: { row: 6, col: 3 }, // Continuing spiral
        requires: ['master-toxicologist', 'toxic-explosion'],
        icon: '🧙',
        rankDescription: [
          'For 1d6 rounds, you become a Toxin Lord. Your poisons ignore all immunities and resistances, deal triple damage, and apply 3 Plague Stacks per application. Additionally, whenever a poisoned enemy takes damage from any source, they take additional poison damage equal to your Intelligence modifier + 1d10.'
        ]
      },

      // Tier 7 (Level 70) - Decay Spiral Pattern (capstone)
      {
        id: 'death-bloom',
        name: 'Death Bloom',
        description: 'Unleash a cataclysmic bloom of death and decay that devastates your enemies.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center of final spiral
        requires: ['plague-reactor', 'toxin-lord'],
        icon: '🌺',
        rankDescription: [
          'Once per day, unleash a death bloom that affects all enemies within 100 feet. Each target takes 8d10 poison damage (Constitution save for half) and gains 5 Plague Stacks. For the next 1d6+2 rounds, all your poison abilities cost no mana, have their range doubled, and automatically apply maximum Plague Stacks. Additionally, when a poisoned enemy dies, they explode in a 15-foot radius, dealing 4d10 poison damage and applying 3 Plague Stacks to all creatures caught in the blast.'
        ]
      },
    ],
  },
  {
    id: 'pathogen-herald',
    name: 'Pathogen Herald',
    description: 'Focus on becoming more resilient and unpredictable, embracing the sickness and turning afflictions into defensive advantages.',
    icon: '🧬',
    talents: [
      // Tier 1 (Level 10) - Mutation Web Pattern (first row with multiple entry points)
      {
        id: 'adaptive-flesh',
        name: 'Adaptive Flesh',
        description: 'Your flesh adapts to damage, becoming more resistant over time.',
        maxRank: 5,
        position: { row: 0, col: 1 }, // Left position
        icon: '🧫',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When you take damage, reduce future damage of that type by 1d4 for 1d4 rounds.',
          'When you take damage, reduce future damage of that type by 1d6 for 1d4 rounds.',
          'When you take damage, reduce future damage of that type by 1d8 for 1d6 rounds.',
          'When you take damage, reduce future damage of that type by 1d10 for 1d6 rounds.',
          'When you take damage, reduce future damage of that type by 1d12 for 1d8 rounds.'
        ]
      },
      {
        id: 'mutagen-brewing',
        name: 'Mutagen Brewing',
        description: 'Brew mutagens that temporarily enhance your abilities.',
        maxRank: 5,
        position: { row: 0, col: 3 }, // Center position
        icon: '🧪',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Brew a mutagen that grants +1d4 to one ability score for 1d4 rounds.',
          'Brew a mutagen that grants +1d6 to one ability score for 1d4 rounds.',
          'Brew a mutagen that grants +1d8 to one ability score for 1d6 rounds.',
          'Brew a mutagen that grants +1d10 to one ability score for 1d6 rounds.',
          'Brew a mutagen that grants +1d12 to one ability score for 1d8 rounds.'
        ]
      },
      {
        id: 'unstable-mutation',
        name: 'Unstable Mutation',
        description: 'Your body randomly mutates in combat, providing various benefits.',
        maxRank: 5,
        position: { row: 0, col: 5 }, // Right position
        icon: '🔄',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'At the start of your turn, roll 1d20. On a 19-20, gain a random mutation for 1d4 rounds.',
          'At the start of your turn, roll 1d20. On an 18-20, gain a random mutation for 1d4 rounds.',
          'At the start of your turn, roll 1d20. On a 17-20, gain a random mutation for 1d6 rounds.',
          'At the start of your turn, roll 1d20. On a 16-20, gain a random mutation for 1d6 rounds.',
          'At the start of your turn, roll 1d20. On a 15-20, gain a random mutation for 1d8 rounds.'
        ]
      },

      // Tier 2 (Level 20) - Mutation Web Pattern (branching paths)
      {
        id: 'chitinous-hide',
        name: 'Chitinous Hide',
        description: 'Mutate your skin to form a tough, chitinous hide that protects against damage.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Web node
        requires: ['adaptive-flesh'],
        icon: '🛡️',
        rankDescription: [
          'Your AC increases by 2 and you reduce slashing damage taken by 1d6.',
          'Your AC increases by 3 and you reduce slashing and piercing damage taken by 1d6.',
          'Your AC increases by 4 and you reduce slashing, piercing, and bludgeoning damage taken by 1d8.'
        ]
      },
      {
        id: 'mutagenic-strength',
        name: 'Mutagenic Strength',
        description: 'Mutate your muscles to gain incredible strength.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Web node
        requires: ['mutagen-brewing'],
        icon: '💪',
        rankDescription: [
          'Increase your Strength by 1d6 for 1d4 rounds. While active, your melee attacks deal an additional 1d6 damage.',
          'Increase your Strength by 1d8 for 1d6 rounds. While active, your melee attacks deal an additional 1d8 damage.',
          'Increase your Strength by 1d10 for 1d8 rounds. While active, your melee attacks deal an additional 1d10 damage.'
        ]
      },
      {
        id: 'aberrant-form',
        name: 'Aberrant Form',
        description: 'Your body becomes increasingly aberrant, allowing you to manifest strange abilities.',
        maxRank: 3,
        position: { row: 1, col: 6 }, // Web node
        requires: ['unstable-mutation'],
        icon: '👾',
        rankDescription: [
          'You can manifest 1d4 tentacles for 1d4 rounds, allowing you to make an additional attack each round.',
          'You can manifest 1d4+1 tentacles for 1d6 rounds, allowing you to make an additional attack each round.',
          'You can manifest 1d6+1 tentacles for 1d8 rounds, allowing you to make an additional attack each round.'
        ]
      },
      {
        id: 'pathogenic-resilience',
        name: 'Pathogenic Resilience',
        description: 'Your body becomes more resilient to disease and poison, turning them into strength.',
        maxRank: 3,
        position: { row: 2, col: 1 }, // Web node
        requires: ['adaptive-flesh'],
        icon: '🦠',
        rankDescription: [
          'Gain advantage on saves against disease and poison. When you successfully save, gain 1d4 temporary hit points.',
          'Gain advantage on saves against disease and poison. When you successfully save, gain 1d6 temporary hit points and +1 to attack rolls for 1 round.',
          'Gain advantage on saves against disease and poison. When you successfully save, gain 1d8 temporary hit points, +1 to attack rolls for 1 round, and deal 1d6 poison damage to adjacent enemies.'
        ]
      },
      {
        id: 'adaptive-strain',
        name: 'Adaptive Strain',
        description: 'Your diseases adapt to their hosts, changing their effects unpredictably.',
        maxRank: 3,
        position: { row: 2, col: 5 }, // Web node
        requires: ['mutagen-brewing'],
        icon: '🔀',
        rankDescription: [
          'When you apply a disease, roll 1d6 to determine an additional effect: 1-2: slow target, 3-4: reduce target\'s AC by 1, 5-6: target has disadvantage on their next attack.',
          'When you apply a disease, roll 1d6 to determine an additional effect: 1-2: slow target, 3-4: reduce target\'s AC by 2, 5-6: target has disadvantage on attacks for 1d4 rounds.',
          'When you apply a disease, roll 1d8 to determine an additional effect: 1-2: slow target, 3-4: reduce target\'s AC by 3, 5-6: target has disadvantage on attacks for 1d6 rounds, 7-8: target cannot use reactions.'
        ]
      },

      // Tier 3 (Level 30) - Mutation Web Pattern (connecting nodes)
      {
        id: 'adaptive-evolution',
        name: 'Adaptive Evolution',
        description: 'Your mutations evolve to better suit your needs.',
        maxRank: 1,
        position: { row: 3, col: 2 }, // Center web node
        requires: ['pathogenic-resilience'],
        icon: '🧬',
        rankDescription: [
          'When you activate a mutation, roll 1d6. On a 5-6, the mutation is enhanced, doubling its effectiveness and duration. Additionally, you can choose to evolve one aspect of your mutation to better suit your current situation.'
        ]
      },
      {
        id: 'contagious-mutation',
        name: 'Contagious Mutation',
        description: 'Your mutations can spread to others, either helping allies or harming enemies.',
        maxRank: 1,
        position: { row: 3, col: 4 }, // Web node
        requires: ['adaptive-strain'],
        icon: '🔄',
        rankDescription: [
          'You can spread your mutations to allies (beneficial) or enemies (harmful) within 30 feet. Allies gain the same benefits you do, while enemies suffer 2d8 poison damage and a random debilitating mutation for 1d4 rounds. Affected enemies must make a Constitution save or spread the mutation to adjacent enemies.'
        ]
      },
      {
        id: 'evolutionary-leap',
        name: 'Evolutionary Leap',
        description: 'Your body can rapidly evolve to adapt to extreme situations.',
        maxRank: 3,
        position: { row: 2, col: 2 }, // Web node
        requires: ['chitinous-hide'],
        icon: '🦎',
        rankDescription: [
          'When you drop below 50% health, roll 1d20. On a 18-20, your body rapidly evolves, granting you 2d6 temporary hit points and resistance to one damage type of your choice for 1d4 rounds.',
          'When you drop below 50% health, roll 1d20. On a 16-20, your body rapidly evolves, granting you 3d6 temporary hit points and resistance to two damage types of your choice for 1d6 rounds.',
          'When you drop below 50% health, roll 1d20. On a 14-20, your body rapidly evolves, granting you 4d6 temporary hit points and resistance to three damage types of your choice for 1d8 rounds.'
        ]
      },
      {
        id: 'viral-weaponry',
        name: 'Viral Weaponry',
        description: 'Your body can form weapons infused with disease and mutation.',
        maxRank: 3,
        position: { row: 2, col: 4 }, // Web node
        requires: ['aberrant-form'],
        icon: '🦠',
        rankDescription: [
          'Form a weapon from your body for 1d4 rounds. The weapon deals 1d8+STR damage and applies 1 Plague Stack on hit.',
          'Form a weapon from your body for 1d6 rounds. The weapon deals 1d10+STR damage and applies 1 Plague Stack on hit. On a critical hit, apply 2 Plague Stacks.',
          'Form a weapon from your body for 1d8 rounds. The weapon deals 1d12+STR damage and applies 2 Plague Stacks on hit. On a critical hit, apply 3 Plague Stacks and the target must make a Constitution save or be stunned for 1 round.'
        ]
      },

      // Tier 4 (Level 40) - Mutation Web Pattern (advanced mutations)
      {
        id: 'master-mutator',
        name: 'Master Mutator',
        description: 'Your control over mutation has reached mastery levels.',
        maxRank: 3,
        position: { row: 4, col: 1 }, // Web node
        requires: ['adaptive-evolution'],
        icon: '🧙',
        rankDescription: [
          'You can maintain up to 2 different mutations simultaneously without negative side effects. Additionally, you can choose which random mutation you gain from Unstable Mutation.',
          'You can maintain up to 3 different mutations simultaneously without negative side effects. Additionally, you can choose which random mutation you gain from Unstable Mutation and increase its duration by 1d4 rounds.',
          'You can maintain up to 4 different mutations simultaneously without negative side effects. Additionally, you can choose which random mutation you gain from Unstable Mutation, increase its duration by 1d6 rounds, and enhance its effects.'
        ]
      },
      {
        id: 'horrific-transformation',
        name: 'Horrific Transformation',
        description: 'Transform into a horrific mutated form that terrifies enemies and grants powerful abilities.',
        maxRank: 3,
        position: { row: 4, col: 5 }, // Web node
        requires: ['contagious-mutation', 'viral-weaponry'],
        icon: '😱',
        rankDescription: [
          'Transform for 1d4 rounds. While transformed, you gain +2d6 to Strength and Constitution, and enemies who see you must make a Wisdom save or be frightened for 1d4 rounds.',
          'Transform for 1d6 rounds. While transformed, you gain +2d8 to Strength and Constitution, and enemies who see you must make a Wisdom save or be frightened for 1d6 rounds.',
          'Transform for 1d8 rounds. While transformed, you gain +2d10 to Strength and Constitution, and enemies who see you must make a Wisdom save with disadvantage or be frightened for 1d8 rounds.'
        ]
      },
      {
        id: 'plague-symbiosis',
        name: 'Plague Symbiosis',
        description: 'Form a symbiotic relationship with your diseases, gaining strength from infected enemies.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Web node
        requires: ['adaptive-evolution', 'contagious-mutation'],
        icon: '🔄',
        rankDescription: [
          'For each enemy affected by your diseases, gain +1 to attack and damage rolls (maximum +5). When an infected enemy dies, gain 1d8 temporary hit points and +1d6 to your next damage roll.'
        ]
      },

      // Tier 5 (Level 50) - Mutation Web Pattern (mastery mutations)
      {
        id: 'mutation-mastery',
        name: 'Mutation Mastery',
        description: 'Your mastery of mutation allows you to control your transformations with precision.',
        maxRank: 1,
        position: { row: 5, col: 0 }, // Web node
        requires: ['master-mutator'],
        icon: '🧠',
        rankDescription: [
          'You can activate any mutation you\'ve learned for 1 AP. Additionally, you can combine aspects of different mutations to create a custom mutation with two benefits of your choice.'
        ]
      },
      {
        id: 'perfect-mutation',
        name: 'Perfect Mutation',
        description: 'Achieve the perfect mutation, transcending the limitations of your form.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Center web node
        requires: ['plague-symbiosis'],
        icon: '🌟',
        rankDescription: [
          'For 1d4+1 rounds, you achieve perfect mutation. Gain +4 to all ability scores, immunity to poison and disease, resistance to all damage types, and the ability to use any mutation you\'ve learned at will without negative side effects. Additionally, your attacks deal an extra 2d10 damage and ignore resistance.'
        ]
      },
      {
        id: 'plague-lord-form',
        name: 'Plague Lord Form',
        description: 'Transform into a Plague Lord, gaining tremendous power over disease and mutation.',
        maxRank: 1,
        position: { row: 5, col: 6 }, // Web node
        requires: ['horrific-transformation'],
        icon: '👑',
        rankDescription: [
          'Transform into a Plague Lord for 1d6 rounds. While transformed, your diseases deal triple damage, apply 2 additional Plague Stacks, and spread automatically to enemies within 15 feet of infected targets. Additionally, you gain immunity to poison and disease, and enemies within 30 feet must make a Constitution save at the start of their turn or gain 1 Plague Stack.'
        ]
      },

      // Tier 6 (Level 60) - Mutation Web Pattern (transcendent mutations)
      {
        id: 'evolutionary-perfection',
        name: 'Evolutionary Perfection',
        description: 'Your mutations have reached a state of perfection, allowing for incredible adaptability.',
        maxRank: 1,
        position: { row: 6, col: 1 }, // Web node
        requires: ['mutation-mastery', 'perfect-mutation'],
        icon: '🧬',
        rankDescription: [
          'Your body can instantly adapt to any situation. Once per combat, when you would take damage, you can react by evolving an immunity to that damage type for 1d6 rounds. Additionally, you can maintain all mutations simultaneously without negative side effects, and all mutations last twice as long.'
        ]
      },
      {
        id: 'living-plague',
        name: 'Living Plague',
        description: 'Become a living embodiment of disease and mutation, a walking plague that infects all around you.',
        maxRank: 1,
        position: { row: 6, col: 5 }, // Web node
        requires: ['perfect-mutation', 'plague-lord-form'],
        icon: '☣️',
        rankDescription: [
          'For 1d6+2 rounds, you become a living plague. Enemies within 30 feet automatically gain 2 Plague Stacks at the start of their turn. Your attacks apply 3 Plague Stacks, and when an infected enemy dies, they explode in a shower of diseased matter, dealing 4d10 poison damage to all creatures within 15 feet and applying 2 Plague Stacks.'
        ]
      },

      // Tier 7 (Level 70) - Mutation Web Pattern (capstone)
      {
        id: 'transcendent-evolution',
        name: 'Transcendent Evolution',
        description: 'Achieve a state of transcendent evolution, becoming a being of pure adaptive potential.',
        maxRank: 1,
        position: { row: 6, col: 3 }, // Center web node (capstone)
        requires: ['evolutionary-perfection', 'living-plague'],
        icon: '🌌',
        rankDescription: [
          'Once per day, achieve transcendent evolution for 1d6+2 rounds. During this time, you are immune to all damage types, your diseases ignore all immunities and resistances, and you can use any mutation or transformation for 1 AP less (minimum 0). At the start of your turn, all enemies within 60 feet must make a Constitution save or gain 3 Plague Stacks and take 6d10 poison damage. Additionally, you can teleport up to 60 feet for 1 AP by dissolving into a mist of plague and reforming elsewhere.'
        ]
      },
    ],
  }
];

export default plaguebringerTalentTrees;
