import React from 'react';
import './EssenceOfHumanity.css';

const EssenceOfHumanity = ({ onClose }) => {
  return (
    <div className="essence-overlay">
      <div className="essence-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="essence-title">Essence of Humanity</h2>

        <div className="essence-content">
          <p className="essence-description">
            The Essence of Humanity represents your character's innate potential and accumulated experience,
            independent of traditional level progression. It is the measure of your character's growth in
            mastery, wisdom, and connection to their talents.
          </p>

          <div className="essence-explanation">
            <h3>About Essence of Humanity</h3>
            <p>
              The Essence of Humanity represents your character's innate potential and accumulated experience.
              Unlike traditional level-based systems, your talents are not restricted by character level.
            </p>
            <p>
              As you gain experience and grow in your journey, you accumulate Essence points that can be
              spent on talents of your choosing. These points represent your character's personal growth
              and mastery of their abilities.
            </p>
            <p>
              The number of available points determines how many talents you can unlock and how far you
              can progress in your talent trees. Higher-tier talents require a path through lower-tier
              talents, representing the natural progression of skill development.
            </p>
          </div>

          <div className="essence-note">
            <h3>How to Use Talent Points</h3>
            <p>
              Enter the number of talent points you have available in the input field. These points
              represent your character's Essence of Humanity.
            </p>
            <p>
              Spend these points by clicking on talents in the talent tree. Each talent has a specific
              cost (usually 1 point per rank). Some talents have multiple ranks, allowing you to invest
              more points for greater benefits.
            </p>
            <p>
              Higher-tier talents require you to first invest in connected lower-tier talents, creating
              a natural progression path that reflects your character's development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssenceOfHumanity;
