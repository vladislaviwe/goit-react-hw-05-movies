import { getTrending } from "api/api"
import { useState, useEffect } from "react"

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
                console.log(results);
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
        <div>Movies</div>
    )
}