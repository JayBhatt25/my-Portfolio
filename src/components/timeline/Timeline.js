import React from 'react'
import './timeline.scss'
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/univ.svg";
import timelineElements from "./timelineElements";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
function Timeline() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div className="tm" id='timeline'>
        <div className="tm_container">
                <h1 className="tm_title">Education & Exp</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                let isWorkIcon = element.icon === "work";
            

                return (
                    <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                    <h3 className="vt_title vertical-timeline-element-title">
                        {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5>
                    <ul className="description-points">
                        {element?.description.map((desc) => {
                            return (
                                <li><p>{desc}</p></li>
                            )
                        })}
                    </ul>
                    {element.gpa ? (<h5>{element.gpa}</h5>) : (<div></div>)}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
        
    </div>
  )
}

export default Timeline