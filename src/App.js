
import './App.css';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Timeline from './components/timeline/Timeline';
import Navigation from './components/Navigation/Nav'
import Skills from './components/skills/skills'

function App() {

  

  return (
    <div className="App">
        <Navigation />
        <Intro />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
    </div>
  );
}

export default App;
