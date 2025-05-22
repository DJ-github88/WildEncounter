import { useState } from 'react';

const CombatTabs = () => {
  const [activeTab, setActiveTab] = useState('mechanics');
  const [activeAPSubtab, setActiveAPSubtab] = useState('how');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAPSubtabChange = (subtabId) => {
    setActiveAPSubtab(subtabId);
  };

  // Define tab colors
  const getTabStyle = (tabId) => {
    return activeTab === tabId ?
      { backgroundColor: '#1e293b', borderBottom: '2px solid #f59e0b', color: '#f59e0b', borderRadius: '4px 4px 0 0' } :
      { borderRadius: '4px 4px 0 0', margin: '0 2px' };
  };

  // Style for the Basics tab (now matches other tabs)
  const getBasicsTabStyle = () => {
    return activeTab === 'basics' ?
      { backgroundColor: '#1e293b', borderBottom: '2px solid #f59e0b', color: '#f59e0b', borderRadius: '4px 4px 0 0' } :
      { borderRadius: '4px 4px 0 0', margin: '0 2px' };
  };

  // Special style for Death & Exhaustion tab
  const getDeathTabStyle = () => {
    return activeTab === 'death' ?
      { backgroundColor: '#1e293b', borderBottom: '2px solid #f59e0b', color: '#f59e0b', borderRadius: '4px 4px 0 0' } :
      { borderRadius: '4px 4px 0 0', margin: '0 2px' };
  };

  return (
    <div className="combat-tabs-wrapper">
      <div className="combat-tabs-navigation">
        <button
          className={`combat-tab-button ${activeTab === 'basics' ? 'active' : ''}`}
          onClick={() => handleTabChange('basics')}
          style={getBasicsTabStyle()}
        >
          Basics
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'mechanics' ? 'active' : ''}`}
          onClick={() => handleTabChange('mechanics')}
          style={getTabStyle('mechanics')}
        >
          Combat Mechanics
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'attacks' ? 'active' : ''}`}
          onClick={() => handleTabChange('attacks')}
          style={getTabStyle('attacks')}
        >
          Attacks & Armor
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'crits' ? 'active' : ''}`}
          onClick={() => handleTabChange('crits')}
          style={getTabStyle('crits')}
        >
          Critical Hits & Misses
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'conditions' ? 'active' : ''}`}
          onClick={() => handleTabChange('conditions')}
          style={getTabStyle('conditions')}
        >
          Conditions
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'death' ? 'active' : ''}`}
          onClick={() => handleTabChange('death')}
          style={getDeathTabStyle()}
        >
          Death & Exhaustion
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'resting' ? 'active' : ''}`}
          onClick={() => handleTabChange('resting')}
          style={getTabStyle('resting')}
        >
          Resting
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'souls' ? 'active' : ''}`}
          onClick={() => handleTabChange('souls')}
          style={getTabStyle('souls')}
        >
          Soulmonger
        </button>
        <button
          className={`combat-tab-button ${activeTab === 'actionpoints' ? 'active' : ''}`}
          onClick={() => handleTabChange('actionpoints')}
          style={getTabStyle('actionpoints')}
        >
          Action Points
        </button>
      </div>

      <div className="combat-tab-content">
        {activeTab === 'basics' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Combat Basics</h3>
            <div className="tab-section">
              <h4 className="tab-subtitle">Rounds & Turns</h4>
              <p>Combat takes place in rounds, with each round representing approximately 6 seconds of in-game time. During a round, each participant takes a turn in order of initiative.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Actions</h4>
              <p>On your turn, you spend Action Points (AP) to perform various actions. You also have reactions available between turns that also cost AP.</p>

              <div className="action-points-cards">
                <div className="action-card">
                  <h5>Actions</h5>
                  <p>Attack, cast a spell, use an ability</p>
                </div>

                <div className="action-card">
                  <h5>Movement</h5>
                  <p>Move up to your speed (costs 1 AP)</p>
                </div>

                <div className="action-card">
                  <h5>Reactions</h5>
                  <p>Dodge, parry, opportunity attacks</p>
                </div>

                <div className="action-card">
                  <h5>AP Refresh</h5>
                  <p>AP refreshes after both sides have acted</p>
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Damage & Health</h4>
              <p>When you take damage, your armor soaks some of it, and the rest is subtracted from your current hit points. When you reach 0 hit points, you enter a downed state and gain exhaustion.</p>
            </div>
          </div>
        )}

        {activeTab === 'mechanics' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Combat Mechanics</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Core Combat System</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                The goblin lunges at you with its rusty dagger. You quickly decide to spend 2 AP to dodge, rolling to the side as the blade whistles past your ear. On your turn, you spend 2 AP to attack with your sword, rolling a 6 on your d8—a critical hit! The goblin shrieks as your blade finds a vital spot.
              </p>
              <p>Our combat system is built around these core principles:</p>
              <ul className="rule-list">
                <li><strong>Action Points (AP):</strong> The primary resource used for all actions and reactions</li>
                <li><strong>Nimble-style Resolution:</strong> Using the weapon/spell die for both hit determination and damage</li>
                <li><strong>Armor Soaking:</strong> Armor absorbs damage rather than making you harder to hit</li>
                <li><strong>Resource Management:</strong> Managing AP, class resources, and armor durability</li>
              </ul>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Action Points (AP)</h4>
              <p>Action Points are the heart of the combat system:</p>
              <ul className="rule-list">
                <li>AP is determined by your initiative roll at the start of combat</li>
                <li>AP is spent on both actions (your turn) and reactions (opponent's turn)</li>
                <li>AP refreshes after both sides have completed their turns</li>
                <li>Most common actions cost 1-2 AP</li>
                <li>Managing your AP between offense and defense is crucial</li>
              </ul>
              <p>For detailed AP costs, see the Action Points tab.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Class Resources</h4>
              <p>In addition to AP, most abilities cost class-specific resources:</p>
              <ul className="rule-list">
                <li><strong>Mana:</strong> Used by many spellcasting classes</li>
                <li><strong>Health:</strong> Some abilities require sacrificing health</li>
                <li><strong>Energy:</strong> Used for physical abilities and special attacks</li>
                <li><strong>Class-Specific:</strong> Unique resources like Continuum (Chronarch), Inferno Levels (Pyrofiend), Blood Thresholds (Martyr), etc.</li>
              </ul>
              <p>Each class has a unique resource system that defines its playstyle and tactical options.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Attack Resolution</h4>
              <p>When you make an attack or cast a spell:</p>
              <ol className="rule-list">
                <li>Spend the required AP and any class resources</li>
                <li>Roll your weapon or spell die (e.g., 1d8 for a longsword)</li>
                <li>A roll of 1 is always a miss. If you roll a 1, roll again - if it's 1 again, it becomes a critical miss</li>
                <li>A roll of the maximum value (e.g., 8 on a d8) is a critical hit</li>
                <li>Any other result hits and deals damage equal to the roll plus attribute modifier</li>
                <li>Target's armor reduces damage based on their Armor Score (see Armor System)</li>
                <li>Remaining damage is applied to the target's hit points</li>
              </ol>
              <p>This streamlined system eliminates separate attack and damage rolls, keeping combat fast and exciting.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Defense Options</h4>
              <p>When attacked, you have several defensive options if you have AP available:</p>
              <ul className="rule-list">
                <li><strong>Dodge (2 AP):</strong> Increases the attacker's miss chance by 25% (making rolls of 1-3 on a d8 miss, for example)</li>
                <li><strong>Parry (1 AP):</strong> Roll your weapon die against the attacker's roll; if higher, you negate the attack. Even smaller weapons can parry larger attacks through exploding dice (if you roll the maximum value on your die, roll again and add the result)</li>
                <li><strong>Raise Shield (1 AP):</strong> Roll a shield die to absorb additional damage</li>
                <li><strong>Armor:</strong> If you don't (or can't) use a reaction, your armor still reduces damage based on your Armor Score</li>
              </ul>
              <p>Choosing when to spend AP on defense versus saving it for offense is a key tactical decision.</p>
            </div>
          </div>
        )}

        {activeTab === 'attacks' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Attacks & Armor</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Evolved Combat - Strategy and Peril</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "Combat..?" the hooded figure exasperates, slumping back against the creaking wood of the bar stool. Rain pelts relentlessly against the window beside him, echoing the turmoil brewing inside. He turns his gaze towards the stormy scene outside, his voice tinged with a mix of disdain and challenge.
              </p>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                "It's not how I envisioned it," he says, almost to himself. "Combat is supposed to be spontaneous, dangerous—deadly even!"
              </p>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Turning back to you, his eyes narrow under the shadow of his hood. "Am I wrong?" he challenges, the question sharp and hanging in the air as dense as the storm outside.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Attacks & Armor</h4>
              <p>In our combat system, we use an Armor Score that determines damage reduction rather than affecting hit chance:</p>

              <ul className="rule-list">
                <li><strong>Armor Score:</strong> Determines the damage reduction die and modifier</li>
                <li><strong>Damage Reduction:</strong> Armor absorbs damage based on its Armor Score</li>
                <li><strong>Durability:</strong> Tracks how much damage armor can absorb before breaking</li>
              </ul>

              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Armor Score Formula</td>
                      <td>Base 10 + armor type bonus + enchantment bonus</td>
                    </tr>
                    <tr>
                      <td>Damage Reduction</td>
                      <td>- Armor Score 10: Reduces damage by 1d4<br />
                      - Armor Score 20: Reduces damage by 1d6<br />
                      - Armor Score 30: Reduces damage by 1d8<br />
                      - Armor Score 40+: Reduces damage by 1d10</td>
                    </tr>
                    <tr>
                      <td>Armor Score Scaling</td>
                      <td>- Every +5 Armor Score: Add +1 to damage reduction<br />
                      - Every +10 Armor Score: Increase die size (d4→d6→d8→d10)<br />
                      - Minimum damage reduction is 0 (cannot go negative)</td>
                    </tr>
                    <tr>
                      <td>Armor Durability</td>
                      <td>- Light Armor: 15 durability<br />
                      - Medium Armor: 28 durability<br />
                      - Heavy Armor: 37 durability<br />
                      - Decreases by 1 with each hit</td>
                    </tr>
                    <tr>
                      <td>Armor Repair</td>
                      <td>- Short rest: Restores 1d4 durability<br />
                      - Long rest: Restores 1d6 durability<br />
                      - At shops: Full repair</td>
                    </tr>
                    <tr>
                      <td>Critical Hit</td>
                      <td>When you roll the maximum value on your weapon die, you score a critical hit that deals maximum damage plus your attribute modifier.</td>
                    </tr>
                    <tr>
                      <td>Critical Miss</td>
                      <td>When you roll a 1 and then another 1, you experience a critical miss. Roll on the Miss Consequences table to determine the outcome.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                As you traverse the fog-laden streets of the ancient city, your footsteps echo on the cobblestones, alerting you to the lurking dangers. A hiss from the shadows betrays the presence of a lurking rogue, and without hesitation, you unsheathe your sword, bracing yourself. You're clad in medium armor with an Armor Score of 22, which reduces damage by 1d6+2 and has a durability of 28. The rogue lunges at you with his dagger, rolling a 3 on his d4 attack die - a hit!
              </p>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                The attack would deal 3 damage plus the rogue's Dexterity modifier of +2, for a total of 5 damage. However, your armor reduces the damage - you roll a 4 on your 1d6 damage reduction die and add the +2 from your Armor Score for a total reduction of 6. Since damage reduction cannot reduce damage below 0, you take no damage from the attack.
              </p>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Counterattacking, you aim a swift strike at the rogue with your longsword. You roll an 8 on your d8 attack die - a critical hit! Your longsword deals maximum damage of 8 plus your Strength modifier of +2 for a total of 10 damage. The rogue's light armor has an Armor Score of 12, reducing damage by 1d4+1. They roll a 2, for a total reduction of 3. Your attack deals 7 damage, and the rogue collapses under the severe impact of your blow.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Armor Durability</h4>
              <p>Each time your armor absorbs damage, its durability decreases by 1. When durability reaches 0, the armor no longer provides damage reduction until repaired.</p>

              <ul className="rule-list">
                <li><strong>Tracking:</strong> Character sheets should track total armor durability across all equipped pieces</li>
                <li><strong>Broken Armor:</strong> When durability reaches 0, armor provides no damage reduction and may impose penalties</li>
                <li><strong>Repair Options:</strong> Armor can be repaired during rests or at blacksmiths</li>
              </ul>

              <div className="action-points-cards">
                <div className="action-card">
                  <h5>Short Rest Repair</h5>
                  <p>Restore 1d4 durability points</p>
                </div>

                <div className="action-card">
                  <h5>Long Rest Repair</h5>
                  <p>Restore 1d6 durability points</p>
                </div>

                <div className="action-card">
                  <h5>Blacksmith Repair</h5>
                  <p>Restore full durability (costs gold)</p>
                </div>

                <div className="action-card variant">
                  <h5>Broken Armor Effects</h5>
                  <p>Movement speed reduced by 10 ft., disadvantage on Stealth checks, and vulnerability to critical hits</p>
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Multiple Attacks</h4>
              <p>When making multiple attacks (such as with multi-attack abilities or dual-wielding):</p>
              <ul className="rule-list">
                <li>Only the first die rolled determines if the attack hits or crits</li>
                <li>If using 3d8 for an attack and you roll 3, 7, 8, the attack misses because the first die (3) is not a 1 or the maximum value</li>
                <li>If using 3d8 and you roll 8, 5, 2, the attack is a critical hit because the first die (8) is the maximum value</li>
              </ul>
              <p>This ensures that even powerful multi-dice attacks maintain the same hit/miss/crit probabilities.</p>
            </div>
          </div>
        )}

        {activeTab === 'crits' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Critical Hits & Misses</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Critical Hits & Misses</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Your blade finds the perfect opening in the orc's defenses as you roll the maximum value on your weapon die. Time seems to slow as you execute a devastating strike that leaves your opponent reeling.
              </p>
              <p>Our critical hit system is based on the weapon or spell die used, making combat more dynamic and varied:</p>

              <ul className="rule-list">
                <li><strong>Critical Hit:</strong> Rolling the maximum value on your weapon die (e.g., 8 on a d8) results in a critical hit</li>
                <li><strong>Critical Hit Damage:</strong> Deal maximum possible damage plus your attribute modifier</li>
                <li><strong>Critical Miss:</strong> Rolling a 1 followed by another 1 results in a critical miss</li>
                <li><strong>Miss Consequences:</strong> On a critical miss, roll on the Miss Consequences table to determine the outcome</li>
              </ul>

              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Catastrophic Failure: Weapon breaks/malfunctions (1 AP + DC 12 DEX to fix)</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Self-Inflicted Wound: Take 1d4 damage + Bleeding for 1d4 rounds</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Overextension: Fall prone, end movement for this turn</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Tactical Blunder: Next attack against you has advantage</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Fumble: Drop weapon at your feet</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Distraction: Lose 1 AP from your next turn</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Off-Balance: Movement speed halved on next turn</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Exposed: Armor damage reduction reduced by 2 until next turn</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Demoralized: Disadvantage on next saving throw</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Simple Miss: No additional consequences</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>Some abilities and spells may have unique critical effects specified in their descriptions that take precedence over these standard effects.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Critical Hit Example</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                As the rogue lunges at you, blade gleaming in the dim light, you counter with your longsword. You roll your weapon die (1d8) and get an 8 - the maximum value! This is a critical hit. Your longsword deals 8 damage (maximum for 1d8) plus your Strength modifier of +2 for a total of 10 damage. The rogue's light armor has an Armor Score of 12, which reduces damage by 1d4+1. They roll a 2 on the 1d4, adding the +1 for a total damage reduction of 3. After armor reduction, your critical hit deals 7 damage, sending the rogue staggering backward.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Critical Miss Example</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Your foot slips on loose gravel as you swing your mace, sending your attack wildly off course. You roll a 1 on your weapon die - a miss. Since it's a 1, you roll again to check for a critical miss and get another 1! This is a critical miss. You roll on the Miss Consequences table (Roll: 1d10, Result: 3) and get "Overextension." Your wild swing throws you off balance, causing you to fall prone and ending your movement for this turn. The goblin cackles as you struggle to regain your footing.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Spell Criticals</h4>
              <p>Spells follow the same critical hit and miss rules as weapon attacks, with these additional considerations:</p>
              <ul className="rule-list">
                <li><strong>Area Effect Spells:</strong> Only roll once for the entire spell, not per target</li>
                <li><strong>Critical Spell Hits:</strong> Rolling the maximum value on the spell die may apply status effects instead of extra damage</li>
                <li><strong>Critical Spell Misses:</strong> Rolling a 1 followed by another 1 may cause magical feedback or unintended effects</li>
                <li><strong>Exploding Dice:</strong> Spell dice can also explode on critical hits, allowing even minor spells to overcome powerful defenses</li>
              </ul>
              <p>Some spells have unique critical effects specified in their descriptions, which take precedence over the standard effects.</p>
            </div>
          </div>
        )}

        {activeTab === 'conditions' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Combat Conditions</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Introduction to Conditions</h4>
              <p>Conditions represent physical and mental states that alter a character's capabilities and behaviors. They can be inflicted by spells, abilities, environmental hazards, or critical hits.</p>
              <p>The conditions below are organized by category and include their mechanical effects, duration, and any special interactions with other conditions.</p>

              <div className="condition-categories">
                <button className="condition-category-button" onClick={() => window.location.href = '#movement-conditions'}>Movement Conditions</button>
                <button className="condition-category-button" onClick={() => window.location.href = '#combat-conditions'}>Combat Conditions</button>
                <button className="condition-category-button" onClick={() => window.location.href = '#sensory-conditions'}>Sensory Conditions</button>
                <button className="condition-category-button" onClick={() => window.location.href = '#mental-conditions'}>Mental Conditions</button>
                <button className="condition-category-button" onClick={() => window.location.href = '#elemental-conditions'}>Elemental Conditions</button>
                <button className="condition-category-button" onClick={() => window.location.href = '#special-conditions'}>Special Conditions</button>
              </div>
            </div>

            <div id="movement-conditions" className="tab-section">
              <h4 className="tab-subtitle">Movement Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Immobilized</h5>
                  <p><strong>Effect:</strong> Cannot move from current position but can still take actions and rotate.</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Weakened, costs +1 AP for all actions.</p>
                </div>

                <div className="condition-card">
                  <h5>Prone</h5>
                  <p><strong>Effect:</strong> Speed halved, disadvantage on attack rolls, melee attackers have advantage, ranged attackers have disadvantage.</p>
                  <p><strong>Duration:</strong> Until standing (costs 1 AP).</p>
                  <p><strong>Synergy:</strong> If also Wet, requires DC 12 DEX check to stand.</p>
                </div>

                <div className="condition-card">
                  <h5>Slowed</h5>
                  <p><strong>Effect:</strong> Speed reduced by half, -1 AP per turn, cannot take reactions.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Chilled, becomes Frozen for 1 round.</p>
                </div>

                <div className="condition-card">
                  <h5>Rooted</h5>
                  <p><strong>Effect:</strong> Cannot move but gains +2 to armor soak while rooted.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If hit by fire damage, roots burn away and target takes 1d6 additional damage.</p>
                </div>

                <div className="condition-card">
                  <h5>Knocked Back</h5>
                  <p><strong>Effect:</strong> Pushed X feet in specified direction. If hitting an obstacle, take 1d6 damage per 10 feet of remaining distance.</p>
                  <p><strong>Duration:</strong> Instantaneous.</p>
                  <p><strong>Synergy:</strong> If Knocked Back into another creature, both fall Prone.</p>
                </div>

                <div className="condition-card">
                  <h5>Grappled</h5>
                  <p><strong>Effect:</strong> Speed becomes 0, cannot benefit from bonuses to speed, grants advantage to attacker's next attack.</p>
                  <p><strong>Duration:</strong> Until grappler releases or is incapacitated, or grappled creature breaks free (costs 1 AP, requires successful STR check).</p>
                  <p><strong>Synergy:</strong> If also Slippery, advantage on check to escape.</p>
                </div>

                <div className="condition-card">
                  <h5>Restrained</h5>
                  <p><strong>Effect:</strong> Speed becomes 0, attacks have disadvantage, attackers have advantage, disadvantage on DEX saves.</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Burning, restraints may burn away (GM's discretion).</p>
                </div>

                <div className="condition-card">
                  <h5>Levitated</h5>
                  <p><strong>Effect:</strong> Suspended in air, cannot move without flying, immune to ground effects, ranged attacks have advantage.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also affected by Pushed, moves double distance.</p>
                </div>
              </div>
            </div>

            <div id="combat-conditions" className="tab-section">
              <h4 className="tab-subtitle">Combat Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Disarmed</h5>
                  <p><strong>Effect:</strong> Weapon falls 1d4 spaces away, cannot make weapon attacks until recovered.</p>
                  <p><strong>Duration:</strong> Until weapon is recovered (costs 1 AP).</p>
                  <p><strong>Synergy:</strong> If also Slowed, requires 2 AP to recover weapon.</p>
                </div>

                <div className="condition-card">
                  <h5>Stunned</h5>
                  <p><strong>Effect:</strong> Incapacitated, can't move, automatically fails STR and DEX saves, attackers have advantage.</p>
                  <p><strong>Duration:</strong> Until end of next turn or condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Wet, duration increases by 1 round.</p>
                </div>

                <div className="condition-card">
                  <h5>Weakened</h5>
                  <p><strong>Effect:</strong> Disadvantage on STR and DEX checks and saves, damage dealt reduced by 2.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Poisoned, damage dealt reduced by 4 instead.</p>
                </div>

                <div className="condition-card">
                  <h5>Vulnerable</h5>
                  <p><strong>Effect:</strong> Takes +50% damage from specified damage type.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If vulnerable to multiple damage types, takes +100% damage when hit by both types simultaneously.</p>
                </div>

                <div className="condition-card">
                  <h5>Exposed</h5>
                  <p><strong>Effect:</strong> Armor damage reduction reduced by half (rounded down), critical hit range expanded by 1.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Prone, critical hit range expanded by 2 instead.</p>
                </div>

                <div className="condition-card">
                  <h5>Taunted</h5>
                  <p><strong>Effect:</strong> Must use actions to attack the taunting creature if able.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Enraged, deals +2 damage but has -2 to armor damage reduction.</p>
                </div>

                <div className="condition-card">
                  <h5>Incapacitated</h5>
                  <p><strong>Effect:</strong> Cannot take actions or reactions.</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Prone, considered Helpless.</p>
                </div>

                <div className="condition-card">
                  <h5>Helpless</h5>
                  <p><strong>Effect:</strong> Cannot take actions or reactions, attackers have advantage, automatically fails DEX saves, melee attacks that hit become critical hits.</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Unconscious, death saves have disadvantage.</p>
                </div>
              </div>
            </div>

            <div id="sensory-conditions" className="tab-section">
              <h4 className="tab-subtitle">Sensory Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Blinded</h5>
                  <p><strong>Effect:</strong> Automatically fails sight-based checks, attack rolls have disadvantage, attackers have advantage.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Deafened, considered Disoriented.</p>
                </div>

                <div className="condition-card">
                  <h5>Deafened</h5>
                  <p><strong>Effect:</strong> Automatically fails hearing-based checks, disadvantage on initiative rolls, cannot benefit from verbal communication.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> Immune to Thunder damage but vulnerable to surprise attacks.</p>
                </div>

                <div className="condition-card">
                  <h5>Disoriented</h5>
                  <p><strong>Effect:</strong> Disadvantage on all attack rolls and ability checks, movement in random direction on failed DC 12 WIS save.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Poisoned, WIS save DC increases to 15.</p>
                </div>

                <div className="condition-card">
                  <h5>Marked</h5>
                  <p><strong>Effect:</strong> Visible to all creatures even when hidden or invisible, critical hit range against target expanded by 1.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Exposed, critical hits deal triple damage instead of double.</p>
                </div>

                <div className="condition-card">
                  <h5>Silenced</h5>
                  <p><strong>Effect:</strong> Cannot speak or cast spells with verbal components, cannot be heard.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Restrained, considered Gagged (cannot use consumable items either).</p>
                </div>

                <div className="condition-card">
                  <h5>Dazzled</h5>
                  <p><strong>Effect:</strong> Disadvantage on Perception checks, -2 penalty to attack rolls.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If hit by another light-based effect while Dazzled, becomes Blinded for 1 round.</p>
                </div>

                <div className="condition-card">
                  <h5>Invisible</h5>
                  <p><strong>Effect:</strong> Cannot be seen, advantage on attack rolls, attacks against have disadvantage.</p>
                  <p><strong>Duration:</strong> Until condition is removed or target attacks/casts a spell.</p>
                  <p><strong>Synergy:</strong> If also Silenced, considered Undetectable unless target leaves footprints or disturbs environment.</p>
                </div>

                <div className="condition-card">
                  <h5>Detected</h5>
                  <p><strong>Effect:</strong> Cannot benefit from being hidden or invisible to the detector.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Marked, detector's critical hit range against target expanded by 2.</p>
                </div>
              </div>
            </div>

            <div id="mental-conditions" className="tab-section">
              <h4 className="tab-subtitle">Mental Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Charmed</h5>
                  <p><strong>Effect:</strong> Cannot attack charmer, charmer has advantage on social checks against target.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If charmer is attacked, target makes a WIS save to break the charm.</p>
                </div>

                <div className="condition-card">
                  <h5>Frightened</h5>
                  <p><strong>Effect:</strong> Disadvantage on ability checks and attack rolls while source of fear is visible, cannot willingly move closer to source of fear.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Cornered (unable to move away), must spend 1 AP to steel nerves or lose turn.</p>
                </div>

                <div className="condition-card">
                  <h5>Confused</h5>
                  <p><strong>Effect:</strong> Roll d6 at start of turn: (1) Attack nearest creature, (2) Act normally, (3-4) Do nothing, (5-6) Move in random direction.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Enraged, always rolls 1 on the confusion table.</p>
                </div>

                <div className="condition-card">
                  <h5>Enraged</h5>
                  <p><strong>Effect:</strong> +2 to damage dealt, -2 to armor soak, must attack nearest creature if possible.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Bleeding, damage bonus increases to +4.</p>
                </div>

                <div className="condition-card">
                  <h5>Mind-Controlled</h5>
                  <p><strong>Effect:</strong> Controller dictates target's actions using target's AP.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If target takes damage, they may make a WIS save (DC 15) to break free.</p>
                </div>

                <div className="condition-card">
                  <h5>Pacified</h5>
                  <p><strong>Effect:</strong> Cannot take hostile actions, gains +2 to all saving throws.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed or target is attacked.</p>
                  <p><strong>Synergy:</strong> If also Charmed, duration increases to 2d4 rounds.</p>
                </div>

                <div className="condition-card">
                  <h5>Sleeping</h5>
                  <p><strong>Effect:</strong> Unconscious, prone, unaware of surroundings, wakes if takes damage or someone uses an action to wake them.</p>
                  <p><strong>Duration:</strong> 1d6 minutes or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also under Silence effect, does not wake from normal noise.</p>
                </div>

                <div className="condition-card">
                  <h5>Mesmerized</h5>
                  <p><strong>Effect:</strong> Cannot move or take actions, but aware of surroundings. Effect ends if target takes damage.</p>
                  <p><strong>Duration:</strong> Until condition is removed or target takes damage.</p>
                  <p><strong>Synergy:</strong> If also affected by illusion magic, WIS save to break free has disadvantage.</p>
                </div>
              </div>
            </div>

            <div id="elemental-conditions" className="tab-section">
              <h4 className="tab-subtitle">Elemental Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Burning</h5>
                  <p><strong>Effect:</strong> Takes 1d6 fire damage at the start of each turn, can use an action to extinguish.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until extinguished.</p>
                  <p><strong>Synergy:</strong> If also Oiled, damage increases to 2d6. If also Wet, duration reduced by 1 round.</p>
                </div>

                <div className="condition-card">
                  <h5>Wet</h5>
                  <p><strong>Effect:</strong> Vulnerable to lightning/thunder damage, resistant to fire damage, DEX checks to avoid falling have disadvantage.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until dried.</p>
                  <p><strong>Synergy:</strong> If hit by cold damage while Wet, becomes Chilled for 2 rounds.</p>
                </div>

                <div className="condition-card">
                  <h5>Chilled</h5>
                  <p><strong>Effect:</strong> Speed reduced by 10 ft., AP regeneration reduced by 1, vulnerable to cold damage.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Wet, becomes Frozen for 1 round.</p>
                </div>

                <div className="condition-card">
                  <h5>Frozen</h5>
                  <p><strong>Effect:</strong> Restrained, resistant to fire damage, vulnerable to physical damage.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until broken free (DC 15 STR check, costs 1 AP).</p>
                  <p><strong>Synergy:</strong> Fire damage instantly breaks the ice but deals +50% damage.</p>
                </div>

                <div className="condition-card">
                  <h5>Shocked</h5>
                  <p><strong>Effect:</strong> Cannot take reactions, disadvantage on DEX saves, deals 1d4 lightning damage to adjacent creatures.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Wet, damage to adjacent creatures increases to 2d4.</p>
                </div>

                <div className="condition-card">
                  <h5>Poisoned</h5>
                  <p><strong>Effect:</strong> Disadvantage on attack rolls and ability checks, takes 1d4 poison damage at start of turn.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Weakened, poison damage increases to 2d4.</p>
                </div>

                <div className="condition-card">
                  <h5>Corroded</h5>
                  <p><strong>Effect:</strong> Armor damage reduction reduced by 2, weapon damage reduced by 2, metal equipment takes 1 point of durability damage per round.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Wet, effects doubled.</p>
                </div>

                <div className="condition-card">
                  <h5>Irradiated</h5>
                  <p><strong>Effect:</strong> Takes 1d4 radiant damage at start of turn, glows (negating stealth), healing effects reduced by half.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also affected by necrotic damage, both damage types are increased by 50%.</p>
                </div>
              </div>
            </div>

            <div id="special-conditions" className="tab-section">
              <h4 className="tab-subtitle">Special Conditions</h4>

              <div className="condition-grid">
                <div className="condition-card">
                  <h5>Polymorphed</h5>
                  <p><strong>Effect:</strong> Transformed into another creature, gaining its physical stats but retaining mental stats and consciousness.</p>
                  <p><strong>Duration:</strong> 1d6 minutes or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If reduced to 0 HP while Polymorphed, reverts to original form with 1 HP.</p>
                </div>

                <div className="condition-card">
                  <h5>Petrified</h5>
                  <p><strong>Effect:</strong> Transformed to stone, incapacitated, unaware of surroundings, weight multiplied by 10, immune to all damage except force.</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If partially petrified (failed save by 5 or less), only one limb is affected.</p>
                </div>

                <div className="condition-card">
                  <h5>Cursed</h5>
                  <p><strong>Effect:</strong> Specific negative effect determined by the curse (disadvantage on certain rolls, inability to heal, etc.).</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also affected by divine magic, curse effects are doubled.</p>
                </div>

                <div className="condition-card">
                  <h5>Bleeding</h5>
                  <p><strong>Effect:</strong> Takes 1d4 damage at the start of turn, leaves blood trail, -1 to all physical ability checks.</p>
                  <p><strong>Duration:</strong> Until healed or bandaged (Medicine check DC 12).</p>
                  <p><strong>Synergy:</strong> If also Poisoned, Medicine check DC increases to 15.</p>
                </div>

                <div className="condition-card">
                  <h5>Diseased</h5>
                  <p><strong>Effect:</strong> Cannot regain HP through natural healing, disadvantage on CON saves, max HP reduced by 1d6 per long rest.</p>
                  <p><strong>Duration:</strong> Until cured.</p>
                  <p><strong>Synergy:</strong> If also Exhausted, disease progresses twice as fast.</p>
                </div>

                <div className="condition-card">
                  <h5>Exhausted</h5>
                  <p><strong>Effect:</strong> Cumulative levels (1-6) with increasing penalties, from disadvantage on ability checks to death.</p>
                  <p><strong>Duration:</strong> Until rest or condition is removed.</p>
                  <p><strong>Synergy:</strong> If also Dehydrated, gain one additional level of exhaustion.</p>
                </div>

                <div className="condition-card">
                  <h5>Ethereal</h5>
                  <p><strong>Effect:</strong> Can move through solid objects but not interact with physical world, immune to non-magical damage.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also affected by force damage, immediately returns to material form.</p>
                </div>

                <div className="condition-card">
                  <h5>Soul-Bound</h5>
                  <p><strong>Effect:</strong> Linked to another creature; damage taken by one is shared with the other (50%).</p>
                  <p><strong>Duration:</strong> Until condition is removed.</p>
                  <p><strong>Synergy:</strong> If one bound creature is healed, the other receives 25% of the healing.</p>
                </div>

                <div className="condition-card">
                  <h5>Oiled</h5>
                  <p><strong>Effect:</strong> Vulnerable to fire damage, DEX checks to avoid falling have disadvantage, cannot be grappled.</p>
                  <p><strong>Duration:</strong> 1d6 rounds or until washed off.</p>
                  <p><strong>Synergy:</strong> If hit by fire damage while Oiled, becomes Burning for 2d4 rounds.</p>
                </div>

                <div className="condition-card">
                  <h5>Phased</h5>
                  <p><strong>Effect:</strong> Randomly phases in and out of reality; 50% chance to avoid any attack or effect, but also 50% chance to fail any attack or effect.</p>
                  <p><strong>Duration:</strong> 1d4 rounds or until condition is removed.</p>
                  <p><strong>Synergy:</strong> If also affected by time magic, duration becomes unpredictable (GM's discretion).</p>
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">1. Madness</h4>
              <p><strong>Description:</strong> A fracturing of the mind due to exposure to eldritch horrors, dark magic, or traumatic events.</p>
              <p><strong>Causes:</strong> Witnessing cosmic horrors (DC 15 Wisdom save), prolonged isolation, certain spells, cursed items.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li><strong>Stage 1 (Mild):</strong> Disadvantage on Wisdom and Charisma checks. Random obsessive behavior.</li>
                <li><strong>Stage 2 (Moderate):</strong> As stage 1, plus roll on the Short-Term Madness table at the start of each day.</li>
                <li><strong>Stage 3 (Severe):</strong> As stage 2, plus roll on the Long-Term Madness table after each long rest.</li>
              </ul>
              <p><strong>Short-Term Madness Table (d6):</strong></p>
              <ol className="tab-list">
                <li>Compulsive lying for 1d4 hours</li>
                <li>Hallucinations for 1d4 hours (disadvantage on Perception)</li>
                <li>Extreme paranoia for 1d4 hours (disadvantage on all social checks)</li>
                <li>Uncontrollable trembling for 1d4 hours (disadvantage on Dexterity checks)</li>
                <li>Temporary phobia of a random common object for 1d4 hours</li>
                <li>Temporary amnesia for 1d4 hours (disadvantage on Intelligence checks)</li>
              </ol>
              <p><strong>Treatment:</strong> Lesser Restoration reduces by one stage. Greater Restoration cures completely. Extended rest in a peaceful environment (1 week) reduces by one stage.</p>
              <p><strong>Roleplaying Tips:</strong> Develop a specific manifestation of madness for your character. Perhaps they see shadows moving at the edge of vision, or believe a specific color is dangerous.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">2. Paranoia</h4>
              <p><strong>Description:</strong> An overwhelming sense that others are plotting against you, leading to irrational suspicion and defensive behavior.</p>
              <p><strong>Causes:</strong> Betrayal by allies, mind-affecting magic (DC 14 Wisdom save), exposure to certain poisons or hallucinogens.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>Disadvantage on all Insight and Investigation checks</li>
                <li>Advantage on Perception checks specifically to detect hidden threats or ambushes</li>
                <li>Must make a DC 12 Wisdom save to accept food, drink, or healing from allies</li>
                <li>-2 penalty to AC when adjacent to allies (due to divided attention)</li>
                <li>At the start of combat, roll d20. On a 1-5, you believe a random ally is an enemy in disguise for 1d4 rounds</li>
              </ul>
              <p><strong>Treatment:</strong> Calm Emotions spell provides temporary relief for 1 hour. Lesser Restoration has a 50% chance to cure. Greater Restoration cures completely. A successful DC 15 Persuasion check from a trusted ally grants advantage on the next save against this condition.</p>
              <p><strong>Roleplaying Tips:</strong> Constantly check your belongings, whisper instead of speaking normally, and create elaborate explanations for coincidences.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">3. Hypothermia</h4>
              <p><strong>Description:</strong> Dangerous lowering of body temperature due to exposure to extreme cold.</p>
              <p><strong>Causes:</strong> Extended exposure to cold environments without proper protection, immersion in cold water, certain cold-based spells and attacks.</p>
              <p><strong>Progression:</strong> Characters in extreme cold must make a Constitution save (DC 10 + 1 per hour of exposure) or advance one stage of hypothermia.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li><strong>Stage 1 (Mild):</strong> Disadvantage on Dexterity checks and saves. Shivering affects fine motor control.</li>
                <li><strong>Stage 2 (Moderate):</strong> Speed reduced by 10 feet. Disadvantage on attack rolls. Slurred speech imposes disadvantage on Charisma checks.</li>
                <li><strong>Stage 3 (Severe):</strong> Speed reduced by half. Disadvantage on all ability checks and saving throws. Must make a DC 15 Constitution save at the start of each turn or lose your action as you struggle to stay conscious.</li>
                <li><strong>Stage 4 (Critical):</strong> Unconsciousness. Make a death saving throw at the end of each minute. Three failures results in death by freezing.</li>
              </ul>
              <p><strong>Treatment:</strong> Moving to a warm environment and removing wet clothing stops progression. Each 10 minutes in warm conditions reduces hypothermia by one stage. Magical fire or heat spells provide advantage on saves and reduce recovery time by half.</p>
              <p><strong>Roleplaying Tips:</strong> Describe shivering, slurred speech, confusion, and the desperate search for warmth.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">4. Corruption</h4>
              <p><strong>Description:</strong> Spiritual and physical taint from exposure to dark energies, necromantic magic, or cursed locations.</p>
              <p><strong>Causes:</strong> Handling unholy artifacts, exposure to concentrated necrotic energy, spending time in corrupted locations, failing saves against certain dark spells.</p>
              <p><strong>Corruption Points:</strong> Characters accumulate Corruption Points (CP) through exposure to corrupting influences. Effects manifest at specific thresholds.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li><strong>5 CP:</strong> Minor physical sign (discolored veins, slightly altered eye color). Disadvantage on Charisma checks with good-aligned creatures.</li>
                <li><strong>10 CP:</strong> Noticeable physical change (skin pallor, constant chill). Vulnerability to radiant damage.</li>
                <li><strong>15 CP:</strong> Significant alteration (black veins, eyes darken). Gain darkvision 60ft if you don't have it. If you do, increase by 30ft. Disadvantage on all saving throws against divine magic.</li>
                <li><strong>20 CP:</strong> Major transformation (shadowy aura, physical deformity). Gain resistance to necrotic damage but vulnerability to radiant damage. Holy water causes 2d6 damage on contact.</li>
                <li><strong>25 CP:</strong> Complete corruption. Character becomes an NPC under the GM's control.</li>
              </ul>
              <p><strong>Treatment:</strong> Lesser Restoration removes 1d4 CP. Greater Restoration removes 2d6 CP. Ceremony spell (Atonement option) removes 1d8+4 CP. Extended prayer at a major holy site removes 1d10 CP.</p>
              <p><strong>Roleplaying Tips:</strong> Gradually shift your character's personality toward darker tendencies. Develop an increasing fascination with death or dark magic.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">5. Bloodlust</h4>
              <p><strong>Description:</strong> An overwhelming compulsion to engage in combat and violence, often triggered by the sight or smell of blood.</p>
              <p><strong>Causes:</strong> Barbarian rage abilities, certain curses, magical weapons with bloodthirsty enchantments, exposure to demonic influences.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>When you see a creature wounded (below half HP), make a DC 15 Wisdom save or be compelled to attack the nearest creature (ally or enemy)</li>
                <li>Advantage on all attack rolls while under bloodlust</li>
                <li>Cannot take the Disengage or Dodge actions</li>
                <li>Resistance to fear effects</li>
                <li>After combat ends, must make a DC 15 Wisdom save or attack the nearest object if no creatures remain</li>
              </ul>
              <p><strong>Treatment:</strong> Calm Emotions spell suppresses for 1 minute. Remove Curse spell cures if the bloodlust is curse-based. A successful DC 15 Medicine check allows a character to regain control for 1d4 rounds.</p>
              <p><strong>Roleplaying Tips:</strong> Describe an increasing heart rate, tunnel vision focused on enemies, and difficulty distinguishing friend from foe in the heat of battle.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">6. Magical Addiction</h4>
              <p><strong>Description:</strong> Dependency on magical energies, often resulting from overuse of magical items or exposure to concentrated arcane power.</p>
              <p><strong>Causes:</strong> Using more than 3 magic items simultaneously for extended periods, exposure to raw magical energy, consuming magical substances.</p>
              <p><strong>Withdrawal Timer:</strong> After becoming addicted, a character must be exposed to magic every 24 hours or suffer withdrawal symptoms.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li><strong>Stage 1 (Mild Addiction):</strong> Disadvantage on Concentration checks. Can detect magic within 10 feet automatically.</li>
                <li><strong>Stage 2 (Moderate Addiction):</strong> As stage 1, plus -2 penalty to all ability checks when not in contact with a magic item.</li>
                <li><strong>Stage 3 (Severe Addiction):</strong> As stage 2, plus one level of exhaustion that cannot be removed until exposed to magic.</li>
                <li><strong>Stage 4 (Critical Addiction):</strong> As stage 3, plus random magical effects occur when stressed (GM's discretion, similar to Wild Magic surges).</li>
              </ul>
              <p><strong>Treatment:</strong> Each day without using magic allows a DC 15 Constitution save to reduce addiction by one stage. Greater Restoration reduces by one stage. Wish spell cures completely.</p>
              <p><strong>Roleplaying Tips:</strong> Describe a constant craving for magical energy, fascination with magical items, and withdrawal symptoms like shaking hands or magical sparks emanating from your body.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">7. Phobia</h4>
              <p><strong>Description:</strong> An irrational and debilitating fear of a specific object, creature, or situation.</p>
              <p><strong>Causes:</strong> Traumatic experiences, certain curse effects, mind-affecting magic.</p>
              <p><strong>Common Phobias:</strong> Acrophobia (heights), Arachnophobia (spiders), Claustrophobia (confined spaces), Nyctophobia (darkness), Pyrophobia (fire).</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>When encountering the phobia trigger, make a DC 15 Wisdom save</li>
                <li>On a failed save, become frightened for 1d4 minutes</li>
                <li>While frightened, you must use your action to Dash away from the source of fear if possible</li>
                <li>If unable to flee, you have disadvantage on all ability checks and attack rolls</li>
                <li>You can repeat the save at the end of each of your turns</li>
              </ul>
              <p><strong>Treatment:</strong> Calm Emotions provides temporary relief. Remove Curse works if the phobia is curse-based. Repeated exposure therapy (successful Wisdom saves against progressively closer encounters with the phobia) can eventually cure the condition.</p>
              <p><strong>Roleplaying Tips:</strong> Develop specific reactions to your phobia trigger—perhaps freezing in place, screaming, or becoming irrationally angry as a defense mechanism.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">8. Dehydration</h4>
              <p><strong>Description:</strong> A dangerous lack of water in the body, affecting physical and mental capabilities.</p>
              <p><strong>Causes:</strong> Lack of water consumption, extreme heat, certain poisons or diseases that cause fluid loss.</p>
              <p><strong>Progression:</strong> Characters without adequate water (typically 2 quarts per day, more in hot environments) must make a Constitution save (DC 10 + 1 per previous check) at the end of each day or advance one stage of dehydration.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li><strong>Stage 1 (Mild):</strong> Disadvantage on Constitution checks and saves. Thirst becomes a constant distraction.</li>
                <li><strong>Stage 2 (Moderate):</strong> One level of exhaustion that cannot be removed until hydrated. Disadvantage on all physical ability checks.</li>
                <li><strong>Stage 3 (Severe):</strong> Two levels of exhaustion that cannot be removed until hydrated. Speed reduced by half. Disadvantage on attack rolls and saving throws.</li>
                <li><strong>Stage 4 (Critical):</strong> Three levels of exhaustion that cannot be removed until hydrated. Hallucinations begin (Wisdom save DC 15 to distinguish reality). Hit point maximum reduced by half.</li>
                <li><strong>Stage 5 (Fatal):</strong> Death if a DC 20 Constitution save is failed. On success, remain at stage 4.</li>
              </ul>
              <p><strong>Treatment:</strong> Drinking water reduces dehydration by one stage per quart consumed (maximum one stage per hour). Create Water spell can provide emergency hydration. Goodberry provides enough hydration to reduce by one stage.</p>
              <p><strong>Roleplaying Tips:</strong> Describe cracked lips, constant thirst, headaches, and eventually confusion and desperation for any liquid.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">9. Temporal Displacement</h4>
              <p><strong>Description:</strong> A rare condition where a character becomes partially disconnected from the normal flow of time due to magical accidents or planar travel.</p>
              <p><strong>Causes:</strong> Failed teleportation spells, exposure to time-warping magic, visiting certain planes of existence, interacting with artifacts that manipulate time.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>Initiative rolls are made with disadvantage as you sometimes act out of sync with normal time</li>
                <li>50% chance each round to lose your reaction as you briefly phase out of the current timestream</li>
                <li>When you roll a natural 1 on an attack roll or ability check, you experience a "time slip" and lose your next turn</li>
                <li>When you roll a natural 20 on an attack roll or ability check, you experience a "time acceleration" and gain an additional action on your next turn</li>
                <li>Aging effects (from spells or abilities) are doubled</li>
              </ul>
              <p><strong>Treatment:</strong> Greater Restoration has a 50% chance to cure. Wish spell cures completely. Time spent in an antimagic field reduces symptoms temporarily.</p>
              <p><strong>Roleplaying Tips:</strong> Describe seeing brief glimpses of past or future events, speaking about events that haven't happened yet, or reacting to things that occurred minutes ago.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">10. Soul Sickness</h4>
              <p><strong>Description:</strong> A spiritual affliction that occurs when a character's soul is damaged or partially separated from their body.</p>
              <p><strong>Causes:</strong> Near-death experiences, failed resurrection spells, attacks from soul-eating creatures, exposure to the energy of the Negative Plane.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>Maximum hit points reduced by 25%</li>
                <li>Healing spells and effects only restore half the normal amount of hit points</li>
                <li>Disadvantage on death saving throws</li>
                <li>Vulnerability to necrotic damage</li>
                <li>Cannot be targeted by certain spells that target the soul (such as Magic Jar)</li>
                <li>Resistance to possession effects (as your soul is already damaged or partially absent)</li>
              </ul>
              <p><strong>Treatment:</strong> Greater Restoration cast by a 9th-level or higher spellcaster. Heal spell has a 50% chance to cure. Wish spell cures completely. A special ritual performed at a major temple (requiring rare components worth at least 1,000 gp) can cure the condition.</p>
              <p><strong>Roleplaying Tips:</strong> Describe feeling empty or hollow, having trouble experiencing strong emotions, and appearing slightly translucent in certain lighting conditions.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">11. Arcane Fever</h4>
              <p><strong>Description:</strong> A magical illness that causes fluctuations in a character's connection to arcane energies.</p>
              <p><strong>Causes:</strong> Exposure to unstable magical environments, backlash from interrupted spells, contact with certain magical creatures.</p>
              <p><strong>Mechanical Effects:</strong></p>
              <ul className="tab-list">
                <li>When casting a spell, roll a d20. On a 1, the spell fails and you roll on the Wild Magic Surge table</li>
                <li>On a 20, the spell is cast with increased potency (doubled duration, range, or damage)</li>
                <li>Disadvantage on saving throws against magical effects</li>
                <li>Cantrips occasionally manifest unconsciously during moments of stress (GM's discretion)</li>
                <li>Magical detection abilities (such as Detect Magic) function at double range but cause headaches (disadvantage on Concentration checks for 1 hour after use)</li>
              </ul>
              <p><strong>Treatment:</strong> Lesser Restoration provides temporary relief for 24 hours. Greater Restoration cures completely. A special herbal remedy (requiring rare herbs worth 250 gp and a successful DC 15 Herbalism check) reduces symptoms for 1 week.</p>
              <p><strong>Roleplaying Tips:</strong> Describe magical energy visibly coursing through your veins, occasional sparks when touching metal objects, and sensitivity to magical auras.</p>
            </div>
          </div>
        )}

        {activeTab === 'death' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Death & Exhaustion</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Death and Exhaustion: The Perilous Edge</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                As the onslaught from the orcs intensifies, their weapons finding their mark, you feel the world around you begin to blur and fade. The heavy blows from the orc's axe and the gauntleted strike drive you to your knees, the impact resonating through your battered armor and jarring your bones. Each strike adds layers of fatigue, dragging you deeper into a state of vulnerability. Pinned and desperate, you attempt to raise your arms in a feeble defense, the reality of your dire situation settling in. You're not just fighting for victory now; you're fighting to survive.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Exhaustion Levels</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Level of Exhaustion</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Disadvantage on Ability Checks</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Speed Halved</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Disadvantage on Attack Rolls and Saving Throws</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Position Maximum is Halved</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Speed is Reduced to 0</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Death</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">The Bloodied Condition</h4>
              <p>When you reach 50% position, you gain the Bloodied condition, which may trigger certain abilities or effects.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Gaining Exhaustion</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Condition</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Initial Downed State</td>
                      <td>When a player's HP reaches 0, they are downed and the following happens:
                      <br />- They immediately roll a d4 to determine for how many turns they can survive without medical or healing aid.
                      <br />- They gain 1 level of exhaustion.
                      <br />- Any level of exhaustion gained, or attacking/casting spells in this state prompts a CON saving throw (DC12). Failing this roll prompts rolling the lingering injury table.
                      <br />- PCs at the 3rd level of exhaustion roll saving throws at disadvantage.
                      <br />- Taking damage increases your exhaustion by 2 levels. Critical hits increase it by 3 levels.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Lingering Injury</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>Effect</th>
                      <th>Immediate Consequence</th>
                      <th>Required Intervention</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Staggered</td>
                      <td>Limit Action Points (AP) to 1 for 1d4 turns</td>
                      <td>None (effect naturally expires)</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Severe Bleeding</td>
                      <td>Lose 1 additional HP per turn until bandaged. This applies 1 level of exhaustion each turn.</td>
                      <td>Apply bandages (Medicine)</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Fracture</td>
                      <td>Severe pain and inability to use fractured area; Roll a d4 (Throat, Eyes, Arm, Legs)</td>
                      <td>Must be healed to max HP to regain full function</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Concussion</td>
                      <td>Disadvantage on all checks and attacks</td>
                      <td>Rest, or a Medicine check (DC 15) for quicker recovery</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Weakened</td>
                      <td>-1 to all character actions, +1 to enemy attack rolls</td>
                      <td>Must be healed to max HP to remove effect</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Hypothermia/Shock</td>
                      <td>Disadvantage on all checks, speed reduced by half</td>
                      <td>Warmth, rest, and a Medicine check (DC 15)</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Shock</td>
                      <td>Must make a CON save (DC 10) at start of turn; if failed, lose that turn</td>
                      <td>Recovery as HP improves or through magical healing</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Respiratory Trouble</td>
                      <td>Difficulty breathing, limit movement to 5 ft, all actions require double the AP</td>
                      <td>Must be healed to max HP</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Broken Limb</td>
                      <td>Break a limb (roll 1d4 to determine which limb is affected). Actions spent using that limb is rolled at disadvantage.</td>
                      <td>Must be healed to max HP or properly splinted</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Unyielding Spirit</td>
                      <td>Remains at 0 HP but conscious and defiant</td>
                      <td>Stabilized but must be healed to max HP to act</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Death</h4>
              <p>When players die, they are prompted with a deal with the devil. For the price of their soul, he will reincarnate them, almost as they were before dying.</p>
              <p>Upon respawning players must succeed on a DC18 Wisdom save. Should they fail, they must roll on the "Miracle" table.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Miracle Table</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>"Miracle"</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Empty. There is nothing left of you to be consumed. You, whatever that means, is gone now. You are a mindless thing. You must create a new character.</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Decay's Caress. Your flesh begins to rot visibly, spreading a stench of death. Lose 3 from your CHA permanently.</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Abyssal Clutch. Dark forces erode your essence, leeching away your vitality. Reduce two attributes of your choice by 3 each.</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Death's Blessing. You have returned tougher, hardier. Add an extra +1d6 to your starting Base Position.</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Tortured Bones. Your skeleton painfully reshapes itself, granting you a +2 AC but reducing your Constitution by 2 due to constant pain.</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Emptiness Within. Devoid of emotions and sensations, you traverse the world as a hollow shell, immune to fear and persuasion.</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Ghastly Whispers. Unseen voices fill your head, distracting and terrifying. Suffer a -1 penalty to Wisdom and have disadvantage on concentration checks.</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Withering Strength. Your muscles deteriorate; permanently reduce your Strength by 2.</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Numb Senses. You lose your sharp reflexes; reduce your Dexterity by 2.</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Mind Erosion. Lose proficiency in one Intelligence-based skill of your choice as your intellect falters</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Bleak Existence. You find no comfort in food, drink, or rest. All recovery from rest is halved, and you cannot benefit from potions.</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Echoes of the Void. You hear eerie, otherworldly sounds that distract and unsettle you, imposing disadvantage on Wisdom checks.</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Absent Minded. Your mind wanders, no longer able to focus on the things that you took joy in. Reduce your starting Intelligence score by -1.</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Lingering Cold. Your body is unnaturally cold, causing pain and stiffness. Reduce your Speed by 10 feet and gain vulnerability to fire damage, but resistance to cold damage.</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Spectral Chains. You feel as if invisible chains bind you, slowing your movements and sapping your strength. Reduce your Speed by 5 feet and your Strength score by 1.</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Forgotten. Some memory, some fragile recollection of your past or current life has gone. Between you and the GM, decide what this memory is and what effect its loss has on you.</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Gruesome Visage. Your appearance becomes horrifying to others, giving you advantage on Intimidation but disadvantage on all other Charisma checks.</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Dulled Senses. You are slower to react to threats as they present themselves. Reduce your Initiative by -1.</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Corrupted Blood. Your blood turns toxic, providing immunity to disease but causing you to take damage from healing spells and effects.</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Miracle of the Grave. Perhaps you are less than you once were, but this time, upon returning to life, you feel alive. Gain +2 to any single attribute.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resting' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Inns & Resting: Where Heroes Mend</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">The Importance of Rest</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                As the caravan rolls into a quiet town at dusk, your party, recognizing your exhaustion, chooses a modest inn for recovery. You're shown to your room, where the innkeeper explains the recovery process, "Roll a d8 nightly for your recovery. But beware, a roll of 1 means complications." That night, under warm blankets, you sleep deeply, desperately needing the rest. Dawn reveals you've rolled a 1, and a second roll for complications results in a 10—a valuable new contact is interested in your group. This contact could be an asset for your journey, offering information or aid.
              </p>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Refreshed and intrigued by this turn of events, you discuss the potential benefits of this new ally with your companions over breakfast. While the inn stay brought unexpected developments, it also presented an opportunity to enhance your quest. The rest, though fraught with minor disruptions, proves essential, teaching you the importance of choosing where to recover wisely, as it influences not only your physical restoration but also the path of your adventures ahead.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Resting</h4>
              <p>When taking a short rest players gain 1 hit point per hour of rest (up to their max Con Mod, and up to a max of 4). When taking a long rest players make a Con Save (DC15), on a success they recover full hp, and a fail their con mod.</p>

              <div className="action-points-cards">
                <div className="action-card">
                  <h5>Short Rest</h5>
                  <p>Gain 1 HP per hour (max Con mod, up to 4)</p>
                </div>

                <div className="action-card">
                  <h5>Long Rest</h5>
                  <p>Make CON save (DC15) - success: full HP, fail: Con mod HP</p>
                </div>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Choosing the Right Inn</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Type of Rest</th>
                      <th>Cost</th>
                      <th>Recovery</th>
                      <th>Risks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Poor Inn</td>
                      <td>5cp/night</td>
                      <td>Roll a d4 nightly</td>
                      <td>If you roll a 1, roll for Complications at Inns (2d6)</td>
                    </tr>
                    <tr>
                      <td>Modest Inn</td>
                      <td>5sp/night</td>
                      <td>Roll a d8 nightly</td>
                      <td>If you roll a 1, roll for Complications at Inns (2d6)</td>
                    </tr>
                    <tr>
                      <td>Comfortable Inn</td>
                      <td>1gp/night</td>
                      <td>More secure, fewer complications</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Lavish Inn</td>
                      <td>5gp/night</td>
                      <td>Gain 1 temporary boon</td>
                      <td>Best chance for full recovery</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Complications at Inns (Roll 2d6)</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>Complication</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>Robbed</td>
                      <td>You lose all of your coins</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Robbed</td>
                      <td>You lose half your coins</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Disease</td>
                      <td>You contract a disease, gain 1 level of exhaustion</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pests</td>
                      <td>Sabotage supplies, roll 1d20 gp to replace them</td>
                    </tr>
                    <tr>
                      <td>6-8</td>
                      <td>Good Rest</td>
                      <td>You slept well, no complications</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Restless Sleep</td>
                      <td>No HP regained</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Valuable Contact</td>
                      <td>You gain a valuable contact</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Clue</td>
                      <td>You gain a clue</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Temporary Boon</td>
                      <td>Gain a temporary boon</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Boons from Lavish Inn Stays (Roll 1d6)</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Roll</th>
                      <th>Boon</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Full Recovery</td>
                      <td>Recover all HP</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Temporary HP</td>
                      <td>Gain temporary HP equal to your level</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Heal Exhaustion</td>
                      <td>Heal 1 extra level of exhaustion</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Increased Mobility</td>
                      <td>Gain 10 ft. extra movement for today</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Inspiration</td>
                      <td>You feel inspired</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Significant Healing</td>
                      <td>Heal 2 extra levels of exhaustion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'souls' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Soulmonger's Offerings</h3>

            <div className="tab-section">
              <h4 className="tab-subtitle">Soul Economy</h4>
              <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Remember, adventurer, souls unspent upon death are lost forever. Choose wisely how you spend this essence, for it holds the key to both your recovery and your potential.
              </p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Services</h4>
              <div className="tab-table-container">
                <table className="tab-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Cost in Souls</th>
                      <th>Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ascend Player Character</td>
                      <td>Player Level x 1 Soul</td>
                      <td>Levels up a character</td>
                    </tr>
                    <tr>
                      <td>Minor Healing</td>
                      <td>Player Level x 150 Withered Essence</td>
                      <td>Alleviate 1 Level of Exhaustion. Players are limited to one type of healing each day.</td>
                    </tr>
                    <tr>
                      <td>Major Healing</td>
                      <td>Player Level x 500 Withered Essence</td>
                      <td>Alleviate 3 Level of Exhaustion. Players are limited to one type of healing each day.</td>
                    </tr>
                    <tr>
                      <td>Monumental Healing</td>
                      <td>Player Level x 900 Withered Essence</td>
                      <td>Alleviate 5 Levels of Exhaustion. Players are limited to one type of healing each day.</td>
                    </tr>
                    <tr>
                      <td>Enchantment</td>
                      <td>Player Level x 1000 Withered Essence (1 Soul)</td>
                      <td>Enhance weapons or armor with magical properties</td>
                    </tr>
                    <tr>
                      <td>Resurrection</td>
                      <td>Player Level x 10,000 Withered Essence (10 Souls)</td>
                      <td>Bring a withered companion back to life. Someone who failed to resurrect.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Note</h4>
              <p>The use of souls is irreversible and their consumption carries weighty consequences in the world of Eiselgard. Each transaction with a Soulwarden is a pact that shapes the fabric of reality, eternally altering the bearer's destiny.</p>
            </div>

            <div className="tab-section">
              <h4 className="tab-subtitle">Soulmongers</h4>
              <p>Soulmongers, cloaked and cold, bring a dread that bites. Oppose them, and angry spirits lash out. But offer 50 Withered Essence, a grim tribute, and they may grant passage, knowledge, or power… at a terrible cost.</p>
            </div>
          </div>
        )}

        {activeTab === 'actionpoints' && (
          <div className="combat-tab-panel">
            <h3 className="tab-title">Action Points Combat System</h3>

            <div className="ap-subtabs-navigation">
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'why' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('why')}
              >
                Why?
              </button>
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'how' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('how')}
              >
                How?
              </button>
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'initiative' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('initiative')}
              >
                Initiative
              </button>
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'playerturn' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('playerturn')}
              >
                Player's Turn
              </button>
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'opponentturn' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('opponentturn')}
              >
                Opponent's Turn
              </button>
              <button
                className={`ap-subtab-button ${activeAPSubtab === 'proficient' ? 'active' : ''}`}
                onClick={() => handleAPSubtabChange('proficient')}
              >
                Proficient Abilities
              </button>
            </div>

            <div className="ap-subtab-content">
              {activeAPSubtab === 'why' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">Why Action Points?</h4>
                    <p>Combat in e5 can feel more like a waiting game to do mediocre stuff rather than the epic and deadly situation we envisioned when we thought up our characters.</p>
                    <p>The Action Points system transforms combat from a rigid turn-based structure into a dynamic, fluid experience where players can make meaningful tactical decisions and perform heroic actions at critical moments.</p>
                  </div>
                </div>
              )}

              {activeAPSubtab === 'how' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">How Action Points Work</h4>
                    <p>Action Points are used for everything: Moving, Attacking and Reacting. They replenish at the end of the combat turn. This means that when both parties have attacked you roll for new action points at advantage. Plan out your attacks and reactions so you can save an ally from being attacked or some other heroic stuff when its your opponents turn. How you spend your AP and when, is up to you (albeit limited to actions(your turn) and reactions(opponents turn)).</p>

                    <div className="action-points-cards">
                      <div className="action-card">
                        <h5>AP Regeneration</h5>
                        <p>When both parties have attacked, you roll for new action points at advantage</p>
                      </div>

                      <div className="action-card">
                        <h5>Strategic Planning</h5>
                        <p>Plan your attacks and reactions to save allies or perform heroic actions during your opponent's turn</p>
                      </div>

                      <div className="action-card">
                        <h5>Flexible Usage</h5>
                        <p>Spend AP however you want, limited to actions (your turn) and reactions (opponents' turn)</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Combat Initiation</h4>
                    <p>When combat is initiated a group roll is made to determine whether the enemies or players go first. This roll also determines your AP for the first round. Before diving into combat, you also roll your hit die, to determine your extra temporary position (which replaces HP), this is added to your current health but diminishes after combat has ended - so go ahead and spend some position on a glorious attack!</p>

                    <div className="action-points-cards">
                      <div className="action-card">
                        <h5>Initiative</h5>
                        <p>A group roll determines whether enemies or players go first</p>
                      </div>

                      <div className="action-card">
                        <h5>Starting AP</h5>
                        <p>Your initiative roll determines your AP for the first round</p>
                      </div>

                      <div className="action-card">
                        <h5>Position</h5>
                        <p>Roll your hit die for extra temporary position (replacing HP), which diminishes after combat</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Fluid Combat</h4>
                    <p>Combat is fluid, which means you can spend whenever you want, whoever is ready goes - no need to widdle your thumbs when you're not ready. Actions are however limited to players turns and reactions to opponents turns. When both parties have ended their turn AP is replenished.</p>

                    <div className="action-points-cards">
                      <div className="action-card">
                        <h5>Ready When You Are</h5>
                        <p>Combat is fluid - spend whenever you want, whoever is ready goes first</p>
                      </div>

                      <div className="action-card">
                        <h5>Turn Structure</h5>
                        <p>Actions are limited to players' turns and reactions to opponents' turns</p>
                      </div>

                      <div className="action-card">
                        <h5>AP Refresh</h5>
                        <p>When both parties have ended their turn, AP is replenished</p>
                      </div>

                      <div className="action-card variant">
                        <h5>Optional Rule</h5>
                        <p>Roll for AP at the start of each turn with advantage to determine available AP</p>
                      </div>
                    </div>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Character Immersion</h4>
                    <p>To enhance character immersion on the battlefield, the skills in which characters are proficient now unlock abilities that can be utilized during combat. Check out the Proficient Abilities tab - even History is useful in combat!</p>
                  </div>
                </div>
              )}

              {activeAPSubtab === 'initiative' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">Initiative: Ready.. Set.. Go!</h4>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      Amidst a swirling snowstorm, you find yourself huddled on a creaky sled, the only warmth coming from the effort of the dogs straining at the harnesses ahead. Darkness looms around you, and the visibility fades into a frigid blur as snowflakes sting your face. Your companions sit tight beside you, their eyes wide as they scan the horizon for any sign of the town you seek.
                    </p>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      Just as you reach into your rucksack for something to eat, a chilling howl cuts through the howling wind. An ominous voice rings out, "Attack!" In an instant, shapes dart through the snow towards you—goblin scavengers mounted on fierce wolves, their eyes burning with malice.
                    </p>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      With no time to flee, you know it's time to stand your ground. "Roll for initiative," you declare, grasping the situation's urgency.
                    </p>
                    <p>
                      In this combat system, the sequence favors the swift. Players always act first, but their initiative roll dictates the action points (AP) they have for their turn. This determines their ability to react and strategize effectively under pressure. If ambushed, players roll with disadvantage for initiative.
                    </p>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Initiative Roll AP Rewards</h4>
                    <p>To determine who goes first a group initiative is rolled, this can either be a chosen player or the sum of the pc's initiative vs. the opponents initiative roll. If any party is surprised by the attack they roll with disadvantage. If the players didn't roll individually to determine the order of combat (players first, opponents second or opponents first, players second), they roll initiative to determine how much AP they get to spend on their first turn. When the first round has ended (i.e. both parties have had their turn) another initiative roll is initiated, to determine how much AP is available that turn.</p>

                    <div className="tab-table-container">
                      <table className="tab-table">
                        <thead>
                          <tr>
                            <th>Initiative Roll (1)</th>
                            <th>Initiative Roll (2-7)</th>
                            <th>Initiative Roll (8-13)</th>
                            <th>Initiative Roll (14-19)</th>
                            <th>Initiative Roll (20-24)</th>
                            <th>Initiative Roll (25+)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0 AP</td>
                            <td>1 AP</td>
                            <td>2 AP</td>
                            <td>3 AP</td>
                            <td>4 AP</td>
                            <td>5 AP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-section">
                    <p className="flavor-text" style={{ fontStyle: 'italic' }}>
                      Having rolled a solid 14, you gain 3 AP, giving you just enough flexibility to react swiftly. Quickly, you scan your options, strategizing your next move in this sudden skirmish. Each decision now will be crucial as you and your party attempt to fend off the goblin raiders amidst the storm's chaos.
                    </p>
                  </div>
                </div>
              )}

              {activeAPSubtab === 'playerturn' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">Player's Turn</h4>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      With your instincts sharp, you maneuver swiftly behind a large rock, seeking tactical cover. From this vantage point, you grip your sword tightly and prepare to strike (Move action, 1 AP - 3AP → 2AP remaining). The weight of the decision hangs in the air as you eye the nearest goblin, calculating the best moment to attack. As the goblin nears, you unleash a powerful slash aimed directly at him, your blade slicing through the cold air with lethal intent (Melee Attack, 2 AP - 2 AP → 0 AP remaining). The metal clangs harshly against the goblin's crude armor, a sound that cuts through the howling wind.
                    </p>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Actions</h4>
                    <p>The following table shows some of the actions that you are able to use on your turn only.</p>
                    <p><em>Abbreviations: a = action, r = reaction, p = passive</em></p>

                    <div className="tab-table-container">
                      <table className="tab-table">
                        <thead>
                          <tr>
                            <th>Action</th>
                            <th>Type</th>
                            <th>Description & Roll</th>
                            <th>Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Object</td>
                            <td>A</td>
                            <td>Your agility and quick thinking shine in a variety of actions: drinking a potion, picking a lock, disarming traps, passing items, or tossing objects with precision. Skill Checks might be required.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Move</td>
                            <td>A</td>
                            <td>Swiftly navigate the battlefield, moving up to your speed in spaces.</td>
                            <td>1 AP (1 AP for additional 15 ft.)</td>
                          </tr>
                          <tr>
                            <td>Disengage</td>
                            <td>A</td>
                            <td>Carefully retreat from foes, preventing free strikes. Enemies gain disadvantage on attack of opportunity. You may move up to 10 ft.</td>
                            <td>1 AP for single, 2 AP for multiple.</td>
                          </tr>
                          <tr>
                            <td>Hide</td>
                            <td>A</td>
                            <td>Vanish from sight by blending into shadows or taking cover. Stealth Roll vs. opponents' Passive Awareness. Requires cover. (You can't hide from any enemy that plainly can see you - the GM will determine these factors.)</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Shove</td>
                            <td>A</td>
                            <td>Attempt to force an opponent back or off-balance with a strong push. Athletics Check vs. STR save.</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Tackle</td>
                            <td>A</td>
                            <td>Charge with your shoulder to bring down an opponent, showcasing physical prowess and tactical acumen. Athletics Check vs. STR save. (Requires at least 10 ft. of space to gain momentum.)</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Attack (Melee or Ranged)</td>
                            <td>A</td>
                            <td>Strike with your weapon against a target. Roll your weapon die (e.g., 1d8 for a longsword) - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit, any other result hits and deals damage equal to the roll plus your attribute modifier. Target's armor reduces damage based on their Armor Score.</td>
                            <td>2 AP (Additional attacks cost 2 AP each)</td>
                          </tr>
                          <tr>
                            <td>Cast a Minor Spell</td>
                            <td>A</td>
                            <td>Cast a simple spell from your repertoire. Roll the spell's die - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit with enhanced effects. Minor spells typically cost only class resources (e.g., mana, energy) in addition to AP.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Cast a Major Spell</td>
                            <td>A</td>
                            <td>Cast a powerful spell from your talent tree. Roll the spell's die - a 1 is a miss (roll again to check for critical miss), maximum value is a critical hit with enhanced effects. Major spells typically cost class resources plus additional costs specified in the spell description.</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Elemental Shift</td>
                            <td>A</td>
                            <td>Alter the elemental nature of your spell to exploit vulnerabilities. Requires a spell cast. (Must be applied everytime a spell is cast.)</td>
                            <td>Player Level x 2 Points of Position</td>
                          </tr>
                          <tr>
                            <td>Channel Spell</td>
                            <td>A</td>
                            <td>Enhance a spell's effectiveness. Increase a spell's damage dice by one step (e.g. d6 to d8(d12 is the limit) (For multiple dice spells, choose one die to increase.) or Increase the spell's save DC by 2.</td>
                            <td>Player Level x 2 Points of Position</td>
                          </tr>
                          <tr>
                            <td>Minor Action</td>
                            <td>A</td>
                            <td>Small actions matter: pick up an item, open a door quietly, or stow/draw your weapon.</td>
                            <td>0 AP for first, 1 AP for additional</td>
                          </tr>
                          <tr>
                            <td>Gain Advantage</td>
                            <td>A</td>
                            <td>Focus your senses to seize opportunity.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Power Attack</td>
                            <td>A</td>
                            <td>Focus your might for a devastating blow. Gain +1 to your attack roll, for each position point spent (up to a maximum of 5 for each swing). Requires an attack roll.</td>
                            <td>1-5 Point(s) of Position</td>
                          </tr>
                          <tr>
                            <td>Sweep Attack</td>
                            <td>A</td>
                            <td>Swiftly target an additional foe within 1 Space of another. Requires an attack roll.</td>
                            <td>Player Level x 2 Points of Position</td>
                          </tr>
                          <tr>
                            <td>Hamstring</td>
                            <td>A</td>
                            <td>Slow your enemy's movement, halving their movement speed for 1d4 rounds. Requires an attack roll.</td>
                            <td>Player Level x 1 Point of Position</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeAPSubtab === 'opponentturn' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">Opponent's Turn</h4>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      With your attack completes, you quickly brace for the goblins' response (At the end of your turn, your AP refreshes). As the goblin marauder charges at your ally, you instinctively intervene, stepping in to absorb the attack (Interpose, 1 AP). You shove your companion to safety and raise your shield, ready to block the incoming strike (Raise Shield, 1 AP). The shield absorbs the blow, mitigating the damage and sparing both of you from a more severe hit.
                    </p>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      Seizing the moment, you bash your shield in retaliation, exploiting the goblin's brief disarray (Shield Bash, 2 AP) knocking the goblin unconscious.
                    </p>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      (Total AP spent → 4, meaning the player won't be able to perform any actions on his own turn. Heroic action was however performed.)
                    </p>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Reactions</h4>
                    <p>The following table shows some of the reactions that you are able to use on your opponent's turn only.</p>

                    <div className="tab-table-container">
                      <table className="tab-table">
                        <thead>
                          <tr>
                            <th>Action</th>
                            <th>Type</th>
                            <th>Description & Roll</th>
                            <th>Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Help</td>
                            <td>R</td>
                            <td>Offer advice, gesture, or hint to grant ally 1d8 + to their next action. Applies if reasoning is accepted by the GM.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Dodge</td>
                            <td>R</td>
                            <td>Evade an attack by rolling 5 ft. into a defensive position. Must be used when the GM announces an attack against you. Increases the attacker's miss chance by 25% (effectively making rolls of 1-3 on a d8 miss, for example). You also gain position points equal to your level.</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Opportunity Attack</td>
                            <td>R</td>
                            <td>React to enemy movement out of melee range with a quick strike. Roll your weapon die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Interpose</td>
                            <td>R</td>
                            <td>When an ally within 10 ft. is attacked, push them to safety and take the hit yourself. Make a STR roll (DC 10); if failed, both you and your ally fall prone. Your armor reduces damage based on your Armor Score.</td>
                            <td>1 AP (+1 AP for each 10 ft. added)</td>
                          </tr>
                          <tr>
                            <td>Parry</td>
                            <td>R</td>
                            <td>Turn aside melee and ranged attacks with your weapon or shield. When attacked, roll your weapon die against the attacker's weapon die. If your roll is higher, you negate the attack completely. Even smaller weapons can parry larger attacks through exploding dice - if you roll the maximum value on your die, roll again and add the result (e.g., a rogue with a 1d4 dagger can still parry an ogre's d20 attack if the parry roll crits and explodes). If you roll the maximum value, you can immediately counter-attack (see Riposte).</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Parry → Riposte</td>
                            <td>R</td>
                            <td>After a successful parry, immediately counter-attack. Roll your weapon die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value. This attack ignores the target's armor damage reduction for this attack only.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Raise Shield</td>
                            <td>R</td>
                            <td>Quickly raise your shield to block an incoming attack. Roll a shield die (d8 for most shields) to determine how much damage is absorbed before your armor damage reduction is applied. The shield's durability decreases by 1.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Raise Shield → Shield Bash</td>
                            <td>R</td>
                            <td>After blocking with your shield, slam it into your attacker. Roll your shield die against the target's CON save. If your roll is higher, the target is stunned until the end of their next turn (stunned characters lose their next turn).</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Spell Reaction</td>
                            <td>R</td>
                            <td>Cast a reactive spell in response to an enemy action. Roll the spell's die as normal, with a miss on 1 (roll again to check for critical miss) and crit on maximum value. Reactive spells often have special effects described in their spell descriptions.</td>
                            <td>2 AP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-section">
                    <p className="flavor-text" style={{ fontStyle: 'italic' }}>
                      Stepping in to shield your ally and knock out the goblin required a significant expenditure of action points, leaving you with just one AP remaining for your turn. Despite the cost, this heroic intervention was crucial, safeguarding your companion and maintaining your strategic advantage amid the snowstorm's fury.
                    </p>
                  </div>
                </div>
              )}

              {activeAPSubtab === 'proficient' && (
                <div className="ap-subtab-panel">
                  <div className="tab-section">
                    <h4 className="tab-subtitle">Proficient Abilities</h4>
                    <p className="flavor-text" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                      Noticing a precarious patch of snow overhead, the cleric of your party, who is proficient in Nature, swiftly assesses the situation. Utilizing their expertise (Nature: Terrain Insight, 2 AP), they dislodge the snow directly onto the advancing goblins. The sudden cascade surprises the raiders, significantly disrupting their approach and giving your group a crucial moment to regroup.
                    </p>
                    <p>Only one proficient ability can be used per turn.</p>
                  </div>

                  <div className="tab-section">
                    <h4 className="tab-subtitle">Skill Proficiency Abilities</h4>
                    <div className="tab-table-container">
                      <table className="tab-table">
                        <thead>
                          <tr>
                            <th>Skill</th>
                            <th>Unlocks</th>
                            <th>As</th>
                            <th>Note</th>
                            <th>Cost</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Acrobatics</td>
                            <td>Charged Squat</td>
                            <td>A</td>
                            <td>Jump up to 10 ft. horizontally or 10 ft. vertically. On a failure, you land prone in the spot where you attempted the leap. Acrobatics Roll DC 12 (You may add 5 ft. horizontally or vertically by increasing the DC by 3)</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Animal Handling</td>
                            <td>Beast Command</td>
                            <td>A</td>
                            <td>A quick and concise call to action catches the attention and motivation of your pet, awaiting your command. Animal Handling Roll DC 10 - Pet and PC Intelligence and Wisdom Modifier. (For instance, a wolf pet's Intelligence Modifier is -4, it's Wisdom Modifier is +1, giving you a DC of 13. Adding your Intelligence and Wisdom modifier could look something like this 13-(2+1))</td>
                            <td>?</td>
                          </tr>
                          <tr>
                            <td>Arcana</td>
                            <td>Arcane Counter</td>
                            <td>A</td>
                            <td>Channeling the Arcane you prepare to counteract the next hostile spell cast on the following turn within 30 ft. Arcana Roll DC 12 + Spell Level Cast</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Athletics</td>
                            <td>Grapple</td>
                            <td>A</td>
                            <td>Using your brute force you restrain an opponent, making it hard for them to move and perform certain actions until your next turn. Athletics Roll vs. Target's Strength or Dexterity Roll. Restrained characters have 0 speed, gain disadvantage on rolls and attack rolls made against it have advantage.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Deception</td>
                            <td>Misdirect</td>
                            <td>A</td>
                            <td>With a clever ruse, a creature within 10 ft. of you gains the condition surprised. Deception Roll DC 10 + Opponents Intelligence Modifier. Surprised characters are unable to react and gain disadvantage on their attack rolls.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>History</td>
                            <td>Lore Recall</td>
                            <td>A</td>
                            <td>Tapping into your knowledge, you recall the special attacks or abillities of a creature within 30 ft. History Roll DC 12 + Opponents CR (Rounded Up)</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Insight</td>
                            <td>Flow State</td>
                            <td>A</td>
                            <td>You enter a calm but clear state of mind, reducing damage taken by 2 until the start of your next turn. Insight Roll DC 12</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Intimidation</td>
                            <td>Taunt</td>
                            <td>R</td>
                            <td>With hostile intent you provoke nearby opponents within 15 ft., forcing them to attack you. (the effect lasts until the opponent succeeds their wisdom check, which is based on your Intimidation Roll) Intimidation Roll vs. Opponents Wisdom Save.</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Investigation</td>
                            <td>Deduct</td>
                            <td>A</td>
                            <td>Making use of your deductive skills you analyze and discern an opponents weaknesses within 15. ft. Investigation Roll DC 12 + Opponents CR (Rounded Up) (e.g. a Kobold has a CR of 1/8, meaning the Investigation Roll DC to beat is 12 + 1/8 = 13)</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Medicine</td>
                            <td>First Aid</td>
                            <td>A</td>
                            <td>Using your medical expertise, you can treat a nearby ally (within 5 ft.) suffering from a minor injury as specified by the system shock table. Medicine Roll DC10 (System shock occurs after taking more than half their max health in damage and failing a DC 10 Constitution save.) Additionally, a successful Medicine check can restore an ally at death's door to 1 HP, removing them from the death saving state. Medicine check DC10 + Level of Exhaustion. As a third use, Medicine can be used to apply bandages to a nearby ally of choice once pr. character. Medicine check DC10. Heals 1d4 + Medicine Modifier</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Nature</td>
                            <td>Terrain Insight</td>
                            <td>A</td>
                            <td>With an eye for the wild, you spot an advantage in the terrain around you (10 ft.). Nature Roll DC12 (e.g. Loose rubble in a dungeon that could be set up for a trap, visible tree branches or a pit easily covered with leaves, or the occasional helpful plant).</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Perception</td>
                            <td>Heightened Senses</td>
                            <td>P</td>
                            <td>Your senses are on high alert. Add 2 to your initiative rolls.</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Performance</td>
                            <td>Mesmer</td>
                            <td>A</td>
                            <td>Within 15 ft., your captivating tunes cause anyone affected to lose their next turn. Performance Roll vs. Wisdom Saving Throw. All creatures and characters within 15 ft. must make a Wisdom Saving Throw against your Performance roll. On a fail, they lose their next turn. (e.g. "Bart" the Bard casts Mesmer within 15 ft., affecting two goblins and his party's druid, "Bloom." Bart rolls a 9 (7 + 2 Performance modifier). The first goblin rolls an 8 (9 - 1 Wisdom modifier) and loses its next turn. The second goblin rolls 11 (12 - 1) and is unaffected. Bloom rolls 7 (4 + 3 Wisdom modifier) and loses his turn.) (The following creatures are immune: Creatures without eyes or sight, creatures with multiple heads or eyes, undead, celestials, fiends, fey, dragons and constructs.) (This spell is limited to one use per combat.)</td>
                            <td>3 AP</td>
                          </tr>
                          <tr>
                            <td>Persuasion</td>
                            <td>Persuade</td>
                            <td>A</td>
                            <td>Amidst the heat of combat you attempt to convince an opponent to reconsider their current action - on a successful persuasion check you confuse an opponent. Persuasion Roll vs Wisdom Saving Throw. The opponent must make a Wisdom Saving Throw against your Persuasion Roll. On a fail, they become confused. (the effect lasts until the creature or character succesfully rolls above the persuasion roll; limited to one roll per turn.) Confused creatures or characters must make a d10 roll to determine their action: (1) Runs in a random direction; roll a d8 (2-4) Does nothing; no movement or actions (5-6) Cast a random spell at random target; determined by dice (7-8) Attack a nearby random creature; determined by dice (9-10) Acts and moves normally.</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Religion</td>
                            <td>Divine Favor</td>
                            <td>A</td>
                            <td>Preaching teachings of your deity you inspire nearby allies and intellectual creatures within 15 ft. Religion Roll vs Wisdom or Intellect Saving Throw. Roll a d4 to Determine the Boon: Shield of Conviction - Temporary hitpoints until combat has ended, based on the casters religion modifier. Guardian's Favor - Take reduced damage for the next turn, based on the casters religion modifier. Zealot's Blessing - Temporary boost attack rolls for the next attack, based on the casters religion modifier. Wisdom of the Ancients - Advantage on the next saving throw. All creatures and characters within 15 ft. must make a Wisdom or Intellect Saving Throw (If they roll below your Religion Roll they are granted the boon). (Regardless how you roll you gain the boon - however, the creatures and characters around you need to roll below your Religion Roll to gain the same boon).</td>
                            <td>2 AP</td>
                          </tr>
                          <tr>
                            <td>Sleight of Hand</td>
                            <td>Disarm</td>
                            <td>R</td>
                            <td>When attacked by an opponent (within 5 ft.), you nimbly disarm the opponent, and if able, you equip the weapon used. (Can't be used wielding 2 weapons, as it requires a free hand.) Sleight of Hand Roll vs. Opponents Strength Save</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Stealth</td>
                            <td>Stealthy Passage</td>
                            <td>A</td>
                            <td>Without drawing attention to yourself you pass through an opponents space without provoking opportunity of attack. (Succeeding allows you to move 15 ft.) Stealth Roll DC10</td>
                            <td>1 AP</td>
                          </tr>
                          <tr>
                            <td>Survival</td>
                            <td>Trapping</td>
                            <td>A</td>
                            <td>Utilizing your survival skills you set up a trap on a 5ft. square within 5 ft. of you. Survival Check (DC15 - Intelligence Modifier). Traps: Pitfall Trap [4 AP]: A hidden pit that causes falling damage ((1d6 per 10 ft.) each 4 AP, or entire turn, spent digging adds 10 ft.) and restrains the target until they climb out. Snare Trap [3 AP]: Catches and suspends a creature, leaving it hanging upside down and granting advantage to attacks against it until freed. Tripwire Trap [2 AP]: Causes creatures to fall prone, potentially dropping what they hold.</td>
                            <td>2-4 AP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="tab-section">
                    <p className="flavor-text" style={{ fontStyle: 'italic' }}>
                      This quick-thinking maneuver by the cleric created the perfect diversion, allowing your party to seize the moment. As the goblins struggle to regain their footing in the sudden blanket of snow, your group swiftly retreats, narrowly escaping the ambush and disappearing into the swirling storm, safe for the moment.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CombatTabs;
