import { getSearchMovies } from "api/api"
import { useEffect, useState } from "react"

import Loader from "components/Loader/Loader";
import SearchBar from "components/SearchBar/SearchBar";
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [searchName, setSearchName] = useState("");
    const [movies, setMovies] = useState([]);
    const [isItems, setIsItems] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async() => {
            setLoading(true);
            setError(null);
            setIsItems(true);
            try {
                const { results } = await getSearchMovies(searchName);
                if (!results.length && searchName) {
                  setIsItems(false)
                  setMovies([]);
                  return;
                }
                setMovies(results);
            } 
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        if (searchName) {
          fetchMovies();
        }
    }, [searchName]);

    const onSearch = (searchName) => {
      setSearchName(searchName);
    }

    const isMovies = Boolean(movies.length);

    return (
        <main>
            <SearchBar onSearch={onSearch}/>
            {loading && <Loader />}
            {error && <b>Oops, something went wrong. Please try to reload the page</b>}
            {isMovies && <MoviesList items={movies}/>}
            {!isMovies && !isItems && <b>There are no movies matching your search query "{searchName}"</b>}
        </main>
    )
}
