import React from 'react';
import ResourceIcon from './ResourceIcon';
import './SpellTooltip.css';

/**
 * SpellTooltip - Reusable component for displaying spell information
 * Used in both Spellbook and Resource Bars
 */
const SpellTooltip = ({ spell, position, visible = true }) => {
  if (!spell || !visible) return null;

  return (
    <div
      className="spell-tooltip"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        zIndex: 1000
      }}
    >
      <div className="tooltip-header">
        <h4>{spell.name}</h4>
      </div>

      <div className="tooltip-description">
        {spell.stageRequirement && (
          <div className="stage-requirement-content">
            <strong>Requirement:</strong> {spell.stageRequirement}
          </div>
        )}

        <p>{spell.description}</p>

        {spell.mechanics && (
          <div className="description-section">
            <strong>Mechanics:</strong>
            <p>{spell.mechanics}</p>
          </div>
        )}

        {spell.scaling && (
          <div className="description-section">
            <strong>Scaling:</strong>
            <p>{spell.scaling}</p>
          </div>
        )}

        {/* Special effects for different spell types */}
        {spell.effects && (
          <div className="description-section">
            <strong>Effects:</strong>
            <ul className="effects-list">
              {spell.effects.map((effect, index) => (
                <li key={index}>
                  <strong>{effect.condition}:</strong> {effect.effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {spell.outcomes && (
          <div className="description-section">
            <strong>Possible Outcomes:</strong>
            <ul className="effects-list">
              {spell.outcomes.map((outcome, index) => (
                <li key={index}>
                  <strong>{outcome.result}:</strong> {outcome.effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {spell.suitEffects && (
          <div className="description-section">
            <strong>Suit Effects:</strong>
            <ul className="effects-list">
              {spell.suitEffects.map((effect, index) => (
                <li key={index}>
                  <strong>{effect.suit}:</strong> {effect.effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {spell.valueEffects && (
          <div className="description-section">
            <strong>Card Value Effects:</strong>
            <ul className="effects-list">
              {spell.valueEffects.map((effect, index) => (
                <li key={index}>
                  <strong>{effect.value}:</strong> {effect.effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {spell.combos && (
          <div className="description-section">
            <strong>Poker Combinations:</strong>
            <ul className="effects-list">
              {spell.combos.map((combo, index) => (
                <li key={index}>
                  <strong>{combo.combo}:</strong> {combo.effect}
                </li>
              ))}
            </ul>
          </div>
        )}

        {spell.entropyInteractions && (
          <div className="description-section">
            <strong>Entropy Interactions:</strong>
            <ul className="effects-list">
              {spell.entropyInteractions.map((interaction, index) => (
                <li key={index}>{interaction}</li>
              ))}
            </ul>
          </div>
        )}

        {spell.special && (
          <div className="description-section">
            <strong>Special:</strong>
            <p>{spell.special}</p>
          </div>
        )}

        {/* Resource Costs at Bottom */}
        <div className="tooltip-costs-footer">
          <div className="costs-divider"></div>

          {/* Main costs row */}
          <div className="main-costs-row">
            {spell.cost?.actionPoints && (
              <div className="cost-badge ap-cost">
                <span className="cost-label">AP</span>
                <span className="cost-value">{spell.cost.actionPoints}</span>
              </div>
            )}
            {spell.cost?.mana && (
              <div className="cost-badge mana-cost">
                <ResourceIcon resourceType="mana" size="small" />
                <span className="cost-label">Mana</span>
                <span className="cost-value">{spell.cost.mana}</span>
              </div>
            )}
            {spell.cost?.health && (
              <div className="cost-badge health-cost">
                <ResourceIcon resourceType="health" size="small" />
                <span className="cost-value">{spell.cost.health}</span>
              </div>
            )}
          </div>

          {/* Cooldown row */}
          {spell.cooldown && (
            <div className="cooldown-row">
              <div className="cost-badge cooldown-cost">
                <ResourceIcon resourceType="cooldown" size="small" />
                <span className="cost-label">CD</span>
                <span className="cost-value">{spell.cooldown}</span>
              </div>
            </div>
          )}

          {/* Special costs row */}
          {(spell.cost?.note || spell.cost?.lunarCharge || spell.cost?.spiritCharges ||
            spell.cost?.cardDraw || spell.cost?.chaosRoll || spell.cost?.diceRoll ||
            spell.cost?.coinFlip || spell.cost?.luckPoints || spell.cost?.riskStacks ||
            spell.cost?.wager || spell.cost?.runeSlots || spell.cost?.voodooEssence ||
            spell.cost?.ascension || spell.cost?.continuum || spell.cost?.essenceEchoes ||
            spell.cost?.wardPoints || spell.cost?.soulCharges || spell.cost?.primalResonance ||
            spell.cost?.guardPoints || spell.cost?.heat || spell.cost?.combo) && (
            <div className="special-costs-row">
              {spell.cost?.ascension && (
                <div className="cost-badge ascension-cost">
                  <ResourceIcon resourceType="ascension" size="small" />
                  <span className="cost-value">{spell.cost.ascension}</span>
                </div>
              )}
              {spell.cost?.lunarCharge && (
                <div className="cost-badge lunar-cost">
                  <ResourceIcon resourceType="lunarCharge" size="small" />
                  <span className="cost-value">{spell.cost.lunarCharge}</span>
                </div>
              )}
              {spell.cost?.spiritCharges && (
                <div className="cost-badge spirit-cost">
                  <ResourceIcon resourceType="spiritCharges" size="small" />
                  <span className="cost-value">{spell.cost.spiritCharges}</span>
                </div>
              )}
              {spell.cost?.continuum && (
                <div className="cost-badge continuum-cost">
                  <ResourceIcon resourceType="continuum" size="small" />
                  <span className="cost-value">{spell.cost.continuum}</span>
                </div>
              )}
              {spell.cost?.note && (
                <div className="cost-note">
                  {spell.cost.note}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpellTooltip;
