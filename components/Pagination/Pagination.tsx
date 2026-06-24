import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../../theme';

export interface PaginationProps {
  /** Total number of pages/dots. */
  count: number;
  /** Zero-based index of the active page. */
  activeIndex: number;
  style?: StyleProp<ViewStyle>;
}

export function Pagination({ count, activeIndex, style }: PaginationProps) {
  return (
    <View style={[styles.row, style]}>
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <View
            key={i}
            style={[styles.dot, active ? styles.dotActive : styles.dotInactive]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: radius.pill,
  },
  dotActive: {
    backgroundColor: colors.primary,
  },
  dotInactive: {
    backgroundColor: colors.muted,
  },
});
