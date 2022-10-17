import { getTrending } from "api/api"
import { useState, useEffect } from "react"

import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async() => {
            setLoading(true);
            setError(null);
            try {
                const { results } = await getTrending();
                setMovies(results);
            } 
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    return (
        <main>
            {loading && <Loader />}
            {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
            <h1>Trending today</h1>
            <MoviesList items={movies}/>
        </main>
    )
}