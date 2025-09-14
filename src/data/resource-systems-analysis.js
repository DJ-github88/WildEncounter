// Comprehensive analysis of all 27 class resource systems for visual resource bar implementation
// This document maps each class to its resource system and visual requirements

const resourceSystemsAnalysis = {
  // MYSTIC PATH CLASSES
  chronarch: {
    resourceType: 'gauge',
    name: 'Continuum',
    maxValue: 30,
    thresholds: [
      { name: 'Momentum', value: 10, color: '#4CAF50' },
      { name: 'Echo', value: 20, color: '#FF9800' },
      { name: 'Paradox', value: 30, color: '#F44336' }
    ],
    visualType: 'linear-gauge',
    animation: 'smooth-fill',
    description: 'Time-energy gauge with threshold effects'
  },

  minstrel: {
    resourceType: 'combo',
    name: 'Musical Combo',
    maxNotes: 7,
    noteTypes: ['Tonic', 'Supertonic', 'Mediant', 'Subdominant', 'Dominant', 'Submediant', 'Leading'],
    visualType: 'note-sequence',
    animation: 'note-cascade',
    description: 'Musical note combinations for spell effects'
  },

  pyrofiend: {
    resourceType: 'stages',
    name: 'Demonic Ascension',
    maxStage: 9,
    stages: [
      { stage: 0, name: 'Mortal Form', color: '#2196F3' },
      { stage: 1, name: 'Ember Touched', color: '#FF5722' },
      { stage: 2, name: 'Flame Wreathed', color: '#FF6F00' },
      { stage: 3, name: 'Inferno Heart', color: '#E65100' },
      { stage: 4, name: 'Hellfire Soul', color: '#BF360C' },
      { stage: 5, name: 'Demon Spawn', color: '#D32F2F' },
      { stage: 6, name: 'Fiend Ascendant', color: '#C62828' },
      { stage: 7, name: 'Infernal Lord', color: '#B71C1C' },
      { stage: 8, name: 'Demon Prince', color: '#8E0000' },
      { stage: 9, name: 'Archfiend', color: '#4A0000' }
    ],
    visualType: 'stage-orbs',
    animation: 'stage-progression',
    description: 'Progressive demonic transformation stages'
  },

  // TRICKSTER PATH CLASSES
  huntress: {
    resourceType: 'tracking',
    name: 'Quarry Tracking',
    components: ['quarryMark', 'precisionStacks', 'huntPoints'],
    visualType: 'tracking-display',
    animation: 'target-focus',
    description: 'Target tracking with precision buildup'
  },

  toxicologist: {
    resourceType: 'vials',
    name: 'Vials & Reagents',
    maxVials: 8, // INT + 3 base
    vialTypes: ['poison', 'antidote', 'explosive', 'utility'],
    visualType: 'vial-rack',
    animation: 'vial-brewing',
    description: 'Alchemical vial management system'
  },

  gambler: {
    resourceType: 'chance',
    name: 'Gambling Mechanics',
    components: ['luckPoints', 'riskStacks', 'chanceTools'],
    maxLuck: 10,
    maxRisk: 5,
    visualType: 'casino-display',
    animation: 'dice-cards-coins',
    description: 'Luck and risk management with chance tools'
  },

  // ZEALOT PATH CLASSES
  exorcist: {
    resourceType: 'charges',
    name: 'Spirit Charges',
    maxCharges: 10,
    chargeColor: '#FFD700',
    visualType: 'charge-orbs',
    animation: 'spirit-glow',
    description: 'Holy charges from banishing supernatural entities'
  },

  martyr: {
    resourceType: 'health-based',
    name: 'Blood Thresholds & Pain Charges',
    components: ['painCharges', 'bloodVows', 'healthThresholds'],
    visualType: 'health-sacrifice',
    animation: 'blood-pulse',
    description: 'Health sacrifice system with pain accumulation'
  },

  'false-prophet': {
    resourceType: 'lies',
    name: 'Lies (Heresy Points)',
    maxLies: 10, // CHA mod + 5
    liesColor: '#8E24AA',
    visualType: 'heresy-meter',
    animation: 'deception-swirl',
    description: 'Deception points from false miracles'
  },

  // HARROW PATH CLASSES
  'chaos-weaver': {
    resourceType: 'entropy',
    name: 'Chaos Dice & Entropy Points',
    maxEntropy: 8, // INT mod + level/5
    diceTypes: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'],
    visualType: 'chaos-dice',
    animation: 'dice-chaos',
    description: 'Entropy points and chaos dice system'
  },

  'fate-weaver': {
    resourceType: 'cards',
    name: 'Card-Draw System',
    deckSize: 52,
    handSize: 7,
    cardSuits: ['hearts', 'diamonds', 'clubs', 'spades'],
    visualType: 'card-deck',
    animation: 'card-draw',
    description: 'Mystical card deck for spell resolution'
  },

  lichborne: {
    resourceType: 'echoes',
    name: 'Phylactery Core',
    maxEchoes: 5,
    echoColor: '#4A148C',
    visualType: 'phylactery-core',
    animation: 'soul-harvest',
    description: 'Soul fragments stored in phylactery'
  },

  // ARCANIST PATH CLASSES
  arcanoneer: {
    resourceType: 'elements',
    name: 'Element Slots & Volatility',
    maxSlots: 5,
    elements: ['fire', 'water', 'earth', 'air', 'lightning'],
    volatilityMax: 10,
    visualType: 'element-cannon',
    animation: 'element-loading',
    description: 'Elemental rune cannon system'
  },

  inscriptor: {
    resourceType: 'runes',
    name: 'Runecraft',
    maxGlyphs: 8, // 3 + INT mod
    runeTypes: ['power', 'protection', 'binding', 'enhancement'],
    visualType: 'rune-circle',
    animation: 'rune-inscription',
    description: 'Magical rune placement system'
  },

  spellguard: {
    resourceType: 'wards',
    name: 'Ward Points',
    maxWards: 15,
    wardColor: '#1976D2',
    visualType: 'ward-shield',
    animation: 'shield-buildup',
    description: 'Protective ward point accumulation'
  },

  // HEXER PATH CLASSES
  'witch-doctor': {
    resourceType: 'voodoo',
    name: 'Voodoo Essence',
    maxEssence: 10, // 5 + SPIR mod
    invocationSlots: 2,
    visualType: 'voodoo-essence',
    animation: 'spirit-invocation',
    description: 'Voodoo essence and loa invocation'
  },

  deathcaller: {
    resourceType: 'souls',
    name: 'Soul Charges',
    maxSouls: 8,
    soulColor: '#424242',
    visualType: 'soul-orbs',
    animation: 'soul-absorption',
    description: 'Soul charges from defeated enemies'
  },

  plaguebringer: {
    resourceType: 'plague',
    name: 'Plague Stacks',
    maxStacks: 3, // per target
    plagueColor: '#388E3C',
    visualType: 'plague-tracker',
    animation: 'contagion-spread',
    description: 'Plague stack application and tracking'
  },

  // REAVER PATH CLASSES
  berserker: {
    resourceType: 'fury',
    name: 'Fury & Momentum Gauge',
    maxFury: 15,
    thresholds: [
      { name: 'Ember', value: 5, color: '#FF5722' },
      { name: 'Blaze', value: 10, color: '#FF3D00' },
      { name: 'Inferno', value: 15, color: '#D50000' }
    ],
    visualType: 'fury-gauge',
    animation: 'rage-buildup',
    description: 'Fury points with momentum thresholds'
  },

  bladedancer: {
    resourceType: 'edge',
    name: 'Edge, Flourish Tokens & Stance System',
    maxEdge: 10,
    maxFlourish: 5, // AGI mod
    stances: ['offensive', 'defensive', 'mobile'],
    visualType: 'dance-meter',
    animation: 'blade-dance',
    description: 'Combat momentum and flourish system'
  },

  formbender: {
    resourceType: 'instinct',
    name: 'Wild Instinct',
    maxInstinct: 5,
    forms: ['beast', 'elemental', 'hybrid'],
    visualType: 'wild-meter',
    animation: 'shape-shift',
    description: 'Wild instinct for shapeshifting'
  },

  // MERCENARY PATH CLASSES
  dreadnaught: {
    resourceType: 'guard',
    name: 'Guard Points & Siege Stacks',
    maxGuard: 10, // 5 + CON mod
    maxSiege: 3,
    visualType: 'fortress-meter',
    animation: 'shield-wall',
    description: 'Defensive guard points and siege stacks'
  },

  titan: {
    resourceType: 'gravitas',
    name: 'Gravitas Gauge',
    maxGravitas: 15,
    maxStrain: 3,
    visualType: 'mass-gauge',
    animation: 'earth-shake',
    description: 'Mass-based gravitas with strain system'
  },

  covenbane: {
    resourceType: 'seals',
    name: 'Seal Tokens, Dispel Gauge & Ward Slots',
    maxSeals: 6,
    maxDispel: 12,
    maxWardSlots: 4,
    visualType: 'seal-array',
    animation: 'hex-breaking',
    description: 'Anti-magic seal and dispel system'
  },

  // SENTINEL PATH CLASSES
  warden: {
    resourceType: 'bulwark',
    name: 'Bulwark & Ward System',
    maxBulwark: 12,
    maxWardTokens: 3,
    wardThresholds: [4, 8, 12],
    visualType: 'bulwark-meter',
    animation: 'ward-creation',
    description: 'Territory control with ward tokens'
  },

  primalist: {
    resourceType: 'resonance',
    name: 'Primal Resonance',
    maxResonance: 6,
    elements: ['earth', 'storm', 'growth'],
    totemAuras: true,
    visualType: 'primal-meter',
    animation: 'elemental-pulse',
    description: 'Elemental resonance and totem system'
  },

  lunarch: {
    resourceType: 'lunar',
    name: 'Lunar Charge & Phase System',
    maxCharge: 10,
    phases: ['full', 'crescent', 'new'],
    phaseColors: {
      full: '#FFD700',
      crescent: '#C0C0C0',
      new: '#4A4A4A'
    },
    visualType: 'lunar-phases',
    animation: 'moon-cycle',
    description: 'Lunar phase cycling system'
  }
};

