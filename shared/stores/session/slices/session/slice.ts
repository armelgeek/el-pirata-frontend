import type { Slice } from "../../type";
import type { SessionSlice } from "./type";

export const createSessionSlice: Slice<SessionSlice.Store> = (set, get) => ({
  token: null,
  isConnected: false,
  start(accessToken, refreshToken) {
    set({ isConnected: true, token: { accessToken, refreshToken } });
  },
  saveTokens(accessToken, refreshToken) {
    set({ isConnected: false, token: { accessToken, refreshToken } });
  },
  connect() {
    const token = get().token?.accessToken;
    if (!token) {
      return;
    }
    set({ isConnected: true });
  },
  stopSession() {
    set({
      isConnected: false,
      token: null,
      userData: null,
    });
  },
  updateToken(token) {
    set({ token });
  },
});
