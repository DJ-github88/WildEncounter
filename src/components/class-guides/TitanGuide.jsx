import React from 'react';
import './ClassGuides.css';

const TitanGuide = () => {
  return (
    <div className="class-guide">
      <h2>Titan Guide</h2>
      <p className="class-subtitle">Colossal Warrior • Earth Bender • Living Mountain</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Titan</strong> is a massive warrior who channels the primal power of earth and stone into overwhelming physical might.
          Unlike traditional fighters who rely on weapons and armor, Titans transform their bodies into living stone,
          growing in size and power as they tap into deeper connections with the earth.
        </p>
        <p>
          In a party, Titans serve as imposing front-line combatants who excel at area control, crowd management, and raw physical power.
          Their ability to grow in size and manipulate the battlefield through earth-shaping makes them particularly effective
          in open environments where they can leverage their full potential.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Gravitas Gauge</h3>
        <p>
          The Titan's signature mechanic is the Gravitas Gauge—a resource that represents their connection to the earth's power.
          As they channel this energy, Titans progress through three stances of increasing power: Stone, Mountain, and Titanic.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Gravitas Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Gravitas:</strong> Gain Gravitas by planting yourself firmly (remaining stationary), striking the earth, or absorbing earth/stone damage.</li>
            <li><strong>Maximum Gravitas:</strong> The gauge ranges from 0-30, with thresholds at 10 (Stone), 20 (Mountain), and 30 (Titanic).</li>
            <li><strong>Stance Progression:</strong> As you cross thresholds, you automatically enter more powerful stances with increased size and abilities.</li>
            <li><strong>Gravitas Decay:</strong> Gravitas decreases when you move quickly or are knocked airborne (1-3 points per instance).</li>
            <li><strong>Spending Gravitas:</strong> Some abilities consume Gravitas for powerful earth-shaping or devastating attacks.</li>
            <li><strong>Size Changes:</strong> In Stone stance you grow slightly larger, in Mountain stance you become Large size, and in Titanic stance you become Huge.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Stance Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Stance</th>
                <th>Gravitas Required</th>
                <th>Size</th>
                <th>Passive Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normal</td>
                <td>0-9</td>
                <td>Medium</td>
                <td>No special benefits</td>
              </tr>
              <tr>
                <td>Stone</td>
                <td>10-19</td>
                <td>Medium (bulkier)</td>
                <td>+2 Strength, skin hardens (+2 AC), +1d6 damage to unarmed strikes</td>
              </tr>
              <tr>
                <td>Mountain</td>
                <td>20-29</td>
                <td>Large</td>
                <td>+4 Strength, +4 AC, +2d6 damage to unarmed strikes, 5ft reach increase, resistance to physical damage</td>
              </tr>
              <tr>
                <td>Titanic</td>
                <td>30</td>
                <td>Huge</td>
                <td>+6 Strength, +6 AC, +3d6 damage to unarmed strikes, 10ft reach increase, resistance to all damage except force</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Titan is strategic positioning and Gravitas management.
          Plan your movements carefully, as mobility reduces your power. Position yourself where you can remain stationary
          for multiple rounds to build Gravitas, ideally in locations where your increased size and reach can control
          critical areas of the battlefield. Remember that your size increases can be both an advantage (reach, intimidation)
          and a disadvantage (larger target, difficulty in confined spaces).
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Titans have three distinct talent trees that emphasize different aspects of their earth-bound power.
          Each tree offers a unique playstyle and approach to channeling primal might.
        </p>

        <div className="talent-tree">
          <h4>1. Earthshaper</h4>
          <p><em>Focus on manipulating the terrain and using earth magic.</em></p>
          <ul>
            <li><strong>Terraform:</strong> Reshape the battlefield by creating walls, pits, or pillars of stone.</li>
            <li><strong>Stone Projectiles:</strong> Tear chunks of earth to hurl at distant enemies.</li>
            <li><strong>Earth Communion:</strong> Generate Gravitas more quickly when in contact with natural earth or stone.</li>
            <li><strong>Tectonic Shift (capstone):</strong> Spend 15 Gravitas to create a localized earthquake that damages and knocks down all enemies within 30 feet.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to control the battlefield through terrain manipulation. You'll excel at creating advantageous positions for your allies while hindering enemy movement.</p>
        </div>

        <div className="talent-tree">
          <h4>2. World Breaker</h4>
          <p><em>Emphasize raw destructive power and devastating attacks.</em></p>
          <ul>
            <li><strong>Seismic Slam:</strong> Strike the ground to create shockwaves that damage and knock down nearby enemies.</li>
            <li><strong>Mountain Throw:</strong> Tear massive boulders from the earth to hurl at enemies, dealing area damage.</li>
            <li><strong>Crushing Grip:</strong> Your increased size allows you to grapple larger creatures with advantage.</li>
            <li><strong>Cataclysm (capstone):</strong> Spend 20 Gravitas to unleash your full destructive potential, dealing massive damage to all creatures and structures in a 50-foot radius.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on maximizing damage output and area control. You'll be particularly effective against groups of enemies and structures.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Immovable Juggernaut</h4>
          <p><em>Master defensive capabilities and unstoppable momentum.</em></p>
          <ul>
            <li><strong>Stone Skin:</strong> Your skin hardens further, providing additional AC and damage resistance.</li>
            <li><strong>Unstoppable Advance:</strong> Move without reducing Gravitas, maintaining your stance while repositioning.</li>
            <li><strong>Immovable Object:</strong> Become immune to forced movement and knockdown effects at higher Gravitas levels.</li>
            <li><strong>Living Mountain (capstone):</strong> For 1d4 rounds, become truly immovable—immune to all movement effects, damage reduction equal to your Gravitas, and automatic damage to any creature that strikes you in melee.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to be the ultimate tank. You'll be incredibly difficult to move or damage, serving as an immovable anchor for your party.</p>
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
                <td>Increases damage output and is further enhanced by stance bonuses</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Primary</td>
                <td>Improves HP pool and stamina for maintaining powerful stances</td>
              </tr>
              <tr>
                <td><strong>Spirit</strong></td>
                <td>Secondary</td>
                <td>Enhances your connection to earth elements and Gravitas generation</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Improves perception and earth-sense abilities</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Enhances intimidation from your imposing size</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Dump Stat</td>
                <td>Decreases as size increases; not important for Titans</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Titans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Earth Stance:</strong> Plant yourself firmly, generating Gravitas each round you remain stationary.</li>
          <li><strong>Seismic Slam:</strong> Strike the ground to create shockwaves that damage nearby enemies.</li>
          <li><strong>Stone Fist:</strong> Transform your hands into stone, enhancing unarmed damage.</li>
          <li><strong>Terraform:</strong> Reshape the battlefield by manipulating earth and stone.</li>
          <li><strong>Mountain's Strength:</strong> Temporarily channel additional earth power for enhanced strength.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Titan's approach to combat revolves around positioning and stance progression:</p>
        <ol className="round-flow">
          <li><strong>Positioning Phase:</strong> Move to a strategic location where you can remain stationary and control key areas.</li>
          <li><strong>Stone Stance Phase (10+ Gravitas):</strong> Enter Earth Stance to build Gravitas quickly, reaching Stone stance for initial enhancements.</li>
          <li><strong>Mountain Stance Phase (20+ Gravitas):</strong> Continue building Gravitas to reach Mountain stance, growing in size and power.</li>
          <li><strong>Titanic Stance Phase (30 Gravitas):</strong> Achieve maximum Gravitas for Titanic stance, unleashing your most devastating abilities.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d30 to track your current Gravitas level.</li>
            <li>Consider the environment before combat—open areas allow you to leverage your size, while confined spaces may limit your effectiveness.</li>
            <li>Use Terraform to create advantageous terrain before building Gravitas, setting up the battlefield for your later phases.</li>
            <li>Coordinate with party members about your increasing size and reach—allies should position to take advantage of enemies avoiding your control zone.</li>
            <li>Remember that your increased size makes you a primary target—ensure you have sufficient defenses before growing to larger stances.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Titan:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Move to a central position on the battlefield and use Terraform to create a raised platform of stone beneath you for better visibility and control.
              <em>Gravitas: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Enter Earth Stance, planting yourself firmly on your stone platform and beginning to generate Gravitas.
              <em>Gravitas: 0 → 5</em>
            </li>
            <li>
              <strong>Round 3:</strong> Maintain Earth Stance, continuing to build Gravitas while using Stone Fist to attack any enemies that come within reach.
              <em>Gravitas: 5 → 10 (Stone stance achieved!)</em>
            </li>
            <li>
              <strong>Round 4:</strong> With Stone stance active, your size increases slightly and your skin hardens. Continue maintaining position to build more Gravitas.
              <em>Gravitas: 10 → 15</em>
            </li>
            <li>
              <strong>Round 5:</strong> Use Seismic Slam to damage nearby enemies while continuing to build Gravitas.
              <em>Gravitas: 15 → 20 (Mountain stance achieved!)</em>
            </li>
            <li>
              <strong>Round 6:</strong> In Mountain stance, you grow to Large size with significantly increased reach. Use this to attack enemies that previously were out of range.
              <em>Gravitas: 20 → 25</em>
            </li>
            <li>
              <strong>Round 7:</strong> Continue building Gravitas while leveraging your increased size and power to control the battlefield.
              <em>Gravitas: 25 → 30 (Titanic stance achieved!)</em>
            </li>
            <li>
              <strong>Round 8:</strong> At maximum Gravitas and Huge size, unleash a devastating ability like Tectonic Shift to potentially end the battle.
              <em>Gravitas: 30 → 15 (spent on powerful ability)</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Titan thrives on <strong>steadfast positioning and growing power</strong>—becoming an increasingly dominant force as battle progresses.
          Master the flow of Gravitas and strategic positioning, and you'll transform into a living mountain that reshapes the battlefield to your will.
        </p>
      </section>
    </div>
  );
};

export default TitanGuide;
