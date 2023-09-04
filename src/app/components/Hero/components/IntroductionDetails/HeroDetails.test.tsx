import { expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GrMail } from 'react-icons/gr';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

import { HeroDetails } from './HeroDetails';

const mocks = {
  HeroBadge: vi.fn(),
  HeroLinks: vi.fn(),
  details: {
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
  },
};

vi.mock('./components', () => ({
  HeroBadge: () => mocks.HeroBadge(),
  HeroLinks: (props: unknown) => mocks.HeroLinks(props),
}));

beforeEach(() => {
  render(<HeroDetails />);
});

afterEach(() => {
  vi.clearAllMocks();
});

it('should render HeroBadge component', () => {
  expect(mocks.HeroBadge).toHaveBeenCalled();
});

it('should render HeroLinks component', () => {
  expect(mocks.HeroLinks).toHaveBeenCalledWith({ links: mocks.details.links });
});

it('should render name', () => {
  expect(screen.getByText(mocks.details.name)).toBeInTheDocument();
});

it('should render role', () => {
  expect(screen.getByText(mocks.details.role)).toBeInTheDocument();
});
