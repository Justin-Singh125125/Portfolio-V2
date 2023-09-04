import { HeroLinksProps } from './HeroLinks.types';
import { HeroLink } from './components';

export const HeroLinks = ({ links }: HeroLinksProps) => {
  return (
    <div className="flex gap-2">
      {links.map(({ href, icon }) => {
        return <HeroLink key={href} href={href} icon={icon} />;
      })}
    </div>
  );
};
