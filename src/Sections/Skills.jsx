import { motion } from "framer-motion";
import gosrc from "../assets/icons/golang.png";
import nodesrc from "../assets/icons/node.png";
import reactsrc from "../assets/icons/react.png";
import redissrc from "../assets/icons/Redis.png";
import dockersrc from "../assets/icons/Docker.png";
import ksrc from "../assets/icons/kubernetes.png";
import linuxsrc from "../assets/icons/Linux.png";
import gitsrc from "../assets/icons/Git.png";

const tools = [
  { name: "Go", icon: gosrc },
  { name: "Java", icon: null },
  { name: "Kafka", icon: null },
  { name: "AWS", icon: null },
  { name: "PostgreSQL", icon: null },
  { name: "Redis", icon: redissrc },
  { name: "Docker", icon: dockersrc },
  { name: "Kubernetes", icon: ksrc },
  { name: "Node.js", icon: nodesrc },
  { name: "React", icon: reactsrc },
  { name: "Linux", icon: linuxsrc },
  { name: "Git", icon: gitsrc },
];

const categories = [
  ["Languages", "Go, Java, Python, SQL"],
  ["Data & events", "Kafka, SQS, PostgreSQL, Redis"],
  ["Cloud", "AWS ECS, Docker, Kubernetes"],
  ["Fintech", "CBS, KYC, RBAC, orchestration"],
];

const Skills = () => (
  <section
    className="section-padding bg-spotify-dark relative overflow-hidden section-rail"
    aria-labelledby="skills-heading"
  >
    <div className="container-max relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12 px-2.5"
      >
        <h2 id="skills-heading" className="section-heading mb-3 sm:mb-4">
          <span className="gradient-text">Skills</span>
        </h2>
        <div className="section-divider mb-4" />
        <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
          Production stack at Aspora — not a laundry list.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {tools.map((tool) => (
          <div key={tool.name} className="card-spotify album-card flex flex-col items-center gap-2 !p-4">
            {tool.icon ? (
              <img src={tool.icon} alt="" className="w-8 h-8 object-contain" aria-hidden="true" />
            ) : (
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-spotify-green/20 text-xs font-bold text-spotify-green">
                {tool.name.slice(0, 2)}
              </span>
            )}
            <span className="text-sm font-medium text-spotify-text-primary text-center">{tool.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map(([label, value]) => (
          <div key={label} className="rounded-md border border-spotify-border bg-spotify-dark-secondary px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-wide text-spotify-green mb-1">{label}</p>
            <p className="text-sm text-spotify-text-secondary">{value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
