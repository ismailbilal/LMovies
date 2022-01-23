import React, { useEffect, useState } from 'react'
import { getTrending } from '../API';
import { Dots, Dot, Main } from './styles/trendingStyled'
import TrendingMovie from './trendingMovie';

function Trending() {
    const [list, setList] = useState([]);
    const dots = [];
    for (let i = 0; i < 9; i++) {
        dots.push(<Dot key={i} className='dot' />);
    }

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getTrending();
            setList(movies)
            console.log(movies);
        }

        fetchData();
    }, [])

    return (
        <Main>
            {
                list.map((movie, key) => {
                    return <TrendingMovie key={key} movie={movie} index={key} />
                })
            }
            <Dots>{dots}</Dots>
        </Main>
    )
}

export default Trending
