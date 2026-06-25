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

const HERO = require('../../assets/Frame 5.png');

export interface PossibilityCancerScreenProps {
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

export function PossibilityCancerScreen({ onBack, onScan }: PossibilityCancerScreenProps) {
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
        <Text style={styles.headerTitle}>Possibility cancer</Text>
        <Pressable onPress={onScan} style={styles.iconBtn} accessibilityLabel="Scan">
          <Ionicons name="scan-circle-outline" size={32} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ImageCard image={HERO} style={styles.hero} />

        <Text style={styles.title}>POSSIBILITY OF ORAL CANCER</Text>

        <Text style={styles.section}>What does it mean?</Text>
        <Bullet>
          This category includes changes in the mouth that look different from normal tissue.
        </Bullet>
        <Bullet>
          These changes do not always mean cancer, but they may indicate early warning signs.
        </Bullet>
        <Bullet>
          Early attention can make a big difference in treatment outcomes.
        </Bullet>

        <Text style={styles.section}>Possible Warning Signs</Text>
        <Bullet>A mouth sore that does not heal after 2 weeks</Bullet>
        <Bullet>White, red, or mixed color patches</Bullet>
        <Bullet>A lump, thickened area, or swelling</Bullet>
        <Bullet>Persistent pain, numbness, or burning sensation</Bullet>
        <Bullet>Difficulty chewing, swallowing, or moving the jaw</Bullet>

        <Text style={styles.section}>Who Is More at Risk?</Text>
        <Bullet>Smokers or tobacco users</Bullet>
        <Bullet>Heavy alcohol consumers</Bullet>
        <Bullet>People with prolonged sun exposure (lip cancer risk)</Bullet>
        <Bullet>Individuals with poor oral hygiene</Bullet>

        <Text style={styles.section}>When to Seek Medical Advice</Text>
        <Bullet>Symptoms lasting longer than 14 days</Bullet>
        <Bullet>Changes that increase in size or severity</Bullet>
        <Bullet>Bleeding without an obvious reason</Bullet>
        <Bullet>Any unexplained change in the mouth</Bullet>

        <Text style={styles.section}>Prevention and Protection</Text>
        <Bullet>Stop smoking and avoid tobacco products</Bullet>
        <Bullet>Limit alcohol consumption</Bullet>
        <Bullet>Maintain excellent oral hygiene</Bullet>
        <Bullet>Perform monthly self-examinations</Bullet>
        <Bullet>Visit a dentist regularly</Bullet>
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
