import React from 'react';
import './ClassGuides.css';

const ChaosWeaverGuide = () => {
  return (
    <div className="class-guide">
      <h2>Chaos Weaver Guide</h2>
      <p className="class-subtitle">Entropy Mage • Randomness Manipulator • Unpredictable Spellcaster</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Chaos Weaver</strong> is a trickster-class spellcaster who harnesses the unpredictable forces of entropy and randomness.
          Unlike traditional mages who cast reliable, consistent spells, Chaos Weavers embrace uncertainty, using random-effect tables for their magic.
          This makes them wildly unpredictable on the battlefield—sometimes producing devastating effects, other times creating unexpected advantages.
        </p>
        <p>
          In a party, Chaos Weavers serve as versatile spellcasters who can adapt to almost any situation, though never in a predictable way.
          Their ability to produce unexpected effects makes them excellent problem-solvers and can turn seemingly hopeless situations around with a lucky roll.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Chaos Dice & Entropy Points</h3>
        <p>
          The Chaos Weaver harnesses unpredictability through the Chaos Dice System and Entropy Points. Instead of deterministic effects, spells trigger random-effect tables using various dice (d4, d6, d8, d10, d12, d20, d100). Entropy Points are generated through chaotic spellcasting and can be spent to manipulate dice rolls.
        </p>

        <div className="mechanic-details">
          <h4>Entropy Points System:</h4>
          <ul className="mechanic-list">
            <li><strong>Generation:</strong> Start each encounter with 1 EP. Gain 1 EP whenever you roll on a Chaos Table.</li>
            <li><strong>Maximum EP:</strong> Your maximum EP equals your Intelligence modifier + your level/5 (rounded up).</li>
            <li><strong>Spending EP:</strong>
              <ul>
                <li>1 EP: Reroll a single die</li>
                <li>2 EP: Add/subtract 1 from a roll</li>
                <li>3 EP: Roll with advantage (roll twice, take higher)</li>
              </ul>
            </li>
            <li><strong>Chaos Threshold:</strong> When you reach maximum EP, you enter Chaos Threshold state. While in this state, your chaos effects are amplified (roll with advantage) but you cannot spend EP until you drop below maximum.</li>
            <li><strong>Chaos Backlash:</strong> When you roll the lowest possible result on a Chaos Table (natural 1 on any die), you suffer Chaos Backlash. Roll on the Backlash Table to determine the effect.</li>
            <li><strong>Chaos Surge:</strong> When you roll the highest possible result on a Chaos Table (natural maximum on any die), you trigger a Chaos Surge. Roll on the Surge Table to determine the bonus effect.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Chaos Effect Table (Elemental Chaos d12):</h4>
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Element</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fire</td>
                <td>1d8 fire damage + target is ignited for 1d4 rounds (1d4 damage per round)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ice</td>
                <td>1d6 ice damage + target is slowed for 1d4 rounds (movement reduced by half)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Lightning</td>
                <td>2d4 lightning damage + jumps to nearest enemy within 10 feet for half damage</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Acid</td>
                <td>1d4 acid damage + 1d4 damage for 1d4 rounds, destroying armor (reducing AC by 1)</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Force</td>
                <td>1d10 force damage + target is pushed 1d6 × 5 feet away</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Poison</td>
                <td>1d6 poison damage + target has disadvantage on next action</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Necrotic</td>
                <td>2d4 necrotic damage + heal yourself for half the damage dealt</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Radiant</td>
                <td>1d8 radiant damage + target is blinded for 1 round</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Thunder</td>
                <td>1d8 thunder damage + target is deafened for 1d4 rounds</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Psychic</td>
                <td>1d10 psychic damage + target is confused for 1 round (rolls d8 for random action)</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Wild Magic</td>
                <td>Roll twice on this table and apply both effects at half power</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Void</td>
                <td>3d6 void damage that ignores resistances and generates 1 additional EP</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Chaos Backlash Table (d8):</h4>
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chaotic Drain - Lose 1d4 EP (if you have any)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Spell Fizzle - The spell fails and the mana is wasted</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Entropic Feedback - Take 1d6 force damage per EP you currently have</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Reality Stutter - You cannot cast spells until the end of your next turn</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dimensional Shift - You are teleported 3d6 feet in a random direction</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Chaotic Confusion - You have disadvantage on all rolls until the end of your next turn</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Entropic Leak - Your next 3 spells cost 1 additional mana</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Wild Misfire - The spell targets a random creature within range instead</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ability-table">
          <h4>Chaos Surge Table (d8):</h4>
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Entropic Infusion - Gain 1d4 EP (up to your maximum)</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Doubled Effect - The spell's effect is doubled in power or duration</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mana Refund - Regain the mana cost of the spell</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Chaotic Quickening - You can cast another spell as a bonus action</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Reality Anchor - Your next spell cannot trigger Chaos Backlash</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Entropic Shield - Gain resistance to all damage until the start of your next turn</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Chaos Multiplication - The spell affects an additional target within range</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Entropy Mastery - You can choose the result of your next chaos roll instead of rolling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Chaos Weaver is balancing Entropy Points generation and spending. Build up EP through lower-risk spells, then spend them strategically on your most powerful abilities. Consider entering Chaos Threshold state when you need raw power, but be prepared for the unpredictability that comes with it. Remember that chaos can be as beneficial as it is dangerous—sometimes the most unlikely result is exactly what you need.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Chaos Weavers have three distinct talent trees that emphasize different aspects of chaos manipulation.
          Each tree offers a unique playstyle and approach to harnessing unpredictability.
        </p>

        <div className="talent-tree">
          <h4>1. Order in Chaos</h4>
          <p><em>Focus on controlling chaos through Entropy Points, reducing negative outcomes, and manipulating dice rolls to your advantage.</em></p>
          <ul>
            <li><strong>Entropy Attunement:</strong> Increase your maximum EP and generate EP more efficiently when rolling on Chaos Tables.</li>
            <li><strong>Probability Manipulation:</strong> Reduce the EP cost of manipulating dice rolls, making your chaos control more efficient.</li>
            <li><strong>Chaos Anchor:</strong> When you roll a natural 1 on a Chaos Table, automatically reroll without spending EP.</li>
            <li><strong>Entropy Shield:</strong> Create a shield of controlled chaos that protects you from harm with various effects based on dice rolls.</li>
            <li><strong>Entropy Mastery:</strong> Increase your maximum EP and allow you to exceed your maximum temporarily.</li>
            <li><strong>Reality Architect:</strong> Reshape reality itself by altering fundamental laws like gravity, time, or magic.</li>
            <li><strong>Master of Probability (capstone):</strong> Gain perfect control over probability, choosing dice results instead of rolling.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to mitigate the risks of chaos while still harnessing its power. You'll have more control over outcomes, making your spellcasting more reliable and strategic.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Cataclysmic Surges</h4>
          <p><em>Embrace maximum chaos for maximum power, using Entropy Points to fuel devastating but unpredictable effects.</em></p>
          <ul>
            <li><strong>Chaos Amplification:</strong> Increase damage from chaos effects at the risk of triggering Chaos Backlash.</li>
            <li><strong>Entropy Surge:</strong> Generate additional EP when reaching Chaos Threshold state, exceeding your maximum.</li>
            <li><strong>Chaotic Explosion:</strong> When you roll the maximum value on a Chaos Table, your spell affects all targets in an area.</li>
            <li><strong>Threshold Mastery:</strong> Gain additional benefits while in Chaos Threshold state, including increased damage and range.</li>
            <li><strong>Chaos Battery:</strong> Store excess EP beyond your maximum and gain resistance to random damage types.</li>
            <li><strong>Chaos Cascade:</strong> Your chaos effects can trigger chain reactions, rolling multiple times on the same table.</li>
            <li><strong>Avatar of Chaos (capstone):</strong> Become the ultimate embodiment of chaos with amplified powers but increased volatility.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for risk-takers who enjoy the thrill of unpredictability. Your effects will be more powerful but also more dangerous, creating memorable moments of triumph or disaster.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Tactical Disruption</h4>
          <p><em>Use Entropy Points to control the battlefield through debuffs, area effects, and strategic manipulation of chaos.</em></p>
          <ul>
            <li><strong>Entropic Touch:</strong> Apply Entropy stacks to enemies, dealing damage over time and generating EP.</li>
            <li><strong>Reality Distortion:</strong> Create zones of distorted reality with various effects determined by dice rolls.</li>
            <li><strong>Entropy Propagation:</strong> Spread Entropy stacks from one target to multiple enemies.</li>
            <li><strong>Reality Anchor:</strong> Create an anchor point in reality that affects nearby creatures with beneficial or harmful effects.</li>
            <li><strong>Chaotic Consumption:</strong> Consume Entropy stacks for immediate damage and EP generation.</li>
            <li><strong>Entropic Contagion:</strong> Your Entropy effects apply additional debuffs like slowing, weakening, or stunning.</li>
            <li><strong>Reality Unraveler (capstone):</strong> Unravel reality itself, controlling the fundamental laws of physics in a large area.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on battlefield control through strategic application of chaos. You'll excel at debuffing enemies, creating advantageous terrain, and manipulating the battlefield to your advantage.</p>
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
                <td>Increases spell effectiveness and Entropy Point generation</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Secondary</td>
                <td>Improves your ability to control chaos and influence random outcomes</td>
              </tr>
              <tr>
                <td><strong>Entropy</strong> (Special)</td>
                <td>Secondary</td>
                <td>A unique attribute that enhances chaos effects and dice manipulation</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Helps avoid danger when chaos turns against you</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Provides resilience against chaotic backlash</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Chaos Weavers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>

        <h4>Essential Spells:</h4>
        <ul className="ability-list">
          <li><strong>Chaotic Bolt:</strong> Basic attack that deals damage based on the elemental type determined by your d12 roll on the Elemental Chaos Table. Generates 1 EP.</li>
          <li><strong>Flux Nova:</strong> Area effect spell with widely varying results based on a d20 roll on the Flux Effect Table. Generates 1 EP.</li>
          <li><strong>Entropic Shield:</strong> Defensive spell that creates unpredictable protections based on a d10 roll on the Shield Fluctuation Table. Generates 1 EP.</li>
          <li><strong>Entropy Tap:</strong> Quick cantrip that generates EP while producing minor effects based on a d6 roll.</li>
          <li><strong>Probability Manipulation:</strong> Affect dice rolls of yourself or others based on a d8 roll. Generates 1 EP.</li>
          <li><strong>Chaos Orb:</strong> Throw an orb that splits into multiple projectiles, with the number determined by a d8 roll. Generates 1 EP.</li>
          <li><strong>Reality Distortion:</strong> Create a ripple in reality that distorts space and time based on a d12 roll. Generates 1 EP.</li>
          <li><strong>Entropic Touch:</strong> Touch a creature or object and infuse it with chaotic energy, causing unpredictable transformations based on a d8 roll. Generates 1 EP.</li>
          <li><strong>Chaos Nova:</strong> Channel pure chaos into a devastating explosion with effects determined by a d10 roll. Generates 2 EP.</li>
          <li><strong>Entropic Surge:</strong> Channel your accumulated EP into a focused surge of chaotic energy. Costs 2 EP instead of generating EP.</li>
        </ul>

        <h4>Advanced Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Entropy Master:</strong> Generate additional EP and reduce the cost of manipulating rolls.</li>
          <li><strong>Chaos Overload:</strong> Roll twice on a Chaos Table and apply both results for increased volatility and power.</li>
          <li><strong>Probability Anchor:</strong> Automatically reroll natural 1s on Chaos Tables without spending EP.</li>
          <li><strong>Chaos Weaving:</strong> Choose any result from a Chaos Table instead of rolling, at the cost of EP.</li>
          <li><strong>Pandemonium Wave:</strong> Release a wave of pure chaos affecting all creatures in a large area with random effects.</li>
          <li><strong>Reality Fracture:</strong> Tear a hole in reality, creating a zone of pure chaos with effects determined by a d8 roll.</li>
          <li><strong>Avatar of Chaos:</strong> Transform into a being of pure chaos, gaining immense power at the cost of control.</li>
        </ul>

        <h4>Entropy Points Management:</h4>
        <p>Effective EP management is crucial for Chaos Weavers:</p>
        <ul>
          <li><strong>Generation:</strong> Cast spells that trigger rolls on Chaos Tables to generate EP. Entropy Tap is excellent for quick EP generation.</li>
          <li><strong>Conservation:</strong> Save EP for crucial moments when you need to manipulate important rolls.</li>
          <li><strong>Threshold State:</strong> Consider entering Chaos Threshold state (reaching maximum EP) when you need raw power over control.</li>
          <li><strong>Spending Strategy:</strong> Spend 1 EP for rerolls on low-impact spells, save 3 EP for advantage on your most powerful abilities.</li>
          <li><strong>Recovery:</strong> Use talents like Entropic Feedback and Chaos Conduit to recover EP when you're running low.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Chaos Weaver's approach to combat balances EP generation, spending, and chaos manipulation:</p>
        <ol className="round-flow">
          <li><strong>EP Building Phase:</strong> Begin with lower-risk chaos spells like Entropy Tap and Chaotic Bolt to build EP quickly.</li>
          <li><strong>Control Phase:</strong> Use EP to manipulate dice rolls on your more powerful spells like Flux Nova or Chaos Nova.</li>
          <li><strong>Threshold Phase:</strong> When you reach maximum EP, consider entering Chaos Threshold state for amplified effects.</li>
          <li><strong>Recovery Phase:</strong> After spending EP, focus on regenerating your resources through additional chaos spells.</li>
          <li><strong>Ultimate Phase:</strong> In desperate situations, spend all your EP on ultimate abilities like Avatar of Chaos or Reality Unraveler.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Keep track of your current EP and maximum EP at all times.</li>
            <li>Consider the risk/reward of entering Chaos Threshold state versus spending EP for control.</li>
            <li>Position yourself safely when casting spells that might trigger Chaos Backlash.</li>
            <li>Use talents from the Order in Chaos tree to mitigate bad rolls on your most important spells.</li>
            <li>Apply Entropy stacks to multiple enemies using talents from the Tactical Disruption tree for ongoing damage and EP generation.</li>
            <li>Create zones of distorted reality to control the battlefield and force enemies into disadvantageous positions.</li>
            <li>Remember that even Chaos Backlash effects can be turned to your advantage with creative thinking.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Chaos Weaver with the Order in Chaos talent tree:</p>

        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Entropy Tap to quickly generate EP. Roll a d6 and get a 5—gain 1d4 temporary hit points.
              <em>Entropy Points: 2 (starting with 1, +1 from spell)</em>
            </li>
            <li>
              <strong>Round 2:</strong> Cast Chaotic Bolt at the strongest enemy. Roll a d12 on the Elemental Chaos Table and get a 7—necrotic damage that also heals you for half the damage dealt.
              <em>Entropy Points: 3</em>
            </li>
            <li>
              <strong>Round 3:</strong> Cast Entropic Shield for protection. Roll a d10 on the Shield Fluctuation Table and get a 5—shield provides resistance to one random damage type for 1d6 rounds.
              <em>Entropy Points: 4</em>
            </li>
            <li>
              <strong>Round 4:</strong> Cast Flux Nova at a group of enemies. Spend 3 EP to roll with advantage on the Flux Effect Table. Roll a d20 twice and choose 16—all spells cast in the area for 1d4 rounds have their range doubled.
              <em>Entropy Points: 2 (spent 3, gained 1 from casting)</em>
            </li>
            <li>
              <strong>Round 5:</strong> Cast Chaos Orb at multiple enemies. Roll a d8 and get a 6—six projectiles strike random targets for 1d6 force damage each.
              <em>Entropy Points: 3</em>
            </li>
            <li>
              <strong>Round 6:</strong> Cast Reality Distortion to control the battlefield. Roll a d12 and get a 2—time flows at half speed in the area for 1d4 rounds, slowing all enemies.
              <em>Entropy Points: 4</em>
            </li>
            <li>
              <strong>Round 7:</strong> You've reached your maximum EP (assuming 4 is your max). You enter Chaos Threshold state. Cast Chaos Nova with amplified effects (roll with advantage). Roll a d10 twice and choose 10—tear reality apart, dealing 4d10 force damage to all enemies and healing allies for half that amount.
              <em>Entropy Points: 4 (still at maximum, gained 2 but can't exceed max)</em>
            </li>
            <li>
              <strong>Round 8:</strong> Spend 3 EP to cast Entropic Surge, choosing to deal 2d8 force damage to a target and granting an ally advantage on all rolls for 1 round.
              <em>Entropy Points: 1</em>
            </li>
          </ol>
        </div>

        <p>Alternative approach with the Cataclysmic Surges talent tree:</p>

        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Entropy Tap to quickly generate EP. Roll a d6 and get a 6—gain 1 additional EP.
              <em>Entropy Points: 3 (starting with 1, +1 from spell, +1 from roll)</em>
            </li>
            <li>
              <strong>Round 2:</strong> Cast Chaotic Bolt with Chaos Amplification talent. Roll a d12 on the Elemental Chaos Table and get a 12—void damage that ignores resistances, plus an additional 1d8 damage from your talent.
              <em>Entropy Points: 5 (gained 1 from casting, +1 from rolling a 12)</em>
            </li>
            <li>
              <strong>Round 3:</strong> You've reached your maximum EP (assuming 5 is your max). You enter Chaos Threshold state, triggering your Entropy Surge talent. Gain 1d4 additional EP (roll a 3).
              <em>Entropy Points: 8 (exceeding maximum due to talent)</em>
            </li>
            <li>
              <strong>Round 4:</strong> While in Chaos Threshold state, cast Chaos Nova with amplified effects. Roll a d10 and get a 10—tear reality apart, dealing 4d10 force damage to all enemies and healing allies for half that amount. The effect is even more powerful due to your Threshold Mastery talent.
              <em>Entropy Points: 8 (gained 2 from casting, but already exceeding maximum)</em>
            </li>
            <li>
              <strong>Round 5:</strong> Spend 3 EP to use Entropic Overload, casting Chaos Nova again without using an action.
              <em>Entropy Points: 7 (spent 3, gained 2 from casting)</em>
            </li>
            <li>
              <strong>Round 6:</strong> Spend all remaining 7 EP to activate Avatar of Chaos, transforming into a being of pure chaos for 1d6 rounds.
              <em>Entropy Points: 0</em>
            </li>
            <li>
              <strong>Round 7-9:</strong> While in Avatar of Chaos form, cast multiple spells per turn with advantage on all chaos rolls, generating 2 EP automatically each turn.
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Chaos Weaver thrives on <strong>unpredictability and strategic entropy management</strong>—turning random chance into opportunity through careful EP manipulation.
          Master the flow of entropy, and you'll harness the fundamental forces of chaos to shape reality itself.
        </p>
      </section>
    </div>
  );
};

export default ChaosWeaverGuide;
