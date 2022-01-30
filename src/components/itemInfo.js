import React, { useEffect, useState } from 'react'
import { getItem } from '../API';
import { Item } from './styles/itemInfoStyle';

function ItemInfo({ item, type }) {
    const [movie, setMovie] = useState({});

    const extraYear = (fullYear) => {
        return fullYear ? fullYear.slice(0, 4) : '';
    }

    const fetchData = async () => {
        try {
            const mv = await getItem(type, item.id);
            console.log(type);
            console.log(mv);
            setMovie(mv);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return type == 'movie' ? <Item>
        <em><i class="fas fa-star"></i>{movie.vote_average}</em>
        <em><i class="fas fa-circle"></i>{extraYear(movie.release_date)}</em>
        <em><i class="fas fa-circle"></i>{movie.runtime} min</em>
    </Item>
        : <Item>
            <em><i class="fas fa-star"></i>{movie.vote_average}</em>
            <em><i class="fas fa-circle"></i>SS {movie.number_of_seasons}</em>
            <em><i class="fas fa-circle"></i>EP {movie.number_of_episodes}</em>
        </Item>
}

export default ItemInfo
