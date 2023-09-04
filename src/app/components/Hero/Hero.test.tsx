import { expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

const mocks = {
  HeroDetails: vi.fn(),
};

vi.mock('./components', () => ({
  HeroDetails: () => mocks.HeroDetails(),
}));

it('should render hero details component', () => {
  render(<Hero />);

  expect(mocks.HeroDetails).toHaveBeenCalled();
});
