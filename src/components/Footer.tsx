import LogoIcon from "./LogoIcon";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Case Studies", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <LogoIcon className="w-6 h-6 text-primary" />
              <span className="text-foreground font-medium text-lg tracking-tight">Uncode AI</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Precision AI consulting for modern enterprise.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Uncode AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
