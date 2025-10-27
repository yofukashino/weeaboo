import { util } from "replugged";
import { Notice, Select, Stack, Switch } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";

export const registerSettings = (): void => {
  type DefaultSettings = typeof DefaultSettings;
  type key = keyof DefaultSettings;
  type value = DefaultSettings[key];

  for (const key in DefaultSettings) {
    if (SettingValues.has(key as key)) return;
    PluginLogger.log(`Adding new setting ${key} with value ${DefaultSettings[key]}.`);
    SettingValues.set(key as key, DefaultSettings[key] as value);
  }
};

export const Settings = (): React.ReactElement => {
  return (
    <Stack gap={24}>
      <Select
        label="UwU or OwO"
        description="Togglie between soft ‘n snuggwy UwU mode or chaotwic mischievous OwO mode~!! >w< 💞 Pick youw fav fwuffy vibe — awe you a shy bunbun (UwU) or a siwwy gwegowious gobwin (OwO)? nya~ 🌸🐾"
        options={[
          { label: "owo", value: "owo" },
          { label: "uwu", value: "uwu" },
        ]}
        {...util.useSetting(SettingValues, "type", DefaultSettings.type)}
      />
      <Switch
        label={"🐾 C-consoWe Wogs UwUify~? (⁄⁄>////<⁄⁄)"}
        description="Do you want youw consoWe wogs to be aww cute ‘n fwuffy too~? >w< 💻✨ Tuwrn those sewious debuggies into adowabwe giggwies~!! (っ˘ω˘ς) 💖 nya~"
        {...util.useSetting(SettingValues, "type", DefaultSettings.console)}
      />
      <Notice messageType={Notice.HelpMessageTypes.WARNING}>
        {
          "It is wecommended to westawt fow each setting to take effect, nya~ 💖✨ OwO even when tuwning on the pwugin~ >w< 🐾"
        }
      </Notice>
    </Stack>
  );
};

export default { registerSettings, Settings };
