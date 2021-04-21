import Link from "../../common/Link";
import { StyledNavbar, StyledNavigation } from "./styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1 className="logo">Pomodoro</h1>

      <StyledNavigation>
        <Link href="/">pomodoro</Link>
        <Link href="/short">short break</Link>
        <Link href="/long">long break</Link>
      </StyledNavigation>
    </StyledNavbar>
  );
};

export default Navbar;
