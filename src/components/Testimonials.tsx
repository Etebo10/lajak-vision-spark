import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-time Buyer",
    quote: "Lajak made the entire process feel effortless. From our first meeting to closing day, we felt supported and informed every step of the way.",
  },
  {
    name: "David & Maria Chen",
    role: "Sold in 12 Days",
    quote: "Our home sold above asking price in under two weeks. The marketing strategy and staging advice were game-changers.",
  },
  {
    name: "James Okonkwo",
    role: "Real Estate Investor",
    quote: "I've worked with many brokerages over the years. Lajak's market insight and professionalism are truly in a league of their own.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Hear from our clients
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} className="fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
