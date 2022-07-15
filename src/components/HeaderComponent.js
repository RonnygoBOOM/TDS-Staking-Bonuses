import React from 'react';
import {Navbar, Collapse, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';

function Header(props) {
    const [navCollapse, setNavCollapse] = React.useState(false)
    const [dropdownOpen, setDropdownOpen] = React.useState(false)

    const dropdownRole = props.combinations.map((item) => {
        return (
                <DropdownItem>
                    <a href={`/#${item.title}`} alt={item.alt}>
                    {item.title}
                    </a>
                </DropdownItem>
        );
    })
    function toggle() {
        setDropdownOpen(prev => !prev)
    }

    function toggleNavbarCollapse() {
        setNavCollapse(prev => !prev)
    }


    return (
            <Navbar dark sticky="top" expand="md">
                <NavbarBrand>The Deadly Sins</NavbarBrand>
                <NavbarToggler onClick={toggleNavbarCollapse} />
                <Collapse isOpen={navCollapse} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Roles
                        </DropdownToggle>
                        <DropdownMenu>
                            {dropdownRole}
                        </DropdownMenu>
                    </Dropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#">Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar> 
    );
}
export default Header;


