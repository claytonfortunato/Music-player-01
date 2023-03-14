import BigPlayer from "./components/BigPlayer";
import { LongPlayer } from "./components/LongPlayer";
import Player from "./components/Player";

import * as C from "./styles";

const App = () => {
  return (
    <C.Container>
      <LongPlayer />
      <C.SmallPlay>
        <BigPlayer />
        <Player />
      </C.SmallPlay>
    </C.Container>
  );
};

export default App;
