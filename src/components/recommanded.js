import React, { useEffect, useState } from 'react'
import { List, Movie, RecHeader, RecommandedStyled, TypesStyled } from './styles/rcdStyled'
import { getDiscover, getTrending, IMGPATH } from '../API';
import ItemInfo from './itemInfo';

const Recommanded = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [type, setType] = useState('movie');
    const [page, setPage] = useState(1);

    const changeType = (element, type) => {
        const oldElement = document.querySelector('.selected');
        oldElement.classList.remove('selected');
        oldElement.classList.add('hoverEvent')
        element.classList.remove('hoverEvent');
        element.classList.add('selected');
    }

    const fetchData = async () => {
        const list = await getDiscover(type, page);
        setMoviesList(list);
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
                        <i className="fas fa-video"></i>
                        Movies
                    </button>
                    <button onClick={(event) => changeType(event.target, 'multi')} className='hoverEvent'>
                        <i className="fas fa-list-ul"></i>
                        TV Show
                    </button>
                    <button onClick={(event) => changeType(event.target, 'multi')} className='hoverEvent'>
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
