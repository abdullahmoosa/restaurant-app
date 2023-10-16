import { useState } from 'react'
import {Navbar,Nav, Collapse, NavItem, NavbarText, NavLink, NavbarToggler} from 'reactstrap'
const NavigationComponent = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  const navToggle = ()=> {
    setIsNavOpen(!IsNavOpen);
  };
  return (
    <div>
        <Navbar
        color="dark"
        dark
        expand ="sm"
        >
          <NavbarToggler onClick={navToggle} className="me-2" />
        <Collapse isOpen = {IsNavOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu/">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
  </Navbar>
    </div>
  )
}

export default NavigationComponent