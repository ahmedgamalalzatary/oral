import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, fontSize, spacing } from '../../theme';

export interface DividerProps {
  /** Optional centered label, e.g. "OR". */
  label?: string;
  style?: StyleProp<ViewStyle>;
}

export function Divider({ label, style }: DividerProps) {
  if (!label) {
    return <View style={[styles.line, style]} />;
  }
  return (
    <View style={[styles.row, style]}>
      <View style={styles.flexLine} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.flexLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  line: {
    height: 1,
    backgroundColor: colors.border,
  },
  flexLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  label: {
    fontSize: fontSize.body,
    color: colors.textDark,
  },
});
