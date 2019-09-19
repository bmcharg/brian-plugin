import { WebPlugin } from '@capacitor/core';
import { BrianPluginPlugin } from './definitions';
export declare class BrianPluginWeb extends WebPlugin implements BrianPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const BrianPlugin: BrianPluginWeb;
export { BrianPlugin };
