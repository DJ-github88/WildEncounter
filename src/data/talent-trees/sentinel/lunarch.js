// Talent trees for the Lunarch class
const lunarchTalentTrees = [
  {
    id: 'moonlight',
    name: 'Moonlight',
    description: 'Harness the power of moonlight to cast spells of illumination and revelation.',
    icon: '🌙',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'lunar-affinity',
        name: 'Lunar Affinity',
        description: 'Strengthen your connection to the moon.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🌙',
        rankDescription: [
          'Add 1d4 to all damage and healing dice rolls for moon-based abilities.',
          'Add 1d6 to all damage and healing dice rolls for moon-based abilities.',
          'Add 1d8 to all damage and healing dice rolls for moon-based abilities.',
          'Add 1d10 to all damage and healing dice rolls for moon-based abilities.',
          'Add 1d12 to all damage and healing dice rolls for moon-based abilities. Additionally, at the start of each encounter, roll 1d6; on a 5-6, gain 1 additional Lunar Energy.'
        ]
      },
      {
        id: 'moonbeam',
        name: 'Moonbeam',
        description: 'Call down a beam of concentrated moonlight.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '☄️',
        rankDescription: [
          'Call down a beam of moonlight that deals 1d8 radiant damage to a target.',
          'Call down a beam of moonlight that deals 1d10 radiant damage to a target.',
          'Call down a beam of moonlight that deals 1d12 radiant damage to a target.',
          'Call down a beam of moonlight that deals 2d8 radiant damage to a target.',
          'Call down a beam of moonlight that deals 2d10 radiant damage to a target and reveals invisible creatures within 10 feet for 1 minute.'
        ]
      },
      {
        id: 'lunar-sight',
        name: 'Lunar Sight',
        description: 'See clearly even in darkness.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '👁️',
        rankDescription: [
          'Gain darkvision up to 30 feet.',
          'Gain darkvision up to 60 feet.',
          'Gain darkvision up to 90 feet and the ability to see through magical darkness for 1 minute once per day.',
          'Gain darkvision up to 120 feet and the ability to see through magical darkness for 5 minutes once per day.',
          'Gain darkvision up to 150 feet, the ability to see through magical darkness at will, and the ability to detect invisible creatures within 30 feet.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'moon-shield',
        name: 'Moon Shield',
        description: 'Create a protective shield of moonlight.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['lunar-affinity', 'moonbeam'],
        icon: '🛡️',
        rankDescription: [
          'Create a shield of moonlight that absorbs up to 2d6 damage before breaking. Lasts for 10 minutes or until depleted.',
          'Create a shield of moonlight that absorbs up to 3d6 damage before breaking. Lasts for 10 minutes or until depleted.',
          'Create a shield of moonlight that absorbs up to 4d6 damage before breaking. When the shield absorbs damage, roll 1d6; on a 4-6, the attacker takes damage equal to half the amount absorbed. Lasts for 10 minutes or until depleted.'
        ]
      },
      {
        id: 'lunar-revelation',
        name: 'Lunar Revelation',
        description: 'Reveal hidden truths with the power of moonlight.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['moonbeam', 'lunar-sight'],
        icon: '✨',
        rankDescription: [
          'Reveal illusions and hidden objects within 30 feet for 1 minute.',
          'Reveal illusions, hidden objects, and secret doors within 60 feet for 5 minutes.',
          'Reveal illusions, hidden objects, secret doors, and the true form of shapeshifters within 90 feet for 10 minutes.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'lunar-blessing',
        name: 'Lunar Blessing',
        description: 'Bestow the moon\'s blessing on yourself or an ally.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['moon-shield'],
        icon: '🙏',
        rankDescription: [
          'Bless a target with lunar energy, granting them a +1 bonus to all saving throws for 10 minutes.',
          'Bless a target with lunar energy, granting them a +2 bonus to all saving throws and advantage on checks against being charmed for 10 minutes.',
          'Bless a target with lunar energy, granting them a +3 bonus to all saving throws, advantage on checks against being charmed or frightened, and 10 temporary hit points for 10 minutes.'
        ]
      },
      {
        id: 'moonfire',
        name: 'Moonfire',
        description: 'Engulf an area in burning moonlight.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['moon-shield', 'lunar-revelation'],
        icon: '🔥',
        rankDescription: [
          'Create a 10-foot radius area of burning moonlight that deals 2d6 radiant damage to creatures that start their turn in the area. Lasts for 1 minute.',
          'Create a 15-foot radius area of burning moonlight that deals 3d6 radiant damage to creatures that start their turn in the area. Lasts for 1 minute.',
          'Create a 20-foot radius area of burning moonlight that deals 4d6 radiant damage to creatures that start their turn in the area and reveals invisible creatures. Lasts for 1 minute.'
        ]
      },
      {
        id: 'moon-walk',
        name: 'Moon Walk',
        description: 'Step through moonlight to teleport short distances.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['lunar-revelation'],
        icon: '👣',
        rankDescription: [
          'Teleport up to 30 feet to a spot you can see that is illuminated by moonlight or a moon-based spell.',
          'Teleport up to 60 feet to a spot you can see that is illuminated by moonlight or a moon-based spell. You can bring one willing creature with you.',
          'Teleport up to 90 feet to a spot you can see that is illuminated by moonlight or a moon-based spell. You can bring up to three willing creatures with you.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'lunar-empowerment',
        name: 'Lunar Empowerment',
        description: 'Draw power directly from the moon to enhance your abilities.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['lunar-blessing', 'moonfire'],
        icon: '💫',
        rankDescription: [
          'For 1 minute, reduce the Lunar Energy cost of your moon-based spells by 1d4 (minimum 1) and add 1d6 to all damage dice rolls.',
          'For 1 minute, reduce the Lunar Energy cost of your moon-based spells by 1d6 (minimum 1) and add 1d8 to all damage dice rolls.',
          'For 1 minute, reduce the Lunar Energy cost of your moon-based spells by 1d8 (minimum 1) and add 1d10 to all damage dice rolls. Additionally, you regenerate 1d6 Lunar Energy every round.'
        ]
      },
      {
        id: 'lunar-eclipse',
        name: 'Lunar Eclipse',
        description: 'Create an area of magical darkness infused with lunar energy.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['moonfire', 'moon-walk'],
        icon: '🌑',
        rankDescription: [
          'Create a 20-foot radius sphere of magical darkness for 1 minute. You and your allies can see normally within this darkness.',
          'Create a 30-foot radius sphere of magical darkness for 1 minute. You and your allies can see normally within this darkness and gain a +2 bonus to AC while inside it.',
          'Create a 40-foot radius sphere of magical darkness for 1 minute. You and your allies can see normally within this darkness, gain a +3 bonus to AC while inside it, and deal an additional 1d8 radiant damage with attacks made from within the darkness.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'avatar-of-the-moon',
        name: 'Avatar of the Moon',
        description: 'Become an avatar of lunar power, gaining incredible abilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['lunar-empowerment', 'lunar-eclipse'],
        icon: '👑',
        rankDescription: [
          'For 1 minute, you become an Avatar of the Moon. Your body glows with silver light, illuminating a 60-foot radius. You gain immunity to radiant damage, resistance to all other damage types, the ability to fly at your movement speed, and your moon-based spells cost no Lunar Energy and add 2d10 to all damage dice rolls. Additionally, you can cast Moonbeam at will without spending Lunar Energy, and enemies that hit you with melee attacks must make a DC 16 Constitution save or take 3d10 radiant damage.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'lunar-radiance',
        name: 'Lunar Radiance',
        description: 'Your connection to the moon allows you to emit powerful waves of lunar energy.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['avatar-of-the-moon'],
        icon: '☄️',
        rankDescription: [
          'As an action (3 AP), emit a wave of lunar energy in a 30-foot radius. Allies within the area gain 2d10 temporary hit points and a +2 bonus to attack rolls for 1d4 rounds. Enemies within the area must make a Constitution saving throw or be blinded for 1d4 rounds and take 3d10 radiant damage. You can use this ability once per short rest.'
        ]
      },
      {
        id: 'moonlit-revelation',
        name: 'Moonlit Revelation',
        description: 'The moon reveals all secrets to you.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['avatar-of-the-moon'],
        icon: '👁️',
        rankDescription: [
          'You can see through all illusions and invisibility within 60 feet as if they were not there. Additionally, as an action (2 AP), you can bathe an area in moonlight, revealing all hidden creatures, traps, and secret doors within a 40-foot radius for 1 minute. During this time, all allies in the area gain advantage on Perception and Investigation checks.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'lunar-transcendence',
        name: 'Lunar Transcendence',
        description: 'Transcend your mortal form to become one with the moon itself.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['lunar-radiance', 'moonlit-revelation'],
        icon: '✨',
        rankDescription: [
          'Once per day, transcend your mortal form to become one with the moon for 1d6+2 minutes. During this time, you become a being of pure moonlight, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to fly at a speed of 60 feet. Your spells cost no Lunar Energy, deal maximum damage, and ignore resistance and immunity to radiant damage. Additionally, you can teleport up to 60 feet as a bonus action (1 AP) to any area touched by moonlight, and you emit an aura of lunar power in a 40-foot radius that heals allies for 1d10 hit points at the start of their turn and deals 1d10 radiant damage to enemies at the start of their turn.'
        ]
      },
    ],
  },
  {
    id: 'illusion',
    name: 'Illusion',
    description: 'Master the art of creating and manipulating illusions with lunar magic.',
    icon: '🌌',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'minor-illusion',
        name: 'Minor Illusion',
        description: 'Create small, simple illusions.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '✨',
        rankDescription: [
          'Create a small, static illusion no larger than a 1-foot cube. The illusion has no sound and lasts for 1 minute.',
          'Create an illusion no larger than a 2-foot cube. The illusion can include simple sounds and lasts for 5 minutes.',
          'Create an illusion no larger than a 3-foot cube. The illusion can include complex sounds and lasts for 10 minutes.',
          'Create an illusion no larger than a 4-foot cube. The illusion can include complex sounds and simple movements, and lasts for 30 minutes.',
          'Create an illusion no larger than a 5-foot cube. The illusion can include complex sounds, movements, and even smells, and lasts for 1 hour.'
        ]
      },
      {
        id: 'disguise-self',
        name: 'Disguise Self',
        description: 'Create an illusion that changes your appearance.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎭',
        rankDescription: [
          'Change your appearance for 10 minutes. The illusion cannot change your body type significantly.',
          'Change your appearance for 30 minutes. The illusion can make you appear up to 1 foot taller or shorter.',
          'Change your appearance for 1 hour. The illusion can make you appear as a different humanoid race.',
          'Change your appearance for 4 hours. The illusion can make you appear as any humanoid creature of your approximate size.',
          'Change your appearance for 8 hours. The illusion can make you appear as any creature of your approximate size and includes changes to your voice and mannerisms.'
        ]
      },
      {
        id: 'illusory-script',
        name: 'Illusory Script',
        description: 'Create hidden messages that only certain individuals can read.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '📜',
        rankDescription: [
          'Write a message that appears as unintelligible script to everyone except those you designate. The illusion lasts for 1 day.',
          'Write a message that appears as unintelligible script to everyone except those you designate. The illusion lasts for 3 days.',
          'Write a message that appears as unintelligible script to everyone except those you designate. The illusion lasts for 1 week.',
          'Write a message that appears as unintelligible script to everyone except those you designate. The illusion lasts for 1 month.',
          'Write a message that appears as unintelligible script to everyone except those you designate. The illusion lasts for 1 year and can include simple images as well as text.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'phantasmal-image',
        name: 'Phantasmal Image',
        description: 'Create an illusory duplicate of yourself.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['minor-illusion', 'disguise-self'],
        icon: '👥',
        rankDescription: [
          'Create an illusory duplicate of yourself that lasts for 1 minute. The duplicate cannot interact with objects or creatures and disappears if it takes any damage.',
          'Create an illusory duplicate of yourself that lasts for 5 minutes. The duplicate can perform simple actions but cannot interact with objects or creatures. It disappears if it takes any damage.',
          'Create up to three illusory duplicates of yourself that last for 10 minutes. The duplicates can perform complex actions and appear to interact with objects, though they cannot actually affect the physical world. Each disappears if it takes any damage.'
        ]
      },
      {
        id: 'hypnotic-pattern',
        name: 'Hypnotic Pattern',
        description: 'Create a pattern of shifting colors that mesmerizes viewers.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['disguise-self', 'illusory-script'],
        icon: '🌈',
        rankDescription: [
          'Create a 10-foot cube of shifting colors. Creatures that see it must make a Wisdom saving throw or be charmed for 1 minute.',
          'Create a 20-foot cube of shifting colors. Creatures that see it must make a Wisdom saving throw or be charmed for 1 minute and incapacitated.',
          'Create a 30-foot cube of shifting colors. Creatures that see it must make a Wisdom saving throw with disadvantage or be charmed for 1 minute, incapacitated, and have their speed reduced to 0.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'major-image',
        name: 'Major Image',
        description: 'Create a highly convincing illusion of an object, creature, or phenomenon.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['phantasmal-image'],
        icon: '🖼️',
        rankDescription: [
          'Create a visual illusion no larger than a 15-foot cube, complete with sounds and smells. The illusion lasts for 10 minutes and can move within the area.',
          'Create a visual illusion no larger than a 20-foot cube, complete with sounds, smells, and temperature changes. The illusion lasts for 30 minutes and can move within the area.',
          'Create a visual illusion no larger than a 30-foot cube, complete with sounds, smells, temperature changes, and even appropriate textures. The illusion lasts for 1 hour and can move within the area. If you concentrate on it for the entire duration, it becomes permanent until dispelled.'
        ]
      },
      {
        id: 'phantasmal-killer',
        name: 'Phantasmal Killer',
        description: 'Create an illusion of a creature\'s worst fears.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['phantasmal-image', 'hypnotic-pattern'],
        icon: '👹',
        rankDescription: [
          'Target a creature, which must make a Wisdom saving throw. On a failure, it becomes frightened and takes 2d10 psychic damage at the start of each of its turns for 1 minute.',
          'Target a creature, which must make a Wisdom saving throw with disadvantage. On a failure, it becomes frightened and takes 3d10 psychic damage at the start of each of its turns for 1 minute.',
          'Target a creature, which must make a Wisdom saving throw with disadvantage. On a failure, it becomes frightened, paralyzed, and takes 4d10 psychic damage at the start of each of its turns for 1 minute.'
        ]
      },
      {
        id: 'mislead',
        name: 'Mislead',
        description: 'Create an illusory duplicate while turning yourself invisible.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['hypnotic-pattern'],
        icon: '🥷',
        rankDescription: [
          'Create an illusory duplicate of yourself and turn invisible for 1 minute. The duplicate lasts for the same duration and you can control its actions.',
          'Create an illusory duplicate of yourself and turn invisible for 5 minutes. The duplicate lasts for the same duration and you can control its actions as a bonus action.',
          'Create an illusory duplicate of yourself and turn invisible for 10 minutes. The duplicate lasts for the same duration, you can control its actions as a bonus action, and it can speak in your voice.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'programmed-illusion',
        name: 'Programmed Illusion',
        description: 'Create an illusion that activates under specific conditions.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['major-image', 'phantasmal-killer'],
        icon: '⚙️',
        rankDescription: [
          'Create an illusion no larger than a 20-foot cube that activates when a specific condition is met. The illusion lasts for 5 minutes once triggered.',
          'Create an illusion no larger than a 30-foot cube that activates when a specific condition is met. The illusion lasts for 15 minutes once triggered and can include a 10-word message.',
          'Create an illusion no larger than a 40-foot cube that activates when a specific condition is met. The illusion lasts for 30 minutes once triggered, can include a 25-word message, and can respond in simple ways to different stimuli.'
        ]
      },
      {
        id: 'illusory-reality',
        name: 'Illusory Reality',
        description: 'Make your illusions partially real.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['phantasmal-killer', 'mislead'],
        icon: '🌟',
        rankDescription: [
          'Choose one inanimate, nonmagical object that is part of your illusion and make it real for 1 minute.',
          'Choose up to three inanimate, nonmagical objects that are part of your illusion and make them real for 5 minutes.',
          'Choose any number of inanimate, nonmagical objects that are part of your illusion and make them real for 10 minutes. These objects can deal damage and support weight as if they were real.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'master-illusionist',
        name: 'Master Illusionist',
        description: 'Become a true master of illusions, blurring the line between reality and fantasy.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['programmed-illusion', 'illusory-reality'],
        icon: '👑',
        rankDescription: [
          'For 10 minutes, your illusions become nearly indistinguishable from reality. During this time, all your illusion spells are cast at their maximum effect, require no concentration to maintain, and creatures have disadvantage on saving throws and checks to disbelieve them. Additionally, you can make any part of your illusions real as a bonus action, and you can cast Minor Illusion at will without spending Lunar Energy.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'phantasmal-nightmare',
        name: 'Phantasmal Nightmare',
        description: 'Create terrifying illusions that can harm the mind and body.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['master-illusionist'],
        icon: '😱',
        rankDescription: [
          'As an action (3 AP), target a creature within 60 feet, which must make a Wisdom saving throw. On a failure, the target is trapped in a phantasmal nightmare for 1d4 rounds. While trapped, the target is incapacitated, takes 3d10 psychic damage at the start of each of its turns, and must make a Wisdom saving throw at the end of each of its turns to escape. If the target takes damage from another source, it gets advantage on the saving throw to escape.'
        ]
      },
      {
        id: 'mirage-arcana',
        name: 'Mirage Arcana',
        description: 'Create large-scale illusions that transform the environment.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['master-illusionist'],
        icon: '🏞️',
        rankDescription: [
          'As an action (3 AP), transform the appearance of a 1-mile square area of terrain for 1 day. The illusion includes visual, auditory, tactile, and olfactory elements, making it nearly indistinguishable from reality. You can make the terrain appear as any other natural terrain, but you cannot change its basic layout. Structures, equipment, and creatures in the area aren\'t changed in appearance.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-illusion',
        name: 'Avatar of Illusion',
        description: 'Transform into a living embodiment of illusion magic.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['phantasmal-nightmare', 'mirage-arcana'],
        icon: '🌌',
        rankDescription: [
          'Once per day, transform into an Avatar of Illusion for 1d6+2 minutes. During this time, you become a being of pure illusion, gaining the ability to create and manipulate illusions at will. You can cast any illusion spell you know without spending Lunar Energy, your illusions automatically pass as real (requiring a DC 20 Investigation check to disbelieve), and you can make any part of your illusions real as a bonus action (1 AP). Additionally, you can create up to three illusory duplicates of yourself that act independently, and you can switch places with any of them as a bonus action (0 AP). Finally, you gain resistance to psychic damage and immunity to being charmed or frightened.'
        ]
      },
    ],
  },
  {
    id: 'lunar-cycles',
    name: 'Lunar Cycles',
    description: 'Master the changing phases of the moon to access different magical abilities.',
    icon: '🌓',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'lunar-attunement',
        name: 'Lunar Attunement',
        description: 'Attune yourself to the phases of the moon.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🌕',
        rankDescription: [
          'You can attune to one lunar phase (new, crescent, half, gibbous, or full) for 1 hour, gaining a +1 bonus to spells associated with that phase.',
          'You can attune to one lunar phase for 2 hours, gaining a +2 bonus to spells associated with that phase.',
          'You can attune to one lunar phase for 4 hours, gaining a +3 bonus to spells associated with that phase.',
          'You can attune to one lunar phase for 8 hours, gaining a +4 bonus to spells associated with that phase.',
          'You can attune to one lunar phase for 24 hours, gaining a +5 bonus to spells associated with that phase and reducing the Lunar Energy cost of those spells by 1.'
        ]
      },
      {
        id: 'new-moon-magic',
        name: 'New Moon Magic',
        description: 'Harness the power of the new moon for stealth and shadow magic.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🌑',
        rankDescription: [
          'While attuned to the new moon, add 1d4 to stealth checks and add 1d4 to damage dice for shadow magic.',
          'While attuned to the new moon, add 1d6 to stealth checks and add 1d6 to damage dice for shadow magic.',
          'While attuned to the new moon, add 1d8 to stealth checks and add 1d8 to damage dice for shadow magic.',
          'While attuned to the new moon, add 1d10 to stealth checks and add 1d10 to damage dice for shadow magic.',
          'While attuned to the new moon, add 1d12 to stealth checks and add 1d12 to damage dice for shadow magic, and you can cast Invisibility once per day without spending Lunar Energy.'
        ]
      },
      {
        id: 'full-moon-magic',
        name: 'Full Moon Magic',
        description: 'Harness the power of the full moon for healing and radiant magic.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '🌕',
        rankDescription: [
          'While attuned to the full moon, add 1d4 to healing dice rolls and add 1d4 to damage dice for radiant magic.',
          'While attuned to the full moon, add 1d6 to healing dice rolls and add 1d6 to damage dice for radiant magic.',
          'While attuned to the full moon, add 1d8 to healing dice rolls and add 1d8 to damage dice for radiant magic.',
          'While attuned to the full moon, add 1d10 to healing dice rolls and add 1d10 to damage dice for radiant magic.',
          'While attuned to the full moon, add 1d12 to healing dice rolls and add 1d12 to damage dice for radiant magic, and you can cast Moonbeam once per day without spending Lunar Energy.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'crescent-moon-magic',
        name: 'Crescent Moon Magic',
        description: 'Harness the power of the crescent moon for divination and insight.',
        maxRank: 3,
        position: { row: 1, col: 1 },
        requires: ['lunar-attunement', 'new-moon-magic'],
        icon: '🌙',
        rankDescription: [
          'While attuned to the crescent moon, add 1d4 to divination magic dice rolls and add 1d4 to Wisdom checks.',
          'While attuned to the crescent moon, add 1d6 to divination magic dice rolls and add 1d6 to Wisdom checks.',
          'While attuned to the crescent moon, add 1d8 to divination magic dice rolls and add 1d8 to Wisdom checks, and you can cast Divination once per day without spending Lunar Energy.'
        ]
      },
      {
        id: 'gibbous-moon-magic',
        name: 'Gibbous Moon Magic',
        description: 'Harness the power of the gibbous moon for enhancement and protection.',
        maxRank: 3,
        position: { row: 1, col: 3 },
        requires: ['new-moon-magic', 'full-moon-magic'],
        icon: '🌔',
        rankDescription: [
          'While attuned to the gibbous moon, add 1d4 to enhancement magic dice rolls and gain 1d4 temporary hit points when casting protection magic.',
          'While attuned to the gibbous moon, add 1d6 to enhancement magic dice rolls and gain 1d6 temporary hit points when casting protection magic.',
          'While attuned to the gibbous moon, add 1d8 to enhancement magic dice rolls and gain 1d8 temporary hit points when casting protection magic, and you can cast Shield once per encounter without spending Lunar Energy.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'lunar-shift',
        name: 'Lunar Shift',
        description: 'Quickly shift between lunar phases.',
        maxRank: 3,
        position: { row: 2, col: 0 },
        requires: ['crescent-moon-magic'],
        icon: '🔄',
        rankDescription: [
          'You can change your lunar attunement once per day as a bonus action.',
          'You can change your lunar attunement twice per day as a bonus action.',
          'You can change your lunar attunement three times per day as a bonus action and gain the benefits of both phases for 1 minute after shifting.'
        ]
      },
      {
        id: 'half-moon-magic',
        name: 'Half Moon Magic',
        description: 'Harness the power of the half moon for balance and transformation.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['crescent-moon-magic', 'gibbous-moon-magic'],
        icon: '🌓',
        rankDescription: [
          'While attuned to the half moon, add 1d4 to transformation magic dice rolls and roll with advantage on saving throws against effects that would disrupt your balance.',
          'While attuned to the half moon, add 1d6 to transformation magic dice rolls and roll with advantage on saving throws against effects that would disrupt your balance.',
          'While attuned to the half moon, add 1d8 to transformation magic dice rolls and roll with advantage on saving throws against effects that would disrupt your balance, and you can cast Polymorph once per day without spending Lunar Energy.'
        ]
      },
      {
        id: 'lunar-empathy',
        name: 'Lunar Empathy',
        description: 'Connect with creatures associated with the moon.',
        maxRank: 3,
        position: { row: 2, col: 4 },
        requires: ['gibbous-moon-magic'],
        icon: '🐺',
        rankDescription: [
          'You can communicate with wolves, owls, and other creatures associated with the moon.',
          'You can communicate with and befriend wolves, owls, and other creatures associated with the moon.',
          'You can communicate with, befriend, and command wolves, owls, and other creatures associated with the moon. Once per day, you can call a lunar creature to aid you for 1 hour.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'lunar-mastery',
        name: 'Lunar Mastery',
        description: 'Master all phases of the moon simultaneously.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['lunar-shift', 'half-moon-magic'],
        icon: '🌗',
        rankDescription: [
          'For 5 minutes, you can benefit from two lunar phases simultaneously.',
          'For 10 minutes, you can benefit from three lunar phases simultaneously.',
          'For 15 minutes, you can benefit from all lunar phases simultaneously.'
        ]
      },
      {
        id: 'eclipse-magic',
        name: 'Eclipse Magic',
        description: 'Harness the rare and powerful magic of lunar eclipses.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['half-moon-magic', 'lunar-empathy'],
        icon: '🌚',
        rankDescription: [
          'Once per day, you can attune to a lunar eclipse for 1 minute, adding 2d6 to all lunar magic dice rolls and reducing its Lunar Energy cost by 1d4 (minimum 1).',
          'Once per day, you can attune to a lunar eclipse for 5 minutes, adding 2d8 to all lunar magic dice rolls and reducing its Lunar Energy cost by 1d6 (minimum 1).',
          'Once per day, you can attune to a lunar eclipse for 10 minutes, adding 2d10 to all lunar magic dice rolls and reducing its Lunar Energy cost by 1d8 (minimum 1). Additionally, when casting lunar spells, roll a d20; on a 16-20, the spell critically hits, dealing double damage.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'lunar-ascendant',
        name: 'Lunar Ascendant',
        description: 'Ascend to become a true master of lunar magic in all its forms.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['lunar-mastery', 'eclipse-magic'],
        icon: '👑',
        rankDescription: [
          'Once per day, become a Lunar Ascendant for 5 minutes. During this time, you benefit from all lunar phases simultaneously at their maximum effect (adding 1d12 to all appropriate dice rolls), all your lunar spells cost no Lunar Energy, and you can cast any lunar spell you know as a bonus action. Additionally, you are surrounded by an aura of moonlight that extends 30 feet, granting allies within the aura a 1d4 bonus to all rolls and causing enemies to roll with disadvantage on attacks against you and your allies.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'lunar-harmony',
        name: 'Lunar Harmony',
        description: 'Achieve perfect harmony with the lunar cycles.',
        maxRank: 1,
        position: { row: 5, col: 1 },
        requires: ['lunar-ascendant'],
        icon: '☯️',
        rankDescription: [
          'You can attune to any lunar phase regardless of the actual phase of the moon. Additionally, when you change your lunar attunement, you gain 2d10 temporary hit points and a +2 bonus to all saving throws for 1d4 rounds. Finally, you can use your Lunar Shift ability without expending its normal uses.'
        ]
      },
      {
        id: 'celestial-alignment',
        name: 'Celestial Alignment',
        description: 'Align yourself with the celestial bodies to enhance your lunar magic.',
        maxRank: 1,
        position: { row: 5, col: 3 },
        requires: ['lunar-ascendant'],
        icon: '🌠',
        rankDescription: [
          'As an action (3 AP), create a celestial alignment that lasts for 1d4 rounds. During this time, all allies within 30 feet of you gain the benefits of your current lunar attunement, and your lunar spells deal an additional 2d10 damage or heal an additional 2d10 hit points. You can use this ability once per short rest.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'avatar-of-celestial-cycles',
        name: 'Avatar of Celestial Cycles',
        description: 'Transform into a living embodiment of the celestial cycles.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['lunar-harmony', 'celestial-alignment'],
        icon: '🌌',
        rankDescription: [
          'Once per day, transform into an Avatar of Celestial Cycles for 1d6+2 minutes. During this time, you become a being of pure celestial energy, gaining immunity to non-magical weapons, resistance to all other damage types, and the ability to fly at a speed of 60 feet. You benefit from all lunar phases simultaneously at their maximum effect, your lunar spells cost no Lunar Energy, deal maximum damage, and ignore resistance and immunity. Additionally, you can change the lunar phase affecting a 60-foot radius area around you as a bonus action (1 AP), granting all allies within the area the benefits of that phase and forcing enemies to make a Wisdom saving throw or be affected by a detrimental effect based on the phase (blinded by the full moon, slowed by the new moon, etc.).'
        ]
      },
    ],
  }
];

export default lunarchTalentTrees;
