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
    }
];

export default artifactsData;
