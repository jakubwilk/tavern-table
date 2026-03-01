import type { StyleProp, TextStyle } from 'react-native';
import { TextArea as TamaguiTextArea } from 'tamagui';

import { Barlow } from '@/lib/font';

type Weight = keyof typeof Barlow;

type Props = {
  weight?: Weight;
  style?: StyleProp<TextStyle>;
} & Record<string, any>;

/**
 * Wrapper nad Tamagui TextArea z niezawodną obsługą czcionki Barlow na natywnym.
 * Identyczna strategia jak w Input — prop `style` nadpisuje rozwiązanie '$body'
 * tokenu przez Tamagui.
 *
 * Przykład użycia:
 *   <TextArea weight="regular" placeholder="Wpisz opis..." numberOfLines={4} />
 */
export function TextArea({ weight = 'regular', style, ...props }: Props) {
  return (
    <TamaguiTextArea
      style={[{ fontFamily: Barlow[weight] }, style] as StyleProp<TextStyle>}
      {...props}
    />
  );
}
