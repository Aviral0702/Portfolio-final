import { motion } from "framer-motion";

const steps = [
  {
    label: "Context",
    title: "Compliance workflow at scale",
    body: "Aspora's NRI banking product needed a Request-for-Information (RFI) flow that could drive both web and mobile screens from the backend — without duplicating business logic across clients.",
  },
  {
    label: "Approach",
    title: "Backend-driven orchestration",
    body: "I designed a workflow orchestrator in Go that owns state transitions, validation, and screen routing. The API returns structured UI payloads so clients stay thin and the business rules live in one place.",
  },
  {
    label: "Solution",
    title: "0-to-1 RFI orchestrator",
    body: "Built the full pipeline end to end: service contracts, persistence, integration with KYC/CBS systems, and rollout hooks for web and mobile. Mentored another engineer through the implementation.",
  },
  {
    label: "Evidence",
    title: "Live in production",
    body: "The orchestrator is live for 500+ users, powers real onboarding flows, and reduced duplicated client logic. It became the pattern for subsequent workflow features on the platform.",
  },
];

const CaseStudy = () => (
  <section
    className="section-padding bg-spotify-dark"
    aria-labelledby="case-study-heading"
  >
    <div className="container-max">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 px-2.5"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-spotify-green mb-3">
          Featured case study
        </p>
        <h2 id="case-study-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="gradient-text">RFI Workflow Orchestrator</span>
        </h2>
        <div className="section-divider mb-4 sm:mb-6" />
        <p className="text-spotify-text-secondary max-w-2xl mx-auto">
          How I shipped a backend-driven workflow from zero to production at Aspora.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.article
            key={step.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-spotify album-card"
          >
            <span className="inline-block rounded-full bg-spotify-green/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-spotify-green mb-4">
              {step.label}
            </span>
            <h3 className="text-xl font-bold text-spotify-text-primary mb-3">{step.title}</h3>
            <p className="text-spotify-text-secondary leading-relaxed">{step.body}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {["Go", "Java", "Kafka", "AWS", "PostgreSQL", "React"].map((tag) => (
          <span key={tag} className="chip-spotify">{tag}</span>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudy;
