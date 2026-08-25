const stack = [
  { name: "Go", role: "Primary backend language" },
  { name: "Java", role: "Spring Boot services" },
  { name: "Kafka", role: "Event-driven pipelines" },
  { name: "AWS", role: "ECS, SQS, S3, CloudWatch" },
  { name: "PostgreSQL", role: "Transactional data store" },
];

const ProductionStack = () => (
  <div className="w-full max-w-md mx-auto" aria-label="Production technology stack">
    <div className="grid grid-cols-1 gap-3">
      {stack.map((item, index) => (
        <div
          key={item.name}
          className="group flex items-center gap-4 card-spotify album-card !p-4"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-spotify-green/20 text-sm font-bold text-spotify-green group-hover:bg-spotify-green/30 transition-colors">
            {item.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-semibold text-spotify-text-primary group-hover:text-spotify-green transition-colors">{item.name}</p>
            <p className="text-sm text-spotify-text-secondary">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductionStack;
