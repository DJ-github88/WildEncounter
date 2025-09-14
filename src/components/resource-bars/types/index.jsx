// Export all resource bar type components
// This file provides a centralized export for all resource bar components

import LinearGauge from './LinearGauge';
import StageOrbs from './StageOrbs';
import ChargeOrbs from './ChargeOrbs';

// Placeholder components for resource types not yet implemented
import React from 'react';

const PlaceholderResourceBar = ({ config, state, onChange, interactive, size }) => (
  <div style={{
    padding: '20px',
    textAlign: 'center',
    background: '#f5f5f5',
    border: '2px dashed #ccc',
    borderRadius: '8px',
    color: '#666'
  }}>
    <h4>{config.name}</h4>
    <p>Resource bar implementation coming soon!</p>
    <small>Type: {config.resourceType}</small>
  </div>
);

// Implemented components
export { LinearGauge, StageOrbs, ChargeOrbs };

// Placeholder exports for components not yet implemented
export const NoteSequence = PlaceholderResourceBar;
export const VialRack = PlaceholderResourceBar;
export const CasinoDisplay = PlaceholderResourceBar;
export const TrackingDisplay = PlaceholderResourceBar;
export const HealthSacrifice = PlaceholderResourceBar;
export const HeresyMeter = PlaceholderResourceBar;
export const ChaosDice = PlaceholderResourceBar;
export const CardDeck = PlaceholderResourceBar;
export const PhylacteryCore = PlaceholderResourceBar;
export const ElementCannon = PlaceholderResourceBar;
export const RuneCircle = PlaceholderResourceBar;
export const WardShield = PlaceholderResourceBar;
export const VoodooEssence = PlaceholderResourceBar;
export const SoulOrbs = PlaceholderResourceBar;
export const PlagueTracker = PlaceholderResourceBar;
export const FuryGauge = PlaceholderResourceBar;
export const DanceMeter = PlaceholderResourceBar;
export const WildMeter = PlaceholderResourceBar;
export const FortressMeter = PlaceholderResourceBar;
export const MassGauge = PlaceholderResourceBar;
export const SealArray = PlaceholderResourceBar;
export const BulwarkMeter = PlaceholderResourceBar;
export const PrimalMeter = PlaceholderResourceBar;
export const LunarPhases = PlaceholderResourceBar;
