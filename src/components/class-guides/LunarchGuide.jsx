import React from 'react';
import './ClassGuides.css';

const LunarchGuide = () => {
  return (
    <div className="class-guide">
      <h2>Lunarch Guide</h2>
      <p className="class-subtitle">Moon Warrior • Phase Shifter • Celestial Guardian</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Lunarch</strong> is a mystical warrior who channels the power of the moon through different lunar phases.
          Unlike traditional fighters or spellcasters who maintain consistent abilities, Lunarchs cycle through different
          forms of power, adapting their strengths and weaknesses to match the current lunar phase they embody.
        </p>
        <p>
          In a party, Lunarchs serve as versatile combatants who can shift between roles based on their current phase.
          Their ability to adapt to different situations by changing phases makes them particularly effective in
          extended encounters where flexibility is key.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Lunar Phases</h3>
        <p>
          The Lunarch's signature mechanic is the Lunar Phase system—a cycle between three distinct phases (Full, Crescent, and New)
          that fundamentally changes their abilities, strengths, and weaknesses.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Lunar Phase Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Phase Cycling:</strong> Phases naturally progress in sequence (Full → Crescent → New → Full) every few rounds or can be shifted manually.</li>
            <li><strong>Phase Abilities:</strong> Each phase grants access to unique abilities and modifies your base attributes.</li>
            <li><strong>Phase Shifting:</strong> Spend Lunar Energy to manually shift phases out of sequence for tactical advantage.</li>
            <li><strong>Lunar Energy:</strong> A resource generated through combat actions that powers phase shifts and special abilities.</li>
            <li><strong>Phase Resonance:</strong> Staying in a phase longer builds Resonance, enhancing that phase's abilities.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Lunar Phase Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Primary Attribute</th>
                <th>Combat Role</th>
                <th>Special Abilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Moon</td>
                <td>Strength (+3)</td>
                <td>Offensive damage dealer</td>
                <td>Radiant damage, illumination, truth-seeing</td>
              </tr>
              <tr>
                <td>Crescent Moon</td>
                <td>Dexterity (+3)</td>
                <td>Mobile striker/controller</td>
                <td>Partial invisibility, illusions, mobility</td>
              </tr>
              <tr>
                <td>New Moon</td>
                <td>Constitution (+3)</td>
                <td>Defensive tank/support</td>
                <td>Damage absorption, shadow manipulation, stealth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Sample Phase Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Phase</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moonbeam Strike</td>
                <td>Full Moon</td>
                <td>Weapon attack deals additional 2d6 radiant damage and reveals invisible creatures</td>
              </tr>
              <tr>
                <td>Twilight Step</td>
                <td>Crescent Moon</td>
                <td>Teleport up to 30 feet and gain partial invisibility until your next attack</td>
              </tr>
              <tr>
                <td>Shadow Shroud</td>
                <td>New Moon</td>
                <td>Create a field of darkness that absorbs 50% of damage dealt to you and allies within 15 feet</td>
              </tr>
              <tr>
                <td>Lunar Flare</td>
                <td>Any (consumes Lunar Energy)</td>
                <td>Release stored lunar energy in a burst that deals damage based on current phase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Lunarch is understanding when to ride the natural phase cycle
          and when to force a phase shift. Each phase excels in different situations—Full Moon for direct combat,
          Crescent for mobility and control, New Moon for defense and stealth. Plan your phase shifts to align with
          anticipated battlefield developments, and remember that staying in a phase builds Resonance that enhances
          its effects, creating a tradeoff between consistency and adaptability.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Lunarchs have three distinct talent trees that emphasize different aspects of lunar magic.
          Each tree offers a unique playstyle and approach to phase management.
        </p>

        <div className="talent-tree">
          <h4>1. Radiant Warder</h4>
          <p><em>Focus on the power of the Full Moon and radiant energy.</em></p>
          <ul>
            <li><strong>Lunar Brilliance:</strong> Your Full Moon phase lasts longer and provides enhanced radiant damage.</li>
            <li><strong>Moonfire:</strong> Imbue weapons with burning lunar energy that damages and reveals hidden enemies.</li>
            <li><strong>Truth of Light:</strong> While in Full Moon phase, see through illusions and detect lies.</li>
            <li><strong>Lunar Ascendant (capstone):</strong> For 1d4 rounds, lock yourself in Full Moon phase with maximum Resonance, gaining immunity to darkness effects and doubling radiant damage.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who prefer offensive power and revelation. You'll excel at dealing damage and countering stealth and deception.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Gloam Stalker</h4>
          <p><em>Emphasize the mystery of the New Moon and shadow manipulation.</em></p>
          <ul>
            <li><strong>Void Embrace:</strong> Your New Moon phase provides enhanced stealth and damage absorption.</li>
            <li><strong>Shadow Manipulation:</strong> Create and control areas of magical darkness that you can see through.</li>
            <li><strong>Lunar Eclipse:</strong> While in New Moon phase, absorb magical energy directed at you.</li>
            <li><strong>Midnight Sovereign (capstone):</strong> For 1d4 rounds, lock yourself in New Moon phase with maximum Resonance, gaining incorporeality and the ability to travel through shadows.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on defense and stealth. You'll be particularly effective at protecting allies and controlling the battlefield through shadow manipulation.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Phase Dancer</h4>
          <p><em>Master the flow between phases and the transitional power of the Crescent Moon.</em></p>
          <ul>
            <li><strong>Fluid Shifting:</strong> Reduce the Lunar Energy cost of manual phase shifts.</li>
            <li><strong>Resonance Retention:</strong> Maintain a portion of Resonance when shifting phases.</li>
            <li><strong>Twilight Mastery:</strong> Your Crescent Moon phase grants enhanced mobility and illusion capabilities.</li>
            <li><strong>Lunar Harmony (capstone):</strong> For 1d4 rounds, gain the benefits of all three lunar phases simultaneously, though at reduced effectiveness.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy adaptability and frequent phase shifting. You'll excel at responding to changing battlefield conditions by quickly switching between phases.</p>
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
                <td><strong>Strength</strong></td>
                <td>Primary</td>
                <td>Enhanced during Full Moon phase, improves damage output</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Primary</td>
                <td>Enhanced during Crescent Moon phase, improves mobility and accuracy</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Primary</td>
                <td>Enhanced during New Moon phase, improves survivability</td>
              </tr>
              <tr>
                <td><strong>Spirit</strong></td>
                <td>Secondary</td>
                <td>Increases Lunar Energy generation and lunar magic effectiveness</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Improves perception of celestial influences and phase management</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps with understanding lunar lore and magical theory</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Enhances the visual manifestation of lunar phases</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Phase Shift:</strong> Manually change your lunar phase by spending Lunar Energy.</li>
          <li><strong>Lunar Attunement:</strong> Generate Lunar Energy through combat actions aligned with your current phase.</li>
          <li><strong>Moonbeam Strike:</strong> Channel lunar energy into weapon attacks for additional effects.</li>
          <li><strong>Lunar Flare:</strong> Release stored lunar energy in a burst that affects all nearby creatures.</li>
          <li><strong>Celestial Sense:</strong> Perceive magical auras and hidden creatures through lunar awareness.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Lunarch's approach to combat revolves around phase management and tactical shifting:</p>
        <ol className="round-flow">
          <li><strong>Assessment Phase:</strong> Evaluate the battlefield and determine which lunar phase would be most advantageous initially.</li>
          <li><strong>Alignment Phase:</strong> Shift to the appropriate phase if necessary, then use phase-specific abilities to establish your role.</li>
          <li><strong>Resonance Phase:</strong> Maintain your chosen phase to build Resonance, enhancing its effectiveness.</li>
          <li><strong>Adaptation Phase:</strong> When battlefield conditions change, decide whether to shift phases or continue building Resonance.</li>
          <li><strong>Culmination Phase:</strong> At maximum Resonance or in critical moments, unleash powerful phase-specific abilities for maximum effect.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use tokens or dice to track your current lunar phase and Resonance level.</li>
            <li>Coordinate phase shifts with party members' abilities—for example, shift to Full Moon when allies set up for a major offensive.</li>
            <li>Remember that different enemies may be vulnerable to different phases—undead and demons often suffer more from Full Moon abilities.</li>
            <li>Consider the environment when choosing phases—New Moon is more effective in darkness, while Full Moon can negate darkness advantages.</li>
            <li>Build Lunar Energy during less critical moments so you have reserves for emergency phase shifts when needed.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Lunarch:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Begin in Full Moon phase to illuminate the darkened battlefield, revealing hidden enemies. Use Moonbeam Strike against the nearest threat.
              <em>Phase: Full Moon, Resonance: 1, Lunar Energy: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Continue in Full Moon phase, building Resonance while dealing radiant damage to vulnerable undead enemies.
              <em>Phase: Full Moon, Resonance: 2, Lunar Energy: 2</em>
            </li>
            <li>
              <strong>Round 3:</strong> Enemy reinforcements arrive with ranged weapons. Spend Lunar Energy to shift to Crescent Moon phase for increased mobility and partial concealment.
              <em>Phase: Crescent Moon, Resonance: 1, Lunar Energy: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Use Twilight Step to quickly reposition to a flanking position, then attack with the advantage of partial invisibility.
              <em>Phase: Crescent Moon, Resonance: 2, Lunar Energy: 1</em>
            </li>
            <li>
              <strong>Round 5:</strong> Allies are taking heavy damage. Spend Lunar Energy to shift to New Moon phase and use Shadow Shroud to reduce incoming damage to the party.
              <em>Phase: New Moon, Resonance: 1, Lunar Energy: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Lunarch thrives on <strong>celestial cycles and adaptive power</strong>—shifting between phases to meet any challenge.
          Master the rhythm of the moon, and you'll wield the perfect balance of light and shadow on the battlefield.
        </p>
      </section>
    </div>
  );
};

export default LunarchGuide;
