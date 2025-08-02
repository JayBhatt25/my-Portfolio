
import './timeline.scss'
import '../shared/animated-titles.scss'
import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/univ.svg";
import timelineElements from "./timelineElements";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { useContext } from 'react';
import { ThemeContext } from '../../context';



function Timeline() {
    const { state } = useContext(ThemeContext);
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="tm" id='timeline'>
        <div className="tm_container">
                <h1 className="tm_title animated-title timeline-title" data-text="Education & Exp">Education & Exp</h1>
            <VerticalTimeline
            lineColor={state.darkMode ? "white" : "black"}
            >
                {timelineElements.map((element) => {
                let isWorkIcon = element.icon == "work";
            

                return (
                    <VerticalTimelineElement
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    contentArrowStyle={state.darkMode ? { borderRight: '7px solid  white' }: { borderRight: '7px solid  black' }}
                    textClassName={"vt-tm-text"}
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
                    {element.link && (<a href={element.link} target="_blank" className="work-website-link">view website</a>)}
                    {element.gpa && (<h5>{element.gpa}</h5>)}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
        
    </div>
  )
}

export default Timeline