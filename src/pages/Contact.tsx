import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/MotionReveal";

const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    // Values from state are also in the form inputs, so FormData captures them.
    // Ensure hidden fields (access_key, subject, from_name) are present in the form JSX.

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon. ☕");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20 sm:pt-24">
      <section className="section-padding">
        <div className="container-cafe">
          <Reveal className="text-center mb-12">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">
              Get in Touch
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
              Contact Us
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              We'd love to hear from you. Drop us a message or visit us anytime.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="1db49e0b-d664-4e54-b2e2-7f1a742c7a05" />
                <input type="hidden" name="subject" value="✨ New Premium Inquiry - Brew & Bite Cafe" />
                <input type="hidden" name="from_name" value="Brew & Bite Website" />

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Reveal>

            {/* Info */}
            <StaggerReveal className="space-y-6">
              {[
                { icon: MapPin, title: "Address", lines: ["123 Coffee Lane, Cafe District", "New York, NY 10001"] },
                { icon: Phone, title: "Phone", lines: ["+1 (555) 123-4567"] },
                { icon: Mail, title: "Email", lines: ["hello@brewandbite.cafe"] },
                { icon: Clock, title: "Opening Hours", lines: ["Mon–Fri: 7am – 9pm", "Sat: 8am – 10pm", "Sun: 8am – 8pm"] },
              ].map(({ icon: Icon, title, lines }) => (
                <StaggerItem key={title}>
                  <div className="flex gap-4 p-4 bg-card rounded-xl">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm">{title}</h3>
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
