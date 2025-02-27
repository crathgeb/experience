import './App.css';
import { ThemeProvider } from './components/theme/theme-provider';
import { ThemeToggle } from './components/theme/theme-toggle';
import { FullscreenCarousel } from './components/ui/fullscreen-carousel';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { SlideCard } from './components/ui/slide';

import curemint1 from '@/assets/images/curemint/curemint1.png';
import curemint2 from '@/assets/images/curemint/curemint2.png';
import curemint3 from '@/assets/images/curemint/curemint3.png';

const projectSlides = [curemint1, curemint2, curemint3];

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative w-full h-screen">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <FullscreenCarousel>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          {projectSlides?.map((item) => (
            <SlideCard key={item}>
              <img src={item} />
            </SlideCard>
          ))}
        </FullscreenCarousel>
      </main>
    </ThemeProvider>
  );
}

export default App;
