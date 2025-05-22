import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classData from '../../data/class-data';
import paths from '../../data/paths';
import './ClassesGrid.css';

const ClassesGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredClass, setHoveredClass] = useState(null);

  // Create an array of all classes from the classData object
  const allClasses = Object.entries(classData).map(([id, data]) => ({
    id,
    ...data
  }));

  // Filter classes based on search term only
  const filteredClasses = allClasses.filter(classInfo => {
    const matchesSearch = classInfo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          classInfo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Function to get the path name for a class
  const getPathForClass = (classId) => {
    for (const path of paths) {
      if (path.classes && path.classes.includes(classId)) {
        return path.name;
      }
    }
    return "Independent";
  };

  // Function to get resource system description
  const getResourceDescription = (classId) => {
    const classInfo = classData[classId];
    if (!classInfo) return "";

    // Check if we have a detailed resource system description
    if (classInfo.resourceSystem && classInfo.resourceSystem.description) {
      return classInfo.resourceSystem.description;
    }

    // Otherwise, return a generic description based on the resource type
    return `Uses ${classInfo.resourceType} as their primary resource for abilities and spells.`;
  };

  return (
    <div className="classes-grid-container">
      <div className="classes-intro">
        <h2>Character Classes</h2>
        <p>
          In our TTRPG system, your class choice is independent of your background. While backgrounds provide thematic abilities,
          classes determine your core mechanics, resource systems, and playstyle. Each class has unique abilities and talent trees
          that can be customized to create your ideal character.
        </p>
      </div>

      <div className="classes-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="classes-grid">
        {filteredClasses.map(classInfo => (
          <div
            className="class-card-container"
            key={classInfo.id}
            onMouseEnter={() => setHoveredClass(classInfo.id)}
            onMouseLeave={() => setHoveredClass(null)}
          >
            <Link
              to={`/classes/${classInfo.id}`}
              className="class-card"
            >
              <div className="card-header">
                <div className="class-icon">{classInfo.icon}</div>
              </div>
              <h3 className="class-name">{classInfo.name}</h3>
              <p className="class-description">{classInfo.description}</p>
              <div className="class-details">
                <div className="class-detail">
                  <span className="detail-label">Primary:</span>
                  <span className="detail-value">{classInfo.primaryAttribute}</span>
                </div>
                <div className="class-detail">
                  <span className="detail-label">Resource:</span>
                  <span className="detail-value">{classInfo.resourceType}</span>
                </div>
                <div className="class-detail">
                  <span className="detail-label">Armor:</span>
                  <span className="detail-value">{classInfo.armorProficiency}</span>
                </div>
              </div>
              <div className="view-details">View Details</div>
            </Link>

            {hoveredClass === classInfo.id && (
              <div className="class-tooltip">
                <div className="tooltip-header">
                  <h3>{classInfo.name}</h3>
                  <div className="tooltip-icon">{classInfo.icon}</div>
                </div>
                <div className="tooltip-content">
                  <p className="tooltip-flavor">{classInfo.lore || classInfo.shortDescription}</p>

                  <div className="tooltip-resource-system">
                    <h4>Resource System: {classInfo.resourceType}</h4>
                    <p>{getResourceDescription(classInfo.id)}</p>
                  </div>

                  <div className="tooltip-playstyle">
                    <h4>Playstyle</h4>
                    <p>{classInfo.playstyle || `${classInfo.name}s excel at ${classInfo.description}`}</p>
                  </div>

                  <div className="tooltip-background">
                    <p className="background-note">
                      <strong>Note:</strong> Classes can be combined with any background for unique character builds.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassesGrid;
