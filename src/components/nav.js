import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = () => {
  return (
    <NavWrapper>
      <Navbar>
        <NavbarItem>
          <Link to='/'>HOME</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/about-us'>ABOUT US</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/events'>EVENTS</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/our-global-network'>OUR GLOBAL NETWORK</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/our-partners'>OUR PARTNERS</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/contacts'>CONTACTS</Link>
        </NavbarItem>
      </Navbar>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Navbar = styled.ul`
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
`;

const NavbarItem = styled.li`
  display: flex;
  align-items: stretch;
  text-decoration: none;
  list-style-type: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  a {
    padding: 0 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 1px;
      width: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 20px);
      background-color: #000;
      transition: 0.3s;
    }
  }
`;
