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

export function ImageCard({ image, title, height = 150, onPress, style }: ImageCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { height }, style]}>
      <ImageBackground source={image} style={styles.image} imageStyle={styles.imageRadius}>
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
  imageRadius: {
    borderRadius: radius.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSize.button,
    fontWeight: '700',
  },
});
