import React, { useState } from 'react';
import './RulesNavigation.css';

const RulesNavigation = ({ 
  categories, 
  activeCategory, 
  activeSubcategory, 
  onCategoryChange, 
  onSubcategoryChange 
}) => {
  const [expandedCategories, setExpandedCategories] = useState({
    [activeCategory]: true
  });

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleCategoryClick = (categoryId) => {
    toggleCategory(categoryId);
    onCategoryChange(categoryId);
  };

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    onCategoryChange(categoryId);
    onSubcategoryChange(subcategoryId);
  };

  return (
    <div className="rules-navigation">
      <div className="rules-navigation-header">
        <div className="rules-navigation-title">Game Rules</div>
        <div className="rules-navigation-subtitle">Navigation</div>
      </div>
      
      <nav className="rules-navigation-menu">
        <ul className="rules-categories">
          {categories.map(category => (
            <li 
              key={category.id} 
              className={`rules-category ${activeCategory === category.id ? 'active' : ''}`}
            >
              <div 
                className="rules-category-header"
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="rules-category-icon">{category.icon}</span>
                <span className="rules-category-name">{category.name}</span>
                {category.subcategories && category.subcategories.length > 0 && (
                  <span className="rules-category-toggle">
                    {expandedCategories[category.id] ? '−' : '+'}
                  </span>
                )}
              </div>
              
              {category.subcategories && category.subcategories.length > 0 && expandedCategories[category.id] && (
                <ul className="rules-subcategories">
                  {category.subcategories.map(subcategory => (
                    <li 
                      key={subcategory.id} 
                      className={`rules-subcategory ${activeSubcategory === subcategory.id ? 'active' : ''}`}
                      onClick={() => handleSubcategoryClick(category.id, subcategory.id)}
                    >
                      <span className="rules-subcategory-icon">{subcategory.icon || '•'}</span>
                      <span className="rules-subcategory-name">{subcategory.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="rules-navigation-footer">
        <div className="quick-links">
          <div className="quick-links-title">Quick Links</div>
          <ul className="quick-links-list">
            <li onClick={() => handleSubcategoryClick('combat', 'actionpoints')}>Action Points</li>
            <li onClick={() => handleSubcategoryClick('character', 'attributes')}>Attributes</li>
            <li onClick={() => handleSubcategoryClick('combat', 'conditions')}>Conditions</li>
            <li onClick={() => handleSubcategoryClick('equipment', 'inventory')}>Inventory</li>
            <li onClick={() => handleSubcategoryClick('magic', 'spellcasting')}>Spellcasting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesNavigation;
