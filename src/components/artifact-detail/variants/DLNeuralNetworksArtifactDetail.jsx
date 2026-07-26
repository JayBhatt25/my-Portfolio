import '../artifact-detail.scss'
import './dl-neural-networks-artifact-detail.scss'
import ArtifactFieldBlock from '../ArtifactFieldBlock'

const ARCH_MODIFIERS = {
    ANN: 'ann',
    CNN: 'cnn',
    RNN: 'rnn',
    GAN: 'gan',
};

function DLNeuralNetworksArtifactDetail({ artifact }) {
    const sections = [
        { label: 'Introduction', value: artifact.introduction, type: 'text' },
        { label: 'Description', value: artifact.description, type: 'text' },
        { label: 'Objective', value: artifact.objective, type: 'list' },
        { label: 'Process', value: artifact.process, type: 'list' },
        { label: 'Tools and Technologies Used', value: artifact.toolsAndTechnologies, type: 'chips' },
        { label: 'Value Proposition', value: artifact.valueProposition, type: 'text' },
        { label: 'Unique Value', value: artifact.uniqueValue, type: 'text' },
        { label: 'Relevance', value: artifact.relevance, type: 'text' },
        { label: 'References', value: artifact.references, type: 'links' },
    ];

    return (
        <>
            <h1 className="artifact_detail_title animated-title artifacts-title fade-in">{artifact.title}</h1>

            {sections.map((s) => (
                <ArtifactFieldBlock key={s.label} label={s.label} type={s.type} value={s.value} />
            ))}

            <section className="artifact_field dlnn-architectures fade-in">
                <h2 className="artifact_field_label">Neural Network Architectures</h2>

                <div className="dlnn-architectures_grid">
                    {artifact.architectures.map((arch) => (
                        <div className={`dlnn-arch-card dlnn-arch-card--${ARCH_MODIFIERS[arch.tag]}`} key={arch.tag}>
                            <span className="dlnn-arch-card_tag">{arch.tag}</span>
                            <h3 className="dlnn-arch-card_title">{arch.name}</h3>
                            <p className="dlnn-arch-card_text">{arch.description}</p>

                            <h4 className="dlnn-arch-card_block-heading">How It Works</h4>
                            <p className="dlnn-arch-card_text">{arch.howItWorks}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="artifact_field dlnn-activations fade-in">
                <h2 className="artifact_field_label">Activation Functions</h2>
                <p className="artifact_field_text">{artifact.activationFunctionsIntro}</p>

                <div className="dlnn-activation_row">
                    {artifact.activationFunctions.map((fn) => (
                        <div className="dlnn-activation-card" key={fn.name}>
                            <h4 className="dlnn-activation-card_title">{fn.name}</h4>
                            <p className="dlnn-activation-card_text">{fn.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="artifact_field dlnn-ethics fade-in">
                <h2 className="artifact_field_label">Ethical Considerations</h2>
                <div className="dlnn-ethics_callout">
                    <p className="dlnn-ethics_text">{artifact.ethicalConsiderations}</p>
                </div>
            </section>
        </>
    );
}

export default DLNeuralNetworksArtifactDetail;
