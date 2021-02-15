import React from 'react'
import {Text, Button} from 'react-native'
  
export function PageThree({navigator}) {
  return (
    <>
      <Text style={{fontSize: 40, marginBottom: 240 }}>
        ITS PAGE THREE!
      </Text>
      <Button onPress={() => navigator.push("PageOne")} title="PUSH TO PAGE ONE!" />
      <Button onPress={() => navigator.pop()} title="POP!" />
    </>
  )
}
