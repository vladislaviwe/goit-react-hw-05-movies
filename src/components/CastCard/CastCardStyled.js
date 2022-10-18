import styled from "styled-components";

export const CastList = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;

padding-inline-start: 0;

list-style: none;

& li:not(:nth-child(6n + 6)) {
    margin-right: 20px;
}
`

export const CastItem = styled.li`
width: 200px;
`