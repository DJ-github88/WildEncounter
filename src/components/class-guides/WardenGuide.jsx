import React from 'react';
import './ClassGuides.css';

const WardenGuide = () => {
  return (
    <div className="class-guide">
      <h2>Warden Guide</h2>
      <p className="class-subtitle">Barrier Guardian • Zone Controller • Defensive Specialist</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Warden</strong> is a specialized defender who excels at creating and maintaining protective barriers.
          Unlike traditional tanks who absorb damage with armor and shields, Wardens project magical barriers that
          protect areas and allies, controlling the battlefield through strategic zone denial.
        </p>
        <p>
          In a party, Wardens serve as defensive specialists who excel at protecting vulnerable allies and controlling
          enemy movement. Their ability to create impenetrable barriers and punish enemies who breach them makes them
          particularly effective at holding strategic positions and managing battlefield flow.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Bulwark Meter and Ward Tokens</h3>
        <p>
          The Warden's signature mechanics revolve around the Bulwark Meter—a resource that powers barrier creation—and
          Ward Tokens that enhance those barriers with special properties.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Bulwark Meter Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Meter Generation:</strong> The Bulwark Meter fills through defensive actions, blocking attacks, or maintaining barriers.</li>
            <li><strong>Meter Capacity:</strong> The meter ranges from 0-100, with higher values allowing for larger or more numerous barriers.</li>
            <li><strong>Meter Consumption:</strong> Creating barriers consumes the meter based on the barrier's size and duration.</li>
            <li><strong>Barrier Types:</strong> Wardens can create two primary barrier types: Lines (walls) and Zones (areas).</li>
            <li><strong>Barrier Maintenance:</strong> Active barriers slowly drain the Bulwark Meter to remain in place.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Ward Token Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Token Generation:</strong> Earn Ward Tokens by successfully blocking attacks with barriers or through specific abilities.</li>
            <li><strong>Maximum Tokens:</strong> You can hold up to 5 Ward Tokens at once.</li>
            <li><strong>Token Spending:</strong> Spend tokens to imbue barriers with special properties or activate powerful defensive abilities.</li>
            <li><strong>Token Persistence:</strong> Ward Tokens remain until spent, even between combats.</li>
            <li><strong>Token Synergy:</strong> Spending multiple tokens on a single barrier creates more powerful effects.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Barrier Types:</h4>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Form</th>
                <th>Primary Use</th>
                <th>Meter Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barrier Line</td>
                <td>Wall-like structure</td>
                <td>Blocking movement, providing cover</td>
                <td>10 per 5 feet of length</td>
              </tr>
              <tr>
                <td>Barrier Zone</td>
                <td>Circular or square area</td>
                <td>Protecting allies, creating safe areas</td>
                <td>15 per 5-foot radius/side</td>
              </tr>
              <tr>
                <td>Personal Barrier</td>
                <td>Body-hugging shield</td>
                <td>Self-protection, emergency defense</td>
                <td>20 flat cost</td>
              </tr>
              <tr>
                <td>Reactive Barrier</td>
                <td>Instant flash shield</td>
                <td>Emergency protection against surprise attacks</td>
                <td>25 flat cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Ward Token Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Effect</th>
                <th>Token Cost</th>
                <th>Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reinforcement</td>
                <td>1 Token</td>
                <td>Barrier gains +10 HP per token and resistance to physical damage</td>
              </tr>
              <tr>
                <td>Reflection</td>
                <td>2 Tokens</td>
                <td>Barrier reflects 50% of damage it takes back to the attacker</td>
              </tr>
              <tr>
                <td>Repulsion</td>
                <td>2 Tokens</td>
                <td>Enemies touching the barrier are pushed 10 feet away</td>
              </tr>
              <tr>
                <td>Regeneration</td>
                <td>3 Tokens</td>
                <td>Barrier regenerates 5 HP per round and allies within heal 1d6 HP per round</td>
              </tr>
              <tr>
                <td>Retribution</td>
                <td>3 Tokens</td>
                <td>Enemies who attack the barrier take 2d6 force damage</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Warden is strategic barrier placement and resource management.
          Create barriers to divide the battlefield, protect vulnerable allies, or funnel enemies into disadvantageous positions.
          Balance your Bulwark Meter between creating new barriers and maintaining existing ones, and save Ward Tokens for
          critical moments when barrier enhancement can turn the tide of battle. Remember that your barriers are not just
          defensive tools—they can also be used offensively to control enemy movement and create tactical advantages.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Wardens have three distinct talent trees that emphasize different aspects of barrier manipulation.
          Each tree offers a unique playstyle and approach to battlefield control.
        </p>

        <div className="talent-tree">
          <h4>1. Wall-Smith</h4>
          <p><em>Focus on creating powerful, versatile barrier lines for maximum battlefield control.</em></p>
          <ul>
            <li><strong>Extended Barriers:</strong> Your barrier lines can be longer and taller without additional Bulwark cost.</li>
            <li><strong>Shaped Defense:</strong> Create curved, angled, or branching barrier lines for complex battlefield control.</li>
            <li><strong>Mobile Walls:</strong> Your barrier lines can slowly move after creation, pushing enemies or repositioning defenses.</li>
            <li><strong>Grand Bulwark (capstone):</strong> Create a massive barrier line that encircles a large area, protecting all allies within and trapping or excluding enemies.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on battlefield control through strategic wall placement. You'll excel at dividing enemy forces and creating advantageous combat zones.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Guardian's Vow</h4>
          <p><em>Emphasize protecting allies and enhancing barrier zones with beneficial effects.</em></p>
          <ul>
            <li><strong>Expanded Sanctuary:</strong> Your barrier zones are larger and provide additional benefits to allies within.</li>
            <li><strong>Warding Bond:</strong> Link yourself to allies, redirecting a portion of damage they take to your barriers instead.</li>
            <li><strong>Blessing of Protection:</strong> Allies within your barrier zones gain bonuses to saving throws and defense.</li>
            <li><strong>Sanctuary of Light (capstone):</strong> Create a powerful barrier zone that heals allies within, cleanses negative effects, and prevents enemies from entering.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on support and protection. You'll be particularly effective at keeping vulnerable party members alive and enhancing their capabilities through protective zones.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Punishing Rampart</h4>
          <p><em>Master offensive barrier techniques that damage and control enemies.</em></p>
          <ul>
            <li><strong>Barrier Spikes:</strong> Your barriers deal damage to enemies that touch or attack them.</li>
            <li><strong>Force Projection:</strong> Push, pull, or slam enemies using your barriers as weapons.</li>
            <li><strong>Constricting Walls:</strong> Create barriers that wrap around enemies, restraining them and dealing ongoing damage.</li>
            <li><strong>Crushing Convergence (capstone):</strong> Create multiple barriers that rapidly converge on a point, dealing massive damage to enemies caught between them.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to use barriers offensively. You'll excel at turning your defensive capabilities into weapons that control and damage enemies.</p>
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
                <td><strong>Constitution</strong></td>
                <td>Primary</td>
                <td>Increases barrier strength and Bulwark Meter capacity</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Primary</td>
                <td>Improves barrier control, Ward Token generation, and defensive awareness</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Secondary</td>
                <td>Enhances physical attacks and barrier manipulation abilities</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Helps with complex barrier formations and tactical planning</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Improves reaction time for emergency barrier deployment</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Wardens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Barrier Line:</strong> Create a wall-like barrier that blocks movement and attacks.</li>
          <li><strong>Barrier Zone:</strong> Create a protective area that shields allies within.</li>
          <li><strong>Ward Enhancement:</strong> Spend Ward Tokens to imbue barriers with special properties.</li>
          <li><strong>Bulwark Charge:</strong> Rapidly generate Bulwark Meter through focused concentration.</li>
          <li><strong>Reactive Defense:</strong> Create an instant barrier to block an incoming attack.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Warden's approach to combat revolves around strategic barrier placement and resource management:</p>
        <ol className="round-flow">
          <li><strong>Assessment Phase:</strong> Evaluate the battlefield and identify key positions to control or protect.</li>
          <li><strong>Establishment Phase:</strong> Create initial barriers to establish defensive positions and control enemy movement.</li>
          <li><strong>Enhancement Phase:</strong> Spend Ward Tokens to strengthen critical barriers or add offensive capabilities.</li>
          <li><strong>Maintenance Phase:</strong> Balance creating new barriers with maintaining existing ones as the battle evolves.</li>
          <li><strong>Adaptation Phase:</strong> Adjust barrier placement and properties in response to changing battlefield conditions.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d100 to track your current Bulwark Meter level and tokens to represent Ward Tokens.</li>
            <li>Create barriers that funnel enemies into areas where your party's area-effect spellcasters can maximize damage.</li>
            <li>Remember that barriers can be used vertically to block flying enemies or provide overhead protection.</li>
            <li>Coordinate barrier placement with party members to create kill zones or safe retreat paths.</li>
            <li>Consider the environment when placing barriers—use natural chokepoints to create more efficient defensive positions.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Warden:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Assess the battlefield. Enemies are approaching through a narrow passage. Use Bulwark Charge to quickly generate meter.
              <em>Bulwark Meter: 0 → 30, Ward Tokens: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Create a Barrier Line across the narrow passage, forcing enemies to funnel through a single point. The barrier blocks several attacks, generating Ward Tokens.
              <em>Bulwark Meter: 30 → 20, Ward Tokens: 0 → 2</em>
            </li>
            <li>
              <strong>Round 3:</strong> Spend 2 Ward Tokens to enhance the barrier with Reflection, causing attackers to take damage when striking it. Create a small Barrier Zone around your party's vulnerable spellcaster.
              <em>Bulwark Meter: 20 → 5, Ward Tokens: 2 → 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Use Bulwark Charge to regenerate meter while maintaining existing barriers. The enhanced barrier reflects damage to attackers, generating additional Ward Tokens.
              <em>Bulwark Meter: 5 → 25, Ward Tokens: 0 → 1</em>
            </li>
            <li>
              <strong>Round 5:</strong> Enemies breach the first barrier. Create a new Barrier Line to divide the enemy force, then spend 1 Ward Token to enhance it with Reinforcement for durability.
              <em>Bulwark Meter: 25 → 15, Ward Tokens: 1 → 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Warden thrives on <strong>strategic control and impenetrable defense</strong>—shaping the battlefield with barriers that protect allies and confound enemies.
          Master the art of barrier manipulation, and you'll ensure your party always fights on favorable terms.
        </p>
      </section>
    </div>
  );
};

export default WardenGuide;
