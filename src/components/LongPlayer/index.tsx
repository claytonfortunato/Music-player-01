import * as C from "./styles";

import AcordaDevinho from "../../assets/AcordaDevinho.png";
import { PlayPause } from "../PlayPause";
import Rail from "../../assets/long-rail.svg";

export const LongPlayer = () => {
  return (
    <C.Container>
      <img src={AcordaDevinho} />

      <C.Title>
        <h1>Acorda Devinho</h1>
        <h2>Banda Rocketseat</h2>
      </C.Title>

      <C.Pause>
        <PlayPause />
      </C.Pause>
      <C.Progress>
        <img src={Rail} />
        <C.Time>
          <h1 className="start">3:33</h1>
          <h1 className="end">0:12</h1>
        </C.Time>
      </C.Progress>
    </C.Container>
  );
};
