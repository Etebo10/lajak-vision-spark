import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft, Bath, BedDouble, Maximize, MapPin, Calendar, Home, Tag, CheckCircle,
  ChevronLeft, ChevronRight, Play, Star, Footprints, Train, GraduationCap, Phone, Mail
} from "lucide-react";
import { listings } from "@/data/listings";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MortgageCalculator from "@/components/MortgageCalculator";
import ScheduleViewing from "@/components/ScheduleViewing";

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const listing = listings.find((l) => l.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!listing) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 text-center section-padding">
          <h1 className="font-heading text-3xl text-foreground mb-4">Property Not Found</h1>
          <Link to="/listings" className="text-sm text-muted-foreground hover:text-foreground underline">
            ← Back to listings
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedListings = listings.filter((l) => l.id !== listing.id).slice(0, 3);
  const mapQuery = encodeURIComponent(`${listing.address}, ${listing.city}, ${listing.state} ${listing.zip}`);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-28 section-padding">
        <div className="mx-auto max-w-7xl">
          {/* Back */}
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> All Listings
          </Link>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden mb-8"
          >
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img
                src={listing.images[currentImage]}
                alt={`${listing.title} - Image ${currentImage + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
            {listing.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImage((p) => (p === 0 ? listing.images.length - 1 : p - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrentImage((p) => (p === listing.images.length - 1 ? 0 : p + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {listing.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        i === currentImage ? "bg-foreground" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
            {/* Virtual Tour badge */}
            <div className="absolute top-4 right-4">
              <button className="flex items-center gap-2 rounded-xl bg-background/80 backdrop-blur-sm px-4 py-2 text-sm text-foreground hover:bg-background transition-colors">
                <Play size={14} /> Virtual Tour
              </button>
            </div>
            <div className="absolute top-4 left-4 rounded-xl bg-background/80 backdrop-blur-sm px-4 py-2">
              <span className="text-sm font-medium text-foreground">{listing.status}</span>
            </div>
          </motion.div>

          {/* Main content grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & price */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {listing.title}
                    </h1>
                    <p className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <MapPin size={14} /> {listing.address}, {listing.city}, {listing.state} {listing.zip}
                    </p>
                  </div>
                  <p className="font-heading text-3xl font-bold text-foreground">{listing.priceFormatted}</p>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 py-4 border-y border-border">
                  {!listing.isCommercial && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BedDouble size={16} /> <span className="text-foreground font-medium">{listing.beds}</span> Beds
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bath size={16} /> <span className="text-foreground font-medium">{listing.baths}</span> Baths
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Maximize size={16} /> <span className="text-foreground font-medium">{listing.sqft}</span> Sq Ft
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} /> Built <span className="text-foreground font-medium">{listing.yearBuilt}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Home size={16} /> <span className="text-foreground font-medium">{listing.propertyType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag size={14} /> <span className="text-foreground font-medium">{listing.mls}</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">About This Property</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{listing.description}</p>
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {listing.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-foreground shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Neighborhood */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Neighborhood</h2>
                <div className="grid gap-4 sm:grid-cols-3 mb-6">
                  <div className="glass-card p-4 text-center">
                    <Footprints size={20} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold text-foreground">{listing.walkScore}</p>
                    <p className="text-xs text-muted-foreground">Walk Score</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <Train size={20} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold text-foreground">{listing.transitScore}</p>
                    <p className="text-xs text-muted-foreground">Transit Score</p>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <GraduationCap size={20} className="mx-auto mb-2 text-muted-foreground" />
                    <p className="text-2xl font-bold text-foreground">{listing.schools.length}</p>
                    <p className="text-xs text-muted-foreground">Nearby Schools</p>
                  </div>
                </div>

                {listing.schools.length > 0 && (
                  <div className="space-y-2">
                    {listing.schools.map((school) => (
                      <div key={school.name} className="glass-card p-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-foreground">{school.name}</p>
                          <p className="text-xs text-muted-foreground">{school.type} · {school.distance}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-foreground" />
                          <span className="text-sm font-semibold text-foreground">{school.rating}/10</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Map */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Location</h2>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe
                    title="Property location"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=15`}
                  />
                </div>
              </motion.div>

              {/* Mortgage Calculator */}
              <MortgageCalculator defaultPrice={listing.price} />
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              {/* Agent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Listing Agent</h3>
                <p className="text-foreground font-medium mb-3">{listing.agent.name}</p>
                <div className="space-y-2">
                  <a href={`tel:${listing.agent.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone size={14} /> {listing.agent.phone}
                  </a>
                  <a href={`mailto:${listing.agent.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={14} /> {listing.agent.email}
                  </a>
                </div>
              </motion.div>

              {/* Schedule Viewing */}
              <ScheduleViewing listingTitle={listing.title} agentName={listing.agent.name} />
            </div>
          </div>

          {/* Related listings */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">You May Also Like</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedListings.map((l) => (
                <Link to={`/listings/${l.id}`} key={l.id} className="glass-card overflow-hidden hover-lift group">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={l.image} alt={l.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute top-3 left-3 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1">
                      <span className="text-xs font-semibold text-foreground">{l.priceFormatted}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-foreground mb-1">{l.title}</h3>
                    <p className="text-xs text-muted-foreground">{l.address}, {l.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ListingDetail;
