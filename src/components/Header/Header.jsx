import { NavLink } from "react-router-dom"


export const Header = () => {
    return (
      <header>
        <nav>
          <NavLink to="/">{/* <Home/> */}</NavLink>
          <ul>
            <li>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
              <NavLink>Authorization</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}