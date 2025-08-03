import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line relative">
            {/* University Education */}
            <motion.div 
              className="flex flex-col md:flex-row items-center mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-primary font-semibold">2022 - 2026</span>
                    <h3 className="text-xl font-bold mb-2">B.E Electronics and Communication Engineering</h3>
                    <p className="text-muted-foreground mb-3">Kumaraguru College of Technology, Anna University</p>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-accent">8.4</span>
                      <span className="ml-2 text-muted-foreground">CGPA (Till 5th Semester)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="fas fa-graduation-cap text-white"></i>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 md:pl-8"></div>
            </motion.div>
            
            {/* School Education */}
            <motion.div 
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>
              
              <div className="relative z-10 order-1 md:order-2">
                <motion.div 
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="fas fa-school text-white"></i>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0 order-3">
                <Card className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-accent font-semibold">2010 - 2022</span>
                    <h3 className="text-xl font-bold mb-2">Higher Secondary Education</h3>
                    <p className="text-muted-foreground mb-3">Rasi Matric Hr. Sec School, Tamil Nadu State Board</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-2xl font-bold text-accent">99%</span>
                        <span className="block text-sm text-muted-foreground">10th Grade</span>
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-accent">97%</span>
                        <span className="block text-sm text-muted-foreground">12th Grade</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
