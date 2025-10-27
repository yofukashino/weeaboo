import Types from "@types";

const replacements = [
  {
    match: /return{\$\$typeof:\i,type:(\i).+?props:(\i)/,
    replace: (suffix: string, type: string, props: string) =>
      `${props}.children = ($exports?._questionMySanity?.(${props}.children, ${props}) ?? ${props}.children);${suffix}`,
  },
];

export default [
  {
    find: `React.Children.only`,
    replacements,
  },
  {
    find: `.jsxs=`,
    replacements,
  },
] as Types.DefaultTypes.PlaintextPatch[];
