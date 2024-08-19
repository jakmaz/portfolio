const projects = [
  {
    title: "LogEly",
    description: "Minimalistic HTTP logging middleware",
    icon: "📝", // Replace this with the actual icon component or image
  },
  {
    title: "ElyNext",
    description: "Public template for fast and modern development",
    icon: "🦊", // Replace this with the actual icon component or image
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex flex-col gap-2">
              <div className="text-2xl">{project.icon}</div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
