import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme, XStack, YStack } from 'tamagui';

import { Text } from '@/components/ui/text';
import policyData from '@/content/policy.json';

export default function PolicyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Theme name="dark">
      <View style={[styles.container, { paddingTop: insets.top }]}>

        {/* Header */}
        <XStack
          paddingHorizontal={20}
          paddingVertical={14}
          alignItems="center"
          borderBottomWidth={StyleSheet.hairlineWidth}
          borderBottomColor="rgba(255,255,255,0.1)"
        >
          <Pressable
            onPress={() => router.back()}
            hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
            style={styles.backButton}
          >
            <Feather name="arrow-left" size={22} color="rgba(255,255,255,0.85)" />
          </Pressable>

          <Text weight="semiBold" fontSize={17} color="$color" flex={1} textAlign="center">
            {policyData.title}
          </Text>

          {/* Spacer symetryczny do przycisku wstecz */}
          <View style={styles.backButton} />
        </XStack>

        {/* Content */}
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { paddingBottom: insets.bottom + 40 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Text color="$color10" fontSize={13} marginBottom={28}>
            Ostatnia aktualizacja: {policyData.effectiveDate}
          </Text>

          {policyData.sections.map((section) => (
            <YStack key={section.id} marginBottom={28} gap={10}>
              <Text weight="semiBold" fontSize={15} color="$orange10">
                {section.heading}
              </Text>
              {section.paragraphs.map((paragraph, idx) => (
                <Text key={idx} color="$color10" fontSize={14} lineHeight={22}>
                  {paragraph}
                </Text>
              ))}
            </YStack>
          ))}
        </ScrollView>

      </View>
    </Theme>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  backButton: {
    width: 36,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
});
