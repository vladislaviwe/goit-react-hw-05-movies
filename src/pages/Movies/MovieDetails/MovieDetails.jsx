import { useState, useEffect } from "react"
import { useParams, useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";

import Loader from "components/Loader/Loader";
import MovieCard from "components/MovieCard/MovieCard";

import { getMovieDetails } from "api/api";

import { NavItem, NavMenu } from "components/Navbar/NavbarStyled";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";
    
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

    const goBack = () => navigate(from);

    return (
        <>
            <div>
                {movie && <button onClick={goBack}>Go back</button>}
                {loading && <Loader />}
                {error && <h2>Oops, something went wrong. Please try to reload the page</h2>}
                {movie && <MovieCard item={movie}/>}
            </div>
            {movie && <div>
                <NavMenu>
                    <NavItem>
                        <NavLink state={{from}} to={'cast'}>Cast</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink state={{from}} to={'reviews'}>Reviews</NavLink>
                    </NavItem>
                </NavMenu>
            </div>}
            <Outlet />
        </>
    )
}
