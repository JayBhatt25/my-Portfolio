import React, { useEffect } from 'react'
import './skill-item.scss'

function SkillItem({skillName,img,categories}){


    return (
        <div className="skill_item">
            <img loading='lazy' alt={skillName} src={img} className="skill_item_image"></img>
            <h3>{skillName}</h3>
        </div>
    )
}

export default SkillItem;