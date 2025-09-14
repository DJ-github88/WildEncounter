const races = [
  {
    id: 'nordmark',
    name: 'Nordmark',
    icon: '◆',
    description: 'Iron-willed descendants of the frozen northlands where winter never dies',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '80-120 years',
      languages: ['Common', 'Old Nord', 'Runic'],
      lore: 'The Nordmark are the hardy folk of the eternal winter lands, where the sun barely rises and survival depends on strength of arm and will. They are descended from ancient warrior-kings who carved kingdoms from ice and stone. Their culture revolves around honor, strength, and the belief that a glorious death in battle ensures a place in the halls of their ancestors. They are natural warriors and leaders, though their pride and quick tempers often lead them into conflict with more diplomatic peoples.'
    },
    variants: [
      {
        id: 'nordmark-berserker',
        name: 'Berserker Nordmark',
        description: 'Fierce warriors who embrace the fury of battle above all else',
        statModifiers: {
          constitution: 2,
          strength: 2,
          agility: -1,
          intelligence: -2,
          spirit: 1,
          charisma: -1
        },
        traits: [
          {
            name: 'Frostborn',
            description: 'Resistance to cold damage and advantage on saves against exhaustion from harsh weather. You can survive in arctic conditions without shelter, but your breath creates visible frost even in warm climates, making stealth difficult.'
          },
          {
            name: 'Battle Fury',
            description: 'When reduced to half hit points, enter a berserker rage (1 AP). Gain +3 damage to all attacks but take -3 to AC and cannot cast spells for 1 minute. Once per long rest.'
          },
          {
            name: 'Reckless Courage',
            description: 'Immunity to fear effects, but you must make a Spirit save (DC 15) to retreat from combat or avoid a direct challenge. Your bloodlust makes tactical withdrawal nearly impossible.'
          }
        ]
      },
      {
        id: 'nordmark-skald',
        name: 'Skald Nordmark',
        description: 'Warrior-poets who preserve the ancient sagas and inspire others',
        statModifiers: {
          constitution: 1,
          strength: 0,
          agility: -1,
          intelligence: 1,
          spirit: 2,
          charisma: 1
        },
        traits: [
          {
            name: 'Frostborn',
            description: 'Resistance to cold damage and advantage on saves against exhaustion from harsh weather. You can survive in arctic conditions without shelter, but your breath creates visible frost even in warm climates, making stealth difficult.'
          },
          {
            name: 'Inspiring Saga',
            description: 'You can recite ancient sagas to inspire allies (2 AP). All allies within 30 feet gain advantage on their next attack or save. Once per short rest, but you must speak loudly, potentially alerting enemies.'
          },
          {
            name: 'Ancestral Memory',
            description: 'You have advantage on History checks and can recall ancient lore, but you are compelled to share these stories at length, often at inappropriate times, giving disadvantage on stealth group checks.'
          }
        ]
      },
      {
        id: 'nordmark-icewalker',
        name: 'Icewalker Nordmark',
        description: 'Hardy survivors who have adapted to the harshest frozen wastes',
        statModifiers: {
          constitution: 3,
          strength: 0,
          agility: 0,
          intelligence: -1,
          spirit: 1,
          charisma: -2
        },
        traits: [
          {
            name: 'Deep Frost',
            description: 'Immunity to cold damage and exhaustion from harsh weather. You can survive in arctic conditions indefinitely, but you take vulnerability to fire damage and have disadvantage on saves against heat effects.'
          },
          {
            name: 'Ice Walk',
            description: 'You can walk on ice and snow without slipping and leave no tracks in frozen terrain. However, you move at half speed on warm ground and take 1 point of damage per hour in temperatures above 70°F.'
          },
          {
            name: 'Frozen Heart',
            description: 'You have advantage on saves against charm and emotion effects, but you have disadvantage on all Charisma-based social interactions due to your cold, distant demeanor.'
          }
        ]
      }
    ]
  },
  {
    id: 'corvani',
    name: 'Corvani',
    icon: '◈',
    description: 'Raven-marked people from the mist-shrouded highlands who commune with omens',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '90-130 years',
      languages: ['Common', 'Highland Cant', 'Corvid'],
      lore: 'The Corvani dwell in the mist-shrouded highlands where ravens gather in great murders to share secrets across the land. Born with dark hair that shimmers like raven feathers and pale eyes that seem to see beyond the present moment, they are natural oracles and messengers. Their culture revolves around reading omens in the flight of birds, the patterns of mist, and the whispers of the wind. They serve as seers, scouts, and keepers of ancient knowledge, though their grim prophecies and unsettling insights often make others uncomfortable.'
    },
    variants: [
      {
        id: 'corvani-oracle',
        name: 'Oracle Corvani',
        description: 'Gifted seers who peer deep into the threads of fate',
        statModifiers: {
          constitution: -1,
          strength: -2,
          agility: 1,
          intelligence: 2,
          spirit: 3,
          charisma: -1
        },
        traits: [
          {
            name: 'Prophetic Vision',
            description: 'You can interpret signs and portents with supernatural accuracy. Once per long rest, you can gain advantage on any roll by spending 10 minutes reading omens, but you must share any dire omens you see with others and suffer visions that cause disadvantage on Perception for 1 hour after.'
          },
          {
            name: 'Raven\'s Memory',
            description: 'You have perfect recall and can remember any detail you\'ve observed. Additionally, you can communicate with ravens and crows within 1 mile, but you are compelled to feed any corvid you encounter, spending at least 1 gold per day on this compulsion.'
          },
          {
            name: 'Fate\'s Burden',
            description: 'You can see normally through fog, mist, and smoke, and have advantage on Initiative rolls. However, you involuntarily speak aloud any omens of death or disaster you perceive, and must make a Spirit save (DC 13) each morning or be overwhelmed by visions, gaining one level of exhaustion.'
          }
        ]
      },
      {
        id: 'corvani-scout',
        name: 'Scout Corvani',
        description: 'Swift messengers who navigate the treacherous highland paths',
        statModifiers: {
          constitution: 0,
          strength: -1,
          agility: 3,
          intelligence: 1,
          spirit: 1,
          charisma: -2
        },
        traits: [
          {
            name: 'Highland Runner',
            description: 'Your speed increases to 35 feet, and you ignore difficult terrain in mountainous or hilly areas. However, you have disadvantage on Constitution saves when not moving for more than 1 hour, as you become restless and agitated.'
          },
          {
            name: 'Corvid Network',
            description: 'You can send simple messages via ravens and crows to any location within 50 miles once per day. The message takes 1d4 hours to arrive, but you must spend 30 minutes each day maintaining relationships with local corvids or lose this ability.'
          },
          {
            name: 'Mist Walker',
            description: 'You can see normally through fog, mist, and smoke, and have advantage on stealth checks in such conditions. However, you are compelled to investigate any unusual mists or fogs, requiring a Spirit save (DC 12) to avoid doing so.'
          }
        ]
      }
    ]
  },
  {
    id: 'grimheart',
    name: 'Grimheart',
    icon: '◆',
    description: 'Stone-souled miners who delve too deep and awakened something ancient',
    baseInfo: {
      size: 'Medium',
      speed: 25,
      lifespan: '300-500 years',
      languages: ['Common', 'Terran', 'Deep Speech'],
      lore: 'The Grimheart were once a proud mining folk who delved too greedily into the earth\'s depths. They awakened something ancient and terrible that changed them forever, turning their flesh to living stone and filling their minds with whispers from the deep. Now they are compelled to dig ever deeper, seeking either redemption or the source of their curse. Their society is built around vast underground cities carved from living rock, where they practice their ancient crafts while struggling against the alien influence that grows stronger with each generation.'
    },
    variants: [
      {
        id: 'grimheart-delver',
        name: 'Delver Grimheart',
        description: 'Obsessive miners driven by whispers from the deep earth',
        statModifiers: {
          constitution: 2,
          strength: 2,
          agility: -2,
          intelligence: 1,
          spirit: -2,
          charisma: -2
        },
        traits: [
          {
            name: 'Stone Flesh',
            description: 'Your skin has a stone-like texture. Gain +1 natural armor and resistance to bludgeoning damage, but you sink like a stone in water and have disadvantage on swimming checks. You can survive being buried alive indefinitely.'
          },
          {
            name: 'Deep Whispers',
            description: 'You can hear the voices of things that dwell in the deep earth. Once per long rest, you can ask the stones a question about events that occurred in the area within the last 100 years, but the whispers grow stronger each use, giving cumulative -1 to Spirit saves until you spend a day in sunlight.'
          },
          {
            name: 'Compulsive Delver',
            description: 'You have tremorsense 30 feet while touching stone or earth and can detect structural weaknesses in buildings. However, you must make a Spirit save (DC 15) every hour when underground to avoid digging deeper, and you suffer one level of exhaustion per day spent above ground.'
          }
        ]
      },
      {
        id: 'grimheart-forgemaster',
        name: 'Forgemaster Grimheart',
        description: 'Master crafters who channel earth\'s power into their work',
        statModifiers: {
          constitution: 1,
          strength: 1,
          agility: -1,
          intelligence: 2,
          spirit: 0,
          charisma: -2
        },
        traits: [
          {
            name: 'Stone Flesh',
            description: 'Your skin has a stone-like texture. Gain +1 natural armor and resistance to bludgeoning damage, but you sink like a stone in water and have disadvantage on swimming checks. You can survive being buried alive indefinitely.'
          },
          {
            name: 'Earth Shaper',
            description: 'You can shape stone and metal with your bare hands, taking 10 minutes to create simple tools or weapons. Once per long rest, you can cast Mending without expending AP, but you must use raw materials worth at least 10 gold per use.'
          },
          {
            name: 'Craft Obsession',
            description: 'You have advantage on all crafting checks and can work twice as fast as normal, but you become fixated on perfection. When crafting, you must make a Spirit save (DC 12) each day or continue working, ignoring food, sleep, and social obligations.'
          }
        ]
      },
      {
        id: 'grimheart-stoneguard',
        name: 'Stoneguard Grimheart',
        description: 'Stalwart defenders who have embraced their rocky nature',
        statModifiers: {
          constitution: 3,
          strength: 0,
          agility: -3,
          intelligence: 0,
          spirit: 1,
          charisma: -1
        },
        traits: [
          {
            name: 'Living Stone',
            description: 'Your skin has become truly stone-like. Gain +2 natural armor and resistance to bludgeoning and piercing damage, but you sink like a stone in water, automatically fail swimming checks, and your speed is reduced by 5 feet.'
          },
          {
            name: 'Stone Stance',
            description: 'As an action (1 AP), you can root yourself to the ground, becoming immobile but gaining advantage on all saves and resistance to all damage for 1 minute. Once per short rest, but you cannot move or take reactions while rooted.'
          },
          {
            name: 'Earthen Resilience',
            description: 'You have advantage on Constitution saves and are immune to being knocked prone while on stone or earth, but you have disadvantage on Charisma checks with non-Grimheart due to your increasingly inhuman appearance.'
          }
        ]
      }
    ]
  },
  {
    id: 'veilborn',
    name: 'Veilborn',
    icon: '◊',
    description: 'Pale folk from the borderlands where reality grows thin and whispers carry truth',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '100-150 years',
      languages: ['Common', 'Ethereal', 'Whispertongue'],
      lore: 'The Veilborn come from the liminal spaces where the material world touches other realms - misty valleys, ancient crossroads, and places where reality grows thin. Born with translucent skin and eyes that reflect otherworldly light, they exist partially in multiple planes simultaneously. Their communities are built around sacred sites where the veil between worlds is weakest, and they serve as guardians and interpreters of otherworldly phenomena. They are natural mediums, seers, and planar scholars, though their connection to other realms sometimes makes them seem distant and otherworldly to more grounded folk.'
    },
    variants: [
      {
        id: 'veilborn-medium',
        name: 'Medium Veilborn',
        description: 'Gifted communicators with the spirits of other realms',
        statModifiers: {
          constitution: -2,
          strength: -1,
          agility: 0,
          intelligence: 1,
          spirit: 3,
          charisma: 2
        },
        traits: [
          {
            name: 'Spirit Sight',
            description: 'You can see through illusions and detect invisible creatures within 60 feet, and can communicate with spirits and ghosts. However, you also see disturbing otherworldly entities constantly, requiring a Spirit save (DC 12) each morning or gain one level of exhaustion from lack of restful sleep.'
          },
          {
            name: 'Ethereal Whispers',
            description: 'You can send and receive messages through the ethereal winds to any Veilborn within 10 miles once per long rest, and can speak with recently deceased spirits (within 24 hours). However, you involuntarily channel spirits, requiring a Spirit save (DC 15) when stressed or you speak in their voice for 1d4 rounds.'
          },
          {
            name: 'Planar Sensitivity',
            description: 'You can sense planar disturbances within 1 mile and have advantage on saves against extraplanar effects, but you are vulnerable to force damage and take double damage from banishment effects. Additionally, you must make a Constitution save (DC 13) when crossing planar boundaries or be stunned for 1 round.'
          }
        ]
      },
      {
        id: 'veilborn-wanderer',
        name: 'Wanderer Veilborn',
        description: 'Restless travelers who slip between the cracks of reality',
        statModifiers: {
          constitution: -1,
          strength: -1,
          agility: 3,
          intelligence: 2,
          spirit: 1,
          charisma: 0
        },
        traits: [
          {
            name: 'Veil Sight',
            description: 'You can see through illusions and detect invisible creatures within 60 feet, and have advantage on Investigation checks to find hidden passages or secret doors. However, you see too much detail in everything, giving disadvantage on Perception checks to notice immediate threats.'
          },
          {
            name: 'Phase Step',
            description: 'You can briefly step into the border realm (2 AP) to pass through solid objects for one round, or teleport up to 30 feet once per short rest. However, each use requires a Constitution save (DC 12) or you become partially incorporeal for 1 hour, unable to interact with physical objects normally.'
          },
          {
            name: 'Planar Wanderlust',
            description: 'You can navigate between planes more easily and have advantage on saves against being lost or disoriented, but you suffer from constant wanderlust. You must make a Spirit save (DC 14) each week or be compelled to travel to a new location, unable to rest until you do.'
          }
        ]
      }
    ]
  },
  {
    id: 'mirrorkin',
    name: 'Mirrorkin',
    icon: '◇',
    description: 'Stolen children raised by fae who can wear any face but have no true form',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '100-200 years',
      languages: ['Common', 'Sylvan', 'Any language of current form'],
      lore: 'Mirrorkin are the tragic result of fae bargains - mortal children stolen and replaced with fae duplicates, then raised in the otherworld until they forget their original selves. They return to the mortal world as perfect mimics, able to wear any face but having lost their own identity in the process. They are compulsive shapeshifters, constantly seeking new identities to fill the void where their true self should be. Many become actors, spies, or con artists, while others desperately search for their original families or try to discover who they truly are beneath all the masks.'
    },
    variants: [
      {
        id: 'mirrorkin-doppel',
        name: 'Doppel Mirrorkin',
        description: 'Master impersonators who have perfected the art of deception',
        statModifiers: {
          constitution: -1,
          strength: -1,
          agility: 2,
          intelligence: 2,
          spirit: -2,
          charisma: 3
        },
        traits: [
          {
            name: 'Perfect Mimicry',
            description: 'You can perfectly mimic the appearance, voice, and mannerisms of any humanoid you\'ve observed for at least 30 minutes. The transformation takes 1 minute and lasts until you choose to change, but you feel intense physical pain when reverting to your true form, taking 1d4 psychic damage.'
          },
          {
            name: 'Fae Glamour',
            description: 'You can cast Charm Person once per short rest without expending AP and have advantage on all deception checks. However, you are vulnerable to cold iron weapons (double damage) and must make a Spirit save (DC 12) when touching iron or be stunned for 1 round.'
          },
          {
            name: 'Identity Void',
            description: 'You have no true form and struggle with identity. When maintaining a disguise for more than 12 hours, you must make a Spirit save (DC 16) or begin permanently adopting that person\'s personality traits. You also have disadvantage on all saves against confusion, charm, and mind-affecting spells.'
          }
        ]
      },
      {
        id: 'mirrorkin-lost',
        name: 'Lost Mirrorkin',
        description: 'Broken souls searching desperately for their original identity',
        statModifiers: {
          constitution: -2,
          strength: -1,
          agility: 1,
          intelligence: 0,
          spirit: 1,
          charisma: 1
        },
        traits: [
          {
            name: 'Fragmented Form',
            description: 'You can partially mimic features of any humanoid you\'ve seen, but cannot maintain a complete disguise. You can change individual features (eye color, hair, height by 6 inches) but the transformation is obviously unnatural, giving disadvantage on deception checks but advantage on intimidation.'
          },
          {
            name: 'Memory Echoes',
            description: 'You sometimes access memories from people you\'ve mimicked. Once per long rest, you can make an Intelligence check (DC 15) to recall information someone you\'ve impersonated would know, but you must make a Spirit save (DC 13) or be confused for 1 round as foreign memories overwhelm you.'
          },
          {
            name: 'Desperate Search',
            description: 'You are driven to find your original identity. You have advantage on Investigation checks related to your past, but you are compelled to investigate any clues about your origins, requiring a Spirit save (DC 14) to ignore such opportunities. Additionally, you suffer one level of exhaustion each week you don\'t pursue leads about your true self.'
          }
        ]
      },
      {
        id: 'mirrorkin-fae',
        name: 'Fae Mirrorkin',
        description: 'Those who have embraced their otherworldly fae nature',
        statModifiers: {
          constitution: 0,
          strength: -2,
          agility: 3,
          intelligence: 1,
          spirit: 0,
          charisma: 2
        },
        traits: [
          {
            name: 'Fae Form',
            description: 'You can shift between your humanoid form and a more obviously fae appearance with pointed ears, strange eyes, and an otherworldly beauty. In fae form, you have advantage on Charisma checks with fae creatures but disadvantage with most humanoids who find you unsettling.'
          },
          {
            name: 'Wild Magic',
            description: 'You can cast Minor Illusion at will and Charm Person once per short rest without expending AP. However, your magic is unpredictable - whenever you cast a spell, roll a d20. On a 1, a random minor magical effect occurs (DM\'s choice).'
          },
          {
            name: 'Fae Bargains',
            description: 'You can make supernatural bargains with others. Once per long rest, you can offer a deal where both parties gain a benefit but also accept a curse or obligation. However, you are bound by fae rules - you cannot lie directly, must keep your word exactly as spoken, and are vulnerable to cold iron (double damage).'
          }
        ]
      }
    ]
  },
  {
    id: 'wildkin',
    name: 'Wildkin',
    icon: '⟐',
    description: 'Antlered forest dwellers who share an ancient bond with the primal wilderness',
    baseInfo: {
      size: 'Medium',
      speed: 35,
      lifespan: '120-180 years',
      languages: ['Common', 'Sylvan', 'Beast Speech'],
      lore: 'The Wildkin are the children of the deep forests, born with magnificent antlers and an unbreakable connection to the natural world. They live in harmony with the wilderness, their communities built in sacred groves where the trees themselves seem to welcome them. Their antlers mark the seasons of their lives, growing more elaborate with age and wisdom. They serve as guardians of the wild places, protectors of ancient forests, and mediators between civilization and nature. Though they can seem primitive to city dwellers, they possess a deep understanding of the natural world that surpasses any scholarly knowledge.'
    },
    variants: [
      {
        id: 'wildkin-guardian',
        name: 'Guardian Wildkin',
        description: 'Fierce protectors of the ancient forests and sacred groves',
        statModifiers: {
          constitution: 2,
          strength: 2,
          agility: 1,
          intelligence: -2,
          spirit: 1,
          charisma: -3
        },
        traits: [
          {
            name: 'Great Antlers',
            description: 'You have massive, branching antlers. Your unarmed strikes deal 1d8 + Strength piercing damage and you can charge for an additional 1d6 damage, but your antlers make it impossible to wear any headgear and you have disadvantage on stealth checks in any environment with overhead obstacles.'
          },
          {
            name: 'Forest Warden',
            description: 'You can communicate with plants and trees, gaining information about recent events in the area. You can also command local plant life to create difficult terrain in a 20-foot radius once per long rest, but you become enraged if you witness significant environmental destruction, requiring a Spirit save (DC 15) to avoid attacking the perpetrators.'
          },
          {
            name: 'Territorial Instinct',
            description: 'You ignore difficult terrain in natural environments and can track creatures perfectly in wilderness areas. However, you become increasingly agitated the longer you stay in one area, requiring a Spirit save (DC 12) each week to avoid marking territory aggressively and driving away other inhabitants.'
          }
        ]
      },
      {
        id: 'wildkin-wanderer',
        name: 'Wanderer Wildkin',
        description: 'Nomadic scouts who roam between the scattered forest communities',
        statModifiers: {
          constitution: 0,
          strength: 0,
          agility: 3,
          intelligence: -1,
          spirit: 2,
          charisma: -1
        },
        traits: [
          {
            name: 'Swift Antlers',
            description: 'You have smaller, more streamlined antlers. Your unarmed strikes deal 1d4 + Strength piercing damage, but you can move through difficult terrain without penalty and your antlers don\'t interfere with headgear, though you still have disadvantage on stealth in dense foliage.'
          },
          {
            name: 'Beast Network',
            description: 'You can communicate with beasts and have advantage on Animal Handling checks. You can send simple messages via animals to locations up to 50 miles away, but you must spend at least 2 hours per day communing with local wildlife or suffer disadvantage on all Wisdom-based checks.'
          },
          {
            name: 'Restless Spirit',
            description: 'Your speed increases to 40 feet and you can travel twice as far per day without exhaustion. However, you suffer from constant wanderlust - you must make a Spirit save (DC 13) each week to remain in the same general area, and you cannot benefit from long rests if you haven\'t traveled at least 10 miles that day.'
          }
        ]
      },
      {
        id: 'wildkin-shaman',
        name: 'Shaman Wildkin',
        description: 'Wise druids who commune with the spirits of nature',
        statModifiers: {
          constitution: 1,
          strength: -1,
          agility: 1,
          intelligence: 0,
          spirit: 3,
          charisma: 0
        },
        traits: [
          {
            name: 'Ritual Antlers',
            description: 'Your antlers are carved with mystical symbols. Your unarmed strikes deal 1d6 + Strength piercing damage, and you can use your antlers as a spellcasting focus. However, the carvings make your antlers fragile - they break on a critical fumble in combat and take a full month to regrow.'
          },
          {
            name: 'Nature\'s Voice',
            description: 'You can speak with plants, animals, and natural spirits, gaining detailed information about the natural world. Once per long rest, you can cast Speak with Animals or Speak with Plants without expending AP, but you are compelled to spend at least 6 hours per day in meditation with nature or lose access to these abilities.'
          },
          {
            name: 'Seasonal Attunement',
            description: 'You gain different benefits based on the season: Spring (+1 to healing), Summer (resistance to fire), Autumn (advantage on Wisdom saves), Winter (resistance to cold). However, you also suffer penalties in the opposite season and must make a Constitution save (DC 14) when the seasons change or be incapacitated for 1d4 days.'
          }
        ]
      }
    ]
  },
  {
    id: 'ashmark',
    name: 'Ashmark',
    icon: '▲',
    description: 'Soot-stained survivors from the volcanic wastelands where fire rains from the sky',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '70-100 years',
      languages: ['Common', 'Ignan', 'Ashspeak'],
      lore: 'The Ashmark are the hardy survivors of the great volcanic cataclysm that turned their homeland into a burning wasteland. Their skin bears the permanent mark of ash and soot, and their eyes glow like embers in the dark. They have adapted to life in the most hostile environments, building their settlements in the shadows of active volcanoes and thriving where others would perish. Their culture values endurance, resourcefulness, and the ability to find opportunity in disaster. They are natural smiths, miners, and explorers of dangerous places.'
    },
    variants: [
      {
        id: 'ashmark-forgeborn',
        name: 'Forgeborn Ashmark',
        description: 'Master smiths whose bodies burn with the heat of the forge',
        statModifiers: {
          constitution: 2,
          strength: 2,
          agility: -2,
          intelligence: 2,
          spirit: 0,
          charisma: -3
        },
        traits: [
          {
            name: 'Forge Heart',
            description: 'You have resistance to fire damage and immunity to heat exhaustion. Your body temperature is so high that you can work metal with your bare hands, but you are vulnerable to cold damage (double damage) and cannot wear normal clothing or armor without special heat-resistant materials.'
          },
          {
            name: 'Molten Touch',
            description: 'You can heat metal objects to molten temperature with a touch (1 AP), dealing 2d6 fire damage to creatures touching them. You can also shape heated metal like clay, but your touch ignites flammable objects automatically, making stealth nearly impossible and causing 1 fire damage to creatures you touch.'
          },
          {
            name: 'Obsessive Craft',
            description: 'You have advantage on all crafting checks and can work twice as fast as normal, but when you begin crafting something, you must make a Spirit save (DC 15) each day or continue working obsessively, ignoring food, sleep, and danger until the project is complete.'
          }
        ]
      },
      {
        id: 'ashmark-survivor',
        name: 'Survivor Ashmark',
        description: 'Hardy wanderers who have learned to thrive in any harsh environment',
        statModifiers: {
          constitution: 3,
          strength: 0,
          agility: 0,
          intelligence: 1,
          spirit: 1,
          charisma: -2
        },
        traits: [
          {
            name: 'Ashborn',
            description: 'You have resistance to fire damage and advantage on saves against heat exhaustion. Your skin has a grey, ashen quality, but you are vulnerable to cold damage and have disadvantage on saves against cold effects.'
          },
          {
            name: 'Wasteland Adaptation',
            description: 'You can survive in any harsh environment (desert, tundra, toxic areas) without special equipment and need only half the normal food and water. However, you suffer withdrawal-like symptoms in comfortable environments, taking -1 to all rolls when in temperate climates for more than a week.'
          },
          {
            name: 'Disaster Sense',
            description: 'You can sense natural disasters (earthquakes, volcanic eruptions, storms) up to 24 hours before they occur and have advantage on saves against environmental hazards. However, you are compelled to seek out dangerous situations, requiring a Spirit save (DC 13) to avoid investigating obvious hazards.'
          }
        ]
      },
      {
        id: 'ashmark-ember',
        name: 'Ember Ashmark',
        description: 'Volatile individuals whose emotions burn as hot as their homeland',
        statModifiers: {
          constitution: 1,
          strength: 1,
          agility: 1,
          intelligence: 0,
          spirit: -1,
          charisma: -1
        },
        traits: [
          {
            name: 'Burning Soul',
            description: 'You have resistance to fire damage and your eyes glow like embers in darkness, providing dim light in a 10-foot radius. However, you are vulnerable to cold damage and your emotional state affects your body temperature - you automatically ignite flammable objects when angry or excited.'
          },
          {
            name: 'Explosive Temper',
            description: 'When you take damage, you can choose to release a burst of heat (no action required). All creatures within 5 feet take 1d4 fire damage (Dex save DC 12 for half). However, you must make a Spirit save (DC 10 + damage taken) or enter a rage-like state, attacking the nearest creature for 1 round.'
          },
          {
            name: 'Ember Trail',
            description: 'You leave a trail of smoldering footprints that last for 1 hour, and you can ignite this trail as an action, creating a line of fire. However, this makes you extremely easy to track, and you cannot hide your passage or thermal signature from any form of detection.'
          }
        ]
      }
    ]
  },
  {
    id: 'skinwalker',
    name: 'Skinwalker',
    icon: '◈',
    description: 'Cursed shamans who can wear the forms of beasts but lose their humanity',
    baseInfo: {
      size: 'Medium',
      speed: 30,
      lifespan: '120-200 years',
      languages: ['Common', 'Druidic', 'Beast Speech'],
      lore: 'Skinwalkers are shamans who broke ancient taboos by using their shapeshifting magic for evil purposes, becoming cursed to forever hunger for new forms. They must kill and consume the heart of a creature to take its shape, and each transformation costs them a piece of their humanity. They are feared and reviled by most civilized peoples, seen as abominations that blur the line between human and beast. Many Skinwalkers struggle against their curse, seeking redemption, while others embrace their predatory nature and become monsters that hunt in the wilderness.'
    },
    variants: [
      {
        id: 'skinwalker-hunter',
        name: 'Hunter Skinwalker',
        description: 'Predatory shapeshifters who have embraced their bestial nature',
        statModifiers: {
          constitution: 1,
          strength: 2,
          agility: 3,
          intelligence: -2,
          spirit: 0,
          charisma: -4
        },
        traits: [
          {
            name: 'Perfect Predator',
            description: 'You can transform into any beast you have killed and consumed the heart of. The transformation takes 30 seconds and lasts up to 12 hours, but each use requires a Spirit save (DC 16) or you lose a cherished memory and gain a bestial instinct permanently.'
          },
          {
            name: 'Blood Frenzy',
            description: 'You have advantage on survival checks for tracking and can sense wounded creatures within 1 mile. You have darkvision 120 feet, but when you smell blood, you must make a Spirit save (DC 15) or enter a hunting frenzy, unable to take any action except pursuing and attacking the wounded creature.'
          },
          {
            name: 'Apex Curse',
            description: 'Your true form is terrifying - gaunt, with predatory features and glowing eyes. You automatically fail Charisma checks with civilized creatures, must consume fresh raw meat daily or suffer two levels of exhaustion, and are vulnerable to silver weapons (double damage). However, beasts treat you as an alpha predator.'
          }
        ]
      },
      {
        id: 'skinwalker-lost',
        name: 'Lost Skinwalker',
        description: 'Tragic souls fighting against their curse and seeking redemption',
        statModifiers: {
          constitution: -1,
          strength: 0,
          agility: 1,
          intelligence: 0,
          spirit: 2,
          charisma: -2
        },
        traits: [
          {
            name: 'Reluctant Shape',
            description: 'You can transform into any beast you have killed, but only if it was in self-defense or mercy. The transformation takes 2 minutes and lasts up to 4 hours. Each use requires a Spirit save (DC 12) or you lose a happy memory, but you can choose to fail this save to preserve your humanity.'
          },
          {
            name: 'Empathic Burden',
            description: 'You can sense the emotions of creatures within 30 feet and have advantage on Animal Handling checks. You have darkvision 60 feet, but you also feel the pain and fear of creatures you\'ve killed, requiring a Spirit save (DC 13) each morning or start the day with one level of exhaustion.'
          },
          {
            name: 'Seeking Redemption',
            description: 'Your curse is weaker due to your resistance. You have disadvantage on social interactions but not automatic failure, need raw meat only twice per week, and take normal damage from silver. However, you are compelled to help others, requiring a Spirit save (DC 14) to ignore someone in genuine need.'
          }
        ]
      }
    ]
  },
  {
    id: 'graveworn',
    name: 'Graveworn',
    icon: '◼',
    description: 'Undead warriors who guard ancient treasures and refuse to stay buried',
    baseInfo: {
      size: 'Medium',
      speed: 25,
      lifespan: 'Immortal until destroyed',
      languages: ['Common', 'Old Nord', 'Deathspeech'],
      lore: 'Graveworn are the undead remnants of ancient warriors and treasure-guardians who were buried with great wealth and refused to let death claim them. They rise from their barrows as desiccated but incredibly strong undead, driven by an obsession with protecting their hoards. Their flesh is mummified and their eyes glow with cold fire. They retain their warrior skills and cunning but are consumed by greed and territorial instincts. Most Graveworn are found in ancient burial sites, but some walk among the living, seeking to accumulate ever greater treasures to guard in their eternal unlife.'
    },
    variants: [
      {
        id: 'graveworn-hoarder',
        name: 'Hoarder Graveworn',
        description: 'Ancient guardians consumed by an insatiable greed for treasure',
        statModifiers: {
          constitution: 3,
          strength: 2,
          agility: -3,
          intelligence: 0,
          spirit: -1,
          charisma: -4
        },
        traits: [
          {
            name: 'Undead Resilience',
            description: 'You have resistance to poison and disease, and advantage on saves against exhaustion. You don\'t need to breathe, eat, drink, or sleep, but you are vulnerable to radiant damage (double damage) and automatically fail saves against turn undead effects from clerics of 5th level or higher.'
          },
          {
            name: 'Grave Strength',
            description: 'Your undead nature grants supernatural strength. You count as Large for carrying capacity and can break through barriers that would stop the living, but your decaying form means you automatically fail all Charisma checks and are immediately recognized as undead.'
          },
          {
            name: 'Treasure Madness',
            description: 'You can sense valuable items (worth 50+ gold) within 120 feet and know their exact value. However, you are utterly consumed by greed - you must make a Spirit save (DC 18) to give away, spend, or ignore valuable items. You become hostile if anyone touches your possessions and must hoard at least 1000 gold worth of treasure or suffer one level of exhaustion per day.'
          }
        ]
      },
      {
        id: 'graveworn-warrior',
        name: 'Warrior Graveworn',
        description: 'Undead champions who retain their martial prowess from life',
        statModifiers: {
          constitution: 2,
          strength: 3,
          agility: -1,
          intelligence: 0,
          spirit: 1,
          charisma: -3
        },
        traits: [
          {
            name: 'Undead Fortitude',
            description: 'You have resistance to poison and disease, and don\'t need to breathe, eat, drink, or sleep. When reduced to 0 hit points, roll a d20. On 15+, you drop to 1 hit point instead. However, you are vulnerable to radiant damage and have disadvantage on saves against turn undead effects.'
          },
          {
            name: 'Ancient Warrior',
            description: 'You retain muscle memory from your warrior life. You have proficiency with all martial weapons and can use weapons sized for Large creatures. However, your ancient fighting style is outdated, giving disadvantage on attack rolls against creatures using modern tactics or equipment you\'re unfamiliar with.'
          },
          {
            name: 'Honor Bound',
            description: 'You can sense valuable items within 60 feet but are less obsessed with hoarding. You must make a Spirit save (DC 12) to give away valuable items, but you are bound by ancient codes of honor - you cannot attack unarmed opponents, must accept formal challenges, and are compelled to protect those under your charge.'
          }
        ]
      },
      {
        id: 'graveworn-lich',
        name: 'Lich Graveworn',
        description: 'Undead scholars who preserved their knowledge beyond death',
        statModifiers: {
          constitution: 1,
          strength: 0,
          agility: -2,
          intelligence: 3,
          spirit: 2,
          charisma: -2
        },
        traits: [
          {
            name: 'Undead Mind',
            description: 'You have resistance to poison and disease, and don\'t need to breathe, eat, drink, or sleep. You are immune to charm and sleep effects, but you are vulnerable to radiant damage and have disadvantage on saves against turn undead effects.'
          },
          {
            name: 'Ancient Knowledge',
            description: 'You retain vast knowledge from your mortal life and beyond. You have advantage on all Intelligence-based checks and can recall information from centuries past. However, your ancient perspective makes you dismissive of modern developments, giving disadvantage on checks involving recent innovations or cultural changes.'
          },
          {
            name: 'Scholarly Obsession',
            description: 'You can sense magical items and knowledge repositories within 60 feet. You are compelled to collect books, scrolls, and magical knowledge rather than gold. You must make a Spirit save (DC 15) to ignore opportunities to acquire rare knowledge, and you become hostile if your collection is threatened or damaged.'
          }
        ]
      }
    ]
  }
];

export default races;
