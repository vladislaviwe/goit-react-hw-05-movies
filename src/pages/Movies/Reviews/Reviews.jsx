import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviews } from "api/api"
import ReviewCard from "components/ReviewCard/ReviewCard";

export default function Reviews() {
    const [review, setReview] = useState([]);
    const [error, setError] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async() => {
            setError(null);
            try {
                const { results } = await getMovieReviews(movieId);
                setReview(results);
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
        {review.length > 0 && <ReviewCard items={review}/>}
        {!review.length && <b>There are no reviews for this movie yet</b>}
    </div>
  )
}
