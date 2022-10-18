import { getSearchMovies } from "api/api"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";

import Loader from "components/Loader/Loader";
import SearchBar from "components/SearchBar/SearchBar";
import MoviesList from "components/MoviesList/MoviesList";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isItems, setIsItems] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");

    useEffect(() => {
        const fetchMovies = async() => {
            setLoading(true);
            setError(null);
            setIsItems(true);
            try {
                const { results } = await getSearchMovies(searchQuery);
                if (!results.length && searchQuery) {
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
        if (searchQuery) {
          fetchMovies();
        }
    }, [searchQuery]);

    const onSearch = (searchName) => {
        setSearchParams({query: searchName});
    }

    const isMovies = Boolean(movies.length);

    return (
        <main>
            <SearchBar onSearch={onSearch}/>
            {loading && <Loader />}
            {error && <b>Oops, something went wrong. Please try to reload the page</b>}
            {isMovies && <MoviesList items={movies}/>}
            {!isMovies && !isItems && <b>There are no movies matching your search query "{searchQuery}"</b>}
        </main>
    )
}
