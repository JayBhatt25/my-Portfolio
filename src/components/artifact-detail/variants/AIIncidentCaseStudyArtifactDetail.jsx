import '../artifact-detail.scss'
import './ai-incident-case-study-artifact-detail.scss'
import ArtifactFieldBlock from '../ArtifactFieldBlock'

const ISSUE_MODIFIERS = {
    'Issue 1': 'issue-1',
    'Issue 2': 'issue-2',
    'Issue 3': 'issue-3',
};

function AIIncidentCaseStudyArtifactDetail({ artifact }) {
    const sections = [
        { label: 'Introduction', value: artifact.introduction, type: 'text' },
        { label: 'Objective', value: artifact.objective, type: 'list' },
        { label: 'Process', value: artifact.process, type: 'list' },
        { label: 'Tools and Technologies Used', value: artifact.toolsAndTechnologies, type: 'chips' },
        { label: 'Value Proposition', value: artifact.valueProposition, type: 'text' },
        { label: 'Unique Value', value: artifact.uniqueValue, type: 'text' },
        { label: 'Relevance', value: artifact.relevance, type: 'text' },
        { label: 'Sources', value: artifact.references, type: 'links' },
    ];

    return (
        <>
            <h1 className="artifact_detail_title animated-title artifacts-title fade-in">{artifact.title}</h1>

            <ArtifactFieldBlock label={sections[0].label} type={sections[0].type} value={sections[0].value} />

            <section className="artifact_field aics-summary fade-in">
                <h2 className="artifact_field_label">Incident Summary</h2>
                <div className="aics-summary_callout">
                    <p className="aics-callout_text">{artifact.summary}</p>
                </div>
            </section>

            {sections.slice(1, 4).map((s) => (
                <ArtifactFieldBlock key={s.label} label={s.label} type={s.type} value={s.value} />
            ))}

            <section className="artifact_field aics-issues fade-in">
                <h2 className="artifact_field_label">Critical Analysis</h2>

                <div className="aics-issues_grid">
                    {artifact.ethicalIssues.map((issue) => (
                        <div className={`aics-card aics-card--${ISSUE_MODIFIERS[issue.tag]}`} key={issue.tag}>
                            <span className="aics-card_tag">{issue.tag}</span>
                            <h3 className="aics-card_title">{issue.title}</h3>

                            <h4 className="aics-card_block-heading">Why This Issue</h4>
                            <p className="aics-card_text">{issue.whyChosen}</p>

                            <h4 className="aics-card_block-heading">Thought Process &amp; Implications</h4>
                            <p className="aics-card_text">{issue.thoughtProcess}</p>

                            <div className="aics-card_highlight">
                                <h4 className="aics-card_block-heading">Proposed Mitigation</h4>
                                <p className="aics-card_text">{issue.mitigation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {sections.slice(4, 7).map((s) => (
                <ArtifactFieldBlock key={s.label} label={s.label} type={s.type} value={s.value} />
            ))}

            <section className="artifact_field aics-reflection fade-in">
                <h2 className="artifact_field_label">Reflection on Critical Thinking</h2>
                <div className="aics-reflection_callout">
                    <p className="aics-callout_text">{artifact.reflection}</p>
                </div>
            </section>

            <ArtifactFieldBlock label={sections[7].label} type={sections[7].type} value={sections[7].value} />
        </>
    );
}

export default AIIncidentCaseStudyArtifactDetail;
