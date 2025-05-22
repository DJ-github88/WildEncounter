import React from 'react';
import './RulesContent.css';
import RulesTabs from './RulesTabs';
import RulesCard from './RulesCard';

const RulesContent = ({ 
  activeCategory, 
  activeSubcategory, 
  categories,
  contentData
}) => {
  // Find the active category and subcategory objects
  const activeCategoryObj = categories.find(cat => cat.id === activeCategory);
  const activeSubcategoryObj = activeCategoryObj?.subcategories?.find(
    subcat => subcat.id === activeSubcategory
  );

  // Generate breadcrumbs
  const breadcrumbs = [
    { id: 'rules', name: 'Rules' },
    { id: activeCategory, name: activeCategoryObj?.name || '' }
  ];
  
  if (activeSubcategoryObj) {
    breadcrumbs.push({ id: activeSubcategory, name: activeSubcategoryObj.name });
  }

  // Get content for the active category/subcategory
  const content = contentData[activeCategory]?.[activeSubcategory] || contentData[activeCategory]?.default;

  return (
    <div className="rules-content">
      {/* Breadcrumb navigation */}
      <div className="rules-breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.id}>
            <span className="breadcrumb-item">{crumb.name}</span>
            {index < breadcrumbs.length - 1 && <span className="breadcrumb-separator">›</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Content header */}
      <div className="rules-content-header">
        <h1 className="rules-content-title">
          {activeSubcategoryObj ? activeSubcategoryObj.name : activeCategoryObj?.name}
        </h1>
        {content?.description && (
          <p className="rules-content-description">{content.description}</p>
        )}
      </div>

      {/* Flavor text (if available) */}
      {content?.flavorText && (
        <div className="rules-flavor-text">
          <p>{content.flavorText}</p>
        </div>
      )}

      {/* Tab navigation (if available) */}
      {content?.tabs && (
        <RulesTabs tabs={content.tabs} />
      )}

      {/* Content sections */}
      <div className="rules-content-sections">
        {content?.sections?.map((section, index) => (
          <RulesCard 
            key={index}
            title={section.title}
            icon={section.icon}
            content={section.content}
            type={section.type || 'default'}
            importance={section.importance || 'normal'}
          />
        ))}
      </div>

      {/* Tables (if available) */}
      {content?.tables?.map((table, index) => (
        <div key={index} className="rules-table-container">
          <h3 className="rules-table-title">{table.title}</h3>
          {table.description && <p className="rules-table-description">{table.description}</p>}
          <div className="rules-table-wrapper">
            <table className="rules-table">
              <thead>
                <tr>
                  {table.headers.map((header, headerIndex) => (
                    <th key={headerIndex}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Related rules (if available) */}
      {content?.relatedRules && content.relatedRules.length > 0 && (
        <div className="rules-related">
          <h3 className="rules-related-title">Related Rules</h3>
          <ul className="rules-related-list">
            {content.relatedRules.map((rule, index) => (
              <li key={index} className="rules-related-item">
                <span className="rules-related-icon">{rule.icon || '📜'}</span>
                <span className="rules-related-name">{rule.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RulesContent;
