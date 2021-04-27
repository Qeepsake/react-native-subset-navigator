import * as React from 'react';
export declare type Pages = Record<string, React.ComponentType<ScreenProps>>;
interface IState {
    pages: Pages;
    currentScreen: React.ReactElement<ScreenProps>;
    screenStack: React.ReactElement<ScreenProps>[];
    stackSize: number;
}
interface IProps {
    nameOfFirstPage: string;
    pages: Pages;
    passProps?: any;
}
interface ScreenProps {
    navigator: Navigator;
    passProps?: any;
}
export declare class Navigator extends React.Component<IProps, IState> {
    constructor(props: IProps);
    pop(): void;
    push(screenName: string, props?: any): void;
    render(): JSX.Element;
}
declare class SubsetNavigator {
    static createSubsetNavigator(nameOfFirstPage: string, pages: Pages, passProps?: any): React.ReactElement<Navigator>;
}
export default SubsetNavigator;
export declare const createSubsetNavigator: typeof SubsetNavigator.createSubsetNavigator;
