import type { ReactNode } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text as TamaguiText } from 'tamagui';

import { Barlow } from '@/lib/font';

type Weight = keyof typeof Barlow;

type Props = {
  weight?: Weight;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
} & Record<string, any>;

/**
 * Wrapper nad Tamagui Text z niezawodną obsługą wagi czcionki Barlow na natywnym.
 *
 * Używa prop `style` (nie `fontFamily` Tamagui) by ominąć wariant `fontFamily`
 * w SizableText, który nadpisuje każdą przekazaną wartość tokenu '$body'.
 * Prop `style` jest mergowany PO rozwiązaniu wariantów, więc ma wyższy priorytet.
 *
 * Przykład użycia:
 *   <Text weight="semiBold" fontSize={22} color="$color">Tytuł</Text>
 *   <Text weight="regular" color="$color10">Opis</Text>
 */
export function Text({ weight = 'regular', style, children, ...props }: Props) {
  return (
    <TamaguiText style={[{ fontFamily: Barlow[weight] }, style]} {...props}>
      {children}
    </TamaguiText>
  );
}
