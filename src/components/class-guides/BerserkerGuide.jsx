import React from 'react';
import './ClassGuides.css';

const BerserkerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Berserker Guide</h2>
      <p className="class-subtitle">Rage Warrior • Fury Incarnate • Unstoppable Force</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Berserker</strong> is a ferocious warrior who channels inner rage into devastating combat prowess.
          Unlike traditional fighters who rely on technique and precision, Berserkers embrace primal fury,
          sacrificing defense for overwhelming offensive power and becoming more dangerous as battle progresses.
        </p>
        <p>
          In a party, Berserkers serve as front-line damage dealers who excel at eliminating priority targets
          and drawing enemy attention. Their ability to sustain themselves through combat fury and deal massive
          damage makes them particularly effective against powerful single enemies.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Fury-Momentum System</h3>
        <p>
          The Berserker's signature mechanic is the Fury-Momentum System—a resource that builds as they deal and take damage.
          Fury Points accumulate during combat, reaching thresholds that unlock increasingly powerful abilities and stat bonuses.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Fury Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Fury:</strong> Gain Fury Points by dealing damage (1 point per 5 damage dealt) and taking damage (1 point per 3 damage taken).</li>
            <li><strong>Maximum Fury:</strong> You can hold up to 30 Fury Points at once.</li>
            <li><strong>Fury Thresholds:</strong> At 10, 20, and 30 Fury, you reach new thresholds (Ember, Blaze, and Inferno) that unlock powerful abilities.</li>
            <li><strong>Fury Decay:</strong> Fury Points gradually decay when out of combat (1 point per round).</li>
            <li><strong>Momentum:</strong> Some abilities generate Momentum stacks that enhance your next attack or provide temporary benefits.</li>
            <li><strong>Fury Spending:</strong> Certain abilities consume Fury Points for powerful immediate effects.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Fury Threshold Effects:</h4>
          <table>
            <thead>
              <tr>
                <th>Threshold</th>
                <th>Fury Required</th>
                <th>Passive Benefits</th>
                <th>Abilities Unlocked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ember</td>
                <td>10 Fury</td>
                <td>+2 to Strength, +10% movement speed</td>
                <td>Reckless Strike, Intimidating Roar</td>
              </tr>
              <tr>
                <td>Blaze</td>
                <td>20 Fury</td>
                <td>+4 to Strength, +20% movement speed, +1 attack per round</td>
                <td>Furious Charge, Blood Frenzy</td>
              </tr>
              <tr>
                <td>Inferno</td>
                <td>30 Fury</td>
                <td>+6 to Strength, +30% movement speed, +2 attacks per round, damage resistance</td>
                <td>Unstoppable Rage, Devastating Blow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Berserker is strategic Fury management.
          In the early rounds of combat, focus on building Fury quickly through aggressive attacks.
          Once you reach higher thresholds, you can either maintain that level for the passive benefits
          or spend Fury on powerful abilities for burst damage. Remember that taking damage builds Fury,
          but don't become reckless—you still need to survive to use your accumulated Fury.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Berserkers have three distinct talent trees that emphasize different aspects of their rage-fueled combat style.
          Each tree offers a unique playstyle and approach to fury management.
        </p>

        <div className="talent-tree">
          <h4>1. Path of Carnage</h4>
          <p><em>Focus on maximizing offensive output and devastating attacks.</em></p>
          <ul>
            <li><strong>Fury Generation:</strong> Generate Fury Points more quickly from dealing damage.</li>
            <li><strong>Brutal Strikes:</strong> Your attacks have a chance to deal additional damage based on current Fury.</li>
            <li><strong>Massacre:</strong> Each kill grants temporary Strength and attack speed bonuses.</li>
            <li><strong>Avatar of War (capstone):</strong> For 1d4 rounds, all your attacks are critical hits and generate double Fury.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus purely on dealing maximum damage. You'll excel at eliminating multiple enemies through overwhelming offensive power.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Path of Resilience</h4>
          <p><em>Emphasize survivability through self-healing and damage resistance.</em></p>
          <ul>
            <li><strong>Bloodthirst:</strong> Heal for a portion of damage dealt based on current Fury level.</li>
            <li><strong>Hardened by Battle:</strong> Gain increasing damage resistance as you take damage.</li>
            <li><strong>Defiant Stance:</strong> Convert Fury into temporary hit points and damage reduction.</li>
            <li><strong>Undying Rage (capstone):</strong> When you would be reduced to 0 HP, instead remain at 1 HP and enter Inferno threshold regardless of current Fury.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on sustainability and survival. You'll be able to stay in the fight longer through self-healing and damage mitigation while still dealing significant damage.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Path of Momentum</h4>
          <p><em>Master the flow of battle through movement, positioning, and momentum stacks.</em></p>
          <ul>
            <li><strong>Battle Flow:</strong> Gain movement speed and dodge chance based on Momentum stacks.</li>
            <li><strong>Crushing Advance:</strong> Moving before attacking increases damage and generates additional Fury.</li>
            <li><strong>Unstoppable Force:</strong> Ignore movement penalties and crowd control effects at high Fury levels.</li>
            <li><strong>Whirlwind of Death (capstone):</strong> Spend all Fury to attack all enemies within range, generating one Momentum stack per enemy hit.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy mobility and positioning. You'll excel at controlling the battlefield through movement while building devastating combinations.</p>
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
                <td>Increases damage output, which is further amplified by Fury bonuses</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Primary</td>
                <td>Improves survivability and allows you to take more damage to build Fury</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Enhances initiative and critical hit chance</td>
              </tr>
              <tr>
                <td><strong>Agility</strong></td>
                <td>Secondary</td>
                <td>Improves movement speed and dodge chance</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Helps resist mind-affecting abilities that could interrupt your rage</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Berserkers</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Useful for intimidation effects but not essential</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Rage:</strong> Enter a state of fury that increases damage dealt and taken, generating Fury more quickly.</li>
          <li><strong>Reckless Strike:</strong> A powerful attack that deals extra damage but leaves you vulnerable.</li>
          <li><strong>Furious Charge:</strong> Rush toward an enemy, dealing damage and generating Momentum.</li>
          <li><strong>Blood Frenzy:</strong> Temporarily increase attack speed based on current Fury level.</li>
          <li><strong>Intimidating Roar:</strong> Frighten nearby enemies, reducing their effectiveness in combat.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Berserker's approach to combat revolves around Fury building and threshold management:</p>
        <ol className="round-flow">
          <li><strong>Initiation Phase:</strong> Enter Rage and charge into combat, focusing on quickly building initial Fury.</li>
          <li><strong>Ember Phase (10+ Fury):</strong> Use Ember threshold abilities while continuing to build Fury through aggressive attacks.</li>
          <li><strong>Blaze Phase (20+ Fury):</strong> Leverage increased attack speed and movement to control the battlefield and eliminate priority targets.</li>
          <li><strong>Inferno Phase (30 Fury):</strong> Unleash your most devastating abilities for maximum damage output.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use a d30 or three d10s to track your current Fury level.</li>
            <li>Remember that different enemies require different approaches—against hard-hitting foes, you may want to focus more on the Path of Resilience abilities.</li>
            <li>Coordinate with your party's healer about your increased damage intake during Rage.</li>
            <li>Use Intimidating Roar to control groups of weaker enemies while focusing your attacks on stronger targets.</li>
            <li>Don't be afraid to temporarily retreat if your health gets too low—you can't use your Fury if you're dead.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Berserker:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Activate Rage and use Furious Charge to close distance with the enemy leader, dealing damage and generating initial Fury.
              <em>Fury: 0 → 6</em>
            </li>
            <li>
              <strong>Round 2:</strong> Attack aggressively with basic attacks, taking some damage in return but building more Fury.
              <em>Fury: 6 → 12 (Ember threshold reached!)</em>
            </li>
            <li>
              <strong>Round 3:</strong> With Ember threshold active, use Reckless Strike for increased damage, continuing to build Fury.
              <em>Fury: 12 → 18</em>
            </li>
            <li>
              <strong>Round 4:</strong> Continue aggressive attacks, reaching the Blaze threshold and gaining an additional attack per round.
              <em>Fury: 18 → 23 (Blaze threshold reached!)</em>
            </li>
            <li>
              <strong>Round 5:</strong> Activate Blood Frenzy to further increase attack speed, then unleash a flurry of attacks with your enhanced action economy, pushing toward the Inferno threshold.
              <em>Fury: 23 → 30 (Inferno threshold reached!)</em>
            </li>
            <li>
              <strong>Round 6:</strong> At maximum Fury, unleash Devastating Blow to deal massive damage to the enemy leader, potentially ending the fight.
              <em>Fury: 30 → 15 (spent on Devastating Blow)</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Berserker thrives on <strong>controlled fury and escalating power</strong>—becoming more dangerous as the battle progresses.
          Master the flow of rage, and you'll transform into an unstoppable force of destruction on the battlefield.
        </p>
      </section>
    </div>
  );
};

export default BerserkerGuide;
