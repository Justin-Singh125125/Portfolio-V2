import { HeroDetails, HeroImage } from './components';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center  space-x-72">
      <HeroDetails />
      <HeroImage />
    </section>
  );
};
