import React from 'react';
import './ClassGuides.css';

const ArcanoneerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Arcanoneer Guide</h2>
      <p className="class-subtitle">Elemental Engineer • Rune Specialist • Arcane Technician</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Arcanoneer</strong> is a specialized spellcaster who combines arcane knowledge with engineering principles,
          manipulating elemental forces through complex runic systems. Unlike traditional mages who cast spells through
          memorization and willpower, Arcanoneers approach magic as a science, creating modular spell components that
          can be combined in countless ways.
        </p>
        <p>
          In a party, Arcanoneers serve as versatile casters who excel at adapting their magical arsenal to meet specific
          challenges. Their ability to reconfigure their spells on the fly makes them particularly effective when facing
          diverse or unknown threats.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Element Slots and Volatility</h3>
        <p>
          The Arcanoneer's signature mechanics revolve around Element Slots—containers for different elemental runes—and
          Volatility, which measures the stability of their magical constructs.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Element Slot Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Slot Capacity:</strong> You begin with 3 Element Slots and can expand to a maximum of 8 through talents.</li>
            <li><strong>Elemental Runes:</strong> Each slot can hold one elemental rune (Fire, Water, Ice, Lightning, Earth, Arcane, Shield, Life).</li>
            <li><strong>Rune Combinations:</strong> Different combinations of runes produce different spell effects.</li>
            <li><strong>Slot Reconfiguration:</strong> You can swap runes in and out of slots during combat (takes an action).</li>
            <li><strong>Spell Forms:</strong> Runes can be channeled through different forms (Bolt, Beam, Spray, Wall, Mine) for varied effects.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Volatility Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Volatility Range:</strong> Measured from 0-100, representing the stability of your magical constructs.</li>
            <li><strong>Volatility Generation:</strong> Casting spells, especially complex or powerful ones, increases Volatility.</li>
            <li><strong>Threshold Effects:</strong> At certain thresholds (25, 50, 75, 100), different effects occur.</li>
            <li><strong>Volatility Venting:</strong> You can deliberately vent Volatility for various effects.</li>
            <li><strong>Critical Failure:</strong> At 100 Volatility, a catastrophic magical failure occurs, damaging you and nearby allies.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Elemental Rune Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Rune</th>
                <th>Primary Effect</th>
                <th>Volatility Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fire</td>
                <td>High damage, burning DoT</td>
                <td>High volatility generation</td>
              </tr>
              <tr>
                <td>Water</td>
                <td>Moderate damage, slowing effect</td>
                <td>Low volatility generation</td>
              </tr>
              <tr>
                <td>Ice</td>
                <td>Moderate damage, freezing effect</td>
                <td>Medium volatility generation</td>
              </tr>
              <tr>
                <td>Lightning</td>
                <td>High damage, chain effect</td>
                <td>Very high volatility generation</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>Low damage, knockdown effect</td>
                <td>Low volatility generation</td>
              </tr>
              <tr>
                <td>Arcane</td>
                <td>High damage, penetrates resistances</td>
                <td>High volatility generation</td>
              </tr>
              <tr>
                <td>Shield</td>
                <td>Defensive barrier, damage absorption</td>
                <td>Reduces volatility when hit</td>
              </tr>
              <tr>
                <td>Life</td>
                <td>Healing, regeneration effect</td>
                <td>Medium volatility generation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Spell Form Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Form</th>
                <th>Delivery Method</th>
                <th>Optimal Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bolt</td>
                <td>Single-target projectile</td>
                <td>High single-target damage</td>
              </tr>
              <tr>
                <td>Beam</td>
                <td>Linear energy stream</td>
                <td>Multiple targets in a line</td>
              </tr>
              <tr>
                <td>Spray</td>
                <td>Cone-shaped burst</td>
                <td>Groups of nearby enemies</td>
              </tr>
              <tr>
                <td>Wall</td>
                <td>Vertical barrier</td>
                <td>Battlefield control, protection</td>
              </tr>
              <tr>
                <td>Mine</td>
                <td>Placed explosive trap</td>
                <td>Area denial, preparation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Arcanoneer is balancing powerful spell combinations with Volatility management.
          Before combat, configure your Element Slots based on anticipated threats. During combat, monitor your Volatility carefully—stay
          below 75% for safety, or deliberately push toward 100% for a controlled vent when you need a powerful effect.
          Remember that different elemental combinations create synergies—Water + Lightning for chain conduction, Fire + Earth for magma effects, etc.
          Experiment with different combinations to discover the most effective spells for each situation.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Arcanoneers have three distinct talent trees that emphasize different aspects of their elemental engineering.
          Each tree offers a unique playstyle and approach to spell construction.
        </p>

        <div className="talent-tree">
          <h4>1. Elemental Ordnance</h4>
          <p><em>Focus on maximizing the destructive potential of elemental combinations.</em></p>
          <ul>
            <li><strong>Elemental Amplification:</strong> Your elemental runes deal increased damage based on your Intelligence.</li>
            <li><strong>Resonance Cascade:</strong> When combining certain elements, create additional chain reactions for bonus effects.</li>
            <li><strong>Volatility Channeling:</strong> Convert Volatility into bonus damage for your spells.</li>
            <li><strong>Elemental Overload (capstone):</strong> For 1d4 rounds, your elemental spells ignore resistance and deal maximum damage, but generate double Volatility.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on dealing maximum damage with their spells. You'll excel at creating devastating elemental combinations that can eliminate multiple threats quickly.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Runic Architect</h4>
          <p><em>Emphasize the structural aspects of spell creation and stability.</em></p>
          <ul>
            <li><strong>Expanded Capacity:</strong> Increase your maximum Element Slots and reduce the action cost of reconfiguring them.</li>
            <li><strong>Stable Constructs:</strong> Your spells generate less Volatility and have increased duration.</li>
            <li><strong>Runic Efficiency:</strong> Chance to cast spells without consuming the elemental charge.</li>
            <li><strong>Master Engineer (capstone):</strong> Create a persistent Runic Matrix that allows you to store pre-configured spell combinations for instant casting.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on versatility and efficiency. You'll be particularly effective at adapting to different situations by quickly reconfiguring your spells while maintaining stability.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Flux Tactician</h4>
          <p><em>Master the manipulation of Volatility itself as a weapon and tool.</em></p>
          <ul>
            <li><strong>Controlled Chaos:</strong> Gain benefits at higher Volatility levels instead of penalties.</li>
            <li><strong>Volatility Siphon:</strong> Transfer Volatility to enemies as damage or absorb it from allies as healing.</li>
            <li><strong>Flux Shaping:</strong> Create temporary constructs from pure Volatility energy.</li>
            <li><strong>Chaos Incarnate (capstone):</strong> Transform into a being of pure arcane energy for 1d4 rounds, gaining immunity to physical damage and unleashing devastating Volatility-based attacks.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy risk management and turning disadvantages into advantages. You'll excel at operating at high Volatility levels, using what would normally be dangerous as a source of power.</p>
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
                <td>Increases spell damage, critical chance, and maximum Element Slots</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Primary</td>
                <td>Improves Volatility management and elemental stability</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides resilience against Volatility backlash and general survivability</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Enhances spell accuracy and reaction time for Volatility management</td>
              </tr>
              <tr>
                <td><strong>Spirit</strong></td>
                <td>Tertiary</td>
                <td>Improves connection to elemental forces and resistance to magical effects</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Arcanoneers</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Arcanoneers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Elemental Configuration:</strong> Arrange elemental runes in your Element Slots to prepare spell combinations.</li>
          <li><strong>Runic Discharge:</strong> Release the energy of your configured elements in your chosen form (Bolt, Beam, etc.).</li>
          <li><strong>Volatility Vent:</strong> Deliberately release accumulated Volatility for various effects.</li>
          <li><strong>Elemental Analysis:</strong> Identify elemental weaknesses and resistances in targets.</li>
          <li><strong>Arcane Stabilization:</strong> Reduce your current Volatility level at the cost of an action.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Arcanoneer's approach to combat revolves around preparation, adaptation, and Volatility management:</p>
        <ol className="round-flow">
          <li><strong>Preparation Phase:</strong> Before combat, configure your Element Slots based on anticipated threats.</li>
          <li><strong>Analysis Phase:</strong> Use Elemental Analysis to identify enemy weaknesses and resistances.</li>
          <li><strong>Execution Phase:</strong> Cast spells using the most effective elemental combinations for the situation.</li>
          <li><strong>Adaptation Phase:</strong> Reconfigure Element Slots as needed to address emerging threats.</li>
          <li><strong>Stabilization Phase:</strong> Manage Volatility through venting or stabilization to prevent critical failure.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d100 to track your current Volatility level.</li>
            <li>Create "preset" Element Slot configurations for common scenarios (AoE damage, single-target burst, defensive, etc.).</li>
            <li>Coordinate with party members to maximize elemental synergies—for example, water spells are more effective against targets that have been set on fire.</li>
            <li>Remember that different spell forms have different Volatility costs—Bolts are stable, while Beams and Walls generate more Volatility.</li>
            <li>In emergency situations, deliberately push to 100% Volatility and use Volatility Vent for a powerful effect, accepting the backlash as a necessary sacrifice.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for an Arcanoneer:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Use Elemental Analysis to identify that enemies include fire elementals (vulnerable to water) and unarmored humanoids. Configure Element Slots with Water, Lightning, and Shield runes.
              <em>Volatility: 0%, Element Slots: Water, Lightning, Shield</em>
            </li>
            <li>
              <strong>Round 2:</strong> Cast a Water Beam through the group of fire elementals, dealing extra damage due to their vulnerability and applying a slowing effect.
              <em>Volatility: 0% → 15%, Element Slots: Water (used), Lightning, Shield</em>
            </li>
            <li>
              <strong>Round 3:</strong> Reconfigure the empty slot with another Lightning rune, then cast a dual-Lightning Bolt at the strongest remaining elemental for massive damage.
              <em>Volatility: 15% → 45%, Element Slots: Lightning, Lightning (used), Shield</em>
            </li>
            <li>
              <strong>Round 4:</strong> Humanoid enemies close in. Cast a Shield Wall to protect yourself and nearby allies, using your Shield rune.
              <em>Volatility: 45% → 55%, Element Slots: Lightning, Shield (used)</em>
            </li>
            <li>
              <strong>Round 5:</strong> Reconfigure your slots with Fire and Earth runes, then cast a Fire-Earth Spray (creating a magma effect) at the approaching humanoids.
              <em>Volatility: 55% → 80%, Element Slots: Fire (used), Earth (used)</em>
            </li>
            <li>
              <strong>Round 6:</strong> With Volatility dangerously high, use Arcane Stabilization to reduce it before it reaches critical levels.
              <em>Volatility: 80% → 50%, Element Slots: empty, empty</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Arcanoneer thrives on <strong>preparation, adaptation, and calculated risk</strong>—combining elemental forces into precisely engineered spells.
          Master the balance between power and stability, and you'll command the fundamental building blocks of magic itself.
        </p>
      </section>
    </div>
  );
};

export default ArcanoneerGuide;
