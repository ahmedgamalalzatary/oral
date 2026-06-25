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

const HERO = require('../../assets/Frame 6.png');

export interface OralUlcersScreenProps {
  onBack?: () => void;
  onScan?: () => void;
}

function Bullet({ children, link }: { children: string; link?: boolean }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={[styles.bulletDot, link && styles.linkText]}>{'•'}</Text>
      <Text style={[styles.bulletText, link && styles.linkText]}>{children}</Text>
    </View>
  );
}

export function OralUlcersScreen({ onBack, onScan }: OralUlcersScreenProps) {
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
        <Text style={styles.headerTitle}>oral ulcers</Text>
        <Pressable onPress={onScan} style={styles.iconBtn} accessibilityLabel="Scan">
          <Ionicons name="scan-circle-outline" size={32} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImageCard image={HERO} style={styles.hero} />

        <Text style={styles.title}>ORAL ULCERS</Text>

        <Text style={styles.section}>What does it mean?</Text>
        <Bullet>
          Oral ulcers are open sores that appear inside the mouth and are often painful.
        </Bullet>
        <Bullet>They can affect eating, speaking, and overall comfort.</Bullet>
        <Bullet>Most oral ulcers are harmless and heal naturally.</Bullet>

        <Text style={[styles.section, styles.linkText]}>Common Causes</Text>
        <Bullet link>Accidental injury from biting or sharp teeth</Bullet>
        <Bullet link>Stress, anxiety, or lack of sleep</Bullet>
        <Bullet link>Nutritional deficiencies, especially iron or vitamin B</Bullet>
        <Bullet link>Hormonal changes</Bullet>
        <Bullet link>Weakened immune system</Bullet>

        <Text style={styles.section}>Symptoms You May Notice</Text>
        <Bullet>Small round or oval sores with a white or yellow center</Bullet>
        <Bullet>Red, inflamed edges around the ulcer</Bullet>
        <Bullet>Pain when eating spicy or acidic foods</Bullet>
        <Bullet>Sensitivity while brushing teeth</Bullet>

        <Text style={styles.section}>Home Care and Relief</Text>
        <Bullet>Rinse with warm salt water daily</Bullet>
        <Bullet>Avoid hot, spicy, or acidic foods</Bullet>
        <Bullet>Use a soft-bristled toothbrush</Bullet>
        <Bullet>Apply topical treatments as recommended by a dentist</Bullet>

        <Text style={styles.section}>When to Be Concerned</Text>
        <Bullet>Ulcers lasting more than 2 weeks</Bullet>
        <Bullet>Recurrent ulcers with no clear cause</Bullet>
        <Bullet>Severe pain, swelling, or bleeding</Bullet>
        <Bullet>Ulcers accompanied by fever or weight loss</Bullet>
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
  linkText: {
    color: colors.secondary,
    textDecorationLine: 'underline',
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
