import SearchListItem from "./SearchListItem";

const SearchList = ({ data }) => {
  //console.log(data);
  return (
    <ul>
      {data.map(({ id, original_title, name }) => (
        <SearchListItem key={id} data={{ id, original_title, name }} />
      ))}
    </ul>
  );
};

export default SearchList;
