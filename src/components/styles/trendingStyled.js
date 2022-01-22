import styled from "styled-components";

const Main = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    border: 1px solid red;// hadi ghat7iyad
    top: -70px;
    overflow: hidden;
`

const Movie = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 1s ease-in-out;
`

export { Main, Movie }