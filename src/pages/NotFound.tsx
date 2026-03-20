import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LogoIcon from "@/components/LogoIcon";
import ScrollProgress from "@/components/ScrollProgress";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollProgress />

      <nav className="px-6 h-16 flex items-center border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon className="w-7 h-7 text-primary" />
          <span className="text-foreground tracking-tight" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}>Uncode AI</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="text-center max-w-md"
        >
          <div
            className="text-[120px] font-medium text-primary/20 leading-none mb-4 select-none"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            404
          </div>
          <h1 className="text-2xl font-medium text-foreground tracking-tight mb-3">
            This page doesn't exist
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Looks like you followed a broken link or typed a URL that doesn't exist on this site.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground h-11 px-7 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Back to home
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://calendly.com/uncodeai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground h-11 px-7 rounded-lg font-medium text-sm hover:border-primary/40 transition-colors"
            >
              Book a call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
