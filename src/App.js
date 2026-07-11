
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav'
import Home from './components/Home/Home';
import ArtifactsGallery from './components/artifacts/ArtifactsGallery';
import ArtifactDetail from './components/artifact-detail/ArtifactDetail';
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div className={`App ${state.darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artifacts" element={<ArtifactsGallery />} />
          <Route path="/artifacts/:slug" element={<ArtifactDetail />} />
        </Routes>
    </div>
  );
}

export default App;
