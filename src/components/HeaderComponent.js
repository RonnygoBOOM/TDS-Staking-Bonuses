import React from 'react';
import {Navbar, Collapse, NavbarBrand, Dropdown, DropdownToggle, DropdownMenu, NavbarToggler, Nav, NavItem} from 'reactstrap';

function Header(props) {
    const [navCollapse, setNavCollapse] = React.useState(false)
    const [dropdownOpen, setDropdownOpen] = React.useState(false)

    const dropdownRole = props.combinations.map((item) => {
        return (
                <div className="roles-item" onClick={toggleDropdown}>
                    <a className="roles-item-link" href={`/#${item.title}`} alt={item.alt}>
                    {item.title}
                    </a>
                </div>
        );
    })
    function toggleDropdown() {
        setDropdownOpen(prev => !prev)
    }

    function toggleNavbarCollapse() {
        setNavCollapse(prev => !prev)
    }


    return (
            <Navbar sticky="top" expand="md">
                <NavbarBrand>The Deadly Sins</NavbarBrand>
                <NavbarToggler onClick={toggleNavbarCollapse} />
                <Collapse isOpen={navCollapse} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>

                        </NavItem>
                    </Nav>
                </Collapse>
                <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle caret>
                            Roles
                        </DropdownToggle>
                        <DropdownMenu className="roles-menu">
                            {dropdownRole}
                        </DropdownMenu>
                    </Dropdown>
            </Navbar> 
    );
}
export default Header;


