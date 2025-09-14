import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import races from '../data/races';
import './RaceDetailPage.css';

const RaceDetailPage = () => {
  const { raceId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedVariant, setSelectedVariant] = useState(0);

  const race = races.find(r => r.id === raceId);

  if (!race) {
    return (
      <div className="race-detail-page">
        <div className="error-message">
          <h2>Race Not Found</h2>
          <p>Sorry, we couldn't find the race "{raceId}".</p>
          <Link to="/races" className="back-link">← Back to Races</Link>
        </div>
      </div>
    );
  }

  const currentVariant = race.variants[selectedVariant];

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'variants', label: 'Variants' },
    { id: 'traits', label: 'Racial Traits' },
    { id: 'stats', label: 'Statistics' },
    { id: 'culture', label: 'Culture & Lore' }
  ];

  const renderStatModifiers = (variant = currentVariant) => {
    return Object.entries(variant.statModifiers).map(([stat, modifier]) => (
      <div key={stat} className="stat-modifier">
        <span className="stat-name">{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
        <span className={`stat-value ${modifier > 0 ? 'positive' : modifier < 0 ? 'negative' : 'neutral'}`}>
          {modifier > 0 ? '+' : ''}{modifier}
        </span>
      </div>
    ));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="section-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>Basic Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Size:</span>
                    <span className="info-value">{race.baseInfo.size}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Speed:</span>
                    <span className="info-value">{race.baseInfo.speed} feet</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Lifespan:</span>
                    <span className="info-value">{race.baseInfo.lifespan}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Languages:</span>
                    <span className="info-value">{race.baseInfo.languages.join(', ')}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Variants:</span>
                    <span className="info-value">{race.variants.length} available</span>
                  </div>
                </div>
              </div>

              <div className="overview-card">
                <h3>Current Variant: {currentVariant.name}</h3>
                <p className="variant-description">{currentVariant.description}</p>
                <div className="stat-modifiers-grid">
                  {renderStatModifiers()}
                </div>
              </div>
            </div>

            <div className="overview-card">
              <h3>Cultural Background</h3>
              <p className="race-lore">{race.baseInfo.lore}</p>
            </div>
          </div>
        );

      case 'variants':
        return (
          <div className="section-content">
            <div className="variant-selector">
              <h3>Choose a Variant</h3>
              <div className="variant-buttons">
                {race.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    className={`variant-button ${selectedVariant === index ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(index)}
                  >
                    <h4>{variant.name}</h4>
                    <p>{variant.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="selected-variant-details">
              <h3>{currentVariant.name}</h3>
              <p className="variant-description">{currentVariant.description}</p>

              <div className="variant-stats">
                <h4>Stat Modifiers</h4>
                <div className="stat-modifiers-grid">
                  {renderStatModifiers()}
                </div>
              </div>
            </div>
          </div>
        );

      case 'traits':
        return (
          <div className="section-content">
            <div className="variant-selector-mini">
              <label>Viewing traits for: </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(parseInt(e.target.value))}
                className="variant-dropdown"
              >
                {race.variants.map((variant, index) => (
                  <option key={variant.id} value={index}>{variant.name}</option>
                ))}
              </select>
            </div>

            <div className="traits-grid">
              {currentVariant.traits.map((trait, index) => (
                <div key={index} className="trait-card">
                  <h3 className="trait-name">{trait.name}</h3>
                  <p className="trait-description">{trait.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="section-content">
            <div className="variant-selector-mini">
              <label>Viewing stats for: </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(parseInt(e.target.value))}
                className="variant-dropdown"
              >
                {race.variants.map((variant, index) => (
                  <option key={variant.id} value={index}>{variant.name}</option>
                ))}
              </select>
            </div>

            <div className="stats-overview">
              <div className="stats-card">
                <h3>Attribute Modifiers - {currentVariant.name}</h3>
                <div className="detailed-stats">
                  {renderStatModifiers()}
                </div>
                <div className="stats-explanation">
                  <h4>How Stat Modifiers Work</h4>
                  <p>These modifiers are applied to your base attributes during character creation. Positive modifiers enhance your capabilities in those areas, while negative modifiers represent racial weaknesses that create meaningful trade-offs.</p>
                </div>
              </div>

              <div className="stats-card">
                <h3>Physical Characteristics</h3>
                <div className="physical-stats">
                  <div className="physical-stat">
                    <span className="stat-label">Size Category:</span>
                    <span className="stat-value">{race.baseInfo.size}</span>
                  </div>
                  <div className="physical-stat">
                    <span className="stat-label">Base Speed:</span>
                    <span className="stat-value">{race.baseInfo.speed} feet per round</span>
                  </div>
                  <div className="physical-stat">
                    <span className="stat-label">Typical Lifespan:</span>
                    <span className="stat-value">{race.baseInfo.lifespan}</span>
                  </div>
                </div>
              </div>

              <div className="stats-card">
                <h3>Variant Comparison</h3>
                <div className="variant-comparison">
                  {race.variants.map((variant, index) => (
                    <div key={variant.id} className={`variant-stats-summary ${index === selectedVariant ? 'active' : ''}`}>
                      <h4>{variant.name}</h4>
                      <div className="stat-summary">
                        {Object.entries(variant.statModifiers)
                          .filter(([stat, modifier]) => modifier !== 0)
                          .map(([stat, modifier]) => (
                            <span key={stat} className={`stat-mod ${modifier > 0 ? 'positive' : 'negative'}`}>
                              {modifier > 0 ? '+' : ''}{modifier} {stat.charAt(0).toUpperCase() + stat.slice(1)}
                            </span>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'culture':
        return (
          <div className="section-content">
            <div className="culture-card">
              <h3>Cultural Background</h3>
              <p className="culture-text">{race.baseInfo.lore}</p>
            </div>

            <div className="culture-card">
              <h3>Languages</h3>
              <div className="languages-list">
                {race.baseInfo.languages.map((language, index) => (
                  <span key={index} className="language-tag">{language}</span>
                ))}
              </div>
            </div>

            <div className="culture-card">
              <h3>Variant Diversity</h3>
              <p>The {race.name} have developed into distinct variants, each adapted to different circumstances and lifestyles:</p>
              <div className="variant-culture-list">
                {race.variants.map((variant, index) => (
                  <div key={variant.id} className="variant-culture-item">
                    <h4>{variant.name}</h4>
                    <p>{variant.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="culture-card">
              <h3>Integration with Game Systems</h3>
              <div className="integration-info">
                <h4>Action Point System</h4>
                <p>Many racial traits interact with the AP system, providing unique tactical options during combat and exploration. Each variant offers different AP-based abilities.</p>

                <h4>Background Synergy</h4>
                <p>Consider how your chosen variant's traits complement your background path. Different variants may synergize better with specific backgrounds.</p>

                <h4>Class Compatibility</h4>
                <p>While any variant can pursue any class, certain racial traits may enhance specific class features or playstyles. Choose your variant based on your intended build.</p>

                <h4>Meaningful Trade-offs</h4>
                <p>Each variant has both strengths and weaknesses. Consider the disadvantages as much as the benefits when making your choice.</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="race-detail-page">
      <div className="race-header">
        <Link to="/races" className="back-link">← Back to Races</Link>
        <div className="race-title-section">
          <div className="race-icon-large">{race.icon}</div>
          <div className="race-title-info">
            <h1 className="race-name">{race.name}</h1>
            <p className="race-tagline">{race.description}</p>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        {sections.map(section => (
          <button
            key={section.id}
            className={`section-nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default RaceDetailPage;
