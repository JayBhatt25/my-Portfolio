import '../artifact-detail.scss'
import './ml-vs-dl-artifact-detail.scss'
import ArtifactFieldBlock from '../ArtifactFieldBlock'

function MLvsDLArtifactDetail({ artifact }) {
    const sections = [
        { label: 'Introduction', value: artifact.introduction, type: 'text' },
        { label: 'Description', value: artifact.description, type: 'text' },
        { label: 'Objective', value: artifact.objective, type: 'text' },
        { label: 'Process', value: artifact.process, type: 'list' },
        { label: 'Tools and Technologies Used', value: artifact.toolsAndTechnologies, type: 'chips' },
        { label: 'Value Proposition', value: artifact.valueProposition, type: 'text' },
        { label: 'Unique Value', value: artifact.uniqueValue, type: 'text' },
        { label: 'Relevance', value: artifact.relevance, type: 'text' },
    ];

    return (
        <>
            <h1 className="artifact_detail_title animated-title artifacts-title fade-in">{artifact.title}</h1>

            {sections.map((s) => (
                <ArtifactFieldBlock key={s.label} label={s.label} type={s.type} value={s.value} />
            ))}

            <section className="artifact_field mldl-comparison fade-in">
                <h2 className="artifact_field_label">ML vs. DL in Practice</h2>

                <div className="mldl-comparison_grid">
                    {artifact.comparisonExamples.map((example) => {
                        const modifier = example.approach === 'Machine Learning' ? 'ml' : 'dl';
                        return (
                            <div className={`mldl-card mldl-card--${modifier}`} key={example.exampleTitle}>
                                <span className="mldl-card_label">{example.approach}</span>
                                <h3 className="mldl-card_title">{example.exampleTitle}</h3>

                                <h4 className="mldl-card_block-heading">Scenario</h4>
                                <p className="mldl-card_text">{example.scenario}</p>

                                <h4 className="mldl-card_block-heading">Why It Fits</h4>
                                <p className="mldl-card_text">{example.whyItFits}</p>

                                <div className="mldl-card_highlight">
                                    <h4 className="mldl-card_block-heading">Real-World Application</h4>
                                    <p className="mldl-card_text">{example.realWorldApplication}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default MLvsDLArtifactDetail;
