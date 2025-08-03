import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      color: "primary",
      skills: ["C", "Python", "C++", "VHDL", "Verilog"]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      color: "accent",
      skills: ["MATLAB", "PCB Design", "Cadence"]
    },
    {
      title: "Core Skills",
      icon: "fas fa-microchip",
      color: "primary",
      skills: ["Control Systems", "Embedded Systems", "SCADA", "Sensor Fusion"]
    },
    {
      title: "Interests",
      icon: "fas fa-rocket",
      color: "accent",
      skills: ["Space Technology", "Sustainability", "IoT"]
    }
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${category.icon} text-2xl text-gray-600 dark:text-gray-400`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="mr-2 mb-2 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
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
