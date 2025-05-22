// Talent trees for the Spellguard class
const spellguardTalentTrees = [
  {
    id: 'aether-warden',
    name: 'Aether Warden',
    description: 'Focus on maximizing raw defenses and interposing shields between foes and friends.',
    icon: '🛡️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'bulwark-mastery',
        name: 'Bulwark Mastery',
        description: 'Increases maximum Ward Charges and shield HP.',
        maxRank: 5,
        position: { row: 0, col: 1 }, // Pyramid base left
        icon: '✨',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Increase your maximum Ward Charges by 1 and your shield HP by 1d6 per level.',
          'Increase your maximum Ward Charges by 2 and your shield HP by 1d8 per level.',
          'Increase your maximum Ward Charges by 3 and your shield HP by 1d10 per level.',
          'Increase your maximum Ward Charges by 4 and your shield HP by 1d12 per level.',
          'Increase your maximum Ward Charges by 5 and your shield HP by 2d8 per level.'
        ]
      },
      {
        id: 'fortified-ward',
        name: 'Fortified Ward',
        description: 'All Ward-based shields gain extra durability.',
        maxRank: 5,
        position: { row: 0, col: 3 }, // Pyramid base center
        icon: '🔮',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Your wards gain +1d4 to absorbed damage and +1 to shield AC.',
          'Your wards gain +1d6 to absorbed damage and +2 to shield AC.',
          'Your wards gain +1d8 to absorbed damage and +3 to shield AC.',
          'Your wards gain +1d10 to absorbed damage and +4 to shield AC.',
          'Your wards gain +1d12 to absorbed damage and +5 to shield AC.'
        ]
      },
      {
        id: 'guardians-stance',
        name: 'Guardian\'s Stance',
        description: 'Protect nearby allies with your wards.',
        maxRank: 5,
        position: { row: 0, col: 5 }, // Pyramid base right
        icon: '🛡️',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When adjacent to an ally, you can spend 1 Ward Charge as a reaction to absorb 1d6 damage meant for that ally.',
          'When adjacent to an ally, you can spend 1 Ward Charge as a reaction to absorb 1d8 damage meant for that ally.',
          'When adjacent to an ally, you can spend 1 Ward Charge as a reaction to absorb 1d10 damage meant for that ally.',
          'When adjacent to an ally, you can spend 1 Ward Charge as a reaction to absorb 1d12 damage meant for that ally.',
          'When adjacent to an ally, you can spend 1 Ward Charge as a reaction to absorb 2d8 damage meant for that ally.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'resolute-aegis',
        name: 'Resolute Aegis',
        description: 'Gain bonus hit points when activating barriers.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Second row left
        requires: ['bulwark-mastery'],
        icon: '🔄',
        rankDescription: [
          'Gain 1d6 temporary hit points when you activate any barrier ability.',
          'Gain 1d8 temporary hit points when you activate any barrier ability.',
          'Gain 1d10 temporary hit points when you activate any barrier ability.'
        ]
      },
      {
        id: 'ward-transfer',
        name: 'Ward Transfer',
        description: 'Transfer protective energy to allies.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Second row right
        requires: ['fortified-ward'],
        icon: '↩️',
        rankDescription: [
          'Transfer half your ward\'s HP to an ally, granting them 1d6 temporary hit points.',
          'Transfer half your ward\'s HP to an ally, granting them 1d8 temporary hit points.',
          'Transfer half your ward\'s HP to an ally, granting them 1d10 temporary hit points.'
        ]
      },
      {
        id: 'absorb-magic',
        name: 'Absorb Magic',
        description: 'Absorb incoming spell damage to gain Ward Charges.',
        maxRank: 3,
        position: { row: 1, col: 6 }, // Second row far right
        requires: ['guardians-stance'],
        icon: '🔋',
        rankDescription: [
          'When hit by a spell, absorb 1d6 of the damage and gain 1 Ward Charge.',
          'When hit by a spell, absorb 1d8 of the damage and gain 1 Ward Charge.',
          'When hit by a spell, absorb 1d10 of the damage and gain 1 Ward Charge.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'immovable-sentinel',
        name: 'Immovable Sentinel',
        description: 'Gain temporary immunity when expending all Ward Charges.',
        maxRank: 1,
        position: { row: 2, col: 3 }, // Third row center
        requires: ['resolute-aegis', 'ward-transfer'],
        icon: '🏛️',
        rankDescription: [
          'When you expend all Ward Charges, you become temporarily immune to a single spell or gain an automatic save success. This can be used once per short rest.'
        ]
      },
      {
        id: 'arcane-bulwark',
        name: 'Arcane Bulwark',
        description: 'Create an extra-strong shield by consuming Ward Charges.',
        maxRank: 1,
        position: { row: 2, col: 5 }, // Third row right
        requires: ['ward-transfer'],
        icon: '🌀',
        rankDescription: [
          'Consume 2 Ward Charges to create a powerful shield that grants 2d8 + Intelligence modifier bonus HP and grants advantage on magic saves for 1d4 rounds.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'guardian-projection',
        name: 'Guardian Projection',
        description: 'Project your wards to protect distant allies.',
        maxRank: 3,
        position: { row: 3, col: 2 }, // Fourth row left
        requires: ['immovable-sentinel'],
        icon: '👐',
        rankDescription: [
          'Project your ward to an ally within 30 feet, allowing them to benefit from your ward for 1d4 rounds.',
          'Project your ward to an ally within 60 feet, allowing them to benefit from your ward for 1d6 rounds.',
          'Project your ward to up to two allies within 60 feet, allowing them to benefit from your ward for 1d8 rounds.'
        ]
      },
      {
        id: 'ward-mastery',
        name: 'Ward Mastery',
        description: 'Your mastery of wards grants you powerful defensive abilities.',
        maxRank: 3,
        position: { row: 3, col: 4 }, // Fourth row right
        requires: ['arcane-bulwark'],
        icon: '🔰',
        rankDescription: [
          'Your wards now regenerate 1d4 HP per round and you gain 1 Ward Charge whenever you cast a defensive spell.',
          'Your wards now regenerate 1d6 HP per round and you gain 1 Ward Charge whenever you cast a defensive spell or are targeted by a spell.',
          'Your wards now regenerate 1d8 HP per round and you gain 1 Ward Charge whenever you cast a defensive spell, are targeted by a spell, or an ally within 30 feet is targeted by a spell.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'aegis-bastion',
        name: 'Aegis Bastion',
        description: 'Conjure a massive shield wall or dome to protect allies.',
        maxRank: 1,
        position: { row: 4, col: 3 }, // Fifth row center (pyramid top)
        requires: ['guardian-projection', 'ward-mastery'],
        icon: '🏰',
        rankDescription: [
          'Spend 4 Ward Charges to conjure a massive stationary shield wall or dome centered on your position. The Bastion grants all allies inside 50% damage resistance (roll 1d20 for each attack; on 11+, damage is halved) and absorbs spell effects up to 10d10 damage for 3 rounds.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'wardens-dominion',
        name: 'Warden\'s Dominion',
        description: 'Your mastery of wards allows you to create multiple protective barriers simultaneously.',
        maxRank: 1,
        position: { row: 5, col: 2 }, // Sixth row left
        requires: ['aegis-bastion'],
        icon: '🔱',
        rankDescription: [
          'You can maintain up to three different ward effects simultaneously without concentration. Additionally, when you cast a ward spell, roll 1d20. On a 15+, you regain 1d4 Ward Charges immediately.'
        ]
      },
      {
        id: 'arcane-resilience',
        name: 'Arcane Resilience',
        description: 'Your constant exposure to magical energies has made you highly resistant to harmful spells.',
        maxRank: 1,
        position: { row: 5, col: 4 }, // Sixth row right
        requires: ['aegis-bastion'],
        icon: '🧿',
        rankDescription: [
          'Gain resistance to all magical damage types. When you would take magical damage, roll 1d20. On a 12+, you take half damage. Additionally, you can spend 2 Ward Charges to automatically succeed on a saving throw against a spell effect.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'eternal-aegis',
        name: 'Eternal Aegis',
        description: 'The ultimate expression of warding magic, creating an impenetrable barrier that can protect an entire battlefield.',
        maxRank: 1,
        position: { row: 6, col: 3 }, // Seventh row center (pyramid peak)
        requires: ['wardens-dominion', 'arcane-resilience'],
        icon: '👑',
        rankDescription: [
          'Once per day, spend 10 Ward Charges to create an Eternal Aegis that lasts for 1d6+2 rounds. This ultimate barrier extends in a 60-foot radius around you, granting all allies complete immunity to one damage type of your choice and resistance to all other damage types. Additionally, allies within the Aegis gain +2d8 temporary hit points each round and cannot be affected by harmful status effects. Enemy spells cast into the Aegis must succeed on a spell penetration check (DC 15 + your Intelligence modifier) or be completely negated.'
        ]
      },
    ],
  },
  {
    id: 'counterglyph',
    name: 'Counterglyph',
    description: 'Excel at turning enemy magic back on itself and disrupting spells.',
    icon: '↩️',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'counterspell',
        name: 'Counterspell',
        description: 'Counter an enemy\'s spell as it is being cast.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Center top
        icon: '❌',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Spend 1 Ward Charge to counter a spell. Roll 1d20 + Intelligence modifier. On 15+, the spell is countered.',
          'Spend 1 Ward Charge to counter a spell. Roll 1d20 + Intelligence modifier. On 14+, the spell is countered.',
          'Spend 1 Ward Charge to counter a spell. Roll 1d20 + Intelligence modifier. On 13+, the spell is countered.',
          'Spend 1 Ward Charge to counter a spell. Roll 1d20 + Intelligence modifier. On 12+, the spell is countered.',
          'Spend 1 Ward Charge to counter a spell. Roll 1d20 + Intelligence modifier. On 11+, the spell is countered.'
        ]
      },
      {
        id: 'disruption-glyph',
        name: 'Disruption Glyph',
        description: 'Create glyphs that automatically counter spells.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Left top
        icon: '🔣',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Inscribe a glyph that automatically counters the first 1d4 damage from an enemy spell cast in the area.',
          'Inscribe a glyph that automatically counters the first 1d6 damage from an enemy spell cast in the area.',
          'Inscribe a glyph that automatically counters the first 1d8 damage from an enemy spell cast in the area.',
          'Inscribe a glyph that automatically counters the first 1d10 damage from an enemy spell cast in the area.',
          'Inscribe a glyph that automatically counters the first 1d12 damage from an enemy spell cast in the area.'
        ]
      },
      {
        id: 'aether-reversal',
        name: 'Aether Reversal',
        description: 'Cause spellcasters to suffer when their spells are deflected.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Right top
        icon: '🔄',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d4 mana.',
          'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d6 mana.',
          'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d8 mana.',
          'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d10 mana.',
          'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d12 mana.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'improved-counterspell',
        name: 'Improved Counterspell',
        description: 'Your counterspell becomes more effective.',
        maxRank: 3,
        position: { row: 1, col: 1 }, // Left middle
        requires: ['counterspell'],
        icon: '⚡',
        rankDescription: [
          'Add 1d4 to your counterspell checks and reduce the Ward Charge cost by 1 (minimum 0) on a successful counter.',
          'Add 1d6 to your counterspell checks and reduce the Ward Charge cost by 1 (minimum 0) on a successful counter.',
          'Add 1d8 to your counterspell checks and reduce the Ward Charge cost by 1 (minimum 0) on a successful counter.'
        ]
      },
      {
        id: 'spell-reflection',
        name: 'Spell Reflection',
        description: 'Reflect spells back at their caster.',
        maxRank: 3,
        position: { row: 1, col: 3 }, // Right middle
        requires: ['counterspell'],
        icon: '🪞',
        rankDescription: [
          'When you successfully counter a spell, roll 1d20. On 18-20, the spell is reflected back at the caster.',
          'When you successfully counter a spell, roll 1d20. On 16-20, the spell is reflected back at the caster.',
          'When you successfully counter a spell, roll 1d20. On 14-20, the spell is reflected back at the caster.'
        ]
      },
      {
        id: 'arcane-overload',
        name: 'Arcane Overload',
        description: 'Add force damage to counterattacks based on Ward Charges.',
        maxRank: 3,
        position: { row: 2, col: 0 }, // Far left
        requires: ['disruption-glyph'],
        icon: '💥',
        rankDescription: [
          'For each Ward Charge spent, add 1d4 force damage to counterattack spells.',
          'For each Ward Charge spent, add 1d6 force damage to counterattack spells.',
          'For each Ward Charge spent, add 1d8 force damage to counterattack spells.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'meta-defense',
        name: 'Meta-Defense',
        description: 'Reduces the AP cost of Reaction abilities.',
        maxRank: 1,
        position: { row: 2, col: 2 }, // Center
        requires: ['improved-counterspell'],
        icon: '⏱️',
        rankDescription: [
          'Reduce the AP cost of Reaction abilities by 1 (minimum 0), making counters quicker and more efficient.'
        ]
      },
      {
        id: 'anti-magic-field',
        name: 'Anti-Magic Field',
        description: 'Create a field that suppresses magic.',
        maxRank: 1,
        position: { row: 2, col: 4 }, // Far right
        requires: ['aether-reversal'],
        icon: '🌀',
        rankDescription: [
          'Spend 3 Ward Charges to create a 10-foot radius anti-magic field centered on you for 1d6 rounds. Within the field, spells cannot be cast, magical effects are suppressed, and magical items temporarily lose their properties. Creatures attempting to cast spells within or into the field must roll 1d20; on a 1-15, the spell fails.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'greater-counterspell',
        name: 'Greater Counterspell',
        description: 'Counter multiple spells at once.',
        maxRank: 3,
        position: { row: 3, col: 1 }, // Bottom left
        requires: ['meta-defense'],
        icon: '⛔',
        rankDescription: [
          'Spend 2 Ward Charges to counter all spells cast within 30 feet of you until the start of your next turn. Roll 1d20 + Intelligence modifier for each spell; on 15+, the spell is countered.',
          'Spend 2 Ward Charges to counter all spells cast within 40 feet of you until the start of your next turn. Roll 1d20 + Intelligence modifier for each spell; on 14+, the spell is countered.',
          'Spend 2 Ward Charges to counter all spells cast within 50 feet of you until the start of your next turn. Roll 1d20 + Intelligence modifier for each spell; on 13+, the spell is countered.'
        ]
      },
      {
        id: 'reflective-aether',
        name: 'Reflective Aether',
        description: 'Channel wards into a mirror of pure energy.',
        maxRank: 3,
        position: { row: 3, col: 3 }, // Bottom right
        requires: ['anti-magic-field'],
        icon: '🪞',
        rankDescription: [
          'Spend 2 Ward Charges to create a reflective aether for 1d4 rounds. Any magical attack targeted at you is reflected back at 50% strength toward the caster.',
          'Spend 2 Ward Charges to create a reflective aether for 1d6 rounds. Any magical attack targeted at you is reflected back at 50% strength toward the caster.',
          'Spend 2 Ward Charges to create a reflective aether for 1d8 rounds. Any magical attack targeted at you is reflected back at 50% strength toward the caster.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'arcane-reprisal',
        name: 'Arcane Reprisal',
        description: 'Ultimate reflection of magical attacks.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Bottom center (circle complete)
        requires: ['greater-counterspell', 'reflective-aether'],
        icon: '⚡',
        rankDescription: [
          'Upgrade Reflective Aether so that reflected spells hit at full strength and daze the caster (they lose their next action). Additionally, spend 4 Ward Charges to cast Ultimate Counterspell as a reaction, which nullifies a spell and reflects it back at the original caster at full strength.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'spell-negation-field',
        name: 'Spell Negation Field',
        description: 'Create a field that negates all spells cast within it.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Outer circle left
        requires: ['arcane-reprisal'],
        icon: '🌐',
        rankDescription: [
          'Spend 5 Ward Charges to create a 20-foot radius field centered on you that lasts for 1d4+1 rounds. Within this field, all spells cast by enemies automatically fail, and enemy spellcasters must make a DC 15 Intelligence save or lose 1d8 mana each time they attempt to cast a spell.'
        ]
      },
      {
        id: 'mana-drain',
        name: 'Mana Drain',
        description: 'Drain mana from enemy spellcasters when you counter their spells.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Outer circle right
        requires: ['arcane-reprisal'],
        icon: '🧪',
        rankDescription: [
          'When you successfully counter a spell, you drain 1d10 mana from the caster and gain half that amount yourself. Additionally, the caster must make a DC 15 Intelligence save or be unable to cast spells of that level or higher for 1d4 rounds.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'arcane-nullifier',
        name: 'Arcane Nullifier',
        description: 'Become a living nullification field, capable of shutting down all magic in your vicinity.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Center of outer circle
        requires: ['spell-negation-field', 'mana-drain'],
        icon: '🔮',
        rankDescription: [
          'Once per day, spend all your Ward Charges to become an Arcane Nullifier for 1d6 rounds. While in this state, you automatically counter any spell cast within 60 feet of you without spending AP or mana. Additionally, enemy spellcasters within this range must succeed on a DC 20 Intelligence save at the start of their turn or be unable to cast spells until the start of their next turn. For each spell you counter in this way, you regain 1d4 Ward Charges and deal 2d10 force damage to the caster.'
        ]
      },
    ],
  },
  {
    id: 'ley-sentinel',
    name: 'Ley Sentinel',
    description: 'Leverages battlefield control and area denial through arcane fields and runes.',
    icon: '📚',
    talents: [
      // Tier 1 (Level 10)
      {
        id: 'leyline-ward',
        name: 'Leyline Ward',
        description: 'Tether your ward to the earth to create regeneration points.',
        maxRank: 5,
        position: { row: 0, col: 0 }, // Grid left
        icon: '🔍',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d4 mana or 1 Ward Charge each round.',
          'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d6 mana or 1 Ward Charge each round.',
          'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d8 mana or 1 Ward Charge each round.',
          'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d10 mana or 1 Ward Charge each round.',
          'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d12 mana or 1 Ward Charge each round.'
        ]
      },
      {
        id: 'ensnaring-glyphs',
        name: 'Ensnaring Glyphs',
        description: 'Mark the ground to slow enemy spellcasting.',
        maxRank: 5,
        position: { row: 0, col: 2 }, // Grid center
        icon: '✨',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d4 AP).',
          'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d6 AP).',
          'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d8 AP).',
          'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d10 AP).',
          'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d12 AP).'
        ]
      },
      {
        id: 'sanctified-ground',
        name: 'Sanctified Ground',
        description: 'Create a protective area around yourself when stationary.',
        maxRank: 5,
        position: { row: 0, col: 4 }, // Grid right
        icon: '🧠',
        requires: [], // Empty array to indicate no prerequisites
        rankDescription: [
          'When stationary, create a 10-foot radius area that grants allies +1 to spell saves and reduces enemy spell damage by 1d4.',
          'When stationary, create a 10-foot radius area that grants allies +2 to spell saves and reduces enemy spell damage by 1d6.',
          'When stationary, create a 10-foot radius area that grants allies +3 to spell saves and reduces enemy spell damage by 1d8.',
          'When stationary, create a 10-foot radius area that grants allies +4 to spell saves and reduces enemy spell damage by 1d10.',
          'When stationary, create a 10-foot radius area that grants allies +5 to spell saves and reduces enemy spell damage by 1d12.'
        ]
      },

      // Tier 2 (Level 20)
      {
        id: 'arcane-quake',
        name: 'Arcane Quake',
        description: 'Break your ward to unleash a shockwave.',
        maxRank: 3,
        position: { row: 1, col: 0 }, // Grid left
        requires: ['leyline-ward'],
        icon: '🌋',
        rankDescription: [
          'Once per encounter, break your ward to unleash a shockwave that deals 2d6 force damage and disrupts spellcasting in a 15-foot radius.',
          'Once per encounter, break your ward to unleash a shockwave that deals 3d6 force damage and disrupts spellcasting in a 20-foot radius.',
          'Once per encounter, break your ward to unleash a shockwave that deals 4d6 force damage and disrupts spellcasting in a 25-foot radius.'
        ]
      },
      {
        id: 'glyph-mastery',
        name: 'Glyph Mastery',
        description: 'Create more powerful and versatile glyphs.',
        maxRank: 3,
        position: { row: 1, col: 2 }, // Grid center
        requires: ['ensnaring-glyphs'],
        icon: '🔣',
        rankDescription: [
          'Your glyphs now also deal 1d6 force damage to enemies that trigger them and last for 1d4 additional rounds.',
          'Your glyphs now also deal 1d8 force damage to enemies that trigger them and last for 1d6 additional rounds.',
          'Your glyphs now also deal 1d10 force damage to enemies that trigger them and last for 1d8 additional rounds.'
        ]
      },
      {
        id: 'expanded-sanctuary',
        name: 'Expanded Sanctuary',
        description: 'Increase the size and power of your sanctified ground.',
        maxRank: 3,
        position: { row: 1, col: 4 }, // Grid right
        requires: ['sanctified-ground'],
        icon: '⭕',
        rankDescription: [
          'Your sanctified ground radius increases to 15 feet and now also grants allies 1d4 temporary hit points each round.',
          'Your sanctified ground radius increases to 20 feet and now also grants allies 1d6 temporary hit points each round.',
          'Your sanctified ground radius increases to 25 feet and now also grants allies 1d8 temporary hit points each round.'
        ]
      },

      // Tier 3 (Level 30)
      {
        id: 'field-mastery',
        name: 'Field Mastery',
        description: 'Master the creation and manipulation of arcane fields.',
        maxRank: 1,
        position: { row: 2, col: 1 },
        requires: ['arcane-quake', 'glyph-mastery'],
        icon: '🌐',
        rankDescription: [
          'Your arcane fields and glyphs last twice as long and cover 50% more area. Additionally, spend 2 Ward Charges to create a field that grants allies within it +1d6 to all dice rolls related to spellcasting or spell defense.'
        ]
      },
      {
        id: 'dispel-magic',
        name: 'Dispel Magic',
        description: 'End magical effects within your controlled areas.',
        maxRank: 1,
        position: { row: 2, col: 3 },
        requires: ['glyph-mastery', 'expanded-sanctuary'],
        icon: '🚫',
        rankDescription: [
          'Spend 1 Ward Charge to end one magical effect within your sanctified ground or glyph area. Roll 1d20 + Intelligence modifier; on a result of 10 + the spell\'s level or higher, the effect ends.'
        ]
      },

      // Tier 4 (Level 40)
      {
        id: 'leyline-manipulation',
        name: 'Leyline Manipulation',
        description: 'Manipulate the leylines to enhance your arcane fields.',
        maxRank: 3,
        position: { row: 3, col: 1 },
        requires: ['field-mastery'],
        icon: '🧿',
        rankDescription: [
          'Your leyline wards now also grant 1d6 bonus damage to all spells cast by allies standing on them.',
          'Your leyline wards now also grant 1d8 bonus damage to all spells cast by allies standing on them and reduce enemy spell damage by 1d6.',
          'Your leyline wards now also grant 1d10 bonus damage to all spells cast by allies standing on them and reduce enemy spell damage by 1d8.'
        ]
      },
      {
        id: 'ward-sanctuary',
        name: 'Ward Sanctuary',
        description: 'Create a powerful sanctuary that enhances your ward abilities.',
        maxRank: 3,
        position: { row: 3, col: 3 },
        requires: ['dispel-magic'],
        icon: '🏛️',
        rankDescription: [
          'Your sanctified ground now generates 1 Ward Charge for you every 1d4 rounds and allows allies within to reroll 1s on spell damage dice.',
          'Your sanctified ground now generates 1 Ward Charge for you every 1d3 rounds and allows allies within to reroll 1s and 2s on spell damage dice.',
          'Your sanctified ground now generates 1 Ward Charge for you every round and allows allies within to reroll 1s, 2s, and 3s on spell damage dice.'
        ]
      },

      // Tier 5 (Level 50)
      {
        id: 'cataclysmic-anchor',
        name: 'Cataclysmic Anchor',
        description: 'Create an ultimate field that traps enemy projectiles.',
        maxRank: 1,
        position: { row: 4, col: 2 }, // Grid center
        requires: ['leyline-manipulation', 'ward-sanctuary'],
        icon: '⚓',
        rankDescription: [
          'Spend 5 Ward Charges to create a Sanctuary of Wards in an area. This ultimate field dramatically enhances all allied warding, granting allies +3 to all saves vs. magic and regenerating 1d4 Ward Charges each turn. Enemy spells cast within or into the field have a 1d20 chance of being trapped (on 11+) and going off harmlessly into the ground.'
        ]
      },

      // Tier 6 (Level 60)
      {
        id: 'leyline-nexus',
        name: 'Leyline Nexus',
        description: 'Create a powerful nexus of leyline energy that enhances all magical effects.',
        maxRank: 1,
        position: { row: 5, col: 1 }, // Grid left
        requires: ['cataclysmic-anchor'],
        icon: '🌟',
        rankDescription: [
          'Spend 6 Ward Charges to create a Leyline Nexus at a point within 60 feet. The nexus lasts for 1d6 rounds and creates a 30-foot radius field. Allies within the field gain +1d8 to all spell damage rolls, +2 to spell save DCs, and regenerate 1d6 mana each round. Additionally, you can teleport to any point within the nexus as a free action once per round.'
        ]
      },
      {
        id: 'arcane-dominance',
        name: 'Arcane Dominance',
        description: 'Dominate the battlefield by controlling the flow of magical energy.',
        maxRank: 1,
        position: { row: 5, col: 3 }, // Grid right
        requires: ['cataclysmic-anchor'],
        icon: '👑',
        rankDescription: [
          'Your control over magical energy becomes absolute. Spend 3 Ward Charges to redirect any spell cast within 60 feet to a new target of your choice. Additionally, when an enemy casts a spell within your sanctified ground, you can spend 2 Ward Charges to gain control of the spell, allowing you to determine its effects as if you had cast it yourself.'
        ]
      },

      // Tier 7 (Level 70)
      {
        id: 'arcane-singularity',
        name: 'Arcane Singularity',
        description: 'Create a singularity of pure magical energy that warps the fabric of reality.',
        maxRank: 1,
        position: { row: 6, col: 2 }, // Grid center bottom
        requires: ['leyline-nexus', 'arcane-dominance'],
        icon: '🌌',
        rankDescription: [
          'Once per day, spend all your Ward Charges to create an Arcane Singularity at a point within 100 feet. The singularity lasts for 1d4+2 rounds and creates a 50-foot radius field of warped reality. Within this field, you control all magical effects. Enemy spells automatically fail unless the caster succeeds on a DC 20 Intelligence save. Allied spells are empowered, dealing maximum damage and affecting targets as if they had failed their saving throws. Additionally, at the start of your turn, all enemies within the field take 3d10 force damage and are pulled 10 feet toward the center of the singularity.'
        ]
      },
    ],
  }
];

export default spellguardTalentTrees;
