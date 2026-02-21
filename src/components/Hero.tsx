import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern luxury home at dusk"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5">
              <span className="text-xs font-medium text-muted-foreground">
                Trusted by 500+ families
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground">
              Your Next Chapter
              <br />
              <span className="text-muted-foreground">Starts Here</span>
            </h1>

            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-muted-foreground">
              Expert real estate guidance for buyers, sellers, and investors.
              We make finding your perfect property effortless.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#listings"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
              >
                Browse Listings
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-card"
              >
                Get a Free Valuation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
