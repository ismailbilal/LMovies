import React, { useEffect, useState } from 'react'
import { getItem, getTrending } from '../API';
import { Dots, Dot, Main, Info } from './styles/trendingStyled'
import TrendingMovie from './trendingMovie';

function Trending() {
    const [list, setList] = useState([]);
    const [InfoList, setInfoList] = useState([]);
    const [genres, setGenres] = useState([]);

    const dots = [];

    for (let i = 0; i < 9; i++) {
        dots.push(<Dot key={i} className='dot' />);
    }

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getTrending();
            for (let i = 0; i < 9; i++) {
                const movieInfo = await getItem(movies[i].media_type, movies[i].id);
                setInfoList(prev => [...prev, movieInfo]);
                setGenres(prev => [...prev, movieInfo.genres]);
                console.log(movieInfo);
            }
            setList(movies);
        }

        fetchData();
    }, [])

    return (
        <Main>
            {
                list.slice(0, 9).map((movie, key) => {
                    return <TrendingMovie key={key} movie={movie} index={key} />
                })
            }
            {
                InfoList.map((movie, index) => {
                    return <Info key={index} className='info' >
                        <h2>{movie.original_title || movie.title}</h2>
                        <span>
                            <em><div></div> {movie.vote_average}</em>
                            <em>{movie.runtime} min</em>
                            <em>
                                {
                                    genres.map((genre, index) => {
                                        return <em key={index}>{genre.name}</em>
                                    })
                                }
                            </em>
                        </span>
                        <p>{movie.overview}</p>
                    </Info>
                })
            }
            <Dots>{dots}</Dots>
        </Main>
    )
}

export default Trending
