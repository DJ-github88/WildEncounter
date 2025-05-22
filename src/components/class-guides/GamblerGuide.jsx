import React from 'react';
import './ClassGuides.css';

const GamblerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Gambler Guide</h2>
      <p className="class-subtitle">Risk Taker • Fortune Manipulator • Chance Specialist</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Gambler</strong> is a unique trickster class that weaponizes games of chance, turning luck itself into a combat resource.
          Unlike traditional fighters or spellcasters, Gamblers rely on coin flips, dice rolls, and card draws to determine their abilities' effects,
          embracing risk for potentially massive rewards.
        </p>
        <p>
          In a party, Gamblers serve as unpredictable damage dealers and support characters who can turn the tide of battle with a lucky break.
          Their high-risk, high-reward playstyle creates dramatic moments where a single roll can mean the difference between triumph and disaster.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Gambling Systems</h3>
        <p>
          The Gambler's mechanics revolve around three different games of chance: coin flips, dice rolls, and card draws.
          Each ability uses one of these systems, with unique resources to fuel or modify those outcomes.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Gambling Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Coin Flips:</strong> The simplest gambling mechanic—50/50 chance of success or failure. Heads typically yields positive effects, while tails may have negative consequences.</li>
            <li><strong>Dice Rolls:</strong> More nuanced than coins, dice (d6, d20, or multiple dice) provide a range of outcomes from critical failure to jackpot success.</li>
            <li><strong>Card Draws:</strong> The most complex system, drawing from a special deck where suits determine effect types:
              <ul>
                <li>♥️ Hearts: Healing and protection</li>
                <li>♦️ Diamonds: Resource generation and special effects</li>
                <li>♣️ Clubs: Buffs and enhancements</li>
                <li>♠️ Spades: Damage and debuffs</li>
              </ul>
            </li>
            <li><strong>Luck Points:</strong> A pool of points that can be spent to influence chance outcomes (re-flip coins, re-roll dice, or draw additional cards).</li>
            <li><strong>Risk Stacks:</strong> Accumulated when taking risks or betting resources. Can be cashed in for powerful effects or to fuel "all-in" abilities.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Gambling Outcomes:</h4>
          <table>
            <thead>
              <tr>
                <th>Game</th>
                <th>Result</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coin Flip</td>
                <td>Heads</td>
                <td>+2 AC until your next turn</td>
              </tr>
              <tr>
                <td>Coin Flip</td>
                <td>Tails</td>
                <td>Take 1d4 non-lethal damage</td>
              </tr>
              <tr>
                <td>Dice Roll (2d6)</td>
                <td>Double Six</td>
                <td>Deal 10d6 damage to target (jackpot)</td>
              </tr>
              <tr>
                <td>Dice Roll (2d6)</td>
                <td>Any Pair</td>
                <td>Deal 5d6 damage and double Risk Stacks</td>
              </tr>
              <tr>
                <td>Dice Roll (2d6)</td>
                <td>Snake Eyes (1,1)</td>
                <td>Take 5d6 damage yourself (critical failure)</td>
              </tr>
              <tr>
                <td>Card Draw</td>
                <td>Ace of Spades</td>
                <td>Deal 8d6 damage to target</td>
              </tr>
              <tr>
                <td>Card Draw</td>
                <td>Queen of Hearts</td>
                <td>Heal ally for 6d6 hit points</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Gambler is knowing when to play it safe and when to risk everything.
          Use Luck Points conservatively to mitigate bad outcomes on important abilities, and build up Risk Stacks when the stakes are lower.
          Remember that even with the worst luck, you can turn the situation around with the right ability at the right time.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Gamblers have three distinct talent trees that emphasize different aspects of chance manipulation.
          Each tree offers a unique playstyle and approach to risk management.
        </p>

        <div className="talent-tree">
          <h4>1. Coin-Flipper</h4>
          <p><em>Focus on the precision of binary outcomes, balancing risk and reward.</em></p>
          <ul>
            <li><strong>Lucky Toss:</strong> When you flip tails, you have a 25% chance to reflip automatically.</li>
            <li><strong>Double or Nothing:</strong> Flip twice for an ability. If both are heads, double the effect. If both are tails, suffer a backlash.</li>
            <li><strong>Loaded Coin:</strong> Once per encounter, declare the result of a coin flip before flipping.</li>
            <li><strong>Fortune's Favor (capstone):</strong> For 1d4 rounds, all your coin flips come up heads.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy the simplicity of binary outcomes with a focus on consistency. You'll have more control over your coin flips, making your abilities more reliable.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Dice Mastery</h4>
          <p><em>Embrace the complexity of dice with rerolls and luck manipulation.</em></p>
          <ul>
            <li><strong>Lucky Roll:</strong> Reroll any die that shows a 1, once per roll.</li>
            <li><strong>Loaded Dice:</strong> Add +1 to all dice rolls (maximum of natural roll value).</li>
            <li><strong>Push Your Luck:</strong> After seeing a dice result, you can choose to reroll but must accept the new result.</li>
            <li><strong>Master of Odds (capstone):</strong> Once per day, choose the result of any dice roll instead of rolling.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy the range of possibilities that dice provide. You'll have tools to mitigate bad rolls and push for better outcomes when needed.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Cardsharp</h4>
          <p><em>Specialize in the complexity and versatility of card-based abilities.</em></p>
          <ul>
            <li><strong>Card Counting:</strong> Once per encounter, peek at the top three cards of your deck.</li>
            <li><strong>Marked Cards:</strong> At the start of each day, place one card of your choice on top of your deck.</li>
            <li><strong>Sleight of Hand:</strong> Draw two cards and choose which one to play.</li>
            <li><strong>Royal Flush (capstone):</strong> Draw five cards and play them all in any order over the next five rounds with enhanced effects.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree offers the most versatility but requires careful management. You'll have access to a wide range of effects through your cards, with tools to ensure you get the right card at the right time.</p>
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
                <td>Increases Luck Point generation and gambling ability effectiveness</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Improves sleight of hand for card manipulation and general agility</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Enhances your ability to calculate odds and make strategic decisions</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Provides resilience when gambling goes wrong</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Helps with knowing when to hold 'em and when to fold 'em</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Gamblers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Heads or Tails:</strong> Flip a coin. If heads, gain +2 AC; if tails, take 1d4 damage.</li>
          <li><strong>Roll the Dice:</strong> Roll 2d6 for variable damage effects based on the result.</li>
          <li><strong>Deal the Cards:</strong> Draw a card from your special deck for varied effects based on suit and value.</li>
          <li><strong>Double Down:</strong> Spend Luck Points to enhance the outcome of your next gambling ability.</li>
          <li><strong>All In:</strong> Risk everything on one massive gamble with extreme potential rewards.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Gambler's approach to combat balances risk management with opportunistic big plays:</p>
        <ol className="round-flow">
          <li><strong>Setup Phase:</strong> Use lower-risk abilities to build up Luck Points and Risk Stacks.</li>
          <li><strong>Advantage Phase:</strong> When you have sufficient resources, use Luck Points to ensure successful outcomes on important abilities.</li>
          <li><strong>Momentum Phase:</strong> As you accumulate Risk Stacks, look for opportunities to cash them in for powerful effects.</li>
          <li><strong>All-In Phase:</strong> When the situation is dire or victory is within reach, risk everything on a game-changing gamble.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Bring physical coins, dice, and cards to the table for immersive gameplay.</li>
            <li>Save Luck Points for truly critical moments rather than using them on every slightly unfavorable outcome.</li>
            <li>Build Risk Stacks when facing weaker enemies, then cash them in against bosses or in desperate situations.</li>
            <li>Coordinate with your party about your gambling abilities—they should be prepared for both success and failure.</li>
            <li>Remember that even "losing" gambles can be turned to your advantage with the right talents and creative thinking.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Gambler:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Use Heads or Tails for a defensive boost. Flip a coin and get heads—gain +2 AC until your next turn.
              <em>Luck Points: 2, Risk Stacks: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Use Roll the Dice against the strongest enemy. Roll 2d6 and get 4,3 (7)—deal 7 damage and gain 1 Risk Stack.
              <em>Luck Points: 2, Risk Stacks: 1</em>
            </li>
            <li>
              <strong>Round 3:</strong> Use Deal the Cards for versatility. Draw the 8 of Clubs—grant an ally +3 to attack rolls for 2 rounds.
              <em>Luck Points: 3 (gained 1 from successful card play), Risk Stacks: 1</em>
            </li>
            <li>
              <strong>Round 4:</strong> Use Double Down and spend 2 Luck Points to enhance your next Roll the Dice. Roll 2d6 and get 6,6 (jackpot!)—deal 10d6 damage to the enemy.
              <em>Luck Points: 1, Risk Stacks: 2 (gained 1 from the risky play)</em>
            </li>
            <li>
              <strong>Round 5:</strong> With the boss weakened, use All In and spend all your Risk Stacks. Roll 3d6 and get 5,4,6 (15)—deal massive damage and stun the target for 1 round.
              <em>Luck Points: 1, Risk Stacks: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Gambler thrives on <strong>calculated risk and dramatic moments</strong>—turning the uncertainty of chance into opportunity.
          Master the odds, know when to push your luck, and you'll beat the house every time.
        </p>
      </section>
    </div>
  );
};

export default GamblerGuide;
