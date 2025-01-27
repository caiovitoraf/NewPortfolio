import { useSettings } from '@/contexts/SettingsContext';

const Hero = () => {
  const { t } = useSettings();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center animate-fade-in space-y-8">
          <div className="flex justify-center mb-12">
            <img 
              src="/public/caioVector.svg" 
              alt="Colorful Logo"
              className="h-24 md:h-32"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;