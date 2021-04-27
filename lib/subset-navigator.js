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
        const FirstScreenComponent = pages[nameOfFirstPage];
        const firstScreen = <FirstScreenComponent navigator={this} {...passProps}/>;
        // Component state
        this.state = {
            pages: pages,
            currentScreen: firstScreen,
            screenStack: [firstScreen],
            stackSize: 1,
        };
        this.pop = this.pop.bind(this);
        this.push = this.push.bind(this);
    }
    pop() {
        this.setState((state) => {
            let newStackSize = state.stackSize - 1;
            let newScreen = state.screenStack[newStackSize - 1]; // Index
            let newScreenStack = state.screenStack;
            if (state.stackSize > 1) {
                newScreenStack.pop();
                return {
                    ...state,
                    currentScreen: newScreen,
                    screenStack: newScreenStack,
                    stackSize: newStackSize,
                };
            }
            else {
                console.log('No more screens to pop!');
            }
        });
    }
    push(screenName, props) {
        this.setState((state) => {
            let newScreenStack = state.screenStack;
            let Screen = state.pages[screenName];
            newScreenStack.push(<Screen navigator={this} passProps={props}/>);
            return {
                currentScreen: newScreenStack[state.stackSize],
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