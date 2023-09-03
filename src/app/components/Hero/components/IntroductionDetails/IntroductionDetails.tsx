import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { IntroductionBadge, IntroductionLink } from './components';

export const IntroductionDetails = () => {
  return (
    <div>
      <IntroductionBadge />
      <h2>Justin Singh</h2>
      <h5>Full Stack Web Developer</h5>
      <div className="flex gap-2">
        <IntroductionLink
          href="mailto:justin.singh125125@gmail.com"
          icon={<GrMail />}
          label="Justin.Singh125125@gmail.com"
        />
        <IntroductionLink href="tel:9169558073" icon={<FaPhone />} label="(916) 955 - 8073" />
        <IntroductionLink href="tel:9169558073" icon={<FaGithub />} label="(916) 955 - 8073" />
        <IntroductionLink href="tel:9169558073" icon={<FaLinkedin />} label="(916) 955 - 8073" />
      </div>
    </div>
  );
};
