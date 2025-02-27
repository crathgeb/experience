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
import { Project } from '@/data/projects';

interface DesktopProjectsProps {
  projects: Project[];
}

export function DesktopProjects({ projects }: DesktopProjectsProps) {
  return (
    <VerticalTabs initialValue={projects[0].id}>
      <TabButtons>
        {projects.map((project) => (
          <TabButton key={project.id} value={project.id}>
            <TabButtonTitle>{project.title}</TabButtonTitle>
            <TabButtonSubtitle>{project.subtitle}</TabButtonSubtitle>
          </TabButton>
        ))}
      </TabButtons>
      {projects.map((project) => (
        <TabsContent
          key={project.id}
          value={project.id}
          className="w-full tab-content"
        >
          <div className="space-y-6">
            <TabContentHeader
              title={project.title}
              role={project.subtitle}
              period=""
              description={project.description}
              link={project.link}
            />
            <div className="relative h-96 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageDialog
                  src={project.image}
                  alt={`${project.title} preview`}
                />
              </div>
            </div>
          </div>
        </TabsContent>
      ))}
    </VerticalTabs>
  );
}
