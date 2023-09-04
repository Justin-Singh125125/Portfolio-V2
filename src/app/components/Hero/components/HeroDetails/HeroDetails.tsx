import { HeroBadge, HeroLinks } from './components';
import { DETAILS } from './HeroDetails.constants';

export const HeroDetails = () => {
  return (
    <div>
      <HeroBadge />
      <h2>{DETAILS.name}</h2>
      <h5>{DETAILS.role}</h5>
      <HeroLinks links={DETAILS.links} />
    </div>
  );
};
