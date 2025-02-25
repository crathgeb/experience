import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

interface FullscreenCarouselProps {
  children: React.ReactNode;
}

export function FullscreenCarousel({ children }: FullscreenCarouselProps) {
  return (
    <div className="flex justify-center w-full h-full px-0 md:px-24">
      <Carousel className="w-full relative">
        <CarouselContent>{children}</CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-16" />
        <CarouselNext className="hidden md:flex -right-16" />
      </Carousel>
    </div>
  );
}
