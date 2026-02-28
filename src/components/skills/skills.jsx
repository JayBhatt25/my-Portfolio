import React, { useState, useMemo, useEffect } from 'react'
import './skills.scss'
import '../shared/animated-titles.scss'
import skillsData from '../../skillsData'
import SkillItem from '../skill-item-component/skill-item'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function Skills() {
    const [activeCategory, setActiveCategory] = useState("web");
    
    const [setElements] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in, .skill_item');
        setElements(Array.from(elements));
    }, [setElements, activeCategory]);

    const categories = [
        { id: 'languages', label: 'Languages' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'databases', label: 'Databases' }
    ];

    const filteredSkills = useMemo(() => {
        return skillsData.filter(skill => skill.categories.includes(activeCategory));
    }, [activeCategory]);

    return (
        <div id='skills' className="skills">
            <h1 className="skills_title animated-title skills-title fade-in">SKILLS</h1>
            
            <div className="skills_container fade-in">
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

                <div className="skills_grid">
                    {filteredSkills.map((skill) => (
                        <SkillItem 
                            key={skill.id} 
                            skillName={skill.skillName} 
                            img={skill.img} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
