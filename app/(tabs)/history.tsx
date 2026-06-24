import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme';

export default function History() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>History</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', color: colors.primary },
});
