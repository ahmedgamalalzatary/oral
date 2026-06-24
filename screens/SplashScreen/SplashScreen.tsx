import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../theme';

// Full logo lockup (ring + mouth/magnifier + wordmark + tagline).
const LOGO = require('../../assets/Frame 2.png');

export function SplashScreen() {
  return (
    <View style={styles.screen}>
      <Image source={LOGO} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});
