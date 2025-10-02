import { ReactNode, Suspense } from "react";

interface Props {
  children: ReactNode;
  loader?: ReactNode;
}

export const SuspenseWrapper = ({ children, loader = "Loading..." }: Props) => (
  <Suspense fallback={loader}>{children}</Suspense>
);
