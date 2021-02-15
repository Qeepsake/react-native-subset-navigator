import React from 'react'
import {Text, Button} from 'react-native'
  
export function PageTwo({navigator}) {
  return (
    <>
      <Text style={{fontSize: 40, marginBottom: 240 }}>
        ITS PAGE TWO!
      </Text>
      <Button onPress={() => navigator.push("PageThree")} title="PUSH TO PAGE THREE!" />
      <Button onPress={() => navigator.pop()} title="POP!" />
    </>
  )
}
