export namespace UserSlice {
  // ......................................................
  // User data ............................................
  // ......................................................

  export type State = {
    userData: null;
  };

  export type Action = Record<string, never>;

  export type Store = State & Action;
}
