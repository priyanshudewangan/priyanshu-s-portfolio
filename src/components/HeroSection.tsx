import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";

const skills = [
  "FRONTEND DEV",
  "WEB DESIGN",
  "REACT",
  "API INTEGRATION",
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="min-h-screen pt-24 pb-12 relative overflow-hidden flex flex-col justify-center">
      <div className="container-custom relative z-10">

        {/* Main Typography */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={titleVariants}
              className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.85] tracking-tighter"
            >
              EXPLORE <span className="text-muted-foreground/30">MY</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={titleVariants}
              className="text-[clamp(3.5rem,11vw,11rem)] font-bold leading-[0.85] tracking-tighter text-muted-foreground/30"
            >
              PORTFOLIO
            </motion.h1>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end relative">
          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold tracking-wider uppercase opacity-70">
                DEVELOPER EST.2024
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <a
                href="#projects"
                className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-foreground scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                <ArrowDownRight className="w-8 h-8 relative z-10 group-hover:-rotate-45 transition-transform duration-500 ease-out" />
              </a>
            </motion.div>
          </motion.div>

          {/* Center - Profile Image */}
          <motion.div
            style={{ y, opacity }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center order-1 lg:order-2 -mt-10 lg:-mt-20 mb-8 lg:mb-0"
          >
            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src={profileImage}
                alt="Priyanshu Dewangan"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-right order-3"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm font-medium uppercase tracking-wide leading-relaxed max-w-xs ml-auto opacity-80">
                I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD.
              </p>
            </motion.div>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.p
                  key={skill}
                  variants={itemVariants}
                  className="text-sm font-bold tracking-widest"
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