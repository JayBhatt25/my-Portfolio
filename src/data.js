import amazon from './images/amazon2.webp'
import entityApiProj from './images/entityapi.webp'
import taskmaster from './images/taskmaster.webp'
import airquality from './images/airquality.webp'
import porfolio from './images/porfolio.webp'
import schedulewizard from './images/schedulewizard.webp'
const projectdata = [
    {
        id: 1,
        title: "Ecomm Web App - Amazon clone",
        img: amazon,
        desc: "A clone of Amazon's e-commerce web app",
        liveLink: "https://my--clone-29364.web.app/",
        tech: "Technologies: JavaScript, HTML5, CSS3, Firebase, Express.js, React.js, Node.js"
    },
    {
        id: 2,
        title: "Entity RESTful API",
        desc: "A user-friendly and well-documented RESTful API designed to identify, extract, and return sensitive information from an input string",
        img: entityApiProj,
        liveLink: "https://github.com/JayBhatt25/Entity-rest-api-swagger",
        tech: "Technologies: JavaScript, Node.js, Express.js,Azure Cognitive Services, Swagger"
    },
    {
        id: 3,
        title: "Portolio Website",
        desc: "A fully responsive and user-friendly website to showcase my skillset",
        img: porfolio,
        liveLink: "https://jay-bhatt-portfolio.web.app/",
        tech: "Technologies: JavaScript, HTML5, CSS3, SASS, Firebase, Express.js, React.js, Node.js"
    },
    {
        id: 4,
        title: "ScheduleWizard++",
        desc: "A web application that automatically extracts class schedule information from images and syncs selected classes to Google Calendar, resulting in a 75% reduction in effort for users",
        img: schedulewizard,
        githubLink: "https://github.com/tarunravada/ScheduleWizards",
        tech: "Technologies: JavaScript, Python, HTML5, CSS3, Node JS, React JS, GCP"
    },
    {
        id: 6,
        title: "TaskMaster - Todo task manager",
        desc: "A backend-focused CRUD web app that tracks and manages to-do tasks",
        img: taskmaster,
        githubLink: "https://github.com/JayBhatt25/Spring-projects",
        tech: "Technologies: Core Java, Spring Boot, PostgreSQL, HTML5, CSS3, JavaScript, React, Bootstrap, AWS S3, Heroku"
    },
    {
        id: 7,
        title: "Air quality analysis & prediction",
        desc: "A project developed in collaboration with three peers that performs exploratory analysis, visualization, and prediction on the openAQ air quality dataset",
        img: airquality,
        liveLink: "https://github.com/JayBhatt25/OpenAQ-AWS/tree/main",
        tech: "Technologies: Python, Pandas, PySpark, Streamlit, plotly"
    },
  

]

export default projectdata;