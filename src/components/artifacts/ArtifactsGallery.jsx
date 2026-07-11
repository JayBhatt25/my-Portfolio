import { useState, useMemo, useEffect } from 'react'
import './artifacts-gallery.scss'
import '../shared/animated-titles.scss'
import artifactsData from '../../artifactsData'
import ArtifactCard from '../artifact-card/ArtifactCard'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function ArtifactsGallery() {
    const [activeCategory, setActiveCategory] = useState("all");

    const [setElements] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in, .artifact_card');
        setElements(Array.from(elements));
    }, [setElements, activeCategory]);

    const categories = useMemo(() => {
        const unique = new Set(
            artifactsData.flatMap((a) => a.categories.filter((c) => c !== 'all'))
        );
        return [{ id: 'all', label: 'All' }, ...[...unique].map((c) => ({ id: c, label: c }))];
    }, []);

    const filteredArtifacts = useMemo(() => {
        return activeCategory === 'all'
            ? artifactsData
            : artifactsData.filter((a) => a.categories.includes(activeCategory));
    }, [activeCategory]);

    return (
        <div id="artifacts-gallery" className="artifacts-gallery">
            <h1 className="artifacts_title animated-title artifacts-title fade-in">ARTIFACTS</h1>

            <div className="artifacts_container fade-in">
                <nav className="categories_nav">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category_tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </nav>

                <div className="artifacts_grid">
                    {filteredArtifacts.map((artifact) => (
                        <ArtifactCard
                            key={artifact.id}
                            slug={artifact.slug}
                            title={artifact.title}
                            thumbnail={artifact.thumbnail}
                            introduction={artifact.introduction}
                            categories={artifact.categories}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArtifactsGallery;
