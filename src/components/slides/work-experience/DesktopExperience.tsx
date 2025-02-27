import { ImageDialog } from '@/components/ui/image-dialog';
import {
  TabButton,
  TabButtons,
  TabButtonSubtitle,
  TabButtonTitle,
  TabContentHeader,
  VerticalTabs,
} from '@/components/ui/vertical-tabs';
import { TabsContent } from '@/components/ui/tabs';
import { Experience } from '@/data/experiences';

interface DesktopExperienceProps {
  experiences: Experience[];
}

export function DesktopExperience({ experiences }: DesktopExperienceProps) {
  return (
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
  );
}
