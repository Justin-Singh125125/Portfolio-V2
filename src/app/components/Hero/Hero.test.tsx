import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

const mocks = {
  IntroductionBadge: vi.fn(),
};

vi.mock('./components', () => ({
  IntroductionBadge: () => mocks.IntroductionBadge(),
}));

it('should render introduction badge', () => {
  render(<Hero />);

  expect(mocks.IntroductionBadge).toHaveBeenCalled();
});
