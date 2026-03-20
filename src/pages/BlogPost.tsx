import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import LogoIcon from "@/components/LogoIcon";

const CALENDLY = "https://calendly.com/uncodeai/30min";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug ?? "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Article not found.</p>
          <Link to="/blog" className="text-primary underline text-sm">Back to blog</Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

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
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← All articles
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">{post.category}</span>
            <span className="text-border">•</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground leading-[1.05] mb-6" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-5">
            {post.excerpt}
          </p>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          className="space-y-6 mb-14"
        >
          {post.content.map((block, i) => (
            <div key={i}>
              {block.heading && (
                <h2 className="text-xl font-medium text-foreground tracking-tight mb-3 mt-8">{block.heading}</h2>
              )}
              <p className="text-muted-foreground leading-[1.8] text-[15px]">{block.body}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0, 0, 1] }}
          className="bg-primary/8 border border-primary/20 rounded-2xl p-6 md:p-8 text-center mb-10"
        >
          <p className="text-foreground font-medium mb-2">Ready to apply this to your business?</p>
          <p className="text-sm text-muted-foreground mb-5">Book a free 30-minute call — no pitch, just a real conversation.</p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-10 px-7 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Contact Us Now — Book a Call
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground mb-4">More Articles</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary block mb-2">{p.category}</span>
                  <p className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
