

import React, { useEffect, useContext, useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import ScrollLink from './ScrollLink'
import './nav.scss'
import { ThemeContext } from '../../context'

function Nav(){
    const { state, dispatch } = useContext(ThemeContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isMenuOpen) return;

            const isMobile = window.innerWidth <= 592;
            const isDesktopScrolled = window.innerWidth > 592 && isScrolled;

            if (!isMobile && !isDesktopScrolled) return;

            if (navRef.current && !navRef.current.contains(event.target) &&
                toggleRef.current && !toggleRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isScrolled]);

    useEffect(() => {
        const handleScroll = () => {
            const introSection = document.querySelector('.index');
            const isDesktop = window.innerWidth > 592;

            if (introSection) {
                const introBottom = introSection.offsetTop + introSection.offsetHeight;
                const scrollPosition = window.scrollY;

                if (isDesktop) {
                    setIsScrolled(scrollPosition > introBottom - 100);
                } else {
                    setIsScrolled(false);
                }
            } else if (isDesktop) {
                setIsScrolled(window.scrollY > 100);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return(
        <header className={`primary-header ${state.darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
            <button
                ref={toggleRef}
                aria-controls='primary-nav'
                aria-expanded={isMenuOpen}
                className='mobile-nav-toggle'
                onClick={toggleMenu}
                style={{ pointerEvents: 'auto', zIndex: 1001 }}
            >
            </button>
            <nav>
                <ul
                    id="primary-nav"
                    ref={navRef}
                    className="primary-nav flex"
                    data-visible={isMenuOpen}
                >
                    <button
                        className="nav-close-button"
                        onClick={closeMenu}
                        aria-label="Close navigation"
                    >
                        ✕
                    </button>
                    <li className="active nav-item">
                        <ScrollLink to="index" className='nav-links' onClick={closeMenu}>
                            Home
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/artifacts"
                            className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Artifacts
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="projects" className='nav-links' onClick={closeMenu}>
                            Projects
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="certifications" className='nav-links' onClick={closeMenu}>
                            Certifications
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="skills" className='nav-links' onClick={closeMenu}>
                            Skills
                        </ScrollLink>
                    </li>
                    <li className="nav-item small-font">
                        <ScrollLink to="timeline" className='nav-links' onClick={closeMenu}>
                           <span>Education & Exp</span>
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="contact" className='nav-links' onClick={closeMenu}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </nav>
            <button
                className="theme-toggle"
                onClick={() => dispatch({ type: "TOGGLE" })}
                aria-label="Toggle dark mode"
                style={{ pointerEvents: 'auto', zIndex: 1000 }}
            >
                {state.darkMode ? '☀️' : '🌙'}
            </button>
        </header>
    )
}

export default Nav
