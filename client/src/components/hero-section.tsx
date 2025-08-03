import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImage from '@/assets/photocopy.jpg'; // or adjust the path like './assets/profile.png' if '@/...' doesn't resolve
import resumePDF from '@/assets/Suganthan_resume.pdf';
export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href =resumePDF;
    link.download = 'Suganthan_Prabhu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional photo placeholder */}
<motion.div 
  className="w-72 h-72 mx-auto mt-20 mb-8"
>
  <img
    src={profileImage}
    alt="Suganthan Prabhu"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>





          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Suganthan Prabhu
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Enthusiastic ECE student passionate about Embedded Systems, Renewable Energy, and Control Systems
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full">
              Electronics Engineering
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800 rounded-full">
              Embedded Systems
            </span>
            <span className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800 rounded-full">
              Renewable Energy
            </span>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get In Touch
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
