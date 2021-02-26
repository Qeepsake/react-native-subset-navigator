import * as React from 'react'

export type Pages = Record<string, React.ComponentType<ScreenProps>>
type Screens = Record<string, React.ReactElement<ScreenProps>>

interface IState {
  screens: Screens
  currentScreen: React.ReactElement<ScreenProps>
  screenStack: string[]
  stackSize: number
}

interface IProps {
  nameOfFirstPage: string
  pages: Pages
}

interface ScreenProps {
  navigator: Navigator
}

export class Navigator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { pages, nameOfFirstPage } = props
    // Initialising the screens to use this component as its navigator
    let newScreens: Screens = {}
    const screenNames = Object.keys(pages)
    for (let i = 0; i < screenNames.length; i++) {
      let screenName: string = screenNames[i]
      let Screen = pages[screenName]
      newScreens[screenName] = <Screen navigator={this} />
    }

    // Component state
    this.state = {
      screens: newScreens, // All the screens
      currentScreen: newScreens[nameOfFirstPage],
      screenStack: [nameOfFirstPage],
      stackSize: 1,
    }

    this.pop = this.pop.bind(this)
    this.push = this.push.bind(this)
  }

  pop() {
    this.setState((state) => {
      let newStackSize = state.stackSize - 1
      let newScreenName = state.screenStack[newStackSize - 1] // Index
      let newScreenStack = state.screenStack
      if (state.stackSize > 1) {
        newScreenStack.pop()
        return {
          ...state,
          currentScreen: state.screens[newScreenName],
          screenStack: newScreenStack,
          stackSize: newStackSize,
        }
      } else {
        console.log('No more screens to pop!')
      }
    })
  }

  push(screenName: string) {
    this.setState((state) => {
      let newScreenStack = state.screenStack
      newScreenStack.push(screenName)
      return {
        currentScreen: state.screens[screenName],
        screenStack: newScreenStack,
        stackSize: state.stackSize + 1,
      }
    })
  }

  render() {
    let Screen = this.state.currentScreen
    return <>{Screen}</>
  }
}

class SubsetNavigator {
  static createSubsetNavigator(
    nameOfFirstPage: string,
    pages: Pages
  ): React.ReactElement<Navigator> {
    return <Navigator nameOfFirstPage={nameOfFirstPage} pages={pages} />
  }
}

export default SubsetNavigator
export const createSubsetNavigator = SubsetNavigator.createSubsetNavigator
