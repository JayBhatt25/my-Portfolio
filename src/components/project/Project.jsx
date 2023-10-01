import React from 'react'
import './project.scss'
function Project({title,img, liveLink, githubLink,desc, tech}) {
  return (
    <div className="pr">

        <div className="pr_browser">
            <div className="pr_title">
              <h6>{title}</h6>
            </div>
            
        </div>
        <a target="_blank" rel="noreferrer" href={liveLink? liveLink : githubLink}>
            <img loading='lazy' src={img} alt='' className="pr_img"></img>
        </a>
        <div className="pr_tech">
          <p>{desc}</p>
          <br/>
          <p>{tech}
          </p>
          {liveLink ? ( <a target="_blank" rel="noreferrer" href={liveLink}>Try it out! </a>): (<div> </div>)}
          {githubLink ? ( <a target="_blank" rel="noreferrer" href={githubLink}>View Github </a>): (<div> </div>)}
         
        </div>
    </div>
  )
}

export default Project