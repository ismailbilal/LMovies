import React, { useEffect } from 'react';
import { Movie } from './styles/trendingStyled';
import { IMGPATH } from '../API';
import { useState } from 'react';

function TrendingMovie({ movie, index }) {
    const [tslt, setTslt] = useState(0);

    useEffect(() => {
        let timer;
        const timeToMove = 6000;
        const dots = document.querySelectorAll('.dot');
        dots[0].classList.add('orange');

        const listInfo = document.querySelectorAll('.info');
        listInfo[0].classList.add('showen');

        const switchMovie = () => {
            setTslt(prev => {
                dots[prev].classList.remove('orange');
                listInfo[prev].classList.remove('showen');
                prev = prev < 8 ? prev + 1 : 0;
                dots[prev].classList.add('orange');
                listInfo[prev].classList.add('showen');
                return prev;
            });
            timer = setTimeout(() => {
                switchMovie();
            }, timeToMove);
        }

        timer = setTimeout(() => {
            switchMovie();
        }, timeToMove);

        const handleClick = (e, i) => {
            clearTimeout(timer);
            setTslt(prev => {
                dots[prev].classList.remove('orange');
                listInfo[prev].classList.remove('showen');
                dots[i].classList.add('orange');
                listInfo[i].classList.add('showen');
                return i;
            });
            timer = setTimeout(() => {
                switchMovie();
            }, timeToMove);
        }

        for (let i = 0; i < dots.length; i++) {
            const dot = dots[i];
            dot.addEventListener('click', e => handleClick(e, i))
        }

        return () => {
            clearTimeout(timer);
            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];
                dot.removeEventListener('click', e => handleClick(e, i));
            }
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
