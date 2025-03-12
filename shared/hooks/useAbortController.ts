import { useEffect, useMemo, useRef } from "react";

export function useAbortController(key = "unknown") {
  const _is_mounted = useRef<boolean>(false);
  const abortControllerRef = useRef<AbortController>(null);
  if (!abortControllerRef.current) {
    abortControllerRef.current = new AbortController();
  }

  useEffect(() => {
    _is_mounted.current = true;
    return () => {
      _is_mounted.current = false;
    };
  }, []);

  // Function to reset the controller (useful for starting fresh in new operations)
  const getController = (): AbortController => {
    if (!abortControllerRef.current) {
      // if not initialized
      console.log(`[>] Create first new ${key}`);
      abortControllerRef.current = new AbortController();
    }

    if (
      abortControllerRef.current &&
      abortControllerRef.current.signal.aborted
    ) {
      // if exist but is already aborted
      console.log(`[>] Abort controller & create new ${key}`);
      abortControllerRef.current.abort(); // Abort any ongoing request
      abortControllerRef.current = new AbortController();
    }

    return abortControllerRef.current;
  };

  return useMemo(
    () => ({
      get signal() {
        const controller = getController();
        return controller.signal;
      },
      abort() {
        if (_is_mounted.current) {
          return;
        }
        console.log(`[>] Request aborted ${key}`);
        if (!abortControllerRef.current?.signal.aborted) {
          abortControllerRef.current?.abort();
        }
      },
      get controller() {
        return getController();
      },
    }),
    []
  );
}
