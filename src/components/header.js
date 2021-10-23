import React, { useEffect, useState } from "react";
import searchFor, { IMGPATH } from "../API";
import { HeaderStyled, Logo, Menu, MenuLogo, LoginStyled, SearchBlock, SearchInput, SearchSugges } from "./styles/headerStyled";



const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('multi');
    const [suggDisplay, setSuggDisplay] = useState('none');

    // change type of search results (movie or tv-show or both)
    const changeType = (element, type) => {
        document.querySelector('.selectedType').classList.remove('selectedType');
        element.classList.add('selectedType');
        setSearchType(type);
        showSugges(searchInput, type);
    }


    // get the result of the search
    const showSugges = async (keyword, type) => {
        const movies = await searchFor(keyword, type);
        setSearchResult(keyword ? [...movies] : []); // so the suggestions will clear when the search is clear
        setSuggDisplay(keyword ? 'flex' : 'none');
    }

    useEffect(() => {
    }, []);

    return (
        <HeaderStyled>
            <Logo />
            <Menu>
                <MenuLogo />
                <ul>
                    <li>Home</li>
                    <li>Genre</li>
                    <li>Movies</li>
                    <li>Tv-Series</li>
                    <li>Top IMDb</li>
                </ul>
            </Menu>
            <SearchBlock
                onBlur={(e) => {
                    if (e.nativeEvent.relatedTarget === null) {
                        setSuggDisplay('none');
                    }
                }}
            >
                <SearchInput>
                    <button onClick={() => {
                        showSugges(searchInput, searchType);
                    }
                    } />
                    <input
                        type="search"
                        placeholder='search ...'
                        value={searchInput}
                        onChange={event => {
                            setSearchInput(event.target.value);
                            showSugges(event.target.value, searchType); // multi is the default type of search (All)
                        }
                        }
                    />
                </SearchInput>
                <SearchSugges className={suggDisplay} >
                    <div className="types">
                        <button onClick={(event) => changeType(event.target, 'multi')} className='selectedType'>All</button>
                        <button onClick={(event) => changeType(event.target, 'movie')} >Movie</button>
                        <button onClick={(event) => changeType(event.target, 'tv')} >Serie</button>
                    </div>
                    <div className="sugges">
                        {
                            searchResult.slice(-4).map((movie, index) => {
                                return (
                                    <aside key={index}>
                                        <img src={IMGPATH + movie.poster_path} alt='' />
                                        <h4>{movie.name || movie.title}</h4>
                                    </aside>
                                )
                            })
                        }
                    </div>
                </SearchSugges>
            </SearchBlock>
            <LoginStyled />
        </HeaderStyled>
    )
}

export default Header;