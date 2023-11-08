import Project from '../project/Project'
import './projects.scss'
import data from '../../data'
import React,{ useEffect, useState } from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link } from 'react-scroll';
function Projects() {

  const [projects, setProjects] = useState(data.slice(0, 3));
  const [showMoreIcon, setShowMoreIcon] = useState(true);
  const appearOptions = {
    threshold:0
  }
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    
    const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
      entries.forEach(entry => {
        if(!entry.isIntersecting){
          return;
        } else {
          entry.target.classList.add("appear")
          appearOnScroll.unobserve(entry.target)
        }
      })
    },appearOptions)

    faders.forEach(fader => {
      appearOnScroll.observe(fader)
    })
  },[showMoreIcon,projects,appearOptions])

  const handleMore = () => {
    
    if(projects.length === data.length) {
      setShowMoreIcon(true)
      setProjects(data.slice(0,3))
      return
    } else if(projects.length + 3 >= data.length){
      setShowMoreIcon(false)
      setProjects(data)
      return
    }

    setProjects(data.slice(0, projects.length + 3))
  }

  return (
    <div id="projects" className="p">
        
        <div className="p_texts fade-in">
            <h1 className="p_title">Projects</h1>
            <p className="p_desc">My personal & academic 
            projects</p>
        </div>
        <div id = "p_projectlist" className="p_projectlist fade-in">
            {projects.map((project) => (
                 <Project key={project.id}  className="project_item" githubLink={project.githubLink} title={project.title} desc={project.desc} img={project.img} liveLink={project.liveLink} tech={project.tech}  />
            ))}
        </div>
        {showMoreIcon ? <button className="seeMore-btn" onClick={handleMore}> <KeyboardDoubleArrowDownIcon sx={{fontSize: 30 }} /> </button>: 
        <Link
          to='projects'
          onClick={handleMore} smooth={true}
          hashSpy={true}
          duration={500}
          delay={250}
          isDynamic={true} className='seeLess-btn'>
          <KeyboardDoubleArrowUpIcon sx={{fontSize: 30 }} />
          </Link>}
    </div>
  )
}

export default Projects