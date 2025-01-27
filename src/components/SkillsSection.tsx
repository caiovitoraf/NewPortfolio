import { useEffect, useRef, useState } from 'react';
import { useSettings } from '@/contexts/SettingsContext';

const skills = [
  { name: "Kotlin", level: 90 },
  { name: "Figma", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Android Development", level: 75 },
  { name: "Python", level: 70 },
  { name: "HTML/CSS", level: 65 }
];

const SkillsSection = () => {
  const { theme, t } = useSettings();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {t('skills.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className={`font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  {skill.name}
                </span>
                <span className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`h-3 rounded-full ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                      : 'bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]'
                  }`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;