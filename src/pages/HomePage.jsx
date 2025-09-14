import { Link } from 'react-router-dom';
import './HomePage.css';
import BackgroundAnimation from '../components/layout/BackgroundAnimation';

const HomePage = () => {
  return (
    <div className="home-page">
      <BackgroundAnimation />

      <section className="hero pf-ornate-frame">
        <div className="hero-content">
          <h1 className="hero-title pf-chapter-heading">Welcome to Mythrill</h1>
          <p className="hero-subtitle">
            Explore our custom tabletop role-playing game system with unique classes,
            mechanics, and talent trees inspired by classic RPGs.
          </p>
          <div className="hero-buttons">
            <Link to="/rules" className="btn btn-primary pf-button">Explore Rules</Link>
            <Link to="/classes" className="btn btn-secondary pf-button-secondary">Browse Classes</Link>
          </div>
        </div>
      </section>

      <section className="section cta pf-parchment">
        <div className="cta-content">
          <h2 className="cta-title pf-section-title">Ready to Begin Your Adventure?</h2>
          <p className="cta-description pf-subtitle">
            Dive into our comprehensive documentation and start building your character today.
          </p>
          <div className="pf-divider"></div>
          <Link to="/paths" className="btn btn-accent pf-button">Discover Backgrounds</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
