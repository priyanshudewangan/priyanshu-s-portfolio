import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import netflixImage from "@/assets/project-netflix.jpg";
import youtubeImage from "@/assets/project-youtube.jpg";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project2 from "@/assets/project-2.png";
import project1 from "@/assets/project-1.png";
const projects = [
  {
    title: "Netflix Clone",
    description: "A Netflix-inspired streaming platform UI featuring movie listings powered by external APIs, smooth navigation, and responsive design.",
    tech: ["React", "JavaScript", "APIs", "CSS"],
    image: project1,
    liveUrl: "https://netflixclone23-blond.vercel.app/",
    sourceUrl: "https://github.com/priyanshudewangan/netflixclone23.git",
  },
  {
    title: "YouTube Clone",
    description: "YouTube-style video platform, search functionality, and modern user interface.",
    tech: ["React", "APIs", "JavaScript", "Tailwind"],
    image: project2,
    liveUrl: "https://ytclone-gray.vercel.app",
    sourceUrl: "https://github.com/priyanshudewangan/ytclone",
  },
  {
    title: "Movie Recommendation Website",
    description: "An intelligent movie recommendation platform that suggests personalized movies based on user preferences and viewing history. Features user authentication, like/dislike functionality, genre-based filtering, and AI-powered recommendations for a tailored entertainment experience.",
    tech: ["React", "TypeScript", "APIs", "Tailwind CSS", "State Management"],
    image: project3, // You can add a specific image later
    liveUrl: "https://movie-website-for-recommendation.vercel.app",
    sourceUrl: "#",
  },
  {
    title: "Restaurant Website",
    description: "A modern and responsive restaurant website showcasing menu items, services, and contact details. Includes interactive UI components, smooth animations, and mobile-first design for an enhanced user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    image: project4,
    liveUrl: "https://restrauntwebsite3.vercel.app",
    sourceUrl: "https://github.com/priyanshudewangan/restrauntwebsite3",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              — Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              All Creative Works,
              <br />
              <span className="text-primary">Selected Projects.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Here are some of my recent projects that showcase my skills in frontend development and API integration.
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-xl bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Project Info */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary text-sm font-medium">Project</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm">Development</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group cursor-pointer">
                  {project.title}
                  <ArrowUpRight className="inline-block ml-2 w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="gold" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
