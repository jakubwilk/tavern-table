/**
 * Explicit Barlow font family name constants for React Native.
 *
 * On native, CSS fontWeight has no effect on custom fonts — each weight
 * variant is a separate TTF loaded under its own family name. Use these
 * constants with the `fontFamily` prop instead of `fontWeight` to
 * guarantee the correct typeface is applied regardless of Tamagui version
 * or compiler plugin availability.
 */
export const Barlow = {
  thin: 'Barlow-Thin',
  thinItalic: 'Barlow-ThinItalic',
  extraLight: 'Barlow-ExtraLight',
  extraLightItalic: 'Barlow-ExtraLightItalic',
  light: 'Barlow-Light',
  lightItalic: 'Barlow-LightItalic',
  regular: 'Barlow-Regular',
  italic: 'Barlow-Italic',
  medium: 'Barlow-Medium',
  mediumItalic: 'Barlow-MediumItalic',
  semiBold: 'Barlow-SemiBold',
  semiBoldItalic: 'Barlow-SemiBoldItalic',
  bold: 'Barlow-Bold',
  boldItalic: 'Barlow-BoldItalic',
  extraBold: 'Barlow-ExtraBold',
  extraBoldItalic: 'Barlow-ExtraBoldItalic',
  black: 'Barlow-Black',
  blackItalic: 'Barlow-BlackItalic',
} as const;

export type BarlowFont = (typeof Barlow)[keyof typeof Barlow];
