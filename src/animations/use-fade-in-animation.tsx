import { useEffect, useState } from 'react'
import { Animated, Easing, ViewStyle } from 'react-native'

/**
 * Returns the opacity to create a fade-in animation.
 * @param finalOpacity The final opacity of your view. Defaults to 1 for a fully opaque view.
 */
export const useFadeInAnimation = (
  finalOpacity?: number,
  duration?: number,
  easing?: ((value: number) => number) | undefined
): Animated.WithAnimatedValue<ViewStyle> => {
  const [currOpacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(currOpacity, {
      toValue: finalOpacity ?? 1,
      duration: duration ?? 500,
      easing: easing ?? Easing.quad,
      useNativeDriver: true,
    }).start()
  }, [finalOpacity, currOpacity, duration, easing])
  return {
    opacity: currOpacity,
  }
}
