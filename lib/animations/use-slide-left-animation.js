"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlideLeftAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Returns the transform translateX style prop
 * to create a slide left animation.
 * @param duration The duration of the animation. Defaults to 500 ms.
 * @param easing The easing function of the animation. Defaults to Easing.quad.
 */
const useSlideLeftAnimation = (duration, easing) => {
    const DEVICE_WIDTH = react_native_1.Dimensions.get('window').width;
    const [xPosition] = react_1.useState(new react_native_1.Animated.Value(-DEVICE_WIDTH));
    react_1.useEffect(() => {
        react_native_1.Animated.timing(xPosition, {
            toValue: 0,
            duration: duration ?? 500,
            easing: easing ?? react_native_1.Easing.quad,
            useNativeDriver: true,
        }).start();
    }, [duration, easing, xPosition]);
    return {
        transform: [
            {
                translateX: xPosition,
            },
        ],
    };
};
exports.useSlideLeftAnimation = useSlideLeftAnimation;
//# sourceMappingURL=use-slide-left-animation.js.map