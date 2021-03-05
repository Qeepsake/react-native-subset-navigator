"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlideUpAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Returns the transform translateY style prop
 * to create a slide up animation.
 * @param duration The duration of the animation. Defaults to 500 ms.
 * @param easing The easing function of the animation. Defaults to Easing.quad.
 */
const useSlideUpAnimation = (duration, easing) => {
    const DEVICE_HEIGHT = react_native_1.Dimensions.get('window').height;
    const [yPosition] = react_1.useState(new react_native_1.Animated.Value(DEVICE_HEIGHT));
    react_1.useEffect(() => {
        react_native_1.Animated.timing(yPosition, {
            toValue: 0,
            duration: duration ?? 500,
            easing: easing ?? react_native_1.Easing.quad,
            useNativeDriver: true,
        }).start();
    }, [duration, easing, yPosition]);
    return {
        transform: [
            {
                translateY: yPosition,
            },
        ],
    };
};
exports.useSlideUpAnimation = useSlideUpAnimation;
//# sourceMappingURL=use-slide-up-animation.js.map