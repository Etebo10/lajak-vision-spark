import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Building2, TrendingUp, Shield, Key, BarChart3, Users, FileText, Search, Handshake, Scale, Megaphone, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  {
    icon: Home,
    title: "Residential Sales",
    description: "From starter homes to luxury estates, we guide buyers and sellers through every step of the residential transaction process with precision and care.",
    features: ["Market analysis & pricing strategy", "Professional staging advice", "Targeted marketing campaigns", "Negotiation & closing support"],
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description: "Strategic advisory for commercial properties — office spaces, retail locations, and industrial facilities. We maximize ROI for investors and businesses.",
    features: ["Tenant representation", "Lease negotiation", "Investment analysis", "Portfolio management"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Data-driven insights to build and grow your real estate portfolio. We identify high-yield opportunities and manage risk across market cycles.",
    features: ["Market trend analysis", "ROI projections", "Risk assessment", "Portfolio diversification"],
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Full-service property management that protects your investment and keeps tenants happy. From maintenance to rent collection, we handle it all.",
    features: ["Tenant screening", "Rent collection", "Maintenance coordination", "Financial reporting"],
  },
  {
    icon: Search,
    title: "Buyer Representation",
    description: "Dedicated buyer's agents who advocate exclusively for your interests. We find the right property, negotiate the best deal, and ensure a smooth closing.",
    features: ["Needs assessment", "Property search & tours", "Offer strategy", "Due diligence support"],
  },
  {
    icon: Megaphone,
    title: "Luxury Marketing",
    description: "Bespoke marketing for high-end properties. Professional photography, virtual tours, targeted digital campaigns, and exclusive network access.",
    features: ["Professional photography & video", "Virtual & 3D tours", "Social media campaigns", "Private showings"],
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We learn your goals, timeline, and preferences through an in-depth consultation." },
  { step: "02", title: "Strategy", description: "A custom plan is crafted — whether buying, selling, or investing — tailored to your market." },
  { step: "03", title: "Execution", description: "Our team activates marketing, negotiations, and logistics with precision and transparency." },
  { step: "04", title: "Closing", description: "We manage every detail through closing and beyond, ensuring a seamless experience." },
];

const stats = [
  { value: "$2.4B+", label: "Total Sales Volume" },
  { value: "1,200+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years of Experience" },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Full-Spectrum Real Estate Excellence
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you're buying your first home, selling a luxury estate, or building an investment portfolio — Lajak delivers results with integrity, expertise, and relentless attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="glass-card p-8 group hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={22} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={14} className="text-foreground shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">How It Works</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Process</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >
                <span className="font-heading text-6xl font-bold text-secondary block mb-4">{step.step}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight size={20} className="text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="glass-card p-10 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <span className="font-heading text-3xl md:text-4xl font-bold text-foreground block mb-1">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Schedule a free consultation and discover how Lajak can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Book a Consultation
              </Link>
              <a
                href="tel:+12125550100"
                className="flex items-center gap-2 rounded-xl border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Phone size={14} /> (212) 555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;
