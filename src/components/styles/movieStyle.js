import styled from "styled-components";
import { favoritColor } from "./globalStyle";

const MovieStyled = styled.div`
    color: #fff; // ghat7iyad 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 100%;
    position: relative;
`

const PriInfoStyled = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    & .backgr{
        padding: 3rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background-color: rgba(0, 0, 0, .8);
        & img{
            max-width: 300px;
            border-radius: 10px;
        }
    }
`

const SecInfoStyled = styled.div`
    `

const InfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
        em {
            color: rgba(255, 255, 255, .7);
        }
    }
    span{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        .fa-circle{
            transform: scale(.3);
        }
        canvas{
            border-radius: 50%;
            background-color: rgb(16, 16, 51);
        }
        button{
            width: 30%;
            min-width: max-content;
            border: 2px solid ${favoritColor};
            background-color: rgba(0, 0, 0, .2);
            color: ${favoritColor};
            border-radius: 20px;
            padding: 10px 20px;
            margin: 0 20px;
            cursor: pointer;
            .fas{
                margin-right: 5px;
            }
            :hover{
                background-color: ${favoritColor};
                color: #000;
            }
        }
    }
    .genres{
        margin-top: -20px;
        color: rgba(255, 255, 255, .8);
    }
    .tag{
        color: rgba(255, 255, 255, .7);
    }
    p{
        margin-top: -1.5rem;
        color: rgba(255, 255, 255, .8);
    }
`

export { MovieStyled, PriInfoStyled, SecInfoStyled, InfoStyled }