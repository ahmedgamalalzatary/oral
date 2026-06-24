import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, View, type GestureResponderEvent } from 'react-native';
import { colors } from '../../theme';

function CameraTabButton({
  onPress,
}: {
  onPress?: (e: GestureResponderEvent) => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.cameraWrap} accessibilityLabel="Scan">
      <View style={styles.cameraRing}>
        <View style={styles.cameraButton}>
          <Ionicons name="camera-outline" size={28} color={colors.primary} />
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
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    borderTopWidth: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
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
    marginBottom: 50,
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
