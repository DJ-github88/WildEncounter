import React from 'react';
import './ResourceIcon.css';

const ResourceIcon = ({ resourceType, size = 'small' }) => {
  // Map resource types to WoW icon IDs
  const getResourceIconId = (type) => {
    const resourceIconMap = {
      // Core Resources
      'ap': 132337, // Charge (Action Points)
      'mana': 176108, // Mana Potion (Mana)
      'health': 135915, // Heal (Health)
      'cooldown': 135743, // Time Warp (Cooldown)
      
      // Class-Specific Resources
      'ascension': 135818, // Fire Blast (Demonic Ascension)
      'continuum': 135739, // Time Warp (Chronarch Continuum)
      'essenceEchoes': 136230, // Curse (Lichborne Essence Echoes)
      'wardPoints': 135940, // Shield (Spellguard Ward Points)
      'soulCharges': 136123, // Soul Burn (Deathcaller Soul Charges)
      'primalResonance': 136006, // Nature's Touch (Primalist Primal Resonance)
      'guardPoints': 132110, // Block (Dreadnaught Guard Points)
      'heat': 135805, // Fireball (Pyrofiend Heat)
      'combo': 135561, // Attack (Minstrel Combo)
      'voodooEssence': 136121, // Summon (Witch Doctor Voodoo Essence)
      'lunarCharge': 135753, // Moonfire (Lunarch Lunar Charge)
      'spiritCharges': 135913, // Blessing (Exorcist Spirit Charges)
      
      // Procedural Resources
      'cardDraw': 133473, // Playing Card
      'diceRoll': 133877, // Dice
      'coinFlip': 133784, // Coin
      'chaosRoll': 136171, // Chaos Magic
      'luckPoints': 134914, // Lucky Charm
      'riskStacks': 136230, // Curse
      'wager': 133784, // Coin
      'runeSlots': 135932, // Arcane Intellect
      
      // Special Resources
      'note': 135932, // Generic Magic
      'lunar': 135753, // Moonfire
      'spirit': 135913, // Blessing
      'cards': 133473, // Playing Card
      'dice': 133877, // Dice
      'coin': 133784 // Coin
    };

    return resourceIconMap[type] || 135932; // Default to generic magic icon
  };

  const iconId = getResourceIconId(resourceType);
  const iconName = getIconName(iconId);
  const iconUrl = `https://wow.zamimg.com/images/wow/icons/large/${iconName}.jpg`;
  const fallbackUrl = `https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg`;

  // Convert WoW icon ID to filename
  function getIconName(iconId) {
    // This is a simplified mapping - in a real implementation you'd have a complete mapping
    const iconMap = {
      132337: 'ability_warrior_charge',
      135932: 'spell_holy_magicalsentry',
      176108: 'inv_alchemy_elixir_04',
      135915: 'spell_holy_heal',
      135743: 'spell_arcane_blink',
      135818: 'spell_fire_fireblast',
      135739: 'spell_arcane_blink',
      136230: 'spell_shadow_curseoftongues',
      135940: 'spell_holy_devotion',
      136123: 'spell_shadow_soulburn',
      136006: 'spell_nature_naturetouchgrow',
      132110: 'ability_defend',
      135805: 'spell_fire_fireball',
      135561: 'ability_meleedamage',
      136121: 'spell_shadow_animatedead',
      135753: 'spell_nature_starfall',
      135913: 'spell_holy_blessedrecovery',
      133473: 'inv_misc_note_01',
      133877: 'inv_misc_dice_01',
      133784: 'inv_misc_coin_01',
      136171: 'spell_shadow_chilltouch',
      134914: 'inv_misc_gem_pearl_05'
    };

    return iconMap[iconId] || 'spell_holy_magicalsentry';
  }

  const sizeClass = size === 'large' ? 'resource-icon-large' : 'resource-icon-small';

  return (
    <div className={`resource-icon ${sizeClass}`}>
      <img
        src={iconUrl}
        alt={resourceType}
        className="resource-icon-image"
        onError={(e) => {
          e.target.src = fallbackUrl;
        }}
      />
    </div>
  );
};

export default ResourceIcon;
