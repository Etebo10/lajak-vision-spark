import { motion } from "framer-motion";

const stats = [
  { value: "$2.4B+", label: "In Property Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const Stats = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 md:p-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Why Lajak Realtors
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-12 max-w-xl">
            A track record that speaks for itself.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
