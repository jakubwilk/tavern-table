import type { StyleProp, TextStyle } from 'react-native';
import { Input as TamaguiInput } from 'tamagui';

import { Barlow } from '@/lib/font';

type Weight = keyof typeof Barlow;

type Props = {
  weight?: Weight;
  style?: StyleProp<TextStyle>;
} & Record<string, any>;

/**
 * Wrapper nad Tamagui Input z niezawodną obsługą czcionki Barlow na natywnym.
 *
 * Input wewnętrznie używa `fontFamily: '$body'` jako default, a `getFontSized`
 * rozwiązuje go do 'Barlow-Regular'. Przy braku plugina Babel face-mapping nie
 * działa dla niestandardowych wag. Prop `style` omija ten problem.
 *
 * Przykład użycia:
 *   <Input weight="regular" placeholder="Email" />
 *   <Input weight="medium" placeholder="Szukaj..." />
 */
export function Input({ weight = 'regular', style, ...props }: Props) {
  return (
    <TamaguiInput
      style={[{ fontFamily: Barlow[weight] }, style] as StyleProp<TextStyle>}
      {...props}
    />
  );
}
