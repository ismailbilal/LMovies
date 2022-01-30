import styled from "styled-components";
import { favoritColor } from "./globalStyle";

const RecommandedStyled = styled.div`
    margin-top: 0px;
    color: #ffffff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    & hr{
        border-color: #ffffff50;
        margin: 0px 10px;
    }
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
    }

`

const TypesStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 25%;
    align-items: center;
    margin: 0px 10px;
    padding: -10px;
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
    width: 200px;
    margin: .5rem;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px #000;
    & img{
        width: 100%;
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