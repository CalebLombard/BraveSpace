import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
<NavLogo style={{ height: "60px" }}>
  <img 
    src="/Image/navbar.png" 
    alt="Brave Space Logo" 
    style={{ height: "100%", width: "auto", objectFit: "contain", display: "block" }} 
  />
</NavLogo>

      
      <NavLinks className={isMenuOpen ? "active" : ""}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/login">Login</NavLink>
      </NavLinks>

      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </MobileMenuButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavLogo = styled.div`
  font-family: ${props => props.theme.fonts.headings};
  color: ${props => props.theme.colors.lilac};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLink = styled.a`
  color: #555;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.pink};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.pink};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.lilac};

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;