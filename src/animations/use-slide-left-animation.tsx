import { useEffect, useState } from 'react'
import { Animated, Dimensions, Easing, ViewStyle } from 'react-native'

/**
 * Returns the transform translateX style prop
 * to create a slide left animation.
 * @param duration The duration of the animation. Defaults to 500 ms.
 * @param easing The easing function of the animation. Defaults to Easing.quad.
 */
export const useSlideLeftAnimation = (
  duration?: number,
  easing?: ((value: number) => number) | undefined
): Animated.WithAnimatedValue<ViewStyle> => {
  const DEVICE_WIDTH = Dimensions.get('window').width
  const [xPosition] = useState(new Animated.Value(-DEVICE_WIDTH))

  useEffect(() => {
    Animated.timing(xPosition, {
      toValue: 0,
      duration: duration ?? 500,
      easing: easing ?? Easing.quad,
      useNativeDriver: true,
    }).start()
  }, [duration, easing, xPosition])
  return {
    transform: [
      {
        translateX: xPosition,
      },
    ],
  }
}
