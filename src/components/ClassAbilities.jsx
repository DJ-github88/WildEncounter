import React from 'react';
import { useParams } from 'react-router-dom';
import chronarchAbilities from '../data/class-abilities/chronarch-abilities';
import minstrelAbilities from '../data/class-abilities/minstrel-abilities';
import pyrofiendAbilities from '../data/class-abilities/pyrofiend-abilities';
import chaosWeaverAbilities from '../data/class-abilities/chaos-weaver-abilities';
import fateWeaverAbilities from '../data/class-abilities/fate-weaver-abilities';
import gamblerAbilities from '../data/class-abilities/gambler-abilities';
import martyrAbilities from '../data/class-abilities/martyr-abilities';
import falseProphetAbilities from '../data/class-abilities/false-prophet-abilities';
import exorcistAbilities from '../data/class-abilities/exorcist-abilities';
import deathcallerAbilities from '../data/class-abilities/deathcaller-abilities';
import plaguebringerAbilities from '../data/class-abilities/plaguebringer-abilities';
import lichborneAbilities from '../data/class-abilities/lichborne-abilities';
import inscriptorAbilities from '../data/class-abilities/inscriptor-abilities';
import spellguardAbilities from '../data/class-abilities/spellguard-abilities';
import arcanoneerAbilities from '../data/class-abilities/arcanoneer-abilities';
import witchDoctorAbilities from '../data/class-abilities/witch-doctor-abilities';
import formbenderAbilities from '../data/class-abilities/formbender-abilities';
import primalistAbilities from '../data/class-abilities/primalist-abilities';
import berserkerAbilities from '../data/class-abilities/berserker-abilities';
import dreadnaughtAbilities from '../data/class-abilities/dreadnaught-abilities';
import titanAbilities from '../data/class-abilities/titan-abilities';
import lunarchAbilities from '../data/class-abilities/lunarch-abilities';
import huntressAbilities from '../data/class-abilities/huntress-abilities';
import wardenAbilities from '../data/class-abilities/warden-abilities';
import toxicologistAbilities from '../data/class-abilities/toxicologist-abilities';
import covenbaneAbilities from '../data/class-abilities/covenbane-abilities';
import bladedancerAbilities from '../data/class-abilities/bladedancer-abilities';
import SpellIcon from './SpellIcon';
import ClassBackground from './ClassBackground';
import './ClassAbilities.css';

