import { motion } from "framer-motion";

const team = [
  { name: "Alex Lajak", role: "Founder & Principal Broker", initials: "AL" },
  { name: "Priya Sharma", role: "Senior Sales Agent", initials: "PS" },
  { name: "Michael Torres", role: "Commercial Division Lead", initials: "MT" },
  { name: "Olivia Bennett", role: "Client Relations Manager", initials: "OB" },
];

const Team = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Our Team
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            The people behind Lajak
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 text-center hover-lift"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <span className="font-heading text-xl font-semibold text-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
