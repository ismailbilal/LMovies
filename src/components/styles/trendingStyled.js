import styled, { keyframes } from "styled-components";
import voteIcon from '../../images/star.svg';

const favoritColor = '#ff6600';

const showInfo = keyframes`
    0%{
        visibility: visible;
        opacity: 0;
    }
    15%{
        opacity: 0;
    }
    25%{
        opacity: 1;
    }
    99%{
        opacity: 1;
    }
    100%{
        visibility: hidden;
        opacity: 0;
    }
`

const Main = styled.div`
    position: relative;
    width: 100%;
    height: calc(50vh + 20vw);
    top: -70px;
    overflow: hidden;
    & .showen{
        animation: ${showInfo} 6s;
    }
`

const Movie = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    transition: all 1s ease-in-out;
`

const Dots = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #00000099;
    box-shadow: 0px 0px 80px 80px #00000099;
    & .orange{
        background-color: ${favoritColor};
    }
    @media (max-width: 768px){
        box-shadow: 0px 0px 20px 20px #00000070;
        background-color: #00000070;
    }
    `

const Dot = styled.div`
    background-color: #ffffff50;
    border-radius: 50%;
    width: calc(12px + .2vw);
    height: calc(12px + .2vw);
    cursor: pointer;
`

const Info = styled.div`
/* border: 1px solid red; */
    position: absolute;
    top: 50%;
    color: #fff;
    text-shadow: 2px 2px 5px #000000;
    background-color: #00000040;
    box-shadow: 0px 0px 5px 5px #00000070;
    z-index: 2;
    visibility: hidden;
    max-width: 50%;
    max-height: 50%;
    margin: 0px 20px;
    padding: 10px;
    overflow: hidden;
    font-family: "Gill Sans", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & h2 {
        font-size: calc(24px + 1vw);
        color: rgba(255, 255, 255, .95);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1; 
        -webkit-box-orient: vertical;
        position: relative;
        z-index: 2;
    }
    & span{
        color: rgba(255, 255, 255, .78);
        display: flex;
        flex-direction: row;
        gap: 10px;
        & .vote{
            color: rgba(255, 255, 255, .9);
        }
        & p{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5; 
            -webkit-box-orient: vertical;
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
        & em{
            & div{
                margin: 0;
                display: inline-block;
                background: url(${voteIcon});
                background-size: contain;
                background-position: center;
                width: 14px;
                height: 14px;
            }
            & .geDot{
                background: none;
                background-color: rgba(255, 255, 255, .9);
                border-radius: 50%;
                width: 5px;
                height: 5px;
                margin: 3px;
                margin-left: 0px;
            }
        }
    }
    & .text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        line-clamp: 5; 
        -webkit-box-orient: vertical;
        color: rgba(255, 255, 255, .78);
    }
    @media (max-width: 768px){
        max-width: 100%;
        top: 30%;
        & span{
            gap: 5px;
        }
    }
`

export { Main, Movie, Dots, Dot, Info }