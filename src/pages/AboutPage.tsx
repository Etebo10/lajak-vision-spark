import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Heart, Target, Eye, Users, Building2, TrendingUp, Globe, ArrowRight } from "lucide-react";
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

const values = [
  { icon: Heart, title: "Integrity First", description: "We believe trust is earned through transparency, honesty, and consistently doing right by our clients — even when no one is watching." },
  { icon: Target, title: "Results-Driven", description: "Every strategy, every negotiation, every decision is laser-focused on delivering the best possible outcome for you." },
  { icon: Eye, title: "Market Mastery", description: "Deep local knowledge meets global perspective. We don't just follow markets — we anticipate them." },
  { icon: Users, title: "Client-Centric", description: "Your goals are our mission. We tailor every engagement to your unique needs, timeline, and vision." },
];

const milestones = [
  { year: "2009", title: "Founded", description: "Lajak Realtors was founded with a simple mission: deliver exceptional real estate service with integrity." },
  { year: "2013", title: "100th Sale", description: "Reached our 100th closed transaction and expanded into commercial real estate services." },
  { year: "2016", title: "Luxury Division", description: "Launched our luxury division, specializing in properties above $5M across the tri-state area." },
  { year: "2019", title: "$1B Milestone", description: "Surpassed $1 billion in total sales volume — a testament to our clients' trust." },
  { year: "2022", title: "Expansion", description: "Opened our second office in Greenwich, CT, expanding our reach into Connecticut's Gold Coast." },
  { year: "2024", title: "Innovation", description: "Introduced AI-powered market analytics and virtual tour technology for all listings." },
];

const team = [
  { name: "Marcus Lajak", role: "Founder & CEO", initials: "ML", bio: "25+ years in NYC real estate. Former VP at Sotheby's International. Licensed in NY, NJ, CT." },
  { name: "Sarah Mitchell", role: "Lead Sales Agent", initials: "SM", bio: "Top 1% of NYC agents. Specializes in Manhattan luxury condos and penthouses. $500M+ in career sales." },
  { name: "James Okafor", role: "Commercial Director", initials: "JO", bio: "Former CBRE analyst. Leads our commercial and investment advisory practice across the tri-state area." },
  { name: "Elena Vasquez", role: "Marketing Director", initials: "EV", bio: "Award-winning luxury real estate marketer. Expert in digital strategy, branding, and property storytelling." },
  { name: "David Chen", role: "Property Manager", initials: "DC", bio: "Manages 200+ residential and commercial units. CPM certified with 12 years of management experience." },
  { name: "Aisha Thompson", role: "Client Relations", initials: "AT", bio: "Ensures every client receives white-glove service from first contact through closing and beyond." },
];

const awards = [
  "Top 25 Real Estate Teams — Real Trends",
  "Best Luxury Brokerage — NY Real Estate Board",
  "5-Star Professional Excellence Award",
  "Inc. 5000 Fastest Growing Companies",
  "Best Places to Work in Real Estate",
  "Pinnacle Producer Award — 7 consecutive years",
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground mb-6">
                About Lajak
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Built on Trust.<br />Driven by Results.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Since 2009, Lajak Realtors has been the trusted partner for buyers, sellers, and investors across the New York metropolitan area. We combine deep market expertise with a genuine commitment to our clients' success.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/listings"
                  className="rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View Listings
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "15+", label: "Years in Business" },
                  { value: "1,200+", label: "Properties Sold" },
                  { value: "$2.4B", label: "Sales Volume" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center p-4">
                    <span className="font-heading text-2xl md:text-3xl font-bold text-foreground block">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Our Mission</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Redefining the Real Estate Experience
                </h2>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We exist to simplify, elevate, and humanize real estate. In an industry often driven by transactions, we focus on relationships. Every client deserves an advisor who listens, strategizes, and delivers — not just an agent who opens doors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines institutional-grade market intelligence with boutique-level personal attention. The result? Better outcomes, smoother experiences, and clients who become lifelong partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">What Guides Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Values</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Our Journey</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Key Milestones</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                >
                  <div className="md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-foreground -translate-x-1/2 mt-2 z-10" />
                  <div className="md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <span className="font-heading text-2xl font-bold text-foreground">{m.year}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">The People</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Meet Our Team</h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 hover-lift group"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <span className="font-heading text-lg font-bold">{member.initials}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award size={24} className="text-foreground" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Awards & Recognition</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, i) => (
                <motion.div
                  key={award}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                >
                  <div className="w-2 h-2 rounded-full bg-foreground shrink-0" />
                  <span className="text-sm text-foreground">{award}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you're buying, selling, or investing — our team is ready to help you succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-all"
            >
              Start the Conversation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
