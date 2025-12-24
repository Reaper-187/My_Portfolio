import "./Overlay.sass";
import { Button } from "../ui/button";

type OverlayImgProps = {
  imgUrl: string | undefined;
  onCloseImg: () => void;
};

export const OverlayComp = ({ imgUrl, onCloseImg }: OverlayImgProps) => {
  return (
    <div className={`overlay-container`}>
      <Button
        className="close-btn text-xs md:text-md lg:text-base"
        onClick={onCloseImg}
      >
        Close Image
      </Button>
      <div className="overlay-wrapper">
        <img src={imgUrl} alt={imgUrl} />
      </div>
    </div>
  );
};
