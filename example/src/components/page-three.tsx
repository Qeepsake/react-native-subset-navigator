import React from 'react'
import { Animated, Button, Text } from 'react-native'
import { Navigator, useSlideUpAnimation } from 'react-native-subset-navigator'

interface Props {
  navigator: Navigator
  passProps?: {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
  }
}

export const PageThree: React.FC<Props> = (props: Props) => {
  const { navigator, passProps } = props

  const slideUpAnimation = useSlideUpAnimation()

  return (
    <Animated.View style={slideUpAnimation}>
      <Text style={{ fontSize: 40, marginBottom: 240 }}>ITS PAGE THREE!</Text>
      <Button onPress={onButtonPress} title='PUSH TO PAGE ONE!' />
      <Button onPress={() => navigator.pop()} title='POP!' />
    </Animated.View>
  )
  function onButtonPress() {
    passProps.setPageNumber(1)
    navigator.push('PageOne', {
      setPageNumber: passProps.setPageNumber,
    })
  }
}
