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
    if (title) {
        const URL = `${API.BASE}/search/${type}?query=${title}&api_key=${API.KEY}`;
        const data = await getData(URL);
        return data.results;
    }
}


export const IMGPATH = 'https://image.tmdb.org/t/p/w500/';
export default searchFor;