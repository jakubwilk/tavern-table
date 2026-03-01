import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Label as TamaguiLabel } from 'tamagui';

import { Barlow } from '@/lib/font';

type Weight = keyof typeof Barlow;

type Props = {
  weight?: Weight;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
} & Record<string, any>;

/**
 * Wrapper nad Tamagui Label z niezawodną obsługą czcionki Barlow na natywnym.
 *
 * Label jest oparty na SizableText, więc ma ten sam problem z wariantem `fontFamily`.
 * Zachowuje pełną funkcjonalność Tamagui Label: prop `htmlFor` (accessibility web),
 * `focusFocusable` (native), press handlers itd.
 *
 * Przykład użycia:
 *   <Label htmlFor="email" weight="regular" color="$color10">Email</Label>
 *   <Label htmlFor="terms" weight="regular" fontSize={14}>Akceptuję regulamin</Label>
 */
export function Label({ weight = 'regular', style, children, ...props }: Props) {
  return (
    <TamaguiLabel style={[{ fontFamily: Barlow[weight] }, style]} {...props}>
      {children}
    </TamaguiLabel>
  );
}
