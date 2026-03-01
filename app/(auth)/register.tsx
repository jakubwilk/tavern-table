import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { Controller } from 'react-hook-form';
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
import { Checkbox, ColorTokens, Spinner, Theme, XStack, YStack } from 'tamagui';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { useRegisterForm } from '@/features/auth/hooks/use-register-form';

const backgroundImage = require('@/assets/images/register_background.jpg');

const PLACEHOLDER_COLOR = '#6b6b6b';
const CARD_BG = '#1e1e1e';

export default function RegisterScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { control, errors, isPending, acceptedTerms, setAcceptedTerms, onSubmit } =
    useRegisterForm();
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
                weight="medium"
                color="$color"
                fontSize={22}
                textAlign="center"
                marginBottom={4}
              >
                {t('auth.register.title')}
              </Text>

              {/* Email */}
              <YStack gap={4}>
                <Label htmlFor="reg-email" color="$color10" fontSize={14}>
                  {t('auth.register.email')}
                </Label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Input
                      id="reg-email"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder={t('auth.register.emailPlaceholder')}
                      placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      size="$4"
                      borderColor={errors.email ? '$red10' : undefined}
                    />
                  )}
                />
                {errors.email && (
                  <Text color="$red10" fontSize={12}>
                    {errors.email.message}
                  </Text>
                )}
              </YStack>

              {/* Nazwa wyświetlana */}
              <YStack gap={4}>
                <Label htmlFor="display-name" color="$color10" fontSize={14}>
                  {t('auth.register.displayName')}
                </Label>
                <Controller
                  control={control}
                  name="displayName"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Input
                      id="display-name"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder={t('auth.register.displayNamePlaceholder')}
                      placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                      autoCapitalize="words"
                      autoCorrect={false}
                      size="$4"
                      borderColor={errors.displayName ? '$red10' : undefined}
                    />
                  )}
                />
                {errors.displayName && (
                  <Text color="$red10" fontSize={12}>
                    {errors.displayName.message}
                  </Text>
                )}
              </YStack>

              {/* Hasło */}
              <YStack gap={4}>
                <Label htmlFor="reg-password" color="$color10" fontSize={14}>
                  {t('auth.register.password')}
                </Label>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Input
                      id="reg-password"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholder={t('auth.register.passwordPlaceholder')}
                      placeholderTextColor={PLACEHOLDER_COLOR as ColorTokens}
                      secureTextEntry
                      size="$4"
                      borderColor={errors.password ? '$red10' : undefined}
                    />
                  )}
                />
                {errors.password && (
                  <Text color="$red10" fontSize={12}>
                    {errors.password.message}
                  </Text>
                )}
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
                <Text flex={1} color="$color10" fontSize={14} lineHeight={22} paddingTop={2}>
                  {t('auth.register.acceptTermsPre')}
                  <Text
                    color="$orange10"
                    style={{ textDecorationLine: 'underline' }}
                    onPress={() => router.push('/policy')}
                  >
                    {t('auth.register.acceptTermsLink')}
                  </Text>
                  {t('auth.register.acceptTermsPost')}
                </Text>
              </XStack>

              {/* Przycisk tworzenia konta */}
              <Button
                size="$4"
                theme="orange"
                weight="medium"
                marginTop={4}
                disabled={!acceptedTerms || isPending}
                opacity={acceptedTerms && !isPending ? 1 : 0.45}
                onPress={onSubmit}
              >
                {isPending ? <Spinner size="small" color="silver" /> : t('auth.register.submit')}
              </Button>

              {/* Link powrotu do logowania */}
              <XStack justifyContent="center" alignItems="center" gap={4} marginTop={6}>
                <Text color="$color10" fontSize={14}>
                  {t('auth.register.hasAccount')}
                </Text>
                <Link href="/(auth)/login" asChild>
                  <Button chromeless size="$2" paddingHorizontal={0}>
                    <Text color="$orange10" fontSize={14} weight="medium">
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
