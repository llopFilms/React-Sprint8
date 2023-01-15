import { Contenidor } from "../common/ContenidorPageStyled";
import Llista from "../../components/Llista/Llista";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const StarShips = () => {
  useEffect(() => publish("starShipsClick"), []);
  
  return (
    <Contenidor>
      <Llista />
    </Contenidor>
  );
};
export default StarShips;
