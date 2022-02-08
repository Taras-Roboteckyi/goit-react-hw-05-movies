import PropTypes from "prop-types";

import { ListItemStyle, LinkStyle } from "./SearchListItem.styled";

const SearchListItem = ({ data }) => {
  const { id, original_title, name } = data;

  //console.log(data);
  return (
    <ListItemStyle key={id}>
      <LinkStyle to={`/movies/${id}`}>{original_title || name}</LinkStyle>
    </ListItemStyle>
  );
};

export default SearchListItem;

SearchListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string,
    name: PropTypes.string,
  }),
};
