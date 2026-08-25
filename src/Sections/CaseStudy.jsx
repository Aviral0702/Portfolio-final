import { motion } from "framer-motion";

const steps = [
  {
    label: "Context",
    title: "Compliance workflow at scale",
    body: "Aspora needed an RFI flow that could drive web and mobile from the backend — without duplicating business logic across clients.",
  },
  {
    label: "Approach",
    title: "Backend-driven orchestration",
    body: "A Go orchestrator owns state, validation, and screen routing. APIs return structured UI payloads so clients stay thin.",
  },
  {
    label: "Solution",
    title: "0-to-1 RFI orchestrator",
    body: "Shipped contracts, persistence, KYC/CBS integration, and web/mobile rollout. Mentored another engineer through the build.",
  },
  {
    label: "Evidence",
    title: "Live in production",
    body: "Live for 500+ users on real onboarding. Became the pattern for later workflow features.",
  },
];

const CaseStudy = () => (
  <section
    className="section-padding bg-spotify-dark section-rail"
    aria-labelledby="case-study-heading"
  >
    <div className="container-max">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-spotify !p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-spotify-green mb-3">
            Featured case study
          </p>
          <h2 id="case-study-heading" className="text-3xl md:text-4xl font-black text-spotify-text-primary mb-4">
            RFI Workflow Orchestrator
          </h2>
          <p className="text-spotify-text-secondary mb-6">
            Backend-driven workflow from zero to production at Aspora.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <p className="text-2xl font-bold text-spotify-green">500+</p>
              <p className="text-xs text-spotify-text-tertiary">users live</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-spotify-green">0 → 1</p>
              <p className="text-xs text-spotify-text-tertiary">end-to-end build</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Go", "Java", "Kafka", "AWS", "PostgreSQL"].map((tag) => (
              <span key={tag} className="chip-spotify">{tag}</span>
            ))}
          </div>
        </motion.div>

        <ol className="space-y-2">
          {steps.map((step, index) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 rounded-md border border-spotify-border bg-spotify-dark-secondary px-4 py-4 hover:bg-[#2a2a2a] transition-colors"
            >
              <span className="w-6 shrink-0 text-sm font-bold text-spotify-text-tertiary tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-spotify-green mb-1">{step.label}</p>
                <h3 className="text-base font-semibold text-spotify-text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-spotify-text-secondary leading-relaxed">{step.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default CaseStudy;
