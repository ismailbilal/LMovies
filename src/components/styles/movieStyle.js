import styled from "styled-components";
import { favoritColor } from "./globalStyle";

const MovieStyled = styled.div`
    color: #fff; // ghat7iyad 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 100%;
`

const PriInfoStyled = styled.div`
    width: 100%;
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
    @media (max-width: 768px){
        .backgr{
            flex-direction: column;
            gap: 1rem;
        }
    }
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
        flex-wrap: wrap;
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
        .far {
            margin-right: 5px;
        }
    }
    .tag{
        color: rgba(255, 255, 255, .7);
    }
    p{
        margin-top: -1.5rem;
        color: rgba(255, 255, 255, .8);
    }
    @media (max-width: 768px){
        justify-content: center;
    }
    `

const SecInfoStyled = styled.div`
    width: 100%;
    color: rgba(255, 255, 255, .8);
    padding: 1rem 2.5rem;
    .seasons{
        .seasss{
            overflow: auto;
            white-space: nowrap;
            .season{
                display: inline-block;
                margin: 0 5px;
                width: 150px;
                border-radius: 5px;
                overflow: hidden;
                img{
                    width: 100%;
                }
                span{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    gap: 10px;
                }
            }
            ::-webkit-scrollbar{
                width: 5px;
            }
            ::-webkit-scrollbar-track{
                border-radius: 10px;
                background-color: #000;
            }
            ::-webkit-scrollbar-thumb{
                background-color: rgb(30, 30, 30);
                border-radius: 10px;
                :hover{
                    background-color: rgb(50, 50, 50);
                }
            }
        }
    }
`

export { MovieStyled, PriInfoStyled, SecInfoStyled, InfoStyled }