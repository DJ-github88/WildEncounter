import React, { useEffect, useRef } from 'react';
import './ClassBackground.css';

const ClassBackground = ({ classId }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Class-specific settings
    let particleColor, particleCount, particleSize, particleSpeed, particleEffect;

    switch(classId) {
      case 'pyrofiend':
        particleColor = ['#ff6b6b', '#ff9d6b', '#ffb56b', '#ffd46b'];
        particleCount = 50;
        particleSize = [2, 5];
        particleSpeed = [0.5, 2];
        particleEffect = 'fire';
        break;
      case 'chronarch':
        particleColor = ['#6b9fff', '#6bffff', '#6bd5ff', '#6bb5ff'];
        particleCount = 40;
        particleSize = [1, 4];
        particleSpeed = [0.2, 1];
        particleEffect = 'time';
        break;
      case 'minstrel':
        particleColor = ['#c16bff', '#ff6bdb', '#d56bff', '#b56bff'];
        particleCount = 30;
        particleSize = [2, 4];
        particleSpeed = [0.3, 1.5];
        particleEffect = 'music';
        break;
      case 'chaos-weaver':
        particleColor = ['#ff6b6b', '#6bffff', '#ff6bdb', '#ffff6b', '#6bff6b', '#6b6bff'];
        particleCount = 60;
        particleSize = [1, 6];
        particleSpeed = [0.5, 2.5];
        particleEffect = 'chaos';
        break;
      case 'fate-weaver':
        particleColor = ['#ffd700', '#ff8c00', '#dc143c', '#8b0000'];
        particleCount = 45;
        particleSize = [2, 5];
        particleSpeed = [0.3, 1.2];
        particleEffect = 'card';
        break;
      case 'gambler':
        particleColor = ['#008000', '#00a080', '#00b0b0', '#009060'];
        particleCount = 40;
        particleSize = [2, 6];
        particleSpeed = [0.4, 1.5];
        particleEffect = 'dice';
        break;
      case 'martyr':
        particleColor = ['#8b0000', '#dc143c', '#800080', '#4b0082'];
        particleCount = 35;
        particleSize = [1, 4];
        particleSpeed = [0.3, 1.0];
        particleEffect = 'blood';
        break;
      case 'false-prophet':
        particleColor = ['#ffd700', '#ffbf00', '#daa520', '#b8860b'];
        particleCount = 40;
        particleSize = [1, 3];
        particleSpeed = [0.2, 0.8];
        particleEffect = 'divine';
        break;
      case 'exorcist':
        particleColor = ['#c0c0c0', '#87ceeb', '#e0ffff', '#ffffff'];
        particleCount = 35;
        particleSize = [1, 3];
        particleSpeed = [0.2, 0.7];
        particleEffect = 'holy';
        break;
      case 'deathcaller':
        particleColor = ['#4b0082', '#800080', '#9370db', '#483d8b'];
        particleCount = 45;
        particleSize = [1, 4];
        particleSpeed = [0.2, 0.8];
        particleEffect = 'necro';
        break;
      case 'plaguebringer':
        particleColor = ['#adff2f', '#9acd32', '#6b8e23', '#556b2f'];
        particleCount = 55;
        particleSize = [1, 5];
        particleSpeed = [0.3, 1.0];
        particleEffect = 'plague';
        break;
      default:
        particleColor = ['#6a93cb', '#8aa8d2', '#a6bfda', '#c2d6e2'];
        particleCount = 30;
        particleSize = [1, 3];
        particleSpeed = [0.2, 1];
        particleEffect = 'default';
    }

    // Create particles
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const color = particleColor[Math.floor(Math.random() * particleColor.length)];
      const size = Math.random() * (particleSize[1] - particleSize[0]) + particleSize[0];
      const speed = Math.random() * (particleSpeed[1] - particleSpeed[0]) + particleSpeed[0];

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        color: color,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;

        // Different particle shapes based on class
        if (particleEffect === 'fire') {
          // Fire particles
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Add glow effect
          ctx.shadowBlur = particle.size * 3;
          ctx.shadowColor = particle.color;
        } else if (particleEffect === 'time') {
          // Time particles (clock-like)
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // Clock hands
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -particle.size * 1.2);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(particle.size * 0.8, 0);
          ctx.stroke();
        } else if (particleEffect === 'music') {
          // Music particles (note-like)
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Note head
          ctx.beginPath();
          ctx.ellipse(0, 0, particle.size, particle.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();

          // Note stem
          if (Math.random() > 0.5) {
            ctx.fillRect(particle.size * 0.8, -particle.size, 1, particle.size * 3);
          }
        } else if (particleEffect === 'chaos') {
          // Chaos particles (random shapes)
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Random shape based on particle
          const shapeType = Math.floor(particle.x * particle.y) % 5;

          switch(shapeType) {
            case 0: // Circle
              ctx.beginPath();
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 1: // Square
              ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
              break;
            case 2: // Triangle
              ctx.beginPath();
              ctx.moveTo(0, -particle.size);
              ctx.lineTo(particle.size, particle.size);
              ctx.lineTo(-particle.size, particle.size);
              ctx.closePath();
              ctx.fill();
              break;
            case 3: // Star
              const spikes = 5;
              const outerRadius = particle.size;
              const innerRadius = particle.size / 2;

              ctx.beginPath();
              for(let i = 0; i < spikes * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (Math.PI * 2 * i) / (spikes * 2);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if(i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.closePath();
              ctx.fill();
              break;
            case 4: // Diamond
              ctx.beginPath();
              ctx.moveTo(0, -particle.size);
              ctx.lineTo(particle.size, 0);
              ctx.lineTo(0, particle.size);
              ctx.lineTo(-particle.size, 0);
              ctx.closePath();
              ctx.fill();
              break;
          }

          // Add glow effect
          ctx.shadowBlur = particle.size * 2;
          ctx.shadowColor = particle.color;
        } else if (particleEffect === 'card') {
          // Card particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Determine card suit based on particle
          const suitType = Math.floor(particle.x * particle.y) % 4;

          // Draw card shape (rectangle with rounded corners)
          const width = particle.size * 1.5;
          const height = particle.size * 2;
          const radius = particle.size * 0.2;

          ctx.beginPath();
          ctx.moveTo(0 - width/2 + radius, 0 - height/2);
          ctx.lineTo(0 + width/2 - radius, 0 - height/2);
          ctx.quadraticCurveTo(0 + width/2, 0 - height/2, 0 + width/2, 0 - height/2 + radius);
          ctx.lineTo(0 + width/2, 0 + height/2 - radius);
          ctx.quadraticCurveTo(0 + width/2, 0 + height/2, 0 + width/2 - radius, 0 + height/2);
          ctx.lineTo(0 - width/2 + radius, 0 + height/2);
          ctx.quadraticCurveTo(0 - width/2, 0 + height/2, 0 - width/2, 0 + height/2 - radius);
          ctx.lineTo(0 - width/2, 0 - height/2 + radius);
          ctx.quadraticCurveTo(0 - width/2, 0 - height/2, 0 - width/2 + radius, 0 - height/2);
          ctx.closePath();
          ctx.fill();

          // Draw card suit symbol
          ctx.fillStyle = '#ffffff';
          ctx.font = `${particle.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          let suitSymbol;
          switch(suitType) {
            case 0: // Hearts
              suitSymbol = '♥';
              ctx.fillStyle = '#ff0000';
              break;
            case 1: // Diamonds
              suitSymbol = '♦';
              ctx.fillStyle = '#ff0000';
              break;
            case 2: // Clubs
              suitSymbol = '♣';
              ctx.fillStyle = '#ffffff';
              break;
            case 3: // Spades
              suitSymbol = '♠';
              ctx.fillStyle = '#ffffff';
              break;
          }

          ctx.fillText(suitSymbol, 0, 0);

          // Add glow effect
          ctx.shadowBlur = particle.size;
          ctx.shadowColor = particle.color;
        } else if (particleEffect === 'dice') {
          // Dice particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Determine dice type based on particle
          const diceType = Math.floor(particle.x * particle.y) % 3;

          // Draw dice shape (cube)
          const size = particle.size * 1.5;

          ctx.beginPath();
          ctx.rect(-size/2, -size/2, size, size);
          ctx.fill();

          // Draw dice dots
          ctx.fillStyle = '#ffffff';

          // Different dice faces (1-6)
          const diceFace = Math.floor(particle.x * particle.y * 100) % 6 + 1;

          switch(diceFace) {
            case 1:
              // Center dot
              ctx.beginPath();
              ctx.arc(0, 0, size/6, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 2:
              // Top-left and bottom-right dots
              ctx.beginPath();
              ctx.arc(-size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 3:
              // Top-left, center, and bottom-right dots
              ctx.beginPath();
              ctx.arc(-size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(0, 0, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 4:
              // Four corner dots
              ctx.beginPath();
              ctx.arc(-size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(-size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 5:
              // Four corner dots and center dot
              ctx.beginPath();
              ctx.arc(-size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(0, 0, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(-size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 6:
              // Six dots (3 on each side)
              ctx.beginPath();
              ctx.arc(-size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, -size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(-size/4, 0, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, 0, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(-size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              ctx.beginPath();
              ctx.arc(size/4, size/4, size/8, 0, Math.PI * 2);
              ctx.fill();
              break;
          }

          // Add glow effect
          ctx.shadowBlur = particle.size;
          ctx.shadowColor = particle.color;
        } else if (particleEffect === 'blood') {
          // Blood particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Set opacity
          ctx.globalAlpha = particle.opacity || 1;

          // Determine blood drop type
          const dropType = Math.floor(particle.x * particle.y) % 3;

          switch(dropType) {
            case 0: // Circular drop
              ctx.beginPath();
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 1: // Teardrop shape
              ctx.beginPath();
              ctx.moveTo(0, -particle.size * 1.5);
              ctx.bezierCurveTo(
                particle.size, -particle.size,
                particle.size, particle.size,
                0, particle.size
              );
              ctx.bezierCurveTo(
                -particle.size, particle.size,
                -particle.size, -particle.size,
                0, -particle.size * 1.5
              );
              ctx.fill();
              break;
            case 2: // Splatter
              const splatterPoints = 5 + Math.floor(Math.random() * 3);
              const innerRadius = particle.size * 0.5;
              const outerRadius = particle.size * 1.2;

              ctx.beginPath();
              for (let i = 0; i < splatterPoints * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (Math.PI * 2 * i) / (splatterPoints * 2);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.closePath();
              ctx.fill();
              break;
          }

          // Add glow effect
          ctx.shadowBlur = particle.size * 2;
          ctx.shadowColor = particle.color;

          // Reset opacity
          ctx.globalAlpha = 1;
        } else if (particleEffect === 'divine') {
          // Divine particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Set opacity
          ctx.globalAlpha = particle.opacity || 1;

          // Determine divine symbol type
          const symbolType = Math.floor(particle.x * particle.y) % 4;

          switch(symbolType) {
            case 0: // Holy symbol (cross)
              const crossWidth = particle.size * 0.4;
              const crossHeight = particle.size * 1.2;

              ctx.beginPath();
              ctx.rect(-crossWidth/2, -crossHeight/2, crossWidth, crossHeight);
              ctx.rect(-crossHeight/2, -crossWidth/2, crossHeight, crossWidth);
              ctx.fill();
              break;
            case 1: // Star
              const starPoints = 5;
              const outerRadius = particle.size;
              const innerRadius = particle.size * 0.4;

              ctx.beginPath();
              for (let i = 0; i < starPoints * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (Math.PI * 2 * i) / (starPoints * 2) - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.closePath();
              ctx.fill();
              break;
            case 2: // Eye
              // Outer eye shape
              ctx.beginPath();
              ctx.ellipse(0, 0, particle.size * 1.2, particle.size * 0.7, 0, 0, Math.PI * 2);
              ctx.fill();

              // Inner iris (different color)
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.5, 0, Math.PI * 2);
              ctx.fill();

              // Pupil
              ctx.fillStyle = particle.color;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.2, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 3: // Halo
              ctx.beginPath();
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
              ctx.fill();

              // Inner halo (different color)
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.7, 0, Math.PI * 2);
              ctx.fill();

              // Center
              ctx.fillStyle = particle.color;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
              ctx.fill();
              break;
          }

          // Add glow effect
          ctx.shadowBlur = particle.size * 3;
          ctx.shadowColor = particle.color;

          // Reset opacity
          ctx.globalAlpha = 1;
        } else if (particleEffect === 'holy') {
          // Holy particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Set opacity
          ctx.globalAlpha = particle.opacity || 1;

          // Determine holy symbol type
          const symbolType = Math.floor(particle.x * particle.y) % 5;

          // Increase size if flashing
          const size = particle.flash > 0 ? particle.size * 1.5 : particle.size;

          switch(symbolType) {
            case 0: // Cross
              const crossWidth = size * 0.3;
              const crossHeight = size * 1.2;

              ctx.beginPath();
              ctx.rect(-crossWidth/2, -crossHeight/2, crossWidth, crossHeight);
              ctx.rect(-crossHeight/2, -crossWidth/2, crossHeight, crossWidth);
              ctx.fill();
              break;
            case 1: // Holy water drop
              ctx.beginPath();
              ctx.moveTo(0, -size);
              ctx.bezierCurveTo(
                size, -size/2,
                size, size/2,
                0, size
              );
              ctx.bezierCurveTo(
                -size, size/2,
                -size, -size/2,
                0, -size
              );
              ctx.fill();
              break;
            case 2: // Ward symbol (pentagram)
              const points = 5;
              const outerRadius = size;
              const innerRadius = size * 0.4;

              ctx.beginPath();
              for (let i = 0; i < points * 2; i++) {
                const radius = i % 2 === 0 ? outerRadius : innerRadius;
                const angle = (Math.PI * 2 * i) / (points * 2) - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.closePath();
              ctx.fill();
              break;
            case 3: // Holy light (radial)
              // Outer glow
              const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.5);
              gradient.addColorStop(0, particle.color);
              gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
              ctx.fill();

              // Inner core
              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
              ctx.fill();
              break;
            case 4: // Seal/sigil
              // Outer circle
              ctx.beginPath();
              ctx.arc(0, 0, size, 0, Math.PI * 2);
              ctx.stroke();

              // Inner symbol (simplified rune)
              ctx.beginPath();
              ctx.moveTo(-size/2, -size/2);
              ctx.lineTo(size/2, size/2);
              ctx.moveTo(size/2, -size/2);
              ctx.lineTo(-size/2, size/2);
              ctx.moveTo(0, -size);
              ctx.lineTo(0, size);
              ctx.stroke();

              // Center dot
              ctx.beginPath();
              ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
              ctx.fill();
              break;
          }

          // Add glow effect - stronger if flashing
          ctx.shadowBlur = particle.flash > 0 ? size * 4 : size * 2;
          ctx.shadowColor = particle.color;

          // Reset opacity
          ctx.globalAlpha = 1;
        } else if (particleEffect === 'necro') {
          // Necro particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Set opacity
          ctx.globalAlpha = particle.opacity || 0.7;

          // Determine necro symbol type
          const symbolType = Math.floor(particle.x * particle.y) % 5;

          switch(symbolType) {
            case 0: // Skull
              const skullSize = particle.size * 1.2;

              // Skull shape
              ctx.beginPath();
              ctx.arc(0, 0, skullSize, 0, Math.PI * 2); // Head
              ctx.fill();

              // Eyes
              ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
              ctx.beginPath();
              ctx.arc(-skullSize/3, -skullSize/5, skullSize/4, 0, Math.PI * 2); // Left eye
              ctx.arc(skullSize/3, -skullSize/5, skullSize/4, 0, Math.PI * 2); // Right eye
              ctx.fill();

              // Nose
              ctx.beginPath();
              ctx.arc(0, skullSize/5, skullSize/6, 0, Math.PI * 2);
              ctx.fill();

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 1: // Spirit wisp
              // Create gradient for wisp
              const gradientWisp = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
              gradientWisp.addColorStop(0, particle.color);
              gradientWisp.addColorStop(0.6, 'rgba(128, 0, 128, 0.3)');
              gradientWisp.addColorStop(1, 'rgba(75, 0, 130, 0)');

              ctx.fillStyle = gradientWisp;

              // Draw wispy shape
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
              ctx.fill();

              // Inner core
              ctx.fillStyle = 'rgba(200, 200, 255, 0.7)';
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.5, 0, Math.PI * 2);
              ctx.fill();

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 2: // Bone
              const boneWidth = particle.size * 0.4;
              const boneLength = particle.size * 2;
              const knobSize = particle.size * 0.8;

              // Main bone shaft
              ctx.beginPath();
              ctx.rect(-boneWidth/2, -boneLength/2, boneWidth, boneLength);
              ctx.fill();

              // Bone knobs
              ctx.beginPath();
              ctx.arc(-boneWidth, -boneLength/2, knobSize/2, 0, Math.PI * 2); // Top left
              ctx.arc(boneWidth, -boneLength/2, knobSize/2, 0, Math.PI * 2); // Top right
              ctx.arc(-boneWidth, boneLength/2, knobSize/2, 0, Math.PI * 2); // Bottom left
              ctx.arc(boneWidth, boneLength/2, knobSize/2, 0, Math.PI * 2); // Bottom right
              ctx.fill();
              break;
            case 3: // Soul orb
              // Create gradient for soul orb
              const gradientOrb = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 1.5);
              gradientOrb.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
              gradientOrb.addColorStop(0.3, particle.color);
              gradientOrb.addColorStop(0.7, 'rgba(75, 0, 130, 0.6)');
              gradientOrb.addColorStop(1, 'rgba(0, 0, 0, 0)');

              ctx.fillStyle = gradientOrb;

              // Draw orb
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 1.5, 0, Math.PI * 2);
              ctx.fill();

              // Inner swirl
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
              ctx.lineWidth = particle.size * 0.1;
              ctx.beginPath();
              for (let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const radius = particle.size * (0.3 + i * 0.05);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.stroke();

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 4: // Necromantic rune
              // Rune circle
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 1.2, 0, Math.PI * 2);
              ctx.stroke();

              // Rune symbol (pentagram)
              const runePoints = 5;
              const runeRadius = particle.size * 0.8;

              ctx.beginPath();
              for (let i = 0; i < runePoints; i++) {
                const angle = ((i / runePoints) * Math.PI * 2) - (Math.PI / 2);
                const x = Math.cos(angle) * runeRadius;
                const y = Math.sin(angle) * runeRadius;

                if (i === 0) {
                  ctx.moveTo(x, y);
                } else {
                  ctx.lineTo(x, y);
                }
              }
              ctx.closePath();
              ctx.stroke();

              // Center symbol
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 0.3, 0, Math.PI * 2);
              ctx.fill();
              break;
          }

          // Add eerie glow effect
          ctx.shadowBlur = particle.size * 3;
          ctx.shadowColor = 'rgba(128, 0, 128, 0.7)';

          // Reset opacity
          ctx.globalAlpha = 1;
        } else if (particleEffect === 'plague') {
          // Plague particles
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);

          // Set opacity
          ctx.globalAlpha = particle.opacity || 0.8;

          // Determine plague symbol type
          const symbolType = Math.floor(particle.x * particle.y) % 5;

          switch(symbolType) {
            case 0: // Virus/bacteria
              // Main body
              ctx.beginPath();
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
              ctx.fill();

              // Spikes/protrusions
              const spikes = 6 + Math.floor(particle.size);
              const spikeLength = particle.size * 0.7;

              for (let i = 0; i < spikes; i++) {
                const angle = (i / spikes) * Math.PI * 2;
                const x1 = Math.cos(angle) * particle.size;
                const y1 = Math.sin(angle) * particle.size;
                const x2 = Math.cos(angle) * (particle.size + spikeLength);
                const y2 = Math.sin(angle) * (particle.size + spikeLength);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineWidth = particle.size * 0.3;
                ctx.stroke();

                // Small blob at the end of each spike
                ctx.beginPath();
                ctx.arc(x2, y2, particle.size * 0.3, 0, Math.PI * 2);
                ctx.fill();
              }
              break;
            case 1: // Toxic bubble
              // Create gradient for bubble
              const gradientBubble = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 1.5);
              gradientBubble.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
              gradientBubble.addColorStop(0.3, particle.color);
              gradientBubble.addColorStop(0.7, 'rgba(85, 107, 47, 0.6)');
              gradientBubble.addColorStop(1, 'rgba(0, 0, 0, 0)');

              ctx.fillStyle = gradientBubble;

              // Draw bubble
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 1.5, 0, Math.PI * 2);
              ctx.fill();

              // Highlight
              ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
              ctx.beginPath();
              ctx.arc(-particle.size * 0.5, -particle.size * 0.5, particle.size * 0.3, 0, Math.PI * 2);
              ctx.fill();

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 2: // Spore
              // Spore body
              ctx.beginPath();
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
              ctx.fill();

              // Spore pattern
              ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
              const spots = 5;
              for (let i = 0; i < spots; i++) {
                const angle = (i / spots) * Math.PI * 2;
                const distance = particle.size * 0.6;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                const spotSize = particle.size * 0.3;

                ctx.beginPath();
                ctx.arc(x, y, spotSize, 0, Math.PI * 2);
                ctx.fill();
              }

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 3: // Toxic cloud
              // Create a cloud-like shape
              ctx.beginPath();

              // Main blob
              ctx.arc(0, 0, particle.size, 0, Math.PI * 2);

              // Additional blobs to create cloud shape
              ctx.arc(particle.size * 0.7, 0, particle.size * 0.7, 0, Math.PI * 2);
              ctx.arc(-particle.size * 0.7, 0, particle.size * 0.7, 0, Math.PI * 2);
              ctx.arc(0, particle.size * 0.7, particle.size * 0.7, 0, Math.PI * 2);
              ctx.arc(0, -particle.size * 0.7, particle.size * 0.7, 0, Math.PI * 2);

              ctx.fill();

              // Create a gradient for the toxic effect
              const gradientCloud = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
              gradientCloud.addColorStop(0, 'rgba(173, 255, 47, 0.3)');
              gradientCloud.addColorStop(1, 'rgba(85, 107, 47, 0)');

              ctx.fillStyle = gradientCloud;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * 2, 0, Math.PI * 2);
              ctx.fill();

              // Restore fill color
              ctx.fillStyle = particle.color;
              break;
            case 4: // Biohazard symbol
              const outerRadius = particle.size * 1.2;
              const innerRadius = particle.size * 0.6;
              const circleRadius = particle.size * 0.3;

              // Draw three circles at 120-degree intervals
              for (let i = 0; i < 3; i++) {
                const angle = (i / 3) * Math.PI * 2;
                const x = Math.cos(angle) * innerRadius;
                const y = Math.sin(angle) * innerRadius;

                ctx.beginPath();
                ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
                ctx.fill();

                // Draw arcs connecting the circles
                const startAngle = angle + Math.PI / 6;
                const endAngle = angle + Math.PI / 3 * 5;

                ctx.beginPath();
                ctx.arc(0, 0, outerRadius, startAngle, endAngle);
                ctx.lineWidth = particle.size * 0.2;
                ctx.stroke();
              }

              // Center circle
              ctx.beginPath();
              ctx.arc(0, 0, circleRadius, 0, Math.PI * 2);
              ctx.fill();
              break;
          }

          // Add toxic glow effect
          ctx.shadowBlur = particle.size * 3;
          ctx.shadowColor = 'rgba(173, 255, 47, 0.7)';

          // Reset opacity
          ctx.globalAlpha = 1;
        } else {
          // Default particles
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        // Update position
        if (particleEffect === 'chaos') {
          // Chaos particles move more erratically
          particle.speedX += (Math.random() - 0.5) * 0.1;
          particle.speedY += (Math.random() - 0.5) * 0.1;

          // Limit speed
          if (Math.abs(particle.speedX) > 2) particle.speedX *= 0.9;
          if (Math.abs(particle.speedY) > 2) particle.speedY *= 0.9;

          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed * 1.5;
        } else if (particleEffect === 'card') {
          // Card particles float gently with occasional flips
          if (Math.random() < 0.02) {
            particle.rotationSpeed = -particle.rotationSpeed;
          }

          // Slight drift
          particle.speedX += (Math.random() - 0.5) * 0.02;
          particle.speedY += (Math.random() - 0.5) * 0.02;

          // Limit speed
          if (Math.abs(particle.speedX) > 1) particle.speedX *= 0.95;
          if (Math.abs(particle.speedY) > 1) particle.speedY *= 0.95;

          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;
        } else if (particleEffect === 'dice') {
          // Dice particles tumble and bounce
          if (Math.random() < 0.05) {
            // Occasional bounce
            particle.speedY = -particle.speedY * 0.8;
            particle.rotationSpeed = (Math.random() - 0.5) * 10;
          }

          // Apply gravity
          particle.speedY += 0.02;

          // Slight drift
          particle.speedX += (Math.random() - 0.5) * 0.05;

          // Limit speed
          if (Math.abs(particle.speedX) > 1.5) particle.speedX *= 0.95;
          if (Math.abs(particle.speedY) > 2) particle.speedY *= 0.95;

          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;
        } else if (particleEffect === 'blood') {
          // Blood particles fall and spread
          // Apply gravity
          particle.speedY += 0.03;

          // Occasional spread
          if (Math.random() < 0.02) {
            particle.speedX += (Math.random() - 0.5) * 0.2;
          }

          // Limit speed
          if (Math.abs(particle.speedX) > 1) particle.speedX *= 0.98;
          if (Math.abs(particle.speedY) > 2.5) particle.speedY *= 0.98;

          // Slow down rotation
          particle.rotationSpeed *= 0.99;

          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;

          // Fade out over time
          particle.opacity = Math.max(0, particle.opacity - 0.002);
        } else if (particleEffect === 'divine') {
          // Divine particles float upward gently
          // Apply anti-gravity
          particle.speedY -= 0.01;

          // Gentle swaying
          particle.speedX += Math.sin(particle.y * 0.01) * 0.01;

          // Occasional pulse
          if (Math.random() < 0.02) {
            particle.size = particle.baseSize * (1 + Math.random() * 0.5);
            particle.opacity = Math.min(1, particle.opacity + 0.1);
          }

          // Limit speed
          if (Math.abs(particle.speedX) > 0.5) particle.speedX *= 0.95;
          if (Math.abs(particle.speedY) > 1) particle.speedY *= 0.95;

          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;

          // Fade in and out
          if (particle.y < canvas.height * 0.3) {
            particle.opacity = Math.max(0, particle.opacity - 0.005);
          } else {
            particle.opacity = Math.min(1, particle.opacity + 0.001);
          }
        } else if (particleEffect === 'holy') {
          // Holy particles float with a gentle pulse

          // Gentle floating pattern
          particle.speedY = Math.sin(particle.age * 0.05) * 0.2;
          particle.speedX = Math.cos(particle.age * 0.05) * 0.2;

          // Occasional bright flash
          if (Math.random() < 0.01) {
            particle.size = particle.baseSize * 1.5;
            particle.opacity = 1;
            particle.flash = 10; // Flash duration
          }

          // Handle flash decay
          if (particle.flash > 0) {
            particle.flash--;
            if (particle.flash === 0) {
              particle.size = particle.baseSize;
              particle.opacity = 0.7;
            }
          }

          // Age the particle
          particle.age++;

          // Move the particle
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed * 0.5;

          // Pulse opacity based on age
          particle.opacity = 0.5 + Math.sin(particle.age * 0.1) * 0.3;
        } else if (particleEffect === 'necro') {
          // Necro particles drift with an eerie, ghostly movement

          // Slow, drifting movement with occasional direction changes
          if (Math.random() < 0.02) {
            particle.speedX = (Math.random() - 0.5) * 0.3;
            particle.speedY = (Math.random() - 0.5) * 0.3;
          }

          // Occasional fade in/out
          if (Math.random() < 0.01) {
            particle.fade = Math.random() < 0.5 ? 'in' : 'out';
            particle.fadeCount = 20; // Fade duration
          }

          // Handle fade effect
          if (particle.fade) {
            if (particle.fadeCount > 0) {
              particle.fadeCount--;
              if (particle.fade === 'in') {
                particle.opacity = Math.min(0.9, particle.opacity + 0.02);
              } else {
                particle.opacity = Math.max(0.1, particle.opacity - 0.02);
              }
            } else {
              particle.fade = null;
            }
          }

          // Age the particle
          particle.age++;

          // Slow rotation
          particle.rotation += particle.rotationSpeed * 0.3;

          // Apply a slight gravitational pull toward the center of the screen
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const dx = centerX - particle.x;
          const dy = centerY - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 100) { // Only apply if not too close to center
            particle.speedX += dx / dist * 0.01;
            particle.speedY += dy / dist * 0.01;
          }

          // Apply movement
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Limit speed
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (speed > 0.8) {
            particle.speedX = (particle.speedX / speed) * 0.8;
            particle.speedY = (particle.speedY / speed) * 0.8;
          }

          // Pulse size based on age
          particle.size = particle.baseSize * (0.8 + Math.sin(particle.age * 0.05) * 0.2);
        } else if (particleEffect === 'plague') {
          // Plague particles move with a sickly, oozing motion

          // Initialize bubbling behavior if not set
          if (!particle.bubbleSpeed) {
            particle.bubbleSpeed = 0.2 + Math.random() * 0.3;
            particle.bubbleAmplitude = 0.5 + Math.random() * 1.5;
            particle.bubbleFrequency = 0.02 + Math.random() * 0.03;
            particle.bubblePhase = Math.random() * Math.PI * 2;
            particle.growthRate = 0.01 + Math.random() * 0.02;
            particle.maxSize = particle.baseSize * (1.5 + Math.random());
            particle.minSize = particle.baseSize * (0.5 + Math.random() * 0.3);
            particle.sizeDirection = 1; // 1 for growing, -1 for shrinking
            particle.splitCounter = Math.floor(Math.random() * 200) + 100; // Random counter for splitting
          }

          // Age the particle
          particle.age++;

          // Bubbling upward movement with slight horizontal drift
          particle.y -= particle.bubbleSpeed;
          particle.x += Math.sin(particle.age * particle.bubbleFrequency + particle.bubblePhase) * particle.bubbleAmplitude * 0.1;

          // Occasional random direction change
          if (Math.random() < 0.01) {
            particle.bubblePhase = Math.random() * Math.PI * 2;
            particle.bubbleAmplitude = 0.5 + Math.random() * 1.5;
          }

          // Size pulsing/growing/shrinking to simulate bubbling
          if (particle.sizeDirection > 0) {
            // Growing
            particle.size += particle.growthRate;
            if (particle.size >= particle.maxSize) {
              particle.sizeDirection = -1;
            }
          } else {
            // Shrinking
            particle.size -= particle.growthRate;
            if (particle.size <= particle.minSize) {
              particle.sizeDirection = 1;
            }
          }

          // Occasional "splitting" effect - create a smaller particle nearby
          particle.splitCounter--;
          if (particle.splitCounter <= 0 && Math.random() < 0.3 && particles.length < particleCount * 1.2) {
            // Reset counter
            particle.splitCounter = Math.floor(Math.random() * 200) + 100;

            // Create a "child" particle
            if (typeof createParticle === 'function') {
              const childParticle = createParticle(
                particle.x + (Math.random() - 0.5) * 10,
                particle.y + (Math.random() - 0.5) * 10,
                particle.size * 0.6,
                particle.color
              );
              childParticle.bubbleSpeed = particle.bubbleSpeed * 0.8;
              childParticle.opacity = 0.6;
              particles.push(childParticle);
            }
          }

          // Slow rotation
          particle.rotation += particle.rotationSpeed * 0.2;

          // Opacity fluctuation
          if (Math.random() < 0.05) {
            particle.opacity = 0.6 + Math.random() * 0.4;
          }

          // Particles slowly fade out as they rise
          if (particle.y < canvas.height * 0.3) {
            particle.opacity = Math.max(0, particle.opacity - 0.01);
          }

          // Remove particles that have risen too high or faded out
          if (particle.y < -20 || particle.opacity <= 0) {
            particle.y = canvas.height + 10;
            particle.x = Math.random() * canvas.width;
            particle.opacity = 0.7 + Math.random() * 0.3;
            particle.size = particle.baseSize;
          }
        } else {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.rotation += particle.rotationSpeed;
        }

        // Wrap around edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [classId]);

  return <canvas ref={canvasRef} className="class-background" />;
};

export default ClassBackground;
