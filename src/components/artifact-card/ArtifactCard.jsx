import { Link } from 'react-router-dom'
import './artifact-card.scss'

function ArtifactCard({ slug, title, thumbnail, introduction, categories }) {
    const excerpt = introduction && introduction.length > 120
        ? introduction.slice(0, 120) + '…'
        : introduction;

    const tags = (categories || []).filter((c) => c !== 'all');

    return (
        <Link to={`/artifacts/${slug}`} className="artifact_card">
            {thumbnail && (
                <img loading='lazy' src={thumbnail} alt={title} className="artifact_card_img" />
            )}
            <h3 className="artifact_card_title">{title}</h3>
            <p className="artifact_card_excerpt">{excerpt}</p>
            {tags.length > 0 && (
                <div className="artifact_card_tags">
                    {tags.map((tag) => (
                        <span key={tag} className="artifact_card_tag">{tag}</span>
                    ))}
                </div>
            )}
        </Link>
    )
}

export default ArtifactCard;
