import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, OptionCard, ScreenHeader } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

const SMS_ICON = require('../../assets/Frame 12.png');
const EMAIL_ICON = require('../../assets/Frame 13.png');

type Method = 'sms' | 'email';

export interface ForgetPasswordScreenProps {
  onBack?: () => void;
  onNext?: (method: Method) => void;
}

export function ForgetPasswordScreen({ onBack, onNext }: ForgetPasswordScreenProps) {
  const [method, setMethod] = useState<Method>('sms');

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader title="Forget password" onBack={onBack} />

      <View style={styles.body}>
        <Text style={styles.instruction}>
          Select which contact details should we use to reset your password
        </Text>

        <View style={styles.options}>
          <OptionCard
            icon={SMS_ICON}
            title="VIA SMS"
            subtitle="+2011******92"
            selected={method === 'sms'}
            onPress={() => setMethod('sms')}
          />
          <OptionCard
            icon={EMAIL_ICON}
            title="VIA Email"
            subtitle="es**********@gmail.com"
            selected={method === 'email'}
            onPress={() => setMethod('email')}
          />
        </View>
      </View>

      <Button label="Next" onPress={() => onNext?.(method)} style={styles.next} />
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
    flex: 1,
    gap: spacing.lg,
    paddingTop: spacing.lg,
  },
  instruction: {
    fontSize: fontSize.body,
    color: colors.textDark,
    lineHeight: 20,
  },
  options: {
    gap: spacing.md,
  },
  next: {
    marginBottom: spacing.xl,
  },
});
