import { Theme, YStack } from 'tamagui';

import { Text } from '@/components/ui/text';

export default function DashboardScreen() {
  return (
    <Theme name="dark">
      <YStack flex={1} backgroundColor="$background" alignItems="center" justifyContent="center">
        <Text weight="semiBold" fontSize={28} color="$color">
          Dashboard
        </Text>
      </YStack>
    </Theme>
  );
}
