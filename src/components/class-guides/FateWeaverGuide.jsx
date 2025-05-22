import React from 'react';
import './ClassGuides.css';

const FateWeaverGuide = () => {
  return (
    <div className="class-guide">
      <h2>Fate Weaver Guide</h2>
      <p className="class-subtitle">Destiny Manipulator • Card Reader • Fortune Bender</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Fate Weaver</strong> is a mystical spellcaster who manipulates destiny and fortune through a unique card-based magic system.
          Unlike traditional spellcasters who rely on memorized incantations, Fate Weavers draw from a mystical deck to determine spell effects,
          reading the threads of destiny and altering them to their advantage.
        </p>
        <p>
          In a party, Fate Weavers serve as versatile support casters who can dramatically alter the course of events through fortune manipulation.
          Their ability to foresee and change outcomes makes them invaluable in both combat and social situations.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Card-Draw System</h3>
        <p>
          Unlike typical classes that roll dice, the Fate Weaver draws from a deck of mystical cards to resolve magic.
          Each time they cast a spell or use a special ability, they draw one or more cards instead of rolling.
          These cards (analogous to a standard 52-card deck plus major arcana) determine the potency and nature of the effect.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Card System Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Card Suits:</strong> Each suit corresponds to a different type of effect:
              <ul>
                <li>♥️ Hearts: Healing, protection, and positive buffs</li>
                <li>♦️ Diamonds: Wealth, fortune, and resource generation</li>
                <li>♣️ Clubs: Physical power, earth magic, and endurance</li>
                <li>♠️ Spades: Damage, debuffs, and negative effects</li>
              </ul>
            </li>
            <li><strong>Card Values:</strong> The numerical value (2-10, J, Q, K, A) determines the potency of the effect.</li>
            <li><strong>Major Arcana:</strong> Special cards that produce unique, powerful effects when drawn.</li>
            <li><strong>Fate Points:</strong> A resource that allows you to manipulate draws, peek at upcoming cards, or force redraws.</li>
            <li><strong>Deck Management:</strong> As you use cards, they go to a discard pile. Managing your deck and knowing what remains is key to strategy.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Card Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Card</th>
                <th>Effect Type</th>
                <th>Potency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 of Hearts</td>
                <td>Minor Healing</td>
                <td>Heal 1d4 + INT</td>
              </tr>
              <tr>
                <td>Queen of Hearts</td>
                <td>Major Protection</td>
                <td>Grant 10 + INT temporary HP and resistance to one damage type</td>
              </tr>
              <tr>
                <td>7 of Spades</td>
                <td>Medium Damage</td>
                <td>Deal 3d6 + INT necrotic damage</td>
              </tr>
              <tr>
                <td>Ace of Diamonds</td>
                <td>Fortune Boost</td>
                <td>Target gains advantage on all rolls for 1d4 rounds</td>
              </tr>
              <tr>
                <td>Jack of Clubs</td>
                <td>Strength Enhancement</td>
                <td>Target gains +4 to Strength for 3 rounds</td>
              </tr>
              <tr>
                <td>The Tower (Major Arcana)</td>
                <td>Catastrophic Event</td>
                <td>Deal 8d6 damage in a 20-foot radius and knock targets prone</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Fate Weaver is understanding probability and card counting.
          Keep track of which cards have been drawn and which remain in your deck. Use Fate Points to manipulate draws when you need specific effects.
          Remember that you can often choose to apply effects to either allies or enemies, giving you tremendous flexibility.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Fate Weavers have three distinct talent trees that emphasize different aspects of destiny manipulation.
          Each tree offers a unique playstyle and approach to using the card system.
        </p>

        <div className="talent-tree">
          <h4>1. Predictive Control</h4>
          <p><em>Focus on planning and manipulating draws to maximize use of high cards and avoid bad draws.</em></p>
          <ul>
            <li><strong>Glimpse Future:</strong> Once per encounter, peek at the top three cards of your deck.</li>
            <li><strong>Stacked Deck:</strong> At the start of each day, place one card of your choice on top of your deck.</li>
            <li><strong>Fortune's Favor:</strong> Gain additional Fate Points to manipulate draws.</li>
            <li><strong>Destiny's Hand (capstone):</strong> Once per day, draw five cards and choose which one to play.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy planning and strategy. You'll have more control over your card draws, making your abilities more reliable.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Chaos Manipulation</h4>
          <p><em>Embrace the randomness of fate, gaining power from unexpected draws and combinations.</em></p>
          <ul>
            <li><strong>Wild Draw:</strong> When you draw a card, you have a chance to draw an additional card and choose between them.</li>
            <li><strong>Chaotic Resonance:</strong> When you draw a card of the same suit twice in a row, both effects are amplified.</li>
            <li><strong>Twist of Fate:</strong> Convert negative draws into positive ones by spending Fate Points.</li>
            <li><strong>Reality Shuffle (capstone):</strong> Completely reset your deck and draw a new hand of three cards with doubled effects.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy adapting to random chance. You'll embrace unpredictability while gaining tools to turn any situation to your advantage.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Card Synergy</h4>
          <p><em>Focus on combinations of cards and building powerful sequences.</em></p>
          <ul>
            <li><strong>Suit Affinity:</strong> Choose a suit at the start of each day. Cards of that suit have enhanced effects.</li>
            <li><strong>Royal Flush:</strong> When you draw face cards (J, Q, K), their effects last longer and affect multiple targets.</li>
            <li><strong>Combo Play:</strong> Store a card for later use, then play it alongside another for combined effects.</li>
            <li><strong>Grand Destiny (capstone):</strong> Create a five-card "hand" over multiple turns, then play them all at once for a devastating combined effect.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree rewards patience and setup. You'll build toward powerful combinations that can dramatically alter the course of battle when played together.</p>
        </div>
      </section>

      <section className="guide-section">
        <h3>Attribute Priorities</h3>
        <div className="attribute-table">
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Importance</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Primary</td>
                <td>Increases card effect potency and Fate Point generation</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Improves your ability to predict draws and manage your deck</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Enhances your connection to fate and destiny</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Improves your hand quickness and card manipulation</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Provides resilience when fate turns against you</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Fate Weavers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Fate's Draw:</strong> Draw a card and apply its effect to a target. The basic ability that defines the class.</li>
          <li><strong>Fortune's Insight:</strong> Peek at the top card of your deck without drawing it.</li>
          <li><strong>Destiny Shuffle:</strong> Reshuffle your discard pile back into your deck.</li>
          <li><strong>Twist of Fate:</strong> Spend a Fate Point to redraw after seeing an unfavorable card.</li>
          <li><strong>Arcane Reading:</strong> Draw three cards and arrange them to foresee upcoming events or gain information.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Fate Weaver's approach to combat revolves around card management and timing:</p>
        <ol className="round-flow">
          <li><strong>Opening Phase:</strong> Use Fortune's Insight to peek at upcoming cards and plan your strategy.</li>
          <li><strong>Adaptation Phase:</strong> Draw cards and apply effects based on the current battlefield situation.</li>
          <li><strong>Management Phase:</strong> Use Fate Points to manipulate draws when crucial effects are needed.</li>
          <li><strong>Reset Phase:</strong> When your deck runs low or is filled with unfavorable cards, use Destiny Shuffle to reset.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a physical deck of cards to represent your mystical deck—it adds immersion and helps with tracking.</li>
            <li>Save Fate Points for critical moments when you absolutely need a specific type of card.</li>
            <li>Remember that knowing which cards remain in your deck is as important as the cards you draw.</li>
            <li>Coordinate with allies to maximize the impact of your card effects.</li>
            <li>Consider the timing of your Destiny Shuffle—resetting with many good cards still in the discard pile is wasteful.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Fate Weaver:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Use Fortune's Insight to peek at your top card. It's the 3 of Spades (weak damage)—not ideal for your opening move.
              <em>Fate Points: 3</em>
            </li>
            <li>
              <strong>Round 2:</strong> Spend 1 Fate Point to use Twist of Fate, allowing you to draw a different card. You draw the Queen of Hearts, granting a powerful protection buff to your party's tank.
              <em>Fate Points: 2</em>
            </li>
            <li>
              <strong>Round 3:</strong> Draw for Fate's Draw and get the 8 of Diamonds. Apply it to yourself, gaining temporary Fate Points and mana regeneration.
              <em>Fate Points: 4</em>
            </li>
            <li>
              <strong>Round 4:</strong> An enemy spellcaster threatens your party. Draw for Fate's Draw and get the Jack of Spades. Apply it to silence the spellcaster for 2 rounds.
              <em>Fate Points: 4</em>
            </li>
            <li>
              <strong>Round 5:</strong> Your party needs healing. Spend 2 Fate Points on Glimpse Future to see the next three cards. One is the Ace of Hearts (powerful healing). Draw it and apply to your wounded allies.
              <em>Fate Points: 2</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Fate Weaver thrives on <strong>foresight and adaptation</strong>—reading the cards of destiny and bending them to their will.
          Master the flow of fortune, and you'll guide your party through even the most challenging encounters with uncanny precision.
        </p>
      </section>
    </div>
  );
};

export default FateWeaverGuide;
