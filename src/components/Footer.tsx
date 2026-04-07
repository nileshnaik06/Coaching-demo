const Footer = () => (
  <footer className="border-t border-border/40 bg-card py-8">
    <div className="container text-center">
      <p className="font-heading text-base font-bold text-foreground">
        Bright Future Academy
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Class 8–12 · NEET · SSC — Raipur, Chhattisgarh
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bright Future Academy. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
