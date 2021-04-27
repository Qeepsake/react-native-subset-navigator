import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { createSubsetNavigator } from 'react-native-subset-navigator'

import { PageOne } from './page-one'
import { PageThree } from './page-three'
import { PageTwo } from './page-two'

interface Props {
  passProps?: {
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
  }
}

export const Overlay = (props: Props): React.ReactElement<Navigator> => {
  const Screens = {
    PageOne: PageOne,
    PageTwo: PageTwo,
    PageThree: PageThree,
  }

  const OverlaySubset = createSubsetNavigator('PageOne', Screens, props)
  return (
    <View style={[styles.overlayBackground]}>
      <View style={styles.overlayContainer}>
        <View style={styles.overlayContentContainer}>{OverlaySubset}</View>
      </View>
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
