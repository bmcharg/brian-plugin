declare module "@capacitor/core" {
  interface PluginRegistry {
    BrianPlugin: BrianPluginPlugin;
  }
}

export interface BrianPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
