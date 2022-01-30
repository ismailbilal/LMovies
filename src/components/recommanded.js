import React, { useEffect, useState } from 'react'
import { List, Movie, RecHeader, RecommandedStyled, TypesStyled } from './styles/rcdStyled'
import { getDiscover, IMGPATH } from '../API';

const Recommanded = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [moviesList2, setMoviesList2] = useState([]);

    const changeType = (element, type) => {
        const oldElement = document.querySelector('.selected');
        oldElement.classList.remove('selected');
        oldElement.classList.add('hoverEvent')
        element.classList.remove('hoverEvent');
        element.classList.add('selected');
    }

    const fetchData = async () => {
        const list = await getDiscover();
        const list2 = await getDiscover('movie', 2);
        console.log(list2);
        setMoviesList(list);
        setMoviesList2(list2);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <RecommandedStyled>
            <RecHeader>
                <p>Recommanded</p>
                <TypesStyled>
                    <button onClick={(event) => changeType(event.target, 'multi')} className='selected'>
                        <i class="fas fa-video"></i>
                        Movies
                    </button>
                    <button onClick={(event) => changeType(event.target, 'multi')} className='hoverEvent'>
                        <i class="fas fa-list-ul"></i>
                        TV Show
                    </button>
                    <button onClick={(event) => changeType(event.target, 'multi')} className='hoverEvent'>
                        <i class="fas fa-chart-line"></i>
                        Trinding
                    </button>
                </TypesStyled>
            </RecHeader>
            <hr />
            <List>
                {
                    moviesList.map((movie, index) => {
                        return <Movie key={index}>
                            <img src={IMGPATH + movie.poster_path} />
                            <p>{movie.vote_average}</p>
                            <p>{movie.popularity}</p>
                            <p>{movie.release_date}</p>
                        </Movie>
                    })
                }
                {
                    moviesList2.map((movie, index) => {
                        return <Movie key={index}>
                            <img src={IMGPATH + movie.poster_path} />
                            <p>{movie.vote_average}</p>
                            <p>{movie.popularity}</p>
                            <p>{movie.release_date}</p>
                        </Movie>
                    })
                }
            </List>
        </RecommandedStyled>
    )
}

export default Recommanded
