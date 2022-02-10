import PropTypes from "prop-types";

import { Сharacter } from "./CastListItem.styled";
import img from "../../images/no-poster1.png";

const CastListItem = ({ dataActor }) => {
  const { character, original_name, profile_path } = dataActor;

  const isPosterPath = (poster) => {
    if (poster !== null) {
      return `http://image.tmdb.org/t/p/original${poster}`;
    }
    return `${img}`;
  };

  /* console.log(data); */
  return (
    <li>
      <img src={isPosterPath(profile_path)} alt="" width="200" />
      <p>{original_name}</p>
      <Сharacter>Сharacter: {character}</Сharacter>
    </li>
  );
};

export default CastListItem;

CastListItem.propTypes = {
  dataActor: PropTypes.shape({
    character: PropTypes.string.isRequired,
    original_name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};
