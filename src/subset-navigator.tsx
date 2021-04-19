import * as React from 'react'

export type Pages = Record<string, React.ComponentType<ScreenProps>>

interface IState {
  pages: Pages
  currentScreen: React.ReactElement<ScreenProps>
  screenStack: React.ReactElement<ScreenProps>[]
  stackSize: number
}

interface IProps {
  nameOfFirstPage: string
  pages: Pages
  passProps?: any
}

interface ScreenProps {
  navigator: Navigator
  passProps?: any
}

export class Navigator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    const { pages, nameOfFirstPage, passProps } = props

    const FirstScreenComponent = pages[nameOfFirstPage]
    const firstScreen = <FirstScreenComponent navigator={this} {...passProps} />

    // Component state
    this.state = {
      pages: pages,
      currentScreen: firstScreen,
      screenStack: [firstScreen],
      stackSize: 1,
    }

    this.pop = this.pop.bind(this)
    this.push = this.push.bind(this)
  }

  pop() {
    this.setState((state) => {
      let newStackSize = state.stackSize - 1
      let newScreen = state.screenStack[newStackSize - 1] // Index
      let newScreenStack = state.screenStack
      if (state.stackSize > 1) {
        newScreenStack.pop()
        return {
          ...state,
          currentScreen: newScreen,
          screenStack: newScreenStack,
          stackSize: newStackSize,
        }
      } else {
        console.log('No more screens to pop!')
      }
    })
  }

  push(screenName: string, props: any) {
    this.setState((state) => {
      let newScreenStack = state.screenStack

      let Screen = state.pages[screenName]
      newScreenStack.push(<Screen navigator={this} passProps={props} />)
      return {
        currentScreen: newScreenStack[state.stackSize],
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
    pages: Pages,
    passProps?: any
  ): React.ReactElement<Navigator> {
    return (
      <Navigator
        nameOfFirstPage={nameOfFirstPage}
        pages={pages}
        passProps={passProps}
      />
    )
  }
}

export default SubsetNavigator
export const createSubsetNavigator = SubsetNavigator.createSubsetNavigator
