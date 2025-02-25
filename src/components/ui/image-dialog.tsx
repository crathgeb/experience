import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';

interface ImageDialogProps {
  src: string;
  alt: string;
  thumbnail?: boolean;
}

export function ImageDialog({ src, alt, thumbnail = true }: ImageDialogProps) {
  const [dialogStyle, setDialogStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Calculate dialog width based on image dimensions and viewport
      const vw = Math.min(window.innerWidth * 0.9, img.width + 48); // 48px for padding
      setDialogStyle({ width: `${vw}px` });
    };
  }, [src]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full aspect-square flex items-center justify-center bg-muted/20 rounded-lg">
          <img
            src={src}
            alt={alt}
            className="cursor-pointer hover:opacity-80 transition-opacity w-4/5 h-4/5 object-contain"
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-[90vw] max-h-[90vh] h-auto p-6"
        style={dialogStyle}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            className="max-w-[calc(90vw-3rem)] max-h-[calc(90vh-3rem)] object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
