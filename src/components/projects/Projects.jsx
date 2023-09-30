import React from 'react'
import Project from '../project/Project'
import './projects.scss'
import data from '../../data'
import { useRef } from 'react'
import { useEffect } from 'react'
function Projects() {

  const projectRef = useRef(null)
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
  },[projectRef,appearOptions])

  return (
    <div id="projects" className="p">
        
        <div className="p_texts fade-in">
            <h1 className="p_title">Projects</h1>
            <p className="p_desc">My personal & academic 
            projects</p>
        </div>
        <div id = "p_projectlist" ref={projectRef} className="p_projectlist fade-in">
            {data.map((project) => (
                 <Project  className="project_item" githubLink={project.githubLink} title={project.title} desc={project.desc} img={project.img} liveLink={project.liveLink} tech={project.tech}  />
            ))}
           
           
        </div>
    </div>
  )
}

export default Projects