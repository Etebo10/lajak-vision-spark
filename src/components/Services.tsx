import { motion } from "framer-motion";
import { Home, TrendingUp, Building2, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buying",
    description: "Find your dream home with personalized search and expert negotiation on your side.",
  },
  {
    icon: TrendingUp,
    title: "Selling",
    description: "Maximize your property's value with strategic pricing, staging, and marketing.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Investment properties, office spaces, and retail — we handle the complexity.",
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Hands-off ownership with tenant screening, maintenance, and financial reporting.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            How We Help
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Full-service real estate,
            <br />
            <span className="text-muted-foreground">simplified.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 hover-lift cursor-default"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <service.icon size={22} className="text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
