import React from 'react';
import './ClassGuides.css';

const CovenbaneGuide = () => {
  return (
    <div className="class-guide">
      <h2>Covenbane Guide</h2>
      <p className="class-subtitle">Witch Hunter • Spell Breaker • Arcane Executioner</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Covenbane</strong> is a specialized hunter who focuses on tracking, countering, and eliminating spellcasters.
          Unlike traditional fighters or rangers, Covenbanes have developed unique techniques specifically designed to disrupt
          magic and exploit the weaknesses of those who wield it.
        </p>
        <p>
          In a party, Covenbanes serve as anti-magic specialists who excel at neutralizing enemy spellcasters and magical threats.
          Their ability to counter spells, break magical defenses, and track arcane signatures makes them particularly valuable
          in campaigns featuring magical antagonists.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Runic Seals, Hexbreaking Strikes, and Warding Powders</h3>
        <p>
          The Covenbane's signature mechanics revolve around three interconnected systems designed to counter different aspects of magic:
          Runic Seals for protection, Hexbreaking Strikes for offense, and Warding Powders for utility.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Runic Seal Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Seal Preparation:</strong> Inscribe protective runes on your equipment or body during rests.</li>
            <li><strong>Maximum Seals:</strong> You can maintain active seals equal to your Wisdom modifier + half your level.</li>
            <li><strong>Seal Effects:</strong> Different seals provide various protections against specific schools of magic.</li>
            <li><strong>Seal Activation:</strong> Seals automatically activate when targeted by matching magic types.</li>
            <li><strong>Seal Recovery:</strong> Expended seals can be reinscribed during short or long rests.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Hexbreaking Strike Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Strike Charging:</strong> Build up Hexbreaking energy through successful attacks or by absorbing magic with seals.</li>
            <li><strong>Charge Levels:</strong> Accumulate up to 3 charges of Hexbreaking energy.</li>
            <li><strong>Strike Effects:</strong> Expend charges to enhance attacks with anti-magic properties.</li>
            <li><strong>Spell Disruption:</strong> Higher charge levels can interrupt, dispel, or reflect enemy spells.</li>
            <li><strong>Charge Decay:</strong> Unused charges gradually fade when out of combat.</li>
          </ul>
        </div>

        <div className="mechanic-details">
          <h4>Key Warding Powder Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Powder Crafting:</strong> Create specialized powders from magical components and alchemical reagents.</li>
            <li><strong>Powder Types:</strong> Different powders counter specific magical effects or reveal hidden magic.</li>
            <li><strong>Application Methods:</strong> Throw powders as area effects, apply to weapons, or use to create barriers.</li>
            <li><strong>Powder Storage:</strong> Carry a limited number of powder doses based on your specialized containers.</li>
            <li><strong>Field Crafting:</strong> Create simple powders during short rests if you have appropriate components.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Runic Seals:</h4>
          <table>
            <thead>
              <tr>
                <th>Seal</th>
                <th>Protection</th>
                <th>Secondary Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pyroward</td>
                <td>Resistance to fire magic</td>
                <td>Generates 1 Hexbreaking charge when hit by fire spells</td>
              </tr>
              <tr>
                <td>Mind Shield</td>
                <td>Advantage on saves vs. enchantment</td>
                <td>Can reflect mental spells back at caster on a natural 20 save</td>
              </tr>
              <tr>
                <td>Arcane Disruptor</td>
                <td>Reduces arcane spell damage by 1d6</td>
                <td>Temporarily reduces target's spellcasting ability on a successful hit</td>
              </tr>
              <tr>
                <td>Necrobane</td>
                <td>Immunity to one necromantic effect</td>
                <td>Deals 2d6 radiant damage to undead that touch you</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Covenbane is preparation and adaptation.
          Research your targets to identify their magical specialties, then prepare appropriate seals and powders.
          During combat, focus on building and spending Hexbreaking charges efficiently, prioritizing the most
          dangerous spellcasters. Remember that your strength comes from countering magic—against non-magical
          foes, rely more on your basic combat abilities.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Covenbanes have three distinct talent trees that emphasize different aspects of their witch-hunting abilities.
          Each tree offers a unique playstyle and approach to countering magic.
        </p>

        <div className="talent-tree">
          <h4>1. Runic Warden</h4>
          <p><em>Focus on defensive runes and magical protection.</em></p>
          <ul>
            <li><strong>Expanded Inscription:</strong> Increase the number and potency of runic seals you can maintain.</li>
            <li><strong>Reactive Runes:</strong> Your seals trigger additional effects when activated by enemy magic.</li>
            <li><strong>Runic Transfer:</strong> Apply your protective seals to allies temporarily.</li>
            <li><strong>Grand Ward (capstone):</strong> For 1d4 rounds, all your runic seals are active simultaneously regardless of their normal limits, and you gain complete immunity to one school of magic.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on magical defense and protection. You'll excel at neutralizing enemy spellcasters by absorbing or reflecting their magic.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Spellbreaker</h4>
          <p><em>Specialize in offensive anti-magic techniques and spell disruption.</em></p>
          <ul>
            <li><strong>Efficient Charging:</strong> Generate Hexbreaking charges more quickly and maintain them longer.</li>
            <li><strong>Enhanced Disruption:</strong> Your Hexbreaking strikes have improved effects against spellcasters.</li>
            <li><strong>Spell Sunder:</strong> Permanently reduce a target's spellcasting ability with successive hits.</li>
            <li><strong>Null Zone (capstone):</strong> Create an anti-magic field around yourself that prevents all spellcasting within 15 feet for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on aggressive counter-magic tactics. You'll be particularly effective at shutting down individual spellcasters through direct attacks.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Occult Hunter</h4>
          <p><em>Master the tracking and identification of magical threats.</em></p>
          <ul>
            <li><strong>Spell Sense:</strong> Detect active magic and recent spellcasting within 60 feet.</li>
            <li><strong>Arcane Tracker:</strong> Follow the magical signature of a spellcaster across great distances.</li>
            <li><strong>Ritual Interruption:</strong> Identify and efficiently disrupt magical rituals in progress.</li>
            <li><strong>Witch's Bane (capstone):</strong> Mark a spellcaster as your prey, gaining significant bonuses against them and the ability to sense their location within 1 mile.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who enjoy the hunting and tracking aspects of the class. You'll excel at finding hidden magical threats and countering specific targets.</p>
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
                <td><strong>Wisdom</strong></td>
                <td>Primary</td>
                <td>Increases runic seal effectiveness, magical perception, and maximum seals</td>
              </tr>
              <tr>
                <td><strong>Strength</strong> or <strong>Dexterity</strong></td>
                <td>Primary</td>
                <td>Improves combat effectiveness (choose based on preferred weapon style)</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides resilience against magical backlash and general survivability</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Secondary</td>
                <td>Enhances your understanding of magical theory and warding powder crafting</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Useful for interrogating captured spellcasters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Runic Inscription:</strong> Create protective seals during rests that activate against specific magic types.</li>
          <li><strong>Hexbreaking Strike:</strong> Channel accumulated charges into attacks that disrupt spellcasting.</li>
          <li><strong>Spell Sense:</strong> Detect active magic and identify its school and approximate power.</li>
          <li><strong>Warding Powder:</strong> Deploy alchemical powders that reveal or counter magical effects.</li>
          <li><strong>Counterspell Strike:</strong> Interrupt a spellcaster in the act of casting with a precisely timed attack.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Covenbane's approach to combat revolves around target prioritization and counter-magic timing:</p>
        <ol className="round-flow">
          <li><strong>Assessment Phase:</strong> Use Spell Sense to identify spellcasters and magical threats among enemies.</li>
          <li><strong>Preparation Phase:</strong> Activate appropriate runic seals based on the magical threats identified.</li>
          <li><strong>Charging Phase:</strong> Build Hexbreaking charges through attacks or by absorbing magic with seals.</li>
          <li><strong>Disruption Phase:</strong> Use Hexbreaking Strikes against priority spellcasters to interrupt their magic.</li>
          <li><strong>Control Phase:</strong> Deploy Warding Powders to neutralize area effects or prevent magical escapes.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Research your targets before confrontation—knowing a spellcaster's preferred school of magic allows for more effective countering.</li>
            <li>Position yourself to intercept enemy spellcasters attempting to target your party's vulnerable members.</li>
            <li>Save at least one Hexbreaking charge for emergency counterspelling against powerful spells.</li>
            <li>Coordinate with party members to focus fire on spellcasters—they typically have lower defenses once their magic is neutralized.</li>
            <li>Remember that different magical traditions have different weaknesses—divine casters may be vulnerable to different tactics than arcane ones.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter against spellcasters might play out for a Covenbane:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Use Spell Sense to identify that enemies include a fire mage and an enchanter. Activate your Pyroward and Mind Shield runic seals.
              <em>Active Seals: 0 → 2, Hexbreaking Charges: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Move to engage the enchanter, who poses the greatest threat to your party. Make a basic attack to begin building Hexbreaking charges.
              <em>Active Seals: 2, Hexbreaking Charges: 0 → 1</em>
            </li>
            <li>
              <strong>Round 3:</strong> The fire mage targets you with a fireball, but your Pyroward activates, reducing the damage and generating an additional Hexbreaking charge. Continue attacking the enchanter.
              <em>Active Seals: 2 → 1, Hexbreaking Charges: 1 → 3</em>
            </li>
            <li>
              <strong>Round 4:</strong> With 3 Hexbreaking charges accumulated, use a Hexbreaking Strike against the enchanter, disrupting their spellcasting ability for 1d4 rounds.
              <em>Active Seals: 1, Hexbreaking Charges: 3 → 0</em>
            </li>
            <li>
              <strong>Round 5:</strong> Throw Silencing Powder at the fire mage to prevent them from casting verbal spells, then continue building Hexbreaking charges through basic attacks.
              <em>Active Seals: 1, Hexbreaking Charges: 0 → 1</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Covenbane thrives on <strong>magical countermeasures and tactical disruption</strong>—turning a spellcaster's greatest strength into their greatest vulnerability.
          Master the art of spell breaking, and you'll become the nightmare of mages everywhere.
        </p>
      </section>
    </div>
  );
};

export default CovenbaneGuide;
