import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

vi.mock('@tanstack/react-query', () => {
  return {
    useQuery: vi.fn(() => {
      return {
        isLoading: false,
        isError: false,
        data: [],
      };
    }),
    useSuspenseQuery: vi.fn(() => {
      return {
        isLoading: false,
        isError: false,
        data: {},
      };
    }),
  };
});
