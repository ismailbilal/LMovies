import styled, { keyframes } from "styled-components";
import darkMenuIcon from "./../../images/darkMenu.png";
import lightMenuIcon from './../../images/lightMenu.png';
import logoIcon from './../../images/logo.svg';
import loginIcon from './../../images/login.svg';
import loginIconHover from './../../images/loginHover.svg';
import searchLogo from './../../images/search.svg'

const favoritColor = '#ff6600';

const showMenu = keyframes`
    from{
        left: -120px
    }
    to{
        left: 0;
    }
`

const HeaderStyled = styled.div`
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

const MenuLogo = styled.div`
    width: calc(1vw + 30px);
    height: calc(1vw + 30px);
    background:url(${darkMenuIcon});
    background-size: 100% 100%;
    cursor: pointer;
    &:hover{
        background: url(${lightMenuIcon});
        background-size: 100% 100%;
    }
    display: none;
`

const Logo = styled.div`
    /* color is #ff6600 */
    height: calc(1vw + 30px);
    width: calc(6vw + 90px);
    background: url(${logoIcon});
    background-size: 100% 100%;
    cursor: pointer;
    margin-left: 2vw;
    order: 2;
`

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-left: 2vw;
    order: 2;
    & ul{
        display: flex;
        flex-direction: row;
        gap: 2vw;
        & li{
            list-style: none;
            font-size: calc(15px + .2vw);
            color: rgba(255, 255 , 255, 0.55);
            cursor: pointer;
            &:hover{
                color: ${favoritColor};
            }
        }
    }
    @media (max-width: 768px){
        order: 1;
        & ul{
            display: none;
            position: absolute;
        }
        & div{
            display: block;
        }
        &:hover ul{
            padding: 2rem 0 0 0;
            width: 100px;
            gap: 20px;
            display: flex;
            flex-direction: column;
            top: 30px;
            animation: ${showMenu} 0.8s;
        }
    }
`

const LoginStyled = styled.div`
    background: url(${loginIcon});
    background-size: 100% 100%;
    width: calc(1vw + 25px);
    height: calc(1vw + 25px);
    margin: 0 2vw;
    order: 5;
    &:hover{
        background: url(${loginIconHover});
        background-size: 100% 100%;
    }
    cursor: pointer;
`

const SearchStyled = styled.div`
    height: 10px;
    width: 10px;
    order: 4;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    @media (max-width: 768px){
        & input{
            display: none;
        }
        &:focus-within{
            top: 50px;
            & button{
                background-color: transparent;
            }
            & input{
                display: block;
                width: calc(4vw + 250px);
            }
        }
    }
`

const SearchLogo = styled.button`
    position: absolute;
    right: 5px;
    width: calc(1vw + 20px);
    height: calc(1vw + 20px);
    background-image: url(${searchLogo});
    background-size: 100% 100%;
    background-color: rgba(255, 255, 255, 0.30);
    border: none;
    border-radius: 50%;
    align-self: center;
    z-index: 2;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.70);
    }
    `

const SearchInput = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'search ...'
}))`
    position: absolute;
    right: 0;
    font-size: 1.1em;
    font-weight: 500;
    height: calc(1vw + 25px);
    width: calc(4vw + 180px);
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.30);
    align-self: center;
    border: none;
    outline: none;
    padding: 1rem;
    &:hover,
    &:focus{
        background-color: rgba(255, 255, 255, 0.70);
    }

`

export { Menu, HeaderStyled, MenuLogo, Logo, LoginStyled, SearchStyled, SearchInput, SearchLogo }