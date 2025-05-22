import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">TTRPG Compendium</h3>
            <p className="footer-description">
              A comprehensive guide to our custom TTRPG system, featuring unique classes, 
              mechanics, and talent trees inspired by classic RPGs.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/rules">Rules</a></li>
              <li><a href="/classes">Classes</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} TTRPG Compendium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
