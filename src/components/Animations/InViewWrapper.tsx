import type { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type AnimationProps = {
  delay: number;
  threshHold: number;
  addClassName: string;
  children: ReactNode | ReactNode[];
};

export const InViewWrapper = ({
  delay,
  threshHold,
  addClassName,
  children,
}: AnimationProps) => {
  const { ref: animaRef, inView } = useInView({
    threshold: threshHold,
    triggerOnce: true,
  });
  return (
    <div
      ref={animaRef}
      className={`opacity-0 ${inView ? `${addClassName}` : ""}`}
      style={{ "--delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
