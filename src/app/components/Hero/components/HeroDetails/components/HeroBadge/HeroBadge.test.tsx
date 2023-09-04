import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroBadge } from './HeroBadge';

it('should render introduction text', () => {
  render(<HeroBadge />);

  expect(screen.getByText("Hello I'm")).toBeInTheDocument();
});
