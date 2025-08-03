import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const interests = [
    {
      icon: "fas fa-satellite",
      title: "Space Technology",
      description: "ISRO Intern working on Hexapod Spider Robot",
      color: "primary"
    },
    {
      icon: "fas fa-microchip",
      title: "Embedded Systems",
      description: "Control algorithms and sensor integration",
      color: "accent"
    },
    {
      icon: "fas fa-leaf",
      title: "Renewable Energy",
      description: "Solar tracking and energy storage systems",
      color: "primary"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-xl mb-8">
              <CardContent className="p-0">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Enthusiastic student with a profound interest in control systems, space technology, and embedded systems. Currently engaged in active participation within renewable energy projects, emphasizing innovative solutions. Committed to leveraging skills in sustainable technologies to generate a positive influence. Actively seeking opportunities in the dynamic domains of space technology and embedded systems to contribute meaningfully.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center p-6 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <i className={`${interest.icon} text-3xl text-gray-600 dark:text-gray-400 mb-4`}></i>
                    <h3 className="font-semibold mb-2">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
