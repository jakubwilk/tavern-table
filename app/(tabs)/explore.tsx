import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, YStack } from 'tamagui';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} alignItems="center" justifyContent="center">
        <Text fontSize={24} fontWeight="600">
          Explore
        </Text>
      </YStack>
    </SafeAreaView>
  );
}
