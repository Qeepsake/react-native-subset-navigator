# react-native-subset-navigator
An in-built navigator to simplify embedded navigation flows.


## Install

```sh
 npm install react-native-subset-navigator --save
```

or

```sh
 yarn add react-native-subset-navigator
```

## Usage

1. Create the Subset Navigator
`createSubsetNavigator(nameOfFirstOverlay, Overlays, props)`

````js
import { createSubsetNavigator } from "react-native-subset-navigator";

 //props is optional
const OnboardingOverlay = (props) => {
        const OverlaySubset = createSubsetNavigator("OnboardingOne", {
          "OnboardingOne": OnboardingOne,
          "OnboardingTwo": OnboardingTwo,
          "OnboardingThree": OnboardingThree,
        }, props)

    return (
        <View style={styles.containerStyle}> // <-- modal common container
            {OverlaySubset}
        </View> 
    );
}
.....
````

2. Render the subset navigator
- The `passProps` props passes props to every screen of the subset navigator 

````js
import {OnboardingOverlay} from '../components/on-boarding-overlay';

export const OnBoardingPage = () => {
    const [pageNumber, setPageNumber] = useState(1);

    return(
      ...
      <OnboardingOverlay passProps={{setPageNumber}} />
      ...
    )
}
````

3. Create the components/ screens to take in a 'navigator' prop and use the `push` and `pop` methods to navigate.
- The component can also take in a 'passProps' prop if you want to pass props to each screen
````js
const OnboardingOne = ({ navigator, passProps }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigator.push("OnboardingTwo")}>
                <View />
            <TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.pop()}>
                <View />
            <TouchableOpacity>
            <TouchableOpacity onPress={() => passProps.setPageNumber(2)}>
                <View />
            <TouchableOpacity>
        </>
    );
}
````

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Denise-Ng"><img src="https://avatars.githubusercontent.com/u/50568634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denise-Ng</b></sub></a><br /><a href="https://github.com/Aspect Apps/react-native-subset-navigator/commits?author=Denise-Ng" title="Code">💻</a> <a href="https://github.com/Aspect Apps/react-native-subset-navigator/commits?author=Denise-Ng" title="Documentation">📖</a> <a href="#example-Denise-Ng" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!