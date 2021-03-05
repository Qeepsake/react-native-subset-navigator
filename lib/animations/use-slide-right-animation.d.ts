import { Animated, ViewStyle } from 'react-native';
/**
 * Returns the transform translateX style prop
 * to create a slide right animation.
 * @param duration The duration of the animation. Defaults to 500 ms.
 * @param easing The easing function of the animation. Defaults to Easing.quad.
 */
export declare const useSlideRightAnimation: (duration?: number | undefined, easing?: ((value: number) => number) | undefined) => Animated.WithAnimatedValue<ViewStyle>;
