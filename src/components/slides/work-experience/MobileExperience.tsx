import { ImageDialog } from '@/components/ui/image-dialog';
import { TabContentHeader } from '@/components/ui/vertical-tabs';
import { Experience } from '@/data/experiences';

interface MobileExperienceProps {
  experiences: Experience[];
}

export function MobileExperience({ experiences }: MobileExperienceProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp) => (
        <div key={exp.id} className="space-y-4">
          <TabContentHeader
            title={exp.title}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
          <div className="relative h-48 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageDialog src={exp.image} alt={`${exp.title} preview`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
