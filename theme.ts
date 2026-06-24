/**
 * Shared design tokens. Reference these from components instead of hardcoding
 * literals so colors/spacing/fonts can be changed in one place.
 */
export const colors = {
  background: '#EBEBEB',
  primary: '#63ABA0',
  secondary: '#188AEC',
  white: '#FFFFFF',
  // Inactive pagination dot — light grey from the reference screen.
  muted: '#CFCFCF',
  text: '#63ABA0',
  // Light "Sign up" style button.
  surface: '#ECECEC',
  border: '#D9D9D9',
  textDark: '#333333',
  // Form fields.
  inputBg: '#E9E9E9',
  placeholder: '#9A9A9A',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const fontSize = {
  body: 14,
  subtitle: 14,
  title: 24,
  button: 16,
} as const;

export const theme = { colors, spacing, radius, fontSize };
export type Theme = typeof theme;
