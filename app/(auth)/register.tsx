import { Feather } from '@expo/vector-icons';
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
import { Button, Checkbox, ColorTokens, Input, Label, Text, Theme, XStack, YStack } from 'tamagui';

const backgroundImage = require('@/assets/images/register_background.jpg');

// Kolor placeholdera — widoczny szary w ciemnym motywie
const PLACEHOLDER_COLOR = '#6b6b6b';

// Tło karty formularza — ciemne, nieprzezroczyste
const CARD_BG = '#1e1e1e';

export default function RegisterScreen() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
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
                {t('auth.register.title')}
              </Text>

              {/* Email */}
              <YStack gap={6}>
                <Label htmlFor="reg-email" color="$color10" fontSize={14}>
                  {t('auth.register.email')}
                </Label>
                <Input
                  id="reg-email"
                  value={email}
                  onChangeText={setEmail}
                  placeholder={t('auth.register.emailPlaceholder')}
                  placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  size="$4"
                />
              </YStack>

              {/* Nazwa wyświetlana */}
              <YStack gap={6}>
                <Label htmlFor="display-name" color="$color10" fontSize={14}>
                  {t('auth.register.displayName')}
                </Label>
                <Input
                  id="display-name"
                  value={displayName}
                  onChangeText={setDisplayName}
                  placeholder={t('auth.register.displayNamePlaceholder')}
                  placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                  autoCapitalize="words"
                  autoCorrect={false}
                  size="$4"
                />
              </YStack>

              {/* Hasło */}
              <YStack gap={6}>
                <Label htmlFor="reg-password" color="$color10" fontSize={14}>
                  {t('auth.register.password')}
                </Label>
                <Input
                  id="reg-password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder={t('auth.register.passwordPlaceholder')}
                  placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                  secureTextEntry
                  size="$4"
                />
              </YStack>

              {/* Akceptacja zasad */}
              <XStack gap={12} alignItems="flex-start" marginTop={2}>
                <Checkbox
                  id="terms"
                  size="$4"
                  checked={acceptedTerms}
                  onCheckedChange={(val) => setAcceptedTerms(val === true)}
                  marginTop={1}
                >
                  <Checkbox.Indicator>
                    <Feather name="check" size={13} color="white" />
                  </Checkbox.Indicator>
                </Checkbox>
                <Label
                  htmlFor="terms"
                  flex={1}
                  color="$color10"
                  fontSize={14}
                  lineHeight={20}
                  paddingTop={2}
                >
                  {t('auth.register.acceptTerms')}
                </Label>
              </XStack>

              {/* Przycisk tworzenia konta */}
              <Button
                size="$4"
                theme="orange"
                marginTop={4}
                disabled={!acceptedTerms}
                opacity={acceptedTerms ? 1 : 0.45}
                onPress={() => {
                  /* TODO: register */
                }}
              >
                {t('auth.register.submit')}
              </Button>

              {/* Link powrotu do logowania */}
              <XStack justifyContent="center" alignItems="center" gap={4} marginTop={6}>
                <Text color="$color10" fontSize={14}>
                  {t('auth.register.hasAccount')}
                </Text>
                <Link href="/(auth)/login" asChild>
                  <Button chromeless size="$2" paddingHorizontal={0}>
                    <Text color="$orange10" fontSize={14} fontWeight="500">
                      {t('auth.register.loginLink')}
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
