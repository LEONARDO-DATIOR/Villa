import { useState } from 'react';
import styled from 'styled-components';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent);
`;

const Logo = styled.a`
  width: 80px;
  height: 80px;
  border: 3px double ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.65rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.orangeGlow};
  line-height: 1.2;
  flex-shrink: 0;
`;

const Menu = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 4px;
    transition: color 0.2s;

    &.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.orange};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.75rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileMenu = styled.nav`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.97);
  padding: 100px 5% 40px;
  z-index: 99;

  a {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    &.active {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'SOBRE', href: '#sobre' },
  { label: 'GASTRONOMIA', href: '#gastronomia' },
  { label: 'AMBIENTE', href: '#ambiente' },
  { label: 'EVENTOS', href: '#eventos' },
  { label: 'CONTATO', href: '#contato' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <Logo href="#home">
          VILLA
          <br />
          Olegário
        </Logo>
        <Menu>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={label === 'HOME' ? 'active' : ''}
            >
              {label}
            </a>
          ))}
        </Menu>
        <MenuToggle
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </MenuToggle>
      </Nav>
      <MobileMenu $open={menuOpen}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={label === 'HOME' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </MobileMenu>
    </>
  );
}
