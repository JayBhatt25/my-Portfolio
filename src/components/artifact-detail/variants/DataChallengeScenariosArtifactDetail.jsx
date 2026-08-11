import '../artifact-detail.scss'
import './data-challenge-scenarios-artifact-detail.scss'
import ArtifactFieldBlock from '../ArtifactFieldBlock'

const SCENARIO_MODIFIERS = {
    'Missing Data': 'missing-data',
    'Data Drift': 'drift',
    'Data Imbalance': 'imbalance',
};

function DataChallengeScenariosArtifactDetail({ artifact }) {
    const sections = [
        { label: 'Introduction', value: artifact.introduction, type: 'text' },
        { label: 'Description', value: artifact.description, type: 'text' },
        { label: 'Objective', value: artifact.objective, type: 'list' },
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

            <section className="artifact_field dcs-scenarios fade-in">
                <h2 className="artifact_field_label">Data Challenge Scenarios</h2>

                <div className="dcs-scenarios_grid">
                    {artifact.scenarios.map((scenario) => (
                        <div className={`dcs-card dcs-card--${SCENARIO_MODIFIERS[scenario.tag]}`} key={scenario.tag}>
                            <span className="dcs-card_tag">{scenario.tag}</span>
                            <h3 className="dcs-card_title">{scenario.title}</h3>
                            <p className="dcs-card_text">{scenario.challenge}</p>

                            <h4 className="dcs-card_block-heading">Approaches Discussed</h4>
                            <ul className="dcs-card_techniques">
                                {scenario.techniques.map((tech, i) => <li key={i}>{tech}</li>)}
                            </ul>

                            <div className="dcs-card_highlight">
                                <h4 className="dcs-card_block-heading">Key Takeaway</h4>
                                <p className="dcs-card_text">{scenario.keyTakeaway}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default DataChallengeScenariosArtifactDetail;
