import { SlideCard, SlideHeader, SlideBody } from '@/components/ui/slide';

export function QuestionsSlide() {
  return (
    <SlideCard>
      <SlideHeader title="Questions?" />
      <SlideBody className="sm:mt-16">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-8xl mb-8">🤔</h2>
            <p className="text-3xl text-muted-foreground">
              I'm happy to discuss anything in more detail
            </p>
          </div>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
