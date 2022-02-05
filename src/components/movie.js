import React, { useEffect, useState } from 'react'
import { InfoStyled, MovieStyled, PriInfoStyled, SecInfoStyled } from './styles/movieStyle'
import { getItem, IMGPATH } from '../API';
import Canvas from './canvas';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { id, type } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [seasons, setSeasons] = useState([]);

    const extYear = (date) => {
        return date ? date.slice(0, 4) : '';
    }

    useEffect(() => {
        const fetchData = async () => {
            const mv = await getItem(type, id);
            console.log(mv);
            if (type === 'tv') {
                setSeasons(mv.seasons);
            }
            setMovie(mv);
            setGenres(mv.genres);
        }

        fetchData();
    }, [id, type]);

    return (
        <MovieStyled>
            <PriInfoStyled style={{
                background: movie.backdrop_path ? `url(${IMGPATH + movie.backdrop_path})` : '#fff',
                backgroundSize: movie.backdrop_path ? 'cover' : 'none',
                backgroundPosition: movie.backdrop_path ? 'center' : 'none',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='backgr'>
                    <img src={movie.poster_path ? IMGPATH + movie.poster_path : ''} alt=' ' />
                    <InfoStyled>
                        <h1>{movie.title || movie.name} <em>({extYear(movie.release_date || movie.first_air_date)})</em></h1>
                        <span className='genres'>{
                            genres.map((genre, index) => {
                                return <em key={index}><i className="fas fa-circle"></i>{genre.name}</em>
                            })}
                            {
                                movie.runtime ? <em><i className="far fa-clock"></i>{movie.runtime + " min"}</em>
                                    : <><em><i className="fas fa-circle"></i>{"SS " + movie.number_of_seasons}</em>
                                        <em><i className="fas fa-circle"></i>{"EP " + movie.number_of_episodes}</em>
                                    </>
                            }
                        </span>
                        <span>
                            <Canvas average={movie.vote_average} />
                            <a href='#sec'>
                                <button>
                                    <i className="fas fa-play"></i>
                                    Play Trailer
                                </button>
                            </a>
                        </span>
                        <em className='tag'>{movie.tagline}</em>
                        <h2>Overview</h2>
                        <p>{movie.overview}</p>
                    </InfoStyled>
                </div>
            </PriInfoStyled>
            <SecInfoStyled id='sec'>
                {
                    type === 'tv' ? <div className='seasons'>
                        <h2>Seasons</h2>
                        <div className='seasss'>
                            {
                                seasons.map((season, index) => {
                                    return <div key={index} className='season'>
                                        <img src={`${IMGPATH + season.poster_path}`} alt=' ' />
                                        <span>
                                            <em>{season.name}</em>
                                            <em>{'(' + extYear(season.air_date) + ')'}</em>
                                        </span>
                                    </div>
                                })
                            }
                        </div>
                    </div> : ""
                }
            </SecInfoStyled>
        </MovieStyled >
    )
}

export default Movie
