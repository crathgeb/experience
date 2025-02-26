import { SlideCard, SlideHeader, SlideBody } from '@/components/ui/slide';
import { ImageDialog } from '@/components/ui/image-dialog';
import { aboutMe } from '@/data/images';
import { ImageInfo } from '../ui/photo-card';
import { ImageGallery, ImageGalleryCard } from '@/components/ui/image-gallary';

export function Slide2() {
  const images: ImageInfo[] = aboutMe();

  return (
    <SlideCard>
      <SlideHeader
        title={'About Me'}
        subtitle={
          'Engineer | Goofball | Entrepreneur | Husband | Nerd | Father | Gardener | Hacker | Dog Dad | Traveler | Foodie | Bad Fortnite Player'
        }
      />
      <SlideBody>
        <ImageGallery>
          {images?.map((image, index) => (
            <ImageGalleryCard key={index} rotation={index % 2 === 0 ? 3 : -3}>
              <ImageDialog src={image.src} alt={image.alt} />
            </ImageGalleryCard>
          ))}
        </ImageGallery>
      </SlideBody>
    </SlideCard>
  );
}
