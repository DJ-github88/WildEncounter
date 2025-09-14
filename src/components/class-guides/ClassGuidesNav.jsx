import React from 'react';
import { Link } from 'react-router-dom';
import './ClassGuidesNav.css';
import classGuides from '../../data/class-guides';

const ClassGuidesNav = () => {
  // Define all classes
  const allClasses = [
    'spellguard', 'inscriptor', 'arcanoneer',
    'pyrofiend', 'minstrel', 'chronarch',
    'chaos-weaver', 'fate-weaver', 'gambler',
    'martyr', 'false-prophet', 'exorcist',
    'plaguebringer', 'lichborne', 'deathcaller',
    'witch-doctor', 'formbender', 'primalist',
    'berserker', 'dreadnaught', 'titan',
    'toxicologist', 'covenbane', 'bladedancer',
    'lunarch', 'huntress', 'warden'
  ];

  // Filter to only include classes that have guides available
  const availableClasses = allClasses.filter(classId => classGuides[classId]);

  const classNames = {
    'spellguard': 'Spellguard',
    'inscriptor': 'Inscriptor',
    'arcanoneer': 'Arcanoneer',
    'pyrofiend': 'Pyrofiend',
    'minstrel': 'Minstrel',
    'chronarch': 'Chronarch',
    'chaos-weaver': 'Chaos Weaver',
    'fate-weaver': 'Fate Weaver',
    'gambler': 'Gambler',
    'martyr': 'Martyr',
    'false-prophet': 'False Prophet',
    'exorcist': 'Exorcist',
    'plaguebringer': 'Plaguebringer',
    'lichborne': 'Lichborne',
    'deathcaller': 'Deathcaller',
    'witch-doctor': 'Witch Doctor',
    'formbender': 'Formbender',
    'primalist': 'Primalist',
    'berserker': 'Berserker',
    'dreadnaught': 'Dreadnaught',
    'titan': 'Titan',
    'toxicologist': 'Toxicologist',
    'covenbane': 'Covenbane',
    'bladedancer': 'Bladedancer',
    'lunarch': 'Lunarch',
    'huntress': 'Huntress',
    'warden': 'Warden'
  };

  const getClassIcon = (classId) => {
    const icons = {
      'spellguard': '◆',
      'inscriptor': '◇',
      'arcanoneer': '◈',
      'pyrofiend': '◉',
      'minstrel': '◎',
      'chronarch': '★',
      'chaos-weaver': '♠',
      'fate-weaver': '♣',
      'gambler': '♥',
      'martyr': '♦',
      'false-prophet': '◊',
      'exorcist': '◆',
      'plaguebringer': '◇',
      'lichborne': '◈',
      'deathcaller': '◉',
      'witch-doctor': '◎',
      'formbender': '★',
      'primalist': '♠',
      'berserker': '♣',
      'dreadnaught': '♥',
      'titan': '♦',
      'toxicologist': '◊',
      'covenbane': '◆',
      'bladedancer': '◇',
      'lunarch': '◈',
      'huntress': '◉',
      'warden': '◎'
    };

    return icons[classId] || '◆';
  };

  return (
    <div className="class-guides-nav">
      <h2>Class Guides</h2>
      <p className="nav-description">Comprehensive guides for all 27 classes</p>
      <div className="guide-status">
        <p>Currently showing {availableClasses.length} of 27 class guides. More guides are being developed!</p>
      </div>

      <div className="guides-grid">
        {availableClasses.map(classId => (
          <Link
            key={classId}
            to={`/guides/${classId}`}
            className="guide-card"
          >
            <div className="guide-card-content">
              <h3>{classNames[classId]}</h3>
              <div className="guide-card-icon">{getClassIcon(classId)}</div>
              <div className="view-guide">View Guide</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassGuidesNav;
