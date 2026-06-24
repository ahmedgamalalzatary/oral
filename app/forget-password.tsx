import { useRouter } from 'expo-router';
import { ForgetPasswordScreen } from '../screens/ForgetPasswordScreen/ForgetPasswordScreen';

export default function ForgetPassword() {
  const router = useRouter();
  return (
    <ForgetPasswordScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/login'))}
      onNext={() => router.push('/otp')}
    />
  );
}
