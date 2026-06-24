import { useRouter } from 'expo-router';
import { SignupScreen } from '../screens/SignupScreen/SignupScreen';

export default function Signup() {
  const router = useRouter();
  return (
    <SignupScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/welcome'))}
      onCreateAccount={() => router.replace('/(tabs)/home')}
      onSignIn={() => router.replace('/login')}
    />
  );
}
