import React from 'react';
import './ClassGuides.css';

const PrimalistGuide = () => {
  return (
    <div className="class-guide">
      <h2>Primalist Guide</h2>
      <p className="class-subtitle">Elemental Shaman • Totem Master • Nature Channeler</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Primalist</strong> is a versatile spellcaster who channels the raw elemental forces of nature.
          Unlike traditional druids who focus on plant and animal life, Primalists tap directly into the primal elements—fire, water, earth, air—and
          the spiritual essence that connects all natural things.
        </p>
        <p>
          In a party, Primalists serve as adaptable support casters who can provide both offensive elemental damage and
          protective buffs through totems and elemental channeling. Their connection to multiple elements allows them to
          adapt to different situations and enemy weaknesses.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Primal Resonance</h3>
        <p>
          The Primalist's signature mechanic is Primal Resonance—a resource that represents their attunement to elemental forces.
          As they cast elemental spells and commune with nature, they build Resonance with specific elements, unlocking more
          powerful abilities tied to those elements.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Primal Resonance Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Elemental Attunement:</strong> Each element (Fire, Water, Earth, Air) has its own Resonance track from 0-10.</li>
            <li><strong>Building Resonance:</strong> Casting spells of a specific element increases your Resonance with that element.</li>
            <li><strong>Resonance Thresholds:</strong> At Resonance levels 3, 6, and 9, you unlock increasingly powerful abilities for that element.</li>
            <li><strong>Elemental Opposition:</strong> Increasing Resonance with one element may decrease Resonance with its opposite (Fire vs. Water, Earth vs. Air).</li>
            <li><strong>Totem Deployment:</strong> Place totems that generate Resonance with specific elements over time.</li>
            <li><strong>Elemental Harmony:</strong> Special abilities unlock when you have balanced Resonance across multiple elements.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Elemental Resonance Thresholds:</h4>
          <table>
            <thead>
              <tr>
                <th>Element</th>
                <th>Resonance 3</th>
                <th>Resonance 6</th>
                <th>Resonance 9</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fire</td>
                <td>+1d6 fire damage to spells</td>
                <td>Burning effect on targets</td>
                <td>Explosive Flames (AoE damage)</td>
              </tr>
              <tr>
                <td>Water</td>
                <td>Minor healing effect</td>
                <td>Cleansing effect (remove debuffs)</td>
                <td>Tidal Wave (healing + push effect)</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>+2 AC natural armor</td>
                <td>Tremor effect (knockdown)</td>
                <td>Stone Skin (damage resistance)</td>
              </tr>
              <tr>
                <td>Air</td>
                <td>+5ft movement speed</td>
                <td>Lightning Strike (bonus action)</td>
                <td>Cyclone (control effect)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Primalist is strategic Resonance management.
          Focus on building Resonance with elements that counter your current enemies (fire against ice creatures, etc.),
          and use totems to maintain Resonance with secondary elements. Remember that some powerful abilities require
          balanced Resonance across multiple elements, so avoid focusing too exclusively on a single element.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Primalists have three distinct talent trees that emphasize different aspects of elemental mastery.
          Each tree offers a unique playstyle and approach to channeling primal forces.
        </p>

        <div className="talent-tree">
          <h4>1. Totemic Sage</h4>
          <p><em>Focus on creating and empowering totems that channel elemental forces.</em></p>
          <ul>
            <li><strong>Totem Mastery:</strong> Your totems have increased duration and effect radius.</li>
            <li><strong>Multi-Totem:</strong> Deploy multiple totems simultaneously without using additional actions.</li>
            <li><strong>Resonant Totems:</strong> Totems generate Resonance with their element more quickly.</li>
            <li><strong>Totem Nexus (capstone):</strong> Create a powerful central totem that combines the effects of all your active totems in a large area.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who enjoy strategic placement and zone control. Your totems will create areas of elemental power that benefit allies and hinder enemies.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Elemental Fury</h4>
          <p><em>Specialize in direct elemental damage and offensive spellcasting.</em></p>
          <ul>
            <li><strong>Elemental Focus:</strong> Your spells of a chosen element deal additional damage.</li>
            <li><strong>Primal Wrath:</strong> Channel multiple elements simultaneously for combined damage effects.</li>
            <li><strong>Resonance Surge:</strong> Temporarily boost your Resonance with all elements for a powerful burst.</li>
            <li><strong>Elemental Maelstrom (capstone):</strong> Create a storm of all four elements that deals massive damage in an area for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on offensive elemental magic. You'll deal significant damage by channeling the destructive aspects of the elements.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Verdant Ward</h4>
          <p><em>Emphasize protective and healing aspects of primal magic.</em></p>
          <ul>
            <li><strong>Natural Armor:</strong> Gain increased protection from elemental forces.</li>
            <li><strong>Healing Spring:</strong> Channel water Resonance for enhanced healing abilities.</li>
            <li><strong>Primal Barrier:</strong> Create shields of elemental energy that absorb damage.</li>
            <li><strong>Nature's Embrace (capstone):</strong> Surround allies in protective elemental energy, granting them resistance to all elemental damage for 1d4 rounds.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to use elemental forces defensively. You'll excel at protecting allies and healing damage through nature's restorative power.</p>
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
                <td>Increases elemental spell effectiveness and Resonance generation</td>
              </tr>
              <tr>
                <td><strong>Wisdom</strong></td>
                <td>Primary</td>
                <td>Improves your connection to natural forces and spell save DCs</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides resilience when channeling powerful elemental forces</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps with understanding elemental interactions and lore</td>
              </tr>
              <tr>
                <td><strong>Dexterity</strong></td>
                <td>Tertiary</td>
                <td>Improves initiative and defensive capability</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Tertiary</td>
                <td>Enhances your ability to communicate with elemental spirits</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>Dump Stat</td>
                <td>Minimal benefit for Primalists</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Elemental Bolt:</strong> Cast a bolt of your chosen element, dealing damage based on your Resonance.</li>
          <li><strong>Totem Deployment:</strong> Place a totem that channels a specific element, generating effects and Resonance.</li>
          <li><strong>Primal Shield:</strong> Create a protective barrier of elemental energy that absorbs damage.</li>
          <li><strong>Elemental Attunement:</strong> Temporarily increase your Resonance with a specific element.</li>
          <li><strong>Nature's Blessing:</strong> Channel elemental energy to heal allies or remove harmful effects.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Primalist's approach to combat revolves around elemental adaptation and Resonance management:</p>
        <ol className="round-flow">
          <li><strong>Assessment Phase:</strong> Identify enemy elemental weaknesses and choose which elements to focus on.</li>
          <li><strong>Deployment Phase:</strong> Place totems strategically to generate Resonance and create zones of elemental power.</li>
          <li><strong>Attunement Phase:</strong> Cast spells that build Resonance with your chosen elements to reach key thresholds.</li>
          <li><strong>Unleashing Phase:</strong> Once sufficient Resonance is built, unleash powerful threshold abilities for maximum effect.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Use dice or tokens to track your current Resonance levels with each element.</li>
            <li>Remember that elemental oppositions can reduce Resonance—plan your spell sequence accordingly.</li>
            <li>Position totems to cover key battlefield areas while keeping them safe from enemy attacks.</li>
            <li>Coordinate with party members to maximize the effectiveness of your elemental zones.</li>
            <li>Consider the environment when choosing elements—water spells are more powerful near bodies of water, etc.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter might play out for a Primalist:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Assess that enemies include fire-vulnerable trolls. Deploy a Water Totem to begin generating Water Resonance.
              <em>Resonance: Fire 0, Water 1, Earth 0, Air 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Cast Water Bolt at the nearest troll, dealing damage and increasing Water Resonance. The Water Totem generates additional Resonance.
              <em>Resonance: Fire 0, Water 3, Earth 0, Air 0</em>
            </li>
            <li>
              <strong>Round 3:</strong> With Water Resonance at 3, you unlock the minor healing effect. Cast Healing Rain to heal allies while further increasing Water Resonance. The Water Totem continues generating Resonance.
              <em>Resonance: Fire 0, Water 5, Earth 0, Air 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Deploy an Earth Totem to begin generating Earth Resonance for defensive benefits. The Water Totem continues generating Water Resonance.
              <em>Resonance: Fire 0, Water 6, Earth 1, Air 0</em>
            </li>
            <li>
              <strong>Round 5:</strong> With Water Resonance at 6, you unlock the cleansing effect. Cast Tidal Surge, dealing significant water damage to trolls and cleansing debuffs from allies. Both totems continue generating Resonance.
              <em>Resonance: Fire 0, Water 7, Earth 2, Air 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Primalist thrives on <strong>elemental harmony and adaptation</strong>—channeling the primal forces of nature to meet any challenge.
          Master the flow of Resonance across the elements, and you'll command the fundamental powers that shape the world.
        </p>
      </section>
    </div>
  );
};

export default PrimalistGuide;
