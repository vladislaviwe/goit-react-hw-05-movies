import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import Loader from "components/Loader/Loader";
import MovieCard from "components/MovieCard/MovieCard";

import { getMovieDetails } from "api/api";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    
    useEffect(() => {
        const fetchMovie = async() => {
            setLoading(true);
            setError(null);
            try {
                const result = await getMovieDetails(movieId);
                setMovie(result);
            } 
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [movieId]);

    console.log(movie);

    return (
        <div>
            {loading && <Loader />}
            {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
            {movie && <MovieCard item={movie}/>}
        </div>
    )
}
