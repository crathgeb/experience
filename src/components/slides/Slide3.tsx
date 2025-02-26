import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageDialog } from '@/components/ui/image-dialog';
import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';

// Import images
import zippzippeqImage from '@/assets/images/work/zippzippeq.gif';
import oakridgeImage from '@/assets/images/work/patent.png';
import zippzImage from '@/assets/images/work/zippzstudios.png';
import petsafeImage from '@/assets/images/work/petsafe.png';
import digitovaImage from '@/assets/images/work/phytofacts.png';
import curemintImage from '@/assets/images/work/curemint.png';

const experiences = [
  {
    id: 'zippzippeq',
    title: 'ZippzippEQ',
    subtitle: 'Founder - Video game cheats',
    role: 'Founder/Cheat Developer',
    period: '2005 - 2010',
    description:
      "My first official company sold cheats for video games to other players.  Think Game-Genie for Massive Online Multiplayer Games (MMO's).",
    image: zippzippeqImage,
  },
  {
    id: 'oakridge',
    title: 'Oak Ridge National Lab',
    subtitle: 'Researcher - Cybersecurity',
    role: 'Cybersecurity Software Engineer',
    period: '2008 - 2011',
    description:
      'Reverse engineered malware to determine the extent of the damage and develop neutralization techniques.',
    image: oakridgeImage,
  },
  {
    id: 'zippzstudios',
    title: 'ZippzStudios, LLC',
    subtitle: 'Founder - Mobile App Development',
    role: 'Founder/Lead Software Engineer',
    period: '2008 - 2013',
    description:
      'Founded a mobile app development company. We built both consumer apps as well as apps for other businesses.',
    image: zippzImage,
  },
  {
    id: 'radio-systems',
    title: 'Radio Systems Corporation',
    subtitle: 'Team Lead - Connected Products',
    role: 'Team Lead/Software Engineer',
    period: '2013 - 2016',
    description:
      'Founded the connected products team.  We operated like a startup within the company and launched new IoT-enabled smart pet products.',
    image: petsafeImage,
  },
  {
    id: 'digitova',
    title: 'Digitova, LLC',
    subtitle: 'Founder - Development Partner',
    role: 'Pet ',
    period: '2014 - 2020',
    description:
      'Digitova was a partnership based development agency that helped other companies take their product from 0-1 and then build up a transitionary engineering team.',
    image: digitovaImage,
  },
  {
    id: 'curemint',
    title: 'CureMint, Inc',
    subtitle: 'Founder - Dental Procurement SaaS',
    role: 'Founder/CTO',
    period: '2019 - 2025',
    description:
      'Created a SaaS platform to help dental practices find and purchase the right dental supplies.',
    image: curemintImage,
  },
  // Add more experiences as needed
];

export function Slide3() {
  return (
    <SlideCard>
      <SlideHeader title={'Work Experience'} />
      <SlideBody className={'mt-28 sm:mt-16'}>
        <div className="gap-3 sm:gap-4 w-full h-full p-2 sm:p-4">
          <Tabs
            defaultValue={experiences[0].id}
            className="w-full flex gap-8"
            orientation="vertical"
          >
            <TabsList className="flex flex-col h-fit gap-2 w-72 flex-shrink-0 bg-gray-50 dark:bg-gray-900 rounded-lg p-2 border-2 border-gray-200 dark:border-gray-800">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.id}
                  value={exp.id}
                  className="w-full text-left px-6 py-4 flex flex-col items-start gap-1 rounded-md
                    bg-transparent
                    data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    focus-visible:outline-none
                    transition-colors duration-200"
                >
                  <span
                    className="text-lg font-semibold text-gray-800 dark:text-gray-200
                    data-[state=active]:text-gray-900 dark:data-[state=active]:text-white"
                  >
                    {exp.title}
                  </span>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400
                    data-[state=active]:text-gray-700 dark:data-[state=active]:text-gray-300"
                  >
                    {exp.subtitle}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-w-0">
              {experiences.map((exp) => (
                <TabsContent
                  key={exp.id}
                  value={exp.id}
                  className="mt-0 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-800"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span
                        className="text-lg font-semibold text-gray-800 dark:text-gray-200
                    data-[state=active]:text-gray-900 dark:data-[state=active]:text-white"
                      >
                        {exp.title}
                      </span>
                      <div className="flex flex-row justify-between items-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                          {exp.period}
                        </p>
                      </div>

                      <p className="text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    <div className="relative h-96 w-full rounded-lg border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageDialog
                          src={exp.image}
                          alt={`${exp.title} preview`}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
