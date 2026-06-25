import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageCard } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

const NORMAL = require('../../assets/Frame 3.png');
const CANCER = require('../../assets/Frame 5.png');
const ULCERS = require('../../assets/Frame 6.png');

export default function Home() {
  const router = useRouter();
  const handleBack = () => (router.canGoBack() ? router.back() : router.replace('/login'));

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Pressable
          onPress={handleBack}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={20} color={colors.textDark} />
        </Pressable>
        <View style={styles.headerText}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.name}>Mohamed</Text>
        </View>
        <Pressable style={styles.iconBtn} accessibilityLabel="Scan">
          <Ionicons name="scan-circle-outline" size={32} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImageCard
          image={NORMAL}
          style={styles.card}
          onPress={() => router.push('/(tabs)/normal')}
        />
        <ImageCard
          image={CANCER}
          style={styles.card}
          onPress={() => router.push('/(tabs)/possibility-cancer')}
        />
        <ImageCard
          image={ULCERS}
          style={styles.card}
          onPress={() => router.push('/(tabs)/oral')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    flex: 1,
    marginLeft: spacing.md,
  },
  welcome: {
    fontSize: fontSize.body,
    color: colors.placeholder,
  },
  name: {
    fontSize: fontSize.title,
    fontWeight: '700',
    fontStyle: 'italic',
    color: colors.textDark,
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  card: {
    width: '100%',
    aspectRatio: 722 / 384,
  },
});
