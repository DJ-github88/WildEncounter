import React from 'react';
import './ClassGuides.css';

const PyrofiendGuide = () => {
  return (
    <div className="class-guide">
      <h2>Pyrofiend Guide</h2>

      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The Pyrofiend is a destructive spellcaster who channels demonic fire magic at the cost of their own safety.
          Unlike traditional fire mages, Pyrofiends make pacts with infernal entities, gaining tremendous power but risking self-destruction.
        </p>
        <p>
          In a party, Pyrofiends serve as primary damage dealers who can adapt between burst and sustained damage depending on the situation.
          Their risk/reward playstyle rewards careful resource management and tactical decision-making.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic: Inferno Veil</h3>
        <p>
          The Inferno Veil is a heat meter that measures the buildup of demonic fire energy within the Pyrofiend.
          Every time you cast a fire spell or use a class ability, your Inferno Level rises. As Inferno builds up, it both empowers
          your magic and imposes growing drawbacks that represent the demonic fire raging out of control.
        </p>

        <ul className="mechanic-list">
          <li><strong>Inferno Generation:</strong> Each spell notes how it affects your Inferno Level. Simple spells might add +1 Inferno, while larger spells add more.</li>
          <li><strong>Inferno Range:</strong> Levels range from 0 (no heat) to 10 (maximum) – higher levels unlock more potent abilities.</li>
          <li><strong>Spell Requirements:</strong> Certain powerful spells require you to have a minimum Inferno before casting.</li>
          <li><strong>Venting Heat:</strong> Some specialized abilities "vent" the heat as part of their effect, reducing Inferno Levels.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Pyrofiends have three distinct talent trees that emphasize different aspects of their fiery nature.
          Each tree offers a unique playstyle and approach to managing the Inferno Veil.
        </p>

        <div className="talent-tree">
          <h4>1. Inferno Attunement</h4>
          <p>Master the Inferno Veil itself, achieving a balance between power and control.</p>
          <ul>
            <li><strong>Ember Touch:</strong> Increases Inferno generation from fire spells, allowing faster resource building.</li>
            <li><strong>Infernal Rush:</strong> Grants free spells at certain Inferno thresholds, rewarding resource management.</li>
            <li><strong>Inferno Blast:</strong> Powerful spell that consumes Inferno for massive damage, acting as a pressure release.</li>
          </ul>
        </div>

        <div className="talent-tree">
          <h4>2. Wildfire Attunement</h4>
          <p>Embrace the chaotic, spreading nature of fire, focusing on area damage and damage-over-time effects.</p>
          <ul>
            <li><strong>Demonic Knowledge:</strong> Increases Intelligence, boosting overall spell effectiveness.</li>
            <li><strong>Imp Summoning:</strong> Summon a demonic companion that assists in battle with ranged attacks.</li>
            <li><strong>Felguard Summoning:</strong> Summon a more powerful demon that engages in melee combat.</li>
          </ul>
        </div>

        <div className="talent-tree">
          <h4>3. Hellfire Attunement</h4>
          <p>Delve into the demonic aspect of your power, emphasizing survivability and curse-like effects.</p>
          <ul>
            <li><strong>Improved Fireball:</strong> Reduces casting time of your primary damage spell.</li>
            <li><strong>Aftermath:</strong> Chance to stun targets with destructive spells, adding crowd control.</li>
            <li><strong>Soul Leech:</strong> Heal yourself based on damage dealt, improving survivability.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Playing the Pyrofiend</h3>
        <p>
          The key to mastering the Pyrofiend is understanding when to build Inferno for maximum damage and when to vent it to avoid self-destruction.
          Staying in the 4-6 Inferno range offers a good balance of power and safety for most encounters.
        </p>

        <h4>Essential Spells:</h4>
        <ul className="ability-list">
          <li><strong>Fireball:</strong> Your bread-and-butter damage spell. High damage, medium Inferno generation.</li>
          <li><strong>Immolate:</strong> DoT effect that burns the target over time. Low initial damage but efficient damage-per-Inferno.</li>
          <li><strong>Conflagrate:</strong> Consumes your Immolate effect for instant damage. Good for burst phases.</li>
          <li><strong>Inferno Blast:</strong> Consumes Inferno for massive damage. Your primary "vent" ability.</li>
          <li><strong>Demonic Armor:</strong> Protective spell that reduces incoming damage but generates Inferno over time.</li>
        </ul>

        <p className="conclusion">
          The Pyrofiend thrives on controlled chaos—building power to dangerous levels before releasing it in devastating bursts.
          Master the ebb and flow of your Inferno Veil, and you'll become an unstoppable force of destruction on the battlefield.
        </p>
      </section>
    </div>
  );
};

export default PyrofiendGuide;
