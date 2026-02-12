import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "@/data/menuItems";
import ProductCard from "@/components/ProductCard";
import { Reveal } from "@/components/MotionReveal";

const categories = [
  { key: "all", label: "All" },
  { key: "beverages", label: "Beverages" },
  { key: "food", label: "Food" },
  { key: "desserts", label: "Desserts" },
] as const;

const MenuPage = () => {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <main className="pt-20 sm:pt-24">
      <section className="section-padding">
        <div className="container-cafe">
          <Reveal className="text-center mb-10">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
              Our Menu
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Delicious Offerings
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              From artisan coffees to freshly baked treats — there's something for everyone.
            </p>
          </Reveal>

          {/* Filters */}
          <Reveal className="flex justify-center gap-2 mb-10 flex-wrap" delay={0.1}>
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-border"
                }`}
              >
                {label}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
