// Enhanced background system with sub-backgrounds and balanced abilities
const backgroundAbilities = {
  mystic: {
    description: 'Mystics draw power from the fundamental forces of the universe, channeling raw energy through their bodies and minds. They are masters of elemental manipulation and cosmic forces, often walking a dangerous line between control and chaos.',

    // Sub-backgrounds with unique ability pools
    subBackgrounds: {
      elementalist: {
        name: 'Elementalist',
        description: 'Specialists in elemental magic who attune to specific forces of nature.',
        theme: 'Elemental mastery and environmental adaptation',
        abilityPool: [
          {
            name: 'Elemental Attunement',
            type: 'Passive',
            apCost: 'None',
            description: 'Your connection to elemental forces grants resistance.',
            mechanics: 'Choose one elemental type (fire, water, earth, air, or arcane) at character creation. You have resistance to that damage type for the first 8 damage taken per long rest.',
            synergies: 'Provides reliable protection against your chosen element.'
          },
          {
            name: 'Elemental Cantrips',
            type: 'Active',
            apCost: '1 AP',
            description: 'Manifest minor elemental effects.',
            mechanics: 'Create small elemental effects: light fires, freeze water, create gusts of wind, or shape earth. Can deal 1 damage to objects or provide minor utility.',
            synergies: 'Useful for utility, exploration, and minor combat applications.'
          },
          {
            name: 'Elemental Weapon',
            type: 'Active',
            apCost: '2 AP',
            description: 'Imbue your weapon with elemental energy.',
            mechanics: 'Your next successful attack deals an additional 1d4 elemental damage of your attuned type. Once per short rest.',
            synergies: 'Enhances combat effectiveness with elemental damage.'
          },
          {
            name: 'Environmental Adaptation',
            type: 'Passive',
            apCost: 'None',
            description: 'Your elemental nature adapts to harsh environments.',
            mechanics: 'Gain advantage on saving throws against environmental hazards related to your attuned element (heat, cold, storms, etc.).',
            synergies: 'Provides survival benefits in elemental environments.'
          },
          {
            name: 'Elemental Sense',
            type: 'Active',
            apCost: '1 AP',
            description: 'Detect elemental disturbances and sources.',
            mechanics: 'Sense the presence of your attuned element within 60 feet for 10 minutes. Can detect elemental creatures, magic, or environmental features.',
            synergies: 'Useful for finding resources and detecting elemental threats.'
          }
        ]
      },
      voidwalker: {
        name: 'Voidwalker',
        description: 'Mystics who draw power from the spaces between realities.',
        theme: 'Dimensional manipulation and cosmic awareness',
        abilityPool: [
          {
            name: 'Void Sight',
            type: 'Active',
            apCost: '2 AP',
            description: 'Peer through dimensional barriers.',
            mechanics: 'See invisible creatures and objects for 1 minute. Additionally, you can see 30 feet into the Ethereal Plane. Once per short rest.',
            synergies: 'Reveals hidden threats and dimensional anomalies.'
          },
          {
            name: 'Phase Step',
            type: 'Active',
            apCost: '3 AP',
            description: 'Briefly step between dimensions.',
            mechanics: 'Teleport up to 15 feet to an unoccupied space you can see. You briefly phase through the void, ignoring obstacles. Once per short rest.',
            synergies: 'Provides tactical mobility and escape options.'
          },
          {
            name: 'Dimensional Anchor',
            type: 'Passive',
            apCost: 'None',
            description: 'Your connection to reality grants stability.',
            mechanics: 'Gain advantage on saving throws against forced movement, teleportation, and banishment effects. You cannot be unwillingly transported to other planes.',
            synergies: 'Provides protection against dimensional manipulation.'
          },
          {
            name: 'Void Touch',
            type: 'Active',
            apCost: '2 AP',
            description: 'Channel void energy through your touch.',
            mechanics: 'Your next successful attack deals an additional 1d4 force damage and the target cannot teleport until the end of their next turn. Once per short rest.',
            synergies: 'Disrupts enemy mobility and adds force damage.'
          },
          {
            name: 'Cosmic Awareness',
            type: 'Passive',
            apCost: 'None',
            description: 'Your void connection grants supernatural perception.',
            mechanics: 'Gain advantage on Perception checks and cannot be surprised while conscious. You can sense when you\'re being observed from other planes.',
            synergies: 'Enhances awareness and detection capabilities.'
          }
        ]
      },
      stormcaller: {
        name: 'Stormcaller',
        description: 'Weather-wielders who command atmospheric forces.',
        theme: 'Weather control and electrical energy',
        abilityPool: [
          {
            name: 'Storm Resistance',
            type: 'Passive',
            apCost: 'None',
            description: 'Your connection to storms grants natural protection.',
            mechanics: 'Gain resistance to lightning and thunder damage for the first 6 damage taken per long rest. You are unaffected by natural weather.',
            synergies: 'Provides protection against storm-based attacks and weather.'
          },
          {
            name: 'Lightning Touch',
            type: 'Active',
            apCost: '2 AP',
            description: 'Channel electrical energy through your attacks.',
            mechanics: 'Your next successful attack deals an additional 1d4 lightning damage and the target must make a Constitution save or be stunned until the end of their next turn. Once per short rest.',
            synergies: 'Adds lightning damage and potential stunning effect.'
          },
          {
            name: 'Weather Sense',
            type: 'Passive',
            apCost: 'None',
            description: 'You can predict and sense weather patterns.',
            mechanics: 'Accurately predict weather up to 24 hours in advance. Gain advantage on Survival checks related to weather and navigation.',
            synergies: 'Useful for travel planning and outdoor survival.'
          },
          {
            name: 'Static Field',
            type: 'Active',
            apCost: '3 AP',
            description: 'Create a field of electrical energy around you.',
            mechanics: 'For 1 minute, creatures that start their turn within 5 feet of you take 1 lightning damage. Once per long rest.',
            synergies: 'Provides area denial and consistent damage output.'
          },
          {
            name: 'Call Wind',
            type: 'Active',
            apCost: '2 AP',
            description: 'Summon gusts of wind to aid or hinder.',
            mechanics: 'Create strong winds in a 15-foot cone. Creatures in the area must make a Strength save or be pushed 10 feet away. Can extinguish flames. Once per short rest.',
            synergies: 'Provides battlefield control and utility effects.'
          }
        ]
      }
    },

    benefits: [
      '+1 to Spirit attribute checks',
      'Can sense general magical presence',
      'Minor resistance to chosen elemental type'
    ],
    restrictions: [
      'Abilities may attract unwanted magical attention',
      'Some effects require concentration',
      'Elemental attunement is limited to one type'
    ]
  },

  arcanist: {
    description: 'Arcanists are scholarly practitioners who approach magic as a science to be studied and mastered. They combine theoretical knowledge with practical application, creating complex magical systems and devices through careful research and experimentation.',

    subBackgrounds: {
      scholar: {
        name: 'Arcane Scholar',
        description: 'Academic researchers who study magic through books and theory.',
        theme: 'Knowledge, research, and magical theory',
        abilityPool: [
          {
            name: 'Arcane Knowledge',
            type: 'Passive',
            apCost: 'None',
            description: 'Your scholarly training grants deep insight into magical phenomena.',
            mechanics: 'Gain advantage on Intelligence checks to identify spells, magical effects, or arcane symbols. You can recall detailed information about magical creatures and phenomena.',
            synergies: 'Essential for magical investigation and research.'
          },
          {
            name: 'Spell Analysis',
            type: 'Active',
            apCost: '2 AP',
            description: 'Carefully study a magical effect to understand its nature.',
            mechanics: 'Observe a spell being cast or magical effect to learn its school of magic, power level, duration, and one component. Once per short rest.',
            synergies: 'Valuable for tactical planning and magical investigation.'
          },
          {
            name: 'Research Network',
            type: 'Passive',
            apCost: 'None',
            description: 'Your academic connections provide access to knowledge.',
            mechanics: 'In settlements with libraries or magical institutions, you can spend 2 hours to research specific magical topics and gain advantage on related checks for 24 hours.',
            synergies: 'Provides long-term knowledge benefits in civilized areas.'
          },
          {
            name: 'Theoretical Mastery',
            type: 'Active',
            apCost: '1 AP',
            description: 'Apply theoretical knowledge to enhance magical precision.',
            mechanics: 'Gain advantage on your next spell attack roll or increase a spell save DC by 1. Once per short rest.',
            synergies: 'Improves reliability of important spells.'
          },
          {
            name: 'Magical Memory',
            type: 'Passive',
            apCost: 'None',
            description: 'Your scholarly training enhances magical retention.',
            mechanics: 'During a long rest, you can prepare one additional spell or ability that you can use once before your next long rest.',
            synergies: 'Provides flexibility in spell selection and preparation.'
          }
        ]
      },
      artificer: {
        name: 'Magical Artificer',
        description: 'Crafters who imbue objects with magical properties.',
        theme: 'Item creation and magical engineering',
        abilityPool: [
          {
            name: 'Magical Crafting',
            type: 'Passive',
            apCost: 'None',
            description: 'Your knowledge of magical item creation grants crafting expertise.',
            mechanics: 'Gain advantage on checks to create, repair, or modify magical items. You can identify the magical properties of items through careful examination.',
            synergies: 'Essential for item creation and magical engineering.'
          },
          {
            name: 'Temporary Enchantment',
            type: 'Active',
            apCost: '3 AP',
            description: 'Imbue an object with temporary magical properties.',
            mechanics: 'Enchant a weapon or tool for 10 minutes. Weapons gain +1 to attack and damage rolls, tools grant advantage on their associated checks. Once per long rest.',
            synergies: 'Provides tactical enhancement for equipment.'
          },
          {
            name: 'Arcane Tools',
            type: 'Passive',
            apCost: 'None',
            description: 'You carry specialized tools for magical work.',
            mechanics: 'You have a set of arcane tools that grant advantage on checks to disable magical traps, analyze magical items, or perform magical crafting.',
            synergies: 'Useful for dungeon exploration and magical investigation.'
          },
          {
            name: 'Mending Touch',
            type: 'Active',
            apCost: '2 AP',
            description: 'Repair objects through magical manipulation.',
            mechanics: 'Repair a broken object or restore 1d4+1 hit points to a construct or magical item. Can be used on armor to restore 1 AC for 1 hour. Once per short rest.',
            synergies: 'Provides utility for equipment maintenance and construct healing.'
          },
          {
            name: 'Magical Resonance',
            type: 'Active',
            apCost: '1 AP',
            description: 'Attune to magical items more efficiently.',
            mechanics: 'Reduce the time required to attune to a magical item by half. Additionally, you can sense if an item requires attunement by touching it.',
            synergies: 'Speeds up magical item usage and identification.'
          }
        ]
      },
      ritualist: {
        name: 'Ritual Specialist',
        description: 'Practitioners who focus on complex, time-consuming magical ceremonies.',
        theme: 'Ritual magic and ceremonial casting',
        abilityPool: [
          {
            name: 'Ritual Expertise',
            type: 'Passive',
            apCost: 'None',
            description: 'Your mastery of ritual magic grants enhanced ceremonial abilities.',
            mechanics: 'Reduce the casting time of ritual spells by half. You can perform rituals without material components worth less than 10 gold.',
            synergies: 'Makes ritual magic more practical and accessible.'
          },
          {
            name: 'Ceremonial Focus',
            type: 'Active',
            apCost: '2 AP',
            description: 'Channel ceremonial power to enhance magical effects.',
            mechanics: 'When casting a spell, you can extend its duration by 50% or increase its area of effect by 25%. Once per long rest.',
            synergies: 'Enhances the power and scope of magical effects.'
          },
          {
            name: 'Sacred Geometry',
            type: 'Passive',
            apCost: 'None',
            description: 'Your understanding of magical patterns grants protective benefits.',
            mechanics: 'When you spend at least 10 minutes preparing a ritual circle, you and allies within gain +1 AC and advantage on concentration saves for 1 hour.',
            synergies: 'Provides group benefits through careful preparation.'
          },
          {
            name: 'Divination Rites',
            type: 'Active',
            apCost: '3 AP',
            description: 'Perform divination ceremonies to gain insight.',
            mechanics: 'Spend 10 minutes in ritual to ask one question about events within the next 24 hours. Receive a cryptic but truthful answer. Once per long rest.',
            synergies: 'Provides valuable information for planning and decision-making.'
          },
          {
            name: 'Protective Ward',
            type: 'Reaction',
            apCost: '2 AP',
            description: 'Create a ceremonial barrier against magical harm.',
            mechanics: 'When targeted by a spell or magical effect, reduce the damage by 1d6+1 and gain advantage on the saving throw. Once per short rest.',
            synergies: 'Provides enhanced protection against magical attacks.'
          }
        ]
      }
    },

    benefits: [
      '+1 to Intelligence attribute checks',
      'Advantage on magical knowledge checks',
      'Can identify basic magical effects'
    ],
    restrictions: [
      'Abilities require study and preparation',
      'Some effects need access to magical resources',
      'Scholarly approach takes time'
    ]
  },

  trickster: {
    description: 'Tricksters harness unpredictable forces, embracing chance and chaos as sources of power. They manipulate probability, fate, and fortune, often making pacts with enigmatic entities that grant them abilities beyond normal comprehension.',

    subBackgrounds: {
      gambler: {
        name: 'Fortune\'s Gambler',
        description: 'Risk-takers who bet everything on the turn of fate.',
        theme: 'Luck manipulation and high-stakes decisions',
        abilityPool: [
          {
            name: 'Lucky Streak',
            type: 'Passive',
            apCost: 'None',
            description: 'Fortune occasionally smiles upon you.',
            mechanics: 'Once per long rest, when you roll a natural 1 on a d20, you can reroll it and must use the new result.',
            synergies: 'Provides protection against critical failures.'
          },
          {
            name: 'High Stakes',
            type: 'Active',
            apCost: '2 AP',
            description: 'Risk everything for a chance at greater reward.',
            mechanics: 'Before making an attack roll or ability check, you can choose to gain advantage. If you fail, you have disadvantage on your next roll. Once per short rest.',
            synergies: 'High-risk, high-reward mechanic for crucial moments.'
          },
          {
            name: 'Fortune\'s Favor',
            type: 'Active',
            apCost: '1 AP',
            description: 'Nudge probability slightly in your favor.',
            mechanics: 'After seeing the result of a d20 roll (yours or an ally within 30 feet), you can add or subtract 1 from the result. Once per short rest.',
            synergies: 'Can turn near-misses into successes.'
          },
          {
            name: 'Gambler\'s Instinct',
            type: 'Passive',
            apCost: 'None',
            description: 'Your experience with games of chance sharpens your intuition.',
            mechanics: 'Gain advantage on Insight checks to detect lies or deception. You can also sense when someone is cheating at games.',
            synergies: 'Useful for social encounters and detecting deception.'
          },
          {
            name: 'All or Nothing',
            type: 'Active',
            apCost: '3 AP',
            description: 'Stake everything on a single decisive moment.',
            mechanics: 'Your next attack roll or ability check is made with advantage. If you succeed, gain an additional benefit (extra damage, extended duration, etc.). If you fail, suffer a minor setback. Once per long rest.',
            synergies: 'Ultimate risk/reward ability for climactic moments.'
          }
        ]
      },
      chaosweaver: {
        name: 'Chaos Weaver',
        description: 'Agents of disorder who thrive in unpredictable situations.',
        theme: 'Randomness and chaotic effects',
        abilityPool: [
          {
            name: 'Chaos Spark',
            type: 'Active',
            apCost: '1 AP',
            description: 'Introduce a small element of chaos.',
            mechanics: 'When you deal damage, roll a d6. On a 5-6, the target must make a Constitution save or be affected by a minor random effect (dizzy, distracted, etc.) until end of their next turn. Once per short rest.',
            synergies: 'Adds unpredictability to combat encounters.'
          },
          {
            name: 'Chaotic Surge',
            type: 'Active',
            apCost: '2 AP',
            description: 'Embrace chaos to create unpredictable effects.',
            mechanics: 'Roll a d6 for a random beneficial effect: 1-2: +1d4 to next roll, 3-4: gain 1d4 temp HP, 5-6: next ability costs 1 less AP. Once per short rest.',
            synergies: 'Provides random but always beneficial effects.'
          },
          {
            name: 'Disorder Aura',
            type: 'Passive',
            apCost: 'None',
            description: 'Your presence disrupts ordered systems.',
            mechanics: 'Enemies within 10 feet have a 10% chance to fumble when rolling a natural 1 on attack rolls (drop weapon, stumble, etc.).',
            synergies: 'Passive disruption effect that affects nearby enemies.'
          },
          {
            name: 'Random Resilience',
            type: 'Passive',
            apCost: 'None',
            description: 'Chaos protects you in unexpected ways.',
            mechanics: 'At the start of each combat, roll a d6 to gain resistance to a damage type for that encounter: 1-Fire, 2-Cold, 3-Lightning, 4-Acid, 5-Thunder, 6-Force.',
            synergies: 'Provides random but useful protection each combat.'
          },
          {
            name: 'Entropy Touch',
            type: 'Active',
            apCost: '3 AP',
            description: 'Channel pure chaos into your attacks.',
            mechanics: 'Your next successful attack deals an additional 1d6 damage of a random type and forces the target to make a Wisdom save or be confused until the end of their next turn. Once per long rest.',
            synergies: 'Powerful chaotic attack with confusion effect.'
          }
        ]
      },
      fatebound: {
        name: 'Fatebound',
        description: 'Those who have glimpsed destiny and learned to nudge it.',
        theme: 'Destiny manipulation and prophetic insight',
        abilityPool: [
          {
            name: 'Prophetic Insight',
            type: 'Passive',
            apCost: 'None',
            description: 'You occasionally glimpse fragments of the future.',
            mechanics: 'Gain advantage on initiative rolls and cannot be surprised while conscious. Once per long rest, you can declare that you "saw this coming" to gain advantage on any roll.',
            synergies: 'Provides combat awareness and occasional foresight.'
          },
          {
            name: 'Twist of Fate',
            type: 'Active',
            apCost: '2 AP',
            description: 'Alter the threads of destiny.',
            mechanics: 'After seeing the result of a d20 roll (yours or an ally within 30 feet), you can add or subtract 2 from the result. Once per short rest.',
            synergies: 'Can turn failures into successes or enhance successes.'
          },
          {
            name: 'Destined Moment',
            type: 'Active',
            apCost: '1 AP',
            description: 'Recognize when fate aligns in your favor.',
            mechanics: 'When you roll a natural 20 on any d20 roll, you can immediately use this ability to gain an additional action on your turn. Once per long rest.',
            synergies: 'Capitalizes on natural 20s for extra actions.'
          },
          {
            name: 'Fate\'s Warning',
            type: 'Reaction',
            apCost: '2 AP',
            description: 'Sense danger before it strikes.',
            mechanics: 'When an ally within 30 feet would be hit by an attack, you can warn them, giving them +2 AC against that attack. Once per short rest.',
            synergies: 'Provides protective benefits through foresight.'
          },
          {
            name: 'Inevitable Outcome',
            type: 'Active',
            apCost: '3 AP',
            description: 'Ensure that fate unfolds as you\'ve foreseen.',
            mechanics: 'Choose a specific outcome for your next d20 roll (between 10-15). You automatically achieve that result. Once per long rest.',
            synergies: 'Guarantees a moderate success when you need it most.'
          }
        ]
      }
    },

    benefits: [
      '+1 to Charisma attribute checks',
      'Advantage on initiative rolls',
      'Minor luck manipulation abilities'
    ],
    restrictions: [
      'Chaos effects are unpredictable',
      'Some abilities may have unintended consequences',
      'Fortune manipulation is limited'
    ]
  },

  zealot: {
    description: 'Zealots draw strength from unwavering faith and spiritual conviction. Whether serving divine entities or abstract ideals, they channel spiritual energy into tangible power, often making personal sacrifices to strengthen their connection to higher powers.',

    subBackgrounds: {
      crusader: {
        name: 'Divine Crusader',
        description: 'Warriors who fight in the name of their faith.',
        theme: 'Combat prowess and righteous fury'
      },
      healer: {
        name: 'Sacred Healer',
        description: 'Compassionate souls who mend wounds and cure ailments.',
        theme: 'Healing and protective magic'
      },
      inquisitor: {
        name: 'Faith Inquisitor',
        description: 'Investigators who root out corruption and heresy.',
        theme: 'Detection and purification'
      }
    },

    abilityPool: [
      {
        name: 'Faithful Resolve',
        type: 'Passive',
        apCost: 'None',
        description: 'Your faith grants mental fortitude.',
        mechanics: 'Gain advantage on saving throws against fear and charm effects. Additionally, you can end one fear or charm effect on yourself as an action once per long rest.',
        synergies: 'Provides protection against mental manipulation.'
      },
      {
        name: 'Divine Guidance',
        type: 'Active',
        apCost: '1 AP',
        description: 'Seek guidance from your faith in moments of uncertainty.',
        mechanics: 'Gain advantage on your next ability check, attack roll, or saving throw. Once per short rest.',
        synergies: 'Provides reliability in crucial moments.'
      },
      {
        name: 'Blessed Strike',
        type: 'Active',
        apCost: '2 AP',
        description: 'Channel divine energy into your weapon.',
        mechanics: 'Your next successful attack deals an additional 1d6 radiant damage. Once per short rest.',
        synergies: 'Enhances combat effectiveness against evil creatures.'
      },
      {
        name: 'Healing Touch',
        type: 'Active',
        apCost: '2 AP',
        description: 'Channel divine energy to mend wounds.',
        mechanics: 'Touch a creature to heal them for 1d4+1 hit points. Once per short rest.',
        synergies: 'Provides minor healing support.'
      },
      {
        name: 'Sense Corruption',
        type: 'Active',
        apCost: '1 AP',
        description: 'Detect spiritual corruption and evil.',
        mechanics: 'Sense the presence of undead, fiends, or other corrupted creatures within 30 feet. Does not reveal exact location or identity. At will.',
        synergies: 'Useful for detecting hidden threats.'
      }
    ],

    benefits: [
      '+1 to Wisdom attribute checks',
      'Advantage on saves against fear and charm',
      'Can sense general presence of corruption'
    ],
    restrictions: [
      'Abilities may fail if faith wavers',
      'Divine powers come with moral obligations',
      'Some effects only work against evil creatures'
    ]
  },

  harrow: {
    description: 'Harrows walk the boundary between life and death, drawing power from the darker aspects of existence. They manipulate life force, spirits, and the very essence of mortality, often viewed with fear and suspicion by common folk.',

    subBackgrounds: {
      necromancer: {
        name: 'Death Scholar',
        description: 'Students of mortality who understand the nature of life and death.',
        theme: 'Death magic and undead knowledge'
      },
      spiritwalker: {
        name: 'Spirit Walker',
        description: 'Mediums who communicate with the departed.',
        theme: 'Spirit communication and ethereal sight'
      },
      gravekeeper: {
        name: 'Grave Keeper',
        description: 'Guardians of the dead who ensure proper rest.',
        theme: 'Protection from undead and funeral rites'
      }
    },

    abilityPool: [
      {
        name: 'Death Sense',
        type: 'Passive',
        apCost: 'None',
        description: 'You can sense the presence of death and undeath.',
        mechanics: 'Detect the presence of undead creatures within 30 feet. Does not reveal exact location or type. Additionally, you can sense if someone has died recently in an area.',
        synergies: 'Useful for detecting undead threats and investigating deaths.'
      },
      {
        name: 'Life Drain',
        type: 'Active',
        apCost: '2 AP',
        description: 'Draw vitality from a defeated foe.',
        mechanics: 'When you reduce a creature to 0 hit points, gain 1d4 temporary hit points that last until your next short rest. Once per short rest.',
        synergies: 'Provides minor sustain in combat.'
      },
      {
        name: 'Spectral Glimpse',
        type: 'Active',
        apCost: '2 AP',
        description: 'Briefly peer into the ethereal realm.',
        mechanics: 'See invisible creatures and objects for 1 minute. Once per short rest.',
        synergies: 'Reveals hidden threats and ethereal beings.'
      },
      {
        name: 'Speak with Spirits',
        type: 'Active',
        apCost: '3 AP',
        description: 'Communicate with lingering spirits.',
        mechanics: 'Attempt to communicate with the spirit of someone who died in the area within the last 24 hours. The spirit can answer simple yes/no questions. Once per long rest.',
        synergies: 'Valuable for investigation and gathering information.'
      },
      {
        name: 'Deathly Resilience',
        type: 'Passive',
        apCost: 'None',
        description: 'Your connection to death grants resistance to its effects.',
        mechanics: 'Gain resistance to necrotic damage for the first 3 points taken per long rest. Additionally, gain advantage on death saving throws.',
        synergies: 'Provides protection against death effects.'
      }
    ],

    benefits: [
      '+1 to Constitution attribute checks',
      'Can sense presence of undead',
      'Minor resistance to necrotic damage'
    ],
    restrictions: [
      'Abilities may disturb allies and NPCs',
      'Some powers only work on recently deceased',
      'Death magic can attract unwanted attention'
    ]
  },

  hexer: {
    description: 'Hexers commune with primal forces and natural spirits, drawing power from ancient pacts with the wilderness. They shape-shift, control elements, and channel the raw essence of nature, often living at the edges of civilization.',

    subBackgrounds: {
      wildshaper: {
        name: 'Wild Shaper',
        description: 'Practitioners who can partially transform their bodies.',
        theme: 'Shape-shifting and bestial abilities'
      },
      naturalist: {
        name: 'Nature\'s Voice',
        description: 'Speakers for the natural world and its creatures.',
        theme: 'Animal communication and environmental harmony'
      },
      herbalist: {
        name: 'Primal Herbalist',
        description: 'Masters of natural remedies and plant magic.',
        theme: 'Healing herbs and plant manipulation'
      }
    },

    abilityPool: [
      {
        name: 'Animal Speech',
        type: 'Passive',
        apCost: 'None',
        description: 'You can communicate with natural animals.',
        mechanics: 'Communicate simple concepts with beasts. They are not compelled to help but may be more friendly. Works only with natural animals, not magical beasts.',
        synergies: 'Useful for gathering information and wilderness navigation.'
      },
      {
        name: 'Nature Sense',
        type: 'Active',
        apCost: '1 AP',
        description: 'Attune to the natural environment around you.',
        mechanics: 'Gain advantage on Survival checks and can sense the general health of the local ecosystem. Lasts for 1 hour. Once per long rest.',
        synergies: 'Enhances wilderness exploration and tracking.'
      },
      {
        name: 'Minor Wild Shape',
        type: 'Active',
        apCost: '2 AP',
        description: 'Partially transform one aspect of your body.',
        mechanics: 'Gain one bestial trait for 10 minutes: claws (+1 damage), enhanced senses (advantage on Perception), or thick hide (+1 AC). Once per short rest.',
        synergies: 'Provides tactical flexibility in various situations.'
      },
      {
        name: 'Herbal Remedy',
        type: 'Active',
        apCost: '1 AP',
        description: 'Create a simple healing poultice from available plants.',
        mechanics: 'If in a natural environment, create a remedy that heals 1d4 hit points when consumed. Takes 10 minutes to prepare. Once per long rest.',
        synergies: 'Provides emergency healing in wilderness settings.'
      },
      {
        name: 'Primal Instincts',
        type: 'Passive',
        apCost: 'None',
        description: 'Your connection to nature sharpens your instincts.',
        mechanics: 'Gain advantage on initiative rolls and cannot be surprised while conscious in natural environments.',
        synergies: 'Improves combat readiness in wilderness encounters.'
      }
    ],

    benefits: [
      '+1 to Wisdom attribute checks in natural environments',
      'Can communicate with natural animals',
      'Enhanced awareness in wilderness'
    ],
    restrictions: [
      'Abilities work best in natural environments',
      'Urban areas may limit effectiveness',
      'Some powers require natural materials'
    ]
  },

  reaver: {
    description: 'Reavers embody physical might and martial prowess, pushing their bodies beyond normal limits. They channel rage, momentum, and sheer physical force into devastating combat techniques that few can withstand.',

    subBackgrounds: {
      berserker: {
        name: 'Primal Berserker',
        description: 'Warriors who channel rage and fury in battle.',
        theme: 'Rage abilities and fearless combat'
      },
      gladiator: {
        name: 'Arena Gladiator',
        description: 'Trained fighters who excel in organized combat.',
        theme: 'Combat techniques and crowd-pleasing moves'
      },
      strongarm: {
        name: 'Strongarm',
        description: 'Individuals of exceptional physical prowess.',
        theme: 'Raw strength and physical dominance'
      }
    },

    abilityPool: [
      {
        name: 'Battle Fury',
        type: 'Active',
        apCost: '2 AP',
        description: 'Enter a state of controlled rage.',
        mechanics: 'For the next 3 rounds, gain +1 to damage rolls and advantage on Strength checks. Cannot use this ability again until you finish a short rest.',
        synergies: 'Enhances combat effectiveness for melee fighters.'
      },
      {
        name: 'Intimidating Presence',
        type: 'Active',
        apCost: '1 AP',
        description: 'Use your physical presence to cow enemies.',
        mechanics: 'Target one creature within 30 feet. They must make a Wisdom save or be frightened until the end of your next turn. Once per short rest.',
        synergies: 'Provides crowd control through fear.'
      },
      {
        name: 'Powerful Build',
        type: 'Passive',
        apCost: 'None',
        description: 'Your physical training grants exceptional strength.',
        mechanics: 'Count as one size larger for carrying capacity and lifting. Gain advantage on Strength checks to break objects or force doors.',
        synergies: 'Useful for exploration and overcoming physical obstacles.'
      },
      {
        name: 'Enduring Vigor',
        type: 'Passive',
        apCost: 'None',
        description: 'Your conditioning allows you to push through pain.',
        mechanics: 'When you would gain exhaustion from physical exertion, you can ignore the first level of exhaustion until your next long rest. Once per long rest.',
        synergies: 'Provides resistance to fatigue effects.'
      },
      {
        name: 'Crushing Blow',
        type: 'Active',
        apCost: '2 AP',
        description: 'Put extra force behind your attack.',
        mechanics: 'Your next successful melee attack deals an additional 1d6 damage and the target must make a Constitution save or be knocked prone. Once per short rest.',
        synergies: 'Adds impact to melee attacks.'
      }
    ],

    benefits: [
      '+1 to Strength attribute checks',
      'Increased carrying capacity',
      'Advantage on intimidation against weaker foes'
    ],
    restrictions: [
      'Abilities require physical exertion',
      'Some effects may cause fatigue',
      'Rage abilities can be difficult to control'
    ]
  },

  mercenary: {
    description: 'Mercenaries combine practical skills with specialized knowledge, relying on training and technique rather than innate power. They are adaptable professionals who excel through preparation, precision, and mastery of their chosen tools.',

    subBackgrounds: {
      sellsword: {
        name: 'Sellsword',
        description: 'Professional warriors who fight for coin.',
        theme: 'Combat expertise and weapon mastery'
      },
      scout: {
        name: 'Professional Scout',
        description: 'Specialists in reconnaissance and information gathering.',
        theme: 'Stealth, observation, and survival skills'
      },
      tactician: {
        name: 'Field Tactician',
        description: 'Strategic minds who excel at battlefield analysis.',
        theme: 'Tactical knowledge and leadership'
      }
    },

    abilityPool: [
      {
        name: 'Weapon Training',
        type: 'Passive',
        apCost: 'None',
        description: 'Your professional training grants weapon expertise.',
        mechanics: 'Choose two weapon types. You gain +1 to attack rolls with those weapons. If you\'re already proficient, you can reroll 1s on damage dice.',
        synergies: 'Improves reliability with chosen weapons.'
      },
      {
        name: 'Quick Assessment',
        type: 'Active',
        apCost: '1 AP',
        description: 'Quickly size up an opponent.',
        mechanics: 'Learn one piece of information about a creature: AC, approximate hit points (full/bloodied/near death), or one damage resistance/vulnerability. At will.',
        synergies: 'Provides tactical information for combat planning.'
      },
      {
        name: 'Combat Reflexes',
        type: 'Passive',
        apCost: 'None',
        description: 'Your training grants enhanced reaction time.',
        mechanics: 'Gain +1 to initiative rolls and advantage on Dexterity saving throws to avoid area effects.',
        synergies: 'Improves combat positioning and survivability.'
      },
      {
        name: 'Dirty Tricks',
        type: 'Active',
        apCost: '2 AP',
        description: 'Use underhanded tactics to gain an edge.',
        mechanics: 'Your next attack, if successful, forces the target to make a Constitution save or be blinded or have their movement reduced by half (your choice) until end of their next turn. Once per short rest.',
        synergies: 'Provides tactical advantages in combat.'
      },
      {
        name: 'Professional Network',
        type: 'Passive',
        apCost: 'None',
        description: 'Your connections provide useful information.',
        mechanics: 'In settlements, you can spend 1 hour to gather basic information about local threats, opportunities, or notable individuals. Once per location.',
        synergies: 'Useful for investigation and social encounters.'
      }
    ],

    benefits: [
      '+1 to Dexterity attribute checks',
      'Improved weapon proficiency',
      'Enhanced tactical awareness'
    ],
    restrictions: [
      'Abilities rely on training and experience',
      'Some techniques may be considered dishonorable',
      'Professional network limited to civilized areas'
    ]
  },

  sentinel: {
    description: 'Sentinels stand as guardians between realms, drawing power from cosmic boundaries and protective oaths. They manipulate space, barriers, and perception to defend what they value, often serving as the last line of defense against otherworldly threats.',

    subBackgrounds: {
      guardian: {
        name: 'Realm Guardian',
        description: 'Protectors who stand watch against otherworldly threats.',
        theme: 'Protective abilities and barrier creation'
      },
      warden: {
        name: 'Planar Warden',
        description: 'Specialists in detecting and containing planar disturbances.',
        theme: 'Dimensional awareness and containment'
      },
      watchman: {
        name: 'Eternal Watchman',
        description: 'Vigilant sentries who never rest in their duties.',
        theme: 'Vigilance and unwavering dedication'
      }
    },

    abilityPool: [
      {
        name: 'Guardian\'s Vigilance',
        type: 'Passive',
        apCost: 'None',
        description: 'Your watchful nature grants enhanced awareness.',
        mechanics: 'Gain advantage on Perception checks and cannot be surprised while conscious. Additionally, you can stay awake during long rests and still gain the benefits.',
        synergies: 'Excellent for keeping watch and detecting threats.'
      },
      {
        name: 'Protective Stance',
        type: 'Active',
        apCost: '2 AP',
        description: 'Take a defensive position to shield allies.',
        mechanics: 'Until the start of your next turn, allies within 5 feet gain +1 AC and you can use your reaction to impose disadvantage on attacks against them. Once per short rest.',
        synergies: 'Provides tactical protection for nearby allies.'
      },
      {
        name: 'Dimensional Sense',
        type: 'Active',
        apCost: '1 AP',
        description: 'Detect disturbances in the fabric of reality.',
        mechanics: 'Sense the presence of portals, teleportation magic, or extraplanar creatures within 60 feet for 10 minutes. Once per long rest.',
        synergies: 'Useful for detecting planar threats and magical transportation.'
      },
      {
        name: 'Warding Gesture',
        type: 'Reaction',
        apCost: '1 AP',
        description: 'Create a brief protective barrier.',
        mechanics: 'When an ally within 30 feet is targeted by an attack, reduce the damage by 1d4+1. Once per short rest.',
        synergies: 'Provides emergency protection for allies.'
      },
      {
        name: 'Steadfast Resolve',
        type: 'Passive',
        apCost: 'None',
        description: 'Your dedication grants mental fortitude.',
        mechanics: 'Gain advantage on saving throws against being charmed or frightened. Additionally, you can end one charm or fear effect on yourself as an action once per long rest.',
        synergies: 'Provides protection against mental manipulation.'
      }
    ],

    benefits: [
      '+1 to Constitution saving throws',
      'Enhanced perception and vigilance',
      'Minor protective abilities'
    ],
    restrictions: [
      'Protective abilities require proximity to allies',
      'Some powers only work against specific threats',
      'Vigilance can be mentally taxing'
    ]
  }
};

export default backgroundAbilities;
