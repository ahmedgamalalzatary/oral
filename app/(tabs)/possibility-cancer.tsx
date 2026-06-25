import { useRouter } from 'expo-router';
import { PossibilityCancerScreen } from '../../screens/PossibilityCancerScreen/PossibilityCancerScreen';

export default function PossibilityCancer() {
  const router = useRouter();
  return (
    <PossibilityCancerScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/(tabs)/home'))}
      onScan={() => router.replace('/(tabs)/scan')}
    />
  );
}
