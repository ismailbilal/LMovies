import styled, { keyframes } from "styled-components";
import darkMenuIcon from "./../../images/darkMenu.png";
import lightMenuIcon from './../../images/lightMenu.png';
import logoIcon from './../../images/logo.svg';
import loginIcon from './../../images/login.svg';
import loginIconHover from './../../images/loginHover.svg';
import darkSearchLogo from './../../images/search.svg';
import whiteSearchLogo from './../../images/whiteSearch.svg';

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
    background-color: #00000099;
    box-shadow: 0px 0px 80px 80px #00000099;
    @media (max-width: 768px){
        box-shadow: 0px 0px 20px 20px #00000085;
        background-color: #00000085;
    }
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
                text-shadow: 4px 4px 10px #11111111;
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
            padding: 2rem 0;
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
    width: calc(1vw + 23px);
    height: calc(1vw + 23px);
    margin: 0 2vw;
    order: 5;
    &:hover{
        background: url(${loginIconHover});
        background-size: 100% 100%;
    }
    cursor: pointer;
    `

const SearchBlock = styled.div`
    width: clamp(200px, 100% , 300px);
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 4;
    margin-top: calc((70px - (1px + 23px))/2);
    margin-left: auto;
    & div{
        border-radius: 10px;
        background-color: rgba(255, 255, 255, .4);
        & input{
            ::placeholder{
                color: #47474790;
            }
        }
    }
    &:hover,
    &:focus-within{
        & div{
            background-color: rgba(255, 255, 255, .8);
            /* display: flex; */ // i've do this with js
            & div{
                background-color: transparent;
            }
            & .searchBut{
                background: url(${darkSearchLogo});
                background-size: 100% 100%;
            }
            & input{
                ::placeholder{
                    color: #474747;
                }
            }
        }
    }
    & .flex{
        display: flex;
    }
    & .none{
        display: none;
    }
    @media (max-width: 768px){
        width: calc(1vw + 20px);
        & div {
            border-radius: 50%;
            padding: 0;
            & input{
                display: none;
            }
            & button{
                margin: auto;
            }
        }
        &:focus-within {
            & + div{
                margin-left: auto;
            }
            width: 90%;
            position: absolute;
            left: 5%;
            top: 50px;
            & div {
                padding: .2em .8em;
                width: 100%;
                border-radius: 10px;
                & input{
                    display: block;
                }
                & button{
                    margin-left: -5px;
                }
            }
        }
    }
`

const SearchInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .2em .8em;
        background-color: rgba(255, 255, 255, 0.3);
    & input,
    & button {
        background-color: transparent;
        border: none;
        height: calc(.2vw + 25px);
        &:focus{
            outline: none;
        }
    }
    & button{
        width: calc(1vw + 15px);
        background-image: url(${whiteSearchLogo});
        background-size: 100% 100%;
        margin-left: -5px;
        cursor: pointer;
    }
    & input{
        width: calc(100% - 1vw - 15px);
        font-size: 16px;
        font-weight : large;
        ::placeholder{
            color: #999999;
        }
    }
    `

const SearchSugges = styled.div`
    /* display: none; */
    flex-direction: column;
    margin-top: 10px;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.3);
    & div{
        padding: .5em .8em;
    }
    & .sugges{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        color: rgba(0, 0, 0, 0.8);
        & aside{
            display: flex;
            flex-direction: row;
            & img{
                height: 90px;
                width: 70px;
            }
            & .movie-info{
                & h4 {
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 200px;
                }
                & span{
                    margin-right: 5px;
                    & img{
                        height: 13px;
                        width: 13px;
                        margin-right: 3px;
                    }
                    & em{
                        margin-right: 5px;
                        & .dot{
                            background-color: #000;
                            height: 5px;
                            width: 5px;
                            display: inline-block;
                            border-radius: 50%;
                        }
                    }
                }
            }
            &:hover{
                color: #000;
                cursor: pointer;
            }
        }
    }
    & .types{
        display: flex;
        flex-direction: row;
        justify-content: start;
        gap: 10px;
        & button{
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 16px;
            color: rgba(0, 0, 0, .2);
            margin: 2px;
            cursor: pointer;
        }
        & .selectedType{
            color: ${favoritColor};
            border-bottom: 2px solid ${favoritColor};
        }
    }
`

export {
    Menu,
    HeaderStyled,
    MenuLogo,
    Logo,
    LoginStyled,
    SearchBlock,
    SearchInput,
    SearchSugges
}