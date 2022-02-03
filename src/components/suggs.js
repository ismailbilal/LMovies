import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getItem, IMGPATH, IMGPATHlow } from '../API';
import star from '../images/blackStar.svg'

const Suggs = ({ data, dataType }) => {
    const [item, setItem] = useState([]);

    const extractYear = (fullYear) => {
        return fullYear ? fullYear.slice(0, 4) : '';
    }

    useEffect(() => {
        const fetchData = async () => {
            const item = await getItem(dataType, data.id);
            console.log(item);
            setItem(item);
        }


        fetchData();
    }, [data, dataType]);

    return (
        <Link to={`/${item.media_type || dataType}/${item.id}`}>
            <aside>
                <img
                    src={(IMGPATHlow || IMGPATH) + (item.poster_path || item.profile_path)}
                    alt=' '
                    style={{
                        borderRadius: dataType === 'person' ? '50%' : '0',
                        height: dataType === 'person' ? '70px' : '90px'
                    }}
                />
                <div className="movie-info">
                    <h4>{item.name || item.title}</h4>
                    <span>{dataType === 'tv' ? 'serie' : dataType}</span>

                    {
                        dataType !== 'person' ? <>
                            <span>
                                <img src={star} alt=' ' />
                                {item.vote_average}
                            </span>
                            <br />
                            <span>
                                {item.genres ? item.genres.slice(0, 2).map(genre => {
                                    return <em><span className='dot' />{genre.name}</em>
                                }) : ''}
                            </span>
                            <br />
                            <span>({extractYear(item.release_date) || extractYear(item.first_air_date) + '-' + extractYear(item.last_air_date)})</span>
                        </>
                            : ''
                    }
                </div>
            </aside>
        </Link>
    )
}

export default Suggs;