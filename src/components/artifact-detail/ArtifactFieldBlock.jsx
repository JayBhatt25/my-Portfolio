function ArtifactFieldBlock({ label, type, value }) {
    return (
        <section className="artifact_field fade-in">
            {label && <h2 className="artifact_field_label">{label}</h2>}
            {type === 'attachment' && (
                <div className="artifact_attachment">
                    {value.type === 'file' ? (
                        <a href={value.url} download target="_blank" rel="noreferrer">
                            <button className="download-btn">{value.label || 'Download'}</button>
                        </a>
                    ) : (
                        <a href={value.url} target="_blank" rel="noreferrer">
                            <button className="download-btn">{value.label || 'Open Link'} ↗</button>
                        </a>
                    )}
                </div>
            )}
            {type === 'text' && <p className="artifact_field_text">{value}</p>}
            {type === 'list' && (
                <ol className="artifact_field_list">
                    {value.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
            )}
            {type === 'chips' && (
                <div className="artifact_field_chips">
                    {value.map((tech, i) => <span key={i} className="artifact_chip">{tech}</span>)}
                </div>
            )}
            {type === 'links' && (
                <ul className="artifact_field_links">
                    {value.map((ref, i) => (
                        <li key={i}>
                            <a href={ref.url} target="_blank" rel="noreferrer">{ref.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default ArtifactFieldBlock;
