import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, MessageCircle, Building2, ChevronDown } from "lucide-react";
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

const offices = [
  {
    city: "Manhattan",
    address: "420 Lexington Avenue, Suite 2800",
    state: "New York, NY 10170",
    phone: "(212) 555-0100",
    email: "manhattan@lajakrealtors.com",
    hours: "Mon–Fri 9AM–7PM, Sat 10AM–4PM",
    mapQuery: "420 Lexington Avenue, New York, NY",
  },
  {
    city: "Greenwich",
    address: "125 Greenwich Avenue, Suite 4",
    state: "Greenwich, CT 06830",
    phone: "(203) 555-0200",
    email: "greenwich@lajakrealtors.com",
    hours: "Mon–Fri 9AM–6PM, Sat 10AM–3PM",
    mapQuery: "125 Greenwich Avenue, Greenwich, CT",
  },
];

const inquiryTypes = [
  "I want to buy a property",
  "I want to sell my property",
  "Commercial real estate inquiry",
  "Property management",
  "Investment advisory",
  "General inquiry",
];

const faqs = [
  {
    q: "How does the home buying process work with Lajak?",
    a: "We start with a discovery call to understand your needs, budget, and timeline. Then we curate properties, schedule tours, guide you through offers and negotiations, coordinate inspections and financing, and support you through closing.",
  },
  {
    q: "What does it cost to work with a buyer's agent?",
    a: "In most cases, the seller pays the buyer's agent commission — meaning our services as your buyer's agent come at no direct cost to you. We'll explain the full fee structure during our initial consultation.",
  },
  {
    q: "How do you determine the right listing price?",
    a: "We conduct a comprehensive market analysis (CMA) reviewing comparable sales, current inventory, market trends, and your property's unique features. Our data-driven approach ensures competitive pricing that maximizes your return.",
  },
  {
    q: "Do you handle commercial and residential properties?",
    a: "Yes. Lajak has dedicated teams for both residential and commercial real estate, including office spaces, retail, multi-family, and industrial properties across the NY metro area.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve Manhattan, Brooklyn, Queens, Westchester, Hoboken/NJ, and Greenwich/CT. For luxury properties, we also work with clients nationally and internationally.",
  },
  {
    q: "Can you help with relocation from abroad?",
    a: "Absolutely. We've helped families and executives relocate from London, Dubai, Hong Kong, and more. Our relocation services include property search, school advisory, neighborhood guidance, and move coordination.",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you have a question, need a valuation, or are ready to make a move — we're here to help. Reach out and a member of our team will respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card p-8 md:p-12"
            >
              {!submitted ? (
                <>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground mb-1.5 block">Inquiry Type *</label>
                        <select
                          required
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
                        >
                          <option value="">Select one...</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                        placeholder="Tell us about your real estate goals..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
                    >
                      <Send size={14} /> Send Message
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={24} className="text-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thank you, {formData.name}. A team member will reach out within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "" }); }}
                    className="text-sm text-foreground underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass-card p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-5">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+12125550100" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone size={16} /> (212) 555-0100
                  </a>
                  <a href="mailto:hello@lajakrealtors.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={16} /> hello@lajakrealtors.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock size={16} /> Mon–Fri 9AM–7PM EST
                  </div>
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Free Home Valuation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Curious what your property is worth? Get a complimentary market analysis from our experts.
                </p>
                <button
                  onClick={() => {
                    setFormData({ ...formData, inquiryType: "I want to sell my property", message: "I'd like a free home valuation for my property." });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                >
                  Request Valuation <ArrowRight size={14} />
                </button>
              </div>

              <div className="glass-card p-8">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Career at Lajak</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're always looking for talented agents and staff. Send your resume to careers@lajakrealtors.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">Our Offices</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Visit Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card overflow-hidden hover-lift"
              >
                <div className="aspect-video">
                  <iframe
                    title={`Map - ${office.city}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(office.mapQuery)}&zoom=15`}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={18} className="text-foreground" />
                    <h3 className="font-heading text-xl font-bold text-foreground">{office.city} Office</h3>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {office.address}<br />{office.state}</p>
                    <p className="flex items-center gap-2"><Phone size={14} /> {office.phone}</p>
                    <p className="flex items-center gap-2"><Mail size={14} /> {office.email}</p>
                    <p className="flex items-center gap-2"><Clock size={14} /> {office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
