import styled from "styled-components";

const favoritColor = '#ff6600';

const Main = styled.div`
    position: relative;
    width: 100%;
    height: calc(50vh + 20vw);
    top: -70px;
    overflow: hidden;
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
        box-shadow: 0px 0px 20px 20px #00000085;
        background-color: #00000085;
    }
    `

const Dot = styled.div`
    background-color: #ffffff50;
    border-radius: 50%;
    width: calc(12px + .2vw);
    height: calc(12px + .2vw);
    cursor: pointer;
`

export { Main, Movie, Dots, Dot }