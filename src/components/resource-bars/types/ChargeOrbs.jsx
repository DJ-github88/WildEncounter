import React, { useState } from 'react';
import BaseResourceBar from '../BaseResourceBar';
import './ChargeOrbs.css';

/**
 * ChargeOrbs - Resource bar for charge-based systems like Exorcist's Spirit Charges
 * Displays charges as floating orbs that can be gained/spent
 */
const ChargeOrbs = ({ config, state, onChange, interactive, size }) => {
  const [hoveredCharge, setHoveredCharge] = useState(null);

  const currentCharges = state.currentCharges || 0;
  const maxCharges = state.maxCharges || config.maxCharges || 10;
  const chargeColor = config.chargeColor || '#FFD700';

  // Get passive benefits based on current charges
  const getPassiveBenefits = (charges) => {
    const benefits = [];

    if (charges >= 1) {
      benefits.push(`+${Math.min(charges, 5)} Radiant damage`);
      benefits.push(`+${Math.min(charges, 5)} vs. possession`);
    }

    if (charges >= 2) {
      benefits.push(`${Math.min(charges - 1, 4) * 5}% Necrotic resistance`);
    }

    if (charges >= 5) {
      benefits.push('Immunity to supernatural fear');
    }

    return benefits.length > 0 ? benefits : ['No passive benefits'];
  };

  // Get charge usage options
  const getChargeUsage = () => {
    return [
      'Enhance Sacred Strike (+1d6 damage)',
      'Empower Ward of Faith (extended duration)',
      'Boost Banishment (higher save DC)',
      'Strengthen Turn Undead (larger area)',
      'Activate Divine Protection (damage shield)'
    ];
  };

  // Handle charge click
  const handleChargeClick = (chargeIndex) => {
    if (!interactive) return;
    
    const newCharges = chargeIndex + 1;
    onChange({
      currentCharges: newCharges,
      chargePercentage: (newCharges / maxCharges) * 100
    });
  };

  // Handle base interactions
  const handleBaseChange = (changeData) => {
    if (!interactive) return;
    
    switch (changeData.type) {
      case 'increment':
        if (currentCharges < maxCharges) {
          onChange({
            currentCharges: currentCharges + 1,
            chargePercentage: ((currentCharges + 1) / maxCharges) * 100
          });
        }
        break;
      case 'decrement':
        if (currentCharges > 0) {
          onChange({
            currentCharges: currentCharges - 1,
            chargePercentage: ((currentCharges - 1) / maxCharges) * 100
          });
        }
        break;
      case 'reset':
        onChange({
          currentCharges: 0,
          chargePercentage: 0
        });
        break;
      case 'maximize':
        onChange({
          currentCharges: maxCharges,
          chargePercentage: 100
        });
        break;
    }
  };

  // Render individual charge orb
  const renderChargeOrb = (chargeIndex) => {
    const isActive = chargeIndex < currentCharges;
    const isHovered = chargeIndex === hoveredCharge;
    
    const orbClasses = [
      'charge-orb',
      isActive ? 'active' : 'inactive',
      isHovered ? 'hovered' : '',
      interactive ? 'interactive' : ''
    ].filter(Boolean).join(' ');

    return (
      <div
        key={chargeIndex}
        className={orbClasses}
        style={{
          '--charge-color': chargeColor,
          '--charge-glow': `${chargeColor}60`,
          '--animation-delay': `${chargeIndex * 0.1}s`
        }}
        onClick={() => handleChargeClick(chargeIndex)}
        onMouseEnter={() => setHoveredCharge(chargeIndex)}
        onMouseLeave={() => setHoveredCharge(null)}
        title={`Charge ${chargeIndex + 1}${isActive ? ' (Active)' : ' (Inactive)'}`}
      >
        <div className="charge-inner">
          <div className="charge-core"></div>
          <div className="charge-glow"></div>
          {isActive && <div className="charge-sparkle"></div>}
        </div>
      </div>
    );
  };

  return (
    <BaseResourceBar
      className="charge-orbs-container"
      config={config}
      state={state}
      onChange={handleBaseChange}
      interactive={interactive}
      size={size}
    >
      <div className="charges-header">
        <div className="charges-title">{config.name}</div>
        <div className="charges-count">
          {currentCharges} / {maxCharges}
        </div>
      </div>
      
      <div className="charges-grid">
        {Array.from({ length: maxCharges }, (_, index) => renderChargeOrb(index))}
      </div>
      
      <div className="charges-actions">
        {interactive && (
          <>
            <button
              className="charge-button gain"
              onClick={() => handleBaseChange({ type: 'increment' })}
              disabled={currentCharges >= maxCharges}
              title="Gain a charge"
            >
              + Gain
            </button>
            <button
              className="charge-button spend"
              onClick={() => handleBaseChange({ type: 'decrement' })}
              disabled={currentCharges <= 0}
              title="Spend a charge"
            >
              - Spend
            </button>
          </>
        )}
      </div>

      {/* Spirit Charge Benefits */}
      <div className="charge-benefits">
        <div className="benefits-header">
          <h4>Spirit Charge Benefits</h4>
        </div>

        <div className="benefits-content">
          <div className="passive-benefits">
            <strong>Passive Effects:</strong>
            <div className="passive-list">
              {getPassiveBenefits(currentCharges).map((benefit, index) => (
                <span key={index} className="benefit-tag">
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div className="charge-usage">
            <strong>Charge Usage Options:</strong>
            <div className="usage-list">
              {getChargeUsage().map((usage, index) => (
                <span key={index} className="usage-tag">
                  {usage}
                </span>
              ))}
            </div>
          </div>

          {currentCharges >= 5 && (
            <div className="empowered-state">
              <strong>✨ Empowered:</strong> Maximum spiritual power - immunity to supernatural fear!
            </div>
          )}
        </div>
      </div>
    </BaseResourceBar>
  );
};

export default ChargeOrbs;
