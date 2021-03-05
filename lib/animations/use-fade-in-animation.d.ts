import { Animated, ViewStyle } from 'react-native';
/**
 * Returns the opacity to create a fade-in animation.
 * @param finalOpacity The final opacity of your view. Defaults to 1 for a fully opaque view.
 */
export declare const useFadeInAnimation: (finalOpacity?: number | undefined, duration?: number | undefined, easing?: ((value: number) => number) | undefined) => Animated.WithAnimatedValue<ViewStyle>;
