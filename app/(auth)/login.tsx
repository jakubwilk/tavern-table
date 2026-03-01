import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ColorTokens, Input, Label, Text, Theme, XStack, YStack } from 'tamagui';

const backgroundImage = require('@/assets/images/register_background.jpg');

// Kolor placeholdera — widoczny szary w ciemnym motywie
const PLACEHOLDER_COLOR = '#6b6b6b';

// Tło karty formularza — ciemne, nieprzezroczyste
const CARD_BG = '#1e1e1e';

export default function LoginScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const insets = useSafeAreaInsets();

  return (
    <Theme name="dark">
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={[StyleSheet.absoluteFill, styles.overlay]} />

        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            contentContainerStyle={[
              styles.scrollContent,
              { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
            ]}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo */}
            <YStack alignItems="center" marginBottom={24}>
              <YStack
                width={96}
                height={96}
                borderRadius={48}
                borderWidth={1}
                borderColor="rgba(255,255,255,0.15)"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="rgba(255,255,255,0.25)" fontSize={11} letterSpacing={2}>
                  LOGO
                </Text>
              </YStack>
            </YStack>

            {/* Karta formularza */}
            <YStack
              margin={32}
              padding={24}
              backgroundColor={CARD_BG}
              borderRadius={20}
              borderWidth={1}
              borderColor="rgba(255,255,255,0.06)"
              gap={14}
            >
              <Text
                color="$color"
                fontSize={22}
                fontWeight="700"
                textAlign="center"
                marginBottom={4}
              >
                {t('auth.login.title')}
              </Text>

              {/* Email */}
              <YStack gap={6}>
                <Label htmlFor="login-email" color="$color10" fontSize={14}>
                  {t('auth.login.email')}
                </Label>
                <Input
                  id="login-email"
                  value={email}
                  onChangeText={setEmail}
                  placeholder={t('auth.login.emailPlaceholder')}
                  placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  size="$4"
                />
              </YStack>

              {/* Hasło + link "Zapomniałeś hasła?" */}
              <YStack gap={6}>
                <XStack justifyContent="space-between" alignItems="center">
                  <Label htmlFor="login-password" color="$color10" fontSize={14}>
                    {t('auth.login.password')}
                  </Label>
                  <Button
                    chromeless
                    size="$2"
                    paddingHorizontal={0}
                    onPress={() => {
                      /* TODO: forgot password */
                    }}
                  >
                    <Text color="$orange10" fontSize={12}>
                      {t('auth.login.forgotPassword')}
                    </Text>
                  </Button>
                </XStack>
                <Input
                  id="login-password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder={t('auth.login.passwordPlaceholder')}
                  placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                  secureTextEntry
                  size="$4"
                />
              </YStack>

              {/* Przycisk logowania */}
              <Button
                size="$4"
                theme="orange"
                marginTop={4}
                onPress={() => {
                  /* TODO: login */
                }}
              >
                {t('auth.login.submit')}
              </Button>

              {/* Separator */}
              <XStack alignItems="center" gap={10} marginVertical={2}>
                <YStack flex={1} height={1} backgroundColor="$borderColor" />
                <Text color="$color10" fontSize={11} letterSpacing={1}>
                  {t('auth.login.or')}
                </Text>
                <YStack flex={1} height={1} backgroundColor="$borderColor" />
              </XStack>

              {/* Przycisk Google */}
              <Button
                size="$4"
                variant="outlined"
                icon={<AntDesign name="google" size={16} color="white" />}
                onPress={() => {
                  /* TODO: Google Sign-In */
                }}
              >
                {t('auth.login.continueWithGoogle')}
              </Button>

              {/* Link do rejestracji */}
              <XStack justifyContent="center" alignItems="center" gap={4} marginTop={6}>
                <Text color="$color10" fontSize={14}>
                  {t('auth.login.noAccount')}
                </Text>
                <Link href="/(auth)/register" asChild>
                  <Button chromeless size="$2" paddingHorizontal={0}>
                    <Text color="$orange10" fontSize={14} fontWeight="500">
                      {t('auth.login.registerLink')}
                    </Text>
                  </Button>
                </Link>
              </XStack>
            </YStack>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Theme>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.55)' },
  keyboardView: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: 'center' },
});
