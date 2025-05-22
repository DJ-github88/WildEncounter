import React from 'react';
import './ClassGuides.css';

const PlaguebringerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Plaguebringer Guide</h2>
      <p className="class-subtitle">Disease Master • Contagion Specialist • Decay Manipulator</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Plaguebringer</strong> is a sinister spellcaster who specializes in diseases, decay, and biological warfare.
          Unlike traditional necromancers who focus on death itself, Plaguebringers are masters of the slow corruption of life,
          using contagions and toxins to weaken enemies and spread suffering.
        </p>
        <p>
          In a party, Plaguebringers serve as damage-over-time specialists and debuffers who excel at weakening groups of enemies.
          Their ability to apply stacking effects that worsen over time makes them particularly effective in longer encounters
          and against durable foes.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Plague Stacks</h3>
        <p>
          The Plaguebringer's signature mechanic is Plague Stacks – a resource that represents the growing potency of diseases
          and contagions they spread. As enemies suffer from the Plaguebringer's diseases, Plague Stacks accumulate on them,
          increasing damage and unlocking additional effects.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Plague Stack Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Applying Stacks:</strong> Most Plaguebringer abilities apply 1-3 Plague Stacks to targets.</li>
            <li><strong>Maximum Stacks:</strong> Targets can accumulate up to 10 Plague Stacks.</li>
            <li><strong>Stack Effects:</strong> Each stack increases the damage of disease effects and can trigger additional symptoms at certain thresholds.</li>
            <li><strong>Contagion:</strong> At higher stack levels, diseases can spread to nearby creatures.</li>
            <li><strong>Consuming Stacks:</strong> Some abilities consume Plague Stacks to produce powerful immediate effects.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Plague Stack Thresholds:</h4>
          <table>
            <thead>
              <tr>
                <th>Stacks</th>
                <th>Disease Stage</th>
                <th>Effects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-3</td>
                <td>Infection</td>
                <td>1d4 poison damage per round, -1 to all rolls per stack</td>
              </tr>
              <tr>
                <td>4-6</td>
                <td>Fever</td>
                <td>1d6 poison damage per round, -2 to all rolls per stack, 25% chance to miss actions</td>
              </tr>
              <tr>
                <td>7-9</td>
                <td>Delirium</td>
                <td>1d8 poison damage per round, -3 to all rolls per stack, 50% chance to miss actions, can spread to adjacent creatures</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Terminal</td>
                <td>2d8 poison damage per round, -4 to all rolls, 75% chance to miss actions, automatically spreads to adjacent creatures</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Plaguebringer is patience and strategic stack management.
          Focus on building Plague Stacks on priority targets while maintaining some level of infection on secondary targets.
          Remember that your power grows over time—in the early rounds of combat, focus on applying diseases to as many targets as possible,
          then use stack-consuming abilities for burst damage when needed.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Plaguebringers have three distinct talent trees that emphasize different aspects of disease manipulation.
          Each tree offers a unique playstyle and approach to spreading contagion.
        </p>

        <div className="talent-tree">
          <h4>1. Virulent Host</h4>
          <p><em>Focus on becoming a carrier of multiple diseases and spreading them efficiently.</em></p>
          <ul>
            <li><strong>Disease Carrier:</strong> You can maintain more active diseases simultaneously.</li>
            <li><strong>Contagious Aura:</strong> Enemies within 10 feet of you automatically gain 1 Plague Stack per round.</li>
            <li><strong>Pandemic:</strong> Your diseases spread to additional targets when they reach high stack levels.</li>
            <li><strong>Patient Zero (capstone):</strong> For 1d4 rounds, all your diseases apply double Plague Stacks and automatically spread to all enemies within 30 feet.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to affect as many enemies as possible. You'll excel at group encounters where your diseases can spread through enemy ranks.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Rotmancer</h4>
          <p><em>Specialize in maximizing the damage and debilitating effects of diseases.</em></p>
          <ul>
            <li><strong>Virulent Strain:</strong> Your diseases deal additional damage per Plague Stack.</li>
            <li><strong>Degenerative Symptoms:</strong> Enemies with Plague Stacks suffer additional penalties to physical attributes.</li>
            <li><strong>Necrotic Conversion:</strong> Your disease damage partially converts to necrotic damage, which cannot be resisted by poison immunity.</li>
            <li><strong>Flesh Rot (capstone):</strong> Consume all Plague Stacks on a target to deal massive immediate damage and permanently reduce their maximum HP.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on maximizing the damage potential of your diseases. You'll be particularly effective against durable single targets that you can load with Plague Stacks.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Pathogen Herald</h4>
          <p><em>Embrace unpredictability and mutation in your diseases for varied effects.</em></p>
          <ul>
            <li><strong>Adaptive Strain:</strong> Your diseases have a chance to mutate, changing their effects randomly.</li>
            <li><strong>Evolutionary Leap:</strong> When a disease reaches maximum Plague Stacks, it evolves into a more powerful form.</li>
            <li><strong>Plague Mastery:</strong> Gain the ability to control disease mutations, choosing from several possible effects.</li>
            <li><strong>Plague Lord (capstone):</strong> Create a unique super-plague that combines the effects of multiple diseases into one devastating contagion.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy adaptability and unpredictability. Your diseases will have varied effects that can be tailored to different situations.</p>
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
                <td>Increases disease potency, Plague Stack effectiveness, and spell save DCs</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Improves your resistance to your own diseases and general survivability</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Enhances your ability to identify weaknesses and target diseases effectively</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Provides some defensive capability</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Useful for certain plague-spreading abilities that rely on proximity</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Plaguebringers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Pestilent Touch:</strong> Melee touch attack that applies 2 Plague Stacks and initial disease damage.</li>
          <li><strong>Miasma:</strong> Create a cloud of disease that applies 1 Plague Stack per round to all creatures within it.</li>
          <li><strong>Virulent Injection:</strong> Ranged attack that applies 3 Plague Stacks and deals immediate poison damage.</li>
          <li><strong>Consume Disease:</strong> Remove all Plague Stacks from a target to deal immediate damage based on stack count.</li>
          <li><strong>Plague Shield:</strong> Convert Plague Stacks on yourself into temporary damage resistance.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Plaguebringer's approach to combat revolves around disease application and management:</p>
        <ol className="round-flow">
          <li><strong>Infection Phase:</strong> Apply initial diseases to as many targets as possible to begin stack accumulation.</li>
          <li><strong>Amplification Phase:</strong> Focus on priority targets to build their Plague Stacks to higher thresholds.</li>
          <li><strong>Spread Phase:</strong> Once diseases reach contagious levels, position yourself to maximize spread to new targets.</li>
          <li><strong>Consumption Phase:</strong> When burst damage is needed, consume Plague Stacks on heavily infected targets.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice or tokens to track Plague Stacks on multiple targets.</li>
            <li>Prioritize targets based on their Constitution scores—creatures with lower Con will suffer more from your diseases.</li>
            <li>Remember that some creatures may be immune to poison or disease effects—have alternative strategies ready.</li>
            <li>Position yourself to maximize disease spread in crowded battlefields.</li>
            <li>Coordinate with party members to focus fire on heavily infected targets when they reach maximum Plague Stacks.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Plaguebringer:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Miasma in the center of a group of enemies, applying 1 Plague Stack to each of them.
              <em>Enemy Plague Stacks: 1 each</em>
            </li>
            <li>
              <strong>Round 2:</strong> Use Virulent Injection on the strongest enemy, applying 3 additional Plague Stacks.
              <em>Primary Target Plague Stacks: 4 (Fever stage), Others: 2 each</em>
            </li>
            <li>
              <strong>Round 3:</strong> Cast Pestilent Touch on the primary target, adding 2 more Plague Stacks. The Miasma continues to affect all enemies.
              <em>Primary Target Plague Stacks: 6 (Fever stage), Others: 3 each</em>
            </li>
            <li>
              <strong>Round 4:</strong> Use Virulent Injection again on the primary target, pushing them to 9 Plague Stacks. The disease is now contagious and spreads to adjacent enemies.
              <em>Primary Target Plague Stacks: 9 (Delirium stage), Adjacent Enemies: +1 stack each</em>
            </li>
            <li>
              <strong>Round 5:</strong> With the primary target heavily infected, use Consume Disease to remove all 9 Plague Stacks and deal 9d6 immediate damage, likely finishing them off. Focus on building stacks on a new primary target.
              <em>Primary Target Plague Stacks: 0, Others: varying levels</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Plaguebringer thrives on <strong>patience and escalation</strong>—building devastating diseases that grow more powerful over time.
          Master the art of contagion, and you'll watch your enemies wither away as your plagues consume them from within.
        </p>
      </section>
    </div>
  );
};

export default PlaguebringerGuide;
