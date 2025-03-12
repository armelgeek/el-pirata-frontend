import type { Slice } from "../../type";
import type { SharedSlice } from "./type";

export const createSharedSlice: Slice<SharedSlice.Store> = (set, get) => ({
  // related to session
  createUserSession(payload) {
    if (payload.data === null) {
      return;
    }
    /**set({
      userData: {
        ...DEFAULT_USER,
        ...payload.data,
      },
    });**/
    if (payload.isImmediateConnection) {
      get().start(payload.accessToken, payload.refreshToken);
    } else {
      get().saveTokens(payload.accessToken, payload.refreshToken);
    }
  },
  // for hydratation
  _hasHydrated: false,
  setHasHydrated(state) {
    set({ _hasHydrated: state });
  },
});
