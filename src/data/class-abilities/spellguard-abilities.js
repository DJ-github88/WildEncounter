// Base spells and abilities for the Spellguard class
const spellguardAbilities = {
  // Class Resource System
  resourceSystem: {
    name: 'Ward Points',
    description: 'Spellguards channel their defensive prowess into Ward Points (WP) – mystical tokens of protective energy. Think of Ward Points as buildable "shield points" that fuel every Spellguard ability. A Spellguard starts each encounter with 0 points and can gain points by casting abjuration/defensive spells or absorbing damage.',
    mechanics: [
      'Gaining Points: Each time you cast a shielding or abjuration spell (e.g., a barrier or magic shield) or fully absorb an enemy spell, you gain Ward Points (+1 per cast, or +1 per die of damage absorbed).',
      'Maximum Points: Your maximum Ward Points equals 2 + Intelligence modifier + half your level (rounded up).',
      'Spending Points: Most core abilities spend Ward Points. For example, an Arcane Bulwark ability might consume 2 Ward Points to create an extra-strong shield.',
      'Burst: When your Ward Points hit maximum capacity, you may vent all points as a reaction—creating a 10-foot pulse that dispels ongoing effects (DC = 8 + Proficiency + Intelligence) and deals force damage equal to WP × d4.'
    ],
    passiveBenefits: {
      name: 'Arcane Aegis',
      description: 'Your constant study of defensive magic grants you natural resistance to arcane forces.',
      effects: [
        'Spell Resistance: You have advantage on saving throws against harmful spells.',
        'Arcane Sense: You can detect magical auras within 30 feet, revealing the presence of active spells and magical effects.',
        'Ward Attunement: You can identify the purpose and strength of any magical barrier or shield you examine for 1 minute.',
        'Defensive Stance: You maintain a minor constant ward, gaining +2 to AC against spell attacks.'
      ]
    }
  },

  // Base Abilities
  baseAbilities: [
    {
      name: 'Sigil Shield',
      cost: {
        actionPoints: 1,
        mana: 0,
        wardPoints: '+1'
      },
      description: 'A cantrip that raises a quick runic barrier for temporary protection.',
      mechanics: 'Raise a runic barrier that grants +2 AC vs. spells for 1 round. This is a quick defensive reaction that costs no mana but builds your ward.',
      effects: [
        { condition: 'Duration', effect: 'The shield lasts for 1 round.' },
        { condition: 'Ward Building', effect: 'Casting this spell grants +1 Ward Point.' }
      ],
      scaling: 'AC bonus = 2 + (INT modifier ÷ 4)'
    },
    {
      name: 'Arcane Shield',
      cost: {
        actionPoints: 2,
        mana: 5,
        wardPoints: '+1'
      },
      description: 'A shimmering dome of arcane energy that intercepts and absorbs incoming attacks.',
      mechanics: 'Create a protective barrier around yourself or an ally within 30 feet. The shield absorbs damage up to a set amount (HP = 2×level + INT modifier) and lasts for 1 round or until depleted.',
      effects: [
        { condition: 'Target', effect: 'Self or one ally within 30 feet.' },
        { condition: 'Duration', effect: 'The shield lasts for 1 round or until its hit points are depleted.' },
        { condition: 'Ward Building', effect: 'Casting this spell grants +1 Ward Point.' }
      ],
      scaling: 'Shield HP = 2 × level + INT modifier'
    },
    {
      name: 'Runic Deflection',
      cost: {
        actionPoints: 2,
        mana: 2,
        wardPoints: 'spend 1'
      },
      description: 'A reaction that imposes disadvantage on incoming spell attacks.',
      mechanics: 'When a ranged spell targets you or an adjacent ally, spend 1 Ward Point to impose disadvantage on the attack roll. This mirrors the effect of a Spellguard Shield.',
      effects: [
        { condition: 'Reaction', effect: 'This ability can be used as a reaction when you or an adjacent ally is targeted by a ranged spell attack.' },
        { condition: 'Ward Cost', effect: 'Spend 1 Ward Point to activate this ability.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Guardian Ward',
      cost: {
        actionPoints: 2,
        mana: 6,
        wardPoints: '+1'
      },
      description: 'Create a stable ward on the ground that protects allies standing within it.',
      mechanics: 'Place a ward on the ground at a target location within 60 feet. Allies standing within the warded zone gain +2 AC against spell attacks and half spell damage. The ward lasts 3 rounds or until destroyed.',
      effects: [
        { condition: 'Area', effect: 'The ward covers a 10-foot radius area.' },
        { condition: 'Duration', effect: 'The ward lasts for 3 rounds or until destroyed (HP = 10 + WP).' },
        { condition: 'Ward Building', effect: 'Casting this spell grants +1 Ward Point.' }
      ],
      scaling: 'Ward HP = 10 + current Ward Points'
    },
    {
      name: 'Absorb Essence',
      cost: {
        actionPoints: 2,
        mana: 3,
        wardPoints: '+2 (+ damage)'
      },
      description: 'A reaction that reduces incoming spell damage and converts it to Ward Points.',
      mechanics: 'As a reaction to being hit by a spell, reduce the incoming damage by 2d6 + Intelligence modifier. Your ward gains +1 Ward Point per die of damage absorbed.',
      effects: [
        { condition: 'Reaction', effect: 'This ability can be used as a reaction when you are hit by a spell.' },
        { condition: 'Damage Reduction', effect: 'Reduce the incoming damage by 2d6 + Intelligence modifier.' },
        { condition: 'Ward Building', effect: 'Gain +1 Ward Point per die of damage absorbed.' }
      ],
      scaling: 'Damage reduction = 2d6 + INT modifier'
    },
    {
      name: 'Reflect Bolt',
      cost: {
        actionPoints: 3,
        mana: 3,
        wardPoints: 'spend 2'
      },
      description: 'Redirect a single-target spell you just blocked at a new target.',
      mechanics: 'When you successfully block a single-target ray or bolt spell, spend 2 Ward Points to redirect it at a new target within 60 feet. The redirected spell uses the original attack roll.',
      effects: [
        { condition: 'Reaction', effect: 'This ability can be used immediately after successfully blocking a single-target spell.' },
        { condition: 'Ward Cost', effect: 'Spend 2 Ward Points to activate this ability.' },
        { condition: 'Range', effect: 'The new target must be within 60 feet of you.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Aegis Step',
      cost: {
        actionPoints: 1,
        mana: 1,
        wardPoints: '+1'
      },
      description: 'A short teleport that leaves a warded tile behind.',
      mechanics: 'Teleport 10 feet and leave a 1-round warded tile at your original position. Allies standing on the tile gain +2 to saving throws against spells.',
      effects: [
        { condition: 'Movement', effect: 'Teleport up to 10 feet to an unoccupied space you can see.' },
        { condition: 'Ward Tile', effect: 'Leave a warded tile at your original position that lasts for 1 round.' },
        { condition: 'Ward Building', effect: 'Casting this spell grants +1 Ward Point.' }
      ],
      scaling: 'Save bonus = 2 + (INT modifier ÷ 4)'
    },
    {
      name: 'Arcane Counter',
      cost: {
        actionPoints: 3,
        mana: 4,
        wardPoints: 'spend 3'
      },
      description: 'A powerful counterspell that can negate enemy magic.',
      mechanics: 'Attempt to counter a spell being cast within 60 feet. Roll an Intelligence check; DC = 10 + spell level. On success, the spell is negated. On failure, the spell still occurs but damage is halved, and you still gain +1 Ward Point.',
      effects: [
        { condition: 'Reaction', effect: 'This ability can be used as a reaction when an enemy within 60 feet casts a spell.' },
        { condition: 'Ward Cost', effect: 'Spend 3 Ward Points to activate this ability.' },
        { condition: 'Success', effect: 'On a successful check, the spell is completely negated.' },
        { condition: 'Failure', effect: 'On a failed check, the spell still occurs but damage is halved, and you gain +1 Ward Point.' }
      ],
      scaling: 'Check = 1d20 + INT modifier'
    },
    {
      name: 'Warded Strike',
      cost: {
        actionPoints: 2,
        mana: 2,
        wardPoints: '0 (optional 1)'
      },
      description: 'A melee attack empowered by your ward energy.',
      mechanics: 'Make a melee attack that deals 1d8 + Intelligence modifier force damage. If your ward currently has at least 1 Ward Point, you can spend 1 Ward Point to add +1d8 damage.',
      effects: [
        { condition: 'Attack', effect: 'Make a melee attack against a target within reach.' },
        { condition: 'Base Damage', effect: 'The attack deals 1d8 + Intelligence modifier force damage.' },
        { condition: 'Ward Enhancement', effect: 'If you have at least 1 Ward Point, you can spend 1 Ward Point to add +1d8 damage.' }
      ],
      scaling: 'Damage = 1d8 + INT modifier (+ 1d8 if Ward Point spent)'
    }
  ],

  // Advanced Abilities
  advancedAbilities: [
    {
      name: 'Spell Mirror',
      cost: {
        actionPoints: 2,
        mana: 5,
        wardPoints: 'spend 3'
      },
      description: 'Intercept and redirect an area spell in a direction of your choice.',
      mechanics: 'Intercept an area spell (cone/line/burst ≤ 30 ft) and rebound it in a direction you choose. Damage dice are halved; secondary effects remain unchanged.',
      effects: [
        { condition: 'Reaction', effect: 'This ability can be used as a reaction when an area spell is cast within 60 feet of you.' },
        { condition: 'Ward Cost', effect: 'Spend 3 Ward Points to activate this ability.' },
        { condition: 'Redirection', effect: 'You can choose the new direction of the spell.' },
        { condition: 'Damage Reduction', effect: 'The damage of the redirected spell is halved.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Runewall',
      cost: {
        actionPoints: 3,
        mana: 6,
        wardPoints: '+2'
      },
      description: 'Conjure a translucent wall of protective energy.',
      mechanics: 'Create a 20-foot long, 10-foot high translucent wall within 60 feet. Allies passing through gain advantage on spell saves next round; enemies take 2d8 + Intelligence modifier force damage. The wall persists for 2 rounds or until shattered.',
      effects: [
        { condition: 'Wall', effect: 'Create a 20-foot long, 10-foot high wall within 60 feet.' },
        { condition: 'Ally Benefit', effect: 'Allies passing through gain advantage on spell saves for 1 round.' },
        { condition: 'Enemy Damage', effect: 'Enemies passing through take 2d8 + Intelligence modifier force damage.' },
        { condition: 'Duration', effect: 'The wall lasts for 2 rounds or until destroyed (HP = 10 + WP).' },
        { condition: 'Ward Building', effect: 'Casting this spell grants +2 Ward Points.' }
      ],
      scaling: 'Damage = 2d8 + INT modifier, Wall HP = 10 + current Ward Points'
    },
    {
      name: 'Perfect Guard',
      cost: {
        actionPoints: 0,
        mana: 0,
        wardPoints: 'special'
      },
      description: 'A passive ability that allows you to negate spell damage when your ward is at maximum.',
      mechanics: 'If your ward is at maximum Ward Points when you would take spell damage, you may vent all Ward Points to negate the damage entirely and convert half of it into healing shared among allies within 15 feet.',
      effects: [
        { condition: 'Passive', effect: 'This ability triggers automatically when conditions are met.' },
        { condition: 'Requirement', effect: 'Your ward must be at maximum Ward Points.' },
        { condition: 'Damage Negation', effect: 'Negate all spell damage you would take.' },
        { condition: 'Healing', effect: 'Convert half the negated damage into healing shared among allies within 15 feet.' },
        { condition: 'Ward Cost', effect: 'Vent all Ward Points to activate this ability.' }
      ],
      scaling: 'Healing = Negated damage ÷ 2, split among allies'
    },
    {
      name: 'Reactive Matrix',
      cost: {
        actionPoints: 1,
        mana: 3,
        wardPoints: 'spend 2'
      },
      description: 'Create a reactive defensive matrix that triggers on successful saves.',
      mechanics: 'Until the start of your next turn, each time you successfully save against a spell, immediately gain a free Runic Deflection against a different target.',
      effects: [
        { condition: 'Duration', effect: 'The matrix lasts until the start of your next turn.' },
        { condition: 'Trigger', effect: 'Each time you successfully save against a spell, gain a free Runic Deflection.' },
        { condition: 'Ward Cost', effect: 'Spend 2 Ward Points to activate this ability.' }
      ],
      scaling: 'N/A'
    },
    {
      name: 'Arcane Singularity',
      cost: {
        actionPoints: 4,
        mana: 8,
        wardPoints: 'spend all'
      },
      description: 'Your ultimate ability that draws in magic and releases it in a devastating burst.',
      mechanics: 'Draw magic in a 30-foot radius for 1 round. Ongoing area spells in the zone end. New spells cast in the zone have their range halved, and you gain +1 Ward Point per spell level absorbed. At the end of the round, release stored power: (5 + WP_spent) d6 force damage to enemies, heal allies by the same amount split evenly. Afterward, Ward Points reset to 0.',
      effects: [
        { condition: 'Duration', effect: 'The singularity lasts for 1 round.' },
        { condition: 'Area', effect: 'The singularity affects a 30-foot radius centered on you.' },
        { condition: 'Spell Disruption', effect: 'Ongoing area spells in the zone end. New spells cast in the zone have their range halved.' },
        { condition: 'Ward Building', effect: 'Gain +1 Ward Point per spell level absorbed.' },
        { condition: 'Release', effect: 'At the end of the round, deal (5 + WP_spent) d6 force damage to enemies and heal allies by the same amount split evenly.' },
        { condition: 'Ward Cost', effect: 'Spend all Ward Points to activate this ability.' }
      ],
      scaling: 'Damage/Healing = (5 + WP_spent) d6'
    }
  ],

  // Talent Tree Abilities
  talentAbilities: {
    aetherWarden: [
      {
        name: 'Bulwark Mastery',
        description: 'Increases maximum Ward Points and shield HP.',
        mechanics: 'Your maximum Ward Points increases by 1-5 (depending on rank) and your shield HP increases by 1d6 to 2d8 per level (depending on rank).',
        requirements: 'Requires points in the Aether Warden talent tree.'
      },
      {
        name: 'Fortified Ward',
        description: 'All Ward-based shields gain extra durability.',
        mechanics: 'Your wards gain +1d4 to +1d12 to absorbed damage (depending on rank) and +1 to +5 to shield AC (depending on rank).',
        requirements: 'Requires points in the Aether Warden talent tree.'
      },
      {
        name: 'Guardian\'s Stance',
        description: 'Protect nearby allies with your wards.',
        mechanics: 'When adjacent to an ally, you can spend 1 Ward Point as a reaction to absorb 1d6 to 2d8 damage (depending on rank) meant for that ally.',
        requirements: 'Requires points in the Aether Warden talent tree.'
      },
      {
        name: 'Resolute Aegis',
        description: 'Gain bonus hit points when activating barriers.',
        mechanics: 'Gain 1d6 to 1d10 temporary hit points (depending on rank) when you activate any barrier ability.',
        requirements: 'Requires Bulwark Mastery.'
      },
      {
        name: 'Immovable Sentinel',
        description: 'Gain temporary immunity when expending all Ward Points.',
        mechanics: 'When you expend all Ward Points, you become temporarily immune to a single spell or gain an automatic save success. This can be used once per short rest.',
        requirements: 'Requires Resolute Aegis and Ward Transfer.'
      },
      {
        name: 'Aegis Bastion',
        description: 'Conjure a massive shield wall or dome to protect allies.',
        mechanics: 'Spend 4 Ward Points to conjure a massive stationary shield wall or dome centered on your position. The Bastion grants all allies inside 50% damage resistance (roll 1d20 for each attack; on 11+, damage is halved) and absorbs spell effects up to 10d10 damage for 3 rounds.',
        requirements: 'Requires Guardian Projection and Ward Mastery.'
      }
    ],
    counterglyph: [
      {
        name: 'Counterspell',
        description: 'Counter an enemy\'s spell as it is being cast.',
        mechanics: 'Spend 1 Ward Point to counter a spell. Roll 1d20 + Intelligence modifier. On 15+ to 11+ (depending on rank), the spell is countered.',
        requirements: 'Requires points in the Counterglyph talent tree.'
      },
      {
        name: 'Disruption Glyph',
        description: 'Create glyphs that automatically counter spells.',
        mechanics: 'Inscribe a glyph that automatically counters the first 1d4 to 1d12 damage (depending on rank) from an enemy spell cast in the area.',
        requirements: 'Requires points in the Counterglyph talent tree.'
      },
      {
        name: 'Aether Reversal',
        description: 'Cause spellcasters to suffer when their spells are deflected.',
        mechanics: 'When you successfully deflect a spell, the attacker suffers disadvantage on their next spellcasting roll or loses 1d4 to 1d12 mana (depending on rank).',
        requirements: 'Requires points in the Counterglyph talent tree.'
      },
      {
        name: 'Meta-Defense',
        description: 'Reduces the AP cost of Reaction abilities.',
        mechanics: 'Reduce the AP cost of Reaction abilities by 1 (minimum 0), making counters quicker and more efficient.',
        requirements: 'Requires Improved Counterspell and Spell Reflection.'
      },
      {
        name: 'Anti-Magic Field',
        description: 'Create a field that suppresses magic.',
        mechanics: 'Spend 3 Ward Points to create a 10-foot radius anti-magic field centered on you for 1d6 rounds. Within the field, spells cannot be cast, magical effects are suppressed, and magical items temporarily lose their properties. Creatures attempting to cast spells within or into the field must roll 1d20; on a 1-15, the spell fails.',
        requirements: 'Requires Spell Reflection and Arcane Overload.'
      },
      {
        name: 'Arcane Reprisal',
        description: 'Ultimate reflection of magical attacks.',
        mechanics: 'Upgrade Reflective Aether so that reflected spells hit at full strength and daze the caster (they lose their next action). Additionally, spend 4 Ward Points to cast Ultimate Counterspell as a reaction, which nullifies a spell and reflects it back at the original caster at full strength.',
        requirements: 'Requires Greater Counterspell and Reflective Aether.'
      }
    ],
    leySentinel: [
      {
        name: 'Leyline Ward',
        description: 'Tether your ward to the earth to create regeneration points.',
        mechanics: 'Tether your ward to a point on the ground. Allies standing on that point regenerate 1d4 to 1d12 mana or 1 Ward Point each round (depending on rank).',
        requirements: 'Requires points in the Ley Sentinel talent tree.'
      },
      {
        name: 'Ensnaring Glyphs',
        description: 'Mark the ground to slow enemy spellcasting.',
        mechanics: 'Mark the ground with glyphs. Enemies ending their turn on a marked space have their next spell slowed (casting time increased by 1d4 to 1d12 AP, depending on rank).',
        requirements: 'Requires points in the Ley Sentinel talent tree.'
      },
      {
        name: 'Sanctified Ground',
        description: 'Create a protective area around yourself when stationary.',
        mechanics: 'When stationary, create a 10-foot radius area that grants allies +1 to +5 to spell saves (depending on rank) and reduces enemy spell damage by 1d4 to 1d12 (depending on rank).',
        requirements: 'Requires points in the Ley Sentinel talent tree.'
      },
      {
        name: 'Field Mastery',
        description: 'Master the creation and manipulation of arcane fields.',
        mechanics: 'Your arcane fields and glyphs last twice as long and cover 50% more area. Additionally, spend 2 Ward Points to create a field that grants allies within it +1d6 to all dice rolls related to spellcasting or spell defense.',
        requirements: 'Requires Arcane Quake and Glyph Mastery.'
      },
      {
        name: 'Dispel Magic',
        description: 'End magical effects within your controlled areas.',
        mechanics: 'Spend 1 Ward Point to end one magical effect within your sanctified ground or glyph area. Roll 1d20 + Intelligence modifier; on a result of 10 + the spell\'s level or higher, the effect ends.',
        requirements: 'Requires Glyph Mastery and Expanded Sanctuary.'
      },
      {
        name: 'Cataclysmic Anchor',
        description: 'Create an ultimate field that traps enemy projectiles.',
        mechanics: 'Spend 5 Ward Points to create a Sanctuary of Wards in an area. This ultimate field dramatically enhances all allied warding, granting allies +3 to all saves vs. magic and regenerating 1d4 Ward Points each turn. Enemy spells cast within or into the field have a 1d20 chance of being trapped (on 11+) and going off harmlessly into the ground.',
        requirements: 'Requires Leyline Manipulation and Ward Sanctuary.'
      }
    ]
  }
};

export default spellguardAbilities;
