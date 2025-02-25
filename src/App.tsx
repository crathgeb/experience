import './App.css';
import { ThemeProvider } from './components/theme/theme-provider';
import { ThemeToggle } from './components/theme/theme-toggle';
import { FullscreenCarousel } from './components/FullscreenCarousel';
import { SlideCard } from './components/SlideCard';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative w-full h-screen">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <FullscreenCarousel>
          <SlideCard>Slide 1</SlideCard>
          <SlideCard>Slide 2</SlideCard>
          <SlideCard>Slide 3</SlideCard>
        </FullscreenCarousel>
      </main>
    </ThemeProvider>
  );
}

export default App;
