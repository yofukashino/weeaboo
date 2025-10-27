import { PluginInjector, SettingValues } from "@this";
import Utils from "@Utils";

const LogTypes = ["log", "warn", "debug", "info", "error"] as const;

if (SettingValues.get("console"))
  for (const type of LogTypes)
    PluginInjector.before(console, type, (args) =>
      args.map((c) => {
        if (c?.startsWith?.("%c") || c?.startsWith?.("color:")) return c;
        if (SettingValues.get("type") === "uwu") return Utils.uwuify(c);
        if (SettingValues.get("type") === "owo") return Utils.owoify(c);
        return c;
      }),
    );
