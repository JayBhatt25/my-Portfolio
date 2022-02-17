import React from 'react'
import './project.scss'
function Project({title,img, link, tech}) {
  return (
    <div className="pr">

        <div className="pr_browser">
            {/* <div className="pr_circle">
            </div>
            <div className="pr_circle"></div> */}
            <div className="pr_title">
              <h6>{title}</h6>
            </div>
            
        </div>
        <a target="_blank" rel="noreferrer" href={link}>
            <img src={img} alt='' className="pr_img"></img>
        </a>
        <div className="pr_tech">
          <p>{tech}
          </p>
          {link ? ( <a href={link}>Try it out! </a>): (<div> </div>)}
         
        </div>
    </div>
  )
}

export default Project