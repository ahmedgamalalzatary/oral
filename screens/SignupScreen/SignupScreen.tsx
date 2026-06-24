import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input, ScreenHeader } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

const LOGO = require('../../assets/Frame 11.png');

export interface SignupScreenProps {
  onBack?: () => void;
  onCreateAccount?: () => void;
  onSignIn?: () => void;
}

export function SignupScreen({ onBack, onCreateAccount, onSignIn }: SignupScreenProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader title="Sign up" onBack={onBack} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrap}>
          <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        </View>

        <Input
          label="Full name"
          leftIcon="person-outline"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Input
          label="Email"
          leftIcon="mail-outline"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Password"
          leftIcon="lock-closed-outline"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Input
          label="Confirm password"
          leftIcon="lock-closed-outline"
          placeholder="Re-enter your password"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <Button label="Create account" onPress={onCreateAccount} style={styles.submit} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <Pressable onPress={onSignIn}>
            <Text style={styles.link}>Sign in</Text>
          </Pressable>
        </View>
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
  content: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  logoWrap: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  logo: {
    width: 160,
    height: 150,
  },
  submit: {
    marginTop: spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: fontSize.body,
    color: colors.textDark,
  },
  link: {
    fontSize: fontSize.body,
    color: colors.primary,
    fontWeight: '600',
  },
});
