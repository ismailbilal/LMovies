import styled from "styled-components";
import { favoritColor } from "./globalStyle";

const RecommandedStyled = styled.div`
    margin-top: 0px;
    color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const RecHeader = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0px 10px;
    }
    & p{
        font-size: 30px;
        color: #ffffff90;
        border-bottom: 1px solid #ffffff90;
        padding-bottom: 10px;
        margin-bottom: 15px;
    }

`

const TypesStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 25%;
    align-items: center;
    margin: 0px 10px;
    padding-bottom: 10px;
    margin-bottom: 14px;
    & button{
        width: 30%;
        min-width: max-content;
        border: none;
        background-color: rgb(25, 25, 25);
        color: #ffffff95;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0 5px;
        & .fas{
            margin-right: 5px;
        }
    }
    & .hoverEvent{
        &:hover{
            background-color: rgb(40, 40,40);
            color: #ffffff;
        }
    }
    & .selected{
        background-color: ${favoritColor};
        color: #ffffff;
    }
    @media (max-width: 768px) {
        margin: 10px 0px;
    }
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Movie = styled.div`
    font-family: Sans-serif;
    width: 200px;
    height: max-content;
    margin: .5rem;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    & img{
        width: 100%;
        margin-bottom: 5px;
    }
    & h4{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1; 
        -webkit-box-orient: vertical;
        font-weight: 100;
        color: #fff;
    }
    & em{
        font-size: calc(70% + .3vw);
    }
    @media (max-width: 768px) {
        width: 150px;
    }
`

export {
    RecommandedStyled,
    TypesStyled,
    List,
    RecHeader,
    Movie
}