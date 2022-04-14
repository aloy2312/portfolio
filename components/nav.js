import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background: #121212ea;
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

const Item = styled.li`
  pointer-events: ${(props) => (props.hide ? "none !important" : "auto")};
`;

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
  pointer-events: ${(props) => (props.canclick ? "auto" : "none !important")};

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
  transition: height 0.4s ease-in-out;
  position: fixed;
  top: calc(9vh);
  display: flex;
  justify-content: end;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  background: #121212ea;
  background-image: none;
  backdrop-filter: blur(3px);
  height: ${(props) => (props.open ? "25vh" : 0)};
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-around;
  width:fit-content;
  padding:0 20px 0 0;
  margin: 0 10px 0 0;
  border-right:2px solid ;
  border-color:grey;
  border-radius:3%;
  


  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 16px;
    margin:10px 0;

  }
  

  & .about{
    pointer-events: ${(props) => (props.hide ? "none !important" : "auto")};
    
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.hide ? "none !important " : "flex")};

    font-size: 18px;
    transition: opacity 0.4s 100ms ease-in-out;

  }

  

  & .skills{
    pointer-events: ${(props) => (props.hide ? "none !important" : "auto")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.hide ? "none !important " : "flex")};

    font-size: 18px;
    transition: opacity 0.4s 200ms ease-in-out;
  }


  & .projects{
    pointer-events: ${(props) => (props.hide ? "none !important" : "auto")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.hide ? "none !important " : "flex")};

    font-size: 18px;
    transition: opacity 0.4s 300ms ease-in-out;

  }



  & .contact{
    pointer-events: ${(props) => (props.hide ? "none !important" : "auto")};

    opacity: ${(props) => (props.open ? 1 : 0)};
    display: ${(props) => (props.hide ? "none !important " : "flex")};
    font-size: 18px;
    transition: opacity 0.4s 400ms ease-in-out;
    

  }






  @media (max-width: 769px) {
    margin:0
    padding: 0;
  }

  @media (min-width: 769px) {
    ul{
      display:none;
    }

  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);

  const [clickable, setClickable] = useState(true);

  const [hide, setHide] = useState(true);

  return (
    <>
      <Nav>
        <Logo>ALOYSIUS TAN</Logo>
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
        <NavIcon
          canclick={clickable}
          onClick={() => {
            toggleNav(!toggle),
              setClickable(!clickable),
              setTimeout(() => {
                setClickable(clickable);
              }, 700),
              setHide(!hide);
          }}
        >
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay hidden={hide} open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link
              className="about"
              target="#"
              href="https://www.instagram.com/igor_dumencic/"
            >
              About
            </Link>
          </Item>
          <Item>
            <Link
              className="skills"
              target="#"
              href="https://www.behance.net/igordumencic"
            >
              Skills
            </Link>
          </Item>
          <Item>
            <Link
              className="projects"
              target="#"
              href="https://github.com/Igor178"
            >
              Projects
            </Link>
          </Item>
          <Item>
            <Link
              className="contact"
              target="#"
              href="https://github.com/Igor178"
            >
              Contact
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
