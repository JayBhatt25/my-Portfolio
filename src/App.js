
import './App.css';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="App">
        <Intro />
        <Projects />
        <Timeline />
        <Contact />
    </div>
  );
}

export default App;
