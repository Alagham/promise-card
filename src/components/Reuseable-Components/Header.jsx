import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const NavLinks = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      margin-left: 20px;

      a {
        font-size: 1rem;
        color: #555;
        transition: color 0.3s ease;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>PromiseCard</Logo>
      <NavLinks>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/create-card">Create Card</a>
          </li>
        </ul>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;
