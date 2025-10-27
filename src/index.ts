import Uwuifier from "uwuifier";
import { Injector, Logger, settings } from "replugged";
import { DefaultSettings } from "@consts";
import Settings from "@components/Settings";
import Injections from "@Injections";

export const PluginLogger = Logger.plugin("Weeaboo", "#ffffff80");
export const PluginInjector = new Injector();
export const SettingValues = settings.init("dev.yofukashino.weeaboo", DefaultSettings);

export const UwU = new Uwuifier({
  spaces: {
    faces: 0.45,
    actions: 0,
    stutters: 0.55,
  },
  words: 1,
  exclamations: 1,
});

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  Injections.removeInjections();
};

export { Settings } from "@components/Settings";

export { _questionMySanity } from "./plaintextFunctions";

export { default as OwO } from "owoify-js";
