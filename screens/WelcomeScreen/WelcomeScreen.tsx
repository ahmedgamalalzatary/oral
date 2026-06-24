import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, ScreenHeader } from '../../components';
import { colors, spacing } from '../../theme';

const LOGO = require('../../assets/Frame 4.png');

export interface WelcomeScreenProps {
  onBack?: () => void;
  onLogin?: () => void;
  onSignup?: () => void;
}

export function WelcomeScreen({ onBack, onLogin, onSignup }: WelcomeScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader onBack={onBack} />

      <View style={styles.content}>
        <View style={styles.logoWrap}>
          <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={styles.actions}>
          <Button label="Login" onPress={onLogin} />
          <Button label="Sign up" variant="outline" onPress={onSignup} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  logoWrap: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  logo: {
    width: 280,
    height: 200,
  },
  actions: {
    gap: spacing.md,
  },
});
