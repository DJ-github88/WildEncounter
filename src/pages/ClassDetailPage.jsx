import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TalentTree from '../components/talent-tree/TalentTree';
import ClassAbilities from '../components/ClassAbilities.jsx';
import EssenceOfHumanity from '../components/EssenceOfHumanity';
import classData from '../data/class-data';
import paths from '../data/paths';
import talentTreeRegistry from '../data/talent-trees';
import classGuides from '../data/class-guides';
import './ClassDetailPage.css';

const ClassDetailPage = () => {
  const { classId } = useParams();
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeTalentTree, setActiveTalentTree] = useState(null);
  const [talentPoints, setTalentPoints] = useState(31); // Default to 31 talent points (not level-based)
  const [pointsSpent, setPointsSpent] = useState({});
  const [talentTrees, setTalentTrees] = useState([]);
  const [showEssenceInfo, setShowEssenceInfo] = useState(false);

  useEffect(() => {
    // Get the class data from our class-data object
    const classInfo = classData[classId];

    if (classInfo) {
      setSelectedClass(classInfo);

      // Get talent trees for this class from the registry
      const classTalentTrees = talentTreeRegistry[classId] || [];
      setTalentTrees(classTalentTrees);

      // Set the first talent tree as active if available
      if (classTalentTrees.length > 0) {
        setActiveTalentTree(classTalentTrees[0].id);
      }

      // Initialize points spent for each tree
      const initialPointsSpent = {};
      classTalentTrees.forEach(tree => {
        initialPointsSpent[tree.id] = 0;
      });
      setPointsSpent(initialPointsSpent);
    }
  }, [classId]);

  if (!selectedClass) {
    return <div className="loading">Loading class data...</div>;
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleTalentTreeChange = (treeId) => {
    setActiveTalentTree(treeId);
  };

  const handlePointsSpent = (treeId, points) => {
    setPointsSpent(prev => ({
      ...prev,
      [treeId]: points
    }));
  };

  // Calculate total points spent across all trees
  const totalPointsSpent = Object.values(pointsSpent).reduce((sum, points) => sum + points, 0);
  const remainingPoints = talentPoints - totalPointsSpent;

  // Get the active talent tree data
  const activeTalentTreeData = talentTrees.find(tree => tree.id === activeTalentTree);

  // Get the path name for this class
  const pathInfo = paths.find(p => p.id === selectedClass.path);

  return (
    <div className="class-detail-page">
      {showEssenceInfo && <EssenceOfHumanity onClose={() => setShowEssenceInfo(false)} />}
      <div className="class-header">
        <Link to="/classes" className="back-link">← Back to Classes</Link>
        <div className="path-info">
          {pathInfo && <span className="path-name">{pathInfo.name}</span>}
        </div>
        <div className="class-title">
          <div className="class-icon">{selectedClass.icon}</div>
          <h1 className="class-name">{selectedClass.name}</h1>
        </div>
        <p className="class-description">{selectedClass.description}</p>
      </div>

      <div className="class-tabs">
        <button
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabChange('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-button ${activeTab === 'abilities' ? 'active' : ''}`}
          onClick={() => handleTabChange('abilities')}
        >
          Abilities
        </button>
        <button
          className={`tab-button ${activeTab === 'talents' ? 'active' : ''}`}
          onClick={() => handleTabChange('talents')}
        >
          Talent Trees
        </button>
        <button
          className={`tab-button ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => handleTabChange('guide')}
        >
          Guide
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="class-overview">
          <div className="overview-grid">
            <div className="overview-card">
              <h2 className="card-title">Class Details</h2>
              <div className="detail-item">
                <span className="detail-label">Primary Attribute:</span>
                <span className="detail-value">{selectedClass.primaryAttribute}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Secondary Attributes:</span>
                <span className="detail-value">{selectedClass.secondaryAttributes.join(', ')}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Resource Type:</span>
                <span className="detail-value">{selectedClass.resourceType}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Armor Proficiency:</span>
                <span className="detail-value">{selectedClass.armorProficiency}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Weapon Proficiency:</span>
                <span className="detail-value">{selectedClass.weaponProficiency}</span>
              </div>
            </div>

            <div className="overview-card background-info-card">
              <h2 className="card-title">Background Compatibility</h2>
              <p className="background-info-text">
                In our TTRPG system, classes are independent of backgrounds. While this {selectedClass.name} is traditionally
                associated with the {pathInfo ? pathInfo.name : 'various paths'}, you can combine it with any background
                to create unique character concepts.
              </p>
              <div className="background-benefits">
                <h3>Character Creation</h3>
                <ol className="creation-steps">
                  <li>Choose any <Link to="/paths" className="background-link">background</Link> to gain 3 thematic abilities</li>
                  <li>Select this class for your core mechanics and resource system</li>
                  <li>Customize with talent trees and abilities</li>
                </ol>
              </div>
              <div className="suggested-backgrounds">
                <h3>Suggested Backgrounds</h3>
                <p>While any background works, these combinations offer interesting synergies:</p>
                <ul className="background-suggestions">
                  {pathInfo ? (
                    <li><strong>{pathInfo.name}:</strong> Traditional pairing with established lore</li>
                  ) : null}
                  <li><strong>Any Background:</strong> Create unique character concepts by mixing and matching</li>
                </ul>
              </div>
            </div>

            <div className="overview-card">
              <h2 className="card-title">Class Lore</h2>
              <p className="card-text">{selectedClass.lore}</p>
            </div>
          </div>

          <div className="overview-card">
            <h2 className="card-title">Playstyle</h2>
            <p className="card-text">{selectedClass.playstyle}</p>
          </div>

          <div className="overview-card">
            <h2 className="card-title">Talent Trees</h2>
            <div className="specializations-grid">
              {talentTrees.map(tree => (
                <div className="specialization-card" key={tree.id}>
                  <div className="specialization-header">
                    <div className="specialization-icon">{tree.icon}</div>
                    <h3 className="specialization-name">{tree.name}</h3>
                  </div>
                  <p className="specialization-description">{tree.description}</p>
                  <button
                    className="view-talents-button"
                    onClick={() => {
                      setActiveTab('talents');
                      setActiveTalentTree(tree.id);
                    }}
                  >
                    View Talents
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'abilities' && (
        <ClassAbilities />
      )}

      {activeTab === 'talents' && (
        <div className="talents-section">
          <div className="talents-header">
            <div className="essence-selector">
              <div className="essence-header">
                <label htmlFor="talent-points">Available Points:</label>
                <button
                  className="info-button"
                  onClick={() => setShowEssenceInfo(true)}
                  title="Learn about Essence of Humanity"
                >
                  ?
                </button>
              </div>
              <input
                type="number"
                id="talent-points"
                value={talentPoints}
                onChange={(e) => setTalentPoints(parseInt(e.target.value) || 0)}
                min="0"
                max="100"
              />
            </div>

            <div className="points-summary">
              <span>Points Spent: {totalPointsSpent}</span>
              <span>Points Remaining: {remainingPoints}</span>
            </div>
          </div>

          <div className="talent-tree-tabs">
            {talentTrees.map(tree => (
              <button
                key={tree.id}
                className={`talent-tree-tab ${activeTalentTree === tree.id ? 'active' : ''}`}
                onClick={() => handleTalentTreeChange(tree.id)}
              >
                <span className="tab-icon">{tree.icon}</span>
                <span className="tab-name">{tree.name}</span>
                <span className="tab-points">{pointsSpent[tree.id] || 0}</span>
              </button>
            ))}
          </div>

          {activeTalentTreeData && (
            <TalentTree
              tree={activeTalentTreeData}
              availablePoints={talentPoints}
              onPointsSpent={(points) => handlePointsSpent(activeTalentTree, points)}
            />
          )}
        </div>
      )}

      {activeTab === 'guide' && (
        <div className="guide-section">
          {classGuides[classId] ? (
            // Render the guide component from our registry if it exists
            React.createElement(classGuides[classId])
          ) : (
            // Show a placeholder for classes without guides
            <div className="guide-placeholder">
              <h2>Guide Coming Soon</h2>
              <p>A detailed guide for the {selectedClass.name} class is currently being developed.</p>
              <p>Check back later for comprehensive information on abilities, talent builds, and playstyle tips.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClassDetailPage;
