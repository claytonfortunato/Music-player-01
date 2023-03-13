import Play from "../../assets/Play.svg";
import PlayRewind from "../../assets/play-rewind.svg";
import PlayForward from "../../assets/play-forward.svg";

import * as C from "./styles";

export const PlayPause = () => {
  return (
    <C.Container>
      <img src={PlayRewind} />
      <img src={Play} />
      <img src={PlayForward} />
    </C.Container>
  );
};
