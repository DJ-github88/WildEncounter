import React, { useState } from 'react';
import './SpellEffectGenerator.css';

const SpellEffectGenerator = ({ spell, classId, onClose }) => {
  const [results, setResults] = useState([]);
  const [isRolling, setIsRolling] = useState(false);

  // Dice rolling function
  const rollDice = (diceString) => {
    const match = diceString.match(/(\d+)?d(\d+)([+-]\d+)?/);
    if (!match) return Math.floor(Math.random() * 6) + 1; // Default d6
    
    const numDice = parseInt(match[1]) || 1;
    const sides = parseInt(match[2]);
    const modifier = parseInt(match[3]) || 0;
    
    let total = 0;
    const rolls = [];
    
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * sides) + 1;
      rolls.push(roll);
      total += roll;
    }
    
    return { total: total + modifier, rolls, modifier };
  };

  // Card drawing function
  const drawCard = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    
    return { suit, value, display: `${value} of ${suit}` };
  };

  // Coin flip function
  const flipCoin = () => {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
  };

  // Generate spell effect based on class and spell type
  const generateEffect = () => {
    setIsRolling(true);
    const newResults = [];

    setTimeout(() => {
      if (classId === 'gambler') {
        generateGamblerEffect(newResults);
      } else if (classId === 'fate-weaver') {
        generateFateWeaverEffect(newResults);
      } else if (classId === 'chaos-weaver') {
        generateChaosWeaverEffect(newResults);
      } else {
        generateGenericEffect(newResults);
      }

      setResults(newResults);
      setIsRolling(false);
    }, 1000); // Animation delay
  };

  const generateGamblerEffect = (results) => {
    if (spell.cost?.coinFlip) {
      const flips = typeof spell.cost.coinFlip === 'number' ? spell.cost.coinFlip : 1;
      for (let i = 0; i < flips; i++) {
        const result = flipCoin();
        results.push({
          type: 'coin',
          result,
          description: `Coin ${i + 1}: ${result}`
        });
      }
    }

    if (spell.cost?.diceRoll) {
      const diceResult = rollDice(spell.cost.diceRoll);
      results.push({
        type: 'dice',
        result: diceResult,
        description: `Rolled ${spell.cost.diceRoll}: ${diceResult.total} (${diceResult.rolls.join(', ')})`
      });
    }

    // Apply outcomes based on results
    if (spell.outcomes && results.length > 0) {
      const lastResult = results[results.length - 1];
      let outcomeKey = '';
      
      if (lastResult.type === 'coin') {
        outcomeKey = lastResult.result;
      } else if (lastResult.type === 'dice') {
        const total = lastResult.result.total;
        // Find matching outcome based on dice total
        const outcome = spell.outcomes.find(o => {
          if (o.result.includes('-')) {
            const [min, max] = o.result.split('-').map(n => parseInt(n.trim()));
            return total >= min && total <= max;
          }
          return o.result.includes(total.toString());
        });
        
        if (outcome) {
          results.push({
            type: 'outcome',
            result: outcome.effect,
            description: `Effect: ${outcome.effect}`
          });
        }
      }
    }
  };

  const generateFateWeaverEffect = (results) => {
    if (spell.cost?.cardDraw) {
      const draws = spell.cost.cardDraw;
      const cards = [];
      
      for (let i = 0; i < draws; i++) {
        const card = drawCard();
        cards.push(card);
        results.push({
          type: 'card',
          result: card,
          description: `Card ${i + 1}: ${card.display}`
        });
      }

      // Apply suit effects
      if (spell.suitEffects && cards.length > 0) {
        const card = cards[0]; // Use first card for single draws
        const suitEffect = spell.suitEffects.find(s => s.suit.toLowerCase() === card.suit.toLowerCase());
        
        if (suitEffect) {
          results.push({
            type: 'outcome',
            result: suitEffect.effect,
            description: `${card.suit} Effect: ${suitEffect.effect}`
          });
        }
      }

      // Apply value effects
      if (spell.valueEffects && cards.length > 0) {
        const card = cards[0];
        const isHighCard = ['Jack', 'Queen', 'King', 'Ace'].includes(card.value);
        const isLowCard = ['2', '3', '4', '5'].includes(card.value);
        
        let valueEffect = null;
        if (isHighCard) {
          valueEffect = spell.valueEffects.find(v => v.value.includes('Face') || v.value.includes('Ace'));
        } else if (isLowCard) {
          valueEffect = spell.valueEffects.find(v => v.value.includes('2-5'));
        }
        
        if (valueEffect) {
          results.push({
            type: 'outcome',
            result: valueEffect.effect,
            description: `Value Effect: ${valueEffect.effect}`
          });
        }
      }
    }
  };

  const generateChaosWeaverEffect = (results) => {
    if (spell.cost?.chaosRoll) {
      const rollType = spell.cost.chaosRoll;
      let diceResult;
      
      if (rollType.includes('d12')) {
        diceResult = rollDice('1d12');
      } else if (rollType.includes('d20')) {
        diceResult = rollDice('1d20');
      } else if (rollType.includes('d10')) {
        diceResult = rollDice('1d10');
      } else if (rollType.includes('d8')) {
        diceResult = rollDice('1d8');
      } else if (rollType.includes('d100')) {
        diceResult = rollDice('1d100');
      } else {
        diceResult = rollDice('1d6');
      }
      
      results.push({
        type: 'chaos',
        result: diceResult,
        description: `Chaos Roll (${rollType}): ${diceResult.total}`
      });

      // Check for chaos surge or backlash
      const maxValue = parseInt(rollType.match(/d(\d+)/)[1]);
      if (diceResult.total === 1) {
        results.push({
          type: 'backlash',
          result: 'Chaos Backlash!',
          description: 'Chaos Backlash triggered! Roll on Backlash Table.'
        });
      } else if (diceResult.total === maxValue) {
        results.push({
          type: 'surge',
          result: 'Chaos Surge!',
          description: 'Chaos Surge triggered! Roll on Surge Table.'
        });
      }
    }
  };

  const generateGenericEffect = (results) => {
    results.push({
      type: 'generic',
      result: 'Effect Generated',
      description: 'Spell effect resolved normally.'
    });
  };

  return (
    <div className="spell-effect-generator">
      <div className="generator-header">
        <h3>{spell.name} - Effect Generator</h3>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
      
      <div className="generator-content">
        <div className="spell-info">
          <p><strong>Description:</strong> {spell.description}</p>
          <p><strong>Mechanics:</strong> {spell.mechanics}</p>
        </div>

        <div className="generator-controls">
          <button 
            className="generate-button" 
            onClick={generateEffect}
            disabled={isRolling}
          >
            {isRolling ? 'Rolling...' : 'Generate Effect'}
          </button>
        </div>

        <div className="results-section">
          {results.map((result, index) => (
            <div key={index} className={`result-item ${result.type}`}>
              <div className="result-description">{result.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpellEffectGenerator;
