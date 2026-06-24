import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, fontSize, spacing } from '../../theme';

export interface OnboardingHeaderProps {
  title: string;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
}

export function OnboardingHeader({ title, subtitle, style }: OnboardingHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  title: {
    color: colors.primary,
    fontSize: fontSize.title,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.primary,
    fontSize: fontSize.subtitle,
    textAlign: 'center',
  },
});
