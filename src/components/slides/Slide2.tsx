import { SlideCard } from '@/components/ui/slide-card';
import { PhotoCard } from '@/components/ui/photo-card';
import { loadImages } from '@/components/about-me/image-loader';
import { ImageDialog } from '@/components/ui/image-dialog';

export function Slide2() {
  const images = loadImages();

  return (
    <SlideCard>
      <div className="absolute top-8 left-8 right-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          About Me
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-medium">
          Engineer | Goofball | Entrepreneur | Husband | Nerd | Father |
          Gardener | Hacker | Dog Dad | Traveler | Foodie | Bad Fortnite Player
        </p>
      </div>
      <div className="absolute inset-8 flex items-center justify-center overflow-scroll mt-40 sm:mt-28 hide-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 w-full h-full p-2 sm:p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square transform hover:scale-105 hover:z-10 transition-all duration-300"
              style={{
                transform: `rotate(${index % 2 === 0 ? 3 : -3}deg)`,
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
                <ImageDialog src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideCard>
  );
}
