export namespace SharedSlice {
  export type State = {
    _hasHydrated: boolean;
  };

  export type Action = {
    setHasHydrated(state: boolean): void;
    createUserSession(data: {
      accessToken: string;
      refreshToken: string;
      // The registration process requires that you don't login immediately
      // By login, I talk about redirecting in home screen.
      isImmediateConnection: boolean;
      /**data: Pick<
        UserSlice.LocalUserData,
        | 'id'
      >;**/
    }): void;
  };

  export type Store = State & Action;
}
