import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SearchForm from "../../components/Form/Form";
import { searchFetchMovie } from "../../services/themoviedbApi";
import SearchList from "../../components/SearchList/SearchList";
/////
export const MoviesPage = () => {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("query");
  //console.log(searchMovie);

  useEffect(() => {
    async function searchFetch() {
      try {
        if (movieName) {
          const item = await searchFetchMovie(movieName);
          console.log("Запит:", item);
          setMovie(item.results);
        }
      } catch (error) {
        toast.error("No video for your request");
      }
    }
    searchFetch();
  }, [movieName]);

  const formSubmitHandler = (data) => {
    const { name } = data;
    setMovieName(name);
    setSearchParams({ query: name });
  };

  return (
    <main>
      <SearchForm formSubmit={formSubmitHandler}></SearchForm>
      {movie && <SearchList data={movie} />}
    </main>
  );
};
