import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, YStack } from 'tamagui';

import { Barlow } from '@/lib/font';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack flex={1} alignItems="center" justifyContent="center">
        <Text fontSize={24} fontFamily={Barlow.semiBold}>
          Home
        </Text>
      </YStack>
    </SafeAreaView>
  );
}
