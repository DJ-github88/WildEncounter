// Base spells and abilities for the Minstrel class
const minstrelAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Musical Combo',
    description: 'The Minstrel\'s signature mechanic is a musical combo system built on Western music theory. Spells generate "notes" classified as Tonic, Subdominant, or Dominant, reflecting scale degrees. Casting spells in sequence builds musical tension, and then finishing on a Cadence resolves it for a powerful effect.',
    notes: [
      {
        name: 'Tonic Note (I)',
        description: 'A foundational note that starts the progression. Many basic Minstrel spells grant +1 Tonic note. It represents the home key and provides a stable base for a melody.'
      },
      {
        name: 'Subdominant Note (IV)',
        description: 'The fourth scale degree. Subdominant spells add +1 Subdominant note. Musically this note leads away from the tonic, so Subdominant notes can shift the tune or soften the tension.'
      },
      {
        name: 'Dominant Note (V)',
        description: 'The fifth note of the scale. Dominant spells add +1 Dominant note. The dominant naturally leads back to the tonic (creating tension), so these notes ramp up power.'
      },
      {
        name: 'Cadence (V→I)',
        description: 'A special finishing move that consumes the collected notes. Using a Cadence ability when you have a proper sequence triggers a dramatic effect and then removes all those notes.'
      }
    ],
    mechanics: [
      'Each cast spell adds one note of its type (Tonic, Subdominant, or Dominant).',
      'Once enough notes are stacked (typically one of each or multiple Dominants), a Cadence spell can be used as a finisher.',
      'The Cadence then unleashes extra damage, healing, or buffs and clears the note meter.',
      'Different combinations of notes can lead to different Cadence effects.',
      'Managing your notes and planning your spell sequence is key to maximizing the Minstrel\'s potential.'
    ]
  },

  // Base Spells
  baseSpells: [
    {
      name: 'Harmonic Strike',
      cost: {
        actionPoints: 2,
        mana: 5,
        note: '+1 Tonic'
      },
      description: 'A basic sonic attack against one enemy.',
      mechanics: 'On hit it deals 1d6 + ⌊INT/2⌋ thunder damage and grants +1 Tonic note.',
      scaling: 'Intelligence adds to damage; e.g. INT 14 gives +2.'
    },
    {
      name: 'Dissonant Chord',
      cost: {
        actionPoints: 2,
        mana: 4,
        note: '+1 Subdominant'
      },
      description: 'Unleashes a sharp, unsettling chord on a single foe.',
      mechanics: 'Deals 1d4 + ⌊CHA/2⌋ psychic damage and forces a minor stun (target skips next turn). Grants +1 Subdominant note if it hits.',
      scaling: 'Charisma boosts damage.'
    },
    {
      name: 'Resonating Pulse',
      cost: {
        actionPoints: 3,
        mana: 6,
        note: '+1 Dominant'
      },
      description: 'A powerful shockwave of sound that hits all enemies.',
      mechanics: 'Each foe takes 1d6 + ⌊PER/2⌋ piercing damage. Grants +1 Dominant note.',
      scaling: 'Performance (PER) increases damage.'
    },
    {
      name: 'Lyric of Courage',
      cost: {
        actionPoints: 2,
        mana: 5,
        note: '+1 Tonic'
      },
      description: 'An inspiring song targeting one ally.',
      mechanics: 'Restores 8 + ⌊CHA/2⌋ HP to the ally and grants them +2 to attack rolls for 1 turn. Grants +1 Tonic note.',
      scaling: 'Charisma increases healing.'
    },
    {
      name: 'Melodic Lullaby',
      cost: {
        actionPoints: 2,
        mana: 6,
        note: '+1 Subdominant per enemy'
      },
      description: 'A soothing melody that affects enemies in an area.',
      mechanics: 'Foes must succeed on a Will save or fall asleep for 1 round. (Sleep ends early if hit.) Does not deal damage. Grants +1 Subdominant note per enemy affected.',
      scaling: 'Save DC based on Charisma.'
    },
    {
      name: 'Minor Cadence',
      cost: {
        actionPoints: 3,
        mana: 7,
        note: 'Consumes notes'
      },
      description: 'A simple finisher move.',
      mechanics: 'If you have at least one Tonic, Subdominant, and Dominant point, you expend them to deal 3d6 + CHA damage to one enemy. (If not all notes are present, it still does 2d6 + CHA and consumes whatever notes you have.) Grants no notes on use.',
      scaling: 'Scales with Charisma.'
    }
  ],

  // Advanced Spells
  advancedSpells: [
    {
      name: 'Arpeggio of Arrows',
      cost: {
        actionPoints: 4,
        mana: 9,
        note: 'No additional notes'
      },
      description: 'Strikes targets with a rapid flurry of sound.',
      mechanics: 'Deals 3d6 + PER damage to a single enemy or split among several. If cast after a full tonic–subdominant–dominant sequence, it adds +50% damage. (No additional notes granted; it\'s a combo finisher.)'
    },
    {
      name: 'Crescendo Storm',
      cost: {
        actionPoints: 5,
        mana: 10,
        note: 'Spends 2 Dominant if available'
      },
      description: 'Creates a raging storm of sound around you.',
      mechanics: 'All enemies take 4d6 + ⌊CHA/2⌋ thunder damage and are pushed back 5 feet. If you have ≥2 Dominant notes, spend them to double the push distance and add a 1-turn stun. Grants no new notes.'
    },
    {
      name: 'Grand Cadence',
      cost: {
        actionPoints: 6,
        mana: 12,
        note: 'Consumes all notes'
      },
      description: 'The Minstrel unleashes a final triumphant song (Ultimate Finisher).',
      mechanics: 'Consumes all stored notes (Tonic, Subdominant, Dominant) and releases their energy. Damage = 5d6 + CHA×(total notes) to all enemies in range. If a perfect I–IV–V sequence was used, allies also gain resistance to damage for 1 round. Afterwards, notes are cleared.'
    },
    {
      name: 'Harmony of Triumph',
      cost: {
        actionPoints: 4,
        mana: 8,
        note: 'Costs 2 Tonic, 2 Subdominant, 2 Dominant'
      },
      description: 'A massive group buff.',
      mechanics: 'All allies gain +3 to attack and saving throws for 2 turns. If cast on-beat with a tonic–subdominant–dominant progression, it additionally heals each ally for 4 + ⌊CHA/2⌋. Costs 2 Tonic, 2 Subdominant, 2 Dominant to activate (spent on use).'
    },
    {
      name: 'Fugue of Fear',
      cost: {
        actionPoints: 5,
        mana: 10,
        note: 'Spends 3 Subdominant if available'
      },
      description: 'A haunting ensemble that terrifies foes.',
      mechanics: 'Enemies in the area must save or be frightened (–2 to attacks and movement) for 2 turns. If you have ≥3 Subdominant notes, expend them to extend the effect to 3 turns. Grants no new notes.'
    },
    {
      name: 'Echoing Anthem',
      cost: {
        actionPoints: 4,
        mana: 7,
        note: '+1 of each note after next spell'
      },
      description: 'A preparatory chant.',
      mechanics: 'On the next spell you cast, the Minstrel gains +1 of each note (Tonic, Subdominant, Dominant) immediately after, and that spell\'s effect is strengthened. (In effect, it "echoes" your next action for a bigger combo.)'
    }
  ]
};

export default minstrelAbilities;
