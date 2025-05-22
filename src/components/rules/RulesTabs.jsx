import React, { useState } from 'react';
import './RulesTabs.css';
import RulesCard from './RulesCard';

const RulesTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  const [activeSubtab, setActiveSubtab] = useState(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    // Reset subtab when changing main tab
    setActiveSubtab(null);
  };

  const handleSubtabChange = (subtabId) => {
    setActiveSubtab(subtabId);
  };

  // Find the active tab
  const activeTabData = tabs.find(tab => tab.id === activeTab);
  
  // Determine if we should show subtabs
  const hasSubtabs = activeTabData?.subtabs && activeTabData.subtabs.length > 0;
  
  // Find the active subtab if applicable
  const activeSubtabData = hasSubtabs && activeSubtab 
    ? activeTabData.subtabs.find(subtab => subtab.id === activeSubtab)
    : null;

  // Determine which content to show
  const contentToShow = activeSubtabData || activeTabData;

  return (
    <div className="rules-tabs">
      {/* Main tabs */}
      <div className="rules-tabs-navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`rules-tab-button ${activeTab === tab.id ? 'active' : ''} ${tab.id === tabs[0].id ? 'first-tab' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.icon && <span className="rules-tab-icon">{tab.icon}</span>}
            <span className="rules-tab-label">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Subtabs (if available) */}
      {hasSubtabs && (
        <div className="rules-subtabs-navigation">
          {activeTabData.subtabs.map(subtab => (
            <button
              key={subtab.id}
              className={`rules-subtab-button ${activeSubtab === subtab.id ? 'active' : ''}`}
              onClick={() => handleSubtabChange(subtab.id)}
            >
              {subtab.icon && <span className="rules-subtab-icon">{subtab.icon}</span>}
              <span className="rules-subtab-label">{subtab.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Tab content */}
      <div className="rules-tab-content">
        {/* Flavor text (if available) */}
        {contentToShow?.flavorText && (
          <div className="rules-tab-flavor-text">
            <p>{contentToShow.flavorText}</p>
          </div>
        )}

        {/* Content sections */}
        <div className="rules-tab-sections">
          {contentToShow?.sections?.map((section, index) => (
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
        {contentToShow?.tables?.map((table, index) => (
          <div key={index} className="rules-tab-table-container">
            <h3 className="rules-tab-table-title">{table.title}</h3>
            {table.description && <p className="rules-tab-table-description">{table.description}</p>}
            <div className="rules-tab-table-wrapper">
              <table className="rules-tab-table">
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
      </div>
    </div>
  );
};

export default RulesTabs;
