import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { Overlay } from './components/overlay'

export default function App() {
  const [pageNumber, setPageNumber] = useState(1)

  return (
    <View style={[styles.container]}>
      <Overlay passProps={{ setPageNumber }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
