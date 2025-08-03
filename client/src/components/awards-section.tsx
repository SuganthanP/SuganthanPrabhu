import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AwardsSection() {
  const awards = [
    {
      title: "Runner-up at IIT Madras",
      year: "2023",
      description: "Student Presentation Competition in International Workshop on Ocean Engineering",
      icon: "fas fa-trophy",
      color: "yellow"
    },
    {
      title: "Bronze Medal",
      year: "2023",
      description: "International Inter Varsity Innovation Challenge for vacuum-based energy storage solution",
      icon: "fas fa-medal",
      color: "orange"
    },
    {
      title: "Mahatma Gandhi Merit Scholarship",
      year: "2023-2025",
      description: "Awarded for academic excellence for three consecutive years",
      icon: "fas fa-award",
      color: "green"
    },
    {
      title: "IEEE YESIST12 Finalist",
      year: "2024",
      description: "WEPOWER Track for \"Vacuum Energy Storage System\"",
      icon: "fas fa-star",
      color: "blue"
    },
    {
      title: "Vishwakarma Award Semifinalist",
      year: "2024",
      description: "Engineering Innovation for \"Active Solar Panel Cooling\"",
      icon: "fas fa-lightbulb",
      color: "purple"
    },
    {
      title: "Visvesvaraya Award",
      year: "2024-2025",
      description: "Technological Excellence in Research and Innovation Group",
      icon: "fas fa-certificate",
      color: "indigo"
    }
  ];

  const colorClasses = {
    yellow: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 text-yellow-600",
    orange: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 text-orange-600",
    green: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 text-green-600",
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-600",
    purple: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-600",
    indigo: "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 text-indigo-600"
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Awards & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className={`bg-gradient-to-br ${colorClasses[award.color as keyof typeof colorClasses]} p-6 hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <i className={`${award.icon} text-2xl mr-3`}></i>
                    <Badge variant="secondary" className="text-xs">
                      {award.year}
                    </Badge>
                  </div>
                  <h3 className="font-bold mb-2">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
