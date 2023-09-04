import { expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';

import Page from './page';

const mocks = {
  Hero: vi.fn(),
};

vi.mock('./components', () => ({
  Hero: () => mocks.Hero(),
}));

beforeEach(() => {
  render(<Page />);
});

afterEach(() => {
  vi.clearAllMocks();
});

it('should render Hero component', () => {
  expect(mocks.Hero).toHaveBeenCalled();
});
