import React from 'react';
import './ClassGuides.css';

const DeathcallerGuide = () => {
  return (
    <div className="class-guide">
      <h2>Deathcaller Guide</h2>
      <p className="class-subtitle">Soul Harvester • Necromantic Specialist • Death Magic Master</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Deathcaller</strong> is a specialized necromancer who focuses on harvesting and manipulating the souls of the recently deceased.
          Unlike traditional necromancers who primarily raise and control undead, Deathcallers extract soul essence from the dead to fuel powerful
          spells and abilities, blurring the line between life and death.
        </p>
        <p>
          In a party, Deathcallers serve as versatile spellcasters with unique utility and control capabilities.
          Their ability to harvest soul energy from fallen enemies makes them increasingly powerful as combat progresses,
          allowing them to unleash devastating abilities in the later stages of battle.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Soul Charges</h3>
        <p>
          The Deathcaller's signature mechanic is Soul Charges – a resource gained from harvesting the souls of dying creatures.
          When an enemy dies within range, the Deathcaller can capture a portion of their soul essence, storing it as Soul Charges
          that power their most potent abilities.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Soul Charge Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Harvesting Souls:</strong> Gain Soul Charges whenever a creature dies within 30 feet of you (1 charge for minor creatures, 2-3 for powerful ones).</li>
            <li><strong>Maximum Charges:</strong> You can hold a number of Soul Charges equal to your Intelligence modifier + your level.</li>
            <li><strong>Spending Charges:</strong> Soul Charges can be spent to fuel necromantic abilities, summon spirits, or enhance spells.</li>
            <li><strong>Soul Quality:</strong> More powerful creatures yield higher-quality souls that provide additional benefits when harvested.</li>
            <li><strong>Charge Decay:</strong> Soul Charges gradually fade over time (typically after a long rest), encouraging active use.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Soul Charge Abilities:</h4>
          <table>
            <thead>
              <tr>
                <th>Ability</th>
                <th>Charge Cost</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soul Bolt</td>
                <td>1 Charge</td>
                <td>Deal 2d8 necrotic damage that bypasses resistance</td>
              </tr>
              <tr>
                <td>Spectral Guardian</td>
                <td>2 Charges</td>
                <td>Summon a protective spirit that absorbs damage for you</td>
              </tr>
              <tr>
                <td>Death Vision</td>
                <td>3 Charges</td>
                <td>Force a target to witness their own death, stunning them for 1d4 rounds</td>
              </tr>
              <tr>
                <td>Soul Explosion</td>
                <td>5 Charges</td>
                <td>Release all stored souls in a devastating blast, dealing 2d6 damage per charge spent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Deathcaller is strategic soul harvesting and charge management.
          In the early rounds of combat, focus on weakening multiple enemies to create soul harvesting opportunities.
          Save your most powerful charge-consuming abilities for critical moments, and remember that your power grows as the battle progresses
          and more souls become available.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Deathcallers have three distinct talent trees that emphasize different aspects of soul manipulation.
          Each tree offers a unique playstyle and approach to death magic.
        </p>

        <div className="talent-tree">
          <h4>1. Gravecaller</h4>
          <p><em>Focus on summoning and controlling spirits and spectral entities.</em></p>
          <ul>
            <li><strong>Spirit Binding:</strong> Your summoned spirits last longer and have enhanced abilities.</li>
            <li><strong>Soul Puppetry:</strong> Control multiple spirits simultaneously with greater precision.</li>
            <li><strong>Spectral Army:</strong> Convert Soul Charges into various types of spectral minions.</li>
            <li><strong>Ghost Legion (capstone):</strong> Spend 10 Soul Charges to summon a powerful army of spirits that obeys your commands for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy commanding minions. You'll excel at creating spectral allies that can fulfill various roles from tanking to damage dealing.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Reaper</h4>
          <p><em>Specialize in direct soul manipulation and death magic for offensive power.</em></p>
          <ul>
            <li><strong>Soul Rip:</strong> Your soul-harvesting abilities deal additional damage to living targets.</li>
            <li><strong>Death Touch:</strong> Melee touch attack that deals necrotic damage and generates Soul Charges if it kills.</li>
            <li><strong>Soul Consumption:</strong> Consume Soul Charges to enhance your next spell's damage or effect.</li>
            <li><strong>Final Harvest (capstone):</strong> For 1d4 rounds, automatically harvest souls from any creature that dies within 60 feet, and your soul-based attacks deal double damage.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on offensive death magic and direct damage. You'll be particularly effective at eliminating single targets and harvesting their souls for power.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Tombwarden</h4>
          <p><em>Master defensive death magic and soul protection techniques.</em></p>
          <ul>
            <li><strong>Soul Shield:</strong> Convert Soul Charges into temporary hit points or damage resistance.</li>
            <li><strong>Death Ward:</strong> When you would die, consume all Soul Charges to remain at 1 HP instead.</li>
            <li><strong>Spectral Barrier:</strong> Create walls or domes of soul energy that block attacks and movement.</li>
            <li><strong>Veil Between Worlds (capstone):</strong> Spend 8 Soul Charges to exist partially in the realm of the dead for 1d4 rounds, gaining incorporeality and immunity to most physical damage.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to use death magic defensively. You'll be surprisingly durable for a spellcaster and can protect both yourself and allies.</p>
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
                <td>Increases spell effectiveness, maximum Soul Charges, and soul harvesting range</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Improves survivability and resistance to the draining effects of death magic</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Secondary</td>
                <td>Enhances your perception of souls and resistance to spiritual effects</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Useful for commanding spirits and intimidating the living</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Provides some defensive capability</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Deathcallers</td>
              </tr>
              <tr>
                <td><strong>Necrotic Attunement</strong> (Special)</td>
                <td>Secondary</td>
                <td>A unique attribute that enhances soul harvesting and death magic potency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Soul Harvest:</strong> Extract a Soul Charge from a dying creature within 30 feet.</li>
          <li><strong>Necrotic Bolt:</strong> Deal necrotic damage to a target and gain a Soul Charge if they die within 3 rounds.</li>
          <li><strong>Spectral Hand:</strong> Create a ghostly hand that can deliver touch spells at a distance.</li>
          <li><strong>Soul Shield:</strong> Spend Soul Charges to create a protective barrier that absorbs damage.</li>
          <li><strong>Spirit Summon:</strong> Spend Soul Charges to summon a spectral entity that fights for you.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Deathcaller's approach to combat revolves around soul harvesting and strategic charge use:</p>
        <ol className="round-flow">
          <li><strong>Harvesting Phase:</strong> Focus on weakening multiple enemies to create soul harvesting opportunities.</li>
          <li><strong>Accumulation Phase:</strong> Gather Soul Charges while using basic spells to control the battlefield.</li>
          <li><strong>Expenditure Phase:</strong> Once you've accumulated sufficient charges, unleash powerful abilities to turn the tide of battle.</li>
          <li><strong>Adaptation Phase:</strong> Adjust your strategy based on available charges—conserve when low, spend aggressively when high.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice or tokens to track your current Soul Charges.</li>
            <li>Coordinate with party members to ensure you can harvest souls from enemies they defeat.</li>
            <li>Remember that different enemies yield different quality souls—prioritize harvesting from powerful foes.</li>
            <li>Position yourself to maximize your soul harvesting range without exposing yourself to danger.</li>
            <li>Be mindful of the ethical implications of soul harvesting—some NPCs may view your abilities as evil or taboo.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Deathcaller:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Necrotic Bolt at the weakest enemy, dealing 2d6 necrotic damage and marking them for soul harvesting.
              <em>Soul Charges: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> The marked enemy dies from your party fighter's attack. Use Soul Harvest to claim a Soul Charge, then cast another Necrotic Bolt at a different enemy.
              <em>Soul Charges: 1</em>
            </li>
            <li>
              <strong>Round 3:</strong> Another enemy falls, and you harvest their soul. Spend 2 Soul Charges to summon a Spectral Guardian that protects you from incoming attacks.
              <em>Soul Charges: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Cast Necrotic Bolt at another weakened enemy, who dies from the damage. Harvest their soul and save the charge.
              <em>Soul Charges: 1</em>
            </li>
            <li>
              <strong>Round 5:</strong> The battle intensifies as more enemies fall. Harvest two more souls from fallen foes, then spend all 3 Soul Charges to cast Death Vision on the enemy leader, stunning them for 1d4 rounds and turning the tide of battle.
              <em>Soul Charges: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Deathcaller thrives on <strong>the cycle of death and power</strong>—harvesting souls to fuel increasingly potent abilities.
          Master the art of soul manipulation, and you'll transform the deaths of your enemies into the source of your greatest strength.
        </p>
      </section>
    </div>
  );
};

export default DeathcallerGuide;
