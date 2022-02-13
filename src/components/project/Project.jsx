import React from 'react'
import './project.scss'

function Project({img, link}) {
  return (
    <div className="pr">

        <div className="pr_browser">
            <div className="pr_circle"></div>
            <div className="pr_circle"></div>
        </div>
        <a target="_blank" href={link}>
            <img src={img} alt='' className="pr_img"></img>
        </a>
    
    </div>
  )
}

export default Project