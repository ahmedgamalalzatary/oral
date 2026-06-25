import { Ionicons } from '@expo/vector-icons';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageCard } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

const HERO = require('../../assets/Frame 3.png');

export interface NormalScreenProps {
  onBack?: () => void;
  onScan?: () => void;
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>{'•'}</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

export function NormalScreen({ onBack, onScan }: NormalScreenProps) {
  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <View style={styles.header}>
        <Pressable
          onPress={onBack}
          style={styles.backBtn}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={20} color={colors.textDark} />
        </Pressable>
        <Text style={styles.headerTitle}>Normal</Text>
        <Pressable onPress={onScan} style={styles.iconBtn} accessibilityLabel="Scan">
          <Ionicons name="scan-circle-outline" size={32} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImageCard image={HERO} style={styles.hero} />

        <Text style={styles.title}>NORMAL (Healthy Condition)</Text>

        <Text style={styles.section}>What does it mean?</Text>
        <Bullet>
          A healthy oral condition means that the tissues inside the mouth are normal in color,
          shape, and texture.
        </Bullet>
        <Bullet>There are no long-lasting sores, unusual patches, or unexplained pain.</Bullet>
        <Bullet>A healthy mouth is an important sign of overall good health.</Bullet>

        <Text style={styles.section}>Common Signs of a Healthy Mouth</Text>
        <Bullet>Gums are pink, firm, and do not bleed easily</Bullet>
        <Bullet>No ulcers, wounds, or persistent swelling</Bullet>
        <Bullet>No white or red patches</Bullet>
        <Bullet>No pain during chewing, speaking, or swallowing</Bullet>

        <Text style={styles.section}>Daily Care Tips</Text>
        <Bullet>Brush your teeth at least twice a day using fluoride toothpaste</Bullet>
        <Bullet>Clean between teeth with dental floss or interdental brushes</Bullet>
        <Bullet>Rinse your mouth after meals when possible</Bullet>
        <Bullet>Replace your toothbrush every 3 months</Bullet>

        <Text style={styles.section}>Why Regular Checkups Matter</Text>
        <Bullet>Early detection of oral problems</Bullet>
        <Bullet>Professional cleaning to prevent gum disease</Bullet>
        <Bullet>Monitoring any small changes before they become serious</Bullet>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
  },
  iconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingBottom: spacing.xl,
  },
  hero: {
    width: '100%',
    aspectRatio: 722 / 384,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  section: {
    fontSize: fontSize.button,
    fontWeight: '700',
    color: colors.textDark,
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  bulletDot: {
    fontSize: fontSize.body,
    color: colors.textDark,
    marginRight: spacing.sm,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: fontSize.body,
    color: colors.textDark,
    lineHeight: 20,
  },
});
