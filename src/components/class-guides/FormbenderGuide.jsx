import React from 'react';
import './ClassGuides.css';

const FormbenderGuide = () => {
  return (
    <div className="class-guide">
      <h2>Formbender Guide</h2>
      <p className="class-subtitle">Shapeshifter • Beast Master • Primal Transformer</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Formbender</strong> is a master shapeshifter who can transform into various animal forms to adapt to different situations.
          Unlike traditional druids who commune with nature, Formbenders have an innate connection to the primal essence of beasts,
          allowing them to not only adopt animal shapes but also mix and match features for hybrid transformations.
        </p>
        <p>
          In a party, Formbenders serve as versatile combatants who can fill multiple roles based on their current form.
          Their ability to shift between forms—from powerful bears for tanking to swift wolves for scouting—makes them
          incredibly adaptable to changing battlefield conditions.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Wild Instinct (WI)</h3>
        <p>
          The Formbender's signature mechanic is Wild Instinct (WI)—a resource that represents their connection to primal energy.
          WI powers their transformations and special abilities, fluctuating as they shift between forms and use beast-like powers.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Wild Instinct Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating WI:</strong> Gain Wild Instinct by embracing primal behaviors appropriate to your current form (dealing damage as a predator, taking damage as a tank, etc.).</li>
            <li><strong>Maximum WI:</strong> You can hold WI equal to your Spirit attribute + your level.</li>
            <li><strong>Spending WI:</strong> WI is spent to initiate transformations, power special form abilities, or enhance physical attributes.</li>
            <li><strong>Form Maintenance:</strong> Maintaining a transformation costs 1 WI per round after the initial transformation.</li>
            <li><strong>Hybrid Forms:</strong> Combine aspects of different animals by spending additional WI (e.g., bear strength with wolf speed).</li>
            <li><strong>Primal Surge:</strong> At high WI levels, access more powerful transformations and abilities.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Animal Forms:</h4>
          <table>
            <thead>
              <tr>
                <th>Form</th>
                <th>Initial WI Cost</th>
                <th>Primary Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bear</td>
                <td>3 WI</td>
                <td>+4 Strength, +20 HP, claw attacks (1d8+STR), damage resistance</td>
              </tr>
              <tr>
                <td>Wolf</td>
                <td>2 WI</td>
                <td>+3 Dexterity, +10 movement speed, bite attack (1d6+DEX), pack tactics</td>
              </tr>
              <tr>
                <td>Eagle</td>
                <td>2 WI</td>
                <td>Flight, enhanced vision, talon attacks (1d4+DEX), advantage on perception</td>
              </tr>
              <tr>
                <td>Serpent</td>
                <td>2 WI</td>
                <td>Poison bite (1d4+DEX + poison), constrict ability, small size for infiltration</td>
              </tr>
              <tr>
                <td>Dire Form</td>
                <td>5 WI</td>
                <td>Enhanced version of a basic form with additional abilities and stat bonuses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Formbender is knowing which form to use in which situation
          and managing your Wild Instinct efficiently. Generate WI through actions appropriate to your current form,
          and don't be afraid to shift forms when the situation changes. Remember that hybrid forms offer versatility
          but cost more WI to maintain.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Formbenders have three distinct talent trees that emphasize different aspects of their shapeshifting abilities.
          Each tree offers a unique playstyle and approach to transformation.
        </p>

        <div className="talent-tree">
          <h4>1. Primal Fury</h4>
          <p><em>Focus on combat transformations and offensive capabilities.</em></p>
          <ul>
            <li><strong>Predator's Instinct:</strong> Gain bonus damage and critical chance in predatory forms.</li>
            <li><strong>Rending Claws:</strong> Your natural weapons cause bleeding effects and armor penetration.</li>
            <li><strong>Frenzy:</strong> Enter a berserk state that increases attack speed but reduces defense.</li>
            <li><strong>Apex Predator (capstone):</strong> Transform into a legendary beast form with massively enhanced combat abilities for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to focus on dealing damage through powerful beast forms. You'll excel at single-target damage and can become a terrifying force in combat.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Adaptive Predator</h4>
          <p><em>Specialize in rapid form-shifting and hybrid transformations.</em></p>
          <ul>
            <li><strong>Quick Shift:</strong> Change forms as a bonus action instead of a standard action.</li>
            <li><strong>Hybrid Mastery:</strong> Reduce the WI cost of maintaining hybrid forms.</li>
            <li><strong>Partial Transformation:</strong> Transform only specific body parts for situational benefits without full form change.</li>
            <li><strong>Chimeric Form (capstone):</strong> Combine aspects of three different animal forms simultaneously without additional WI cost.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on versatility and adaptation. You'll be able to rapidly switch between forms or combine their benefits, making you incredibly adaptable to changing situations.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Elemental Aspect</h4>
          <p><em>Infuse transformations with elemental energy for additional effects.</em></p>
          <ul>
            <li><strong>Flame Aspect:</strong> Infuse forms with fire, adding fire damage to attacks and resistance to cold.</li>
            <li><strong>Frost Aspect:</strong> Infuse forms with ice, adding cold damage to attacks and resistance to fire.</li>
            <li><strong>Storm Aspect:</strong> Infuse forms with lightning, adding shock damage to attacks and increased speed.</li>
            <li><strong>Primal Element (capstone):</strong> Become a pure elemental beast, gaining immunity to your chosen element and powerful elemental attacks.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree adds elemental effects to your transformations. You'll deal additional damage types and gain resistances, making you effective against a wider range of enemies.</p>
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
                <td><strong>Spirit</strong></td>
                <td>Primary</td>
                <td>Increases maximum Wild Instinct and transformation effectiveness</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Primary</td>
                <td>Improves survivability in all forms and transformation endurance</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Secondary</td>
                <td>Enhances physical attacks in most beast forms</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Secondary</td>
                <td>Improves agility in faster forms and initiative</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Tertiary</td>
                <td>Enhances your connection to primal instincts and perception</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps maintain human thinking while in beast form</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Formbenders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Shapeshift:</strong> Transform into an animal form, gaining its physical attributes and abilities.</li>
          <li><strong>Primal Surge:</strong> Temporarily boost your physical attributes in any form by spending WI.</li>
          <li><strong>Hybrid Transformation:</strong> Combine aspects of different animal forms for versatility.</li>
          <li><strong>Bestial Recovery:</strong> Regenerate health while in animal form by spending WI.</li>
          <li><strong>Primal Senses:</strong> Enhance your perception based on your current form (scent as wolf, vision as eagle, etc.).</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Formbender's approach to combat revolves around form selection and adaptation:</p>
        <ol className="round-flow">
          <li><strong>Assessment Phase:</strong> Evaluate the battlefield and choose an initial form based on the situation.</li>
          <li><strong>Transformation Phase:</strong> Shift into the appropriate form and position yourself strategically.</li>
          <li><strong>Engagement Phase:</strong> Use form-specific abilities to fulfill your role (tanking, damage, mobility, etc.).</li>
          <li><strong>Adaptation Phase:</strong> When the situation changes, shift to a new form or use hybrid transformations to adapt.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice or tokens to track your current Wild Instinct level.</li>
            <li>Remember that different forms excel in different situations—don't stick with one form out of habit.</li>
            <li>Coordinate with party members to maximize the effectiveness of your current role.</li>
            <li>Use partial transformations for social situations where full beast form would be inappropriate.</li>
            <li>Consider the environment when choosing forms—aquatic forms in water, climbing forms in mountains, etc.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Formbender:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Assess the battlefield. Enemies include a heavily armored knight and several archers. Transform into Wolf form (2 WI) for mobility to reach the archers quickly.
              <em>WI: 10 → 8, Form: Wolf</em>
            </li>
            <li>
              <strong>Round 2:</strong> Spend 1 WI to maintain Wolf form. Use your enhanced speed to reach the archers and attack one with your bite. Generate 2 WI from successful predatory attack.
              <em>WI: 8 → 7 → 9, Form: Wolf</em>
            </li>
            <li>
              <strong>Round 3:</strong> Spend 1 WI to maintain Wolf form. Continue attacking archers, generating another 2 WI from successful attacks.
              <em>WI: 9 → 8 → 10, Form: Wolf</em>
            </li>
            <li>
              <strong>Round 4:</strong> The knight approaches to defend the archers. Shift to Bear form (3 WI) to better handle direct combat with the armored opponent.
              <em>WI: 10 → 7, Form: Bear</em>
            </li>
            <li>
              <strong>Round 5:</strong> Spend 1 WI to maintain Bear form. Use Primal Surge (2 WI) to enhance your strength and attack the knight with powerful claw strikes. Generate 2 WI from taking and dealing damage as a tank.
              <em>WI: 7 → 6 → 4 → 6, Form: Bear</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Formbender thrives on <strong>adaptation and primal power</strong>—shifting between forms to meet any challenge.
          Master the flow of Wild Instinct and the strengths of each form, and you'll become a truly unstoppable force of nature.
        </p>
      </section>
    </div>
  );
};

export default FormbenderGuide;
