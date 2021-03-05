import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createSubsetNavigator } from 'react-native-subset-navigator'

import { PageOne } from './components/page-one'
import { PageThree } from './components/page-three'
import { PageTwo } from './components/page-two'

interface Props {
  passProps?: {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
  }
}

export default function App() {
  const [pageNumber, setPageNumber] = useState(1)

  const Screens = {
    PageOne: PageOne,
    PageTwo: PageTwo,
    PageThree: PageThree,
  }

  const Overlay = (props: Props): React.ReactElement<Navigator> => {
    const OverlaySubset = createSubsetNavigator('PageOne', Screens, props)
    return (
      <View style={[styles.overlayBackground]}>
        <View style={styles.overlayContainer}>
          <View style={styles.overlayContentContainer}>{OverlaySubset}</View>
        </View>
      </View>
    )
  }

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
  overlayBackground: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    top: 300,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  overlayContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
