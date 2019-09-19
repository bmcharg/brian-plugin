import { WebPlugin } from '@capacitor/core';
import { BrianPluginPlugin } from './definitions';

export class BrianPluginWeb extends WebPlugin implements BrianPluginPlugin {
  constructor() {
    super({
      name: 'BrianPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const BrianPlugin = new BrianPluginWeb();

export { BrianPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BrianPlugin);
