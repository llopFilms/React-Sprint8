import { useParams } from "react-router-dom";
import Detalls from "../../components/Detalls/Detalls.jsx";
import { Contenidor } from "../common/ContenidorPageStyled";
import { useEffect } from "react";
import { publish } from "../../lib/utils/cutomEvents";

const Starship = () => {
  const { starshipId } = useParams();
  useEffect(() => publish("none"), []);

  return (
    <Contenidor>
      <Detalls starshipId={starshipId} />
    </Contenidor>
  );
};

export default Starship;