const ClassAbilities = () => {
  const { classId } = useParams();

  // Currently only supporting Chronarch, Minstrel, Pyrofiend, Chaos Weaver, Fate Weaver, Gambler, Martyr, False Prophet, Exorcist, Deathcaller, Plaguebringer, Lichborne, Inscriptor, Spellguard, Arcanoneer, Witch Doctor, Formbender, Primalist, Berserker, Dreadnaught, Titan, Lunarch, Huntress, Warden, Toxicologist, Covenbane, and Bladedancer abilities
  if (classId !== 'chronarch' && classId !== 'minstrel' && classId !== 'pyrofiend' && classId !== 'chaos-weaver' && classId !== 'fate-weaver' && classId !== 'gambler' && classId !== 'martyr' && classId !== 'false-prophet' && classId !== 'exorcist' && classId !== 'deathcaller' && classId !== 'plaguebringer' && classId !== 'lichborne' && classId !== 'inscriptor' && classId !== 'spellguard' && classId !== 'arcanoneer' && classId !== 'witch-doctor' && classId !== 'formbender' && classId !== 'primalist' && classId !== 'berserker' && classId !== 'dreadnaught' && classId !== 'titan' && classId !== 'lunarch' && classId !== 'huntress' && classId !== 'warden' && classId !== 'toxicologist' && classId !== 'covenbane' && classId !== 'bladedancer') {
    return (
      <div className="class-abilities">
        <h2>Class Abilities</h2>
        <p>Abilities for this class are coming soon!</p>
      </div>
    );
  }

  let abilities;
  if (classId === 'chronarch') {
    abilities = chronarchAbilities;
  } else if (classId === 'minstrel') {
    abilities = minstrelAbilities;
  } else if (classId === 'pyrofiend') {
    abilities = pyrofiendAbilities;
  } else if (classId === 'chaos-weaver') {
    abilities = chaosWeaverAbilities;
  } else if (classId === 'fate-weaver') {
    abilities = fateWeaverAbilities;
  } else if (classId === 'gambler') {
    abilities = gamblerAbilities;
  } else if (classId === 'martyr') {
    abilities = martyrAbilities;
  } else if (classId === 'false-prophet') {
    abilities = falseProphetAbilities;
  } else if (classId === 'exorcist') {
    abilities = exorcistAbilities;
  } else if (classId === 'deathcaller') {
    abilities = deathcallerAbilities;
  } else if (classId === 'plaguebringer') {
    abilities = plaguebringerAbilities;
  } else if (classId === 'lichborne') {
    abilities = lichborneAbilities;
  } else if (classId === 'inscriptor') {
    abilities = inscriptorAbilities;
  } else if (classId === 'spellguard') {
    abilities = spellguardAbilities;
  } else if (classId === 'arcanoneer') {
    abilities = arcanoneerAbilities;
  } else if (classId === 'witch-doctor') {
    abilities = witchDoctorAbilities;
  } else if (classId === 'formbender') {
    abilities = formbenderAbilities;
  } else if (classId === 'primalist') {
    abilities = primalistAbilities;
  } else if (classId === 'berserker') {
    abilities = berserkerAbilities;
  } else if (classId === 'dreadnaught') {
    abilities = dreadnaughtAbilities;
  } else if (classId === 'titan') {
    abilities = titanAbilities;
  } else if (classId === 'lunarch') {
    abilities = lunarchAbilities;
  } else if (classId === 'huntress') {
    abilities = huntressAbilities;
  } else if (classId === 'warden') {
    abilities = wardenAbilities;
  } else if (classId === 'toxicologist') {
    abilities = toxicologistAbilities;
  } else if (classId === 'covenbane') {
    abilities = covenbaneAbilities;
  } else if (classId === 'bladedancer') {
    abilities = bladedancerAbilities;
  }

  // For Bladedancer
  if (classId === 'bladedancer') {
    return (
      <div className={`class-abilities bladedancer`}>
        <ClassBackground classId={classId} />
        <h2>Bladedancer Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Core Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>

          <h4>{abilities.resourceSystem.stances.name}</h4>
          <p>{abilities.resourceSystem.stances.description}</p>
          <ul>
            {abilities.resourceSystem.stances.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.edge && <span>Edge: {ability.cost.edge}</span>}
                {ability.cost.flourishTokens && <span>Flourish Tokens: {ability.cost.flourishTokens}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.edge && <span>Edge: {ability.cost.edge}</span>}
                {ability.cost.flourishTokens && <span>Flourish Tokens: {ability.cost.flourishTokens}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Ultimate Abilities */}
        <div className="ultimate-abilities">
          <h3>Ultimate Finishers</h3>
          {abilities.ultimateAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.edge && <span>Edge: {ability.cost.edge}</span>}
                {ability.cost.flourishTokens && <span>Flourish Tokens: {ability.cost.flourishTokens}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-tree-section">
          <h3>Talent Tree Abilities</h3>

          <h4>Momentum (Movement & Edge generation)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.momentum.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Precision (Crits & single-target burst)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.precision.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Deflect (Evasion & parries)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.deflect.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Covenbane
  if (classId === 'covenbane') {
    return (
      <div className={`class-abilities covenbane`}>
        <ClassBackground classId={classId} />
        <h2>Covenbane Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Core Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.sealTokens && <span>Seal Tokens: {ability.cost.sealTokens}</span>}
                {ability.cost.wardSlots && <span>Ward Slots: {ability.cost.wardSlots}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.sealTokens && <span>Seal Tokens: {ability.cost.sealTokens}</span>}
                {ability.cost.wardSlots && <span>Ward Slots: {ability.cost.wardSlots}</span>}
                {ability.cost.dispelGauge && <span>Dispel Gauge: {ability.cost.dispelGauge}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-tree-section">
          <h3>Talent Tree Abilities</h3>

          <h4>Hexslayer (Aggressive Anti-Caster)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.hexslayer.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Runic Warden (Zones & Party Defense)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.runicWarden.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Inquisitor (Suppression & Manipulation)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.inquisitor.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Toxicologist
  if (classId === 'toxicologist') {
    return (
      <div className={`class-abilities toxicologist`}>
        <ClassBackground classId={classId} />
        <h2>Toxicologist Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Core Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.vials && <span>Vials: {ability.cost.vials}</span>}
                {ability.cost.reagents && <span>Reagents: {ability.cost.reagents}</span>}
                {ability.cost.contraptions && <span>Contraptions: {ability.cost.contraptions}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.vials && <span>Vials: {ability.cost.vials}</span>}
                {ability.cost.reagents && <span>Reagents: {ability.cost.reagents}</span>}
                {ability.cost.contraptions && <span>Contraptions: {ability.cost.contraptions}</span>}
                {ability.cost.hpSacrifice && <span>HP Sacrifice: {ability.cost.hpSacrifice}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-tree-section">
          <h3>Talent Tree Abilities</h3>

          <h4>Chemistry (Better Brews)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.chemistry.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Contraptioneer (Traps & Gadgets)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.contraptioneer.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Venom Arts (Weapon Poisoning & Burst Finishers)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.venomArts.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Warden
  if (classId === 'warden') {
    return (
      <div className={`class-abilities warden`}>
        <ClassBackground classId={classId} />
        <h2>Warden Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Core Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.bulwarkMeter && <span>BM: {ability.cost.bulwarkMeter}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
                {ability.cost.passive && <span>Passive</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.bulwarkMeter && <span>BM: {ability.cost.bulwarkMeter}</span>}
                {ability.cost.wardTokens && <span>Ward Tokens: {ability.cost.wardTokens}</span>}
                {ability.cost.passive && <span>Passive</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-tree-section">
          <h3>Talent Tree Abilities</h3>

          <h4>Wall-Smith (Barrier Optimization)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.wallSmith.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Guardian's Vow (Protection & Reaction)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.guardiansVow.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Punishing Rampart (Offense via Wards)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.punishingRampart.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Huntress
  if (classId === 'huntress') {
    return (
      <div className={`class-abilities huntress`}>
        <ClassBackground classId={classId} />
        <h2>Huntress Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Core Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>

          <h4>Stances</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.stances.name}</h5>
            <p>{abilities.resourceSystem.stances.description}</p>
            <ul>
              {abilities.resourceSystem.stances.mechanics.map((mechanic, index) => (
                <li key={index}>{mechanic}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.precisionStacks && <span>PS: {ability.cost.precisionStacks}</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.precisionStacks && <span>PS: {ability.cost.precisionStacks}</span>}
                {ability.cost.focus && <span>Focus: {ability.cost.focus}</span>}
                {ability.cost.passive && <span>Passive</span>}
                {ability.cost.reaction && <span>Reaction</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-tree-section">
          <h3>Talent Tree Abilities</h3>

          <h4>Falcon's Eye (Precision Sniper)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.falconsEye.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Lynx Prowl (Stealth & Mobility)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.lynxProwl.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <h4>Viper Den (Traps & Poison)</h4>
          <div className="talent-abilities">
            {abilities.talentAbilities.viperDen.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p>{ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Lunarch
  if (classId === 'lunarch') {
    return (
      <div className={`class-abilities lunarch`}>
        <ClassBackground classId={classId} />
        <h2>Lunarch Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Lunar Phases</h4>
          <div className="thresholds">
            {abilities.resourceSystem.phases.map((phase, index) => (
              <div key={index} className="threshold">
                <h5>{phase.name}</h5>
                <p>{phase.description}</p>
                <p><strong>Passive Effect:</strong> {phase.passiveEffect}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Lunar Charge: {ability.cost.lunarCharge}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Phase Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Lunar Charge: {ability.cost.lunarCharge}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Phase Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Ultimate Abilities */}
        <div className="advanced-abilities">
          <h3>Ultimate Abilities</h3>
          {abilities.ultimateAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Lunar Charge: {ability.cost.lunarCharge}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Phase Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Chronarch
  if (classId === 'chronarch') {
    return (
      <div className={`class-abilities chronarch`}>
        <ClassBackground classId={classId} />
        <h2>Chronarch Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Thresholds</h4>
          <div className="thresholds">
            {abilities.resourceSystem.thresholds.map((threshold, index) => (
              <div key={index} className="threshold">
                <h5>{threshold.name} ({threshold.value} Continuum)</h5>
                <p>{threshold.description}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Spells */}
        <div className="base-spells">
          <h3>Base Spells</h3>
          {abilities.baseSpells.map((spell, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Continuum: {spell.cost.continuum}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>
              <p><strong>Scaling:</strong> {spell.scaling}</p>
            </div>
          ))}
        </div>

        {/* Threshold Abilities */}
        <div className="threshold-abilities">
          <h3>Threshold Abilities</h3>
          {abilities.thresholdAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <p><strong>Threshold:</strong> {ability.threshold}</p>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Continuum: {ability.cost.continuum}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Continuum: {ability.cost.continuum}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Minstrel
  if (classId === 'minstrel') {
    return (
      <div className={`class-abilities minstrel`}>
        <ClassBackground classId={classId} />
        <h2>Minstrel Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Musical Notes</h4>
          <div className="thresholds">
            {abilities.resourceSystem.notes.map((note, index) => (
              <div key={index} className="threshold">
                <h5>{note.name}</h5>
                <p>{note.description}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Spells */}
        <div className="base-spells">
          <h3>Base Spells</h3>
          {abilities.baseSpells.map((spell, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Note: {spell.cost.note}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>
              <p><strong>Scaling:</strong> {spell.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Spells */}
        <div className="advanced-abilities">
          <h3>Advanced Spells and Finishers</h3>
          {abilities.advancedSpells.map((spell, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="ability-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Note: {spell.cost.note}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Plaguebringer
  if (classId === 'plaguebringer') {
    return (
      <div className={`class-abilities plaguebringer`}>
        <ClassBackground classId={classId} />
        <h2>Plaguebringer Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Plague Intensity</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.plagueStacks && <span>Plague Stacks: {ability.cost.plagueStacks}</span>}
                {ability.cost.healthCost && <span>HP Cost: {ability.cost.healthCost}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities (Ultimates)</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.plagueStacks && <span>Plague Stacks: {ability.cost.plagueStacks}</span>}
                {ability.cost.healthCost && <span>HP Cost: {ability.cost.healthCost}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Deathcaller
  if (classId === 'deathcaller') {
    return (
      <div className={`class-abilities deathcaller`}>
        <ClassBackground classId={classId} />
        <h2>Deathcaller Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Soul Charges: {ability.cost.soulCharges}</span>
                {ability.cost.healthCost && <span>HP Cost: {ability.cost.healthCost}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities (Ultimates)</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Soul Charges: {ability.cost.soulCharges}</span>
                {ability.cost.healthCost && <span>HP Cost: {ability.cost.healthCost}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Exorcist
  if (classId === 'exorcist') {
    return (
      <div className={`class-abilities exorcist`}>
        <ClassBackground classId={classId} />
        <h2>Exorcist Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Spirit Charges: {ability.cost.spiritCharges}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Spirit Charges: {ability.cost.spiritCharges}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For False Prophet
  if (classId === 'false-prophet') {
    return (
      <div className={`class-abilities false-prophet`}>
        <ClassBackground classId={classId} />
        <h2>False Prophet Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Lies System</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.liesSystem.name}</h5>
            <p>{abilities.resourceSystem.liesSystem.description}</p>
            <ul>
              {abilities.resourceSystem.liesSystem.mechanics.map((mechanic, index) => (
                <li key={index}>{mechanic}</li>
              ))}
            </ul>
          </div>

          <h4>Blood Sacrifice</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.bloodSacrifice.name}</h5>
            <p>{abilities.resourceSystem.bloodSacrifice.description}</p>
            <ul>
              {abilities.resourceSystem.bloodSacrifice.mechanics.map((mechanic, index) => (
                <li key={index}>{mechanic}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Sacrifice: {ability.cost.hpSacrifice}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Sacrifice: {ability.cost.hpSacrifice}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Martyr
  if (classId === 'martyr') {
    return (
      <div className={`class-abilities martyr`}>
        <ClassBackground classId={classId} />
        <h2>Martyr Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Blood Thresholds</h4>
          <div className="thresholds">
            {abilities.resourceSystem.thresholds.map((threshold, index) => (
              <div key={index} className="threshold">
                <h5>{threshold.name}</h5>
                <p>{threshold.description}</p>
                <p><strong>Effects:</strong> {threshold.effects}</p>
              </div>
            ))}
          </div>

          <h4>Pain Charges</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.painCharges.name}</h5>
            <p>{abilities.resourceSystem.painCharges.description}</p>
            <ul>
              {abilities.resourceSystem.painCharges.mechanics.map((mechanic, index) => (
                <li key={index}>{mechanic}</li>
              ))}
            </ul>
          </div>

          <h4>Blood Vows</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.bloodVows.name}</h5>
            <p>{abilities.resourceSystem.bloodVows.description}</p>
            <ul>
              {abilities.resourceSystem.bloodVows.mechanics.map((mechanic, index) => (
                <li key={index}>{mechanic}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Sacrifice: {ability.cost.hpSacrifice}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Sacrifice: {ability.cost.hpSacrifice}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.requirements && (
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              )}

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Gambler
  if (classId === 'gambler') {
    return (
      <div className={`class-abilities gambler`}>
        <ClassBackground classId={classId} />
        <h2>Gambler Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Chance Tools</h4>
          <div className="thresholds">
            {abilities.resourceSystem.chanceTools.map((tool, index) => (
              <div key={index} className="threshold">
                <h5>{tool.name}</h5>
                <p>{tool.description}</p>
                <ul>
                  {tool.outcomes.map((outcome, idx) => (
                    <li key={idx}><strong>{outcome.result}:</strong> {outcome.effect}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h4>Resources</h4>
          <div className="thresholds">
            {abilities.resourceSystem.resources.map((resource, index) => (
              <div key={index} className="threshold">
                <h5>{resource.name}</h5>
                <p>{resource.description}</p>
                <p><strong>Usage:</strong> {resource.usage}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="outcomes">
                <h5>Outcomes</h5>
                <ul>
                  {ability.outcomes.map((outcome, idx) => (
                    <li key={idx}><strong>{outcome.result}:</strong> {outcome.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities & Ultimates</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="outcomes">
                <h5>Outcomes</h5>
                <ul>
                  {ability.outcomes.map((outcome, idx) => (
                    <li key={idx}><strong>{outcome.result}:</strong> {outcome.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.requirements && (
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              )}

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Fate Weaver
  if (classId === 'fate-weaver') {
    return (
      <div className={`class-abilities fate-weaver`}>
        <ClassBackground classId={classId} />
        <h2>Fate Weaver Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Card Suits</h4>
          <div className="thresholds">
            {abilities.resourceSystem.suits.map((suit, index) => (
              <div key={index} className="threshold">
                <h5>{suit.name}</h5>
                <p>{suit.description}</p>
                <p><strong>Effects:</strong> {suit.effects}</p>
              </div>
            ))}
          </div>

          <h4>Card Values</h4>
          <div className="thresholds">
            {abilities.resourceSystem.values.map((value, index) => (
              <div key={index} className="threshold">
                <h5>{value.name}</h5>
                <p><strong>Effects:</strong> {value.effects}</p>
              </div>
            ))}
          </div>

          <h4>Card Combinations</h4>
          <div className="thresholds">
            {abilities.resourceSystem.combos.map((combo, index) => (
              <div key={index} className="threshold">
                <h5>{combo.name}</h5>
                <p>{combo.description}</p>
                <p><strong>Effects:</strong> {combo.effects}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Spells */}
        <div className="base-spells">
          <h3>Base Spells</h3>
          {abilities.baseSpells.map((spell, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Cards: {spell.cost.cardDraw}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>

              <div className="suit-effects">
                <h5>Suit Effects</h5>
                <ul>
                  {spell.suitEffects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.suit}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <div className="value-effects">
                <h5>Value Effects</h5>
                <ul>
                  {spell.valueEffects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.value}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {spell.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Spells */}
        <div className="advanced-abilities">
          <h3>Advanced Spells & Fate Combos</h3>
          {abilities.advancedSpells.map((spell, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Cards: {spell.cost.cardDraw}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>

              <div className="combo-effects">
                <h5>Combo Effects</h5>
                <ul>
                  {spell.comboEffects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.combo}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <div className="value-effects">
                <h5>Value Effects</h5>
                <ul>
                  {spell.valueEffects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.value}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {spell.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Chaos Weaver
  if (classId === 'chaos-weaver') {
    return (
      <div className={`class-abilities chaos-weaver`}>
        <ClassBackground classId={classId} />
        <h2>Chaos Weaver Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Chaos Tables</h4>
          <div className="thresholds">
            {abilities.resourceSystem.tables.map((table, index) => (
              <div key={index} className="threshold">
                <h5>{table.name}</h5>
                <p>{table.description}</p>
                <ul>
                  {table.results.map((result, idx) => (
                    <li key={idx}><strong>{result.range}:</strong> {result.effect}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Spells */}
        <div className="base-spells">
          <h3>Base Spells</h3>
          {abilities.baseSpells.map((spell, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={spell.name} />
                <h4>{spell.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {spell.cost.actionPoints}</span>
                <span>Mana: {spell.cost.mana}</span>
                <span>Roll: {spell.cost.chaosRoll}</span>
              </div>
              <p><strong>Description:</strong> {spell.description}</p>
              <p><strong>Mechanics:</strong> {spell.mechanics}</p>
              <p><strong>Scaling:</strong> {spell.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <p><strong>Type:</strong> {ability.type}</p>
              {ability.cost && (
                <div className="ability-cost">
                  {ability.cost.actionPoints && <span>AP: {ability.cost.actionPoints}</span>}
                  {ability.cost.mana && <span>Mana: {ability.cost.mana}</span>}
                  {ability.cost.chaosTokens && <span>Chaos Tokens: {ability.cost.chaosTokens}</span>}
                </div>
              )}
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>
              <p><strong>Requirements:</strong> {ability.requirements}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Lichborne
  if (classId === 'lichborne') {
    return (
      <div className={`class-abilities lichborne`}>
        <ClassBackground classId={classId} />
        <h2>Lichborne Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.essenceEchoes > 0 && <span>Essence Echoes: {ability.cost.essenceEchoes}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.essenceEchoes > 0 && <span>Essence Echoes: {ability.cost.essenceEchoes}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Ultimate Abilities */}
        <div className="advanced-abilities">
          <h3>Ultimate Abilities</h3>
          {abilities.ultimateAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.essenceEchoes > 0 && <span>Essence Echoes: {ability.cost.essenceEchoes}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Inscriptor
  if (classId === 'inscriptor') {
    return (
      <div className={`class-abilities inscriptor`}>
        <ClassBackground classId={classId} />
        <h2>Inscriptor Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Rune Slots: {ability.cost.runeSlots}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.scaling && <p><strong>Scaling:</strong> {ability.scaling}</p>}
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Rune Slots: {ability.cost.runeSlots}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.scaling && <p><strong>Scaling:</strong> {ability.scaling}</p>}
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Glyphwright (Utility & Support)</h4>
            {abilities.talentAbilities.glyphwright.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Detonist (Damage & Area Control)</h4>
            {abilities.talentAbilities.detonist.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Circuit Binder (Chains & Traps)</h4>
            {abilities.talentAbilities.circuitBinder.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Arcanoneer
  if (classId === 'arcanoneer') {
    return (
      <div className={`class-abilities arcanoneer`}>
        <ClassBackground classId={classId} />
        <h2>Arcanoneer Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Element Runes</h4>
          <div className="thresholds">
            {abilities.resourceSystem.elementRunes.map((rune, index) => (
              <div key={index} className="threshold">
                <h5>{rune.name}</h5>
                <p>{rune.description}</p>
                <p><strong>Volatility:</strong> {rune.volatility ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>

          <h4>Spell Forms</h4>
          <div className="thresholds">
            {abilities.resourceSystem.spellForms.map((form, index) => (
              <div key={index} className="threshold">
                <h5>{form.name}</h5>
                <p>{form.description}</p>
                <p><strong>Cost:</strong> {form.cost.actionPoints} AP, {form.cost.mana} Mana</p>
              </div>
            ))}
          </div>

          <h4>Common Combinations</h4>
          <div className="thresholds">
            {abilities.resourceSystem.commonCombos.map((combo, index) => (
              <div key={index} className="threshold">
                <h5>{combo.recipe}</h5>
                <p><strong>Recommended Form:</strong> {combo.form}</p>
                <p><strong>Effect:</strong> {combo.effect}</p>
              </div>
            ))}
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              {ability.effects && (
                <div className="effects">
                  <h5>Effects</h5>
                  <ul>
                    {ability.effects.map((effect, idx) => (
                      <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                    ))}
                  </ul>
                </div>
              )}

              {ability.scaling && <p><strong>Scaling:</strong> {ability.scaling}</p>}
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Elemental Ordnance (Direct Damage)</h4>
            {abilities.talentAbilities.elementalOrdnance.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Runic Architect (Control & Support)</h4>
            {abilities.talentAbilities.runicArchitect.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Flux Tactician (Risk-Reward)</h4>
            {abilities.talentAbilities.fluxTactician.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Round-by-Round Example */}
        <div className="advanced-abilities">
          <h3>Round-by-Round Example</h3>
          {abilities.roundByRound.map((round, index) => (
            <div key={index} className="ability">
              <h4>Round {round.round}</h4>
              <p><strong>Actions:</strong> {round.actions}</p>
              <p><strong>Results:</strong> {round.results}</p>
            </div>
          ))}
        </div>

        {/* Attribute Scaling */}
        <div className="advanced-abilities">
          <h3>Attribute Scaling</h3>
          {abilities.attributeScaling.map((attribute, index) => (
            <div key={index} className="ability">
              <h4>{attribute.attribute}</h4>
              <p>{attribute.effect}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For Spellguard
  if (classId === 'spellguard') {
    return (
      <div className={`class-abilities spellguard`}>
        <ClassBackground classId={classId} />
        <h2>Spellguard Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.wardPoints && <span>Ward Points: {ability.cost.wardPoints}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.scaling && <p><strong>Scaling:</strong> {ability.scaling}</p>}
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                {ability.cost.wardPoints && <span>Ward Points: {ability.cost.wardPoints}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.scaling && <p><strong>Scaling:</strong> {ability.scaling}</p>}
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Aether Warden (Shield Tanking)</h4>
            {abilities.talentAbilities.aetherWarden.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Counterglyph (Spell Reflection)</h4>
            {abilities.talentAbilities.counterglyph.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Ley Sentinel (Zone Control)</h4>
            {abilities.talentAbilities.leySentinel.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Witch Doctor
  if (classId === 'witch-doctor') {
    return (
      <div className={`class-abilities witch-doctor`}>
        <ClassBackground classId={classId} />
        <h2>Witch Doctor Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name}</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Voodoo Essence Gains</h4>
          <div className="thresholds">
            {abilities.resourceSystem.veGains.map((gain, index) => (
              <div key={index} className="threshold">
                <h5>{gain.action}</h5>
                <p><strong>VE Gained:</strong> {gain.veGained}</p>
              </div>
            ))}
          </div>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>VE: {ability.cost.voodooEssence}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>VE: {ability.cost.voodooEssence}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              {ability.requirements && (
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              )}

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Invocations */}
        <div className="advanced-abilities">
          <h3>Invocations (Loa)</h3>
          {abilities.invocations.map((invocation, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={invocation.name} />
                <h4>{invocation.name}</h4>
              </div>
              <div className="spell-cost">
                <span>VE Cost: {invocation.cost.voodooEssence}</span>
                <span>Slot: {invocation.cost.slot}</span>
                <span>Duration: {invocation.duration}</span>
              </div>
              <p><strong>Description:</strong> {invocation.description}</p>
              <p><strong>Effects:</strong> {invocation.effects}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Curse-Binder (Single-Target Lock)</h4>
            {abilities.talentAbilities.curseBinder.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Totemic Architect (Zone Control)</h4>
            {abilities.talentAbilities.totemicArchitect.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Loa Chosen (Invocation Power)</h4>
            {abilities.talentAbilities.loaChosen.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // For Formbender
  if (classId === 'formbender') {
    return (
      <div className={`class-abilities formbender`}>
        <ClassBackground classId={classId} />
        <h2>Formbender Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Form Slots</h4>
          <div className="resource-details">
            <p>{abilities.resourceSystem.formSlots.description}</p>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Starter Forms */}
        <div className="base-spells">
          <h3>Starter Forms</h3>
          {abilities.starterForms.map((form, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={form.name} />
                <h4>{form.name}</h4>
              </div>
              <p><strong>Role:</strong> {form.role}</p>
              <p><strong>Passive:</strong> {form.passive}</p>

              <div className="form-actions">
                <h5>Basic Actions (0 WI)</h5>
                {form.basicActions.map((action, idx) => (
                  <div key={idx} className="form-action">
                    <p><strong>{action.name} ({action.cost.actionPoints} AP):</strong> {action.effect}</p>
                  </div>
                ))}
              </div>

              <div className="form-instinct-moves">
                <h5>Instinct Moves</h5>
                {form.instinctMoves.map((move, idx) => (
                  <div key={idx} className="form-action">
                    <p>
                      <strong>{move.name} ({move.cost.actionPoints} AP, {move.cost.mana} Mana, {move.cost.wildInstinct} WI)
                      {move.trigger ? ` - ${move.trigger}` : ''}:</strong> {move.effect}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Instinct Moves */}
        <div className="advanced-abilities">
          <h3>Advanced Instinct Moves</h3>
          {abilities.advancedInstinctMoves.map((move, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={move.name} />
                <h4>{move.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {move.cost.actionPoints}</span>
                <span>Mana: {move.cost.mana}</span>
                <span>WI: {move.cost.wildInstinct}</span>
                {move.trigger && <span>Trigger: {move.trigger}</span>}
              </div>
              <p><strong>Requirement:</strong> {move.requirement}</p>
              <p><strong>Effect:</strong> {move.effect}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Primal Fury (Melee DPS)</h4>
            {abilities.talentAbilities.primalFury.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Adaptive Predator (Utility & Control)</h4>
            {abilities.talentAbilities.adaptivePredator.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Elemental Aspect (Spell / AoE)</h4>
            {abilities.talentAbilities.elementalAspect.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Scaling */}
        <div className="attribute-scaling">
          <h3>Attribute Scaling</h3>
          <ul>
            {abilities.attributeScaling.map((scaling, index) => (
              <li key={index}><strong>{scaling.attribute}:</strong> {scaling.effect}</li>
            ))}
          </ul>
        </div>

        {/* Play Style */}
        <div className="play-style">
          <h3>Play Style</h3>
          <ol>
            {abilities.playStyle.steps.map((step, index) => (
              <li key={index}><strong>{step.step}:</strong> {step.description}</li>
            ))}
          </ol>
          <p>{abilities.playStyle.summary}</p>
        </div>
      </div>
    );
  }

  // For Primalist
  if (classId === 'primalist') {
    return (
      <div className={`class-abilities primalist`}>
        <ClassBackground classId={classId} />
        <h2>Primalist Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Totem Ritual</h4>
          <div className="resource-details">
            <p><strong>{abilities.resourceSystem.totemRitual.name}</strong> ({abilities.resourceSystem.totemRitual.cost.actionPoints} AP, {abilities.resourceSystem.totemRitual.cost.mana} Mana): {abilities.resourceSystem.totemRitual.description}</p>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Starter Totems */}
        <div className="base-spells">
          <h3>Starter Totems</h3>
          {abilities.starterTotems.map((totem, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={totem.name} />
                <h4>{totem.name}</h4>
              </div>
              <p><strong>Passive Aura:</strong> {totem.passiveAura}</p>

              <div className="totem-actions">
                <h5>Channel Action</h5>
                <p><strong>{totem.channelAction.name} ({totem.channelAction.cost.actionPoints} AP):</strong> {totem.channelAction.effect}</p>
              </div>

              <div className="totem-feed">
                <h5>Feed PR</h5>
                <p>{totem.feedPR}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>PR: {ability.cost.primalResonance}</span>
                {ability.trigger && <span>Trigger: {ability.trigger}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>
              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Bursts & Ultimates */}
        <div className="advanced-abilities">
          <h3>Advanced Bursts & Ultimates</h3>
          {abilities.advancedBursts.map((burst, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={burst.name} />
                <h4>{burst.name} {burst.ultimate && '(Ultimate)'}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {burst.cost.actionPoints}</span>
                <span>Mana: {burst.cost.mana}</span>
                <span>PR: {burst.cost.primalResonance}</span>
              </div>
              <p><strong>Description:</strong> {burst.description}</p>
              <p><strong>Mechanics:</strong> {burst.mechanics}</p>
              <p><strong>Scaling:</strong> {burst.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Totemic Sage (Setup & Zone Control)</h4>
            {abilities.talentAbilities.totemicSage.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Elemental Fury (Burst Damage)</h4>
            {abilities.talentAbilities.elementalFury.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Verdant Ward (Healing & Mitigation)</h4>
            {abilities.talentAbilities.verdantWard.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Scaling */}
        <div className="attribute-scaling">
          <h3>Attribute Scaling</h3>
          <ul>
            {abilities.attributeScaling.map((scaling, index) => (
              <li key={index}><strong>{scaling.attribute}:</strong> {scaling.effect}</li>
            ))}
          </ul>
        </div>

        {/* Turn Flow */}
        <div className="play-style">
          <h3>Turn Flow</h3>
          <ol>
            {abilities.turnFlow.steps.map((step, index) => (
              <li key={index}><strong>{step.step}:</strong> {step.description}</li>
            ))}
          </ol>
          <p>{abilities.turnFlow.summary}</p>
        </div>
      </div>
    );
  }

  // For Berserker
  if (classId === 'berserker') {
    return (
      <div className={`class-abilities berserker`}>
        <ClassBackground classId={classId} />
        <h2>Berserker Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Fury: {ability.cost.fury}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name} {ability.ultimate && '(Ultimate)'}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>Fury: {ability.cost.fury}</span>
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Path of Carnage (Pure Offense)</h4>
            {abilities.talentAbilities.carnage.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Path of Resilience (Self-Healing Tank)</h4>
            {abilities.talentAbilities.resilience.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Path of Momentum (Speed & Control)</h4>
            {abilities.talentAbilities.momentum.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Scaling */}
        <div className="attribute-scaling">
          <h3>Attribute Scaling</h3>
          <ul>
            {abilities.attributeScaling.map((scaling, index) => (
              <li key={index}><strong>{scaling.attribute}:</strong> {scaling.effect}</li>
            ))}
          </ul>
        </div>

        {/* Play Style */}
        <div className="play-style">
          <h3>Play Style</h3>
          <ol>
            {abilities.playStyle.steps.map((step, index) => (
              <li key={index}><strong>{step.step}:</strong> {step.description}</li>
            ))}
          </ol>
          <p>{abilities.playStyle.summary}</p>
        </div>
      </div>
    );
  }

  // For Dreadnaught
  if (classId === 'dreadnaught') {
    return (
      <div className={`class-abilities dreadnaught`}>
        <ClassBackground classId={classId} />
        <h2>Dreadnaught Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>GP: {ability.cost.guardPoints}</span>
                {ability.cost.siegeStacks && <span>Siege: {ability.cost.siegeStacks}</span>}
                {ability.trigger && <span>Trigger: {ability.trigger}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name} {ability.ultimate && '(Ultimate)'}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>GP: {ability.cost.guardPoints}</span>
                {ability.cost.siegeStacks && <span>Siege: {ability.cost.siegeStacks}</span>}
                {ability.trigger && <span>Trigger: {ability.trigger}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Bulwark Discipline (Shield Wall)</h4>
            {abilities.talentAbilities.bulwarkDiscipline.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Siege Engine (Counter-Offensive)</h4>
            {abilities.talentAbilities.siegeEngine.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Momentum Bastion (Mobile Tank)</h4>
            {abilities.talentAbilities.momentumBastion.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Scaling */}
        <div className="attribute-scaling">
          <h3>Attribute Scaling</h3>
          <ul>
            {abilities.attributeScaling.map((scaling, index) => (
              <li key={index}><strong>{scaling.attribute}:</strong> {scaling.effect}</li>
            ))}
          </ul>
        </div>

        {/* Play Style */}
        <div className="play-style">
          <h3>Play Style</h3>
          <ol>
            {abilities.playStyle.steps.map((step, index) => (
              <li key={index}><strong>{step.step}:</strong> {step.description}</li>
            ))}
          </ol>
          <p>{abilities.playStyle.summary}</p>
        </div>
      </div>
    );
  }

  // For Titan
  if (classId === 'titan') {
    return (
      <div className={`class-abilities titan`}>
        <ClassBackground classId={classId} />
        <h2>Titan Abilities</h2>

        {/* Resource System */}
        <div className="resource-system">
          <h3>{abilities.resourceSystem.name} System</h3>
          <p>{abilities.resourceSystem.description}</p>

          <h4>Thresholds</h4>
          <div className="thresholds">
            {abilities.resourceSystem.thresholds.map((threshold, index) => (
              <div key={index} className="threshold">
                <h5>{threshold.name} ({threshold.value} Gravitas)</h5>
                <p>{threshold.description}</p>
              </div>
            ))}
          </div>

          <h4>Passive Benefits</h4>
          <div className="resource-details">
            <h5>{abilities.resourceSystem.passiveBenefits.name}</h5>
            <p>{abilities.resourceSystem.passiveBenefits.description}</p>
            <ul>
              {abilities.resourceSystem.passiveBenefits.effects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>

          <h4>Mechanics</h4>
          <ul>
            {abilities.resourceSystem.mechanics.map((mechanic, index) => (
              <li key={index}>{mechanic}</li>
            ))}
          </ul>
        </div>

        {/* Base Abilities */}
        <div className="base-spells">
          <h3>Base Abilities</h3>
          {abilities.baseAbilities.map((ability, index) => (
            <div key={index} className="spell">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>GV: {ability.cost.gravitas}</span>
                {ability.trigger && <span>Trigger: {ability.trigger}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Advanced Abilities */}
        <div className="advanced-abilities">
          <h3>Advanced Abilities</h3>
          {abilities.advancedAbilities.map((ability, index) => (
            <div key={index} className="ability">
              <div className="spell-header">
                <SpellIcon classId={classId} spellName={ability.name} />
                <h4>{ability.name} {ability.ultimate && '(Ultimate)'} {ability.daily && '(Daily)'}</h4>
              </div>
              <div className="spell-cost">
                <span>AP: {ability.cost.actionPoints}</span>
                <span>Mana: {ability.cost.mana}</span>
                <span>GV: {ability.cost.gravitas}</span>
                {ability.trigger && <span>Trigger: {ability.trigger}</span>}
              </div>
              <p><strong>Description:</strong> {ability.description}</p>
              <p><strong>Mechanics:</strong> {ability.mechanics}</p>

              <div className="effects">
                <h5>Effects</h5>
                <ul>
                  {ability.effects.map((effect, idx) => (
                    <li key={idx}><strong>{effect.condition}:</strong> {effect.effect}</li>
                  ))}
                </ul>
              </div>

              <p><strong>Scaling:</strong> {ability.scaling}</p>
            </div>
          ))}
        </div>

        {/* Talent Tree Abilities */}
        <div className="talent-abilities">
          <h3>Talent Tree Abilities</h3>

          <div className="talent-tree-section">
            <h4>Earthshaper — Terrain Control</h4>
            {abilities.talentAbilities.earthshaper.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>World Breaker — Single-Target Demolisher</h4>
            {abilities.talentAbilities.worldBreaker.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>

          <div className="talent-tree-section">
            <h4>Immovable Juggernaut — Tank/Support</h4>
            {abilities.talentAbilities.immovableJuggernaut.map((ability, index) => (
              <div key={index} className="talent-ability">
                <h5>{ability.name}</h5>
                <p><strong>Description:</strong> {ability.description}</p>
                <p><strong>Mechanics:</strong> {ability.mechanics}</p>
                <p><strong>Requirements:</strong> {ability.requirements}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attribute Scaling */}
        <div className="attribute-scaling">
          <h3>Attribute Scaling</h3>
          <ul>
            {abilities.attributeScaling.map((scaling, index) => (
              <li key={index}><strong>{scaling.attribute}:</strong> {scaling.effect}</li>
            ))}
          </ul>
        </div>

        {/* Play Style */}
        <div className="play-style">
          <h3>Play Style</h3>
          <ol>
            {abilities.playStyle.steps.map((step, index) => (
              <li key={index}><strong>{step.step}:</strong> {step.description}</li>
            ))}
          </ol>
          <p>{abilities.playStyle.summary}</p>
        </div>
      </div>
    );
  }

  // For Pyrofiend
  return (
    <div className={`class-abilities pyrofiend`}>
      <ClassBackground classId={classId} />
      <h2>Pyrofiend Abilities</h2>

      {/* Resource System */}
      <div className="resource-system">
        <h3>{abilities.resourceSystem.name} System</h3>
        <p>{abilities.resourceSystem.description}</p>

        <h4>Inferno Levels</h4>
        <div className="thresholds">
          {abilities.resourceSystem.levels.map((level, index) => (
            <div key={index} className="threshold">
              <h5>Level {level.level}</h5>
              <p><strong>Bonus:</strong> {level.bonus}</p>
              <p><strong>Drawback:</strong> {level.drawback}</p>
            </div>
          ))}
        </div>

        <h4>Mechanics</h4>
        <ul>
          {abilities.resourceSystem.mechanics.map((mechanic, index) => (
            <li key={index}>{mechanic}</li>
          ))}
        </ul>
      </div>

      {/* Base Spells */}
      <div className="base-spells">
        <h3>Base Spells</h3>
        {abilities.baseSpells.map((spell, index) => (
          <div key={index} className="spell">
            <div className="spell-header">
              <SpellIcon classId={classId} spellName={spell.name} />
              <h4>{spell.name}</h4>
            </div>
            <div className="spell-cost">
              <span>AP: {spell.cost.actionPoints}</span>
              <span>Mana: {spell.cost.mana}</span>
              <span>Inferno: {spell.cost.inferno}</span>
            </div>
            <p><strong>Description:</strong> {spell.description}</p>
            <p><strong>Mechanics:</strong> {spell.mechanics}</p>
            <p><strong>Scaling:</strong> {spell.scaling}</p>
          </div>
        ))}
      </div>

      {/* Intermediate Tier Spells */}
      <div className="advanced-abilities">
        <h3>Intermediate Tier Spells (Inferno Level 4-6)</h3>
        {abilities.intermediateTierSpells.map((spell, index) => (
          <div key={index} className="ability">
            <div className="spell-header">
              <SpellIcon classId={classId} spellName={spell.name} />
              <h4>{spell.name}</h4>
            </div>
            <div className="ability-cost">
              <span>AP: {spell.cost.actionPoints}</span>
              <span>Mana: {spell.cost.mana}</span>
              <span>Inferno: {spell.cost.inferno}</span>
            </div>
            <p><strong>Description:</strong> {spell.description}</p>
            <p><strong>Mechanics:</strong> {spell.mechanics}</p>
            <p><strong>Scaling:</strong> {spell.scaling}</p>
          </div>
        ))}
      </div>

      {/* High Tier Spells */}
      <div className="advanced-abilities">
        <h3>High Tier Spells (Inferno Level 7-9)</h3>
        {abilities.highTierSpells.map((spell, index) => (
          <div key={index} className="ability">
            <div className="spell-header">
              <SpellIcon classId={classId} spellName={spell.name} />
              <h4>{spell.name}</h4>
            </div>
            <div className="ability-cost">
              <span>AP: {spell.cost.actionPoints}</span>
              <span>Mana: {spell.cost.mana}</span>
              <span>Inferno: {spell.cost.inferno}</span>
            </div>
            <p><strong>Description:</strong> {spell.description}</p>
            <p><strong>Mechanics:</strong> {spell.mechanics}</p>
            <p><strong>Scaling:</strong> {spell.scaling}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassAbilities;
