import React from 'react';
import './ClassGuides.css';

const ChronarchGuide = () => {
  return (
    <div className="class-guide">
      <h2>Chronarch Guide</h2>
      <p className="class-subtitle">Time Manipulator • Reality Bender • Tactical Controller</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Chronarch</strong> is a master of temporal magic who manipulates the flow of time itself.
          Unlike traditional mages, Chronarchs don't just cast spells—they alter the fundamental rules of reality
          by accelerating allies, slowing enemies, and even creating pockets of altered time on the battlefield.
        </p>
        <p>
          In a party, Chronarchs excel at control and support, creating advantageous situations through temporal manipulation.
          Their ability to grant allies extra actions or deny enemies their turns makes them invaluable tacticians.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Continuum System</h3>
        <p>
          The Continuum is a time-energy gauge unique to the Chronarch. It starts at zero and fills as you cast spells,
          use time effects, or move dynamically. When certain thresholds are reached, powerful "tempo effects" automatically
          trigger or become available.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Continuum Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Momentum (10 Continuum):</strong> The first threshold. When reached, grants a burst of speed or extra AP next turn.</li>
            <li><strong>Echo (20 Continuum):</strong> The second threshold. When reached, allows spells to echo or strike twice.</li>
            <li><strong>Stasis (30 Continuum):</strong> The third and highest threshold. When reached, allows for major time manipulation effects.</li>
            <li><strong>Generation:</strong> Most Chronarch spells generate Continuum points when cast.</li>
            <li><strong>Consumption:</strong> Some powerful abilities consume Continuum points, reducing your total.</li>
            <li><strong>Decay:</strong> If you don't use or maintain your Continuum, it gradually decays over time (typically -2 per round).</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Key Threshold Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Threshold</th>
                <th>Ability</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Momentum (10)</td>
                <td>Chronal Burst</td>
                <td>For 1 round, all movement by allies is doubled and you gain +2 additional AP on your next turn.</td>
              </tr>
              <tr>
                <td>Echo (20)</td>
                <td>Temporal Echo</td>
                <td>Your next spell automatically casts twice but only consumes resources once.</td>
              </tr>
              <tr>
                <td>Stasis (30)</td>
                <td>Time Stop</td>
                <td>Freeze time for 1d4 rounds, during which only you can act.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Chronarch is balancing Continuum generation and consumption.
          Try to maintain your level between thresholds, using consumption abilities strategically to avoid wasting points to decay.
          Think of your Continuum as a resource that ebbs and flows throughout combat.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Chronarchs have three distinct talent trees that emphasize different aspects of temporal manipulation.
          Each tree offers a unique playstyle and approach to controlling the battlefield.
        </p>

        <div className="talent-tree">
          <h4>1. Temporal Dominance</h4>
          <p><em>Focus on crowd control and area effects. Amplify slowing, freezing, and buffing spells.</em></p>
          <ul>
            <li><strong>Time Lock:</strong> Increase the duration of your time-stopping abilities.</li>
            <li><strong>Temporal Acceleration:</strong> Your haste effects grant additional movement or action points.</li>
            <li><strong>Temporal Rush:</strong> Teleport to a nearby location, leaving a trail of slowed time behind you.</li>
            <li><strong>Flashpoint (capstone):</strong> Take an extra turn by manipulating time.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy controlling the battlefield by manipulating the flow of time for both allies and enemies.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Chronal Stride</h4>
          <p><em>Emphasizes mobility and personal time manipulation. Enhance your own temporal abilities.</em></p>
          <ul>
            <li><strong>Blink Step:</strong> Teleport short distances without using action points.</li>
            <li><strong>Time Dilation:</strong> Temporarily exist in multiple timestreams, increasing your action economy.</li>
            <li><strong>Paradox Shift:</strong> Create a temporal duplicate of yourself that mimics your actions.</li>
            <li><strong>Quantum Leap (capstone):</strong> Jump forward in time, avoiding all effects and damage for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on personal mobility and survival, perfect for players who enjoy a more evasive and tactical approach.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Time Ward</h4>
          <p><em>Centers on protection, barriers, and self-preservation. Reinforce shielding and healing.</em></p>
          <ul>
            <li><strong>Chrono Barrier:</strong> Increase the duration and effectiveness of your Temporal Shield.</li>
            <li><strong>Rewind:</strong> Reverse time for a single target, undoing recent damage or effects.</li>
            <li><strong>Temporal Anchor:</strong> Create a fixed point in time that allies can return to if needed.</li>
            <li><strong>Time Loop (capstone):</strong> Create a loop in time that repeats beneficial effects or prevents harmful ones.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is suited for players who prefer a defensive approach, protecting the party through temporal manipulation.</p>
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
                <td><strong>Intelligence</strong></td>
                <td>Primary</td>
                <td>Increases spell effectiveness, Continuum generation, and temporal control</td>
              </tr>
              <tr>
                <td><strong>Spirit</strong></td>
                <td>Secondary</td>
                <td>Improves your connection to the timestream and resistance to temporal effects</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Enhances your ability to react quickly and move through altered time</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Provides stability when manipulating time and general survivability</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Chronarchs</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Situational</td>
                <td>Useful for certain time manipulation effects that require force of will</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Spells:</h4>
        <ul className="ability-list">
          <li><strong>Temporal Shift:</strong> Basic attack that damages an enemy and generates Continuum.</li>
          <li><strong>Slow Time:</strong> Reduces an enemy's action points and movement speed.</li>
          <li><strong>Haste:</strong> Increases an ally's action points and movement speed.</li>
          <li><strong>Temporal Shield:</strong> Creates a barrier that absorbs damage and generates Continuum when hit.</li>
          <li><strong>Blink:</strong> Teleport a short distance, avoiding opportunity attacks.</li>
          <li><strong>Temporal Rewind:</strong> Undo recent damage to an ally by rewinding their personal timeline.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Chronarch's approach to combat revolves around managing Continuum and controlling the flow of battle:</p>
        <ol className="round-flow">
          <li><strong>Opening Phase:</strong> Generate Continuum quickly with basic spells while assessing the battlefield.</li>
          <li><strong>Control Phase:</strong> Once you reach the Momentum threshold, begin controlling enemy actions with slowing effects.</li>
          <li><strong>Amplification Phase:</strong> At the Echo threshold, double the effectiveness of your most powerful spells.</li>
          <li><strong>Domination Phase:</strong> When you reach Stasis, completely control the battlefield with major time manipulation.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d30 or three d10s to track your Continuum level.</li>
            <li>Position yourself to affect multiple enemies with area time effects.</li>
            <li>Save emergency teleports for when you're targeted by powerful enemy abilities.</li>
            <li>Coordinate with allies to maximize the effectiveness of your time manipulation—tell them when you're about to slow enemies or speed up allies.</li>
            <li>Remember that maintaining control is often more valuable than dealing damage directly.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Chronarch:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1 (0 Continuum):</strong> Cast Temporal Shift on the most dangerous enemy (+3 Continuum) and position yourself strategically.
              <em>Continuum Level: 3</em>
            </li>
            <li>
              <strong>Round 2 (3 Continuum):</strong> Cast Slow Time on a group of enemies (+4 Continuum) and Haste on your party's fighter (+4 Continuum).
              <em>Continuum Level: 11 (Momentum threshold reached!)</em>
            </li>
            <li>
              <strong>Round 3 (11 Continuum):</strong> Use Chronal Burst (Momentum ability) to give yourself extra AP next turn, then cast Temporal Shield (+3 Continuum).
              <em>Continuum Level: 14</em>
            </li>
            <li>
              <strong>Round 4 (14 Continuum):</strong> With your extra AP, cast multiple Temporal Shifts (+9 Continuum).
              <em>Continuum Level: 23 (Echo threshold reached!)</em>
            </li>
            <li>
              <strong>Round 5 (23 Continuum):</strong> Use Temporal Echo to double your next spell, then cast a powerful control spell like Time Lock for maximum effect.
              <em>Continuum Level: 15 (after consumption)</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Chronarch thrives on <strong>tactical foresight and timing</strong>—controlling the flow of battle by manipulating time itself.
          Master the ebb and flow of your Continuum, and you'll bend reality to your will on the battlefield.
        </p>
      </section>
    </div>
  );
};

export default ChronarchGuide;
