import React, { useEffect, useRef, useState } from 'react'
import './skills.scss'
import skillsData from '../../skillsData'
import SkillItem from '../skill-item-component/skill-item'
import downIcon from '../../images/icons8-thick-arrow-pointing-down-48.webp'
import upIcon from '../../images/icons8-thick-arrow-pointing-up-48.webp'
function Skills(){
    const [activeCategory,setActiveCategory] = useState("all");
    const [visibleCategories, setVisibleCategories] = useState(false)
    const [skillsFilteredData,setSkillsFilteredData] = useState([]);
    const list = document.querySelector(".categories_list");
    const directionImg = document.querySelector(".direction-btn")
    let activeButton = useRef(null)
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
      },[appearOptions])

    useEffect(() => {
        let temp = []
        skillsData.forEach(skill => {
            if(skill.categories.includes(activeCategory)){
                const ret = temp.push(skill)
            }
        })
        setSkillsFilteredData(temp)

    },[activeCategory,activeButton,visibleCategories]);

    const handleToggleList = () => {
     

      if(visibleCategories){
        hideCategoriesList()
        directionImg.src = downIcon
      } else {
        showCategoriesList()
        directionImg.src = upIcon
      }
    }

    const hideCategoriesList = () => {
        list.classList.remove("show_categories_list")
        list.classList.add("hide_categories")
        setVisibleCategories(false)
    }

    const showCategoriesList = () => {
      const categoryButton = document.querySelector(".categoriesBtn")
      categoryButton.innerHTML = "Select Category"
      list.classList.remove("hide_categories")
        list.classList.add("show_categories_list")
        setVisibleCategories(true)
  }

    const handleSelectCategory = (selectedCategory) => {
      const categoryButton = document.querySelector(".categoriesBtn")
      categoryButton.innerHTML = selectedCategory.toUpperCase()
      setActiveCategory(selectedCategory)
      hideCategoriesList()
    }

    return (
        <div id='skills' className="skills">
            <h1 className="skills_title fade-in">SKILLS</h1>
            <div className="skills_bottom">
                <div className="sb_left fade-in">
                    <div className="type_buttons">
                      <div className="category_btn_div">
                        <button className="tech_btn categoriesBtn" onClick={handleToggleList}>Select Category</button>
                         {/* <img class="direction-btn" src={downIcon}></img> */}
                        
                      </div>
                        
                        <div className="categories_list hide_categories">
                          <button className='tech_btn' ref={activeButton}  onClick={() => handleSelectCategory("all") }>All</button>
                          <button className='tech_btn' ref={activeButton} onClick={() => handleSelectCategory("languages") } >Languages</button>
                          <button className='tech_btn' ref={activeButton} onClick={() => handleSelectCategory("databases") } >Databases</button>
                          <button className='tech_btn' ref={activeButton}  onClick={() => handleSelectCategory("web")}>Web</button>
                          <button className='tech_btn' ref={activeButton} onClick={() => handleSelectCategory("mobile") }>Mobile</button>
                        </div>
                        
                    </div>
                </div>
                <div className="sb_right fade-in">
                    {skillsFilteredData.map((skill) =>(
                        <SkillItem key={skill.id} skillName={skill.skillName} img={skill.img} categories={skill.categories} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;