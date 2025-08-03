import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { AwardsSection } from "@/components/awards-section";
import { SkillsSection } from "@/components/skills-section";
import { ResearchSection } from "@/components/research-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <SkillsSection />
      <ResearchSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2025 Suganthan Prabhu. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:suganthanprabhu7@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/suganthan-prabhu-710aa9256/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="tel:+916369688017" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
