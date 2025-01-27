import ProjectCard from './ProjectCard';
import { Code, Figma, Github, Palette, Terminal } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

const designProjects = [
  {
    title: "G10 Burguer",
    descriptionKey: "projects.g10burguer",
    tools: "Figma, UI Design, UX Research",
    icon: Figma,
    image: "/public/G10-COVER.png",
    gallery: [
      "/public/G10-COVER-1.png",
      "/public/G10-COVER-2.png",
      "/public/G10-COVER-3.png"
    ]
  },
  {
    title: "Bike N' Go",
    descriptionKey: "projects.bikengo",
    tools: "Figma",
    icon: Figma,
    image: "/public/BIKE-COVER.png",
    gallery: [
      "/public/BIKE-COVER-1.png",
      "/public/BIKE-COVER-2.png",
      "/public/BIKE-COVER-3.png"
    ]
  },
  {
    title: "Simple Pills",
    descriptionKey: "projects.simplepills",
    tools: "Figma",
    icon: Figma,
    image: "/public/SIMPLE-PILLS-COVER.png",
    gallery: [
      "/public/SIMPLE-PILLS-COVER-1.png",
      "/public/SIMPLE-PILLS-COVER-2.png",
      "/public/SIMPLE-PILLS-COVER-3.png"
    ]
  }
];

const codeProjects = [
  {
    title: "Talkables",
    descriptionKey: "projects.talkables",
    tools: "Android Studio, Kotlin, Figma",
    icon: Code,
    image: "/public/TALKABLES-COVER.png",
    gallery: [
      "/public/TALKABLES-COVER.png",
      "/public/TALKABLES-COVER-1.png"
    ]
  },
  {
    title: "Toxic Gas Sensor",
    descriptionKey: "projects.toxicgas",
    tools: "TinkerCad, Arduino",
    icon: Terminal,
    image: "/public/arduino.jpg",
    gallery: [
      "/public/TOXIC-COVER.png",
      "/public/TOXIC-COVER-1.png"
    ]
  },
  {
    title: "Portfolio Website",
    descriptionKey: "projects.portfolio",
    tools: "React, TypeScript, CSS",
    icon: Github,
    image: "/public/PORTFOLIO-WEBSITE.png",
    gallery: [
      "/public/PORTFOLIO-WEBSITE 1.png"
    ]
  }
];

const ProjectsSection = () => {
  const { t } = useSettings();

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t('projects.title')}
        </h2>
        
        {/* Design Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Palette className="w-6 h-6" />
            {t('projects.design')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project} 
                description={t(`${project.descriptionKey}.description`)}
                longDescription={t(`${project.descriptionKey}.longDescription`)}
              />
            ))}
          </div>
        </div>

        {/* Code Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Code className="w-6 h-6" />
            {t('projects.code')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codeProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                {...project}
                description={t(`${project.descriptionKey}.description`)}
                longDescription={t(`${project.descriptionKey}.longDescription`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;