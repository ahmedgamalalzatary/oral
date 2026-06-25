import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform, Pressable, StyleSheet, View, type GestureResponderEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme';

// How far the camera button sits above the bar on Android (no bottom inset).
const CAMERA_LIFT = 50;

function CameraTabButton({
  onPress,
}: {
  onPress?: (e: GestureResponderEvent) => void;
}) {
  const insets = useSafeAreaInsets();
  // On iOS the tab bar gains bottom safe-area padding, which already pushes
  // content up — so subtract that inset to keep the button at the same height.
  const marginBottom =
    Platform.OS === 'ios' ? Math.max(CAMERA_LIFT - insets.bottom, 0) : CAMERA_LIFT;

  return (
    <Pressable onPress={onPress} style={styles.cameraWrap} accessibilityLabel="Scan">
      <View style={[styles.cameraRing, { marginBottom }]}>
        <View style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={36} color={colors.primary} />
        </View>
      </View>
    </Pressable>
  );
}

function RingIcon({ name }: { name: keyof typeof Ionicons.glyphMap }) {
  return (
    <View style={styles.ringIcon}>
      <Ionicons name={name} size={22} color={colors.white} />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => <RingIcon name="home-outline" />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarButton: (props) => <CameraTabButton onPress={props.onPress ?? undefined} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <RingIcon name="person-outline" />,
        }}
      />
      <Tabs.Screen name="normal" options={{ href: null }} />
      <Tabs.Screen name="possibility-cancer" options={{ href: null }} />
      <Tabs.Screen name="oral" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    borderTopWidth: 0,
    height: 68,
  },
  ringIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  cameraWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // White ring (the "notch") that separates the button from the teal bar.
  cameraRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Inner white circle holding the teal camera icon, with a teal gap ring.
  cameraButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
