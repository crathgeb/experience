import { Card } from './ui/card';
import { CarouselItem } from './ui/carousel';

interface SlideCardProps {
  children: React.ReactNode;
}

export function SlideCard({ children }: SlideCardProps) {
  return (
    <CarouselItem className="basis-full h-screen flex items-center justify-center">
      <Card className="w-full h-full md:h-[calc(100%-8rem)] flex items-center justify-center rounded-none md:rounded-3xl">
        <div className="text-4xl">{children}</div>
      </Card>
    </CarouselItem>
  );
}
