import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classGuides from '../data/class-guides';
import '../styles/GuideNavigation.css';

const ClassGuideDetailPage = () => {
  const { classId } = useParams();
  const GuideComponent = classGuides[classId];

  if (!GuideComponent) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>Guide Not Found</h2>
          <p>Sorry, we couldn't find a guide for the class "{classId}".</p>
          <p>This guide may still be in development. Please check back later!</p>
          <Link to="/guides" className="button">Back to All Guides</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="guide-navigation">
        <Link to="/guides" className="back-button">← All Class Guides</Link>
      </div>
      <GuideComponent />
    </div>
  );
};

export default ClassGuideDetailPage;
