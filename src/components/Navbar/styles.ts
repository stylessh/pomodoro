import styled from "styled-components";

const StyledNavbar = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  margin: 1em 0;

  .logo {
    font-size: 1.5em;
    color: ${({ theme }) => theme.white};

    text-transform: lowercase;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  background: #1b2e36;

  margin: 2em 0;

  border-radius: 40px;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.8em;

    padding: 1em 1.5em;
    border-radius: 40px;

    font-weight: 700;

    &.active {
      background: ${({ theme }) => theme.accent};

      color: #1b2e36;
    }
  }
`;

export { StyledNavbar, StyledNavigation };
