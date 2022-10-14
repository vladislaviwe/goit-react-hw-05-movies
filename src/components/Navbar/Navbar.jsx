import { NavLink } from "react-router-dom"
import { NavMenu, NavItem } from "./NavbarStyled"

export default function Navbar() {
  return (
    <nav>
        <NavMenu>
            <NavItem>
                <NavLink to="/" end>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/movies">Movies</NavLink>
            </NavItem>
        </NavMenu>
    </nav>
  )
}