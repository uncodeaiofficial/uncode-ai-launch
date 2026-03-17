const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <span className="font-mono text-[10px] font-bold text-primary-foreground">U</span>
          </div>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Uncode AI. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Security"].map((item) => (
            <a key={item} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
