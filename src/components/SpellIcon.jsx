import React from 'react';
import './SpellIcon.css';

const SpellIcon = ({ classId, spellName }) => {
  // Specific spell-to-icon mapping for Pyrofiend spells
  const getWoWIconId = (name, classId) => {
    if (classId === 'pyrofiend') {
      // Specific spell name to icon ID mapping
      const spellIconMap = {
        // Base Spells - Inferno Attunement
        'Ember Spark': 135808, // Ignite
        'Flickering Flame': 135817, // Scorch
        'Scorching Grasp': 135824, // Dragon's Breath
        'Searing Bolt': 135818, // Fire Blast
        'Blaze Strike': 135825, // Blast Wave
        'Inferno Blast': 135839, // Inferno Blast
        'Fire Shield': 135820, // Fire Shield
        'Flame Whip': 135822, // Flame Wreath
        'Fireball': 135805, // Fireball

        // Base Spells - Wildfire Attunement
        'Living Flame': 135812, // Living Bomb
        'Wildfire Contagion': 136190, // Rain of Fire
        'Chaos Eruption': 136175, // Pyroclasm
        'Pyroclastic Flow': 135831, // Lava Burst

        // Base Spells - Hellfire Attunement
        'Demon\'s Mark': 136195, // Curse of Agony
        'Terrifying Visage': 136157, // Banish
        'Life Drain': 136192, // Soul Burn
        'Hellish Rebuke': 136188, // Searing Pain

        // Intermediate Spells - Inferno Attunement
        'Precision Burn': 135807, // Pyroblast
        'Controlled Immolation': 136197, // Immolate
        'Focused Flame Lance': 135826, // Flamestrike

        // Intermediate Spells - Wildfire Attunement
        'Flame Tornado': 135833, // Fire Nova
        'Elemental Chaos': 136171, // Heat Wave
        'Phoenix Burst': 135816, // Phoenix

        // Intermediate Spells - Hellfire Attunement
        'Hellfire Wave': 136186, // Hellfire
        'Abyssal Flame': 136185, // Shadowflame
        'Demonfire Surge': 136191, // Soul Fire
        'Demonic Possession': 136158, // Enslave Demon
        'Hellgate Portal': 136159, // Ritual of Doom

        // High Tier Spells - Inferno Attunement
        'Perfect Immolation': 135809, // Combustion
        'Eternal Flame': 136176, // Molten Core

        // High Tier Spells - Wildfire Attunement
        'Wildfire Storm': 135838, // Volcanic Eruption
        'Phoenix Rebirth': 135816, // Phoenix (reuse for rebirth theme)

        // High Tier Spells - Hellfire Attunement
        'Cursed Flame': 136194, // Curse of Doom
        'Demon Lord\'s Wrath': 136150, // Summon Infernal
        'Soul Harvest': 136153, // Demonic Sacrifice

        // Universal High Tier
        'Hellstorm': 136170, // Burning Adrenaline
        'Apocalyptic Flame': 135830, // Meteor
        'Meteor Shower': 135830, // Meteor (same icon, different spell)
        'Infernal Avatar': 136151, // Demon Armor

        // Utility Spells - Inferno Attunement
        'Flame Sight': 135829, // Fire Ward
        'Controlled Heat': 135827, // Molten Armor
        'Fire Immunity': 136180, // Infernal Protection

        // Utility Spells - Wildfire Attunement
        'Spark Jump': 135742, // Blink (teleportation theme)
        'Wildfire Mark': 136174, // Ignite Mana
        'Flame Trail': 136173, // Flame Buffet

        // Utility Spells - Hellfire Attunement
        'Demonic Pact': 136154, // Soul Link
        'Soul Shield': 136152, // Demon Skin
        'Infernal Tongue': 136156, // Fel Domination
        'Demon Sight': 136155, // Master Demonologist

        // Venting Abilities
        'Controlled Descent': 135177, // Combustion
        'Infernal Vent': 135837, // Molten Blast
        'Emergency Purge': 136179, // Fire Power
        'Precision Vent': 135818, // Fire Blast (variant)
        'Chaotic Discharge': 135840, // Hellfire Orb
        'Soul Siphon': 136183, // Shadow Burn

        // Universal/Fallback
        'Lava Burst': 135831, // Lava Burst
        'Molten Armor': 135827, // Molten Armor

        // Pyrofiend spells
        'Precision Vent': 135818, // Fire Blast (variant)
        'Chaotic Discharge': 135840, // Hellfire Orb
        'Soul Siphon': 136183, // Shadow Burn
        'Flame Sight': 135829, // Fire Ward
        'Controlled Heat': 135827, // Molten Armor
        'Fire Immunity': 135829, // Fire Ward (immunity theme)
        'Spark Jump': 135742, // Blink (teleportation theme)
        'Wildfire Mark': 136174, // Ignite Mana
        'Flame Trail': 136173, // Flame Buffet
        'Demonic Pact': 136154, // Soul Link
        'Soul Shield': 136152, // Demon Skin
        'Infernal Tongue': 136156, // Fel Domination
        'Demon Sight': 136155, // Master Demonologist
        'Controlled Descent': 135809, // Combustion
        'Infernal Vent': 135837, // Molten Blast
        'Emergency Purge': 135809, // Combustion (purging theme)

        // Minstrel spells - Musical/Sonic themed icons (using known working IDs)
        'Harmonic Strike': 135831, // Lava Burst (sonic attack)
        'Discordant Note': 136207, // Banshee Wail
        'Melodic Healing': 135913, // Heal
        'Power Chord': 135831, // Lava Burst (power)
        'Emotional Resonance': 136207, // Mind Control
        'Minor Resolution': 135736, // Arcane Missiles
        'Inspiring Chord': 135831, // Battle effect
        'Rallying Melody': 135913, // Healing effect
        'Heroic Fanfare': 135831, // Power effect
        'Perfect Cadence': 135736, // Arcane Power
        'Plagal Cadence': 135913, // Healing
        'Steady Beat': 135831, // Rhythmic
        'Driving Rhythm': 136207, // Disruptive
        'Thunderous Beat': 135831, // Thunder
        'Syncopated Strike': 135831, // Strike
        'Melancholy Tune': 136207, // Sad/fear
        'Enchanting Aria': 136207, // Charm
        'Crescendo of Fear': 136207, // Fear
        'Deceptive Cadence': 136207, // Confusion
        'Grand Cadence': 135736, // Ultimate
        'Chord Progression': 135736, // Complex
        'Silence': 136207 // Silence
      };

      return spellIconMap[name] || 135805; // Default to Fireball if not found
    } else if (classId === 'chronarch') {
      // Time/Arcane themed icons - specific mapping
      const chronarchIconMap = {
        'Chrono Bolt': 135932, // Arcane Missiles
        'Time Warp': 135739, // Time Warp
        'Slow': 136116, // Slow
        'Haste': 136208, // Haste
        'Blink': 135742, // Blink
        'Portal': 135741, // Portal
        'Counterspell': 135746, // Counterspell
        'Dispel Magic': 135747, // Dispel Magic
        'Mana Shield': 135736, // Mana Shield
        'Polymorph': 135740, // Polymorph
        'Mirror Image': 135745, // Mirror Image
        'Arcane Power': 135744, // Arcane Power
        'Arcane Intellect': 135735  // Arcane Intellect
      };

      return chronarchIconMap[name] || 135932; // Default to Arcane Missiles
    } else if (classId === 'gambler') {
      // Gambling/Luck themed icons - specific mapping
      const gamblerIconMap = {
        'Heads or Tails': 136208, // Luck/chance
        'Lucky Strike': 132154, // Critical Strike
        'Loaded Dice': 136208, // Luck
        'Suit of Fate': 135736, // Arcane (card magic)
        'Double Down': 136208, // Luck
        'Gambler\'s Trick': 132320, // Stealth/trickery
        'Lucky Charm': 135913, // Blessing/luck
        'Risky Bet': 136230, // Risk/danger
        'Jackpot Spin': 135744, // Arcane Power (spinning)
        'Coin Toss Barrage': 132337, // Multiple attacks
        'Probability Manipulation': 135932, // Arcane manipulation
        'Double or Nothing': 136208, // Luck
        'Snake Eyes\' Gambit': 136230, // Curse/bad luck
        'High Roller\'s Hand': 135744, // Power
        'Fortune\'s Favor': 135913, // Blessing
        'Betting Spree': 136208, // Luck
        'All-In Gambit': 135744, // Ultimate power
        'House Edge': 136230, // Advantage/curse
        'Fate\'s Wheel': 135739 // Time/fate manipulation
      };

      return gamblerIconMap[name] || 136208; // Default to luck icon
    } else if (classId === 'chaos-weaver') {
      // Chaos/Entropy themed icons - specific mapping
      const chaosWeaverIconMap = {
        'Chaotic Bolt': 136171, // Chaos magic
        'Flux Nova': 135833, // Nova/explosion
        'Entropic Shield': 135940, // Shield
        'Entropy Tap': 136230, // Drain/curse
        'Probability Manipulation': 135932, // Arcane manipulation
        'Chaos Orb': 135744, // Arcane orb
        'Dice of Destiny': 136208, // Luck/fate
        'Entropy Storm': 136186, // Storm/chaos
        'Chaos Cascade': 136190, // Cascading effect
        'Quantum Leap': 135742, // Blink/teleport
        'Reality Rift': 135994, // Portal/rift
        'Chaos Vortex': 135833, // Vortex
        'Entropic Decay': 136230, // Decay/curse
        'Flux Burst': 135831, // Burst
        'Chaos Field': 135940 // Field effect
      };

      return chaosWeaverIconMap[name] || 136171; // Default to chaos magic icon
    } else {
      // Default generic spell icons for other classes
      const genericIconMap = {
        // Common spell types
        'heal': 135915, // Heal
        'shield': 135940, // Shield
        'attack': 135561, // Attack
        'buff': 135913, // Blessing
        'debuff': 136230, // Curse
        'summon': 136121, // Summon
        'teleport': 135994, // Teleport
        'stealth': 132320, // Stealth
        'charge': 132337, // Charge
        'block': 132110, // Block
        'parry': 132269, // Parry
        'dodge': 132110, // Dodge
        'critical': 132154, // Critical Strike
        'magic': 135932  // Generic Magic
      };

      // Try to match by spell type/name
      const lowerName = name.toLowerCase();
      for (const [type, iconId] of Object.entries(genericIconMap)) {
        if (lowerName.includes(type)) {
          return iconId;
        }
      }

      return 135932; // Default to generic magic icon
    }
  };

  const iconId = getWoWIconId(spellName, classId);
  const fallbackIconUrl = `https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg`;
  const wowheadIconUrl = `https://wow.zamimg.com/images/wow/icons/large/spell_fire_fireball.jpg`;

  // Map icon IDs to actual WoW icon names (this is a simplified mapping)
  const getIconName = (iconId) => {
    const iconMap = {
      // Classic Fire Spells
      135805: 'spell_fire_fireball',
      135818: 'spell_fire_fireblast',
      135826: 'spell_fire_flamestrike',
      135817: 'spell_fire_soulburn',
      135807: 'spell_fire_fireball02',
      135809: 'spell_fire_sealoffire',
      135830: 'spell_fire_meteorstorm',
      135812: 'spell_fire_incinerate',
      135808: 'spell_fire_flameshock',
      135816: 'spell_fire_phoenix',
      135820: 'spell_fire_fireshield',
      135822: 'spell_fire_flamewreath',
      135824: 'spell_fire_dragonsbreath',
      135825: 'spell_fire_blastwave',
      135827: 'spell_fire_moltenarmor',
      135829: 'spell_fire_fireward',

      // Warlock/Demon Fire Spells
      136197: 'spell_shadow_shadowwordpain',
      136186: 'spell_fire_hellfire',
      136172: 'spell_fire_immolation',
      136184: 'spell_fire_conflagrate',
      136191: 'spell_fire_burnout',
      136183: 'spell_shadow_shadowburn',
      136195: 'spell_shadow_curseofagony',
      136190: 'spell_shadow_rainoffire',
      136188: 'spell_fire_searingpain',
      136185: 'spell_fire_shadowflame',
      136192: 'spell_fire_soulburn',
      136189: 'spell_fire_burningwish',
      136194: 'spell_shadow_curseofdoom',
      136196: 'spell_shadow_curseofmannoroth',

      // Demon/Infernal themed
      136150: 'spell_shadow_summoninfernal',
      136151: 'spell_shadow_demonarmor',
      136152: 'spell_shadow_demonskin',
      136153: 'spell_shadow_demonicsacrifice',
      136154: 'spell_shadow_soullink',
      136155: 'spell_shadow_masterdemonologist',
      136156: 'spell_shadow_feldomination',
      136157: 'spell_shadow_banish',
      136158: 'spell_shadow_enslavedemons',
      136159: 'spell_shadow_ritualofdoom',

      // Additional Fire/Lava themed
      135831: 'spell_fire_lavaburst',
      135832: 'spell_fire_flameshock',
      135833: 'spell_fire_firenova',
      135834: 'spell_fire_magmatotem',
      135835: 'spell_fire_searingtotem',
      135836: 'spell_fire_elemental',
      135837: 'spell_fire_moltenblast',
      135838: 'spell_fire_volcano',
      135839: 'spell_fire_infernoblast',
      135840: 'spell_fire_hellfireorb',

      // Burning/Heat themed
      136170: 'spell_fire_burningadrenaline',
      136171: 'spell_fire_heatwave',
      136173: 'spell_fire_flamebuffet',
      136174: 'spell_fire_ignitemana',
      136175: 'spell_fire_pyroclasm',
      136176: 'spell_fire_moltencore',
      136177: 'spell_fire_combustion',
      136178: 'spell_fire_blazingspeed',
      136179: 'spell_fire_firepower',
      136180: 'spell_fire_infernalprotection',
      135742: 'spell_arcane_blink',

      // Minstrel spell icons - Musical/Sonic themed
      136116: 'ability_thunderclap',
      136164: 'spell_shadow_psychicscream',
      135913: 'spell_holy_heal',
      136115: 'spell_nature_thunderclap',
      136168: 'spell_shadow_charm',
      136129: 'ability_warrior_battleshout',
      136013: 'spell_holy_blessingofstrength',
      136173: 'spell_nature_bloodlust',
      135893: 'spell_holy_prayerofhealing',
      135954: 'spell_holy_greaterheal',
      136105: 'ability_warstomp',
      136122: 'spell_shadow_psychicscream',
      136183: 'spell_shadow_possession',
      135932: 'spell_holy_divinefavor',

      // Additional Minstrel icons
      135737: 'spell_arcane_arcanepotency',
      136117: 'ability_thunderbolt',
      136165: 'spell_shadow_intimidation',
      136118: 'spell_nature_earthquake',
      136169: 'spell_shadow_mindcontrol',
      136184: 'spell_shadow_deathscream',
      136166: 'spell_shadow_confusion',
      135738: 'spell_arcane_arcaneorb',
      135934: 'spell_holy_blessedrecovery',
      136167: 'spell_shadow_silence',

      // Gambler/Luck themed icons
      136208: 'spell_holy_blessedrecovery', // Luck/blessing
      132154: 'ability_criticalstrike', // Critical strike
      132320: 'ability_stealth', // Stealth/trickery
      136230: 'spell_shadow_curseoftongues', // Curse/risk
      132337: 'ability_warrior_charge', // Charge/barrage

      // Chaos Weaver themed icons
      136186: 'spell_fire_hellfire', // Hellfire/storm
      136190: 'spell_fire_rainoffire', // Rain/cascade
      135994: 'spell_arcane_teleportorgrimmar', // Teleport/portal

      // Other class icons (preserved)
      135933: 'spell_nature_starfall',
      135735: 'spell_holy_magicalsentry',
      135744: 'spell_nature_lightning',
      135734: 'spell_frost_frostbolt',
      135739: 'spell_nature_reincarnation',
      136116: 'spell_nature_slow',
      136208: 'spell_nature_bloodlust',
      135736: 'spell_frost_frostarmor02',
      135740: 'spell_nature_polymorph',
      135741: 'spell_arcane_portalorgrimmar',
      135742: 'spell_arcane_blink',
      135743: 'spell_magic_lesserinvisibilty',
      135745: 'spell_frost_frostarmor',
      135746: 'spell_frost_iceshock',
      135747: 'spell_holy_dispelmagic'
    };

    return iconMap[iconId] || 'spell_fire_fireball';
  };

  const iconName = getIconName(iconId);
  const finalIconUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconName}.jpg`;

  return (
    <div className="wow-spell-icon">
      <img
        src={finalIconUrl}
        alt={spellName}
        className="wow-icon-image"
        onError={(e) => {
          // Fallback to question mark icon if the specific icon fails to load
          e.target.src = fallbackIconUrl;
        }}
      />
    </div>
  );
};

export default SpellIcon;
