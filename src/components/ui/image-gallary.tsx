import React from 'react';
import { cn } from '@/lib/utils';

type ImageGalleryProps = {
  className?: string;
};

const ImageGallery = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }: ImageGalleryProps, ref) => (
  <div
    ref={ref}
    className={cn('image-gallery-grid p-2 sm:p-4', className)}
    {...props}
  />
));

type ImageGalleryCardProps = {
  rotation?: number;
  className?: string;
  children?: React.ReactNode;
};

const ImageGalleryCard = ({
  rotation = 0,
  children,
}: ImageGalleryCardProps) => {
  return (
    <div
      className="relative aspect-square transform hover:scale-105 hover:z-10 transition-all duration-300"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                border-2 border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-900"
        style={{
          transition: 'all 0.3s ease',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { ImageGallery, ImageGalleryCard };
