import 'react-native-reanimated';
import '@/lib/i18n';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import { useColorScheme } from '@/hooks/use-color-scheme';

import { tamaguiConfig } from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Barlow-Thin': require('@/assets/fonts/Barlow-Thin.ttf'),
    'Barlow-ThinItalic': require('@/assets/fonts/Barlow-ThinItalic.ttf'),
    'Barlow-ExtraLight': require('@/assets/fonts/Barlow-ExtraLight.ttf'),
    'Barlow-ExtraLightItalic': require('@/assets/fonts/Barlow-ExtraLightItalic.ttf'),
    'Barlow-Light': require('@/assets/fonts/Barlow-Light.ttf'),
    'Barlow-LightItalic': require('@/assets/fonts/Barlow-LightItalic.ttf'),
    'Barlow-Regular': require('@/assets/fonts/Barlow-Regular.ttf'),
    'Barlow-Italic': require('@/assets/fonts/Barlow-Italic.ttf'),
    'Barlow-Medium': require('@/assets/fonts/Barlow-Medium.ttf'),
    'Barlow-MediumItalic': require('@/assets/fonts/Barlow-MediumItalic.ttf'),
    'Barlow-SemiBold': require('@/assets/fonts/Barlow-SemiBold.ttf'),
    'Barlow-SemiBoldItalic': require('@/assets/fonts/Barlow-SemiBoldItalic.ttf'),
    'Barlow-Bold': require('@/assets/fonts/Barlow-Bold.ttf'),
    'Barlow-BoldItalic': require('@/assets/fonts/Barlow-BoldItalic.ttf'),
    'Barlow-ExtraBold': require('@/assets/fonts/Barlow-ExtraBold.ttf'),
    'Barlow-ExtraBoldItalic': require('@/assets/fonts/Barlow-ExtraBoldItalic.ttf'),
    'Barlow-Black': require('@/assets/fonts/Barlow-Black.ttf'),
    'Barlow-BlackItalic': require('@/assets/fonts/Barlow-BlackItalic.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme ?? 'light'}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </TamaguiProvider>
  );
}
