import { useState, useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { Globe, Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, language, setLanguage, t } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? `${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'} shadow-md py-2` 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-primary'}`}>Portfolio</span>
          <div className="flex items-center space-x-6">
            <button onClick={() => scrollTo('projects')} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}>
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollTo('skills')} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}>
              {t('nav.skills')}
            </button>
            <button onClick={() => scrollTo('contact')} className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-primary transition-colors`}>
              {t('nav.contact')}
            </button>
            <div className="flex items-center space-x-4 ml-6">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <Switch
                  checked={language === 'pt'}
                  onCheckedChange={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                />
                <span className="text-sm">{language.toUpperCase()}</span>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`rounded-full p-1 hover:bg-opacity-10 ${
                  theme === 'dark' ? 'hover:bg-white' : 'hover:bg-gray-200'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;