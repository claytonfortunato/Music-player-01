import * as C from "./styles";
import AcordaDevinho from "../../assets/AcordaDevinho.png";

const BigPlayer = () => {
  return (
    <C.Container>
      <C.Info>
        <img src={AcordaDevinho} />
        <C.Title>
          <h1>Acorda Devinho</h1>
          <h2>Banda Rocketseat</h2>
        </C.Title>
      </C.Info>
    </C.Container>
  );
};

export default BigPlayer;
