import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { listings } from "@/data/listings";

const featured = listings.slice(0, 4);

const FeaturedListings = () => {
  return (
    <section id="listings" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Featured
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
              Handpicked properties
            </h2>
          </div>
          <Link
            to="/listings"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((listing, i) => (
            <motion.div
              key={listing.mls}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/listings/${listing.id}`}
                className="group glass-card overflow-hidden hover-lift block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1">
                    <span className="text-sm font-semibold text-foreground">{listing.priceFormatted}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {listing.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">{listing.address}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {!listing.isCommercial && (
                      <span className="flex items-center gap-1">
                        <BedDouble size={14} /> {listing.beds} beds
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {listing.baths} baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={14} /> {listing.sqft} sqft
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all listings <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
