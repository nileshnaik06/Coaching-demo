import { useState } from "react";
import { MessageCircle, Menu, X, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Bright%20Future%20Academy";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border/40 bg-card/90 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-3.5">
        <a href="#" className="flex flex-col">
          <span className="font-heading text-lg font-bold text-foreground">
            Bright Future Academy
          </span>
          <span className="text-[11px] tracking-wide text-muted-foreground">
            Raipur
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-card px-6 pb-4 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={import.meta.env.VITE_WHATSAPP_API}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
