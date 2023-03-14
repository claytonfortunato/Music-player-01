import banner from "../../assets/AcordaDevinho.png";
import { PlayPause } from "../PlayPause";

import * as C from "./styles";

const Player = () => {
  return (
    <C.Container>
      <C.Info>
        <img src={banner} />

        <C.Title>
          <h1>Acorda Devinho</h1>
          <h2>Banda Rocketseat</h2>
        </C.Title>
      </C.Info>
      <C.Pause>
        <PlayPause />
      </C.Pause>
    </C.Container>
  );
};

export default Player;
