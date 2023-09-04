import { it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { IntroductionLink } from './IntroductionLink';

it('should render icon', () => {
  render(<IntroductionLink href="#" icon={<svg>icon</svg>} />);

  expect(screen.getByText('icon')).toBeInTheDocument();
});

it('should render anchor tag with href attribute', () => {
  render(<IntroductionLink href="/hello" icon={<svg>icon</svg>} />);

  expect(screen.getByRole('link')).toHaveAttribute('href', '/hello');
});
