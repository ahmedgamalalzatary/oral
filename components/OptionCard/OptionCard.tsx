import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors, fontSize, radius, spacing } from '../../theme';

export interface OptionCardProps {
  /** Icon shown on the left (e.g. require('../../assets/Frame 12.png')). */
  icon: ImageSourcePropType;
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function OptionCard({ icon, title, subtitle, selected, onPress, style }: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected, style]}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: colors.primary,
  },
  icon: {
    width: 32,
    height: 32,
  },
  texts: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    fontSize: fontSize.body,
    fontWeight: '700',
    color: colors.textDark,
  },
  subtitle: {
    fontSize: fontSize.body,
    color: colors.placeholder,
  },
});
