import React from 'react'
import Project from '../project/Project'
import './projects.scss'
import data from '../../data'
function Projects() {
  return (
    <div className="p">
        
        <div className="p_texts">
            <h1 className="p_title">Projects</h1>
            <p className="p_desc">Here is a list of personal & academic 
            projects that i have created. </p>
        </div>
        <div className="p_projectlist">
            {data.map((project) => (
                 <Project img={project.img} link={project.link} />
            ))}
           
           
        </div>
    </div>
  )
}

export default Projects