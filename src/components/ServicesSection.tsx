import { motion } from "framer-motion";
import { Code, Layout, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Building responsive and modern user interfaces using React with clean, reusable components and smooth animations.",
    projects: "5+ Projects",
    color: "bg-primary",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Complete web applications with API integration, state management, and optimized performance for the best user experience.",
    projects: "8+ Projects",
    color: "bg-secondary",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your application looks and works perfectly on all devices and screen sizes.",
    projects: "10+ Projects",
    color: "bg-secondary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
            — Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What I <span className="text-primary">Offer</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.color} rounded-2xl p-8 group hover:scale-105 transition-transform duration-300 ${
                index === 0 ? "text-primary-foreground" : ""
              }`}
            >
              <div className={`p-3 rounded-xl w-fit mb-6 ${
                index === 0 ? "bg-primary-foreground/20" : "bg-primary/10"
              }`}>
                <service.icon className={`w-8 h-8 ${
                  index === 0 ? "text-primary-foreground" : "text-primary"
                }`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`mb-6 leading-relaxed ${
                index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {service.description}
              </p>
              
              <span className={`text-sm font-medium ${
                index === 0 ? "text-primary-foreground/70" : "text-primary"
              }`}>
                {service.projects}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
