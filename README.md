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

````js
import { createSubsetNavigator } from "react-native-subset-navigator";

const OnboardingOverlay = () => {
        const OverlaySubset = createSubsetNavigator("OnboardingOne", {
          "OnboardingOne": OnboardingOne,
          "OnboardingTwo": OnboardingTwo,
          "OnboardingThree": OnboardingThree,
        })

    return (
        <View style={{}}> <-- modal common container
            <OverlaySubset />
        </View> 
    );
}
.....
````

2. Create the components to take in a 'navigator' prop and use the `push` and `pop` methods to navigate
````js
const OnboardingOne = ({ navigator }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigator.push("OnboardingTwo")}>
                <View />
            <TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.pop()}>
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