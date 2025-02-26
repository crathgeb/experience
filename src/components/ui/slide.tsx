import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from './card';
import { CarouselItem } from './carousel';

interface SlideCardProps {
  children: React.ReactNode;
}

const SlideCard = ({ children }: SlideCardProps) => {
  return (
    <CarouselItem className="basis-full h-screen flex items-center justify-center">
      <Card className="w-full h-full md:h-[calc(100%-8rem)] flex items-center justify-center rounded-none md:rounded-3xl relative">
        <div className="w-full h-full relative">{children}</div>
      </Card>
    </CarouselItem>
  );
};

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SlideHeader = ({ title, subtitle, className }: SlideHeaderProps) => {
  return (
    <div className={cn('absolute top-8 left-8 right-8', className)}>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface SlideBodyProps {
  className?: string;
}

const SlideBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }: SlideBodyProps, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute inset-8 flex items-center justify-center overflow-scroll mt-40 sm:mt-28 hide-scrollbar',
      className
    )}
    {...props}
  />
));

export { SlideCard, SlideBody, SlideHeader };
