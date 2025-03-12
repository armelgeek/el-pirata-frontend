import type { SessionSlice } from "./slices/session/type";
import { useSessionStore } from "./store";
/**
 * Retrieves the current token from the session store.
 * This is useful when we need to access the token outside of a component's context,
 * such as in utility functions, API requests, or other non-React logic.
 */
export function getToken() {
  return useSessionStore.getState().token;
}

/**
 * Updates the token in the session store.
 * This can be used to set a new token (e.g., after user login or token refresh).
 * The new token is also logged for debugging purposes.
 *
 * @param token - The new token value to be set in the session store.
 */
export function setToken(token: SessionSlice.State["token"]) {
  console.log("new token : ", JSON.stringify(token, null, 3));
  return useSessionStore.setState({ token });
}

export async function logout() {
  const storeState = useSessionStore.getState();
  storeState.stopSession();
}
