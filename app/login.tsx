import { useRouter } from 'expo-router';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';

export default function Login() {
  const router = useRouter();
  return (
    <LoginScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/welcome'))}
      onForgotPassword={() => router.push('/forget-password')}
      onSignIn={() => router.replace('/(tabs)/home')}
      onSignUp={() => router.replace('/signup')}
    />
  );
}
