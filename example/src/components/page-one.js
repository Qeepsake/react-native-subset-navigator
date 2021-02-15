import React from 'react'
import {Text, Button} from 'react-native'
  
export function PageOne({navigator}) {
  return (
    <>
      <Text style={{fontSize: 40, marginBottom: 240 }}>
        ITS PAGE ONE!
      </Text>
      <Button onPress={() => navigator.push("PageTwo")} title="PUSH TO PAGE TWO!" />
      <Button onPress={() => navigator.pop()} title="POP!" />
    </>
  )
}
