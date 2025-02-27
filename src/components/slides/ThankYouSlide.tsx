import { SlideCard, SlideHeader, SlideBody } from '@/components/ui/slide';

export function ThankYouSlide() {
  return (
    <SlideCard>
      <SlideHeader title="Thank You!" />
      <SlideBody className="sm:mt-16">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-8xl mb-8">👋</h2>
            <div className="space-y-4">
              <p className="text-2xl">Christopher Rathgeb</p>
              <div className="space-y-2 text-xl text-muted-foreground">
                <a
                  href="mailto:chris.rathgeb@gmail.com"
                  className="block hover:text-primary"
                >
                  chris.rathgeb@gmail.com
                </a>
                <a
                  href="https://github.com/crathgeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary"
                >
                  github.com/crathgeb
                </a>
                <a
                  href="https://www.linkedin.com/in/crathgeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-primary"
                >
                  linkedin.com/in/crathgeb
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-muted/10 p-4 text-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Built with TypeScript, React, TailwindCSS, Vite.js, and ShadCN
            </div>
            <p className="text-sm text-muted-foreground">
              View the code for this presentation at{' '}
              <a
                href="https://github.com/crathgeb/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                github.com/crathgeb/portfolio
              </a>
            </p>
          </div>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
