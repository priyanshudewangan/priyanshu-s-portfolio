import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              — Introduction
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-primary">Priyanshu</span>
              <br />
              <span className="text-foreground">Dewangan.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              Frontend & Web Developer,
              <br />
              CSE (AI & ML) Student.
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Passionate about crafting beautiful, responsive web experiences with React. 
              Currently pursuing B.Tech in Computer Science (AI & ML) at Manipal University Jaipur.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="hero" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Priyanshudewagan2004@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl transform rotate-6" />
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl transform -rotate-3" />
              
              {/* Main image */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={profileImage}
                  alt="Priyanshu Dewangan"
                  className="w-full h-full object-cover"
                />
                {/* Gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
