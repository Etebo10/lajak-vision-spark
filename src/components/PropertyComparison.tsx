import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ArrowLeftRight } from "lucide-react";
import { listings, type Listing } from "@/data/listings";
import { Link } from "react-router-dom";

const PropertyComparison = () => {
  const [selected, setSelected] = useState<Listing[]>([]);
  const [pickerOpen, setPickerOpen] = useState(false);

  const addProperty = (listing: Listing) => {
    if (selected.length < 3 && !selected.find((s) => s.id === listing.id)) {
      setSelected([...selected, listing]);
    }
    setPickerOpen(false);
  };

  const removeProperty = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  const rows: { label: string; getValue: (l: Listing) => string }[] = [
    { label: "Price", getValue: (l) => l.priceFormatted },
    { label: "Type", getValue: (l) => l.propertyType },
    { label: "Beds", getValue: (l) => (l.isCommercial ? "—" : String(l.beds)) },
    { label: "Baths", getValue: (l) => String(l.baths) },
    { label: "Sq Ft", getValue: (l) => l.sqft },
    { label: "Year Built", getValue: (l) => String(l.yearBuilt) },
    { label: "Lot Size", getValue: (l) => l.lotSize },
    { label: "Walk Score", getValue: (l) => String(l.walkScore) },
    { label: "Transit Score", getValue: (l) => String(l.transitScore) },
    { label: "Status", getValue: (l) => l.status },
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <ArrowLeftRight size={20} className="text-muted-foreground" />
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Compare Properties
            </h2>
          </div>
          <p className="text-muted-foreground text-sm">Select up to 3 properties to compare side by side</p>
        </motion.div>

        {/* Selected cards + add button */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {selected.map((listing) => (
            <div key={listing.id} className="glass-card overflow-hidden relative">
              <button
                onClick={() => removeProperty(listing.id)}
                className="absolute top-3 right-3 z-10 rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-foreground hover:bg-background transition-colors"
              >
                <X size={14} />
              </button>
              <img src={listing.image} alt={listing.title} className="aspect-video w-full object-cover" />
              <div className="p-4">
                <h4 className="font-heading text-sm font-semibold text-foreground">{listing.title}</h4>
                <p className="text-xs text-muted-foreground">{listing.priceFormatted}</p>
              </div>
            </div>
          ))}

          {selected.length < 3 && (
            <button
              onClick={() => setPickerOpen(true)}
              className="glass-card flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors min-h-[200px]"
            >
              <Plus size={24} />
              <span className="text-sm">Add property</span>
            </button>
          )}
        </div>

        {/* Comparison table */}
        {selected.length >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left text-muted-foreground font-medium">Feature</th>
                    {selected.map((l) => (
                      <th key={l.id} className="p-4 text-left text-foreground font-semibold">
                        <Link to={`/listings/${l.id}`} className="hover:underline">{l.title}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-b border-border/50">
                      <td className="p-4 text-muted-foreground">{row.label}</td>
                      {selected.map((l) => (
                        <td key={l.id} className="p-4 text-foreground font-medium">{row.getValue(l)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Picker modal */}
        <AnimatePresence>
          {pickerOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
              onClick={() => setPickerOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="glass-card max-w-lg w-full max-h-[70vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-heading text-lg font-semibold text-foreground">Select Property</h3>
                  <button onClick={() => setPickerOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X size={18} />
                  </button>
                </div>
                <div className="space-y-2">
                  {listings
                    .filter((l) => !selected.find((s) => s.id === l.id))
                    .map((listing) => (
                      <button
                        key={listing.id}
                        onClick={() => addProperty(listing)}
                        className="w-full flex items-center gap-4 rounded-xl p-3 text-left hover:bg-secondary/50 transition-colors"
                      >
                        <img src={listing.image} alt={listing.title} className="h-14 w-14 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{listing.title}</p>
                          <p className="text-xs text-muted-foreground">{listing.priceFormatted} · {listing.address}</p>
                        </div>
                      </button>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertyComparison;
