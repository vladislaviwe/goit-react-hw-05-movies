import styled from "styled-components";

export const NavMenu = styled.ul`
display: flex;
align-items: center;
justify-content: center;

padding-inline-start: 0;
list-style: none;
`

export const NavItem = styled.li`
cursor: pointer;

padding: 10px;

&:not(:last-child) {
    margin-right: 20px;
}

& a {
    text-decoration: none;

    color: black;
}

& a.active {
    border-bottom: 5px solid red;
}
`