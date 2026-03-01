import {
  createSystemFont,
  createV5Theme,
  defaultChildrenThemes,
  defaultConfig,
} from '@tamagui/config/v5';
import { createTamagui } from 'tamagui';

/**
 * Orange accent palette (remapped z @tamagui/colors orange/orangeDark).
 * accent9 = główny kolor marki, accent10/11 = hover/subtelniejszy odcień.
 */
const orangeAccent = {
  light: {
    accent1: '#fefcfb',
    accent2: '#fff7ed',
    accent3: '#ffefd6',
    accent4: '#ffdfb5',
    accent5: '#ffd19a',
    accent6: '#ffc182',
    accent7: '#f5ae73',
    accent8: '#ec9455',
    accent9: '#f76b15',
    accent10: '#ef5f00',
    accent11: '#cc4e00',
    accent12: '#582d1d',
  },
  dark: {
    accent1: '#17120e',
    accent2: '#1e160f',
    accent3: '#331e0b',
    accent4: '#462100',
    accent5: '#562800',
    accent6: '#66350c',
    accent7: '#7e451d',
    accent8: '#a35829',
    accent9: '#f76b15',
    accent10: '#ff801f',
    accent11: '#ffa057',
    accent12: '#ffe0c2',
  },
};

const themes = createV5Theme({
  accent: orangeAccent,
  childrenThemes: defaultChildrenThemes,
});

/**
 * Barlow — bezszeryfowa czcionka używana dla heading i body.
 * face mapuje wagę numeryczną (100–900) na nazwy załadowanych plików TTF.
 * Uwaga: italic dla wagi 400 to 'Barlow-Italic' (nie 'Barlow-RegularItalic').
 */
const barlowFont = createSystemFont({
  font: {
    // 'Barlow-Regular' jako fallback gdy żaden face nie pasuje.
    // Tamagui używa face mapping (poniżej) do rozwiązania fontWeight → fontFamily na native.
    family: 'Barlow-Regular',
    face: {
      100: { normal: 'Barlow-Thin', italic: 'Barlow-ThinItalic' },
      200: { normal: 'Barlow-ExtraLight', italic: 'Barlow-ExtraLightItalic' },
      300: { normal: 'Barlow-Light', italic: 'Barlow-LightItalic' },
      400: { normal: 'Barlow-Regular', italic: 'Barlow-Italic' },
      500: { normal: 'Barlow-Medium', italic: 'Barlow-MediumItalic' },
      600: { normal: 'Barlow-SemiBold', italic: 'Barlow-SemiBoldItalic' },
      700: { normal: 'Barlow-Bold', italic: 'Barlow-BoldItalic' },
      800: { normal: 'Barlow-ExtraBold', italic: 'Barlow-ExtraBoldItalic' },
      900: { normal: 'Barlow-Black', italic: 'Barlow-BlackItalic' },
    },
    weight: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      true: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
    },
  },
  sizeLineHeight: (size) => Math.round(size * 1.3),
});

const config = {
  ...defaultConfig,
  themes,
  fonts: {
    heading: barlowFont,
    body: barlowFont,
  },
  // fontFamily celowo nieobecne — ustawienie go tu blokowałoby Tamagui face mapping
  // na native, uniemożliwiając rozwiązanie fontWeight → fontFamily (np. 600 → Barlow-SemiBold).
  defaultProps: {
    Text: { fontSize: 16 },
  },
} as const;

// @ts-expect-error TS7022 – circular inference: tamaguiConfig → createTamagui → TamaguiCustomConfig → Conf → typeof tamaguiConfig.
// Ten cykl jest nieunikniony w RC Tamagui; @ts-expect-error sprawia że tamaguiConfig: any,
// co umożliwia działanie pełnych typów komponentów Tamagui (wszystkie style props są akceptowane).
export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;

// @ts-expect-error TS2456 – Conf cyklicznie referencjonuje tamaguiConfig
export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  // @ts-expect-error TS2310 – TamaguiCustomConfig rekurencyjnie referencjonuje Conf
  interface TamaguiCustomConfig extends Conf {}
}
