import React, { useState, useEffect } from 'react';
import { resourceSystemsAnalysis } from '../../data/resource-systems-analysis';

// Import all resource bar components
import {
  LinearGauge,
  StageOrbs,
  NoteSequence,
  ChargeOrbs,
  VialRack,
  CasinoDisplay,
  TrackingDisplay,
  HealthSacrifice,
  HeresyMeter,
  ChaosDice,
  CardDeck,
  PhylacteryCore,
  ElementCannon,
  RuneCircle,
  WardShield,
  VoodooEssence,
  SoulOrbs,
  PlagueTracker,
  FuryGauge,
  DanceMeter,
  WildMeter,
  FortressMeter,
  MassGauge,
  SealArray,
  BulwarkMeter,
  PrimalMeter,
  LunarPhases
} from './types/index.jsx';

import './ResourceBarManager.css';

// Component mapping for different resource bar types
const RESOURCE_COMPONENTS = {
  'linear-gauge': LinearGauge,
  'stage-orbs': StageOrbs,
  'note-sequence': NoteSequence,
  'charge-orbs': ChargeOrbs,
  'vial-rack': VialRack,
  'casino-display': CasinoDisplay,
  'tracking-display': TrackingDisplay,
  'health-sacrifice': HealthSacrifice,
  'heresy-meter': HeresyMeter,
  'chaos-dice': ChaosDice,
  'card-deck': CardDeck,
  'phylactery-core': PhylacteryCore,
  'element-cannon': ElementCannon,
  'rune-circle': RuneCircle,
  'ward-shield': WardShield,
  'voodoo-essence': VoodooEssence,
  'soul-orbs': SoulOrbs,
  'plague-tracker': PlagueTracker,
  'fury-gauge': FuryGauge,
  'dance-meter': DanceMeter,
  'wild-meter': WildMeter,
  'fortress-meter': FortressMeter,
  'mass-gauge': MassGauge,
  'seal-array': SealArray,
  'bulwark-meter': BulwarkMeter,
  'primal-meter': PrimalMeter,
  'lunar-phases': LunarPhases
};

/**
 * ResourceBarManager - Main component for managing class resource bars
 * Handles resource state, interactions, and renders appropriate resource bar type
 */
const ResourceBarManager = ({ 
  classId, 
  initialValues = {}, 
  onResourceChange = () => {},
  interactive = true,
  size = 'medium',
  showTooltips = true 
}) => {
  const resourceConfig = resourceSystemsAnalysis[classId];
  
  if (!resourceConfig) {
    console.warn(`No resource configuration found for class: ${classId}`);
    return null;
  }

  // Initialize resource state based on class configuration
  const [resourceState, setResourceState] = useState(() => {
    const initialState = { ...initialValues };
    
    // Set default values based on resource type
    switch (resourceConfig.resourceType) {
      case 'stages':
        initialState.currentStage = initialState.currentStage || 0;
        break;
      case 'gauge':
        initialState.currentValue = initialState.currentValue || 0;
        initialState.maxValue = resourceConfig.maxValue;
        break;
      case 'charges':
        initialState.currentCharges = initialState.currentCharges || 0;
        initialState.maxCharges = resourceConfig.maxCharges;
        break;
      case 'combo':
        initialState.currentNotes = initialState.currentNotes || [];
        initialState.maxNotes = resourceConfig.maxNotes;
        break;
      case 'vials':
        initialState.vials = initialState.vials || [];
        initialState.maxVials = resourceConfig.maxVials;
        break;
      case 'cards':
        initialState.hand = initialState.hand || [];
        initialState.deck = initialState.deck || [];
        break;
      default:
        // Generic initialization for other types
        break;
    }
    
    return initialState;
  });

  // Handle resource state changes
  const handleResourceChange = (newState) => {
    setResourceState(prevState => {
      const updatedState = { ...prevState, ...newState };
      onResourceChange(updatedState);
      return updatedState;
    });
  };

  // Get the appropriate component for this resource type
  const ResourceComponent = RESOURCE_COMPONENTS[resourceConfig.visualType];
  
  if (!ResourceComponent) {
    console.warn(`No component found for visual type: ${resourceConfig.visualType}`);
    return (
      <div className="resource-bar-error">
        <p>Resource bar not implemented for {resourceConfig.name}</p>
      </div>
    );
  }

  return (
    <div className={`resource-bar-manager ${classId} size-${size}`}>
      <div className="resource-bar-header">
        <h3 className="resource-name">{resourceConfig.name}</h3>
        {showTooltips && (
          <div className="resource-tooltip">
            <span className="tooltip-text">{resourceConfig.description}</span>
          </div>
        )}
      </div>
      
      <div className="resource-bar-container">
        <ResourceComponent
          config={resourceConfig}
          state={resourceState}
          onChange={handleResourceChange}
          interactive={interactive}
          size={size}
        />
      </div>
      
      {interactive && (
        <div className="resource-controls">
          <button 
            className="reset-button"
            onClick={() => handleResourceChange({})}
            title="Reset resource to default state"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ResourceBarManager;
