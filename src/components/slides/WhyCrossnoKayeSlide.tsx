import { SlideHeader, SlideBody, SlideCard } from '@/components/ui/slide';
import { Label } from '@/components/ui/label';

export function WhyCrossnoKayeSlide() {
  return (
    <SlideCard>
      <SlideHeader title={'Why CrossnoKaye?'} />
      <SlideBody className={'sm:mt-16'}>
        <div className="h-full flex items-center">
          <Label className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-2xl">
                CrossnoKaye has been on my radar from before I founded CureMint
                through Mason Weems. From the moment it was explained to me 5+
                years ago, I knew it was something special.
              </p>
              <p className="text-2xl">
                This has been reinforced through my dialogs with different team
                members through this hiring process.
              </p>
            </div>

            <ul className="space-y-4 py-6">
              {[
                'Mission-driven focus on energy & sustainability',
                'Innovative technology & real-time control',
                'Aligns well with what I am looking for',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg bg-primary/5 p-6 rounded-lg border border-primary/10">
              Finally, I feel like my experience as an entrepreneur and engineer
              can bring a unique and valuable perspective to the team.
            </p>
          </Label>
        </div>
      </SlideBody>
    </SlideCard>
  );
}
