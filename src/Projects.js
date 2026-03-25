import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    name: "RAG insurance denial precedent checker",
    description: "Tile-based role-playing game with procedural generation, combat system, and inventory management.",
    tech: "React, Typescript, Python, MongoDB Vector Search, RAG, BERT, Gemini",
    githubUrl: "https://github.com/saurabhgaglani/RAG-dhmc-precedent-checker",
    videoUrl: "https://youtu.be/IhvoJGw5kTU",
    badge: "Winner at\nHack4Hope '26"
  },
  {
    name: "VLM Robot",
    description: "Vision-language model integrated robot that understands visual scenes and responds to natural language commands.",
    tech: "Python, PyTorch, ROS2, Vision Transformers, Moveit",
    githubUrl: "https://github.com/saurabhgaglani/vlm-robot",
    videoUrl: "https://youtu.be/1Td1T8v3IKw"
  },
  {
    name: "Real-Time Chess Commentary",
    description: "AI-powered system that provides live commentary for chess games using computer vision and natural language generation.",
    tech: "React, Websockets, Python, Kafka, Confluent, ElevenLabs",
    githubUrl: "https://github.com/saurabhgaglani/real-time-commentary",
    videoUrl: "https://youtu.be/EOFJqLg6xrY",
    demoUrl: "https://chess-commentary-frontend-zph6bbw55a-uc.a.run.app/"
  },
  {
    name: "MazeGame",
    description: "DFS-based maze generator and solver for Unix terminals. Demonstrates CS fundamentals and algorithmic problem-solving.",
    tech: "C, Unix, DFS Algorithm",
    githubUrl: "https://github.com/saurabhgaglani/MazeGame",
    videoUrl: "https://youtu.be/FIZh6XQiI6Q"
  },
];

export default function Projects() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
      <div className="flex flex-col gap-8">
        {PROJECTS.map(project => <ProjectCard key={project.name} {...project} />)}
      </div>
      <span className="section-tail" />
    </section>
  );
}
