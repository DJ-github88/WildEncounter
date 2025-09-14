import React, { useState, useEffect } from 'react';
import BaseResourceBar from '../BaseResourceBar';
import SpellTooltip from '../../SpellTooltip';
import SpellIcon from '../../SpellIcon';
import pyrofiendAbilities from '../../../data/class-abilities/pyrofiend-abilities';
import './StageOrbs.css';

/**
 * StageOrbs - Resource bar for stage-based systems like Pyrofiend's Demonic Ascension
 * Displays progression through stages as glowing orbs
 */
const StageOrbs = ({ config, state, onChange, interactive, size }) => {
  const [hoveredStage, setHoveredStage] = useState(null);
  const [animatingStage, setAnimatingStage] = useState(null);
  const [hoveredSpell, setHoveredSpell] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const currentStage = state.currentStage || 0;
  const maxStage = config.maxStage || 9;
  const stages = config.stages || [];

  // Handle stage changes with animation
  useEffect(() => {
    if (animatingStage !== null) {
      const timeout = setTimeout(() => {
        setAnimatingStage(null);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [animatingStage]);

  // Handle orb click
  const handleOrbClick = (stageIndex) => {
    if (!interactive) return;
    
    if (stageIndex !== currentStage) {
      setAnimatingStage(stageIndex);
      onChange({
        currentStage: stageIndex,
        stageName: stages[stageIndex]?.name || `Stage ${stageIndex}`,
        stageColor: stages[stageIndex]?.color || '#8b4513'
      });
    }
  };

  // Handle keyboard navigation
  const handleBaseChange = (changeData) => {
    if (!interactive) return;
    
    switch (changeData.type) {
      case 'increment':
        if (currentStage < maxStage) {
          handleOrbClick(currentStage + 1);
        }
        break;
      case 'decrement':
        if (currentStage > 0) {
          handleOrbClick(currentStage - 1);
        }
        break;
      case 'reset':
        handleOrbClick(0);
        break;
      case 'maximize':
        handleOrbClick(maxStage);
        break;
    }
  };

  // Function to find full spell object by name
  const findSpellByName = (spellName) => {
    // Search through all spell arrays in pyrofiendAbilities
    const allSpells = [
      ...pyrofiendAbilities.baseSpells,
      ...pyrofiendAbilities.intermediateTierSpells,
      ...pyrofiendAbilities.highTierSpells,
      ...pyrofiendAbilities.utilitySpells,
      ...Object.values(pyrofiendAbilities.uniqueSpellsByStage).flat()
    ];

    const foundSpell = allSpells.find(spell => spell.name === spellName);

    // If not found, create a basic spell object
    if (!foundSpell) {
      return {
        name: spellName,
        description: `A powerful ${spellName.toLowerCase()} spell available at this stage.`,
        mechanics: 'Spell mechanics to be determined.',
        cost: { actionPoints: 1, mana: 10 },
        stageRequirement: 'Stage requirement varies'
      };
    }

    return foundSpell;
  };

  // Get stage info with enhanced details
  const getStageInfo = (stageIndex) => {
    const stageData = stages[stageIndex];

    // Enhanced stage data for Pyrofiend
    const pyrofiendStageData = {
      0: {
        name: 'Mortal Form',
        passive: 'Humanity Intact',
        bonus: 'No fire damage bonus',
        availableSpells: [
          {
            name: 'Ember Spark',
            cost: { actionPoints: 1, mana: 5, ascension: 'Ascend +1 stage' },
            description: 'A minor spark of demonic fire that the Pyrofiend hurls at a target.',
            mechanics: 'Deals 1d6 fire damage to a single enemy. This is a simple ranged attack with no frills.',
            scaling: 'Damage = 1d6 + INT + Fire',
            stageRequirement: 'Stage 0 (Mortal Form)'
          },
          {
            name: 'Living Flame',
            cost: { actionPoints: 1, mana: 6, ascension: 'Ascend +1 stage' },
            description: 'A small flame that dances around the Pyrofiend, providing light and minor protection.',
            mechanics: 'Creates a hovering flame that provides bright light in 10ft radius. Deals 1d4 fire damage to attackers in melee.',
            scaling: 'Damage = 1d4 + INT/2',
            stageRequirement: 'Stage 0 (Mortal Form)'
          }
        ],
        color: '#2196F3'
      },
      1: {
        name: 'Ember Awakening',
        passive: 'Flickering Flames',
        bonus: '+1 fire damage, 10% mana save chance',
        availableSpells: [
          {
            name: 'Flame Sight',
            cost: { actionPoints: 1, mana: 5, ascension: 'No change' },
            description: 'See through flames and heat distortions with perfect clarity.',
            mechanics: 'Gain darkvision 60ft and see through fire/smoke effects for 10 minutes. Can detect heat signatures through walls.',
            scaling: 'N/A',
            stageRequirement: 'Stage 1+ (Ember Awakening)'
          },
          {
            name: 'Controlled Heat',
            cost: { actionPoints: 1, mana: 3, ascension: 'No change' },
            description: 'Manipulate ambient temperature in a small area.',
            mechanics: 'Raise or lower temperature in 5ft radius by up to 20 degrees for 1 hour.',
            scaling: 'N/A',
            stageRequirement: 'Stage 1+ (Ember Awakening)'
          }
        ],
        color: '#FF5722'
      },
      2: {
        name: 'Smoldering Soul',
        passive: 'Inner Heat',
        bonus: '+2 fire damage, fear immunity',
        availableSpells: ['Scorching Grasp', 'Fire Shield', 'Soul Smolder'].map(findSpellByName),
        color: '#FF6F00'
      },
      3: {
        name: 'Burning Veins',
        passive: 'Molten Blood',
        bonus: '+3 fire damage, 25% spell healing',
        availableSpells: ['Searing Bolt', 'Blaze Strike', 'Molten Blood Strike'].map(findSpellByName),
        color: '#E65100'
      },
      4: {
        name: 'Infernal Awakening',
        passive: 'Demonic Resilience',
        bonus: '+4 fire damage, 50% spell healing',
        availableSpells: ['Inferno Blast', 'Fire Shield', 'Flame Whip'].map(findSpellByName),
        color: '#BF360C'
      },
      5: {
        name: 'Hellfire Embodiment',
        passive: 'Infernal Constitution',
        bonus: '+5 fire damage, poison immunity',
        availableSpells: ['Precision Burn', 'Infernal Blast', 'Hellfire Eruption'].map(findSpellByName),
        color: '#D32F2F'
      },
      6: {
        name: 'Fiend Ascendant',
        passive: 'Burning Gaze',
        bonus: '+6 fire damage, magical darkvision',
        availableSpells: ['Wildfire Storm', 'Greater Immolate', 'Fiendish Sight'].map(findSpellByName),
        color: '#C62828'
      },
      7: {
        name: 'Infernal Lord',
        passive: 'Scorching Presence',
        bonus: '+7 fire damage, 5ft immolation aura',
        availableSpells: ['Perfect Immolation', 'Cursed Flame', 'Infernal Command'].map(findSpellByName),
        color: '#B71C1C'
      },
      8: {
        name: 'Demon Prince',
        passive: 'Infernal Dominion',
        bonus: '+8 fire damage, 10ft aura, elemental command',
        availableSpells: ['Hellstorm', 'Infernal Avatar', 'Demon Summoning'].map(findSpellByName),
        color: '#8E0000'
      },
      9: {
        name: 'Archfiend Avatar',
        passive: 'Apocalyptic Presence',
        bonus: '+10 fire damage, 15ft aura, condition immunity',
        availableSpells: ['Infernal Apocalypse', 'Archfiend Transformation', 'Planar Incineration'].map(findSpellByName),
        color: '#4A0000'
      }
    };

    const enhancedData = pyrofiendStageData[stageIndex];

    return {
      name: enhancedData?.name || stageData?.name || `Stage ${stageIndex}`,
      color: enhancedData?.color || stageData?.color || '#8b4513',
      description: stageData?.description || `Stage ${stageIndex} of progression`,
      passive: enhancedData?.passive || 'Unknown passive',
      bonus: enhancedData?.bonus || 'No bonus effects',
      availableSpells: enhancedData?.availableSpells || [{ name: 'Basic spells', description: 'No specific spells available' }]
    };
  };

  // Handle spell hover for tooltips
  const handleSpellHover = (spell, event) => {
    if (spell && event) {
      // Calculate position with viewport bounds checking
      const tooltipWidth = 350; // max-width from CSS
      const tooltipHeight = 400; // estimated height
      const padding = 16;

      let x = event.clientX + 8;
      let y = event.clientY + 8;

      // Adjust if tooltip would go off right edge
      if (x + tooltipWidth > window.innerWidth - padding) {
        x = event.clientX - tooltipWidth - 8;
      }

      // Adjust if tooltip would go off bottom edge
      if (y + tooltipHeight > window.innerHeight - padding) {
        y = event.clientY - tooltipHeight - 8;
      }

      // Ensure tooltip doesn't go off left or top edges
      x = Math.max(padding, x);
      y = Math.max(padding, y);

      setTooltipPosition({ x, y });
      setHoveredSpell(spell);
    } else {
      setHoveredSpell(null);
    }
  };

  const handleSpellMouseMove = (event) => {
    if (hoveredSpell) {
      // Use same positioning logic as hover
      const tooltipWidth = 350;
      const tooltipHeight = 400;
      const padding = 16;

      let x = event.clientX + 8;
      let y = event.clientY + 8;

      if (x + tooltipWidth > window.innerWidth - padding) {
        x = event.clientX - tooltipWidth - 8;
      }

      if (y + tooltipHeight > window.innerHeight - padding) {
        y = event.clientY - tooltipHeight - 8;
      }

      x = Math.max(padding, x);
      y = Math.max(padding, y);

      setTooltipPosition({ x, y });
    }
  };

  // Render individual orb
  const renderOrb = (stageIndex) => {
    const isActive = stageIndex <= currentStage;
    const isCurrent = stageIndex === currentStage;
    const isHovered = stageIndex === hoveredStage;
    const isAnimating = stageIndex === animatingStage;
    const stageInfo = getStageInfo(stageIndex);

    const orbClasses = [
      'stage-orb',
      isActive ? 'active' : 'inactive',
      isCurrent ? 'current' : '',
      isHovered ? 'hovered' : '',
      isAnimating ? 'animating' : '',
      interactive ? 'interactive' : ''
    ].filter(Boolean).join(' ');

    return (
      <div
        key={stageIndex}
        className={orbClasses}
        style={{
          '--stage-color': stageInfo.color,
          '--stage-glow': `${stageInfo.color}40`
        }}
        onClick={() => handleOrbClick(stageIndex)}
        onMouseEnter={() => setHoveredStage(stageIndex)}
        onMouseLeave={() => setHoveredStage(null)}
        title={`${stageInfo.name}: ${stageInfo.description}`}
      >
        <div className="orb-inner">
          <div className="flame-container">
            <div className="flame-core"></div>
            <div className="flame-flicker"></div>
            <div className="flame-tip"></div>
          </div>
          <div className="orb-glow"></div>
          {isCurrent && <div className="orb-pulse"></div>}
        </div>
        <div className="stage-number">{stageIndex}</div>
      </div>
    );
  };

  return (
    <BaseResourceBar
      className="stage-orbs-container"
      config={config}
      state={state}
      onChange={handleBaseChange}
      interactive={interactive}
      size={size}
    >
      <div className="stage-orbs-grid">
        {Array.from({ length: maxStage + 1 }, (_, index) => renderOrb(index))}
      </div>
      
      <div className="stage-info">
        <div className="current-stage-name">
          {getStageInfo(currentStage).name}
        </div>
        <div className="stage-progress">
          {currentStage} / {maxStage}
        </div>
      </div>

      {/* Current Stage Details */}
      <div className="current-stage-details">
        <div className="stage-details-header">
          <h4>Current State Effects</h4>
        </div>

        <div className="stage-details-content">
          <div className="passive-effect">
            <strong>Passive:</strong> {getStageInfo(currentStage).passive}
          </div>

          <div className="bonus-effect">
            <strong>Bonus:</strong> {getStageInfo(currentStage).bonus}
          </div>

          <div className="available-spells">
            <strong>Available Spells:</strong>
            <div className="spell-icons-grid">
              {getStageInfo(currentStage).availableSpells.map((spell, index) => (
                <div
                  key={index}
                  className={`spell-icon-slot ${hoveredSpell?.name === spell.name ? 'hovered' : ''}`}
                  onMouseEnter={(e) => handleSpellHover(spell, e)}
                  onMouseMove={handleSpellMouseMove}
                  onMouseLeave={() => handleSpellHover(null)}
                  title={`${spell.name} - ${spell.description}`}
                >
                  <SpellIcon
                    classId="pyrofiend"
                    spellName={spell.name}
                  />
                  <div className="spell-name-label">
                    {spell.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentStage >= 7 && (
            <div className="warning-effect">
              <strong>⚠️ Warning:</strong> High-stage effects include dangerous auras and self-damage!
            </div>
          )}

          {currentStage === 9 && (
            <div className="critical-warning">
              <strong>🔥 CRITICAL:</strong> Archfiend form deals TRUE DAMAGE - burnout risk after 3 turns!
            </div>
          )}
        </div>
      </div>
      
      {hoveredStage !== null && hoveredStage !== currentStage && (
        <div className="stage-preview">
          <div className="preview-name">
            {getStageInfo(hoveredStage).name}
          </div>
          <div className="preview-description">
            {getStageInfo(hoveredStage).description}
          </div>
        </div>
      )}

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

export default StageOrbs;
