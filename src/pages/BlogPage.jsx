import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SEO from "../components/SEO";
import { getSortedPosts } from "../data/blogs";

const BlogPage = () => {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen bg-spotify-dark pt-24 pb-16">
      <SEO
        title="Blog"
        description="Engineering notes on backend systems, Go, fintech, PostgreSQL, and shipping production code — by Aviral Asthana."
        keywords="Aviral Asthana blog, backend engineering, Go, fintech, PostgreSQL, software engineering"
        url="/blog"
      />

      <div className="container-max px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="equalizer" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-spotify-green font-semibold">Writing</span>
          </div>
          <h1 className="section-heading mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-spotify-text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Notes on backend engineering, fintech systems, and things I learn while building in production.
          </p>
        </motion.div>

        {posts.length === 0 ? (
          <div className="card-spotify text-center py-16">
            <p className="text-spotify-text-secondary">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full card-spotify album-card p-0 overflow-hidden"
                >
                  <div className="h-2 bg-spotify-gradient" />
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-spotify-text-tertiary mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-spotify-text-primary mb-3 group-hover:text-spotify-green transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-spotify-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="chip-spotify">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-spotify-green group-hover:gap-3 transition-all">
                      Read post
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/" className="btn-spotify-secondary inline-flex items-center gap-2">
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
