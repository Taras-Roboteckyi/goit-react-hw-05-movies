import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchForm from "../../components/Form/Form";
import { searchFetchMovie } from "../../services/themoviedbApi";
import SearchList from "../../components/SearchList/SearchList";
/////
export const MoviesPage = () => {
  const [movie, setMovie] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query");
  // console.log(movieName);

  useEffect(() => {
    async function searchFetch() {
      try {
        if (query) {
          const item = await searchFetchMovie(query);
          //console.log("Запит:", item);
          setMovie(item.results);
          if (item.results.length === 0) {
            toast.error("No video for your request");
          }
        }
      } catch (error) {
        toast.error("No video for your request");
      }
    }
    searchFetch();
  }, [query]);

  const formSubmitHandler = (data) => {
    const { name } = data;
    //setMovieName(name);
    setSearchParams({ query: name });
  };

  return (
    <main>
      <SearchForm formSubmit={formSubmitHandler}></SearchForm>
      {movie && <SearchList data={movie} location={location} />}
    </main>
  );
};
