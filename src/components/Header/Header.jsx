import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HiMenu, HiX } from "react-icons/hi";

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
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9)); */
  background: #020100ed;
`;

const Logo = styled.img`
  width: 150px;
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
      content: "";
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
  display: ${({ $open }) => ($open ? "flex" : "none")};
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
  { label: "HOME", href: "#home" },
  { label: "PARCEIROS", href: "#gastronomia" },
  { label: "EVENTOS", href: "#eventos" },
  { label: "AMBIENTE", href: "#ambiente" },
  { label: "CONTATO", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = navRef.current?.getBoundingClientRect().height ?? 0;
      const section = links.find(({ href }) => {
        const target = document.getElementById(href.slice(1));

        if (!target) {
          return false;
        }

        const { top, bottom } = target.getBoundingClientRect();
        return top <= activationPoint && bottom > activationPoint;
      });

      setActiveSection(section ? section.href.slice(1) : "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <Nav ref={navRef}>
        <Logo src="/assets/logos/villa_logo.png" alt="Logo" />
        <Menu>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
            >
              {label}
            </a>
          ))}
        </Menu>
        <MenuToggle
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </MenuToggle>
      </Nav>
      <MobileMenu $open={menuOpen}>
        {links.map(({ label, href }) => (
          <a  
            key={label}
            href={href}
            className={activeSection === href.slice(1) ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </MobileMenu>
    </>
  );
}
