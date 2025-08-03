import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Project Intern",
      company: "URSC (U R Rao Satellite Centre), ISRO",
      year: "2025",
      icon: "fas fa-rocket",
      color: "primary",
      description: "Currently working on the design, control algorithms, and sensor integration for a Hexapod Spider Robot for autonomous movement and obstacle navigation.",
      skills: ["Control Algorithms", "Sensor Integration", "Robotics"]
    },
    {
      title: "Research Intern",
      company: "Kinowave",
      year: "2024",
      icon: "fas fa-solar-panel",
      color: "accent",
      description: "Worked on renewable energy projects, contributing to control system design, automation, and SCADA integration.",
      skills: ["Control Systems", "SCADA", "Automation"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 h-full bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-600 dark:bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                      <i className={`${exp.icon} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <Badge className="bg-gray-600 dark:bg-gray-700 text-white mb-4">
                    {exp.year}
                  </Badge>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        {skill}
                      </Badge>
                    ))}
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
