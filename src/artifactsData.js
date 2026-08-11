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
    },
    {
        id: artifactId++,
        slug: "deep-learning-neural-networks-quiz",
        title: "Deep Learning and Neural Networks",
        categories: ["all", "AI/ML"],
        introduction: "This quiz covered the core building blocks of deep learning — how ANNs, CNNs, RNNs, and GANs each learn and what they're suited for — plus the role of activation functions and the ethical stakes of generative models that produce synthetic data.",
        objective: [
            "Describe Artificial Neural Networks (ANNs) and how they learn.",
            "Describe Convolutional Neural Networks (CNNs) and how they work.",
            "Describe Recurrent Neural Networks (RNNs) and how they work.",
            "Describe Generative Adversarial Networks (GANs) and how they work.",
            "Recognize the role of activation functions.",
            "Consider the ethical implications of generating synthetic data, such as deepfakes."
        ],
        description: "Deep learning is a brain-inspired subset of AI and machine learning: layered \"artificial neurons\" adjust their connection weights based on feedback, echoing the Bayesian brain's prior-belief → sensory-input → prediction-update loop. But not every problem needs it — deciding whether to wear a coat needs a simple rule, not a 10-layer network. Deep learning earns its cost on raw, high-volume, high-complexity data, like medical images, where it can outperform manual review entirely.",
        process: [
            "Reviewed the AIML-500 lesson deck covering deep learning fundamentals, network architectures, and activation functions.",
            "Read supplementary IBM articles (\"What is Deep Learning,\" \"What is a Neural Network,\" \"Deep Learning Architecture\") and a historical timeline of deep learning's development.",
            "Compiled personal notes distilling the key ideas across every source into a single study reference.",
            "Fed those notes to Claude and used it to generate a self-quiz, iteratively identifying and reinforcing weak areas until confident.",
            "Completed the official quiz, scoring 30/30 on the first attempt."
        ],
        toolsAndTechnologies: ["Claude ( Self-quiz generation & prep )", "IBM Technology Articles", "AIML-500 Course Material"],
        valueProposition: "Demonstrates a rigorous, source-grounded self-study loop for mastering deep learning fundamentals — not passive reading — validated by a perfect quiz score.",
        uniqueValue: "Combines primary lesson material, external technical references, and AI-assisted iterative self-quizzing into one verifiable prep loop that closes knowledge gaps before assessment rather than after.",
        relevance: "Establishes the architecture- and activation-function-level foundation needed to reason responsibly about applying deep learning in later, more applied coursework and projects — including its ethical limits.",
        references: [
            { label: "A.I.'s Black Boxes Just Got a Little Less Mysterious (NYT)", url: "https://www.nytimes.com/2024/05/21/technology/ai-language-models-anthropic.html" }
        ],
        architectures: [
            {
                name: "Artificial Neural Network",
                tag: "ANN",
                description: "The foundational neural network architecture, loosely modeled on the brain's neurons and connections.",
                howItWorks: "Input passes through weighted connections across hidden layers to an output, and the network learns by adjusting those weights based on prediction error — mirroring the Bayesian brain's prior-belief → new-input → updated-prediction loop."
            },
            {
                name: "Convolutional Neural Network",
                tag: "CNN",
                description: "Built for visual data, working similarly to how the eyes and brain process images.",
                howItWorks: "Learns hierarchical filters — edges and textures in early layers, shapes and objects in deeper ones — letting it detect patterns (like abnormalities in X-rays or MRIs) without any hand-engineered features."
            },
            {
                name: "Recurrent Neural Network",
                tag: "RNN",
                description: "Designed for sequential data, like sentences or time series.",
                howItWorks: "Feeds information from previous steps back into the network to retain context, giving it a form of memory; LSTM extends this with a stronger memory for longer sequences."
            },
            {
                name: "Generative Adversarial Network",
                tag: "GAN",
                description: "A pair of competing networks used to create new, synthetic data.",
                howItWorks: "A generator produces synthetic examples while a discriminator tries to catch them, and the two are trained together in competition — pushing the generator toward increasingly realistic output. This is the mechanism behind synthetic media such as deepfakes."
            }
        ],
        activationFunctionsIntro: "Activation functions introduce non-linearity into a network, letting it learn complex patterns instead of just simple math.",
        activationFunctions: [
            {
                name: "Sigmoid",
                description: "Outputs a value between 0 and 1 — like expressing a confidence level or probability."
            },
            {
                name: "ReLU",
                description: "Outputs the input if it's positive, otherwise zero — computationally efficient and widely used in hidden layers."
            },
            {
                name: "Tanh",
                description: "Outputs a value between -1 and 1 — like a signed intensity from strongly negative to strongly positive."
            }
        ],
        ethicalConsiderations: "Deep learning's ability to generate highly realistic synthetic media (via GANs) carries real ethical weight. Because these models are largely \"black boxes\" — internally opaque even when their outputs can be observed — it's hard to audit why a piece of synthetic content was produced the way it was, or to reliably detect it in the wild. That opacity compounds the risks of deepfakes: misinformation, non-consensual impersonation, and manipulation of public opinion. Working responsibly with generative models means treating provenance and disclosure (such as watermarking or labeling synthetic content), consent for using someone's likeness, and the societal impact of deployment as first-class design constraints, not afterthoughts."
    },
    {
        id: artifactId++,
        slug: "data-challenge-scenarios-ai-coach",
        title: "Navigating Data Challenges: An AI Coaching Activity",
        categories: ["all", "AI/ML"],
        introduction: "One-on-one scenario-based coaching with an AI chatbot on three real-world data challenges — missing data, data drift, and data imbalance — each resolved through discussion-driven reasoning rather than a lecture.",
        description: "The activity paired each student with a pre-trained AI coach that posed a real-world ML data scenario and gave immediate feedback, letting the student reason toward the right approach through iterative discussion instead of being told the answer up front — mirroring how these problems actually surface and get diagnosed in industry.",
        objective: [
            "Discuss approaches for data processing and cleaning.",
            "Explain the challenges of data sharing, privacy, and security in machine learning applications."
        ],
        process: [
            "Worked through the Missing Data scenario, discussing multiple handling techniques and their trade-offs with the AI coach.",
            "Worked through the Data Drift scenario, identifying the 3 types of drift and reasoning through which type was driving the described model degradation.",
            "Worked through the Data Imbalance scenario, discussing techniques for correcting an overrepresented class.",
            "Arrived at the correct approach for all three scenarios through iterative discussion with the coach."
        ],
        toolsAndTechnologies: ["SchoolAI.com ( AI Coach )", "Scenario-Based Learning"],
        valueProposition: "Demonstrates the ability to reason through ambiguous, real-world data problems via structured discussion rather than rote recall, arriving at the right approach for each scenario.",
        uniqueValue: "Combines three distinct, commonly-faced ML data challenges into one coached reasoning exercise — closer to how these issues actually appear (as a diagnosis problem) than a static reading assignment.",
        relevance: "Data quality issues like missing values, drift, and imbalance are some of the most common practical failure points in deployed ML systems; being able to diagnose and reason through the right response is directly applicable to real industry work.",
        scenarios: [
            {
                tag: "Missing Data",
                title: "Handling Missing Values",
                challenge: "A dataset has missing values for a specific situation, and the right handling technique needs to be chosen without introducing bias or losing valuable data.",
                techniques: [
                    "Listwise/pairwise deletion — simple, but risks losing data or introducing bias",
                    "Mean/median/mode imputation — fast, but can distort variance",
                    "Regression or model-based imputation — more accurate, more complex",
                    "Flagging missingness as its own feature — preserves signal when data isn't missing at random"
                ],
                keyTakeaway: "The right technique depends on why the data is missing (MCAR/MAR/MNAR) and how much bias vs. data loss the situation can tolerate."
            },
            {
                tag: "Data Drift",
                title: "Diagnosing Degrading Model Performance",
                challenge: "A model's performance is degrading in production, and the task is to identify which type of drift is the major driver.",
                techniques: [
                    "Concept Drift — the relationship between inputs and the target changes",
                    "Data/Covariate Drift — the distribution of input features shifts, even if the input-output relationship stays the same",
                    "Structural Drift — the underlying data-generating structure or schema itself changes"
                ],
                keyTakeaway: "Correctly identifying which type of drift is occurring determines the fix — retraining alone won't help if the real issue is structural."
            },
            {
                tag: "Data Imbalance",
                title: "Correcting an Overrepresented Class",
                challenge: "One class is significantly overrepresented in the training data, skewing the model toward the majority class.",
                techniques: [
                    "Oversampling the minority class (e.g. SMOTE)",
                    "Undersampling the majority class",
                    "Class-weighting in the loss function",
                    "Choosing evaluation metrics (precision/recall/F1) that aren't misleading under imbalance"
                ],
                keyTakeaway: "Accuracy alone is a bad signal on imbalanced data — both the resampling/weighting strategy and the evaluation metric need to account for the skew."
            }
        ]
    }
];

export default artifactsData;
