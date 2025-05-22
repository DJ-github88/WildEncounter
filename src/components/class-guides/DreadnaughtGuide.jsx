import React from 'react';
import './ClassGuides.css';

const DreadnaughtGuide = () => {
  return (
    <div className="class-guide">
      <h2>Dreadnaught Guide</h2>
      <p className="class-subtitle">Armored Juggernaut • Defensive Specialist • Unstoppable Tank</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Dreadnaught</strong> is a heavily armored warrior who specializes in defense, control, and battlefield presence.
          Unlike traditional tanks who merely absorb damage, Dreadnaughts actively convert defensive power into offensive capability,
          becoming more dangerous the longer they stand their ground.
        </p>
        <p>
          In a party, Dreadnaughts serve as front-line protectors who excel at controlling enemy movement and attention.
          Their ability to withstand massive damage while gradually building offensive momentum makes them particularly
          effective in prolonged encounters and against multiple opponents.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Guard Points and Siege Stacks</h3>
        <p>
          The Dreadnaught's signature mechanics are Guard Points (GP) and Siege Stacks—dual resources that represent
          defensive posture and offensive buildup. Guard Points provide active damage reduction, while Siege Stacks
          accumulate to enhance offensive capabilities.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Guard Point Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Guard Points:</strong> Gain GP through defensive stances, blocking attacks, or specific abilities.</li>
            <li><strong>Maximum Guard Points:</strong> You can hold GP equal to your Constitution modifier + your level.</li>
            <li><strong>Spending Guard Points:</strong> GP are spent to activate defensive abilities or convert to Siege Stacks.</li>
            <li><strong>Damage Reduction:</strong> Each active GP reduces incoming damage by 1d4.</li>
            <li><strong>Guard Decay:</strong> GP gradually decay when out of combat (1 point per round).</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Siege Stack Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Siege Stacks:</strong> Gain Siege Stacks by converting GP, successfully blocking attacks, or standing your ground.</li>
            <li><strong>Maximum Siege Stacks:</strong> You can accumulate up to 10 Siege Stacks.</li>
            <li><strong>Stack Effects:</strong> Each Siege Stack provides +1 to damage and +1 to break/sunder attempts.</li>
            <li><strong>Consuming Stacks:</strong> Certain abilities consume Siege Stacks for powerful offensive effects.</li>
            <li><strong>Stack Persistence:</strong> Unlike GP, Siege Stacks remain until used or until combat ends.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Guard Point Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>GP Cost</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shield Wall</td>
                <td>3 GP</td>
                <td>Create a protective barrier that reduces damage to allies behind you by 50% for 1 round</td>
              </tr>
              <tr>
                <td>Deflection</td>
                <td>2 GP</td>
                <td>Automatically redirect the next attack against an adjacent ally to yourself</td>
              </tr>
              <tr>
                <td>Immovable Stance</td>
                <td>4 GP</td>
                <td>Become immune to forced movement and knockdown effects for 2 rounds</td>
              </tr>
              <tr>
                <td>Conversion</td>
                <td>1 GP</td>
                <td>Convert 1 Guard Point into 1 Siege Stack</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Sample Siege Stack Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Stack Cost</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Breaker Strike</td>
                <td>3 Stacks</td>
                <td>Deal damage equal to your weapon damage + 3d6 and reduce target's armor by 2</td>
              </tr>
              <tr>
                <td>Momentum Bash</td>
                <td>5 Stacks</td>
                <td>Knock back all enemies in a 15-foot cone and stun them for 1 round</td>
              </tr>
              <tr>
                <td>Siege Engine</td>
                <td>7 Stacks</td>
                <td>Your attacks ignore armor for 2 rounds</td>
              </tr>
              <tr>
                <td>Demolish</td>
                <td>10 Stacks</td>
                <td>Deal massive damage (weapon damage + 10d6) to a single target or structure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Dreadnaught is balancing Guard Points and Siege Stacks.
          In the early rounds of combat, focus on building and maintaining GP for survival. As the battle progresses,
          strategically convert GP to Siege Stacks when you have excess defense or need offensive power.
          Remember that your greatest strength is the ability to transition from pure defense to devastating offense
          as the situation demands.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Dreadnaughts have three distinct talent trees that emphasize different aspects of their defensive prowess.
          Each tree offers a unique playstyle and approach to tanking.
        </p>

        <div className="talent-tree">
          <h4>1. Bulwark Discipline</h4>
          <p><em>Focus on maximizing defensive capabilities and protecting allies.</em></p>
          <ul>
            <li><strong>Improved Guard:</strong> Increase maximum GP and damage reduction per point.</li>
            <li><strong>Defensive Aura:</strong> Allies within 10 feet gain damage reduction based on your current GP.</li>
            <li><strong>Taunt Mastery:</strong> Force enemies to attack you instead of allies with greater success.</li>
            <li><strong>Living Fortress (capstone):</strong> For 1d4 rounds, double your GP maximum and damage reduction, and automatically generate 1 GP per round.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus purely on tanking and protecting the party. You'll excel at drawing enemy attention and mitigating damage to yourself and allies.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Siege Engine</h4>
          <p><em>Emphasize converting defense into offensive power.</em></p>
          <ul>
            <li><strong>Efficient Conversion:</strong> Convert 1 GP into 2 Siege Stacks instead of 1.</li>
            <li><strong>Momentum Builder:</strong> Generate Siege Stacks more quickly from successful blocks and defensive actions.</li>
            <li><strong>Armor Breaker:</strong> Your attacks have increased chance to break enemy armor and weapons.</li>
            <li><strong>Unstoppable Force (capstone):</strong> For 1d4 rounds, each attack consumes all Siege Stacks but deals additional damage equal to 2d6 per stack consumed.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on turning defense into offense. You'll be able to build up devastating attacks while still maintaining your tank role.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Momentum Bastion</h4>
          <p><em>Master battlefield control through positioning and momentum.</em></p>
          <ul>
            <li><strong>Immovable Object:</strong> Gain resistance to forced movement and knockdown effects.</li>
            <li><strong>Crowd Control:</strong> Your shield bash and similar abilities affect multiple targets.</li>
            <li><strong>Advancing Wall:</strong> Move and maintain defensive stances simultaneously without penalty.</li>
            <li><strong>Juggernaut Charge (capstone):</strong> Charge through the battlefield, knocking aside all enemies in your path and generating 1 GP and 1 Siege Stack per enemy affected.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy controlling the battlefield through positioning. You'll excel at dictating where enemies can go and protecting specific areas.</p>
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
                <td>Increases maximum Guard Points and overall survivability</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Primary</td>
                <td>Improves damage output, which is further enhanced by Siege Stacks</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Enhances shield use and block chance</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Improves perception of battlefield threats</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Enhances taunt abilities to draw enemy attention</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Dreadnaughts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Defensive Stance:</strong> Enter a stance that generates GP each round but reduces movement speed.</li>
          <li><strong>Shield Block:</strong> Actively block an incoming attack, reducing damage and generating GP.</li>
          <li><strong>Taunt:</strong> Force an enemy to attack you instead of your allies.</li>
          <li><strong>Conversion:</strong> Transform GP into Siege Stacks for offensive power.</li>
          <li><strong>Breaker Strike:</strong> Consume Siege Stacks to deal enhanced damage and reduce enemy armor.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Dreadnaught's approach to combat revolves around defensive positioning and resource management:</p>
        <ol className="round-flow">
          <li><strong>Setup Phase:</strong> Enter Defensive Stance and position yourself to protect vulnerable allies.</li>
          <li><strong>Accumulation Phase:</strong> Build up GP through blocks and defensive abilities while taunting priority targets.</li>
          <li><strong>Conversion Phase:</strong> Once you have excess GP, begin converting some to Siege Stacks for offensive capability.</li>
          <li><strong>Breakthrough Phase:</strong> When sufficient Siege Stacks are accumulated, unleash powerful offensive abilities while maintaining enough GP for survival.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice to track your current Guard Points and Siege Stacks.</li>
            <li>Position yourself to block enemy movement toward vulnerable party members.</li>
            <li>Remember that different enemies require different approaches—against hard-hitting bosses, prioritize GP; against numerous weaker foes, build Siege Stacks more aggressively.</li>
            <li>Coordinate with your party's healer about your defensive capabilities and when you might need additional support.</li>
            <li>Use terrain to your advantage—narrow passages allow you to block more effectively with your body.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Dreadnaught:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Enter Defensive Stance, generating 2 initial GP, and position yourself between enemies and your party's spellcasters.
              <em>GP: 0 → 2, Siege Stacks: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Use Taunt on the most dangerous enemy to draw their attention. Defensive Stance generates another GP.
              <em>GP: 2 → 3, Siege Stacks: 0</em>
            </li>
            <li>
              <strong>Round 3:</strong> Successfully block an incoming attack with Shield Block, generating 2 more GP. Defensive Stance adds another.
              <em>GP: 3 → 6, Siege Stacks: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> With a comfortable GP buffer, use Conversion to transform 3 GP into 3 Siege Stacks. Defensive Stance adds another GP.
              <em>GP: 6 → 3 → 4, Siege Stacks: 0 → 3</em>
            </li>
            <li>
              <strong>Round 5:</strong> Use Breaker Strike, consuming your 3 Siege Stacks to deal enhanced damage to the enemy leader and reduce their armor. Defensive Stance adds another GP.
              <em>GP: 4 → 5, Siege Stacks: 3 → 0</em>
            </li>
            <li>
              <strong>Round 6:</strong> Begin the cycle again, continuing to balance defense and offense as the battle progresses.
              <em>GP: 5 → 6, Siege Stacks: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Dreadnaught thrives on <strong>steadfast defense and calculated offense</strong>—standing firm against any assault while building momentum for devastating counterattacks.
          Master the balance between Guard Points and Siege Stacks, and you'll become an immovable object with the power of an unstoppable force.
        </p>
      </section>
    </div>
  );
};

export default DreadnaughtGuide;
