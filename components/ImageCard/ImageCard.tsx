import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { colors, fontSize, radius, spacing } from '../../theme';

export interface ImageCardProps {
  image: ImageSourcePropType;
  title?: string;
  height?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function ImageCard({ image, title, height, onPress, style }: ImageCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, height ? { height } : null, style]}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageInner}
        resizeMode="cover"
      >
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: spacing.md,
  },
  // Scale the bitmap up slightly so each asset's baked-in (and inconsistent)
  // rounded/transparent corners are cropped off by the card's clip, leaving the
  // card's own borderRadius as the only visible rounding on all four corners.
  imageInner: {
    borderRadius: radius.md,
    transform: [{ scale: 1.07 }],
  },
  title: {
    color: colors.white,
    fontSize: fontSize.button,
    fontWeight: '700',
  },
});
