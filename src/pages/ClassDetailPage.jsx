import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TalentTree from '../components/talent-tree/TalentTree';
import Spellbook from '../components/Spellbook';
import EssenceOfHumanity from '../components/EssenceOfHumanity';
import classData from '../data/class-data';
import paths from '../data/paths';
import talentTreeRegistry from '../data/talent-trees';
import classGuides from '../data/class-guides';
// Import class abilities
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
import './ClassDetailPage.css';

const ClassDetailPage = () => {
  const { classId } = useParams();
  const [selectedClass, setSelectedClass] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeTalentTree, setActiveTalentTree] = useState(null);
  const [talentPoints, setTalentPoints] = useState(31); // Default to 31 talent points (not level-based)
  const [pointsSpent, setPointsSpent] = useState({});
  const [talentTrees, setTalentTrees] = useState([]);
  const [classAbilities, setClassAbilities] = useState(null);
  const [showEssenceInfo, setShowEssenceInfo] = useState(false);

  // Get abilities data for the current class
  const getClassAbilities = (classId) => {
    const abilitiesMap = {
      'chronarch': chronarchAbilities,
      'minstrel': minstrelAbilities,
      'pyrofiend': pyrofiendAbilities,
      'chaos-weaver': chaosWeaverAbilities,
      'fate-weaver': fateWeaverAbilities,
      'gambler': gamblerAbilities,
      'martyr': martyrAbilities,
      'false-prophet': falseProphetAbilities,
      'exorcist': exorcistAbilities,
      'deathcaller': deathcallerAbilities,
      'plaguebringer': plaguebringerAbilities,
      'lichborne': lichborneAbilities,
      'inscriptor': inscriptorAbilities,
      'spellguard': spellguardAbilities,
      'arcanoneer': arcanoneerAbilities,
      'witch-doctor': witchDoctorAbilities,
      'formbender': formbenderAbilities,
      'primalist': primalistAbilities,
      'berserker': berserkerAbilities,
      'dreadnaught': dreadnaughtAbilities,
      'titan': titanAbilities,
      'lunarch': lunarchAbilities,
      'huntress': huntressAbilities,
      'warden': wardenAbilities,
      'toxicologist': toxicologistAbilities,
      'covenbane': covenbaneAbilities,
      'bladedancer': bladedancerAbilities
    };

    return abilitiesMap[classId] || null;
  };

  useEffect(() => {
    // Get the class data from our class-data object
    const classInfo = classData[classId];

    if (classInfo) {
      setSelectedClass(classInfo);

      // Get talent trees for this class from the registry
      const classTalentTrees = talentTreeRegistry[classId] || [];
      setTalentTrees(classTalentTrees);

      // Get abilities data for this class
      const abilities = getClassAbilities(classId);
      setClassAbilities(abilities);

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
          Spellbook
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
              <h2 className="card-title">Backgrounds</h2>
              <p className="background-info-text">
                Your character's background represents their past experiences and training before embracing this class.
                Backgrounds provide three thematic abilities that complement your class abilities, creating unique character concepts.
              </p>
              <p className="background-info-text">
                While {selectedClass.name} traditionally aligns with {pathInfo ? pathInfo.name : 'certain paths'},
                any background can create interesting combinations. <Link to="/paths" className="background-link">Explore all backgrounds</Link> to find your perfect match.
              </p>
            </div>

            <div className="overview-card races-info-card">
              <h2 className="card-title">Races</h2>
              <p className="races-info-text">
                Your character's race determines their heritage and provides unique racial abilities, stat modifiers, and cultural traits.
                Each race offers distinct advantages and disadvantages that can synergize with your class choice.
              </p>
              <p className="races-info-text">
                From resilient mountain folk to mystically-attuned forest dwellers, each race brings its own flavor to the {selectedClass.name} class.
                <Link to="/races" className="races-link">Discover all races</Link> and their unique traits.
              </p>
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
        <Spellbook
          classId={classId}
          classData={selectedClass}
          talentTrees={talentTrees}
          abilities={classAbilities}
        />
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
