import { HeroDetails, HeroImage } from './components';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <HeroDetails />
      <HeroImage />
    </section>
  );
};
