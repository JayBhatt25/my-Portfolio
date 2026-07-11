import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './artifact-detail.scss'
import '../shared/animated-titles.scss'
import artifactsData from '../../artifactsData'
import ArtifactFieldBlock from './ArtifactFieldBlock'
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

    const sections = [];

    if (artifact.attachment) {
        sections.push({
            label: null,
            value: artifact.attachment,
            type: 'attachment',
            optional: true,
        });
    }

    sections.push(
        { label: 'Introduction', value: artifact.introduction, type: 'text' },
        { label: 'Description', value: artifact.description, type: 'text' },
        { label: 'Objective', value: artifact.objective, type: 'text' },
        { label: 'Process', value: artifact.process, type: 'list' },
        { label: 'Tools and Technologies Used', value: artifact.toolsAndTechnologies, type: 'chips' },
        { label: 'Value Proposition', value: artifact.valueProposition, type: 'text' },
        { label: 'Unique Value', value: artifact.uniqueValue, type: 'text' },
        { label: 'Relevance', value: artifact.relevance, type: 'text' },
        { label: 'References', value: artifact.references, type: 'links', optional: true },
    );

    return (
        <div className="artifact-detail">
            <h1 className="artifact_detail_title animated-title artifacts-title fade-in">{artifact.title}</h1>

            {sections
                .filter((s) => !s.optional || (s.value && (Array.isArray(s.value) ? s.value.length > 0 : true)))
                .map((s) => (
                    <ArtifactFieldBlock key={s.label || s.type} label={s.label} type={s.type} value={s.value} />
                ))}

            <Link to="/artifacts" className="back-link">← Back to Artifacts</Link>
        </div>
    );
}

export default ArtifactDetail;
