
import React, { useEffect, useContext, useState } from 'react'
import {Link} from 'react-scroll'
import './nav.scss'
import { ThemeContext } from '../../context'

function Nav(){
    const { state, dispatch } = useContext(ThemeContext);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const primaryNav = document.querySelector(".primary-nav");
        const navtoggle = document.querySelector(".mobile-nav-toggle");

        const handleToggle = () => {
            const visibility = primaryNav.getAttribute('data-visible')
            if(visibility === 'false'){
                primaryNav.setAttribute('data-visible', 'true')
                navtoggle.setAttribute('aria-expanded','true')
            } else {
                primaryNav.setAttribute('data-visible', 'false')
                navtoggle.setAttribute('aria-expanded','false')
            }
        };

        const handleClickOutside = (event) => {
            // Check if navigation is open
            const isNavOpen = primaryNav.getAttribute('data-visible') === 'true';
            if (!isNavOpen) return;

            // Check if we're in mobile layout or desktop scrolled state (when hamburger is visible)
            const isMobile = window.innerWidth <= 592;
            const isDesktopScrolled = window.innerWidth > 592 && isScrolled;
            
            if (!isMobile && !isDesktopScrolled) return;

            // Check if click is outside navigation and hamburger button
            const isClickOutsideNav = !primaryNav.contains(event.target);
            const isClickOutsideToggle = !navtoggle.contains(event.target);
            
            if (isClickOutsideNav && isClickOutsideToggle) {
                primaryNav.setAttribute('data-visible', 'false');
                navtoggle.setAttribute('aria-expanded', 'false');
            }
        };

        if (navtoggle && primaryNav) {
            navtoggle.addEventListener('click', handleToggle);
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            if (navtoggle) {
                navtoggle.removeEventListener('click', handleToggle);
            }
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isScrolled])

    useEffect(() => {
        const handleScroll = () => {
            const introSection = document.querySelector('.index');
            if (introSection) {
                const introBottom = introSection.offsetTop + introSection.offsetHeight;
                const scrollPosition = window.scrollY;
                
                // Only apply scroll effect on desktop (screen width > 37em = 592px)
                const isDesktop = window.innerWidth > 592;
                
                console.log('Scroll Debug:', {
                    introBottom,
                    scrollPosition,
                    isDesktop,
                    shouldScroll: scrollPosition > introBottom - 100
                });
                
                if (isDesktop) {
                    setIsScrolled(scrollPosition > introBottom - 100);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // Handle window resize

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [])
    
    // Debug log for classes
    console.log('Header classes:', `primary-header ${state.darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`, 'isScrolled:', isScrolled);
    
    return(
        <header className={`primary-header ${state.darkMode ? 'dark' : 'light'} ${isScrolled ? 'scrolled' : ''}`}>
            <button 
                aria-controls='primary-nav' 
                aria-expanded='false' 
                className='mobile-nav-toggle'
                style={{ pointerEvents: 'auto', zIndex: 1001 }}
            >
                {/* <span className="sr-only">Toggle navigation</span> */}
            </button>
            <nav>
                <ul id="primary-nav" className="primary-nav flex" data-visible="false">
                    <button 
                        className="nav-close-button" 
                        onClick={() => {
                            const primaryNav = document.querySelector(".primary-nav");
                            const navtoggle = document.querySelector(".mobile-nav-toggle");
                            primaryNav.setAttribute('data-visible', 'false');
                            navtoggle.setAttribute('aria-expanded','false');
                        }}
                        aria-label="Close navigation"
                    >
                        ✕
                    </button>
                    <li className="active nav-item">
                    
                        <Link className='nav-links' activeClass="active"
                        to="index"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}
                        isDynamic={true}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects" className='nav-links' spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="certifications" className='nav-links' spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}>
                            Certifications
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="skills" className='nav-links' spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item small-font">
                        <Link className='nav-links' to="timeline" spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}>
                           <span>Education & Exp</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className='nav-links' to="contact" spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={500}
                        delay={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <button 
                className="theme-toggle" 
                onClick={() => {
                    console.log('Theme toggle clicked, current mode:', state.darkMode);
                    dispatch({ type: "TOGGLE" });
                }}
                aria-label="Toggle dark mode"
                style={{ pointerEvents: 'auto', zIndex: 1000 }}
            >
                {state.darkMode ? '☀️' : '🌙'}
            </button>
        </header>
    )

}

export default Nav