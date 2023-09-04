import { HeroLinkProps } from './HeroLink.types';

export const HeroLink = ({ href, icon }: HeroLinkProps) => {
  return (
    <a
      target="_blank"
      href={href}
      className="inline-block p-2 [&:hover>svg]:fill-green [&>svg]:transition-fill [&>svg]:duration-300 hover:bg-black transition-bg duration-300 rounded-md"
    >
      {icon}
    </a>
  );
};
