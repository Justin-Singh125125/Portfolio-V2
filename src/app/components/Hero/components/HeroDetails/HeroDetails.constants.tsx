import { HeroDetailValues } from './HeroDetails.types';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

export const DETAILS: HeroDetailValues = {
  name: 'Justin Singh',
  role: 'Staff Software Enginner',
  links: [
    {
      href: 'mailto:justin.singh125125@gmail.com',
      icon: <GrMail />,
    },
    {
      href: 'tel:9169558073',
      icon: <FaPhone />,
    },
    {
      href: 'https://github.com/Justin-Singh125125',
      icon: <FaGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/justin-singh-70a147178',
      icon: <FaLinkedin />,
    },
  ],
};
