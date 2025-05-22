// Talent trees for the Warden class
const wardenTalentTrees = [
  {
    id: 'wall-smith',
    name: 'Wall-Smith',
    description: 'Focus on barrier optimization, creating stronger and more efficient wards.',
    icon: '🧱',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'masons-touch',
        name: 'Mason\'s Touch',
        description: 'Your Aegis Line is more efficient.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🧱',
        rankDescription: [
          'Roll 1d6 when creating Aegis Line. On a 6, it costs 1 BM instead of 2 BM.',
          'Roll 1d6 when creating Aegis Line. On a 5-6, it costs 1 BM instead of 2 BM.',
          'Roll 1d6 when creating Aegis Line. On a 4-6, it costs 1 BM instead of 2 BM.',
          'Roll 1d6 when creating Aegis Line. On a 3-6, it costs 1 BM instead of 2 BM.',
          'Aegis Line costs 1 BM instead of 2 BM and generates +1 BM on creation.'
        ]
      },
      {
        id: 'reinforced-core',
        name: 'Reinforced Core',
        description: 'Your wards are more durable.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🔩',
        rankDescription: [
          'All wards gain +1d4 HP.',
          'All wards gain +1d6 HP.',
          'All wards gain +1d8 HP.',
          'All wards gain +1d10 HP.',
          'All wards gain +2d6 HP.'
        ]
      },
      {
        id: 'tactical-span',
        name: 'Tactical Span',
        description: 'Your Ward Swap is more efficient.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '↔️',
        rankDescription: [
          'Roll 1d6 when using Ward Swap. On a 6, refund 1 AP.',
          'Roll 1d6 when using Ward Swap. On a 5-6, refund 1 AP.',
          'Roll 1d6 when using Ward Swap. On a 4-6, refund 1 AP.',
          'Roll 1d6 when using Ward Swap. On a 3-6, refund 1 AP.',
          'Ward Swap refunds 1 AP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'barrier-efficiency',
        name: 'Barrier Efficiency',
        description: 'Your wards cost less Bulwark Meter to create.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['masons-touch', 'reinforced-core'],
        icon: '⚡',
        rankDescription: [
          'Roll 1d4 when creating a ward. On a 4, reduce BM cost by 1.',
          'Roll 1d4 when creating a ward. On a 3-4, reduce BM cost by 1.',
          'All ward abilities cost 1 less BM to create.'
        ]
      },
      {
        id: 'expanded-barriers',
        name: 'Expanded Barriers',
        description: 'Your wards cover a larger area.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['reinforced-core', 'tactical-span'],
        icon: '📏',
        rankDescription: [
          'Line wards are 5 ft longer; zone wards have 2 ft larger radius.',
          'Line wards are 10 ft longer; zone wards have 4 ft larger radius.',
          'Line wards are 15 ft longer; zone wards have 6 ft larger radius.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'ward-resonance',
        name: 'Ward Resonance',
        description: 'Your wards resonate with each other, providing additional benefits.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['barrier-efficiency'],
        icon: '🔊',
        rankDescription: [
          'When you have 2+ active wards, gain +1 BM every other turn.',
          'When you have 2+ active wards, gain +1 BM every turn.',
          'When you have 2+ active wards, gain +2 BM every turn.'
        ]
      },
      {
        id: 'bulwark-efficiency',
        name: 'Bulwark Efficiency',
        description: 'Your Bulwark Meter is more efficient.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['barrier-efficiency', 'expanded-barriers'],
        icon: '📊',
        rankDescription: [
          'Your maximum Bulwark Meter increases to 14.',
          'Your maximum Bulwark Meter increases to 16.',
          'Your maximum Bulwark Meter increases to 18.'
        ]
      },
      {
        id: 'ward-specialist',
        name: 'Ward Specialist',
        description: 'You can maintain more wards simultaneously.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['expanded-barriers'],
        icon: '🧠',
        rankDescription: [
          'You can maintain 1 additional ward simultaneously.',
          'You can maintain 2 additional wards simultaneously.',
          'You can maintain 3 additional wards simultaneously.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'barrier-mastery',
        name: 'Barrier Mastery',
        description: 'Your mastery of barriers enhances all your ward abilities.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['ward-resonance', 'bulwark-efficiency'],
        icon: '🏆',
        rankDescription: [
          'Ward HP increases by 1d6 and wards can be created as a bonus action once per combat.',
          'Ward HP increases by 2d6 and wards can be created as a bonus action twice per combat.',
          'Ward HP increases by 3d6 and wards can be created as a bonus action three times per combat.'
        ]
      },
      {
        id: 'eternal-architect',
        name: 'Eternal Architect',
        description: 'Your wards last longer and are more resilient.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['bulwark-efficiency', 'ward-specialist'],
        icon: '⏳',
        rankDescription: [
          'Your wards last 1d4 additional rounds and roll 1d6 to resist dispelling (6 resists).',
          'Your wards last 2d4 additional rounds and roll 1d6 to resist dispelling (5-6 resists).',
          'Your wards last 3d4 additional rounds and roll 1d6 to resist dispelling (4-6 resists).'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'living-fortress',
        name: 'Living Fortress',
        description: 'Your Eternal Redoubt is more powerful.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['barrier-mastery', 'eternal-architect'],
        icon: '🏰',
        rankDescription: [
          'Eternal Redoubt duration +1 turn and no Exhaustion. Additionally, allies inside gain +2 to all saving throws.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'grand-architect',
        name: 'Grand Architect',
        description: 'Your mastery of barrier creation reaches new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['living-fortress'],
        icon: '🏗️',
        rankDescription: [
          'You can create two wards with a single action (3 AP), and your wards have double the normal hit points. Additionally, when a ward is destroyed, you regain 1d6 Bulwark Meter.'
        ]
      },
      {
        id: 'impenetrable-bastion',
        name: 'Impenetrable Bastion',
        description: 'Your wards become nearly indestructible.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['living-fortress'],
        icon: '🧱',
        rankDescription: [
          'Your wards gain resistance to all damage types and immunity to one damage type of your choice (chosen when the ward is created). Additionally, when a creature attempts to cross one of your wards, they must make a Strength saving throw or be unable to cross.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-fortification',
        name: 'Avatar of Fortification',
        description: 'Transform into a living embodiment of perfect protection.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['grand-architect', 'impenetrable-bastion'],
        icon: '🏛️',
        rankDescription: [
          'Once per day, transform into an Avatar of Fortification for 1d6+2 rounds. During this time, you become a living fortress, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to create wards without spending Bulwark Meter. Your wards are indestructible while in this form, and you can create a massive fortification as an action (3 AP) that covers a 40-foot radius area. This fortification provides total cover to all allies inside, grants them regeneration (2d8 hit points at the start of their turn), and makes them immune to all area-of-effect spells that originate from outside the fortification.'
        ]
      },
    ],
  },
  {
    id: 'guardians-vow',
    name: 'Guardian\'s Vow',
    description: 'Focus on protection and reaction, defending allies from harm.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'fast-interpose',
        name: 'Fast Interpose',
        description: 'Your Deflecting Bulwark is more effective.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⚔️',
        rankDescription: [
          'Deflecting Bulwark range increased to 18 ft.',
          'Deflecting Bulwark range increased to 21 ft.',
          'Deflecting Bulwark range increased to 24 ft.',
          'Deflecting Bulwark range increased to 27 ft.',
          'Deflecting Bulwark range increased to 30 ft and reduces damage by extra Proficiency bonus.'
        ]
      },
      {
        id: 'last-bastion',
        name: 'Last Bastion',
        description: 'You can rush to protect low-health allies.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🏃',
        rankDescription: [
          'When ally under 25% HP in 15 ft, 20% chance for free Guardian\'s Rush toward them.',
          'When ally under 25% HP in 15 ft, 40% chance for free Guardian\'s Rush toward them.',
          'When ally under 25% HP in 15 ft, 60% chance for free Guardian\'s Rush toward them.',
          'When ally under 25% HP in 15 ft, 80% chance for free Guardian\'s Rush toward them.',
          'When ally under 25% HP in 15 ft, free Guardian\'s Rush toward them.'
        ]
      },
      {
        id: 'ward-bond',
        name: 'Ward Bond',
        description: 'You share damage with your anchored ward.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🔗',
        rankDescription: [
          'While anchored, roll 1d10 when taking damage. On a 10, half the damage goes to ward HP instead.',
          'While anchored, roll 1d10 when taking damage. On a 9-10, half the damage goes to ward HP instead.',
          'While anchored, roll 1d10 when taking damage. On a 8-10, half the damage goes to ward HP instead.',
          'While anchored, roll 1d10 when taking damage. On a 7-10, half the damage goes to ward HP instead.',
          'While anchored, half of all damage you take is transferred to ward HP instead.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'protective-instinct',
        name: 'Protective Instinct',
        description: 'Your protective abilities are enhanced.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['fast-interpose', 'last-bastion'],
        icon: '🦮',
        rankDescription: [
          'Guardian\'s Mark lasts 1 additional round.',
          'Guardian\'s Mark lasts 2 additional rounds.',
          'Guardian\'s Mark lasts 3 additional rounds and grants +1 AC to the marked target.'
        ]
      },
      {
        id: 'reactive-defense',
        name: 'Reactive Defense',
        description: 'Your reactions are faster and more effective.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['last-bastion', 'ward-bond'],
        icon: '⚡',
        rankDescription: [
          'Roll 1d4 when using a reaction ability. On a 4, reduce BM cost by 1.',
          'Roll 1d4 when using a reaction ability. On a 3-4, reduce BM cost by 1.',
          'Reaction abilities cost 1 less BM and can be used one additional time per round.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'guardian-aura',
        name: 'Guardian Aura',
        description: 'Your presence provides protection to nearby allies.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['protective-instinct'],
        icon: '🔆',
        rankDescription: [
          'Allies within 10 ft gain +1 to saving throws.',
          'Allies within 15 ft gain +2 to saving throws.',
          'Allies within 20 ft gain +3 to saving throws and +1 AC.'
        ]
      },
      {
        id: 'bulwark-champion',
        name: 'Bulwark Champion',
        description: 'Your Bulwark Meter generates more quickly.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['protective-instinct', 'reactive-defense'],
        icon: '📈',
        rankDescription: [
          'Gain +1 BM when you take damage from an attack directed at an ally.',
          'Gain +2 BM when you take damage from an attack directed at an ally.',
          'Gain +3 BM when you take damage from an attack directed at an ally and +1 BM when you use a reaction ability.'
        ]
      },
      {
        id: 'anchored-guardian',
        name: 'Anchored Guardian',
        description: 'Your Anchor Link ability is enhanced.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['reactive-defense'],
        icon: '⚓',
        rankDescription: [
          'Anchor Link costs 0 BM when used on a ward with less than 50% HP.',
          'Anchor Link costs 0 BM when used on a ward with less than 75% HP.',
          'Anchor Link costs 0 BM and grants you +2 AC for 1 round after teleporting.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'guardian-mastery',
        name: 'Guardian Mastery',
        description: 'Your guardian abilities are enhanced.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['guardian-aura', 'bulwark-champion'],
        icon: '🛡️',
        rankDescription: [
          'Guardian\'s Rush grants +1d8 temporary HP to allies passed through.',
          'Guardian\'s Rush grants +2d8 temporary HP to allies passed through.',
          'Guardian\'s Rush grants +3d8 temporary HP to allies passed through and grants you +2 AC for 1 round.'
        ]
      },
      {
        id: 'warden-bond',
        name: 'Warden Bond',
        description: 'Your bond with your wards is strengthened.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['bulwark-champion', 'anchored-guardian'],
        icon: '🤝',
        rankDescription: [
          'When a ward is destroyed, gain 1d4 temporary HP.',
          'When a ward is destroyed, gain 1d8 temporary HP.',
          'When a ward is destroyed, gain 1d12 temporary HP and +1 BM.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'titans-guard',
        name: 'Titan\'s Guard',
        description: 'Your Guardian\'s Rush creates a protective barrier.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['guardian-mastery', 'warden-bond'],
        icon: '🏛️',
        rankDescription: [
          'Guardian\'s Rush triggers a free Aegis Line at ally\'s location (no cost). Additionally, allies protected by your Guardian\'s Mark gain resistance to one damage type of your choice.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'guardian-paragon',
        name: 'Guardian Paragon',
        description: 'Your protective abilities reach new heights.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['titans-guard'],
        icon: '🛡️',
        rankDescription: [
          'Your Deflecting Bulwark can now be used on up to three allies simultaneously with a single reaction (1 AP). Additionally, when you use Guardian\'s Rush, you gain immunity to opportunity attacks and can move through enemy spaces.'
        ]
      },
      {
        id: 'unbreakable-bond',
        name: 'Unbreakable Bond',
        description: 'Your bond with your allies becomes unbreakable.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['titans-guard'],
        icon: '🔗',
        rankDescription: [
          'Allies affected by your Guardian\'s Mark gain +2 AC, advantage on saving throws, and immunity to the frightened condition. Additionally, when an ally affected by your Guardian\'s Mark would be reduced to 0 hit points, you can use your reaction (1 AP) to have them remain at 1 hit point instead, and you take half the damage that would have reduced them to 0.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-protection',
        name: 'Avatar of Protection',
        description: 'Transform into a living embodiment of perfect guardianship.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['guardian-paragon', 'unbreakable-bond'],
        icon: '🛡️',
        rankDescription: [
          'Once per day, transform into an Avatar of Protection for 1d6+2 rounds. During this time, you become a perfect guardian, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to teleport up to 60 feet as a bonus action (1 AP) to any ally in danger. You can use Deflecting Bulwark without spending AP, and it redirects all damage to you instead of just reducing it. Additionally, you emit an aura of protection in a 30-foot radius that grants all allies within it +3 AC, resistance to all damage types, and immunity to the frightened, charmed, and stunned conditions.'
        ]
      },
    ],
  },
  {
    id: 'punishing-rampart',
    name: 'Punishing Rampart',
    description: 'Focus on offense via wards, turning your barriers into weapons.',
    icon: '⚔️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'shock-wards',
        name: 'Shock Wards',
        description: 'Your wards deal damage when crossed.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '⚡',
        rankDescription: [
          'Crossing any ward deals 1d4 lightning damage.',
          'Crossing any ward deals 1d4+1 lightning damage.',
          'Crossing any ward deals 1d4+2 lightning damage.',
          'Crossing any ward deals 1d4+3 lightning damage.',
          'Crossing any ward deals 1d4+4 lightning damage (stacking).'
        ]
      },
      {
        id: 'knockback-expert',
        name: 'Knockback Expert',
        description: 'Your Crushing Edge is more powerful.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👊',
        rankDescription: [
          'Crushing Edge push distance +1 ft.',
          'Crushing Edge push distance +2 ft.',
          'Crushing Edge push distance +3 ft.',
          'Crushing Edge push distance +4 ft.',
          'Crushing Edge push distance +5 ft and adds prone on fail save.'
        ]
      },
      {
        id: 'bulwark-detonator',
        name: 'Bulwark Detonator',
        description: 'You can detonate your wards at will.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💥',
        rankDescription: [
          'You can choose to explode any ward (Bulwark Rebuke) as action, costing 1.6 BM.',
          'You can choose to explode any ward (Bulwark Rebuke) as action, costing 1.2 BM.',
          'You can choose to explode any ward (Bulwark Rebuke) as action, costing 0.8 BM.',
          'You can choose to explode any ward (Bulwark Rebuke) as action, costing 0.4 BM.',
          'You can choose to explode any ward (Bulwark Rebuke) as action, costing 0 BM.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'offensive-wards',
        name: 'Offensive Wards',
        description: 'Your wards deal more damage.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['shock-wards', 'knockback-expert'],
        icon: '🔥',
        rankDescription: [
          'Ward damage effects deal +1d4 damage.',
          'Ward damage effects deal +1d6 damage.',
          'Ward damage effects deal +1d8 damage.'
        ]
      },
      {
        id: 'punishing-barriers',
        name: 'Punishing Barriers',
        description: 'Your barriers punish enemies who attack them.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['knockback-expert', 'bulwark-detonator'],
        icon: '🗡️',
        rankDescription: [
          'Enemies who attack your wards take 1d4 damage.',
          'Enemies who attack your wards take 1d6 damage.',
          'Enemies who attack your wards take 1d8 damage and are pushed 5 ft.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'ward-spikes',
        name: 'Ward Spikes',
        description: 'Your wards grow spikes that damage enemies.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['offensive-wards'],
        icon: '📌',
        rankDescription: [
          'Enemies within 5 ft of your wards take 1d4 damage per round.',
          'Enemies within 5 ft of your wards take 1d6 damage per round.',
          'Enemies within 5 ft of your wards take 1d8 damage per round and have -5 ft movement speed.'
        ]
      },
      {
        id: 'explosive-wards',
        name: 'Explosive Wards',
        description: 'Your ward explosions are more powerful.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['offensive-wards', 'punishing-barriers'],
        icon: '💣',
        rankDescription: [
          'Bulwark Rebuke explosion radius increased to 15 ft.',
          'Bulwark Rebuke explosion radius increased to 20 ft.',
          'Bulwark Rebuke explosion radius increased to 25 ft and damage increased by 1d6.'
        ]
      },
      {
        id: 'barrier-spellcasting',
        name: 'Barrier Spellcasting',
        description: 'Your wards can cast spells.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['punishing-barriers'],
        icon: '✨',
        rankDescription: [
          'Your wards can cast Shock Wards once per round (1d4 damage in 5 ft radius).',
          'Your wards can cast Shock Wards twice per round (1d6 damage in 5 ft radius).',
          'Your wards can cast Shock Wards three times per round (1d8 damage in 5 ft radius).'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'offensive-mastery',
        name: 'Offensive Mastery',
        description: 'Your offensive ward abilities are enhanced.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['ward-spikes', 'explosive-wards'],
        icon: '⚔️',
        rankDescription: [
          'All ward damage increased by 1d4.',
          'All ward damage increased by 1d6.',
          'All ward damage increased by 1d8 and roll 1d10 on hit; on a 10 it critically hits for double damage.'
        ]
      },
      {
        id: 'barrier-artillery',
        name: 'Barrier Artillery',
        description: 'Your wards can attack enemies at range.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['explosive-wards', 'barrier-spellcasting'],
        icon: '🏹',
        rankDescription: [
          'Your wards can attack enemies within 10 ft once per round (1d6 damage).',
          'Your wards can attack enemies within 20 ft twice per round (1d8 damage).',
          'Your wards can attack enemies within 30 ft three times per round (1d10 damage).'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'wall-of-pain',
        name: 'Wall of Pain',
        description: 'Your offensive wards deal maximum damage.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['offensive-mastery', 'barrier-artillery'],
        icon: '🔥',
        rankDescription: [
          'Arc Wall and Iron Maiden automatically deal maximum damage on cross and track offenders (advantage follow-up attack). Additionally, enemies who cross your wards are marked for 1 round, taking +1d6 damage from all sources.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'barrier-detonation',
        name: 'Barrier Detonation',
        description: 'Your wards can be detonated for devastating effect.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['wall-of-pain'],
        icon: '💥',
        rankDescription: [
          'As an action (2 AP), you can detonate one of your wards, dealing 6d10 damage of the ward\'s type to all creatures within 15 feet of the ward (Dexterity save for half damage). Additionally, when a ward is destroyed by an enemy, it automatically detonates, dealing 3d10 damage to the creature that destroyed it.'
        ]
      },
      {
        id: 'lethal-fortifications',
        name: 'Lethal Fortifications',
        description: 'Your wards become even more deadly.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['wall-of-pain'],
        icon: '☠️',
        rankDescription: [
          'Your wards deal an additional 2d8 damage when crossed, and enemies who cross your wards must make a Constitution saving throw or be stunned for 1 round. Additionally, your wards now deal damage to enemies who end their turn within 10 feet of them.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-retribution',
        name: 'Avatar of Retribution',
        description: 'Transform into a living embodiment of perfect retribution.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['barrier-detonation', 'lethal-fortifications'],
        icon: '⚔️',
        rankDescription: [
          'Once per day, transform into an Avatar of Retribution for 1d6+2 rounds. During this time, you become a being of pure retributive energy, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to create wards without spending Bulwark Meter. Your wards deal triple damage when crossed, automatically detonate when destroyed (dealing 8d10 damage in a 20-foot radius), and apply one of the following conditions to affected enemies (your choice): paralyzed, blinded, or stunned for 1d4 rounds. Additionally, you emit an aura of retribution in a 15-foot radius that deals 3d10 damage to any enemy who attacks you or an ally within the aura.'
        ]
      },
    ],
  }
];

export default wardenTalentTrees;
