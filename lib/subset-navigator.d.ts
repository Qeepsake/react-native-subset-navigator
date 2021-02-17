import * as React from 'react';
export declare type Pages = Record<string, React.ComponentType<ScreenProps>>;
interface ScreenProps {
    navigator: React.Component;
}
declare class SubsetNavigator {
    static createSubsetNavigator(nameOfFirstPage: string, pages: Pages): any;
}
export default SubsetNavigator;
export declare const createSubsetNavigator: typeof SubsetNavigator.createSubsetNavigator;
