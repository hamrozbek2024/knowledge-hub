import { Heart } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "FAQ", href: "#" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home" className="font-display text-xl font-bold text-foreground">
          Edu<span className="text-gradient">Verse</span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="flex items-center gap-4">
          {["Twitter", "LinkedIn", "GitHub"].map((s) => (
            <a
              key={s}
              href="#"
              aria-label={s}
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs font-bold"
            >
              {s[0]}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © 2026 EduVerse. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for learners everywhere.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
