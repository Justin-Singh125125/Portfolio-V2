import { FiMail, FiPhone } from 'react-icons/fi';
import { IntroductionBadge, IntroductionLink } from './components';

export const IntroductionDetails = () => {
  return (
    <div>
      <IntroductionBadge />
      <h2>Justin Singh</h2>
      <h5>Full Stack Web Developer</h5>
      <div className="flex gap-3">
        <IntroductionLink
          href="mailto:justin.singh125125@gmail.com"
          icon={<FiMail />}
          label="Justin.Singh125125@gmail.com"
        />
        <IntroductionLink href="tel:9169558073" icon={<FiPhone />} label="(916) 955 - 8073" />
      </div>
    </div>
  );
};
