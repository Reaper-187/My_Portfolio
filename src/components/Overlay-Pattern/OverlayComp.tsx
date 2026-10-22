import { useEffect, useRef } from "react";
import "./Overlay.sass";

type OverlayImgProps = {
  imgUrl: string | undefined;
  onCloseImg: () => void;
};

export const OverlayComp = ({ imgUrl, onCloseImg }: OverlayImgProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();

    return () => {
      lastFocusedRef.current?.focus();
    };
  }, []);

  return (
    <div
      className="overlay-container"
      role="dialog"
      aria-modal="true"
      aria-label="Projektvorschau"
      onClick={onCloseImg}
    >
      <img
        className="overlay-image"
        src={imgUrl}
        alt="Vergrößerte Projektvorschau"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
