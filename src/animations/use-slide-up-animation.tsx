import { useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, ViewStyle } from 'react-native'

/**
 * Returns the transform translateY style prop
 * to create a slide up animation.
 * @param duration The duration of the animation. Defaults to 500 ms.
 * @param easing The easing function of the animation. Defaults to Easing.quad.
 */
export const useSlideUpAnimation = (
  duration?: number,
  easing?: ((value: number) => number) | undefined
): Animated.WithAnimatedValue<ViewStyle> => {
  const DEVICE_HEIGHT = Dimensions.get('window').height
  const [yPosition] = useState(new Animated.Value(DEVICE_HEIGHT))

  useEffect(() => {
    Animated.timing(yPosition, {
      toValue: 0,
      duration: duration ?? 500,
      easing: easing ?? Easing.quad,
      useNativeDriver: true,
    }).start()
  }, [duration, easing, yPosition])
  return {
    transform: [
      {
        translateY: yPosition,
      },
    ],
  }
}
