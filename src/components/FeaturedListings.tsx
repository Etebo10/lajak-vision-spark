import { motion } from "framer-motion";
import { Bath, BedDouble, Maximize, ArrowRight } from "lucide-react";
import listing1 from "@/assets/listing-1.jpg";
import listing2 from "@/assets/listing-2.jpg";
import listing3 from "@/assets/listing-3.jpg";
import listing4 from "@/assets/listing-4.jpg";

const listings = [
  {
    image: listing1,
    price: "$1,250,000",
    title: "Modern Luxury Apartment",
    address: "1240 Park Avenue, Manhattan",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    mls: "MLS-48291",
  },
  {
    image: listing2,
    price: "$2,850,000",
    title: "Skyline Penthouse",
    address: "500 Fifth Ave, Penthouse A",
    beds: 4,
    baths: 3,
    sqft: "3,400",
    mls: "MLS-73012",
  },
  {
    image: listing3,
    price: "$875,000",
    title: "Classic Family Home",
    address: "42 Elm Street, Westchester",
    beds: 5,
    baths: 3,
    sqft: "3,200",
    mls: "MLS-55034",
  },
  {
    image: listing4,
    price: "$4,200,000",
    title: "Downtown Office Tower",
    address: "200 Commerce Blvd, Suite 1800",
    beds: 0,
    baths: 4,
    sqft: "12,000",
    mls: "MLS-91205",
    isCommercial: true,
  },
];

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
          <a
            href="#listings"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing, i) => (
            <motion.div
              key={listing.mls}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden hover-lift cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-sm font-semibold text-foreground">{listing.price}</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
