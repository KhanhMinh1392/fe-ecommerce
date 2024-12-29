import Home from '@/pages/Home';
import { render } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { describe, expect, test, vi } from 'vitest';

vi.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children }: PropsWithChildren) => <div>{children}</div>,
  CarouselContent: ({ children }: PropsWithChildren) => <div>{children}</div>,
  CarouselItem: ({ children }: PropsWithChildren) => <div>{children}</div>,
}));

vi.mock('@/components/card', () => ({
  _esModule: true,
  default: () => <div>Card</div>,
}));

vi.mock('@/components/list', () => ({
  _esModule: true,
  default: () => <div>ListComponent</div>,
}));

describe('Home Page', () => {
  // Test case: Should display correct brand names in the carousel
  test('Displays correct brand names in the carousel', () => {
    const { getByText } = render(<Home />);

    const brandNames = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLEIN'];

    brandNames.forEach((brandName) => {
      expect(getByText(brandName)).toBeInTheDocument();
    });
  });
});
