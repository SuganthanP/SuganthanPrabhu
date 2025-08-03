import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ResearchSection() {
  const publications = [
    {
      title: "A Novel Approach Towards Sustainable Energy Storage: Vacuum Based Energy Storage",
      authors: "Sudalaimuthu Suresh P, Sivakeerthana S, Sriganesh S, Suganthan P, Mithun T N, Janarthanan Venkatachalam, Sreeharan B N",
      venue: "WEECON 2023",
      color: "primary"
    },
    {
      title: "Sensor Technologies in Industrial Incinerators - A Review",
      authors: "Suganthan P, Archana A R, Sivakeerthana S, Sudalaimuthu Suresh P, Janarthanan Venkatachalam, Sreeharan B N",
      venue: "ICETITE 2024",
      color: "accent"
    },
    {
      title: "Design and Analysis of Novel Cooling System for Photovoltaic Modules",
      authors: "Krisnan K, Janarthanan Venkatachalam, Suganthan P, Sriganesh S, Sangeetha N",
      venue: "ASME 2025 Hyderabad",
      color: "primary"
    },
    {
      title: "Mathematical Modeling for an active Cooling system for Photovoltaic Modules",
      authors: "Krisnan K, Suganthan P, Janarthanan Venkatachalam, Sangeetha N",
      venue: "ICSTEPS 2025",
      color: "accent"
    }
  ];

  const grants = [
    { title: "Wave Energy Converter Mathematical Model", amount: "₹25,000", color: "green" },
    { title: "Pneumatic-Based Solar Trackers", amount: "₹49,000", color: "blue" },
    { title: "PV Module Cooling System", amount: "₹27,000", color: "purple" },
    { title: "Active Solar Panel Cooling", amount: "₹10,000", color: "orange" }
  ];

  const volunteering = [
    {
      title: "KCT Research Cell - Lead & Research Intern",
      description: "Energy Engineering (2022 - Present)",
      details: "Organized Ré Day, Kumaraguru Intra Ideathon 2023, and Yugam India Ideathon 2023"
    },
    {
      title: "Student Coordinator - Kumaraguru Intra Ideathon 2023",
      description: "Event Management",
      details: "Actively managed and assisted participants throughout the event"
    },
    {
      title: "Event Coordinator - Yugam India Ideathon '23",
      description: "48-hour Ideathon",
      details: "Facilitated participants from various colleges across Tamil Nadu"
    }
  ];

  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        {/* Publications */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${pub.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <i className={`fas fa-file-alt ${pub.color === 'primary' ? 'text-primary' : 'text-accent'}`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">"{pub.title}"</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pub.authors.split(', ').map((author, i) => (
                          <span key={i}>
                            {author === 'Suganthan P' ? <strong>{author}</strong> : author}
                            {i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </p>
                      <Badge className={`${pub.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                        {pub.venue}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Grants & Volunteering */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Research Grants */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Research Grants</h3>
            <div className="space-y-4">
              {grants.map((grant, index) => (
                <motion.div
                  key={grant.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-4 bg-gradient-to-r ${
                    grant.color === 'green' ? 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20' :
                    grant.color === 'blue' ? 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' :
                    grant.color === 'purple' ? 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20' :
                    'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
                  }`}>
                    <CardContent className="p-0">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{grant.title}</span>
                        <span className={`font-bold ${
                          grant.color === 'green' ? 'text-green-600' :
                          grant.color === 'blue' ? 'text-blue-600' :
                          grant.color === 'purple' ? 'text-purple-600' :
                          'text-orange-600'
                        }`}>{grant.amount}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Leadership & Volunteering</h3>
            <div className="space-y-4">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-2">{vol.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{vol.description}</p>
                      <p className="text-sm">{vol.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
