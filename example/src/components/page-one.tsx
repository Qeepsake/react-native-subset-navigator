import React from 'react'
import { Animated, Button, Text } from 'react-native'
import {
  Navigator,
  useFadeInAnimation,
  useSlideRightAnimation,
} from 'react-native-subset-navigator'

interface Props {
  navigator: Navigator
  passProps?: {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
  }
}
export const PageOne: React.FC<Props> = (props: Props) => {
  const { navigator, passProps } = props

  const animatedOpacity = useFadeInAnimation(1)
  const slideRightAnimation = useSlideRightAnimation()
  return (
    <Animated.View style={[animatedOpacity, slideRightAnimation]}>
      <Text style={{ fontSize: 40, marginBottom: 240 }}>ITS PAGE ONE!</Text>
      <Button
        onPress={() => {
          passProps?.setPageNumber(2)
          navigator.push('PageTwo')
        }}
        title='PUSH TO PAGE TWO!'
      />
      <Button onPress={() => navigator.pop()} title='POP!' />
    </Animated.View>
  )
}
