import styled from "styled-components";

const Item = styled.div`
    color: rgba(255, 255, 255, .7);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
    & em{
        & .fa-circle{
            transform: scale(.3);
        }
        & .fa-star{
            transform: scale(.79);
        }
    }

`

export { Item }