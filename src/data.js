import amazon from './images/amazon2.webp'
import entityApiProj from './images/entityapi.webp'
import taskmaster from './images/taskmaster.webp'
import airquality from './images/airquality.webp'
import porfolio from './images/porfolio.webp'
import schedulewizard from './images/schedulewizard.webp'
import snapglimpse from './images/snapglimpse.png'
import transcriptify from './images/transcriptify.png'

let projectId = 1;
const projectdata = [
    {
        id: projectId++,
        title: "SnapGlimpse – Delivering Instant News Insights!",
        img: snapglimpse,
        desc: "Developed a news web application, swiftly aggregating and showcasing news from 4 nations, 7000+ sources, and 13 languages in real-time through integration with an external API",
        liveLink: "https://snap-glimpse-jaybhatt25.vercel.app/news/technology",
        tech: "Technologies:TypeScript, HTML5, Tailwind CSS, React, Next.js 13, GraphQL, StepZen"
    },
    {
        id: projectId++,
        title: "Transcriptify",
        img: transcriptify,
        desc: "Engineered a speech-to-text full-stack web application allowing users to transcribe audio/video files",
        liveLink: "https://transcriptify.vercel.app/",
        tech: "Technologies: TypeScript, Nextjs 14, React, Tailwind CSS, Shadcn/ui, Assembly AI, Figma, HTML5, Axios, Redux"
    },
    {
        id: projectId++,
        title: "Ecomm Web App - Amazon clone",
        img: amazon,
        desc: "A clone of Amazon's e-commerce web app",
        liveLink: "https://my--clone-29364.web.app/",
        tech: "Technologies: JavaScript, HTML5, CSS3, Firebase, Express.js, React.js, Node.js"
    },
    {
        id: projectId++,
        title: "Entity RESTful API",
        desc: "A user-friendly and well-documented RESTful API designed to identify, extract, and return sensitive information from an input string",
        img: entityApiProj,
        liveLink: "https://github.com/JayBhatt25/Entity-rest-api-swagger",
        tech: "Technologies: JavaScript, Node.js, Express.js,Azure Cognitive Services, Swagger"
    },
    {
        id: projectId++,
        title: "Portolio Website",
        desc: "A fully responsive and user-friendly website to showcase my skillset",
        img: porfolio,
        liveLink: "https://jay-bhatt-portfolio.web.app/",
        tech: "Technologies: JavaScript, HTML5, CSS3, SASS, Firebase, Express.js, React.js, Node.js"
    },
    {
        id: projectId++,
        title: "ScheduleWizard++",
        desc: "A web application that automatically extracts class schedule information from images and syncs selected classes to Google Calendar, resulting in a 75% reduction in effort for users",
        img: schedulewizard,
        githubLink: "https://github.com/tarunravada/ScheduleWizards",
        tech: "Technologies: JavaScript, Python, HTML5, CSS3, Node JS, React JS, GCP"
    },
    {
        id: projectId++,
        title: "TaskMaster - Todo task manager",
        desc: "A backend-focused CRUD web app that tracks and manages to-do tasks",
        img: taskmaster,
        githubLink: "https://github.com/JayBhatt25/Spring-projects",
        tech: "Technologies: Core Java, Spring Boot, PostgreSQL, HTML5, CSS3, JavaScript, React, Bootstrap, AWS S3, Heroku"
    },
    {
        id: projectId++,
        title: "Air quality analysis & prediction",
        desc: "A project developed in collaboration with three peers that performs exploratory analysis, visualization, and prediction on the openAQ air quality dataset",
        img: airquality,
        liveLink: "https://github.com/JayBhatt25/OpenAQ-AWS/tree/main",
        tech: "Technologies: Python, Pandas, PySpark, Streamlit, plotly"
    },
    

]

export default projectdata;