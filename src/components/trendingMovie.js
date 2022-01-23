import React, { useEffect } from 'react';
import { Movie } from './styles/trendingStyled';
import { IMGPATH } from '../API';
import { useState } from 'react';

function TrendingMovie({ movie, index }) {
    const [tslt, setTslt] = useState(0);

    useEffect(() => {
        let handleClick;
        let timer;
        const timeToMove = 6000;
        const dots = document.querySelectorAll('.dot');
        dots[0].classList.add('orange');

        const switchMovie = () => {
            setTslt(prev => {
                dots[prev].classList.remove('orange');
                prev = prev < 8 ? prev + 1 : 0;
                dots[prev].classList.add('orange');
                return prev;
            });
            timer = setTimeout(() => {
                switchMovie();
            }, timeToMove);
        }

        timer = setTimeout(() => {
            switchMovie();
        }, timeToMove);


        for (let i = 0; i < dots.length; i++) {
            const dot = dots[i];
            handleClick = () => {
                clearTimeout(timer);
                setTslt(prev => {
                    dots[prev].classList.remove('orange');
                    dots[i].classList.add('orange');
                    return i;
                });
                timer = setTimeout(() => {
                    switchMovie();
                }, timeToMove);
            }

            dot.addEventListener('click', handleClick)
        }

        return () => {
            clearTimeout(timer);
            for (let i = 0; i < dots.length; i++) {
                const dot = dots[i];
                dot.removeEventListener('click', handleClick);
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
