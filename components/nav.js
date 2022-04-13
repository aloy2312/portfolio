import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-image: none;
  backdrop-filter: blur(3px);

  position: sticky;
  top: 0;
  width: inherit;
  background-color: #121212ea;
  animation: slideInFromTop 1000ms, fadein 1.8s;

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0px 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  height: ${(props) => (props.open ? "25vh" : 0)};
  position: absolute;
  min-width: 80vw;
  background: #121212ea;
  transition: height 0.4s ease-in-out;
  position: fixed;
  top: calc(9vh);
  z-index: 999;
  background-image: none;
  backdrop-filter: blur(3px);

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding:0;
  margin:0 25px 0 0;
  

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 18px;
    transition: opacity 0.4s ease-in-out;
    margin-bottom:20px
  }


  @media (max-width: 769px) {
    margin:0
    padding: 0;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo>CSS Tricks</Logo>
        <Menu>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              About
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Skills
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Projects
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Contact
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              About
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Skills
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Projects
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              Contact
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
