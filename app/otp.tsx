import { useRouter } from 'expo-router';
import { OtpScreen } from '../screens/OtpScreen/OtpScreen';

export default function Otp() {
  const router = useRouter();
  return (
    <OtpScreen
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/login'))}
      onNext={() => {}}
      onResend={() => {}}
    />
  );
}
