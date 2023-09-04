import { expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Hero } from './Hero';

const mocks = {
  HeroDetails: vi.fn(),
  HeroImage: vi.fn(),
};

vi.mock('./components', () => ({
  HeroDetails: () => mocks.HeroDetails(),
  HeroImage: () => mocks.HeroImage(),
}));

it('should render HeroDetails component', () => {
  render(<Hero />);

  expect(mocks.HeroDetails).toHaveBeenCalled();
});

it('should render HeroImage component', () => {
  render(<Hero />);

  expect(mocks.HeroImage).toHaveBeenCalled();
});
