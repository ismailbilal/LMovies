import React, { useState } from "react";
import { searchFor } from "../API";
import { HeaderStyled, Logo, Menu, MenuLogo, LoginStyled, SearchBlock, SearchInput, SearchSugges } from "./styles/headerStyled";
import Suggs from "./suggs";



const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchType, setSearchType] = useState('multi'); // multi is the default type of search (All)
    const [suggDisplay, setSuggDisplay] = useState('none');
    const numberofSuggs = 2;

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
                    <button
                        className='searchBut'
                        onClick={() => {
                            showSugges(searchInput, searchType);
                        }
                        } />
                    <input
                        type="search"
                        placeholder='search ...'
                        value={searchInput}
                        onChange={event => {
                            setSearchInput(event.target.value);
                            showSugges(event.target.value, searchType);
                        }
                        }
                    />
                </SearchInput>
                <SearchSugges className={suggDisplay} >
                    <div className="types">
                        <button onClick={(event) => changeType(event.target, 'multi')} className='selectedType'>All</button>
                        <button onClick={(event) => changeType(event.target, 'movie')} >Movie</button>
                        <button onClick={(event) => changeType(event.target, 'tv')} >Serie</button>
                        <button onClick={(event) => changeType(event.target, 'person')} >Person</button>
                    </div>
                    <div className="sugges">
                        {
                            searchResult.slice(0, numberofSuggs).map((movie, index) => {
                                return <Suggs data={movie} dataType={movie.media_type || searchType} />
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