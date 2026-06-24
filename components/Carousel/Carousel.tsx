import { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  type ImageSourcePropType,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors, radius } from '../../theme';
import { Pagination } from '../Pagination/Pagination';

export interface CarouselProps {
  /** Slide images, in order. */
  images: ImageSourcePropType[];
  /** Width of a slide. Defaults to the screen width minus horizontal padding. */
  slideWidth?: number;
  /** Height of the image card. */
  height?: number;
  showPagination?: boolean;
  onIndexChange?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
}

export function Carousel({
  images,
  slideWidth,
  height = 280,
  showPagination = true,
  onIndexChange,
  style,
}: CarouselProps) {
  const { width: screenWidth } = useWindowDimensions();
  const width = slideWidth ?? screenWidth - 48; // matches screen lg padding (24*2)
  const [index, setIndex] = useState(0);
  const lastIndex = useRef(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = Math.round(e.nativeEvent.contentOffset.x / width);
    if (next !== lastIndex.current) {
      lastIndex.current = next;
      setIndex(next);
      onIndexChange?.(next);
    }
  };

  return (
    <View style={style}>
      <View style={[styles.card, { width, height }]}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {images.map((src, i) => (
            <Image key={i} source={src} style={{ width, height }} resizeMode="cover" />
          ))}
        </ScrollView>
      </View>

      {showPagination ? (
        <Pagination count={images.length} activeIndex={index} style={styles.pagination} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: colors.secondary,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  pagination: {
    marginTop: 24,
  },
});
