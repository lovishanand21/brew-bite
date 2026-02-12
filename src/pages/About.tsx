import { Coffee, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import heroCafe from "@/assets/hero-cafe.jpg";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/MotionReveal";

const About = () => (
  <main className="pt-20 sm:pt-24">
    {/* Hero */}
    <section className="relative h-64 sm:h-80 overflow-hidden">
      <motion.img
        src={heroCafe}
        alt="Our cafe"
        className="w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-cafe-espresso/60 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl font-bold text-cafe-cream"
        >
          Our Story
        </motion.h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-cafe max-w-3xl">
        <Reveal className="text-center mb-8">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
            About Us
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            More Than Just a Cafe
          </h2>
        </Reveal>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <Reveal delay={0.1}>
            <p>
              Brew & Bite Cafe was born from a simple belief: that a great cup of coffee and a warm meal can make anyone's day a little brighter. Founded in 2018, we started as a small corner café with a passion for quality and a love for community.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Every bean we source is ethically grown and roasted in small batches to bring out nuanced flavors. Our kitchen uses only the freshest, locally-sourced ingredients — because we believe food should be honest, wholesome, and delicious.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              From our signature cappuccinos to our handmade brownies, every item on our menu is crafted with care. Whether you're stopping in for a quick espresso or settling in for a leisurely brunch, Brew & Bite is your cozy corner of the world.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-card">
      <div className="container-cafe">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Coffee, title: "Quality First", desc: "Premium ingredients and artisan techniques in every cup and plate." },
            { icon: Users, title: "Community Driven", desc: "A warm space where neighbors become friends over great food." },
            { icon: Award, title: "Award Winning", desc: "Recognized for excellence in both our beverages and culinary creations." },
          ].map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title} className="text-center p-6">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  </main>
);

export default About;
