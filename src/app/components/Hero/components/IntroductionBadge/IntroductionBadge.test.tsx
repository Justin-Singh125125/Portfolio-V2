import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IntroductionBadge } from './IntroductionBadge';

it('should render introduction text', () => {
  render(<IntroductionBadge />);

  expect(screen.getByText("Hello I'm")).toBeInTheDocument();
});
