import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';
import { withLazyLoad } from '@/components/withLazyLoad';
import { experiences } from '@/data/experiences';
import { DesktopExperience } from '@/components/slides/work-experience/DesktopExperience';
import { MobileExperience } from '@/components/slides/work-experience/MobileExperience';

const LazyDesktopExperience = withLazyLoad(DesktopExperience, { delay: 150 });
const LazyMobileExperience = withLazyLoad(MobileExperience, { delay: 150 });

export function WorkExperienceSlide() {
  return (
    <SlideCard>
      <SlideHeader title={'Work Experience'} />
      <SlideBody className={'sm:mt-16'}>
        <div className="w-full">
          <div className="hidden md:block">
            <LazyDesktopExperience experiences={experiences} />
          </div>
          <div className="md:hidden w-full">
            <LazyMobileExperience experiences={experiences} />
          </div>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
