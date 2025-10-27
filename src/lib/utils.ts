import { OwO, UwU } from "@this";

const propNames = ["userName", "name"];

const uwuify = (
  node: string | string[] | unknown,
  props?: Record<string, unknown>,
): string | string[] | unknown => {
  if (typeof node === "string") return UwU.uwuifySentence(node);
  if (Array.isArray(node)) return node.map((c) => uwuify(c));

  if (typeof props === "object" && props !== null)
    for (const key in props) {
      if (!propNames.includes(key) || typeof props[key] !== "string") continue;
      props[key] = uwuify(props[key]);
    }
  return node;
};

const owoify = (
  node: string | string[] | unknown,
  props?: Record<string, unknown>,
): string | string[] | unknown => {
  if (typeof node === "string") return OwO(node);
  if (Array.isArray(node)) return node.map((c) => owoify(c));

  if (typeof props === "object" && props !== null)
    for (const key in props) {
      if (!propNames.includes(key) || typeof props[key] !== "string") continue;
      props[key] = owoify(props[key]);
    }
  return node;
};

export default { uwuify, owoify };
