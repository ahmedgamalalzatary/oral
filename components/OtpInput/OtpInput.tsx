import { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  type NativeSyntheticEvent,
  type StyleProp,
  type TextInputKeyPressEventData,
  type ViewStyle,
} from 'react-native';
import { colors, radius, spacing } from '../../theme';

export interface OtpInputProps {
  /** Number of digits. */
  length?: number;
  value: string;
  onChange: (code: string) => void;
  style?: StyleProp<ViewStyle>;
}

export function OtpInput({ length = 4, value, onChange, style }: OtpInputProps) {
  const inputs = useRef<Array<TextInput | null>>([]);
  const [focused, setFocused] = useState<number | null>(null);
  const digits = value.split('');

  const setDigit = (index: number, char: string) => {
    const next = value.split('');
    next[index] = char;
    const code = next.join('').slice(0, length);
    onChange(code);
    if (char && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={[styles.row, style]}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          value={digits[index] ?? ''}
          onChangeText={(text) => setDigit(index, text.replace(/[^0-9]/g, '').slice(-1))}
          onKeyPress={(e) => handleKeyPress(index, e)}
          onFocus={() => setFocused(index)}
          onBlur={() => setFocused(null)}
          keyboardType="number-pad"
          maxLength={1}
          style={[styles.box, focused === index && styles.boxFocused]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  box: {
    flex: 1,
    height: 56,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.primary,
    textAlign: 'center',
    fontSize: 20,
    color: colors.textDark,
  },
  boxFocused: {
    borderWidth: 2,
  },
});
