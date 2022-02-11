import PropTypes from "prop-types";

import { Сharacter, ListItem, Name, Image } from "./CastListItem.styled";
import img from "../../images/no-poster1.png";

const CastListItem = ({ dataActor }) => {
  const { character, original_name, profile_path } = dataActor;

  const isPosterPath = (poster) => {
    if (poster !== null) {
      return `http://image.tmdb.org/t/p/original${poster}`;
    }
    return `${img}`;
  };
  const isCharacter = () => {
    if (!character) {
      return "No information";
    }
    return character;
  };

  //console.log(character);
  return (
    <ListItem>
      <Image src={isPosterPath(profile_path)} alt="" />
      <Name>{original_name}</Name>
      <Сharacter>Сharacter: {isCharacter()}</Сharacter>
    </ListItem>
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
