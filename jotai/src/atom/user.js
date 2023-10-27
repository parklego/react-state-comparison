import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

// export const userAtom = atom({
//   name: "",
//   age: "",
// });

export const userInitialAtom = atomWithReset({
  name: "박레고",
  age: "31",
});
