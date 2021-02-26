import * as React from 'react';
export declare type Pages = Record<string, React.ComponentType<ScreenProps>>;
declare type Screens = Record<string, React.ReactElement<ScreenProps>>;
interface IState {
    screens: Screens;
    currentScreen: React.ReactElement<ScreenProps>;
    screenStack: string[];
    stackSize: number;
}
interface IProps {
    nameOfFirstPage: string;
    pages: Pages;
}
interface ScreenProps {
    navigator: Navigator;
}
export declare class Navigator extends React.Component<IProps, IState> {
    constructor(props: IProps);
    pop(): void;
    push(screenName: string): void;
    render(): JSX.Element;
}
declare class SubsetNavigator {
    static createSubsetNavigator(nameOfFirstPage: string, pages: Pages): React.ReactElement<Navigator>;
}
export default SubsetNavigator;
export declare const createSubsetNavigator: typeof SubsetNavigator.createSubsetNavigator;
