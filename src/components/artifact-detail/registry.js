import DefaultArtifactDetail from './variants/DefaultArtifactDetail';
import MLvsDLArtifactDetail from './variants/MLvsDLArtifactDetail';
import DLNeuralNetworksArtifactDetail from './variants/DLNeuralNetworksArtifactDetail';

const artifactDetailRegistry = {
    'resume-review-building-assistant': DefaultArtifactDetail,
    'ml-vs-deep-learning-suitability': MLvsDLArtifactDetail,
    'deep-learning-neural-networks-quiz': DLNeuralNetworksArtifactDetail,
};

export default artifactDetailRegistry;
