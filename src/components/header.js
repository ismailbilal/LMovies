import React from "react";
import { HeaderStyled, Logo, Menu, MenuLogo, LoginStyled, SearchStyled, SearchLogo, SearchInput } from "./styles/headerStyled";

const Header = () => {
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
            <SearchStyled>
                <SearchLogo>hell</SearchLogo>
                <SearchInput />
            </SearchStyled>
            <LoginStyled />
        </HeaderStyled>
    )
}

export default Header;