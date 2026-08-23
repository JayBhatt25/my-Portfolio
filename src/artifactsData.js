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
        introduction: "Machine learning (ML) and deep learning (DL) aren't interchangeable tools - the right choice depends on how much data you have, whether features can be hand-engineered, and whether the model's reasoning needs to be explainable.",
        description: "Machine learning is typically suitable in scenarios where we have smaller datasets and need to manually engineer or input features that the model uses to train and generate outputs. Deep learning, by contrast, is suited to scenarios where the system needs to automatically extract abstract features from raw data without manual intervention. Deep learning also generally requires massive datasets and high computational power to be effective, making it unsuitable for environments where one or both of these resources are missing.",
        objective: "Reason through when each approach is the right call using two contrasting real-world examples - Customer Churn Prediction for machine learning, and Autonomous Driving for deep learning - and make the practical, business-facing implications of that choice explicit.",
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
        uniqueValue: "Grounds the comparison in two fully-worked real-world scenarios - SaaS churn prevention and autonomous food-delivery robots - rather than treating ML vs. DL as a purely academic contrast.",
        relevance: "Directly applicable to making sound applied-AI architecture decisions: avoiding both underpowered machine learning on problems that truly need raw perception at scale, and unnecessarily opaque, expensive deep learning on problems where an interpretable, lower-cost ML model would do the job.",
        comparisonExamples: [
            {
                approach: "Machine Learning",
                exampleTitle: "Customer Churn Prediction",
                scenario: "Hand-crafted customer features - such as customer age, tenure, and billing details - are fed into a Support Vector Machine (SVM) algorithm, which learns from historical customer data to predict when a customer is likely to leave.",
                whyItFits: "Churn prediction is most valuable when it gives a manager specific insight into why a customer is likely to leave, so they can make an informed, targeted retention decision. Deep learning models automatically derive thousands of abstract, latent features, making it incredibly difficult to isolate the exact drivers behind a single prediction - a manager would know when a customer is at risk but lack the actionable features needed to design a retention strategy. With traditional ML, a concise set of interpretable features turns predictions directly into business insight.",
                realWorldApplication: "A subscription-based SaaS company tracks structured features like login frequency, customer-reported technical support issues, and engagement with newly released features. By analyzing percentage changes in these metrics, the model calculates a churn risk score, and a manager can set an automated threshold - such as a churn probability greater than 60% - to trigger proactive alerts so the customer success team can intervene before the company loses revenue."
            },
            {
                approach: "Deep Learning",
                exampleTitle: "Autonomous Driving",
                scenario: "Deep learning processes raw, unstructured sensor data - video frames from cameras and 3D point clouds from LiDAR - to make split-second navigation decisions, continuously interacting with a dynamic environment by detecting traffic lights, reading road signs, and tracking surrounding traffic.",
                whyItFits: "Traditional ML falls short here because it would require engineers to manually code rules and geometric features for every object a car might encounter - an approach that fails given the infinite variance in human appearance, shifting weather conditions, and changing camera angles. Deep learning excels because it automatically derives a massive hierarchy of essential visual features directly from raw data, without requiring manual definitions.",
                realWorldApplication: "Autonomous campus food-delivery bots navigate busy university sidewalks, crosswalks, and residential zones. By processing image and sensor data in real time using deep neural networks, they safely avoid pedestrians and obstacles, navigate campus geography, and ensure food is securely delivered to the correct customer."
            }
        ]
    },
    {
        id: artifactId++,
        slug: "deep-learning-neural-networks-quiz",
        title: "Deep Learning and Neural Networks",
        categories: ["all", "AI/ML"],
        introduction: "This quiz covered the core building blocks of deep learning - how ANNs, CNNs, RNNs, and GANs each learn and what they're suited for - plus the role of activation functions and the ethical stakes of generative models that produce synthetic data.",
        objective: [
            "Describe Artificial Neural Networks (ANNs) and how they learn.",
            "Describe Convolutional Neural Networks (CNNs) and how they work.",
            "Describe Recurrent Neural Networks (RNNs) and how they work.",
            "Describe Generative Adversarial Networks (GANs) and how they work.",
            "Recognize the role of activation functions.",
            "Consider the ethical implications of generating synthetic data, such as deepfakes."
        ],
        description: "Deep learning is a brain-inspired subset of AI and machine learning: layered \"artificial neurons\" adjust their connection weights based on feedback, echoing the Bayesian brain's prior-belief → sensory-input → prediction-update loop. But not every problem needs it - deciding whether to wear a coat needs a simple rule, not a 10-layer network. Deep learning earns its cost on raw, high-volume, high-complexity data, like medical images, where it can outperform manual review entirely.",
        process: [
            "Reviewed the AIML-500 lesson deck covering deep learning fundamentals, network architectures, and activation functions.",
            "Read supplementary IBM articles (\"What is Deep Learning,\" \"What is a Neural Network,\" \"Deep Learning Architecture\") and a historical timeline of deep learning's development.",
            "Compiled personal notes distilling the key ideas across every source into a single study reference.",
            "Fed those notes to Claude and used it to generate a self-quiz, iteratively identifying and reinforcing weak areas until confident.",
            "Completed the official quiz, scoring 30/30 on the first attempt."
        ],
        toolsAndTechnologies: ["Claude ( Self-quiz generation & prep )", "IBM Technology Articles", "AIML-500 Course Material"],
        valueProposition: "Demonstrates a rigorous, source-grounded self-study loop for mastering deep learning fundamentals - not passive reading - validated by a perfect quiz score.",
        uniqueValue: "Combines primary lesson material, external technical references, and AI-assisted iterative self-quizzing into one verifiable prep loop that closes knowledge gaps before assessment rather than after.",
        relevance: "Establishes the architecture- and activation-function-level foundation needed to reason responsibly about applying deep learning in later, more applied coursework and projects - including its ethical limits.",
        references: [
            { label: "A.I.'s Black Boxes Just Got a Little Less Mysterious (NYT)", url: "https://www.nytimes.com/2024/05/21/technology/ai-language-models-anthropic.html" }
        ],
        architectures: [
            {
                name: "Artificial Neural Network",
                tag: "ANN",
                description: "The foundational neural network architecture, loosely modeled on the brain's neurons and connections.",
                howItWorks: "Input passes through weighted connections across hidden layers to an output, and the network learns by adjusting those weights based on prediction error - mirroring the Bayesian brain's prior-belief → new-input → updated-prediction loop."
            },
            {
                name: "Convolutional Neural Network",
                tag: "CNN",
                description: "Built for visual data, working similarly to how the eyes and brain process images.",
                howItWorks: "Learns hierarchical filters - edges and textures in early layers, shapes and objects in deeper ones - letting it detect patterns (like abnormalities in X-rays or MRIs) without any hand-engineered features."
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
                howItWorks: "A generator produces synthetic examples while a discriminator tries to catch them, and the two are trained together in competition - pushing the generator toward increasingly realistic output. This is the mechanism behind synthetic media such as deepfakes."
            }
        ],
        activationFunctionsIntro: "Activation functions introduce non-linearity into a network, letting it learn complex patterns instead of just simple math.",
        activationFunctions: [
            {
                name: "Sigmoid",
                description: "Outputs a value between 0 and 1 - like expressing a confidence level or probability."
            },
            {
                name: "ReLU",
                description: "Outputs the input if it's positive, otherwise zero - computationally efficient and widely used in hidden layers."
            },
            {
                name: "Tanh",
                description: "Outputs a value between -1 and 1 - like a signed intensity from strongly negative to strongly positive."
            }
        ],
        ethicalConsiderations: "Deep learning's ability to generate highly realistic synthetic media (via GANs) carries real ethical weight. Because these models are largely \"black boxes\" - internally opaque even when their outputs can be observed - it's hard to audit why a piece of synthetic content was produced the way it was, or to reliably detect it in the wild. That opacity compounds the risks of deepfakes: misinformation, non-consensual impersonation, and manipulation of public opinion. Working responsibly with generative models means treating provenance and disclosure (such as watermarking or labeling synthetic content), consent for using someone's likeness, and the societal impact of deployment as first-class design constraints, not afterthoughts."
    },
    {
        id: artifactId++,
        slug: "data-challenge-scenarios-ai-coach",
        title: "Navigating Data Challenges: An AI Coaching Activity",
        categories: ["all", "AI/ML"],
        introduction: "One-on-one scenario-based coaching with an AI chatbot on three real-world data challenges - missing data, data drift, and data imbalance - each resolved through discussion-driven reasoning rather than a lecture.",
        description: "The activity paired each student with a pre-trained AI coach that posed a real-world ML data scenario and gave immediate feedback, letting the student reason toward the right approach through iterative discussion instead of being told the answer up front - mirroring how these problems actually surface and get diagnosed in industry.",
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
        uniqueValue: "Combines three distinct, commonly-faced ML data challenges into one coached reasoning exercise - closer to how these issues actually appear (as a diagnosis problem) than a static reading assignment.",
        relevance: "Data quality issues like missing values, drift, and imbalance are some of the most common practical failure points in deployed ML systems; being able to diagnose and reason through the right response is directly applicable to real industry work.",
        scenarios: [
            {
                tag: "Missing Data",
                title: "Handling Missing Values",
                challenge: "A dataset has missing values for a specific situation, and the right handling technique needs to be chosen without introducing bias or losing valuable data.",
                techniques: [
                    "Listwise/pairwise deletion - simple, but risks losing data or introducing bias",
                    "Mean/median/mode imputation - fast, but can distort variance",
                    "Regression or model-based imputation - more accurate, more complex",
                    "Flagging missingness as its own feature - preserves signal when data isn't missing at random"
                ],
                keyTakeaway: "The right technique depends on why the data is missing (MCAR/MAR/MNAR) and how much bias vs. data loss the situation can tolerate."
            },
            {
                tag: "Data Drift",
                title: "Diagnosing Degrading Model Performance",
                challenge: "A model's performance is degrading in production, and the task is to identify which type of drift is the major driver.",
                techniques: [
                    "Concept Drift - the relationship between inputs and the target changes",
                    "Data/Covariate Drift - the distribution of input features shifts, even if the input-output relationship stays the same",
                    "Structural Drift - the underlying data-generating structure or schema itself changes"
                ],
                keyTakeaway: "Correctly identifying which type of drift is occurring determines the fix - retraining alone won't help if the real issue is structural."
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
                keyTakeaway: "Accuracy alone is a bad signal on imbalanced data - both the resampling/weighting strategy and the evaluation metric need to account for the skew."
            }
        ]
    },
    {
        id: artifactId++,
        slug: "gpt3-misinformation-case-study",
        title: "Case Study Analysis: GPT-3 Misinformation Generation",
        categories: ["all", "AI/ML"],
        introduction: "A critical ethical analysis of a documented AI incident: the 2020 discovery that GPT-3 could generate convincing disinformation, conspiracy content, and targeted propaganda with minimal technical skill required.",
        summary: "Documented in 2020 following OpenAI's release of GPT-3, researchers from the Middlebury Institute of International Studies and OpenAI evaluated the model's capacity to generate convincing fake news, propaganda, and radical content. The study revealed that GPT-3 could consistently craft nuanced conspiracy theories and targeted disinformation with minimal technical skill required. Unlike prior architectures, the model easily adapted its tone to manipulate specific demographic and political groups. This incident exposed the urgent threat of automated, large-scale synthetic text campaigns and highlighted the critical need for robust AI detection tools and deployment guardrails.",
        objective: [
            "Select a well-documented, significant AI-related incident from the past 10 years.",
            "Identify three distinct ethical issues raised by the incident.",
            "For each issue, explain why it was chosen, analyze its implications, and propose a mitigation strategy."
        ],
        process: [
            "Selected the 2020 GPT-3 misinformation-generation study as the case.",
            "Researched the incident via the Middlebury Institute publication and a supporting NIH/PMC article.",
            "Wrote a concise summary of the key facts.",
            "Identified and analyzed three distinct ethical issues, each with a rationale, an implications walkthrough, and a proposed mitigation.",
            "Closed with a reflection on how the analysis changed my thinking about AI deployment risk."
        ],
        toolsAndTechnologies: ["Case Study Analysis", "Ethical Risk Assessment", "Primary Source Research"],
        valueProposition: "Demonstrates the ability to critically dissect a real AI incident into distinct, well-reasoned ethical issues - each grounded in a clear rationale, a thought-through implications analysis, and an actionable mitigation - rather than a surface-level \"AI is risky\" take.",
        uniqueValue: "Goes beyond identifying that a harm exists to tracing why it exists (technical and incentive root causes), what specifically breaks downstream, and what a concrete organizational or regulatory fix would look like for each issue.",
        relevance: "Disinformation-at-scale, real-world polarization, and safety-guardrail evasion remain live, unsolved problems for every LLM deployed today - this analysis directly informs a security- and ethics-conscious approach to shipping AI-backed features.",
        ethicalIssues: [
            {
                tag: "Issue 1",
                title: "Mass Scalability of Disinformation",
                whyChosen: "Advanced AI models drastically lower the technical and financial barrier to generating convincing text. During the early days of these models, AI-generated content spread rapidly across the internet whenever major news broke. Unvetted narratives circulated within seconds, confusing the public and even tricking official news outlets on multiple occasions.",
                thoughtProcess: "When malicious actors can generate synthetic news articles at zero marginal cost, the overall information ecosystem becomes polluted. The sheer volume of synthetic media makes identifying fake content nearly impossible for the average reader. Over time, this erodes public trust in legitimate journalism and authoritative information sources. Ultimately, when people cannot distinguish truth from fabrication, democratic discourse and informed decision-making crumble.",
                mitigation: "Platforms must combine automated detection classifiers with mandatory watermarking for generated text. These strategies help consumers instantly verify the origin and authenticity of digital content."
            },
            {
                tag: "Issue 2",
                title: "Real-World Harm and Societal Polarization",
                whyChosen: "I selected this issue because misinformative AI content directly translates into real-world societal harm. Unchecked propaganda targets specific demographics to manipulate emotions and drive ideological divides. The rapid viral spread of this content can easily spark real-world violence and civic unrest.",
                thoughtProcess: "Misinformation is rarely harmless text - it frequently leverages rage-inducing narratives designed to incite specific communities. When individuals encounter hyper-targeted fake stories that confirm their biases, they react emotionally and share them without verification. This triggers a domino effect where digital hostility escalates into physical harm and community hostility. Consequently, AI models deployed without safeguards act as force multipliers for existing societal tensions.",
                mitigation: "AI companies must conduct rigorous pre-deployment red-teaming focused on harm evaluation across diverse cultural and political contexts. Furthermore, social media platforms should implement circuit breakers that temporarily slow the algorithmic distribution of viral, unverified stories. These interventions allow time for human fact-checkers to review suspicious content before widespread damage occurs."
            },
            {
                tag: "Issue 3",
                title: "Algorithmic Safeguard Evasion",
                whyChosen: "I chose this issue because despite ongoing mitigation efforts since 2020, safety guardrails remain vulnerable to creative evasion. While modern models refuse direct requests to generate hate speech or propaganda, users consistently find workarounds. Adversarial prompting and alternate routing allow bad actors to bypass safety filters and achieve the same harmful output.",
                thoughtProcess: "Relying solely on keyword blocking or static system prompts creates a false sense of security for both developers and the public. As guardrails become more sophisticated, malicious prompt engineering techniques evolve just as quickly to circumvent them. This ongoing game of cat-and-mouse means that harmful capabilities remain accessible behind thin administrative barriers. As a result, deployment safety relies on reactive patches rather than fundamentally safe model design.",
                mitigation: "Organizations should deploy multi-layered defensive architectures that monitor intent at both the input prompt and output token generation stages. Governments should also enforce transparency standards requiring platforms to label synthetic content and remove unflagged AI text. Combining model-level behavioral evaluation with regulatory oversight creates accountability across the entire generation lifecycle."
            }
        ],
        reflection: "Before analyzing this case study, I assumed that researchers only discovered and addressed these harmful capabilities long after models were publicly released. Examining this 2020 incident revealed that developers and researchers were fully aware of these risks from the start, yet the problem remains difficult to eliminate. Realizing that safety challenges persist despite years of mitigation changed how I view AI deployment. This analysis will directly influence my future approach to software engineering by reminding me to perform rigorous due diligence on any AI output. Rather than trusting generated results blindly, I will consistently verify facts through trusted primary sources and design systems with proactive verification mechanisms built in.",
        references: [
            { label: "Middlebury Institute - Radicalization Risks of GPT-3 and Neural Language Models", url: "https://www.middlebury.edu/institute/academics/centers-initiatives/ctec/ctec-publications/radicalization-risks-gpt-3-and-neural-language" },
            { label: "National Institute of Health (PMC) - Supporting Article", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10306283/" }
        ]
    }
];

export default artifactsData;
