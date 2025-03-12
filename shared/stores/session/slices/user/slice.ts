import type { Slice } from "../../type";
import type { UserSlice } from "./type";

export const createUserSlice: Slice<UserSlice.Store> = (set, get) => ({
  userData: null,
  updateUserData(userDataSelector) {
    set((store) => {
      if (store.userData === null) {
        return store;
      }

      return {
        ...store,
        userData: { ...store.userData, ...userDataSelector(store.userData) },
      };
    });
  },
});
