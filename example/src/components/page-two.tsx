import React from 'react'
import { Animated, Button, Text } from 'react-native'
import { Navigator, useSlideLeftAnimation } from 'react-native-subset-navigator'

interface Props {
  navigator: Navigator
  passProps?: {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
  }
}

export const PageTwo: React.FC<Props> = (props: Props) => {
  const { navigator, passProps } = props
  const slideLeftAnimation = useSlideLeftAnimation(200)

  return (
    <Animated.View style={slideLeftAnimation}>
      <Text style={{ fontSize: 40, marginBottom: 240 }}>ITS PAGE TWO!</Text>
      <Button onPress={onButtonPress} title='PUSH TO PAGE THREE!' />
      <Button onPress={() => navigator.pop()} title='POP!' />
    </Animated.View>
  )
  function onButtonPress() {
    passProps.setPageNumber(3)
    navigator.push('PageThree', {
      setPageNumber: passProps.setPageNumber,
    })
  }
}
