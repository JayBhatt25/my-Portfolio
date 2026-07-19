import '../artifact-detail.scss'
import ArtifactFieldBlock from '../ArtifactFieldBlock'

function DefaultArtifactDetail({ artifact }) {
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
        <>
            <h1 className="artifact_detail_title animated-title artifacts-title fade-in">{artifact.title}</h1>

            {sections
                .filter((s) => !s.optional || (s.value && (Array.isArray(s.value) ? s.value.length > 0 : true)))
                .map((s) => (
                    <ArtifactFieldBlock key={s.label || s.type} label={s.label} type={s.type} value={s.value} />
                ))}
        </>
    );
}

export default DefaultArtifactDetail;
