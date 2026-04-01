import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navigation Component
 * 
 * Provides the main navigation bar for the Sewing Circle website.
 * Features responsive design with mobile hamburger menu and smooth scrolling.
 * Updated with new navigation structure as requested.
 */
const Navigation = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links configuration - updated to match requested sections
  const navLinks = useMemo(() => [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Vision', href: '#vision' },
    { name: 'Future', href: '#future' },
    { name: 'Community', href: '#community' },
    { name: 'Events', href: '#events' },
    { name: 'Contact Us', href: '#contact' },
  ], []);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu handler
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Close mobile menu handler
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    // Fixed navigation bar with dynamic styling based on scroll state
    <nav 
      className={`navigation ${isScrolled ? 'scrolled' : 'transparent'}`}
    >
      <div className="navigation-container">
        {/* Logo/Brand */}
        <div className="navigation-brand">
          SEWING
          <div className="logo-container">
            <img 
              src="/src/image/logo/LogoSWTransparent.png" 
              alt="Sewing Circle Logo" 
              className="logo-main"
            />
          </div>
          <span className="light-text">CIRCLE</span>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="navigation-menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="navigation-link"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="mobile-menu-link"
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navigation;