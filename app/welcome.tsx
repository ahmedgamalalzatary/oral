import { useRouter } from 'expo-router';
import { WelcomeScreen } from '../screens/WelcomeScreen/WelcomeScreen';

export default function Welcome() {
  const router = useRouter();
  return (
    <WelcomeScreen
      onLogin={() => router.push('/login')}
      onSignup={() => router.push('/signup')}
    />
  );
}
