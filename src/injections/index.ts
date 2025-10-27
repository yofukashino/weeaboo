import { PluginInjector, PluginLogger } from "@this";

const InjectionNames = ["console.ts"] as const;

export const applyInjections = async (): Promise<void> => {
  try {
    await Promise.all(InjectionNames.map((name) => import(`./${name}`)));
  } catch (err: unknown) {
    PluginLogger.error(err);
  }
};

export const removeInjections = (): void => {
  PluginInjector.uninjectAll();
};

export default { applyInjections, removeInjections };
