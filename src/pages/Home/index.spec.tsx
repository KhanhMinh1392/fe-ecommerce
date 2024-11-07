import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Home from '.';

describe('Home Page', () => {
  test('render', () => {
    const screen = render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
