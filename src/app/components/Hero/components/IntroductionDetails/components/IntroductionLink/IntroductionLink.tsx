import { IntroductionLinkProps } from './IntroductionLink.types';

export const IntroductionLink = ({ href, icon }: IntroductionLinkProps) => {
  return (
    <a
      href={href}
      className="inline-block p-2 hover:[&>svg]:fill-green [&>svg]:transition-fill [&>svg]:duration-200"
    >
      {icon}
    </a>
  );
};
