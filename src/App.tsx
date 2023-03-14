import BigPlayer from "./components/BigPlayer";
import { LongPlayer } from "./components/LongPlayer";

const App = () => {
  return (
    <C.Container>
      <LongPlayer />
      <div>
        <BigPlayer />
      </div>
    </C.Container>
  );
};

export default App;
