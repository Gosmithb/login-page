import { NavLink } from "react-router-dom"



export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>  
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav>
  )
}
