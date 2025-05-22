import { Link } from 'react-router-dom';
import './HomePage.css';
import BackgroundAnimation from '../components/layout/BackgroundAnimation';

const HomePage = () => {
  return (
    <div className="home-page">
      <BackgroundAnimation />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the TTRPG Compendium</h1>
          <p className="hero-subtitle">
            Explore our custom tabletop role-playing game system with unique classes,
            mechanics, and talent trees inspired by classic RPGs.
          </p>
          <div className="hero-buttons">
            <Link to="/rules" className="btn btn-primary">Explore Rules</Link>
            <Link to="/classes" className="btn btn-secondary">Browse Classes</Link>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Begin Your Adventure?</h2>
          <p className="cta-description">
            Dive into our comprehensive documentation and start building your character today.
          </p>
          <Link to="/paths" className="btn btn-accent">Discover Backgrounds</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
