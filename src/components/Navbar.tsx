import { NavLink } from "react-router-dom"
import { Nav, Navbar as NavBarBootsrap } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <NavBarBootsrap collapseOnSelect expand='lg' bg="dark" variant="dark">
      <NavBarBootsrap.Toggle aria-controls="responsive-navbar-nav" />
      <NavLink to="/" className="navbar-brand">
        SuperMarket LA
      </NavLink>

      <NavBarBootsrap.Collapse>
        <Nav className="justify-content-end" activeKey="/">
          <div className="navbar-collapse" id="navbarNav">
              <Nav.Item className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </Nav.Item>
              <Nav.Item className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </Nav.Item>
          </div>
        </Nav>
      </NavBarBootsrap.Collapse>

    </NavBarBootsrap>


  )
}
