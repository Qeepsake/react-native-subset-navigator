"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFadeInAnimation = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
/**
 * Returns the opacity to create a fade-in animation.
 * @param finalOpacity The final opacity of your view. Defaults to 1 for a fully opaque view.
 */
const useFadeInAnimation = (finalOpacity, duration, easing) => {
    const [currOpacity] = react_1.useState(new react_native_1.Animated.Value(0));
    react_1.useEffect(() => {
        react_native_1.Animated.timing(currOpacity, {
            toValue: finalOpacity ?? 1,
            duration: duration ?? 500,
            easing: easing ?? react_native_1.Easing.quad,
            useNativeDriver: true,
        }).start();
    }, [finalOpacity, currOpacity, duration, easing]);
    return {
        opacity: currOpacity,
    };
};
exports.useFadeInAnimation = useFadeInAnimation;
//# sourceMappingURL=use-fade-in-animation.js.map