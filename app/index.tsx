import { router } from 'expo-router';
import { useEffect } from 'react';
import { SplashScreen } from '../screens/SplashScreen/SplashScreen';

/** Entry route: shows the splash, then advances to onboarding. */
export default function Index() {
  useEffect(() => {
    const t = setTimeout(() => router.replace('/onboarding'), 1800);
    return () => clearTimeout(t);
  }, []);

  return <SplashScreen />;
}
