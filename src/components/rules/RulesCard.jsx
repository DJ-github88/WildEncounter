import React, { useState } from 'react';
import './RulesCard.css';

const RulesCard = ({ title, icon, content, type = 'default', importance = 'normal' }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Determine if content is long enough to warrant collapse/expand
  const isCollapsible = typeof content === 'string' && content.length > 300;
  
  // Get appropriate CSS classes based on props
  const cardClasses = [
    'rules-card',
    `rules-card-${type}`,
    `rules-card-importance-${importance}`,
    expanded ? 'expanded' : ''
  ].join(' ');
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Render content based on its type
  const renderContent = () => {
    if (typeof content === 'string') {
      if (isCollapsible && !expanded) {
        // Show truncated content with expand button
        return (
          <>
            <p className="rules-card-text">{content.substring(0, 300)}...</p>
            <button className="rules-card-expand-button" onClick={toggleExpand}>
              Read More
            </button>
          </>
        );
      } else {
        // Show full content with collapse button if needed
        return (
          <>
            <p className="rules-card-text">{content}</p>
            {isCollapsible && expanded && (
              <button className="rules-card-expand-button" onClick={toggleExpand}>
                Show Less
              </button>
            )}
          </>
        );
      }
    } else if (Array.isArray(content)) {
      // Render as list
      return (
        <ul className="rules-card-list">
          {content.map((item, index) => (
            <li key={index} className="rules-card-list-item">
              {typeof item === 'object' ? (
                <>
                  {item.label && <strong>{item.label}: </strong>}
                  {item.text}
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      );
    } else if (typeof content === 'object' && content !== null) {
      // Render as description list
      return (
        <dl className="rules-card-description-list">
          {Object.entries(content).map(([key, value], index) => (
            <React.Fragment key={index}>
              <dt className="rules-card-term">{key}</dt>
              <dd className="rules-card-definition">{value}</dd>
            </React.Fragment>
          ))}
        </dl>
      );
    }
    
    // Fallback
    return <p className="rules-card-text">No content available</p>;
  };
  
  return (
    <div className={cardClasses}>
      <div className="rules-card-header">
        {icon && <span className="rules-card-icon">{icon}</span>}
        <h3 className="rules-card-title">{title}</h3>
      </div>
      <div className="rules-card-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default RulesCard;
