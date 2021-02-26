"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubsetNavigator = exports.Navigator = void 0;
const React = __importStar(require("react"));
class Navigator extends React.Component {
    constructor(props) {
        super(props);
        const { pages, nameOfFirstPage, passProps } = props;
        // Initialising the screens to use this component as its navigator
        let newScreens = {};
        const screenNames = Object.keys(pages);
        for (let i = 0; i < screenNames.length; i++) {
            let screenName = screenNames[i];
            let Screen = pages[screenName];
            newScreens[screenName] = <Screen navigator={this} {...passProps}/>;
        }
        // Component state
        this.state = {
            screens: newScreens,
            currentScreen: newScreens[nameOfFirstPage],
            screenStack: [nameOfFirstPage],
            stackSize: 1,
        };
        this.pop = this.pop.bind(this);
        this.push = this.push.bind(this);
    }
    pop() {
        this.setState((state) => {
            let newStackSize = state.stackSize - 1;
            let newScreenName = state.screenStack[newStackSize - 1]; // Index
            let newScreenStack = state.screenStack;
            if (state.stackSize > 1) {
                newScreenStack.pop();
                return {
                    ...state,
                    currentScreen: state.screens[newScreenName],
                    screenStack: newScreenStack,
                    stackSize: newStackSize,
                };
            }
            else {
                console.log('No more screens to pop!');
            }
        });
    }
    push(screenName) {
        this.setState((state) => {
            let newScreenStack = state.screenStack;
            newScreenStack.push(screenName);
            return {
                currentScreen: state.screens[screenName],
                screenStack: newScreenStack,
                stackSize: state.stackSize + 1,
            };
        });
    }
    render() {
        let Screen = this.state.currentScreen;
        return <>{Screen}</>;
    }
}
exports.Navigator = Navigator;
class SubsetNavigator {
    static createSubsetNavigator(nameOfFirstPage, pages, passProps) {
        return (<Navigator nameOfFirstPage={nameOfFirstPage} pages={pages} passProps={passProps}/>);
    }
}
exports.default = SubsetNavigator;
exports.createSubsetNavigator = SubsetNavigator.createSubsetNavigator;
//# sourceMappingURL=subset-navigator.js.map