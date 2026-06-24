import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import { colors, fontSize, radius, spacing } from '../../theme';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  /** Ionicons name shown at the left of the field. */
  leftIcon?: keyof typeof Ionicons.glyphMap;
  style?: StyleProp<ViewStyle>;
}

export function Input({ label, leftIcon, style, ...inputProps }: InputProps) {
  return (
    <View style={[styles.container, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.field}>
        {leftIcon ? (
          <Ionicons name={leftIcon} size={20} color={colors.textDark} style={styles.icon} />
        ) : null}
        <TextInput
          placeholderTextColor={colors.placeholder}
          style={styles.input}
          {...inputProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    fontSize: fontSize.body,
    color: colors.textDark,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: fontSize.body,
    color: colors.textDark,
  },
});
