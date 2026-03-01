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
 * Komponent nagłówka/tytułu oparty na Tamagui Text z domyślnym `weight="bold"`.
 * Obchodzi problem wariantu `fontFamily` w SizableText poprzez prop `style`.
 *
 * Przykład użycia:
 *   <Heading fontSize={28} color="$color">Witaj!</Heading>
 *   <Heading weight="semiBold" fontSize={20}>Podtytuł</Heading>
 */
export function Heading({ weight = 'bold', style, children, ...props }: Props) {
  return (
    <TamaguiText style={[{ fontFamily: Barlow[weight] }, style]} {...props}>
      {children}
    </TamaguiText>
  );
}
