import { it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { HeroLinks } from './HeroLinks';
import { HeroLinksProps } from './HeroLinks.types';

const mocks = {
  HeroLink: vi.fn(),
};

vi.mock('./components', () => {
  return {
    HeroLink: (props: unknown) => mocks.HeroLink(props),
  };
});

it('should render a list of hero links', () => {
  const links: HeroLinksProps['links'] = [
    {
      href: 'hello',
      icon: null,
    },
    {
      href: 'world',
      icon: null,
    },
  ];

  render(<HeroLinks links={links} />);

  links.forEach(({ href, icon }) => {
    expect(mocks.HeroLink).toHaveBeenCalledWith({
      href,
      icon,
    });
  });
});
