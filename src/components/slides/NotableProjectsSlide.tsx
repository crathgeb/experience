import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';
import { withLazyLoad } from '@/components/withLazyLoad';
import { projects } from '@/data/projects';
import { DesktopProjects } from '@/components/slides/notable-projects/DesktopProjects';
import { MobileProjects } from '@/components/slides/notable-projects/MobileProjects';

const LazyDesktopProjects = withLazyLoad(DesktopProjects, { delay: 150 });
const LazyMobileProjects = withLazyLoad(MobileProjects, { delay: 150 });

export function NotableProjectsSlide() {
  return (
    <SlideCard>
      <SlideHeader title={'Current Projects'} />
      <SlideBody className={'sm:mt-16'}>
        <div className="w-full">
          <div className="hidden md:block">
            <LazyDesktopProjects projects={projects} />
          </div>
          <div className="md:hidden w-full">
            <LazyMobileProjects projects={projects} />
          </div>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
