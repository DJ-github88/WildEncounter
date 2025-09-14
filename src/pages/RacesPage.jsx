import React from 'react';
import { Link } from 'react-router-dom';
import races from '../data/races';
import './RacesPage.css';

const RacesPage = () => {
  return (
    <div className="races-page">
      <div className="races-header">
        <h1 className="page-title">Character Races</h1>
        <p className="page-description">
          Choose from a diverse array of fantasy races, each with unique traits, abilities, and cultural backgrounds.
          Your race provides fundamental characteristics that shape your character's capabilities and interactions
          with the world, including stat modifiers, special abilities, and cultural knowledge.
        </p>
      </div>

      <div className="race-creation-info">
        <div className="info-card">
          <h3>Racial Benefits</h3>
          <ul>
            <li><strong>Stat Modifiers:</strong> Each race provides bonuses to specific attributes</li>
            <li><strong>Racial Traits:</strong> Unique abilities that reflect your heritage</li>
            <li><strong>Languages:</strong> Native languages and cultural knowledge</li>
            <li><strong>AP Integration:</strong> Some traits interact with the Action Point system</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>Character Creation</h3>
          <ul>
            <li>Select a race that complements your desired playstyle</li>
            <li>Consider how racial traits synergize with your chosen background</li>
            <li>Think about your character's cultural background and upbringing</li>
            <li>Plan how racial abilities work with your class mechanics</li>
          </ul>
        </div>
      </div>

      <div className="races-grid">
        {races.map(race => (
          <Link
            key={race.id}
            to={`/races/${race.id}`}
            className="race-button"
          >
            <div className="race-button-content">
              <div className="race-icon">{race.icon}</div>
              <h3 className="race-name">{race.name}</h3>
              <p className="race-description">{race.description}</p>

              <div className="race-stats-preview">
                <div className="variant-count">
                  <span className="variants-info">{race.variants.length} Variants Available</span>
                </div>
                <div className="race-preview-info">
                  <span className="size-speed">Size: {race.baseInfo.size} | Speed: {race.baseInfo.speed}ft</span>
                  <span className="lifespan">Lifespan: {race.baseInfo.lifespan}</span>
                </div>
              </div>

              <div className="race-preview-footer">
                <span className="view-details">View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RacesPage;
