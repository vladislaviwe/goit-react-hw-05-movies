import styled from "styled-components";

export const NavMenu = styled.ul`
padding: 0;
list-style: none;
display: flex;
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