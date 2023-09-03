import { IntroductionLinkProps } from './IntroductionLink.types';

export const IntroductionLink = ({ href, icon }: IntroductionLinkProps) => {
  return (
    <a
      href={href}
      className="inline-block p-2 [&>svg]:hover:stroke-green [&>svg]:transition-all [&>svg]:duration-300"
    >
      {icon}
    </a>
  );
};
