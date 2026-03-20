import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LogoIcon from "@/components/LogoIcon";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <CursorGlow />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <LogoIcon className="w-7 h-7 text-primary" />
            <span className="text-foreground tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-14"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-4">Insights</span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>
            Practical AI thinking.
          </h1>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl">
            No hype. No theory. Just actionable perspectives on AI adoption, strategy, and implementation.
          </p>
        </motion.div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0, 0, 1] }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">{post.category}</span>
                  <span className="text-border">•</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-border">•</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                  Read article <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
