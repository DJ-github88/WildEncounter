import React from 'react';
import './ClassGuides.css';

const HuntressGuide = () => {
  return (
    <div className="class-guide">
      <h2>Huntress Guide</h2>
      <p className="class-subtitle">Precision Tracker • Ambush Specialist • Deadly Predator</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Huntress</strong> is a specialized ranger who embodies the perfect predator, combining tracking expertise,
          deadly precision, and tactical ambushes. Unlike traditional rangers who focus on wilderness survival or druids who
          commune with nature, Huntresses have honed their skills specifically for the pursuit and elimination of prey.
        </p>
        <p>
          In a party, Huntresses serve as precision damage dealers and scouts who excel at tracking targets and setting up
          devastating attacks. Their ability to mark and pursue specific enemies while laying traps makes them particularly
          effective against priority targets and in prepared engagements.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Quarry Seal, Precision Stacks, and Focus Gauge</h3>
        <p>
          The Huntress's signature mechanics revolve around three interconnected systems: Quarry Seal for marking targets,
          Precision Stacks for building accuracy, and the Focus Gauge for unleashing powerful attacks.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Quarry Seal Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Target Marking:</strong> Place a Quarry Seal on a specific enemy, designating them as your primary prey.</li>
            <li><strong>Seal Benefits:</strong> Gain tracking bonuses, damage bonuses, and special abilities against your marked quarry.</li>
            <li><strong>Seal Limit:</strong> You can maintain only one Quarry Seal at a time (or more with talents).</li>
            <li><strong>Seal Transfer:</strong> When your quarry dies, you can transfer the seal to a new target as a bonus action.</li>
            <li><strong>Seal Empowerment:</strong> The longer a seal remains on a target, the more powerful its effects become.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Precision Stack Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Stack Generation:</strong> Gain Precision Stacks by observing your quarry, making successful attacks, or using certain abilities.</li>
            <li><strong>Maximum Stacks:</strong> You can accumulate up to 5 Precision Stacks.</li>
            <li><strong>Stack Benefits:</strong> Each stack provides +1 to attack rolls and +1d4 to damage against your quarry.</li>
            <li><strong>Stack Consumption:</strong> Certain powerful abilities consume Precision Stacks for enhanced effects.</li>
            <li><strong>Stack Persistence:</strong> Stacks remain until used or until your quarry dies or escapes.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Focus Gauge Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Gauge Filling:</strong> The Focus Gauge fills as you maintain line of sight with your quarry without attacking.</li>
            <li><strong>Gauge Levels:</strong> The gauge has three levels: Sighted (33%), Tracked (66%), and Locked (100%).</li>
            <li><strong>Level Benefits:</strong> Higher gauge levels provide increased critical hit chance and access to special abilities.</li>
            <li><strong>Gauge Consumption:</strong> Attacking your quarry consumes the gauge, with more powerful attacks using more focus.</li>
            <li><strong>Gauge Decay:</strong> The gauge decreases when you lose sight of your quarry or take damage.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Focus Gauge Levels:</h4>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Gauge Percentage</th>
                <th>Benefits</th>
                <th>Special Abilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sighted</td>
                <td>33%</td>
                <td>+2 to attack rolls, +10% critical chance</td>
                <td>Aimed Shot, Track Weakness</td>
              </tr>
              <tr>
                <td>Tracked</td>
                <td>66%</td>
                <td>+4 to attack rolls, +20% critical chance, ignore partial cover</td>
                <td>Vital Strike, Disable Limb</td>
              </tr>
              <tr>
                <td>Locked</td>
                <td>100%</td>
                <td>+6 to attack rolls, +30% critical chance, ignore all cover except full</td>
                <td>Perfect Shot, Killing Blow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Huntress is patience and preparation.
          Mark your quarry, build Precision Stacks through observation and initial attacks, then fill your Focus Gauge
          by maintaining visual contact. Once your resources are built up, unleash devastating attacks that consume
          these resources for maximum effect. Remember that rushing attacks without proper preparation significantly
          reduces your effectiveness—a true hunter knows when to wait for the perfect moment to strike.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Huntresses have three distinct talent trees that emphasize different aspects of the hunt.
          Each tree offers a unique playstyle and approach to tracking and eliminating prey.
        </p>

        <div className="talent-tree">
          <h4>1. Falcon's Eye</h4>
          <p><em>Focus on ranged precision and deadly accuracy from afar.</em></p>
          <ul>
            <li><strong>Eagle Vision:</strong> Increase your visual range and the speed at which your Focus Gauge fills.</li>
            <li><strong>Pinpoint Accuracy:</strong> Your Precision Stacks provide additional benefits to critical hit damage.</li>
            <li><strong>Wind Reader:</strong> Ignore penalties from distance, wind, and environmental factors.</li>
            <li><strong>Death from Afar (capstone):</strong> When your Focus Gauge is at Locked level, your next attack is guaranteed to critically hit and deals triple damage instead of double.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who prefer to eliminate targets from a safe distance. You'll excel at dealing massive damage with single, perfectly aimed shots.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Lynx Prowl</h4>
          <p><em>Emphasize stealth, ambush tactics, and close-quarters lethality.</em></p>
          <ul>
            <li><strong>Shadow Step:</strong> Move silently and leave no tracks when stalking your quarry.</li>
            <li><strong>Ambush Master:</strong> Gain significant damage bonuses when attacking from stealth or from behind.</li>
            <li><strong>Throat Cutter:</strong> Your critical hits against unaware enemies have a chance to instantly kill non-boss targets.</li>
            <li><strong>Perfect Predator (capstone):</strong> For 1d4 rounds, you become nearly invisible while moving, and your first attack against each enemy comes from stealth with all associated bonuses.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on stealth and ambush tactics. You'll be particularly effective at eliminating isolated targets without alerting others.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Viper Den</h4>
          <p><em>Master traps, poisons, and battlefield control to weaken prey before the kill.</em></p>
          <ul>
            <li><strong>Trap Expertise:</strong> Deploy more complex traps that affect larger areas or have multiple effects.</li>
            <li><strong>Venom Specialist:</strong> Your weapons and traps apply debilitating poisons that weaken targets over time.</li>
            <li><strong>Calculated Pursuit:</strong> Herd enemies into prepared killing zones with tactical maneuvers.</li>
            <li><strong>Web of Death (capstone):</strong> Quickly deploy a network of interconnected traps across the battlefield that trigger in sequence when the first is activated.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy preparation and battlefield control. You'll excel at weakening enemies before engaging and controlling their movement options.</p>
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
                <td>Increases attack accuracy, critical chance, and stealth capabilities</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Primary</td>
                <td>Improves tracking, perception, and Focus Gauge management</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Secondary</td>
                <td>Enhances damage with certain weapons and trap deployment</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides stamina for tracking and general survivability</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps with trap crafting and poison knowledge</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Huntresses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Quarry Mark:</strong> Place a Quarry Seal on a target, designating them as your primary prey.</li>
          <li><strong>Precision Shot:</strong> Make an attack that generates Precision Stacks on hit.</li>
          <li><strong>Focus Aim:</strong> Spend an action observing your quarry to rapidly fill your Focus Gauge.</li>
          <li><strong>Perfect Shot:</strong> Consume your Focus Gauge when at Locked level to make a devastating attack.</li>
          <li><strong>Deploy Trap:</strong> Place a trap that triggers when enemies pass through its area.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Huntress's approach to combat revolves around preparation and resource building:</p>
        <ol className="round-flow">
          <li><strong>Tracking Phase:</strong> Identify priority targets and place your Quarry Seal on the most dangerous enemy.</li>
          <li><strong>Preparation Phase:</strong> Deploy traps in strategic locations and position yourself for optimal engagement.</li>
          <li><strong>Observation Phase:</strong> Build your Focus Gauge by maintaining visual contact with your quarry without attacking.</li>
          <li><strong>Initial Strike Phase:</strong> Make preliminary attacks to build Precision Stacks while maintaining Focus.</li>
          <li><strong>Execution Phase:</strong> Once resources are maximized, unleash devastating attacks that consume your built-up resources.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice to track your current Precision Stacks and Focus Gauge level.</li>
            <li>Coordinate with party members to herd enemies into your traps or prepared killing zones.</li>
            <li>Remember that different quarries require different approaches—heavily armored targets might need Precision Stacks for armor penetration, while agile targets might require Focus for accuracy.</li>
            <li>Consider the environment when planning your hunt—high ground provides better sightlines for Focus building, while cluttered terrain offers more trap opportunities.</li>
            <li>When facing multiple threats, prioritize marking the most dangerous enemy as your quarry, even if they're not the easiest to eliminate.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Huntress:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Before combat begins, deploy a trap at a strategic chokepoint. When enemies appear, use Quarry Mark on the enemy leader.
              <em>Quarry: Enemy Leader, Precision Stacks: 0, Focus Gauge: 0%</em>
            </li>
            <li>
              <strong>Round 2:</strong> Use Focus Aim to observe your quarry from a hidden position, rapidly filling your Focus Gauge.
              <em>Quarry: Enemy Leader, Precision Stacks: 0, Focus Gauge: 50%</em>
            </li>
            <li>
              <strong>Round 3:</strong> Continue Focus Aim to reach the Locked level on your Focus Gauge.
              <em>Quarry: Enemy Leader, Precision Stacks: 0, Focus Gauge: 100% (Locked)</em>
            </li>
            <li>
              <strong>Round 4:</strong> Make a Precision Shot against your quarry, generating 2 Precision Stacks while maintaining your Focus Gauge.
              <em>Quarry: Enemy Leader, Precision Stacks: 2, Focus Gauge: 100% (Locked)</em>
            </li>
            <li>
              <strong>Round 5:</strong> Use Perfect Shot to consume your Focus Gauge, making a devastating attack with guaranteed critical hit and additional effects from your Precision Stacks.
              <em>Quarry: Enemy Leader, Precision Stacks: 2, Focus Gauge: 0%</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Huntress thrives on <strong>patience, precision, and preparation</strong>—marking prey and waiting for the perfect moment to strike.
          Master the art of the hunt, and you'll eliminate even the most dangerous targets with deadly efficiency.
        </p>
      </section>
    </div>
  );
};

export default HuntressGuide;
