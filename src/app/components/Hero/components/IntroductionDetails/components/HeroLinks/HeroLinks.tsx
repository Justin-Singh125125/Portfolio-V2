import { HeroLinksProps } from './HeroLinks.types';
import { HeroLink } from '../HeroLink';

export const HeroLinks = ({ links }: HeroLinksProps) => {
  return (
    <div className="flex gap-2">
      {links.map(({ href, icon }, index) => {
        return <HeroLink key={index} href={href} icon={icon} />;
      })}
    </div>
  );
};
