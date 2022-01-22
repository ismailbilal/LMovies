// just for test
import React, { useEffect, useState } from 'react'
import { IMGPATH, searchFor } from '../API';

function ZTestComponent() {
    const [list, setList] = useState([]);

    const fetchData = async () => {
        const movies = await searchFor('breaking', 'multi');
        console.log(movies);
        setList(movies);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div
            style={{
                color: '#fff',
                position: 'relative'
            }}
        >
            {
                list.map((movie, key) => {
                    return <div
                        style={{
                            background: `url(${IMGPATH + movie.backdrop_path})`,
                            border: '2px solid red',
                            backgroundSize: 'cover',
                            width: '100%',
                            height: '500px',
                            position: 'relative',
                            top: '-70px',
                            zIndex: '4'
                        }}
                    >
                    </div>
                })
            }
        </div >
    )
}

export default ZTestComponent
