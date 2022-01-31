import React, { useEffect, useState } from 'react'
import { List, Movie, RecHeader, RecommandedStyled, TypesStyled } from './styles/rcdStyled'
import { getDiscover, getTrending, IMGPATH } from '../API';
import ItemInfo from './itemInfo';
import { render } from '@testing-library/react';

const Recommanded = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [type, setType] = useState('movie');
    const [page, setPage] = useState(1);

    const fetchMovies = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.movie').classList.remove('hoverEvent');
        document.querySelector('.movie').classList.add('selected');
        const list = await getDiscover('movie', 1);
        const list2 = await getDiscover('movie', 2);
        setMoviesList(list);
        setMoviesList(prev => [...prev, ...list2]);
        setType('movie');
    }

    const fetchTv = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.tv').classList.remove('hoverEvent');
        document.querySelector('.tv').classList.add('selected');
        const list = await getDiscover('tv', 1);
        const list2 = await getDiscover('tv', 2);
        setMoviesList(list);
        setMoviesList(prev => [...prev, ...list2]);
        setType('tv');
    }

    const fetchTrending = async () => {
        document.querySelector('.selected').classList.add('hoverEvent');
        document.querySelector('.selected').classList.remove('selected');
        document.querySelector('.trend').classList.remove('hoverEvent');
        document.querySelector('.trend').classList.add('selected');
        const list = await getTrending('all', 'day', 1);
        const list2 = await getTrending('all', 'day', 2);
        setMoviesList(list);
        setMoviesList(prev => [...prev, ...list2]);
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
                            <img src={IMGPATH + movie.poster_path} />
                            <h4>{movie.name || movie.title}</h4>
                            <ItemInfo item={movie} type={movie.media_type || type}></ItemInfo>
                        </Movie>
                    })
                }
            </List>
        </RecommandedStyled>
    )
}

export default Recommanded
