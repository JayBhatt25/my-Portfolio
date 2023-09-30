
import React, { useEffect } from 'react'
import {Link} from 'react-scroll'
import './nav.scss'

function Nav(){
    
    useEffect(() => {
        const primaryNav = document.querySelector(".primary-nav");
        const navtoggle = document.querySelector(".mobile-nav-toggle");

        navtoggle.addEventListener('click', () => {
            const visibility = primaryNav.getAttribute('data-visible')
            if(visibility == 'false'){
                primaryNav.setAttribute('data-visible', 'true')
                navtoggle.setAttribute('aria-expanded','true')
            } else {
                primaryNav.setAttribute('data-visible', 'false')
                navtoggle.setAttribute('aria-expanded','false')
            }

        });
    })
    return(
        <header className="primary-header">
            <button aria-controls='primary-nav' 
            aria-expanded='false' 
            className='mobile-nav-toggle'><span className="sr-only"></span></button>
            <nav>
                <ul id="primary-nav" className="primary-nav flex" data-visible="false">
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
        </header>
    )

}

export default Nav