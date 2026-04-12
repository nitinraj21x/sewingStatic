import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-brand-title">The Sewing Circle</h3>
          <p className="footer-brand-subtitle">Weaving connections, one thread at a time</p>
        </div>
        
        <div className="footer-social">
          <span className="footer-follow-label">Follow us on :</span>
          <a href="https://www.linkedin.com/company/sewing-circle-llc/" className="footer-social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="footer-copyright">
          © 2024 The Sewing Circle. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;