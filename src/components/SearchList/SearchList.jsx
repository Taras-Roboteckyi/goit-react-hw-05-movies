import SearchListItem from "./SearchListItem";

const SearchList = ({ data, location }) => {
  //console.log(data);
  return (
    <ul>
      {data.map(({ id, original_title, name }) => (
        <SearchListItem
          key={id}
          data={{ id, original_title, name }}
          location={location}
        />
      ))}
    </ul>
  );
};

export default SearchList;
