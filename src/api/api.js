import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '35f52823224968ebaf30f4a5ee6d071a',
    }
})

export const getTrending = async(page) => {
    const { data } = await instance.get("/trending/movie/day");
    return data;
}

export const getSearchMovies = async(query) => {
    const { data } = await instance.get("/search/movie", {
        params: {
            query,
        }
    })
    return data;
}

export const getMovieDetails = async(id) => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
}

export const getMovieCredits = async(id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data;
}

export const getMovieReviews = async(id) => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
}
