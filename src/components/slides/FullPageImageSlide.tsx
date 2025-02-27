import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';
import { ImageInfo } from '@/components/ui/photo-card';

type FullPageImageSlideProps = {
  image: ImageInfo;
};

export function FullPageImageSlide({ image }: FullPageImageSlideProps) {
  return (
    <SlideCard>
      <SlideHeader title={'Project: CureMint'} />
      <SlideBody className={'sm:mt-16'}>
        <img src={image.src} alt={image.alt} />
      </SlideBody>
    </SlideCard>
  );
}
