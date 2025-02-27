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
import { QuestionsSlide } from '@/components/slides/QuestionsSlide';
import { ThankYouSlide } from '@/components/slides/ThankYouSlide';

const projectSlides = curemint();

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
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
          <QuestionsSlide />
          <ThankYouSlide />
        </FullscreenCarousel>
      </main>
    </ThemeProvider>
  );
}

export default App;
