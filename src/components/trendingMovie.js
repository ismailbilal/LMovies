import React, { useEffect } from 'react';
import { Dot, Movie } from './styles/trendingStyled';
import { IMGPATH } from '../API';
import { useState } from 'react';

function TrendingMovie({ movie, index }) {
    const [tslt, setTslt] = useState(0);

    useEffect(() => {
        let timer;
        const timeToMove = 6000;
        const dots = document.querySelectorAll('.dot');
        console.log(dots);
        dots[0].classList.add('orange');

        const switchMovie = () => {
            setTslt(prev => {
                dots[prev].classList.remove('orange');
                prev = prev < 8 ? prev + 1 : 0;
                dots[prev].classList.add('orange');
                return prev;
            });
            setTimeout(() => {
                timer = switchMovie();
            }, timeToMove);
        }

        setTimeout(() => {
            timer = switchMovie();
        }, timeToMove);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <Movie
            key={index}
            style={{
                background: `url(${IMGPATH + movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                left: `${index * 100}%`,
                transform: `translateX(${tslt * -100}%)`
            }}
        >
        </Movie>
    )
}

export default TrendingMovie
