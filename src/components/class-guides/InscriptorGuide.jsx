import React from 'react';
import './ClassGuides.css';

const InscriptorGuide = () => {
  return (
    <div className="class-guide">
      <h2>Inscriptor – Arcanist Path Class Guide</h2>
      <p className="class-subtitle">Rune‑smith • Trap‑layer • Tactical spell prep</p>

      <section className="guide-section">
        <h3>Core Motif</h3>
        <p>
          An <strong>Inscriptor</strong> fights by <strong>drawing runes and glyphs</strong> onto surfaces, weapons, or creatures.
          Each rune stores a spell that detonates later—when stepped on, struck, or shouted by a trigger word.
          Inscriptors excel at <strong>in‑advance prep</strong>: fortifying a doorway, rigging kill‑zones, or tattoo‑buffing allies.
        </p>
      </section>

      <section className="guide-section">
        <h3>Unique Mechanic – Glyph Charges (GC)</h3>
        <ul className="mechanic-list">
          <li><strong>Draw Rune (DR):</strong> every rune you carve costs <strong>1 GC</strong>.</li>
          <li><strong>Max GC</strong> = <em>2 + INT mod + ½ level</em> (round up).</li>
          <li><strong>Recover GC:</strong> start of turn if no rune detonated last round <strong>+1 GC</strong>; short rest restores all.</li>
          <li><strong>Prime Rune:</strong> you may "over‑ink" an existing rune by spending an extra GC → its effect <strong>doubles</strong> next trigger.</li>
          <li><strong>Trigger:</strong> each rune lists the event that ignites it (step, strike, command, timer).</li>
        </ul>
        <p>
          Inscriptors juggle GC the way other casters juggle mana.
          You <strong>draw</strong> runes in advance (AP + Mana) and <strong>bank</strong> them; in combat, runes explode automatically or by command.
        </p>
      </section>

      <section className="guide-section">
        <h3>Base Rune Catalog</h3>
        <div className="ability-table">
          <table>
            <thead>
              <tr>
                <th>Rune (Trigger)</th>
                <th>AP</th>
                <th>Mana</th>
                <th>GC</th>
                <th>Effect (concise, INT scales)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Glyph of Shock</strong> (on step)</td>
                <td>2</td>
                <td>2</td>
                <td>1</td>
                <td>Target square becomes charged; first creature that enters takes <strong>2d6 + INT</strong> lightning.</td>
              </tr>
              <tr>
                <td><strong>Ward‑sigil</strong> (command)</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>Draw on ally's armor; when ally is hit, cancel <strong>(1d6 + INT)</strong> dmg then rune fades.</td>
              </tr>
              <tr>
                <td><strong>Seal of Binding</strong> (on strike)</td>
                <td>2</td>
                <td>3</td>
                <td>1</td>
                <td>Imbue your weapon; next hit restrains foe 1 rd (save = 8 + Prof + INT).</td>
              </tr>
              <tr>
                <td><strong>Runic Step</strong> (instant)</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>Teleport 10 ft by sketching a swift glyph mid‑stride (no GC). Grants +1 GC if used out of combat.</td>
              </tr>
              <tr>
                <td><strong>Explosive Script</strong> (timer 1 rd)</td>
                <td>3</td>
                <td>3</td>
                <td>1</td>
                <td>Place rune; after 1 rd blasts <strong>3d6</strong> force in 10 ft. Prime Rune doubles dice.</td>
              </tr>
              <tr>
                <td><strong>Sigil Swap</strong> (reaction)</td>
                <td>1</td>
                <td>1</td>
                <td>spend 1</td>
                <td>Swap positions of two visible runes (15 ft range). Great for surprise detonations.</td>
              </tr>
              <tr>
                <td><strong>Erase Rune</strong></td>
                <td>0</td>
                <td>0</td>
                <td>–</td>
                <td>Remove a placed rune (yours) to immediately refund 1 GC.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="note-box">
          <p><strong>Notes</strong></p>
          <ul>
            <li>A rune occupies a 5 ft square or single item.</li>
            <li>You can maintain <strong>INT mod</strong> runes simultaneously; drawing beyond this erases the oldest.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Advanced Glyphs</h3>
        <ol className="advanced-abilities">
          <li>
            <strong>Arc Array</strong> <em>(AP 3, Mana 4, 2 GC)</em>
            <p>Carve a triangle of three Shock or Explosive runes at once. If all three detonate in one turn, add an extra <strong>4d6</strong> damage burst at the centroid.</p>
          </li>
          <li>
            <strong>Sigil of Stasis</strong> <em>(AP 2, Mana 4, 1 GC)</em>
            <p>Place on floor; first enemy to move within 10 ft must save or be <strong>stunned 1 rd</strong>. Prime doubles duration.</p>
          </li>
          <li>
            <strong>Tattoo of Power</strong> <em>(AP 2, Mana 3, 1 GC/per ally)</em>
            <p>During downtime or a prep round, inscribe runes on up to <em>CHA mod</em> allies. First time each ally casts a spell or hits, add <strong>INT</strong> to damage/heal and the tattoo fades.</p>
          </li>
          <li>
            <strong>Runic Minefield</strong> <em>(AP 4, Mana 5, 2 GC)</em>
            <p>Scatter up to three basic runes (Shock or Explosive) in any adjacent squares instantly (no extra AP). Great mid‑combat zone denial.</p>
          </li>
          <li>
            <strong>Ultimate – Glyph Nova</strong> <em>(AP 3, Mana 6, spend all GC)</em>
            <p>All your placed runes within 60 ft detonate simultaneously—regardless of trigger—then you regain half the GC spent. Each rune's damage/heal is maximized (treat dice as max value).</p>
          </li>
        </ol>
      </section>

      <section className="guide-section">
        <h3>Talent Trees</h3>

        <div className="talent-tree">
          <h4>1. Battle‑Engraver – <em>front‑loaded traps</em></h4>
          <ul>
            <li><strong>Quick Etch:</strong> first rune each round ‑1 AP.</li>
            <li><strong>Chain Reaction:</strong> when a rune detonates, adjacent runes auto‑trigger (one per turn).</li>
            <li><strong>Stone Script:</strong> runes etched on walls/floor gain +2 AC vs. dispel/sundering.</li>
            <li><strong>Detonation Master (capstone):</strong> detonation radius +5 ft and add INT to damage.</li>
          </ul>
        </div>

        <div className="talent-tree">
          <h4>2. Sigil Sentinel – <em>protective wards</em></h4>
          <ul>
            <li><strong>Efficient Lines:</strong> Ward‑sigil Mana cost 0.</li>
            <li><strong>Reactive Ink:</strong> Ally with Ward‑sigil gains +INT to spell saves.</li>
            <li><strong>Mirror Seal:</strong> When Ward‑sigil cancels damage, reflect half to attacker (force).</li>
            <li><strong>Bastion Array (capstone):</strong> Once per rest, inscribe a 15 ft hex‑pattern dome (AP 4, Mana 4, 2 GC) blocking all ranged attacks/spells for 1 rd; allies inside heal INT at start.</li>
          </ul>
        </div>

        <div className="talent-tree">
          <h4>3. Runeblade – <em>weapon glyphs & mobile offense</em></h4>
          <ul>
            <li><strong>Swift Imbue:</strong> Seal of Binding now costs 1 AP.</li>
            <li><strong>Arcane Edge:</strong> Weapon with any rune gains +INT to damage.</li>
            <li><strong>Glyph Dash:</strong> When Runic Step ends adjacent to a foe, next attack has advantage.</li>
            <li><strong>Brand of Ruin (capstone):</strong> Free action: spend 1 GC to mark hit target; start of their turn take <strong>INT</strong> ongoing force (save ends) – stacks up to INT mod.</li>
          </ul>
        </div>
      </section>

      <section className="guide-section">
        <h3>Attribute Impact</h3>
        <div className="attribute-table">
          <table>
            <thead>
              <tr>
                <th>Stat</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>INT</strong></td>
                <td>Increases rune limit, save DC, damage/heal bonus, GC capacity.</td>
              </tr>
              <tr>
                <td><strong>DEX</strong></td>
                <td>Lowers AP cost of drawing (DM may allow "Quick Etch" check).</td>
              </tr>
              <tr>
                <td><strong>CON</strong></td>
                <td>Survivability for close‑range trap setting.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Scaling examples</h4>
        <ul className="scaling-examples">
          <li><strong>Shock Glyph</strong> → 2d6 + INT. At INT 18 (+4) average rises from 7 → 11.</li>
          <li><strong>Stasis DC</strong> → 8 + Prof + INT (e.g. 8 + 4 + 4 = 16).</li>
          <li><strong>Ward‑sigil absorb</strong> → 1d6 + INT (INT 18 ≈ 8.5 avg).</li>
        </ul>
      </section>

      <section className="guide-section">
        <h3>Round‑Flow Example</h3>
        <ol className="round-flow">
          <li><strong>Prep turn:</strong> Draw Explosive Script in choke‑point (2 AP, 1 GC).</li>
          <li><strong>Enemy rushes:</strong> Boom—detonates for 3d6; you earn +1 GC (Ward talent).</li>
          <li><strong>Your turn:</strong> Quick Etch Shock glyph behind foe (1 AP), Runic Step in (1 AP), Warded Strike (2 AP) spending 1 GC for +d8.</li>
          <li><strong>Late fight:</strong> Glyph Nova (AP 3, Mana 6, spend remaining 3 GC) – every residual rune pops, finishing stragglers.</li>
        </ol>
        <p className="conclusion">
          The Inscriptor owns <strong>space and timing</strong>: carve, kite, detonate, repeat.
        </p>
      </section>
    </div>
  );
};

export default InscriptorGuide;
