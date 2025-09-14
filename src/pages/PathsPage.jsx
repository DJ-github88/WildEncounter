import React from 'react';
import { Link } from 'react-router-dom';
import paths from '../data/paths';
import './PathsPage.css';

const PathsPage = () => {

  return (
    <div className="paths-page">
      <div className="paths-header">
        <h1 className="page-title">Character Backgrounds</h1>
        <p className="page-description">
          In our TTRPG system, character creation begins with selecting a background path, which provides a foundation
          of thematic abilities. Each background offers multiple specializations and a pool of abilities to choose from.
          Characters select a specialization and then choose 2 abilities from the available pool, allowing for meaningful
          customization while maintaining thematic coherence. This separation of backgrounds from classes allows for
          diverse character combinations and playstyles.
        </p>
      </div>

      <div className="character-creation-flow">
        <div className="flow-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Choose a Background</h3>
            <p>Select one of the nine background paths that best fits your character concept. Each provides three thematic abilities.</p>
          </div>
        </div>
        <div className="flow-connector">→</div>
        <div className="flow-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Select a Class</h3>
            <p>Choose any class regardless of your background. The combination creates unique character possibilities.</p>
          </div>
        </div>
        <div className="flow-connector">→</div>
        <div className="flow-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Customize</h3>
            <p>Develop your character with talent trees, abilities, and equipment choices.</p>
          </div>
        </div>
      </div>

      <div className="backgrounds-grid">
        {paths.map(path => (
          <Link
            key={path.id}
            to={`/paths/${path.id}`}
            className="background-card"
            data-path={path.id}
          >
            <div className="card-border">
              <div className="card-content">
                <div className="path-emblem">
                  <div className="emblem-inner"></div>
                </div>
                <h3 className="path-title">{path.name.replace(' Path', '')}</h3>
                <p className="path-description">{path.description}</p>
                <div className="path-footer">
                  <span className="abilities-indicator">Multiple Specializations • Choose 2 Abilities</span>
                  <div className="explore-button">
                    <span>Explore Path</span>
                    <div className="button-arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PathsPage;


