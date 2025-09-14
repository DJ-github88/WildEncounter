import React, { useState, useEffect, useRef } from 'react';
import BaseResourceBar from '../BaseResourceBar';
import SpellTooltip from '../../SpellTooltip';
import './LinearGauge.css';

/**
 * LinearGauge - Resource bar for gauge-based systems like Chronarch's Continuum
 * Displays a linear progress bar with threshold markers and effects
 */
const LinearGauge = ({ config, state, onChange, interactive, size }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartValue, setDragStartValue] = useState(0);
  const [hoveredSpell, setHoveredSpell] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const gaugeRef = useRef(null);

  const currentValue = state.currentValue || 0;
  const maxValue = state.maxValue || config.maxValue || 100;
  const thresholds = config.thresholds || [];
  
  const percentage = Math.min(100, Math.max(0, (currentValue / maxValue) * 100));

  // Handle mouse/touch interactions
  const handleInteractionStart = (event) => {
    if (!interactive) return;
    
    setIsDragging(true);
    setDragStartValue(currentValue);
    
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    updateValueFromPosition(clientX);
  };

  const handleInteractionMove = (event) => {
    if (!isDragging || !interactive) return;
    
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    updateValueFromPosition(clientX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  const updateValueFromPosition = (clientX) => {
    if (!gaugeRef.current) return;
    
    const rect = gaugeRef.current.getBoundingClientRect();
    const percentage = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    const newValue = Math.round((percentage / 100) * maxValue);
    
    if (newValue !== currentValue) {
      onChange({
        currentValue: newValue,
        percentage: percentage,
        activeThresholds: getActiveThresholds(newValue)
      });
    }
  };

  // Handle keyboard navigation
  const handleBaseChange = (changeData) => {
    if (!interactive) return;
    
    const step = Math.max(1, Math.floor(maxValue / 20)); // 5% steps
    
    switch (changeData.type) {
      case 'increment':
        onChange({
          currentValue: Math.min(maxValue, currentValue + step),
          activeThresholds: getActiveThresholds(Math.min(maxValue, currentValue + step))
        });
        break;
      case 'decrement':
        onChange({
          currentValue: Math.max(0, currentValue - step),
          activeThresholds: getActiveThresholds(Math.max(0, currentValue - step))
        });
        break;
      case 'reset':
        onChange({
          currentValue: 0,
          activeThresholds: []
        });
        break;
      case 'maximize':
        onChange({
          currentValue: maxValue,
          activeThresholds: getActiveThresholds(maxValue)
        });
        break;
      case 'click':
        const clickValue = Math.round(changeData.position.x * maxValue);
        onChange({
          currentValue: clickValue,
          activeThresholds: getActiveThresholds(clickValue)
        });
        break;
    }
  };

  // Get active thresholds with enhanced data
  const getActiveThresholds = (value) => {
    return thresholds.filter(threshold => value >= threshold.value);
  };

  // Get threshold abilities for Chronarch
  const getThresholdAbilities = (value) => {
    const abilities = {
      0: {
        effects: ['Basic time magic available'],
        spells: [
          {
            name: 'Chrono Bolt',
            cost: { actionPoints: 1, mana: 8, continuum: 'Gain +2' },
            description: 'A bolt of temporal energy that disrupts the target\'s timeline.',
            mechanics: 'Deals 1d8 force damage and slows target for 1 round.',
            scaling: 'Damage = 1d8 + INT + Spell Power'
          },
          {
            name: 'Time Skip',
            cost: { actionPoints: 1, mana: 6, continuum: 'Gain +1' },
            description: 'Briefly step outside of time to avoid an attack.',
            mechanics: 'Reaction: Gain +4 AC against one attack.',
            scaling: 'N/A'
          }
        ]
      },
      10: {
        effects: ['Momentum: +1 AP next turn', 'Accelerated movement'],
        spells: ['Haste Self', 'Quick Cast', 'Temporal Dodge']
      },
      20: {
        effects: ['Echo: Spells can strike twice', 'Time dilation effects'],
        spells: ['Echo Strike', 'Temporal Duplicate', 'Chrono Burst']
      },
      30: {
        effects: ['Stasis: Time freeze abilities', 'Massive area effects', 'Chronal mastery'],
        spells: ['Time Stop', 'Temporal Vortex', 'Reality Anchor']
      }
    };

    let currentAbilities = abilities[0];
    for (const threshold of [10, 20, 30]) {
      if (value >= threshold) {
        currentAbilities = abilities[threshold];
      }
    }

    return currentAbilities;
  };

  // Handle spell hover for tooltips
  const handleSpellHover = (spell, event) => {
    if (spell && typeof spell === 'object' && spell.name) {
      setTooltipPosition({
        x: event.clientX + 8,
        y: event.clientY + 8
      });
      setHoveredSpell(spell);
    } else {
      setHoveredSpell(null);
    }
  };

  const handleSpellMouseMove = (event) => {
    if (hoveredSpell) {
      setTooltipPosition({
        x: event.clientX + 8,
        y: event.clientY + 8
      });
    }
  };

  // Get current threshold color
  const getCurrentThresholdColor = () => {
    const activeThresholds = getActiveThresholds(currentValue);
    if (activeThresholds.length === 0) return config.color || '#1976d2';
    
    const currentThreshold = activeThresholds[activeThresholds.length - 1];
    return currentThreshold.color || config.color || '#1976d2';
  };

  // Add event listeners for drag
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => handleInteractionMove(e);
      const handleMouseUp = () => handleInteractionEnd();
      const handleTouchMove = (e) => handleInteractionMove(e);
      const handleTouchEnd = () => handleInteractionEnd();
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  const currentColor = getCurrentThresholdColor();
  const activeThresholds = getActiveThresholds(currentValue);

  return (
    <BaseResourceBar
      className="linear-gauge-container"
      config={config}
      state={state}
      onChange={handleBaseChange}
      interactive={interactive}
      size={size}
    >
      <div className="gauge-header">
        <div className="gauge-name">{config.name}</div>
        <div className="gauge-value">
          {currentValue} / {maxValue}
        </div>
      </div>
      
      <div 
        ref={gaugeRef}
        className={`linear-gauge ${isDragging ? 'dragging' : ''} ${interactive ? 'interactive' : ''}`}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
        style={{
          '--gauge-color': currentColor,
          '--gauge-glow': `${currentColor}40`
        }}
      >
        <div className="gauge-track">
          <div 
            className="gauge-fill"
            style={{ 
              width: `${percentage}%`,
              background: `linear-gradient(90deg, ${currentColor}80 0%, ${currentColor} 100%)`
            }}
          >
            <div className="gauge-shine"></div>
          </div>
          
          {/* Threshold markers */}
          {thresholds.map((threshold, index) => (
            <div
              key={index}
              className={`threshold-marker ${currentValue >= threshold.value ? 'active' : ''}`}
              style={{
                left: `${(threshold.value / maxValue) * 100}%`,
                '--threshold-color': threshold.color
              }}
              title={`${threshold.name}: ${threshold.value}`}
            >
              <div className="marker-line"></div>
              <div className="marker-label">{threshold.name}</div>
            </div>
          ))}
          
          {/* Current value indicator */}
          <div 
            className="value-indicator"
            style={{ left: `${percentage}%` }}
          >
            <div className="indicator-dot"></div>
          </div>
        </div>
      </div>
      
      {/* Active threshold effects */}
      {activeThresholds.length > 0 && (
        <div className="active-thresholds">
          <div className="threshold-label">Active Effects:</div>
          <div className="threshold-list">
            {activeThresholds.map((threshold, index) => (
              <span
                key={index}
                className="active-threshold"
                style={{ color: threshold.color }}
              >
                {threshold.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Current abilities and effects */}
      <div className="continuum-abilities">
        <div className="abilities-header">
          <h4>Current Continuum Effects</h4>
          <div className="continuum-value">{currentValue} Continuum</div>
        </div>

        <div className="abilities-content">
          <div className="current-effects">
            <strong>Active Effects:</strong>
            <div className="effects-list">
              {getThresholdAbilities(currentValue).effects.map((effect, index) => (
                <span key={index} className="effect-tag">
                  {effect}
                </span>
              ))}
            </div>
          </div>

          <div className="available-abilities">
            <strong>Available Abilities:</strong>
            <div className="abilities-list">
              {getThresholdAbilities(currentValue).spells.map((spell, index) => (
                <span
                  key={index}
                  className={`ability-tag ${typeof spell === 'object' && spell.name ? 'interactive' : ''}`}
                  onMouseEnter={(e) => handleSpellHover(spell, e)}
                  onMouseMove={handleSpellMouseMove}
                  onMouseLeave={() => handleSpellHover(null)}
                  title={typeof spell === 'object' ? spell.description : spell}
                >
                  {typeof spell === 'object' ? spell.name : spell}
                </span>
              ))}
            </div>
          </div>

          {currentValue >= 25 && (
            <div className="warning-zone">
              <strong>⚠️ Warning:</strong> Approaching maximum Continuum - risk of chronal backlash!
            </div>
          )}

          {currentValue >= 30 && (
            <div className="critical-zone">
              <strong>🌀 CRITICAL:</strong> Maximum Continuum reached - temporal instability imminent!
            </div>
          )}
        </div>
      </div>

      {/* Spell Tooltip */}
      {hoveredSpell && (
        <SpellTooltip
          spell={hoveredSpell}
          position={tooltipPosition}
          visible={true}
        />
      )}
    </BaseResourceBar>
  );
};

export default LinearGauge;
