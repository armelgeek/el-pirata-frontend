export namespace SessionSlice {
  type TokenData = { accessToken: string; refreshToken: string };

  export type State = {
    isConnected: boolean;
    token: TokenData | null;
  };

  export type Action = {
    stopSession(): void;
    connect(): void;
    updateToken(token: TokenData): void;
    start(accessToken: string, refreshToken: string): void;
    saveTokens(accessToken: string, refreshToken: string): void;
  };

  export type Store = State & Action;
}
