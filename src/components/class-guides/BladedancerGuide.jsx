import React from 'react';
import './ClassGuides.css';

const BladedancerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Bladedancer Guide</h2>
      <p className="class-subtitle">Agile Duelist • Flow Fighter • Momentum Master</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Bladedancer</strong> is a graceful warrior who transforms combat into an elegant, flowing dance of steel.
          Unlike traditional fighters who rely on brute force or rogues who depend on stealth, Bladedancers weave together
          attacks, parries, and movements into continuous sequences that build upon each other.
        </p>
        <p>
          In a party, Bladedancers serve as mobile damage dealers who excel at controlling the flow of battle through
          positioning and momentum. Their ability to move freely around the battlefield while maintaining offensive pressure
          makes them particularly effective against multiple opponents and in dynamic combat situations.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Edge and Flourish Tokens</h3>
        <p>
          The Bladedancer's signature mechanics revolve around Edge (a momentum resource) and Flourish Tokens
          (representing perfect execution of techniques). These resources interact with the Bladedancer's three combat stances:
          Viper, Wind, and Mirror.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Edge Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Edge Generation:</strong> Gain Edge by performing successful attacks, parries, or movement techniques.</li>
            <li><strong>Edge Scale:</strong> Edge ranges from 0-10, with higher values providing increasing bonuses.</li>
            <li><strong>Edge Benefits:</strong> Each point of Edge provides +1 to attack rolls and +5% movement speed.</li>
            <li><strong>Edge Decay:</strong> Edge decreases by 1 at the end of each round if you don't maintain momentum.</li>
            <li><strong>Edge Threshold:</strong> At 7+ Edge, you can perform special finishing moves or generate Flourish Tokens.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Flourish Token Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Token Generation:</strong> Earn Flourish Tokens by performing perfect executions or spending high Edge.</li>
            <li><strong>Maximum Tokens:</strong> You can hold up to 3 Flourish Tokens at once.</li>
            <li><strong>Token Spending:</strong> Spend tokens to perform spectacular techniques or enhance regular abilities.</li>
            <li><strong>Token Persistence:</strong> Unlike Edge, Flourish Tokens remain until spent, even between combats.</li>
            <li><strong>Stance Synergy:</strong> Different stances generate or use tokens in different ways.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Combat Stances:</h4>
          <table>
            <thead>
              <tr>
                <th>Stance</th>
                <th>Focus</th>
                <th>Edge Generation</th>
                <th>Special Ability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viper Stance</td>
                <td>Precision strikes</td>
                <td>+2 Edge on critical hits</td>
                <td>Attacks target weak points, dealing additional precision damage</td>
              </tr>
              <tr>
                <td>Wind Stance</td>
                <td>Mobility and flow</td>
                <td>+1 Edge when moving between targets</td>
                <td>Free movement after successful attacks, no opportunity attacks</td>
              </tr>
              <tr>
                <td>Mirror Stance</td>
                <td>Counterattacks</td>
                <td>+1 Edge when successfully parrying</td>
                <td>Reflect attacks back at enemies, counter-strike opportunities</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Bladedancer is maintaining momentum and knowing when to switch stances.
          Use Wind Stance to build initial Edge through mobility, switch to Viper Stance when you have advantage for critical hits,
          and adopt Mirror Stance when facing powerful attackers. Remember that your greatest strength is adaptability—don't
          stay in one stance when the situation calls for another.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Bladedancers have three distinct talent trees that emphasize different aspects of their flowing combat style.
          Each tree offers a unique playstyle and approach to the dance of blades.
        </p>

        <div className="talent-tree">
          <h4>1. Momentum</h4>
          <p><em>Focus on building and maintaining Edge for continuous offensive pressure.</em></p>
          <ul>
            <li><strong>Flow State:</strong> Edge decays more slowly, allowing you to maintain momentum longer.</li>
            <li><strong>Rising Tempo:</strong> Gain additional benefits at high Edge levels, including extra attacks.</li>
            <li><strong>Perpetual Motion:</strong> Generate Edge from additional sources, such as dodging or ally actions.</li>
            <li><strong>Crescendo (capstone):</strong> For 1d4 rounds, your Edge cannot decay below 7, and all your attacks generate additional Edge.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on maintaining offensive pressure. You'll excel at building and keeping high Edge for consistent damage output.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Precision</h4>
          <p><em>Emphasize perfect execution and Flourish Token generation.</em></p>
          <ul>
            <li><strong>Perfect Form:</strong> Increase critical hit range, generating more opportunities for Flourish Tokens.</li>
            <li><strong>Elegant Execution:</strong> Your Flourish Token abilities have enhanced effects.</li>
            <li><strong>Token Mastery:</strong> Increase your maximum Flourish Tokens to 5.</li>
            <li><strong>Grand Performance (capstone):</strong> Spend all Flourish Tokens to perform a spectacular attack sequence that strikes all enemies within range with perfect precision.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on quality over quantity. You'll generate and spend Flourish Tokens for powerful burst damage and special techniques.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Deflect</h4>
          <p><em>Master defensive techniques and counterattacks.</em></p>
          <ul>
            <li><strong>Blade Parry:</strong> Enhance your ability to deflect attacks, generating Edge from successful defenses.</li>
            <li><strong>Riposte Mastery:</strong> Your counterattacks after successful parries deal additional damage.</li>
            <li><strong>Reflective Form:</strong> Occasionally reflect spells and ranged attacks back at attackers.</li>
            <li><strong>Perfect Defense (capstone):</strong> For 1d4 rounds, automatically parry the first attack against you each round and counter with a free attack that generates a Flourish Token on hit.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy reactive combat. You'll excel at turning enemy aggression against them through well-timed defenses and counterattacks.</p>
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
                <td><strong>Dexterity</strong></td>
                <td>Primary</td>
                <td>Increases attack accuracy, defense, and movement capabilities</td>
              </tr>
              <tr>
                <td><strong>Agility</strong></td>
                <td>Primary</td>
                <td>Enhances stance transitions, Edge generation, and combat flow</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides stamina for maintaining complex sequences and general survivability</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Secondary</td>
                <td>Improves damage output, though less important than precision</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Enhances perception of combat flow and enemy patterns</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps with learning and adapting complex combat sequences</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Bladedancers, though it adds flair to performances</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Stance Shift:</strong> Change between Viper, Wind, and Mirror stances as a bonus action.</li>
          <li><strong>Flowing Strike:</strong> Attack and move without provoking opportunity attacks.</li>
          <li><strong>Blade Parry:</strong> Deflect incoming attacks with your weapon, potentially generating Edge.</li>
          <li><strong>Flourish:</strong> Spend a Flourish Token to enhance an attack or perform a special technique.</li>
          <li><strong>Momentum Surge:</strong> Convert high Edge into temporary combat advantages or Flourish Tokens.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Bladedancer's approach to combat revolves around stance management and resource building:</p>
        <ol className="round-flow">
          <li><strong>Initiation Phase:</strong> Enter Wind Stance to quickly close distance and begin building Edge through mobility.</li>
          <li><strong>Momentum Phase:</strong> Chain attacks and movements to accumulate Edge, switching stances as needed for the situation.</li>
          <li><strong>Execution Phase:</strong> Once high Edge is achieved, perform powerful techniques or generate Flourish Tokens.</li>
          <li><strong>Flourish Phase:</strong> Spend accumulated Flourish Tokens for spectacular finishing moves or save them for critical moments.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d10 to track your current Edge level and tokens to represent Flourish Tokens.</li>
            <li>Plan your movements to engage multiple enemies in sequence, maintaining Edge through continuous action.</li>
            <li>Switch to Mirror Stance when you anticipate enemy attacks, then immediately return to offensive stances.</li>
            <li>Coordinate with party members—a well-timed buff from an ally can help you maintain momentum during critical sequences.</li>
            <li>Remember that different enemy types call for different approaches—heavy armored foes may require Viper Stance precision, while mobile enemies might be better countered in Wind Stance.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Bladedancer:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Enter Wind Stance and use Flowing Strike to engage the nearest enemy, then continue movement to position near a second target.
              <em>Edge: 0 → 2, Flourish Tokens: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Maintain Wind Stance to attack both nearby enemies in sequence, using your free movement to avoid being surrounded.
              <em>Edge: 2 → 4, Flourish Tokens: 0</em>
            </li>
            <li>
              <strong>Round 3:</strong> Switch to Viper Stance to focus on the weakened target, scoring a critical hit that generates significant Edge.
              <em>Edge: 4 → 7, Flourish Tokens: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> With Edge at threshold level, convert 3 points into a Flourish Token while maintaining offensive pressure.
              <em>Edge: 7 → 5, Flourish Tokens: 0 → 1</em>
            </li>
            <li>
              <strong>Round 5:</strong> A powerful enemy prepares to attack. Switch to Mirror Stance and successfully parry their attack, countering with a Flourish-enhanced riposte that deals massive damage.
              <em>Edge: 5 → 6, Flourish Tokens: 1 → 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Bladedancer thrives on <strong>flow, precision, and adaptability</strong>—turning combat into an elegant dance of steel.
          Master the rhythm of battle, and you'll weave between enemies with deadly grace, striking with perfect precision.
        </p>
      </section>
    </div>
  );
};

export default BladedancerGuide;
