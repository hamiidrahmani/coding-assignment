import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
}
