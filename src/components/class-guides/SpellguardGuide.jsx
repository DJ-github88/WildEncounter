import React from 'react';
import './ClassGuides.css';

const SpellguardGuide = () => {
  return (
    <div className="class-guide">
      <h2>Spellguard Class (Arcanist Path) Guide</h2>
      
      <section className="guide-section">
        <h3>Class Overview</h3>
        <p>
          The Spellguard is an arcane knight and battlefield guardian, dedicated to nullifying magical threats. 
          Like a 5e Abjurer, this class emphasizes magic that blocks, banishes, or protects. In lore, Spellguards 
          are elite defenders sought for exorcisms and guarding mystical sites.
        </p>
        <p>
          Tactically, a Spellguard stands on the front lines between squishy allies and enemy spellcasters. 
          They trade pure firepower for impenetrable shields and reactive defenses, weaving ward spells and 
          aegis barriers to absorb damage and negate dangerous magic.
        </p>
        <p>
          On the battlefield, a Spellguard's role is that of a magical bulwark: they intercept spells with 
          counter-magic, shield allies with arcane protections, and punish casters by redirecting or nullifying 
          hostile magic.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic: Ward Charges</h3>
        <p>
          Spellguards channel their defensive prowess into Ward Charges – mystical tokens of protective energy. 
          Think of Ward Charges as buildable "shield points" that fuel every Spellguard ability. A Spellguard 
          starts each day with 0 charges and can gain charges by casting abjuration/defensive spells or absorbing damage.
        </p>
        <p>
          <strong>Gaining Charges:</strong> Each time the Spellguard casts a shielding or abjuration spell (e.g. a barrier 
          or magic shield) or fully absorbs an enemy spell, they gain Ward Charges (e.g. +1 per cast, or +1 per 5 damage absorbed).
        </p>
        <p>
          <strong>Max Charges:</strong> The maximum Ward Charges scales with level or Arcane Stability (for instance, +1 charge 
          every few levels), preventing infinite stacking.
        </p>
        <p>
          <strong>Spending Charges:</strong> Most core abilities spend charges. For example, an Arcane Bulwark ability might 
          consume 2 Ward Charges to create an extra-strong shield that grants bonus HP or grants advantage on magic saves. 
          A charge might also be spent to reflect a spell back to its caster or to buff the next counterspell attempt.
        </p>
        <p>
          <strong>Interactions:</strong> Ward Charges can interact with Mana and AP. Some spells might cost Mana or a Ward Charge 
          as an alternative, and high Ward counts might provide passive benefits (like +AC or spell resistance).
        </p>
      </section>

      <section className="guide-section">
        <h3>Base Abilities & Spells</h3>
        <p>
          Spellguards possess a toolkit of arcane-defense skills. Each ability lists its Action Points (AP) and Mana cost. 
          All base spells emphasize protection, absorption, or controlled retaliation:
        </p>
        <ul className="ability-list">
          <li>
            <strong>Arcane Shield (2 AP, 5 Mana):</strong> Conjure a shimmering ward around self or an ally. 
            Grants a protective barrier that absorbs damage up to a set amount (for example, HP = 2×level + INT mod). 
            The shield lasts 1 round or until depleted. This is the Spellguard's primary personal defense.
          </li>
          <li>
            <strong>Guardian Ward (2 AP, 6 Mana):</strong> Create a stable ward on the ground at a target location. 
            Allies standing within the warded zone gain +2 AC (or equivalent) against spell and physical attacks and 
            half spell damage. The ward lasts 3 rounds or until destroyed.
          </li>
          <li>
            <strong>Ward Transfer (1 AP, 4 Mana):</strong> Transfer protective energy to an ally. The Spellguard links 
            their Arcane Shield or a portion of its HP to an ally of choice: the ally gains temporary HP equal to half 
            the Spellguard's ward, and the Spellguard's own ward loses that much HP.
          </li>
          <li>
            <strong>Spell Deflection (Reaction, cost 1 AP, 3 Mana):</strong> When the Spellguard is targeted by an enemy 
            spell, they can use a Reaction to try to deflect it. They spend Mana to trigger a saving throw or auto-check. 
            On success, the spell's effect is negated (or the ward absorbs it), and the Spellguard gains +1 Ward Charge.
          </li>
          <li>
            <strong>Absorb Magic (Reaction, cost 2 Mana):</strong> A passive reaction that automatically triggers on spell hit. 
            A portion of incoming spell damage is absorbed into your ward instead of hurting you (e.g. the ward gains HP equal 
            to spell damage * 50%). This grants +1 Ward Charge.
          </li>
          <li>
            <strong>Arcane Riposte (1 AP, 3 Mana):</strong> Whenever the Spellguard successfully blocks or absorbs a spell, 
            they can immediately unleash a burst of magical energy. Choose the last spellcaster: that caster takes moderate 
            force damage (equal to half the blocked damage or a flat 2d6).
          </li>
          <li>
            <strong>Defensive Stance (Passive):</strong> The Spellguard maintains a minor constant ward. They get a small 
            bonus to all saving throws vs. spells (e.g. +2 or Advantage on one save per turn).
          </li>
          <li>
            <strong>Magic Disruption (2 AP, 5 Mana):</strong> A short-range wave that interrupts enemy casting. All hostile 
            spellcasters within 10 ft. must succeed on a saving throw or lose concentration on any spells they've cast.
          </li>
          <li>
            <strong>Counterspell Dart (1 AP, 2 Mana):</strong> Launch a minor bolt of arcane force. If it hits an enemy mage, 
            it imposes disadvantage on that creature's next spell save or attack roll.
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h3>Advanced & Ultimate Abilities</h3>
        <p>
          At higher levels, Spellguards gain powerful capstones that can negate or reflect big spells and create giant wards:
        </p>
        <ul className="ability-list">
          <li>
            <strong>Ward of Nullification (5 AP, 18 Mana):</strong> The Spellguard surrounds themselves and all allies within 
            a large radius with an ultimate ward. For the next round, any enemy spell cast into the warded zone is automatically 
            canceled (as if a permanent counterspell). Any spell effect on entering the area is suppressed.
          </li>
          <li>
            <strong>Reflective Aether (3 AP, 15 Mana):</strong> The Spellguard channels their wards into a mirror of pure energy. 
            For 3 rounds, any magical attack (spell or ranged magical attack) targeted at the Spellguard is reflected back at 50% 
            strength toward the caster.
          </li>
          <li>
            <strong>Aegis Bastion (4 AP, 20 Mana):</strong> Conjure a massive stationary shield wall or dome centered on the 
            Spellguard's position. The Bastion grants all allies inside +50% damage resistance (or a large bonus to AC) and 
            absorbs spell effects (up to a high cap) for 3 turns.
          </li>
          <li>
            <strong>Ultimate Counterspell (Reaction, 2 AP, 10 Mana):</strong> As a Reaction, the Spellguard may invoke legendary 
            counter-magic. They instantly nullify a spell cast by any enemy (as if succeeding on the highest-level Counterspell) 
            and simultaneously reflect that spell back at the original caster.
          </li>
          <li>
            <strong>Sanctuary of Wards (5 AP, 25 Mana):</strong> An ultra-ultimate battlefield control. The Spellguard summons 
            an arcane nexus in an area that dramatically enhances all allied warding. Allies inside gain +3 to all saves vs. magic 
            and regenerate Ward Charges each turn, while enemy casters within take a penalty to casting and spell save DCs.
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>
        <p>
          Spellguards specialize via talent branches. Each tree offers unique defensive strategies:
        </p>
        
        <div className="talent-tree">
          <h4>Aether Warden (Shield Tanking)</h4>
          <p>Focuses on maximizing raw defenses and interposing shields between foes and friends.</p>
          <ul>
            <li><strong>Bulwark Mastery:</strong> Increases maximum Ward Charges and shield HP.</li>
            <li><strong>Guardian's Stance:</strong> When the Spellguard is adjacent to an ally, they can take reactions on the ally's behalf, using their ward to absorb damage meant for the ally.</li>
            <li><strong>Fortified Ward:</strong> All Ward-based shields gain extra durability, reflecting a bulwark's reinforcement.</li>
            <li><strong>Resolute Aegis:</strong> Grants bonus hit points or temporary HP equal to Spellguard's level when activating any barrier ability.</li>
            <li><strong>Immovable Sentinel:</strong> If the Spellguard expends all Ward Charges, they become temporarily immune to a single spell or gain an automatic save success.</li>
          </ul>
        </div>
        
        <div className="talent-tree">
          <h4>Counterglyph (Spell Reflection)</h4>
          <p>Excels at turning enemy magic back on itself and disrupting spells.</p>
          <ul>
            <li><strong>Disruption Glyph:</strong> The Spellguard can inscribe static runes that automatically counter the first enemy spell cast in an area.</li>
            <li><strong>Aether Reversal:</strong> Whenever the Spellguard successfully deflects a spell, the attacker immediately suffers spellcasting disadvantage on their next turn or loses a portion of their Mana.</li>
            <li><strong>Arcane Overload:</strong> For each Ward Charge spent, the Spellguard may add force damage to Arcane Riposte or similar counterattack spells.</li>
            <li><strong>Meta-Defense:</strong> Reduces the AP cost of Reaction abilities by 1, making counters quicker.</li>
            <li><strong>Arcane Reprisal (Ultimate Talent):</strong> Upgrade Reflective Aether so that reflected spells hit at full strength and daze the caster (they lose their next action).</li>
          </ul>
        </div>
        
        <div className="talent-tree">
          <h4>Ley Sentinel (Zone Control)</h4>
          <p>Leverages battlefield control and area denial through arcane fields and runes.</p>
          <ul>
            <li><strong>Leyline Ward:</strong> The Spellguard can tether their ward to the earth at a point; allies standing on that point regenerate Mana or Ward Charges each turn.</li>
            <li><strong>Arcane Quake:</strong> Once per encounter, the Spellguard can break their ward to unleash a shockwave that deals force damage and disrupts spellcasting in a wide area.</li>
            <li><strong>Ensnaring Glyphs:</strong> The Spellguard marks the ground; enemies that end their turn on a marked space have their next spell slowed.</li>
            <li><strong>Sanctified Ground:</strong> When the Spellguard is stationary, the area around grants all allies bonuses to spell saves and halves enemy spell damage.</li>
            <li><strong>Cataclysmic Anchor (Ultimate Talent):</strong> The Spellguard's ultimate field (Sanctuary of Wards) now also traps enemy projectiles, causing enemy spells to go off harmlessly into the ground while it lasts.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Attribute Scaling</h3>
        <p>
          Spellguards rely on a mix of mental acuity and physical resilience. Key stats include:
        </p>
        <ul>
          <li>
            <strong>Intelligence (INT):</strong> Governs the potency of arcane shields and countermagic. A higher INT increases 
            the hit points of wards and the saving throw DC or effectiveness of defensive spells. INT might add directly to any 
            shield's HP or reduce damage taken from spells.
          </li>
          <li>
            <strong>Constitution (CON):</strong> Determines the Spellguard's raw durability. A higher Constitution grants more 
            hit points. This lets the Spellguard soak physical attacks in addition to magical ones. CON can also influence the 
            duration or strength of physical components of wards.
          </li>
          <li>
            <strong>Wisdom (WIS):</strong> Represents the Spellguard's awareness and mental discipline. For a Spellguard, high 
            WIS might boost saving throws against mind-affecting spells or allow special perception of magic. WIS could also be 
            used as the key stat for certain defensive talents.
          </li>
          <li>
            <strong>Custom – Arcane Stability/Wardcraft:</strong> Some games introduce a custom stat for magical resilience. 
            Arcane Stability or Wardcraft could act like Constitution for wards. For instance, it might grant bonus ward HP or 
            faster ward regeneration.
          </li>
        </ul>
        <p>
          Each Spellguard player should invest in INT for stronger shields, CON for staying power, and optionally WIS or the 
          custom stat to shore up resistance to enemy spellcraft. These attributes ensure the Spellguard fulfills its role as 
          a specialized arcane defender, an indefatigable bulwark against magical chaos.
        </p>
      </section>
    </div>
  );
};

export default SpellguardGuide;
