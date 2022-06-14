import logo from 'assets/images/logo.png';
import { Button } from 'components/core';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="Techanic" />
      </a>
      <Button color="primary">Login</Button>
    </header>
  );
};

export default Header;