// Resource bar visual types and their requirements
const visualTypes = {
  'linear-gauge': {
    component: 'LinearGauge',
    features: ['fill-animation', 'threshold-markers', 'glow-effects'],
    styling: 'gradient-fill'
  },
  
  'stage-orbs': {
    component: 'StageOrbs',
    features: ['orb-progression', 'stage-colors', 'transformation-effects'],
    styling: 'circular-orbs'
  },
  
  'note-sequence': {
    component: 'NoteSequence',
    features: ['note-display', 'combo-chains', 'musical-animation'],
    styling: 'musical-staff'
  },
  
  'charge-orbs': {
    component: 'ChargeOrbs',
    features: ['charge-accumulation', 'glow-effects', 'spend-animation'],
    styling: 'floating-orbs'
  },
  
  'vial-rack': {
    component: 'VialRack',
    features: ['vial-types', 'brewing-animation', 'liquid-effects'],
    styling: 'alchemical-rack'
  },
  
  'casino-display': {
    component: 'CasinoDisplay',
    features: ['dice-animation', 'card-flip', 'coin-toss', 'luck-meter'],
    styling: 'gambling-theme'
  },
  
  'tracking-display': {
    component: 'TrackingDisplay',
    features: ['target-mark', 'precision-buildup', 'hunt-focus'],
    styling: 'hunter-theme'
  },
  
  'health-sacrifice': {
    component: 'HealthSacrifice',
    features: ['health-bar', 'pain-accumulation', 'sacrifice-effects'],
    styling: 'blood-theme'
  },
  
  'heresy-meter': {
    component: 'HeresyMeter',
    features: ['lies-accumulation', 'deception-effects', 'false-glow'],
    styling: 'corruption-theme'
  },

  'chaos-dice': {
    component: 'ChaosDice',
    features: ['dice-rolling', 'entropy-buildup', 'chaos-effects'],
    styling: 'chaotic-theme'
  },

  'card-deck': {
    component: 'CardDeck',
    features: ['card-draw', 'hand-display', 'suit-effects'],
    styling: 'mystical-cards'
  },

  'phylactery-core': {
    component: 'PhylacteryCore',
    features: ['soul-storage', 'echo-effects', 'undead-glow'],
    styling: 'necromantic-theme'
  },

  'element-cannon': {
    component: 'ElementCannon',
    features: ['element-loading', 'volatility-meter', 'cannon-display'],
    styling: 'arcane-engineering'
  },

  'rune-circle': {
    component: 'RuneCircle',
    features: ['rune-placement', 'glyph-slots', 'inscription-effects'],
    styling: 'runic-theme'
  },

  'ward-shield': {
    component: 'WardShield',
    features: ['shield-buildup', 'ward-layers', 'protection-glow'],
    styling: 'protective-theme'
  },

  'voodoo-essence': {
    component: 'VoodooEssence',
    features: ['essence-buildup', 'invocation-slots', 'spirit-effects'],
    styling: 'tribal-theme'
  },

  'soul-orbs': {
    component: 'SoulOrbs',
    features: ['soul-collection', 'death-effects', 'necromantic-glow'],
    styling: 'death-theme'
  },

  'plague-tracker': {
    component: 'PlagueTracker',
    features: ['stack-tracking', 'contagion-spread', 'disease-effects'],
    styling: 'plague-theme'
  },

  'fury-gauge': {
    component: 'FuryGauge',
    features: ['rage-buildup', 'momentum-thresholds', 'berserker-effects'],
    styling: 'rage-theme'
  },

  'dance-meter': {
    component: 'DanceMeter',
    features: ['edge-tracking', 'flourish-tokens', 'stance-display'],
    styling: 'elegant-combat'
  },

  'wild-meter': {
    component: 'WildMeter',
    features: ['instinct-buildup', 'form-display', 'shape-effects'],
    styling: 'primal-theme'
  },

  'fortress-meter': {
    component: 'FortressMeter',
    features: ['guard-buildup', 'siege-stacks', 'defensive-effects'],
    styling: 'fortress-theme'
  },

  'mass-gauge': {
    component: 'MassGauge',
    features: ['gravitas-buildup', 'strain-tracking', 'earth-effects'],
    styling: 'titan-theme'
  },

  'seal-array': {
    component: 'SealArray',
    features: ['seal-placement', 'dispel-gauge', 'anti-magic-effects'],
    styling: 'witch-hunter-theme'
  },

  'bulwark-meter': {
    component: 'BulwarkMeter',
    features: ['bulwark-buildup', 'ward-tokens', 'territory-control'],
    styling: 'guardian-theme'
  },

  'primal-meter': {
    component: 'PrimalMeter',
    features: ['resonance-buildup', 'elemental-display', 'totem-auras'],
    styling: 'shamanic-theme'
  },

  'lunar-phases': {
    component: 'LunarPhases',
    features: ['phase-cycling', 'lunar-charge', 'moon-effects'],
    styling: 'celestial-theme'
  }
};

export { resourceSystemsAnalysis, visualTypes };
