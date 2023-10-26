import { selector } from "recoil";
import { userState } from "../atom/user";

export const userStateSelector = selector({
  key: "userNameLength",
  get: ({ get }) => {
    const user = get(userState);

    return user.name.length;
  },
});
