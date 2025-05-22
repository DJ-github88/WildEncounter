// Talent trees for the Minstrel class
const minstrelTalentTrees = [
  {
    id: 'path-of-leadership',
    name: 'Path of Leadership',
    description: 'Focus on support and morale buffs. Boost allies\' stats and provide team-wide protection.',
    icon: '🎵',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'anthem-of-heroes',
        name: 'Anthem of Heroes',
        description: 'Your supportive songs grant allies bonuses to attacks and defenses.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🎵',
        rankDescription: [
          'Your supportive songs grant allies +1 to attacks and defenses for 1d4 rounds.',
          'Your supportive songs grant allies +1 to attacks and defenses for 1d6 rounds.',
          'Your supportive songs grant allies +2 to attacks and defenses for 1d4 rounds.',
          'Your supportive songs grant allies +2 to attacks and defenses for 1d6 rounds.',
          'Your supportive songs grant allies +3 to attacks and defenses for 1d6 rounds.'
        ]
      },
      {
        id: 'tonic-foundation',
        name: 'Tonic Foundation',
        description: 'Your supportive spells generate additional Tonic notes.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎼',
        rankDescription: [
          'Roll 1d6 when casting a supportive spell. On a 6, gain an additional Tonic note.',
          'Roll 1d6 when casting a supportive spell. On a 5-6, gain an additional Tonic note.',
          'Roll 1d6 when casting a supportive spell. On a 4-6, gain an additional Tonic note.',
          'Roll 1d6 when casting a supportive spell. On a 3-6, gain an additional Tonic note.',
          'Roll 1d6 when casting a supportive spell. On a 2-6, gain an additional Tonic note.'
        ]
      },
      {
        id: 'inspiring-presence',
        name: 'Inspiring Presence',
        description: 'Your presence inspires allies, granting them bonuses.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'Allies within 20 feet gain +1 to saving throws.',
          'Allies within 20 feet gain +1 to saving throws and +1 to damage rolls.',
          'Allies within 20 feet gain +2 to saving throws and +1 to damage rolls.',
          'Allies within 20 feet gain +2 to saving throws and +2 to damage rolls.',
          'Allies within 20 feet gain +3 to saving throws and +2 to damage rolls.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'march-of-morale',
        name: 'March of Morale',
        description: 'Your songs can grant allies additional movement and action points.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['anthem-of-heroes'],
        icon: '🏃',
        rankDescription: [
          'Your supportive songs grant allies +1d4 × 5% movement speed for 1d4 rounds.',
          'Your supportive songs grant allies +1d6 × 5% movement speed for 1d4 rounds.',
          'Your supportive songs grant allies +1d6 × 5% movement speed and +1 AP for 1d4 rounds.'
        ]
      },
      {
        id: 'harmonic-resonance',
        name: 'Harmonic Resonance',
        description: 'Your Tonic notes enhance the power of your supportive spells.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['tonic-foundation'],
        icon: '🎶',
        rankDescription: [
          'For each Tonic note you have, your supportive spells are 1d4 × 5% more effective.',
          'For each Tonic note you have, your supportive spells are 1d6 × 5% more effective.',
          'For each Tonic note you have, your supportive spells are 1d8 × 5% more effective.'
        ]
      },
      {
        id: 'leadership-cadence',
        name: 'Leadership Cadence',
        description: 'Your Cadence abilities provide additional benefits to allies.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['inspiring-presence'],
        icon: '👑',
        rankDescription: [
          'When you use a Cadence ability, allies within 20 feet gain +1 to all rolls for 1 round.',
          'When you use a Cadence ability, allies within 20 feet gain +1 to all rolls for 1d4 rounds.',
          'When you use a Cadence ability, allies within 20 feet gain +2 to all rolls for 1d4 rounds.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'fortissimo-rally',
        name: 'Fortissimo Rally',
        description: 'A powerful rallying cry that heals allies and grants them advantage on saves.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['march-of-morale'],
        icon: '📢',
        rankDescription: [
          'Issue a rallying cry that heals allies within 30 feet for 2d8 + CHA hit points and grants them advantage on saving throws for 1d4 rounds.'
        ]
      },
      {
        id: 'tonic-mastery',
        name: 'Tonic Mastery',
        description: 'Your mastery of Tonic notes allows you to generate them more efficiently.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['harmonic-resonance'],
        icon: '🎹',
        rankDescription: [
          'Roll 1d8 when casting any spell. On a 7-8, gain a Tonic note.',
          'Roll 1d8 when casting any spell. On a 6-8, gain a Tonic note.',
          'Roll 1d8 when casting any spell. On a 5-8, gain a Tonic note.'
        ]
      },
      {
        id: 'protective-melody',
        name: 'Protective Melody',
        description: 'Your songs create a protective aura around allies.',
        maxRank: 5,
        position: { row: 2, col: 4 },
        requires: ['leadership-cadence'],
        icon: '🛡️',
        rankDescription: [
          'Allies within 20 feet reduce damage taken by 1d4.',
          'Allies within 20 feet reduce damage taken by 1d6.',
          'Allies within 20 feet reduce damage taken by 1d8.',
          'Allies within 20 feet reduce damage taken by 1d10.',
          'Allies within 20 feet reduce damage taken by 1d12.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'perfect-harmony',
        name: 'Perfect Harmony',
        description: 'Your supportive spells create perfect harmony, enhancing their effects.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['fortissimo-rally', 'tonic-mastery'],
        icon: '🎼',
        rankDescription: [
          'Roll 1d8 when casting a supportive spell. On a 7-8, the spell\'s effect is doubled.',
          'Roll 1d8 when casting a supportive spell. On a 6-8, the spell\'s effect is doubled.',
          'Roll 1d8 when casting a supportive spell. On a 5-8, the spell\'s effect is doubled.'
        ]
      },
      {
        id: 'battle-hymn',
        name: 'Battle Hymn',
        description: 'A powerful hymn that enhances allies\' combat abilities.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['tonic-mastery', 'protective-melody'],
        icon: '⚔️',
        rankDescription: [
          'Perform a battle hymn for 1d4+1 rounds. During this time, allies within 30 feet deal 1d8 additional damage with attacks and spells.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'charismatic-conductor',
        name: 'Charismatic Conductor',
        description: 'Your Charisma enhances your leadership abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['perfect-harmony'],
        icon: '🎭',
        rankDescription: [
          'Add your Charisma modifier to the duration of all your supportive effects.',
          'Add your Charisma modifier to the duration and effectiveness of all your supportive effects.',
          'Add twice your Charisma modifier to the duration and effectiveness of all your supportive effects.'
        ]
      },
      {
        id: 'heroic-anthem',
        name: 'Heroic Anthem',
        description: 'Your ultimate leadership anthem that dramatically enhances allies\' capabilities.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['perfect-harmony', 'battle-hymn'],
        icon: '🏆',
        rankDescription: [
          'Perform a heroic anthem for 1d4+2 rounds. During this time, allies within 30 feet gain +3 to all attributes, +3 to attack and damage rolls, and reduce damage taken by 25%.'
        ]
      },
      {
        id: 'tonic-cadence',
        name: 'Tonic Cadence',
        description: 'Your Cadence abilities can consume Tonic notes for powerful effects.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['battle-hymn'],
        icon: '🎻',
        rankDescription: [
          'Your Cadence abilities can consume Tonic notes to heal allies for 1d6 HP per note consumed.',
          'Your Cadence abilities can consume Tonic notes to heal allies for 1d8 HP per note consumed.',
          'Your Cadence abilities can consume Tonic notes to heal allies for 1d10 HP per note consumed and grant them +1 to all rolls per note consumed for 1d4 rounds.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'inspiring-leadership',
        name: 'Inspiring Leadership',
        description: 'Your leadership inspires allies to perform beyond their limits.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['charismatic-conductor', 'heroic-anthem'],
        icon: '🌟',
        rankDescription: [
          'Roll 1d10 when an ally within 30 feet makes an attack roll or saving throw. On a 10, they automatically succeed.',
          'Roll 1d10 when an ally within 30 feet makes an attack roll or saving throw. On a 9-10, they automatically succeed.',
          'Roll 1d10 when an ally within 30 feet makes an attack roll or saving throw. On an 8-10, they automatically succeed and deal maximum damage if it was an attack.'
        ]
      },
      {
        id: 'perfect-cadence',
        name: 'Perfect Cadence',
        description: 'Your Cadence abilities are enhanced when you have a perfect sequence of notes.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['heroic-anthem', 'tonic-cadence'],
        icon: '🎯',
        rankDescription: [
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), roll 1d8 additional dice for damage or healing.',
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), roll 2d8 additional dice for damage or healing.',
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), roll 3d8 additional dice for damage or healing and the effect\'s duration is doubled.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'symphony-of-inspiration',
        name: 'Symphony of Inspiration',
        description: 'Your ultimate symphony inspires allies to greatness and demoralizes enemies.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['inspiring-leadership', 'perfect-cadence'],
        icon: '🎻',
        rankDescription: [
          'Perform a symphony of inspiration for 1d4+3 rounds. During this time, allies within 60 feet gain +5 to all attributes, +1d12 to all damage rolls, and reduce damage taken by 50%. Additionally, enemies within 60 feet suffer -5 to all attributes and -1d12 to all damage rolls. This ability consumes all your notes and generates one of each note type (Tonic, Subdominant, Dominant) at the end of the symphony.'
        ]
      },
    ],
  },
  {
    id: 'path-of-rhythm',
    name: 'Path of Rhythm',
    description: 'Emphasizes beat and tempo control. Use loud, percussive songs to manage large groups of enemies.',
    icon: '🥁',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'drumbeat-of-daze',
        name: 'Drumbeat of Daze',
        description: 'Your rhythmic beats can slow or daze enemies.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '🥁',
        rankDescription: [
          'Your rhythm spells slow enemies by 10% for 1d4 rounds.',
          'Your rhythm spells slow enemies by 15% for 1d4 rounds.',
          'Your rhythm spells slow enemies by 20% for 1d4 rounds.',
          'Your rhythm spells slow enemies by 25% for 1d4 rounds and have a 10% chance to daze them for 1 round.',
          'Your rhythm spells slow enemies by 30% for 1d6 rounds and have a 20% chance to daze them for 1 round.'
        ]
      },
      {
        id: 'dominant-beat',
        name: 'Dominant Beat',
        description: 'Your rhythm spells generate additional Dominant notes.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎵',
        rankDescription: [
          'Roll 1d6 when casting a rhythm spell. On a 6, gain an additional Dominant note.',
          'Roll 1d6 when casting a rhythm spell. On a 5-6, gain an additional Dominant note.',
          'Roll 1d6 when casting a rhythm spell. On a 4-6, gain an additional Dominant note.',
          'Roll 1d6 when casting a rhythm spell. On a 3-6, gain an additional Dominant note.',
          'Roll 1d6 when casting a rhythm spell. On a 2-6, gain an additional Dominant note.'
        ]
      },
      {
        id: 'percussive-force',
        name: 'Percussive Force',
        description: 'Your rhythm-based attacks deal additional damage.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '💥',
        rankDescription: [
          'Your rhythm-based attacks deal an additional 1d4 damage.',
          'Your rhythm-based attacks deal an additional 1d6 damage.',
          'Your rhythm-based attacks deal an additional 1d8 damage.',
          'Your rhythm-based attacks deal an additional 1d10 damage.',
          'Your rhythm-based attacks deal an additional 1d12 damage.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'echo-steps',
        name: 'Echo Steps',
        description: 'Your rhythmic marches can increase allies\' movement.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['drumbeat-of-daze'],
        icon: '👣',
        rankDescription: [
          'Your rhythm spells increase allies\' movement speed by 1d4 × 10% for 1d4 rounds.',
          'Your rhythm spells increase allies\' movement speed by 1d6 × 10% for 1d4 rounds.',
          'Your rhythm spells increase allies\' movement speed by 1d8 × 10% for 1d6 rounds.'
        ]
      },
      {
        id: 'rhythmic-control',
        name: 'Rhythmic Control',
        description: 'Your Dominant notes enhance your control over enemies.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['dominant-beat'],
        icon: '🎮',
        rankDescription: [
          'For each Dominant note you have, your control effects last 1d4 × 5% longer.',
          'For each Dominant note you have, your control effects last 1d6 × 5% longer.',
          'For each Dominant note you have, your control effects last 1d8 × 5% longer and are 10% more effective.'
        ]
      },
      {
        id: 'hammering-cadence',
        name: 'Hammering Cadence',
        description: 'Your rhythm spells can chain-stun multiple targets in sequence.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['percussive-force'],
        icon: '🔨',
        rankDescription: [
          'When you stun an enemy with a rhythm spell, roll 1d10. On a 9-10, stun another enemy within 10 feet for 1 round.',
          'When you stun an enemy with a rhythm spell, roll 1d10. On a 7-10, stun another enemy within 15 feet for 1 round.',
          'When you stun an enemy with a rhythm spell, roll 1d10. On a 5-10, stun another enemy within 20 feet for 1d4 rounds.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'thunderous-beat',
        name: 'Thunderous Beat',
        description: 'Your rhythm creates a thunderous beat that damages and disorients enemies.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['echo-steps'],
        icon: '⚡',
        rankDescription: [
          'Create a thunderous beat that deals 3d8 damage to all enemies in a 20-foot radius and disorients them, reducing their accuracy by 1d6 × 5% for 1d4 rounds.'
        ]
      },
      {
        id: 'dominant-mastery',
        name: 'Dominant Mastery',
        description: 'Your mastery of Dominant notes allows you to generate them more efficiently.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['rhythmic-control'],
        icon: '🎹',
        rankDescription: [
          'Roll 1d8 when casting any spell. On a 7-8, gain a Dominant note.',
          'Roll 1d8 when casting any spell. On a 6-8, gain a Dominant note.',
          'Roll 1d8 when casting any spell. On a 5-8, gain a Dominant note.'
        ]
      },
      {
        id: 'tempo-control',
        name: 'Tempo Control',
        description: 'Your rhythms can speed up allies or slow down enemies.',
        maxRank: 5,
        position: { row: 2, col: 4 },
        requires: ['hammering-cadence'],
        icon: '⏱️',
        rankDescription: [
          'Your rhythm spells can either increase allies\' speed by 10% or decrease enemies\' speed by 10% for 1d4 rounds.',
          'Your rhythm spells can either increase allies\' speed by 15% or decrease enemies\' speed by 15% for 1d4 rounds.',
          'Your rhythm spells can either increase allies\' speed by 20% or decrease enemies\' speed by 20% for 1d6 rounds.',
          'Your rhythm spells can either increase allies\' speed by 25% or decrease enemies\' speed by 25% for 1d6 rounds.',
          'Your rhythm spells can either increase allies\' speed by 30% or decrease enemies\' speed by 30% for 1d8 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'rhythm-mastery',
        name: 'Rhythm Mastery',
        description: 'Your mastery of rhythm enhances all your musical abilities.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['thunderous-beat', 'dominant-mastery'],
        icon: '🎼',
        rankDescription: [
          'Roll 1d8 when casting any spell. On a 7-8, gain an additional Dominant note.',
          'Roll 1d8 when casting any spell. On a 6-8, gain an additional Dominant note.',
          'Roll 1d8 when casting any spell. On a 5-8, gain an additional Dominant note and your spell\'s effect is enhanced by 20%.'
        ]
      },
      {
        id: 'percussion-finale',
        name: 'Percussion Finale',
        description: 'A powerful rhythmic finale that stuns enemies.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['dominant-mastery', 'tempo-control'],
        icon: '🥁',
        rankDescription: [
          'Perform a percussion finale that consumes all Dominant notes. Each enemy within 30 feet must make a saving throw or be stunned for 1 round per Dominant note consumed.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'performance-amplification',
        name: 'Performance Amplification',
        description: 'Your Performance attribute enhances your rhythm abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['rhythm-mastery'],
        icon: '🎭',
        rankDescription: [
          'Add your Performance modifier to the duration of all your rhythm effects.',
          'Add your Performance modifier to the duration and effectiveness of all your rhythm effects.',
          'Add twice your Performance modifier to the duration and effectiveness of all your rhythm effects.'
        ]
      },
      {
        id: 'symphony-of-control',
        name: 'Symphony of Control',
        description: 'Your ultimate rhythm symphony that controls the battlefield.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['rhythm-mastery', 'percussion-finale'],
        icon: '🎭',
        rankDescription: [
          'Perform a symphony of control for 1d4+2 rounds. During this time, allies within 30 feet gain +50% movement speed and +1 AP per round, while enemies within 30 feet are slowed by 50% and must make a saving throw each round or be stunned for 1 round.'
        ]
      },
      {
        id: 'dominant-cadence',
        name: 'Dominant Cadence',
        description: 'Your Cadence abilities can consume Dominant notes for powerful effects.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['percussion-finale'],
        icon: '🎻',
        rankDescription: [
          'Your Cadence abilities can consume Dominant notes to deal 1d6 additional damage per note consumed to all enemies within 20 feet.',
          'Your Cadence abilities can consume Dominant notes to deal 1d8 additional damage per note consumed to all enemies within 20 feet.',
          'Your Cadence abilities can consume Dominant notes to deal 1d10 additional damage per note consumed to all enemies within 20 feet and stun them for 1 round on a failed save.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'rhythmic-precision',
        name: 'Rhythmic Precision',
        description: 'Your rhythm spells become more precise and effective.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['performance-amplification', 'symphony-of-control'],
        icon: '🎯',
        rankDescription: [
          'Roll 1d10 when casting a rhythm spell. On a 10, the spell automatically succeeds against all targets.',
          'Roll 1d10 when casting a rhythm spell. On a 9-10, the spell automatically succeeds against all targets.',
          'Roll 1d10 when casting a rhythm spell. On an 8-10, the spell automatically succeeds against all targets and its duration is doubled.'
        ]
      },
      {
        id: 'perfect-tempo',
        name: 'Perfect Tempo',
        description: 'Your mastery of tempo allows you to manipulate time itself.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['symphony-of-control', 'dominant-cadence'],
        icon: '⏰',
        rankDescription: [
          'Your rhythm spells can either grant allies an additional action once per 1d4 rounds or force enemies to lose an action once per 1d4 rounds.',
          'Your rhythm spells can either grant allies an additional action once per 1d3 rounds or force enemies to lose an action once per 1d3 rounds.',
          'Your rhythm spells can either grant allies an additional action once per 1d2 rounds or force enemies to lose an action once per 1d2 rounds.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'symphony-of-destruction',
        name: 'Symphony of Destruction',
        description: 'Your ultimate symphony disrupts the very fabric of reality around your enemies.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['rhythmic-precision', 'perfect-tempo'],
        icon: '💥',
        rankDescription: [
          'Perform a symphony of destruction for 1d4+3 rounds. During this time, enemies within 60 feet take 3d10 damage per round, are slowed by 75%, and must make a saving throw each round or be stunned for 1 round. Additionally, allies within 60 feet gain +100% movement speed, +2 AP per round, and deal 2d8 additional damage with all attacks. This ability consumes all your notes and generates one of each note type (Tonic, Subdominant, Dominant) at the end of the symphony.'
        ]
      },
    ],
  },
  {
    id: 'path-of-emotion',
    name: 'Path of Emotion',
    description: 'Focuses on Charisma/Performance and mental effects. Enchant, charm, or terrify enemies.',
    icon: '🎭',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'banshees-ballad',
        name: 'Banshee\'s Ballad',
        description: 'Your songs can instill fear in enemies.',
        maxRank: 5,
        position: { row: 0, col: 0 },
        icon: '👻',
        rankDescription: [
          'Roll 1d20 when casting an emotional spell. On a 19-20, the target becomes frightened for 1 round.',
          'Roll 1d20 when casting an emotional spell. On an 18-20, the target becomes frightened for 1 round.',
          'Roll 1d20 when casting an emotional spell. On a 17-20, the target becomes frightened for 1d4 rounds.',
          'Roll 1d20 when casting an emotional spell. On a 16-20, the target becomes frightened for 1d4 rounds.',
          'Roll 1d20 when casting an emotional spell. On a 15-20, the target becomes frightened for 1d6 rounds.'
        ]
      },
      {
        id: 'subdominant-harmony',
        name: 'Subdominant Harmony',
        description: 'Your emotional spells generate additional Subdominant notes.',
        maxRank: 5,
        position: { row: 0, col: 2 },
        icon: '🎵',
        rankDescription: [
          'Roll 1d6 when casting an emotional spell. On a 6, gain an additional Subdominant note.',
          'Roll 1d6 when casting an emotional spell. On a 5-6, gain an additional Subdominant note.',
          'Roll 1d6 when casting an emotional spell. On a 4-6, gain an additional Subdominant note.',
          'Roll 1d6 when casting an emotional spell. On a 3-6, gain an additional Subdominant note.',
          'Roll 1d6 when casting an emotional spell. On a 2-6, gain an additional Subdominant note.'
        ]
      },
      {
        id: 'charismatic-presence',
        name: 'Charismatic Presence',
        description: 'Your Charisma enhances your emotional spells.',
        maxRank: 5,
        position: { row: 0, col: 4 },
        icon: '✨',
        rankDescription: [
          'Your emotional spells gain +1 to their save DC.',
          'Your emotional spells gain +2 to their save DC.',
          'Your emotional spells gain +3 to their save DC.',
          'Your emotional spells gain +4 to their save DC.',
          'Your emotional spells gain +5 to their save DC.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'song-of-bliss',
        name: 'Song of Bliss',
        description: 'Your songs can put enemies to sleep or pacify them.',
        maxRank: 3,
        position: { row: 1, col: 0 },
        requires: ['banshees-ballad'],
        icon: '💤',
        rankDescription: [
          'Roll 1d20 when casting an emotional spell. On a 19-20, the target falls asleep for 1 round.',
          'Roll 1d20 when casting an emotional spell. On an 18-20, the target falls asleep for 1d4 rounds.',
          'Roll 1d20 when casting an emotional spell. On a 17-20, the target falls asleep for 1d6 rounds or is pacified for 1d4 rounds.'
        ]
      },
      {
        id: 'emotional-resonance',
        name: 'Emotional Resonance',
        description: 'Your Subdominant notes enhance your emotional control.',
        maxRank: 3,
        position: { row: 1, col: 2 },
        requires: ['subdominant-harmony'],
        icon: '🎭',
        rankDescription: [
          'For each Subdominant note you have, your emotional control effects last 1d4 × 5% longer.',
          'For each Subdominant note you have, your emotional control effects last 1d6 × 5% longer.',
          'For each Subdominant note you have, your emotional control effects last 1d8 × 5% longer and are 10% more effective.'
        ]
      },
      {
        id: 'mind-control',
        name: 'Mind Control',
        description: 'Your emotional spells can temporarily control enemies.',
        maxRank: 3,
        position: { row: 1, col: 4 },
        requires: ['charismatic-presence'],
        icon: '🧠',
        rankDescription: [
          'Roll 1d20 when casting an emotional spell. On a 19-20, charm the target for 1 round, making them fight for you.',
          'Roll 1d20 when casting an emotional spell. On an 18-20, charm the target for 1d4 rounds, making them fight for you.',
          'Roll 1d20 when casting an emotional spell. On a 17-20, charm the target for 1d6 rounds, making them fight for you.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'siren-song',
        name: 'Siren Song',
        description: 'A powerful song that charms multiple enemies.',
        maxRank: 1,
        position: { row: 2, col: 0 },
        requires: ['song-of-bliss'],
        icon: '🧜‍♀️',
        rankDescription: [
          'Perform a siren song that forces all enemies within 30 feet to make a Charisma save or be charmed for 1d6 rounds. While charmed, they cannot attack you and may attack their allies.'
        ]
      },
      {
        id: 'subdominant-mastery',
        name: 'Subdominant Mastery',
        description: 'Your mastery of Subdominant notes allows you to generate them more efficiently.',
        maxRank: 3,
        position: { row: 2, col: 2 },
        requires: ['emotional-resonance'],
        icon: '🎹',
        rankDescription: [
          'Roll 1d8 when casting any spell. On a 7-8, gain a Subdominant note.',
          'Roll 1d8 when casting any spell. On a 6-8, gain a Subdominant note.',
          'Roll 1d8 when casting any spell. On a 5-8, gain a Subdominant note.'
        ]
      },
      {
        id: 'emotional-manipulation',
        name: 'Emotional Manipulation',
        description: 'Your songs can manipulate the emotions of enemies.',
        maxRank: 5,
        position: { row: 2, col: 4 },
        requires: ['mind-control'],
        icon: '😵',
        rankDescription: [
          'Your emotional spells can inflict one of the following conditions: frightened, charmed, or confused for 1 round.',
          'Your emotional spells can inflict one of the following conditions: frightened, charmed, or confused for 1d4 rounds.',
          'Your emotional spells can inflict one of the following conditions: frightened, charmed, confused, or pacified for 1d4 rounds.',
          'Your emotional spells can inflict one of the following conditions: frightened, charmed, confused, pacified, or stunned for 1d4 rounds.',
          'Your emotional spells can inflict one of the following conditions: frightened, charmed, confused, pacified, or stunned for 1d6 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'emotion-mastery',
        name: 'Emotion Mastery',
        description: 'Your mastery of emotions enhances all your musical abilities.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['siren-song', 'subdominant-mastery'],
        icon: '🎭',
        rankDescription: [
          'Roll 1d8 when casting any spell. On a 7-8, gain an additional Subdominant note.',
          'Roll 1d8 when casting any spell. On a 6-8, gain an additional Subdominant note.',
          'Roll 1d8 when casting any spell. On a 5-8, gain an additional Subdominant note and your spell\'s effect is enhanced by 20%.'
        ]
      },
      {
        id: 'fugue-of-fear',
        name: 'Fugue of Fear',
        description: 'A haunting ensemble that terrifies foes.',
        maxRank: 1,
        position: { row: 3, col: 3 },
        requires: ['subdominant-mastery', 'emotional-manipulation'],
        icon: '😱',
        rankDescription: [
          'Perform a haunting ensemble that forces all enemies within 30 feet to make a save or be frightened (–2 to attacks and movement) for 2 turns. If you have ≥3 Subdominant notes, expend them to extend the effect to 3 turns.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'charismatic-virtuoso',
        name: 'Charismatic Virtuoso',
        description: 'Your Charisma enhances your emotional abilities.',
        maxRank: 3,
        position: { row: 4, col: 0 },
        requires: ['emotion-mastery'],
        icon: '🎭',
        rankDescription: [
          'Add your Charisma modifier to the duration of all your emotional effects.',
          'Add your Charisma modifier to the duration and effectiveness of all your emotional effects.',
          'Add twice your Charisma modifier to the duration and effectiveness of all your emotional effects.'
        ]
      },
      {
        id: 'symphony-of-emotion',
        name: 'Symphony of Emotion',
        description: 'Your ultimate emotional symphony that controls the minds of enemies.',
        maxRank: 1,
        position: { row: 4, col: 2 },
        requires: ['emotion-mastery', 'fugue-of-fear'],
        icon: '🎻',
        rankDescription: [
          'Perform a symphony of emotion for 1d4+2 rounds. During this time, all enemies within 30 feet must make a Charisma save each round or be affected by one of the following conditions of your choice: frightened, charmed, confused, pacified, or stunned until the start of your next turn.'
        ]
      },
      {
        id: 'subdominant-cadence',
        name: 'Subdominant Cadence',
        description: 'Your Cadence abilities can consume Subdominant notes for powerful effects.',
        maxRank: 3,
        position: { row: 4, col: 4 },
        requires: ['fugue-of-fear'],
        icon: '🎻',
        rankDescription: [
          'Your Cadence abilities can consume Subdominant notes to force enemies to make a Charisma save or be controlled for 1 round per note consumed.',
          'Your Cadence abilities can consume Subdominant notes to force enemies to make a Charisma save with disadvantage or be controlled for 1 round per note consumed.',
          'Your Cadence abilities can consume Subdominant notes to force enemies to make a Charisma save with disadvantage or be controlled for 1d4 rounds per note consumed.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'emotional-virtuosity',
        name: 'Emotional Virtuosity',
        description: 'Your emotional spells become more potent and harder to resist.',
        maxRank: 3,
        position: { row: 5, col: 1 },
        requires: ['charismatic-virtuoso', 'symphony-of-emotion'],
        icon: '🎯',
        rankDescription: [
          'Roll 1d10 when casting an emotional spell. On a 10, the target automatically fails their save against the effect.',
          'Roll 1d10 when casting an emotional spell. On a 9-10, the target automatically fails their save against the effect.',
          'Roll 1d10 when casting an emotional spell. On an 8-10, the target automatically fails their save against the effect and the duration is doubled.'
        ]
      },
      {
        id: 'perfect-harmony',
        name: 'Perfect Harmony',
        description: 'Your mastery of emotional manipulation reaches its peak.',
        maxRank: 3,
        position: { row: 5, col: 3 },
        requires: ['symphony-of-emotion', 'subdominant-cadence'],
        icon: '🎼',
        rankDescription: [
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), you can control one additional enemy per Subdominant note for 1 round.',
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), you can control one additional enemy per Subdominant note for 1d4 rounds.',
          'When you use a Cadence ability with at least one of each note type (Tonic, Subdominant, Dominant), you can control one additional enemy per Subdominant note for 1d6 rounds and they act as if under your direct control.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'symphony-of-domination',
        name: 'Symphony of Domination',
        description: 'Your ultimate symphony bends the minds of all who hear it to your will.',
        maxRank: 1,
        position: { row: 6, col: 2 },
        requires: ['emotional-virtuosity', 'perfect-harmony'],
        icon: '👑',
        rankDescription: [
          'Perform a symphony of domination for 1d4+3 rounds. During this time, all enemies within 60 feet must make a Charisma save with disadvantage each round or fall completely under your control until the start of your next turn. Additionally, allies within 60 feet gain immunity to fear, charm, and confusion effects, and gain +1d12 to Charisma-based checks and saves. This ability consumes all your notes and generates one of each note type (Tonic, Subdominant, Dominant) at the end of the symphony.'
        ]
      },
    ],
  }
];

export default minstrelTalentTrees;
