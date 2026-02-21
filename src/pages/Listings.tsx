import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, Bath, BedDouble, Maximize, MapPin, X } from "lucide-react";
import { listings } from "@/data/listings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyComparison from "@/components/PropertyComparison";
import MortgageCalculator from "@/components/MortgageCalculator";

const propertyTypes = ["All", "Condominium", "Penthouse", "Single Family", "Townhouse", "Loft", "Commercial Office"];
const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $1M", min: 0, max: 1000000 },
  { label: "$1M – $2M", min: 1000000, max: 2000000 },
  { label: "$2M – $5M", min: 2000000, max: 5000000 },
  { label: "$5M+", min: 5000000, max: Infinity },
];

const Listings = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const range = priceRanges[priceFilter];
    return listings.filter((l) => {
      const matchesSearch =
        !search ||
        l.title.toLowerCase().includes(search.toLowerCase()) ||
        l.address.toLowerCase().includes(search.toLowerCase()) ||
        l.city.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All" || l.propertyType === typeFilter;
      const matchesPrice = l.price >= range.min && l.price < range.max;
      return matchesSearch && matchesType && matchesPrice;
    });
  }, [search, typeFilter, priceFilter]);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 section-padding">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">
              All Properties
            </h1>
            <p className="text-muted-foreground text-sm">{filtered.length} properties available</p>
          </motion.div>

          {/* Search & filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by name, address, or city..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-secondary/50 py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <X size={14} />
                  </button>
                )}
              </div>
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <SlidersHorizontal size={14} /> Filters
              </button>
            </div>

            {filtersOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 pt-4 border-t border-border">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Property Type</p>
                    <div className="flex flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setTypeFilter(type)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                            typeFilter === type
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Price Range</p>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => setPriceFilter(i)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                            priceFilter === i
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Listings grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {filtered.map((listing, i) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/listings/${listing.id}`}
                  className="glass-card overflow-hidden hover-lift group block"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1">
                      <span className="text-sm font-semibold text-foreground">{listing.priceFormatted}</span>
                    </div>
                    <div className="absolute top-3 right-3 rounded-lg bg-background/80 backdrop-blur-sm px-2 py-1">
                      <span className="text-xs text-foreground">{listing.status}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{listing.title}</h3>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                      <MapPin size={12} /> {listing.address}, {listing.city}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {!listing.isCommercial && (
                        <span className="flex items-center gap-1"><BedDouble size={14} /> {listing.beds} beds</span>
                      )}
                      <span className="flex items-center gap-1"><Bath size={14} /> {listing.baths} baths</span>
                      <span className="flex items-center gap-1"><Maximize size={14} /> {listing.sqft} sqft</span>
                    </div>
                  </div>

                  {/* Map embed */}
                  <div className="border-t border-border">
                    <iframe
                      title={`Map - ${listing.title}`}
                      width="100%"
                      height="150"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(listing.address + ", " + listing.city + ", " + listing.state)}&zoom=14`}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No properties match your filters.</p>
              <button
                onClick={() => { setSearch(""); setTypeFilter("All"); setPriceFilter(0); }}
                className="mt-4 text-sm text-foreground underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Property Comparison */}
          <PropertyComparison />

          {/* Mortgage Calculator */}
          <div className="mb-20">
            <MortgageCalculator />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Listings;
