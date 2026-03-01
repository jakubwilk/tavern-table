import React from 'react';
import { Button as TamaguiButton, type ButtonProps } from 'tamagui';

import { Barlow } from '@/lib/font';

type Weight = keyof typeof Barlow;

interface Props extends ButtonProps {
  weight?: Weight;
}

/**
 * Wrapper nad Tamagui Button z niezawodną obsługą czcionki Barlow na natywnym.
 *
 * Problem: Tamagui Button przekazuje `fontFamily` do wewnętrznego ButtonText
 * jako prop Tamagui — ale wariant `fontFamily` w SizableText przechwytuje każdą
 * wartość i nadpisuje ją rozwiązaniem tokenu '$body' (czyli 'Barlow-Regular').
 *
 * Rozwiązanie: jeśli children to string/number, owijamy go w <Button.Text style=...>
 * (React element), który `wrapChildrenInText` przepuści bez owijania. Prop `style`
 * trafia bezpośrednio do warstwy natywnej PO rozwiązaniu wariantów Tamagui, więc wygrywa.
 */
export function Button({ weight = 'medium', children, ...props }: Props) {
  const fontFamily = Barlow[weight];

  const content =
    typeof children === 'string' || typeof children === 'number' ? (
      <TamaguiButton.Text style={{ fontFamily }}>{children}</TamaguiButton.Text>
    ) : (
      children
    );

  return <TamaguiButton {...props}>{content}</TamaguiButton>;
}
