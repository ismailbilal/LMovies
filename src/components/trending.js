import React, { useEffect, useState } from 'react'
import { getItem, getTrending } from '../API';
import { Dots, Dot, Main, Info } from './styles/trendingStyled'
import TrendingMovie from './trendingMovie';

function Trending() {
    const [list, setList] = useState([]);
    const [InfoList, setInfoList] = useState([]);

    const dots = [];

    for (let i = 0; i < 9; i++) {
        dots.push(<Dot key={i} className='dot' />);
    }

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getTrending();
            if (movies.length > 0) {
                for (let i = 0; i < 9; i++) {
                    const movieInfo = await getItem(movies[i].media_type, movies[i].id);
                    setInfoList(prev => [...prev, movieInfo]);
                }
                setList(movies);
            }
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
                            <em className='vote'><div></div> {movie.vote_average}</em>
                            <em>{movie.runtime} min</em>
                            <p>
                                {
                                    movie.genres.slice(0, 2).map((genre, index2) => {
                                        return <em key={index2}><i className="fas fa-circle"></i>{genre.name.split(" ")[0]}</em>
                                    })
                                }
                            </p>
                        </span>
                        <p className='text' >{movie.overview}</p>
                    </Info>
                })
            }
            <Dots>{dots}</Dots>
        </Main>
    )
}

export default Trending
