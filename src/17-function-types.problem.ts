import { Equal, Expect } from "./helpers/type-utils";

/**
 * How do we type onFocusChange?
 */

type callbackType = (isFocused: boolean) => void;

type MyType = Array<Record<string, string>>;

const addListener = (onFocusChange: callbackType) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener(isFocused => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
