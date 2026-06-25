import { useRouter } from 'expo-router';
import { OralUlcersScreen } from '../../screens/OralUlcersScreen/OralUlcersScreen';

export default function Oral() {
  const router = useRouter();
  return (
    <OralUlcersScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/home'))}
      onScan={() => router.replace('/(tabs)/scan')}
    />
  );
}
