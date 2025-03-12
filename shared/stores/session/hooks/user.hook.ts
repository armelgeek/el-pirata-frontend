import { InternalError } from "@shared/services/error";
import { useSessionStore } from "../store";
import type { SessionStore } from "../type";
// -------------------------------------------------------------------------
//                        SELECTORS
// -------------------------------------------------------------------------

const userIdSelector = (state: SessionStore) => state.userData?.id;
const userDataSelector = (state: SessionStore) => state.userData;

// -------------------------------------------------------------------------
//                        HOOKS
// -------------------------------------------------------------------------

export function useUserSessionId() {
  const userId = useSessionStore(userIdSelector);
  if (!userId) {
    throw new InternalError({
      message: "Should have an Id",
    });
  }

  return userId;
}

/**
 * To access to user session data
 *
 */
export function useUserSessionData() {
  const userData = useSessionStore(userDataSelector);
  if (userData === null) {
    throw new InternalError({
      message: "Should have a session",
    });
  }

  return userData;
}
