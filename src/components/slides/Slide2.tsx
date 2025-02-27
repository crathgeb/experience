import { SlideCard, SlideHeader, SlideBody } from '@/components/ui/slide';
import { ImageDialog } from '@/components/ui/image-dialog';
import { aboutMe } from '@/data/images';
import { ImageInfo } from '@/components/ui/photo-card';
import { ImageGallery, ImageGalleryCard } from '@/components/ui/image-gallary';

const images: ImageInfo[] = aboutMe();

export function Slide2() {
  return (
    <SlideCard>
      <SlideHeader
        title={'About Me'}
        subtitle={
          'Engineer | Goofball | Entrepreneur | Husband | Nerd | Father | Gardener | Hacker | Dog Dad | Traveler | Foodie | Bad Fortnite Player'
        }
      />
      <SlideBody className={'mt-40'}>
        <div className="w-full pt-16 sm:pt-0">
          <ImageGallery>
            {images?.map((image, index) => (
              <ImageGalleryCard key={index} rotation={index % 2 === 0 ? 3 : -3}>
                <ImageDialog src={image.src} alt={image.alt} />
              </ImageGalleryCard>
            ))}
          </ImageGallery>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
