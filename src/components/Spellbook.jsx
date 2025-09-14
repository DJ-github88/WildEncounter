import { useState, useEffect } from 'react';
import SpellIcon from './SpellIcon';
import ResourceIcon from './ResourceIcon';
import SpellEffectGenerator from './SpellEffectGenerator';
import ResourceBarManager from './resource-bars/ResourceBarManager';
import './Spellbook.css';

const Spellbook = ({ classId, classData, talentTrees, abilities }) => {
  const [activeTab, setActiveTab] = useState('mechanics');
  const [hoveredSpell, setHoveredSpell] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showEffectGenerator, setShowEffectGenerator] = useState(false);
  const [selectedSpell, setSelectedSpell] = useState(null);

  // Initialize with mechanics tab, then first talent tree
  useEffect(() => {
    if (talentTrees && talentTrees.length > 0) {
      // Keep mechanics as default, but ensure we have talent trees available
    }
  }, [talentTrees]);

  // Handle spell hover for tooltip positioning
  const handleSpellHover = (spell, event) => {
    if (spell) {
      // Position tooltip very close to mouse cursor
      setTooltipPosition({
        x: event.clientX + 8,
        y: event.clientY + 8
      });
      setHoveredSpell(spell);
    } else {
      setHoveredSpell(null);
    }
  };

  // Handle mouse move for tooltip following
  const handleSpellMouseMove = (event) => {
    if (hoveredSpell) {
      setTooltipPosition({
        x: event.clientX + 8,
        y: event.clientY + 8
      });
    }
  };

  // Get initial resource values based on class type
  const getInitialResourceValues = (classId) => {
    const resourceDefaults = {
      'chronarch': { currentValue: 0 },
      'pyrofiend': { currentStage: 0 },
      'exorcist': { currentCharges: 0 },
      'minstrel': { currentNotes: [] },
      'berserker': { currentValue: 0 },
      'huntress': { quarryMark: false, precisionStacks: 0 },
      'toxicologist': { vials: [] },
      'gambler': { luckPoints: 0, riskStacks: 0 },
      'martyr': { painCharges: 0, healthPercentage: 100 },
      'false-prophet': { currentLies: 0 },
      'chaos-weaver': { currentEntropy: 0 },
      'fate-weaver': { hand: [], deck: [] },
      'lichborne': { currentEchoes: 0 },
      'arcanoneer': { elementSlots: [], volatility: 0 },
      'inscriptor': { activeGlyphs: [] },
      'spellguard': { currentWards: 0 },
      'witch-doctor': { currentEssence: 0, invocationSlots: 0 },
      'deathcaller': { currentSouls: 0 },
      'plaguebringer': { plagueStacks: {} },
      'bladedancer': { currentEdge: 0, flourishTokens: 0 },
      'formbender': { currentInstinct: 0, activeForm: null },
      'dreadnaught': { currentGuard: 0, siegeStacks: 0 },
      'titan': { currentGravitas: 0, strainPoints: 0 },
      'covenbane': { sealTokens: 0, dispelGauge: 0 },
      'warden': { currentBulwark: 0, wardTokens: 0 },
      'primalist': { currentResonance: 0 },
      'lunarch': { currentCharge: 0, currentPhase: 'full' }
    };

    return resourceDefaults[classId] || {};
  };

  // Check if spell has procedural elements (dice, cards, coins)
  const hasProceduralElements = (spell) => {
    return spell.cost?.diceRoll ||
           spell.cost?.cardDraw ||
           spell.cost?.coinFlip ||
           spell.cost?.chaosRoll ||
           spell.outcomes ||
           spell.suitEffects ||
           spell.combos;
  };

  // Handle spell click for procedural spells
  const handleSpellClick = (spell) => {
    if (hasProceduralElements(spell)) {
      setSelectedSpell(spell);
      setShowEffectGenerator(true);
      setHoveredSpell(null); // Hide tooltip when opening generator
    }
  };





  // Get spells for the active tab (like WoW Classic spellbook)
  const getSpellsForTab = () => {
    if (activeTab === 'mechanics') {
      return [];
    }

    // Find the talent tree that matches the active tab
    const activeTree = talentTrees?.find(tree => tree.id === activeTab);
    if (!activeTree) return [];

    // Get all spells from all possible spell arrays
    const allSpells = [
      ...(abilities.baseSpells || []),
      ...(abilities.baseAbilities || []),
      ...(abilities.leadershipSpells || []),
      ...(abilities.rhythmSpells || []),
      ...(abilities.emotionSpells || []),
      ...(abilities.universalSpells || []),
      ...(abilities.intermediateTierSpells || []),
      ...(abilities.highTierSpells || []),
      ...(abilities.utilitySpells || []),
      ...(abilities.ventingAbilities || []),
      ...(abilities.thresholdAbilities || []),
      ...(abilities.advancedAbilities || [])
    ];

    let filteredSpells = [];

    // Class-specific specialization handling
    if (classId === 'pyrofiend') {
      // Pyrofiend specialization filtering
      if (activeTab === 'inferno-attunement') {
        filteredSpells = allSpells.filter(spell =>
          spell.specialization === 'inferno-attunement' ||
          spell.specialization === 'universal'
        );
      } else if (activeTab === 'wildfire-attunement') {
        filteredSpells = allSpells.filter(spell =>
          spell.specialization === 'wildfire-attunement' ||
          spell.specialization === 'universal'
        );
      } else if (activeTab === 'hellfire-attunement') {
        filteredSpells = allSpells.filter(spell =>
          spell.specialization === 'hellfire-attunement' ||
          spell.specialization === 'universal'
        );
      }
    } else if (classId === 'minstrel') {
      // Minstrel specialization filtering
      if (activeTab === 'path-of-leadership') {
        filteredSpells = [
          ...(abilities.leadershipSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'path-of-rhythm') {
        filteredSpells = [
          ...(abilities.rhythmSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'path-of-emotion') {
        filteredSpells = [
          ...(abilities.emotionSpells || []),
          ...(abilities.universalSpells || [])
        ];
      }
    } else if (classId === 'gambler') {
      // Gambler specialization filtering using dedicated spell arrays
      if (activeTab === 'coin-flipper') {
        // Coin-flipper spells + universal spells
        filteredSpells = [
          ...(abilities.coinFlipperSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'dice-mastery') {
        // Dice mastery spells + universal spells
        filteredSpells = [
          ...(abilities.diceMasterySpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'cardsharp') {
        // Cardsharp spells + universal spells
        filteredSpells = [
          ...(abilities.cardsharpSpells || []),
          ...(abilities.universalSpells || [])
        ];
      }
    } else if (classId === 'chaos-weaver') {
      // Chaos Weaver specialization filtering using dedicated spell arrays
      if (activeTab === 'order-in-chaos') {
        // Order in Chaos spells + universal spells
        filteredSpells = [
          ...(abilities.orderInChaosSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'cataclysmic-surges') {
        // Cataclysmic Surges spells + universal spells
        filteredSpells = [
          ...(abilities.cataclysmicSurgesSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'tactical-disruption') {
        // Tactical Disruption spells + universal spells
        filteredSpells = [
          ...(abilities.tacticalDisruptionSpells || []),
          ...(abilities.universalSpells || [])
        ];
      }
    } else if (classId === 'chronarch') {
      // Chronarch specialization filtering using dedicated spell arrays
      if (activeTab === 'temporal-dominance') {
        // Temporal Dominance spells + universal spells
        filteredSpells = [
          ...(abilities.temporalDominanceSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'chronal-stride') {
        // Chronal Stride spells + universal spells
        filteredSpells = [
          ...(abilities.chronalStrideSpells || []),
          ...(abilities.universalSpells || [])
        ];
      } else if (activeTab === 'time-ward') {
        // Time Ward spells + universal spells
        filteredSpells = [
          ...(abilities.timeWardSpells || []),
          ...(abilities.universalSpells || [])
        ];
      }
    } else if (classId === 'exorcist') {
      // Exorcist specialization filtering by theme
      if (activeTab === 'purifier') {
        // Healing and support spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('heal') ||
                 spellName.includes('light') ||
                 spellName.includes('purify') ||
                 spellName.includes('cleanse') ||
                 description.includes('heal') ||
                 description.includes('support') ||
                 description.includes('allies');
        });
      } else if (activeTab === 'binder') {
        // Control and binding spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('bind') ||
                 spellName.includes('seal') ||
                 spellName.includes('ward') ||
                 spellName.includes('banish') ||
                 description.includes('bind') ||
                 description.includes('control') ||
                 description.includes('seal');
        });
      } else if (activeTab === 'inquisitor') {
        // Combat and offensive spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('smite') ||
                 spellName.includes('strike') ||
                 spellName.includes('weapon') ||
                 spellName.includes('fury') ||
                 description.includes('damage') ||
                 description.includes('attack') ||
                 description.includes('combat');
        });
      }
    } else if (classId === 'false-prophet') {
      // False Prophet specialization filtering by theme
      if (activeTab === 'deceiver') {
        // Mind control and manipulation spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('charm') ||
                 spellName.includes('deceive') ||
                 spellName.includes('illusion') ||
                 spellName.includes('mind') ||
                 spellName.includes('control') ||
                 description.includes('charm') ||
                 description.includes('deceive') ||
                 description.includes('manipulate') ||
                 description.includes('illusion');
        });
      } else if (activeTab === 'heretic') {
        // Blasphemy and corruption spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('blasphemy') ||
                 spellName.includes('heresy') ||
                 spellName.includes('corrupt') ||
                 spellName.includes('curse') ||
                 spellName.includes('doom') ||
                 description.includes('blasphemy') ||
                 description.includes('corrupt') ||
                 description.includes('heretical') ||
                 description.includes('curse');
        });
      } else if (activeTab === 'usurper') {
        // Control and devotion spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('devotion') ||
                 spellName.includes('prayer') ||
                 spellName.includes('sacrifice') ||
                 spellName.includes('blessing') ||
                 spellName.includes('minion') ||
                 description.includes('devotion') ||
                 description.includes('prayer') ||
                 description.includes('allies') ||
                 description.includes('control');
        });
      }
    } else if (classId === 'witch-doctor') {
      // Witch Doctor specialization filtering by theme
      if (activeTab === 'curse-binder') {
        // Hex and curse spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('hex') ||
                 spellName.includes('curse') ||
                 spellName.includes('doom') ||
                 spellName.includes('plague') ||
                 spellName.includes('poison') ||
                 description.includes('hex') ||
                 description.includes('curse') ||
                 description.includes('debuff') ||
                 description.includes('weaken');
        });
      } else if (activeTab === 'totemic-architect') {
        // Totem and zone control spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('totem') ||
                 spellName.includes('ward') ||
                 spellName.includes('zone') ||
                 spellName.includes('area') ||
                 spellName.includes('field') ||
                 description.includes('totem') ||
                 description.includes('zone') ||
                 description.includes('area') ||
                 description.includes('battlefield');
        });
      } else if (activeTab === 'loa-chosen') {
        // Spirit invocation spells
        filteredSpells = allSpells.filter(spell => {
          const spellName = spell.name.toLowerCase();
          const description = spell.description?.toLowerCase() || '';
          return spellName.includes('loa') ||
                 spellName.includes('spirit') ||
                 spellName.includes('invocation') ||
                 spellName.includes('summon') ||
                 spellName.includes('ritual') ||
                 description.includes('loa') ||
                 description.includes('spirit') ||
                 description.includes('invocation') ||
                 description.includes('summon');
        });
      }
    } else {
      // Generic handling for other classes - filter by specialization if it exists, otherwise distribute evenly
      const spellsWithSpecialization = allSpells.filter(spell =>
        spell.specialization === activeTab || spell.specialization === 'universal'
      );

      if (spellsWithSpecialization.length > 0) {
        filteredSpells = spellsWithSpecialization;
      } else {
        // Fallback: distribute spells evenly across talent trees
        const treeIndex = talentTrees.findIndex(tree => tree.id === activeTab);
        if (treeIndex !== -1) {
          filteredSpells = allSpells.filter((spell, index) =>
            index % talentTrees.length === treeIndex
          );
        }
      }
    }

    // Add class-specific additional spells
    if (classId === 'pyrofiend') {
      // Add venting abilities to all tabs
      const ventingSpells = allSpells.filter(spell =>
        spell.cost?.ascension && spell.cost.ascension.includes('Descend')
      );
      filteredSpells = [...filteredSpells, ...ventingSpells];

      // Add stage-specific spells if they exist
      if (abilities.resourceSystem?.uniqueSpellsByStage) {
        Object.entries(abilities.resourceSystem.uniqueSpellsByStage).forEach(([stage, spells]) => {
          const enhancedSpells = spells.map(spell => ({
            ...spell,
            stageRequirement: stage.replace('stage', 'Stage ')
          }));

          // Filter stage spells by specialization
          enhancedSpells.forEach(spell => {
            const spellName = spell.name.toLowerCase();
            if ((activeTab === 'inferno-attunement' && (spellName.includes('ember') || spellName.includes('control'))) ||
                (activeTab === 'wildfire-attunement' && (spellName.includes('wild') || spellName.includes('chaos'))) ||
                (activeTab === 'hellfire-attunement' && (spellName.includes('hell') || spellName.includes('demon') || spellName.includes('soul')))) {
              filteredSpells.push(spell);
            }
          });
        });
      }

      // Sort by Ascension Stage requirement
      filteredSpells.sort((a, b) => {
        const getStageNumber = (spell) => {
          if (!spell.stageRequirement) return 0;
          const match = spell.stageRequirement.match(/Stage (\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getStageNumber(a) - getStageNumber(b);
      });
    }

    return filteredSpells;
  };

  // Render class mechanics section
  const renderClassMechanics = () => {
    if (!abilities?.resourceSystem) {
      return (
        <div className="spellbook-mechanics">
          <div className="mechanics-header">
            <h3>Class Mechanics</h3>
          </div>
          <div className="mechanics-content">
            <div className="mechanics-description">
              <p>Class mechanics and abilities for {classData?.name || 'this class'} are currently being developed.</p>
              <p>Check back later for detailed information about this class's unique resource system and abilities!</p>
            </div>
          </div>
        </div>
      );
    }

    const { resourceSystem } = abilities;

    return (
      <div className="spellbook-mechanics">
        <div className="mechanics-header">
          <h3>{resourceSystem.name}</h3>
        </div>
        
        <div className="mechanics-content">
          <div className="mechanics-description">
            <p>{resourceSystem.description}</p>
          </div>

          {/* Interactive Resource Bar */}
          <ResourceBarManager
            classId={classId}
            initialValues={getInitialResourceValues(classId)}
            interactive={true}
            size="medium"
            showTooltips={true}
          />

          {/* Render specific mechanics based on class type */}
          {resourceSystem.ascensionStages && (
            <div className="ascension-stages">
              <h4>Ascension Stages</h4>
              <div className="stages-grid">
                {resourceSystem.ascensionStages.map((stage, index) => (
                  <div key={index} className="stage-card">
                    <div className="stage-header">
                      <span className="stage-number">{stage.stage}</span>
                      <span className="stage-name">{stage.name}</span>
                    </div>
                    <div className="stage-passive">{stage.passive}</div>
                    <div className="stage-bonus">{stage.bonus}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resourceSystem.notes && (
            <div className="musical-notes">
              <h4>Musical Notes System</h4>
              <div className="notes-grid">
                {resourceSystem.notes.map((note, index) => (
                  <div key={index} className="note-card">
                    <div className="note-name">{note.name}</div>
                    <div className="note-description">{note.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resourceSystem.thresholds && (
            <div className="thresholds-system">
              <h4>Continuum Thresholds</h4>
              <div className="thresholds-grid">
                {resourceSystem.thresholds.map((threshold, index) => (
                  <div key={index} className="threshold-card">
                    <div className="threshold-header">
                      <span className="threshold-name">{threshold.name}</span>
                      <span className="threshold-value">({threshold.value} Continuum)</span>
                    </div>
                    <div className="threshold-description">{threshold.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {resourceSystem.passiveBenefits && (
            <div className="passive-benefits">
              <h4>{resourceSystem.passiveBenefits.name}</h4>
              <div className="passive-card">
                <div className="passive-description">{resourceSystem.passiveBenefits.description}</div>
                {resourceSystem.passiveBenefits.effects && (
                  <ul className="passive-effects">
                    {resourceSystem.passiveBenefits.effects.map((effect, index) => (
                      <li key={index}>{effect}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {resourceSystem.mechanics && (
            <div className="mechanics-list">
              <h4>Core Mechanics</h4>
              <ul>
                {resourceSystem.mechanics.map((mechanic, index) => (
                  <li key={index}>{mechanic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render spell grid for a talent tree
  const renderSpellGrid = () => {
    // Use getSpellsForTab() instead of getSpellsForTalentTree() for better spell filtering
    const tabSpells = getSpellsForTab();

    if (tabSpells.length === 0) {
      return (
        <div className="empty-spell-grid">
          <p>No spells available for this talent tree yet.</p>
        </div>
      );
    }

    return (
      <div className="spell-grid-container">
        <div className="spell-grid">
          {tabSpells.map((spell, index) => (
            <div
              key={`spell-${index}`}
              className={`spell-slot ${hasProceduralElements(spell) ? 'procedural' : ''}`}
              onMouseEnter={(e) => handleSpellHover(spell, e)}
              onMouseMove={handleSpellMouseMove}
              onMouseLeave={() => handleSpellHover(null)}
              onClick={() => handleSpellClick(spell)}
            >
              <SpellIcon classId={classId} spellName={spell.name} />
              <div className="spell-name">{spell.name}</div>
              {hasProceduralElements(spell) && (
                <div className="procedural-indicator">RNG</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Get class-specific theme
  const getClassTheme = () => {
    const themes = {
      'pyrofiend': 'fire-theme',
      'chronarch': 'time-theme',
      'minstrel': 'music-theme',
      'gambler': 'luck-theme',
      'fate-weaver': 'fate-theme',
      'chaos-weaver': 'chaos-theme',
      'martyr': 'holy-theme',
      'false-prophet': 'corruption-theme',
      'exorcist': 'divine-theme',
      'deathcaller': 'death-theme',
      'plaguebringer': 'plague-theme',
      'lichborne': 'undead-theme',
      'inscriptor': 'arcane-theme',
      'spellguard': 'protection-theme',
      'arcanoneer': 'technology-theme',
      'witch-doctor': 'voodoo-theme',
      'formbender': 'nature-theme',
      'primalist': 'primal-theme',
      'berserker': 'rage-theme',
      'dreadnaught': 'war-theme',
      'titan': 'earth-theme',
      'lunarch': 'lunar-theme',
      'huntress': 'hunt-theme',
      'warden': 'guardian-theme',
      'toxicologist': 'poison-theme',
      'covenbane': 'witch-hunter-theme',
      'bladedancer': 'blade-theme'
    };

    return themes[classId] || 'default-theme';
  };

  return (
    <div className={`spellbook-container ${getClassTheme()}`}>
      {/* Left sidebar with tabs */}
      <div className="spellbook-sidebar">
        <div className="spellbook-header">
          <h2>Spellbook</h2>
        </div>
        
        <div className="spellbook-tabs">
          {/* Class Mechanics Tab */}
          <button
            className={`spellbook-tab ${activeTab === 'mechanics' ? 'active' : ''}`}
            onClick={() => setActiveTab('mechanics')}
          >
            <span className="tab-icon">⚙</span>
            <span className="tab-name">Mechanics</span>
          </button>

          {/* Talent Tree Tabs */}
          {talentTrees && talentTrees.map(tree => (
            <button
              key={tree.id}
              className={`spellbook-tab ${activeTab === tree.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tree.id)}
            >
              <span className="tab-icon">{tree.icon}</span>
              <span className="tab-name">{tree.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="spellbook-content">
        {activeTab === 'mechanics' ? (
          renderClassMechanics()
        ) : (
          <div className="spellbook-tree-content">
            <div className="tree-header">
              <h3>{talentTrees?.find(t => t.id === activeTab)?.name}</h3>
              <p>{talentTrees?.find(t => t.id === activeTab)?.description}</p>
            </div>
            {renderSpellGrid()}
          </div>
        )}
      </div>

      {/* Enhanced Spell Tooltip */}
      {hoveredSpell && (
        <div
          className="spell-tooltip"
          style={{
            position: 'fixed',
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            zIndex: 1000
          }}
        >
          <div className="tooltip-header">
            <h4>{hoveredSpell.name}</h4>
          </div>

          <div className="tooltip-description">
            {hoveredSpell.stageRequirement && (
              <div className="stage-requirement-content">
                <strong>Requirement:</strong> {hoveredSpell.stageRequirement}
              </div>
            )}

            <p>{hoveredSpell.description}</p>

            {hoveredSpell.mechanics && (
              <div className="description-section">
                <strong>Mechanics:</strong>
                <p>{hoveredSpell.mechanics}</p>
              </div>
            )}

            {hoveredSpell.scaling && (
              <div className="description-section">
                <strong>Scaling:</strong>
                <p>{hoveredSpell.scaling}</p>
              </div>
            )}

            {/* Special effects for different spell types */}
            {hoveredSpell.effects && (
              <div className="description-section">
                <strong>Effects:</strong>
                <ul className="effects-list">
                  {hoveredSpell.effects.map((effect, index) => (
                    <li key={index}>
                      <strong>{effect.condition}:</strong> {effect.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.outcomes && (
              <div className="description-section">
                <strong>Possible Outcomes:</strong>
                <ul className="effects-list">
                  {hoveredSpell.outcomes.map((outcome, index) => (
                    <li key={index}>
                      <strong>{outcome.result}:</strong> {outcome.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.suitEffects && (
              <div className="description-section">
                <strong>Suit Effects:</strong>
                <ul className="effects-list">
                  {hoveredSpell.suitEffects.map((effect, index) => (
                    <li key={index}>
                      <strong>{effect.suit}:</strong> {effect.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.valueEffects && (
              <div className="description-section">
                <strong>Card Value Effects:</strong>
                <ul className="effects-list">
                  {hoveredSpell.valueEffects.map((effect, index) => (
                    <li key={index}>
                      <strong>{effect.value}:</strong> {effect.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.combos && (
              <div className="description-section">
                <strong>Poker Combinations:</strong>
                <ul className="effects-list">
                  {hoveredSpell.combos.map((combo, index) => (
                    <li key={index}>
                      <strong>{combo.combo}:</strong> {combo.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.entropyInteractions && (
              <div className="description-section">
                <strong>Entropy Interactions:</strong>
                <ul className="effects-list">
                  {hoveredSpell.entropyInteractions.map((interaction, index) => (
                    <li key={index}>{interaction}</li>
                  ))}
                </ul>
              </div>
            )}

            {hoveredSpell.special && (
              <div className="description-section">
                <strong>Special:</strong>
                <p>{hoveredSpell.special}</p>
              </div>
            )}

            {/* Resource Costs at Bottom */}
            <div className="tooltip-costs-footer">
              <div className="costs-divider"></div>

              {/* Main costs row */}
              <div className="main-costs-row">
                {hoveredSpell.cost?.actionPoints && (
                  <div className="cost-badge ap-cost">
                    <span className="cost-label">AP</span>
                    <span className="cost-value">{hoveredSpell.cost.actionPoints}</span>
                  </div>
                )}
                {hoveredSpell.cost?.mana && (
                  <div className="cost-badge mana-cost">
                    <ResourceIcon resourceType="mana" size="small" />
                    <span className="cost-label">Mana</span>
                    <span className="cost-value">{hoveredSpell.cost.mana}</span>
                  </div>
                )}
                {hoveredSpell.cost?.health && (
                  <div className="cost-badge health-cost">
                    <ResourceIcon resourceType="health" size="small" />
                    <span className="cost-value">{hoveredSpell.cost.health}</span>
                  </div>
                )}
              </div>

              {/* Cooldown row */}
              {hoveredSpell.cooldown && (
                <div className="cooldown-row">
                  <div className="cost-badge cooldown-cost">
                    <ResourceIcon resourceType="cooldown" size="small" />
                    <span className="cost-label">CD</span>
                    <span className="cost-value">{hoveredSpell.cooldown}</span>
                  </div>
                </div>
              )}

              {/* Special costs row */}
              {(hoveredSpell.cost?.note || hoveredSpell.cost?.lunarCharge || hoveredSpell.cost?.spiritCharges ||
                hoveredSpell.cost?.cardDraw || hoveredSpell.cost?.chaosRoll || hoveredSpell.cost?.diceRoll ||
                hoveredSpell.cost?.coinFlip || hoveredSpell.cost?.luckPoints || hoveredSpell.cost?.riskStacks ||
                hoveredSpell.cost?.wager || hoveredSpell.cost?.runeSlots || hoveredSpell.cost?.voodooEssence ||
                hoveredSpell.cost?.ascension || hoveredSpell.cost?.continuum || hoveredSpell.cost?.essenceEchoes ||
                hoveredSpell.cost?.wardPoints || hoveredSpell.cost?.soulCharges || hoveredSpell.cost?.primalResonance ||
                hoveredSpell.cost?.guardPoints || hoveredSpell.cost?.heat || hoveredSpell.cost?.combo) && (
                <div className="special-costs-row">
                  {hoveredSpell.cost?.ascension && (
                    <div className="cost-badge ascension-cost">
                      <ResourceIcon resourceType="ascension" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.ascension}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.lunarCharge && (
                    <div className="cost-badge lunar-cost">
                      <ResourceIcon resourceType="lunarCharge" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.lunarCharge}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.spiritCharges && (
                    <div className="cost-badge spirit-cost">
                      <ResourceIcon resourceType="spiritCharges" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.spiritCharges}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.cardDraw && (
                    <div className="cost-badge cards-cost">
                      <span className="cost-label">Cards</span>
                      <span className="cost-value">{hoveredSpell.cost.cardDraw}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.chaosRoll && (
                    <div className="cost-badge chaos-cost">
                      <span className="cost-label">Roll</span>
                      <span className="cost-value">{hoveredSpell.cost.chaosRoll}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.diceRoll && (
                    <div className="cost-badge dice-cost">
                      <span className="cost-label">Dice</span>
                      <span className="cost-value">{hoveredSpell.cost.diceRoll}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.coinFlip && (
                    <div className="cost-badge coin-cost">
                      <span className="cost-label">Coin</span>
                      <span className="cost-value">{typeof hoveredSpell.cost.coinFlip === 'number' ? hoveredSpell.cost.coinFlip : '1'}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.luckPoints && (
                    <div className="cost-badge luck-cost">
                      <span className="cost-label">Luck</span>
                      <span className="cost-value">{hoveredSpell.cost.luckPoints}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.riskStacks && (
                    <div className="cost-badge risk-cost">
                      <span className="cost-label">Risk</span>
                      <span className="cost-value">{hoveredSpell.cost.riskStacks}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.wager && (
                    <div className="cost-badge wager-cost">
                      <span className="cost-label">Wager</span>
                      <span className="cost-value">{hoveredSpell.cost.wager}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.runeSlots && (
                    <div className="cost-badge runes-cost">
                      <span className="cost-label">Runes</span>
                      <span className="cost-value">{hoveredSpell.cost.runeSlots}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.voodooEssence && (
                    <div className="cost-badge voodoo-cost">
                      <span className="cost-label">VE</span>
                      <span className="cost-value">{hoveredSpell.cost.voodooEssence}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.continuum && (
                    <div className="cost-badge continuum-cost">
                      <ResourceIcon resourceType="continuum" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.continuum}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.essenceEchoes && (
                    <div className="cost-badge essence-cost">
                      <ResourceIcon resourceType="essenceEchoes" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.essenceEchoes}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.wardPoints && (
                    <div className="cost-badge ward-cost">
                      <ResourceIcon resourceType="wardPoints" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.wardPoints}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.soulCharges && (
                    <div className="cost-badge soul-cost">
                      <ResourceIcon resourceType="soulCharges" size="small" />
                      <span className="cost-value">{hoveredSpell.cost.soulCharges}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.primalResonance && (
                    <div className="cost-badge primal-cost">
                      <span className="cost-label">PR</span>
                      <span className="cost-value">{hoveredSpell.cost.primalResonance}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.guardPoints && (
                    <div className="cost-badge guard-cost">
                      <span className="cost-label">GP</span>
                      <span className="cost-value">{hoveredSpell.cost.guardPoints}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.heat && (
                    <div className="cost-badge heat-cost">
                      <span className="cost-label">Heat</span>
                      <span className="cost-value">{hoveredSpell.cost.heat}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.combo && (
                    <div className="cost-badge combo-cost">
                      <span className="cost-label">Combo</span>
                      <span className="cost-value">{hoveredSpell.cost.combo}</span>
                    </div>
                  )}
                  {hoveredSpell.cost?.note && (
                    <div className="cost-note">
                      {hoveredSpell.cost.note}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Spell Effect Generator Modal */}
      {showEffectGenerator && selectedSpell && (
        <SpellEffectGenerator
          spell={selectedSpell}
          classId={classId}
          onClose={() => {
            setShowEffectGenerator(false);
            setSelectedSpell(null);
          }}
        />
      )}
    </div>
  );
};

export default Spellbook;
