import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SEO from "../components/SEO";
import { getBlogBySlug } from "../data/blogs";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-spotify-dark pt-24 pb-16">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        url={`/blog/${post.slug}`}
        type="article"
      />

      <article className="container-max px-4 md:px-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-spotify-text-secondary hover:text-spotify-green transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            All posts
          </Link>

          <header className="mb-10 pb-8 border-b border-spotify-border">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-spotify-text-primary tracking-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="chip-spotify">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="blog-content">
            <ReactMarkdown>{post.content.trim()}</ReactMarkdown>
          </div>

          <footer className="mt-12 pt-8 border-t border-spotify-border flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link to="/blog" className="btn-spotify-ghost inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              More posts
            </Link>
            <Link to="/#contact" className="btn-spotify inline-flex items-center gap-2">
              Get in touch
            </Link>
          </footer>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPostPage;
