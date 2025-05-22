import React from 'react';
import './ClassGuides.css';

const ExorcistGuide = () => {
  return (
    <div className="class-guide">
      <h2>Exorcist Guide</h2>
      <p className="class-subtitle">Spirit Banisher • Corruption Cleanser • Supernatural Hunter</p>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The <strong>Exorcist</strong> is a specialized divine warrior who confronts and cleanses supernatural corruption.
          Unlike traditional clerics who focus on healing and protection, Exorcists are trained specifically to combat
          demons, undead, and other malevolent entities that corrupt the natural world.
        </p>
        <p>
          In a party, Exorcists serve as specialized damage dealers against supernatural threats while providing unique
          support through purification and warding abilities. Their capacity to identify, track, and banish otherworldly
          entities makes them invaluable when facing demonic or undead enemies.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Spirit Charges</h3>
        <p>
          The Exorcist's signature mechanic is Spirit Charges – a resource gained by confronting supernatural corruption.
          When an Exorcist encounters, damages, or banishes supernatural entities, they accumulate Spirit Charges that
          can be spent to fuel powerful exorcism abilities.
        </p>
        
        <div className="mechanic-details">
          <h4>Key Spirit Charge Concepts:</h4>
          <ul className="mechanic-list">
            <li><strong>Generating Charges:</strong> Gain Spirit Charges by damaging supernatural entities, purifying corrupted areas, or performing rituals.</li>
            <li><strong>Maximum Charges:</strong> You can hold a number of Spirit Charges equal to your Wisdom modifier + your level.</li>
            <li><strong>Spending Charges:</strong> Spirit Charges can be spent to fuel banishment abilities, enhance wards, or power purification effects.</li>
            <li><strong>Charge Types:</strong> Some abilities generate specific types of charges (Banishment, Purification, or Warding) that can only be used for certain abilities.</li>
            <li><strong>Charge Decay:</strong> Spirit Charges fade over time if not used (typically after a long rest), encouraging active use.</li>
          </ul>
        </div>

        <div className="ability-table">
          <h4>Sample Spirit Charge Abilities:</h4>
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
                <td>Banishing Strike</td>
                <td>1 Charge</td>
                <td>Weapon attack deals +2d6 radiant damage to supernatural entities</td>
              </tr>
              <tr>
                <td>Spirit Ward</td>
                <td>2 Charges</td>
                <td>Create a 15-foot circle that supernatural entities cannot enter for 1d4 rounds</td>
              </tr>
              <tr>
                <td>Purifying Flame</td>
                <td>3 Charges</td>
                <td>Cleanse an area of corruption, dealing 3d8 radiant damage to supernatural entities and healing allies for 1d8</td>
              </tr>
              <tr>
                <td>Greater Exorcism</td>
                <td>5 Charges</td>
                <td>Force a supernatural entity to make a Spirit save or be banished to its home plane</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="note-box">
          <strong>Tactical Tip:</strong> The key to mastering the Exorcist is identifying opportunities to generate Spirit Charges
          and using them strategically. Against supernatural enemies, focus on building charges quickly with basic attacks before
          unleashing powerful exorcism abilities. Against normal foes, rely more on your base combat abilities and save charges
          for when they're truly needed.
        </p>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Exorcists have three distinct talent trees that emphasize different aspects of supernatural combat.
          Each tree offers a unique playstyle and approach to confronting corruption.
        </p>

        <div className="talent-tree">
          <h4>1. Purifier</h4>
          <p><em>Focus on healing, cleansing, and restoration through divine light.</em></p>
          <ul>
            <li><strong>Cleansing Light:</strong> Your purification abilities also heal allies for a portion of the damage dealt.</li>
            <li><strong>Corruption Sense:</strong> Detect supernatural entities and corruption within 60 feet.</li>
            <li><strong>Purifying Touch:</strong> Remove curses, diseases, and possession with a touch.</li>
            <li><strong>Divine Radiance (capstone):</strong> Channel pure divine energy for 1d4 rounds, continuously damaging supernatural entities while healing allies within 30 feet.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is ideal for players who want to combine damage against supernatural threats with support for allies. You'll excel at removing negative effects and providing healing in addition to your combat abilities.</p>
        </div>

        <div className="talent-tree">
          <h4>2. Binder</h4>
          <p><em>Specialize in wards, seals, and containment of supernatural entities.</em></p>
          <ul>
            <li><strong>Powerful Wards:</strong> Your warding abilities last longer and cover larger areas.</li>
            <li><strong>Binding Sigils:</strong> Create magical seals that trap or weaken supernatural entities.</li>
            <li><strong>Protective Circle:</strong> Quickly create a circle of protection that supernatural entities cannot cross.</li>
            <li><strong>Grand Seal (capstone):</strong> Create a powerful seal that can permanently bind a supernatural entity if it fails a Spirit save.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree focuses on battlefield control and protection. You'll excel at containing threats and creating safe zones for your party.</p>
        </div>

        <div className="talent-tree">
          <h4>3. Inquisitor</h4>
          <p><em>Emphasize combat prowess and offensive exorcism techniques.</em></p>
          <ul>
            <li><strong>Banishing Strikes:</strong> Your weapon attacks deal additional radiant damage to supernatural entities.</li>
            <li><strong>Exorcist's Resolve:</strong> Gain resistance to supernatural abilities and effects.</li>
            <li><strong>Spirit Weapon:</strong> Imbue your weapon with spiritual energy, allowing it to strike incorporeal entities and deal additional damage.</li>
            <li><strong>Final Judgment (capstone):</strong> Perform a powerful exorcism that forces all supernatural entities within 30 feet to make a Spirit save or be banished.</li>
          </ul>
          <p><strong>Playstyle:</strong> This tree is for players who want to focus on combat effectiveness against supernatural threats. You'll deal significant damage to demons, undead, and other entities.</p>
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
                <td>Increases exorcism effectiveness, Spirit Charge maximum, and supernatural perception</td>
              </tr>
              <tr>
                <td><strong>Strength</strong> or <strong>Dexterity</strong></td>
                <td>Primary</td>
                <td>Improves combat effectiveness (choose one based on preferred weapon style)</td>
              </tr>
              <tr>
                <td><strong>Constitution</strong></td>
                <td>Secondary</td>
                <td>Provides resilience when confronting powerful supernatural entities</td>
              </tr>
              <tr>
                <td><strong>Charisma</strong></td>
                <td>Secondary</td>
                <td>Enhances your authority when commanding supernatural entities</td>
              </tr>
              <tr>
                <td><strong>Intelligence</strong></td>
                <td>Tertiary</td>
                <td>Helps with knowledge of supernatural lore and rituals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="guide-section">
        <h3>Core Abilities & Tactics</h3>
        
        <h4>Essential Abilities:</h4>
        <ul className="ability-list">
          <li><strong>Detect Corruption:</strong> Sense supernatural entities and corruption within 30 feet.</li>
          <li><strong>Banishing Strike:</strong> Weapon attack that deals additional radiant damage to supernatural entities.</li>
          <li><strong>Spirit Ward:</strong> Create a protective circle that supernatural entities cannot cross.</li>
          <li><strong>Purifying Flame:</strong> Channel divine energy to damage supernatural entities and cleanse corruption.</li>
          <li><strong>Exorcism Ritual:</strong> Perform a ritual to banish a weakened supernatural entity.</li>
        </ul>

        <h4>Combat Strategy:</h4>
        <p>The Exorcist's approach to combat varies based on the nature of the enemies:</p>
        <ol className="round-flow">
          <li><strong>Identification Phase:</strong> Use Detect Corruption to identify supernatural threats and prioritize targets.</li>
          <li><strong>Charge Building Phase:</strong> Use basic attacks and abilities to generate Spirit Charges while assessing the threat level.</li>
          <li><strong>Containment Phase:</strong> Deploy wards and protective measures to control powerful entities and protect allies.</li>
          <li><strong>Banishment Phase:</strong> Once sufficient charges are accumulated, use powerful exorcism abilities to banish or destroy supernatural threats.</li>
        </ol>

        <div className="note-box">
          <h4>Advanced Tactics:</h4>
          <ul>
            <li>Research your enemies before encounters—knowing the specific type of supernatural entity you face can be crucial.</li>
            <li>Carry specialized tools and components for different types of exorcisms (holy water, blessed silver, ritual chalk, etc.).</li>
            <li>Coordinate with party members to herd supernatural entities into your wards or circles.</li>
            <li>Remember that some powerful entities may require specific rituals or weaknesses to banish effectively.</li>
            <li>Against normal enemies, focus on your basic combat abilities and save Spirit Charges for supernatural threats.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Sample Combat Round-Flow</h3>
        <p>Here's how a typical combat encounter against supernatural entities might play out for an Exorcist:</p>
        
        <div className="round-flow">
          <ol>
            <li>
              <strong>Round 1:</strong> Cast Detect Corruption to identify all supernatural entities in the area and their relative power levels.
              <em>Spirit Charges: 0</em>
            </li>
            <li>
              <strong>Round 2:</strong> Attack the nearest demon with a Banishing Strike, dealing weapon damage plus 1d6 radiant damage and generating 1 Spirit Charge.
              <em>Spirit Charges: 1</em>
            </li>
            <li>
              <strong>Round 3:</strong> Cast Spirit Ward, spending 1 Spirit Charge to create a protective circle around vulnerable allies that demons cannot cross.
              <em>Spirit Charges: 0</em>
            </li>
            <li>
              <strong>Round 4:</strong> Attack the demon leader with another Banishing Strike, generating 2 Spirit Charges (1 normal + 1 bonus for targeting a powerful entity).
              <em>Spirit Charges: 2</em>
            </li>
            <li>
              <strong>Round 5:</strong> With the demon leader weakened, spend 2 Spirit Charges to cast Purifying Flame, dealing 3d8 radiant damage to all demons in a 15-foot radius and healing allies for 1d8.
              <em>Spirit Charges: 0</em>
            </li>
          </ol>
        </div>

        <p className="conclusion">
          The Exorcist thrives on <strong>knowledge and preparation</strong>—identifying supernatural threats and deploying the right tools to banish them.
          Master the art of exorcism, and you'll cleanse the world of corruption one entity at a time.
        </p>
      </section>
    </div>
  );
};

export default ExorcistGuide;
