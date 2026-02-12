import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Leaf, Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroCafe from "@/assets/hero-cafe.jpg";
import { menuItems } from "@/data/menuItems";
import ProductCard from "@/components/ProductCard";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/MotionReveal";

const featuredItems = menuItems.slice(0, 4);

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCafe}
            alt="Brew & Bite Cafe interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cafe-espresso/60" />
        </div>
        <div className="relative z-10 container-cafe text-center sm:text-left py-32">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-cafe-cream/80 font-medium tracking-widest uppercase text-sm mb-4"
            >
              Welcome to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-cafe-cream leading-tight"
            >
              Brew & Bite<br />
              <span className="italic font-normal text-4xl sm:text-5xl lg:text-6xl opacity-80">
                Cafe
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl text-cafe-cream/80 max-w-lg"
            >
              Where every sip meets comfort. Handcrafted beverages & fresh bites in a cozy atmosphere.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-cafe-cream/40 text-cafe-cream rounded-full font-semibold hover:bg-cafe-cream/10 transition-colors"
              >
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-cafe">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Coffee, title: "Artisan Coffee", desc: "Ethically sourced beans, roasted in small batches for the perfect cup every time." },
              { icon: Leaf, title: "Fresh Ingredients", desc: "Locally sourced, organic ingredients that make every dish a wholesome delight." },
              { icon: Heart, title: "Made with Love", desc: "Every recipe crafted with passion and care by our talented culinary team." },
            ].map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="text-center p-6 rounded-xl">
                <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Featured */}
      <section className="section-padding bg-card">
        <div className="container-cafe">
          <Reveal className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Favorites</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Best Sellers</h2>
          </Reveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <StaggerItem key={item.id}>
                <ProductCard item={item} />
              </StaggerItem>
            ))}
          </StaggerReveal>
          <Reveal className="text-center mt-10" delay={0.3}>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <Reveal className="container-cafe text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Craving Something Delicious?
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">
            Browse our full menu and order your favorites. Freshly prepared, just for you.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
};

export default Index;
