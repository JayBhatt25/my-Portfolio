let artifactId = 1;
const artifactsData = [
    {
        id: artifactId++,
        slug: "resume-review-building-assistant",
        title: "Resume Review & Building Assistant",
        categories: ["all", "AI/ML"],
        introduction: "A conversational AI assistant that reviews existing resumes or helps build one from scratch, giving specific, actionable feedback grounded in ATS-friendly and quantified-impact best practices.",
        description: "This artifact documents the end-to-end process of designing and shipping a resume-focused chatbot using Design Thinking, from initial topic selection through a deployed, cost- and abuse-guarded prototype built on Streamlit and the OpenAI API.",
        objective: "Give job seekers fast, specific resume feedback (or guided resume-building help) without needing access to a career counselor, while keeping the public-facing deployment safe from cost abuse and prompt injection.",
        process: [
            "Applied a Design Thinking framework (Empathy, Define, Ideate, Prototype, Test) to move from topic brainstorming to a scoped problem statement.",
            "Drafted and iterated on a system prompt defining the assistant's review process, tone, and explicit scope boundaries.",
            "Built a custom chat interface in Streamlit with streaming responses via the OpenAI API.",
            "Added abuse-prevention guardrails: input character caps, output token caps, and per-session message limits to control API cost exposure.",
            "Hardened the system prompt and input handling against prompt injection by wrapping pasted content in delimiters and instructing the model to treat it strictly as data, never as instructions.",
            "Scoped the OpenAI API key to least-privilege permissions and configured secrets via environment variables rather than exposing them in code or to end users.",
            "Deployed the app to Streamlit Community Cloud for free, public access."
        ],
        toolsAndTechnologies: ["Python", "Streamlit", "OpenAI API", "Streamlit Community Cloud", "Git/GitHub"],
        valueProposition: "Delivers immediate, specific resume feedback and guided resume-building at no cost to the end user, deployed as a always-available public tool.",
        uniqueValue: "Layered, defense-in-depth safeguards (cost caps, injection-resistant prompting, least-privilege API key scoping) built into a class assignment prototype, not just a bare LLM wrapper.",
        relevance: "Demonstrates applied AI product thinking: translating a Design Thinking process into a working, publicly deployed tool with real security and cost considerations, not just a proof-of-concept.",
        references: [
            { label: "Streamlit Documentation", url: "https://docs.streamlit.io" }
        ],
        attachment: {
            type: "link",
            url: "https://resume-reviewer-assistant-jay-bhatt.streamlit.app/",
            label: "OPEN ATRIFACT"
        }
    },
    {
        id: artifactId++,
        slug: "ml-vs-deep-learning-suitability",
        title: "Machine Learning vs. Deep Learning: Choosing the Right Approach",
        categories: ["all", "AI/ML"],
        introduction: "Machine learning (ML) and deep learning (DL) aren't interchangeable tools — the right choice depends on how much data you have, whether features can be hand-engineered, and whether the model's reasoning needs to be explainable.",
        description: "Machine learning is typically suitable in scenarios where we have smaller datasets and need to manually engineer or input features that the model uses to train and generate outputs. Deep learning, by contrast, is suited to scenarios where the system needs to automatically extract abstract features from raw data without manual intervention. Deep learning also generally requires massive datasets and high computational power to be effective, making it unsuitable for environments where one or both of these resources are missing.",
        objective: "Reason through when each approach is the right call using two contrasting real-world examples — Customer Churn Prediction for machine learning, and Autonomous Driving for deep learning — and make the practical, business-facing implications of that choice explicit.",
        process: [
            "Reviewed the lesson's criteria for ML vs. DL suitability: dataset size, the need for manual feature engineering, and the availability of computational resources.",
            "Worked through the Customer Churn Prediction example, examining why hand-crafted customer features and a Support Vector Machine (SVM) classifier are the right fit.",
            "Identified explainability as the deciding factor: a manager needs to know why a customer is likely to leave, not just that they are, in order to act on the prediction.",
            "Connected the churn scenario to a concrete SaaS workflow, including which features to track and how a churn-risk threshold could trigger a proactive intervention.",
            "Worked through the Autonomous Driving example, examining why raw, unstructured sensor data (camera video, LiDAR point clouds) makes deep learning necessary.",
            "Connected the autonomous driving scenario to a tangible real-world instance: autonomous campus food-delivery robots navigating pedestrians, crosswalks, and sidewalks.",
            "Compared both examples side by side to reinforce the underlying decision rule: manual features, smaller data, and a need for explainability point to ML; raw unstructured data, massive scale, and automatic feature extraction point to DL."
        ],
        toolsAndTechnologies: ["Claude ( For clarity and enhancing structure )"],
        valueProposition: "Translates an abstract ML vs. DL distinction into a usable decision framework for choosing the right approach to a given business or product problem.",
        uniqueValue: "Grounds the comparison in two fully-worked real-world scenarios — SaaS churn prevention and autonomous food-delivery robots — rather than treating ML vs. DL as a purely academic contrast.",
        relevance: "Directly applicable to making sound applied-AI architecture decisions: avoiding both underpowered machine learning on problems that truly need raw perception at scale, and unnecessarily opaque, expensive deep learning on problems where an interpretable, lower-cost ML model would do the job.",
        comparisonExamples: [
            {
                approach: "Machine Learning",
                exampleTitle: "Customer Churn Prediction",
                scenario: "Hand-crafted customer features — such as customer age, tenure, and billing details — are fed into a Support Vector Machine (SVM) algorithm, which learns from historical customer data to predict when a customer is likely to leave.",
                whyItFits: "Churn prediction is most valuable when it gives a manager specific insight into why a customer is likely to leave, so they can make an informed, targeted retention decision. Deep learning models automatically derive thousands of abstract, latent features, making it incredibly difficult to isolate the exact drivers behind a single prediction — a manager would know when a customer is at risk but lack the actionable features needed to design a retention strategy. With traditional ML, a concise set of interpretable features turns predictions directly into business insight.",
                realWorldApplication: "A subscription-based SaaS company tracks structured features like login frequency, customer-reported technical support issues, and engagement with newly released features. By analyzing percentage changes in these metrics, the model calculates a churn risk score, and a manager can set an automated threshold — such as a churn probability greater than 60% — to trigger proactive alerts so the customer success team can intervene before the company loses revenue."
            },
            {
                approach: "Deep Learning",
                exampleTitle: "Autonomous Driving",
                scenario: "Deep learning processes raw, unstructured sensor data — video frames from cameras and 3D point clouds from LiDAR — to make split-second navigation decisions, continuously interacting with a dynamic environment by detecting traffic lights, reading road signs, and tracking surrounding traffic.",
                whyItFits: "Traditional ML falls short here because it would require engineers to manually code rules and geometric features for every object a car might encounter — an approach that fails given the infinite variance in human appearance, shifting weather conditions, and changing camera angles. Deep learning excels because it automatically derives a massive hierarchy of essential visual features directly from raw data, without requiring manual definitions.",
                realWorldApplication: "Autonomous campus food-delivery bots navigate busy university sidewalks, crosswalks, and residential zones. By processing image and sensor data in real time using deep neural networks, they safely avoid pedestrians and obstacles, navigate campus geography, and ensure food is securely delivered to the correct customer."
            }
        ]
    }
];

export default artifactsData;
