import { useState, useEffect, useRef } from 'react';
import TalentNode from './TalentNode';
import './TalentTree.css';

const TalentTree = ({ tree, availablePoints, onPointsSpent }) => {
  const [talentPoints, setTalentPoints] = useState({});
  const [remainingPoints, setRemainingPoints] = useState(availablePoints);
  const canvasRef = useRef(null);

  // Initialize talent points
  useEffect(() => {
    const initialPoints = {};
    tree.talents.forEach(talent => {
      initialPoints[talent.id] = 0;
    });
    setTalentPoints(initialPoints);
    setRemainingPoints(availablePoints);
  }, [tree, availablePoints]);

  // Draw connections between talents
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Set canvas size to match its display size
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    tree.talents.forEach(talent => {
      if (!talent.requires) return;

      talent.requires.forEach(requiredId => {
        const requiredTalent = tree.talents.find(t => t.id === requiredId);
        if (!requiredTalent) return;

        // Calculate node positions
        const startNode = document.getElementById(`talent-${requiredId}`);
        const endNode = document.getElementById(`talent-${talent.id}`);

        if (!startNode || !endNode) return;

        const startRect = startNode.getBoundingClientRect();
        const endRect = endNode.getBoundingClientRect();

        const startX = (startRect.left + startRect.right) / 2 - rect.left;
        const startY = (startRect.top + startRect.bottom) / 2 - rect.top;
        const endX = (endRect.left + endRect.right) / 2 - rect.left;
        const endY = (endRect.top + endRect.bottom) / 2 - rect.top;

        // Draw line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);

        // Set line style based on talent points
        // A connection is active if the prerequisite is maxed and the dependent talent has points
        // This shows the active path through the talent tree
        const isActive =
          talentPoints[requiredId] >= requiredTalent.maxRank &&
          talentPoints[talent.id] > 0;

        ctx.strokeStyle = isActive
          ? 'var(--color-talent-connection-active)'
          : 'var(--color-talent-connection)';

        ctx.lineWidth = 2;
        ctx.stroke();
      });
    });
  }, [tree, talentPoints]);

  // Check if a talent can be learned
  const canLearnTalent = (talent) => {
    // Check if already maxed
    if (talentPoints[talent.id] >= talent.maxRank) return false;

    // Check if we have points to spend
    if (remainingPoints <= 0) return false;

    // First row nodes with no prerequisites are always available
    if (talent.position.row === 0 && (!talent.requires || talent.requires.length === 0)) {
      return true;
    }

    // Check prerequisites - only need one valid path to the talent
    if (talent.requires && talent.requires.length > 0) {
      // Check if at least one prerequisite is fulfilled
      let hasValidPrerequisite = false;

      for (const requiredId of talent.requires) {
        const requiredTalent = tree.talents.find(t => t.id === requiredId);
        if (!requiredTalent) continue;

        // Check if prerequisite is maxed
        if (talentPoints[requiredId] >= requiredTalent.maxRank) {
          hasValidPrerequisite = true;
          break; // One valid path is enough
        }
      }

      // If no valid prerequisites found, talent cannot be learned
      if (!hasValidPrerequisite) return false;
    }

    // Check position requirements (need points in connected nodes)
    // For nodes beyond the first row, check if there's a path to them
    const row = talent.position.row;
    if (row > 0) {
      // Instead of requiring specific points per row, we just need a valid path
      // This is already handled by the prerequisite check above
      // No additional row-based requirements
    }

    return true;
  };

  // Check if a talent can be unlearned
  const canUnlearnTalent = (talent) => {
    // Check if we have points in this talent
    if (talentPoints[talent.id] <= 0) return false;

    // Check if any other talents depend on this one
    for (const otherTalent of tree.talents) {
      if (!otherTalent.requires) continue;

      // If another talent requires this one and has points, we need to check if it's the only valid path
      if (
        otherTalent.requires.includes(talent.id) &&
        talentPoints[otherTalent.id] > 0
      ) {
        // Check if there's at least one other valid prerequisite for this talent
        let hasAlternativePrerequisite = false;

        for (const requiredId of otherTalent.requires) {
          // Skip the talent we're trying to unlearn
          if (requiredId === talent.id) continue;

          const requiredTalent = tree.talents.find(t => t.id === requiredId);
          if (!requiredTalent) continue;

          // Check if this alternative prerequisite is maxed
          if (talentPoints[requiredId] >= requiredTalent.maxRank) {
            hasAlternativePrerequisite = true;
            break;
          }
        }

        // If no alternative prerequisites found, we can't unlearn this talent
        if (!hasAlternativePrerequisite) return false;
      }
    }

    // Check if unlearning would break path requirements for other talents
    // We only need to check if this talent is a prerequisite for any active talents
    // This is already handled by the prerequisite check above
    // No additional row-based requirements to check

    return true;
  };

  // Handle clicking on a talent
  const handleTalentClick = (talent, isRightClick = false) => {
    if (isRightClick) {
      // Right click to remove points
      if (canUnlearnTalent(talent)) {
        setTalentPoints(prev => ({
          ...prev,
          [talent.id]: prev[talent.id] - 1
        }));
        setRemainingPoints(prev => prev + 1);

        if (onPointsSpent) {
          onPointsSpent(availablePoints - (remainingPoints + 1));
        }
      }
    } else {
      // Left click to add points
      if (canLearnTalent(talent)) {
        setTalentPoints(prev => ({
          ...prev,
          [talent.id]: prev[talent.id] + 1
        }));
        setRemainingPoints(prev => prev - 1);

        if (onPointsSpent) {
          onPointsSpent(availablePoints - (remainingPoints - 1));
        }
      }
    }
  };

  // Handle right click
  const handleContextMenu = (e, talent) => {
    e.preventDefault();
    handleTalentClick(talent, true);
  };

  // Reset talent points
  const handleReset = () => {
    const initialPoints = {};
    tree.talents.forEach(talent => {
      initialPoints[talent.id] = 0;
    });
    setTalentPoints(initialPoints);
    setRemainingPoints(availablePoints);

    if (onPointsSpent) {
      onPointsSpent(0);
    }
  };

  // Find the maximum row and column to determine grid size
  const maxRow = Math.max(...tree.talents.map(t => t.position.row));
  const maxCol = Math.max(...tree.talents.map(t => t.position.col));

  return (
    <div className="talent-tree-container">
      <div className="talent-tree-header">
        <div className="talent-tree-info">
          <div className="tree-icon">{tree.icon}</div>
          <h3 className="tree-name">{tree.name}</h3>
        </div>
        <div className="talent-points">
          <span>Points: {availablePoints - remainingPoints}/{availablePoints}</span>
          <button className="reset-button" onClick={handleReset}>Reset</button>
        </div>
      </div>

      <div className="talent-tree-description">{tree.description}</div>

      <div
        className="talent-tree-grid"
        style={{
          gridTemplateRows: `repeat(${maxRow + 1}, 1fr)`,
          gridTemplateColumns: `repeat(${maxCol + 1}, 1fr)`
        }}
      >
        <canvas ref={canvasRef} className="connections-canvas" />

        {tree.talents.map(talent => (
          <TalentNode
            key={talent.id}
            id={`talent-${talent.id}`}
            talent={talent}
            currentRank={talentPoints[talent.id] || 0}
            maxRank={talent.maxRank}
            isAvailable={canLearnTalent(talent)}
            isMaxed={talentPoints[talent.id] >= talent.maxRank}
            onClick={() => handleTalentClick(talent)}
            onContextMenu={(e) => handleContextMenu(e, talent)}
            style={{
              gridRow: talent.position.row + 1,
              gridColumn: talent.position.col + 1
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TalentTree;
