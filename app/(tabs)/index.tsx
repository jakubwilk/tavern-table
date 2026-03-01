import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, YStack } from 'tamagui';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} alignItems="center" justifyContent="center">
        <Text fontSize={24} fontWeight="600">
          Home
        </Text>
      </YStack>
    </SafeAreaView>
  );
}
