import React from 'react';
import './ClassGuides.css';

const FalseProphetGuide = () => {
  return (
    <div className="class-guide">
      <h2>False Prophet Guide</h2>
      <p className="class-subtitle">Deceptive Cleric • Faith Manipulator • Divine Impostor</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>False Prophet</strong> is a deceptive spellcaster who manipulates faith and religious symbolism to powerful effect.
          Unlike true clerics who channel divine power through genuine devotion, False Prophets create the illusion of divine favor,
          twisting religious ceremonies and symbols to fuel their own magic.
        </p>
        <p>
          In a party, False Prophets serve as versatile support casters with unique crowd control abilities.
          Their capacity to manipulate both allies and enemies through false miracles and twisted faith makes them particularly effective
          against religious opponents and in social situations where faith plays a role.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Lies (Heresy Points)</h3>
        <p>
          The False Prophet's signature mechanic is Lies (often called Heresy Points) – a special resource accumulated by deceitful actions.
          Whenever the False Prophet performs a false miracle, successfully lies, or twists a normal effect (such as casting a healing spell that actually harms),
          they earn Lies that can be spent to enhance abilities.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Lies System Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Lies:</strong> Earn Lies by performing false miracles, successfully deceiving others, or twisting normal magical effects.</li>
            <li><strong>Maximum Lies:</strong> You can hold a number of Lies equal to your Charisma modifier + 5.</li>
            <li><strong>Spending Lies:</strong> Lies can be spent to enhance abilities with additional effects or to fuel powerful deceptions.</li>
            <li><strong>False Miracles:</strong> Abilities that appear to be divine in nature but are actually arcane manipulations.</li>
            <li><strong>Twisted Faith:</strong> Abilities that invert traditional religious effects (e.g., healing that harms, protection that weakens).</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Lies-Enhanced Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Base Effect</th>
                <th>With Lies Enhancement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>False Healing</td>
                <td>Appears to heal target for 2d6 HP but actually deals 1d6 damage</td>
                <td>Spend 2 Lies: Target also becomes vulnerable to your next attack</td>
              </tr>
              <tr>
                <td>Divine Imposture</td>
                <td>Create illusion of divine presence that grants +1 to ally attacks</td>
                <td>Spend 3 Lies: Also causes enemies to make Wisdom saves or become frightened</td>
              </tr>
              <tr>
                <td>Twisted Blessing</td>
                <td>Target gains +2 AC but -2 to saving throws</td>
                <td>Spend 1 Lie: AC bonus increases to +3</td>
              </tr>
              <tr>
                <td>False Idol</td>
                <td>Summon an idol that charms enemies within 15 ft</td>
                <td>Spend 3 Lies: Idol also heals allies for 1d6 HP per round</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the False Prophet is creating opportunities to generate Lies through deception.
          Always look for chances to perform "miracles" in front of witnesses, especially those who might be religiously inclined.
          Remember that your power comes from the perception of divinity, not actual divine favor—maintain the illusion at all costs.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          False Prophets have three distinct talent trees that emphasize different aspects of their deceptive nature.
          Each tree offers a unique playstyle and approach to manipulating faith.
        </p>

        <div className="talent-tree">
          <h4>1. Deceiver</h4>
          <p><em>Focus on illusions and deception to manipulate both allies and enemies.</em></p>
          <ul>
            <li><strong>Convincing Illusion:</strong> Your illusory miracles are more difficult to disbelieve.</li>
            <li><strong>False Prophet's Charm:</strong> Gain advantage on Charisma checks to deceive the faithful.</li>
            <li><strong>Miracle Worker:</strong> Create more impressive false miracles that generate additional Lies.</li>
            <li><strong>Divine Imposture (capstone):</strong> For 1d4 rounds, all your spells appear to be divine in nature, automatically generating Lies and gaining enhanced effects.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy social manipulation and illusion magic. You'll excel at controlling perceptions and creating opportunities for deception.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Blasphemer</h4>
          <p><em>Specialize in twisting and inverting traditional divine magic.</em></p>
          <ul>
            <li><strong>Twisted Healing:</strong> Your healing spells can be inverted to deal damage instead.</li>
            <li><strong>Corrupt Blessing:</strong> Your blessing spells grant one benefit but also impose a hidden curse.</li>
            <li><strong>Sacrilegious Rites:</strong> Perform twisted versions of religious ceremonies for powerful effects.</li>
            <li><strong>Heretical Revelation (capstone):</strong> Reveal the "true nature" of divinity to all nearby creatures, causing religious characters to make Wisdom saves or be stunned for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on subverting expectations and turning traditional divine magic on its head. You'll be particularly effective against religious opponents.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Usurper</h4>
          <p><em>Claim divine power for yourself, becoming a false deity.</em></p>
          <ul>
            <li><strong>Divine Presence:</strong> Emanate an aura of false divinity that intimidates enemies and inspires allies.</li>
            <li><strong>Steal Faith:</strong> Absorb the faith directed at actual deities to fuel your own powers.</li>
            <li><strong>False Resurrection:</strong> Create the illusion of bringing the dead back to life (actually creating a temporary construct).</li>
            <li><strong>Living God (capstone):</strong> Proclaim yourself a deity for 1d4 rounds. During this time, allies treat you as their sacred lord, gaining significant bonuses, while enemies become frightened.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to take the False Prophet concept to its extreme, actually posing as a deity. You'll gain powerful command abilities and auras.</p>
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
                <td>Increases deception effectiveness, maximum Lies, and spell power</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Improves your ability to craft convincing lies and remember religious details</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Enhances your insight into what others want to believe</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Tertiary</td>
                <td>Provides resilience when your deceptions are discovered</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Helps with sleight of hand for false miracles</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for False Prophets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>False Healing:</strong> A spell that appears to heal but actually harms the target.</li>
          <li><strong>Divine Imposture:</strong> Create the illusion of divine presence to inspire allies and intimidate enemies.</li>
          <li><strong>Twisted Blessing:</strong> Grant a blessing that comes with a hidden cost or curse.</li>
          <li><strong>False Idol:</strong> Summon an illusory idol that charms those who worship it.</li>
          <li><strong>Heretical Word:</strong> Speak blasphemies that damage and debuff religious opponents.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The False Prophet's approach to combat revolves around deception and manipulation:</p>
        <ol className="round-flow">
          <li><strong>Setup Phase:</strong> Create the illusion of divine favor through minor "miracles" to generate initial Lies.</li>
          <li><strong>Manipulation Phase:</strong> Use deceptive abilities to control the battlefield, making enemies believe you're helping them or making allies appear more threatening.</li>
          <li><strong>Revelation Phase:</strong> Once you've accumulated enough Lies, unleash powerful abilities with enhanced effects.</li>
          <li><strong>Escape Phase:</strong> If your deceptions are discovered, have contingency plans to redirect blame or escape.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Research the religious beliefs of your opponents before encounters to better exploit their faith.</li>
            <li>Coordinate with party members so they don't accidentally expose your deceptions.</li>
            <li>Create a consistent religious persona with specific symbols and rituals to make your deceptions more believable.</li>
            <li>Remember that your abilities are particularly effective against genuinely religious characters.</li>
            <li>Have escape plans ready for when your deceptions are inevitably discovered.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a False Prophet:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Divine Imposture, creating the illusion of divine favor surrounding you. Allies gain +1 to attacks, and you generate 2 Lies.
              <em>Lies: 2</em>
            </li>
            <li>
              <strong>Round 2:</strong> Approach an enemy and cast False Healing, appearing to offer aid but actually dealing 1d6 damage. Generate 1 additional Lie from the deception.
              <em>Lies: 3</em>
            </li>
            <li>
              <strong>Round 3:</strong> Cast False Idol, spending 3 Lies to create an enhanced idol that both charms enemies and heals allies.
              <em>Lies: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Use Twisted Blessing on an ally, granting them +2 AC but secretly imposing -2 to saving throws. Generate 1 Lie from the deception.
              <em>Lies: 1</em>
            </li>
            <li>
              <strong>Round 5:</strong> When a religious enemy approaches, cast Heretical Word, spending your 1 Lie to enhance the effect, dealing 3d6 psychic damage and imposing disadvantage on their next attack.
              <em>Lies: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The False Prophet thrives on <strong>deception and manipulation</strong>—creating the illusion of divine favor while serving their own ends.
          Master the art of religious imposture, and you'll bend the faith of others to your will.
        </p>
      </section>
    </div>
  );
};

export default FalseProphetGuide;
