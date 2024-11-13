import Home from '@pages/Home';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Home Page', () => {
  test('render Home page', () => {
    const screen = render(<Home />);
    expect(screen.getByText('FIND CLOTHES THAT MATCHES YOUR STYLE')).toBeInTheDocument();
  });
});
