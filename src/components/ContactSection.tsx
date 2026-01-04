import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
            
            <Button variant="gold" size="lg" asChild>
              <a href="mailto:Priyanshudewagan2004@gmail.com">
                <Mail className="w-4 h-4" /> Mail Me
              </a>
            </Button>
          </motion.div>
          
          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6">Estimate your project?<br />Let me know here.</h3>
            
            <form className="space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">What's your name?</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Your fancy email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Tell me about your project</label>
                <textarea
                  placeholder="I need a website for..."
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              
              <Button type="submit" variant="gold" className="w-full">
                Send Message <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
