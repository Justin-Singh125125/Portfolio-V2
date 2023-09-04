import { it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { HeroLink } from './HeroLink';

it('should render icon', () => {
  render(<HeroLink href="#" icon={<svg>icon</svg>} />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

it('should render anchor tag with href attribute', () => {
  render(<HeroLink href="/hello" icon={<svg>icon</svg>} />);

  expect(screen.getByRole('link')).toHaveAttribute('href', '/hello');
});
