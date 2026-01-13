import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header glass ${scrolled ? 'sticky' : ''}`} style={{
            padding: scrolled ? '1.5rem 9%' : '2rem 9%',
            transition: '0.3s'
        }}>
            <a href="#home" className="logo">portfolio</a>

            <div id="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </div>

            <nav className={`navbar ${isOpen ? 'active' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className={activeSection === link.href.slice(1) ? 'active' : ''}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }
        .logo {
          font-size: 2.5rem;
          color: var(--text-color);
          font-weight: 700;
          letter-spacing: 1px;
        }
        #menu-icon {
          display: none;
          cursor: pointer;
          color: var(--text-color);
        }
        .navbar a {
          font-size: 1.7rem;
          color: var(--text-color);
          margin-left: 4rem;
          font-weight: 500;
          transition: 0.3s;
          position: relative;
        }
        .navbar a:hover,
        .navbar a.active {
          color: var(--main-color);
        }
        .navbar a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--main-color);
        }

        @media (max-width: 768px) {
          #menu-icon {
            display: block;
          }
          .navbar {
            position: absolute;
            top: 100%;
            left: ${isOpen ? '0' : '-100%'};
            width: 100%;
            padding: 2rem 3%;
            background: var(--second-bg-color);
            transition: 0.4s ease;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            border-bottom: 1px solid var(--glass-border);
          }
          .navbar.active {
            left: 0;
          }
          .navbar a {
            margin-left: 0;
            font-size: 2rem;
          }
        }
      `}</style>
        </header>
    );
};

export default Navbar;
