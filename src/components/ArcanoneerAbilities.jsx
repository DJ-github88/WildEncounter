import React from 'react';
import arcanoneerAbilities from '../data/class-abilities/arcanoneer-abilities';
import SpellIcon from './SpellIcon';
import ClassBackground from './ClassBackground';
import './ClassAbilities.css';

const ArcanoneerAbilities = () => {
  const classId = 'arcanoneer';
  const abilities = arcanoneerAbilities;

  return (
    <div className={`class-abilities arcanoneer`}>
      <ClassBackground classId={classId} />
      <h2>Arcanoneer Abilities</h2>

      {/* Resource System */}
      <div className="resource-system">
        <h3>{abilities.resourceSystem.name}</h3>
        <p>{abilities.resourceSystem.description}</p>

        <h4>Passive Benefits</h4>
        <div className="resource-details">
          <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
          <p>{abilities.resourceSystem.passiveBenefits.description}</p>
          <ul>
            {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
              <li key={index}>{effect}</li>
            ))}
          </ul>
        </div>

        <h4>Mechanics</h4>
        <ul>
          {abilities.resourceSystem.mechanics.map((mechanic, index) => (
            <li key={index}>{mechanic}</li>
          ))}
        </ul>
      </div>

      {/* Base Abilities - Just showing the first one for simplicity */}
      <div className="base-spells">
        <h3>Base Abilities</h3>
        <div className="spell">
          <h4>Load Rune</h4>
          <p>Load an elemental rune into your queue.</p>
        </div>
      </div>
    </div>
  );
};

export default ArcanoneerAbilities;
