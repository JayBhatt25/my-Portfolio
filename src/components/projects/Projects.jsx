import Project from '../project/Project'
import './projects.scss'
import '../shared/animated-titles.scss'
import data from '../../data'
import React,{ useEffect, useState, useMemo } from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link } from 'react-scroll';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function Projects() {
  const [projectCount, setProjectCount] = useState(3);
  const [showMoreIcon, setShowMoreIcon] = useState(true);
  
  const [setElements] = useIntersectionObserver({ threshold: 0 });

  const projects = useMemo(() => data.slice(0, projectCount), [projectCount]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    setElements(Array.from(elements));
  }, [setElements, projects, showMoreIcon]);

  const handleMore = () => {
    if(projects.length === data.length) {
      setShowMoreIcon(true)
      setProjectCount(3)
    } else if(projects.length + 3 >= data.length){
      setShowMoreIcon(false)
      setProjectCount(data.length)
    } else {
      setProjectCount(prev => prev + 3)
    }
  }

  return (
    <div id="projects" className="p">
        <div className="p_texts fade-in">
            <h1 className="p_title animated-title projects-title">Projects</h1>
            <p className="p_desc">My personal & academic projects</p>
        </div>
        <div id = "p_projectlist" className="p_projectlist fade-in">
            {projects.map((project) => (
                 <Project 
                    key={project.id}  
                    className="project_item" 
                    githubLink={project.githubLink} 
                    title={project.title} 
                    desc={project.desc} 
                    img={project.img} 
                    liveLink={project.liveLink} 
                    tech={project.tech}  
                />
            ))}
        </div>
        {showMoreIcon ? (
          <button className="seeMore-btn" onClick={handleMore}> 
            <KeyboardDoubleArrowDownIcon sx={{fontSize: 30 }} /> 
          </button>
        ) : (
          <Link
            to='projects'
            onClick={handleMore} 
            smooth={true}
            hashSpy={true}
            duration={500}
            delay={250}
            isDynamic={true} 
            className='seeLess-btn'
          >
            <KeyboardDoubleArrowUpIcon sx={{fontSize: 30 }} />
          </Link>
        )}
    </div>
  )
}

export default Projects
