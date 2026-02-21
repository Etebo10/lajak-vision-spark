const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
              Lajak<span className="text-muted-foreground">.</span>
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Full-service real estate brokerage helping clients buy, sell, and invest with confidence.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Services
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Buying</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Selling</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Commercial</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Property Management</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Fair Housing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Lajak Realtors. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Licensed Real Estate Brokerage · NMLS #123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
