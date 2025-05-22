import React from 'react';
import './SpellIcon.css';

const SpellIcon = ({ classId, spellName }) => {
  // Generate a consistent color based on the spell name
  const generateColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Class-specific color ranges
    let hue;
    if (classId === 'pyrofiend') {
      // Red to orange range for Pyrofiend
      hue = (hash % 60) + 0; // 0-60 is red to orange/yellow
    } else if (classId === 'chronarch') {
      // Blue to cyan range for Chronarch
      hue = (hash % 60) + 180; // 180-240 is cyan to blue
    } else if (classId === 'minstrel') {
      // Purple to pink range for Minstrel
      hue = (hash % 60) + 270; // 270-330 is purple to pink
    } else if (classId === 'chaos-weaver') {
      // Rainbow/chaotic range for Chaos Weaver - more varied
      hue = hash % 360; // Full spectrum for chaos
    } else if (classId === 'fate-weaver') {
      // Gold to red range for Fate Weaver - card-like colors
      hue = (hash % 60) + 30; // 30-90 is gold/yellow to red
    } else if (classId === 'gambler') {
      // Green to teal range for Gambler - money/casino colors
      hue = (hash % 60) + 120; // 120-180 is green to teal
    } else if (classId === 'martyr') {
      // Crimson to purple range for Martyr - blood and sacrifice colors
      hue = (hash % 60) + 330; // 330-30 is crimson to purple
    } else if (classId === 'false-prophet') {
      // Gold to amber range for False Prophet - false divinity colors
      hue = (hash % 60) + 40; // 40-100 is gold to amber
    } else if (classId === 'exorcist') {
      // Silver to blue range for Exorcist - holy and purifying colors
      hue = (hash % 60) + 210; // 210-270 is silver to blue
    } else if (classId === 'deathcaller') {
      // Dark purple to black range for Deathcaller - necromantic colors
      hue = (hash % 60) + 270; // 270-330 is purple to dark purple
    } else if (classId === 'plaguebringer') {
      // Sickly green to yellow range for Plaguebringer - disease colors
      hue = (hash % 60) + 90; // 90-150 is yellow-green to green
    } else {
      // Default range
      hue = hash % 360;
    }

    const saturation = 70 + (hash % 30);
    const lightness = 40 + (hash % 20);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Generate a glow color (lighter version of the main color)
  const generateGlowColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Class-specific color ranges with higher lightness
    let hue;
    if (classId === 'pyrofiend') {
      hue = (hash % 60) + 0;
    } else if (classId === 'chronarch') {
      hue = (hash % 60) + 180;
    } else if (classId === 'minstrel') {
      hue = (hash % 60) + 270;
    } else if (classId === 'chaos-weaver') {
      hue = hash % 360; // Full spectrum for chaos
    } else if (classId === 'fate-weaver') {
      hue = (hash % 60) + 30; // Gold to red for Fate Weaver
    } else if (classId === 'gambler') {
      hue = (hash % 60) + 120; // Green to teal for Gambler
    } else if (classId === 'martyr') {
      hue = (hash % 60) + 330; // Crimson to purple for Martyr
    } else if (classId === 'false-prophet') {
      hue = (hash % 60) + 40; // Gold to amber for False Prophet
    } else if (classId === 'exorcist') {
      hue = (hash % 60) + 210; // Silver to blue for Exorcist
    } else if (classId === 'deathcaller') {
      hue = (hash % 60) + 270; // Dark purple to black for Deathcaller
    } else if (classId === 'plaguebringer') {
      hue = (hash % 60) + 90; // Sickly green to yellow for Plaguebringer
    } else {
      hue = hash % 360;
    }

    const saturation = 80 + (hash % 20);
    const lightness = 65 + (hash % 15); // Lighter for the glow

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // Generate a pattern for the icon background
  const generatePattern = (name) => {
    const patterns = [
      'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)',
      'repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)',
      'repeating-radial-gradient(circle at center, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)',
      'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.1), rgba(255,255,255,0))'
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return patterns[Math.abs(hash) % patterns.length];
  };

  // Generate a symbol or letter for the icon
  const generateSymbol = (name) => {
    // Use the first letter of the spell name
    return name.charAt(0).toUpperCase();
  };

  const color = generateColor(spellName);
  const glowColor = generateGlowColor(spellName);
  const pattern = generatePattern(spellName);
  const symbol = generateSymbol(spellName);

  // Class-specific animations
  let animationClass = '';
  if (classId === 'pyrofiend') {
    animationClass = 'fire-pulse';
  } else if (classId === 'chronarch') {
    animationClass = 'time-pulse';
  } else if (classId === 'minstrel') {
    animationClass = 'music-pulse';
  } else if (classId === 'chaos-weaver') {
    animationClass = 'chaos-pulse';
  } else if (classId === 'fate-weaver') {
    animationClass = 'card-pulse';
  } else if (classId === 'gambler') {
    animationClass = 'dice-pulse';
  } else if (classId === 'martyr') {
    animationClass = 'blood-pulse';
  } else if (classId === 'false-prophet') {
    animationClass = 'divine-pulse';
  } else if (classId === 'exorcist') {
    animationClass = 'holy-pulse';
  } else if (classId === 'deathcaller') {
    animationClass = 'necro-pulse';
  } else if (classId === 'plaguebringer') {
    animationClass = 'plague-pulse';
  }

  return (
    <div
      className={`spell-icon ${animationClass}`}
      style={{
        backgroundColor: color,
        backgroundImage: pattern,
        boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`
      }}
    >
      <span className="spell-symbol">{symbol}</span>
    </div>
  );
};

export default SpellIcon;
