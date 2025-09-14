import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import paths from '../../data/paths';
import backgroundAbilities from '../../data/background-abilities';
import './BackgroundPage.css';

const BackgroundPage = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const path = paths.find(p => p.id === pathId);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedSubBackground, setSelectedSubBackground] = useState(null);
  const [selectedAbilities, setSelectedAbilities] = useState([]);

  // Reset selected abilities when sub-background changes
  const handleSubBackgroundChange = (subBgKey) => {
    setSelectedSubBackground(selectedSubBackground === subBgKey ? null : subBgKey);
    setSelectedAbilities([]); // Clear abilities when changing sub-background
  };

  // Scroll to section when activeSection changes
  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  // Function to handle background navigation
  const navigateToBackground = (id) => {
    navigate(`/paths/${id}`);
    // Reset to overview section when changing backgrounds
    setActiveSection('overview');
    // Scroll to top when changing backgrounds
    window.scrollTo(0, 0);
  };

  if (!path) {
    return (
      <div className="background-page">
        <div className="background-navigation">
          <Link to="/paths" className="back-link">← All Backgrounds</Link>
        </div>
        <div className="error-message">
          <h2>Background Not Found</h2>
          <p>Sorry, we couldn't find information about this background.</p>
        </div>
      </div>
    );
  }

  // Get background-specific content
  const { description, benefits, roleplayingTips, characterDevelopment, thematicElements } = getBackgroundContent(pathId);

  // Define sections for navigation
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'abilities', label: 'Path Abilities' },
    { id: 'roleplaying', label: 'Roleplaying' },
    { id: 'development', label: 'Character Development' },
    { id: 'thematic', label: 'Thematic Elements' }
  ];

  // Get path-specific color styles
  const getPathColorStyle = () => {
    const pathColors = {
      'mystic': { primary: 'var(--bg-mystic-primary)', secondary: 'var(--bg-mystic-secondary)' },
      'arcanist': { primary: 'var(--bg-arcanist-primary)', secondary: 'var(--bg-arcanist-secondary)' },
      'trickster': { primary: 'var(--bg-trickster-primary)', secondary: 'var(--bg-trickster-secondary)' },
      'zealot': { primary: 'var(--bg-zealot-primary)', secondary: 'var(--bg-zealot-secondary)' },
      'harrow': { primary: 'var(--bg-harrow-primary)', secondary: 'var(--bg-harrow-secondary)' },
      'hexer': { primary: 'var(--bg-hexer-primary)', secondary: 'var(--bg-hexer-secondary)' },
      'reaver': { primary: 'var(--bg-reaver-primary)', secondary: 'var(--bg-reaver-secondary)' },
      'mercenary': { primary: 'var(--bg-mercenary-primary)', secondary: 'var(--bg-mercenary-secondary)' },
      'sentinel': { primary: 'var(--bg-sentinel-primary)', secondary: 'var(--bg-sentinel-secondary)' }
    };

    return pathColors[pathId] || { primary: 'var(--bg-mystic-primary)', secondary: 'var(--bg-mystic-secondary)' };
  };

  const pathColors = getPathColorStyle();
  const headerStyle = {
    background: `linear-gradient(135deg, ${pathColors.secondary}, ${pathColors.primary})`
  };

  return (
    <div className="background-page">
      <div className="background-header">
        <h1 className="background-title">{path.name}</h1>
        <p className="background-subtitle">Character Background Path</p>
      </div>

      <div className="background-navigation">
        <Link to="/paths" className="back-link">← All Backgrounds</Link>
      </div>

      <div className="section-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`section-nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
            style={activeSection === section.id ? {
              backgroundColor: pathColors.primary,
              color: 'white',
              boxShadow: `0 0 10px ${pathColors.primary}80`
            } : {}}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="background-content">
        <section id="overview" className="background-section">
          <h2>Overview</h2>
          <p>{description}</p>
        </section>

        <section id="benefits" className="background-section">
          <h2>Mechanical Benefits</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="abilities" className="background-section">
          <h2>Sub-Backgrounds & Abilities</h2>
          <p className="ability-intro">
            Characters who choose the {path.name.replace(' Path', '')} background first select a specialization,
            then choose <strong>2 abilities</strong> from the available pool. This allows for meaningful customization
            while maintaining thematic coherence.
          </p>

          {/* Sub-backgrounds section */}
          {backgroundAbilities[pathId]?.subBackgrounds && (
            <div className="sub-backgrounds-section">
              <h3>Choose Your Specialization</h3>
              <div className="sub-backgrounds-grid">
                {Object.entries(backgroundAbilities[pathId].subBackgrounds).map(([key, subBg]) => (
                  <div
                    className={`sub-background-card ${selectedSubBackground === key ? 'selected' : ''}`}
                    key={key}
                    onClick={() => handleSubBackgroundChange(key)}
                  >
                    <h4 className="sub-background-name">{subBg.name}</h4>
                    <p className="sub-background-description">{subBg.description}</p>
                    <div className="sub-background-theme">
                      <strong>Theme:</strong> {subBg.theme}
                    </div>
                    {selectedSubBackground === key && (
                      <div className="selection-indicator">✓ Selected</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ability pool section */}
          <div className="ability-pool-section">
            <h3>Available Abilities (Choose 2)</h3>
            {selectedSubBackground ? (
              <>
                <p className="pool-description">
                  Select any 2 abilities from the <strong>{backgroundAbilities[pathId].subBackgrounds[selectedSubBackground].name}</strong> specialization pool below.
                </p>
                <div className="abilities-list">
                  {getSubBackgroundAbilities(pathId, selectedSubBackground).map((ability, index) => {
                    const isSelected = selectedAbilities.includes(index);
                    const canSelect = selectedAbilities.length < 2 || isSelected;

                    return (
                      <div
                        className={`ability-item selectable ${isSelected ? 'selected' : ''} ${!canSelect ? 'disabled' : ''}`}
                        key={index}
                        onClick={() => {
                          if (!canSelect) return;

                          if (isSelected) {
                            setSelectedAbilities(selectedAbilities.filter(i => i !== index));
                          } else if (selectedAbilities.length < 2) {
                            setSelectedAbilities([...selectedAbilities, index]);
                          }
                        }}
                      >
                        <div className="ability-header">
                          <h4 className="ability-name">{ability.name}</h4>
                          <div className="ability-meta">
                            <span className="ability-type">{ability.type}</span>
                            {ability.apCost && ability.apCost !== 'None' && (
                              <span className="ability-ap-cost">AP: {ability.apCost}</span>
                            )}
                            {isSelected && <span className="selected-indicator">✓ Selected</span>}
                          </div>
                        </div>
                        <p className="ability-description">{ability.description}</p>
                        {ability.mechanics && (
                          <div className="ability-mechanics">
                            <h5>Mechanics:</h5>
                            <p>{ability.mechanics}</p>
                          </div>
                        )}
                        {ability.synergies && (
                          <div className="ability-synergies">
                            <h5>Synergies:</h5>
                            <p>{ability.synergies}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Selection Summary */}
                <div className="selection-summary">
                  <h4>Your Selection ({selectedAbilities.length}/2)</h4>
                  {selectedAbilities.length === 0 && (
                    <p>Choose 2 abilities from the {backgroundAbilities[pathId].subBackgrounds[selectedSubBackground].name} pool above to complete your background.</p>
                  )}
                  {selectedAbilities.length > 0 && (
                    <div className="selected-abilities">
                      {selectedAbilities.map(index => {
                        const ability = getSubBackgroundAbilities(pathId, selectedSubBackground)[index];
                        return (
                          <div key={index} className="selected-ability-summary">
                            <strong>{ability.name}</strong> ({ability.type})
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {selectedAbilities.length === 2 && (
                    <div className="completion-message">
                      ✓ Background selection complete! You have chosen your specialization and abilities.
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="no-selection-message">
                <p>Please select a specialization above to view available abilities.</p>
              </div>
            )}
          </div>

          {/* Add restrictions section if available */}
          {backgroundAbilities[pathId]?.restrictions && (
            <div className="ability-restrictions">
              <h3>Restrictions & Considerations</h3>
              <ul>
                {backgroundAbilities[pathId].restrictions.map((restriction, index) => (
                  <li key={index}>{restriction}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section id="roleplaying" className="background-section">
          <h2>Roleplaying a {path.name.replace(' Path', '')}</h2>
          <p>{roleplayingTips.description}</p>
          <div className="roleplaying-tips">
            <h3>Roleplaying Tips:</h3>
            <ul>
              {roleplayingTips.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="development" className="background-section">
          <h2>Impact on Character Development</h2>
          <p>{characterDevelopment}</p>
        </section>

        <section id="thematic" className="background-section">
          <h2>Thematic Elements</h2>
          <div className="thematic-elements">
            {thematicElements.map((element, index) => (
              <div className="element" key={index}>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Helper function to get sub-background specific abilities
function getSubBackgroundAbilities(pathId, subBackgroundKey) {
  if (backgroundAbilities[pathId] &&
      backgroundAbilities[pathId].subBackgrounds &&
      backgroundAbilities[pathId].subBackgrounds[subBackgroundKey] &&
      backgroundAbilities[pathId].subBackgrounds[subBackgroundKey].abilityPool) {
    return backgroundAbilities[pathId].subBackgrounds[subBackgroundKey].abilityPool;
  }
  return [];
}

// Helper function to get path-specific abilities (fallback)
function getPathAbilities(pathId) {
  // Use the enhanced background abilities data if available
  if (backgroundAbilities[pathId] && backgroundAbilities[pathId].abilityPool) {
    return backgroundAbilities[pathId].abilityPool;
  }

  // Fallback to default abilities for paths not yet in the enhanced data
  const pathAbilities = {
    'mystic': [
      {
        name: 'Elemental Attunement',
        type: 'Passive',
        description: 'Your connection to elemental forces allows you to attune to the natural energies around you.',
        mechanics: 'Once per day, you can attune to an elemental type (fire, water, earth, air, or arcane). For the next hour, you gain resistance to damage of that type and your spells or abilities of that element deal +1d4 additional damage.'
      },
      {
        name: 'Mana Surge',
        type: 'Active - 1/Long Rest',
        description: 'You can tap into the raw magical energy flowing through your body to empower your abilities.',
        mechanics: 'As a bonus action, you can enter a Mana Surge state for 1 minute. During this time, your spell costs are reduced by 1 (minimum 1), and you can cast one spell you know without expending any resources. When the effect ends, you gain 1 level of exhaustion.'
      },
      {
        name: 'Arcane Insight',
        type: 'Passive',
        description: 'Your mystical connection grants you insight into magical phenomena.',
        mechanics: 'You can identify magical effects with a successful Intelligence check (DC determined by the GM). Additionally, you have advantage on saving throws against illusions and can sense the presence of strong magical auras within 60 feet.'
      }
    ],
    'trickster': [
      {
        name: 'Fortune\'s Favor',
        type: 'Active - 3/Long Rest',
        description: 'You can manipulate the threads of fate to change an unfavorable outcome.',
        mechanics: 'After you or an ally within 30 feet rolls a d20, you can use your reaction to force a reroll. You must use the new result, even if it\'s worse than the original roll.'
      },
      {
        name: 'Chaos Surge',
        type: 'Active - 1/Combat',
        description: 'You can tap into chaotic energies to produce unpredictable effects.',
        mechanics: 'On your first attack or ability use in combat, roll 1d8 on the Chaos Surge table: 1) Your attack deals double damage; 2) You teleport up to 30 feet; 3) You become invisible until the end of your next turn; 4) A duplicate of you appears and makes an additional attack; 5) Your target is confused for 1 round; 6) You gain +2 AC until the end of your next turn; 7) You recover 1d8 HP; 8) You gain an additional action this turn.'
      },
      {
        name: 'Lucky Break',
        type: 'Passive',
        description: 'You seem to have an uncanny knack for avoiding disaster.',
        mechanics: 'Once per long rest, when you would be reduced to 0 hit points, you can instead remain at 1 hit point. Additionally, you have advantage on saving throws against traps and hazards.'
      }
    ],
    'zealot': [
      {
        name: 'Divine Favor',
        type: 'Passive',
        description: 'Your unwavering faith grants you divine protection.',
        mechanics: 'You gain resistance to radiant damage. Additionally, once per long rest, you can call upon divine favor to gain advantage on any single ability check, attack roll, or saving throw.'
      },
      {
        name: 'Smite the Unfaithful',
        type: 'Active - 1/Short Rest',
        description: 'Your conviction allows you to channel divine energy into devastating attacks against those who oppose your beliefs.',
        mechanics: 'As a bonus action, you can imbue your weapon with divine energy. Your next successful weapon attack deals an additional 2d8 radiant damage. If the target is a fiend, undead, or has opposed your faith, the damage increases to 3d8.'
      },
      {
        name: 'Zealous Presence',
        type: 'Active - 1/Long Rest',
        description: 'Your fervent belief inspires those around you.',
        mechanics: 'As an action, you can unleash a battle cry infused with divine power. All allies within 30 feet gain temporary hit points equal to your level + your Charisma modifier and advantage on their next attack roll or saving throw.'
      }
    ],
    'harrow': [
      {
        name: 'Touch of Death',
        type: 'Passive',
        description: 'Your connection to death allows you to siphon life force from your enemies.',
        mechanics: 'When you reduce a creature to 0 hit points, you gain temporary hit points equal to your level. Additionally, you have advantage on saving throws against disease and poison.'
      },
      {
        name: 'Spectral Sight',
        type: 'Active - At Will',
        description: 'You can perceive the spirits of the dead and the threads of life force that bind all living things.',
        mechanics: 'As an action, you can see invisible creatures and objects, as well as into the Ethereal Plane, for 1 minute. During this time, you can also detect the presence of undead within 60 feet and know their general location.'
      },
      {
        name: 'Death\'s Whisper',
        type: 'Active - 1/Long Rest',
        description: 'You can commune with the recently deceased to gain information.',
        mechanics: 'You can cast Speak with Dead once per long rest without expending a spell slot. Additionally, when you do so, the target cannot lie to you.'
      }
    ],
    'hexer': [
      {
        name: 'Primal Connection',
        type: 'Passive',
        description: 'Your bond with nature grants you special insights and abilities.',
        mechanics: 'You can communicate simple ideas with beasts and plants. Additionally, you have advantage on Survival checks and can always tell which direction is north.'
      },
      {
        name: 'Wild Shape',
        type: 'Active - 1/Long Rest',
        description: 'You can briefly take on aspects of a beast.',
        mechanics: 'As an action, you can transform part of your body to gain one of the following benefits for 10 minutes: claws (1d6 slashing damage), gills (water breathing), enhanced senses (darkvision 60ft and advantage on Perception checks), or tough hide (+2 AC).'
      },
      {
        name: 'Nature\'s Wrath',
        type: 'Active - 1/Short Rest',
        description: 'You can call upon the primal forces of nature to hinder your enemies.',
        mechanics: 'As an action, you cause plants to sprout in a 20-foot radius centered on a point you can see within 60 feet. The area becomes difficult terrain for 1 minute. Additionally, creatures of your choice in that area must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier) or be restrained for 1 round.'
      }
    ],
    'reaver': [
      {
        name: 'Adrenaline Rush',
        type: 'Active - 1/Short Rest',
        description: 'In moments of need, you can push your body beyond its normal limits.',
        mechanics: 'As a bonus action, you can enter an adrenaline-fueled state for 1 minute. During this time, you gain temporary hit points equal to your level + your Constitution modifier, and your movement speed increases by 10 feet. Additionally, you have advantage on Strength checks and saving throws.'
      },
      {
        name: 'Unstoppable Force',
        type: 'Passive',
        description: 'Your physical prowess allows you to overcome obstacles that would stop others.',
        mechanics: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift. Additionally, you have advantage on checks and saves against being moved against your will or knocked prone.'
      },
      {
        name: 'Devastating Strike',
        type: 'Active - 1/Short Rest',
        description: 'You can channel your raw physical power into a single, devastating attack.',
        mechanics: 'When you hit with a weapon attack, you can use this ability to add your Strength modifier to the damage roll an additional time and force the target to make a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier). On a failure, the target is knocked prone.'
      }
    ],
    'mercenary': [
      {
        name: 'Combat Expertise',
        type: 'Passive',
        description: 'Your extensive training has made you an expert in combat techniques.',
        mechanics: 'You gain proficiency with three weapons of your choice. If you are already proficient with a chosen weapon, you gain +1 to attack rolls with that weapon instead.'
      },
      {
        name: 'Tactical Assessment',
        type: 'Active - At Will',
        description: 'Your trained eye allows you to quickly assess threats and opportunities in combat.',
        mechanics: 'As a bonus action, you can assess a creature you can see within 60 feet. You learn its armor class, remaining hit point percentage (low, medium, or high), and one damage vulnerability, resistance, or immunity if it has any.'
      },
      {
        name: 'Dirty Fighting',
        type: 'Active - 1/Short Rest',
        description: 'You know how to exploit weaknesses and fight without honor when necessary.',
        mechanics: 'When you hit a creature with an attack, you can use this ability to force the target to make a Constitution saving throw (DC = 8 + your proficiency bonus + your Dexterity modifier). On a failure, the target is either blinded until the end of your next turn or has its movement reduced to 0 until the end of your next turn (your choice).'
      }
    ],
    'sentinel': [
      {
        name: 'Protective Aura',
        type: 'Passive',
        description: 'Your presence creates a subtle protective field around allies.',
        mechanics: 'Allies within 10 feet of you gain a +1 bonus to AC. Additionally, when an ally within 10 feet of you is hit by an attack, you can use your reaction to grant them a +2 bonus to AC against that attack, potentially causing it to miss.'
      },
      {
        name: 'Planar Sense',
        type: 'Passive',
        description: 'Your connection to the boundaries between realms grants you special awareness.',
        mechanics: 'You can sense the presence of portals or weak points between planes within 60 feet. Additionally, you have advantage on saving throws against effects that would banish you to another plane or teleport you against your will.'
      },
      {
        name: 'Ward of Protection',
        type: 'Active - 1/Long Rest',
        description: 'You can create a powerful ward that protects an area from harm.',
        mechanics: 'As an action, you create a 15-foot-radius ward centered on a point you can see within 60 feet. The ward lasts for 1 minute. Allies within the ward gain resistance to one damage type of your choice, and enemies that enter the ward for the first time on their turn or start their turn there take 1d8 radiant damage.'
      }
    ],
    'arcanist': [
      {
        name: 'Arcane Insight',
        type: 'Passive',
        description: 'Your scholarly understanding of magic gives you special insight into arcane phenomena.',
        mechanics: 'You can cast Detect Magic at will without expending a spell slot. Additionally, you have advantage on Intelligence (Arcana) checks to identify spells and magical effects.'
      },
      {
        name: 'Spell Adaptation',
        type: 'Active - 1/Short Rest',
        description: 'Your deep understanding of magical theory allows you to modify spells on the fly.',
        mechanics: 'When you cast a spell, you can use this ability to apply one of the following modifications: change the damage type to another elemental type, increase the range by 50%, affect one additional target, or extend the duration by 50% (minimum 1 round).'
      },
      {
        name: 'Arcane Shield',
        type: 'Active - 1/Short Rest',
        description: 'You can quickly weave arcane energy into a protective barrier.',
        mechanics: 'As a reaction when you or an ally within 30 feet is hit by an attack, you can create a shield of arcane energy. The target gains a +5 bonus to AC against that attack, potentially causing it to miss. If the attack still hits, the target has resistance to the damage from that attack.'
      }
    ]
  };

  // Default abilities for paths that don't have specific abilities yet
  const defaultAbilities = [
    {
      name: 'Path Specialty',
      type: 'Passive',
      description: `Your training in the ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} path grants you special knowledge and abilities.`,
      mechanics: 'You gain advantage on ability checks related to your background\'s primary focus.'
    },
    {
      name: 'Special Technique',
      type: 'Active - 1/Long Rest',
      description: 'You can perform a special technique unique to your background.',
      mechanics: 'Once per long rest, you can use an action to perform a special ability determined by your GM, based on your background\'s theme.'
    },
    {
      name: 'Resilience',
      type: 'Passive',
      description: 'Your background has made you particularly resilient in certain situations.',
      mechanics: 'You have advantage on saving throws against effects related to your background\'s primary focus.'
    }
  ];

  return pathAbilities[pathId] || defaultAbilities;
}

// Helper function to get background-specific content
function getBackgroundContent(pathId) {
  // Use enhanced background data if available
  if (backgroundAbilities[pathId]) {
    const enhancedData = backgroundAbilities[pathId];
    return {
      description: enhancedData.description,
      benefits: enhancedData.benefits.map(benefit => ({
        title: 'Background Benefit',
        description: benefit
      })),
      roleplayingTips: {
        description: `Characters following the ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} path embody the themes and philosophies of their chosen background.`,
        tips: [
          'Consider how your background shapes your worldview and motivations',
          'Think about how your abilities manifest and what they mean to your character',
          'Explore the relationship between your background and your class choice',
          'Use your background abilities creatively in both combat and roleplay situations'
        ]
      },
      characterDevelopment: `The ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} background significantly influences how your character approaches challenges and interacts with the world. Your unique abilities provide both mechanical benefits and rich roleplay opportunities.`,
      thematicElements: [
        {
          title: 'Core Philosophy',
          description: enhancedData.description
        },
        {
          title: 'Mechanical Integration',
          description: 'Your background abilities are designed to work seamlessly with the Action Point system and complement any class choice.'
        }
      ]
    };
  }

  // Fallback to original content structure
  const backgroundContent = {
    'mystic': {
      description: 'Mystics draw power from the fundamental forces of the universe, channeling raw energy through their bodies and minds. They are masters of elemental manipulation and cosmic forces, often walking a dangerous line between control and chaos. Those who follow the Mystic path have an innate connection to the primal energies that flow through all things. They might be born with this gift, discover it through meditation and study, or awaken to it after a traumatic or transcendent experience.',
      benefits: [
        {
          title: 'Attribute Bonuses',
          description: '+2 to Spirit attribute checks and saving throws'
        },
        {
          title: 'Elemental Resistance',
          description: 'Resistance to elemental damage types (fire, cold, lightning, etc.)'
        },
        {
          title: 'Magical Sensitivity',
          description: 'Ability to sense magical disturbances and detect magical auras'
        },
        {
          title: 'Elemental Attunement',
          description: 'Access to unique elemental attunement abilities that grow stronger with character level'
        }
      ],
      roleplayingTips: {
        description: 'Mystics often view the world differently than others, seeing patterns and connections that most miss. They might speak in metaphors, referring to cosmic principles or elemental forces when describing everyday events. Many Mystics are contemplative and thoughtful, taking time to consider the deeper implications of their actions. However, not all Mystics are serene philosophers. Some are wild and unpredictable, embodying the chaotic nature of the forces they channel.',
        tips: [
          'Consider how your character perceives the flow of energy in the world',
          'Develop personal rituals or meditations that help focus your powers',
          'Decide whether your character embraces control or chaos in their approach to magic',
          'Think about how your connection to elemental forces affects your personality and outlook'
        ]
      },
      characterDevelopment: 'The Mystic background shapes a character\'s development in profound ways. As they grow in power, Mystics often find themselves increasingly attuned to specific elements or cosmic forces. This attunement might manifest in physical ways—subtle changes in appearance, unusual reactions to certain environments, or the ability to sense disturbances in natural energy flows. Mystics may face unique challenges as they develop their powers. The energies they channel can be unpredictable and dangerous, requiring discipline and focus to control.',
      thematicElements: [
        {
          title: 'Visual Aesthetics',
          description: 'Mystics often adorn themselves with symbols representing elemental forces or cosmic principles. Their clothing might feature swirling patterns, geometric designs, or representations of stars, flames, waves, or other natural phenomena.'
        },
        {
          title: 'Common Motivations',
          description: 'Seeking greater understanding of the universe\'s mysteries, mastering the elemental forces within, achieving harmony between opposing energies, or exploring the boundaries between different planes of existence.'
        },
        {
          title: 'Typical Backgrounds',
          description: 'Former apprentices to powerful mages, individuals who survived catastrophic elemental events, scholars of ancient cosmic mysteries, or those born with unusual connections to elemental forces.'
        }
      ]
    },
    'reaver': {
      description: 'Reavers embody physical might and martial prowess, pushing their bodies beyond normal limits. They channel rage, momentum, and sheer physical force into devastating combat techniques that few can withstand. Unlike those who rely on magic or subtlety, Reavers believe in direct, overwhelming power. Those who walk the Reaver path have typically endured harsh physical trials that forged their bodies into weapons.',
      benefits: [
        {
          title: 'Attribute Bonuses',
          description: '+2 to Strength attribute checks and saving throws'
        },
        {
          title: 'Physical Endurance',
          description: 'Increased carrying capacity and resistance to physical exhaustion'
        },
        {
          title: 'Intimidating Presence',
          description: 'Advantage on Intimidation checks against opponents with lower Strength'
        },
        {
          title: 'Adrenaline Surge',
          description: 'Access to adrenaline surge abilities that can be activated in moments of crisis'
        }
      ],
      roleplayingTips: {
        description: 'Reavers often approach problems directly, preferring straightforward solutions over complex plans. They tend to value strength, courage, and determination, respecting those who demonstrate these qualities regardless of background. Many Reavers have a code of honor that guides their actions, though the specifics of this code vary widely between individuals.',
        tips: [
          'Consider what physical trials shaped your character\'s development',
          'Develop a personal code that guides when and how you use your strength',
          'Think about how your character views those who rely on magic or subtlety rather than direct force',
          'Decide whether your character embraces or controls their emotions in combat'
        ]
      },
      characterDevelopment: 'The Reaver background shapes a character\'s development by emphasizing physical growth and the mastery of combat techniques. As they advance, Reavers often develop distinctive fighting styles that reflect their personalities and experiences. Some focus on raw power, others on endurance, and still others on explosive bursts of speed and strength. Reavers may face unique challenges as they develop their abilities. The physical strain of pushing beyond normal limits can take a toll on the body, requiring periods of recovery or special techniques to manage.',
      thematicElements: [
        {
          title: 'Visual Aesthetics',
          description: 'Reavers often bear the marks of their physical trials—scars, tattoos, or distinctive musculature. Their equipment tends to be practical and durable, designed to withstand intense combat.'
        },
        {
          title: 'Common Motivations',
          description: 'Testing their limits against worthy opponents, protecting those they consider under their care, avenging past wrongs through direct action, or seeking the ultimate expression of physical perfection.'
        },
        {
          title: 'Typical Backgrounds',
          description: 'Former gladiators or arena fighters, survivors of harsh wilderness or frontier environments, warriors from tribal or clan-based societies, or individuals who have overcome severe physical limitations through sheer determination.'
        }
      ]
    },
    // Add content for other backgrounds here
  };

  // Default content for backgrounds that don't have specific content yet
  const defaultContent = {
    description: `The ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} path represents a unique approach to power and adventure in our world. Characters who follow this path develop special abilities and perspectives that set them apart from others.`,
    benefits: [
      {
        title: 'Attribute Bonuses',
        description: 'Bonuses to relevant attribute checks and saving throws'
      },
      {
        title: 'Special Resistances',
        description: 'Resistance to certain types of damage or effects'
      },
      {
        title: 'Enhanced Senses',
        description: 'Ability to perceive things that others cannot'
      },
      {
        title: 'Unique Abilities',
        description: 'Access to special abilities that grow stronger as the character advances'
      }
    ],
    roleplayingTips: {
      description: `Characters on the ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} path have a unique perspective on the world. Their experiences and abilities shape how they interact with others and approach challenges.`,
      tips: [
        'Consider what drew your character to this path',
        'Think about how your character\'s abilities influence their personality',
        'Develop personal rituals or habits related to your background',
        'Decide how your character views those with different backgrounds'
      ]
    },
    characterDevelopment: `The ${pathId.charAt(0).toUpperCase() + pathId.slice(1)} background shapes a character's development in unique ways. As they grow in power, characters often find themselves increasingly attuned to the specific forces or principles of their path. This might manifest in physical changes, special abilities, or shifts in perspective.`,
    thematicElements: [
      {
        title: 'Visual Aesthetics',
        description: 'Characters often adopt distinctive visual elements that reflect their background, from clothing styles to personal symbols.'
      },
      {
        title: 'Common Motivations',
        description: 'Characters might be driven by the desire to master their abilities, understand the source of their power, or achieve specific goals related to their background.'
      },
      {
        title: 'Typical Origins',
        description: 'Characters might come from specific regions, cultures, or circumstances that commonly produce individuals with this background.'
      }
    ]
  };

  return backgroundContent[pathId] || defaultContent;
}

export default BackgroundPage;
