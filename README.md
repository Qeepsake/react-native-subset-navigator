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
        <TouchableOpacity onPress={() => navigator.push("OnboardingTwo")}>
                <View />
        <TouhableOpacity>
    );
}
````
