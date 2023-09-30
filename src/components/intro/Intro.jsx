import React, { useRef, useEffect } from 'react'
import './intro.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import JayResume from '../../files/Jay_Bhatt_Resume.docx'


function Intro() {

  const introRef = useRef(null)
  const appearOptions = {
    threshold:0
  }
  useEffect(() => {
    const sliders = document.querySelectorAll(".fade-in");
    
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

    sliders.forEach(slider => {
      appearOnScroll.observe(slider)
    })
  },[introRef,appearOptions])

  
  return (
    <div className="index">
        <div ref={introRef} className="i_left fade-in">
            <div className="l_container">
                <h2 className="i_intro">Hello, I am</h2>
                <h1 className="i_name">Jay Bhatt</h1>
                <div className="i_title">
                    <div className="t_container">
                        <div className="title_item">MS CS @UNCC</div>
                        <div className="title_item">Software Engineer</div>
                        <div className="title_item">AWS Certified Developer</div>
                    </div>
                   
                </div>
                <div className="i_desc">
                   <p>I am an enthusiastic software engineer with over a year of experience in crafting dependable and scalable software solutions. I have just completed my Master's in Computer Science from the University of North Carolina at Charlotte and am currently actively seeking new full-time/contract prospects</p>
                    <br></br> 
                </div>
                <div className="links">
                    <div className="i_home">
                      <a alt='Github' href="https://www.github.com/JayBhatt25" target="_blank" rel="noreferrer noopener"><GitHubIcon /></a>
                    </div>
                    <div className="i_about">
                      <a alt='LinkedIn' href="https://www.linkedin.com/in/jaybhatt02" target="_blank" rel="noreferrer noopener"><LinkedInIcon /></a>
                    </div>
                    <div className="i_contact">
                      <a alt='Email' href="mailto:jaybhatt2598@gmail.com"><EmailIcon /></a>
                    </div>
                </div>
                <div className="i_resume">
                  <a href={JayResume} download="Jay_Bhatt_Resume" target="_blank">
                    <button className="download-btn">My Resume</button>
                  </a>
                </div>
            </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i_scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
        <div className="i_right">
            <div className="i_bg"></div>
           {/* <img src={Me} className="i_img"></img> */}
        </div>
    </div>
  )
}

export default Intro