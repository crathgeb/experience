import { ImageDialog } from '@/components/ui/image-dialog';

export type ImageInfo = {
  src: string;
  alt: string;
};

export type PhotoCardProps = {
  image: ImageInfo;
  index: number;
};

const ROTATION_ANGLE = 3;

export function PhotoCard({ image, index }: PhotoCardProps) {
  const rotation = index % 2 === 0 ? ROTATION_ANGLE : -ROTATION_ANGLE;

  return (
    <div
      className="relative aspect-square transform hover:scale-105 hover:z-10 transition-all duration-300"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl border-2 sm:border-4 border-white dark:border-gray-800"
        style={{
          transition: 'all 0.3s ease',
          backgroundColor: 'white',
        }}
      >
        <ImageDialog src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}
