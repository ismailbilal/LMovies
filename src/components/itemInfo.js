import React, { useEffect, useState } from 'react'
import { getItem } from '../API';
import { Item } from './styles/itemInfoStyle';

function ItemInfo({ item, type }) {
    const [movie, setMovie] = useState({});

    const extraYear = (fullYear) => {
        return fullYear ? fullYear.slice(0, 4) : '';
    }

    useEffect(() => {
        const fetchData = async () => {
            const mv = await getItem(type, item.id);
            setMovie(mv);
        }

        fetchData();
    }, [item, type])

    return type === 'movie' ? <Item>
        <em><i className="fas fa-star"></i>{movie.vote_average}</em>
        <em><i className="fas fa-circle"></i>{extraYear(movie.release_date)}</em>
        <em><i className="fas fa-circle"></i>{movie.runtime} min</em>
    </Item>
        : <Item>
            <em><i className="fas fa-star"></i>{movie.vote_average}</em>
            <em><i className="fas fa-circle"></i>SS {movie.number_of_seasons}</em>
            <em><i className="fas fa-circle"></i>EP {movie.number_of_episodes}</em>
        </Item>
}

export default ItemInfo
