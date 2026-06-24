import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import { colors, spacing } from '../../theme';

export interface ScreenHeaderProps {
  title?: string;
  /** Called when the back button is pressed. Hides the button when omitted. */
  onBack?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function ScreenHeader({ title, onBack, style }: ScreenHeaderProps) {
  return (
    <View style={[styles.row, style]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back"
            onPress={onBack}
            style={styles.backBtn}
          >
            <Ionicons name="chevron-back" size={20} color={colors.textDark} />
          </Pressable>
        ) : null}
      </View>

      {title ? <Text style={styles.title}>{title}</Text> : null}

      <View style={styles.side} />
    </View>
  );
}

const SIDE = 36;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  side: {
    width: SIDE,
  },
  backBtn: {
    width: SIDE,
    height: SIDE,
    borderRadius: SIDE / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
  },
});
