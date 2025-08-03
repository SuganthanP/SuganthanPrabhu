import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Pneumatic-Based Solar Trackers",
      period: "Dec 2022 – May 2023",
      description: "Designed a cost-effective tracking system to enhance PV efficiency, comparing its performance with motor and hydraulic systems for solar power applications.",
      category: "Solar Energy",
      icon: "fas fa-sun",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Vacuum-Based Energy Storage System",
      period: "May 2024 – Jul 2024",
      description: "Developed a vacuum-based energy storage system that efficiently stores excess renewable energy and releases it on demand.",
      category: "Energy Storage",
      icon: "fas fa-battery-three-quarters",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "Mooring-Less Wave Energy Platform",
      period: "Nov 2023 – Apr 2023",
      description: "Designed a mooring-less system to harness wave energy using Pascal's principle, enabling cost-effective power generation and desalination.",
      category: "Wave Energy",
      icon: "fas fa-water",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "PV Cooling System with Metal Chip-Based Thermal Regulation",
      period: "Jul 2024 – Feb 2025",
      description: "Circulating water behind solar panels reduces heat, improving efficiency, while the heated water can be reused for other purposes.",
      category: "Thermal Management",
      icon: "fas fa-thermometer-half",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Optimizing Solar Power Plant Installation Using Machine Learning",
      period: "Mar 2025 – Present",
      description: "Developing a machine learning system to predict solar plant inefficiencies, estimate financial losses, and optimize configurations for maximum ROI.",
      category: "Machine Learning",
      icon: "fas fa-brain",
      gradient: "from-red-400 to-pink-500"
    },
    {
      title: "Plastic Incineration and Waste Management",
      period: "Jul 2023 – Oct 2023",
      description: "Gained insights into the efficiency and emissions profiles of different methods to optimize and scale up the incineration process.",
      category: "Environmental",
      icon: "fas fa-recycle",
      gradient: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <motion.i 
                    className={`${project.icon} text-6xl text-white`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: project.icon.includes('sun') ? 12 : 
                              project.icon.includes('battery') ? 0 : 
                              project.icon.includes('water') ? 0 :
                              project.icon.includes('thermometer') ? 12 :
                              project.icon.includes('brain') ? 0 : 180
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-primary mb-3">
                    {project.period}
                  </Badge>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge className={index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}>
                      {project.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <i className="fas fa-external-link-alt"></i>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
