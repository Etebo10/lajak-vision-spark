import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, Users, Award, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const testimonials = [
  {
    quote: "Lajak didn't just sell our home — they orchestrated the entire experience. From staging to closing in 11 days above asking, every detail was flawless.",
    name: "Jennifer & Mark Sullivan",
    role: "Sellers — Park Avenue, Manhattan",
    rating: 5,
    highlight: "Sold in 11 days above asking",
  },
  {
    quote: "As first-time buyers in NYC, we were overwhelmed. Sarah broke everything down, found us options we never would have discovered, and negotiated a price that saved us $85K.",
    name: "David Chen",
    role: "Buyer — Brooklyn Heights",
    rating: 5,
    highlight: "Saved $85K on purchase",
  },
  {
    quote: "I've worked with many brokers over my 20-year investment career. James at Lajak is the only one who genuinely treats my portfolio like his own. Exceptional market insight.",
    name: "Robert Harrington III",
    role: "Investor — Multi-property Portfolio",
    rating: 5,
    highlight: "20-year client relationship",
  },
  {
    quote: "They found our dream home in Greenwich when we'd nearly given up. The attention to detail, the patience, the expertise — Lajak is a different breed of brokerage.",
    name: "The Nakamura Family",
    role: "Buyers — Greenwich, CT",
    rating: 5,
    highlight: "Found dream home in 6 weeks",
  },
  {
    quote: "Our commercial lease negotiation saved us over $200K annually. James understood our business needs and fought for terms that positioned us for growth.",
    name: "Alexandra Petrova",
    role: "CEO, Petrova Design Group",
    rating: 5,
    highlight: "$200K annual lease savings",
  },
  {
    quote: "The virtual tour and marketing materials Lajak produced for our penthouse were gallery-quality. We received 12 offers in the first weekend.",
    name: "Michael & Patricia Westbrook",
    role: "Sellers — SoHo Penthouse",
    rating: 5,
    highlight: "12 offers in first weekend",
  },
  {
    quote: "Moving from London, we needed someone who understood both markets. Lajak's global perspective and local expertise made our transition seamless.",
    name: "Thomas & Sophie Laurent",
    role: "Relocation — London to Manhattan",
    rating: 5,
    highlight: "International relocation",
  },
  {
    quote: "Lajak manages three of my rental properties. Occupancy stays at 98%, maintenance is proactive, and the monthly reporting is impeccable. They've been invaluable.",
    name: "Carlos Mendez",
    role: "Property Owner — Hoboken, NJ",
    rating: 5,
    highlight: "98% occupancy rate",
  },
  {
    quote: "After a difficult experience with another broker, Lajak restored our faith. Honest communication, no pressure, and a result that exceeded every expectation.",
    name: "Rachel & Steven Kim",
    role: "Buyers — Westchester, NY",
    rating: 5,
    highlight: "Trust restored after bad experience",
  },
];

const caseStudies = [
  {
    title: "Park Avenue Penthouse",
    category: "Luxury Sale",
    result: "Sold for $3.2M — 18% above asking",
    description: "Strategic pricing, exclusive network marketing, and competitive bidding drove an extraordinary result for our sellers on one of Manhattan's most prestigious addresses.",
    metrics: [
      { label: "List Price", value: "$2.7M" },
      { label: "Sale Price", value: "$3.2M" },
      { label: "Days on Market", value: "8" },
      { label: "Offers Received", value: "7" },
    ],
  },
  {
    title: "Brooklyn Portfolio Acquisition",
    category: "Investment",
    result: "4 properties acquired — 22% below market",
    description: "Identified off-market opportunities in emerging Brooklyn neighborhoods. Negotiated bulk acquisition terms that delivered immediate equity for our investor client.",
    metrics: [
      { label: "Properties", value: "4" },
      { label: "Total Investment", value: "$4.8M" },
      { label: "Below Market", value: "22%" },
      { label: "Projected ROI", value: "15%" },
    ],
  },
  {
    title: "Greenwich Estate — International Buyer",
    category: "Buyer Representation",
    result: "Closed in 45 days — full relocation support",
    description: "Coordinated a complex international purchase including property search, legal liaison, school enrollment, and move management for a family relocating from Dubai.",
    metrics: [
      { label: "Search Duration", value: "6 weeks" },
      { label: "Properties Toured", value: "22" },
      { label: "Closing Time", value: "45 days" },
      { label: "Satisfaction", value: "10/10" },
    ],
  },
];

const TestimonialsPage = () => {
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
              Client Stories
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Words That Mean Everything
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our clients' success is our greatest achievement. Here's what they have to say about working with Lajak Realtors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, value: "4.9/5", label: "Average Rating" },
              { icon: Users, value: "500+", label: "Happy Clients" },
              { icon: Award, value: "98%", label: "Would Refer Us" },
              { icon: Heart, value: "100%", label: "Client-First Promise" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-6 text-center hover-lift"
              >
                <stat.icon size={20} className="mx-auto mb-3 text-foreground" />
                <span className="font-heading text-2xl font-bold text-foreground block">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">What Our Clients Say</h2>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={fadeUp}
                className="glass-card p-8 break-inside-avoid hover-lift group"
              >
                <Quote size={24} className="text-muted-foreground/30 mb-4 group-hover:text-foreground/50 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-medium text-foreground">{t.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Results</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Case Studies</h2>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 md:p-12 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground mb-3">{cs.category}</span>
                    <h3 className="font-heading text-2xl font-bold text-foreground">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">{cs.description}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="font-heading text-lg font-bold text-foreground">{cs.result}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-secondary/50 text-center">
                      <span className="font-heading text-xl font-bold text-foreground block">{m.value}</span>
                      <span className="text-xs text-muted-foreground">{m.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Your Success Story Starts Here</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of satisfied clients who trusted Lajak with their most important real estate decisions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all"
            >
              Work With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TestimonialsPage;
