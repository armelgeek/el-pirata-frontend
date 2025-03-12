import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SessionStore } from "./type";
import { createUserSlice } from "./slices/user/slice";
import { createSessionSlice } from "./slices/session/slice";
import { createSharedSlice } from "./slices/shared/slice";
import { wait } from "@shared/utils/request";

const SESSION_STORAGE_KEY = "@elpirata/session";

/**
 * Creates a Zustand store for managing the application's session state.
 * The store is composed of multiple slices, each handling a specific part of the state,
 * and uses persistence to save state to AsyncStorage.
 */
export const useSessionStore = create<SessionStore>()(
  persist(
    (...args) => ({
      ...createUserSlice(...args), // Adds user-related state management
      ...createSessionSlice(...args), // Adds session-related state (e.g., token, session lifecycle)
      ...createSharedSlice(...args), // Adds shared state management
    }),
    {
      name: SESSION_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        return () => {
          wait(3000).then(() => {
            state.setHasHydrated(true);
          });
        };
      },
    }
  )
);
