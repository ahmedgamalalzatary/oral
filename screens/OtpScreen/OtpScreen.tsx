import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, OtpInput, ScreenHeader } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

export interface OtpScreenProps {
  /** Where the code was sent, e.g. "+2011******92". */
  destination?: string;
  onBack?: () => void;
  onNext?: (code: string) => void;
  onResend?: () => void;
}

export function OtpScreen({ destination = '+2011******92', onBack, onNext, onResend }: OtpScreenProps) {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader title="OTP" onBack={onBack} />

      <View style={styles.body}>
        <Text style={styles.sentTo}>Code has been sent to {destination}</Text>

        <OtpInput value={code} onChange={setCode} />

        <Button label="Next" onPress={() => onNext?.(code)} style={styles.next} />

        <Pressable onPress={onResend} style={styles.resendWrap}>
          <Text style={styles.resend}>Resend code</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
  },
  body: {
    paddingTop: spacing.xl,
    gap: spacing.lg,
  },
  sentTo: {
    fontSize: fontSize.body,
    color: colors.textDark,
    textAlign: 'center',
  },
  next: {
    marginTop: spacing.md,
  },
  resendWrap: {
    alignSelf: 'flex-end',
  },
  resend: {
    fontSize: fontSize.body,
    color: colors.primary,
    fontWeight: '600',
  },
});
