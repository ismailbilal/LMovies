import React, { useEffect, useState } from 'react'
import { getTrending, IMGPATH } from '../API';
import { Main, Movie } from './styles/trendingStyled'

function Trending() {
    const [list, setList] = useState([]);
    const [tslt, setTslt] = useState(0);

    const fetchData = async () => {
        const movies = await getTrending();
        setList(movies)
        console.log(movies);
    }

    const switchMovie = () => {
        setTslt(prev => prev < 4 ? prev + 1 : 0);
        setTimeout(() => {
            switchMovie();
        }, 3000);
    }

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            switchMovie();
        }, 5000);
    }, [])

    return (
        <Main>
            {
                list.map((movie, key) => {
                    return <Movie
                        key={key}
                        style={{
                            background: `url(${IMGPATH + movie.backdrop_path})`,
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            left: `${key * 100}%`,
                            transform: `translateX(${tslt * -100}%)`
                        }}
                    ></Movie>
                })
            }
        </Main>
    )
}

export default Trending
