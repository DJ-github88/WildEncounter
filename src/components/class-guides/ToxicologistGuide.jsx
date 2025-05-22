import React from 'react';
import './ClassGuides.css';

const ToxicologistGuide = () => {
  return (
    <div className="class-guide">
      <h2>Toxicologist Guide</h2>
      <p className="class-subtitle">Poison Master • Alchemical Engineer • Gadget Specialist</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Toxicologist</strong> is a versatile specialist who combines scientific knowledge with deadly precision,
          utilizing poisons, alchemical concoctions, and mechanical contraptions to control the battlefield.
          Unlike traditional rogues or alchemists, Toxicologists approach combat as a laboratory experiment,
          methodically applying their toxic creations to devastating effect.
        </p>
        <p>
          In a party, Toxicologists serve as support damage dealers and controllers who excel at weakening powerful enemies
          and controlling areas with their devices. Their ability to craft specialized solutions for specific threats
          makes them particularly valuable against challenging foes with known weaknesses.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Vials, Reagents, and Contraption Slots</h3>
        <p>
          The Toxicologist's signature mechanics revolve around three interconnected resource systems:
          Vials for delivering poisons, Reagents for crafting, and Contraption Slots for deploying devices.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Vial System Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Vial Preparation:</strong> Before combat, prepare a limited number of vials with specific poisons or compounds.</li>
            <li><strong>Maximum Vials:</strong> You can carry prepared vials equal to your Intelligence modifier + half your level.</li>
            <li><strong>Application Methods:</strong> Apply vials to weapons (lasting 1d4 hits), throw as splash weapons, or inject directly.</li>
            <li><strong>Poison Types:</strong> Different poisons cause various effects (damage over time, debuffs, paralysis, etc.).</li>
            <li><strong>Vial Recovery:</strong> Empty vials can be recovered and refilled during short rests using reagents.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Reagent System Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Reagent Collection:</strong> Gather reagents from plants, monsters, or purchase from suppliers.</li>
            <li><strong>Reagent Types:</strong> Common, Uncommon, Rare, and Legendary reagents with increasing potency.</li>
            <li><strong>Crafting:</strong> Combine reagents to create poisons, antidotes, or special compounds.</li>
            <li><strong>Field Crafting:</strong> Create simple compounds during combat (takes an action) or complex ones during rests.</li>
            <li><strong>Reagent Storage:</strong> Carry a limited amount based on your specialized containers and strength.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Contraption System Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Contraption Slots:</strong> Deploy a limited number of mechanical devices simultaneously (equal to Intelligence modifier).</li>
            <li><strong>Deployment:</strong> Place contraptions on the battlefield as an action.</li>
            <li><strong>Activation:</strong> Contraptions can be triggered manually, by timers, or by proximity.</li>
            <li><strong>Contraption Types:</strong> Traps, turrets, smoke devices, alchemical dispensers, etc.</li>
            <li><strong>Recovery:</strong> Some contraptions can be recovered after use, others are consumed.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Poison Types:</h4>
          <table>
            <thead>
              <tr>
                <th>Poison</th>
                <th>Reagents</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venom Extract</td>
                <td>2 Common</td>
                <td>1d6 poison damage per round for 3 rounds</td>
              </tr>
              <tr>
                <td>Paralytic Toxin</td>
                <td>1 Common, 1 Uncommon</td>
                <td>Target must make Constitution save or be slowed for 1d4 rounds</td>
              </tr>
              <tr>
                <td>Neurotoxin</td>
                <td>2 Uncommon</td>
                <td>2d6 poison damage and -2 to all rolls for 2 rounds</td>
              </tr>
              <tr>
                <td>Blackout Poison</td>
                <td>1 Uncommon, 1 Rare</td>
                <td>Target must make Constitution save or fall unconscious for 1 round</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Toxicologist is preparation and adaptation.
          Before entering dangerous areas, prepare vials with poisons tailored to expected threats.
          During combat, strategically deploy contraptions to control the battlefield while applying
          the right poisons for each enemy type. Remember that your strength comes from having the
          right tool for each situation—research your enemies and prepare accordingly.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Toxicologists have three distinct talent trees that emphasize different aspects of their craft.
          Each tree offers a unique playstyle and approach to toxic warfare.
        </p>

        <div className="talent-tree">
          <h4>1. Chemistry</h4>
          <p><em>Focus on creating and applying advanced poisons and compounds.</em></p>
          <ul>
            <li><strong>Efficient Extraction:</strong> Extract more reagents from sources and improve reagent quality.</li>
            <li><strong>Potent Mixtures:</strong> Your poisons deal additional damage or have enhanced effects.</li>
            <li><strong>Persistent Toxins:</strong> Your poisons last longer and resist removal attempts.</li>
            <li><strong>Master Poisoner (capstone):</strong> For 1d4 rounds, all your poisons ignore resistance, have doubled duration, and apply secondary effects.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on debilitating enemies through powerful toxins. You'll excel at weakening powerful single targets and applying devastating status effects.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Contraptioneer</h4>
          <p><em>Specialize in mechanical devices and battlefield control.</em></p>
          <ul>
            <li><strong>Quick Deployment:</strong> Deploy contraptions as a bonus action instead of a standard action.</li>
            <li><strong>Expanded Capacity:</strong> Increase your maximum Contraption Slots.</li>
            <li><strong>Advanced Mechanisms:</strong> Your contraptions have enhanced effects or additional features.</li>
            <li><strong>Field of Invention (capstone):</strong> Deploy all your contraptions simultaneously in a coordinated network that triggers in sequence for devastating effect.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on battlefield control through mechanical devices. You'll be particularly effective at area denial and creating advantageous terrain for your party.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Venom Arts</h4>
          <p><em>Master the application of toxins in combat through specialized techniques.</em></p>
          <ul>
            <li><strong>Poisoned Weapons:</strong> Your weapon attacks apply poisons more efficiently and effectively.</li>
            <li><strong>Toxic Cloud:</strong> Create clouds of poison gas that affect multiple enemies.</li>
            <li><strong>Envenomed Strike:</strong> Special attacks that deliver poisons directly to a target's bloodstream for enhanced effect.</li>
            <li><strong>Toxic Mastery (capstone):</strong> Your body becomes naturally poisonous—enemies that strike you in melee are automatically poisoned, and your blood becomes a powerful reagent.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to incorporate poisons directly into their combat style. You'll excel at applying toxins quickly and efficiently in the heat of battle.</p>
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
                <td>Increases poison potency, contraption effectiveness, and maximum vials/slots</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Primary</td>
                <td>Improves accuracy with thrown vials, weapon attacks, and contraption placement</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides resistance to your own poisons and general survivability</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Enhances your ability to identify reagents and analyze enemy weaknesses</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Tertiary</td>
                <td>Allows carrying more reagents and equipment</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Toxicologists</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Poison Preparation:</strong> Create and fill vials with specific poisons during rests.</li>
          <li><strong>Apply Poison:</strong> Coat weapons or ammunition with prepared poisons.</li>
          <li><strong>Throw Vial:</strong> Hurl a vial as a ranged attack, creating splash effects.</li>
          <li><strong>Deploy Contraption:</strong> Place a mechanical device on the battlefield.</li>
          <li><strong>Field Analysis:</strong> Identify creature types and potential weaknesses.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Toxicologist's approach to combat revolves around preparation and tactical application:</p>
        <ol className="round-flow">
          <li><strong>Preparation Phase:</strong> Before combat, prepare appropriate vials based on expected threats.</li>
          <li><strong>Analysis Phase:</strong> At combat start, use Field Analysis to identify enemy types and vulnerabilities.</li>
          <li><strong>Control Phase:</strong> Deploy contraptions to control movement and create advantageous zones.</li>
          <li><strong>Application Phase:</strong> Apply the most effective poisons to weapons or throw vials at priority targets.</li>
          <li><strong>Adaptation Phase:</strong> Craft additional compounds as needed based on how the battle develops.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Keep a journal of reagent sources and poison recipes for quick reference.</li>
            <li>Coordinate with party members about which enemies you plan to poison to avoid wasting resources.</li>
            <li>Position contraptions to create synergies—for example, a trap that pushes enemies into a poison cloud.</li>
            <li>Remember that different creatures have different poison resistances—research before applying.</li>
            <li>Always carry antidotes for your own poisons in case of accidents or if allies are affected.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Toxicologist:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Use Field Analysis to identify that enemies include undead (poison resistant) and humans (vulnerable to neurotoxin). Deploy a Smoke Dispenser contraption to create cover.
              <em>Contraption Slots: 3 → 2</em>
            </li>
            <li>
              <strong>Round 2:</strong> Apply Neurotoxin to your weapon from a prepared vial, then attack the human enemy leader.
              <em>Vials: 5 → 4</em>
            </li>
            <li>
              <strong>Round 3:</strong> Deploy an Acid Sprayer contraption in a chokepoint to damage the approaching undead enemies.
              <em>Contraption Slots: 2 → 1</em>
            </li>
            <li>
              <strong>Round 4:</strong> Throw a Paralytic Toxin vial at a group of human enemies, potentially slowing multiple targets.
              <em>Vials: 4 → 3</em>
            </li>
            <li>
              <strong>Round 5:</strong> Use a bonus action to trigger your contraptions in sequence, then attack the weakened enemy leader again with your still-poisoned weapon.
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Toxicologist thrives on <strong>preparation and tactical application</strong>—bringing the right poisons and devices to each encounter.
          Master the art of toxic warfare, and you'll control the battlefield while systematically dismantling your enemies.
        </p>
      </section>
    </div>
  );
};

export default ToxicologistGuide;
