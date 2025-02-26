import { SlideCard } from '@/components/ui/slide';
import bigBrained from '@/assets/images/big_brained_transparent.png';
import ckLogo from '@/assets/images/ck_logo.png';

export function Slide1() {
  return (
    <SlideCard>
      <div className="absolute inset-8 inset-b-0">
        <div className="relative w-full h-full">
          <img
            src={ckLogo}
            alt="Crossnokaye Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="absolute bottom-0 right-0 flex flex-col items-end">
            <div className="text-right mb-4">
              <h1 className="text-6xl font-bold mb-2">Christopher Rathgeb</h1>
              <p className="text-xl text-muted-foreground">
                TUX Engineer - CrossnoKaye Presentation
              </p>
            </div>
            <img
              src={bigBrained}
              alt="Christopher Rathgeb"
              className="w-[32rem] h-auto object-contain translate-y-8"
            />
          </div>
        </div>
      </div>
    </SlideCard>
  );
}
