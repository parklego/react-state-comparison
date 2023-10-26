import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    name: "박레고",
    age: 31,
  },
});
