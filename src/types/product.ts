export const Sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type Size = (typeof Sizes)[keyof typeof Sizes];
