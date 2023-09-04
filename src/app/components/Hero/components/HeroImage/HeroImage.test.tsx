import { vi, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

const mocks = {
  Image: vi.fn(),
};

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: unknown) => mocks.Image(props),
}));

it('HeroImage contains an image', () => {
  render(<HeroImage />);

  expect(mocks.Image).toHaveBeenCalledWith(
    expect.objectContaining({
      alt: 'Picture of Justin Singh',
      priority: true,
      src: '/src/app/components/Hero/components/HeroImage/images/justin.jpeg',
    })
  );
});
