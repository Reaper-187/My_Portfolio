interface TechStackProps {
  stack: string[];
}

export enum Tech {
  React = "React.js",
  Node = "Node.js",
  Express = "express.js",
  Mongo = "Mongo-DB",
  Rest = "Rest-API",
  Socket = "Socket.io",
  TS = "TypeScript",
  Tailwind = "TailwindCss",
}

export const TechStack = ({ stack }: TechStackProps) => {
  const colors: Record<string, string> = {
    "React.js": "text-blue-400 border border-blue-400",
    "Node.js": "text-green-300 border border-green-300",
    "Rest-API": "text-white border border-white",
    "Mongo-DB": "text-green-500 border border-green-500",
    "Socket.io": "text-indigo-400 border border-indigo-300",
    TypeScript: "text-blue-600 border border-blue-600",
    TailwindCss: "text-blue-300 border border-blue-300",
    "express.js": "text-yellow-300 border border-yellow-300",
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {stack.map((tech) => (
        <p
          key={tech}
          className={`p-1 text-xs rounded-md ${
            colors[tech] || "border border-gray-200"
          }`}
        >
          {tech}
        </p>
      ))}
    </div>
  );
};
