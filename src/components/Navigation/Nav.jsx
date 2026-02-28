

import React, { useEffect, useContext, useState, useRef } from 'react'
import {Link} from 'react-scroll'
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
            if (introSection) {
                const introBottom = introSection.offsetTop + introSection.offsetHeight;
                const scrollPosition = window.scrollY;
                const isDesktop = window.innerWidth > 592;

                if (isDesktop) {
                    setIsScrolled(scrollPosition > introBottom - 100);
                } else {
                    setIsScrolled(false);
                }
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
                        <Link 
                            className='nav-links' 
                            activeClass="active"
                            to="index"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="projects" 
                            className='nav-links' 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            onClick={closeMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="certifications" 
                            className='nav-links' 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            onClick={closeMenu}
                        >
                            Certifications
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="skills" 
                            className='nav-links' 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            onClick={closeMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item small-font">
                        <Link 
                            className='nav-links' 
                            to="timeline" 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            onClick={closeMenu}
                        >
                           <span>Education & Exp</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className='nav-links' 
                            to="contact" 
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            duration={500}
                            delay={500}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
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