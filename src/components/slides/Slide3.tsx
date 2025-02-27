import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageDialog } from '@/components/ui/image-dialog';
import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';

import {
  TabButton,
  TabButtons,
  TabButtonSubtitle,
  TabButtonTitle,
  TabContentHeader,
  VerticalTabs,
} from '../ui/vertical-tabs';
import { experiences } from '@/data/experiences';

export function Slide3() {
  return (
    <SlideCard>
      <SlideHeader title={'Work Experience'} />
      <SlideBody className={'mt-28 sm:mt-16'}>
        <VerticalTabs initialValue={experiences[0].id}>
          <TabButtons>
            {experiences.map((exp) => (
              <TabButton key={exp.id} value={exp.id}>
                <TabButtonTitle>{exp.title}</TabButtonTitle>
                <TabButtonSubtitle>{exp.subtitle}</TabButtonSubtitle>
              </TabButton>
            ))}
          </TabButtons>
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className={'tab-content'}>
              <div className="space-y-6">
                <TabContentHeader
                  title={exp.title}
                  role={exp.role}
                  period={exp.period}
                  description={exp.description}
                />
                <div className="relative h-96 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageDialog src={exp.image} alt={`${exp.title} preview`} />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </VerticalTabs>
      </SlideBody>
    </SlideCard>
  );
}
