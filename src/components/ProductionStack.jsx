const stack = [
  { name: "Go", role: "Primary backend language" },
  { name: "Java", role: "Spring Boot services" },
  { name: "Kafka", role: "Event-driven pipelines" },
  { name: "AWS", role: "ECS, SQS, S3, CloudWatch" },
  { name: "PostgreSQL", role: "Transactional data store" },
];

const ProductionStack = () => (
  <div
    className="w-full max-w-md mx-auto"
    aria-label="Production technology stack"
  >
    <div className="grid grid-cols-1 gap-3">
      {stack.map((item, index) => (
        <div
          key={item.name}
          className="group flex items-center gap-4 rounded-xl border border-gray-700/80 bg-gray-900/70 px-5 py-4 backdrop-blur-sm transition-colors hover:border-purple-500/50 hover:bg-gray-800/80 motion-safe:animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-sm font-bold text-white">
            {item.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-semibold text-white">{item.name}</p>
            <p className="text-sm text-gray-400">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductionStack;
