import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './artifact-detail.scss'
import '../shared/animated-titles.scss'
import artifactsData from '../../artifactsData'
import artifactDetailRegistry from './registry'
import DefaultArtifactDetail from './variants/DefaultArtifactDetail'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function ArtifactDetail() {
    const { slug } = useParams();
    const artifact = artifactsData.find((a) => a.slug === slug);

    const [setElements] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        setElements(Array.from(elements));
    }, [setElements, slug]);

    if (!artifact) {
        return (
            <div className="artifact-detail not-found">
                <h1 className="animated-title artifacts-title">Artifact Not Found</h1>
                <p>The artifact you're looking for doesn't exist or may have been moved.</p>
                <Link to="/artifacts" className="back-link">← Back to Artifacts</Link>
            </div>
        );
    }

    const DetailComponent = artifactDetailRegistry[slug] || DefaultArtifactDetail;

    return (
        <div className="artifact-detail">
            <DetailComponent artifact={artifact} />

            <Link to="/artifacts" className="back-link">← Back to Artifacts</Link>
        </div>
    );
}

export default ArtifactDetail;
