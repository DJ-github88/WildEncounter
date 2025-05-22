import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../data/paths';
import './PathsPage.css';

const PathsPage = () => {

  return (
    <div className="paths-page">
      <div className="paths-header">
        <h1 className="page-title">Character Backgrounds</h1>
        <p className="page-description">
          In our TTRPG system, character creation begins with selecting a background path, which provides a foundation
          of thematic abilities. Each background represents a different approach to power and adventure, providing three
          unique abilities regardless of which class a character chooses. This separation of backgrounds from classes
          allows for diverse character combinations and playstyles.
        </p>
      </div>

      <div className="character-creation-flow">
        <div className="flow-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Choose a Background</h3>
            <p>Select one of the nine background paths that best fits your character concept. Each provides three thematic abilities.</p>
          </div>
        </div>
        <div className="flow-connector">→</div>
        <div className="flow-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Select a Class</h3>
            <p>Choose any class regardless of your background. The combination creates unique character possibilities.</p>
          </div>
        </div>
        <div className="flow-connector">→</div>
        <div className="flow-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Customize</h3>
            <p>Develop your character with talent trees, abilities, and equipment choices.</p>
          </div>
        </div>
      </div>

      <div className="paths-grid">
        {paths.map(path => (
          <div
            key={path.id}
            className="path-card"
            style={{
              background: `linear-gradient(135deg, var(--bg-${path.id}-secondary), var(--bg-${path.id}-primary))`
            }}
          >
            <div className="path-card-content">
              <div className="path-icon">{path.icon || '🔮'}</div>
              <h2 className="path-name">{path.name.replace(' Path', '')}</h2>
              <p className="path-tagline">{path.description}</p>

              <div className="path-actions">
                <Link to={`/paths/${path.id}`} className="view-details-button">
                  View Details
                </Link>
              </div>
            </div>

            <div className="path-tooltip">
              <div className="tooltip-header">
                <h3>{path.name}</h3>
                <p>{getPathDescription(path.id)}</p>
              </div>

              <div className="tooltip-abilities">
                <h4>Unique Abilities</h4>
                {getPathAbilitiesPreview(path.id).map((ability, index) => (
                  <div key={index} className="tooltip-ability">
                    <div className="ability-header">
                      <span className="ability-name">{ability.name}</span>
                      <span className="ability-type">{ability.type}</span>
                    </div>
                    <p className="ability-description">{ability.description}</p>
                  </div>
                ))}
              </div>

              <div className="tooltip-benefits">
                <h4>Path Benefits</h4>
                <ul>
                  {getPathBenefits(path.id).map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper functions to get path-specific information
function getPathDescription(pathId) {
  const descriptions = {
    'mystic': 'Mystics draw power from the fundamental forces of the universe, channeling raw energy through their bodies and minds. They are masters of elemental manipulation and cosmic forces, often walking a dangerous line between control and chaos.',

    'arcanist': 'Arcanists are scholarly practitioners who approach magic as a science to be studied and mastered. They combine theoretical knowledge with practical application, creating complex magical systems and devices through careful research and experimentation.',

    'trickster': 'Tricksters harness unpredictable forces, embracing chance and chaos as sources of power. They manipulate probability, fate, and fortune, often making pacts with enigmatic entities that grant them abilities beyond normal comprehension.',

    'zealot': 'Zealots draw strength from unwavering faith and spiritual conviction. Whether serving divine entities or abstract ideals, they channel spiritual energy into tangible power, often making personal sacrifices to strengthen their connection to higher powers.',

    'harrow': 'Harrows walk the boundary between life and death, drawing power from the darker aspects of existence. They manipulate life force, spirits, and the very essence of mortality, often viewed with fear and suspicion by common folk.',

    'hexer': 'Hexers commune with primal forces and natural spirits, drawing power from ancient pacts with the wilderness. They shape-shift, control elements, and channel the raw essence of nature, often living at the edges of civilization.',

    'reaver': 'Reavers embody physical might and martial prowess, pushing their bodies beyond normal limits. They channel rage, momentum, and sheer physical force into devastating combat techniques that few can withstand.',

    'mercenary': 'Mercenaries combine practical skills with specialized knowledge, relying on training and technique rather than innate power. They are adaptable professionals who excel through preparation, precision, and mastery of their chosen tools.',

    'sentinel': 'Sentinels stand as guardians between realms, drawing power from cosmic boundaries and protective oaths. They manipulate space, barriers, and perception to defend what they value, often serving as the last line of defense against otherworldly threats.'
  };

  return descriptions[pathId] || 'A mysterious path with unique abilities and perspectives.';
}

function getPathBenefits(pathId) {
  const benefits = {
    'mystic': [
      '+2 to Spirit attribute checks and saving throws',
      'Resistance to elemental damage types',
      'Ability to sense magical disturbances',
      'Access to unique elemental attunement abilities'
    ],

    'arcanist': [
      '+2 to Intelligence attribute checks and saving throws',
      'Expanded spell memory capacity',
      'Ability to identify magical items and effects',
      'Access to arcane research techniques'
    ],

    'trickster': [
      '+2 to Charisma attribute checks and saving throws',
      'Advantage on luck-based checks',
      'Ability to reroll one failed check per day',
      'Access to fortune manipulation abilities'
    ],

    'zealot': [
      '+2 to Wisdom attribute checks and saving throws',
      'Resistance to fear and charm effects',
      'Ability to sense spiritual corruption',
      'Access to divine favor abilities'
    ],

    'harrow': [
      '+2 to Constitution attribute checks and saving throws',
      'Resistance to necrotic damage',
      'Ability to sense undead and spirits',
      'Access to life manipulation abilities'
    ],

    'hexer': [
      '+2 to Wisdom attribute checks in natural environments',
      'Ability to communicate with animals',
      'Natural camouflage in wilderness settings',
      'Access to primal channeling abilities'
    ],

    'reaver': [
      '+2 to Strength attribute checks and saving throws',
      'Increased carrying capacity and physical endurance',
      'Intimidation bonus against weaker opponents',
      'Access to adrenaline surge abilities'
    ],

    'mercenary': [
      '+2 to Dexterity attribute checks and saving throws',
      'Proficiency with additional weapons and tools',
      'Ability to assess threats and valuables',
      'Access to specialized training techniques'
    ],

    'sentinel': [
      '+2 to Constitution saving throws against magical effects',
      'Enhanced darkvision and perception',
      'Ability to sense planar disturbances',
      'Access to barrier creation abilities'
    ]
  };

  return benefits[pathId] || [
    'Unique attribute bonuses',
    'Special resistances',
    'Enhanced sensory abilities',
    'Access to path-specific abilities'
  ];
}



// Helper function to get path abilities preview
function getPathAbilitiesPreview(pathId) {
  // This function returns a preview of the 3 unique abilities for each path
  const pathAbilities = {
    'mystic': [
      {
        name: 'Elemental Attunement',
        type: 'Passive',
        description: 'Attune to an elemental type once per day, gaining resistance and bonus damage.'
      },
      {
        name: 'Mana Surge',
        type: 'Active - 1/Long Rest',
        description: 'Enter a Mana Surge state for 1 minute, reducing spell costs and casting one spell for free.'
      },
      {
        name: 'Arcane Insight',
        type: 'Passive',
        description: 'Identify magical effects and gain advantage on saves against illusions.'
      }
    ],
    'trickster': [
      {
        name: 'Fortune\'s Favor',
        type: 'Active - 3/Long Rest',
        description: 'Force a reroll on any d20 roll made by you or an ally within 30 feet.'
      },
      {
        name: 'Chaos Surge',
        type: 'Active - 1/Combat',
        description: 'Roll on the Chaos Surge table for unpredictable effects on your first attack or ability.'
      },
      {
        name: 'Lucky Break',
        type: 'Passive',
        description: 'Once per long rest, remain at 1 hit point instead of being reduced to 0.'
      }
    ],
    'zealot': [
      {
        name: 'Divine Favor',
        type: 'Passive',
        description: 'Gain resistance to radiant damage and advantage on one roll per long rest.'
      },
      {
        name: 'Smite the Unfaithful',
        type: 'Active - 1/Short Rest',
        description: 'Imbue your weapon with divine energy for bonus radiant damage on your next attack.'
      },
      {
        name: 'Zealous Presence',
        type: 'Active - 1/Long Rest',
        description: 'Inspire allies within 30 feet with a divine battle cry, granting temporary hit points and advantage.'
      }
    ],
    'harrow': [
      {
        name: 'Touch of Death',
        type: 'Passive',
        description: 'Gain temporary hit points when you reduce a creature to 0 hit points.'
      },
      {
        name: 'Spectral Sight',
        type: 'Active - At Will',
        description: 'See invisible creatures and into the Ethereal Plane for 1 minute.'
      },
      {
        name: 'Death\'s Whisper',
        type: 'Active - 1/Long Rest',
        description: 'Cast Speak with Dead once per long rest, and the target cannot lie to you.'
      }
    ],
    'hexer': [
      {
        name: 'Primal Connection',
        type: 'Passive',
        description: 'Communicate with beasts and plants, and gain advantage on Survival checks.'
      },
      {
        name: 'Wild Shape',
        type: 'Active - 1/Long Rest',
        description: 'Transform part of your body to gain bestial benefits for 10 minutes.'
      },
      {
        name: 'Nature\'s Wrath',
        type: 'Active - 1/Short Rest',
        description: 'Cause plants to sprout in a 20-foot radius, creating difficult terrain and potentially restraining enemies.'
      }
    ],
    'reaver': [
      {
        name: 'Adrenaline Rush',
        type: 'Active - 1/Short Rest',
        description: 'Enter an adrenaline-fueled state for 1 minute, gaining temporary hit points and increased speed.'
      },
      {
        name: 'Unstoppable Force',
        type: 'Passive',
        description: 'Count as one size larger for carrying capacity and resist being moved against your will.'
      },
      {
        name: 'Devastating Strike',
        type: 'Active - 1/Short Rest',
        description: 'Add your Strength modifier to damage again and potentially knock the target prone.'
      }
    ],
    'mercenary': [
      {
        name: 'Combat Expertise',
        type: 'Passive',
        description: 'Gain proficiency with three weapons of your choice or +1 to attack rolls with already proficient weapons.'
      },
      {
        name: 'Tactical Assessment',
        type: 'Active - At Will',
        description: 'Assess a creature to learn its AC, hit point percentage, and one damage vulnerability, resistance, or immunity.'
      },
      {
        name: 'Dirty Fighting',
        type: 'Active - 1/Short Rest',
        description: 'Force a target to make a Constitution save or be blinded or immobilized until the end of your next turn.'
      }
    ],
    'sentinel': [
      {
        name: 'Protective Aura',
        type: 'Passive',
        description: 'Grant allies within 10 feet a +1 bonus to AC and potentially increase it further as a reaction.'
      },
      {
        name: 'Planar Sense',
        type: 'Passive',
        description: 'Sense portals or weak points between planes and resist planar displacement effects.'
      },
      {
        name: 'Ward of Protection',
        type: 'Active - 1/Long Rest',
        description: 'Create a 15-foot-radius ward that grants allies resistance to one damage type and damages enemies.'
      }
    ],
    'arcanist': [
      {
        name: 'Arcane Insight',
        type: 'Passive',
        description: 'Cast Detect Magic at will and gain advantage on checks to identify spells and magical effects.'
      },
      {
        name: 'Spell Adaptation',
        type: 'Active - 1/Short Rest',
        description: 'Modify a spell by changing its damage type, range, targets, or duration.'
      },
      {
        name: 'Arcane Shield',
        type: 'Active - 1/Short Rest',
        description: 'Create a shield of arcane energy that can cause attacks to miss or reduce damage.'
      }
    ]
  };

  return pathAbilities[pathId] || [
    {
      name: 'Path Specialty',
      type: 'Passive',
      description: 'Gain advantage on ability checks related to your background\'s primary focus.'
    },
    {
      name: 'Special Technique',
      type: 'Active - 1/Long Rest',
      description: 'Perform a special ability unique to your background.'
    },
    {
      name: 'Resilience',
      type: 'Passive',
      description: 'Gain advantage on saving throws against effects related to your background\'s primary focus.'
    }
  ];
}

export default PathsPage;
