import { useRouter } from 'expo-router';
import { NormalScreen } from '../../screens/NormalScreen/NormalScreen';

export default function Normal() {
  const router = useRouter();
  return (
    <NormalScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/home'))}
      onScan={() => router.replace('/(tabs)/scan')}
    />
  );
}
