import { motion } from "framer-motion";
import { GraduationCap, Code, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Stats & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block">
              — About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Passionate about
              <br />
              <span className="text-primary">clean code</span> & 
              <br />
              beautiful UI.
            </h2>
            
            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-6 mb-8">
              "You can't use up creativity, the more you use, more you have in your significant mind."
            </blockquote>
            
            <div className="flex gap-12">
              <div>
                <span className="text-4xl md:text-5xl font-bold text-primary">2+</span>
                <p className="text-muted-foreground text-sm mt-1">Years of<br />Learning</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-bold text-primary">10+</span>
                <p className="text-muted-foreground text-sm mt-1">Projects<br />Completed</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right - About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-foreground font-medium">B.Tech in Computer Science (AI & ML)</p>
                <p className="text-muted-foreground">Manipal University Jaipur</p>
                <p className="text-muted-foreground text-sm">Expected Graduation: 2027</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a CSE student specializing in AI & ML, I combine my technical knowledge 
                  with a strong passion for frontend development. I believe in creating 
                  intuitive, accessible, and visually appealing web experiences.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What Drives Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm motivated by the challenge of turning complex problems into simple, 
                  elegant solutions. My focus is on building clean, maintainable code 
                  that delivers exceptional user experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
