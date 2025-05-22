// Talent trees for the Formbender class
const formbenderTalentTrees = [
  {
    id: 'primal-fury',
    name: 'Primal Fury',
    description: 'Master the art of aggressive shapeshifting for melee combat.',
    icon: '🐺',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'savage-rhythm',
        name: 'Savage Rhythm',
        description: 'Gain additional Wild Instinct on critical hits.',
        maxRank: 3,
        position: { row: 0, col: 0 },
        icon: '🎯',
        rankDescription: [
          'Gain +1 WI on critical hits.',
          'Gain +2 WI on critical hits.',
          'Gain +3 WI on critical hits.'
        ]
      },
      {
        id: 'overwhelm',
        name: 'Overwhelm',
        description: 'Your basic attacks deal additional damage when you have high Wild Instinct.',
        maxRank: 3,
        position: { row: 0, col: 2 },
        icon: '🦷',
        rankDescription: [
          'While at ≥3 WI your basic attacks add +1d4 damage.',
          'While at ≥3 WI your basic attacks add +1d6 damage.',
          'While at ≥3 WI your basic attacks add +1d8 damage.'
        ]
      },
      {
        id: 'blood-scent',
        name: 'Blood Scent',
        description: 'Deal additional damage to wounded enemies.',
        maxRank: 3,
        position: { row: 0, col: 4 },
        icon: '👃',
        rankDescription: [
          'Deal +1 damage vs enemies ≤50% HP.',
          'Deal +INT damage vs enemies ≤50% HP.',
          'Deal +INT+2 damage vs enemies ≤50% HP.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'wild-instinct-capacity',
        name: 'Wild Instinct Capacity',
        description: 'Increase your maximum Wild Instinct capacity.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['savage-rhythm'],
        icon: '⚡',
        rankDescription: [
          'Your maximum WI increases to 6.',
          'Your maximum WI increases to 7.',
          'Your maximum WI increases to 8.'
        ]
      },
      {
        id: 'predator-strike',
        name: 'Predator Strike',
        description: 'Your attacks become more deadly against specific targets.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['overwhelm'],
        icon: '🔪',
        rankDescription: [
          'Your attacks against slowed or prone targets deal an additional 1d4 damage.',
          'Your attacks against slowed or prone targets deal an additional 1d6 damage.',
          'Your attacks against slowed or prone targets deal an additional 1d8 damage.'
        ]
      },
      {
        id: 'instinct-recovery',
        name: 'Instinct Recovery',
        description: 'Recover Wild Instinct more quickly.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['blood-scent'],
        icon: '🔄',
        rankDescription: [
          'Gain +1 WI when you defeat an enemy.',
          'Gain +2 WI when you defeat an enemy.',
          'Gain +3 WI when you defeat an enemy.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'alpha-strike',
        name: 'Alpha Strike',
        description: 'Learn to perform a powerful attack that knocks enemies prone.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['wild-instinct-capacity', 'predator-strike'],
        icon: '🐯',
        rankDescription: [
          'Learn the Alpha Strike ability. Deal 3d4 piercing damage + knock prone; if target already slowed, deal +2d4 damage.'
        ]
      },
      {
        id: 'predators-pounce',
        name: 'Predator\'s Pounce',
        description: 'Learn to teleport to a target and make a free attack.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['predator-strike', 'instinct-recovery'],
        icon: '🐺',
        rankDescription: [
          'Learn the Predator\'s Pounce ability. Teleport to a creature you can see within 30 ft and make a free basic attack.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'bestial-resurgence',
        name: 'Bestial Resurgence',
        description: 'Learn to heal yourself and maintain your form when near death.',
        maxRank: 1,
        position: { row: 3, col: 1 },
        requires: ['alpha-strike'],
        icon: '🔄',
        rankDescription: [
          'Learn the Bestial Resurgence ability. When you would break form, instead heal 2d6+CON and stay shifted—WI drops to 0.'
        ]
      },
      {
        id: 'iron-root-bulwark',
        name: 'Iron Root Bulwark',
        description: 'Learn to protect yourself and nearby allies.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['predators-pounce'],
        icon: '🛡️',
        rankDescription: [
          'Learn the Iron Root Bulwark ability. Gain 10 Temporary HP & allies within 10 ft gain +2 AC for 2 rounds.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'feral-rush',
        name: 'Feral Rush',
        description: 'Shift for free when your Wild Instinct is low.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['bestial-resurgence', 'iron-root-bulwark'],
        icon: '🌟',
        rankDescription: [
          'Shift costs 0 AP if you ended last turn at ≤2 WI. Additionally, when you Shift this way, gain +2 WI immediately.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'apex-predator',
        name: 'Apex Predator',
        description: 'Your attacks become devastatingly powerful at high Wild Instinct.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['feral-rush'],
        icon: '🦁',
        rankDescription: [
          'While at ≥6 WI, your attacks deal an additional 2d8 damage and have a 20% chance to inflict a random debilitating effect (bleeding, slowed, or weakened). Additionally, you gain +10 feet to your movement speed and can use Predator\'s Pounce as a reaction when an enemy moves within 30 feet of you (costs 2 AP).'
        ]
      },
      {
        id: 'primal-dominance',
        name: 'Primal Dominance',
        description: 'Your presence inspires fear in your enemies and courage in your allies.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['feral-rush'],
        icon: '👑',
        rankDescription: [
          'As a bonus action (2 AP), emit a primal roar. Enemies within 30 feet must make a Wisdom save or become frightened for 1d4 rounds. Allies within 30 feet gain advantage on their next attack roll and +1d6 to damage. This ability costs 3 WI to use.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'beast-incarnate',
        name: 'Beast Incarnate',
        description: 'Transform into the ultimate predator, a perfect fusion of humanoid intellect and bestial power.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['apex-predator', 'primal-dominance'],
        icon: '🐲',
        rankDescription: [
          'Once per day, transform into your Beast Incarnate form for 1d6+2 rounds. In this form, your maximum WI increases to 12, and you gain the following benefits: immunity to fear and charm effects; all your attacks deal an additional 3d8 damage; you can make one additional attack when you take the Attack action; you gain 30 temporary hit points; and you can use Alpha Strike, Predator\'s Pounce, and Iron Root Bulwark as bonus actions that cost 0 AP. Additionally, when you defeat an enemy in this form, you regain 2d6 hit points and 1d4 WI.'
        ]
      },
    ],
  },
  {
    id: 'adaptive-predator',
    name: 'Adaptive Predator',
    description: 'Master the art of versatile shapeshifting for utility and control.',
    icon: '🦊',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'primal-attunement',
        name: 'Primal Attunement',
        description: 'Attune yourself to the primal forces of nature.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🌳',
        rankDescription: [
          'You can cast the Speak with Animals spell once per day without using a spell slot.',
          'You can cast the Speak with Animals spell twice per day without using a spell slot.',
          'You can cast the Speak with Animals and Speak with Plants spells once per day each without using a spell slot.',
          'You can cast the Speak with Animals and Speak with Plants spells twice per day each without using a spell slot.',
          'You can cast the Speak with Animals and Speak with Plants spells three times per day each without using a spell slot, and you can communicate telepathically with beasts within 100 feet of you.'
        ]
      },
      {
        id: 'primal-surge',
        name: 'Primal Surge',
        description: 'Channel primal energy to enhance your physical abilities.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '💪',
        rankDescription: [
          'As a bonus action, you can enter a primal surge for 1d6 rounds. During this time, add 1d4 to checks and saving throws using one ability score of your choice.',
          'As a bonus action, you can enter a primal surge for 1d6 rounds. During this time, add 1d4 to checks and saving throws using two ability scores of your choice.',
          'As a bonus action, you can enter a primal surge for 1d8 rounds. During this time, add 1d6 to checks and saving throws using one ability score of your choice.',
          'As a bonus action, you can enter a primal surge for 1d8 rounds. During this time, add 1d6 to checks and saving throws using two ability scores of your choice.',
          'As a bonus action, you can enter a primal surge for 1d10 rounds. During this time, add 1d6 to checks and saving throws using three ability scores of your choice.'
        ]
      },
      {
        id: 'wild-empathy',
        name: 'Wild Empathy',
        description: 'Form a bond with wild animals.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🐾',
        rankDescription: [
          'You have advantage on Animal Handling checks. Additionally, beasts with an Intelligence of 3 or lower won\'t attack you unless provoked or commanded.',
          'You have advantage on Animal Handling checks. Additionally, you can attempt to calm a hostile beast. The beast must make a Wisdom saving throw or become indifferent toward you for 1 minute.',
          'You have advantage on Animal Handling checks. Additionally, you can attempt to calm a hostile beast. The beast must make a Wisdom saving throw with disadvantage or become indifferent toward you for 10 minutes.',
          'You have advantage on Animal Handling checks. Additionally, you can attempt to calm a hostile beast. The beast must make a Wisdom saving throw with disadvantage or become friendly toward you for 1 hour.',
          'You have advantage on Animal Handling checks. Additionally, you can attempt to calm a hostile beast. The beast must make a Wisdom saving throw with disadvantage or become friendly toward you for 8 hours.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'primal-spellcasting',
        name: 'Primal Spellcasting',
        description: 'Cast spells drawing on primal magic.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['primal-attunement'],
        icon: '📜',
        rankDescription: [
          'You learn three druid cantrips and two 1st-level druid spells. You can cast each of these 1st-level spells once per day without using a spell slot.',
          'You learn three druid cantrips, two 1st-level druid spells, and two 2nd-level druid spells. You can cast each of these spells once per day without using a spell slot.',
          'You learn three druid cantrips, two 1st-level druid spells, two 2nd-level druid spells, and one 3rd-level druid spell. You can cast each of these spells once per day without using a spell slot.'
        ]
      },
      {
        id: 'primal-resilience',
        name: 'Primal Resilience',
        description: 'Your connection to primal magic makes you more resilient.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['primal-surge'],
        icon: '🛡️',
        rankDescription: [
          'You gain resistance to one type of damage (acid, cold, fire, lightning, or thunder) of your choice for 1 hour. You can change the damage type when you finish a short or long rest.',
          'You gain resistance to two types of damage (acid, cold, fire, lightning, or thunder) of your choice for 1 hour. You can change the damage types when you finish a short or long rest.',
          'You gain resistance to three types of damage (acid, cold, fire, lightning, or thunder) of your choice for 1 hour. You can change the damage types when you finish a short or long rest.'
        ]
      },
      {
        id: 'beast-companion',
        name: 'Beast Companion',
        description: 'Form a bond with a beast companion.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['wild-empathy'],
        icon: '🦁',
        rankDescription: [
          'You gain a beast companion with CR 1/4 or lower. The beast obeys your commands and acts on your initiative. If it dies, you can perform a 1-hour ritual to call a new companion.',
          'You gain a beast companion with CR 1/2 or lower. The beast obeys your commands and acts on your initiative. If it dies, you can perform a 1-hour ritual to call a new companion.',
          'You gain a beast companion with CR 1 or lower. The beast obeys your commands and acts on your initiative. If it dies, you can perform a 1-hour ritual to call a new companion.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'primal-fury',
        name: 'Primal Fury',
        description: 'Channel primal rage to enhance your combat abilities.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['primal-spellcasting', 'primal-resilience'],
        icon: '😡',
        rankDescription: [
          'As a bonus action, you can enter a primal fury for 1d8 rounds. While in this state, you roll with advantage on Strength checks and Strength saving throws, add 1d6 to damage rolls with melee weapons, and reduce bludgeoning, piercing, and slashing damage taken by 1d6.'
        ]
      },
      {
        id: 'beast-speech',
        name: 'Beast Speech',
        description: 'Communicate with beasts and share their senses.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['primal-resilience', 'beast-companion'],
        icon: '🗣️',
        rankDescription: [
          'You can communicate telepathically with beasts within 100 feet of you. Additionally, as an action, you can see through the eyes of a willing beast within 100 feet of you for up to 1d6 rounds. During this time, you are blind with regard to your own senses.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'primal-mastery',
        name: 'Primal Mastery',
        description: 'Achieve greater mastery over primal magic.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['primal-fury'],
        icon: '🌪️',
        rankDescription: [
          'You learn two additional druid spells of 4th level or lower. You can cast each of these spells once per day without using a spell slot. Additionally, your primal fury now grants you a +4 bonus to damage rolls with melee weapons.',
          'You learn two additional druid spells of 5th level or lower. You can cast each of these spells once per day without using a spell slot. Additionally, your primal fury now grants you a +6 bonus to damage rolls with melee weapons.',
          'You learn two additional druid spells of 6th level or lower. You can cast each of these spells once per day without using a spell slot. Additionally, your primal fury now grants you a +8 bonus to damage rolls with melee weapons.'
        ]
      },
      {
        id: 'enhanced-companion',
        name: 'Enhanced Companion',
        description: 'Your beast companion becomes more powerful.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['beast-speech'],
        icon: '🐉',
        rankDescription: [
          'Your beast companion gains +2 to AC, +2 to all saving throws, and an additional 10 hit points. Additionally, its attacks count as magical for the purpose of overcoming resistance and immunity to non-magical attacks.',
          'Your beast companion gains +4 to AC, +4 to all saving throws, and an additional 20 hit points. Additionally, its attacks count as magical for the purpose of overcoming resistance and immunity to non-magical attacks, and it can make one additional attack when it takes the Attack action.',
          'Your beast companion gains +6 to AC, +6 to all saving throws, and an additional 30 hit points. Additionally, its attacks count as magical for the purpose of overcoming resistance and immunity to non-magical attacks, it can make one additional attack when it takes the Attack action, and it gains resistance to bludgeoning, piercing, and slashing damage from non-magical attacks.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'primal-avatar',
        name: 'Primal Avatar',
        description: 'Become an avatar of primal magic.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['primal-mastery', 'enhanced-companion'],
        icon: '🌌',
        rankDescription: [
          'Once per day, you can transform into a Primal Avatar for 1d10 rounds. While in this form, add 2d6 to Strength, Dexterity, and Constitution checks and saving throws, reduce non-magical bludgeoning, piercing, and slashing damage taken by 2d10, and gain the ability to cast any druid spell of 7th level or lower without using a spell slot. Additionally, your beast companion gains the same benefits as you, and you can communicate telepathically with any beast or plant within 1 mile of you.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'nature-communion',
        name: 'Nature Communion',
        description: 'Forge a deep connection with the natural world, allowing you to draw power from it.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['primal-avatar'],
        icon: '🌳',
        rankDescription: [
          'You can spend 3 AP to commune with nature, gaining insight into the surrounding territory. For the next 1d6 hours, you know the location of powerful beasts, elementals, fey, and plants within 3 miles. Additionally, while in natural terrain, you can cast Commune with Nature once per day without using a spell slot, and your spells that target plants or beasts have their save DC increased by 2.'
        ]
      },
      {
        id: 'pack-alpha',
        name: 'Pack Alpha',
        description: 'Your leadership inspires your companions to greater feats.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['primal-avatar'],
        icon: '🐺',
        rankDescription: [
          'Your beast companion gains an additional action on its turn. Additionally, as a bonus action (1 AP), you can command up to three beasts within 60 feet to make a single attack against targets of your choice. These beasts gain advantage on their attack rolls and add your Wisdom modifier to their damage rolls.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'wild-harmony',
        name: 'Wild Harmony',
        description: 'Achieve perfect harmony with the natural world, becoming a living conduit for its power.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['nature-communion', 'pack-alpha'],
        icon: '🌍',
        rankDescription: [
          'Once per day, you can enter a state of Wild Harmony for 1d6+2 minutes. During this time, you gain the following benefits: you can wildshape into any beast of CR 10 or lower as a bonus action (0 AP); you can cast any druid spell of 8th level or lower without using a spell slot; you gain immunity to poison and disease; you and your beast companion regenerate 1d10 hit points at the start of each of your turns; and you can summon 1d4+1 beasts of CR 3 or lower to fight alongside you for the duration. These beasts act on your initiative and follow your mental commands.'
        ]
      },
    ],
  },
  {
    id: 'elemental-aspect',
    name: 'Elemental Aspect',
    description: 'Harness elemental powers to enhance your forms with spell-like abilities.',
    icon: '🔥',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'self-adaptation',
        name: 'Self Adaptation',
        description: 'Adapt your body to different environments.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🦎',
        rankDescription: [
          'You can adapt your body to survive in one type of harsh environment (extreme heat, extreme cold, underwater, etc.) for 2d6 rounds.',
          'You can adapt your body to survive in one type of harsh environment for 3d6 rounds.',
          'You can adapt your body to survive in two types of harsh environments simultaneously for 4d6 rounds.',
          'You can adapt your body to survive in three types of harsh environments simultaneously for 5d6 rounds.',
          'You can adapt your body to survive in any harsh environment for 6d6 rounds.'
        ]
      },
      {
        id: 'minor-biomancy',
        name: 'Minor Biomancy',
        description: 'Make minor alterations to your body.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '👁️',
        rankDescription: [
          'You can make minor alterations to your body (change eye color, hair color, etc.) for 2d6 rounds.',
          'You can make minor alterations to your body for 3d6 rounds.',
          'You can make moderate alterations to your body (change skin texture, grow claws, etc.) for 2d6 rounds.',
          'You can make moderate alterations to your body for 3d6 rounds.',
          'You can make significant alterations to your body (grow gills, change height by up to 1 foot, etc.) for 4d6 rounds.'
        ]
      },
      {
        id: 'healing-touch',
        name: 'Healing Touch',
        description: 'Use biomancy to heal wounds.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🤲',
        rankDescription: [
          'You can touch a creature to heal 1d6 hit points. You can use this ability once per day.',
          'You can touch a creature to heal 1d8 hit points. You can use this ability twice per day.',
          'You can touch a creature to heal 1d10 hit points. You can use this ability three times per day.',
          'You can touch a creature to heal 1d12 hit points. You can use this ability four times per day.',
          'You can touch a creature to heal 2d8 hit points. You can use this ability five times per day.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'enhanced-physiology',
        name: 'Enhanced Physiology',
        description: 'Permanently enhance your physical capabilities.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['self-adaptation'],
        icon: '💪',
        rankDescription: [
          'You gain a +1 bonus to one physical ability score (Strength, Dexterity, or Constitution) of your choice.',
          'You gain a +1 bonus to two physical ability scores of your choice.',
          'You gain a +2 bonus to one physical ability score of your choice and a +1 bonus to another.'
        ]
      },
      {
        id: 'combat-adaptation',
        name: 'Combat Adaptation',
        description: 'Adapt your body for combat.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['minor-biomancy'],
        icon: '⚔️',
        rankDescription: [
          'As a bonus action, you can adapt your body for combat for 1d6 rounds. Choose one of the following benefits: natural armor (reduce damage taken by 1d4), natural weapons (1d8 damage), or enhanced speed (+10 feet to your movement speed).',
          'As a bonus action, you can adapt your body for combat for 1d8 rounds. Choose two of the following benefits: natural armor (reduce damage taken by 1d6), natural weapons (1d8 damage), enhanced speed (+10 feet to your movement speed), or enhanced senses (add 1d6 to Perception checks).',
          'As a bonus action, you can adapt your body for combat for 1d10 rounds. Choose three of the following benefits: natural armor (reduce damage taken by 1d8), natural weapons (1d10 damage), enhanced speed (+15 feet to your movement speed), enhanced senses (add 1d8 to Perception checks), or enhanced strength (add 1d8 to Strength checks and saving throws).'
        ]
      },
      {
        id: 'regeneration',
        name: 'Regeneration',
        description: 'Regenerate your body more quickly.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['healing-touch'],
        icon: '♻️',
        rankDescription: [
          'At the start of each of your turns, you regain 1d4 hit points if you have at least 1 hit point.',
          'At the start of each of your turns, you regain 1d6 hit points if you have at least 1 hit point.',
          'At the start of each of your turns, you regain 1d8 hit points if you have at least 1 hit point. Additionally, you can regrow lost limbs over the course of a long rest.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'major-biomancy',
        name: 'Major Biomancy',
        description: 'Make major alterations to your body.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['enhanced-physiology', 'combat-adaptation'],
        icon: '🧪',
        rankDescription: [
          'You can make major alterations to your body for 2d6 rounds. Examples include growing wings (fly speed 30 feet), growing gills and fins (swim speed 30 feet), or growing additional limbs (extra attack with natural weapons).'
        ]
      },
      {
        id: 'biomantic-healing',
        name: 'Biomantic Healing',
        description: 'Use biomancy to heal more effectively.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['combat-adaptation', 'regeneration'],
        icon: '💉',
        rankDescription: [
          'Your Healing Touch now heals 3d8 hit points and can cure one disease or neutralize one poison affecting the target. Additionally, you can use your Regeneration ability to heal others by touch.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'perfect-form',
        name: 'Perfect Form',
        description: 'Achieve a state of physical perfection.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['major-biomancy'],
        icon: '🏆',
        rankDescription: [
          'You gain a +2 bonus to all physical ability scores (Strength, Dexterity, and Constitution). Additionally, you no longer age and are immune to disease.',
          'You gain a +4 bonus to all physical ability scores. Additionally, you no longer age, are immune to disease, and have advantage on saving throws against poison.',
          'You gain a +6 bonus to all physical ability scores. Additionally, you no longer age, are immune to disease and poison, and have resistance to bludgeoning, piercing, and slashing damage.'
        ]
      },
      {
        id: 'biomantic-mastery',
        name: 'Biomantic Mastery',
        description: 'Achieve mastery over biomancy.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['biomantic-healing'],
        icon: '🧠',
        rankDescription: [
          'You can use your biomantic abilities on others with their consent. Additionally, your Healing Touch now heals 4d8 hit points and can be used at a range of 30 feet.',
          'You can use your biomantic abilities on others with their consent. Additionally, your Healing Touch now heals 5d8 hit points and can be used at a range of 60 feet. You can also use it to cure multiple diseases or neutralize multiple poisons affecting the target.',
          'You can use your biomantic abilities on others with their consent. Additionally, your Healing Touch now heals 6d8 hit points and can be used at a range of 90 feet. You can also use it to cure multiple diseases, neutralize multiple poisons, or remove one curse affecting the target.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'ultimate-biomancer',
        name: 'Ultimate Biomancer',
        description: 'Become the ultimate master of biomancy.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['perfect-form', 'biomantic-mastery'],
        icon: '🧬',
        rankDescription: [
          'Once per day, you can enter a state of biomantic perfection for 1d10 rounds. During this time, you can freely alter your body as an action, gaining any combination of the following benefits: a fly speed of 60 feet, a swim speed of 60 feet, a climb speed of 60 feet, reduce one type of damage taken by 2d10, natural weapons that deal 3d8 damage, natural armor that reduces damage taken by 2d8, or the ability to breathe in any environment. Additionally, you can cast Regenerate on yourself or others without using a spell slot, and your Healing Touch restores 6d8 hit points.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'elemental-infusion',
        name: 'Elemental Infusion',
        description: 'Infuse your body with elemental energy, gaining powerful new abilities.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['ultimate-biomancer'],
        icon: '⚡',
        rankDescription: [
          'As a bonus action (2 AP), infuse your body with elemental energy for 1d6 rounds. Choose one element (fire, cold, lightning, acid, or thunder). You gain resistance to that damage type, and your natural weapons deal an additional 2d6 damage of that type. Additionally, you emit an aura of elemental energy in a 10-foot radius that deals 1d8 damage of the chosen type to enemies that start their turn in the aura.'
        ]
      },
      {
        id: 'cellular-reconstruction',
        name: 'Cellular Reconstruction',
        description: 'Your mastery of biomancy allows you to completely reconstruct your body at the cellular level.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['ultimate-biomancer'],
        icon: '🔬',
        rankDescription: [
          'As an action (3 AP), you can completely reconstruct your body, removing all negative conditions affecting you and regaining hit points equal to half your maximum hit points. Additionally, you can use this ability on willing creatures you touch, restoring 4d10 + your Intelligence modifier hit points and removing all negative conditions affecting them. You can use this ability once per long rest.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'transcendent-form',
        name: 'Transcendent Form',
        description: 'Transcend the limitations of your physical form, becoming a being of pure biomantic energy.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['elemental-infusion', 'cellular-reconstruction'],
        icon: '✨',
        rankDescription: [
          'Once per day, you can transform into a Transcendent Form for 1d6+2 minutes. In this form, you become a being of pure biomantic energy. You gain the following benefits: immunity to critical hits, poison, disease, and exhaustion; resistance to all damage types; the ability to hover and fly at a speed of 60 feet; the ability to pass through solid objects but not force effects; your natural weapons deal an additional 3d10 force damage; and you can use Cellular Reconstruction as a bonus action (1 AP) without expending its normal use. Additionally, as an action (3 AP), you can emit a wave of biomantic energy in a 30-foot radius, healing allies for 4d10 hit points and dealing 4d10 force damage to enemies (Wisdom save for half damage).'
        ]
      },
    ],
  }
];

export default formbenderTalentTrees;
