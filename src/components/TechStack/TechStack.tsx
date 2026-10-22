import "./TechStack.sass";
interface TechStackProps {
  stack: string[];
}

export enum Tech {
  React = "React.js",
  Node = "Node.js",
  Express = "express.js",
  Mongo = "Mongo-DB",
  PostgreSQL = "PostgreSQL",
  Rest = "Rest-API",
  Socket = "Socket.io",
  TS = "TypeScript",
  Tailwind = "TailwindCss",
  Nest = "Nest.js",
}

export const TechStack = ({ stack }: TechStackProps) => {
  const colors: Record<string, string> = {
    "React.js": "tech-blue-400",
    "Node.js": "tech-green-300",
    "Rest-API": "tech-white",
    "Mongo-DB": "tech-green-500",
    PostgreSQL: "tech-indigo-300",
    "Socket.io": "tech-indigo-400",
    TypeScript: "tech-blue-500",
    TailwindCss: "tech-blue-300",
    "express.js": "tech-yellow-300",
    "Nest.js": "tech-red-300",
  };

  return (
    <div className="tech-stack">
      {stack.map((tech) => (
        <p key={tech} className={`tech-tag ${colors[tech] || "tech-default"}`}>
          {tech}
        </p>
      ))}
    </div>
  );
};
