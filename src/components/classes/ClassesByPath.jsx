import { Link } from 'react-router-dom';
import paths from '../../data/paths';
import classData from '../../data/class-data';
import './ClassesByPath.css';

const ClassesByPath = () => {
  return (
    <div className="classes-by-path">
      {paths.map((path) => (
        <div key={path.id} className="path-section">
          <h2 className="path-title">{path.name}</h2>
          <div className="path-classes">
            {path.classes.map((classId) => {
              const classInfo = classData[classId];
              if (!classInfo) return null;
              
              return (
                <Link 
                  to={`/classes/${classId}`} 
                  className="class-card" 
                  key={classId}
                >
                  <div className="class-icon">{classInfo.icon}</div>
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
                  </div>
                  <div className="view-details">View Details</div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassesByPath;
