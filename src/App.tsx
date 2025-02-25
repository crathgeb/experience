import './App.css';
import { ThemeProvider } from './components/theme/theme-provider';
import { ThemeToggle } from './components/theme/theme-toggle';
import { FullscreenCarousel } from './components/ui/fullscreen-carousel';
import { SlideCard } from './components/ui/slide-card';
import { Slide1 } from './components/slides/Slide1';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative w-full h-screen">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <FullscreenCarousel>
          <Slide1 />
          <SlideCard>Slide 2</SlideCard>
          <SlideCard>Slide 3</SlideCard>
        </FullscreenCarousel>
      </main>
    </ThemeProvider>
  );
}

export default App;
