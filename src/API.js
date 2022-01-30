import { KEY } from "./API_KEY";

const API = {
    KEY: KEY,
    BASE: 'https://api.themoviedb.org/3'
}

// fetch data
const getData = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// search for movie or tv show
const searchFor = async (title, type) => {
    try {
        const URL = `${API.BASE}/search/${type}?query=${title}&api_key=${API.KEY}`;
        const data = await getData(URL);
        return data.results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

// get movie or tv or person information
const getItem = async (type, id) => {
    try {
        const URL = `${API.BASE}/${type}/${id}?api_key=${API.KEY}&append_to_response=videos`;
        const data = await getData(URL);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getTrending = async (type = 'movie', time = 'week', page = 1) => {
    try {
        const URL = `${API.BASE}/trending/${type}/${time}?api_key=${API.KEY}&page=${page}`;
        const data = await getData(URL);
        return data.results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getDiscover = async (type = 'movie', page = 1) => {
    try {
        const URL = `${API.BASE}/discover/${type}?api_key=${API.KEY}&sort_by=popularity.desc&page=${page}`
        const data = await getData(URL);
        return data.results
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
}

export const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
export const IMGPATHlow = 'https://image.tmdb.org/t/p/w300/';
export { searchFor, getItem, getTrending, getDiscover };
export { getData }; // hadi ghan7iyadha mn ba3d