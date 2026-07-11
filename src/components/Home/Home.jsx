import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import Intro from '../intro/Intro';
import Timeline from '../timeline/Timeline';
import Certifications from '../Certifications/Certifications';
import Projects from '../projects/Projects';
import Skills from '../skills/skills';
import Contact from '../Contact/Contact';

function Home() {
    const location = useLocation();

    useEffect(() => {
        const target = location.state && location.state.scrollTo;
        if (target) {
            scroller.scrollTo(target, { smooth: true, duration: 500, delay: 100 });
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    return (
        <>
            <Intro />
            <Timeline />
            <Certifications />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}

export default Home;
