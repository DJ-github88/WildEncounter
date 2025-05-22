import { useState } from 'react';
import './TalentNode.css';

const TalentNode = ({
  id,
  talent,
  currentRank,
  maxRank,
  isAvailable,
  isMaxed,
  onClick,
  onContextMenu,
  style
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Determine node status class
  let statusClass = 'unavailable';
  if (isMaxed) {
    statusClass = 'maxed';
  } else if (currentRank > 0) {
    statusClass = 'active';
  } else if (isAvailable) {
    statusClass = 'available';
  }

  // Get the current rank description
  const getCurrentRankDescription = () => {
    if (talent.rankDescription && talent.rankDescription.length > 0) {
      return currentRank > 0 ? talent.rankDescription[currentRank - 1] : talent.rankDescription[0];
    }
    return talent.description;
  };

  // Get the next rank description
  const getNextRankDescription = () => {
    if (talent.rankDescription && talent.rankDescription.length > 0) {
      return talent.rankDescription[currentRank];
    }
    return talent.description;
  };

  return (
    <div
      id={id}
      className={`talent-node ${statusClass}`}
      style={style}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="talent-icon">{talent.icon}</div>
      <div className="talent-rank">{currentRank}/{maxRank}</div>

      {showTooltip && (
        <div className="talent-tooltip">
          <h4 className="tooltip-title">{talent.name}</h4>
          <div className="tooltip-rank">Rank {currentRank}/{maxRank}</div>
          <p className="tooltip-description">{getCurrentRankDescription()}</p>
          {currentRank > 0 && currentRank < maxRank && (
            <div className="tooltip-next-rank">
              <div className="tooltip-divider"></div>
              <p>Next rank: {getNextRankDescription()}</p>
            </div>
          )}
          <div className="tooltip-instructions">
            <span>Left-click to learn</span>
            <span>Right-click to unlearn</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentNode;
