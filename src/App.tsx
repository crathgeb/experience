import '@/App.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { FullscreenCarousel } from '@/components/ui/fullscreen-carousel';
import { WelcomeSlide } from '@/components/slides/WelcomeSlide';
import { AboutMeSlide } from '@/components/slides/AboutMeSlide';
import { WorkExperienceSlide } from '@/components/slides/WorkExperienceSlide';
import { curemint } from '@/data/images';
import { FullPageImageSlide } from '@/components/slides/FullPageImageSlide';
import { WhyCrossnoKayeSlide } from './components/slides/WhyCrossnoKayeSlide';

const projectSlides = curemint();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative w-full h-screen">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <FullscreenCarousel>
          <WelcomeSlide />
          <AboutMeSlide />
          <WorkExperienceSlide />
          {projectSlides?.map((item) => (
            <FullPageImageSlide key={item.src} image={item} />
          ))}
          <WhyCrossnoKayeSlide />
        </FullscreenCarousel>
      </main>
    </ThemeProvider>
  );
}

export default App;
