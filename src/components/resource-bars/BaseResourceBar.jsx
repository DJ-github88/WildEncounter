import React, { useEffect, useRef } from 'react';
import './BaseResourceBar.css';

/**
 * BaseResourceBar - Foundation component for all resource bars
 * Provides common functionality like animations, interactions, and styling
 */
const BaseResourceBar = ({ 
  children, 
  className = '', 
  config, 
  state, 
  onChange, 
  interactive = true,
  size = 'medium',
  animationTrigger = null 
}) => {
  const containerRef = useRef(null);
  const prevStateRef = useRef(state);

  // Handle animations when state changes
  useEffect(() => {
    if (containerRef.current && prevStateRef.current !== state) {
      const container = containerRef.current;
      
      // Add animation class
      container.classList.add('resource-animating');
      
      // Remove animation class after animation completes
      const timeout = setTimeout(() => {
        container.classList.remove('resource-animating');
      }, 500);
      
      prevStateRef.current = state;
      
      return () => clearTimeout(timeout);
    }
  }, [state, animationTrigger]);

  // Handle click interactions
  const handleClick = (event) => {
    if (!interactive) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;
    const percentX = clickX / rect.width;
    const percentY = clickY / rect.height;
    
    // Pass click information to parent for handling
    if (onChange) {
      onChange({
        type: 'click',
        position: { x: percentX, y: percentY },
        event
      });
    }
  };

  // Handle keyboard interactions
  const handleKeyDown = (event) => {
    if (!interactive) return;
    
    let handled = false;
    
    switch (event.key) {
      case 'ArrowUp':
      case '+':
        if (onChange) {
          onChange({ type: 'increment' });
          handled = true;
        }
        break;
      case 'ArrowDown':
      case '-':
        if (onChange) {
          onChange({ type: 'decrement' });
          handled = true;
        }
        break;
      case 'Home':
        if (onChange) {
          onChange({ type: 'reset' });
          handled = true;
        }
        break;
      case 'End':
        if (onChange) {
          onChange({ type: 'maximize' });
          handled = true;
        }
        break;
      case ' ':
      case 'Enter':
        if (onChange) {
          onChange({ type: 'activate' });
          handled = true;
        }
        break;
    }
    
    if (handled) {
      event.preventDefault();
    }
  };

  const baseClasses = [
    'base-resource-bar',
    `size-${size}`,
    config?.resourceType ? `type-${config.resourceType}` : '',
    interactive ? 'interactive' : 'readonly',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={baseClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={interactive ? 0 : -1}
      role={interactive ? 'slider' : 'progressbar'}
      aria-label={config?.name || 'Resource Bar'}
      style={{
        '--resource-color': config?.color || '#8b4513',
        '--resource-bg': config?.backgroundColor || '#f4f1e8'
      }}
    >
      {children}
    </div>
  );
};

export default BaseResourceBar;
