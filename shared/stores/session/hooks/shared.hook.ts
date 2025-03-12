import { InternalError } from "@shared/services/error";
import { useSessionStore } from "../store";
import { SessionStore } from "../type";

// ...............................................................................
//                          TOKEN DATA
// ...............................................................................

const tokenSelector = (state: SessionStore) => state.token;
export function useSessionToken() {
  const token = useSessionStore(tokenSelector);
  if (token === null) {
    throw new InternalError({
      message: "Should have an token",
    });
  }

  return token;
}

// ...............................................................................
//                          HYDRATATION DATA
// ...............................................................................

const hydratationSelector = (state: SessionStore) => ({
  isReady: state._hasHydrated,
  isConnected: state.isConnected,
  isSwitchingAccount: state.isSwitchingAccount,
});
export function useSessionState() {
  return useSessionStore(hydratationSelector);
}

// ...............................................................................
//                          USER SESSION DATA
// ...............................................................................

const userSessionSelector = (state: SessionStore) => ({
  stop: state.stopSession,
  start: state.start,
  connect: state.connect,
  saveTokens: state.saveTokens,
  createUserSession: state.createUserSession,
});
export function useUserSession() {
  return useSessionStore(userSessionSelector);
}

// ...............................................................................
//                          PAGE SESSION DATA
// ...............................................................................

const pageSessionSelector = (state: SessionStore) => ({
  switchToProfileAccount: state.switchToProfileAccount,
});
export function usePageSession() {
  return useSessionStore(pageSessionSelector);
}

// ...............................................................................
//                          ....
// ...............................................................................

const accountSelector = (state: SessionStore) => {
  let accountId = null;
  if (state.currentAccountType === "page") {
    const pageData = state.pageData;
    accountId = pageData?.id;
  } else {
    const userData = state.userData;
    accountId = userData?.id;
  }

  return {
    currentAccountId: accountId,
    currentAccountType: state.currentAccountType,
    switchToPageAccount: state.switchToPageAccount,
    switchToProfileAccount: state.switchToProfileAccount,
  };
};

export function useSessionAccount() {
  return useSessionStore(accountSelector);
}
