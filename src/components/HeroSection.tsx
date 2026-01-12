import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import profileImage from "@/assets/profile.jpg";


const skills = [
  "FRONTEND DEV",
  "WEB DESIGN", 
  "REACT",
  "API INTEGRATION",
];

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 relative overflow-hidden">
      <div className="container-custom relative">
        {/* Main Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="text-[clamp(3rem,12vw,10rem)] font-bold leading-[0.9] tracking-tighter">
            <span className="block">EXPLORE <span className="text-muted-foreground/40">MY</span></span>
            <span className="block text-muted-foreground/40">PORTFOLIO</span>
          </h1>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end relative">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase">
                DEVELOPER EST.2024
              </p>
            </div>
            <a
              href="#projects"
              className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group"
            >
              <ArrowDownRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 md:w-80 lg:w-96 group">
              <img
                src={profileImage}
                alt="Priyanshu Dewangan"
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 text-right"
          >
            <p className="text-sm font-medium uppercase tracking-wide leading-relaxed max-w-xs ml-auto">
              I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD.
            </p>
            
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.p
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-sm font-semibold tracking-wider"
                >
                  {skill}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;