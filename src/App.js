
import './App.css';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Timeline from './components/timeline/Timeline';
import Navigation from './components/Navigation/Nav'

function App() {

  

  return (
    <div className="App">
        <Navigation />
        <Intro />
        <Projects />
        <Timeline />
        <Contact />
    </div>
  );
}

export default App;
