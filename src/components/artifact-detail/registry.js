import DefaultArtifactDetail from './variants/DefaultArtifactDetail';
import MLvsDLArtifactDetail from './variants/MLvsDLArtifactDetail';

const artifactDetailRegistry = {
    'resume-review-building-assistant': DefaultArtifactDetail,
    'ml-vs-deep-learning-suitability': MLvsDLArtifactDetail,
};

export default artifactDetailRegistry;
