import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Create mailto link (you can replace this with actual API call later)
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Priyanshudewagan2004@gmail.com?subject=${subject}&body=${body}`;

    // Simulate API call delay
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              — Contact
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Any Type Of Query
              <br />
              <span className="text-primary">& Discussion.</span>
            </h2>

            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Feel free to reach out if you're looking for a developer, have a question,
              or just want to connect.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:Priyanshudewagan2004@gmail.com"
                className="flex items-center gap-3 text-primary hover:underline group"
              >
                <Mail className="w-5 h-5" />
                <span>Priyanshudewagan2004@gmail.com</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>

            <Button variant="gold" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="mailto:Priyanshudewagan2004@gmail.com">
                <Mail className="w-4 h-4" /> Mail Me
              </a>
            </Button>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">Estimate your project?<br />Let me know here.</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                  What's your name? <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                  Your fancy email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Tell me about your project <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I need a website for..."
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:border-primary resize-none"
                />
              </div>

              {submitStatus === "error" && (
                <p className="text-sm text-red-500">Please fill all fields correctly.</p>
              )}

              {submitStatus === "success" && (
                <p className="text-sm text-green-500">Message sent successfully! Check your email client.</p>
              )}

              <Button
                type="submit"
                variant="gold"
                className="w-full relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
