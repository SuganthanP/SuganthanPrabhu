import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Control Systems",
      platform: "NPTEL",
      year: "Jul – Oct 2023",
      color: "primary"
    },
    {
      title: "MATLAB Numerical Computation",
      platform: "Udemy",
      year: "Jan 2024",
      color: "accent"
    },
    {
      title: "Introduction to Internet of Things",
      platform: "NPTEL",
      year: "Jan – April 2024",
      color: "primary"
    },
    {
      title: "Machine Learning with Python",
      platform: "Coursera",
      year: "2024",
      color: "accent"
    },
    {
      title: "Geo-data Sharing Cyber Security",
      platform: "IIRS",
      year: "2025",
      color: "primary"
    },
    {
      title: "Embedded Systems",
      platform: "NIELIT",
      year: "Jan 2025",
      color: "accent"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <i className={`fas fa-certificate text-2xl ${cert.color === 'primary' ? 'text-primary' : 'text-accent'} mr-3`}></i>
                    <Badge variant="secondary" className={`text-sm ${cert.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                      {cert.platform}
                    </Badge>
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
