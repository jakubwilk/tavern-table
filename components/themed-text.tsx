import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
  defaultSemiBold: {
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  title: {
    fontFamily: 'Barlow-SemiBold',
    fontWeight: '600',
    fontSize: 32,
  },
  subtitle: {
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
    fontSize: 20,
  },
  link: {
    fontFamily: 'Barlow-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: '#0a7ea4',
  },
  button: {
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
  },
});
