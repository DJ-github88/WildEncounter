import React from 'react';
import './ClassGuides.css';

const MinstrelGuide = () => {
  return (
    <div className="class-guide">
      <h2>Minstrel Guide</h2>
      <p className="class-subtitle">Musical Virtuoso • Harmony Weaver • Support Specialist</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Minstrel</strong> is a versatile support class that harnesses the power of music and harmony to empower allies and control the battlefield.
          Unlike traditional bards, Minstrels use a unique musical combo system based on Western music theory, building sequences of notes that resolve into powerful cadences.
        </p>
        <p>
          In a party, Minstrels excel at buffing allies, debuffing enemies, and providing tactical advantages through their songs.
          Their ability to adapt to different situations makes them invaluable in any group composition.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Musical Combo System</h3>
        <p>
          The Minstrel's signature mechanic is a musical combo system built on Western music theory.
          Spells generate "notes" classified as Tonic, Subdominant, or Dominant, reflecting scale degrees.
          Casting spells in sequence builds musical tension, and then finishing on a Cadence resolves it for a powerful effect.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Musical Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Tonic Note (I):</strong> A foundational note that starts the progression. Many basic Minstrel spells grant +1 Tonic note. It represents the home key and provides a stable base for a melody.</li>
            <li><strong>Subdominant Note (IV):</strong> A transitional note that creates movement. Support and healing spells often grant +1 Subdominant note. It creates a sense of motion away from the tonic.</li>
            <li><strong>Dominant Note (V):</strong> A tension-building note that demands resolution. Offensive spells typically grant +1 Dominant note. It creates the strongest pull back to the tonic.</li>
            <li><strong>Cadence Activation:</strong> Once enough notes are stacked (typically one of each or multiple Dominants), a Cadence spell can be used as a finisher.</li>
            <li><strong>Note Decay:</strong> Notes fade over time if not used (typically after 3 rounds), encouraging dynamic play.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Common Cadence Patterns:</h4>
          <table>
            <thead>
              <tr>
                <th>Pattern</th>
                <th>Name</th>
                <th>Effect Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I-IV-V-I</td>
                <td>Perfect Cadence</td>
                <td>Balanced effect (moderate healing + damage)</td>
              </tr>
              <tr>
                <td>I-IV-IV-I</td>
                <td>Plagal Cadence</td>
                <td>Healing and protection focused</td>
              </tr>
              <tr>
                <td>V-V-I</td>
                <td>Authentic Cadence</td>
                <td>Damage and debuff focused</td>
              </tr>
              <tr>
                <td>I-V-IV</td>
                <td>Deceptive Cadence</td>
                <td>Control effects (stuns, charms)</td>
              </tr>
              <tr>
                <td>I-I-I-I</td>
                <td>Tonic Reinforcement</td>
                <td>Defensive buffs and damage reduction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Minstrel is understanding which note sequences to build for different situations. 
          Perfect Cadences are versatile for general use, while specialized cadences excel in specific scenarios. 
          Always be thinking one or two spells ahead to set up your desired resolution.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Minstrels have three distinct talent trees that emphasize different aspects of their musical abilities.
          Each tree offers a unique playstyle and approach to supporting the party.
        </p>

        <div className="talent-tree">
          <h4>1. Path of Leadership</h4>
          <p><em>Focus on support and morale buffs. Boost allies' stats and provide team-wide protection.</em></p>
          <ul>
            <li><strong>Anthem of Heroes:</strong> Your supportive songs grant allies bonuses to attacks and defenses.</li>
            <li><strong>Inspiring Chorus:</strong> Your presence inspires allies, granting them additional action points.</li>
            <li><strong>Rallying Cry:</strong> Remove fear and charm effects from allies and grant them temporary courage.</li>
            <li><strong>Heroic Overture (capstone):</strong> For 1d4 rounds, all allies gain +2 to all actions and resistance to control effects.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy a supportive role, focusing on empowering the entire party rather than individual contributions. Your buffs can turn the tide of battle by making everyone more effective.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Path of Emotion</h4>
          <p><em>Harness the emotional power of music to manipulate enemies and protect allies.</em></p>
          <ul>
            <li><strong>Soothing Melody:</strong> Calm emotions and reduce aggression in targets.</li>
            <li><strong>Dissonant Chord:</strong> Create jarring sounds that disrupt concentration and cause confusion.</li>
            <li><strong>Fugue of Fear:</strong> Instill terror in enemies, causing them to flee or become paralyzed.</li>
            <li><strong>Symphony of Emotion (capstone):</strong> Control the emotional state of all creatures in range, choosing effects like fear, charm, or confusion.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on battlefield control through emotional manipulation. You'll excel at neutralizing threats without dealing direct damage, making it perfect for players who enjoy tactical control.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Path of Rhythm</h4>
          <p><em>Emphasizes beat and tempo control. Use loud, percussive songs to manage large groups of enemies.</em></p>
          <ul>
            <li><strong>Drumbeat of Daze:</strong> Your rhythmic beats can slow or daze enemies.</li>
            <li><strong>Tempo Shift:</strong> Alter the flow of time around you, speeding allies or slowing enemies.</li>
            <li><strong>Thunderous Percussion:</strong> Create shockwaves of sound that damage and knock back enemies.</li>
            <li><strong>Crescendo (capstone):</strong> Build up a massive sonic wave that deals heavy damage and can stun all enemies in a large area.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree offers more direct damage options while maintaining control elements, perfect for players who want to contribute offensively while still providing unique support.</p>
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
                <td>Increases spell effectiveness, save DCs, and note generation</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Improves musical theory knowledge, increasing cadence effects</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Enhances instrument playing speed and defensive capabilities</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Increases stamina for longer performances and general survivability</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Minstrels</td>
              </tr>
              <tr>
                <td><strong>Spirit</strong></td>
                <td>Situational</td>
                <td>Useful for emotional manipulation in the Path of Emotion tree</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Spells:</h4>
        <ul className="ability-list">
          <li><strong>Harmonic Base:</strong> Creates a foundation of sound that grants +1 Tonic note and minor defensive buffs.</li>
          <li><strong>Healing Chorus:</strong> Restores health to allies while generating +1 Subdominant note.</li>
          <li><strong>Dissonant Strike:</strong> Damages an enemy with jarring notes, generating +1 Dominant note.</li>
          <li><strong>Perfect Resolution:</strong> Consumes I-IV-V sequence for a balanced effect of damage and healing.</li>
          <li><strong>Grand Cadence:</strong> Ultimate finisher that consumes all notes for maximum effect.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Minstrel's approach to combat revolves around building and resolving musical phrases:</p>
        <ol className="round-flow">
          <li><strong>Opening Phase:</strong> Establish your musical foundation with Tonic-generating abilities.</li>
          <li><strong>Development Phase:</strong> Add complexity with Subdominant and Dominant notes based on the situation.</li>
          <li><strong>Resolution Phase:</strong> Trigger a Cadence finisher when you've built the appropriate note combination.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice to track your note accumulation (d6 for each note type).</li>
            <li>Position yourself centrally to affect as many allies as possible with your area buffs.</li>
            <li>Save your most powerful cadences for critical moments rather than using them as soon as available.</li>
            <li>Coordinate with spellcasters to time your debuffs with their high-damage spells.</li>
            <li>Remember that different enemies may be more susceptible to different emotional effects.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Minstrel:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Harmonic Base to establish your foundation (+1 Tonic) and provide minor defensive buffs to nearby allies.
              <em>Notes: 1 Tonic</em>
            </li>
            <li>
              <strong>Round 2:</strong> Assess the battlefield. If allies need healing, cast Healing Chorus (+1 Subdominant). If enemies need controlling, cast Dissonant Strike (+1 Dominant).
              <em>Notes: 1 Tonic, 1 Subdominant/Dominant</em>
            </li>
            <li>
              <strong>Round 3:</strong> Complete your musical phrase with the appropriate note and prepare for resolution.
              <em>Notes: 1 Tonic, 1 Subdominant, 1 Dominant (Perfect Cadence ready)</em>
            </li>
            <li>
              <strong>Round 4:</strong> Cast Perfect Resolution, consuming your notes for a powerful effect that both damages enemies and heals allies.
              <em>Notes: 0 (reset)</em>
            </li>
            <li>
              <strong>Repeat:</strong> Begin building a new phrase based on the evolving battlefield conditions.
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Minstrel thrives on <strong>musical theory and timing</strong>—building harmonious combinations that resolve into powerful effects.
          Master the flow of notes and cadences, and you'll conduct the battlefield like a grand symphony.
        </p>
      </section>
    </div>
  );
};

export default MinstrelGuide;
