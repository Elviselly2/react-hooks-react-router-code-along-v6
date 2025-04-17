import { NavLink } from "react-router-dom";
import "./NavBar.css"
function NavBar(){
    return(
       <nav>
        <NavLink to="/"
        className="nav-link">

         Home
      </NavLink>
      <NavLink
        to="/About"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/Login"
        className="nav-link"
      >
        Login
      </NavLink>
       </nav>
    )
}
export default NavBar