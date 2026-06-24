import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button } from '../../components';
import { colors, spacing } from '../../theme';

const LOGO = require('../../assets/Frame 4.png');

export function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.logoWrap}>
        <Image source={LOGO} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.actions}>
        {/* TODO: wire to /login and /signup once those screens exist. */}
        <Button label="Login" onPress={() => {}} />
        <Button label="Sign up" variant="outline" onPress={() => {}} />
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
  logoWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 280,
    height: 200,
  },
  actions: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
});
