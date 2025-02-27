import { ImageDialog } from '@/components/ui/image-dialog';
import { TabContentHeader } from '@/components/ui/vertical-tabs';
import { Project } from '@/data/projects';

interface MobileProjectsProps {
  projects: Project[];
}

export function MobileProjects({ projects }: MobileProjectsProps) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <div key={project.id} className="space-y-4">
          <TabContentHeader
            title={project.title}
            role={project.subtitle}
            period=""
            description={project.description}
          />
          <div className="relative h-48 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageDialog
                src={project.image}
                alt={`${project.title} preview`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
