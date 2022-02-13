
import './App.css';
import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';
import ReactSnapScroll from 'react-snap-scroll';

function App() {
  return (
    <div className="App">
        <Intro />
        <Projects />
    </div>
  );
}

export default App;
