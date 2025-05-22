import React, { useState, useEffect, useRef } from 'react';
import './RulesSearch.css';

const RulesSearch = ({ 
  categories, 
  contentData, 
  onSearchResultClick 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.length >= 2) {
      setIsSearching(true);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };
  
  // Perform search when searchTerm changes
  useEffect(() => {
    if (searchTerm.length < 2) return;
    
    const timer = setTimeout(() => {
      const results = performSearch(searchTerm);
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, categories, contentData]);
  
  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Search function
  const performSearch = (term) => {
    const results = [];
    const lowerTerm = term.toLowerCase();
    
    // Search through all categories and their content
    categories.forEach(category => {
      // Check if category name matches
      if (category.name.toLowerCase().includes(lowerTerm)) {
        results.push({
          type: 'category',
          categoryId: category.id,
          subcategoryId: null,
          title: category.name,
          icon: category.icon,
          path: [category.name]
        });
      }
      
      // Check subcategories if they exist
      if (category.subcategories) {
        category.subcategories.forEach(subcategory => {
          // Check if subcategory name matches
          if (subcategory.name.toLowerCase().includes(lowerTerm)) {
            results.push({
              type: 'subcategory',
              categoryId: category.id,
              subcategoryId: subcategory.id,
              title: subcategory.name,
              icon: subcategory.icon || category.icon,
              path: [category.name, subcategory.name]
            });
          }
          
          // Check content in this subcategory
          const content = contentData[category.id]?.[subcategory.id] || {};
          
          // Search in sections
          if (content.sections) {
            content.sections.forEach(section => {
              if (section.title.toLowerCase().includes(lowerTerm) || 
                  (typeof section.content === 'string' && section.content.toLowerCase().includes(lowerTerm))) {
                results.push({
                  type: 'section',
                  categoryId: category.id,
                  subcategoryId: subcategory.id,
                  title: section.title,
                  icon: section.icon || subcategory.icon || category.icon,
                  path: [category.name, subcategory.name, section.title]
                });
              }
            });
          }
          
          // Search in tables
          if (content.tables) {
            content.tables.forEach(table => {
              if (table.title.toLowerCase().includes(lowerTerm)) {
                results.push({
                  type: 'table',
                  categoryId: category.id,
                  subcategoryId: subcategory.id,
                  title: table.title,
                  icon: '📊',
                  path: [category.name, subcategory.name, table.title]
                });
              }
            });
          }
        });
      }
    });
    
    return results;
  };
  
  // Handle search result click
  const handleResultClick = (result) => {
    setShowResults(false);
    setSearchTerm('');
    onSearchResultClick(result.categoryId, result.subcategoryId);
  };
  
  return (
    <div className="rules-search" ref={searchRef}>
      <div className="rules-search-input-container">
        <input
          type="text"
          className="rules-search-input"
          placeholder="Search rules..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="rules-search-icon">🔍</span>
        {searchTerm && (
          <button 
            className="rules-search-clear" 
            onClick={() => setSearchTerm('')}
          >
            ×
          </button>
        )}
      </div>
      
      {showResults && (
        <div className="rules-search-results">
          {isSearching ? (
            <div className="rules-search-loading">Searching...</div>
          ) : searchResults.length > 0 ? (
            <ul className="rules-search-results-list">
              {searchResults.map((result, index) => (
                <li 
                  key={index} 
                  className="rules-search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <span className="rules-search-result-icon">{result.icon || '📜'}</span>
                  <div className="rules-search-result-content">
                    <div className="rules-search-result-title">{result.title}</div>
                    <div className="rules-search-result-path">
                      {result.path.join(' › ')}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : searchTerm.length >= 2 ? (
            <div className="rules-search-no-results">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RulesSearch;
