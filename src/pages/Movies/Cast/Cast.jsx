import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovieCredits } from "api/api";
import CastCard from "components/CastCard/CastCard";

export default function Cast() {

    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async() => {
            setError(null);
            try {
                const { cast } = await getMovieCredits(movieId);
                setCast(cast);
            } 
            catch (error) {
                setError(error);
            }
        }
        fetchMovie();
    }, [movieId]);
    

  return (
    <div>
        {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
        {cast && <CastCard items={cast}/>}
    </div>
  )
}
