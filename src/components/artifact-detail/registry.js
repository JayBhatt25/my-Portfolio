import DefaultArtifactDetail from './variants/DefaultArtifactDetail';
import MLvsDLArtifactDetail from './variants/MLvsDLArtifactDetail';
import DLNeuralNetworksArtifactDetail from './variants/DLNeuralNetworksArtifactDetail';
import DataChallengeScenariosArtifactDetail from './variants/DataChallengeScenariosArtifactDetail';

const artifactDetailRegistry = {
    'resume-review-building-assistant': DefaultArtifactDetail,
    'ml-vs-deep-learning-suitability': MLvsDLArtifactDetail,
    'deep-learning-neural-networks-quiz': DLNeuralNetworksArtifactDetail,
    'data-challenge-scenarios-ai-coach': DataChallengeScenariosArtifactDetail,
};

export default artifactDetailRegistry;
