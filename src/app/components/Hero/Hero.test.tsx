import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

it('should render hero text', () => {
  render(<Hero />);

  expect(screen.getByText('Hero')).toBeInTheDocument();
});
