import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "uncode_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          className="fixed bottom-6 left-6 z-[160] max-w-sm w-full bg-card border border-border rounded-2xl p-5 shadow-[0_8px_40px_hsl(180_38%_5%/0.8)]"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-sm font-medium text-foreground">We use cookies</p>
            <button onClick={decline} className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-0.5">
              <X size={15} />
            </button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            We use cookies to improve your experience and analyze site traffic. See our{" "}
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Accept all
            </button>
            <button
              onClick={decline}
              className="flex-1 h-9 rounded-lg bg-secondary text-foreground text-xs font-medium hover:bg-muted transition-colors border border-border"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
