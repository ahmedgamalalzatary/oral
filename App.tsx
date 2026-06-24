import { StatusBar } from 'expo-status-bar';
import { SplashScreen } from './screens/SplashScreen/SplashScreen';

export default function App() {
  return (
    <>
      <SplashScreen />
      <StatusBar style="dark" />
    </>
  );
}
