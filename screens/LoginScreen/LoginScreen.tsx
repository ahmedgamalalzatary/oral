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
import { Button, Checkbox, Divider, Input, ScreenHeader } from '../../components';
import { colors, fontSize, spacing } from '../../theme';

const LOGO = require('../../assets/Frame 23.png');

export interface LoginScreenProps {
  onBack?: () => void;
  onSignIn?: () => void;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
}

export function LoginScreen({ onBack, onSignIn, onForgotPassword, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <ScreenHeader title="Login" onBack={onBack} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrap}>
          <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        </View>

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

        <View style={styles.row}>
          <Checkbox checked={remember} onChange={setRemember} label="Remember me" />
          <Pressable onPress={onForgotPassword}>
            <Text style={styles.link}>Forgot Password</Text>
          </Pressable>
        </View>

        <Button label="Sign in" onPress={onSignIn} style={styles.submit} />

        <Divider label="OR" style={styles.divider} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Pressable onPress={onSignUp}>
            <Text style={styles.link}>Sign Up</Text>
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
    paddingVertical: spacing.lg,
  },
  logo: {
    width: 200,
    height: 180,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    fontSize: fontSize.body,
    color: colors.primary,
    fontWeight: '600',
  },
  submit: {
    marginTop: spacing.sm,
  },
  divider: {
    marginVertical: spacing.sm,
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
});
