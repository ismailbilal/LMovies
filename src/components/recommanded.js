import React, { useEffect, useState } from 'react'
import { List, Movie, RecHeader, RecommandedStyled, TypesStyled } from './styles/rcdStyled'
import { getDiscover, getTrending, IMGPATH } from '../API';
import ItemInfo from './itemInfo';

const Recommanded = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [type, setType] = useState('movie');
    const [isTrend, setIsTrend] = useState(false);
    const [page, setPage] = useState(2);

    const fetchMovies = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.movie').classList.remove('hoverEvent');
        document.querySelector('.movie').classList.add('selected');
        const list = await getDiscover('movie', 1);
        setMoviesList(list);
        setType('movie');
        setIsTrend(false);
        setPage(1);
    }

    const fetchTv = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.tv').classList.remove('hoverEvent');
        document.querySelector('.tv').classList.add('selected');
        const list = await getDiscover('tv', 1);
        setMoviesList(list);
        setType('tv');
        setIsTrend(false);
        setPage(1);
    }

    const fetchTrending = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.trend').classList.remove('hoverEvent');
        document.querySelector('.trend').classList.add('selected');
        const list = await getTrending('all', 'day', 1);
        setMoviesList(list);
        setIsTrend(true);
        setPage(1);
    }

    const loadMore = async () => {
        const list = isTrend ? await getTrending('all', 'day', page + 1)
            : await getDiscover(type, page + 1);
        setMoviesList(prev => [...prev, ...list]);
    }

    useEffect(() => {
        document.querySelector('.movie').classList.add('selected');
        document.querySelector('.tv').classList.add('hoverEvent');
        document.querySelector('.trend').classList.add('hoverEvent');
        fetchMovies();
    }, [])

    return (
        <RecommandedStyled>
            <RecHeader>
                <p>Recommanded</p>
                <TypesStyled>
                    <button onClick={fetchMovies} className='movie'>
                        <i className="fas fa-video"></i>
                        Movies
                    </button>
                    <button onClick={fetchTv} className='tv'>
                        <i className="fas fa-list-ul"></i>
                        TV Show
                    </button>
                    <button onClick={fetchTrending} className='trend'>
                        <i className="fas fa-chart-line"></i>
                        Trinding
                    </button>
                </TypesStyled>
            </RecHeader>
            <List>
                {
                    moviesList.map((movie, index) => {
                        return <Movie key={index}>
                            <img src={IMGPATH + movie.poster_path} alt=' ' />
                            <h4>{movie.name || movie.title}</h4>
                            <ItemInfo item={movie} type={movie.media_type || type}></ItemInfo>
                        </Movie>
                    })
                }
            </List>
            <button className='loadmore hoverEvent' onClick={loadMore}>load more</button>
        </RecommandedStyled>
    )
}

export default Recommanded
