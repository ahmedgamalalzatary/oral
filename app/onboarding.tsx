import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { Button, OnboardingHeader, Pagination } from '../components';
import { colors, radius, spacing } from '../theme';

interface Slide {
  title: string;
  subtitle?: string;
  image: ImageSourcePropType;
}

const SLIDES: Slide[] = [
  {
    title: 'Welcome to OralScreen App',
    subtitle: 'An app to raise awareness and support early detection of oral cancer',
    image: require('../assets/image 370.png'),
  },
  {
    title: 'Your first step toward oral cancer awareness',
    image: require('../assets/image 371.png'),
  },
];

export default function Onboarding() {
  const { width: slideWidth } = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);
  const isLast = index === SLIDES.length - 1;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / slideWidth);
    if (next !== index) setIndex(next);
  };

  const handleNext = () => {
    if (isLast) {
      router.replace('/welcome');
    } else {
      scrollRef.current?.scrollTo({ x: (index + 1) * slideWidth, animated: true });
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.pager}
      >
        {SLIDES.map((slide, i) => (
          <View key={i} style={[styles.slide, { width: slideWidth }]}>
            <OnboardingHeader title={slide.title} subtitle={slide.subtitle} />
            <Image source={slide.image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </ScrollView>

      <Pagination count={SLIDES.length} activeIndex={index} style={styles.pagination} />

      <View style={styles.footer}>
        <Button label={isLast ? 'Get Started' : 'Next'} onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pager: {
    flex: 1,
  },
  slide: {
    flex: 1,
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    gap: spacing.xl,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: radius.lg,
  },
  pagination: {
    marginVertical: spacing.xl,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
