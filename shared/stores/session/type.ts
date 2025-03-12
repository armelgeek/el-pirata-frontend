import type { StateCreator } from "zustand";
import type { UserSlice } from "./slices/user/type";
import type { SessionSlice } from "./slices/session/type";
import type { SharedSlice } from "./slices/shared/type";

export type SessionStore = SessionSlice.Store &
  UserSlice.Store &
  SharedSlice.Store;

export type Slice<T> = StateCreator<SessionStore, [], [], T>;
