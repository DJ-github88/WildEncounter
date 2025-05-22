import { useState, useEffect } from 'react';
import './RulesPage.css';
import RulesNavigation from '../components/rules/RulesNavigation';
import RulesContent from '../components/rules/RulesContent';
import RulesSearch from '../components/rules/RulesSearch';

const RulesPage = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [activeSubcategory, setActiveSubcategory] = useState('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define the hierarchical categories structure
  const categories = [
    {
      id: 'core',
      name: 'Core Rules',
      icon: '📜',
      subcategories: [
        { id: 'overview', name: 'Game Overview', icon: '🌍' },
        { id: 'dice', name: 'Dice System', icon: '🎲' },
        { id: 'statistics', name: 'Character Statistics', icon: '📊' },
        { id: 'inventory', name: 'Inventory & Encumbrance', icon: '🎒' },
        { id: 'sessions', name: 'Game Sessions', icon: '🏆' }
      ]
    },
    {
      id: 'character',
      name: 'Character Creation',
      icon: '👤',
      subcategories: [
        { id: 'overview', name: 'Overview', icon: '📋' },
        { id: 'backgrounds', name: 'Backgrounds', icon: '📜' },
        { id: 'classes', name: 'Classes', icon: '⚔️' },
        { id: 'attributes', name: 'Attributes', icon: '💪' },
        { id: 'skills', name: 'Skills', icon: '🧠' },
        { id: 'combinations', name: 'Combinations', icon: '🔄' }
      ]
    },
    {
      id: 'combat',
      name: 'Combat',
      icon: '⚔️',
      subcategories: [
        { id: 'basics', name: 'Basics', icon: '🛡️' },
        { id: 'mechanics', name: 'Combat Mechanics', icon: '⚙️' },
        { id: 'attacks', name: 'Attacks & Armor', icon: '🗡️' },
        { id: 'reactions', name: 'Reactions', icon: '⚡' },
        { id: 'proficientabilities', name: 'Proficient Abilities', icon: '🔥' },
        { id: 'crits', name: 'Critical Hits', icon: '✨' },
        { id: 'conditions', name: 'Conditions', icon: '🤕' },
        { id: 'death', name: 'Death & Exhaustion', icon: '💀' },
        { id: 'resting', name: 'Resting', icon: '🛌' },
        { id: 'souls', name: 'Soulmonger', icon: '👻' },
        { id: 'actionpoints', name: 'Action Points', icon: '⏱️' },
        { id: 'monsters', name: 'Monster Rules', icon: '👹' }
      ]
    },
    {
      id: 'social',
      name: 'Social Activities',
      icon: '🍻',
      subcategories: [
        { id: 'basics', name: 'Basics', icon: '💬' },
        { id: 'carousing', name: 'Carousing', icon: '🍺' },
        { id: 'wassailing', name: 'Wassailing', icon: '🎭' },
        { id: 'reputation', name: 'Reputation', icon: '👑' }
      ]
    },
    {
      id: 'travel',
      name: 'Travel & Exploration',
      icon: '🧭',
      subcategories: [
        { id: 'basics', name: 'Basics', icon: '🗺️' },
        { id: 'challenges', name: 'Challenges', icon: '🏔️' },
        { id: 'exploration', name: 'Exploration', icon: '🔍' },
        { id: 'environments', name: 'Environments', icon: '🌲' },
        { id: 'pointclick', name: 'Point & Click Model', icon: '👆' }
      ]
    },
    {
      id: 'magic',
      name: 'Magic & Abilities',
      icon: '✨',
      subcategories: [
        { id: 'system', name: 'Magic System', icon: '📚' },
        { id: 'resources', name: 'Resource Management', icon: '🔋' },
        { id: 'reactions', name: 'Combat Reactions', icon: '⚡' },
        { id: 'spellcasting', name: 'Spell Resolution', icon: '🔮' },
        { id: 'talents', name: 'Talent Abilities', icon: '🌟' }
      ]
    },
    {
      id: 'equipment',
      name: 'Equipment',
      icon: '🛡️',
      subcategories: [
        { id: 'weapons', name: 'Weapons', icon: '🗡️' },
        { id: 'armor', name: 'Armor', icon: '🛡️' },
        { id: 'magical', name: 'Magical Items', icon: '✨' },
        { id: 'durability', name: 'Durability & Repair', icon: '🔨' }
      ]
    },
    {
      id: 'professions',
      name: 'Professions',
      icon: '⚒️',
      subcategories: [
        { id: 'basics', name: 'Basics', icon: '📋' },
        { id: 'alchemy', name: 'Alchemy', icon: '⚗️' },
        { id: 'herbalism', name: 'Herbalism', icon: '🌿' },
        { id: 'mining', name: 'Mining', icon: '⛏️' },
        { id: 'blacksmithing', name: 'Blacksmithing', icon: '🔨' },
        { id: 'enchanting', name: 'Enchanting', icon: '✨' },
        { id: 'leatherworking', name: 'Leatherworking', icon: '🧵' },
        { id: 'tailoring', name: 'Tailoring', icon: '🧶' }
      ]
    },
    {
      id: 'advancement',
      name: 'Advancement',
      icon: '📈',
      subcategories: [
        { id: 'experience', name: 'Experience & Levels', icon: '⭐' },
        { id: 'talents', name: 'Talent Points', icon: '🌟' },
        { id: 'attributes', name: 'Attribute Improvements', icon: '💪' },
        { id: 'milestones', name: 'Milestones', icon: '🏆' }
      ]
    }
  ];

  // Content data for the rules section
  const contentData = {
    core: {
      overview: {
        description: "Our TTRPG is a fantasy role-playing game where players take on the roles of heroes in a world of magic and adventure.",
        flavorText: "The old sage leaned forward, his eyes twinkling with excitement. \"In this world,\" he whispered, \"your choices shape not just your destiny, but the fate of entire realms.\"",
        sections: [
          {
            title: "Game Overview",
            icon: "🌍",
            content: "Our TTRPG is a fantasy role-playing game where players take on the roles of heroes in a world of magic and adventure. The game is designed to balance narrative storytelling with strategic gameplay, allowing for both combat encounters and rich character development."
          },
          {
            title: "Core Principles",
            icon: "⚖️",
            content: [
              { label: "Player Agency", text: "Your choices matter and have real consequences in the game world" },
              { label: "Tactical Depth", text: "Combat and challenges reward strategic thinking and creative problem-solving" },
              { label: "Character Growth", text: "Characters evolve mechanically and narratively throughout the campaign" },
              { label: "Collaborative Storytelling", text: "Players and Game Master work together to create a compelling narrative" }
            ]
          },
          {
            title: "Game Sessions",
            icon: "🏆",
            content: "A typical game session consists of exploration, social interaction, and combat. The Game Master (GM) describes the environment and controls non-player characters, while players make decisions for their characters."
          }
        ]
      },
      dice: {
        description: "The game uses a d20-based system for most checks and actions, with various dice used for different purposes.",
        sections: [
          {
            title: "Dice System",
            icon: "🎲",
            content: "The game uses a d20-based system for most checks and actions. When attempting an action, roll a d20 and add relevant modifiers. The result is compared against a target number or an opposing roll to determine success."
          },
          {
            title: "Critical Results",
            icon: "✨",
            content: [
              { label: "Critical Success", text: "Natural 20 on a d20 roll" },
              { label: "Critical Failure", text: "Natural 1 on a d20 roll" },
              { label: "Advantage", text: "Roll twice, take the higher result" },
              { label: "Disadvantage", text: "Roll twice, take the lower result" }
            ]
          }
        ]
      },
      statistics: {
        description: "Characters are defined by their attributes, derived statistics, and special abilities that determine their effectiveness at various tasks.",
        sections: [
          {
            title: "Primary Attributes",
            icon: "💪",
            content: "Every character has six primary attributes that represent their basic capabilities:",
            importance: "high"
          }
        ],
        tables: [
          {
            title: "Primary Attributes",
            description: "The six core attributes that define a character's basic capabilities",
            headers: ["Attribute", "Description", "Effects"],
            rows: [
              ["Constitution", "Physical toughness and endurance", "Determines hit points, stamina, and resistance to physical effects"],
              ["Strength", "Physical power and might", "Affects melee damage, carrying capacity, and physical force"],
              ["Agility", "Speed, reflexes, and coordination", "Influences initiative, dodge chance, and ranged attacks"],
              ["Intelligence", "Knowledge, reasoning, and arcane aptitude", "Affects spell power, skill points, and knowledge checks"],
              ["Spirit", "Willpower, intuition, and connection to the divine", "Influences healing power, mental resistance, and perception"],
              ["Charisma", "Personality, leadership, and social influence", "Affects social interactions, leadership abilities, and certain magic"]
            ]
          },
          {
            title: "Attribute Modifiers",
            description: "Each attribute generates a modifier applied to various checks and actions",
            headers: ["Attribute Score", "Modifier", "Attribute Score", "Modifier"],
            rows: [
              ["1", "-5", "16-17", "+3"],
              ["2-3", "-4", "18-19", "+4"],
              ["4-5", "-3", "20-21", "+5"],
              ["6-7", "-2", "22-23", "+6"],
              ["8-9", "-1", "24-25", "+7"],
              ["10-11", "+0", "26-27", "+8"],
              ["12-13", "+1", "28-29", "+9"],
              ["14-15", "+2", "30", "+10"]
            ]
          }
        ]
      },
      inventory: {
        description: "Characters use a grid-based inventory system to manage their equipment and possessions.",
        sections: [
          {
            title: "Carrying Capacity & Encumbrance",
            icon: "🎒",
            content: [
              { label: "Base Inventory Grid", text: "5×5 slots (not encumbered)" },
              { label: "Strength Bonus", text: "+1 row per point of STR modifier (e.g., STR mod +1 = 6×5 grid)" },
              { label: "Encumbrance Zones", text: "Normal Zone (5×5): No penalties\nEncumbered Zone (next 5×5): Movement reduced by 10 ft, disadvantage on physical checks\nOver-encumbered Zone (final 5×5): Movement reduced by 20 ft, disadvantage on all physical actions, cannot dash" },
              { label: "Item Storage", text: "Items take up varying amounts of slots based on size and weight" },
              { label: "Inventory Management", text: "Players must arrange items efficiently in their grid, rotating and positioning them to maximize space" }
            ]
          }
        ]
      },
      sessions: {
        description: "Game sessions are structured around exploration, social interaction, and combat encounters.",
        sections: [
          {
            title: "Game Sessions",
            icon: "🏆",
            content: "A typical game session consists of exploration, social interaction, and combat. The Game Master (GM) describes the environment and controls non-player characters, while players make decisions for their characters."
          },
          {
            title: "Session Structure",
            icon: "📝",
            content: [
              { label: "Session Preparation", text: "GM prepares locations, NPCs, and potential encounters" },
              { label: "Session Start", text: "Recap of previous events and setting the scene" },
              { label: "Gameplay", text: "Players interact with the world through their characters" },
              { label: "Session End", text: "Summarize achievements and set up for next session" }
            ]
          }
        ]
      }
    },
    character: {
      overview: {
        description: "Character creation is a step-by-step process that begins with choosing a background and class, then customizing with attributes and skills.",
        flavorText: "The old sage unfurled a weathered scroll across the tavern table. \"Creating a hero,\" he mused, \"is like weaving a tapestry. First, you choose the background—the foundation of your story. Then, you select a class—the pattern of your abilities. Finally, you add the details that make your character unique.\"",
        sections: [
          {
            title: "Character Creation Process",
            icon: "👤",
            content: "Character creation follows these steps:",
            importance: "high"
          },
          {
            title: "Creation Steps",
            icon: "📋",
            content: [
              { label: "1. Choose a Background", text: "Select one of the nine background paths that provides three thematic abilities" },
              { label: "2. Select a Class", text: "Choose any class regardless of your background selection" },
              { label: "3. Assign Attributes", text: "Distribute points among your six primary attributes" },
              { label: "4. Select Skills", text: "Choose skills based on your background and class" },
              { label: "5. Customize", text: "Develop your character with talent trees, abilities, and equipment" }
            ]
          },
          {
            title: "Background & Class Independence",
            icon: "🔄",
            content: "In our TTRPG system, backgrounds and classes are completely independent choices. This separation allows for diverse character combinations and unique playstyles. Your background provides thematic abilities while your class determines your core mechanics and resource systems.",
            importance: "high"
          }
        ]
      },
      attributes: {
        description: "During character creation, you'll assign values to your six primary attributes that define your character's capabilities.",
        sections: [
          {
            title: "Attribute Allocation",
            icon: "💪",
            content: "During character creation, you'll assign values to your six primary attributes (Constitution, Strength, Agility, Intelligence, Spirit, and Charisma). These can be determined through several methods:"
          },
          {
            title: "Allocation Methods",
            icon: "🎲",
            content: [
              { label: "Point Buy", text: "Start with a pool of points to distribute among attributes" },
              { label: "Standard Array", text: "Use a predetermined set of values (e.g., 15, 14, 13, 12, 10, 8)" },
              { label: "Rolling", text: "Roll 4d6, drop the lowest die, and assign the results to attributes" }
            ]
          }
        ]
      },
      backgrounds: {
        description: "Backgrounds represent your character's path in life and provide three unique thematic abilities regardless of class choice.",
        flavorText: "\"Your background,\" the sage explained, tracing the intricate patterns on the scroll, \"is the foundation of who you are—not what you do. It shapes your perspective and grants you abilities that complement any class you choose.\"",
        sections: [
          {
            title: "Backgrounds (Paths)",
            icon: "🛤️",
            content: "In our TTRPG system, the nine paths (Mystic, Trickster, Zealot, etc.) function as character backgrounds. Each background represents a different approach to power and adventure, providing three unique abilities regardless of which class a character chooses.",
            importance: "high"
          },
          {
            title: "Background Abilities",
            icon: "✨",
            content: "Each background grants three thematic abilities (passive or active) that reflect the flavor of that path. These abilities complement any class and remain with your character throughout their journey.",
            importance: "high"
          },
          {
            title: "Available Backgrounds",
            icon: "📜",
            content: [
              { label: "Mystic", text: "Masters of elemental forces and cosmic energies" },
              { label: "Arcanist", text: "Scholarly practitioners of structured magical systems" },
              { label: "Trickster", text: "Manipulators of chance, fate, and fortune" },
              { label: "Zealot", text: "Devoted channelers of spiritual and divine power" },
              { label: "Harrow", text: "Masters of death, decay, and forbidden knowledge" },
              { label: "Hexer", text: "Primal channelers of natural and bestial forces" },
              { label: "Reaver", text: "Embodiments of physical might and martial prowess" },
              { label: "Mercenary", text: "Specialists who rely on training and technique" },
              { label: "Sentinel", text: "Guardians who protect the boundaries between realms" }
            ]
          }
        ],
        tables: [
          {
            title: "Background Abilities",
            description: "Each background provides three unique thematic abilities that complement any class",
            headers: ["Background", "Ability Name", "Type", "Description"],
            rows: [
              ["Mystic", "Elemental Attunement", "Passive", "Attune to an elemental type once per day, gaining resistance and bonus damage."],
              ["Mystic", "Mana Surge", "Active - 1/Long Rest", "Enter a Mana Surge state for 1 minute, reducing spell costs and casting one spell for free."],
              ["Mystic", "Arcane Insight", "Passive", "Identify magical effects and gain advantage on saves against illusions."],

              ["Arcanist", "Arcane Insight", "Passive", "Cast Detect Magic at will and gain advantage on checks to identify spells and magical effects."],
              ["Arcanist", "Spell Adaptation", "Active - 1/Short Rest", "Modify a spell by changing its damage type, range, targets, or duration."],
              ["Arcanist", "Arcane Shield", "Active - 1/Short Rest", "Create a shield of arcane energy that can cause attacks to miss or reduce damage."],

              ["Trickster", "Fortune's Favor", "Active - 3/Long Rest", "Force a reroll on any d20 roll made by you or an ally within 30 feet."],
              ["Trickster", "Chaos Surge", "Active - 1/Combat", "Roll on the Chaos Surge table for unpredictable effects on your first attack or ability."],
              ["Trickster", "Lucky Break", "Passive", "Once per long rest, remain at 1 hit point instead of being reduced to 0."],

              ["Zealot", "Divine Favor", "Passive", "Gain resistance to radiant damage and advantage on one roll per long rest."],
              ["Zealot", "Smite the Unfaithful", "Active - 1/Short Rest", "Imbue your weapon with divine energy for bonus radiant damage on your next attack."],
              ["Zealot", "Zealous Presence", "Active - 1/Long Rest", "Inspire allies within 30 feet with a divine battle cry, granting temporary hit points and advantage."],

              ["Harrow", "Touch of Death", "Passive", "Gain temporary hit points when you reduce a creature to 0 hit points."],
              ["Harrow", "Spectral Sight", "Active - At Will", "See invisible creatures and into the Ethereal Plane for 1 minute."],
              ["Harrow", "Death's Whisper", "Active - 1/Long Rest", "Cast Speak with Dead once per long rest, and the target cannot lie to you."],

              ["Hexer", "Primal Connection", "Passive", "Communicate with beasts and plants, and gain advantage on Survival checks."],
              ["Hexer", "Wild Shape", "Active - 1/Long Rest", "Transform part of your body to gain bestial benefits for 10 minutes."],
              ["Hexer", "Nature's Wrath", "Active - 1/Short Rest", "Cause plants to sprout in a 20-foot radius, creating difficult terrain and potentially restraining enemies."],

              ["Reaver", "Adrenaline Rush", "Active - 1/Short Rest", "Enter an adrenaline-fueled state for 1 minute, gaining temporary hit points and increased speed."],
              ["Reaver", "Unstoppable Force", "Passive", "Count as one size larger for carrying capacity and resist being moved against your will."],
              ["Reaver", "Devastating Strike", "Active - 1/Short Rest", "Add your Strength modifier to damage again and potentially knock the target prone."],

              ["Mercenary", "Combat Expertise", "Passive", "Gain proficiency with three weapons of your choice or +1 to attack rolls with already proficient weapons."],
              ["Mercenary", "Tactical Assessment", "Active - At Will", "Assess a creature to learn its AC, hit point percentage, and one damage vulnerability, resistance, or immunity."],
              ["Mercenary", "Dirty Fighting", "Active - 1/Short Rest", "Force a target to make a Constitution save or be blinded or immobilized until the end of your next turn."],

              ["Sentinel", "Protective Aura", "Passive", "Grant allies within 10 feet a +1 bonus to AC and potentially increase it further as a reaction."],
              ["Sentinel", "Planar Sense", "Passive", "Sense portals or weak points between planes and resist planar displacement effects."],
              ["Sentinel", "Ward of Protection", "Active - 1/Long Rest", "Create a 15-foot-radius ward that grants allies resistance to one damage type and damages enemies."]
            ]
          }
        ]
      },
      classes: {
        description: "Your character's class determines their primary abilities, available talent trees, and role in the party.",
        flavorText: "The sage's finger moved to another section of the scroll. \"Your class,\" he continued, \"is what you do—not who you are. It defines your approach to challenges and the tools at your disposal.\"",
        sections: [
          {
            title: "Choosing a Class",
            icon: "⚔️",
            content: "Your character's class determines their primary abilities, available talent trees, and role in the party. Each class has unique mechanics and resource systems that define how they play."
          },
          {
            title: "Class Independence",
            icon: "🔓",
            content: "Classes are completely independent from backgrounds. While classes are organized into thematic paths for lore purposes, you can choose any class regardless of your background selection. This creates unique character combinations and diverse playstyles.",
            importance: "high"
          },
          {
            title: "Available Classes",
            icon: "🔋",
            content: [
              { label: "Mystic Path Classes", text: "Chronarch (Continuum), Pyrofiend (Inferno Veil), Minstrel (Musical Notes)" },
              { label: "Trickster Path Classes", text: "Gambler (Luck Points), Fate Weaver (Card-Draw), Chaos Weaver (Chaos Dice)" },
              { label: "Zealot Path Classes", text: "Martyr (Pain Charges), False Prophet (Lies), Exorcist (Spirit Charges)" },
              { label: "Harrow Path Classes", text: "Plaguebringer (Plague Stacks), Lichborne (Death Energy), Deathcaller (Soul Charges)" },
              { label: "Arcanist Path Classes", text: "Spellguard (Mana), Inscriptor (Mana), Arcanoneer (Mana)" },
              { label: "Hexer Path Classes", text: "Witch Doctor (Spirit), Formbender (Spirit), Primalist (Primal Energy)" },
              { label: "Reaver Path Classes", text: "Berserker (Rage), Dreadnaught (Guard Points), Titan (Momentum)" },
              { label: "Mercenary Path Classes", text: "Toxicologist (Focus), Covenbane (Focus), Bladedancer (Focus)" },
              { label: "Sentinel Path Classes", text: "Lunarch (Lunar Energy), Huntress (Focus), Warden (Essence)" }
            ]
          }
        ]
      },
      skills: {
        description: "Skills represent your character's training and aptitude in various areas of expertise.",
        sections: [
          {
            title: "Skill System",
            icon: "🧠",
            content: "Skills represent your character's training and aptitude in various areas of expertise. Each skill is tied to one of your primary attributes and can be used to overcome challenges in the game world."
          },
          {
            title: "Skill List",
            icon: "📋",
            content: [
              { label: "Athletics (STR)", text: "Climbing, jumping, swimming, and other feats of physical prowess" },
              { label: "Acrobatics (AGI)", text: "Balance, tumbling, and graceful movement" },
              { label: "Stealth (AGI)", text: "Moving quietly and remaining hidden" },
              { label: "Sleight of Hand (AGI)", text: "Manual dexterity and fine manipulation" },
              { label: "Arcana (INT)", text: "Knowledge of magic, magical items, and arcane symbols" },
              { label: "History (INT)", text: "Knowledge of past events, cultures, and traditions" },
              { label: "Investigation (INT)", text: "Searching for clues and making deductions" },
              { label: "Nature (INT)", text: "Knowledge of plants, animals, terrain, and natural phenomena" },
              { label: "Religion (INT)", text: "Knowledge of deities, religious practices, and symbols" },
              { label: "Medicine (SPI)", text: "Treating injuries, diagnosing illnesses, and providing care" },
              { label: "Insight (SPI)", text: "Reading intentions and detecting lies" },
              { label: "Perception (SPI)", text: "Noticing details and being aware of surroundings" },
              { label: "Survival (SPI)", text: "Tracking, foraging, and navigating in the wilderness" },
              { label: "Animal Handling (CHA)", text: "Calming, training, and controlling animals" },
              { label: "Deception (CHA)", text: "Lying convincingly and misleading others" },
              { label: "Intimidation (CHA)", text: "Influencing through threats or displays of power" },
              { label: "Performance (CHA)", text: "Entertaining through music, dance, or other arts" },
              { label: "Persuasion (CHA)", text: "Influencing through logical argument or good faith" }
            ]
          }
        ]
      },
      combinations: {
        description: "The separation of backgrounds and classes creates unique character combinations with diverse abilities and playstyles.",
        flavorText: "\"And here,\" the sage concluded, his eyes twinkling with excitement, \"is where the true magic happens. When you combine different backgrounds and classes, you create something truly unique—a character that defies conventional archetypes and surprises both allies and enemies alike.\"",
        sections: [
          {
            title: "Character Combinations",
            icon: "🔄",
            content: "The separation of backgrounds and classes creates unique character combinations with diverse abilities and playstyles. Here are some examples of interesting combinations:",
            importance: "high"
          },
          {
            title: "Example Combinations",
            icon: "⚡",
            content: [
              { label: "Mystic Background + Berserker Class", text: "A rage-fueled warrior who can attune to elements, creating a primal battlemage who channels elemental fury through physical might." },
              { label: "Harrow Background + Minstrel Class", text: "A bard who can speak with the dead, weaving tales of those who have passed and using spectral sight to uncover hidden truths." },
              { label: "Sentinel Background + Gambler Class", text: "A guardian of planar boundaries who manipulates luck, using protective wards while taking calculated risks in combat." },
              { label: "Trickster Background + Martyr Class", text: "A self-sacrificing hero who can force rerolls and survive fatal blows, creating a character who manipulates fate to protect others." },
              { label: "Reaver Background + Spellguard Class", text: "A physically imposing mage who can deliver devastating strikes while maintaining arcane defenses, blending brute force with magical precision." },
              { label: "Zealot Background + Chaos Weaver Class", text: "A divine champion who harnesses chaotic energies, smiting enemies with unpredictable magical effects empowered by faith." },
              { label: "Mercenary Background + Chronarch Class", text: "A tactical time manipulator who can assess enemies and exploit their weaknesses through precise temporal control." },
              { label: "Hexer Background + Inscriptor Class", text: "A nature-connected scholar who combines primal magic with arcane inscriptions, creating powerful hybrid spells." },
              { label: "Arcanist Background + Witch Doctor Class", text: "A scholarly practitioner of primal magic who can adapt spells and create arcane shields while channeling spirit energies." }
            ]
          },
          {
            title: "Building Unique Characters",
            icon: "🧩",
            content: "When creating your character, consider how your background abilities might complement or contrast with your class mechanics. Look for interesting synergies or unexpected combinations that tell a compelling story.",
            importance: "medium"
          }
        ]
      }
    },
    combat: {
      basics: {
        description: "Combat takes place in rounds, with each participant taking turns based on initiative order.",
        flavorText: "\"Combat..?\" the hooded figure exasperates, slumping back against the creaking wood of the bar stool. \"It's supposed to be spontaneous, dangerous—deadly even!\" His eyes narrow under the shadow of his hood. \"Our system embraces this philosophy with mechanics that make every decision matter.\"",
        sections: [
          {
            title: "Rounds & Turns",
            icon: "⏱️",
            content: "Combat takes place in rounds, with each round representing approximately 6 seconds of in-game time. During a round, each participant takes a turn in order of initiative."
          },
          {
            title: "Actions",
            icon: "⚔️",
            content: "On your turn, you spend Action Points (AP) to perform various actions. You also have reactions available between turns that also cost AP."
          },
          {
            title: "Initiative",
            icon: "🎯",
            content: "At the start of combat, all participants roll initiative (d20 + AGI modifier + bonuses). The order of initiative determines the sequence of turns, with higher rolls going first."
          }
        ]
      },
      mechanics: {
        description: "Combat mechanics govern how characters interact during battle, including movement, positioning, and special maneuvers.",
        sections: [
          {
            title: "Movement",
            icon: "👣",
            content: "Characters can move up to their movement speed (typically 30 feet) by spending 1 AP. This movement can be broken up between other actions."
          },
          {
            title: "Positioning",
            icon: "📍",
            content: "Position in combat is crucial. Characters gain advantages for flanking enemies, higher ground, or cover. Positioning points can be spent for tactical advantages."
          },
          {
            title: "Standard Actions",
            icon: "⚔️",
            content: "On your turn, you can spend AP to perform various actions. Here's an example of a player's turn:",
            importance: "high"
          },
          {
            title: "Example Turn",
            icon: "🎭",
            content: "Noticing a precarious patch of snow overhead, the cleric of your party, who is proficient in Nature, swiftly assesses the situation. Utilizing their expertise (Nature: Terrain Insight, 2 AP), they dislodge the snow directly onto the advancing goblins. The sudden cascade surprises the raiders, significantly disrupting their approach and giving your group a crucial moment to regroup."
          },
          {
            title: "AP Management",
            icon: "💰",
            content: "Managing your AP is crucial. For example: Stepping in to shield your ally and knock out the goblin required a significant expenditure of action points, leaving you with just one AP remaining for your turn. Despite the cost, this heroic intervention was crucial, safeguarding your companion and maintaining your strategic advantage amid the snowstorm's fury."
          },
          {
            title: "Combat Maneuvers",
            icon: "🔄",
            content: [
              { label: "Grapple", text: "Restrain an opponent (1 AP, contested STR check)" },
              { label: "Disarm", text: "Force opponent to drop a weapon (1 AP, contested weapon roll)" },
              { label: "Push", text: "Move an opponent 5 feet (1 AP, contested STR check)" },
              { label: "Trip", text: "Knock an opponent prone (1 AP, contested AGI check)" },
              { label: "Feint", text: "Gain advantage on your next attack (1 AP, contested CHA vs INT check)" }
            ]
          }
        ],
        tables: [
          {
            title: "Standard Actions",
            description: "Common actions available to all characters in combat",
            headers: ["Action", "Type", "Description", "Cost"],
            rows: [
              ["Attack (Melee or Ranged)", "A", "Strike with your weapon against a target. Roll your weapon die (e.g., 1d8 for longsword) - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit, any other result hits and deals damage equal to the roll plus your attribute modifier. Target's armor reduces damage based on their Armor Score.", "2 AP (Additional attacks cost 2 AP each)"],
              ["Cast a Minor Spell", "A", "Cast a simple spell from your repertoire. Roll the spell's die - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit with enhanced effects. Minor spells typically cost only class resources (e.g., mana, energy) in addition to AP.", "1 AP"],
              ["Cast a Major Spell", "A", "Cast a powerful spell from your talent tree. Roll the spell's die - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit with enhanced effects. Major spells typically cost class resources plus additional costs specified in the spell description.", "2 AP"],
              ["Move", "A", "Move up to your movement speed (typically 30 feet). This movement can be broken up between other actions.", "1 AP"],
              ["Dash", "A", "Move up to twice your movement speed.", "2 AP"],
              ["Disengage", "A", "Move without provoking opportunity attacks.", "1 AP"],
              ["Use an Item", "A", "Draw, stow, or use an item in your inventory.", "1 AP"],
              ["Hide", "A", "Make a Stealth check to hide from enemies.", "1 AP"],
              ["Help", "A", "Assist an ally with a task, giving them advantage on their next check.", "1 AP"],
              ["Ready an Action", "A", "Prepare to take an action in response to a specific trigger.", "1 AP (+ action cost)"]
            ]
          }
        ]
      },
      attacks: {
        description: "Our combat system uses a streamlined approach where the attack roll also determines damage, with armor reducing incoming damage based on Armor Score.",
        flavorText: "\"Combat is supposed to be spontaneous, dangerous—deadly even!\" the veteran warrior explains, demonstrating a swift strike with his blade. \"Our system embraces this philosophy with mechanics that make every decision matter.\"",
        sections: [
          {
            title: "Attack Resolution",
            icon: "🎯",
            content: "When you make an attack or cast a spell, the process follows these steps:",
            importance: "high"
          },
          {
            title: "Attack Process",
            icon: "⚔️",
            content: [
              { label: "Spend AP", text: "Spend the required Action Points (typically 1-2)" },
              { label: "Roll Attack", text: "Roll your weapon die (e.g., 1d8 for longsword)" },
              { label: "Determine Outcome", text: "1 = miss (roll again to check for critical miss), maximum die value = critical hit, other rolls hit" },
              { label: "Calculate Damage", text: "For weapon attacks: damage equals weapon die roll plus attribute modifier" },
              { label: "Apply Armor Reduction", text: "Target's armor reduces damage based on their Armor Score" },
              { label: "Apply Damage", text: "Remaining damage reduces target's hit points" }
            ]
          },
          {
            title: "Armor & Defense",
            icon: "🛡️",
            content: "Armor Score determines how much damage is reduced when you're hit:",
            importance: "high"
          },
          {
            title: "Defense System",
            icon: "🔰",
            content: [
              { label: "Armor Score Formula", text: "Base 10 + armor type bonus + enchantment bonus" },
              { label: "Damage Reduction", text: "Armor Score 10: 1d4, Armor Score 20: 1d6, Armor Score 30: 1d8, Armor Score 40+: 1d10" },
              { label: "Scaling", text: "Every +5 Armor Score adds +1 to damage reduction, every +10 increases die size" },
              { label: "Durability", text: "Light: 15, Medium: 28, Heavy: 37 - decreases by 1 with each hit" }
            ]
          },
          {
            title: "Defensive Reactions",
            icon: "⚡",
            content: "When attacked, you can spend AP for these defensive options:",
            importance: "high"
          },
          {
            title: "Reaction Options",
            icon: "↩️",
            content: [
              { label: "Dodge (2 AP)", text: "Increases attacker's miss chance by 25% (making rolls of 1-3 on a d8 miss, for example)" },
              { label: "Parry (1 AP)", text: "Roll your weapon die vs. attacker's roll; if higher, negate the attack. Even smaller weapons can parry larger attacks through exploding dice" },
              { label: "Raise Shield (1 AP)", text: "Roll a shield die (d8) to reduce additional damage before armor reduction is applied" }
            ]
          }
        ],
        tables: [
          {
            title: "Miss Consequences",
            description: "When you roll a 1 followed by another 1 (critical miss), roll d10 to determine the outcome",
            headers: ["Roll", "Consequence"],
            rows: [
              ["1", "Catastrophic Failure: Weapon breaks/malfunctions (1 AP + DC 12 DEX to fix)"],
              ["2", "Self-Inflicted Wound: Take 1d4 damage + Bleeding for 1d4 rounds"],
              ["3", "Overextension: Fall prone, end movement for this turn"],
              ["4", "Tactical Blunder: Next attack against you has advantage"],
              ["5", "Fumble: Drop weapon at your feet"],
              ["6", "Distraction: Lose 1 AP from your next turn"],
              ["7", "Off-Balance: Movement speed halved on next turn"],
              ["8", "Exposed: Armor damage reduction reduced by 2 until next turn"],
              ["9", "Demoralized: Disadvantage on next saving throw"],
              ["10", "Simple Miss: No additional consequences"]
            ]
          }
        ]
      },
      crits: {
        description: "Critical hits represent exceptionally effective attacks that deal increased damage and may cause additional effects.",
        flavorText: "\"That's what we call a grim crit,\" the veteran explains, pointing to the training dummy split nearly in two. \"When everything aligns perfectly, and your enemy realizes they've made a terrible mistake challenging you.\"",
        sections: [
          {
            title: "Critical Hits",
            icon: "✨",
            content: "Our critical hit system is based on the weapon or spell die used:",
            importance: "high"
          },
          {
            title: "Critical Categories",
            icon: "🎯",
            content: [
              { label: "Critical Hit", text: "Rolling maximum value on weapon die (e.g., 8 on d8): deals maximum damage plus attribute modifier" },
              { label: "Exploding Dice", text: "When you roll the maximum value on a die, you can roll again and add the result (useful for parrying larger weapons)" },
              { label: "Critical Miss", text: "Rolling a 1 followed by another 1: roll on the Miss Consequences table" }
            ]
          },
          {
            title: "Critical Hit Effects",
            icon: "💥",
            content: "Critical hits can cause additional effects beyond just dealing maximum damage:",
            importance: "high"
          },
          {
            title: "Weapon-Specific Effects",
            icon: "🗡️",
            content: "Different weapon types cause additional effects on critical hits:",
            importance: "medium"
          },
          {
            title: "Weapon Effects",
            icon: "⚔️",
            content: [
              { label: "Slashing", text: "Bleeding: 1d4 damage for 1d4 rounds" },
              { label: "Piercing", text: "Armor Penetration: Reduce target's armor damage reduction by 2 for 1d4 rounds" },
              { label: "Bludgeoning", text: "Stun: Target stunned for 1 round (CON save DC 12 negates)" },
              { label: "Ranged", text: "Pin: Target's movement reduced by half for 1d4 rounds" }
            ]
          }
        ],
        tables: []
      },
      reactions: {
        description: "Reactions are special actions that can be taken outside of your turn in response to specific triggers.",
        flavorText: "\"Combat isn't just about what you do on your turn,\" the veteran warrior explained, demonstrating a swift parry with his blade. \"It's about how you respond to your opponent's moves. A well-timed reaction can turn certain defeat into victory.\"",
        sections: [
          {
            title: "Reaction Basics",
            icon: "⚡",
            content: "Reactions are special actions that can be taken outside of your turn in response to specific triggers. They cost Action Points (AP) and represent your character's ability to respond quickly to changing battlefield conditions.",
            importance: "high"
          }
        ],
        tables: [
          {
            title: "Standard Reactions",
            description: "These reactions are available to all characters regardless of class",
            headers: ["Action", "Type", "Description & Roll", "Cost"],
            rows: [
              ["Help", "R", "Offer advice, gesture, or hint to grant ally 1d8 + to their next action. Applies if reasoning is accepted by the GM.", "1 AP"],
              ["Evade", "R", "Evade an attack, by rolling 5 ft. into a dodge. Has to be used when player is prompted by the GM. (\"The creature attacks you\"). Performing this agile dodge roll, you also gain a better position (Current Level * 1)", "2 AP"],
              ["Opportunity of Attack", "R", "React to enemy movement out of melee range with a quick strike. Roll your weapon die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value.", "1 AP"],
              ["Interpose", "R", "When an ally within 10 ft. is attacked, you can push them 5 ft. to safety and take the hit yourself. STR Roll DC 10. If failed they fall prone. Your armor reduces damage based on your Armor Score. (Prone characters may only: Move half their speed, Gain disadvantage on their attacks, Enemies have advantage on melee attacks against them ..But disadvantage on ranged attacks against them.)", "1 AP (+1 AP for each 10 ft. added)"],
              ["Parry", "R", "Turn aside melee and ranged attacks. When attacked, roll your weapon die against the attacker's roll; if higher, negate the attack. Even smaller weapons can parry larger attacks through exploding dice - if you roll the maximum value on your die, roll again and add the result.", "1 AP"],
              ["{Parry} → Riposte", "R", "After a successful parry, immediately counter-attack. Roll your weapon die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value. This attack ignores the target's armor damage reduction for this attack only.", "1 AP"],
              ["Raise Shield", "R", "Your shield absorbs the impact (roll a d8 to determine how much damage is reduced before your armor damage reduction is applied). The shield's durability decreases by 1.", "1 AP"],
              ["{Raise Shield} → Shield Bash", "R", "After successfully raising your shield, turn defense into offense with a shield bash. Make a STR vs. CON Save. If the opponent fails, they are stunned until the end of their next turn. (Stunned characters lose their next turn).", "1 AP"],
              ["Spell Reaction", "R", "Cast a reactive spell in response to an enemy action. Roll the spell's die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value. Reactive spells often have special effects described in their spell descriptions.", "2 AP"]
            ]
          }
        ]
      },
      proficientabilities: {
        description: "Proficient abilities are special actions that can be performed by characters who are proficient in specific skills.",
        flavorText: "The ranger knelt, examining the forest floor with practiced eyes. \"This isn't just about swinging swords,\" she whispered. \"Your training—your proficiencies—can turn the tide of battle just as effectively as any weapon.\"",
        sections: [
          {
            title: "Proficient Ability Basics",
            icon: "🔥",
            content: "Proficient abilities are special actions that can be performed by characters who are proficient in specific skills. These powerful techniques represent specialized training and expertise.",
            importance: "high"
          },
          {
            title: "Usage Limitations",
            icon: "⚠️",
            content: "Only one proficient ability can be used per turn, regardless of how many AP you have available. Choose wisely based on the tactical situation.",
            importance: "high"
          }
        ],
        tables: [
          {
            title: "Proficient Abilities",
            description: "Special actions available to characters with specific skill proficiencies",
            headers: ["Skill", "Unlocks", "As", "Note", "Cost"],
            rows: [
              ["Acrobatics", "Charged Squat", "A", "Jump up to 10 ft. horizontally or 10 ft. vertically. On a failure, you land prone in the spot where you attempted the leap. Acrobatics Roll DC 12 (You may add 5 ft. horizontally or vertically by increasing the DC by 3)", "1 AP"],
              ["Animal Handling", "Beast Command", "A", "A quick and concise call to action catches the attention and motivation of your pet, awaiting your command. Animal Handling Roll DC 10 - Pet and PC Intelligence and Wisdom Modifier. (For instance, a wolf pet's Intelligence Modifier is -4, it's Wisdom Modifier is +1, giving you a DC of 13. Adding your Intelligence and Wisdom modifier could look something like this 13-(2+1))", "?"],
              ["Arcana", "Arcane Counter", "A", "Channeling the Arcane you prepare to counteract the next hostile spell cast on the following turn within 30 ft. Arcana Roll DC 12 + Spell Level Cast", "1 AP"],
              ["Athletics", "Grapple", "A", "Using your brute force you restrain an opponent, making it hard for them to move and perform certain actions until your next turn. Athletics Roll vs. Target's Strength or Dexterity Roll. Restrained characters have 0 speed, gain disadvantage on rolls and attack rolls made against it have advantage.", "1 AP"],
              ["Deception", "Misdirect", "A", "With a clever ruse, a creature within 10 ft. of you gains the condition surprised. Deception Roll DC 10 + Opponents Intelligence Modifier. Surprised characters are unable to react and gain disadvantage on their attack rolls.", "1 AP"],
              ["History", "Lore Recall", "A", "Tapping into your knowledge, you recall the special attacks or abillities of a creature within 30 ft. History Roll DC 12 + Opponents CR (Rounded Up)", "1 AP"],
              ["Insight", "Flow State", "A", "You enter a calm but clear state of mind, reducing damage taken by 2 until the start of your next turn. Insight Roll DC 12", "1 AP"],
              ["Intimidation", "Taunt", "R", "With hostile intent you provoke nearby opponents within 15 ft., forcing them to attack you. (the effect lasts until the opponent succeeds their wisdom check, which is based on your Intimidation Roll) Intimidation Roll vs. Opponents Wisdom Save.", "1 AP"],
              ["Investigation", "Deduct", "A", "Making use of your deductive skills you analyze and discern an opponents weaknesses within 15. ft. Investigation Roll DC 12 + Opponents CR (Rounded Up) (e.g. a Kobold has a CR of 1/8, meaning the Investigation Roll DC to beat is 12 + 1/8 = 13)", "1 AP"],
              ["Medicine", "First Aid", "A", "Using your medical expertise, you can treat a nearby ally (within 5 ft.) suffering from a minor injury as specified by the system shock table. Medicine Roll DC10 (System shock occurs after taking more than half their max health in damage and failing a DC 10 Constitution save.) Additionally, a successful Medicine check can restore an ally at death's door to 1 HP, removing them from the death saving state. Medicine check DC10 + Level of Exhaustion. As a third use, Medicine can be used to apply bandages to a nearby ally of choice once pr. character. Medicine check DC10. Heals 1d4 + Medicine Modifier", "1 AP"],
              ["Nature", "Terrain Insight", "A", "With an eye for the wild, you spot an advantage in the terrain around you (10 ft.). Nature Roll DC12 (e.g. Loose rubble in a dungeon that could be set up for a trap, visible tree branches or a pit easily covered with leaves, or the occasional helpful plant).", "1 AP"],
              ["Perception", "Heightened Senses", "P", "Your senses are on high alert. Add 2 to your initiative rolls.", "-"],
              ["Performance", "Mesmer", "A", "Within 15 ft., your captivating tunes cause anyone affected to lose their next turn. Performance Roll vs. Wisdom Saving Throw. All creatures and characters within 15 ft. must make a Wisdom Saving Throw against your Performance roll. On a fail, they lose their next turn. (e.g. \"Bart\" the Bard casts Mesmer within 15 ft., affecting two goblins and his party's druid, \"Bloom.\" Bart rolls a 9 (7 + 2 Performance modifier). The first goblin rolls an 8 (9 - 1 Wisdom modifier) and loses its next turn. The second goblin rolls 11 (12 - 1) and is unaffected. Bloom rolls 7 (4 + 3 Wisdom modifier) and loses his turn.) (The following creatures are immune: Creatures without eyes or sight, creatures with multiple heads or eyes, undead, celestials, fiends, fey, dragons and constructs.) (This spell is limited to one use per combat.)", "3 AP"],
              ["Persuasion", "Persuade", "A", "Amidst the heat of combat you attempt to convince an opponent to reconsider their current action - on a successful persuasion check you confuse an opponent. Persuasion Roll vs Wisdom Saving Throw. The opponent must make a Wisdom Saving Throw against your Persuasion Roll. On a fail, they become confused. (the effect lasts until the creature or character succesfully rolls above the persuasion roll; limited to one roll per turn.) Confused creatures or characters must make a d10 roll to determine their action: (1) Runs in a random direction; roll a d8 (2-4) Does nothing; no movement or actions (5-6) Cast a random spell at random target; determined by dice (7-8) Attack a nearby random creature; determined by dice (9-10) Acts and moves normally.", "2 AP"],
              ["Religion", "Divine Favor", "A", "Preaching teachings of your deity you inspire nearby allies and intellectual creatures within 15 ft. Religion Roll vs Wisdom or Intellect Saving Throw. Roll a d4 to Determine the Boon: Shield of Conviction - Temporary hitpoints until combat has ended, based on the casters religion modifier. Guardian's Favor - Take reduced damage for the next turn, based on the casters religion modifier. Zealot's Blessing - Temporary boost attack rolls for the next attack, based on the casters religion modifier. Wisdom of the Ancients - Advantage on the next saving throw. All creatures and characters within 15 ft. must make a Wisdom or Intellect Saving Throw (If they roll below your Religion Roll they are granted the boon). (Regardless how you roll you gain the boon - however, the creatures and characters around you need to roll below your Religion Roll to gain the same boon).", "2 AP"],
              ["Sleight of Hand", "Disarm", "R", "When attacked by an opponent (within 5 ft.), you nimbly disarm the opponent, and if able, you equip the weapon used. (Can't be used wielding 2 weapons, as it requires a free hand.) Sleight of Hand Roll vs. Opponents Strength Save", "1 AP"],
              ["Stealth", "Stealthy Passage", "A", "Without drawing attention to yourself you pass through an opponents space without provoking opportunity of attack. (Succeeding allows you to move 15 ft.) Stealth Roll DC10", "1 AP"],
              ["Survival", "Trapping", "A", "Utilizing your survival skills you set up a trap on a 5ft. square within 5 ft. of you. Survival Check (DC15 - Intelligence Modifier). Traps: Pitfall Trap [4 AP]: A hidden pit that causes falling damage ((1d6 per 10 ft.) each 4 AP, or entire turn, spent digging adds 10 ft.) and restrains the target until they climb out. Snare Trap [3 AP]: Catches and suspends a creature, leaving it hanging upside down and granting advantage to attacks against it until freed. Tripwire Trap [2 AP]: Causes creatures to fall prone, potentially dropping what they hold.)", "Varies"]
            ]
          }
        ]
      },
      actionpoints: {
        description: "Action Points (AP) are the core resource used to perform actions during combat.",
        sections: [
          {
            title: "Action Point Basics",
            icon: "⏱️",
            content: "Action Points (AP) are the core resource that characters use to perform actions in combat. Unlike traditional action economy systems, our AP system allows for more fluid and tactical decision-making."
          },
          {
            title: "AP Allocation",
            icon: "📊",
            content: [
              { label: "Starting AP", text: "Characters typically start with 3 AP at the beginning of combat" },
              { label: "AP Refresh", text: "AP refreshes after both sides have acted in a round" },
              { label: "AP Costs", text: "Different actions cost varying amounts of AP (Attack: 1 AP, Cast Spell: 1-3 AP, Move: 1 AP)" },
              { label: "Reactions", text: "Reactions like Dodge (2 AP) and Parry (1 AP) can be used between turns" }
            ]
          }
        ]
      },
      monsters: {
        description: "Special rules for running monsters and enemies in combat that streamline gameplay while maintaining tactical depth.",
        flavorText: "The grizzled veteran leaned forward, lowering his voice. \"Monsters don't fight like we do,\" he warned, tracing battle formations in spilled ale. \"They're simpler, more direct—but that makes them no less deadly. Learn their patterns, and you might just survive.\"",
        sections: [
          {
            title: "Monster Turn Structure",
            icon: "👹",
            content: "Monsters follow standard 5e turn structure (move, action, bonus action, reaction) and do NOT use the Action Points or Heroic Reactions systems that PCs use. This allows Game Masters to use any 5e-compatible monster stat block with only two simple modifications.",
            importance: "high"
          },
          {
            title: "Attack Resolution",
            icon: "🎯",
            content: "When monsters make attacks, they use a streamlined resolution system:",
            importance: "high"
          },
          {
            title: "Monster Attack Modifications",
            icon: "⚔️",
            content: [
              { label: "Damage Roll", text: "Monsters roll their damage dice + stat modifier as normal" },
              { label: "Miss", text: "Rolling a 1 on their Primary Die" },
              { label: "Critical Hit", text: "Rolling the maximum value on their Primary Die" },
              { label: "Normal Hit", text: "Any other result" }
            ]
          },
          {
            title: "Monster Armor Classification",
            icon: "🛡️",
            content: "Monster AC is simplified into three categories that affect how they take damage:",
            importance: "high"
          },
          {
            title: "Armor Categories",
            icon: "📊",
            content: [
              { label: "Light Armor (0-13 AC)", text: "Takes full damage (damage dice + ability modifier)" },
              { label: "Medium Armor (14-17 AC)", text: "Takes damage ONLY from dice rolls, ignoring ALL positive damage modifiers (STR/DEX bonuses, agonizing blast, etc.)" },
              { label: "Heavy Armor (18+ AC)", text: "Takes half damage from all sources (rounded up)" }
            ]
          },
          {
            title: "Important Exception",
            icon: "⚠️",
            content: "PC critical hits, saving throw spells, and damage type vulnerabilities ignore monster armor effects completely.",
            importance: "high"
          },
          {
            title: "Difficulty Adjustments",
            icon: "⚖️",
            content: "Game Masters can adjust the difficulty of encounters with these optional rules:",
            importance: "medium"
          },
          {
            title: "Difficulty Options",
            icon: "🎚️",
            content: [
              { label: "Easier Game", text: "Limit monster exploding critical hits to 1 per attack" },
              { label: "Harder Game", text: "Add the monster's \"to hit\" bonus instead of its attribute modifier to damage" }
            ]
          },
          {
            title: "Minion Rules",
            icon: "🐺",
            content: "Minions are designed for quick, satisfying combat with large numbers of weaker enemies:",
            importance: "medium"
          },
          {
            title: "Minion Mechanics",
            icon: "⚙️",
            content: [
              { label: "Damage Die", text: "Use a single damage die per minion (1d4 for weak, up to 1d12 for stronger minions)" },
              { label: "Group Attacks", text: "Roll all minion attacks simultaneously" },
              { label: "Simplified Damage", text: "Minions do not use modifiers, miss on a 1, and cannot score critical hits" },
              { label: "Defense Against Minions", text: "PCs can block/dodge minion attacks as if they were a single attack" },
              { label: "Minion HP", text: "ANY damage kills a minion (no HP tracking)" },
              { label: "Area Effect", text: "Critical hits can kill multiple minions when narratively appropriate" }
            ]
          },
          {
            title: "Tactical Considerations",
            icon: "🧠",
            content: "Different weapons have strategic advantages against different armor types:",
            importance: "medium"
          },
          {
            title: "Weapon Effectiveness",
            icon: "🗡️",
            content: [
              { label: "Large weapons (d10, d12)", text: "Best against light armor (rarely miss, add powerful modifiers)" },
              { label: "Small weapons (d4, d6)", text: "Best against heavy armor (more frequent crits ignore damage reduction)" },
              { label: "Medium weapons (d8)", text: "Versatile against various armor types" },
              { label: "Spell attacks", text: "Best against medium armor (don't rely on modifiers)" },
              { label: "Saving throw spells", text: "Best against heavy armor (ignore armor completely)" }
            ]
          },
          {
            title: "Strategic Depth",
            icon: "♟️",
            content: "This system creates meaningful tactical choices without breaking game balance, making each weapon type feel distinct in combat. Players will naturally discover which weapons work best against different enemy types, encouraging varied equipment and approaches to combat.",
            importance: "low"
          }
        ],
        tables: [
          {
            title: "Monster Armor Categories",
            description: "How different monster armor classes affect damage taken",
            headers: ["Armor Category", "AC Range", "Damage Effect", "Best Countered By"],
            rows: [
              ["Light Armor", "0-13", "Takes full damage (dice + modifiers)", "Large weapons (d10, d12)"],
              ["Medium Armor", "14-17", "Takes only dice damage (ignores modifiers)", "Spell attacks, medium weapons (d8)"],
              ["Heavy Armor", "18+", "Takes half damage from all sources", "Small weapons (d4, d6), saving throw spells"]
            ]
          },
          {
            title: "Minion Attack Guidelines",
            description: "Quick reference for handling groups of minions",
            headers: ["Minion Type", "Damage Die", "Number per Group", "Special Effect"],
            rows: [
              ["Weak (Goblins, Kobolds)", "1d4", "4-6", "Miss on 1-2, die to any damage"],
              ["Standard (Orcs, Zombies)", "1d6", "3-4", "Miss on 1, die to any damage"],
              ["Elite (Veterans, Cult Fanatics)", "1d8", "2-3", "Miss on 1, die to 3+ damage"],
              ["Champion (Lieutenants)", "1d10 or 1d12", "1-2", "Miss on 1, die to 5+ damage"]
            ]
          }
        ]
      },
      conditions: {
        description: "Combat conditions represent various states that can affect characters during battle.",
        sections: [
          {
            title: "Combat Conditions",
            icon: "🤕",
            content: "Combat conditions represent various states that can affect characters during battle. These conditions can be inflicted by attacks, spells, environmental hazards, or other effects."
          },
          {
            title: "Common Conditions",
            icon: "📋",
            content: [
              { label: "Blinded", text: "Cannot see, disadvantage on attacks, opponents have advantage against you" },
              { label: "Charmed", text: "Cannot attack the charmer, charmer has advantage on social checks against you" },
              { label: "Deafened", text: "Cannot hear, automatically fail checks requiring hearing" },
              { label: "Frightened", text: "Disadvantage on ability checks and attacks while source of fear is visible, cannot willingly move closer to source" },
              { label: "Grappled", text: "Speed becomes 0, condition ends if grappler is incapacitated or if target is forcibly moved away" },
              { label: "Incapacitated", text: "Cannot take actions or reactions" },
              { label: "Invisible", text: "Cannot be seen without special senses, advantage on attacks, attacks against you have disadvantage" },
              { label: "Paralyzed", text: "Incapacitated, cannot move or speak, automatically fail STR and AGI saves, attacks against you have advantage and are critical hits if attacker is within 5 feet" },
              { label: "Petrified", text: "Transformed into solid substance, incapacitated, unaware of surroundings, attacks against you have advantage, automatically fail STR and AGI saves, have resistance to all damage" },
              { label: "Poisoned", text: "Disadvantage on attack rolls and ability checks" },
              { label: "Prone", text: "Can only crawl, disadvantage on attack rolls, melee attacks against you have advantage, ranged attacks against you have disadvantage" },
              { label: "Restrained", text: "Speed becomes 0, attacks against you have advantage, your attacks have disadvantage, disadvantage on DEX saves" },
              { label: "Stunned", text: "Incapacitated, cannot move, automatically fail STR and AGI saves, attacks against you have advantage" },
              { label: "Unconscious", text: "Incapacitated, cannot move or speak, unaware of surroundings, drop whatever you're holding, fall prone, automatically fail STR and AGI saves, attacks against you have advantage and are critical hits if attacker is within 5 feet" }
            ]
          },
          {
            title: "Synergistic Conditions",
            icon: "⚡",
            content: "Some conditions interact with each other or with the environment to create enhanced effects:",
            importance: "high"
          },
          {
            title: "Condition Interactions",
            icon: "🔄",
            content: [
              { label: "Wet + Lightning", text: "Targets affected by the Wet condition take additional damage from lightning attacks" },
              { label: "Chilled + Wet", text: "Targets affected by both conditions may become Frozen" },
              { label: "Burning + Oil", text: "Targets covered in oil take additional damage from the Burning condition" },
              { label: "Poisoned + Wounded", text: "Poison damage increases against targets with the Wounded condition" },
              { label: "Blinded + Deafened", text: "Targets affected by both conditions are considered Helpless" }
            ]
          }
        ]
      },
      death: {
        description: "Our death and exhaustion system creates tense, dramatic moments when characters are on the brink of death, while still allowing them limited actions to potentially save themselves or their allies.",
        flavorText: "As the onslaught from the orcs intensifies, their weapons finding their mark, you feel the world around you begin to blur and fade. The heavy blows from the orc's axe and the gauntleted strike drive you to your knees, the impact resonating through your battered armor and jarring your bones. Each strike adds layers of fatigue, dragging you deeper into a state of vulnerability. Pinned and desperate, you attempt to raise your arms in a feeble defense, the reality of your dire situation settling in.",
        tabs: [
          {
            id: "dying",
            name: "Dying",
            icon: "💀",
            sections: [
              {
                title: "The Dying Condition",
                icon: "💀",
                content: "When a character is reduced to 0 hit points, they gain the \"Dying\" condition rather than falling unconscious. This allows them to continue fighting for survival, albeit in a severely limited capacity.",
                importance: "high"
              },
              {
                title: "Dying Rules",
                icon: "📜",
                content: [
                  { label: "Limited Actions", text: "Dying characters have only 1 AP per round" },
                  { label: "Limited Movement", text: "Can only crawl 5 feet per round" },
                  { label: "Initial Exhaustion", text: "Gain 1 level of exhaustion immediately at 0 HP" },
                  { label: "Accumulating Exhaustion", text: "Gain 1 level when taking actions while Dying or when taking damage" },
                  { label: "Death Threshold", text: "Death occurs at 6 levels of exhaustion" }
                ]
              },
              {
                title: "Lingering Injuries",
                icon: "🩸",
                content: "When entering the Dying state, roll on the Lingering Injury table to determine a persistent wound. Taking damage while Dying adds 2 levels of exhaustion (3 for critical hits). Actions while Dying require a DC 12 CON save to avoid gaining an additional exhaustion level.",
                importance: "high"
              },
              {
                title: "Actions While Dying",
                icon: "⚔️",
                content: "With their limited 1 AP, dying characters can still attempt to save themselves or contribute to the battle:",
                importance: "medium"
              },
              {
                title: "Dying Action Options",
                icon: "🎯",
                content: [
                  { label: "Stabilize Self", text: "Make a DC 10 Medicine check to stabilize yourself (removes Dying condition but leaves you at 0 HP and Unconscious)" },
                  { label: "Drink Potion", text: "Consume a healing potion to regain hit points (removes Dying condition)" },
                  { label: "Crawl", text: "Move 5 feet to reach cover or an ally" },
                  { label: "Last Stand", text: "Make one final attack or cast a spell (automatically gain 1 level of exhaustion)" },
                  { label: "Call for Help", text: "Alert allies to your condition and position" }
                ]
              },
              {
                title: "Helping Dying Characters",
                icon: "🤝",
                content: "Allies can assist dying characters in several ways:",
                importance: "medium"
              },
              {
                title: "Assistance Options",
                icon: "🧪",
                content: [
                  { label: "Healing", text: "Any healing effect removes the Dying condition if it brings the character above 0 HP" },
                  { label: "Stabilization", text: "A DC 10 Medicine check stabilizes the character (removes Dying condition but leaves them Unconscious at 0 HP)" },
                  { label: "Protection", text: "Interposing between the dying character and enemies can prevent further damage" },
                  { label: "Inspiration", text: "Providing Inspiration allows the dying character to roll with advantage on their next action" }
                ]
              },
              {
                title: "Example Scenario",
                icon: "🎭",
                content: "Thorne, a dwarven fighter, is struck by a troll's club and reduced to 0 HP. Instead of falling unconscious, he gains the Dying condition and 1 level of exhaustion. On his turn, with only 1 AP available, he chooses to crawl behind a nearby boulder for cover. On his next turn, still Dying, he uses his 1 AP to drink a healing potion, regaining 7 HP and removing the Dying condition, though he still has 1 level of exhaustion that will persist until he takes a long rest.",
                importance: "low"
              }
            ],
            tables: [
              {
                title: "Dying Condition Effects",
                description: "Summary of the mechanical effects of the Dying condition",
                headers: ["Effect", "Description"],
                rows: [
                  ["AP Limitation", "Limited to 1 AP per round"],
                  ["Movement Restriction", "Can only crawl 5 feet per round"],
                  ["Exhaustion Accumulation", "Gain 1 level of exhaustion immediately, plus 1 level when taking actions or damage"],
                  ["Death Threshold", "Die upon reaching 6 levels of exhaustion"],
                  ["Recovery", "Regaining any amount of HP removes the Dying condition"]
                ]
              },
              {
                title: "Lingering Injury",
                description: "Roll a d10 when entering the downed state to determine the lingering injury",
                headers: ["Roll", "Effect", "Immediate Consequence", "Required Intervention"],
                rows: [
                  ["1", "Staggered", "Limit Action Points (AP) to 1 for 1d4 turns", "None (effect naturally expires)"],
                  ["2", "Severe Bleeding", "Lose 1 additional HP per turn until bandaged. This applies 1 level of exhaustion each turn.", "Apply bandages (Medicine)"],
                  ["3", "Fracture", "Severe pain and inability to use fractured area; Roll a d4 (Throat, Eyes, Arm, Legs)", "Must be healed to max HP to regain full function"],
                  ["4", "Concussion", "Disadvantage on all checks and attacks", "Rest, or a Medicine check (DC 15) for quicker recovery"],
                  ["5", "Weakened", "-1 to all character actions, +1 to enemy attack rolls", "Must be healed to max HP to remove effect"],
                  ["6", "Hypothermia/Shock", "Disadvantage on all checks, speed reduced by half", "Warmth, rest, and a Medicine check (DC 15)"],
                  ["7", "Shock", "Must make a CON save (DC 10) at start of turn; if failed, lose that turn", "Recovery as HP improves or through magical healing"],
                  ["8", "Respiratory Trouble", "Difficulty breathing, limit movement to 5 ft, all actions require double the AP", "Must be healed to max HP"],
                  ["9", "Broken Limb", "Break a limb (roll 1d4 to determine which limb is affected). Actions spent using that limb is rolled at disadvantage.", "Must be healed to max HP or properly splinted"],
                  ["10", "Unyielding Spirit", "Remains at 0 HP but conscious and defiant", "Stabilized but must be healed to max HP to act"]
                ]
              }
            ]
          },
          {
            id: "exhaustion",
            name: "Exhaustion",
            icon: "😫",
            sections: [
              {
                title: "The Exhaustion System",
                icon: "📊",
                content: "Exhaustion represents physical and mental fatigue that accumulates from pushing beyond normal limits. In our system, exhaustion is particularly important as it serves as the countdown to death for dying characters.",
                importance: "high"
              },
              {
                title: "Exhaustion Levels",
                icon: "📈",
                content: [
                  { label: "Level 1", text: "Disadvantage on ability checks (-1 to d20 rolls outside combat)" },
                  { label: "Level 2", text: "Speed halved (-2 to d20 rolls outside combat)" },
                  { label: "Level 3", text: "Disadvantage on attacks and saves (-3 to d20 rolls outside combat)" },
                  { label: "Level 4", text: "Hit point maximum halved (-4 to d20 rolls outside combat)" },
                  { label: "Level 5", text: "Speed reduced to 0 (-5 to d20 rolls outside combat)" },
                  { label: "Level 6", text: "Death" }
                ]
              },
              {
                title: "Gaining Exhaustion",
                icon: "⬆️",
                content: "Characters can gain exhaustion from various sources:",
                importance: "medium"
              },
              {
                title: "Exhaustion Sources",
                icon: "🔄",
                content: [
                  { label: "Reaching 0 HP", text: "Gain 1 level of exhaustion immediately" },
                  { label: "Actions While Dying", text: "Gain 1 level of exhaustion when taking any action while at 0 HP" },
                  { label: "Taking Damage While Dying", text: "Gain 1 level of exhaustion when taking damage while at 0 HP" },
                  { label: "Forced March", text: "Traveling beyond 8 hours per day requires CON saves to avoid exhaustion" },
                  { label: "Environmental Hazards", text: "Extreme heat, cold, or high altitude can cause exhaustion" },
                  { label: "Starvation/Dehydration", text: "Going without food or water causes exhaustion" },
                  { label: "Spell Effects", text: "Certain spells or magical effects can cause exhaustion" },
                  { label: "Class Abilities", text: "Some powerful class abilities cause exhaustion as a cost" }
                ]
              },
              {
                title: "Recovering from Exhaustion",
                icon: "⬇️",
                content: "Exhaustion is a persistent condition that requires proper rest and care to recover from:",
                importance: "medium"
              },
              {
                title: "Recovery Methods",
                icon: "🛌",
                content: [
                  { label: "Long Rest", text: "A long rest reduces exhaustion by 1 level if the character also consumes food and water" },
                  { label: "Greater Restoration", text: "This spell reduces exhaustion by 1 level" },
                  { label: "Healer's Kit", text: "A DC 15 Medicine check with a healer's kit can reduce exhaustion by 1 level (once per long rest)" },
                  { label: "Special Locations", text: "Resting at certain magical locations or hot springs may reduce exhaustion by additional levels" },
                  { label: "Potions", text: "Rare potions of vitality can reduce exhaustion by 1 or more levels" }
                ]
              },
              {
                title: "Exhaustion Strategy",
                icon: "🧠",
                content: "Managing exhaustion becomes a critical tactical consideration, especially in extended adventures or when characters are dying:",
                importance: "low"
              },
              {
                title: "Strategic Considerations",
                icon: "⚖️",
                content: [
                  { label: "Resource Management", text: "Balance the need for immediate action against the long-term cost of exhaustion" },
                  { label: "Party Support", text: "Distribute tasks to allow exhausted members to recover" },
                  { label: "Preventative Measures", text: "Proper preparation for environmental hazards can prevent exhaustion" },
                  { label: "Tactical Retreats", text: "Know when to withdraw from a situation to prevent accumulating more exhaustion" },
                  { label: "Healing Priority", text: "Prioritize healing characters who are close to dangerous exhaustion thresholds" }
                ]
              }
            ],
            tables: [
              {
                title: "Exhaustion Effects Summary",
                description: "Comprehensive overview of exhaustion effects both in and out of combat",
                headers: ["Level", "Combat Effects", "Non-Combat Effects", "Death Risk"],
                rows: [
                  ["1", "Disadvantage on ability checks", "-1 to all d20 rolls", "Low"],
                  ["2", "Speed halved", "-2 to all d20 rolls", "Low"],
                  ["3", "Disadvantage on attack rolls and saving throws", "-3 to all d20 rolls", "Moderate"],
                  ["4", "Hit point maximum halved", "-4 to all d20 rolls", "High"],
                  ["5", "Speed reduced to 0", "-5 to all d20 rolls", "Very High"],
                  ["6", "Death", "Death", "Fatal"]
                ]
              }
            ]
          },
          {
            id: "unconsciousness",
            name: "Unconsciousness",
            icon: "💤",
            sections: [
              {
                title: "Unconsciousness vs. Dying",
                icon: "⚖️",
                content: "In our system, unconsciousness and dying are distinct conditions with different rules and implications:",
                importance: "high"
              },
              {
                title: "Condition Comparison",
                icon: "🔄",
                content: [
                  { label: "Dying", text: "At 0 HP but still able to take limited actions (1 AP per round)" },
                  { label: "Unconscious", text: "Completely incapacitated and unable to take any actions" }
                ]
              },
              {
                title: "Becoming Unconscious",
                icon: "💫",
                content: "Characters can become unconscious through several means:",
                importance: "medium"
              },
              {
                title: "Causes of Unconsciousness",
                icon: "📋",
                content: [
                  { label: "Stabilization", text: "A dying character who is stabilized becomes unconscious" },
                  { label: "Sleep Effects", text: "Magical sleep or knockout effects cause unconsciousness" },
                  { label: "Poisons", text: "Certain poisons can render a character unconscious" },
                  { label: "Head Trauma", text: "Critical hits to the head may cause unconsciousness (GM's discretion)" },
                  { label: "Voluntary", text: "Characters can choose to fall unconscious (feigning death)" }
                ]
              },
              {
                title: "Rules of Unconsciousness",
                icon: "📜",
                content: "While unconscious, characters are subject to specific rules:",
                importance: "medium"
              },
              {
                title: "Unconscious Effects",
                icon: "😴",
                content: [
                  { label: "Incapacitated", text: "Cannot take actions, bonus actions, or reactions" },
                  { label: "Unaware", text: "Unaware of surroundings and events" },
                  { label: "Prone", text: "Automatically considered prone" },
                  { label: "Combat Vulnerability", text: "Attack rolls against the character have advantage" },
                  { label: "Critical Vulnerability", text: "Any attack that hits from within 5 feet is a critical hit" },
                  { label: "Automatic Failure", text: "Automatically fail Strength and Agility saving throws" }
                ]
              },
              {
                title: "Regaining Consciousness",
                icon: "🔄",
                content: "Characters can regain consciousness through several methods:",
                importance: "medium"
              },
              {
                title: "Waking Methods",
                icon: "⏰",
                content: [
                  { label: "Healing", text: "Any healing that brings a character above 0 HP restores consciousness" },
                  { label: "Natural Recovery", text: "After 1d4 hours, a stabilized character regains 1 HP and consciousness" },
                  { label: "Stimulation", text: "A DC 15 Medicine check can revive an unconscious character (but not one at 0 HP)" },
                  { label: "Smelling Salts", text: "Special items can be used to quickly revive unconscious characters" },
                  { label: "Dispel Magic", text: "Can end magical sleep effects causing unconsciousness" }
                ]
              },
              {
                title: "Tactical Considerations",
                icon: "🧠",
                content: "Unconsciousness creates specific tactical situations in combat:",
                importance: "low"
              },
              {
                title: "Tactical Implications",
                icon: "⚔️",
                content: [
                  { label: "Protecting Allies", text: "Unconscious allies are extremely vulnerable and may need protection" },
                  { label: "Coup de Grace", text: "Enemies may attempt to finish off unconscious characters" },
                  { label: "Capture vs. Kill", text: "Unconscious characters can be easily captured rather than killed" },
                  { label: "Feigning Death", text: "Characters can attempt to feign unconsciousness to avoid attention" }
                ]
              }
            ],
            tables: [
              {
                title: "Unconsciousness vs. Dying",
                description: "Comparison of the two conditions",
                headers: ["Aspect", "Unconscious", "Dying"],
                rows: [
                  ["Actions", "None allowed", "Limited to 1 AP per round"],
                  ["Movement", "None allowed", "Can crawl 5 feet per round"],
                  ["Awareness", "None", "Limited awareness of surroundings"],
                  ["Recovery", "Automatic after 1d4 hours if stable", "Requires healing or stabilization"],
                  ["Vulnerability", "Advantage on attacks, auto-crit within 5 feet", "Normal attack rules apply"],
                  ["Death Risk", "None unless attacked", "Increases with each level of exhaustion"]
                ]
              }
            ]
          },
          {
            id: "resurrection",
            name: "Resurrection",
            icon: "✨",
            sections: [
              {
                title: "Death and Beyond",
                icon: "👻",
                content: "When a character reaches 6 levels of exhaustion or is killed outright by massive damage, they die. However, in a world of magic, death need not be permanent.",
                importance: "high"
              },
              {
                title: "Soul Fragments",
                icon: "💎",
                content: "When a character dies, their soul shatters into fragments that can be collected for resurrection:",
                importance: "high"
              },
              {
                title: "Soul Fragments",
                icon: "📜",
                content: [
                  { label: "Creation", text: "Death shatters the soul into 1d6+3 fragments" },
                  { label: "Collection", text: "Must be collected within 1 minute of death" },
                  { label: "Viability", text: "Fragments remain viable for 7 days" },
                  { label: "Degradation", text: "5% cumulative daily chance of fragment loss" },
                  { label: "Requirement", text: "Minimum 3 fragments needed for resurrection" }
                ]
              },
              {
                title: "Resurrection Methods",
                icon: "🧪",
                content: "Different spells have varying requirements for resurrection:",
                importance: "medium"
              },
              {
                title: "Spell Requirements",
                icon: "📋",
                content: [
                  { label: "Revivify", text: "Within 1 minute, requires 1 fragment" },
                  { label: "Raise Dead", text: "Within 7 days, requires 3 fragments" },
                  { label: "Resurrection", text: "Within 100 years, requires 5 fragments" },
                  { label: "True Resurrection", text: "Any time, any condition, requires 7 fragments" },
                  { label: "Reincarnation", text: "New body, requires 3 fragments" }
                ]
              },
              {
                title: "Resurrection Challenges",
                icon: "🎲",
                content: "Resurrection is not guaranteed and comes with challenges:",
                importance: "medium"
              },
              {
                title: "Challenge Details",
                icon: "⚔️",
                content: [
                  { label: "Resurrection DC", text: "Base DC 10, +1 for each previous resurrection, +1 for each day since death" },
                  { label: "Ritual Components", text: "Requires special components worth at least 500 gp" },
                  { label: "Ritual Duration", text: "Takes 1 hour to perform" },
                  { label: "Failed Resurrection", text: "Consumes the soul fragments but fails to restore life" },
                  { label: "Soul Anchors", text: "Special items that can improve resurrection chances" }
                ]
              },
              {
                title: "Resurrection Consequences",
                icon: "⚖️",
                content: "Returning from death is traumatic and leaves lasting effects:",
                importance: "medium"
              },
              {
                title: "Post-Resurrection Effects",
                icon: "🔄",
                content: [
                  { label: "Exhaustion", text: "Return with 2 levels of exhaustion" },
                  { label: "Mental Trauma", text: "Suffer from nightmares or flashbacks for 1d6 days" },
                  { label: "Death Memory", text: "Retain fragmented memories of the afterlife" },
                  { label: "Weakened Connection", text: "Disadvantage on saving throws against necromantic effects for 7 days" },
                  { label: "Soul Scar", text: "Each resurrection leaves a permanent mark on the soul, visible to certain magical senses" }
                ]
              },
              {
                title: "The Devil's Bargain",
                icon: "😈",
                content: "When traditional resurrection fails or is unavailable, characters may be offered a deal with dark powers:",
                importance: "low"
              },
              {
                title: "Bargain Details",
                icon: "📜",
                content: [
                  { label: "Offer", text: "The character's soul is offered a deal for resurrection" },
                  { label: "Price", text: "The price is always significant—a task, sacrifice, or permanent change" },
                  { label: "Wisdom Save", text: "Upon resurrection, make a DC 18 Wisdom save" },
                  { label: "Failure Consequence", text: "On a failed save, roll on the \"Miracle\" table for an unexpected effect" },
                  { label: "Soul Debt", text: "The character now owes a debt that will come due at a critical moment" }
                ]
              }
            ],
            tables: [
              {
                title: "Soul Anchor Types",
                description: "Special items that preserve soul fragments and aid resurrection",
                headers: ["Type", "Preservation Duration", "Resurrection DC Modifier", "Rarity"],
                rows: [
                  ["Minor Anchor", "14 days", "No change", "Uncommon"],
                  ["Major Anchor", "30 days", "-2", "Rare"],
                  ["Greater Anchor", "Indefinite", "-5", "Very Rare"],
                  ["Soul Phylactery", "Indefinite", "Automatic success", "Legendary"]
                ]
              },
              {
                title: "Resurrection Miracle Table",
                description: "Roll 1d20 when a character fails their Wisdom save after a devil's bargain",
                headers: ["Roll", "Miracle Effect"],
                rows: [
                  ["1", "Empty. There is nothing left of you to be consumed. You, whatever that means, is gone now. You are a mindless thing. You must create a new character."],
                  ["2", "Decay's Caress. Your flesh begins to rot visibly, spreading a stench of death. Lose 3 from your CHA permanently."],
                  ["3", "Abyssal Clutch. Dark forces erode your essence, leeching away your vitality. Reduce two attributes of your choice by 3 each."],
                  ["4", "Death's Blessing. You have returned tougher, hardier. Add an extra +1d6 to your starting Base Position."],
                  ["5", "Tortured Bones. Your skeleton painfully reshapes itself, granting you a +2 AC but reducing your Constitution by 2 due to constant pain."],
                  ["6", "Emptiness Within. Devoid of emotions and sensations, you traverse the world as a hollow shell, immune to fear and persuasion."],
                  ["7", "Ghastly Whispers. Unseen voices fill your head, distracting and terrifying. Suffer a -1 penalty to Wisdom and have disadvantage on concentration checks."],
                  ["8", "Withering Strength. Your muscles deteriorate; permanently reduce your Strength by 2."],
                  ["9", "Numb Senses. You lose your sharp reflexes; reduce your Dexterity by 2."],
                  ["10", "Mind Erosion. Lose proficiency in one Intelligence-based skill of your choice as your intellect falters"],
                  ["11", "Bleak Existence. You find no comfort in food, drink, or rest. All recovery from rest is halved, and you cannot benefit from potions."],
                  ["12", "Echoes of the Void. You hear eerie, otherworldly sounds that distract and unsettle you, imposing disadvantage on Wisdom checks."],
                  ["13", "Absent Minded. Your mind wanders, no longer able to focus on the things that you took joy in. Reduce your starting Intelligence score by -1."],
                  ["14", "Lingering Cold. Your body is unnaturally cold, causing pain and stiffness. Reduce your Speed by 10 feet and gain vulnerability to fire damage, but resistance to cold damage."],
                  ["15", "Spectral Chains. You feel as if invisible chains bind you, slowing your movements and sapping your strength. Reduce your Speed by 5 feet and your Strength score by 1."],
                  ["16", "Forgotten. Some memory, some fragile recollection of your past or current life has gone. Between you and the GM, decide what this memory is and what effect its loss has on you."],
                  ["17", "Gruesome Visage. Your appearance becomes horrifying to others, giving you advantage on Intimidation but disadvantage on all other Charisma checks."],
                  ["18", "Dulled Senses. You are slower to react to threats as they present themselves. Reduce your Initiative by -1."],
                  ["19", "Corrupted Blood. Your blood turns toxic, providing immunity to disease but causing you to take damage from healing spells and effects."],
                  ["20", "Miracle of the Grave. Perhaps you are less than you once were, but this time, upon returning to life, you feel alive. Gain +2 to any single attribute."]
                ]
              }
            ]
          }
        ]
      },
      resting: {
        description: "Resting allows characters to recover hit points, resources, and reduce exhaustion.",
        flavorText: "As the caravan rolls into a quiet town at dusk, your party, recognizing your exhaustion, chooses a modest inn for recovery. You're shown to your room, where the innkeeper explains the recovery process, \"Roll a d8 nightly for your recovery. But beware, a roll of 1 means complications.\" That night, under warm blankets, you sleep deeply, desperately needing the rest.",
        sections: [
          {
            title: "Resting",
            icon: "🛌",
            content: "Resting allows characters to recover hit points, resources, and reduce exhaustion. There are two types of rest: short rests and long rests."
          },
          {
            title: "Short Rest",
            icon: "☕",
            content: [
              { label: "Duration", text: "1 hour of light activity" },
              { label: "Recovery", text: "Spend Hit Dice (die + CON mod per die)" },
              { label: "Resources", text: "Some abilities recharge" },
              { label: "Frequency", text: "Multiple allowed per day" }
            ]
          },
          {
            title: "Long Rest",
            icon: "🌙",
            content: [
              { label: "Duration", text: "8 hours (6h sleep + 2h light activity)" },
              { label: "HP Recovery", text: "Restore all hit points" },
              { label: "Hit Dice", text: "Recover half total (minimum 1)" },
              { label: "Resources", text: "Most abilities recharge" },
              { label: "Exhaustion", text: "Reduce by 1 level with food/water" },
              { label: "Limit", text: "One per 24 hours" }
            ]
          },
          {
            title: "Interrupted Rest",
            icon: "⚠️",
            content: "If a rest is interrupted by strenuous activity (combat, casting spells, etc.) for more than 1 hour, characters must start the rest over to gain any benefit."
          },
          {
            title: "Resting in Dangerous Areas",
            icon: "🔥",
            content: "Resting in dangerous areas may require watches, have a chance of random encounters, or be impossible without proper shelter or protection."
          },
          {
            title: "Inns & Lodging",
            icon: "🏨",
            content: "When taking a long rest at an inn, the quality of accommodations affects recovery and potential complications. Different types of inns provide different benefits and risks.",
            importance: "high"
          },
          {
            title: "Inn Recovery",
            icon: "💤",
            content: "When staying at an inn, roll the appropriate die based on the quality of the inn. On a roll of 1, roll on the Complications at Inns table to determine what happens during your stay.",
            importance: "medium"
          },
          {
            title: "Lavish Inn Benefits",
            icon: "👑",
            content: "Staying at a lavish inn grants a temporary boon. Roll on the Boons from Lavish Inn Stays table to determine the benefit you receive.",
            importance: "medium"
          }
        ],
        tables: [
          {
            title: "Inn Quality Tiers",
            description: "Inn quality affects recovery and potential complications",
            headers: ["Inn Type", "Cost", "Recovery", "Risk/Benefit"],
            rows: [
              ["Poor", "5cp/night", "d4 recovery roll", "Roll on Complications table on 1"],
              ["Modest", "5sp/night", "d8 recovery roll", "Roll on Complications table on 1"],
              ["Comfortable", "1gp/night", "Reliable recovery", "No complications"],
              ["Lavish", "5gp/night", "Roll on Boons table", "Best recovery chance"]
            ]
          },
          {
            title: "Inn Complications",
            description: "Roll 2d6 when you roll a 1 on recovery die",
            headers: ["Roll", "Result", "Effect"],
            rows: [
              ["2", "Major Theft", "Lose all coins"],
              ["3", "Minor Theft", "Lose half coins"],
              ["4", "Disease", "Gain 1 level exhaustion"],
              ["5", "Pests", "Replace supplies (1d20 gp)"],
              ["6-8", "Good Rest", "No complications"],
              ["9", "Poor Sleep", "No HP recovery"],
              ["10", "New Contact", "Gain valuable contact"],
              ["11", "Information", "Gain useful clue"],
              ["12", "Lucky", "Gain temporary boon"]
            ]
          },
          {
            title: "Lavish Inn Boons",
            description: "Roll 1d6 when staying at a lavish inn",
            headers: ["Roll", "Boon", "Effect"],
            rows: [
              ["1", "Rejuvenation", "Full HP recovery"],
              ["2", "Vitality", "Temp HP equal to level"],
              ["3", "Refreshment", "+1 exhaustion recovery"],
              ["4", "Vigor", "+10 ft. movement today"],
              ["5", "Inspiration", "Gain Inspiration"],
              ["6", "Restoration", "+2 exhaustion recovery"]
            ]
          }
        ]
      },
      souls: {
        description: "The Soulmonger system governs what happens to souls after death and how they can be restored.",
        flavorText: "Remember, adventurer, souls unspent upon death are lost forever. Choose wisely how you spend this essence, for it holds the key to both your recovery and your potential. Soulmongers, cloaked and cold, bring a dread that bites. Oppose them, and angry spirits lash out. But offer 50 Withered Essence, a grim tribute, and they may grant passage, knowledge, or power… at a terrible cost.",
        sections: [
          {
            title: "The Soulmonger",
            icon: "👻",
            content: "In our world, a mysterious force known as the Soulmonger affects what happens to souls after death. When a character dies, their soul is not immediately lost but enters a state of limbo where it can potentially be recovered.",
            importance: "high"
          },
          {
            title: "Soul Fragments",
            icon: "💎",
            content: [
              { label: "Creation", text: "When a character dies, their soul shatters into fragments" },
              { label: "Collection", text: "Allies can collect these fragments within 1 minute of death" },
              { label: "Preservation", text: "Soul fragments remain viable for resurrection for 7 days" },
              { label: "Degradation", text: "Each day, there's a cumulative 5% chance a fragment is lost" }
            ]
          },
          {
            title: "Withered Essence",
            icon: "✨",
            content: "Souls can be converted into Withered Essence, a currency that can be used to purchase various services from Soulmongers. One Soul is equivalent to 1,000 Withered Essence.",
            importance: "high"
          },
          {
            title: "Soulmonger Services",
            icon: "🧙",
            content: "Soulmongers offer various services in exchange for souls or Withered Essence. These services include healing, enchantment, and even resurrection.",
            importance: "high"
          },
          {
            title: "Resurrection",
            icon: "✨",
            content: "Resurrection requires soul fragments and follows these rules:",
            importance: "high"
          },
          {
            title: "Resurrection Rules",
            icon: "📜",
            content: [
              { label: "Fragment Requirement", text: "At least 3 soul fragments are needed for resurrection" },
              { label: "Resurrection DC", text: "Base DC 10, +1 for each previous resurrection, +1 for each day since death" },
              { label: "Resurrection Ritual", text: "Requires special components and takes 1 hour to perform" },
              { label: "Failed Resurrection", text: "Consumes the soul fragments but fails to restore life" },
              { label: "Resurrection Trauma", text: "Characters return with 1 level of exhaustion and temporary mental trauma" }
            ]
          },
          {
            title: "Soul Anchors",
            icon: "⚓",
            content: "Soul anchors are rare magical items that can preserve a soul more effectively:",
            importance: "medium"
          },
          {
            title: "Soul Anchor Types",
            icon: "🔮",
            content: [
              { label: "Minor Anchor", text: "Preserves soul fragments for 14 days instead of 7" },
              { label: "Major Anchor", text: "Preserves soul fragments for 30 days and reduces resurrection DC by 2" },
              { label: "Greater Anchor", text: "Preserves soul fragments indefinitely and reduces resurrection DC by 5" }
            ]
          },
          {
            title: "Consequences",
            icon: "⚠️",
            content: "The use of souls is irreversible and their consumption carries weighty consequences in the world. Each transaction with a Soulwarden is a pact that shapes the fabric of reality, eternally altering the bearer's destiny.",
            importance: "medium"
          }
        ],
        tables: [
          {
            title: "Soulmonger Services",
            description: "Services offered in exchange for souls (1 Soul = 1,000 Withered Essence)",
            headers: ["Service", "Cost", "Effect"],
            rows: [
              ["Level Up", "Level × 1 Soul", "Character gains one level"],
              ["Minor Healing", "Level × 150 Essence", "Remove 1 level of exhaustion (1/day)"],
              ["Major Healing", "Level × 500 Essence", "Remove 3 levels of exhaustion (1/day)"],
              ["Full Healing", "Level × 900 Essence", "Remove 5 levels of exhaustion (1/day)"],
              ["Enchantment", "Level × 1 Soul", "Add magical properties to equipment"],
              ["Resurrection", "Level × 10 Souls", "Resurrect a character who failed normal resurrection"]
            ]
          }
        ]
      }
    },
    equipment: {
      weapons: {
        description: "Weapons are categorized by type, damage die, properties, and required proficiency.",
        sections: [
          {
            title: "Weapons",
            icon: "🗡️",
            content: "Weapons are categorized by type, damage die, properties, and required proficiency. The weapon's damage die is used both to determine if an attack hits and how much damage it deals:"
          },
          {
            title: "Attack Resolution",
            icon: "🎯",
            content: [
              { label: "Rolling a 1", text: "Always results in a miss" },
              { label: "Rolling the maximum value", text: "Results in a critical hit with enhanced effects" },
              { label: "Any other result", text: "Hits and deals damage equal to the roll plus relevant attribute modifier" }
            ]
          },
          {
            title: "Weapon Types",
            icon: "⚔️",
            content: [
              { label: "Simple Weapons", text: "Daggers (1d4), Clubs (1d4), Slings (1d4), etc." },
              { label: "Martial Weapons", text: "Longswords (1d8), Battleaxes (1d8), Longbows (1d8), etc." },
              { label: "Exotic Weapons", text: "Great weapons (1d10 or 1d12), specialized weapons with unique properties" }
            ]
          }
        ]
      },
      armor: {
        description: "Armor provides protection by absorbing damage rather than making you harder to hit.",
        sections: [
          {
            title: "Armor",
            icon: "🛡️",
            content: "Armor provides protection by absorbing damage rather than making you harder to hit. Each type of armor has an Armor Rating that determines how much damage it can soak:"
          },
          {
            title: "Armor Types",
            icon: "👕",
            content: [
              { label: "Unarmored (0-9)", text: "No damage reduction" },
              { label: "Light Armor (10-19)", text: "Soaks 1d4 damage, 15 durability" },
              { label: "Medium Armor (20-29)", text: "Soaks 1d6 damage, 28 durability" },
              { label: "Heavy Armor (30-39)", text: "Soaks 1d8 damage, 37 durability" },
              { label: "Mythic Armor (40+)", text: "Soaks 1d10 damage, 50 durability" }
            ]
          }
        ]
      },
      magical: {
        description: "Magical items provide special abilities, bonuses, or other supernatural effects.",
        sections: [
          {
            title: "Magical Items",
            icon: "✨",
            content: "Magical items provide special abilities, bonuses, or other supernatural effects. These items are rare and valuable, often serving as significant rewards for completing dangerous quests or defeating powerful enemies."
          },
          {
            title: "Item Rarity",
            icon: "📊",
            content: "Magical items are categorized by rarity, which indicates their power level and value:",
            importance: "high"
          },
          {
            title: "Rarity Levels",
            icon: "🌈",
            content: [
              { label: "Common", text: "Minor magical effects, widely available" },
              { label: "Uncommon", text: "Useful magical properties, somewhat rare" },
              { label: "Rare", text: "Significant magical powers, difficult to find" },
              { label: "Very Rare", text: "Powerful magical abilities, extremely scarce" },
              { label: "Legendary", text: "Extraordinary magical effects, unique or nearly so" },
              { label: "Artifact", text: "World-shaping powers, one-of-a-kind items with their own histories" }
            ]
          },
          {
            title: "Item Categories",
            icon: "📋",
            content: [
              { label: "Weapons", text: "Magical weapons with enhanced damage, special properties, or unique abilities" },
              { label: "Armor", text: "Protective gear with enhanced defense, resistances, or special effects" },
              { label: "Wondrous Items", text: "Miscellaneous magical items with various effects" },
              { label: "Potions", text: "Consumable liquids with temporary magical effects" },
              { label: "Scrolls", text: "One-use items that allow casting specific spells" },
              { label: "Rings", text: "Powerful items worn on fingers, often with passive benefits" },
              { label: "Wands/Rods/Staves", text: "Channeling devices that enhance or enable spellcasting" }
            ]
          },
          {
            title: "Attunement",
            icon: "🔄",
            content: "Some magical items require attunement to use their powers:",
            importance: "medium"
          },
          {
            title: "Attunement Rules",
            icon: "📜",
            content: [
              { label: "Process", text: "Requires a short rest focused on the item" },
              { label: "Limit", text: "Characters can be attuned to a maximum of 3 items at once" },
              { label: "Breaking Attunement", text: "Occurs if the item is more than 100 feet away for 24 hours" },
              { label: "Death", text: "Attunement ends if the character dies" },
              { label: "Voluntary End", text: "Can end attunement during a short rest" }
            ]
          }
        ]
      },
      durability: {
        description: "Equipment durability represents the wear and tear on items through use and damage.",
        sections: [
          {
            title: "Durability System",
            icon: "🔨",
            content: "Equipment durability represents the wear and tear on items through use and damage. As items are used in combat and exploration, they gradually degrade and may eventually break if not maintained."
          },
          {
            title: "Durability Mechanics",
            icon: "⚙️",
            content: [
              { label: "Starting Durability", text: "Each item has a maximum durability based on its type and quality" },
              { label: "Durability Loss", text: "Items lose durability when used in combat or for specific tasks" },
              { label: "Critical Failures", text: "Rolling a natural 1 on an attack causes weapons to lose additional durability" },
              { label: "Armor Damage", text: "Armor loses durability when it absorbs damage" },
              { label: "Broken Items", text: "When durability reaches 0, the item becomes broken and loses effectiveness" }
            ]
          },
          {
            title: "Repair and Maintenance",
            icon: "🛠️",
            content: "Items can be repaired and maintained to restore durability:",
            importance: "high"
          },
          {
            title: "Repair Methods",
            icon: "📋",
            content: [
              { label: "Field Repairs", text: "Quick fixes that restore a small amount of durability (requires toolkit)" },
              { label: "Craftsman Repairs", text: "Professional repairs that restore significant durability (requires skilled NPC)" },
              { label: "Magical Restoration", text: "Spells or magical items that can instantly repair equipment" },
              { label: "Maintenance", text: "Regular upkeep that prevents durability loss (performed during long rests)" },
              { label: "Material Requirements", text: "Repairs require appropriate materials based on the item type" }
            ]
          },
          {
            title: "Quality Levels",
            icon: "⭐",
            content: "Higher quality items have greater durability and are more resistant to damage:",
            importance: "medium"
          },
          {
            title: "Item Quality",
            icon: "📊",
            content: [
              { label: "Poor", text: "75% standard durability, loses 2 points per normal loss event" },
              { label: "Standard", text: "Base durability, normal durability loss" },
              { label: "Fine", text: "125% standard durability, loses durability at normal rate" },
              { label: "Superior", text: "150% standard durability, loses durability at 75% normal rate" },
              { label: "Masterwork", text: "200% standard durability, loses durability at 50% normal rate" },
              { label: "Legendary", text: "300% standard durability, loses durability at 25% normal rate" }
            ]
          }
        ]
      }
    },
    magic: {
      system: {
        description: "Magic in our world is acquired and enhanced through talent points rather than traditional spell levels.",
        sections: [
          {
            title: "Magic System",
            icon: "📚",
            content: "Magic in our world is acquired and enhanced through talent points rather than traditional spell levels. Each class starts with a set of base abilities chosen from an array of options, and gains more powerful abilities by investing in talent trees."
          },
          {
            title: "Casting Spells",
            icon: "🔮",
            content: "All spells and abilities cost Action Points (AP) to use, plus additional resources specific to each class. The more powerful the ability, the more resources it typically costs."
          }
        ]
      },
      resources: {
        description: "Different classes use different resources to power their abilities.",
        sections: [
          {
            title: "Resource Management",
            icon: "🔋",
            content: "Different classes use different resources to power their abilities. Managing these resources effectively is key to maximizing your character's potential."
          },
          {
            title: "Common Resources",
            icon: "💎",
            content: [
              { label: "Mana", text: "Used by many spellcasting classes, regenerates slowly during combat and fully during rest" },
              { label: "Rage", text: "Built up through taking and dealing damage, decays when out of combat" },
              { label: "Energy", text: "Used by physical classes, regenerates quickly during combat" },
              { label: "Focus", text: "Built through concentration, lost when taking damage" },
              { label: "Combo Points", text: "Generated by certain abilities, spent on finishers" },
              { label: "Health", text: "Some abilities consume health as a resource" },
              { label: "Charges", text: "Limited-use abilities that recharge after rest or under specific conditions" }
            ]
          },
          {
            title: "Class-Specific Resources",
            icon: "⚡",
            content: "Many classes have unique resource systems that define their playstyle:",
            importance: "high"
          },
          {
            title: "Unique Resources",
            icon: "🌟",
            content: [
              { label: "Continuum (Chronarch)", text: "Time energy that builds up to thresholds, enabling powerful temporal effects" },
              { label: "Cards (Fate Weaver)", text: "Deck of fate cards drawn and played for various effects" },
              { label: "Heat (Pyrofiend)", text: "Temperature meter that increases spell power but risks overheating" },
              { label: "Blood Thresholds (Martyr)", text: "Health percentage thresholds that unlock increasingly powerful abilities" },
              { label: "Harmony (Minstrel)", text: "Musical combos built by playing different notes in sequence" }
            ]
          }
        ]
      },
      reactions: {
        description: "Combat reactions allow characters to respond to threats and opportunities during battle.",
        sections: [
          {
            title: "Combat Reactions",
            icon: "⚡",
            content: "Combat reactions allow characters to respond to threats and opportunities during battle. Unlike traditional reaction systems, our AP-based system allows for more tactical decision-making about when to save AP for reactions versus spending it on actions."
          },
          {
            title: "Common Reactions",
            icon: "🛡️",
            content: [
              { label: "Dodge (2 AP)", text: "When targeted by an attack, spend 2 AP to impose disadvantage on the attack roll" },
              { label: "Parry (1 AP)", text: "When hit by a melee attack, spend 1 AP and make a weapon skill check. If successful, reduce damage by your weapon die" },
              { label: "Opportunity Attack (1 AP)", text: "When an enemy leaves your reach, spend 1 AP to make a melee attack against them" },
              { label: "Counter (2 AP)", text: "When an enemy misses you with a melee attack, spend 2 AP to make an immediate attack against them" },
              { label: "Shield Block (1 AP)", text: "When hit by an attack, spend 1 AP to add your shield's defense value to your armor for that attack" }
            ]
          },
          {
            title: "Class-Specific Reactions",
            icon: "✨",
            content: "Many classes have unique reactions available through their talent trees:",
            importance: "medium"
          },
          {
            title: "Specialized Reactions",
            icon: "🌟",
            content: [
              { label: "Temporal Shift (Chronarch)", text: "Briefly step out of time to avoid an attack" },
              { label: "Fate's Intervention (Fate Weaver)", text: "Play a card from your hand as a reaction to an event" },
              { label: "Shadow Step (Shadowdancer)", text: "Teleport to a nearby shadow when targeted by an attack" },
              { label: "Martyr's Sacrifice (Martyr)", text: "Take damage intended for an ally" },
              { label: "Spell Reflection (Spellguard)", text: "Reflect a spell back at its caster" }
            ]
          }
        ]
      },
      spellcasting: {
        description: "Spell resolution determines how magical effects are applied and resolved in the game.",
        sections: [
          {
            title: "Spell Resolution",
            icon: "🔮",
            content: "Spell resolution determines how magical effects are applied and resolved in the game. Unlike traditional systems with spell levels, our system focuses on the cost and effect of spells."
          },
          {
            title: "Casting Process",
            icon: "📖",
            content: [
              { label: "Declare", text: "Announce the spell and pay its AP cost" },
              { label: "Resource Cost", text: "Pay any additional resource costs (mana, health, etc.)" },
              { label: "Targeting", text: "Determine targets within range and line of sight" },
              { label: "Resolution", text: "Determine effects based on spell description" },
              { label: "Duration", text: "Track ongoing effects if applicable" }
            ]
          },
          {
            title: "Spell Components",
            icon: "🧪",
            content: "Some spells require specific components to cast:",
            importance: "medium"
          },
          {
            title: "Component Types",
            icon: "📋",
            content: [
              { label: "Verbal", text: "Must be able to speak clearly" },
              { label: "Somatic", text: "Must have at least one hand free for gestures" },
              { label: "Material", text: "Requires specific physical components" },
              { label: "Focus", text: "Requires a special item to channel the magic" },
              { label: "Sacrifice", text: "Requires giving up something of value" }
            ]
          },
          {
            title: "Spell Disruption",
            icon: "❌",
            content: "Spells can be disrupted in several ways:",
            importance: "medium"
          },
          {
            title: "Disruption Methods",
            icon: "🛑",
            content: [
              { label: "Damage", text: "Taking damage while casting may require a concentration check" },
              { label: "Counterspell", text: "Specific reaction abilities can counter spells" },
              { label: "Anti-Magic", text: "Areas of anti-magic can nullify spells" },
              { label: "Component Removal", text: "Removing required components can prevent casting" },
              { label: "Silence", text: "Preventing verbal components blocks spells requiring speech" }
            ]
          }
        ]
      },
      talents: {
        description: "Talent abilities are the special powers and techniques that define a character's capabilities.",
        sections: [
          {
            title: "Talent Abilities",
            icon: "🌟",
            content: "Talent abilities are the special powers and techniques that define a character's capabilities. These are acquired by spending talent points in your class's talent trees."
          },
          {
            title: "Ability Types",
            icon: "📋",
            content: [
              { label: "Active Abilities", text: "Powers that must be activated by spending AP and resources" },
              { label: "Passive Abilities", text: "Ongoing effects that are always active" },
              { label: "Triggered Abilities", text: "Effects that activate under specific conditions" },
              { label: "Enhancement Abilities", text: "Improve existing abilities or attributes" },
              { label: "Transformation Abilities", text: "Change how a character functions in significant ways" }
            ]
          },
          {
            title: "Ability Synergies",
            icon: "⚙️",
            content: "Many abilities are designed to work together, creating powerful combinations:",
            importance: "high"
          },
          {
            title: "Synergy Examples",
            icon: "🔄",
            content: [
              { label: "Setup + Payoff", text: "One ability creates a condition that another ability exploits" },
              { label: "Resource Generation + Spending", text: "One ability generates resources that another consumes" },
              { label: "Status Effect + Trigger", text: "One ability applies a status that another ability reacts to" },
              { label: "Stance Switching", text: "Abilities that change your stance, altering how other abilities function" },
              { label: "Team Combos", text: "Abilities that create opportunities for allies to exploit" }
            ]
          },
          {
            title: "Ability Progression",
            icon: "📈",
            content: "As you invest more points in a talent tree, you gain access to more powerful abilities:",
            importance: "medium"
          },
          {
            title: "Tier Structure",
            icon: "🏆",
            content: [
              { label: "Tier 1 (1-3 points)", text: "Basic abilities that define your playstyle" },
              { label: "Tier 3 (7-9 points)", text: "Specialized abilities that enhance your role" },
              { label: "Tier 5 (13-15 points)", text: "Powerful abilities that significantly impact gameplay" },
              { label: "Tier 7 (19-21 points)", text: "Capstone abilities that represent mastery of your specialization" }
            ]
          }
        ]
      }
    },
    social: {
      basics: {
        description: "Social interactions are a core part of the game, allowing characters to gather information, make allies, influence NPCs, and navigate the complex social landscape of the world.",
        sections: [
          {
            title: "Social Encounters",
            icon: "💬",
            content: "Social interactions are a core part of the game, allowing characters to gather information, make allies, influence NPCs, and navigate the complex social landscape of the world."
          },
          {
            title: "Social Skills",
            icon: "🧠",
            content: [
              { label: "Persuasion", text: "Convincing others through logical argument or good faith" },
              { label: "Deception", text: "Lying or misleading others convincingly" },
              { label: "Intimidation", text: "Using threats or displays of power to influence others" },
              { label: "Insight", text: "Reading intentions and detecting lies" },
              { label: "Performance", text: "Entertaining or impressing others with artistic displays" }
            ]
          }
        ]
      },
      carousing: {
        description: "Carousing represents time spent celebrating, drinking, gambling, and socializing in taverns and inns.",
        flavorText: "The tavern erupted in cheers as the bard finished his tale, raising his tankard high. \"To adventure!\" he cried, and a dozen voices echoed the sentiment. Gold changed hands, drinks flowed freely, and by morning, half the town would know their names—for better or worse.",
        sections: [
          {
            title: "Carousing Basics",
            icon: "🍺",
            content: "Carousing represents time spent celebrating, drinking, gambling, and socializing in taverns and inns. It's a way to blow off steam between adventures, make contacts, and potentially gain benefits (or complications)."
          },
          {
            title: "Carousing Costs",
            icon: "💰",
            content: "To carouse, a character must spend money based on their desired level of revelry:",
            importance: "medium"
          },
          {
            title: "Revelry Levels",
            icon: "📊",
            content: [
              { label: "Modest (5 sp)", text: "Basic drinks and food at a local tavern" },
              { label: "Comfortable (2 gp)", text: "Good food, quality drinks, and entertainment" },
              { label: "Wealthy (10 gp)", text: "High-end establishment with the finest offerings" },
              { label: "Extravagant (50 gp)", text: "Throwing a party or buying rounds for the entire tavern" }
            ]
          },
          {
            title: "Carousing Outcomes",
            icon: "🎲",
            content: "After carousing, roll on the Carousing Outcomes table to determine what happens. The quality of your carousing adds a bonus to the roll."
          }
        ],
        tables: [
          {
            title: "Carousing Outcomes",
            description: "Roll a d8 and add a bonus based on your revelry level: Modest +0, Comfortable +1, Wealthy +2, Extravagant +3",
            headers: ["Roll", "Outcome", "Benefit", "Complication"],
            rows: [
              ["1", "Bar Fight", "Gain a reputation for toughness (+1 to Intimidation for 1d4 days)", "Wake up in jail, pay 3d6 gp fine"],
              ["2", "Embarrassing Performance", "Learn a humorous story about a local notable", "Disadvantage on social checks in this settlement for 1d4 days"],
              ["3", "Gambling Loss", "Make a contact in the gambling scene", "Lose an additional 2d10 gp"],
              ["4", "Hangover", "Overhear a useful rumor while drinking", "Disadvantage on all ability checks until next short rest"],
              ["5", "New Friend", "Gain a friendly NPC contact in the settlement", "They need a favor worth about 50 gp in value"],
              ["6", "Gambling Win", "Win an additional 2d10 gp", "A sore loser holds a grudge"],
              ["7", "Useful Information", "Learn a valuable secret about the current quest", "Someone doesn't want you sharing that information"],
              ["8-10", "Memorable Night", "Gain advantage on social checks in this settlement for 1d4 days", "Minor property damage (1d6 gp)"],
              ["11+", "Local Hero", "Gain a 10% discount at local establishments for 2d6 days", "A rival becomes jealous of your popularity"]
            ]
          }
        ]
      },
      wassailing: {
        description: "Wassailing is an ancient tradition of singing, revelry, and blessing that takes place during winter festivals or special celebrations.",
        sections: [
          {
            title: "Wassailing Tradition",
            icon: "🎭",
            content: "Wassailing is an ancient tradition of singing, revelry, and blessing that takes place during winter festivals or special celebrations. The practice involves traveling from home to home or orchard to orchard, singing traditional songs and offering blessings in exchange for hospitality, food, and drink."
          },
          {
            title: "Wassailing Mechanics",
            icon: "🎵",
            content: "To participate in Wassailing, characters must:",
            importance: "medium"
          },
          {
            title: "Wassailing Requirements",
            icon: "📋",
            content: [
              { label: "Group Size", text: "Form a group of at least 3 participants" },
              { label: "Preparation", text: "Prepare a traditional song or blessing (Performance check)" },
              { label: "Offering", text: "Bring a token gift or offering (minimum value 1 sp per location visited)" },
              { label: "Visitations", text: "Visit at least 3 different locations in a single night" }
            ]
          },
          {
            title: "Wassailing Benefits",
            icon: "🎁",
            content: "Successful Wassailing can provide the following benefits:",
            importance: "high"
          },
          {
            title: "Potential Benefits",
            icon: "✨",
            content: [
              { label: "Community Favor", text: "Gain advantage on social checks with locals for 1d4 days" },
              { label: "Seasonal Blessing", text: "Gain resistance to cold damage for 24 hours" },
              { label: "Shared Prosperity", text: "Each participant receives 1d6 sp per location visited" },
              { label: "Ritual Magic", text: "If visiting orchards or farms, a successful Wassail grants those locations increased yields" },
              { label: "Spirit Communion", text: "On a natural 20 Performance check, the group may receive a vision or message from local nature spirits or ancestors" }
            ]
          },
          {
            title: "Regional Variations",
            icon: "🗺️",
            content: "Different regions have their own Wassailing customs:",
            importance: "low"
          },
          {
            title: "Regional Customs",
            icon: "🏞️",
            content: [
              { label: "Northern Kingdoms", text: "Focus on warding off winter spirits and blessing homes against the cold" },
              { label: "Coastal Towns", text: "Blessings for safe voyages and bountiful fishing in the coming year" },
              { label: "Agricultural Regions", text: "Orchard Wassailing to ensure fertile trees and good harvests" },
              { label: "Urban Centers", text: "Guild Wassailing where craftspeople exchange blessings for their respective trades" }
            ]
          }
        ]
      },
      reputation: {
        description: "Your actions in the world affect how different factions and communities view you.",
        sections: [
          {
            title: "Reputation System",
            icon: "👑",
            content: "Your actions in the world affect how different factions and communities view you. Reputation is tracked separately for each major faction or settlement."
          },
          {
            title: "Reputation Levels",
            icon: "📊",
            content: "Reputation ranges from -5 (Hated) to +5 (Revered):",
            importance: "high"
          },
          {
            title: "Reputation Scale",
            icon: "⚖️",
            content: [
              { label: "-5 (Hated)", text: "Attacked on sight, exorbitant prices, no services available" },
              { label: "-3 (Disliked)", text: "Suspicion, limited services, higher prices" },
              { label: "0 (Neutral)", text: "Standard treatment, normal prices" },
              { label: "+3 (Respected)", text: "Preferential treatment, discounts, access to special services" },
              { label: "+5 (Revered)", text: "Honored guest status, significant discounts, access to exclusive opportunities" }
            ]
          },
          {
            title: "Gaining and Losing Reputation",
            icon: "🔄",
            content: [
              { label: "Completing Quests", text: "+1 to +3 reputation with the faction or settlement" },
              { label: "Heroic Deeds", text: "+1 to +2 reputation with affected communities" },
              { label: "Generous Donations", text: "+1 reputation per significant donation" },
              { label: "Criminal Acts", text: "-1 to -3 reputation if caught or suspected" },
              { label: "Betrayal", text: "-3 to -5 reputation with the betrayed faction" }
            ]
          },
          {
            title: "Reputation Benefits",
            icon: "🎁",
            content: "High reputation with a faction or settlement provides various benefits:",
            importance: "medium"
          },
          {
            title: "Benefit Examples",
            icon: "💰",
            content: [
              { label: "Merchant Discounts", text: "5% discount per positive reputation level" },
              { label: "Information Access", text: "Access to restricted information or areas" },
              { label: "Special Services", text: "Access to unique services or items" },
              { label: "Military Support", text: "Ability to call on guards or soldiers for assistance" },
              { label: "Political Influence", text: "Ability to influence local politics or laws" }
            ]
          }
        ]
      }
    },
    travel: {
      basics: {
        description: "Travel is more than just getting from point A to point B—it's an integral part of the adventure.",
        flavorText: "The weathered cartographer unfurls a worn map across the table, tracing faded routes with calloused fingers. \"The roads between settlements tell more stories than the settlements themselves,\" she muses, eyes distant with memories. \"It's in the journey that adventurers truly discover both the world and themselves.\"",
        sections: [
          {
            title: "The Journey Matters",
            icon: "🗺️",
            content: "In our world, travel is more than just getting from point A to point B—it's an integral part of the adventure. The journey shapes characters, tests their resolve, and often leads to unexpected discoveries that can change the course of a campaign."
          },
          {
            title: "Travel Mechanics",
            icon: "⏱️",
            content: "Travel in our system is handled through a combination of narrative description and mechanical challenges. Each day of travel consists of:"
          },
          {
            title: "Travel Segments",
            icon: "🧭",
            content: [
              { label: "Morning Preparation", text: "Planning the day's route, preparing supplies, breaking camp" },
              { label: "Travel Segments", text: "2-3 segments per day, each with potential for encounters or discoveries" },
              { label: "Evening Camp", text: "Setting up camp, preparing meals, resting, and recovery" },
              { label: "Watch Shifts", text: "Characters take turns keeping watch during the night" }
            ]
          }
        ]
      },
      challenges: {
        description: "Travel challenges represent the obstacles and opportunities encountered during journeys.",
        sections: [
          {
            title: "Challenge System",
            icon: "🏔️",
            content: "Travel challenges represent the obstacles and opportunities encountered during journeys. When a challenge occurs, the GM determines its severity and the party must accumulate a certain number of successes to overcome it."
          },
          {
            title: "Challenge Resolution",
            icon: "🎲",
            content: [
              { label: "Skill Checks", text: "Each player can contribute one skill check per challenge round" },
              { label: "Difficulty", text: "DC varies based on the challenge's severity" },
              { label: "Success Count", text: "Each successful check counts as one success toward the challenge total" },
              { label: "Failure Consequences", text: "Failed checks may result in resource loss, damage, or other complications" },
              { label: "Group Effort", text: "Players can assist each other, providing advantage on checks" }
            ]
          },
          {
            title: "Challenge Severity",
            icon: "📊",
            content: "The severity of a challenge determines the number of successes required and the difficulty of skill checks:",
            importance: "high"
          },
          {
            title: "Severity Levels",
            icon: "📈",
            content: [
              { label: "Effortless", text: "1 success required, DC 10" },
              { label: "Very Easy", text: "2 successes required, DC 12" },
              { label: "Easy", text: "3 successes required, DC 15" },
              { label: "Medium", text: "4 successes required, DC 17" },
              { label: "Hard", text: "5 successes required, DC 20" },
              { label: "Very Hard", text: "6 successes required, DC 25" },
              { label: "Extreme", text: "6+ successes required, DC 30" }
            ]
          }
        ],
        tables: [
          {
            title: "Example Travel Challenges",
            description: "Roll a d20 to determine a random travel challenge",
            headers: ["Roll", "Challenge", "Severity", "Suggested Skills"],
            rows: [
              ["1", "Catastrophic storm", "Extreme", "Survival, Athletics, Nature"],
              ["2-3", "Hostile faction encounter", "Very Hard", "Persuasion, Stealth, Insight"],
              ["4-5", "Landslide blocks path", "Hard", "Athletics, Perception, Survival"],
              ["6-8", "River crossing", "Medium", "Athletics, Nature, Survival"],
              ["9-12", "Finding shelter", "Easy", "Survival, Perception, Nature"],
              ["13-16", "Foraging for food", "Easy", "Survival, Nature, Medicine"],
              ["17-19", "Clear weather day", "Very Easy", "Any skill"],
              ["20", "Perfect travel conditions", "Effortless", "Any skill"]
            ]
          }
        ]
      },
      exploration: {
        description: "The Point and Click Model provides a structured approach for Game Masters to create rich, interactive environments for players to explore.",
        sections: [
          {
            title: "Point and Click Model",
            icon: "🔍",
            content: "The Point and Click Model provides a structured approach for Game Masters to create rich, interactive environments for players to explore. This model breaks down scene exploration into key components that engage players and encourage thorough investigation."
          },
          {
            title: "Scene Components",
            icon: "🏞️",
            content: "When creating a scene for exploration, consider these key components:",
            importance: "high"
          },
          {
            title: "Scene Structure",
            icon: "📋",
            content: [
              { label: "Establish the Scene", text: "What is the general setting and atmosphere of the area?" },
              { label: "Sensory Details", text: "What can be seen, heard, smelled, felt, or tasted?" },
              { label: "Dynamic Elements", text: "What is moving or changing in the scene?" },
              { label: "Key Features", text: "What landmarks or notable features are present?" },
              { label: "Hidden Elements", text: "What secrets exist and how are they connected to the environment?" },
              { label: "Encounters", text: "What events might trigger as a result of interaction?" }
            ]
          },
          {
            title: "Implementation Tips",
            icon: "💡",
            content: [
              { label: "Prepare in Advance", text: "Create a quick checklist for each area using the six categories above" },
              { label: "Start Broad, Then Narrow", text: "Begin with the general atmosphere, then focus on specific details" },
              { label: "Reward Thorough Exploration", text: "Place meaningful discoveries for players who investigate thoroughly" },
              { label: "Adapt to Player Interest", text: "Expand on areas where players show curiosity" },
              { label: "Connect to Story", text: "Ensure discoveries contribute to the overall narrative" }
            ]
          }
        ]
      },
      environments: {
        description: "Different environments present unique challenges, opportunities, and hazards for travelers.",
        sections: [
          {
            title: "Terrain Types",
            icon: "🌲",
            content: "Different terrain types present unique challenges and opportunities during travel:",
            importance: "high"
          },
          {
            title: "Common Terrains",
            icon: "🏞️",
            content: [
              { label: "Plains", text: "Easy travel, good visibility, but limited cover from enemies or weather" },
              { label: "Forests", text: "Reduced visibility, abundant resources, natural shelter, potential for getting lost" },
              { label: "Mountains", text: "Difficult terrain, altitude effects, spectacular vistas, hidden valleys" },
              { label: "Deserts", text: "Extreme temperatures, water scarcity, sandstorms, ancient ruins" },
              { label: "Swamps", text: "Difficult terrain, disease risk, unique flora and fauna, hidden dangers" },
              { label: "Tundra", text: "Cold exposure, limited resources, pristine beauty, ancient ice formations" },
              { label: "Coastal", text: "Alternative water travel, abundant seafood, storms, hidden coves" },
              { label: "Urban", text: "Social encounters, resources, information, but also crime and surveillance" }
            ]
          },
          {
            title: "Environmental Hazards",
            icon: "⚠️",
            content: "The natural world presents various hazards that travelers must contend with:",
            importance: "medium"
          },
          {
            title: "Common Hazards",
            icon: "🌡️",
            content: [
              { label: "Extreme Cold", text: "Constitution save (DC 10) every hour or gain one level of exhaustion" },
              { label: "Extreme Heat", text: "Constitution save (DC 5 + hours exposed) or gain one level of exhaustion" },
              { label: "High Altitude", text: "Constitution save (DC 10 + 1 per 1,000 feet above 10,000) or gain one level of exhaustion" },
              { label: "Quicksand", text: "Strength save to avoid sinking, Athletics checks to escape" },
              { label: "Thin Ice", text: "Weight-based chance of breaking through, cold exposure if submerged" }
            ]
          },
          {
            title: "Weather Effects",
            icon: "🌦️",
            content: "Weather can dramatically affect travel and exploration:",
            importance: "medium"
          },
          {
            title: "Weather Conditions",
            icon: "🌪️",
            content: [
              { label: "Heavy Rain", text: "Reduced visibility, difficult terrain, risk of flooding" },
              { label: "Snowstorm", text: "Reduced visibility, difficult terrain, cold exposure" },
              { label: "Fog", text: "Severely reduced visibility, risk of getting lost" },
              { label: "High Winds", text: "Difficulty with ranged attacks, risk of falling objects" },
              { label: "Thunderstorm", text: "Lightning strikes, heavy rain, frightened animals" }
            ]
          }
        ]
      },
      pointclick: {
        description: "The Point and Click Model provides a detailed framework for creating immersive exploration scenes.",
        flavorText: "The old sage's eyes twinkled as he gestured to the ancient map. \"The art of exploration,\" he whispered, \"is not merely about what you see, but how you see it. A master Game Master crafts scenes like a painter, layering details that invite discovery and interaction.\"",
        sections: [
          {
            title: "Scene Exploration Framework",
            icon: "👆",
            content: "The Point and Click Model provides a detailed framework for creating immersive exploration scenes. This approach is inspired by point-and-click adventure games, where players can interact with various elements in the environment.",
            importance: "high"
          },
          {
            title: "Scene Creation Process",
            icon: "🔄",
            content: "When designing exploration scenes, Game Masters should work through a structured set of questions that help build rich, interactive environments. Each question addresses a different aspect of the scene, from initial atmosphere to hidden secrets and potential encounters.",
            importance: "medium"
          },
          {
            title: "Implementation Tips",
            icon: "💡",
            content: [
              { label: "Prepare in Advance", text: "Create a quick checklist for each area using the six categories in the table below" },
              { label: "Start Broad, Then Narrow", text: "Begin with the general atmosphere, then focus on specific details" },
              { label: "Reward Thorough Exploration", text: "Place meaningful discoveries for players who investigate thoroughly" },
              { label: "Adapt to Player Interest", text: "Expand on areas where players show curiosity" },
              { label: "Connect to Story", text: "Ensure discoveries contribute to the overall narrative" },
              { label: "Use All Senses", text: "Include details beyond just visual descriptions to create immersion" },
              { label: "Create Interaction Points", text: "Design specific elements that players can meaningfully interact with" }
            ]
          },
          {
            title: "Example: Abandoned Laboratory",
            icon: "🧪",
            content: "Here's an example of how to apply the Point and Click Model to a scene:",
            importance: "medium"
          },
          {
            title: "Laboratory Example",
            icon: "🔬",
            content: [
              { label: "Setting", text: "An abandoned alchemist's laboratory, cluttered with workbenches and strange equipment" },
              { label: "Sensory Details", text: "Sharp chemical scents, clinking glass containers, sticky floor" },
              { label: "Dynamic Elements", text: "A bubbling cauldron in the corner continues to simmer despite abandonment" },
              { label: "Key Features", text: "Workbenches, bookcase of journals, simmering cauldron, distillery-like contraption" },
              { label: "Hidden Elements", text: "Scuffed floorboards hiding a compartment, journal with different binding" },
              { label: "Encounters", text: "Investigating cauldron releases strange fumes, hidden compartment triggers guardian" }
            ]
          }
        ],
        tables: [
          {
            title: "Point and Click Model Framework",
            description: "A structured approach to creating rich, interactive exploration scenes",
            headers: ["Question", "Description", "Example"],
            rows: [
              ["What is the general setting and atmosphere of the room/area?", "Provide the initial description of the environment, focusing on the atmosphere or vibe of the scene.", "You walk into a gloomy, Gothic study, the walls lined with ancient books and the air thick with the scent of mold and dust."],
              ["What sensory details are immediately noticeable?", "Include varied sensory details to make the environment more immersive.", "You smell old parchment and a hint of pipe smoke; a cold breeze causes the curtains to sway, and somewhere in the distance, a clock ticks monotonously."],
              ["What or who is moving in the scene? What interactions are occurring?", "Highlight movement or interactions that add life to the scene and can guide player actions.", "As you step into the room, the curtains flutter more aggressively, suggesting a sudden gust or perhaps something more sinister at the open window."],
              ["What landmarks or notable features are present?", "Describe key features or landmarks in the room that players can interact with.", "In the room, you notice the open window, a large oak desk cluttered with papers, a glass-panel bookshelf filled with dusty tomes, and an ornate chandelier dimly illuminating the space."],
              ["Are there hidden or secret elements to discover? How can they be revealed?", "Detail any hidden or secret aspects that may require specific actions or observations to uncover.", "The desk's heavy drawer seems stuck, but a closer look reveals a false bottom hiding a mysterious, ancient key."],
              ["What secrets exist and how are they connected to the environment?", "Explain any deeper secrets that integrate with the environment, offering clues about their nature.", "A peculiar pattern in the dust on the bookshelf suggests that some books are often pulled out or moved, hinting at a potential mechanism or secret passage."],
              ["What encounters or events might trigger as a result of interaction in this scene?", "Describe potential scenarios or encounters that could occur based on player interactions, emphasizing different outcomes based on the clues discovered.", "If players investigate the bookshelf and pull the correct books, a hidden door opens to a secret room; pulling the wrong one might trigger a small, non-lethal trap."]
            ]
          },
          {
            title: "Additional Scene Examples",
            description: "More examples of the Point and Click Model applied to different environments",
            headers: ["Environment", "Setting Description", "Key Features", "Hidden Elements"],
            rows: [
              ["Ancient Temple", "A vast stone chamber with towering pillars and faded murals depicting forgotten deities", "Central altar, ceremonial basin, hieroglyphic-covered walls, broken statues", "Pressure plate under a loose tile, hidden compartment in altar, secret passage behind a pivoting statue"],
              ["Merchant's Shop", "A cluttered but organized shop filled with exotic goods from distant lands", "Glass display cases, hanging tapestries, merchant's counter, collection of strange artifacts", "Secret ledger hidden under counter, magical item disguised as mundane object, trap door beneath carpet"],
              ["Forest Clearing", "A peaceful glade where sunlight filters through the canopy, illuminating a circle of unusual stones", "Stone circle, unusual flowers, small stream, animal tracks", "Druidic symbols visible only at certain times of day, hollow tree containing treasure, hidden cave entrance behind waterfall"],
              ["Noble's Manor", "An opulent mansion with marble floors, crystal chandeliers, and signs of a hasty departure", "Grand staircase, portrait gallery, dining hall with half-eaten meal, master bedroom", "Secret documents in desk with false bottom, hidden servant passages, concealed safe behind painting"],
              ["Abandoned Mine", "A dark, dusty network of tunnels with the occasional glint of mineral deposits in the walls", "Mine cart tracks, support beams, discarded tools, ore deposits", "Collapsed passage that can be cleared, hidden geode cavern, old miner's cache of supplies"]
            ]
          }
        ]
      }
    },
    professions: {
      basics: {
        description: "Professions allow characters to craft items, gather resources, and provide valuable services.",
        flavorText: "The master craftsman's weathered hands moved with practiced precision as he worked the metal. \"In this world,\" he said without looking up, \"the difference between life and death often comes down to the quality of what you carry.\" He gestured to the apprentices around him. \"We who craft—alchemists, blacksmiths, enchanters—we're the silent heroes behind every successful adventure.\"",
        sections: [
          {
            title: "Profession System",
            icon: "⚒️",
            content: "Professions represent specialized skills that allow characters to craft items, gather resources, and provide valuable services. Each character can learn multiple professions, but mastering them requires significant investment."
          },
          {
            title: "Profession Levels",
            icon: "📊",
            content: [
              { label: "Novice (1-25)", text: "Basic recipes and gathering, frequent failures" },
              { label: "Apprentice (26-50)", text: "Expanded recipes, fewer failures, modest efficiency" },
              { label: "Journeyman (51-75)", text: "Advanced recipes, rare failures, good efficiency" },
              { label: "Master (76-100)", text: "Expert recipes, very rare failures, excellent efficiency" },
              { label: "Grandmaster (101-125)", text: "Legendary recipes, almost no failures, superior efficiency" }
            ]
          }
        ]
      }
    },
    advancement: {
      experience: {
        description: "Characters gain experience points (XP) by defeating enemies, completing quests, and achieving story milestones.",
        sections: [
          {
            title: "Experience and Levels",
            icon: "⭐",
            content: "Characters gain experience points (XP) by defeating enemies, completing quests, and achieving story milestones. When enough XP is accumulated, characters advance to the next level, gaining new abilities and becoming more powerful."
          },
          {
            title: "Experience Sources",
            icon: "🏆",
            content: [
              { label: "Combat", text: "Defeating enemies and overcoming combat challenges" },
              { label: "Quests", text: "Completing missions and tasks for NPCs" },
              { label: "Exploration", text: "Discovering new locations and uncovering secrets" },
              { label: "Roleplay", text: "Significant character development and social interactions" },
              { label: "Milestones", text: "Reaching important story points in the campaign" }
            ]
          },
          {
            title: "Leveling Process",
            icon: "📈",
            content: "When a character accumulates enough XP to reach a new level, they gain various benefits including increased hit points, talent points, and potentially attribute improvements."
          }
        ],
        tables: [
          {
            title: "Experience Requirements",
            description: "XP needed to reach each level",
            headers: ["Level", "XP Required", "Total XP"],
            rows: [
              ["1", "0", "0"],
              ["2", "300", "300"],
              ["3", "600", "900"],
              ["4", "900", "1,800"],
              ["5", "1,500", "3,300"],
              ["6", "2,100", "5,400"],
              ["7", "2,700", "8,100"],
              ["8", "3,300", "11,400"],
              ["9", "3,900", "15,300"],
              ["10", "4,500", "19,800"]
            ]
          }
        ]
      },
      talents: {
        description: "Talent points allow characters to customize their abilities and specialization through talent trees.",
        sections: [
          {
            title: "Talent Points",
            icon: "🌟",
            content: "Each level grants talent points that can be spent in your class's talent trees. These allow you to customize your character's abilities and specialization."
          },
          {
            title: "Talent Trees",
            icon: "🌳",
            content: "Each class has three talent trees representing different specializations or playstyles. Talents are arranged in 7 tiers, with more powerful abilities available at higher tiers."
          },
          {
            title: "Talent Mechanics",
            icon: "⚙️",
            content: [
              { label: "Point Allocation", text: "Each level grants 1 talent point to spend" },
              { label: "Prerequisites", text: "Higher-tier talents require a certain number of points in the tree" },
              { label: "Talent Paths", text: "Only one path from prerequisite nodes needs to be filled to activate a second path" },
              { label: "Multi-Level Talents", text: "Some talents can be improved by spending additional points" },
              { label: "Respecialization", text: "Talent points can be reassigned by visiting a class trainer (for a fee)" }
            ]
          }
        ]
      },
      attributes: {
        description: "At certain levels, characters can increase their primary attributes to become more effective.",
        sections: [
          {
            title: "Attribute Improvements",
            icon: "💪",
            content: "At certain levels, you can increase your character's attributes, making them more effective in their chosen areas of expertise."
          },
          {
            title: "Improvement Schedule",
            icon: "📅",
            content: "Characters receive attribute points at levels 4, 8, 12, 16, and 20. Each time, they can increase one attribute by 2 points or two attributes by 1 point each."
          },
          {
            title: "Strategic Choices",
            icon: "🧠",
            content: [
              { label: "Primary Attributes", text: "Focus on attributes that enhance your class's main abilities" },
              { label: "Rounding Up", text: "Consider increasing odd-numbered attributes to reach the next modifier threshold" },
              { label: "Weaknesses", text: "Address vulnerabilities by improving low attributes" },
              { label: "Specialization", text: "Further enhance strengths for maximum effectiveness" },
              { label: "Versatility", text: "Spread improvements to become more well-rounded" }
            ]
          }
        ]
      },
      milestones: {
        description: "Milestones represent significant achievements that grant special rewards beyond normal advancement.",
        sections: [
          {
            title: "Milestones",
            icon: "🏆",
            content: "Milestones represent significant achievements in a character's journey. Reaching a milestone grants special rewards beyond normal advancement, such as unique abilities, magical items, or story developments."
          },
          {
            title: "Milestone Types",
            icon: "🎯",
            content: [
              { label: "Personal", text: "Related to a character's background or goals" },
              { label: "Class", text: "Achievements specific to a character's class" },
              { label: "Story", text: "Major plot developments in the campaign" },
              { label: "World", text: "Events that change the game world in significant ways" },
              { label: "Group", text: "Accomplishments achieved by the entire party" }
            ]
          },
          {
            title: "Milestone Rewards",
            icon: "🎁",
            content: [
              { label: "Unique Abilities", text: "Special powers not available through normal advancement" },
              { label: "Magical Items", text: "Powerful artifacts tied to the milestone's significance" },
              { label: "Story Developments", text: "New plot threads, allies, or opportunities" },
              { label: "Resource Boosts", text: "Permanent increases to hit points, resource pools, etc." },
              { label: "Reputation", text: "Improved standing with factions or communities" }
            ]
          }
        ]
      }
    }
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);

    // Set the first subcategory as active when changing categories
    const category = categories.find(cat => cat.id === categoryId);
    if (category && category.subcategories && category.subcategories.length > 0) {
      setActiveSubcategory(category.subcategories[0].id);
    } else {
      setActiveSubcategory(null);
    }

    // Don't scroll to top when changing categories
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setActiveSubcategory(subcategoryId);
    // Don't scroll to top when changing subcategories
  };

  const handleSearchResultClick = (categoryId, subcategoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(subcategoryId);
    // We'll keep scrolling to top for search results since they could be far down the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="rules-page">
      <div className="rules-header">
        <h1 className="rules-title">Game Rules</h1>
        <p className="rules-description">
          Comprehensive rules for our custom TTRPG system. Browse through different categories to learn about specific aspects of the game.
        </p>
        <RulesSearch
          categories={categories}
          contentData={contentData}
          onSearchResultClick={handleSearchResultClick}
        />
      </div>

      <div className="rules-main-container">
        <RulesNavigation
          categories={categories}
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
          onCategoryChange={handleCategoryChange}
          onSubcategoryChange={handleSubcategoryChange}
        />

        <RulesContent
          activeCategory={activeCategory}
          activeSubcategory={activeSubcategory}
          categories={categories}
          contentData={contentData}
        />
      </div>

      {showBackToTop && (
        <button className="rules-back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
};

export default RulesPage;
